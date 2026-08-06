// Curated, selector-driven capture — the "smart" half of the handoff pipeline.
//
// The hub's capture.mjs derives sections from document.body.children (top-level
// DOM, in DOM order, guessed labels). That can't reach Sidebar/Results inside
// <main>, can't separate them, and includes a useless full page. This captures a
// SPEC's declared selectors instead — any depth, authored labels — while reusing
// the hub's de-scope, per-element token resolution, and CSS-partition-by-class.
//
// It deliberately does NOT use the hub's Chrome rule-usage coverage pass. Coverage
// answers "what did this render exercise," which is a function of paint timing, not
// of the page: the same route captured twice on ONE machine emitted different
// bundles, and a slower machine disagreed with a faster one on the same commit.
// Rules are enumerated from the stylesheets and narrowed by the class-partition
// filter instead — a pure function of the markup, so the same page always produces
// the same bytes. It also keeps :hover/:focus rules the renderer never exercised,
// which a handoff artifact wants. See docs/system-improvement-ledger.md.
//
// The two hub helpers we need are trivial and stable, so they're inlined rather
// than deep-imported past the package's exports map. Token tier classification is
// non-trivial (reads the tokens package), so that's imported from the hub.
import { createRequire } from 'node:module';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { realpathSync } from 'node:fs';

// playwright + prettier are @esa/handoff's deps — they live in the hub's module
// tree (ecology/node_modules), not the spoke's. Anchor resolution at the hub's
// REAL path (following the file:-dep symlink) so the lookup walks up into it.
const hubPkg = realpathSync(fileURLToPath(new URL('../../node_modules/@esa/handoff/package.json', import.meta.url)));
const hubRequire = createRequire(hubPkg);
const pw = await import(pathToFileURL(hubRequire.resolve('playwright')).href);
const chromium = pw.chromium ?? pw.default?.chromium; // playwright is CJS → .default
const prettierMod = await import(pathToFileURL(hubRequire.resolve('prettier')).href);
const format = prettierMod.format ?? prettierMod.default?.format;

// --- inlined from @esa/handoff/src (descope.mjs, capture.mjs) -----------------
const descopeCss = (css) =>
  css
    .replace(/:where\(\[data-astro-cid-[\w-]+\]\)/g, '')
    .replace(/\[data-astro-cid-[\w-]+\]/g, '');

function splitRules(css) {
  const rules = [];
  const re = /([^{}]+)\{([^}]*)\}/g;
  let m;
  while ((m = re.exec(css))) {
    const selector = m[1].trim();
    if (selector.startsWith('@')) continue;
    rules.push({ selector, body: m[2].trim(), text: m[0].trim() });
  }
  return rules;
}

const isTokenDefSelector = (selector) =>
  selector.split(',').every((p) => /^\s*(:root|\[data-theme[^\]]*\]|html)\s*$/.test(p));

const fmt = async (src, parser) => {
  try {
    return (await format(src, { parser, printWidth: 90 })).trim();
  } catch {
    return src; // never let a formatting hiccup drop the capture
  }
};

// Every style rule on the page, de-scoped, de-duped, with token-definition (:root)
// blocks dropped so tree-shaking isn't defeated. Narrowing to what a section
// actually needs is the class-partition filter's job, downstream.
//
// `headers` is what CSS.styleSheetAdded reported for the current navigation. Their
// ARRIVAL order is not stable — sheets adopted by a web component register whenever
// that component upgrades — so sheets are ordered by a content-derived key instead.
// Within a sheet, rules keep source order, which is what the cascade uses to break
// ties between equal-specificity rules; reordering those would change rendering.
async function allRules(client, headers) {
  const sheets = [];
  for (const h of headers) {
    let text;
    try {
      text = (await client.send('CSS.getStyleSheetText', { styleSheetId: h.styleSheetId })).text;
    } catch {
      continue; // sheet detached between being announced and being read
    }
    if (text) sheets.push({ url: h.sourceURL || '', text });
  }
  sheets.sort((a, b) => a.url.localeCompare(b.url) || a.text.localeCompare(b.text));

  const seen = new Set();
  const rules = [];
  for (const { text } of sheets)
    for (const rule of splitRules(descopeCss(text))) {
      if (isTokenDefSelector(rule.selector) || seen.has(rule.text)) continue;
      seen.add(rule.text); // identical rule text is idempotent — the first wins
      rules.push(rule);
    }
  return rules;
}

// Replay a state recipe via Playwright. The SAME op shapes run client-side in the
// inspector (runApplyDom), so a state is authored once and drives both.
async function runApply(page, ops) {
  for (const op of ops || []) {
    if (op.click) await page.click(op.click);
    else if (op.fill) await page.fill(op.fill[0], op.fill[1]);
    else if (op.clear) await page.fill(op.clear, '');
    else if (op.clickText) {
      // Optional third element is the ARIA role, defaulting to button. Segmented
      // legos (esa-button-toggle) render role="radio", so a button-only lookup
      // never finds them — and their controls live in shadow DOM, which the
      // inspector's DOM twin has to pierce explicitly. Two-element recipes are
      // unchanged.
      const [sel, name, role = 'button'] = op.clickText;
      await page.locator(sel).getByRole(role, { name }).first().click();
    }
    else if (op.key) await page.keyboard.press(op.key);
    await page.waitForTimeout(80);
  }
}

// Read one selector's clean outerHTML + every custom property resolving on it.
// (Strips Astro scoping first; client-rendered state has no scoping to strip.)
const READ_SECTION = ({ sel }) => {
  for (const el of document.querySelectorAll('*'))
    for (const a of [...el.attributes])
      if (a.name.startsWith('data-astro-cid')) el.removeAttribute(a.name);
  const node = document.querySelector(sel);
  if (!node) return null;
  const root = getComputedStyle(document.documentElement);
  const cs = getComputedStyle(node);
  const values = {};
  for (const prop of root) if (prop.startsWith('--')) values[prop] = root.getPropertyValue(prop).trim();
  for (const prop of cs) if (prop.startsWith('--')) values[prop] = cs.getPropertyValue(prop).trim();
  return { html: node.outerHTML, tag: node.tagName.toLowerCase(), values };
};

/**
 * Capture each spec section in its OWN page state — so variations (palette open,
 * empty / people / projects results) are real, distinct captures, not one snapshot.
 *
 * A section reaches its state via `apply` — a serializable op recipe (click / fill
 * / clear / clickText / key) replayed after a fresh load. The same recipe ships in
 * the manifest and drives the live app from the inspector.
 *
 * Takes a browser rather than launching one: a full run captures dozens of routes,
 * and a cold Chromium start per route was the single largest cost in the pipeline —
 * punishing on slower hardware most of all. Each call still gets its own context,
 * so concurrent captures can't see each other's storage or navigation.
 *
 * @param {import('playwright').Browser} browser
 * @param {string} baseUrl
 * @param {{label:string, selector:string, apply?:object[]}[]} specSections
 * @param {{semantic:Set,primitive:Set,component:Set}} tierIndex
 * @param {(names:string[],values:object,index:object)=>{contract:any[]}} classifyTokens
 * @returns {Promise<{theme:string|null, sections:any[]}>}
 */
export async function captureCurated(browser, baseUrl, specSections, tierIndex, classifyTokens) {
  const context = await browser.newContext();
  try {
    return await captureIn(context, baseUrl, specSections, tierIndex, classifyTokens);
  } finally {
    await context.close();
  }
}

async function captureIn(context, baseUrl, specSections, tierIndex, classifyTokens) {
  const page = await context.newPage();
  const client = await page.context().newCDPSession(page);
  await client.send('DOM.enable');
  await client.send('CSS.enable');

  // Chrome announces every stylesheet it parses; collect the headers per navigation.
  let headers = [];
  client.on('CSS.styleSheetAdded', ({ header }) => headers.push(header));

  // Captures run concurrently, so per-section progress is collected and returned
  // for the caller to print as one block rather than interleaved with other routes'.
  const logs = [];
  const sections = [];
  for (const spec of specSections) {
    // Fresh load per section, then replay its recipe — each state is independent.
    headers = [];
    await page.goto(baseUrl, { waitUntil: 'networkidle' });
    await runApply(page, spec.apply);
    // Settles the DOM the recipe just drove. Unlike the coverage pass this replaced,
    // the CAPTURED CSS no longer depends on this landing in time — only the markup
    // does, and that is settled once the recipe's handlers have run.
    await page.waitForTimeout(200);
    const rules = await allRules(client, headers);

    const cap = await page.evaluate(READ_SECTION, { sel: spec.selector });
    if (!cap) {
      logs.push(`  ! selector not found, skipping "${spec.label}" (${spec.selector})`);
      continue;
    }

    // Partition CSS + tokens to this section by class membership (the hub's rule).
    const classes = new Set([...cap.html.matchAll(/class="([^"]*)"/g)].flatMap((m) => m[1].split(/\s+/)));
    const css = rules
      .filter((r) => [...classes].some((c) => c && r.selector.includes('.' + c)))
      .map((r) => r.text)
      .join('\n');
    const tokenNames = [...new Set([...css.matchAll(/var\(\s*(--[\w-]+)/g)].map((m) => m[1]))].sort();
    const tokens = classifyTokens(tokenNames, cap.values, tierIndex).contract;

    logs.push(`  · ${spec.label}: ${cap.html.length}b html, ${tokens.length} tokens`);
    sections.push({
      label: spec.label,
      tag: cap.tag,
      html: await fmt(cap.html, 'html'),
      css: css ? await fmt(css, 'css') : '',
      tokens,
    });
  }

  const theme = await page.evaluate(() => document.documentElement.getAttribute('data-theme'));
  return { theme, sections, logs };
}

// One browser for a whole run. Callers own the lifecycle so a batch of captures
// shares a single Chromium start.
export const launchBrowser = () => chromium.launch();
