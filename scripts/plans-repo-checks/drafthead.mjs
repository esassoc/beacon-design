import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 2 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
await page.setViewportSize({ width: 1440, height: 760 });
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&about=closed`); await page.waitForTimeout(2000);
await page.locator('[data-prp-edit] button').click(); await page.waitForTimeout(2000);
const mine = new URL(page.url()).searchParams.get('draft');
const other = await page.evaluate((planID) => { for (const k of Object.keys(localStorage)) { try { const v = JSON.parse(localStorage.getItem(k)); const r = v?.repos?.find?.((x) => x.planID === planID); if (r) return r.drafts.find((d) => d.owner !== 'Andy Lovseth')?.id; } catch {} } }, planID);
const shots = [['none', mine], ['fill', mine], ['tint', mine], ['frame', mine], ['ribbon', mine], ['full', mine], ['fill', other]];
for (const [opt, id] of shots) {
  await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&draft=${id}&about=closed${opt === 'none' ? '' : `&drafthead=${opt}`}`);
  await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2200);
  const box = await page.locator('.bcn-prp__views').boundingBox();
  await page.screenshot({ path: OUT + `drafthead-${opt}${id === other ? '-other' : ''}.png`, clip: { x: box.x - 12, y: box.y - 12, width: box.width + 24, height: 330 } });
}
console.log('mine', mine, 'other', other, 'errors:', errs.join(' | ') || 'none');
await browser.close();
