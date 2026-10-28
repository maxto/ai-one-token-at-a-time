# Handoff

Closed: 2026-10-28 22:53 CET. Last operation: optional lesson sources (pilot on three module-2 lessons) and wording corrections from the source check, after two Codex reviews. Not committed yet. HEAD verified before this update: 3723d93.

## Goal

The course is done for now, not closed: 10 modules, 86 lessons, live at https://maxto.github.io/ai-one-token-at-a-time/. It grows when a new topic is worth it, plus fixes for errors or outdated claims.

## State

- Worktree: `/home/maxto/projects/personal/ai-one-token-at-a-time`, branch `main`.
- 2026-10-28 update (see LOG.md): new lessons Computer-Use Agents (`#m5-computer-use`), Open-weight models (`#m2-open-weights`, includes "uncensored" models), Reward hacking (`#m6-reward-hacking`). Fixes in Context Window, AI Agents, Multi-Agent Systems, Agent Loops, Agent Harness.
- Checks run on 2026-10-28: `python3 scripts/lengths.py` ok, `npm test` ok, `npm run figs` ok and the new PNGs looked at. Text review of the new lessons and estimated study times done the same day (see LOG.md).
- Tests needed `--disable-gpu --disable-software-rasterizer --use-gl=swiftshader` for Chrome 150 under WSL (page screenshots timed out otherwise, also on the old HEAD). Now in `tests/e2e.mjs` and `tests/render-figs.mjs`.
- 2026-10-28: dark theme brightened for contrast, then dark-theme figures set to variant C after a Codex review: dark panel, raised lighter boxes, lighter small text (see LOG.md). Home cards stay lighter than the page. Light theme unchanged (pixel compare of all light figures).
- Advisor files for this round are in the gitignored `dist/advisor/` (scan, batch1, lessons, final): local only.
- 2026-10-28 evening, uncommitted: optional `# Sources` block (one or two reference sources), shown in `#m2-llm`, `#m2-mixture-of-experts`, `#m2-open-weights`, with corrected wording in those three lessons (see LOG.md). Build, `lengths.py`, `npm test` ok. Check record in `docs/source-audit/m2.md`. Codex files `dist/advisor/sources-*.md` (local only).

## Open items

- Commit of the sources pilot. Status: waiting for Max's go-ahead, then push (also needs his go-ahead).
- Sources for other lessons: optional, added when a lesson is touched or a good reference is at hand. Side-claim sources already checked and waiting for their lesson: hallucination survey (Ji et al.) for Hallucinations, InstructGPT for RLHF or Instruction tuning, Attention Is All You Need for Attention (details in `docs/source-audit/m2.md`). Status: proposed, not decided.
- Local server on port 8765 serving `dist/` for Max's review (this session only). Status: running.

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

Commit the sources pilot once Max gives the go-ahead. Then apply any corrections Max sends after reading the lessons online.
