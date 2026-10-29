// Organizations as owners (2026-10-28, the SOW review): an agency or firm can own an item in its own right, shown with
// a square avatar and its full name.
import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(600);
const id = await page.evaluate(() => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith('Draft near-field survival memo'))?.dataset.rowId);
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${id}`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(800);
await page.click('[data-pep-action="edit"] button'); await page.waitForTimeout(900);
const opts = await page.locator('[data-eed-add-owner]').evaluate((c) => (c.options ?? []).map((o) => o.label));
check('the owner picker offers organizations', opts.includes('CDFW (Organization)') && opts.some((o) => o.includes('(ESA)')), opts.slice(-4).join(' | '));
await page.locator('[data-eed-add-owner]').click(); await page.keyboard.type('CDFW (Org'); await page.waitForTimeout(400); await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
await page.click('[data-eed-publish] button'); await page.waitForTimeout(2500);
const det = await page.locator('[data-element-module="details"]').innerText();
check('Details names the agency as an owner', det.includes('CDFW') && det.includes('California Department of Fish and Wildlife'), det.replace(/\n/g, ' | ').slice(0, 240));
check('its avatar is square', await page.evaluate(() => [...document.querySelectorAll('[data-element-module="details"] .esa-avatar')].some((a) => /square/.test(a.className))));
await page.locator('[data-element-module="details"]').screenshot({ path: OUT + 'org-owner.png' });
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
