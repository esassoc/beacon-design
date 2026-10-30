// The second traps audit (2026-10-29): review publishes only from Live; Blocked outranks an old health word; an
// outsider learns no item names; overdue receipts reach their sender; the status select works from the keyboard;
// agency people come in as Guests.
import { open, BASE, HIDE, gotoPlan } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
await gotoPlan(page, planID);
const idOf = (name) => page.evaluate((name) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.dataset.rowId, name);
const permit = await idOf('Receiver-site encroachment permits');

// Alex reviews his scenario with From on a later edit: no Publish.
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&draft=36bd486e&user=Alex%20Rivera`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
await page.locator('[data-prp-review] button').click(); await page.waitForTimeout(2500);
const slider = page.locator('[data-bcn-revision-slider]');
const thumbs = slider.locator('[role="slider"]');
check('review opens with Publish', await page.locator('[data-prvd-publish]').isVisible());
if (await thumbs.count() > 1) { await thumbs.first().focus(); for (let i = 0; i < 3; i++) await page.keyboard.press('ArrowRight'); await page.waitForTimeout(1200); }
check('From past Live: Publish steps aside, says why', !(await page.locator('[data-prvd-publish]').isVisible()) && (await page.locator('[data-prvd-note]').innerText()).includes('starts from Live'), await page.locator('[data-prvd-note]').innerText().catch(() => ''));
await page.keyboard.press('Escape');

// Blocked clears an old health word (Andy, an Owner, records it).
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${permit}&user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
const sel = page.locator('[data-element-module="details"] .bcn-status-select');
await sel.locator('button').focus(); await page.keyboard.press('ArrowDown'); await page.waitForTimeout(150);
const focused = await page.evaluate(() => document.activeElement?.dataset?.value);
check('ArrowDown opens the status menu on the current option', !!focused, focused);
await page.keyboard.press('Escape'); await page.waitForTimeout(150);
check('Escape closes it, back on the trigger', await sel.locator('ul').evaluate((u) => u.hidden) && await page.evaluate(() => document.activeElement?.classList.contains('bcn-status-select__trigger')));
await sel.locator('button').click(); await page.waitForTimeout(150);
await sel.locator('li[data-value="blocked"]').click(); await page.waitForTimeout(1200);
const health = await page.locator('[data-element-module="details"]').innerText();
check('Blocked shows as health too', /Health\s*\n?\s*Blocked/.test(health), health.split('\n').slice(0, 6).join(' / '));

// An outsider sees no item name.
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${permit}&user=Avery%20Nguyen`); await page.waitForTimeout(3000);
const h1 = (await page.locator('.page-layout__title h1').innerText()).trim();
const crumbs = (await page.locator('.breadcrumbs').innerText()).trim();
check('outsider: no item name', !/Receiver-site/.test(h1 + crumbs) && /Not Shared/.test(h1), `${h1} | ${crumbs}`);

// Alex, who sent T-004: its overdue receipt on his index.
await page.goto(`${BASE}/prototypes/plans-repo/?user=Alex%20Rivera`); await page.waitForTimeout(2500);
const waiting = await page.evaluate(() => [...document.querySelectorAll('[data-pri-waiting]:not([hidden])')].map((a) => a.textContent.trim()));
check('the sender sees the overdue receipt', waiting.some((t) => /Receipt Overdue/.test(t)), waiting.join(' | '));

// New Plan: an agency person comes in as a Guest.
await page.goto(`${BASE}/prototypes/plans-repo/?user=Andy%20Lovseth`); await page.waitForTimeout(2500);
await page.click('[data-pri-new] button'); await page.waitForTimeout(700);
await page.locator('[data-psu-link="people"]').click(); await page.waitForTimeout(300);
await page.locator('[data-psu-add-person]').evaluate((c) => { c.value = 'Rowan Hale'; c.dispatchEvent(new Event('change', { bubbles: true })); });
await page.waitForTimeout(400);
const role = await page.locator('li.bcn-psu__person', { hasText: 'Rowan Hale' }).locator('[data-person-role]').evaluate((s) => s.value);
check('an agency person comes in as a Guest', role === 'Guest', role);
// Sam sets a status from the table, with Owner on Mine.
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&showas=table&owner=mine&user=Sam%20Okafor`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3500);
const rowsMine = await page.locator('[data-bcn-plan-items-table] .ag-center-cols-container .ag-row').count();
const cell = page.locator('[data-bcn-plan-items-table] .ag-row:has(.ag-cell[col-id="name"]:text-is("Regional receiver network build-out")) .ag-cell[col-id="status"]').first();
// One click opens the choices, one more picks (2026-10-30, the sheets unified: no click-in-then-dropdown).
await cell.click(); await page.waitForTimeout(600);
await page.locator('[data-bcn-plan-items-table] [data-sheet-choice="In Progress"]').first().click(); await page.waitForTimeout(900);
check('Owner Mine narrows the table; Status sets from it', rowsMine > 0 && rowsMine < 20 && (await cell.innerText()).includes('In Progress'), `${rowsMine} rows, ${await cell.innerText()}`);
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
