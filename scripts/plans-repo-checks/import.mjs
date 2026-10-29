// Import items (2026-10-28, the SOW review): a new plan's empty state imports the example file; columns match by
// header; a Level column builds the outline; a bad row is flagged and left out; the rows land in your draft with owners
// and budget, and publish.
import { open, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const names = () => page.evaluate(() => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].map((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim()));

await page.click('[data-pri-new] button'); await page.waitForTimeout(700);
await page.locator('[data-psu="name"]').click(); await page.keyboard.type('Smelt Import 2027');
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(2500);
await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(800);
await page.click('[data-prp-empty-import] button'); await page.waitForTimeout(800);
check('the import dialog opens', await page.locator('[data-pid-dialog][open]').count() === 1);
await page.click('[data-pid-example] button'); await page.waitForTimeout(800);
const mapped = await page.evaluate(() => Object.fromEntries([...document.querySelectorAll('[data-pid-map] esa-select')].map((s) => [s.dataset.field, s.value])));
check('columns match by header', mapped.name === '1' && mapped.level === '0' && mapped.owners === '4', JSON.stringify(mapped));
const count = await page.locator('[data-pid-count]').textContent();
check('every example row is ready', /^7 of 7 ready/.test(count.trim()), count);
// A bad row, pasted: no such level, a bad date.
await page.locator('[data-pid-paste]').evaluate((t) => { t.value = 'Level,Name,Start,End\nStudy,Good study,2027-01-04,2027-06-30\nTask,Good task,2027-01-04,2027-02-26\nPhase,Bad level,2027-01-04,2027-02-26\nTask,Bad date,soon,2027-02-26\n'; t.dispatchEvent(new Event('input', { bubbles: true })); });
await page.waitForTimeout(800);
const bad = await page.locator('[data-pid-rows]').innerText();
check('problems are named', bad.includes('No level named Phase') && bad.includes("Start soon isn't a date"), bad.replace(/\n/g, ' | ').slice(0, 300));
check('only the good rows count', /^2 of 4 ready/.test((await page.locator('[data-pid-count]').textContent()).trim()));
await page.screenshot({ path: OUT + 'import-problems.png' });
// Back to the example and add it.
await page.click('[data-pid-example] button'); await page.waitForTimeout(800);
await page.screenshot({ path: OUT + 'import-example.png' });
await page.click('[data-pid-add] button'); await page.waitForTimeout(2000);
check('a draft opened with the rows', new URL(page.url()).searchParams.has('draft'));
const built = await names();
check('the outline is built from Level', built.indexOf('Trawl season 1') > built.indexOf('Delta smelt larval survey') && built.indexOf('Trawl season 1') < built.indexOf('Adult spawning survey'), built.join(' | '));
await page.click('[data-prp-review] button'); await page.waitForTimeout(2500);
check('review counts 7 added', /7\s*Added/.test(await page.locator('[data-prvd-counts]').innerText()));
await page.locator('[data-prvd-publish] button').click();
await page.waitForFunction(() => !document.querySelector('[data-bcn-plan-revisions-dialog]')?.hasAttribute('open'), null, { timeout: 30000 }); await page.waitForTimeout(1500);
check('Live has them', (await names()).includes('Spawning habitat mapping'));
// Budget landed on the sheet.
const planID = new URL(page.url()).searchParams.get('id');
const total = await page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return Object.values(r.versions.at(-1).budget ?? {}).reduce((s, row) => s + Object.values(row).reduce((a, b) => a + b, 0), 0); } catch {} } }, planID);
check('the budget lands on Live', total === 160000, String(total));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
