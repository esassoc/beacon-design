// The slip summary (2026-10-29, Andy: "inferred by context clues of the log"): an item's Schedule card says how often
// its date moved since first planned, how far in all, and why, from the published revisions.
import { open, BASE, HIDE } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const all = await page.evaluate(async (planID) => {
  const R = await import('/src/lib/planning/plan-repo.ts');
  const S = await import('/src/lib/planning/plan-slip.ts');
  const repo = R.getRepo(planID);
  return R.flattenPlan(R.latestVersion(repo).plan.Elements).map(({ element }) => ({ id: element.PlanElementID, name: element.PlanElementName, h: S.slipHistory(repo, element.PlanElementID), s: S.slipSentence(S.slipHistory(repo, element.PlanElementID)) }));
}, planID);
const fab = all.find((x) => x.name.startsWith('Fabricate'));
check('a thrice-moved item: three moves, net from first to now', fab.h.moves.length === 3 && fab.h.net === fab.h.moves.reduce((a, m) => a + m.days, 0), JSON.stringify(fab.h.moves.map((m) => [m.days, m.cause])));
check('its causes come from the log: followed and direct', fab.h.moves.some((m) => m.cause === 'followed') && fab.h.moves.some((m) => m.cause === 'direct'));
check('never-moved items say nothing', all.filter((x) => !x.h.moves.length).every((x) => x.s === null));
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${fab.id}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
const card = await page.locator('[data-element-module="schedule"]').innerText();
check('the Schedule card shows History', /History\s+Slipped 3 times since first planned/.test(card) && /followed/.test(card), card.replace(/\n/g, ' | ').slice(0, 300));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
