// Vertical alignment (2026-10-29, Andy: "I would want you to be able to do this kind of vertical alignment analysis";
// Due for You's clock sat 3.6px high and its count 2.4px low). On each page, every row that sets an icon, a title and a
// count side by side: their vertical centres, measured, must agree within 1px. The title's centre is its text's line
// box; an icon's is its svg; a badge's is its box. Prints each offender with its numbers.
import { open, BASE, HIDE, DEFAULTS } from './lib.mjs';
const { browser, page, planID } = await open({ scale: 1 });
let pass = 0, fail = 0;
const check = (n, ok, x = '') => { ok ? pass++ : fail++; console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${x ? ' :: ' + x : ''}`); };
const TOL = 1;

/** In the page: every element laying out an icon beside text (and maybe a badge) on one line. */
const scan = () => page.evaluate((TOL) => {
  const center = (r) => r.top + r.height / 2;
  const visible = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== 'hidden'; };
  const label = (e) => `${e.tagName.toLowerCase()}${e.className && typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).slice(0, 2).join('.') : ''}`;
  const textCenter = (el) => { const range = document.createRange(); range.selectNodeContents(el); const rs = [...range.getClientRects()].filter((r) => r.height > 4); return rs.length ? center(rs[0]) : null; };
  const out = [];
  // The rows: headings (h1 to h3, and label-strong titles) with an icon or a badge on their line.
  for (const title of document.querySelectorAll('h1, h2, h3, [class*="__title"]:not([class*="__titles"])')) {
    if (!visible(title) || !title.textContent.trim()) continue;
    const t = textCenter(title);
    if (t === null) continue;
    const line = title.getBoundingClientRect();
    // Look up to three ancestors for an icon and a badge sharing this line.
    let scope = title.parentElement;
    for (let i = 0; i < 3 && scope; i++, scope = scope.parentElement) {
      const marks = [...scope.querySelectorAll(':scope svg, :scope .esa-badge')].filter((m) => !title.contains(m) && visible(m) && !m.closest('button, a, esa-tooltip, [role="table"], table, ul, dialog:not([open])'));
      const near = marks.filter((m) => { const r = m.getBoundingClientRect(); return r.bottom > line.top && r.top < line.bottom && r.height <= 32; });
      if (!near.length) continue;
      for (const m of near) {
        const d = center(m.getBoundingClientRect()) - t;
        if (Math.abs(d) > TOL) out.push({ title: title.textContent.trim().slice(0, 40), mark: m.matches('svg') ? 'icon' : `badge "${m.textContent.trim()}"`, delta: +d.toFixed(1), where: label(scope) });
      }
      break;
    }
  }
  return out;
}, TOL);

const pages = [
  ['Plans index', `/prototypes/plans-repo/?user=Andy%20Lovseth`],
  ['Sent to You', `/prototypes/plans-repo/inbox/?user=Rowan%20Hale`],
  ['Plan', `/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}&user=Andy%20Lovseth`],
  ['Plan, Deliverables', `/prototypes/plans-repo/plan/?id=${planID}${DEFAULTS}&view=deliverables&user=Andy%20Lovseth`],
];
for (const [name, path] of pages) {
  await page.goto(BASE + path); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
  const bad = await scan();
  check(`${name}: icon, title and count share a centre line`, !bad.length, bad.map((b) => `${b.title} / ${b.mark} ${b.delta > 0 ? '+' : ''}${b.delta}px (${b.where})`).join('; '));
}
// An item page and a transmittal, from the plan.
const el = await page.evaluate(() => document.querySelector('.bcn-plan-gantt__item[data-row-id]')?.dataset.rowId);
const tr = await page.evaluate((planID) => JSON.parse(localStorage.getItem('bcn-plan-records-v1')).plans.find((p) => p.planID === planID).transmittals.find((x) => x.number === 4)?.id, planID);
for (const [name, path] of [['Item', `/prototypes/plans-repo/element/?plan=${planID}&el=${el}`], ['Transmittal', `/prototypes/plans-repo/transmittal/?plan=${planID}&id=${tr}`]]) {
  await page.goto(BASE + path); await page.addStyleTag({ content: HIDE }); await page.waitForTimeout(3000);
  const bad = await scan();
  check(`${name}: icon, title and count share a centre line`, !bad.length, bad.map((b) => `${b.title} / ${b.mark} ${b.delta > 0 ? '+' : ''}${b.delta}px (${b.where})`).join('; '));
}
console.log(`${pass} PASS, ${fail} FAIL`);
await browser.close();
