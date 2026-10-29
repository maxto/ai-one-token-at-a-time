# Handoff

Closed: 2026-10-29 09:52 CET. Last operation: module-8 sources written and checked (subagents, Claude's arXiv and PDF check, Codex: two note fixes applied), not committed. HEAD verified before this update: fbebe62.

## Goal

The course is done for now, not closed: 10 modules, 86 lessons, live at https://maxto.github.io/ai-one-token-at-a-time/. It grows when a new topic is worth it, plus fixes for errors or outdated claims.

## State

- Worktree: `/home/maxto/projects/personal/ai-one-token-at-a-time`, branch `main`.
- 2026-10-28 update (see LOG.md): new lessons Computer-Use Agents (`#m5-computer-use`), Open-weight models (`#m2-open-weights`, includes "uncensored" models), Reward hacking (`#m6-reward-hacking`). Fixes in Context Window, AI Agents, Multi-Agent Systems, Agent Loops, Agent Harness.
- Checks run on 2026-10-28: `python3 scripts/lengths.py` ok, `npm test` ok, `npm run figs` ok and the new PNGs looked at. Text review of the new lessons and estimated study times done the same day (see LOG.md).
- Tests needed `--disable-gpu --disable-software-rasterizer --use-gl=swiftshader` for Chrome 150 under WSL (page screenshots timed out otherwise, also on the old HEAD). Now in `tests/e2e.mjs` and `tests/render-figs.mjs`.
- 2026-10-28: dark theme brightened for contrast, then dark-theme figures set to variant C after a Codex review: dark panel, raised lighter boxes, lighter small text (see LOG.md). Home cards stay lighter than the page. Light theme unchanged (pixel compare of all light figures).
- Advisor files for this round are in the gitignored `dist/advisor/` (scan, batch1, lessons, final): local only.
- 2026-10-28 evening, committed in 3469ff1 and pushed: optional `# Sources` block (one or two reference sources), shown in `#m2-llm`, `#m2-mixture-of-experts`, `#m2-open-weights`, with corrected wording in those three lessons (see LOG.md). Build, `lengths.py`, `npm test` ok. Check record in `docs/source-audit/m2.md`. Codex files `dist/advisor/sources-*.md` (local only).
- 2026-10-29, committed and pushed in 8ed6370: sources for the other six module-2 lessons, so all 9 lessons of module 2 have them, with wording corrections (see LOG.md). Pages deploy of 8ed6370 succeeded (verified 2026-10-29). Codex files `dist/advisor/m2-rest-*.md` (local only).
- 2026-10-29, committed and pushed in c8e55ab, Pages deploy succeeded (verified 2026-10-29): sources for all 9 lessons of module 1, three text fixes (top-k-top-p accuracy, embeddings "keywords", new temperature analogy) and a source-note fix. Record `docs/source-audit/m1.md` (new). Build, `lengths.py`, `npm test` ok on 2026-10-29. Codex files `dist/advisor/m1-*.md` (local only).
- 2026-10-29, module 6: sources for all 9 lessons, one text fix (quantization-aware training is a retraining, not training "from the start") and two source-note fixes, after Codex. Record `docs/source-audit/m6.md` (new). Build, `lengths.py`, `npm test` ok on 2026-10-29. Codex files `dist/advisor/m6-*.md` (local only). Committed and pushed in fbebe62, Pages deploy succeeded (verified 2026-10-29).
- 2026-10-29, module 8: sources for all 7 lessons, no lesson text change, two source-note fixes after Codex. Record `docs/source-audit/m8.md` (new). Build, `lengths.py`, `npm test` ok on 2026-10-29. Codex files `dist/advisor/m8-*.md` (local only). Uncommitted: the 7 lessons, `docs/source-audit/m8.md`, `LOG.md`, `HANDOFF.md`. Commit and push waiting for Max's go-ahead.
- Rule from 2026-10-29 (LOG.md): change text only for important errors on the general case, no caveats from edge cases. Italian written natively, not translated from English.

## Open items

- Sources for modules 3 to 10, module by module, same method (subagents, Claude WebSearch check, Codex review), filtered by the general-errors rule. Status: approved by Max on 2026-10-29. Done: 1, 2, 6, 8 (8 uncommitted). Next: 3, 4, 5, 7, 9, 10.

- Max reviews the new lessons online. Status: to check. Who: Max.
- Max studies the course himself. Status: ongoing since 2026-10-09.
- GitHub Actions warns that the Pages workflow actions run on a deprecated Node.js version (in `docs/ideas.md`). Status: to check.
- Tiny figure labels on phones: at the 420px minimum SVG width the 11.5px labels render at about 8.6px (Codex, 2026-10-28). Status: to check on a real phone. Who: Max, then Claude if a size change is needed.
- Dark search box placeholder: Codex proposed an explicit colour (`var(--muted)`, opacity 1, dark only). Max found it readable. Status: proposed, not decided.
- Rejected in the 2026-10-28 scan, kept here only as reasons not to redo the work: model release news, EU AI Act deadlines, agent payments as a lesson, semantic cache / provider fallback / A/B tests (possible examples later in Choosing a Model and Evals). Details in LOG.md.

## What comes next (elsewhere)

The next focus is AI applied to finance, as Macroasset content, not in this repo:
- First idea: posts for advisors and their clients on the pitfalls of using ChatGPT-like tools for analysis (privacy, made-up answers, outdated data, sycophancy). Modules 8 and 9 of this course are the source and the link for readers who want depth.
- Ideas go in `macroasset/brain/ideas/backlog.md`. If it grows into a series or a course, it belongs in `macroasset/academy`.
- The practical second course ("AI, one workflow at a time") is still on hold.

## Next step

Max decides on commit and push of module 8 (one commit with the notes). Then module 3, same method: three subagents, Claude's check on the web and the arXiv API, then Codex, filtered by the general-errors rule. Side sources still waiting from the module-2 audit: Cheng et al. was used in module 8. Lewis et al. (RAG) belongs to module 4 (RAG and knowledge), see `docs/source-audit/m2.md`.
