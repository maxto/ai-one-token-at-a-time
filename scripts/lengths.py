"""Check lesson section lengths against docs/writing-guide.md.

Usage: python3 scripts/lengths.py [content/NN-module ...]   (default: all modules)
Prints one line per section outside its range; exits 1 if any.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
# section heading (IT, EN) -> (min words, max words); one line is checked as a single sentence
LIMITS = {
    ("In una frase", "One line"): (1, 25),
    ("Approfondimento", "Deep dive"): (110, 180),
    ("Nella vita di tutti i giorni", "In everyday life"): (50, 90),
    ("Errore comune", "Common mistake"): (25, 50),
}
NOTE_MAX = 35  # words in one source note
SINGLE = ("In una frase", "One line", "Didascalia della figura", "Figure caption")


def words(text):
    return len(re.findall(r"\S+", re.sub(r"\*\*", "", text)))


def check(path):
    bad = []
    lang, sec, buf = None, None, {}
    for line in path.read_text().splitlines():
        if line.startswith("# "): lang, sec = line[2:].strip(), None
        elif lang == "Sources":  # source records: only the translated notes are prose
            mm = re.match(r"- Note\.(it|en): (.+)$", line)
            if mm: buf[("Sources", f"note {mm.group(1)}")] = buf.get(("Sources", f"note {mm.group(1)}"), []) + [mm.group(2)]
        elif line.startswith("## "): sec = line[3:].strip(); buf[(lang, sec)] = []
        elif sec and line.strip(): buf[(lang, sec)].append(line.strip())
    for lg in ("it", "en"):
        for note in buf.pop(("Sources", f"note {lg}"), []):
            if words(note) > NOTE_MAX: bad.append(f"{path.relative_to(ROOT)} [Sources] note {lg}: {words(note)} words, want at most {NOTE_MAX}")
            if ";" in note or "—" in note: bad.append(f"{path.relative_to(ROOT)} [Sources] note {lg}: semicolon or em-dash")
    for (lg, s), lines in buf.items():
        text = " ".join(lines)
        for names, (lo, hi) in LIMITS.items():
            if s in names and not lo <= words(text) <= hi:
                bad.append(f"{path.relative_to(ROOT)} [{lg}] {s}: {words(text)} words, want {lo}-{hi}")
        if s in SINGLE and len(re.findall(r"[.!?](\s|$)", text)) > 1:
            bad.append(f"{path.relative_to(ROOT)} [{lg}] {s}: more than one sentence")
        if ";" in text or "—" in text:
            bad.append(f"{path.relative_to(ROOT)} [{lg}] {s}: semicolon or em-dash")
    return bad


dirs = [pathlib.Path(a) for a in sys.argv[1:]] or sorted((ROOT / "content").glob("[0-9][0-9]-*"))
problems = [p for d in dirs for f in sorted(d.glob("[0-9][0-9]-*.md")) for p in check(f.resolve())]
print("\n".join(problems) or "lengths ok")
sys.exit(1 if problems else 0)
