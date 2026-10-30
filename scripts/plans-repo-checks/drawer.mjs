// The plan page's drawer on Live, draft first (2026-10-28, Andy): it edits, Save to My Draft opens your draft with the
// edit in it, Publish Now reviews just that edit, then lands it, only when nothing else moves and no open draft changes it.
import { open, gotoPlan } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const repo = () => page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return { versions: r.versions.length, drafts: r.drafts.map((d) => ({ owner: d.owner, transient: !!d.transient, edits: d.revisions.length })) }; } catch {} } }, planID);
const idOf = (name) => page.evaluate((name) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.dataset.rowId, name);
const drawer = 'esa-side-dialog[data-ped="dialog"], [data-bcn-plan-element-drawer] esa-side-dialog';
const openRow = async (id) => { await page.click(`[data-select="${id}"]`, { position: { x: 12, y: 8 } }); await page.waitForTimeout(1200); };
const isOpen = () => page.evaluate(() => [...document.querySelectorAll('esa-side-dialog')].some((d) => d.open));
const shown = (sel) => page.locator(sel).first().evaluate((el) => { const b = el.closest('.esa-button') ?? el; return !b.hidden && getComputedStyle(b).display !== 'none'; });
const setNotes = (text) => page.locator('[data-ped="notes"]').evaluate((f, text) => { f.value = text; f.dispatchEvent(new Event('input', { bubbles: true })); f.dispatchEvent(new Event('change', { bubbles: true })); }, text);
const setEnd = (days) => page.locator('[data-ped="end"]').evaluate((f, days) => { const d = new Date(f.value + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + days); f.value = d.toISOString().slice(0, 10); f.dispatchEvent(new Event('change', { bubbles: true })); }, days);
const label = (sel) => page.locator(`${sel} .esa-button__label`).first().textContent().then((t) => t.trim());

await gotoPlan(page, planID);
const memo = await idOf('Draft near-field survival memo');
const proc = await idOf('Acoustic tag & receiver procurement');
const start = await repo();

// 1. Notes only on Live: Publish Now opens the review on just this edit (2026-10-29); its Publish lands it.
await openRow(memo);
check('drawer opens on Live', await isOpen());
check('Live drawer edits: Save to My Draft', (await label('[data-ped="save"]')).startsWith('Save to '));
check('Publish Now offered', await shown('[data-ped="publish"]'));
check('notes field enabled', await page.locator('[data-ped="notes"]').evaluate((f) => !f.disabled));
await page.screenshot({ path: OUT + 'drawer-live.png' });
await setNotes('From the drawer, straight to Live.');
await page.click('[data-ped="publish"]'); await page.waitForTimeout(2500);
check('Publish Now: the review first, Live unchanged', (await page.locator('[data-bcn-plan-revisions-dialog]').evaluate((d) => d.hasAttribute('open'))) && (await repo()).versions === start.versions);
await page.click('[data-prvd-publish] button'); await page.waitForTimeout(2500);
const a1 = await repo();
check('Publish Now: one revision, nothing left behind', a1.versions === start.versions + 1 && !a1.drafts.some((d) => d.transient), JSON.stringify(a1));
check('still on Live', !new URL(page.url()).searchParams.has('draft'));

// 2. A date that moves what follows: Review and Publish shows the knock-on moves in the review (2026-10-29, Andy:
// "Publish Now (with no review) seems wrong"); Back to Edit, then Save to My Draft keeps it for later.
await openRow(proc);
await setEnd(20);
check('the button reads Review and Publish', (await label('[data-ped="publish"]')) === 'Review and Publish');
await page.click('[data-ped="publish"]'); await page.waitForTimeout(2500);
const cascadeRows = await page.locator('[data-prvd-rows] .bcn-prvd__cell--to .bcn-prvd__name').count();
check('a cascading edit: the review shows what it moves, Live unchanged', cascadeRows > 1 && (await repo()).versions === a1.versions, `${cascadeRows} rows`);
await page.click('[data-prvd-close] button'); await page.waitForTimeout(800);
check('Back to Edit returns to the drawer', await isOpen());
await page.click('[data-ped="save"]'); await page.waitForTimeout(2500);
const a2 = await repo();
check('Save to My Draft keeps it in your draft', a2.versions === a1.versions && a2.drafts.some((d) => d.owner === 'Andy Lovseth' && !d.transient && d.edits === 1), JSON.stringify(a2));
check('page switched into the draft', new URL(page.url()).searchParams.has('draft'));

// 3. Back on Live, the same item: your draft changes it, so the drawer opens there.
await gotoPlan(page, planID);
await openRow(proc);
check('opens in your draft', new URL(page.url()).searchParams.has('draft'), page.url());
check('drawer in the draft says Save', (await label('[data-ped="save"]')) === 'Save');
check('no Publish Now in the draft', !(await shown('[data-ped="publish"]')));
await page.keyboard.press('Escape'); await page.waitForTimeout(500);

// 4. Contributor: Save to My Draft, never Publish Now.
await gotoPlan(page, planID, '&user=Morgan%20Ellis');
await openRow(memo);
check('contributor: Save to My Draft, no Publish Now', (await label('[data-ped="save"]')).startsWith('Save to ') && !(await shown('[data-ped="publish"]')));
await setNotes('Morgan’s note.');
await page.click('[data-ped="save"]'); await page.waitForTimeout(2500);
check('contributor saved to their draft', (await repo()).drafts.some((d) => d.owner === 'Morgan Ellis' && d.edits === 1));

// 5. Andy on Live, the memo: Morgan's draft changes it now, so no Publish Now and the note says whose.
await gotoPlan(page, planID, '&user=Andy%20Lovseth');
await openRow(memo);
const note = await page.locator('[data-ped="where-text"]').textContent();
check('another draft: no Publish Now, note says whose', !(await shown('[data-ped="publish"]')) && note.includes('Morgan’s draft also changes'), note);
await page.screenshot({ path: OUT + 'drawer-other-draft.png' });
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
