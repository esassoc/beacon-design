// Several drafts per person (2026-10-29, Andy: "Let's go with allow more than one draft"). Alex (an Editor) has two on
// the fisheries sample: his what-if ("Permit delay scenario") and his week's real edits ("Weekly updates"). This walks
// the branch menu, Edit in a Draft's chooser, Start a New Draft with a name, an edit in each draft that stays in its
// own draft, an edit from Live that lands in the current draft and says so, publishing one draft while the others stay,
// Rename, Discard by name, and the index's counts.
import { open, BASE, HIDE, OUT, gotoPlan, dragRow } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const ALEX = '&user=Alex%20Rivera';
const repo = () => page.evaluate((planID) => {
  for (const k of Object.keys(localStorage)) {
    try {
      const v = JSON.parse(localStorage.getItem(k));
      const r = v?.repos?.find?.((x) => x.planID === planID);
      if (r) return { versions: r.versions.length, drafts: r.drafts.filter((d) => !d.transient).map((d) => ({ id: d.id, name: d.name, owner: d.owner, edits: d.revisions.length, ids: [...new Set((d.revisions.at(-1)?.overrides ?? []).map((o) => o.PlanElementID)), ...Object.keys(d.revisions.at(-1)?.fields ?? {})] })) };
    } catch {}
  }
}, planID);
const alexs = async () => (await repo()).drafts.filter((d) => d.owner === 'Alex Rivera');
const byName = async (name) => (await alexs()).find((d) => d.name === name);
const idOf = (name) => page.evaluate((name) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.dataset.rowId, name);
const alerts = () => page.evaluate(() => { const walk = (root) => [...root.querySelectorAll('*')].map((e) => (e.shadowRoot ? walk(e.shadowRoot) : '')).join(' ') + ' ' + (root.textContent ?? ''); const c = document.querySelector('esa-snackbar-container'); return c ? walk(c.shadowRoot ?? c) + ' ' + c.textContent : ''; }).then((t) => t.replace(/\s+/g, ' ').trim());
const label = () => page.locator('[data-prp-branch-label]').textContent().then((t) => t.trim());
const draftParam = () => new URL(page.url()).searchParams.get('draft');
const menu = async () => {
  await page.click('[data-prp-branch-trigger] button'); await page.waitForTimeout(400);
  return page.evaluate(() => [...document.querySelectorAll('[data-prp-branches] > *')].map((el) => ({ head: el.classList.contains('bcn-prp__branch-head'), to: el.dataset?.prpTo ?? '', dot: el.querySelector('.bcn-prp__branch-dot')?.dataset.dot ?? '', text: el.textContent.replace(/\s+/g, ' ').trim() })));
};
const closeMenu = async () => { await page.keyboard.press('Escape'); await page.mouse.click(900, 160); await page.waitForTimeout(300); };
const pick = async (to) => { await page.click('[data-prp-branch-trigger] button'); await page.waitForTimeout(300); await page.locator(`a.bcn-prp__branch-row[data-prp-to="${to}"]`).click(); await page.waitForTimeout(1500); };
/** A row's bar dragged, scrolled into view first (dragRow reads the bar where it is on screen). */
const drag = async (name, dx) => {
  await page.evaluate((name) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.scrollIntoView({ block: 'center' }), name);
  await page.waitForTimeout(400);
  await dragRow(page, name, dx);
};
const chooserOpen = () => page.locator('[data-bcn-draft-chooser] esa-dialog').evaluate((d) => d.hasAttribute('open'));

// ── 1. The branch menu: Live, Your Drafts (both of Alex's, with their facts), Start a New Draft, then others' ──
await gotoPlan(page, planID, ALEX);
const r0 = await repo();
const permit = await byName('Permit delay scenario');
const weekly = await byName('Weekly updates');
check('seed: Alex has two drafts', !!permit && !!weekly && (await alexs()).length === 2, JSON.stringify(await alexs()));
check('counter counts every open draft', (await page.locator('[data-prp-draft-count]').textContent()).trim() === String(r0.drafts.length) && (await page.locator('[data-prp-draft-noun]').textContent()).trim() === 'Drafts', `${await page.locator('[data-prp-draft-count]').textContent()}`);
let rows = await menu();
await page.screenshot({ path: OUT + 'drafts-menu.png' });
const heads = rows.filter((r) => r.head).map((r) => r.text);
const mineRows = rows.filter((r) => r.dot === 'mine');
const startAt = rows.findIndex((r) => r.to === 'start');
const othersAt = rows.findIndex((r) => r.head && /Other People/.test(r.text));
check('menu: Live first', rows[0]?.to === 'live', JSON.stringify(rows[0]));
check('menu: Your Drafts lists both, by name', heads.some((h) => h.startsWith('Your Drafts')) && mineRows.length === 2 && mineRows.some((r) => r.text.startsWith('Permit delay scenario')) && mineRows.some((r) => r.text.startsWith('Weekly updates')), heads.join(' | '));
check('menu: each says edits and age', mineRows.every((r) => /\d+ edits?, /.test(r.text)), mineRows.map((r) => r.text).join(' | '));
check('menu: the current one says edits from Live go there', mineRows.find((r) => r.to === weekly.id)?.text.includes('edits from Live go here'), mineRows.map((r) => r.text).join(' | '));
check('menu: Start a New Draft after yours, before others', startAt > rows.indexOf(mineRows.at(-1)) && othersAt > startAt && /Start a New Draft/.test(rows[startAt].text), rows.map((r) => r.text).join(' | '));
check('menu: others’ drafts listed, read-only', rows.some((r) => r.dot === 'other' && r.text.includes('Tagging season re-sequence')));
await closeMenu();

// ── 2. Edit in a Draft with several: the chooser, the current one picked; Cancel leaves Live as it was ──
await page.click('[data-prp-edit] button'); await page.waitForTimeout(700);
check('Edit in a Draft asks which', await chooserOpen());
const choice = await page.locator('[data-bdc-choice]').evaluate((g) => ({ value: g.value, options: g.options.map((o) => o.label) }));
check('chooser: both drafts and A New Draft, current picked', choice.options.length === 3 && choice.options.at(-1) === 'A New Draft' && choice.value === weekly.id, JSON.stringify(choice));
await page.screenshot({ path: OUT + 'drafts-chooser.png' });
await page.locator('[data-bdc-cancel] button').click(); await page.waitForTimeout(600);
check('Cancel: still on Live', !draftParam() && !(await chooserOpen()));

// ── 3. Start a New Draft, named ──
await pick('start');
check('Start a New Draft asks its name', await chooserOpen() && (await page.locator('[data-bcn-draft-chooser] esa-dialog').evaluate((d) => d.heading)) === 'Start a New Draft');
check('the name defaults to Draft', (await page.locator('[data-bdc-name]').evaluate((f) => f.value)) === 'Draft');
await page.locator('[data-bdc-name] input').fill('Survey reschedule');
await page.locator('[data-bdc-go] button').click(); await page.waitForTimeout(1800);
const survey = await byName('Survey reschedule');
check('a third draft, opened', !!survey && draftParam() === survey.id && (await alexs()).length === 3, JSON.stringify(await alexs()));
check('the menu button names it', (await label()) === 'Survey reschedule', await label());
check('counter goes up', (await page.locator('[data-prp-draft-count]').textContent()).trim() === String(r0.drafts.length + 1));

// ── 4. An edit in each draft stays in its own draft ──
await drag('Baseline predator', 70);
const baseline = await idOf('Baseline predator');
await pick(weekly.id);
check('switched to Weekly updates', draftParam() === weekly.id && (await label()) === 'Weekly updates', await label());
await drag('Draft near-field', 70);
const memo = await idOf('Draft near-field');
let s1 = await byName('Survey reschedule');
let w1 = await byName('Weekly updates');
let p1 = await byName('Permit delay scenario');
check('Survey reschedule holds only its edit', s1.edits === 1 && s1.ids.includes(baseline) && !s1.ids.includes(memo), JSON.stringify(s1));
check('Weekly updates holds only its edits', w1.edits === 2 && w1.ids.includes(memo) && !w1.ids.includes(baseline), JSON.stringify(w1));
check('Permit delay scenario untouched', p1.edits === permit.edits && !p1.ids.includes(memo) && !p1.ids.includes(baseline), JSON.stringify(p1));

// ── 5. From Live, the drawer: Saves To picks the current draft (the one you were in last) and says where ──
await pick('live');
const proc = await idOf('Acoustic tag & receiver procurement');
await page.click(`[data-select="${proc}"]`, { position: { x: 12, y: 8 } }); await page.waitForTimeout(1200);
const target = await page.locator('[data-ped="target"]').evaluate((s) => ({ hidden: s.hidden, value: s.value, n: s.options.length, help: s.helpText }));
check('drawer on Live: Saves To, the current draft picked', !target.hidden && target.value === weekly.id && target.n === 4, JSON.stringify(target));
check('drawer says where it goes', /Goes into “Weekly updates”/.test(target.help), target.help);
await page.screenshot({ path: OUT + 'drafts-drawer.png' });
await page.locator('[data-ped="notes"]').evaluate((f) => { f.value = 'Weekly: vendor confirmed.'; f.dispatchEvent(new Event('input', { bubbles: true })); f.dispatchEvent(new Event('change', { bubbles: true })); });
await page.click('[data-ped="save"]'); await page.waitForTimeout(2500);
w1 = await byName('Weekly updates');
check('Save to My Draft lands in the current draft', draftParam() === weekly.id && w1.edits === 3 && (await byName('Survey reschedule')).edits === 1, JSON.stringify(await alexs()));
check('the confirmation names it', /Saved to your draft “Weekly updates”/.test(await alerts()), await alerts());

// ── 6. Publish one draft: the others remain ──
await page.click('[data-prp-review] button'); await page.waitForTimeout(2500);
const heading = await page.locator('[data-bcn-plan-revisions-dialog] esa-dialog, [data-bcn-plan-revisions-dialog]').first().evaluate((d) => d.heading ?? d.querySelector('esa-dialog')?.heading ?? '');
check('the review names the draft', /Review Your Draft “Weekly updates”/.test(heading), heading);
await page.click('[data-prvd-publish] button'); await page.waitForTimeout(3000);
const r1 = await repo();
check('published: one more revision', r1.versions === r0.versions + 1, `${r0.versions} -> ${r1.versions}`);
check('Weekly updates closed; the other two remain as they were', !(await byName('Weekly updates')) && (await byName('Survey reschedule'))?.edits === 1 && (await byName('Permit delay scenario'))?.edits === permit.edits, JSON.stringify(await alexs()));
rows = await menu();
check('menu after publish: two of yours', rows.filter((r) => r.dot === 'mine').length === 2 && rows.some((r) => r.to === 'start'), rows.map((r) => r.text).join(' | '));
await closeMenu();

// ── 7. Rename, then Discard by name ──
await pick((await byName('Survey reschedule')).id);
await page.click('[data-prp-rename] button'); await page.waitForTimeout(600);
check('Rename asks with its name', await chooserOpen() && (await page.locator('[data-bdc-name]').evaluate((f) => f.value)) === 'Survey reschedule');
await page.locator('[data-bdc-name] input').fill('Spring survey what-if');
await page.locator('[data-bdc-go] button').click(); await page.waitForTimeout(1000);
check('renamed', !!(await byName('Spring survey what-if')) && (await label()) === 'Spring survey what-if', await label());
await page.click('[data-prp-discard] button'); await page.waitForTimeout(600);
const ask = await page.locator('esa-confirm-dialog[open]').evaluate((d) => `${d.heading} ${d.message}`);
check('Discard names the draft, and the one that stays', /Discard “Spring survey what-if”\?/.test(ask) && /other draft stays/.test(ask), ask);
await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: 'Discard Draft' }).click(); await page.waitForTimeout(1500);
check('discarded; the what-if stays', !(await byName('Spring survey what-if')) && !!(await byName('Permit delay scenario')) && !draftParam(), JSON.stringify(await alexs()));

// ── 8. One draft left: Edit in a Draft opens it, no chooser ──
await page.click('[data-prp-edit] button'); await page.waitForTimeout(1200);
check('one draft: Edit in a Draft opens it', !(await chooserOpen()) && draftParam() === permit.id, page.url());

// ── 9. The index: counts, and yours among them ──
await page.goto(`${BASE}/prototypes/plans-repo/?user=Alex%20Rivera`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
const chips = await page.evaluate(() => [...document.querySelectorAll('[data-pri-drafts]:not([hidden])')].map((a) => a.textContent.replace(/\s+/g, ' ').trim()));
const total = (await repo()).drafts.length;
check('index: the plan’s drafts, yours counted', chips.some((t) => t === `${total} ${total === 1 ? 'Draft' : 'Drafts'}, 1 Yours`), chips.join(' | '));

console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
