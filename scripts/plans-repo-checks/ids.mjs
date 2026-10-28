const { chromium } = await import(process.env.PLAYWRIGHT ?? '/opt/node22/lib/node_modules/playwright/index.mjs');
const BASE = process.env.BASE ?? 'http://localhost:4321';
const { OUT } = await import('./lib.mjs');
const browser = await chromium.launch();
const errs = [];
async function snapshot() {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errs.push(e.message));
  await page.goto(BASE + '/prototypes/plans-repo/'); await page.waitForSelector('[data-pri-name]', { timeout: 60000 }); await page.waitForTimeout(800);
  const plans = await page.evaluate(() => [...document.querySelectorAll('a')].map((a) => [a.textContent.trim(), a.getAttribute('href')]).filter(([, h]) => h && h.includes('/plan/?id=')).map(([t, h]) => t + ' ' + new URL(h, location.href).searchParams.get('id')));
  console.log('errs so far:', errs.join(' | ')); return { ctx, page, plans: [...new Set(plans)] };
}
const a = await snapshot();
const b = await snapshot();
console.log(a.plans.join('\n'));
console.log('same ids across browsers:', JSON.stringify(a.plans) === JSON.stringify(b.plans));
// a deep link from A opens in B
const geo = a.plans.find((p) => p.startsWith('Geotechnical'))?.split(' ').pop();
await b.page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${geo}`); await b.page.waitForTimeout(2500);
console.log('B opens A link:', (await b.page.locator('.page-layout__title h1').textContent()).trim());
console.log('B geotech rows:', (await b.page.evaluate(() => [...document.querySelectorAll('.bcn-plan-gantt__name')].slice(0, 4).map((n) => n.textContent.trim()).join(' | '))));
await b.page.screenshot({ path: OUT + 'geotech.png' });
await b.page.goto(`${BASE}/prototypes/plans-repo/plan/?id=nope`); await b.page.waitForTimeout(2000);
console.log('missing plan:', (await b.page.locator('.page-layout__title h1').textContent()).trim(), await b.page.locator('[data-prp-stop="missing"]').isVisible());
await b.page.goto(`${BASE}/prototypes/plans-repo/element/?plan=nope&el=x`); await b.page.waitForTimeout(2000);
console.log('missing element plan:', (await b.page.locator('.page-layout__title h1').textContent()).trim(), await b.page.locator('[data-pep-missing]').isVisible());
await b.page.screenshot({ path: OUT + 'missing-el.png' });
const fish = a.plans.find((p) => p.startsWith('Fisheries'))?.split(' ').pop();
await b.page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${fish}&user=Rowan%20Hale`); await b.page.waitForTimeout(2500);
console.log('guest stop:', await b.page.locator('[data-prp-stop="guest"]').isVisible());
console.log('errors:', errs.join(' | ') || 'none');
await browser.close();
