// People changes in Plan Settings (2026-10-29, the traps audit): lowering your own role, or removing someone with a
// draft, asks first and says what follows.
import { open, BASE, HIDE } from './lib.mjs';
const { browser, page } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
await page.goto(`${BASE}/prototypes/plans-repo/?user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
await page.locator('li.bcn-pri__row', { has: page.locator('[data-pri-name]:text-is("Fisheries Evaluation Studies")') }).locator('[data-pri-settings] button').click(); await page.waitForTimeout(900);
await page.locator('[data-psu-link="people"]').click(); await page.waitForTimeout(300);
const row = (name) => page.locator('.bcn-psu__person, [data-psu-people] > *', { hasText: name }).first();
check('Remove names its person', (await row('Alex Rivera').locator('[data-person-remove] button').getAttribute('aria-label')) === 'Remove Alex Rivera');
await row('Alex Rivera').locator('[data-person-remove] button').click(); await page.waitForTimeout(300);
await row('Andy Lovseth').locator('[data-person-role]').evaluate((s) => { s.value = 'Editor'; s.dispatchEvent(new Event('change', { bubbles: true })); });
// another Owner, so the plan still has one
const owners = await page.evaluate(() => [...document.querySelectorAll('[data-person-role]')].filter((s) => s.value === 'Owner').length);
if (!owners) await page.locator('[data-person-role]').first().evaluate((s) => { s.value = 'Owner'; s.dispatchEvent(new Event('change', { bubbles: true })); });
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(800);
const said = await page.locator('esa-confirm-dialog[open]').evaluate((d) => d.message).catch(() => '');
check('saving asks, naming your new role', /You become an Editor/.test(said), said);
check('and the removed person’s draft', /Alex's draft \(Permit delay scenario\) stays/.test(said), said);
await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: 'Keep Editing' }).click(); await page.waitForTimeout(300);
check('Keep Editing keeps the dialog', await page.locator('[data-psu-save]').isVisible());
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
