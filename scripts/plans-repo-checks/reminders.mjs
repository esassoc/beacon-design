// Reminders to owners (2026-10-28, the SOW review; prod's action notifications): Plan Settings, Reminders; Due for You on
// the index for each person; the item's last and next reminder on its Details card.
import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const dueRows = () => page.locator('[data-bcn-reminders] [data-rem-rows] > div').allInnerTexts();

// Andy co-owns the memo due in 5 days: its Coming Up went out.
await page.goto(`${BASE}/prototypes/plans-repo/`); await page.waitForTimeout(2500);
let rows = await dueRows();
check('Andy: Due for You shows the memo', rows.some((r) => r.includes('Quarterly agency coordination memo') && r.includes('Coming Up')), rows.map((r) => r.replace(/\n/g, ' ')).join(' | '));
await page.locator('[data-bcn-reminders]').screenshot({ path: OUT + 'reminders-andy.png' });
// Priya owns the late permit: Past Due.
await page.goto(`${BASE}/prototypes/plans-repo/?user=Priya%20Natarajan`); await page.waitForTimeout(2500);
rows = await dueRows();
check('Priya: the late permit is Past Due', rows.some((r) => r.includes('Predator survey collection permit') && r.includes('Past Due')), rows.map((r) => r.replace(/\n/g, ' ')).join(' | '));
// Morgan owns nothing: no card.
await page.goto(`${BASE}/prototypes/plans-repo/?user=Morgan%20Ellis`); await page.waitForTimeout(2500);
check('Morgan: no card', await page.locator('[data-bcn-reminders]').evaluate((e) => e.hidden));

// The item's Details card: last and next.
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&user=Andy%20Lovseth`); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(600);
const memo = await page.evaluate(() => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith('Quarterly agency'))?.dataset.rowId);
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${memo}`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(800);
const det = await page.locator('[data-element-module="details"]').innerText();
check('Details: last and next reminder', /Reminders\s*Sent .* \(Coming Up\)\. Next .* \(Due\)/.test(det), det.replace(/\n/g, ' | ').slice(0, 400));

// Plan Settings: switch Coming Up off; the memo's Coming Up stops.
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(600);
await page.evaluate(() => document.querySelector('[data-prp-settings] button, [data-prp-settings]')?.click()); await page.waitForTimeout(900);
await page.locator('[data-psu-link="reminders"]').click(); await page.waitForTimeout(300);
check('Reminders section shows the defaults', (await page.locator('[data-psu-rem="comingUp.leadDays"]').evaluate((f) => f.value)) === '7');
await page.locator('[data-bcn-plan-setup] [data-psu-section="reminders"]').screenshot({ path: OUT + 'reminders-settings.png' });
await page.locator('[data-psu-rem="comingUp.on"]').evaluate((t) => { t.checked = false; t.dispatchEvent(new Event('change', { bubbles: true })); });
check('turning Coming Up off folds its numbers', await page.locator('[data-psu-rem="comingUp.leadDays"]').evaluate((f) => !!f.closest('[hidden]')));
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(2000);
await page.goto(`${BASE}/prototypes/plans-repo/`); await page.waitForTimeout(2500);
rows = await dueRows();
check('with Coming Up off, the memo leaves Due for You', !rows.some((r) => r.includes('Quarterly agency coordination memo')), rows.join(' | '));
console.log('errors', errs.length, errs.slice(0, 2));
// An item no one on the plan owns still reminds someone (2026-10-29): its parent's owners, else the plan's Owners.
const fb = await page.evaluate(async () => {
  const R = await import('/src/lib/planning/plan-repo.ts');
  const M = await import('/src/lib/planning/plan-reminders.ts');
  const seen = { parent: 0, plan: 0, nobody: 0 };
  for (const s of await R.listPlanSummaries()) {
    const plan = R.latestVersion(s.repo).plan; const attrs = R.attributesAt(s.repo);
    for (const { element } of R.flattenPlan(plan.Elements)) {
      if (element.Children?.length) continue;
      const o = M.reminderOwners(s.repo, plan, attrs, element.PlanElementID);
      if (o.via !== 'item') seen[o.owners.length ? o.via : 'nobody']++;
    }
  }
  return seen;
});
check('unowned items fall back to a parent or the plan’s Owners; none reaches nobody', fb.nobody === 0 && fb.parent + fb.plan > 0, JSON.stringify(fb));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
