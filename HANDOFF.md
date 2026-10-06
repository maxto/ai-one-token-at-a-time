# Handoff: 2026-10-06

## State

- Local repo, branch `main`, **1 commit** (`2050cc7`), clean. **No remote yet, nothing on GitHub.**
- Course complete: 7 modules, 56 lessons (IT + EN), one SVG diagram per lesson, 3-question quiz per module.
- `python3 scripts/build.py` → `dist/` (byte-identical to the published Artifact); `npm test` and `npm run figs` pass.
- Reading copy: private Artifact https://claude.ai/artifact/K3qRnyDmjK8FnEJ5zwou2E (version 2, with diagrams).
- History: content written 2026-10-04 by 7 agents (one per module), fact-checked (7 minor fixes), diagrams added; the scratchpad sources were wiped by a reboot and recovered from the Artifact on 2026-10-05.

## Waiting for the user's explicit go-ahead

Asked on 2026-10-05, no answer yet. Do nothing outward before a clear "ok":

1. **Create and push the public repo:** `gh repo create maxto/ai-one-token-at-a-time --public --source . --push`, description "A short bilingual (IT/EN) course on how generative AI works".
2. **Optional, GitHub Pages:** add `.github/workflows/pages.yml` (build with Python, deploy `dist/`) and enable Pages with source "GitHub Actions" → `https://maxto.github.io/ai-one-token-at-a-time/`. Then the Artifact is no longer needed.

Choices made by Claude, to confirm or change **before the push**:

- Commits use the GitHub noreply address (`3137038+maxto@users.noreply.github.com`, repo-local git config). Personal-data scan of all files: clean.
- Licences: MIT for code (`LICENSE`), CC BY 4.0 for content (`content/LICENSE.md`).
- `AGENTS.md` contains the private Artifact URL (access-controlled, harmless if public).

## Decisions already taken by the user

- Separate personal project, public GitHub repo, name `ai-one-token-at-a-time` (no book or product with that title found; the phrase is common, fine for this use).
- Purpose: the user's own study base on how AI works, not too technical; to reread, study and extend over time.
- Content stays general, no finance examples. Not in the brain.

## Ideas for later (not requested yet)

- New modules: image/video generation, choosing models and costs, data privacy.
- "Further reading" links per lesson (e.g. kept resources in `~/resources`, or the technical `ai-engineering-from-scratch` curriculum).
- Note: `~/projects/personal/ai-engineering-from-scratch` is a third-party clone (rohitg00); by the workspace rule it belongs in `~/resources/`. Only flagged to the user, not moved.

Delete this file once the items above are done or moved elsewhere.
