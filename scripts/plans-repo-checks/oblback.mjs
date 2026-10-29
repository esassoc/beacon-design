// The obligation's side of the join (2026-10-28, the SOW review): 3-032's page lists the plan items that serve it,
// each linking to its item page.
import { open, BASE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
await page.goto(`${BASE}/prototypes/data-catalog-obligation/3-032/`); await page.waitForTimeout(2500);
const rows = await page.locator('[data-opi-list] li').allInnerTexts();
check('3-032 lists the plan items serving it', rows.length >= 3 && rows.some((r) => r.includes('Detailed baseline study plan')), rows.map((r) => r.replace(/\n/g, ' ')).join(' | '));
check('each says its plan', rows.every((r) => r.includes('Fisheries Evaluation Studies')));
await page.locator('[data-bcn-obligation-plan-items]').screenshot({ path: OUT + 'obligation-items.png' });
await page.locator('[data-opi-list] a', { hasText: 'Detailed baseline study plan' }).click(); await page.waitForTimeout(2000);
check('the link opens the item page', page.url().includes('/plans-repo/element/') && (await page.locator('[data-element-module="obligations"]').innerText()).includes('3-032'));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
