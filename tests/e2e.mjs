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
  expect(await p.evaluate(() => document.documentElement.lang) === 'en' && await p.textContent('#brandName') === 'AI, one token at a time', 'a first visit does not open in English');
  await p.goto(url + '#m1-tokens'); await p.waitForTimeout(300);
  expect(await p.$('.fig svg') !== null, 'lesson has no figure');
  await p.click('#mark');
  expect((await p.textContent('.syl-progress b')).startsWith('1/'), 'mark as complete did not update progress');
  await p.keyboard.press('ArrowRight'); await p.waitForTimeout(200);
  expect(await p.evaluate(() => location.hash) === '#m1-embeddings', 'arrow key did not go to next lesson');
  await p.click('#langIt'); await p.waitForTimeout(200);
  expect(await p.textContent('.lesson h1') === 'Embedding', 'switch to Italian failed');
  await p.reload(); await p.waitForTimeout(300);
  expect(await p.textContent('.lesson h1') === 'Embedding', 'the Italian choice was not remembered');
  await p.click('#langEn'); await p.waitForTimeout(200);
  expect(await p.textContent('.lesson h1') === 'Embeddings', 'switch back to English failed');
  expect(await p.getAttribute('#repo', 'aria-label') === 'Source code on GitHub', 'GitHub link label not translated');
  expect(await p.evaluate(() => getComputedStyle(document.querySelector('.fig svg .it') || document.body).display) === 'none' || !(await p.$('.fig svg .it')), 'Italian figure labels visible in EN');
  await p.screenshot({ path: path.join(out, 'desktop-lesson-en.png') });
  await p.goto(url + '#m1-quiz'); await p.waitForTimeout(300);
  await p.click('label.opt >> nth=0'); await p.waitForTimeout(200);
  expect(await p.$('.q .explain') !== null, 'quiz gave no feedback');
  await p.fill('#q', 'token'); await p.waitForTimeout(200);
  expect(await p.$$eval('.results li', l => l.length) > 0, 'search found nothing for "token"');
});

await run({ viewport: { width: 390, height: 844 }, colorScheme: 'dark', deviceScaleFactor: 2, hasTouch: true, isMobile: true }, 'phone', async p => {
  expect(await overflow(p) === 0, 'phone home overflows');
  expect(await p.isVisible('#repo'), 'GitHub link hidden on phone');
  await p.goto(url + '#m1-temperature'); await p.waitForTimeout(300);
  expect(await overflow(p) === 0, 'phone lesson overflows');
  await p.evaluate(() => document.querySelector('.fig').scrollIntoView());
  await p.screenshot({ path: path.join(out, 'phone-dark-figure.png') });
  const swipe = async (x1, x2) => {
    const cdp = await p.context().newCDPSession(p);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: x1, y: 300 }] });
    for (let i = 1; i <= 8; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x1 + (x2 - x1) * i / 8, y: 300 + i }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await p.waitForTimeout(300);
  };
  const swipeY = async (y1, y2) => {
    const cdp = await p.context().newCDPSession(p);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 200, y: y1 }] });
    for (let i = 1; i <= 8; i++) await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 200, y: y1 + (y2 - y1) * i / 8 }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await p.waitForTimeout(400);
  };
  await p.evaluate(() => scrollTo(0, 0));
  await swipe(320, 80);
  expect(await p.evaluate(() => location.hash) === '#m1-top-k-top-p', 'swipe left did not go to the next lesson');
  await swipe(80, 320);
  expect(await p.evaluate(() => location.hash) === '#m1-temperature', 'swipe right did not go back');
  await p.click('#menuBtn'); await p.waitForTimeout(200);
  expect(await p.isVisible('#syllabus'), 'phone menu did not open');
  const menu = await p.evaluate(() => { const n = document.getElementById('syllabus'); return { bottom: n.getBoundingClientRect().bottom, scrolls: n.scrollHeight > n.clientHeight }; });
  expect(menu.bottom <= 844 && menu.scrolls, 'phone menu is taller than the screen, so it cannot scroll');
  for (let k = 0; k < 6; k++) await swipeY(700, 150);
  expect(await p.evaluate(() => document.getElementById('syllabus').scrollTop) > 0, 'phone menu did not scroll');
  expect(await p.evaluate(() => scrollY) === 0, 'scrolling past the end of the phone menu moved the page behind it');
});

// Some mobile browsers report a top safe-area inset even when the page sits below the status bar:
// the sticky top bar must still stick to the very top.
await run({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true }, 'phone-safe-area', async p => {
  const cdp = await p.context().newCDPSession(p);
  await cdp.send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 40, topMax: 40 } });
  await p.reload(); await p.waitForTimeout(500);
  await p.evaluate(() => scrollTo(0, 400)); await p.waitForTimeout(200);
  expect(await p.evaluate(() => document.querySelector('.topbar').getBoundingClientRect().top) === 0, 'top bar leaves a gap above it when the browser reports a safe-area inset');
});

await browser.close();
if (failures.length) { console.error('FAIL\n' + failures.join('\n')); process.exit(1); }
console.log('e2e ok (screenshots in tests/output/)');
