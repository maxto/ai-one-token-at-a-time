# Figure guide

Every lesson has one simple diagram, `content/NN-module/NN-id.svg`. The build checks it and inlines it in the page. Colours and fonts come from the page, so the figure works in light and dark themes and in both languages.

## What to draw

- **The mechanism, not its name.** Show what moves, what is compared, what changes. Examples:
  - tokens: a sentence cut into chips with numbers under them.
  - temperature: the same probability bars, flat vs peaked.
  - RAG: query → search → top chunks → prompt → answer.
  - LoRA: big frozen matrix + two thin trainable ones.
- **Comparisons draw the difference** (before/after, A vs B side by side, the one arrow that changes).
- **Simple:** 3–8 shapes is typical. Labels of 1–3 words. Explanations go in the caption (the lesson's "Figure caption" section), not in the drawing.
- **Label arrows** when the meaning is not obvious.
- Everyday examples only, no finance.

## SVG rules (enforced by `scripts/build.py`)

- Root: `<svg viewBox="0 0 560 H" role="img" aria-label="…">` with H between 120 and 320. No width/height. The page replaces `aria-label` with the caption in the active language.
- Elements: `svg, g, defs, marker, rect, circle, ellipse, line, polyline, polygon, path, text, tspan, title`.
- **No colours or styles in the markup:** no `style`, `fill="#…"`, `stroke="#…"`, `font-*`, `<style>`, `<script>`, `<foreignObject>`, `<image>`, gradients. Colour comes only from classes:
  - Shapes: `box` (surface + border), `box-soft` (light grey), `box-accent` (accent, for the ONE element that matters), `box-mod` (module colour), `fill-accent`, `fill-mod`, `fill-muted`, `fill-ink`, `fill-soft`.
  - Lines: `ln`, `ln-muted`, `ln-accent`, `ln-mod`, plus `dash`. Only `stroke-width="2"` or `"3"` may be added.
  - Text: `t` (15px), `t-sm` (13px), `t-xs` (11.5px, the floor), `t-mono`, `t-b`, `t-accent`, `t-mod`, `t-on` (on solid fills), `mid` / `end` (anchor).
- Attributes: x, y, x1, y1, x2, y2, cx, cy, r, rx, ry, width, height, d, points, transform, viewBox, id, class, role, aria-label, marker-end, marker-start, markerWidth, markerHeight, refX, refY, orient, markerUnits, stroke-width, opacity, dy, dx, text-anchor.
- **Arrowheads:** marker ids end with the lesson id: `ah-<id>` (class `fill-ink`), optionally `ah2-<id>` (class `fill-accent`):
  `<defs><marker id="ah-tokens" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fill-ink"/></marker></defs>`
- **Bilingual text:** text that differs between languages appears twice at the same position, `<text class="t it" …>Domanda</text><text class="t en" …>Question</text>`. Text identical in both languages (numbers, symbols, terms like "token", "LoRA") is written once. Size labels for the longer language.
- **Legibility:** shown at up to 560px wide, smaller on phones. At least 8px between labels and shape edges, nothing outside the viewBox, nothing overlapping. Align to a grid. Text centred in a box: baseline ≈ box y + height/2 + 5.
- One element per line in the file is fine (the build joins lines), but never break a line inside a `<text>`.

## Check

`npm run figs` renders every figure to `tests/output/figs/` (light theme, both languages). Look at the PNGs and fix overlaps, clipped text or unclear drawings.
