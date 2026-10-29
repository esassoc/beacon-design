// Download (2026-10-29, the traps audit: the PM had no way to take the budget out): the budget view's Download writes
// the sheet as CSV, the Plan Total last; the records views' button reads Download too, as prod's grids do.
import { open, gotoPlan, BASE, DEFAULTS, HIDE } from './lib.mjs';
import { readFileSync } from 'node:fs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const go = async (v) => { await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}&view=${v}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000); };
await go('budget');
check('Download shows on the budget', await page.locator('[data-prp-download]').isVisible());
const [dl] = await Promise.all([page.waitForEvent('download'), page.locator('[data-prp-download] button').click()]);
const csv = readFileSync(await dl.path(), 'utf8').trim().split(/\r?\n/);
check('a CSV named for the plan and Live', /Budget, Live, \d{4}-\d\d-\d\d\.csv$/.test(dl.suggestedFilename()), dl.suggestedFilename());
check('years across the head', /FY/.test(csv[0]), csv[0]);
check('Plan Total last', /Plan Total/.test(csv.at(-1)), csv.at(-1));
check('figures unformatted', !csv.slice(1).join('').includes('$'));
await go('deliverables');
check('not on the records views', !(await page.locator('[data-prp-download]').isVisible()) && (await page.locator('[data-pdv-export]').innerText()).includes('Download'));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
