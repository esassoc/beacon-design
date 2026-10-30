// The orthogonal pass (2026-10-29): personas and situations the earlier audits didn't walk. A DWR planner in California
// after 5 PM (one local "today" everywhere; bare dates read as calendar days; Due today and Due tomorrow); an item page
// left open while someone publishes the item's removal; an agency response recorded days after it came by email; a
// money-only plan's Late link; a Contributor's index chips; someone leaving a plan (their items and reminders); and two
// layout regressions of the centre-line fix (item cards reading 0, transmittal card actions under the glyph).
const { chromium } = await import(process.env.PLAYWRIGHT ?? '/opt/node22/lib/node_modules/playwright/index.mjs');
import { BASE, OUT, DEFAULTS, HIDE } from './lib.mjs';
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const browser = await chromium.launch();
const errs = [];
/** A fresh browser in California at a given wall-clock time (the sample seeds itself relative to that day). */
async function at(when) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, timezoneId: 'America/Los_Angeles' });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errs.push(e.message));
  await page.clock.install({ time: new Date(when) });
  await page.clock.resume();
  await page.goto(BASE + '/prototypes/plans-repo/');
  await page.waitForTimeout(2500);
  const href = await page.evaluate(() => [...document.querySelectorAll('a')].map((a) => a.getAttribute('href')).find((h) => h && h.includes('/plan/?id=')));
  return { ctx, page, planID: new URL(href, BASE).searchParams.get('id') };
}
const rowId = (page, name) => page.evaluate((n) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(n))?.dataset.rowId, name);

// ── 1. Pacific evening: 6:30 PM on Oct 29 is already Oct 30 in UTC ──
{
  const { ctx, page, planID } = await at('2026-10-29T18:30:00-07:00');
  const lib = await page.evaluate(async () => {
    const rec = await import('/src/lib/planning/plan-records.ts');
    const repo = await import('/src/lib/planning/plan-repo.ts');
    const plan = { Elements: [{ PlanElementID: 'x', PlanElementName: 'X', StartDate: '2026-10-01', EndDate: '2026-10-30' }, { PlanElementID: 'y', PlanElementName: 'Y', StartDate: '2026-10-01', EndDate: '2026-10-29' }] };
    const empty = { planID: 'p', status: {}, health: {}, completions: {}, transmittals: [], files: [], links: [], comments: [], weights: {}, obligations: [] };
    return { today: rec.todayIso(), tomorrow: rec.healthOf(empty, plan, 'x', () => false).why, dueToday: rec.healthOf(empty, plan, 'y', () => false), jan1: repo.shortDate('2027-01-01') };
  });
  check('Pacific evening: today is the local date, not UTC’s', lib.today === '2026-10-29', lib.today);
  check('an item ending today is not Late; health says Due today', lib.dueToday.health === 'At Risk' && /^Due today, not started$/.test(lib.dueToday.why), JSON.stringify(lib.dueToday));
  check('health says Due tomorrow, not Due in 1 days', lib.tomorrow === 'Due tomorrow, not started', lib.tomorrow);
  check('a bare date is a calendar day west of UTC (Jan 1, not Dec 31)', lib.jan1 === 'Jan 1, 2027', lib.jan1);
  const due = await page.evaluate(() => document.body.innerText);
  check('Due for You: the seeded memo is due in 5 days, on Nov 3', /Nov 3, 2026 \(in 5 days\)/.test(due), (due.match(/[A-Z][a-z]{2} \d+, 2026 \(in \d+ days?\)/) ?? [''])[0]);
  // Record Completion offers today, and no later.
  await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}`); await page.waitForSelector('.bcn-plan-gantt__hit');
  const memo = await rowId(page, 'Quarterly agency coordination memo');
  await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${memo}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
  await page.locator('[data-element-module="completion"] button', { hasText: 'Record Completion' }).first().click(); await page.waitForTimeout(800);
  const picked = await page.locator('[data-cmd="completed"]').evaluate((d) => ({ value: d.value, max: d.max }));
  check('Record Completion prefills and caps at the local today', picked.value === '2026-10-29' && picked.max === '2026-10-29', JSON.stringify(picked));
  await ctx.close();
}

// ── 2. Item pages: a hidden count stays hidden; a removed item says which revision took it ──
{
  const { ctx, page, planID } = await at('2026-10-29T10:00:00-07:00');
  await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}`); await page.waitForSelector('.bcn-plan-gantt__hit');
  const memo = await rowId(page, 'Quarterly agency coordination memo');
  const gone = await rowId(page, 'Predation hotspot mapping');
  await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${memo}`); await page.waitForTimeout(2500);
  const zeros = await page.evaluate(() => [...document.querySelectorAll('[data-elm-count]')].filter((s) => s.hidden && getComputedStyle(s).display !== 'none').map((s) => s.closest('[data-element-module]').dataset.elementModule));
  check('item page: no card shows a hidden count (they read 0)', !zeros.length, zeros.join(', '));
  const other = await ctx.newPage();
  await other.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${gone}&user=Priya%20Natarajan`); await other.waitForTimeout(2500);
  const n = await page.evaluate(async ({ planID, gone }) => {
    const repo = await import('/src/lib/planning/plan-repo.ts');
    const d = repo.startDraft(planID);
    repo.addRevision(planID, d.id, [], { action: 'Deleted', subject: 'Predation hotspot mapping' }, { structure: [{ op: 'remove', id: gone }] });
    return (await repo.publishDraft(planID, d.id)).number;
  }, { planID, gone });
  await other.waitForTimeout(1500);
  const said = await other.locator('[data-pep-missing]').innerText();
  check('a page left open names the removal: item, revision, who', /Removed From the Plan/.test(said) && new RegExp(`Predation hotspot mapping was removed in Revision ${n} by Andy Lovseth`).test(said), said.replace(/\n+/g, ' / '));
  await other.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${gone}&user=Avery%20Nguyen`); await other.waitForTimeout(2500);
  const outsider = await other.evaluate(() => document.body.innerText);
  check('someone off the plan learns nothing of it', !/Predation hotspot/.test(outsider));

  // ── 3. Agency side: a response recorded after the fact keeps its day ──
  await page.goto(`${BASE}/prototypes/plans-repo/transmittal/?plan=${planID}&id=t4&user=Alex%20Rivera`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
  const head = await page.evaluate(() => { const card = document.querySelector('[data-trp-response-card]'); const t = card.querySelector('.bcn-trp__title').getBoundingClientRect(); const a = card.querySelector('[data-trp-act="respond"]').getBoundingClientRect(); return { titleRight: t.right, actLeft: a.left, dy: Math.abs((a.top + a.height / 2) - (t.top + t.height / 2)) }; });
  check('Response card: its action sits right of the title, not under the glyph', head.actLeft > head.titleRight && head.dy < 16, JSON.stringify(head));
  await page.locator('[data-trp-act="respond"] button').click(); await page.waitForTimeout(700);
  const onField = await page.locator('[data-trp-response-on]').evaluate((d) => ({ value: d.value, max: d.max, min: d.min }));
  check('Record Response asks Received On: today, not before the send', onField.value === '2026-10-29' && onField.max === '2026-10-29' && onField.min === '2026-10-23', JSON.stringify(onField));
  await page.locator('[data-trp-response-text] textarea').fill('Comments by email.');
  await page.locator('[data-trp-response-on] input').fill('2026-10-26');
  await page.locator('[data-trp-response-save] button').click(); await page.waitForTimeout(800);
  const line = await page.locator('[data-trp-line]').innerText();
  const by = await page.locator('[data-trp-response-by]').innerText();
  check('the record keeps the day it came back', /Responded Oct 26, 2026\./.test(line) && /^Received Oct 26, 2026\. Recorded by Alex Rivera/.test(by), `${line} | ${by}`);
  await ctx.close();
}
{
  const { ctx, page, planID } = await at('2026-11-30T10:00:00-08:00');
  await page.goto(`${BASE}/prototypes/plans-repo/transmittal/?plan=${planID}&id=t4&user=Alex%20Rivera`); await page.waitForTimeout(2500);
  await page.locator('[data-trp-act="respond"] button').click(); await page.waitForTimeout(700);
  await page.locator('[data-trp-response-text] textarea').fill('NMFS comments by email.');
  await page.locator('[data-trp-response-on] input').fill('2026-11-25');
  await page.locator('[data-trp-response-save] button').click(); await page.waitForTimeout(800);
  const line = await page.locator('[data-trp-line]').innerText();
  const note = await page.locator('[data-trp-response-note]').innerText();
  check('a late response says how late (due Nov 23, came Nov 25)', /Responded Nov 25, 2026, 2 days late\./.test(line) && /it came back 2 days late/.test(note), `${line} | ${note}`);
  await page.screenshot({ path: OUT + 'orthogonal-late-response.png', fullPage: true });
  await ctx.close();
}

// ── 4. The index: a money-only plan's Late; a Contributor's chips ──
{
  const { ctx, page } = await at('2026-10-29T10:00:00-07:00');
  const hab = await page.evaluate(() => { const r = [...document.querySelectorAll('.bcn-pri__row')].find((r) => r.textContent.includes('Habitat Restoration')); const a = r.querySelector('[data-pri-late]'); return { href: a?.getAttribute('href'), title: a?.title }; });
  check('money-only plan: Late opens a late item, not the budget sheet', /\/element\/\?/.test(hab.href ?? '') && /^Late: /.test(hab.title ?? ''), JSON.stringify(hab));
  const fish = await page.evaluate(() => { const r = [...document.querySelectorAll('.bcn-pri__row')].find((r) => r.textContent.includes('Fisheries Evaluation')); return r.querySelector('[data-pri-late]')?.getAttribute('href'); });
  check('a plan with a Schedule still opens the chart filtered to Late', /health=Late/.test(fish ?? ''), fish);
  await page.goto(`${BASE}/prototypes/plans-repo/?user=Morgan%20Ellis`); await page.waitForTimeout(2500);
  const chips = await page.evaluate(() => { const r = [...document.querySelectorAll('.bcn-pri__row')].find((r) => r.textContent.includes('Fisheries Evaluation')); return [...r.querySelectorAll('.bcn-pri__track')].map((c) => c.textContent.trim()); });
  check('Contributor without money: no Budget chip for a tab they don’t get', !chips.includes('Budget') && chips.includes('Schedule'), chips.join(','));

  // ── 5. Someone leaves: Plan Settings says what they own; their reminders stop ──
  await page.goto(`${BASE}/prototypes/plans-repo/?user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2500);
  await page.locator('li.bcn-pri__row', { has: page.locator('[data-pri-name]:text-is("Fisheries Evaluation Studies")') }).locator('[data-pri-settings] button').click(); await page.waitForTimeout(900);
  await page.locator('[data-psu-link="people"]').click(); await page.waitForTimeout(300);
  await page.locator('.bcn-psu__person, [data-psu-people] > *', { hasText: 'Alex Rivera' }).first().locator('[data-person-remove] button').click(); await page.waitForTimeout(300);
  await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(800);
  const said = await page.locator('esa-confirm-dialog[open]').evaluate((d) => d.message).catch(() => '');
  check('removing Alex says the items they own stay theirs, reminders going up', /Alex Rivera owns \d+ items\. They keep Alex as owner, their reminders going to the parent's owners or the plan's Owners/.test(said), said);
  await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: 'Save' }).click(); await page.waitForTimeout(1500);
  const rem = await page.evaluate(async () => (await (await import('/src/lib/planning/plan-reminders.ts')).remindersFor('Alex Rivera')).filter((r) => r.planName === 'Fisheries Evaluation Studies').length);
  check('and no Due for You rows reach him for that plan', rem === 0, String(rem));
  await ctx.close();
}

console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
