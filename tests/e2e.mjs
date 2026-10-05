// End-to-end check of dist/index.html in headless Chrome: no console errors, no horizontal
// overflow (desktop and phone), progress, language switch, quiz feedback, search.
// Screenshots go to tests/output/. Run via `npm test`.
import { chromium } from 'playwright-core';
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const out = path.join(root, 'tests/output');
fs.mkdirSync(out, { recursive: true });
const url = 'file://' + path.join(root, 'dist/index.html');
const failures = [];
const expect = (ok, msg) => { if (!ok) failures.push(msg); };

const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || '/usr/bin/google-chrome' });
async function run(opts, name, fn) {
  const ctx = await browser.newContext(opts);
  const p = await ctx.newPage();
  p.on('console', m => m.type() === 'error' && failures.push(`${name} console: ${m.text()}`));
  p.on('pageerror', e => failures.push(`${name} pageerror: ${e.message}`));
  await p.goto(url); await p.waitForTimeout(800);
  await fn(p);
  await ctx.close();
}
const overflow = p => p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

await run({ viewport: { width: 1280, height: 860 } }, 'desktop', async p => {
  await p.screenshot({ path: path.join(out, 'desktop-home.png') });
  expect(await overflow(p) === 0, 'desktop home overflows');
  await p.goto(url + '#m1-tokens'); await p.waitForTimeout(300);
  expect(await p.$('.fig svg') !== null, 'lesson has no figure');
  await p.click('#mark');
  expect((await p.textContent('.syl-progress b')).startsWith('1/'), 'mark as complete did not update progress');
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(200);
  expect(await p.evaluate(() => location.hash) === '#m1-embeddings', 'arrow key did not go to next lesson');
  await p.click('#langEn'); await p.waitForTimeout(200);
  expect(await p.textContent('.lesson h1') === 'Embeddings', 'language switch failed');
  expect(await p.evaluate(() => getComputedStyle(document.querySelector('.fig svg .it') || document.body).display) === 'none' || !(await p.$('.fig svg .it')), 'Italian figure labels visible in EN');
  await p.screenshot({ path: path.join(out, 'desktop-lesson-en.png') });
  await p.goto(url + '#m1-quiz'); await p.waitForTimeout(300);
  await p.click('label.opt >> nth=0'); await p.waitForTimeout(200);
  expect(await p.$('.q .explain') !== null, 'quiz gave no feedback');
  await p.fill('#q', 'token'); await p.waitForTimeout(200);
  expect(await p.$$eval('.results li', l => l.length) > 0, 'search found nothing for "token"');
});

await run({ viewport: { width: 390, height: 844 }, colorScheme: 'dark', deviceScaleFactor: 2 }, 'phone', async p => {
  expect(await overflow(p) === 0, 'phone home overflows');
  await p.goto(url + '#m1-temperature'); await p.waitForTimeout(300);
  expect(await overflow(p) === 0, 'phone lesson overflows');
  await p.evaluate(() => document.querySelector('.fig').scrollIntoView());
  await p.screenshot({ path: path.join(out, 'phone-dark-figure.png') });
  await p.click('#menuBtn'); await p.waitForTimeout(200);
  expect(await p.isVisible('#syllabus'), 'phone menu did not open');
});

await browser.close();
if (failures.length) { console.error('FAIL\n' + failures.join('\n')); process.exit(1); }
console.log('e2e ok (screenshots in tests/output/)');
