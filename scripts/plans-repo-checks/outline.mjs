// Building a plan from scratch (2026-10-28, the build-from-scratch review): an empty plan says where its first item
// comes from; Add, + Add on a row, Move Down, Delete and a new link go to your draft; Review and Publish lands them.
import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const names = () => page.evaluate(() => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].map((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim()));
const rowID = (name) => page.evaluate((name) => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim() === name)?.dataset.rowId, name);
const fill = async (name, start, end) => {
  await page.waitForTimeout(700);
  await page.locator('[data-ped="name"]').evaluate((f, v) => { f.value = v; f.dispatchEvent(new Event('input', { bubbles: true })); f.dispatchEvent(new Event('change', { bubbles: true })); }, name);
  for (const [k, v] of [['start', start], ['end', end]]) await page.locator(`[data-ped="${k}"]`).evaluate((f, v) => { f.value = v; f.dispatchEvent(new Event('input', { bubbles: true })); f.dispatchEvent(new Event('change', { bubbles: true })); }, v);
  await page.waitForTimeout(200);
  await page.click('[data-ped="save"]'); await page.waitForTimeout(1500);
};
const rowAction = async (name, which) => {
  const id = await rowID(name);
  await page.hover(`.bcn-plan-gantt__item[data-row-id="${id}"]`);
  if (which === 'add') await page.click(`.bcn-plan-gantt__item[data-row-id="${id}"] .bcn-plan-gantt__actions esa-tooltip button`);
  else {
    await page.click(`.bcn-plan-gantt__item[data-row-id="${id}"] esa-dropdown-menu button`); await page.waitForTimeout(300);
    await page.getByRole('menuitem', { name: which }).click();
  }
  await page.waitForTimeout(900);
};

// A new, blank plan.
await page.click('[data-pri-new] button'); await page.waitForTimeout(700);
await page.locator('[data-psu="name"]').click(); await page.keyboard.type('Delta Smelt Monitoring 2027');
await page.waitForTimeout(300);
const win = await page.evaluate(() => [document.querySelector('[data-psu="start"]').value, document.querySelector('[data-psu="end"]').value]);
check('a year in the name fills the planned window', win[0] === '2027-01-01' && win[1] === '2027-12-31', win.join(' to '));
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(2500);
await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(1000);
check('landed on the new plan', page.url().includes('/plan/?id='));
check('empty state shows', await page.locator('[data-prp-empty]').evaluate((e) => !e.hidden));
const addLabel = (await page.locator('[data-prp-empty-add-label]').textContent()).trim();
check('empty state offers Add Program', addLabel === 'Add Program', addLabel);
const span = await page.locator('[data-prp-span]').textContent();
check('About reads the planned window', span.includes('Planned Jan 1, 2027'), span);
const rangeText = await page.evaluate(() => [...document.querySelectorAll('[data-bcn-plan-range] esa-date-picker')].map((d) => d.value).join(' to '));
check('the range opens on the planned window', rangeText === '2027-01-01 to 2027-12-31', rangeText);
await page.screenshot({ path: OUT + 'outline-empty.png' });

// First item from the empty state: your draft opens, the drawer creates.
await page.click('[data-prp-empty-add] button'); await page.waitForTimeout(1500);
check('a draft opened', new URL(page.url()).searchParams.has('draft'));
await fill('Smelt Monitoring Program', '2027-01-04', '2027-12-17');
check('first item added', (await names()).includes('Smelt Monitoring Program'), (await names()).join(' | '));
check('empty state gone, header Add shows', await page.locator('[data-prp-empty]').evaluate((e) => e.hidden) && await page.locator('[data-prp-add]').evaluate((e) => !e.hidden));

// Children from the row's + Add (named for the next level).
await rowAction('Smelt Monitoring Program', 'add');
await fill('Larval Fish Survey', '2027-02-01', '2027-06-30');
await rowAction('Smelt Monitoring Program', 'add');
await fill('Adult Spawning Survey', '2027-07-01', '2027-11-30');
await rowAction('Larval Fish Survey', 'add');
await fill('Trawl Season 1', '2027-02-01', '2027-03-31');
await rowAction('Larval Fish Survey', 'add');
await fill('Trawl Season 2', '2027-04-01', '2027-06-30');
const built = await names();
check('outline built', ['Larval Fish Survey', 'Adult Spawning Survey', 'Trawl Season 1', 'Trawl Season 2'].every((n) => built.includes(n)), built.join(' | '));
check('children sit under their parent', built.indexOf('Trawl Season 1') > built.indexOf('Larval Fish Survey') && built.indexOf('Trawl Season 1') < built.indexOf('Adult Spawning Survey'), built.join(' | '));
await page.screenshot({ path: OUT + 'outline-built.png' });

// Reorder, delete.
await rowAction('Larval Fish Survey', 'Move Down');
const moved = await names();
check('Move Down reorders', moved.indexOf('Adult Spawning Survey') < moved.indexOf('Larval Fish Survey'), moved.join(' | '));
await rowAction('Trawl Season 2', 'Delete');
await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: 'Delete', exact: true }).click(); await page.waitForTimeout(1200);
check('Delete removes it', !(await names()).includes('Trawl Season 2'), (await names()).join(' | '));

// A link from the drawer's Waits On, in the draft.
const adult = await rowID('Adult Spawning Survey');
await page.click(`[data-select="${adult}"]`); await page.waitForTimeout(1200);
const waits = await page.locator('[data-ped="waits-on"]').evaluate((e) => !e.hidden && getComputedStyle(e).display !== 'none');
check('Waits On shows in the draft drawer', waits);
await page.click('[data-ped="add-pred-open"]'); await page.waitForTimeout(800);
const opts = await page.locator('[data-ped="pred-select"]').evaluate((s) => (s.options ?? []).map((o) => o.label));
check('candidates include the new items', opts.some((o) => o.includes('Larval Fish Survey')), opts.join(' | '));
await page.locator('[data-ped="pred-select"]').evaluate((s) => { const o = (s.options ?? []).find((o) => o.label.includes('Larval Fish Survey')); s.value = o.value; s.dispatchEvent(new Event('change', { bubbles: true })); });
await page.locator('[data-ped="pred-add"]').evaluate((b) => b.click()); await page.waitForTimeout(1500);
const linked = await page.evaluate(() => document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__link').length);
check('the link draws', linked === 1, String(linked));
await page.keyboard.press('Escape'); await page.waitForTimeout(300);
await page.locator('[data-ped="cancel"]').evaluate((b) => b.click()); await page.waitForTimeout(800);

// Review and Publish: real ids land on Live.
await page.click('[data-prp-review] button'); await page.waitForTimeout(2500);
const counts = await page.locator('[data-prvd-counts]').innerText();
check('review counts the adds', /4\s*Added/.test(counts), counts.replace(/\n/g, ' '));
await page.screenshot({ path: OUT + 'outline-review.png' });
await page.locator('[data-prvd-publish] button').click();
await page.waitForFunction(() => !document.querySelector('[data-bcn-plan-revisions-dialog]')?.hasAttribute('open'), null, { timeout: 30000 }); await page.waitForTimeout(1500);
check('back on Live', !new URL(page.url()).searchParams.has('draft'));
const live = await names();
check('Live has the outline', ['Smelt Monitoring Program', 'Adult Spawning Survey', 'Larval Fish Survey', 'Trawl Season 1'].every((n) => live.includes(n)) && !live.includes('Trawl Season 2'), live.join(' | '));
check('Live order kept', live.indexOf('Adult Spawning Survey') < live.indexOf('Larval Fish Survey'), live.join(' | '));
const ids = await page.evaluate(() => [...document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__item')].map((li) => li.dataset.rowId));
check('real ids, no temporary ones', ids.every((id) => !id.startsWith('new-')), ids.join(','));
check('the link landed', (await page.evaluate(() => document.querySelectorAll('[data-prp-pane="schedule"] .bcn-plan-gantt__link').length)) === 1);
await page.screenshot({ path: OUT + 'outline-live.png' });
console.log('errors', errs.length, errs.slice(0, 3));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
