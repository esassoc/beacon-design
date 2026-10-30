import { open, BASE, HIDE } from './lib.mjs';
// Configure Page (2026-10-30): a level's whole page in a modal with its miniature. Opened from an item page's header and
// from Plan Settings, Levels; the outline matches the page; a drag, a keyboard move, a switch, a setting, another level;
// the preview draws the working layout; Save lands on every item at the level; Cancel discards; Arrange on This Page
// hands over to the in-place mode.
const { OUT } = await import('./lib.mjs');
const { browser, page, planID } = await open({ scale: 1 });
await page.setViewportSize({ width: 1440, height: 1000 });
const errs = [];
page.on('pageerror', (e) => errs.push(e.message));
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const wait = (ms) => page.waitForTimeout(ms);

await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.waitForSelector('.bcn-plan-gantt__hit'); await wait(600);
const idOf = (name) => page.evaluate((name) => [...document.querySelectorAll('.bcn-plan-gantt__item')].find((li) => li.querySelector('.bcn-plan-gantt__name')?.textContent.trim().startsWith(name))?.dataset.rowId, name);
const task = await idOf('Draft near-field survival memo');
const sub = await idOf('Near-field intake behavior');
const study = await idOf('Migration & Survival Study');
const itemUrl = (id) => `${BASE}/prototypes/plans-repo/element/?plan=${planID}&el=${id}`;
async function gotoItem(id, extra = '') {
  await page.goto(itemUrl(id) + extra); await page.addStyleTag({ content: HIDE }); await page.waitForSelector('[data-pep-cols]:not([hidden])'); await wait(900);
}
const pageCol = (col) => page.evaluate((col) => [...document.querySelectorAll(`[data-pep-col="${col}"] > .bcn-elm:not([hidden])`)].map((c) => c.dataset.elementModule), col);
const outCol = (col, ghosts = false) => page.evaluate(([col, ghosts]) => [...document.querySelectorAll(`[data-bcn-page-config] [data-pgo-list="${col}"] [data-pgo-tile]`)].filter((t) => ghosts || !t.hasAttribute('data-ghost')).map((t) => t.dataset.pgoTile), [col, ghosts]);
const tray = () => outCol('tray', true);
const isOpen = () => page.locator('[data-pcd-dialog][open]').count().then((n) => n === 1);
const setSelect = (sel, value) => page.locator(sel).evaluate((s, v) => { s.value = v; s.dispatchEvent(new CustomEvent('change', { detail: { value: v }, bubbles: true })); }, value);
const setToggle = setSelect;

// ── From the item page's header ──
await gotoItem(task);
const mainBefore = await pageCol('main');
const sideBefore = await pageCol('side');
check('Configure Page in the header for an Owner', await page.locator('[data-pep-action="configure"]').isVisible());
check('no in-place Customize Page button in the header', (await page.locator('[data-pep-action="customize"]').count()) === 0);
await page.click('[data-pep-action="configure"] button'); await wait(1400);
check('the modal opens', await isOpen());
const heading = await page.locator('[data-pcd-dialog]').evaluate((d) => d.heading);
check('heading names the level', heading === 'Configure the Task Page', heading);
check('the level picker is on Task', (await page.locator('[data-pcd-level]').evaluate((s) => s.value)) === '4');
check('outline main matches the page', JSON.stringify(await outCol('main')) === JSON.stringify(mainBefore), `${await outCol('main')} vs ${mainBefore}`);
check('outline side matches the page', JSON.stringify(await outCol('side')) === JSON.stringify(sideBefore), `${await outCol('side')} vs ${sideBefore}`);
check('the tray holds what is off (Progress)', (await tray()).includes('progress'), String(await tray()));
check('Details selected first, its settings on the right', /Details/.test(await page.locator('[data-pcd-panel-title]').textContent()));
check('Details lists the level fields with Required to Complete', (await page.locator('[data-pcd-field-rows] [data-field-id]').count()) >= 3);
check('the footer says it saves to the plan, not a draft', /not a draft/.test(await page.locator('[data-pcd-note]').textContent()));
const footerButtons = await page.locator('.bcn-pcd__footer esa-button, .bcn-pcd__footer button').evaluateAll((els) => els.filter((e) => e.tagName === 'BUTTON').map((b) => b.textContent.trim()));
check('footer: Cancel then Save', footerButtons.join(',') === 'Cancel,Save', footerButtons.join(','));
await page.screenshot({ path: OUT + 'pageconfig-open.png' });

// A ghost: Completion with Can Be a Deliverable off says why.
await page.locator('[data-pcd-deliver]').click(); await wait(400);
const ghostWhy = await page.locator('[data-pgo-tile="completion"] .bcn-pgo__why').textContent().catch(() => '');
check('a ghost tile says why it does not show', /Can Be a Deliverable/.test(ghostWhy), ghostWhy);
await page.locator('[data-pcd-deliver]').click(); await wait(400);
check('back on, the ghost is gone', (await page.locator('[data-pgo-tile="completion"][data-ghost]').count()) === 0);

// Drag Documents to the side column, under Details.
const from = await page.locator('[data-pgo-tile="documents"]').boundingBox();
const to = await page.locator('[data-pgo-tile="lineage"]').boundingBox();
await page.mouse.move(from.x + from.width / 2, from.y + 10); await page.mouse.down();
for (let i = 1; i <= 16; i++) { await page.mouse.move(from.x + from.width / 2 + (to.x + 20 - from.x - from.width / 2) * (i / 16), from.y + 10 + (to.y + 4 - from.y - 10) * (i / 16)); await wait(25); }
await wait(200); await page.mouse.up(); await wait(600);
const sideAfterDrag = await outCol('side');
check('dragged Documents into the side column', sideAfterDrag.includes('documents') && !(await outCol('main')).includes('documents'), String(sideAfterDrag));
check('it landed between Details and Lineage', sideAfterDrag.indexOf('documents') === sideAfterDrag.indexOf('details') + 1, String(sideAfterDrag));

// The keyboard: Comments up one with Alt+ArrowUp.
await page.locator('[data-pgo-tile="comments"]').click(); await wait(300);
const mainNow = await outCol('main');
await page.keyboard.press('Alt+ArrowUp'); await wait(500);
const mainKey = await outCol('main');
check('Alt+ArrowUp moves the selected tile up', mainKey.indexOf('comments') === mainNow.indexOf('comments') - 1, String(mainKey));
check('the move is announced', /Comments: main column/.test(await page.locator('[data-pgo-live]').textContent()));
check('focus stays on the moved tile', await page.evaluate(() => document.activeElement?.dataset?.pgoTile === 'comments'));
// The settings column's buttons too: Move Down puts it back.
await page.locator('[data-pcd-move="down"] button').click(); await wait(400);
check('Move Down in the settings column', JSON.stringify(await outCol('main')) === JSON.stringify(mainNow), String(await outCol('main')));
await page.keyboard.press('Alt+ArrowUp'); await wait(400);
await page.locator('[data-pgo-tile="comments"]').click(); await wait(200);
await page.keyboard.press('Alt+ArrowUp'); await wait(400);
await page.screenshot({ path: OUT + 'pageconfig-moved.png' });

// Off: Obligations' switch puts it in the tray.
await page.locator('[data-pgo-tile="obligations"] esa-switch-toggle').click(); await wait(500);
check('switched off, Obligations sits in the tray', (await tray()).includes('obligations') && !(await outCol('side')).includes('obligations'), String(await tray()));

// A setting: Budget seen by Everyone.
await page.locator('[data-pgo-tile="budget"]').click(); await wait(300);
check('Budget selected, Who Sees It shown', await page.locator('[data-pcd-visible]').isVisible());
await setToggle('[data-pcd-visible]', 'everyone'); await wait(400);
check('the tile loses its Owners and Editors tag', (await page.locator('[data-pgo-tile="budget"] .bcn-pgo__tag').count()) === 0);

// The preview: the item drawn with the working layout.
await setToggle('[data-pcd-view]', 'preview'); await wait(4500);
const frame = page.frameLocator('[data-pcd-iframe]');
const previewSide = await frame.locator('[data-pep-col="side"] > .bcn-elm:not([hidden])').evaluateAll((els) => els.map((e) => e.dataset.elementModule)).catch(() => []);
check('the preview draws the working layout (Documents in the side column)', previewSide.includes('documents') && !previewSide.includes('obligations'), String(previewSide));
await page.screenshot({ path: OUT + 'pageconfig-preview.png' });
await setToggle('[data-pcd-view]', 'outline'); await wait(300);

// Another level, without closing: Sub-study, Budget to the main column.
await setSelect('[data-pcd-level]', '3'); await wait(600);
check('switching level changes the heading', (await page.locator('[data-pcd-dialog]').evaluate((d) => d.heading)) === 'Configure the Sub-study Page');
check('Sub-study shows Progress on the page', (await outCol('main')).includes('progress'));
await page.locator('[data-pgo-tile="budget"]').click(); await wait(300);
await setToggle('[data-pcd-column]', 'main'); await wait(400);
check('Budget moved to the Sub-study main column', (await outCol('main')).at(-1) === 'budget', String(await outCol('main')));
await page.screenshot({ path: OUT + 'pageconfig-substudy.png' });
await setSelect('[data-pcd-level]', '4'); await wait(500);
check('back on Task, its changes are kept', (await outCol('side')).includes('documents') && (await tray()).includes('obligations'));

// Save: the item page follows.
await page.locator('[data-pcd-save] button').click(); await wait(1500);
check('Save closes the modal', !(await isOpen()));
const savedMain = await pageCol('main');
const savedSide = await pageCol('side');
check('the item page shows the new arrangement', savedSide.includes('documents') && !savedSide.includes('obligations') && savedMain.indexOf('comments') < savedMain.indexOf('schedule'), `${savedMain} | ${savedSide}`);
check('Budget still shows (Everyone)', savedSide.includes('budget'));
await page.screenshot({ path: OUT + 'pageconfig-saved.png', fullPage: true });
await gotoItem(task);
check('it persists', (await pageCol('side')).includes('documents'));
await gotoItem(sub);
check('the Sub-study page has Budget in its main column', (await pageCol('main')).includes('budget'), String(await pageCol('main')));

// Cancel discards.
await gotoItem(task);
await page.click('[data-pep-action="configure"] button'); await wait(1200);
await page.locator('[data-pgo-tile="activity"]').click(); await wait(200);
await setToggle('[data-pcd-column]', 'main'); await wait(300);
await page.locator('[data-pcd-cancel] button').click(); await wait(600);
const asked = await page.locator('[data-pcd-confirm][open]').count();
if (asked) { await page.locator('[data-pcd-confirm][open]').getByRole('button', { name: /Discard/ }).click(); await wait(700); }
check('Cancel asks, then closes', asked === 1 && !(await isOpen()), `asked=${asked}`);
check('Cancel discards', !(await pageCol('main')).includes('activity') && (await pageCol('side')).includes('activity'));

// Arrange on This Page: the in-place mode, with the modal's changes.
await page.click('[data-pep-action="configure"] button'); await wait(1200);
check('Arrange on This Page offered from an item page', await page.locator('[data-pcd-arrange]').isVisible());
await page.locator('[data-pcd-arrange] button').click(); await wait(1200);
check('it hands over to the in-place bar', await page.locator('[data-elc-bar]').isVisible() && !(await isOpen()));
await page.locator('[data-elc-cancel] button').click(); await wait(800);
check('the in-place bar cancels', !(await page.locator('[data-elc-bar]').isVisible()));

// &configure=1 opens it.
await gotoItem(task, '&configure=1'); await wait(800);
check('configure=1 opens the modal', await isOpen());
await page.keyboard.press('Escape'); await wait(500);

// ── From Plan Settings, Levels ──
await page.goto(`${BASE}/prototypes/plans-repo/plan/?id=${planID}`); await page.waitForSelector('.bcn-plan-gantt__hit'); await page.addStyleTag({ content: HIDE }); await wait(600);
await page.evaluate(() => document.querySelector('[data-prp-about-open]')?.click()); await wait(400);
await page.locator('[data-prp-settings] button').click(); await wait(1200);
await page.locator('[data-psu-link="levels"]').click(); await wait(300);
const enabled = await page.locator('[data-level-page] button:not([disabled])').count();
check('every saved level has Configure Page', enabled === 4, String(enabled));
await page.locator('[data-level-page][data-level-depth="2"] button').click(); await wait(1500);
check('Configure Page opens over Plan Settings', (await isOpen()) && (await page.locator('[data-psu-dialog][open]').count()) === 1);
check('on the Study level', (await page.locator('[data-bcn-plan-setup] [data-pcd-dialog]').evaluate((d) => d.heading)) === 'Configure the Study Page');
check('no Arrange on This Page from Plan Settings', !(await page.locator('[data-bcn-plan-setup] [data-pcd-arrange]').isVisible()));
await page.screenshot({ path: OUT + 'pageconfig-from-settings.png' });
await page.locator('[data-bcn-plan-setup] [data-pgo-tile="obligations"] esa-switch-toggle').click(); await wait(400);
await page.locator('[data-bcn-plan-setup] [data-pcd-save] button').click(); await wait(1200);
check('saved, Plan Settings is still open', !(await isOpen()) && (await page.locator('[data-psu-dialog][open]').count()) === 1);
// A change in Plan Settings, saved after, doesn't put the old layout back.
await page.locator('[data-psu-link="lists"]').click(); await wait(250);
await page.locator('[data-psu="ackDays"]').evaluate((f) => { f.value = '4'; f.dispatchEvent(new Event('input', { bubbles: true })); });
await page.locator('[data-psu-save] button').click(); await wait(1500);
await gotoItem(study);
check('the Study page has no Obligations', !(await pageCol('side')).includes('obligations'), String(await pageCol('side')));
check('the Task layout saved earlier survived Plan Settings’ save', await (async () => { await gotoItem(task); return (await pageCol('side')).includes('documents'); })());

check('no page errors', errs.length === 0, errs.join(' | '));
console.log(`\n${pass} PASS, ${fail} FAIL`);
await browser.close();
