// Access and guards (2026-10-29, the traps audit): someone not on a plan is stopped; only Owners and Editors restore,
// after a confirm; money stays out of the chart for a restricted role; the old /revisions/ route opens the modal; the
// Edit form asks before dropping typed text; an item with a send still out can't be deleted; status reads Completed.
import { open, BASE, HIDE, gotoPlan } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const idOf = (name) => page.evaluate((name) => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.dataset.rowId, name);
const versions = () => page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return r.versions.length; } catch {} } }, planID);

await gotoPlan(page, planID);
const baseline = await idOf('Detailed baseline study plan');
const scoping = await idOf('Near-field study scoping memo');

// An outsider: Avery (USFWS) isn't on the plan.
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&user=Avery%20Nguyen`); await page.waitForTimeout(2000);
check('outsider: the plan stops', await page.locator('[data-prp-stop="outside"]').evaluate((e) => !e.hidden), (await page.locator('.page-layout__title h1').textContent()).trim());
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${baseline}`); await page.waitForTimeout(2000);
check('outsider: the item stops', (await page.locator('[data-pep-guest]').innerText()).includes('Not Shared With You'));
await page.goto(`${BASE}/prototypes/plans-repo/`); await page.waitForTimeout(2500);
check('outsider: no plans listed, a word on why, no New Plan', (await page.locator('li.bcn-pri__row').count()) === 0 && (await page.locator('[data-pri-none]').innerText()).includes('No Plans Shared With You') && await page.locator('[data-pri-new]').evaluate((e) => e.hidden));

// A Contributor: no Restore; no money in the chart's rows.
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&user=Morgan%20Ellis&revisions=1`); await page.waitForTimeout(3000);
check('/plan/?revisions=1 opens the modal', await page.locator('[data-bcn-plan-revisions-dialog][open]').count() === 1);
await page.locator('[data-bcn-plan-revisions-dialog] button:has-text("Previous")').first().click(); await page.waitForTimeout(900);
check('Contributor: no Restore', await page.locator('[data-prvd-restore]').evaluate((e) => e.hidden));
await page.keyboard.press('Escape'); await page.waitForTimeout(400);
const money = await page.evaluate(() => [...document.querySelectorAll('[data-prp-pane="schedule"] [aria-label], [data-prp-pane="schedule"] [aria-description]')].some((e) => /Budget/.test(e.getAttribute('aria-label') + ' ' + e.getAttribute('aria-description'))));
check('Contributor: no budget in the chart', !money);

// The old route.
await page.goto(`${BASE}/prototypes/plans-repo/revisions/?id=${planID}&user=Andy%20Lovseth`); await page.waitForTimeout(3000);
check('/revisions/ lands on the plan with the modal', page.url().includes('/plan/?id=') && await page.locator('[data-bcn-plan-revisions-dialog][open]').count() === 1, page.url());

// An Owner restores only after a confirm.
const before = await versions();
await page.locator('[data-bcn-plan-revisions-dialog] button:has-text("Previous")').first().click(); await page.waitForTimeout(900);
await page.locator('[data-prvd-restore] button').click(); await page.waitForTimeout(600);
const ask = page.locator('esa-confirm-dialog[open]');
check('Restore asks first', await ask.count() === 1 && /undoes/.test(await ask.evaluate((d) => d.message ?? d.textContent)));
await page.screenshot({ path: OUT + 'restore-confirm.png' });
await ask.getByRole('button', { name: 'Restore', exact: true }).click(); await page.waitForTimeout(2500);
check('then restores', (await versions()) === before + 1);

// The Edit form asks before dropping typed text.
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${scoping}`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(800);
check('status reads Completed', (await page.locator('[data-element-module="details"]').innerText()).includes('Completed'));
await page.click('[data-pep-action="edit"] button'); await page.waitForTimeout(900);
await page.locator('[data-eed="notes"]').evaluate((f) => (f.value = 'Something typed.'));
await page.click('[data-eed-cancel] button'); await page.waitForTimeout(600);
check('Cancel with typed text asks', await page.locator('esa-confirm-dialog[open]').count() === 1);
await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: 'Keep Editing' }).click(); await page.waitForTimeout(400);
check('Keep Editing keeps the form and the text', (await page.locator('[data-eed-dialog][open]').count()) === 1 && (await page.locator('[data-eed="notes"]').evaluate((f) => f.value)) === 'Something typed.');

// Delete is held while a send is out.
await gotoPlan(page, planID);
await page.hover(`.bcn-plan-gantt__item[data-row-id="${baseline}"]`);
await page.click(`.bcn-plan-gantt__item[data-row-id="${baseline}"] esa-dropdown-menu button`); await page.waitForTimeout(300);
await page.getByRole('menuitem', { name: 'Delete' }).click(); await page.waitForTimeout(800);
const held = await page.locator('esa-confirm-dialog[open]').evaluate((d) => `${d.heading ?? ''} ${d.message ?? ''}`);
check('an item with T-004 out can’t be deleted', /Sends Still Out/.test(held) && /T-004/.test(held), held);
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
