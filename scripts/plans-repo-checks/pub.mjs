const { chromium } = await import(process.env.PLAYWRIGHT ?? '/opt/node22/lib/node_modules/playwright/index.mjs');
import { BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1440, height: 1100 } });
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error' && !/404|Failed to load resource/.test(m.text())) errors.push('console: ' + m.text()); });
const results = [];
const check = (name, ok, extra = '') => results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  (' + extra + ')' : ''}`);
const wait = (ms) => page.waitForTimeout(ms);
const shot = (n) => page.screenshot({ path: OUT + n + '.png' });
const label = () => page.locator('[data-prp-branch-label]').textContent();
async function dragBar(name, dx) {
  const box = await page.evaluate((name) => { const li = [...document.querySelectorAll('.bcn-prp__main .bcn-plan-gantt__item')].find((l) => l.textContent.includes(name)); const bar = document.querySelector(`.bcn-prp__main .bcn-plan-gantt__mark[data-row-id="${li.dataset.rowId}"] .bcn-plan-gantt__bar`); const r = bar.getBoundingClientRect(); return { x: r.x + r.width / 2, y: r.y + r.height / 2 }; }, name);
  await page.mouse.move(box.x, box.y); await wait(150); await page.mouse.down();
  for (let i = 1; i <= 12; i++) { await page.mouse.move(box.x + (dx * i) / 12, box.y); await wait(20); }
  await page.mouse.up(); await wait(1600); await page.mouse.move(1430, 1080); await wait(200);
}
await page.goto(BASE + '/prototypes/plans-repo/'); await wait(3000);
const href = await page.evaluate(() => [...document.querySelectorAll('a')].map((a) => a.getAttribute('href')).find((h) => h && h.includes('/plan/?id=')));
const planID = new URL(href, BASE).searchParams.get('id');
const go = async (extra) => { await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&about=closed${extra}`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('.bcn-prp__main .bcn-plan-gantt__hit'); await wait(900); };
await go('');

// 1 + 3: three edits, publish up to edit 1 with a name
await page.click('[data-prp-edit] button'); await wait(1200);
await dragBar('Detailed baseline', 30);
await dragBar('Receiver retrieval', 30);
await dragBar('Draft near-field', 30);
await page.click('[data-prp-review] button'); await wait(1500);
const to = page.locator('[data-bcn-plan-revisions-dialog] [data-rvs-handle="to"]');
await to.focus(); await page.keyboard.press('ArrowLeft'); await wait(500); await page.keyboard.press('ArrowLeft'); await wait(900);
check('Partial: button says Up to Edit 1', /Up to Edit 1/.test(await page.locator('[data-prvd-publish] [data-prvd-act-label]').textContent()), await page.locator('[data-prvd-publish] [data-prvd-act-label]').textContent());
check('Partial: info shown', await page.locator('[data-prvd-partial]').isVisible(), await page.locator('[data-prvd-partial-text]').textContent());
await page.locator('[data-prvd-name]').click(); await page.keyboard.type('Baseline reset', { delay: 15 }); await wait(300);
await shot('1-partial');
await page.locator('[data-prvd-publish] button').click(); await wait(2200);
await shot('2-after-partial');
const toastText = () => page.evaluate(() => { const walk = (root) => [...root.querySelectorAll('*')].map((e) => (e.shadowRoot ? walk(e.shadowRoot) : '')).join(' ') + ' ' + (root.textContent ?? ''); const c = document.querySelector('esa-snackbar-container'); return c ? walk(c.shadowRoot ?? c) + ' ' + c.textContent : ''; });
const toast = await toastText();
check('Partial: toast', /Edits 2 to 3 stay in the draft/.test(toast), toast);
await page.click('[data-prp-branch-trigger] button'); await wait(400);
const mineRow = await page.locator('a.bcn-prp__branch-row[data-prp-to]:not([data-prp-to="live"])').first().textContent();
check('Partial: draft kept with 2 edits', /2 edits/.test(mineRow), mineRow.replace(/\s+/g, ' '));
await shot('3-menu-kept');
await page.keyboard.press('Escape'); await page.mouse.click(900, 180); await wait(300);
// the kept draft opens and its comparison is just the remaining edits
// Several drafts per person (2026-10-29): a new draft's default name is "Draft"; the row is found by its green dot.
const mineSel = 'a.bcn-prp__branch-row:has(.bcn-prp__branch-dot[data-dot="mine"])';
await page.locator(mineSel).first().click().catch(async () => { await page.click('[data-prp-branch-trigger] button'); await wait(300); await page.locator(mineSel).first().click(); });
await wait(1200);
// The branch menu names your draft by its name (2026-10-29: with several, "Your Draft" didn't say which).
check('Kept draft: the menu names it', (await label()) === 'Draft', await label());
check('Kept draft: not behind Live', !(await page.locator('[data-prp-base-behind]').isVisible()));
await page.click('[data-prp-review] button'); await wait(1500);
const kept = await page.locator('[data-prvd-counts]').textContent();
check('Kept draft: review shows 2 moved', /^2 Moved/.test(kept.trim()), kept.trim());
check('Kept draft: no Live Has Moved warning', !(await page.locator('[data-prvd-behind]').isVisible()));
await shot('4-kept-review');
await page.locator('[data-prvd-close] button').click(); await wait(400);
// history shows the name
await page.click('[data-prp-branch-trigger] button'); await wait(300); await page.locator('a.bcn-prp__branch-row[data-prp-to="live"]').click(); await wait(1000);
await page.click('[data-prp-history-link]'); await wait(1500);
const t = await page.locator('[data-prvd-head="to"] [data-prvd-title]').textContent();
check('Name: on the revision', /Baseline reset/.test(t), t);
await page.locator('[data-prvd-close] button').click(); await wait(400);

// 2 + 4: Sam's requested draft is behind Live; publish it
await page.click('[data-prp-branch-trigger] button'); await wait(300);
await page.locator('a.bcn-prp__branch-row', { hasText: 'Tagging season re-sequence' }).click(); await wait(1200);
await page.click('[data-prp-review] button'); await wait(1500);
check("Behind: warning on Sam's draft", await page.locator('[data-prvd-behind]').isVisible(), await page.locator('[data-prvd-behind-text]').textContent());
await shot('5-behind');
await page.locator('[data-prvd-publish] button').click(); await wait(2200);
const toast2 = await toastText();
check('Notice: publisher toast says Sam hears', /Sam sees it/.test(toast2), toast2);
// as Sam
await go('&user=Sam%20Okafor');
check('Notice: shown to Sam', await page.locator('[data-prp-notice]').isVisible(), (await page.locator('[data-prp-notice-text]').textContent()));
await shot('6-alex-notice');
await page.locator('[data-prp-notice-view] button').click(); await wait(1500);
const t2 = await page.locator('[data-prvd-head="to"] [data-prvd-title]').textContent();
check('Notice: View Revision opens that revision', /Andy Lovseth/.test(t2), t2);
await page.locator('[data-prvd-close] button').click(); await wait(400);
await page.locator('[data-prp-notice-dismiss] button').click(); await wait(400);
check('Notice: Dismiss hides it', !(await page.locator('[data-prp-notice]').isVisible()));
await go('&user=Sam%20Okafor');
check('Notice: stays dismissed', !(await page.locator('[data-prp-notice]').isVisible()));
console.log(results.join('\n'));
console.log('\nERRORS (' + errors.length + '):\n' + errors.join('\n'));
await browser.close();
