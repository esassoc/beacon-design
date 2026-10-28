import { open, BASE, HIDE } from './lib.mjs';
const { OUT } = await import('./lib.mjs');
const { browser, page } = await open({ scale: 2 });
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
await page.addStyleTag({ content: HIDE });
await page.waitForSelector('[data-pri-name]'); await page.waitForTimeout(800);
await page.screenshot({ path: OUT + 'idx-after.png', fullPage: true });
check('rows', (await page.locator('.bcn-pri__row').count()) === 3);
check('tracks chips', (await page.locator('.bcn-pri__track').count()) >= 4, String(await page.locator('.bcn-pri__track').count()));
check('settings buttons (Andy owns all)', (await page.locator('[data-pri-settings]:not([hidden])').count()) === 3);
// New plan
await page.click('[data-pri-new] button'); await page.waitForTimeout(700);
check('New Plan opens', await page.locator('[data-psu-dialog][open]').count() === 1);
await page.screenshot({ path: OUT + 'setup-new.png' });
// validation
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(300);
check('name required', (await page.locator('[data-psu="name"]').evaluate((f) => f.errorText)) !== '');
await page.locator('[data-psu="name"]').click(); await page.keyboard.type('Water Quality Sampling');
// budget only
await page.locator('[data-psu-link="tracks"]').click(); await page.waitForTimeout(250);
await page.locator('[data-psu-view="schedule"]').click(); await page.waitForTimeout(200);
check('schedule off', !(await page.locator('[data-psu-view="schedule"]').getAttribute('data-on')));
// add a person
await page.locator('[data-psu-link="people"]').click(); await page.waitForTimeout(250);
await page.locator('[data-psu-add-person]').click(); await page.keyboard.type('Dana'); await page.waitForTimeout(400);
await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter'); await page.waitForTimeout(400);
check('person added', (await page.locator('.bcn-psu__person').count()) === 2, String(await page.locator('.bcn-psu__person').count()));
await page.screenshot({ path: OUT + 'setup-filled.png' });
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(2500);
check('landed on new plan', page.url().includes('/plan/?id='), page.url());
await page.addStyleTag({ content: HIDE });
await page.waitForTimeout(1500);
await page.screenshot({ path: OUT + 'setup-newplan.png' });
const h1 = await page.locator('.page-layout__title h1').textContent();
check('H1 is new name', /Water Quality Sampling/.test(h1), h1.trim());
check('one tracked view: Budget plus the record views', (await page.locator('[data-prp-view-toggle]').evaluate((t) => t.options.map((o) => o.label).join(','))) === 'Budget,Documents,Deliverables');
// open settings from About
await page.evaluate(() => document.querySelector('[data-prp-about-open]')?.click()); await page.waitForTimeout(400);
check('About Edit shown', await page.locator('[data-prp-settings]').isVisible());
await page.locator('[data-prp-settings] button').click(); await page.waitForTimeout(1200);
check('Settings opens the modal', await page.locator('[data-psu-dialog][open]').count() === 1);
check('modal is not New', await page.locator('[data-bcn-plan-setup]').evaluate((r) => !r.hasAttribute('data-new')));
await page.locator('[data-psu-link="lists"]').click(); await page.waitForTimeout(250);
check('Lists section shown', await page.locator('[data-psu-list="documentTypes"]').isVisible());
const countBefore = Number(await page.locator('[data-psu-list="documentTypes"] [data-psu-list-count] .esa-badge__text').textContent());
check('document types counted', countBefore > 0, String(countBefore));
await page.locator('[data-psu-list="documentTypes"] [data-ple-new]').click(); await page.keyboard.type('Field Notes'); await page.keyboard.press('Enter'); await page.waitForTimeout(300);
check('count follows the list', Number(await page.locator('[data-psu-list="documentTypes"] [data-psu-list-count] .esa-badge__text').textContent()) === countBefore + 1);
await page.locator('[data-psu="ackDays"]').evaluate((f) => { f.value = '5'; f.dispatchEvent(new Event('input', { bubbles: true })); });
await page.locator('[data-psu-link="levels"]').click(); await page.waitForTimeout(250);
check('customize links disabled with no items', await page.locator('[data-level-page] button').first().isDisabled());
await page.screenshot({ path: OUT + 'setup-plan.png' });
await page.locator('[data-psu-dialog]').evaluate((d) => d.shadowRoot?.querySelector('.esa-dialog__body, [part="body"]')?.scrollTo(0, 99999));
await page.waitForTimeout(300);
await page.screenshot({ path: OUT + 'setup-plan-bottom.png' });
await page.locator('[data-psu-save] button').click(); await page.waitForTimeout(1500);
check('Tracks fact', (await page.locator('[data-prp-tracks]').textContent()) === 'Budget', await page.locator('[data-prp-tracks]').textContent());
await page.locator('[data-prp-settings] button').click(); await page.waitForTimeout(1200);
await page.locator('[data-psu-link="lists"]').click(); await page.waitForTimeout(250);
check('list saved', Number(await page.locator('[data-psu-list="documentTypes"] [data-psu-list-count] .esa-badge__text').textContent()) === countBefore + 1);
check('days saved', (await page.locator('[data-psu="ackDays"]').evaluate((f) => f.value)) === '5');
// Save as Template
await page.locator('[data-psu-link="template"]').click(); await page.waitForTimeout(250);
await page.locator('[data-psu="templateName"]').evaluate((f) => { f.value = 'Water Quality'; f.dispatchEvent(new Event('input', { bubbles: true })); });
await page.locator('[data-psu-template-save] button').click(); await page.waitForTimeout(500);
check('template saved', await page.evaluate(() => JSON.parse(localStorage.getItem('bcn-plan-templates-v1') || '[]').some((t) => t.name === 'Water Quality')));
// delete
await page.locator('[data-psu-link="danger"]').click(); await page.waitForTimeout(250);
await page.locator('[data-psu-delete] button').click(); await page.waitForTimeout(600);
await page.screenshot({ path: OUT + 'setup-delete.png' });
await page.locator('esa-confirm-dialog[open]').getByRole('button', { name: /Delete/ }).click();
await page.waitForTimeout(2500);
check('back on index after delete', /plans-repo\/(\?|$)/.test(page.url()), page.url());
await page.waitForSelector('[data-pri-name]'); await page.waitForTimeout(600);
check('3 plans again', (await page.locator('.bcn-pri__row').count()) === 3, String(await page.locator('.bcn-pri__row').count()));
// The index gear: a sample plan's modal, Customize Page to an item's page
await page.locator('[data-pri-settings] button').first().click(); await page.waitForTimeout(1200);
check('index gear opens the modal', await page.locator('[data-psu-dialog][open]').count() === 1);
await page.locator('[data-psu-link="levels"]').click(); await page.waitForTimeout(250);
const enabled = await page.locator('[data-level-page] button:not([disabled])').count();
check('customize links enabled on a plan with items', enabled >= 3, String(enabled));
await page.locator('[data-level-page] button').nth(2).click(); await page.waitForTimeout(2500);
check('Customize Page lands on an element page', page.url().includes('/element/') && page.url().includes('customize=1'), page.url());
console.log(`\n${pass} PASS, ${fail} FAIL`);
await browser.close();
