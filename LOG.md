# Log

Newest entry on top. Entries are added, never rewritten.

## 2026-10-28: dark-theme figures, variant C (Codex review)

**What was done.** Max found the dark figure panel of bd715f4 (variant A) made the figures look too dark. Tried variant B locally (panel = card colour, raised boxes, recessed soft areas): Max rejected the back-and-forth on the background and suggested keeping the dark panel with lighter inner graphics. Asked Codex as adversarial reviewer (`dist/advisor/theme-request.md`, `theme-answer.md`, images in `dist/advisor/theme/`, gitignored). Codex recommended C, implemented in `site/template.html`, dark theme only: figure panel `--fig-bg: #171a21` (kept), plain boxes `--fig-box: #353c4c` (raised above the panel), soft areas `--fig-soft: #333a49`, small figure text, muted lines, muted fills and the caption `--fig-muted: #ccd2de` (was muted `#a3aabb`), box borders `--line: #8d98b0`, module tint 28% (kept). New `--fig-ghost` for the faint silhouette in the Diffusion figure (`ellipse.fill-soft`). Light defaults point at the old values (`--surface`, `--chip`, `--muted`).

**Verified.** All 86 EN figures rendered in dark (scratch copy of render-figs), 8 from different modules and Reranking/Diffusion side by side in A, B and C looked at. Contrast computed by Codex (WCAG): `.t-xs` and `.t-sm` at least 4.9:1 on every fill in C; before, `.t-xs` on module tints went down to 3.2:1 (for example "query + chunk" in the Reranking figure), below AA. `npm test` ok. `npm run figs` then a pixel compare of all 172 light figure PNGs against the previous run: 0 differ. HEAD before this entry: bd715f4.

**Decisions.**
- Done (approved by Max): variant C. Rejected: B (panel back to card colour, Max did not want the background flipping again), A as is (inner graphics too dark, small text below AA on module tints).
- Done (approved by Max): home module cards stay lighter than the page (surface on bg). Rejected: darker cards like the figure panel, they would sit at about 1.07:1 against the page and blend in (Codex and Claude agree).
- Done: Diffusion silhouette `--fig-ghost: #8d98b0` in dark, not Codex's `#ccd2de`: with `#ccd2de` the step-2 shape became brighter than the step-3 shape and inverted the "image slowly emerges" progression. `#8d98b0` gives about 2.6:1 on the box, below the step-3 shape (3.1:1), and it is meant to be faint.
- Proposed, not decided: explicit dark placeholder colour for the search box (Codex). Max had found it readable. Kept in HANDOFF.
- Proposed, to check: tiny figure labels on phones (Codex: at the 420px minimum SVG width an 11.5px label renders at about 8.6px). Size, not colour. Kept in HANDOFF.

## 2026-10-28: more contrast in dark-theme figures

**What was done.** Max found the figures still flat in the dark theme. Cause: plain boxes are filled with the card colour, so only a thin border separated them, and module-tinted boxes mixed only 16% of the module colour. In `site/template.html`: new variables `--fig-bg` (light: `var(--surface)`, dark: `#171a21`, a darker panel behind the figure) and `--soft-mix` (light: 16%, dark: 28%, used by `--mc-soft`), and dark `--line` `#69738b` to `#7c869e`. `tests/render-figs.mjs` uses `--soft-mix` too. Light theme unchanged. Also pushed: ec9d391 (HANDOFF after the first dark theme push).

**Verified.** All 86 EN figures rendered in dark before and after (scratch copy of render-figs with `colorScheme: 'dark'`), 8 from different modules looked at side by side. `npm test` ok. `npm run figs` ok, light module 4 figures looked at, unchanged. HEAD before this entry: ec9d391.

**Decisions.**
- Done (approved by Max): fix contrast in CSS only, not by editing the 86 SVGs. Rejected: extra colours inside single figures (large review work, not needed after this change).
- Done: search box left as it is. Max checked it and it is readable.

## 2026-10-28: brighter dark theme

**What was done.** Max found the dark theme too dark, with no contrast: the top bar, the title tokens and the cards blended into the background. Raised the whole dark palette in `site/template.html` (both the `prefers-color-scheme` block and `[data-theme="dark"]`): bg `#10131a` to `#1c2029`, surface `#171b24` to `#262b37`, rule `#2a303d` to `#3e4657`, chip `#222734` to `#333a49`, accent-soft `#1d2440` to `#2c3768`, line `#4c5568` to `#69738b`, ink, ink-2, muted and accent lighter, good/warn/bad soft backgrounds lighter. `tests/e2e.mjs` checks the new dark body colour. Light theme unchanged.

**Verified.** Contrast computed with the WCAG formula: every text colour is at least 4.7:1 on every dark background it sits on (body text 10 to 15:1, accent-ink on accent 8.1:1). Dark screenshots before and after looked at (home, lesson, figure). `npm test` ok. HEAD before this entry: 6d251d8.

**Decisions.**
- Done (approved by Max): a lighter, "dimmed" dark theme instead of near-black. The problem was structure (surfaces and borders too close in tone), not only text contrast, which already passed AA. Small task, no advisor review.

## 2026-10-28: estimated reading and study time

**What was done.** `scripts/build.py` now counts the words of each module (all lesson sections plus the quiz, per language) and stores `time.read` and `time.study` in the course data. The home page shows the total under the lead ("about 2 hours of reading, 5-6 hours to study it with figures and quizzes"). The contents menu shows the study time next to each module (25 to 45 min, rounded to 5, tooltip "Estimated study time"). Also committed: the regenerated `09-open-weights.preview.svg` that the previous commit missed.

**Verified.** Build ok, `npm test` ok, home screenshots looked at (IT desktop, EN phone). HEAD before this entry: 19e7623.

**Decisions.**
- Done (approved by Max): times are computed at build time, never typed by hand, so they stay right when lessons are added. Shown on the home page (total) and in the contents menu (per module). Not per lesson: lessons are all 2 to 4 minutes, so it would add noise.
- Done: reading rate 238 words a minute, the average adult silent reading rate for English non-fiction in Brysbaert 2019 (Journal of Memory and Language 109, 104047, checked online). The same rate is used for Italian. Study time is our assumption, labelled "estimated": half the reading rate, plus 1 minute per figure and 2 minutes per quiz.

## 2026-10-28: text review of the new lessons

**What was done.** Codex (after /clear, fresh context) and Claude reviewed the text of commit 567ef7b independently, then merged the findings. Fixed: Open-weight models IT said "pesi aperti non vuol dire open source" while EN said "not necessarily" (found by Claude, missed by Codex), a missing "e" in a list, OSI caption wording. Reward hacking: clearer IT for special-casing, a comma splice in EN, missing subject. Computer-use agents: a comma splice, "a portata di mano", the one-liner no longer repeats "interface". Agent Harness: two colons in one sentence. Context Window IT: "possono pesare" was ambiguous. AI Agents IT: "un'email". Codex confirmed the merged fixes.

**Verified.** `python3 scripts/lengths.py` ok, `python3 scripts/build.py` ok, `npm test` ok. HEAD before this entry: 567ef7b.

**Decisions.** None new.

## 2026-10-28: topic scan, 3 new lessons, 6 lesson fixes

**What was done.** Scanned the 83 lessons against current topics (web searches on 2026-10-28). Codex (advisor) reviewed the proposal, then each batch of text, three rounds in total. Every factual claim was checked against a source opened during the session. Files: `dist/advisor/scan-*`, `batch1-*`, `lessons-*`, `final-*` (gitignored, local).

- New lessons: `05-agents-tool-use/09-computer-use` (Computer-Use Agents), `02-models-architectures/09-open-weights` (Open-weight models, with a paragraph on safeguard removal and "uncensored" tools), `06-training-fine-tuning/06-reward-hacking` (Reward hacking). Renumbered files, ids unchanged: handoffs 09→10, workflow-vs-agent 10→11, instruction-tuning 06→07, distillation 07→08, quantization 08→09.
- Fixes: Multi-Agent Systems no longer says every sub-agent has a "clean context" and every hand-off "loses information" (it contradicted the Handoffs fix of 2026-10-09). Agent Loops: the check must look at the result that matters, and the caption no longer equates a passed check with finished work. Context Window: context rot (Chroma 2025, 18 models), with position and distractors stated as possibilities. AI Agents: agents can start from a schedule or an event and work in the background, and starting automatically does not grant extra permissions. Agent Harness: skills named (folders with SKILL.md and optional resources). README: 86 lessons.
- Tests: Chrome 150 under WSL timed out on page screenshots, also on the old HEAD (checked on a clean copy). Added `--disable-gpu --disable-software-rasterizer --use-gl=swiftshader` to the launches in `tests/e2e.mjs` and `tests/render-figs.mjs`. `--disable-gpu` alone was flaky.

**Verified.** `python3 scripts/lengths.py` ok, `python3 scripts/build.py` ok (86 lessons), `npm test` ok twice, `npm run figs` ok and the six new PNGs looked at.

**Main sources.** Chroma Context Rot (2025), agentskills.io, LangChain ambient agents, GitHub cloud agent docs, OpenAI Agents SDK handoffs, Claude Code subagents docs, Anthropic computer use tool docs, Playwright MCP, OSWorld (arXiv 2404.07972), OSI OSAID 1.0 and its 2024-10-28 press release, Llama 3 Community License, NTIA open model weights report, UK AISI blog (2025-08-29), Qi et al. (arXiv 2310.03693), Arditi et al. (arXiv 2406.11717), The Record / Cato on "uncensored" tools (2025), DeepMind specification gaming (2020), DeepSeek-R1 (arXiv 2501.12948), Baker et al. (arXiv 2503.11926), Claude 3.7 Sonnet system card (special-casing tests, read in the PDF), Thaman RHB (arXiv 2605.02964).

**Decisions.**
- Done: every factual claim is checked online against a source opened in the session, the advisor's claims included, primary sources first, and a claim that cannot be confirmed stays out. Replaces the old rule that only "uncertain" claims were checked (AGENTS.md, Rules). Asked by Max on 2026-10-28.
- Done: "uncensored" models go inside the Open-weight models lesson, not in a lesson of their own, and only as mechanism and trade-off, no how-to. The lesson keeps two facts apart: studies weakening safeguards by changing weights, and criminal tools sold as "uncensored" that, in the 2025 report, use existing models with modified prompts.
- Done: Reward hacking sits in module 6 after DPO, and bridges RLHF to rewards from automatic checks. It states the mechanism, without study percentages.
- Done: rejected for this course: model release news (not the course's job), EU AI Act and Digital Omnibus deadlines (law, fast-moving, outside "how it works"), agent payments as a topic (the permission lessons already cover the mechanism), semantic cache / provider fallback / A/B tests as lessons (maybe later as examples in Choosing a Model and Evals).
- Done: publish without a separate review round. Max asked on 2026-10-28 to take the work to the end with Codex, push, and send him the link to review online.

**Open items moved.** None closed or moved elsewhere. The old HANDOFF.md items (Max studies the course, AI-finance focus elsewhere) are kept in the new HANDOFF.md. The Node.js warning on the Pages workflow is copied there from `docs/ideas.md`.
