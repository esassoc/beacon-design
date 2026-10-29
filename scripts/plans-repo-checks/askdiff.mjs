// Ask to Publish from the review (2026-10-29, Andy: "more of a diff view"): a Contributor's Ask opens the review modal,
// each change side by side, an optional note, then the request; the reviewer reads the note there.
import { open, BASE, HIDE, OUT, DEFAULTS } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const go = async (q) => { await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}${q}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3500); };

// Andy sends Sam's seeded request back, so Sam can ask again.
await go('&user=Andy%20Lovseth');
const samDraft = await page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const r = JSON.parse(localStorage.getItem(k))?.repos?.find?.((x) => x.planID === planID); if (r) return r.drafts.find((d) => d.owner === 'Sam Okafor').id; } catch {} } }, planID);
await go(`&draft=${samDraft}&user=Andy%20Lovseth`);
await page.locator('[data-prp-review] button').click(); await page.waitForTimeout(2500);
await page.locator('[data-prvd-back] button').click(); await page.waitForTimeout(500);
await page.locator('[data-prvd-back] button').click(); await page.waitForTimeout(2500);

// Sam asks from the review.
await go(`&draft=${samDraft}&user=Sam%20Okafor`);
await page.locator('[data-prp-ask] button').click(); await page.waitForTimeout(2500);
const dlg = page.locator('[data-bcn-plan-revisions-dialog][open]');
check('Ask opens the review modal', await dlg.count() === 1);
check('it shows the changes side by side', (await page.locator('[data-prvd-rows]').innerText()).length > 20);
check('heading says Ask to Publish', /Ask to Publish Your Draft/.test(await dlg.evaluate((d) => d.heading)));
check('the footer asks for the whole draft', /Ask to Publish All 2 Edits/.test(await page.locator('[data-prvd-ask]').innerText()), await page.locator('[data-prvd-ask]').innerText());
await page.locator('[data-prvd-ask-note] input').fill('Freshet tagging moved to match the new permit window.');
await page.screenshot({ path: OUT + 'askdiff.png' });
await page.locator('[data-prvd-ask] button').click(); await page.waitForTimeout(1500);
check('the review closes, the draft reads requested', await dlg.count() === 0 && await page.locator('[data-prp-asked]').isVisible());

// Andy reads the note in the review.
await go(`&draft=${samDraft}&user=Andy%20Lovseth`);
await page.locator('[data-prp-review] button').click(); await page.waitForTimeout(2500);
const note = page.locator('[data-prvd-asknote]');
check('the reviewer sees the note', await note.isVisible() && (await note.innerText()).includes('permit window'), await note.innerText().catch(() => ''));
await page.screenshot({ path: OUT + 'askdiff-reviewer.png' });
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
