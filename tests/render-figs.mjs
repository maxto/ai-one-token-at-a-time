// Render every lesson figure to tests/output/figs/<module>-<lesson>-<lang>.png (light theme).
// Run via `npm run figs` (builds tests/output/course.json first).
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(root, 'tests/output/figs');
const tpl = fs.readFileSync(path.join(root, 'site/template.html'), 'utf8');
const style = tpl.match(/<style>[\s\S]*?<\/style>/)[0];
const fonts = tpl.match(/<link rel="stylesheet"[^>]*>/)[0];
const course = JSON.parse(fs.readFileSync(path.join(root, 'tests/output/course.json'), 'utf8'));
const only = process.argv[2]; // optional module id, e.g. m3
fs.mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome' });
const page = await browser.newPage({ viewport: { width: 640, height: 600 }, deviceScaleFactor: 1.5 });
for (const [mi, m] of course.entries()) {
  if (only && m.id !== only) continue;
  const n = mi + 1;
  const vars = `--mc: var(--m${n}); --mc-soft: color-mix(in srgb, var(--m${n}) 16%, var(--surface)); --mc-text: color-mix(in srgb, var(--m${n}) 78%, var(--ink))`;
  for (const l of m.lessons) for (const lang of ['it', 'en']) {
    await page.setContent(`<!doctype html><html lang="${lang}"><head><meta charset="utf-8">${fonts}${style}</head><body style="padding:16px;margin:0"><figure class="fig" style="${vars}; margin:0"><div class="fig-scroll">${l.fig.svg}</div><figcaption>${l.fig.caption[lang]}</figcaption></figure></body></html>`, { waitUntil: 'networkidle' });
    await (await page.$('figure')).screenshot({ path: path.join(out, `${m.id}-${l.id}-${lang}.png`) });
  }
}
await browser.close();
console.log(`figures rendered to ${path.relative(root, out)}/`);
