// The schedule as a table (2026-10-28, the SOW review): Show As Table lists every item; on Live a cell edit opens your
// draft and lands there; a pasted block edits several cells as one edit; Review lists the changes.
import { open, gotoPlan } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const repo = () => page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return { versions: r.versions.length, mine: r.drafts.find((d) => d.owner === 'Andy Lovseth')?.revisions.length ?? 0 }; } catch {} } }, planID);
const cell = (name, col) => page.locator(`[data-bcn-plan-items-table] .ag-row:has(.ag-cell[col-id="name"]:text-is("${name}")) .ag-cell[col-id="${col}"]`).first();

await gotoPlan(page, planID);
await page.locator('[data-prp-showas]').evaluate((t) => { t.value = 'table'; t.dispatchEvent(new CustomEvent('change', { detail: { value: 'table' }, bubbles: true })); });
await page.waitForTimeout(1200);
const rows = await page.locator('[data-bcn-plan-items-table] .ag-center-cols-container .ag-row').count();
check('Table lists the items', rows > 20, String(rows));
check('the chart steps aside', await page.locator('[data-prp-pane="schedule"] .bcn-plan-gantt-host').evaluate((e) => getComputedStyle(e).display === 'none'));
await page.screenshot({ path: OUT + 'table-live.png' });

// One cell on Live: notes. Opens your draft.
await cell('Draft near-field survival memo', 'notes').dblclick(); await page.waitForTimeout(300);
await page.keyboard.press('Control+A'); await page.keyboard.type('Edited in the table.'); await page.keyboard.press('Enter'); await page.waitForTimeout(1800);
check('a Live cell edit opens your draft', new URL(page.url()).searchParams.has('draft'), page.url());
const a = await repo();
check('one edit in the draft', a.mine === 1, JSON.stringify(a));
check('the table still shows', await page.locator('[data-prp-table]').evaluate((e) => !e.hidden));

// A pasted block: two names and their owners.
await cell('Draft near-field survival memo', 'owners').click(); await page.waitForTimeout(200);
await page.evaluate(() => {
  const dt = new DataTransfer(); dt.setData('text/plain', 'Sam Okafor\tA note from paste\nCDFW; Priya Natarajan\tSecond note\n');
  document.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true }));
});
await page.waitForTimeout(1800);
const b = await repo();
check('a pasted block is one more edit', b.mine === 2, JSON.stringify(b));
const owners = await cell('Draft near-field survival memo', 'owners').innerText();
check('pasted owners land', owners.includes('Sam Okafor'), owners);
await page.click('[data-prp-review] button'); await page.waitForTimeout(2500);
const review = await page.locator('[data-prvd-rows]').innerText();
check('review lists the details', review.includes('Details') && review.includes('Sam Okafor'), review.replace(/\n/g, ' | ').slice(0, 300));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
