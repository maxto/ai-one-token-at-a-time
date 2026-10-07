// Render site/og.png (1200x630), the link-preview image: site/og-background.png
// (illustration made with an image generator, no text) plus the title as real text.
// Run via `npm run og` after changing the title or the background. Needs Chrome.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const site = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../site');
const bg = 'data:image/png;base64,' + fs.readFileSync(path.join(site, 'og-background.png')).toString('base64');
const html = `<!doctype html><html><head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Bricolage+Grotesque:opsz,wght@12..96,700&family=JetBrains+Mono:wght@500&display=swap">
<style>
  body { margin: 0; }
  .card { width: 1200px; height: 630px; box-sizing: border-box; padding: 0 0 0 72px; display: flex; flex-direction: column; justify-content: center;
    background: #f5f6fa url(${bg}) center / cover no-repeat; color: #161a23; font-family: "Atkinson Hyperlegible", sans-serif; }
  .mark { display: inline-grid; place-items: center; width: 64px; height: 64px; border-radius: 14px; background: #3b5bdb; color: #fff;
    font: 500 26px "JetBrains Mono", monospace; margin-bottom: 30px; }
  h1 { margin: 0; font: 700 74px/1.04 "Bricolage Grotesque", sans-serif; letter-spacing: -1px; max-width: 600px; }
  p { margin: 26px 0 0; font-size: 31px; line-height: 1.3; color: #464d5e; max-width: 560px; }
  .meta { margin-top: 34px; font: 500 21px "JetBrains Mono", monospace; color: #3b5bdb; letter-spacing: .5px; }
</style></head><body>
<div class="card">
  <div class="mark">AI</div>
  <h1>AI, one token<br>at a time</h1>
  <p>How generative AI really works, explained simply.</p>
  <div class="meta">FREE MINI COURSE · ENGLISH / ITALIANO</div>
</div></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: path.join(site, 'og.png'), clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('site/og.png written');
