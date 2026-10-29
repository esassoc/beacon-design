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
const counts = (await page.locator('[data-prvd-counts]').innerText()).replace(/\s+/g, ' ');
check('the review counts the parent as moved, its items as followed', /1 Moved/.test(counts) && /6 Followed/.test(counts), counts);
const shifts = await page.locator('[data-prvd-rows] .bcn-prvd__cell--to .bcn-prvd__shift').allInnerTexts();
const names = await page.locator('[data-prvd-rows] .bcn-prvd__cell--to .bcn-prvd__name').allInnerTexts();
check('its items moved with it, by the same shift', names.length > 1 && new Set(shifts.map((t) => t.split('\n')[0])).size === 1, names.map((n, i) => `${n} ${shifts[i] ?? ''}`).join(' | '));
// The drawer matches the drag (Andy, same day): both dates moved 30 days in Reach 1's drawer carry its items 30 days.
await page.keyboard.press('Escape'); await page.waitForTimeout(500);
const reach = await page.evaluate(() => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith('Reach 1'))?.dataset.rowId);
const plan = () => page.evaluate(async () => { const id = new URLSearchParams(location.search).get('id'); const d = new URLSearchParams(location.search).get('draft'); for (const k of Object.keys(localStorage)) { try { const r = JSON.parse(localStorage.getItem(k))?.repos?.find?.((x) => x.planID === id); if (r) return r.drafts.find((x) => x.id === d)?.revisions.at(-1)?.overrides ?? []; } catch {} } return []; });
const before = new Map((await plan()).map((o) => [o.PlanElementID, o.StartDate]));
await page.click(`[data-select="${reach}"]`, { position: { x: 12, y: 8 } }); await page.waitForTimeout(1200);
const shift = (sel) => page.locator(sel).evaluate((f) => { const d = new Date(f.value + 'T00:00:00Z'); d.setUTCDate(d.getUTCDate() + 30); f.value = d.toISOString().slice(0, 10); f.dispatchEvent(new Event('change', { bubbles: true })); });
await shift('[data-ped="start"]'); await shift('[data-ped="end"]'); await page.waitForTimeout(300);
await page.click('[data-ped="save"]'); await page.waitForTimeout(2500);
const after = await plan();
const day = (iso) => Date.parse(iso + 'T00:00:00Z') / 86400000;
const moved = after.filter((o) => before.has(o.PlanElementID) && o.StartDate && before.get(o.PlanElementID) && day(o.StartDate) - day(before.get(o.PlanElementID)) === 30);
check('the drawer carries the items too', moved.length > 1, `${moved.length} moved 30 days of ${after.length}`);
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
