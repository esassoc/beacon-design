import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
await page.setViewportSize({ width: 1440, height: 900 });
for (const v of ['schedule', 'budget', 'documents', 'deliverables']) {
  await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&view=${v}`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2200);
  await page.screenshot({ path: OUT + `tab-${v}.png` });
}
await browser.close();
