// A dependency's edit, draft first (2026-10-28, Andy): from Live the lag or Unlink goes to your draft, Review and
// Publish lists it under Dependencies, and warns when another open draft changes the same items.
import { open, BASE, HIDE, gotoPlan } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const repo = () => page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return { versions: r.versions.length, drafts: r.drafts.map((d) => ({ owner: d.owner, edits: d.revisions.length, links: d.revisions.at(-1)?.links ?? null })) }; } catch {} } }, planID);
const idOf = (name) => page.evaluate((name) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.dataset.rowId, name);
const FROM = 'Acoustic tag & receiver procurement', TO = 'Fabricate & install acoustic receiver array';

await gotoPlan(page, planID);
const from = await idOf(FROM), to = await idOf(TO);
const clickLink = async () => {
  const ok = await page.evaluate(([f, t]) => {
    const hit = document.querySelector(`.bcn-plan-gantt__link-hit[data-link-from="${f}"][data-link-to="${t}"]`);
    if (!hit) return false;
    const r = hit.getBoundingClientRect();
    hit.dispatchEvent(new MouseEvent('click', { bubbles: true, clientX: r.x + r.width / 2, clientY: r.y + r.height / 2 }));
    return true;
  }, [from, to]);
  await page.waitForTimeout(700);
  return ok;
};

// Alex's draft changes the successor first, so Andy's review has something to warn about.
await page.goto(`${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${to}&user=Alex%20Rivera`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(800);
await page.click('[data-pep-action="edit"] button'); await page.waitForTimeout(900);
await page.locator('[data-eed="notes"]').evaluate((f) => (f.value = 'Alex: vendor slipped.'));
await page.click('[data-eed-submit] button'); await page.waitForTimeout(1500);

await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&user=Andy%20Lovseth`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(900);
const start = await repo();
check('link line is clickable on Live', await clickLink());
check('popover open', await page.locator('[data-prp-link-pop]').evaluate((p) => !!p.open));
check('Live: Save to My Draft', (await page.locator('[data-prp-link-save] .esa-button__label').textContent()).trim() === 'Save to My Draft');
await page.screenshot({ path: OUT + 'link-pop.png' });
await page.locator('[data-prp-link-lag]').evaluate((f) => (f.value = '10'));
await page.click('[data-prp-link-save] button'); await page.waitForTimeout(2000);
const after = await repo();
check('Live untouched', after.versions === start.versions);
const mine = after.drafts.find((d) => d.owner === 'Andy Lovseth');
check('saved to Andy’s draft as a link edit', !!mine && Object.values(mine.links ?? {}).includes(10), JSON.stringify(mine));
check('page switched into the draft', new URL(page.url()).searchParams.has('draft'), page.url());
check('the draft draws the new lag', await clickLink() && (await page.locator('[data-prp-link-lag]').evaluate((f) => String(f.value))) === '10');
check('in the draft: Save', (await page.locator('[data-prp-link-save] .esa-button__label').textContent()).trim() === 'Save');
await page.keyboard.press('Escape'); await page.waitForTimeout(300);

await page.click('[data-prp-review] button'); await page.waitForTimeout(2500);
const rows = await page.locator('[data-prvd-rows]').innerText();
check('review lists the link', rows.includes('Dependencies') && rows.includes('Lag 0 Days') && rows.includes('Lag 10 Days'), rows.replace(/\n/g, ' | ').slice(0, 300));
check('review counts it', (await page.locator('[data-prvd-counts]').innerText()).includes('Link Changed'));
const overlap = await page.locator('[data-prvd-overlap]').evaluate((e) => (e.hidden ? '' : e.innerText));
check('review warns about Alex’s draft', overlap.includes('Alex’s draft also changes'), overlap);
check('Publish enabled', await page.locator('[data-prvd-publish] button').evaluate((b) => !b.disabled));
await page.screenshot({ path: OUT + 'link-review.png' });
await page.locator('[data-prvd-publish] button').click(); await page.waitForTimeout(3000);
check('published', (await repo()).versions === start.versions + 1);

// On Live now: the lag reads 10; Unlink goes to a fresh draft.
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(900);
check('Live has the new lag', await clickLink() && (await page.locator('[data-prp-link-lag]').evaluate((f) => String(f.value))) === '10');
await page.click('[data-prp-link-unlink] button'); await page.waitForTimeout(2000);
const unl = (await repo()).drafts.find((d) => d.owner === 'Andy Lovseth');
check('Unlink drafted', !!unl && Object.values(unl.links ?? {}).includes(null), JSON.stringify(unl));
check('the draft has no line for it', !(await page.locator(`.bcn-plan-gantt__link-hit[data-link-from="${from}"][data-link-to="${to}"]`).count()));
console.log('errors', errs.length, errs.slice(0, 2));
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
