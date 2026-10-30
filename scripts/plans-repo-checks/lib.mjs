const { chromium } = await import(process.env.PLAYWRIGHT ?? '/opt/node22/lib/node_modules/playwright/index.mjs');
// Checks for /prototypes/plans-repo/ (2026-10-28): Playwright against the dev server. Run one with
//   node scripts/plans-repo-checks/<name>.mjs
// with `npx astro dev --port 4321` up. PLAYWRIGHT points at the Playwright module (the cloud container's default
// below); BASE at the server; screenshots go to OUT. Each prints PASS / FAIL lines and a "N PASS, M FAIL" total.
import { mkdirSync } from 'node:fs';
export const BASE = process.env.BASE ?? 'http://localhost:4321';
export const OUT = (process.env.OUT ?? '/tmp/plans-repo-checks') + '/';
mkdirSync(OUT, { recursive: true });
export const DEFAULTS = '&density=medium&levels=ladder&outline=280&sched=pin&about=closed';
export const HIDE = '.bcn-help-bar{display:none!important}';
export async function open(opts = {}) {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: Number(process.env.SCALE) || (opts.scale ?? 1) });
  const page = await ctx.newPage();
  page.on('console', (m) => { if (m.type() === 'error' && !/404/.test(m.text())) console.log('console:', m.text()); });
  page.on('pageerror', (e) => console.log('pageerror:', e.message));
  await page.goto(BASE + '/prototypes/plans-repo/');
  await page.waitForTimeout(2500);
  const href = await page.evaluate(() => [...document.querySelectorAll('a')].map((a) => a.getAttribute('href')).find((h) => h && h.includes('/plan/?id=')));
  const planID = new URL(href, BASE).searchParams.get('id');
  return { browser, ctx, page, planID };
}
export async function gotoPlan(page, planID, extra = '') {
  await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}${extra}`);
  await page.addStyleTag({ content: HIDE });
  await page.waitForSelector('.bcn-plan-gantt__hit');
  await page.waitForTimeout(900);
}
/** Drag a row's bar by dx pixels. */
export async function dragRow(page, nameStart, dx, { hold = false } = {}) {
  const box = await page.evaluate((nameStart) => {
    const li = [...document.querySelectorAll('.bcn-plan-gantt__item')].find((l) => l.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(nameStart));
    const id = li?.dataset.rowId;
    const bar = document.querySelector(`.bcn-plan-gantt__mark[data-row-id="${id}"] .bcn-plan-gantt__bar`) ?? document.querySelector(`.bcn-plan-gantt__mark[data-row-id="${id}"]`);
    const r = bar.getBoundingClientRect();
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 };
  }, nameStart);
  await page.mouse.move(box.x, box.y);
  await page.waitForTimeout(200);
  await page.mouse.down();
  for (let i = 1; i <= 12; i++) { await page.mouse.move(box.x + (dx * i) / 12, box.y); await page.waitForTimeout(25); }
  await page.waitForTimeout(250);
  if (hold) return;
  await page.mouse.up();
  await page.waitForTimeout(1600);
  await page.mouse.move(1430, 300);
  await page.waitForTimeout(400);
}
export async function scrollTo(page, y) {
  await page.evaluate((y) => { const c = document.querySelector('.modern-layout__content'); c.style.scrollBehavior = 'auto'; c.scrollTop = y; }, y);
  await page.waitForTimeout(300);
}
