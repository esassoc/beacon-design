// Detail-page columns (2026-10-30, Andy: the transmittal's main column and sidebar match the item page's). At 1440 and
// 1024 wide, both pages' left edge, column widths, gap and the top of the first card (under the title row's rule)
// agree within 1px.
import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const TOL = 1;
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(600);
const el = await page.evaluate(() => document.querySelector('.bcn-plan-gantt__item[data-row-id]')?.dataset.rowId);
const tr = await page.evaluate((planID) => JSON.parse(localStorage.getItem('bcn-plan-records-v1')).plans.find((p) => p.planID === planID).transmittals.find((x) => x.number === 4)?.id, planID);
/** The two-column grid: its columns' boxes, the gap between them, and the top of the first card, measured from the
 *  title row's rule (a long title wraps at 1024 and pushes everything down, on any page, whatever its columns). */
const measure = (sel) => page.evaluate((sel) => {
  const grid = document.querySelector(sel);
  const cols = [...grid.children].filter((c) => c.getBoundingClientRect().width > 0);
  const first = (c) => [...c.children].find((x) => x.getBoundingClientRect().height > 0)?.getBoundingClientRect() ?? c.getBoundingClientRect();
  const [a, b] = cols.map((c) => c.getBoundingClientRect());
  const r = (n) => Math.round(n * 10) / 10;
  const stacked = !b || b.top >= a.bottom - 1;
  const rule = document.querySelector('.page-layout__title')?.getBoundingClientRect().bottom ?? 0;
  return { left: r(a.left), main: r(a.width), side: b ? r(b.width) : 0, gap: b ? r(stacked ? b.top - a.bottom : b.left - a.right) : 0, top: r(first(cols[0]).top - rule), sideTop: b ? r(first(cols[1]).top - (stacked ? a.bottom : 0)) : 0 };
}, sel);
for (const width of [1440, 1024]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${el}&user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE });
  await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(1500);
  const item = await measure('[data-pep-cols]');
  await page.screenshot({ path: `${OUT}columns-item-${width}.png` });
  await page.goto(`${BASE}/prototypes/plans-repo/transmittal/?plan=${planID}&id=${tr}&user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE });
  await page.waitForSelector('[data-trp-sender]:not([hidden])'); await page.waitForTimeout(1500);
  const trm = await measure('[data-trp-sender]');
  await page.screenshot({ path: `${OUT}columns-transmittal-${width}.png` });
  console.log(`${width}  item ${JSON.stringify(item)}\n${width}  transmittal ${JSON.stringify(trm)}`);
  for (const k of ['left', 'main', 'side', 'gap', 'top'])
    check(`${width}: transmittal ${k} matches the item page`, Math.abs(item[k] - trm[k]) <= TOL, `${trm[k]} vs ${item[k]}`);
  if (width === 1440) check('1440: the side column is the 360px rail', Math.abs(item.side - 360) <= TOL && Math.abs(trm.side - 360) <= TOL, `${item.main}:${item.side}`);
}
console.log(`\n${pass} PASS, ${fail} FAIL`);
await browser.close();
