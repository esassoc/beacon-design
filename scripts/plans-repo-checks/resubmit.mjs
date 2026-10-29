// Resubmittals (2026-10-29, the product owner: "no Rejected or Revise and Resubmit result and no 'supersedes T-004'
// link for a resend"). Walks the path as the people in it: Alex records CDFW's Revisions Requested on T-004; the
// deliverable stays open and reads At Risk; Revise and Resubmit opens the dialog prefilled from T-004 and marked as
// superseding it; on send, T-004 reads Superseded by the new one and the new one Supersedes T-004 (both linked); the
// Transmittals card and the Deliverables view say Round 2 of Review; Rowan's inbox shows the new one and marks the old;
// an Accepted With Comments response offers Record Completion, prefilled, and the deliverable completes. Also reads the
// seeded example (the collection permit: T-006 sent back, T-007 out in round 2).
import { open, BASE, DEFAULTS, HIDE } from './lib.mjs';
const { browser, page, planID } = await open();
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const trp = async (id, user = 'Alex Rivera') => { await page.goto(`${BASE}/prototypes/plans-repo/transmittal/?plan=${planID}&id=${id}&user=${encodeURIComponent(user)}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500); };
const text = (sel) => page.locator(sel).first().innerText().catch(() => '');
const shown = (sel) => page.locator(sel).first().isVisible().catch(() => false);
const pick = (sel, value) => page.locator(sel).evaluate((el, v) => { el.value = v; el.dispatchEvent(new Event('change', { bubbles: true })); }, value);
const deliverableRow = async (name) => {
  await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}&view=deliverables&user=Alex%20Rivera`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
  return page.evaluate((n) => [...document.querySelectorAll('[data-pdv-rows] tr')].find((tr) => tr.textContent.includes(n))?.innerText.replace(/\s+/g, ' ') ?? '', name);
};

// ── 0. The seeded example: the collection permit, sent back and resubmitted ──
await trp('t7');
check('seed: T-007 supersedes T-006, linked', /Supersedes T-006; round 2 of review/.test(await text('[data-trp-line]')) && (await page.locator('[data-trp-line] a').first().getAttribute('href')).includes('id=t6'));
const seedRounds = await text('[data-trp-rounds-card]');
check('seed: Review Rounds lists both, Round 1 Revisions Requested', /Round 1[\s\S]*T-006[\s\S]*Revisions Requested[\s\S]*Round 2[\s\S]*T-007[\s\S]*Under Review/.test(seedRounds), seedRounds.replace(/\n+/g, ' / '));
await trp('t6');
check('seed: T-006 reads Superseded by T-007', /Superseded by T-007/.test(await text('[data-trp-line]')) && /Superseded/.test(await text('[data-trp-title-badges]')));

// ── 1. CDFW asks for revisions on T-004 ──
await trp('t4');
await page.locator('[data-trp-act="respond"] button').click(); await page.waitForTimeout(700);
const outcomes = await page.locator('[data-trp-outcome-select]').evaluate((el) => el.options.map((o) => o.label));
check('Record Response offers the outcomes', ['Accepted', 'Accepted With Comments', 'Revisions Requested', 'Rejected', 'Comments Only'].every((o) => outcomes.includes(o)), outcomes.join(', '));
await pick('[data-trp-outcome-select]', 'Revisions Requested');
await page.locator('[data-trp-response-text] textarea').fill('Section 4 needs a receiver retrieval plan; resubmit with it.');
await page.locator('[data-trp-response-save] button').click(); await page.waitForTimeout(900);
check('the response shows its outcome', /Revisions Requested/.test(await text('[data-trp-response-outcome]')));
check('Revise and Resubmit offered; Record Completion not', (await shown('[data-trp-act="resubmit"]')) && !(await shown('[data-trp-act="complete"]')));

// The deliverable stays open, At Risk, and says what's next.
const baseline = await page.locator('[data-trp-page-act="deliverable"] a').getAttribute('href');
await page.goto(new URL(baseline, BASE).href); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
const body = await page.evaluate(() => document.body.innerText);
check('item page: health At Risk, Revisions Requested not resubmitted', /At Risk/.test(body) && /Revisions Requested \w+ \d+, \d{4}, not resubmitted/.test(body));
check('item page: completion says to resubmit first', /T-004 came back Revisions Requested\. Revise and Resubmit/.test(body));
check('item page: T-004 row offers Revise and Resubmit', await page.locator('[data-tm-row]', { hasText: 'T-004' }).locator('[data-tm-act="resubmit"]').isVisible());
const backRow = await deliverableRow('Detailed baseline study plan');
check('Deliverables: At Risk, Open with Revisions Requested', /At Risk/.test(backRow) && /Open Revisions Requested/.test(backRow), backRow);

// ── 2. Revise and Resubmit ──
await trp('t4');
await page.locator('[data-trp-act="resubmit"] button').click(); await page.waitForTimeout(900);
const dlg = await page.evaluate(() => {
  const d = document.querySelector('[data-tmd-dialog]');
  return { heading: d.heading, alert: document.querySelector('[data-tmd-resubmit-text]')?.textContent ?? '', alertShown: !document.querySelector('[data-tmd-resubmit]').hidden, to: [].concat(document.querySelector('[data-tmd="to"]').value), purpose: document.querySelector('[data-tmd="purpose"]').value, checked: [...document.querySelectorAll('[data-tmd-enclosures] [data-file-check]')].filter((c) => c.checked).length };
});
check('the dialog is Revise and Resubmit, saying it supersedes T-004', dlg.heading === 'Revise and Resubmit' && dlg.alertShown && /Supersedes T-004/.test(dlg.alert), JSON.stringify(dlg));
check('prefilled: same recipients, purpose and an enclosure', dlg.to.length === 3 && dlg.purpose === 'For Comment' && dlg.checked >= 1, JSON.stringify(dlg));
await page.locator('[data-tmd-send] button').click(); await page.waitForTimeout(600);
await page.locator('[data-tmd-confirm]').getByRole('button', { name: 'Send' }).click(); await page.waitForTimeout(3000);
const newId = new URL(page.url()).searchParams.get('id');
const newNum = (await text('.page-layout__title h1')).match(/T-\d{3}/)?.[0] ?? '';
check('sent: the new transmittal page opens', !!newId && newId !== 't4' && !!newNum, page.url());
const newLine = await text('[data-trp-line]');
check(`${newNum} reads Supersedes T-004, round 2, linked`, /Supersedes T-004; round 2 of review/.test(newLine) && (await page.locator('[data-trp-line] a', { hasText: 'T-004' }).getAttribute('href')).includes('id=t4'), newLine);
check('Review Rounds: Round 1 T-004, Round 2 the new one', new RegExp(`Round 1[\\s\\S]*T-004[\\s\\S]*Round 2[\\s\\S]*${newNum}`).test(await text('[data-trp-rounds-card]')));
await trp('t4');
const oldLine = await text('[data-trp-line]');
check(`T-004 reads Superseded by ${newNum}, linked`, new RegExp(`Superseded by ${newNum}`).test(oldLine) && (await page.locator('[data-trp-line] a', { hasText: newNum }).getAttribute('href')).includes(`id=${newId}`), oldLine);
check('T-004: status Superseded, no Revise and Resubmit', /Superseded/.test(await text('[data-trp-title-badges]')) && !(await shown('[data-trp-act="resubmit"]')));

// The card and the view count the rounds.
await page.goto(new URL(baseline, BASE).href); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
const card = await text('[data-bcn-element-transmittals]');
const cardNote = await page.evaluate(() => document.querySelector('[data-bcn-element-transmittals]')?.closest('.bcn-elm, [data-elm]')?.querySelector('[data-elm-note]')?.textContent ?? document.querySelector('[data-elm-note]')?.textContent ?? '');
check('Transmittals card: Round 2 of Review, T-004 Superseded by the new one', /Round 2 of Review/.test(card + cardNote) && new RegExp(`Superseded by ${newNum}`).test(card), card.replace(/\n+/g, ' / '));
const roundRow = await deliverableRow('Detailed baseline study plan');
check('Deliverables: the new send, Round 2 of Review; no longer sent back', new RegExp(`${newNum}.*Round 2 of Review`).test(roundRow) && !/Revisions Requested/.test(roundRow), roundRow);

// ── 3. The agency reviewer ──
await page.goto(`${BASE}/prototypes/plans-repo/inbox/?user=Rowan%20Hale`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
const inbox = await page.evaluate(() => [...document.querySelectorAll('[data-tib-rows] [data-tib-row]')].map((r) => r.innerText.replace(/\s+/g, ' ')));
const newRow = inbox.find((r) => r.startsWith(newNum)) ?? '';
const oldRow = inbox.find((r) => r.startsWith('T-004')) ?? '';
check(`Rowan's inbox: ${newNum} waits on him, round 2, replaces T-004`, /Round 2, replaces T-004/.test(newRow) && /Confirm Receipt/.test(newRow), newRow);
check("Rowan's inbox: T-004 marked Superseded, nothing owed", /Superseded by/.test(oldRow) && /Superseded/.test(oldRow) && /None Owed/.test(oldRow) && !/Confirm Receipt/.test(oldRow), oldRow);
check(`Rowan's inbox: ${newNum} listed above T-004`, inbox.indexOf(newRow) < inbox.indexOf(oldRow));
await trp('t4', 'Rowan Hale');
check('Rowan on T-004: Superseded, pointed to the new one, no Confirm Receipt', /Superseded/.test(await text('[data-trp-mine-superseded]')) && (await page.locator('[data-trp-mine-superseded] a').getAttribute('href')).includes(`id=${newId}`) && !(await shown('[data-trp-confirm]')));
await trp(newId, 'Rowan Hale');
check(`Rowan on ${newNum}: it replaces T-004`, /replaces T-004, which came back Revisions Requested/.test(await text('[data-trp-mine-replaces]')));

// ── 4. Accepted With Comments, then completion ──
await trp(newId);
await page.locator('[data-trp-act="respond"] button').click(); await page.waitForTimeout(700);
await pick('[data-trp-outcome-select]', 'Accepted With Comments');
await page.locator('[data-trp-response-text] textarea').fill('Accepted with two comments on Section 4.');
await page.locator('[data-trp-response-save] button').click(); await page.waitForTimeout(900);
check('accepted: Record Completion offered, Revise and Resubmit not', (await shown('[data-trp-act="complete"]')) && !(await shown('[data-trp-act="resubmit"]')));
await page.locator('[data-trp-act="complete"] button').click(); await page.waitForTimeout(3000);
const cmd = await page.evaluate(() => ({ open: document.querySelector('[data-cmd-dialog]')?.open, result: document.querySelector('[data-cmd="result"]')?.value, by: document.querySelector('[data-cmd="accepted"]')?.value, lede: document.querySelector('[data-cmd-lede]')?.textContent }));
check('Record Completion opens on the item, prefilled from the response', cmd.open && cmd.result === 'Accepted With Comments' && /Filled in from T-\d{3}, Accepted With Comments/.test(cmd.lede ?? ''), JSON.stringify(cmd));
await page.locator('[data-cmd-save] button').click(); await page.waitForTimeout(1500);
const done = await page.evaluate(() => document.body.innerText);
check('completed: the result reads Accepted With Comments; status Completed', /Accepted With Comments/.test(await text('[data-elc-done]')) && /Completed/.test(done));
const doneRow = await deliverableRow('Detailed baseline study plan');
check('Deliverables: Completed, Accepted With Comments, Round 2 of Review', /Completed/.test(doneRow) && /Accepted With Comments/.test(doneRow) && /Round 2 of Review/.test(doneRow), doneRow);

check('no page errors', errs.length === 0, errs.slice(0, 3).join(' | '));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
