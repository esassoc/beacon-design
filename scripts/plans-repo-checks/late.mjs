// Late across plans (2026-10-29, the traps audit): each index row counts its late items and links to the plan with
// Health on Late; Has Late Items keeps only those plans.
import { open, BASE, HIDE } from './lib.mjs';
const { browser, page } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
await page.goto(`${BASE}/prototypes/plans-repo/?user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
const late = await page.evaluate(() => [...document.querySelectorAll('[data-pri-late]:not([hidden])')].map((a) => a.textContent.trim()));
check('a row counts its late items', late.some((t) => /^\d+ Late$/.test(t)), late.join(' | '));
await page.locator('[data-pri-filter]').evaluate((t) => { t.value = 'late'; t.dispatchEvent(new CustomEvent('change', { detail: { value: 'late' }, bubbles: true })); });
await page.waitForTimeout(400);
const rows = await page.locator('li.bcn-pri__row').count();
check('Has Late Items keeps those plans', rows === late.length, `${rows} rows, ${late.length} late`);
await page.locator('[data-pri-late]:not([hidden])').first().click(); await page.waitForTimeout(3500);
const shown = await page.evaluate(() => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].filter((li) => getComputedStyle(li).display !== 'none' && !li.hidden).length);
const label = await page.locator('[data-prp-health]').evaluate((f) => f.shadowRoot?.textContent ?? '');
check('the plan opens on Late', page.url().includes('health=Late') && /Health\s+1/.test(label), label.trim().slice(0, 40));
await page.screenshot({ path: '/tmp/plans-repo-checks/late-plan.png' });
console.log('rows on chart', shown);
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
