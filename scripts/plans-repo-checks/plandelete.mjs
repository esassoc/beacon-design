// Deleting a plan (2026-10-29, the traps audit): a send still out holds it; otherwise the confirm names what goes, and
// the plan's records go with it.
import { open, BASE } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const ask = () => page.locator('esa-confirm-dialog[open]').evaluate((d) => `${d.heading} | ${d.message}`);
const settingsOf = async (name) => {
  await page.goto(`${BASE}/prototypes/plans-repo/?user=Andy%20Lovseth`); await page.waitForTimeout(2500);
  await page.locator('li.bcn-pri__row', { has: page.locator(`[data-pri-name]:text-is("${name}")`) }).first().locator('[data-pri-settings] button').click();
  await page.waitForTimeout(900);
  await page.locator('[data-psu-link="danger"]').click(); await page.waitForTimeout(250);
  await page.locator('[data-psu-delete] button').click(); await page.waitForTimeout(700);
};
await settingsOf('Fisheries Evaluation Studies');
const held = await ask();
check('a plan with a send out is held', /Sends Still Out/.test(held) && /T-004/.test(held), held);
await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: 'Keep Plan' }).click(); await page.waitForTimeout(400);
const others = await page.evaluate(() => [...document.querySelectorAll('[data-pri-name]')].map((a) => a.textContent.trim()).filter((n) => n !== 'Fisheries Evaluation Studies'));
await page.keyboard.press('Escape'); await page.waitForTimeout(400);
await settingsOf(others[0]);
const said = await ask();
check('the confirm names what goes', /revision/.test(said) && /can’t be undone/.test(said), said);
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
