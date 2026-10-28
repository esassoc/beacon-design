import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}&about=open`); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(2200);
await page.screenshot({ path: OUT + 'head-right.png', clip: { x: 280, y: 280, width: 1160, height: 80 } });
await page.locator('[data-prp-settings] button').click(); await page.waitForTimeout(1200);
await page.screenshot({ path: OUT + 'psu-general.png' });
for (const id of ['levels', 'people', 'lists', 'danger']) {
  await page.locator(`[data-psu-link="${id}"]`).click(); await page.waitForTimeout(400);
  await page.screenshot({ path: OUT + `psu-${id}.png` });
}
// a change marks its section; a failing save jumps to it
await page.locator('[data-psu-link="general"]').click(); await page.waitForTimeout(200);
await page.locator('[data-psu="name"]').evaluate((f) => { f.value = ''; f.dispatchEvent(new Event('input', { bubbles: true })); });
await page.waitForTimeout(200);
console.log('general dot:', await page.locator('[data-psu-link="general"] [data-psu-dot]').isVisible());
await page.locator('[data-psu-link="people"]').click(); await page.waitForTimeout(200);
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(400);
console.log('jumped to general:', await page.locator('[data-psu-section="general"]').isVisible(), 'error mark:', await page.locator('[data-psu-link="general"][data-error]').count());
await page.screenshot({ path: OUT + 'psu-error.png' });
console.log('errors:', errs.join(' | ') || 'none');
await browser.close();
