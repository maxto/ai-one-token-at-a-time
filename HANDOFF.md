# Handoff

Closed: 2026-10-28 16:01 CET. Last operation: topic scan and update (3 new lessons, 6 lesson fixes), committed and pushed. HEAD verified before this update: 908ef1a (the commit that includes this file comes after it).

## Goal

The course is done for now, not closed: 10 modules, 86 lessons, live at https://maxto.github.io/ai-one-token-at-a-time/. It grows when a new topic is worth it, plus fixes for errors or outdated claims.

## State

- Worktree: `/home/maxto/projects/personal/ai-one-token-at-a-time`, branch `main`.
- 2026-10-28 update (see LOG.md): new lessons Computer-Use Agents (`#m5-computer-use`), Open-weight models (`#m2-open-weights`, includes "uncensored" models), Reward hacking (`#m6-reward-hacking`). Fixes in Context Window, AI Agents, Multi-Agent Systems, Agent Loops, Agent Harness.
- Checks run on 2026-10-28: `python3 scripts/lengths.py` ok, `npm test` ok, `npm run figs` ok and the new PNGs looked at.
- Tests needed `--disable-gpu --disable-software-rasterizer --use-gl=swiftshader` for Chrome 150 under WSL (page screenshots timed out otherwise, also on the old HEAD). Now in `tests/e2e.mjs` and `tests/render-figs.mjs`.
- Advisor files for this round are in the gitignored `dist/advisor/` (scan, batch1, lessons, final): local only.

## Open items

- Max reviews the new lessons online. Status: to check. Who: Max.
- Max studies the course himself. Status: ongoing since 2026-10-09.
- GitHub Actions warns that the Pages workflow actions run on a deprecated Node.js version (in `docs/ideas.md`). Status: to check.
- Rejected in the 2026-10-28 scan, kept here only as reasons not to redo the work: model release news, EU AI Act deadlines, agent payments as a lesson, semantic cache / provider fallback / A/B tests (possible examples later in Choosing a Model and Evals). Details in LOG.md.

## What comes next (elsewhere)

The next focus is AI applied to finance, as Macroasset content, not in this repo:
- First idea: posts for advisors and their clients on the pitfalls of using ChatGPT-like tools for analysis (privacy, made-up answers, outdated data, sycophancy). Modules 8 and 9 of this course are the source and the link for readers who want depth.
- Ideas go in `macroasset/brain/ideas/backlog.md`. If it grows into a series or a course, it belongs in `macroasset/academy`.
- The practical second course ("AI, one workflow at a time") is still on hold.

## Next step

Apply any corrections Max sends after reading the three new lessons online.
