// Who Sees It, everywhere (2026-10-28, the SOW review): a level's Budget card set to Owners and Editors keeps money
// from a Contributor on the item page, the Budget tab, the drawer, the index and Review and Publish.
import { open, BASE, gotoPlan } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const tabs = () => page.locator('[data-prp-view-toggle]').evaluate((t) => (t.options ?? []).map((o) => o.label).join(','));
const drawerMoney = () => page.evaluate(() => ['budget-wrap', 'budget-summary'].some((k) => { const el = document.querySelector(`[data-ped="${k}"]`); return el && !el.hidden && getComputedStyle(el).display !== 'none'; }));
const openFirstTask = async () => {
  const id = await page.evaluate(() => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith('Detailed baseline study plan'))?.dataset.rowId);
  await page.click(`[data-select="${id}"]`, { position: { x: 12, y: 8 } }); await page.waitForTimeout(1200);
};

await gotoPlan(page, planID);
check('Owner: Budget tab', (await tabs()).includes('Budget'));
await openFirstTask();
check('Owner: drawer shows money', await drawerMoney());

await gotoPlan(page, planID, '&user=Morgan%20Ellis');
check('Contributor: no Budget tab', !(await tabs()).includes('Budget'), await tabs());
await openFirstTask();
check('Contributor: drawer shows no money', !(await drawerMoney()));

await page.goto(`${BASE}/prototypes/plans-repo/?user=Morgan%20Ellis`); await page.waitForTimeout(2000);
const fig = await page.evaluate(() => [...document.querySelectorAll('[data-pri-budget]')].filter((b) => !b.hidden && b.textContent.trim()).map((b) => b.textContent.trim()));
// Fisheries hides money from Contributors; the Blank samples show it to everyone.
check('Contributor: the index hides Fisheries’ figure', !(await page.evaluate(() => { const r = [...document.querySelectorAll('.bcn-pri__row')].find((r) => r.textContent.includes('Fisheries Evaluation Studies')); const b = r?.querySelector('[data-pri-budget]'); return b && !b.hidden && b.textContent.trim(); })), fig.join(' | '));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
