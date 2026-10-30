// Every way an edit starts (2026-10-29, the entry points audit): from Live each one opens or starts your draft, says so,
// and nothing reaches Live unseen. Every Publish Now shows the review (the diff against Live) first; Live's revision
// count holds until the review's Publish is clicked. Back to Edit returns to the form and leaves nothing behind.
// Owner (Andy) and Contributor (Sam), from Live and from inside the draft.
import { open, gotoPlan, dragRow, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const repo = () => page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return { versions: r.versions.length, transient: r.drafts.filter((d) => d.transient).length, edits: Object.fromEntries(r.drafts.filter((d) => !d.transient).map((d) => [d.owner.split(' ')[0], d.revisions.length])) }; } catch {} } }, planID);
const inDraft = () => new URL(page.url()).searchParams.has('draft');
const idOf = (name) => page.evaluate((name) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.dataset.rowId, name);
const shown = (sel) => page.locator(sel).first().evaluate((el) => { const b = el.closest('.esa-button') ?? el; return !b.hidden && !el.closest('[hidden]') && getComputedStyle(b).display !== 'none'; }).catch(() => false);
const label = (sel) => page.locator(`${sel} .esa-button__label`).first().textContent().then((t) => t.trim());
const review = '[data-bcn-plan-revisions-dialog]';
const reviewOpen = () => page.locator(review).evaluate((d) => d.hasAttribute('open'));
const heading = () => page.locator(review).evaluate((d) => d.heading ?? '');
const drawerOpen = () => page.evaluate(() => [...document.querySelectorAll('esa-side-dialog')].some((d) => d.open));
const alerts = () => page.evaluate(() => { const walk = (root) => [...root.querySelectorAll('*')].map((e) => (e.shadowRoot ? walk(e.shadowRoot) : '')).join(' ') + ' ' + (root.textContent ?? ''); const c = document.querySelector('esa-snackbar-container'); return c ? walk(c.shadowRoot ?? c) + ' ' + c.textContent : ''; }).then((t) => t.replace(/\s+/g, ' ').trim());
const openRow = async (id) => { await page.click(`[data-select="${id}"]`, { position: { x: 12, y: 8 } }); await page.waitForTimeout(1200); };
const setNotes = (sel, text) => page.locator(sel).evaluate((f, text) => { f.value = text; f.dispatchEvent(new Event('input', { bubbles: true })); f.dispatchEvent(new Event('change', { bubbles: true })); }, text);
const itemPage = async (id, user = 'Andy%20Lovseth') => { await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${id}&user=${user}`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(900); };

await gotoPlan(page, planID);
const memo = await idOf('Draft near-field survival memo');
let r0 = await repo();

// ── 1. Owner, the drawer's Publish Now on Live: the review first, Live unchanged until its Publish ──
await openRow(memo);
check('drawer: Publish Now offered on Live', await shown('[data-ped="publish"]'));
check('drawer: the info box says where it goes, then Review and Publish this edit now', /^(Goes into|Starts a new draft).*Or Review and Publish this edit now/.test(await page.locator('[data-ped="where-text"]').textContent()), await page.locator('[data-ped="where-text"]').textContent());
await setNotes('[data-ped="notes"]', 'Entry points: drawer, Publish Now.');
await page.click('[data-ped="publish"]'); await page.waitForTimeout(2500);
let r1 = await repo();
check('drawer Publish Now: the review opens', await reviewOpen(), await heading());
check('drawer Publish Now: titled Review Your Edit', /^Review Your Edit/.test(await heading()), await heading());
check('drawer Publish Now: Live unchanged while reviewing', r1.versions === r0.versions, JSON.stringify(r1));
check('drawer Publish Now: the diff lists the change', /Notes/.test(await page.locator('[data-prvd-rows]').innerText()), (await page.locator('[data-prvd-rows]').innerText()).slice(0, 160).replace(/\n/g, ' | '));
await page.screenshot({ path: OUT + 'entry-drawer-review.png' });
check('drawer review: Back to Edit', (await page.locator('[data-prvd-close-label]').textContent()).trim() === 'Back to Edit');
await page.click('[data-prvd-close]'); await page.waitForTimeout(1200);
r1 = await repo();
check('Back to Edit: review shut, drawer still open', !(await reviewOpen()) && (await drawerOpen()));
check('Back to Edit: nothing published, nothing left behind', r1.versions === r0.versions && r1.transient === 0, JSON.stringify(r1));
check('Back to Edit: the typed note kept', (await page.locator('[data-ped="notes"]').evaluate((f) => f.value)) === 'Entry points: drawer, Publish Now.');
await page.click('[data-ped="publish"]'); await page.waitForTimeout(2500);
check('Publish Now again: the review again', await reviewOpen());
check('still unchanged before Publish', (await repo()).versions === r0.versions);
await page.click('[data-prvd-publish] button'); await page.waitForTimeout(2500);
r1 = await repo();
check('the review’s Publish lands it: one revision', r1.versions === r0.versions + 1 && r1.transient === 0, JSON.stringify(r1));
check('drawer closed, still on Live', !(await drawerOpen()) && !inDraft());

// ── 2. The default (issued) Live doesn't drag at all: a drag changes nothing anywhere ──
await gotoPlan(page, planID);
r0 = await repo();
await dragRow(page, 'Detailed baseline study plan', 60);
let r2 = await repo();
check('issued Live: a drag changes neither Live nor a draft', !inDraft() && r2.versions === r0.versions && JSON.stringify(r2.edits) === JSON.stringify(r0.edits), JSON.stringify(r2));

// ── 3. A Live that drags (the pencil study): your draft starts, takes the move, and says so ──
await gotoPlan(page, planID, '&concept=pencil');
await dragRow(page, 'Detailed baseline study plan', 60);
r2 = await repo();
check('drag on Live: into your new draft', inDraft() && r2.edits.Andy === 1, JSON.stringify(r2));
check('drag on Live: Live unchanged', r2.versions === r0.versions);
check('drag on Live: told where it went', /Saved to your draft/.test(await alerts()), await alerts());

// ── 4. A drag on Live when your draft already has edits: it opens and keeps the move (it used to drop it) ──
await gotoPlan(page, planID, '&concept=pencil');
check('back on Live', !inDraft());
await dragRow(page, 'Acoustic tag & receiver procurement', 60);
r2 = await repo();
check('second drag on Live: your draft opens with the move', inDraft() && r2.edits.Andy === 2, JSON.stringify(r2));
check('second drag: Live unchanged', r2.versions === r0.versions);
check('second drag: told where it went', /Saved to your draft/.test(await alerts()), await alerts());

// ── 5. The outline's Move Up on Live: into your draft, said ──
await gotoPlan(page, planID);
{
  const id = await idOf('Draft near-field survival memo');
  await page.hover(`.bcn-plan-gantt__item[data-row-id="${id}"]`);
  await page.click(`.bcn-plan-gantt__item[data-row-id="${id}"] esa-dropdown-menu button`); await page.waitForTimeout(300);
  await page.getByRole('menuitem', { name: 'Move Up' }).click(); await page.waitForTimeout(1500);
}
r2 = await repo();
check('Move Up on Live: into your draft', inDraft() && r2.edits.Andy === 3, JSON.stringify(r2));
check('Move Up on Live: told where it went', /Saved to your draft/.test(await alerts()), await alerts());

// ── 6. The budget sheet on Live: the first figure opens your draft and lands there, said ──
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&view=budget`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pbs-grid] .ag-cell.bcn-pbs__editable'); await page.waitForTimeout(900);
{
  const cell = page.locator('[data-pbs-grid] .ag-center-cols-container .ag-cell.bcn-pbs__editable').first();
  await cell.click(); await page.waitForTimeout(200);
  await page.keyboard.press('Enter'); await page.waitForTimeout(200);
  await page.keyboard.press('Control+A'); await page.keyboard.type('123k'); await page.keyboard.press('Enter'); await page.waitForTimeout(2000);
}
r2 = await repo();
check('budget on Live: into your draft', inDraft() && r2.edits.Andy === 4 && r2.versions === r0.versions, JSON.stringify(r2));
check('budget on Live: told where it went', /Saved to your draft/.test(await alerts()), await alerts());

// ── 7. Review and Publish from the draft: the review, Live unchanged until Publish ──
await page.click('[data-prp-review] button'); await page.waitForTimeout(2500);
check('Review and Publish: the review opens', await reviewOpen() && /^Review Your Draft/.test(await heading()), await heading());
check('Review and Publish: Live unchanged', (await repo()).versions === r0.versions);
await page.click('[data-prvd-close]'); await page.waitForTimeout(800);

// ── 8. The item page's Edit, Publish Now: the review first; Back to Edit returns to the form ──
await gotoPlan(page, planID);
const plain = await idOf('Predation exposure model build');
await itemPage(plain);
r0 = await repo();
await page.click('[data-pep-action="edit"] button'); await page.waitForTimeout(900);
const offered = await page.locator('[data-eed-publish]').evaluate((el) => !el.hidden);
check('item Edit: Publish Now offered', offered, await page.locator('[data-eed-where]').textContent());
await page.locator('[data-eed="notes"]').evaluate((f) => (f.value = 'Entry points: item page, Publish Now.'));
await page.click('[data-eed-publish] button'); await page.waitForTimeout(2500);
check('item Publish Now: the review opens', await reviewOpen() && /^Review Your Edit/.test(await heading()), await heading());
check('item Publish Now: Live unchanged while reviewing', (await repo()).versions === r0.versions);
await page.screenshot({ path: OUT + 'entry-item-review.png' });
await page.click('[data-prvd-close]'); await page.waitForTimeout(1200);
check('item Back to Edit: the form again, the note kept', (await page.locator('[data-eed-dialog][open]').count()) === 1 && (await page.locator('[data-eed="notes"]').evaluate((f) => f.value)) === 'Entry points: item page, Publish Now.');
let r6 = await repo();
check('item Back to Edit: nothing published, nothing left behind', r6.versions === r0.versions && r6.transient === 0, JSON.stringify(r6));
await page.click('[data-eed-publish] button'); await page.waitForTimeout(2500);
check('item Publish Now again: the review', await reviewOpen());
await page.click('[data-prvd-publish] button'); await page.waitForTimeout(2500);
r6 = await repo();
check('item: the review’s Publish lands it', r6.versions === r0.versions + 1 && r6.transient === 0, JSON.stringify(r6));

// ── 9. Contributor (Sam): no Publish Now anywhere; edits go to the draft; Ask to Publish opens the review ──
await gotoPlan(page, planID, '&user=Sam%20Okafor');
r0 = await repo();
await openRow(memo);
check('contributor drawer: Save to My Draft, no Publish Now', (await label('[data-ped="save"]')).startsWith('Save to ') && !(await shown('[data-ped="publish"]')));
await setNotes('[data-ped="notes"]', 'Sam’s note.');
await page.click('[data-ped="save"]'); await page.waitForTimeout(2500);
let r7 = await repo();
check('contributor drawer: into Sam’s draft, said', inDraft() && r7.edits.Sam === (r0.edits.Sam ?? 0) + 1 && /Ask to Publish/.test(await alerts()), JSON.stringify(r7) + ' ' + (await alerts()));
await page.click('[data-prp-ask] button'); await page.waitForTimeout(2500);
check('contributor Ask to Publish: the review opens', await reviewOpen() && /Ask to Publish/.test(await heading()), await heading());
check('contributor: no Publish in the review', !(await shown('[data-prvd-publish]')));
await page.click('[data-prvd-close]'); await page.waitForTimeout(800);
await itemPage(memo, 'Sam%20Okafor');
await page.goto(page.url()); await page.waitForTimeout(500);
{
  const d = await page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return r.drafts.find((d) => d.owner === 'Sam Okafor')?.id; } catch {} } }, planID);
  await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${memo}&draft=${d}&user=Sam%20Okafor`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(900);
}
check('contributor item page in their draft: Ask to Publish', (await shown('[data-pep-action="review"]')) && (await page.locator('[data-pep-action="review"]').innerText()).trim() === 'Ask to Publish');
await page.click('[data-pep-action="review"] button'); await page.waitForTimeout(2500);
check('contributor item page: the review with Ask', await reviewOpen() && (await shown('[data-prvd-ask]')) && !(await shown('[data-prvd-publish]')), await heading());
await page.click('[data-prvd-close]'); await page.waitForTimeout(800);
check('contributor: Live never changed', (await repo()).versions === r0.versions);

console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
