// Health on the chart (2026-10-28, the SOW review): bars colored by health, a key under the chart, and a Health filter
// over every task and milestone (Late, At Risk, Due in 30 Days, Blocked, Complete); the sample always has one late
// and one due-soon deliverable, dated from the day it's seeded.
import { open, gotoPlan } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const names = () => page.evaluate(() => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].map((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim()));
const pick = async (values) => {
  await page.locator('[data-prp-health]').evaluate((f, values) => f.dispatchEvent(new CustomEvent('selection-change', { detail: { value: values }, bubbles: true })), values);
  await page.waitForTimeout(500);
};
await gotoPlan(page, planID);
const marks = await page.evaluate(() => ({ late: document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__mark--health-late').length, done: document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__mark--health-done').length }));
check('a late bar and complete bars are colored', marks.late >= 1 && marks.done >= 2, JSON.stringify(marks));
check('the key shows', await page.locator('[data-prp-legend]').evaluate((e) => !e.hidden));
await pick(['Late']);
const late = await names();
check('Health: Late keeps the late permit', late.some((n) => n.startsWith('Predator survey collection permit')) && !late.some((n) => n.startsWith('Quarterly agency')), late.join(' | '));
await page.screenshot({ path: OUT + 'health-late.png' });
await pick(['Due in 30 Days']);
const soon = await names();
check('Health: Due in 30 Days keeps the memo', soon.some((n) => n.startsWith('Quarterly agency coordination memo')), soon.join(' | '));
await pick([]);
check('clearing shows every row', (await names()).length > 20, String((await names()).length));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
