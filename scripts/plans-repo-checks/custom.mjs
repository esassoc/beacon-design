import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
await page.setViewportSize({ width: 1440, height: 1000 });
const errs = []; page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.waitForTimeout(600);
const id = await page.evaluate(() => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith('Draft near-field survival memo'))?.dataset.rowId);
const url = `${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${id}`;
await page.goto(url); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await page.waitForTimeout(800);
check('Customize Page shown for Owner', await page.locator('[data-pep-action="customize"]').isVisible());
await page.click('[data-pep-action="customize"] button'); await page.waitForTimeout(1200);
check('bar shown', await page.locator('[data-elc-bar]').isVisible());
const title = await page.locator('[data-elc-title]').textContent();
const scope = await page.locator('[data-elc-scope]').textContent();
check('bar words', /Customizing the \w+ Page/.test(title), `${title} / ${scope}`);
check('url has customize', page.url().includes('customize=1'));
check('other actions hidden', !(await page.locator('[data-pep-action="edit"]').isVisible()));
const ghosts = await page.locator('.bcn-elm[data-ghost]').count();
check('ghost cards', ghosts >= 1, String(ghosts));
const grips = await page.locator('.bcn-elm:not([hidden]) [data-elm-grip]:not([hidden])').count();
check('every card has a grip', grips === 11, String(grips));
await page.screenshot({ path: OUT + 'custom-top.png' });
await page.screenshot({ path: OUT + 'custom-full.png', fullPage: true });
// switch off Obligations
const before = await page.evaluate(() => [...document.querySelectorAll('[data-pep-col="side"] > .bcn-elm')].map((c) => c.dataset.elementModule).join(','));
await page.locator('[data-element-module="obligations"] [data-elc-on]').click(); await page.waitForTimeout(800);
check('obligations ghosted', await page.locator('[data-element-module="obligations"][data-ghost]').count() === 1);
// move documents to side via options
await page.locator('[data-element-module="documents"] [data-elc-pop] button').first().click(); await page.waitForTimeout(400);
await page.screenshot({ path: OUT + 'custom-options.png' });
await page.locator('[data-element-module="documents"] [data-elc-move="column"] button').click(); await page.waitForTimeout(900);
const sideNow = await page.evaluate(() => [...document.querySelectorAll('[data-pep-col="side"] > .bcn-elm')].map((c) => c.dataset.elementModule).join(','));
check('documents moved to side', sideNow.includes('documents'), sideNow);
await page.keyboard.press('Escape');
// drag comments to top of main
const grip = await page.locator('[data-element-module="comments"] [data-elm-grip]').boundingBox();
const firstMain = await page.locator('[data-pep-col="main"] > .bcn-elm').first().boundingBox();
await page.mouse.move(grip.x + grip.width / 2, grip.y + grip.height / 2); await page.mouse.down();
for (let i = 1; i <= 15; i++) { await page.mouse.move(grip.x + 5, grip.y + (firstMain.y + 10 - grip.y) * (i / 15)); await page.waitForTimeout(30); }
await page.waitForTimeout(200); await page.mouse.up(); await page.waitForTimeout(900);
const mainNow = await page.evaluate(() => [...document.querySelectorAll('[data-pep-col="main"] > .bcn-elm')].map((c) => c.dataset.elementModule).join(','));
check('comments dragged to the top', mainNow.startsWith('comments'), mainNow);
// Edit fields
await page.locator('[data-elc-fields] button').click(); await page.waitForTimeout(900);
check('fields dialog opens', await page.locator('[data-lfd-dialog][open]').count() === 1);
const levelRows = await page.locator('[data-lfd-rows="level"] [data-lfd-row]').count();
await page.screenshot({ path: OUT + 'custom-fields.png' });
await page.locator('[data-lfd-add]').click(); await page.waitForTimeout(400);
await page.screenshot({ path: OUT + 'custom-fields-add.png' });
const item = page.locator('esa-dropdown-menu[data-lfd-add]').getByRole('menuitem').first();
await item.click(); await page.waitForTimeout(400);
check('field added', (await page.locator('[data-lfd-rows="level"] [data-lfd-row]').count()) === levelRows + 1);
await page.locator('[data-lfd-done] button').click(); await page.waitForTimeout(900);
check('fields dialog closed', await page.locator('[data-lfd-dialog][open]').count() === 0);
// save
await page.locator('[data-elc-save] button').click(); await page.waitForTimeout(1200);
check('bar gone after save', !(await page.locator('[data-elc-bar]').isVisible()));
check('url clean', !page.url().includes('customize=1'));
const saved = await page.evaluate(() => [...document.querySelectorAll('[data-pep-col="main"] > .bcn-elm:not([hidden])')].map((c) => c.dataset.elementModule).join(','));
check('saved layout shows', saved.startsWith('comments') && !saved.includes('documents'), saved);
check('obligations gone after save', !(await page.locator('[data-element-module="obligations"]').isVisible()));
await page.screenshot({ path: OUT + 'custom-saved.png', fullPage: true });
// another item at the same level gets it
await page.reload(); await page.waitForTimeout(1500);
const again = await page.evaluate(() => [...document.querySelectorAll('[data-pep-col="main"] > .bcn-elm:not([hidden])')].map((c) => c.dataset.elementModule).join(','));
check('persisted', again.startsWith('comments'), again);
// customize=1 opens straight in
await page.goto(url + '&customize=1'); await page.waitForTimeout(1800);
check('customize=1 opens the bar', await page.locator('[data-elc-bar]').isVisible());
await page.locator('[data-element-module="obligations"] [data-elc-on]').click(); await page.waitForTimeout(600);
page.once('dialog', (d) => d.accept());
await page.locator('[data-elc-cancel] button').click(); await page.waitForTimeout(700);
const conf = await page.locator('esa-confirm-dialog[open]').count();
if (conf) { await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: /Discard/ }).click(); await page.waitForTimeout(800); }
check('cancel asks, then leaves', !(await page.locator('[data-elc-bar]').isVisible()), `confirm=${conf}`);
check('no page errors', errs.length === 0, errs.join(' | '));
console.log(`\n${pass} PASS, ${fail} FAIL`);
await browser.close();
