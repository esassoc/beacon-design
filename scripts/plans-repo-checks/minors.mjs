// Small traps (2026-10-29): a link to a closed draft says so and shows Live; a range in a new plan's name fills the
// window; the transmittal page's cards carry the muted header the item page's cards do.
import { open, BASE, HIDE, OUT } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };

await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&draft=gone1234`); await page.waitForTimeout(3000);
const toast = await page.evaluate(() => { const walk = (root) => [...root.querySelectorAll('*')].map((e) => (e.shadowRoot ? walk(e.shadowRoot) : '')).join(' ') + ' ' + (root.textContent ?? ''); const c = document.querySelector('esa-snackbar-container'); return c ? walk(c.shadowRoot ?? c) + ' ' + c.textContent : ''; }).then((t) => t.includes('That draft is closed'));
check('a closed draft’s link says so', toast && !page.url().includes('draft='), page.url());

await page.goto(`${BASE}/prototypes/plans-repo/`); await page.waitForTimeout(2500);
await page.click('[data-pri-new] button'); await page.waitForTimeout(700);
const win = async (text) => { await page.locator('[data-psu="name"] input').fill(text); await page.locator('[data-psu="name"] input').dispatchEvent('input'); await page.waitForTimeout(200); return page.evaluate(() => [document.querySelector('[data-psu="start"]').value, document.querySelector('[data-psu="end"]').value].join(' to ')); };
check('a year range', (await win('Smelt Monitoring 2027–2031')) === '2027-01-01 to 2031-12-31', await win('Smelt Monitoring 2027–2031'));
check('a short range', (await win('Smelt Monitoring 2027-29')) === '2027-01-01 to 2029-12-31');
check('a fiscal year', (await win('Smelt Monitoring FY 2027–28')) === '2027-07-01 to 2028-06-30', await win('Smelt Monitoring FY 2027–28'));
await page.keyboard.press('Escape');

const t = await page.evaluate((planID) => JSON.parse(localStorage.getItem('bcn-plan-records-v1')).plans.find((p) => p.planID === planID).transmittals.find((x) => x.number === 4).id, planID);
await page.goto(`${BASE}/prototypes/plans-repo/transmittal/?plan=${planID}&id=${t}&user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
check('transmittal cards have the muted header', await page.locator('[data-trp-sender] .esa-card--header-muted').count() >= 3);
await page.screenshot({ path: OUT + 'transmittal-chrome.png' });
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
