"""Build the course from content/ into dist/.

Usage: python3 scripts/build.py [--json out.json]

Reads every module folder in content/ (NN-slug/), its _module.md (titles,
intro, quiz) and its lessons (NN-id.md + NN-id.svg), validates them, and
writes:
  dist/index.html     standalone page (GitHub Pages, open locally)
  content/**/NN-id.preview.svg  light-theme, Italian copy of each figure for GitHub
"""
import json, re, sys, pathlib
import xml.etree.ElementTree as ET

ROOT = pathlib.Path(__file__).resolve().parent.parent
CONTENT, SITE, DIST = ROOT / "content", ROOT / "site", ROOT / "dist"

LESSON_SECTIONS = {
    "it": ["In una frase", "Approfondimento", "Esempio for dummies", "Errore comune", "Didascalia della figura"],
    "en": ["One line", "Deep dive", "For dummies", "Common mistake", "Figure caption"],
}
LANGS = ("it", "en")

# --- figure rules (see docs/figure-guide.md) ---
EL = {"svg", "g", "defs", "marker", "rect", "circle", "ellipse", "line", "polyline", "polygon", "path", "text", "tspan", "title"}
AT = {"x", "y", "x1", "y1", "x2", "y2", "cx", "cy", "r", "rx", "ry", "width", "height", "d", "points", "transform", "viewBox", "id", "class",
      "role", "aria-label", "marker-end", "marker-start", "markerWidth", "markerHeight", "refX", "refY", "orient", "markerUnits",
      "stroke-width", "opacity", "dy", "dx", "text-anchor", "xmlns"}
CL = {"box", "box-soft", "box-accent", "box-mod", "fill-accent", "fill-mod", "fill-muted", "fill-ink", "fill-soft", "ln", "ln-muted",
      "ln-accent", "ln-mod", "dash", "t", "t-sm", "t-xs", "t-mono", "t-b", "t-accent", "t-mod", "t-on", "mid", "end", "it", "en"}

errors = []


def err(where, msg):
    errors.append(f"{where}: {msg}")


def split_front(text, where):
    m = re.match(r"---\n(.*?)\n---\n(.*)", text, re.S)
    if not m:
        err(where, "missing front matter"); return {}, text
    meta = {}
    for line in m.group(1).splitlines():
        k, _, v = line.partition(":")
        meta[k.strip()] = v.strip()
    return meta, m.group(2)


def sections(body, level):
    """Split markdown body on headings of exactly `level` hashes -> {title: text}."""
    out, cur, buf = {}, None, []
    pat = re.compile(r"^" + "#" * level + r" (.+)$")
    for line in body.splitlines():
        mm = pat.match(line)
        if mm:
            if cur is not None: out[cur] = "\n".join(buf).strip()
            cur, buf = mm.group(1).strip(), []
        elif cur is not None:
            buf.append(line)
    if cur is not None: out[cur] = "\n".join(buf).strip()
    return out


def paras(text):
    return [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]


def one_para(text, where):
    ps = paras(text)
    if len(ps) != 1: err(where, f"expected one paragraph, got {len(ps)}")
    return ps[0] if ps else ""


def check_svg(svg, lid, where):
    try:
        root = ET.fromstring(svg)
    except ET.ParseError as e:
        err(where, f"SVG XML {e}"); return
    tag = lambda e: e.tag.split("}")[-1]
    vb = root.get("viewBox", "").split()
    if tag(root) != "svg" or len(vb) != 4 or vb[:3] != ["0", "0", "560"] or not 120 <= float(vb[3]) <= 320:
        err(where, f"SVG root/viewBox {vb}")
    if root.get("width") or root.get("height"): err(where, "SVG has width/height")
    nit = nen = 0
    for e in root.iter():
        t = tag(e)
        if t not in EL: err(where, f"SVG element <{t}>")
        for a, v in e.attrib.items():
            a = a.split("}")[-1]
            if a not in AT: err(where, f"SVG attribute {a} on <{t}>")
            if a == "stroke-width" and v not in ("2", "3"): err(where, f"SVG stroke-width {v}")
        cls = set((e.get("class") or "").split())
        if cls - CL: err(where, f"SVG classes {cls - CL}")
        nit += "it" in cls; nen += "en" in cls
        if t == "marker" and not (e.get("id") or "").endswith(lid): err(where, f"marker id {e.get('id')}")
    if nit != nen: err(where, f"SVG it/en text count {nit}/{nen}")


def parse_quiz(text, where):
    quiz = []
    for num, block in sections(text, 2).items():
        q = {"q": {}, "options": {}, "answer": None, "explain": {}}
        per = sections(block, 3)
        for lg in LANGS:
            part = per.get(lg.upper())
            if part is None: err(f"{where} quiz {num}", f"missing ### {lg.upper()}"); continue
            lines = part.splitlines()
            opts = [l for l in lines if re.match(r"- \[[ x]\] ", l)]
            q["options"][lg] = [l[6:].strip() for l in opts]
            right = [i for i, l in enumerate(opts) if l.startswith("- [x]")]
            if len(opts) != 3 or len(right) != 1: err(f"{where} quiz {num} {lg}", "need 3 options, exactly one [x]")
            elif q["answer"] is None: q["answer"] = right[0]
            elif q["answer"] != right[0]: err(f"{where} quiz {num}", "IT and EN mark different answers")
            q["explain"][lg] = " ".join(l[2:].strip() for l in lines if l.startswith("> "))
            q["q"][lg] = " ".join(l.strip() for l in lines if l.strip() and not l.startswith(("- [", "> ")))
            if not q["q"][lg] or not q["explain"][lg]: err(f"{where} quiz {num} {lg}", "missing question or explanation")
        quiz.append(q)
    if len(quiz) != 3: err(where, f"{len(quiz)} quiz questions, expected 3")
    return quiz


def load():
    course = []
    for mdir in sorted(p for p in CONTENT.iterdir() if p.is_dir() and re.match(r"\d\d-", p.name)):
        mf = mdir / "_module.md"
        meta, body = split_front(mf.read_text(), mf.name)
        top = sections(body, 1)
        mod = {"id": meta.get("id", ""),
               "title": {lg: meta.get(f"title.{lg}", "") for lg in LANGS},
               "intro": {lg: one_para(top.get(lg.upper(), ""), f"{mdir.name}/_module.md {lg}") for lg in LANGS},
               "lessons": [],
               "quiz": parse_quiz(top.get("Quiz", ""), f"{mdir.name}/_module.md")}
        ids = set()
        for lf in sorted(mdir.glob("[0-9][0-9]-*.md")):
            where = f"{mdir.name}/{lf.name}"
            meta, body = split_front(lf.read_text(), where)
            lid = meta.get("id", "")
            if lf.stem[3:] != lid or not re.fullmatch(r"[a-z0-9-]+", lid) or lid in ids: err(where, f"bad id {lid!r} (must match file name)")
            ids.add(lid)
            les = {"id": lid, "title": {lg: meta.get(f"title.{lg}", "") for lg in LANGS},
                   "oneLiner": {}, "deep": {}, "dummy": {}, "mistake": {}, "fig": {"svg": "", "caption": {}}}
            top = sections(body, 1)
            for lg in LANGS:
                sec = sections(top.get(lg.upper(), ""), 2)
                names = LESSON_SECTIONS[lg]
                missing = [n for n in names if n not in sec]
                if missing: err(where, f"{lg}: missing sections {missing}"); continue
                les["oneLiner"][lg] = one_para(sec[names[0]], f"{where} {lg}")
                les["deep"][lg] = paras(sec[names[1]])
                les["dummy"][lg] = one_para(sec[names[2]], f"{where} {lg}")
                les["mistake"][lg] = one_para(sec[names[3]], f"{where} {lg}")
                les["fig"]["caption"][lg] = one_para(sec[names[4]], f"{where} {lg}")
                if not 2 <= len(les["deep"][lg]) <= 3: err(where, f"{lg}: deep dive needs 2-3 paragraphs")
            for lg in LANGS:
                if not les["title"][lg]: err(where, f"missing title.{lg}")
            sf = lf.with_suffix(".svg")
            if not sf.exists(): err(where, "missing figure .svg")
            else:
                les["fig"]["svg"] = "".join(sf.read_text().splitlines())
                check_svg(les["fig"]["svg"], lid, sf.name)
            mod["lessons"].append(les)
        if not mod["lessons"]: err(mdir.name, "no lessons")
        course.append(mod)
    return course


PREVIEW_CSS = """
text{font-family:system-ui,-apple-system,"Segoe UI",sans-serif}.en{display:none}
.box{fill:#fff;stroke:#aeb6c6;stroke-width:1.5}.box-soft{fill:#eef0f5}.box-accent{fill:#edf2ff;stroke:#3b5bdb;stroke-width:1.5}
.box-mod{fill:MODSOFT;stroke:MOD;stroke-width:1.5}.fill-accent{fill:#3b5bdb}.fill-mod{fill:MOD}.fill-muted{fill:#6f7689}.fill-ink{fill:#464d5e}.fill-soft{fill:#eef0f5}
.ln,.ln-muted,.ln-accent,.ln-mod{fill:none}.ln{stroke:#464d5e;stroke-width:1.5}.ln-muted{stroke:#6f7689;stroke-width:1.5}.ln-accent{stroke:#3b5bdb;stroke-width:2}.ln-mod{stroke:MOD;stroke-width:2}
.dash{stroke-dasharray:5 4}.t{font-size:15px;fill:#161a23}.t-sm{font-size:13px;fill:#464d5e}.t-xs{font-size:11.5px;fill:#6f7689}
.t-mono{font-family:ui-monospace,Consolas,monospace}.t-b{font-weight:700}.t-accent{fill:#3b5bdb}.t-mod{fill:MOD}.t-on{fill:#fff}.mid{text-anchor:middle}.end{text-anchor:end}
"""
MOD_COLORS = ["#4263eb", "#ae3ec9", "#1098ad", "#37b24d", "#f76707", "#d6336c", "#868e96", "#7048e8", "#0ca678", "#e03131"]  # same as --m1..--m10 in site/template.html


def write_previews(course):
    for mi, (mod, mdir) in enumerate(zip(course, sorted(p for p in CONTENT.iterdir() if p.is_dir() and re.match(r"\d\d-", p.name)))):
        col = MOD_COLORS[mi % len(MOD_COLORS)]
        soft = "#" + "".join(f"{round(int(col[i:i+2], 16) * .16 + 255 * .84):02x}" for i in (1, 3, 5))
        css = PREVIEW_CSS.replace("MODSOFT", soft).replace("MOD", col)
        for li, les in enumerate(mod["lessons"], 1):
            svg = les["fig"]["svg"].replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ', 1)
            svg = re.sub(r"(<svg[^>]*>)", lambda m: m.group(1) + f'<rect width="100%" height="100%" fill="#fff"/><style>{css}</style>', svg, count=1)
            (mdir / f"{li:02d}-{les['id']}.preview.svg").write_text(svg + "\n")


def main():
    course = load()
    if errors:
        print("\n".join(errors)); sys.exit(1)
    if "--json" in sys.argv:
        pathlib.Path(sys.argv[sys.argv.index("--json") + 1]).write_text(json.dumps(course, ensure_ascii=False, indent=1))
    data = json.dumps(course, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    page = (SITE / "template.html").read_text().replace("/*__COURSE_DATA__*/", data)
    DIST.mkdir(exist_ok=True)
    (DIST / "index.html").write_text('<!doctype html>\n<html lang="it">\n<head>\n<meta charset="utf-8">\n'
                                     '<meta name="viewport" content="width=device-width,initial-scale=1">\n'
                                     '</head>\n<body style="margin:0">\n' + page + '\n</body>\n</html>\n')
    write_previews(course)
    n = sum(len(m["lessons"]) for m in course)
    print(f"ok: {len(course)} modules, {n} lessons, {len(page) // 1024} KB -> dist/")


if __name__ == "__main__":
    main()
