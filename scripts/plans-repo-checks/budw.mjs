import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
for (const [w, about] of [[1440, 'closed'], [1440, 'open'], [1280, 'closed']]) {
  await page.setViewportSize({ width: w, height: 900 });
  await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&view=budget&about=${about}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
  const vis = await page.evaluate(() => { const vp = document.querySelector('[data-pbs-grid] .ag-center-cols-viewport'); const r = vp.getBoundingClientRect(); return [...document.querySelectorAll('[data-pbs-grid] .ag-header-cell[col-id^="fy"]')].filter((h) => { const b = h.getBoundingClientRect(); return b.left >= r.left - 1 && b.right <= r.right + 1; }).length + ' of ' + document.querySelectorAll('[data-pbs-grid] .ag-header-cell[col-id^="fy"]').length; });
  console.log(w, about, 'years fully visible:', vis);
  await page.screenshot({ path: OUT + `budget-${w}-${about}.png` });
}
await browser.close();
