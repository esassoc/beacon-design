import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 2 });
let pass = 0, fail = 0;
const check = (name, ok, extra = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${name}${extra ? ' :: ' + extra : ''}`); };
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&about=closed&view=budget`);
await page.addStyleTag({ content: HIDE });
await page.waitForSelector('[data-pbs-grid] .ag-row[row-id]'); await page.waitForTimeout(1200);
const status = async () => (await page.locator('.bcn-prp__status').textContent()).replace(/\s+/g, ' ').trim();
const focused = () => page.evaluate(() => { const c = document.activeElement?.closest('.ag-cell'); return c ? { col: c.getAttribute('col-id'), row: c.closest('.ag-row')?.getAttribute('row-index'), text: c.textContent.trim() } : null; });
await page.screenshot({ path: OUT + 's-live.png' });
// Live: the cursor and name box
const fyCell = page.locator('[data-pbs-grid] .ag-center-cols-container .ag-row[row-index="3"] .ag-cell').nth(2);
await fyCell.click(); await page.waitForTimeout(300);
const ref = (await page.locator('[data-pbs-ref]').textContent()).trim();
check('name box shows year and item', /^FY \d{4}–\d{2}/.test(ref), ref);
check('focus style lights header', (await page.locator('[data-bcn-plan-budget-sheet] > style').textContent()).includes('ag-header-cell'));
check('note in Live', /Changes go to your draft/.test(await page.locator('[data-prp-state-note]').textContent()));
await page.keyboard.type('5'); await page.waitForTimeout(200);
check('Live does not edit on type', !(await page.locator('.ag-cell-inline-editing').count()));
await page.screenshot({ path: OUT + 's-live-cursor.png' });
// Into a draft
await page.click('[data-prp-edit] button'); await page.waitForTimeout(1500);
check('still budget view in draft', page.url().includes('view=budget'));
const editable = page.locator('[data-pbs-grid] .ag-center-cols-container .ag-cell.bcn-pbs__editable').first();
await editable.click(); await page.waitForTimeout(200);
const before = await focused();
await page.keyboard.type('250k'); await page.waitForTimeout(200);
check('typing opens the editor', (await page.locator('.ag-cell-inline-editing').count()) === 1);
await page.screenshot({ path: OUT + 's-editing.png' });
await page.keyboard.press('Enter'); await page.waitForTimeout(1500);
const after = await focused();
check('Enter commits and moves down', after && before && Number(after.row) === Number(before.row) + 1 && after.col === before.col, JSON.stringify({ before, after }));
let st = await status();
check('status Budget Set $250,000', /Budget Set/.test(st) && /\$250,000/.test(st), st);
await page.screenshot({ path: OUT + 's-after-commit.png' });
await page.keyboard.press('ArrowUp'); await page.waitForTimeout(200);
const upText = (await focused())?.text;
check('cell shows $250,000', upText === '$250,000', upText);
check('value bar shows Live figure', /Live \$/.test(await page.locator('[data-pbs-value]').textContent()), await page.locator('[data-pbs-value]').textContent());
await page.screenshot({ path: OUT + 's-changed-cursor.png' });
// Escape cancels
await page.keyboard.press('F2'); await page.waitForTimeout(200);
await page.keyboard.press('Control+A'); await page.keyboard.type('999'); await page.keyboard.press('Escape'); await page.waitForTimeout(500);
check('Escape cancels', (await focused())?.text === '$250,000', (await focused())?.text);
// Delete clears
await page.keyboard.press('Delete'); await page.waitForTimeout(1500);
st = await status();
check('Delete clears (Budget Cleared)', /Budget Cleared/.test(st), st);
check('cell blank after Delete', (await focused())?.text === '–', (await focused())?.text);
// junk is refused
await page.keyboard.type('abc'); await page.keyboard.press('Enter'); await page.waitForTimeout(1200);
check('junk text not taken', /Budget Cleared/.test(await status()), await status());
await page.keyboard.press('ArrowUp'); await page.waitForTimeout(200);
// paste a block
await page.evaluate(() => { const dt = new DataTransfer(); dt.setData('text/plain', '100k\t200k\n$300,000\t1.2m\n'); document.activeElement.dispatchEvent(new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true })); });
await page.waitForTimeout(1500);
st = await status();
check('paste block (Budget Pasted)', /Budget Pasted/.test(st), st);
await page.screenshot({ path: OUT + 's-pasted.png' });
// undo with focus in the grid
await page.keyboard.press('Control+z'); await page.waitForTimeout(1500);
check('Ctrl+Z undoes the paste', /Budget Cleared/.test(await status()), await status());
check('focus still in grid after undo', !!(await focused()), JSON.stringify(await focused()));
// Enter on a name opens drawer
await page.locator('[data-pbs-grid] .ag-pinned-left-cols-container .ag-row[row-index="4"] .ag-cell').click({ position: { x: 230, y: 10 } }); await page.waitForTimeout(200);
await page.keyboard.press('Enter'); await page.waitForTimeout(900);
check('Enter on name opens drawer', await page.evaluate(() => !!document.querySelector('esa-side-dialog[open], [data-bcn-plan-element-drawer] [open]') || [...document.querySelectorAll('esa-side-dialog')].some((d) => d.open)));
await page.keyboard.press('Escape'); await page.waitForTimeout(600);
const geo = await page.evaluate(() => { const g = document.querySelector('[data-pbs-grid]').getBoundingClientRect(); const v = document.querySelector('.bcn-prp__views').getBoundingClientRect(); return { gx: g.x - v.x, gw: v.width - g.width, gh: g.height }; });
check('grid flush in panel', Math.abs(geo.gx - 1) <= 1 && geo.gw <= 2, JSON.stringify(geo));
await page.screenshot({ path: OUT + 's-final.png' });
console.log(`\n${pass} PASS, ${fail} FAIL`);
await browser.close();
