// An item's Edit, draft first (2026-10-28, Andy's call): the form saves to your draft (Review and Publish from there),
// Publish Now (the review on just this edit) only when no open draft changes the item and nothing else moves; your own draft touching it opens it there.
import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const repo = () => page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return { versions: r.versions.length, drafts: r.drafts.map((d) => ({ owner: d.owner, transient: !!d.transient, edits: d.revisions.length })) }; } catch {} } }, planID);
const ready = async () => { await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(800); };
const shown = (sel) => page.locator(sel).evaluate((el) => !el.hidden);
const openEdit = async () => { await page.click('[data-pep-action="edit"] button'); await page.waitForTimeout(900); };
const setNotes = (text) => page.locator('[data-eed="notes"]').evaluate((f, text) => (f.value = text), text);

await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(600);
const id = await page.evaluate(() => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith('Draft near-field survival memo'))?.dataset.rowId);
const url = `${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${id}`;
// A task with a successor: moving its end moves what follows.
const pid = await page.evaluate(() => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith('Acoustic tag & receiver procurement'))?.dataset.rowId);
const purl = `${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${pid}`;
await page.goto(purl); await ready();
check('header says Edit', (await page.locator('[data-pep-action="edit"]').innerText()).trim() === 'Edit');
check('no Review and Publish on Live', !(await shown('[data-pep-action="review"]')));
const start = await repo();

// 1. A dated edit that moves other items: Publish Now steps aside; Save to My Draft, then Review and Publish.
await openEdit();
check('form opens', await page.locator('[data-eed-dialog][open]').count() === 1);
check('submit says Save to My Draft', (await page.locator('[data-eed-submit-label]').textContent()) === 'Save to My Draft');
check('Publish Now offered', await shown('[data-eed-publish]'), await page.locator('[data-eed-where]').textContent());
await page.screenshot({ path: OUT + 'edit-form.png' });
await page.evaluate(() => {
  const end = document.querySelector('[data-eed="end"]'); const d = new Date(end.value + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + 30); end.value = d.toISOString().slice(0, 10);
});
await page.locator('[data-eed-add-owner]').click(); await page.keyboard.type('Priya'); await page.waitForTimeout(400); await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
await page.click('[data-eed-publish] button'); await page.waitForTimeout(1500);
const where = await page.locator('[data-eed-where]').textContent();
check('a cascading edit: back to the form, Publish Now gone', /^It moves \d+ other/.test(where) && (await page.locator('[data-eed-dialog][open]').count()) === 1 && !(await shown('[data-eed-publish]')), where);
{
  const kept = await page.locator('[data-eed-owners]').innerText();
  check('form kept the edit', kept.includes('Priya'), kept);
  check('nothing published', (await repo()).versions === start.versions);
  await page.screenshot({ path: OUT + 'edit-moves.png' });
  await page.click('[data-eed-submit] button'); await page.waitForTimeout(1500);
  check('page follows into the draft', new URL(page.url()).searchParams.has('draft'), page.url());
  check('Review and Publish in the draft', await shown('[data-pep-action="review"]'));
  const mine = (await repo()).drafts.find((d) => d.owner === 'Andy Lovseth' && !d.transient);
  check('saved to Andy’s draft', !!mine && mine.edits >= 1, JSON.stringify(mine));
  await page.click('[data-pep-action="review"] button'); await page.waitForTimeout(2200);
  const heading = await page.locator('[data-bcn-plan-revisions-dialog]').evaluate((d) => d.heading);
  check('review opens on your draft', heading.startsWith('Review Your Draft'), heading);
  await page.screenshot({ path: OUT + 'edit-review.png' });
  await page.locator('[data-prvd-publish] button').click(); await page.waitForTimeout(3000);
  check('back on Live after publishing', !new URL(page.url()).searchParams.has('draft'), page.url());
  const after = await repo();
  check('published one revision, draft gone', after.versions === start.versions + 1 && !after.drafts.some((d) => d.owner === 'Andy Lovseth'), JSON.stringify(after));
  const det = await page.locator('[data-element-module="details"]').innerText();
  check('Live shows Priya', det.includes('Priya'), det.replace(/\n/g, ' | ').slice(0, 260));
}

// 2. A notes-only edit, nothing else moves and no draft touches it: Publish Now opens the review on just this edit
// (2026-10-29, every Publish Now shows the diff first); Live holds until the review's Publish.
await page.goto(url); await ready();
const before2 = await repo();
await openEdit();
check('Publish Now offered again', await shown('[data-eed-publish]'));
await setNotes('Published straight from the item page.');
await page.click('[data-eed-publish] button'); await page.waitForTimeout(2500);
check('Publish Now: the review first, Live unchanged', (await page.locator('[data-bcn-plan-revisions-dialog]').evaluate((d) => d.hasAttribute('open'))) && (await repo()).versions === before2.versions);
await page.click('[data-prvd-publish] button'); await page.waitForTimeout(2500);
const after2 = await repo();
check('Publish Now: one revision, no draft left', after2.versions === before2.versions + 1 && !after2.drafts.some((d) => d.transient), JSON.stringify(after2));
check('still on Live', !new URL(page.url()).searchParams.has('draft'));

// 3. Someone else's draft changes the item: no Publish Now, and the form says whose.
await page.goto(url + '&user=Alex%20Rivera'); await ready();
await openEdit();
await setNotes('Alex’s take.');
await page.click('[data-eed-submit] button'); await page.waitForTimeout(1500);
check('Alex saved to his draft', (await repo()).drafts.some((d) => d.owner === 'Alex Rivera' && d.edits >= 1));
await page.goto(url + '&user=Andy%20Lovseth'); await ready();
await openEdit();
const whereAlex = await page.locator('[data-eed-where]').textContent();
check('Publish Now hidden while Alex’s draft touches it', !(await shown('[data-eed-publish]')) && whereAlex.includes('Alex’s draft also changes'), whereAlex);
await page.screenshot({ path: OUT + 'edit-other-draft.png' });

// 4. Your own draft touches it: Edit opens it there, on the draft's version.
await setNotes('Andy’s draft note.');
await page.click('[data-eed-submit] button'); await page.waitForTimeout(1500);
await page.goto(url); await ready();
await openEdit(); await page.waitForTimeout(900);
check('Edit follows into your draft', new URL(page.url()).searchParams.has('draft'), page.url());
check('form says Save to Draft', (await page.locator('[data-eed-submit-label]').textContent()) === 'Save to Draft');
check('form shows the draft’s notes', (await page.locator('[data-eed="notes"]').evaluate((f) => f.value)) === 'Andy’s draft note.');
await page.click('[data-eed-cancel] button'); await page.waitForTimeout(400);

// 5. A contributor: their draft, never Publish Now.
await page.goto(url + '&user=Morgan%20Ellis'); await ready();
await openEdit();
check('contributor: Save to My Draft, no Publish Now', (await page.locator('[data-eed-submit-label]').textContent()) === 'Save to My Draft' && !(await shown('[data-eed-publish]')));
await page.locator('[data-eed="name"]').evaluate((f) => (f.value = f.value + ' (rev)'));
await page.click('[data-eed-submit] button'); await page.waitForTimeout(1200);
check('contributor saved', (await repo()).drafts.some((d) => d.owner === 'Morgan Ellis' && d.edits === 1));
check('contributor gets Ask to Publish, not Review and Publish', (await shown('[data-pep-action="review"]')) && (await page.locator('[data-pep-action="review"]').innerText()).trim() === 'Ask to Publish');
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
