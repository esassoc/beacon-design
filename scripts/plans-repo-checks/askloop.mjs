// The Ask to Publish loop (2026-10-29, the traps audit): someone who can publish finds the request on the index (Needs
// You), reviews it, and sends it back with a note; its owner finds that on the index and on their draft.
import { open, BASE, HIDE, OUT } from './lib.mjs';
const { browser, page } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const index = async (user) => { await page.goto(`${BASE}/prototypes/plans-repo/?user=${encodeURIComponent(user)}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500); };
const waiting = () => page.evaluate(() => [...document.querySelectorAll('[data-pri-waiting]:not([hidden])')].map((a) => a.textContent.trim()));

// Andy, an Owner: Sam (a Contributor) asked to publish his tagging re-sequence.
await index('Andy Lovseth');
check('the index says a request waits', (await waiting()).includes('1 Publish Request'), (await waiting()).join(' | '));
await page.locator('[data-pri-filter]').evaluate((t) => { t.value = 'you'; t.dispatchEvent(new CustomEvent('change', { detail: { value: 'you' }, bubbles: true })); }).catch(() => {});
await page.waitForTimeout(400);
await page.screenshot({ path: OUT + 'askloop-index.png' });
await page.locator('[data-pri-waiting]:not([hidden])').first().click(); await page.waitForTimeout(3000);
check('the link opens that draft', new URL(page.url()).searchParams.has('draft'), page.url());
await page.locator('[data-prp-review] button').click(); await page.waitForTimeout(2500);
const back = page.locator('[data-prvd-back]');
check('review offers Send Back', await back.evaluate((e) => !e.hidden));
await back.locator('button').click(); await page.waitForTimeout(800);
check('Send Back asks what to change; Publish steps aside', await page.locator('[data-prvd-back-note]').evaluate((e) => !e.hidden) && await page.locator('[data-prvd-publish]').evaluate((e) => e.hidden) && (await back.innerText()).includes('Send Back to Sam'));
await page.screenshot({ path: OUT + 'askloop-sendback.png' });
await page.locator('[data-prvd-back-note] input').fill('Keep the freshet tagging in January.');
await back.locator('button').click(); await page.waitForTimeout(2500);
check('the review closes', await page.locator('[data-bcn-plan-revisions-dialog][open]').count() === 0);
await index('Andy Lovseth');
check('the request is gone from the index', !(await waiting()).some((t) => t.includes('Publish Request')), (await waiting()).join(' | '));

// Sam: sent back, on the index and on the draft.
await index('Sam Okafor');
check('Sam’s index says sent back', (await waiting()).some((t) => t.includes('Your Draft Sent Back')), (await waiting()).join(' | '));
await page.locator('[data-pri-waiting]:not([hidden])').first().click(); await page.waitForTimeout(3000);
const note = page.locator('[data-prp-sentback]');
check('the draft shows the note', await note.evaluate((e) => !e.hidden) && (await note.innerText()).includes('January'), await note.innerText().catch(() => ''));
await page.screenshot({ path: OUT + 'askloop-sentback.png' });
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
