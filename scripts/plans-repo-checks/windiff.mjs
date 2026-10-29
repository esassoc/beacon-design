// A parent's planned window in the review (2026-10-29, Andy: "stating a diff but not showing it"): moving a parent's
// bar moves its stored window; the review names Planned Start and End, struck and marked, beside the shift. Moving it
// moves its items too, by the same days (Andy, same day), Scheduled items holding.
import { open, BASE, HIDE, DEFAULTS, dragRow } from './lib.mjs';
const { browser, page } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const geo = await page.evaluate(() => [...document.querySelectorAll('li.bcn-pri__row')].find((li) => li.textContent.includes('Geotechnical'))?.querySelector('[data-pri-name]')?.getAttribute('href'));
const id = new URL(geo, BASE).searchParams.get('id');
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${id}${DEFAULTS}&user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3500);
await page.locator('[data-prp-edit] button').click(); await page.waitForTimeout(2500);
const datesOf = () => page.evaluate(() => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); if (v?.plans?.[0]?.Elements) return v; } catch {} } });
await dragRow(page, 'Reach 1', 40); await page.waitForTimeout(2500);
const note = (await page.locator('[data-prp-status]').innerText()).replace(/\s+/g, ' ');
console.log('note:', note);
await page.locator('[data-prp-review] button').click(); await page.waitForTimeout(2500);
const from = await page.locator('[data-prvd-rows] .bcn-prvd__cell--from').first().innerText();
const to = await page.locator('[data-prvd-rows] .bcn-prvd__cell--to').first().innerText();
const struck = await page.locator('[data-prvd-rows] .bcn-prvd__cell--from del').count();
const marked = await page.locator('[data-prvd-rows] .bcn-prvd__cell--to ins').count();
check('the parent row names its planned window', /Planned Start/.test(from) && /Planned Start/.test(to), `${from} | ${to}`);
check('what moved is struck and marked', struck > 0 && marked > 0, `${struck} struck, ${marked} marked`);
const shifts = await page.locator('[data-prvd-rows] .bcn-prvd__cell--to .bcn-prvd__shift').allInnerTexts();
const names = await page.locator('[data-prvd-rows] .bcn-prvd__cell--to .bcn-prvd__name').allInnerTexts();
check('its items moved with it, by the same shift', names.length > 1 && new Set(shifts.map((t) => t.split('\n')[0])).size === 1, names.map((n, i) => `${n} ${shifts[i] ?? ''}`).join(' | '));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
