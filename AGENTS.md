# AI, one token at a time: agent instructions

A bilingual (IT/EN) course on how generative AI works, for the owner's own study first. Medium-high level, not engineering. Public repo.

## Layout

- `content/NN-module/` — `_module.md` (titles, intro, quiz) and lessons `NN-id.md` + `NN-id.svg`. `NN-id.preview.svg` is generated (GitHub preview): never edit it.
- `site/template.html` — the page (CSS, UI strings, JS). The build replaces `/*__COURSE_DATA__*/` with the course data.
- `scripts/build.py` — parses and validates `content/`, writes `dist/index.html`, `dist/artifact.html` and the preview SVGs. No dependencies.
- `tests/e2e.mjs` (`npm test`), `tests/render-figs.mjs` (`npm run figs`) — headless Chrome via `playwright-core`; set `CHROME_PATH` if Chrome is not at `/usr/bin/google-chrome`.
- `docs/writing-guide.md`, `docs/figure-guide.md` — the content rules. Read both before writing or changing a lesson.

## Rules

- Content stays general: no finance examples (see the writing guide).
- IT and EN always say the same thing; change both together.
- Never rename an existing lesson or module `id`: it is in page URLs and in readers' saved progress.
- After any change: `npm test`; after a figure change also `npm run figs` and look at the PNGs.
- Run `python3 scripts/build.py` and commit the regenerated `*.preview.svg` files with the change. `dist/` is not committed.

## Publishing

- **Private Artifact** (owner's reading copy): https://claude.ai/artifact/K3qRnyDmjK8FnEJ5zwou2E. Republish `dist/artifact.html` to that URL after content changes.
- **GitHub Pages:** https://maxto.github.io/ai-one-token-at-a-time/, deployed by `.github/workflows/pages.yml` on every push to `main`.
- **GitHub:** `github.com/maxto/ai-one-token-at-a-time` (public). Commits use the GitHub noreply address set in this repo's git config. Pushing needs the owner's go-ahead.
