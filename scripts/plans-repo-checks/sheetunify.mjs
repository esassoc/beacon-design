// The Schedule Table is the budget sheet's spreadsheet (2026-10-30, Andy: "I really like the budget table, and hate how
// the Schedule table makes me click into a status cell, and then it transforms into a dropdown"). Proves: the sheet's
// chrome (name box, value bar, key) is on the table; one click on a Status cell shows its choices and one more commits
// (two clicks, no double-click), to Live; the keyboard edits (Enter, type, Enter commits and moves down; Enter opens a
// choice's list, an arrow and Enter pick); the name box and value bar follow the cursor; a parent's date is read-only
// and says why; Milestone toggles on one click.
import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const T = '[data-bcn-plan-items-table]';
const rowId = (name) => page.evaluate(({ T, name }) => [...document.querySelectorAll(`${T} .ag-cell[col-id="name"]`)].find((c) => c.textContent.trim() === name)?.closest('.ag-row')?.getAttribute('row-id'), { T, name });
const cellOf = async (name, col) => page.locator(`${T} .ag-row[row-id="${await rowId(name)}"] .ag-cell[col-id="${col}"]`).first();
const ref = async () => (await page.locator('[data-pit-ref]').innerText()).replace(/\s+/g, ' ').trim();
const value = async () => (await page.locator('[data-pit-value]').innerText()).replace(/\s+/g, ' ').trim();
const focused = () => page.evaluate(() => { const c = document.activeElement?.closest('.ag-cell'); return c ? { col: c.getAttribute('col-id'), row: Number(c.closest('.ag-row')?.getAttribute('row-index')), text: c.textContent.trim() } : null; });
const choices = () => page.locator(`${T} [data-sheet-choice]`);

await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&showas=table&user=Andy%20Lovseth`);
await page.addStyleTag({ content: HIDE });
await page.waitForSelector(`${T} .ag-row[row-id]`); await page.waitForTimeout(1500);

// The sheet's chrome, as the budget's.
check('the table has the name box, value bar and key', (await page.locator(`${T} [data-sheet-bar] [data-pit-ref]`).count()) === 1 && (await page.locator(`${T} [data-pit-value]`).count()) === 1 && /Editable/.test(await page.locator(`${T} .bcn-sheet__legend`).innerText()) && /Saves to Live/.test(await page.locator(`${T} .bcn-sheet__legend`).innerText()));
check('the budget sheet shares it', await page.locator('[data-bcn-plan-budget-sheet].bcn-sheet [data-sheet-bar] [data-pbs-ref]').count() === 1);

// ── Status: one click shows the choices, one more commits (two clicks, no double-click) ──
await page.evaluate(() => { window.__clicks = 0; window.__dbl = 0; document.addEventListener('click', () => window.__clicks++, true); document.addEventListener('dblclick', () => window.__dbl++, true); });
const leaf = 'Regional receiver network build-out';
const status = await cellOf(leaf, 'status');
const was = (await status.innerText()).trim();
const pick = was === 'Blocked' ? 'In Progress' : 'Blocked';
check('Status at rest shows a dot and its label', (await status.locator('.bcn-sheet__dot').count()) === 1 && was.length > 0, was);
await status.click(); await page.waitForTimeout(400);
const shown = await choices().allInnerTexts();
check('one click on Status shows its choices', shown.length >= 3 && shown.some((t) => t.includes(pick)), JSON.stringify(shown));
await page.screenshot({ path: OUT + 'sheetunify-status-open.png' });
await choices().filter({ hasText: pick }).first().click(); await page.waitForTimeout(1200);
const clicks = await page.evaluate(() => ({ c: window.__clicks, d: window.__dbl }));
const now = (await (await cellOf(leaf, 'status')).innerText()).trim();
check('one more click commits it (two clicks, no double-click)', now === pick && clicks.c === 2 && clicks.d === 0, `${was} -> ${now}, ${JSON.stringify(clicks)}`);
check('Status saves to Live (no draft opens)', !new URL(page.url()).searchParams.has('draft') && (await choices().count()) === 0, page.url());

// ── The name box and value bar follow the cursor ──
const task = 'Near-field study scoping memo';
await (await cellOf(task, 'start')).click(); await page.waitForTimeout(300);
check('one click on a date opens a date entry', (await page.locator(`${T} .bcn-sheet__date-input`).count()) === 1);
await page.keyboard.press('Escape'); await page.waitForTimeout(200);
let r = await ref();
check('name box: Start and the item', r.startsWith('Start') && r.includes(task), r);
check('value bar: the date, and that an edit opens your draft', /\w{3} \d{1,2}, \d{4}/.test(await value()) && /Opens your draft/.test(await value()), await value());
await page.keyboard.press('ArrowRight'); await page.waitForTimeout(200);
r = await ref();
check('an arrow moves the name box to End', r.startsWith('End') && r.includes(task), r);
check('the cursor lights its column header', (await page.locator(`${T} > style`).textContent()).includes('col-id="end"'));

// ── Keyboard: a choice opens on Enter, an arrow and Enter pick ──
await page.keyboard.press('ArrowRight'); await page.waitForTimeout(200);
const typeBefore = (await focused())?.text;
await page.keyboard.press('Enter'); await page.waitForTimeout(300);
check('Enter on Date Type opens its choices', (await choices().count()) === 2, String(await choices().count()));
await page.keyboard.press(typeBefore === 'Estimated' ? 'ArrowDown' : 'ArrowUp'); await page.keyboard.press('Enter'); await page.waitForTimeout(1800);
check('an edit from Live opens your draft', new URL(page.url()).searchParams.has('draft'), page.url());
const typeAfter = (await (await cellOf(task, 'type')).innerText()).trim();
check('arrow and Enter pick the other Date Type', typeAfter && typeAfter !== typeBefore, `${typeBefore} -> ${typeAfter}`);

// ── Keyboard: Enter edits text, Enter commits and moves down; the value bar says where it saves ──
await (await cellOf(task, 'notes')).click(); await page.waitForTimeout(200);
check('value bar: saves to your draft', /Saves to your draft/.test(await value()), await value());
const before = await focused();
await page.keyboard.press('Enter'); await page.waitForTimeout(200);
check('Enter opens the editor', (await page.locator(`${T} .ag-cell-inline-editing`).count()) === 1);
await page.keyboard.press('Control+A'); await page.keyboard.type('Typed in the sheet.'); await page.keyboard.press('Enter');
await page.waitForTimeout(250);
const flashed = await page.locator(`${T} .ag-cell-data-changed, ${T} .ag-cell-data-changed-animation`).count();
await page.waitForTimeout(1500);
const after = await focused();
check('Enter commits and moves down', after && before && after.row === before.row + 1 && after.col === 'notes', JSON.stringify({ before, after }));
check('the commit flashes its cell', flashed > 0, String(flashed));
await page.keyboard.press('ArrowUp'); await page.waitForTimeout(200);
check('the value bar shows the new note', (await value()).includes('Typed in the sheet.'), await value());

// ── A parent's date reads only, and says why ──
const parent = 'Migration & Survival Study';
const pStart = await cellOf(parent, 'start');
await pStart.click(); await page.waitForTimeout(300);
check("a parent's date doesn't open an editor", (await page.locator(`${T} .bcn-sheet__date, ${T} .ag-cell-inline-editing`).count()) === 0);
check('it says From its items', /From its items/.test(await value()), await value());
await page.keyboard.press('Enter'); await page.waitForTimeout(300);
check('Enter on it says why', /From its items\. Change the dates/.test(await value()), await value());
check('it reads as read-only', await pStart.evaluate((c) => c.classList.contains('bcn-sheet__read')));
await page.screenshot({ path: OUT + 'sheetunify-parent.png' });

// ── Milestone toggles on one click ──
const mCell = await cellOf(task, 'milestone');
const mWas = await mCell.locator('[role="checkbox"]').getAttribute('aria-checked');
await mCell.click(); await page.waitForTimeout(1500);
const mNow = await (await cellOf(task, 'milestone')).locator('[role="checkbox"]').getAttribute('aria-checked');
check('Milestone toggles on one click', mWas !== mNow, `${mWas} -> ${mNow}`);

console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
