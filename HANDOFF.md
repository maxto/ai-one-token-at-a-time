# Handoff

Closed: 2026-11-15 13:08 CET. Last operation: two new module-7 lessons (Continuous batching, Speculative decoding) committed in e74eae8 and pushed on Max's go-ahead, Pages deploy verified. HEAD verified before this update: e74eae8.

## Goal

The course is done for now, not closed: 10 modules, 88 lessons, live at https://maxto.github.io/ai-one-token-at-a-time/. It grows when a new topic is worth it, plus fixes for errors or outdated claims.

## State

- Worktree: `/home/maxto/projects/personal/ai-one-token-at-a-time`, branch `main`.
- 2026-11-15, committed in e74eae8 and pushed, Pages deploy succeeded (verified 2026-11-15): new lessons `#m7-batching` and `#m7-speculative-decoding` after KV Cache, module-7 files renumbered 05..11 (ids unchanged), README 88 lessons. Ideas from the resources session (Pachaar serving roadmap), Codex review applied. Build, `lengths.py`, `npm test` ok, `npm run figs` ok with light-theme PNGs looked at. Check record in `docs/source-audit/m7.md`. Details and decisions in LOG.md.
- Sources: every lesson has a `# Sources` block, with a check record per module in `docs/source-audit/` (m1 to m10). Work of 2026-10-28 to 2026-10-30, details in LOG.md.
- Rule from 2026-10-29 (LOG.md): change text only for important errors on the general case, no caveats from edge cases. Italian written natively, not translated from English.
- Tests need `--disable-gpu --disable-software-rasterizer --use-gl=swiftshader` for Chrome under WSL (already in `tests/e2e.mjs` and `tests/render-figs.mjs`).
- Advisor files are in the gitignored `dist/advisor/` (local only), the latest `m7-new-request.md` and `m7-new-answer.md`.

## Open items

- Max reviews the two new lessons online (Italian text, figures, also in the dark theme and on the phone, not checked by Claude). Status: to check. Who: Max.
- Max reviews the lessons added on 2026-10-28 online. Status: to check. Who: Max.
- Max studies the course himself. Status: ongoing since 2026-10-09.
- GitHub Actions warns that the Pages workflow actions run on a deprecated Node.js version (in `docs/ideas.md`). Status: to check.
- Tiny figure labels on phones: at the 420px minimum SVG width the 11.5px labels render at about 8.6px (Codex, 2026-10-28). Status: to check on a real phone. Who: Max, then Claude if a size change is needed.
- Dark search box placeholder: Codex proposed an explicit colour (`var(--muted)`, opacity 1, dark only). Max found it readable. Status: proposed, not decided.
- Progress sync across devices (export/import, sync link): idea in `docs/ideas.md` since 2026-11-15. Status: not requested, Max decides.
- Rejected, kept here only as reasons not to redo the work: model release news, EU AI Act deadlines, agent payments as a lesson, semantic cache / provider fallback / A/B tests (2026-10-28 scan). Second sources for existing lessons from the serving roadmap, and "output tokens cost more because of decoding" (2026-11-15). Details in LOG.md.

## What comes next (elsewhere)

The next focus is AI applied to finance, as Macroasset content, not in this repo:
- First idea: posts for advisors and their clients on the pitfalls of using ChatGPT-like tools for analysis (privacy, made-up answers, outdated data, sycophancy). Modules 8 and 9 of this course are the source and the link for readers who want depth.
- Ideas go in `macroasset/brain/ideas/backlog.md`. If it grows into a series or a course, it belongs in `macroasset/academy`.
- The practical second course ("AI, one workflow at a time") is still on hold.

## Next step

Max reads `#m7-batching` and `#m7-speculative-decoding` online and reports anything to change. Otherwise, Max's choice among the open items above.
