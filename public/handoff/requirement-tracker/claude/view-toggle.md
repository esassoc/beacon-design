# View toggle

The Grid / Kanban / Timeline view switcher. Prologis wants the requirement set as a data GRID, so Grid is first and is the default (active) option; Kanban and Timeline are present but secondary.

## Key decisions
- Grid is the default view — it is listed first and active on load. This is the whole reason the prototype exists (prod defaults to Kanban; Prologis asked for the grid).
- A segmented control (pill group), not tabs — the three are peer views of the same data, switched in place with no navigation.
- In this prototype pass only Grid is wired; Kanban and Timeline render a labeled empty-state stub, deliberately identical, so the toggle is honest about what is built.

## Gotchas
- The grid header + footer belong to the Grid pane only — they must hide when Kanban/Timeline is active, not float above an empty stub.
- Do not rebuild a real Kanban here; the two non-Grid views are intentionally stubs this pass.

## Done when
- Grid is active on load; switching panes hides the grid chrome for the non-Grid views.

## Markup
```html
<div class="tt-views" role="tablist" aria-label="View as">
  <button
    type="button"
    class="tt-view is-active"
    data-view="grid"
    role="tab"
    aria-selected="true"
  >
    <span class="esa-icon esa-icon--sm" aria-hidden="true">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M3 9h18"></path>
        <path d="M3 15h18"></path>
        <path d="M9 3v18"></path>
        <path d="M15 3v18"></path>
      </svg>
    </span>
    Grid
  </button>
  <button
    type="button"
    class="tt-view"
    data-view="kanban"
    role="tab"
    aria-selected="false"
  >
    <span class="esa-icon esa-icon--sm" aria-hidden="true">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <path d="M3 3h18v18H3z"></path>
        <path d="M9 3v18"></path>
        <path d="M15 3v18"></path>
      </svg>
    </span>
    Kanban
  </button>
  <button
    type="button"
    class="tt-view"
    data-view="timeline"
    role="tab"
    aria-selected="false"
  >
    <span class="esa-icon esa-icon--sm" aria-hidden="true">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path>
      </svg>
    </span>
    Timeline
  </button>
</div>
```

## Styles
```css
.page-layout__title h1 .esa-icon {
  color: var(--color-secondary) !important;
}
.tt-views {
  display: inline-flex;
  padding: var(--spacing-050);
  background: var(--bcn-gray-100);
  border-radius: var(--radius-300);
}
.tt-view {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: var(--spacing-150) var(--spacing-400);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  border-radius: var(--radius-200);
  transition:
    background 0.15s ease,
    color 0.15s ease;
}
.tt-view.is-active {
  background: var(--color-surface);
  color: var(--color-primary);
  box-shadow: var(--shadow-100, 0 1px 2px rgba(0, 0, 0, 0.08));
}
.tt-view .esa-icon {
  color: currentColor;
}
.grid-header__filter .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.download-button .esa-icon {
  color: currentColor;
}
.tt-view-pane[hidden] {
  display: none;
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.esa-icon {
  --_icon-size: var(--icon-size-medium, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_

## Behavior
```ts
// ── src/components/handoff/inspector.client.ts ──
// Runtime Handoff inspector — a deployable port of @esa/handoff's dev-toolbar app.
// The dev tool is bound to Astro's dev-only toolbar (defineToolbarApp/canvas) and
// is stripped from production builds; this version brings its own shadow host and
// its own toggle, so it works on the deployed site AND in `astro dev`.
//
// It is route-aware: the manifest is resolved from location.pathname
// (/handoff/<slug>/manifest.json, slug derived exactly like the handoff CLI's
// --name), so each prototype shows ITS sections, not the homepage's. If no bundle
// exists for the current route, the inspector stays dormant — no launcher, no UI.
//
// The rendering logic (tree, HTML/CSS/token tabs, page-pick highlight, copy +
// copy-for-Claude) is a faithful port of toolbar-app.js; the export engine remains
// the source of truth and this only reads the manifest it produced.

interface Token { name: string; value: string; tier: string }
interface Guide { intent?: string; decisions?: string[]; gotchas?: string[]; acceptance?: string[] }
interface ApplyOp {
  click?: string; fill?: [string, string]; clear?: string; clickText?: [string, string]; key?: string;
}
interface Section {
  index?: number; label: string; tag?: string; selector?: string; apply?: ApplyOp[];
  html: string; css: string; tokens: Token[]; js?: string; guide?: Guide;
  claudePath?: string; repoPath?: string;
}

// Set a field's value the way a user would, so the page's input handlers fire.
function setInput(sel: string, val: string) {
  const el = document.querySelector<HTMLInputElement>(sel);
  if (!el) return;
  el.value = val;
  el.dispatchEvent(new Event('input', { bubbles: true }));
}
// Replay a state recipe on the LIVE page — the DOM twin of the capture's runApply,
// so clicking a chip drives the real app into that section's state.
function runApplyDom(ops?: ApplyOp[]) {
  for (const op of ops || []) {
    if (op.click) document.querySelector<HTMLElement>(op.click)?.click();
    else if (op.fill) setInput(op.fill[0], op.fill[1]);
    else if (op.clear) setInput(op.clear, '');
    else if (op.clickText) {
      const c = document.querySelector(op.clickText[0]);
      [...(c?.querySelectorAll('button') ?? [])]
        .find((b) => b.textContent?.trim().includes(op.clickText![1]))
        ?.click();
    } else if (op.key) document.dispatchEvent(new KeyboardEvent('keydown', { key: op.key, bubbles: true }));
  }
}
interface Manifest {
  name: string; sections: Section[];
  full?: { label: string; html: string; css: string; tokens: Token[]; claudePath?: string; repoPath?: string };
}

const esc = (s: unknown) =>
  String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]!));
const isColor = (v: unknown) =>
  /^(#[0-9a-f]{3,8}|rgba?\([\d.,\s%/]+\)|hsla?\([\d.,\s%/]+\))$/i.test(String(v).trim());

// --- syntax highlighters (operate on prettier-formatted, then-escaped code) ---
function hlVal(v: string) {
  return v
    .replace(/("[^"]*"|'[^']*')/g, '<span class="s">$1</span>')
    .replace(/(var\()(--[\w-]+)/g, '$1<span class="t">$2</span>')
    .replace(/(#[0-9a-fA-F]{3,8})\b/g, '<span class="n">$1</span>');
}
function hlCss(src: string) {
  return esc(src)
    .split('\n')
    .map((line) => {
      if (/\{\s*$/.test(line))
        return line.replace(/^(\s*)(.+?)(\s*\{)\s*$/, '$1<span class="sel">$2</span>$3');
      const m = line.match(/^(\s*)([\w-]+)(\s*:\s*)(.+?)(;?)\s*$/);
      if (m) return `${m[1]}<span class="p">${m[2]}</span>${m[3]}${hlVal(m[4])}${m[5]}`;
      return line;
    })
    .join('\n');
}
function hlHtml(src: string) {
  return esc(src)
    .replace(/("[^"]*")/g, '<span class="s">$1</span>')
    .replace(/(&lt;\/?)([a-zA-Z][\w-]*)/g, '$1<span class="tag">$2</span>');
}

function renderTokens(tokens: Token[]) {
  if (!tokens || !tokens.length) return '<p class="hint">No design tokens in this section.</p>';
  const groups: Record<string, Token[]> = {};
  for (const t of tokens) (groups[t.tier] = groups[t.tier] || []).push(t);
  const order = ['brand', 'semantic', 'component', 'primitive'];
  return order
    .filter((k) => groups[k])
    .map(
      (tier) => `
      <div class="tgroup">
        <div class="tgroup__h">${tier} <span>${groups[tier].length}</span></div>
        ${groups[tier]
          .map(
            (t) => `<div class="tok">
              <span class="tok__name">${isColor(t.value) ? `<i style="background:${esc(t.value)}"></i>` : ''}<code>${esc(t.name)}</code></span>
              <span class="tok__val">${esc(t.value)}</span>
            </div>`
          )
          .join('')}
      </div>`
    )
    .join('');
}

// Light JS/TS highlight — comments + strings only; enough to read, not a full lexer.
function hlJs(src: string) {
  return esc(src)
    .replace(/(\/\/[^\n]*)/g, '<span class="c">$1</span>')
    .replace(/(`[^`]*`|"[^"]*"|'[^']*')/g, '<span class="s">$1</span>');
}

function renderGuide(g?: Guide) {
  if (!g || !Object.keys(g).length)
    return '<p class="hint">No design guidance authored for this section.</p>';
  const list = (title: string, arr?: string[]) =>
    arr?.length
      ? `<div class="g"><div class="g__h">${title}</div><ul>${arr.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`
      : '';
  return [
    g.intent ? `<p class="g__intent">${esc(g.intent)}</p>` : '',
    list('Key decisions', g.decisions),
    list('Gotchas', g.gotchas),
    list('Done when', g.acceptance),
  ].join('');
}

const STYLE = `
  :host { all: initial; }
  /* The hidden attribute must win over the explicit display on .launch/.panel,
     otherwise the toggle is defeated by specificity. */
  [hidden] { display: none !important; }
  .host-root { position: fixed; inset: 0; pointer-events: none; z-index: 2147483000;
    font-family: system-ui, sans-serif; }
  .host-root > * { pointer-events: auto; }
  .launch { position: fixed; bottom: 22px; left: 22px; display: inline-flex; align-items: center; gap: 9px;
    padding: 13px 19px; border-radius: 999px; color: #fff; cursor: pointer; font-size: 15px; font-weight: 600;
    letter-spacing: .01em; border: 1px solid #3d6fd6;
    background: linear-gradient(180deg, #1f6feb, #1551c4);
    box-shadow: 0 10px 28px -8px rgba(31,111,235,.65), inset 0 1px 0 rgba(255,255,255,.18);
    transition: transform .15s ease, box-shadow .15s ease, filter .15s ease; }
  .launch:hover { transform: translateY(-2px); filter: brightness(1.07);
    box-shadow: 0 16px 36px -8px rgba(31,111,235,.75), inset 0 1px 0 rgba(255,255,255,.25); }
  .launch:active { transform: translateY(0); }
  .launch svg { flex: none; }
  /* Full-height glass panel, inset from the edges. */
  .panel { position: fixed; top: 18px; right: 18px; bottom: 18px; width: min(720px, 94vw);
    display: flex; flex-direction: column; color: #ffffff; border-radius: 16px;
    background: linear-gradient(155deg, rgba(26,31,40,.74), rgba(11,15,21,.86));
    backdrop-filter: blur(26px) saturate(150%); -webkit-backdrop-filter: blur(26px) saturate(150%);
    border: 1px solid rgba(255,255,255,.15);
    box-shadow: 0 28px 70px -18px rgba(0,0,0,.62), inset 0 1px 0 rgba(255,255,255,.10);
    font-size: 12.5px; overflow: hidden;
    /* slide in from the right */
    transform: translateX(calc(100% + 32px)); opacity: 0; visibility: hidden;
    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .22s ease, visibility 0s linear .3s; }
  .panel.is-open { transform: none; opacity: 1; visibility: visible;
    transition: transform .3s cubic-bezier(.4,0,.2,1), opacity .22s ease; }
  .head { display: flex; align-items: center; gap: 8px; padding: 13px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .head strong { font-size: 14px; }
  .head .sub { flex: 1; color: #ccd5e0; font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .picker { padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .chip { padding: 5px 12px; border-radius: 999px; border: 1px solid rgba(255,255,255,.14); background: rgba(255,255,255,.04);
    color: #eef2f6; font: inherit; font-size: 12.5px; cursor: pointer; white-space: nowrap;
    transition: border-color .12s ease, background .12s ease, color .12s ease; }
  .chip:hover { color: #fff; border-color: rgba(255,255,255,.3); }
  .chip.on { background: rgba(31,111,235,.28); border-color: #4493f8; color: #fff; font-weight: 600; }
  .tabs { display: flex; gap: 4px; padding: 9px 14px; border-bottom: 1px solid rgba(255,255,255,.09); }
  .tabs button { padding: 5px 12px; border: 0; border-radius: 6px; background: none; color: #ccd5e0;
    font: inherit; font-size: 12.5px; cursor: pointer; }
  .tabs button.on { background: rgba(255,255,255,.12); color: #fff; }
  .body { overflow: auto; padding: 13px 16px; flex: 1; }
  /* Prominent action footer. */
  .footer { position: relative; display: flex; justify-content: flex-end; gap: 8px; padding: 11px 16px;
    border-top: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.18); }
  .footer button { flex: none; display: inline-flex; align-items: center; justify-content: center; gap: 7px;
    padding: 8px 14px; border-radius: 8px; font: inherit; font-size: 12.5px; font-weight: 600; cursor: pointer; }
  .copy { color: #eef2f6; border: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.05); }
  .copy:hover { color: #fff; border-color: rgba(255,255,255,.34); }
  .copy.done { color: #7ee787; border-color: #2ea043; }
  .claude { color: #fff; border: 1px solid #d97757;
    background: linear-gradient(180deg, #e0805f, #c25e3c);
    box-shadow: 0 6px 18px -6px rgba(217,119,87,.6), inset 0 1px 0 rgba(255,255,255,.2); }
  .claude svg { flex: none; }
  .claude:hover { filter: brightness(1.06); }
  .claude.done { background: linear-gradient(180deg, #2ea043, #238636); border-color: #2ea043; }
  /* Claude payload preview popover (anchored above the footer). */
  .cpreview { position: absolute; left: 16px; right: 16px; bottom: calc(100% + 8px);
    background: rgba(13,17,23,.96); border: 1px solid rgba(255,255,255,.16); border-radius: 12px;
    box-shadow: 0 18px 50px -14px rgba(0,0,0,.7); padding: 12px 14px; max-height: 50vh; overflow: auto; }
  .cpreview__h { display: flex; align-items: center; margin-bottom: 8px; color: #ccd5e0; font-size: 11px;
    letter-spacing: .04em; text-transform: uppercase; }
  .cpreview__copy { margin-left: auto; color: #e9a589; border: 1px solid #d9775766; border-radius: 6px;
    background: none; font: inherit; font-size: 11.5px; padding: 3px 9px; cursor: pointer; text-transform: none; letter-spacing: 0; }
  .cpreview__copy:hover { color: #fff; border-color: #d97757; }
  .cpreview pre { margin: 0; white-space: pre-wrap; word-break: break-word; line-height: 1.55;
    color: #eef2f6; font-family: ui-monospace, "SF Mono", Menlo, monospace; font-size: 12px; }
  .hint { margin: 0; color: #c4cdd8; line-height: 1.6; }
  pre.code { margin: 0; white-space: pre-wrap; word-break: break-word; line-height: 1.55; tab-size: 2; color: #e3e9ef;
    font-family: ui-monospace, "SF Mono", Menlo, monospace; }
  pre.code .tag { color: #7ee787; }
  pre.code .s   { color: #a5d6ff; }
  pre.code .sel { color: #d2a8ff; }
  pre.code .p   { color: #79c0ff; }
  pre.code .t   { color: #ffa657; }
  pre.code .n   { color: #f0883e; }
  pre.code .c   { color: #8d97a3; font-style: italic; }
  .g { margin-bottom: 14px; }
  .g__intent { margin: 0 0 14px; color: #ffffff; line-height: 1.6; font-size: 13px; }
  .g__h { color: #c4cdd8; font-size: 11px; letter-spacing: .04em; text-transform: uppercase; margin-bottom: 6px; }
  .g ul { margin: 0 0 2px; padding-left: 18px; }
  .g li { color: #e3e9ef; line-height: 1.55; margin-bottom: 5px; }
  .tgroup { margin-bottom: 14px; }
  .tgroup__h { text-transform: capitalize; color: #c4cdd8; font-size: 11px; letter-spacing: .04em; margin-bottom: 6px; }
  .tgroup__h span { color: #7a8492; }
  .tok { display: flex; flex-direction: column; gap: 2px; padding: 6px 0; border-bottom: 1px solid #161b22; }
  .tok__name { display: flex; align-items: center; gap: 8px; }
  .tok__name i { width: 14px; height: 14px; border-radius: 3px; border: 1px solid #ffffff22; flex: none; }
  .tok__name code { color: #ffffff; font-family: ui-monospace, monospace; }
  .tok__val { color: #c4cdd8; padding-left: 22px; word-break: break-all; font-family: ui-monospace, monospace; }
  .x { border: 0; background: none; color: #c4cdd8; font-size: 20px; line-height: 1; cursor: pointer; }
  .x:hover { color: #fff; }
`;

const HOST_ID = 'handoff-inspector';

/** Derive the bundle slug from the path, exactly like the handoff CLI's --name. */
function routeSlug(): string {
  const base = import.meta.env.BASE_URL;
  let p = location.pathname;
  if (p.startsWith(base)) p = p.slice(base.length);
  p = p.replace(/^\/|\/$/g, '');
  return p.replace(/\//g, '-') || 'index';
}
const manifestUrl = (slug: string) => `${import.meta.env.BASE_URL}handoff/${slug}/manifest.json`;

export function initInspector(): void {
  if (document.getElementById(HOST_ID)) return; // idempotent
  const url = manifestUrl(routeSlug());
  fetch(url)
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((manifest: Manifest) => mount(manifest, url))
    .catch(() => {
      /* No bundle for this route — stay dormant. */
    });
}

function mount(manifest: Manifest, manifestUrl: string): void {
  const host = document.createElement('div');
  host.id = HOST_ID;
  const root = host.attachShadow({ mode: 'open' });
  // Mount on <html>, not <body>: the handoff capture engine treats body children
  // as page sections, so keeping our host out of <body> means re-capturing a route
  // never picks up the inspector itself as a junk section. Fixed positioning inside
  // the shadow root anchors to the viewport regardless.
  document.documentElement.appendChild(host);

  // Page-level outline for the on-hover / selected section (the page is outside
  // this app's shadow root, so these rules must live in document.head).
  const pageStyle = document.createElement('style');
  pageStyle.textContent = `
    [data-handoff-on] { outline: 2px solid #4493f8 !important; outline-offset: -2px;
      scroll-margin: 80px; }`;

  const base = manifestUrl.replace(/manifest\.json.*$/, '');

  const style = document.createElement('style');
  style.textContent = STYLE;
  const wrap = document.createElement('div');
  wrap.className = 'host-root';
  wrap.innerHTML = `
    <button class="launch" title="Inspect this prototype (⌥⇧I)">
      <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 9 3 3-3 3"/><path d="M14 15h3"/><rect width="18" height="16" x="3" y="4" rx="2"/></svg>
      Inspect
    </button>
    <div class="panel">
      <div class="head"><strong>Inspector</strong><span class="sub"></span><button class="x" title="Close (Esc)">×</button></div>
      <div class="picker"></div>
      <div class="tabs">
        <button data-tab="guide" class="on">Guide</button>
        <button data-tab="html">HTML</button>
        <button data-tab="css">CSS</button>
        <button data-tab="js">JS</button>
        <button data-tab="tokens">Tokens</button>
      </div>
      <div class="body"></div>
      <div class="footer">
        <div class="cpreview" hidden>
          <div class="cpreview__h">Prompt handed to Claude<button class="cpreview__copy">Copy prompt</button></div>
          <pre></pre>
        </div>
        <button class="copy" title="Copy the active tab's raw content">Copy</button>
        <button class="claude" title="Preview the prompt for Claude">
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/></svg>
          for Claude
        </button>
      </div>
    </div>`;
  root.append(style, wrap);

  const launch = wrap.querySelector<HTMLButtonElement>('.launch')!;
  const panel = wrap.querySelector<HTMLElement>('.panel')!;
  const sub = wrap.querySelector<HTMLElement>('.sub')!;
  const picker = wrap.querySelector<HTMLElement>('.picker')!;
  const body = wrap.querySelector<HTMLElement>('.body')!;
  const tabBtns = [...wrap.querySelectorAll<HTMLButtonElement>('.tabs button[data-tab]')];
  const copyBtn = wrap.querySelector<HTMLButtonElement>('.copy')!;
  const claudeBtn = wrap.querySelector<HTMLButtonElement>('.claude')!;
  const cpreview = wrap.querySelector<HTMLElement>('.cpreview')!;
  const cpreviewPre = wrap.querySelector<HTMLElement>('.cpreview pre')!;
  const cpreviewCopy = wrap.querySelector<HTMLButtonElement>('.cpreview__copy')!;

  // Outline the live region a section maps to (by its authored selector).
  const clearHighlight = () =>
    document.querySelectorAll('[data-handoff-on]').forEach((el) => el.removeAttribute('data-handoff-on'));
  const highlight = (selector?: string) => {
    clearHighlight();
    if (selector) document.querySelector(selector)?.setAttribute('data-handoff-on', '');
  };

  let current: (Section & { tag?: string }) | null = null;
  let tab: 'html' | 'css' | 'js' | 'tokens' | 'guide' = 'guide';
  let open = false;
  let applying = false; // true while a recipe drives the page (its clicks aren't "outside")

  function render() {
    copyBtn.textContent = `Copy ${tab}`; // Copy button names what it'll copy
    if (!current) {
      sub.textContent = `${manifest.name} · ${manifest.sections.length} sections`;
      body.innerHTML = `<p class="hint">Pick a section above to inspect its markup, styles, behavior, tokens, and design intent.</p>`;
      return;
    }
    sub.textContent =
      current.tag && current.tag !== 'page' ? `${current.label} · <${current.tag}>` : current.label;
    if (tab === 'html') body.innerHTML = `<pre class="code">${hlHtml(current.html)}</pre>`;
    else if (tab === 'css')
      body.innerHTML = current.css
        ? `<pre class="code">${hlCss(current.css)}</pre>`
        : `<p class="hint">No section-local CSS (inherited utilities only).</p>`;
    else if (tab === 'js')
      body.innerHTML = current.js
        ? `<pre class="code">${hlJs(current.js)}</pre>`
        : `<p class="hint">No interactivity — this section is static markup.</p>`;
    else if (tab === 'tokens') body.innerHTML = renderTokens(current.tokens);
    else body.innerHTML = renderGuide(current.guide);
  }

  const chipNodes = () => [...picker.querySelectorAll<HTMLElement>('.chips .chip')];

  // doApply: drive the LIVE app into this section's state (only on a real click,
  // and only while open — never on the silent initial selection).
  function select(i: number, doApply = false) {
    current = manifest.sections[i] || null;
    chipNodes().forEach((c, j) => c.classList.toggle('on', j === i));
    hideClaudePreview();
    if (doApply && open && current?.apply) {
      // Recipe clicks land on the PAGE — flag them so the click-outside-to-close
      // handler doesn't treat the app being driven as a click off the panel.
      applying = true;
      // Reset: close the palette if it's open — via its own close control, NOT a
      // global Escape (which the inspector itself listens for and would close us).
      const omni = document.querySelector('[data-omni]');
      if (omni && !omni.hasAttribute('hidden'))
        document.querySelector<HTMLElement>('[data-omni-close]')?.click();
      runApplyDom(current.apply);
      applying = false;
    }
    if (open) highlight(current?.selector);
    render();
  }

  function buildChips() {
    picker.innerHTML = '<div class="chips"></div>';
    const chips = picker.querySelector('.chips')!;
    manifest.sections.forEach((s, i) => {
      const b = document.createElement('button');
      b.className = 'chip';
      b.title = s.apply ? `${s.label} — click to drive the app into this state` : s.label;
      b.textContent = s.label;
      b.onclick = () => select(i, true);
      chips.appendChild(b);
    });
  }

  // Close when a click lands outside the panel — but not on a recipe-driven page
  // click, and not on the very click that opened it (composedPath sees into the
  // shadow DOM, so panel clicks are correctly "inside").
  const onDocClick = (e: MouseEvent) => {
    if (!open || applying) return;
    if (!e.composedPath().includes(panel)) setOpen(false);
  };

  function setOpen(on: boolean) {
    open = on;
    panel.classList.toggle('is-open', on); // class drives the slide-in transition
    launch.hidden = on;
    if (on) {
      document.head.append(pageStyle);
      highlight(current?.selector); // re-outline the current section, if any
      // Defer arming a tick so the opening click itself doesn't immediately close it.
      setTimeout(() => document.addEventListener('click', onDocClick, true), 0);
    } else {
      pageStyle.remove();
      clearHighlight();
      document.removeEventListener('click', onDocClick, true);
    }
  }

  // Copy the active tab's raw content: HTML / CSS verbatim, tokens as CSS
  // custom-property declarations ready to paste into a :root block.
  function copyText() {
    if (!current) return '';
    if (tab === 'html') return current.html || '';
    if (tab === 'css') return current.css || '';
    if (tab === 'js') return current.js || '';
    if (tab === 'tokens') return (current.tokens || []).map((t) => `${t.name}: ${t.value};`).join('\n');
    const g = current.guide || {};
    return [
      g.intent,
      g.decisions?.length && `Key decisions:\n${g.decisions.map((x) => `- ${x}`).join('\n')}`,
      g.gotchas?.length && `Gotchas:\n${g.gotchas.map((x) => `- ${x}`).join('\n')}`,
      g.acceptance?.length && `Done when:\n${g.acceptance.map((x) => `- ${x}`).join('\n')}`,
    ].filter(Boolean).join('\n\n');
  }
  const flash = (btn: HTMLButtonElement, restore: string, ok = true) => {
    const orig = btn.innerHTML;
    btn.classList.toggle('done', ok);
    btn.textContent = restore;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove('done');
    }, 1300);
  };

  copyBtn.onclick = async () => {
    const text = copyText();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      flash(copyBtn, 'Copied');
    } catch {
      flash(copyBtn, 'Failed', false);
    }
  };

  // The exact prompt handed to Claude: an instruction + a fetchable link to this
  // section's self-contained spec (markup + styles + behavior + tokens + guidance).
  function claudePayload(): string {
    if (!current?.claudePath) return '';
    const url = new URL(base + current.claudePath, location.origin).href;
    const lines = [
      `Here's a new UI section to build — "${current.label}".`,
      '',
      'The linked spec has the design guidance (intent, key decisions, gotchas) plus sample',
      'HTML, CSS, and JS. The finished UI should look and behave exactly like this — match it',
      "faithfully. The sample code shows how it's built; you don't need to mirror it",
      'line-for-line — translate it to your own stack and design system, mapping the',
      "sample's values onto your established tokens.",
      '',
      'Spec — use whichever you can reach:',
      `• hosted: ${url}`,
    ];
    if (current.repoPath) lines.push(`• in this repo: ${current.repoPath}`);
    return lines.join('\n');
  }
  const hideClaudePreview = () => (cpreview.hidden = true);

  // Claude button PREVIEWS the prompt (toggles a popover) rather than copying blind.
  claudeBtn.onclick = () => {
    if (!current?.claudePath) return;
    if (!cpreview.hidden) return hideClaudePreview();
    cpreviewPre.textContent = claudePayload();
    cpreview.hidden = false;
  };
  cpreviewCopy.onclick = async () => {
    try {
      await navigator.clipboard.writeText(claudePayload());
      flash(cpreviewCopy, 'Copied ✓');
    } catch {
      flash(cpreviewCopy, 'Failed', false);
    }
  };

  launch.onclick = () => setOpen(true);
  wrap.querySelector<HTMLButtonElement>('.x')!.onclick = () => setOpen(false);
  tabBtns.forEach(
    (b) =>
      (b.onclick = () => {
        tab = b.dataset.tab as typeof tab;
        tabBtns.forEach((x) => x.classList.toggle('on', x === b));
        hideClaudePreview();
        render();
      })
  );

  // Keys: ⌥⇧I toggles anywhere; Esc closes when open.
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      setOpen(!open);
    } else if (e.key === 'Escape' && open) {
      e.preventDefault();
      setOpen(false);
    }
  });

  buildChips();
  select(0); // first chip selected by default (no apply until a real click)
  // ?inspect in the URL opens immediately — shareable inspect links.
  if (new URLSearchParams(location.search).has('inspect')) setOpen(true);
}

// ── src/components/handoff/HandoffInspector.astro ──
---
// Ships the runtime Handoff inspector on every page. The script self-gates: it
// fetches /handoff/<route-slug>/manifest.json and stays fully dormant (no UI) when
// the current route has no bundle — so it's safe to mount globally from BaseLayout.
//
// Spoke-local for now; once proven here it gets promoted into @esa/handoff so every
// Ecology spoke inherits a deployable inspector.
---
<script>
  import { initInspector } from './inspector.client.ts';
  initInspector();
</script>

// ── src/layouts/BaseLayout.astro ──
---
// Beacon base layout — wires the hub tokens + the Beacon theme, loads Beacon's
// fonts (DM Sans + Roboto Mono + Besley), and sets data-theme="beacon" so every
// inherited esa-* component re-skins to Beacon.
import '@esa/tokens/tokens.css';
import '@esa/tokens/component-tokens.css';
import '../styles/theme-beacon.css';
import HandoffInspector from '../components/handoff/HandoffInspector.astro';

interface Props {
  title?: string;
}
const { title = 'Beacon Design' } = Astro.props;
---
<!doctype html>
<html lang="en" data-theme="beacon">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- DM Sans (body/heading), Roboto Mono (code/ids), Besley (opt-in decorative) —
         matching Beacon's _webfonts.scss / _modern.scss font loading. -->
    <link
      href="https://fonts.googleapis.com/css2?family=Besley:ital,wght@0,400..900;1,400..900&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Roboto+Mono:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <title>{title}</title>
    <style is:global>
      *, *::before, *::after { box-sizing: border-box; }
      body {
        margin: 0;
        font-family: var(--font-sans, system-ui, sans-serif);
        font-weight: var(--font-weight-regular, 350);
        color: var(--color-text-primary, #3d3d3d);
        background: var(--color-surface, #fff);
        -webkit-font-smoothing: antialiased;
      }
      a { color: var(--color-text-link, #005862); text-decoration: none; }
      img { display: block; max-width: 100%; }
      button { font-family: inherit; cursor: pointer; background: none; border: 0; }
    </style>
  </head>
  <body>
    <slot />
    <HandoffInspector />
  </body>
</html>

// ── src/lib/base.ts ──
/**
 * Prefix a root-relative path with Astro's configured `base`.
 *
 * Use for anything Astro WON'T rewrite for us: `public/` asset references
 * (`<img src>`, CSS `url()`) and hand-written internal links/redirects.
 * Assets imported through the build pipeline already get the base — don't
 * wrap those.
 *
 * `import.meta.env.BASE_URL` always ends in `/` (e.g. `/beacon-design/` in a
 * production build, `/` in dev), so we strip any leading slash from `path`
 * to avoid a doubled separator.
 */
export const withBase = (path: string): string =>
  import.meta.env.BASE_URL + path.replace(/^\//, '');

// ── src/layouts/AppShell.astro ──
---
// AppShell — the Beacon "modern-layout" frame, ported VERBATIM from the live
// Angular app:
//   - app.component.html/.scss          → .modern-layout (header + body[sidenav+content])
//   - header-nav-modern.component.*      → .topbar (left/center/right zones)
//   - side-nav-modern.component.*        → side nav (logo, project-switcher, main-nav)
//
// SCSS → spoke-token translation (no hardcoded hex/px):
//   $gray-N → var(--bcn-gray-N); $primary → var(--color-primary);
//   rgba($primary,.1) → color-mix(...); $white → var(--color-surface);
//   $accent → var(--color-accent); $danger-600/50 → var(--color-danger[-subtle]);
//   $spacing-* → var(--spacing-*). Radii kept as spacing vars (verbatim).
//
// Driven by a static fixture (see defaults below). The collapse toggle + user
// panel are wired with a tiny inline script — no framework.
import BaseLayout from './BaseLayout.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import { withBase } from '../lib/base';

interface NavItem {
  id: string;
  label: string;
  active?: boolean;
}
interface NavSection {
  id: string;
  title: string;
  icon: string;
  /** Inline Lucide path markup for glyphs not in esa-icon's registry. */
  iconPaths?: string;
  items?: NavItem[];
  /** Single-link section (no sublist), e.g. a dashboard entry. */
  link?: boolean;
  expanded?: boolean;
  active?: boolean;
  dividerAfter?: boolean;
}
interface Props {
  title?: string;
  tenantName?: string;
  projectName?: string;
  userName?: string;
  userEmail?: string;
  navSections?: NavSection[];
  showQaBadge?: boolean;
}

// ── Lucide glyphs not in esa-icon's built-in registry (inner SVG markup only) ──
const LUCIDE = {
  'sliders-horizontal':
    '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  'circle-user-round':
    '<path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/>',
  'log-out':
    '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>',
  'library-big':
    '<rect width="8" height="18" x="3" y="3" rx="1"/><path d="M7 3v18"/><path d="M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"/>',
  'clipboard-check':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  // ── side-nav section icons (verbatim names from side-nav-modern.component.ts) ──
  compass:
    '<path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/>',
  'layout-dashboard':
    '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
  'map-pinned':
    '<path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"/><circle cx="12" cy="8" r="2"/><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"/>',
  'clipboard-list':
    '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/>',
  database:
    '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
  hammer:
    '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>',
};

const {
  title = 'Beacon',
  tenantName = 'AWS',
  projectName = 'Raul',
  userName = 'Andy Lovseth',
  userEmail = 'andy.lovseth@esassoc.com',
  showQaBadge = true,
  // Verbatim nav structure from side-nav-modern.component.ts (standard labels).
  navSections = [
    {
      id: 'setup-wizard',
      title: 'Setup Wizard',
      icon: 'compass',
      iconPaths: LUCIDE['compass'],
      link: true,
    },
    {
      id: 'project',
      title: 'Project',
      icon: 'layout-dashboard',
      iconPaths: LUCIDE['layout-dashboard'],
      expanded: true,
      dividerAfter: true,
      items: [
        { id: 'dashboard', label: 'Dashboard', active: true },
        { id: 'source-documents', label: 'Source Documents' },
        { id: 'commitments', label: 'Commitments' },
        { id: 'requirements', label: 'Requirements' },
        { id: 'organize-actions', label: 'Organize Actions' },
        { id: 'action-lists', label: 'Action Lists' },
        { id: 'document-reviews', label: 'Document Reviews' },
        { id: 'spatial-library-layers', label: 'Spatial Library Layers' },
      ],
    },
    {
      id: 'tracking',
      title: 'Tracking',
      icon: 'radar',
      iconPaths: LUCIDE['radar'],
      expanded: true,
      items: [
        { id: 'tracking-summary', label: 'Tracking Summary' },
        { id: 'project-tracking', label: 'Project Tracking' },
        { id: 'all-components', label: 'All Components' },
      ],
    },
    {
      id: 'monitoring',
      title: 'Monitoring',
      icon: 'map-pinned',
      iconPaths: LUCIDE['map-pinned'],
      expanded: true,
      items: [{ id: 'monitoring-portal', label: 'Monitoring Portal' }],
    },
    {
      id: 'reporting',
      title: 'Reporting',
      icon: 'clipboard-list',
      iconPaths: LUCIDE['clipboard-list'],
      expanded: true,
      dividerAfter: true,
      items: [
        { id: 'progress-report', label: 'Progress Report' },
        { id: 'report-center', label: 'Report Center' },
      ],
    },
    {
      id: 'data-catalog',
      title: 'Data Catalog',
      icon: 'database',
      iconPaths: LUCIDE['database'],
      expanded: true,
      items: [
        { id: 'dc-source-documents', label: 'Source Documents' },
        { id: 'dc-commitments', label: 'Commitments' },
        { id: 'dc-requirements', label: 'Requirements' },
        { id: 'dc-actions', label: 'Actions' },
        { id: 'dc-all-data', label: 'All Data' },
      ],
    },
  ],
} = Astro.props as Props;

---

<BaseLayout title={title}>
  <div class="modern-layout">
    <!-- ═══ TOPBAR (header-nav-modern) ═══ -->
    <header class="topbar">
      <!-- Left: sidebar toggle + tenant trigger -->
      <div class="topbar__left">
        <button
          type="button"
          class="sidebar-toggle"
          id="sidebar-toggle"
          aria-label="Collapse sidebar"
          aria-expanded="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sidebar-toggle__icon"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
          </svg>
        </button>

        <button type="button" class="tenant-trigger">
          <span>{tenantName}</span>
          <EsaIcon name="chevron-down" size="xs" />
        </button>
      </div>

      <!-- Center: spacer (1fr) -->
      <div class="topbar__center"></div>

      <!-- Right: QA badge, search, config/admin icon-buttons, user menu -->
      <div class="topbar__right">
        {
          showQaBadge && (
            <span class="qa-warning">
              <EsaIcon name="triangle-alert" size="sm" />
              QA
            </span>
          )
        }

        <button type="button" class="icon-button" aria-label="Search">
          <EsaIcon name="search" size="md" />
        </button>

        <a href="#esa-config" class="icon-button" aria-label="ESA-Config">
          <EsaIcon name="sliders-horizontal" size="md" paths={LUCIDE['sliders-horizontal']} />
        </a>

        <a href="#admin" class="icon-button" aria-label="Admin settings">
          <EsaIcon name="settings" size="md" />
        </a>

        <div class="user-menu" id="user-menu">
          <button type="button" class="user-menu-trigger" id="user-menu-trigger" aria-label="User menu" aria-expanded="false">
            <span class="user-menu-trigger__avatar user-menu-trigger__avatar--fallback">
              <EsaIcon name="circle-user-round" size="md" paths={LUCIDE['circle-user-round']} />
            </span>
          </button>

          <div class="user-panel" id="user-panel" hidden>
            <div class="user-panel__header">
              <div class="user-panel__avatar-wrapper">
                <span class="user-panel__avatar user-panel__avatar--fallback">
                  <EsaIcon name="circle-user-round" size="lg" paths={LUCIDE['circle-user-round']} />
                </span>
              </div>
              <div class="user-panel__info">
                <span class="user-panel__name">{userName}</span>
                <span class="user-panel__email">{userEmail}</span>
              </div>
            </div>

            <div class="user-panel__menu">
              <button type="button" class="user-panel__item">
                <EsaIcon name="pencil" size="sm" />
                <span>Edit Profile</span>
              </button>
              <a class="user-panel__item" href="#help">
                <EsaIcon name="circle-question-mark" size="sm" />
                <span>Get Help</span>
              </a>
              <button type="button" class="user-panel__item user-panel__item--danger">
                <EsaIcon name="log-out" size="sm" paths={LUCIDE['log-out']} />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- ═══ BODY (sidenav + content) ═══ -->
    <div class="modern-layout__body">
      <!-- ─── side-nav-modern ─── -->
      <nav class="side-nav" id="side-nav">
        <div class="sidebar-header">
          <a href="#home" class="site-logo" aria-label="Beacon home">
            <img src={withBase('/beacon-icon.svg')} alt="Beacon" class="site-logo__img" />
          </a>
        </div>

        <!-- project-switcher (ported from project-switcher.component) -->
        <div class="project-switcher-container">
          <button type="button" class="project-switcher__trigger">
            <EsaIcon name="hammer" size="sm" paths={LUCIDE['hammer']} />
            <span class="project-switcher__name">{projectName}</span>
            <EsaIcon name="chevron-down" size="sm" class="project-switcher__chevron" />
          </button>
        </div>

        <div class="main-nav">
          {
            navSections.map((section) => (
              <>
                {section.link ? (
                  <div class:list={['nav-section', { 'nav-section--active': section.active }]}>
                    <a href={`#${section.id}`} class="nav-section__header nav-section__header--link">
                      <EsaIcon name={section.icon} size="sm" paths={section.iconPaths ?? LUCIDE[section.icon as keyof typeof LUCIDE]} />
                      <span class="nav-section__title">{section.title}</span>
                    </a>
                  </div>
                ) : (
                  <div
                    class:list={[
                      'nav-section',
                      { 'nav-section--collapsed': !section.expanded, 'nav-section--active': section.active },
                    ]}
                  >
                    <button type="button" class="nav-section__header" aria-expanded={section.expanded ? 'true' : 'false'}>
                      <EsaIcon name={section.icon} size="sm" paths={section.iconPaths ?? LUCIDE[section.icon as keyof typeof LUCIDE]} />
                      <span class="nav-section__title">{section.title}</span>
                      <EsaIcon name="chevron-down" size="sm" />
                    </button>
                    <ul class="nav-section__items">
                      {section.items?.map((item) => (
                        <li class="nav-item">
                          <a href={`#${item.id}`} class:list={['nav-sublink', { active: item.active }]}>
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {section.dividerAfter && <hr class="nav-divider" aria-hidden="true" />}
              </>
            ))
          }
        </div>
      </nav>

      <!-- content -->
      <div class="modern-layout__content">
        <slot />
      </div>
    </div>
  </div>
</BaseLayout>

<script>
  // Sidebar collapse toggle + chevron mirroring + user panel open/close.
  // Mirrors header-nav-modern's onToggleSidebar() and ui-dropdown behavior.
  const toggle = document.getElementById('sidebar-toggle');
  const sideNav = document.getElementById('side-nav');
  if (toggle && sideNav) {
    toggle.addEventListener('click', () => {
      const collapsed = sideNav.classList.toggle('collapsed');
      toggle.classList.toggle('sidebar-toggle--collapsed', collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('aria-label', collapsed ? 'Expand sidebar' : 'Collapse sidebar');
    });
  }

  // Nav-section expand/collapse (expanded sidebar only).
  document.querySelectorAll<HTMLButtonElement>('.nav-section__header:not(.nav-section__header--link)').forEach((btn) => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.nav-section');
      if (!section) return;
      const nowCollapsed = section.classList.toggle('nav-section--collapsed');
      btn.setAttribute('aria-expanded', String(!nowCollapsed));
    });
  });

  // User menu dropdown.
  const userTrigger = document.getElementById('user-menu-trigger');
  const userPanel = document.getElementById('user-panel');
  const userMenu = document.getElementById('user-menu');
  if (userTrigger && userPanel && userMenu) {
    const setOpen = (open: boolean) => {
      userPanel.hidden = !open;
      userTrigger.setAttribute('aria-expanded', String(open));
    };
    userTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(userPanel.hidden);
    });
    document.addEventListener('click', (e) => {
      if (!userMenu.contains(e.target as Node)) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }
</script>

<style>
  /* ═══════════════════════════════════════════════════════════════════
     app.component.scss — .modern-layout frame
     ═══════════════════════════════════════════════════════════════════ */
  .modern-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  .modern-layout__body {
    display: flex;
    flex: 1;
    overflow: hidden;
    padding-top: 52px; /* header height */
  }

  .modern-layout__content {
    flex: 1;
    overflow-y: auto;
    min-width: 0;
  }

  /* ═══════════════════════════════════════════════════════════════════
     header-nav-modern.component.scss — topbar
     ═══════════════════════════════════════════════════════════════════ */
  .qa-warning {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-100);
    padding: var(--spacing-050) var(--spacing-200);
    font-size: 0.75rem;
    font-weight: 600;
    background: var(--color-accent);
    color: var(--color-surface);
    border-radius: var(--spacing-100);
    white-space: nowrap;
  }

  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 52px;
    background: var(--bcn-gray-100);
    border-bottom: 1px solid var(--bcn-gray-300);
    z-index: 1100;

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0 var(--spacing-200);
  }

  @media (min-width: 768px) {
    .topbar {
      padding: 0 var(--spacing-400);
    }
  }

  .topbar__left {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
  }

  .topbar__center {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    padding: 0 var(--spacing-400);
  }

  .topbar__right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--spacing-100);
  }

  /* Sidebar toggle */
  .sidebar-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--spacing-050);
    background: transparent;
    color: var(--bcn-gray-600);
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease;
  }
  .sidebar-toggle:hover {
    background: var(--bcn-gray-200);
    color: var(--color-primary);
  }
  .sidebar-toggle:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .sidebar-toggle__icon {
    transition: transform 150ms ease;
  }
  .sidebar-toggle--collapsed .sidebar-toggle__icon {
    transform: scaleX(-1);
  }

  /* Tenant trigger */
  .tenant-trigger {
    display: flex;
    align-items: center;
    gap: var(--spacing-100);
    padding: var(--spacing-100) var(--spacing-200);
    background: transparent;
    border: none;
    border-radius: var(--spacing-050);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--bcn-gray-900);
    cursor: pointer;
    transition: background 150ms ease;
  }
  .tenant-trigger:hover {
    background: var(--bcn-gray-200);
  }

  /* Icon button */
  .icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--spacing-050);
    background: transparent;
    color: var(--bcn-gray-600);
    text-decoration: none;
    cursor: pointer;
    transition: background 150ms ease, color 150ms ease;
  }
  .icon-button:hover {
    background: var(--bcn-gray-200);
    color: var(--color-primary);
  }
  .icon-button--active {
    background: color-mix(in srgb, var(--color-primary) 10%, transparent);
    color: var(--color-primary);
  }
  .icon-button:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  /* User menu trigger */
  .user-menu {
    position: relative;
  }
  .user-menu-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: none;
    border-radius: 9999px;
    background: transparent;
    cursor: pointer;
    transition: transform 150ms ease;
  }
  .user-menu-trigger:hover {
    transform: scale(1.05);
  }
  .user-menu-trigger:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  .user-menu-trigger__avatar {
    width: 32px;
    height: 32px;
    border-radius: 9999px;
    object-fit: cover;
    border: 2px solid var(--bcn-gray-200);
    transition: border-color 150ms ease;
  }
  .user-menu-trigger__avatar--fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bcn-gray-200);
    color: var(--bcn-gray-500);
  }
  .user-menu-trigger:hover .user-menu-trigger__avatar {
    border-color: var(--color-primary);
  }

  /* User panel dropdown (ui-dropdown content, position bottom-end) */
  .user-panel {
    position: absolute;
    top: calc(100% + var(--spacing-200));
    right: 0;
    min-width: 280px;
    background: var(--color-surface);
    border-radius: var(--spacing-200);
    border: 1px solid var(--bcn-gray-200);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12);
    z-index: 1200;
  }
  .user-panel[hidden] {
    display: none;
  }
  .user-panel__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    padding: var(--spacing-400);
    border-bottom: 1px solid var(--bcn-gray-200);
  }
  .user-panel__avatar-wrapper {
    flex-shrink: 0;
  }
  .user-panel__avatar {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    object-fit: cover;
    border: 2px solid var(--bcn-gray-200);
  }
  .user-panel__avatar--fallback {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bcn-gray-100);
    color: var(--bcn-gray-400);
  }
  .user-panel__info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-050);
  }
  .user-panel__name {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--bcn-gray-900);
    line-height: 1.3;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user-panel__email {
    font-size: 0.8125rem;
    color: var(--bcn-gray-500);
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .user-panel__menu {
    padding: var(--spacing-200);
  }
  .user-panel__item {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    width: 100%;
    padding: var(--spacing-300);
    font-size: 0.9375rem;
    font-weight: 500;
    color: var(--bcn-gray-900);
    background: transparent;
    border: none;
    border-radius: var(--spacing-150);
    cursor: pointer;
    text-align: left;
    text-decoration: none;
    transition: background-color 150ms ease;
  }
  .user-panel__item:hover {
    background: var(--bcn-gray-50);
  }
  .user-panel__item:active {
    background: var(--bcn-gray-100);
  }
  .user-panel__item--danger {
    color: var(--color-danger);
  }
  .user-panel__item--danger:hover {
    background: var(--color-danger-subtle);
  }
  .user-panel__item :global(.esa-icon) {
    color: var(--bcn-gray-500);
  }
  .user-panel__item--danger :global(.esa-icon) {
    color: var(--color-danger);
  }

  /* ═══════════════════════════════════════════════════════════════════
     side-nav-modern.component.scss — side nav
     ($sidebar-width 280px / $sidebar-collapsed-width 72px)
     ═══════════════════════════════════════════════════════════════════ */
  .side-nav {
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--bcn-gray-50);
    font-size: 0.875rem;
    overflow: visible;
    transition: width 200ms ease-in-out;
    border-right: 1px solid var(--bcn-gray-200);
    flex-shrink: 0;
  }
  .side-nav.collapsed {
    width: 72px;
    max-width: 72px;
  }

  .sidebar-header {
    flex-shrink: 0;
    padding: var(--spacing-300) var(--spacing-400);
    transition: padding 200ms ease-in-out;
  }
  .side-nav.collapsed .sidebar-header {
    padding: var(--spacing-300) var(--spacing-200);
  }

  .site-logo {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-200);
    border-radius: var(--spacing-050);
    text-decoration: none;
    transition: background 150ms ease;
  }
  .site-logo:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .site-logo__img {
    /* Real Beacon mark (teal leaf/wave). Verbatim: width $spacing-700 (3rem) ×
       height $spacing-775 (3.75rem, one-off — no hub spacing token). */
    width: var(--spacing-700);
    height: 3.75rem;
    object-fit: contain;
    object-position: left center;
    transition: all 200ms ease-in-out;
  }
  .side-nav.collapsed .site-logo__img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    object-position: left center;
  }

  .project-switcher-container {
    flex-shrink: 0;
    padding: 0 var(--spacing-400) var(--spacing-300);
    transition: padding 200ms ease-in-out;
    min-width: 0;
  }
  .side-nav.collapsed .project-switcher-container {
    padding: 0 var(--spacing-200);
  }
  /* project-switcher.component.scss — bordered single-row control */
  .project-switcher__trigger {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: var(--spacing-200) var(--spacing-300);
    background: var(--color-surface);
    border: 1px solid var(--bcn-gray-200);
    border-radius: var(--spacing-200);
    cursor: pointer;
    transition: all 150ms ease;
    color: var(--bcn-gray-950);
    font-size: 0.875rem;
    font-weight: 500;
  }
  .project-switcher__trigger:hover {
    border-color: var(--bcn-gray-300);
    background: var(--bcn-gray-0);
  }
  /* leading icon (hammer) */
  .project-switcher__trigger > :global(.esa-icon:first-child) {
    flex-shrink: 0;
    color: var(--bcn-gray-500);
  }
  .project-switcher__name {
    flex: 1;
    min-width: 0;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .project-switcher__chevron {
    flex-shrink: 0;
    color: var(--bcn-gray-400);
  }
  .side-nav.collapsed .project-switcher__trigger {
    justify-content: center;
    padding: var(--spacing-200);
  }
  .side-nav.collapsed .project-switcher__name,
  .side-nav.collapsed .project-switcher__chevron {
    display: none;
  }

  .main-nav {
    flex: 1;
    overflow-y: auto;
    overflow-x: visible;
    padding: 0 var(--spacing-400);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-050);
    transition: padding 200ms ease-in-out;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .main-nav::-webkit-scrollbar {
    display: none;
  }
  .side-nav.collapsed .main-nav {
    padding: 0 var(--spacing-200);
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .nav-divider {
    flex-shrink: 0;
    height: 1px;
    margin: var(--spacing-200) 0;
    border: 0;
    background: var(--bcn-gray-200);
  }

  .nav-section__header {
    display: flex;
    align-items: center;
    gap: var(--spacing-300);
    padding: var(--spacing-250) var(--spacing-200);
    color: var(--bcn-gray-950);
    font-size: 0.9375rem;
    font-weight: 550;
    border: none;
    background: transparent;
    border-radius: var(--spacing-050);
    transition: all 150ms ease;
    white-space: nowrap;
    width: 100%;
    text-align: left;
    cursor: pointer;
    text-decoration: none;
  }
  .nav-section__header--link {
    text-decoration: none;
    color: var(--bcn-gray-950);
  }
  .nav-section__header:hover {
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-primary);
  }
  .nav-section__header:hover :global(.esa-icon) {
    color: var(--color-primary);
  }
  .nav-section--active .nav-section__header {
    color: var(--color-primary);
  }
  .nav-section--active .nav-section__header :global(.esa-icon) {
    color: var(--color-primary);
  }

  /* icon (first esa-icon in the header) */
  .nav-section__header > :global(.esa-icon:first-child) {
    flex-shrink: 0;
    color: var(--bcn-gray-950);
    transition: color 150ms ease;
  }
  /* chevron (last esa-icon in the header) */
  .nav-section__header > :global(.esa-icon:last-child) {
    color: var(--bcn-gray-400);
    transition: transform 150ms ease, opacity 200ms ease-in-out;
    flex-shrink: 0;
  }
  .nav-section--collapsed .nav-section__header > :global(.esa-icon:last-child) {
    transform: rotate(-90deg);
  }

  /* title spans flex between icon and chevron */
  .nav-section__title {
    flex: 1;
    overflow: hidden;
    transition: opacity 200ms ease-in-out;
  }
  .side-nav.collapsed .nav-section__title {
    display: none;
  }
  .side-nav.collapsed .nav-section__header > :global(.esa-icon:last-child) {
    display: none;
  }
  .side-nav.collapsed .nav-section__header {
    justify-content: center;
    padding: var(--spacing-250) var(--spacing-200);
  }

  .nav-section__items {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: 500px;
    opacity: 1;
    transition: max-height 200ms ease-in-out, opacity 200ms ease-in-out;
  }
  .nav-section--collapsed .nav-section__items {
    max-height: 0;
    opacity: 0;
  }
  .side-nav.collapsed .nav-section__items {
    display: none;
  }

  .nav-item {
    padding: 0 0 0 2.5rem;
  }
  .nav-item + .nav-item {
    margin-top: var(--spacing-050);
  }

  .nav-sublink {
    display: block;
    padding: var(--spacing-200);
    color: var(--bcn-gray-950);
    text-decoration: none;
    border-radius: var(--spacing-050);
    font-size: 0.8125rem;
    transition: all 150ms ease;
    line-height: 1.2;
  }
  .nav-sublink:hover {
    background: rgba(0, 0, 0, 0.04);
  }
  .nav-sublink.active {
    background: rgba(0, 0, 0, 0.04);
    color: var(--color-primary);
  }
</style>

// ── src/layouts/PageLayout.astro ──
---
// PageLayout — Beacon's content-page chrome, ported VERBATIM from the live
// Angular `page-layout` + `breadcrumbs` components:
//   - page-layout.component.scss   → .page-layout (padded wrapper + title row)
//   - breadcrumbs.component.scss   → .breadcrumbs (home glyph + chevron seps)
//
// Renders INSIDE AppShell: a page = AppShell > PageLayout > content.
//
// SCSS → spoke-token translation (no hardcoded hex/px):
//   $gray-N → var(--bcn-gray-N); $spacing-* → var(--spacing-*);
//   font-weight 650 → var(--font-weight-bold); var(--font-decorative) kept
//   (Besley); $type-size-500 → var(--type-size-500).
import EsaIcon from '@esa/ecology/esa-icon.astro';

export interface Breadcrumb {
  label: string;
  href?: string;
}
interface Props {
  /** Ordered crumbs; first leads with the home glyph, last renders as plain text. */
  breadcrumbs?: Breadcrumb[];
  title: string;
  /** Lucide icon name leading the H1 (e.g. "map"). */
  icon?: string;
}

// Lucide glyphs not in esa-icon's registry (inner SVG markup only).
const LUCIDE: Record<string, string> = {
  house:
    '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  map:
    '<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>',
  radar:
    '<path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"/><path d="M4 6h.01"/><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"/><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"/><path d="M12 18h.01"/><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"/><circle cx="12" cy="12" r="2"/><path d="m13.41 10.59 5.66-5.66"/>',
};

const { breadcrumbs = [], title, icon } = Astro.props as Props;
const iconPaths = icon ? LUCIDE[icon] : undefined;
const hasUtilities = Astro.slots.has('utilities');
---

<div class="page-layout">
  <div class="page-layout__container">
    {
      breadcrumbs.length > 0 && (
        <section class="page-layout__breadcrumbs">
          <nav class="breadcrumbs" aria-label="Breadcrumb">
            <div class="breadcrumbs__items">
              {breadcrumbs.map((crumb, i) => {
                const isFirst = i === 0;
                const isLast = i === breadcrumbs.length - 1;
                return (
                  <>
                    {isFirst && <EsaIcon name="house" size="sm" paths={LUCIDE['house']} />}
                    {isLast || !crumb.href ? (
                      <span class="breadcrumb-item" aria-current={isLast ? 'page' : undefined}>
                        {crumb.label}
                      </span>
                    ) : (
                      <a class="breadcrumb-item" href={crumb.href}>
                        {crumb.label}
                      </a>
                    )}
                    {!isLast && <EsaIcon name="chevron-right" size="sm" />}
                  </>
                );
              })}
            </div>
          </nav>
        </section>
      )
    }

    <section class="page-layout__title">
      <div class="page-layout__title-main">
        <h1>
          {icon && <EsaIcon name={icon} paths={iconPaths} />}
          {title}
        </h1>
        <slot name="title-badge" />
      </div>
      {
        hasUtilities && (
          <div class="page-layout__utilities">
            <slot name="utilities" />
          </div>
        )
      }
    </section>

    <section class="page-layout__content">
      <slot />
    </section>
  </div>
</div>

<style>
  /* page-layout.component.scss — outer wrapper */
  .page-layout {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 15rem);
    padding: var(--spacing-600);
    background: var(--bcn-gray-50);
    box-sizing: border-box;
  }
  .page-layout__container {
    display: flex;
    flex-direction: column;
  }
  .page-layout section {
    width: 100%;
  }

  /* breadcrumbs.component.scss */
  .breadcrumbs {
    padding: var(--spacing-400) 0;
  }
  .breadcrumbs__items {
    display: flex;
    gap: var(--spacing-100);
    align-items: center;
    flex-wrap: wrap;
  }
  .breadcrumb-item {
    color: var(--bcn-gray-600);
    text-transform: capitalize;
    font-size: 0.875rem;
  }
  a.breadcrumb-item {
    text-decoration: none;
  }
  a.breadcrumb-item:hover {
    text-decoration: underline;
  }
  /* leading home glyph + chevron separators */
  .breadcrumbs__items :global(.esa-icon) {
    color: var(--bcn-gray-400);
  }

  /* page-layout__title — the header row */
  .page-layout__title {
    border-bottom: 1px solid var(--bcn-gray-200);
    padding: var(--spacing-500) 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .page-layout__title-main {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    min-width: 0;
  }
  .page-layout__title h1 {
    display: flex;
    align-items: center;
    gap: var(--spacing-200);
    font-family: var(--font-decorative);
    font-weight: var(--font-weight-bold);
    font-size: var(--type-size-500);
    margin: 0;
    color: var(--bcn-gray-1000);
  }
  .page-layout__title h1 :global(.esa-icon) {
    color: var(--bcn-gray-1000);
    flex-shrink: 0;
  }
  .page-layout__utilities {
    display: flex;
    gap: var(--spacing-200);
  }

  /* page-layout__content */
  .page-layout__content {
    padding: var(--spacing-500) 0;
    min-height: 70vh;
    position: relative;
  }
</style>

// ── src/data/tracker-fixture.ts ──
// Compliance-tracking fixture for the Action Tracker prototype.
//
// Basis: the real 3600 Alameda Avenue Project FEIR requirement export (130 rows,
// src/data/requirements.csv → generated, do not hand-edit). Columns mirror the
// live Progress Report view: Source Document · Commitment ID · Requirement Name ·
// Requirement Text · Requirement Type · Status · Comment · Action · Milestone(s)
// · Resource Category.
//
// The CSV export carries Name / Commitment / Source Document / Requirement Type /
// Resource Category / Phases. The tracking columns the export does NOT include
// (Status, Comment, Action, Milestone, Requirement Text) are synthesized
// DETERMINISTICALLY by the generator so the grid reads like the app without
// fabricating per-row legal text by hand.
//
// Regenerate: `node /tmp/gen-tracker.mjs` (generator kept out of the repo).

export type ActionStatus = 'not-started' | 'in-progress' | 'completed' | 'not-applicable';

export type Phase = 'Pre-Construction' | 'Construction' | 'Post-Construction';

export interface ActionRow {
  /** Requirement Name (links to the requirement/action). */
  name: string;
  /** Commitment ID, e.g. "MM-BIO-1". */
  commitment: string;
  /** Parent source document. */
  sourceDoc: string;
  /** Representative requirement text (synthesized; see header). */
  requirementText: string;
  /** Requirement Type, e.g. "Plan", "Monitoring", "Other". */
  type: string;
  status: ActionStatus;
  /** Comment count. */
  comments: number;
  /** Linked action label ('' when none). */
  action: string;
  /** Milestone(s) ('' when none). */
  milestones: string;
  resourceCategory: string;
  /** Lifecycle phase (from CSV; used for grouping, not a Progress Report column). */
  phase: string;
}

export const STATUS_META: Record<ActionStatus, { label: string; hex: string }> = {
  'not-started': { label: 'Not Started', hex: '#9aa3ad' },
  'in-progress': { label: 'In Progress', hex: '#e0a400' },
  completed: { label: 'Completed', hex: '#1a9b54' },
  'not-applicable': { label: 'Not Applicable', hex: '#b8bcc2' },
};

/** Kanban/board order — Not Applicable is folded off the board by default. */
export const STATUS_ORDER: ActionStatus[] = ['not-started', 'in-progress', 'completed'];

export const PROJECT_NAME = '3600 Alameda Avenue Project';
export const SOURCE_DOCUMENT = '3600 Alameda Avenue Project FEIR';

export const actions: ActionRow[] = [
  { name: 'Develop WEAP Training', commitment: 'MM-BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Training & Education', status: 'not-started', comments: 0, action: 'Develop WEAP Training', milestones: 'Demolition', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'All project personnel shall receive develop WEAP Training prior to beginning work on site, with attendance documented for the compliance record.' },
  { name: 'Provide WEAP Training to all Project personnel', commitment: 'MM-BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Training & Education', status: 'completed', comments: 1, action: 'Provide WEAP Training to all', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'All project personnel shall receive provide WEAP Training to all Project personnel prior to beginning work on site, with attendance documented for the compliance record.' },
  { name: 'If bird nests are found, establish no-disturbance buffers zones', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Establish no-disturbance buffers zones', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: If bird nests are found, establish no-disturbance buffers zones, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'If work must occur within established no-disturbance buffer zones', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'If work must occur within', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: If work must occur within established no-disturbance buffer zones, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Pre-construction survey for nesting raptors and other migratory birds during nesting season', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction survey for nesting raptors and other migratory birds during nesting season within the project area and submit findings to the City.' },
  { name: 'Report of findings for construction within any no-disturbance buffer zone', commitment: 'MM-BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'in-progress', comments: 0, action: 'Report of findings for construction', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall prepare report of findings for construction within any no-disturbance buffer zone and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: ' Pre-construction habitat assessment of the Project area to characterize potential bat habitat and identify potentially active roost sites', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: 'Pre-construction habitat assessment of the', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete  Pre-construction habitat assessment of the Project area to characterize potential bat habitat and identify potentially active roost sites within the project area and submit findings to the City.' },
  { name: 'If active bat roosts or evidence of roosting is identified during pre-construction surveys, establish no-disturbance buffer', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: If active bat roosts or evidence of roosting is identified during pre-construction surveys, establish no-disturbance buffer, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Measures if potential bat roosting habitat or potentially active bat roosts are identified during the habitat assessment', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Measures if potential bat roosting', milestones: 'Final Inspection', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: Measures if potential bat roosting habitat or potentially active bat roosts are identified during the habitat assessment, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Pre-construction survey if avoidance or bat maternity roosting season and winter torpor is infeasible', commitment: 'MM-BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: 'Pre-construction survey if avoidance or', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction survey if avoidance or bat maternity roosting season and winter torpor is infeasible within the project area and submit findings to the City.' },
  { name: 'Blight', commitment: 'SCA AES-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Post-Construction', requirementText: 'Requirement: Blight, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Best management practices for graffiti', commitment: 'SCA AES-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Avoidance & BMPs', status: 'completed', comments: 1, action: 'Best management practices for graffiti', milestones: '', resourceCategory: 'Aesthetics', phase: 'Construction', requirementText: 'The contractor shall implement best management practices for graffiti as a best management practice throughout construction and maintain it until the activity is complete.' },
  { name: 'Graffiti removal', commitment: 'SCA AES-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Graffiti removal', milestones: 'Demolition', resourceCategory: 'Aesthetics', phase: 'Construction', requirementText: 'Requirement: Graffiti removal, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Installation', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Construction', requirementText: 'Requirement: Landscape Installation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Maintenance', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Aesthetics', phase: 'Post-Construction', requirementText: 'Requirement: Landscape Maintenance, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Landscape Plan', commitment: 'SCA AES-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Landscape Plan', milestones: '', resourceCategory: 'Aesthetics', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Landscape Plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Exterior lighting fixtures', commitment: 'SCA AES-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Aesthetics', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate exterior lighting fixtures consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Dust control measures - complaints', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - complaints and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - erosion', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'Dust control measures - erosion', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - erosion and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - paving', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - paving and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - simultaneous activities', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: 'Final Inspection', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - simultaneous activities and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - street sweeping', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 1, action: 'Dust control measures - street', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - street sweeping and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - truck cover', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Dust control measures - truck', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - truck cover and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - unpaved road access', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - unpaved road access and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - vegetative ground cover', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'Dust control measures - vegetative', milestones: 'Demolition', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - vegetative ground cover and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - vehicle speeds', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Dust control measures - vehicle', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - vehicle speeds and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - watering', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - watering and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Dust control measures - wind', commitment: 'SCA AIR-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: 'Dust control measures - wind', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct dust control measures - wind and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - construction equipment', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'Basic control measures for criteria', milestones: 'Building Permit', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - construction equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - idling time', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - idling time and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - portable equipment', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: 'Basic control measures for criteria', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - portable equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Basic control measures for criteria air pollutants - VOC coating', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 1, action: 'Basic control measures for criteria', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct basic control measures for criteria air pollutants - VOC coating and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Construction emissions minimization plan', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'Construction emissions minimization plan', milestones: 'Final Inspection', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct construction emissions minimization plan and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Enhanced controls - construction', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 3, action: 'Enhanced controls - construction', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct enhanced controls - construction and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Enhanced controls - operation', commitment: 'SCA AIR-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Post-Construction', requirementText: 'Requirement: Enhanced controls - operation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction emissions minimization plan', commitment: 'SCA AIR-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Construction emissions minimization plan', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Construction emissions minimization plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Diesel particulate matter reduction measures', commitment: 'SCA AIR-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'Diesel particulate matter reduction measures', milestones: 'Demolition', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct diesel particulate matter reduction measures and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'On-site stationary sources of air pollution', commitment: 'SCA AIR-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Air Quality', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate on-site stationary sources of air pollution consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Diesel truck emission reduction measures', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 3, action: 'Diesel truck emission reduction measures', milestones: '', resourceCategory: 'Air Quality', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate diesel truck emission reduction measures consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Truck fleet emission standards', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Truck fleet emission standards', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'Requirement: Truck fleet emission standards, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Truck loading docks', commitment: 'SCA AIR-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: 'Building Permit', resourceCategory: 'Air Quality', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate truck loading docks consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Asbestos in structures', commitment: 'SCA AIR-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Asbestos in structures', milestones: '', resourceCategory: 'Air Quality', phase: 'Construction', requirementText: 'Requirement: Asbestos in structures, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Bird collision reduction plan - antennas', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bird collision reduction plan -', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - antennas prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - bird-friendly attractants', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - bird-friendly attractants prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - bird-friendly glazing treatments', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - bird-friendly glazing treatments prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - building operation and management manual', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bird collision reduction plan -', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - building operation and management manual prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - light pollution', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - light pollution prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - lighting', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - lighting prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bird collision reduction plan - mirrors', commitment: 'SCA BIO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 3, action: 'Bird collision reduction plan -', milestones: 'Demolition', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bird collision reduction plan - mirrors prior to the affected project phase, subject to City review and approval.' },
  { name: 'Pre-removal survey', commitment: 'SCA BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Survey', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Prior to ground-disturbing activities, a qualified biologist shall complete pre-removal survey within the project area and submit findings to the City.' },
  { name: 'Tree removal during breeding season', commitment: 'SCA BIO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'Requirement: Tree removal during breeding season, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Tree permit', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'completed', comments: 1, action: 'Tree permit', milestones: '', resourceCategory: 'Biological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain tree permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Tree protection', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Tree protection', milestones: 'Building Permit', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: Tree protection, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Tree replacement', commitment: 'SCA BIO-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Biological Resources', phase: 'Construction', requirementText: 'Requirement: Tree replacement, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Data recovery of archaeological resources', commitment: 'SCA CUL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Data recovery of archaeological resources', milestones: '', resourceCategory: 'Cultural Resources', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Data recovery of archaeological resources prior to the affected project phase, subject to City review and approval.' },
  { name: 'Discovery of cultural resources', commitment: 'SCA CUL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Discovery of cultural resources', milestones: '', resourceCategory: 'Cultural Resources', phase: 'Construction', requirementText: 'Requirement: Discovery of cultural resources, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Human remains', commitment: 'SCA CUL-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Cultural Resources', phase: 'Construction', requirementText: 'Requirement: Human remains, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction related permits', commitment: 'SCA GEO-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 0, action: 'Construction related permits', milestones: '', resourceCategory: 'Geology, Soils, and Paleontological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain construction related permits from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Geotechnical report', commitment: 'SCA GEO-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'completed', comments: 3, action: 'Geotechnical report', milestones: '', resourceCategory: 'Geology, Soils, and Paleontological Resources', phase: 'Pre-Construction', requirementText: 'The applicant shall prepare geotechnical report and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: 'Annual report', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Annual report prior to the affected project phase, subject to City review and approval.' },
  { name: 'Corrective procedure', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: 'Corrective procedure', milestones: 'Demolition', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Corrective procedure prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 1, action: 'Greenhouse gas reduction plan', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan implementation after construction', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Greenhouse gas reduction plan implementation', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan implementation after construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Greenhouse gas reduction plan implementation during construction', commitment: 'SCA GHG-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: 'Greenhouse gas reduction plan implementation', milestones: '', resourceCategory: 'Greenhouse Gas Emissions', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Greenhouse gas reduction plan implementation during construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'BMPs - chemical products', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - chemical products and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - construction equipment', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'in-progress', comments: 0, action: 'BMPs - construction equipment', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - construction equipment and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - contamination', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'BMPs - contamination', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - contamination and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - lead', commitment: 'SCA HAZ-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - lead and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - groundwater', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'completed', comments: 3, action: 'BMPs - groundwater', milestones: 'Final Inspection', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - groundwater and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'BMPs - soils', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 1, action: 'BMPs - soils', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Construction', requirementText: 'A qualified specialist shall conduct bMPs - soils and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Environmental site assessment', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Reporting', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', requirementText: 'The applicant shall prepare environmental site assessment and submit it to the lead agency within the timeframe specified in the FEIR mitigation measure.' },
  { name: 'Hazardous building materials assessment', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Hazardous building materials assessment', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', requirementText: 'Requirement: Hazardous building materials assessment, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Health and safety plan', commitment: 'SCA HAZ-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Health and safety plan', milestones: 'Demolition', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Health and safety plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Hazardous materials business plan', commitment: 'SCA HAZ-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Hazardous materials business plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'State construction general permit', commitment: 'SCA HYD-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain state construction general permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Maintenance agreement', commitment: 'SCA HYD-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'in-progress', comments: 0, action: 'Maintenance agreement', milestones: '', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', requirementText: 'The applicant shall obtain maintenance agreement from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Post-construction stormwater management plan', commitment: 'SCA HYD-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Hazards and Hazardous Materials', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Post-construction stormwater management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Vegetation management after construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', requirementText: 'Requirement: Vegetation management after construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vegetation management during construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Vegetation management during construction', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', requirementText: 'Requirement: Vegetation management during construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vegetation management pre-construction', commitment: 'SCA HYD-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'Requirement: Vegetation management pre-construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction BMPs', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Monitoring', status: 'not-started', comments: 0, action: '', milestones: 'Final Inspection', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', requirementText: 'A qualified specialist shall conduct construction BMPs and document results in accordance with the approved monitoring protocol identified in the FEIR.' },
  { name: 'Creek landscaping', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 1, action: 'Creek landscaping', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Creek landscaping prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Creek protection plan', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Creek protection plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan implementation - after construction', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a Creek protection plan implementation - after construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Creek protection plan implementation - during construction', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Creek protection plan implementation -', milestones: 'Demolition', resourceCategory: 'Hydrology and Water Quality', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Creek protection plan implementation - during construction prior to the affected project phase, subject to City review and approval.' },
  { name: 'Post construction BMPs', commitment: 'SCA HYD-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Avoidance & BMPs', status: 'in-progress', comments: 0, action: 'Post construction BMPs', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Post-Construction', requirementText: 'The contractor shall implement post construction BMPs as a best management practice throughout construction and maintain it until the activity is complete.' },
  { name: 'BCDC approval', commitment: 'SCA HYD-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Hydrology and Water Quality', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain bCDC approval from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Construction activity outside of the days and hours restrictions', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: 'Construction activity outside of the', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction activity outside of the days and hours restrictions, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - Saturday', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Construction hours - Saturday', milestones: 'Building Permit', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction hours - Saturday, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - Sunday and holidays', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction hours - Sunday and holidays, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction hours - weekdays', commitment: 'SCA NOI-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: 'Construction hours - weekdays', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Construction hours - weekdays, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - construction', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Noise reduction measures - construction', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - equipment and trucks', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Noise reduction measures - equipment', milestones: 'Final Inspection', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - equipment and trucks, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - impact tools', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'Noise reduction measures - impact', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - impact tools, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - power poles', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - power poles, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise reduction measures - stationary sources', commitment: 'SCA NOI-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'Noise reduction measures - stationary', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise reduction measures - stationary sources, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Construction noise management plan', commitment: 'SCA NOI-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Construction noise management plan', milestones: 'Demolition', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Construction noise management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Public notification', commitment: 'SCA NOI-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'Requirement: Public notification, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Site-specific noise attenuation measures', commitment: 'SCA NOI-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'completed', comments: 3, action: 'Site-specific noise attenuation measures', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Site-specific noise attenuation measures prior to the affected project phase, subject to City review and approval.' },
  { name: 'Noise complaints - receiving, responding to, tracking', commitment: 'SCA NOI-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Noise complaints - receiving', milestones: '', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise complaints - receiving, responding to, tracking, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Noise complaints - signage', commitment: 'SCA NOI-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 0, action: '', milestones: 'Building Permit', resourceCategory: 'Noise', phase: 'Construction', requirementText: 'Requirement: Noise complaints - signage, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Operational noise', commitment: 'SCA NOI-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 1, action: 'Operational noise', milestones: '', resourceCategory: 'Noise', phase: 'Post-Construction', requirementText: 'Requirement: Operational noise, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Vibration analysis', commitment: 'SCA NOI-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Analysis', status: 'in-progress', comments: 0, action: 'Vibration analysis', milestones: '', resourceCategory: 'Noise', phase: 'Pre-Construction', requirementText: 'The applicant shall complete vibration analysis to evaluate potential impacts and identify feasible mitigation prior to approval.' },
  { name: 'Jobs/Housing Impact Fee.', commitment: 'SCA POP-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', requirementText: 'The applicant shall provide jobs/Housing Impact Fee. to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Capital improvements impact fee', commitment: 'SCA PUB-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', requirementText: 'The applicant shall provide capital improvements impact fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Bicycle and pedestrian access plan', commitment: 'SCA REC-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'Bicycle and pedestrian access plan', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Bicycle and pedestrian access plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Implementation of bicycle and pedestrian enhancements', commitment: 'SCA REC-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Public Services and Recreation', phase: 'Construction', requirementText: 'Requirement: Implementation of bicycle and pedestrian enhancements, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Obstruction permit', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Approval & Consultation', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The applicant shall obtain obstruction permit from the appropriate agency prior to commencing the affected activity.' },
  { name: 'Repair of damage to public right-of-ways', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'completed', comments: 3, action: 'Repair of damage to public', milestones: 'Demolition', resourceCategory: 'Transportation and Traffic', phase: 'Construction', requirementText: 'Requirement: Repair of damage to public right-of-ways, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Traffic control plan', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Traffic control plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Traffic control plan implementation', commitment: 'SCA TRANS-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a Traffic control plan implementation prior to the affected project phase, subject to City review and approval.' },
  { name: 'Bicycle parking', commitment: 'SCA TRANS-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 1, action: 'Bicycle parking', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate bicycle parking consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'TDM - operational strategies', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'TDM - operational strategies', milestones: 'Building Permit', resourceCategory: 'Transportation and Traffic', phase: 'Post-Construction', requirementText: 'The project applicant shall prepare and implement a TDM - operational strategies prior to the affected project phase, subject to City review and approval.' },
  { name: 'TDM implementation - physical improvements', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 3, action: '', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Construction', requirementText: 'The project applicant shall prepare and implement a TDM implementation - physical improvements prior to the affected project phase, subject to City review and approval.' },
  { name: 'Transportation and parking demand management plan', commitment: 'SCA TRANS-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: 'Transportation and parking demand management', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Transportation and parking demand management plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'ADA-accessible parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'in-progress', comments: 0, action: 'ADA-accessible parking spaces', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a ADA-accessible parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'PEV-capable parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: 'Final Inspection', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a PEV-capable parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'PEV-ready parking spaces', commitment: 'SCA TRANS-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 0, action: 'PEV-ready parking spaces', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a PEV-ready parking spaces prior to the affected project phase, subject to City review and approval.' },
  { name: 'Transportation impact fee', commitment: 'SCA TRANS-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'completed', comments: 3, action: 'Transportation impact fee', milestones: '', resourceCategory: 'Transportation and Traffic', phase: 'Pre-Construction', requirementText: 'The applicant shall provide transportation impact fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Construction and Demolition Waste Reduction and Recycling Plan', commitment: 'SCA UTIL-1', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Plan', status: 'not-started', comments: 1, action: '', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'The project applicant shall prepare and implement a Construction and Demolition Waste Reduction and Recycling Plan prior to the affected project phase, subject to City review and approval.' },
  { name: 'Recycling collection space', commitment: 'SCA UTIL-2', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: 'Recycling collection space', milestones: 'Demolition', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate recycling collection space consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'California Green Building Standards', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 1, action: 'California Green Building Standards', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate california Green Building Standards consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'California Green Building Standards after construction', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'in-progress', comments: 0, action: 'California Green Building Standards after', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Post-Construction', requirementText: 'Requirement: California Green Building Standards after construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'California Green Building Standards during construction', commitment: 'SCA UTIL-3', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 3, action: 'California Green Building Standards during', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', requirementText: 'Requirement: California Green Building Standards during construction, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
  { name: 'Sanitary Sewer Impact Analysis', commitment: 'SCA UTIL-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Analysis', status: 'not-started', comments: 1, action: '', milestones: 'Building Permit', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'The applicant shall complete sanitary Sewer Impact Analysis to evaluate potential impacts and identify feasible mitigation prior to approval.' },
  { name: 'Sanitary Sewer Impact Fee', commitment: 'SCA UTIL-4', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Financial', status: 'in-progress', comments: 0, action: 'Sanitary Sewer Impact Fee', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'The applicant shall provide sanitary Sewer Impact Fee to ensure funding of the required mitigation prior to issuance of the relevant permit.' },
  { name: 'Storm drain system design', commitment: 'SCA UTIL-5', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 1, action: 'Storm drain system design', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate storm drain system design consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Underground utilities', commitment: 'SCA UTIL-6', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'not-started', comments: 0, action: '', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', requirementText: 'Project design shall incorporate underground utilities consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Water Efficient Landscape Ordinance', commitment: 'SCA UTIL-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Design', status: 'completed', comments: 3, action: 'Water Efficient Landscape Ordinance', milestones: 'Final Inspection', resourceCategory: 'Utilities and Service Systems', phase: 'Pre-Construction', requirementText: 'Project design shall incorporate water Efficient Landscape Ordinance consistent with the standards and performance criteria identified in the FEIR.' },
  { name: 'Water Efficient Landscape Ordinance installation', commitment: 'SCA UTIL-7', sourceDoc: '3600 Alameda Avenue Project FEIR', type: 'Other', status: 'not-started', comments: 1, action: 'Water Efficient Landscape Ordinance installation', milestones: '', resourceCategory: 'Utilities and Service Systems', phase: 'Construction', requirementText: 'Requirement: Water Efficient Landscape Ordinance installation, in accordance with the applicable FEIR mitigation measure and standard conditions of approval.' },
];

// ── src/pages/prototypes/requirement-tracker.astro ──
---
// Action Tracker (Prologis) — the "Compliance Tracking" workspace.
//
// Prologis wants the tracking surface as a real data grid, not the Kanban the
// app defaults to. So the View toggle offers Kanban / Timeline / Grid, and this
// prototype boots into GRID. The grid is AG Grid (community) mounted as a client
// island; Kanban renders statically from the same fixture; Timeline is a stub.
//
// Rendered inside AppShell > PageLayout, themed with the Beacon spoke tokens.
import AppShell from '../../layouts/AppShell.astro';
import PageLayout from '../../layouts/PageLayout.astro';
import EsaIcon from '@esa/ecology/esa-icon.astro';
import { actions, STATUS_META, type ActionStatus } from '../../data/tracker-fixture';

// Serialized payload for the AG Grid island.
const gridPayload = {
  rows: actions,
  statusMeta: STATUS_META as Record<ActionStatus, { label: string; hex: string }>,
};

// Prologis-specific sidenav — the aliased / trimmed tree their tenant sees.
// Project drops Organize Actions / Action Lists / Document Reviews / Spatial
// Library Layers; Tracking drops All Components; Reporting drops Progress
// Report; Data Catalog drops Actions (their "Requirements" will route to the
// Actions catalog under the upcoming Simplified fork).
const prologisNav = [
  { id: 'setup-wizard', title: 'Setup Wizard', icon: 'compass', link: true },
  {
    id: 'project',
    title: 'Project',
    icon: 'layout-dashboard',
    expanded: false,
    dividerAfter: true,
    items: [{ id: 'dashboard', label: 'Dashboard' }],
  },
  {
    id: 'tracking',
    title: 'Tracking',
    icon: 'radar',
    expanded: true,
    active: true,
    items: [{ id: 'project-tracking', label: 'Project Tracking', active: true }],
  },
  {
    id: 'monitoring',
    title: 'Monitoring',
    icon: 'map-pinned',
    expanded: false,
    items: [{ id: 'monitoring-portal', label: 'Monitoring Portal' }],
  },
  {
    id: 'reporting',
    title: 'Reporting',
    icon: 'clipboard-list',
    expanded: false,
    dividerAfter: true,
    items: [{ id: 'report-center', label: 'Report Center' }],
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    icon: 'database',
    expanded: false,
    items: [
      { id: 'dc-source-documents', label: 'Source Documents' },
      { id: 'dc-commitments', label: 'Commitments' },
      { id: 'dc-requirements', label: 'Requirements' },
      { id: 'dc-all-data', label: 'All Data' },
    ],
  },
];
---

<AppShell title="Requirement Tracking — 3600 Alameda" tenantName="Prologis" projectName="3600 Alameda" navSections={prologisNav}>
  <PageLayout
    title="3600 Alameda"
    icon="radar"
    breadcrumbs={[
      { label: '3600 Alameda', href: '#project' },
      { label: 'Tracking', href: '#tracking' },
      { label: 'Project Tracking' },
    ]}
  >
    <span slot="title-badge" class="ctx-badge">Project Tracking</span>

    <!-- ═══ Toolbar: View toggle · Search ═══ -->
    <div class="tt-toolbar">
      <div class="tt-views" role="tablist" aria-label="View as">
        <button type="button" class="tt-view is-active" data-view="grid" role="tab" aria-selected="true">
          <EsaIcon name="grid" size="sm" paths="<rect width='18' height='18' x='3' y='3' rx='2'/><path d='M3 9h18'/><path d='M3 15h18'/><path d='M9 3v18'/><path d='M15 3v18'/>" />
          Grid
        </button>
        <button type="button" class="tt-view" data-view="kanban" role="tab" aria-selected="false">
          <EsaIcon name="columns-3" size="sm" paths="<path d='M3 3h18v18H3z'/><path d='M9 3v18'/><path d='M15 3v18'/>" />
          Kanban
        </button>
        <button type="button" class="tt-view" data-view="timeline" role="tab" aria-selected="false">
          <EsaIcon name="calendar" size="sm" paths="<path d='M8 2v4'/><path d='M16 2v4'/><rect width='18' height='18' x='3' y='4' rx='2'/><path d='M3 10h18'/>" />
          Timeline
        </button>
      </div>

    </div>

    <!-- ═══ GRID view (default) — Beacon grid chrome + AG Grid island ═══ -->
    <div class="tt-view-pane" id="view-grid">
      <!-- Grid header: global search · clear filters -->
      <div class="grid-header">
        <div class="grid-header__filter">
          <EsaIcon name="search" size="sm" />
          <input type="search" id="tt-search" class="grid-header__input" placeholder="Search requirements…" aria-label="Search requirements" />
          <button type="button" id="tt-search-clear" class="grid-header__clear" aria-label="Clear search" hidden>
            <EsaIcon name="x" size="xs" />
          </button>
        </div>
        <button type="button" id="tt-clear-filters" class="grid-clear-filters">Clear Filters</button>
      </div>

      <div id="tracker-grid" class="tracker-grid"></div>

      <!-- Grid footer: download · record count -->
      <div class="table-footer">
        <button type="button" id="tt-download" class="download-button">
          <EsaIcon name="download" size="sm" paths="<path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' x2='12' y1='15' y2='3'/>" />
          Download as CSV
        </button>
        <div class="row-count-data">
          Total Records: <span id="tt-total">0</span>
          <span id="tt-filtered" class="filtered-rows-count" hidden></span>
        </div>
      </div>
    </div>

    <!-- ═══ KANBAN view (stub) ═══ -->
    <div class="tt-view-pane" id="view-kanban" hidden>
      <div class="tt-empty">
        <EsaIcon name="columns-3" size="lg" paths="<path d='M3 3h18v18H3z'/><path d='M9 3v18'/><path d='M15 3v18'/>" />
        <h3>Kanban view</h3>
        <p>Status board of actions by tracking state. Not part of this prototype pass — Grid is the wired view.</p>
      </div>
    </div>

    <!-- ═══ TIMELINE view (stub) ═══ -->
    <div class="tt-view-pane" id="view-timeline" hidden>
      <div class="tt-empty">
        <EsaIcon name="calendar" size="lg" paths="<path d='M8 2v4'/><path d='M16 2v4'/><rect width='18' height='18' x='3' y='4' rx='2'/><path d='M3 10h18'/>" />
        <h3>Timeline view</h3>
        <p>Gantt-style schedule of actions by due date and phase. Not part of this prototype pass — Grid is the wired view.</p>
      </div>
    </div>
  </PageLayout>

  <script type="application/json" id="grid-data" set:html={JSON.stringify(gridPayload)}></script>
</AppShell>

<script>
  import { createGrid, ModuleRegistry, AllCommunityModule, themeQuartz, iconOverrides } from 'ag-grid-community';
  import type { GridApi, GridOptions, ColDef, ICellRendererParams } from 'ag-grid-community';

  ModuleRegistry.registerModules([AllCommunityModule]);

  type ActionStatus = 'not-started' | 'in-progress' | 'completed' | 'not-applicable';
  interface ActionRow {
    name: string;
    commitment: string;
    sourceDoc: string;
    requirementText: string;
    type: string;
    status: ActionStatus;
    comments: number;
    action: string;
    milestones: string;
    resourceCategory: string;
    phase: string;
  }
  interface Payload {
    rows: ActionRow[];
    statusMeta: Record<ActionStatus, { label: string; hex: string }>;
  }

  const payload: Payload = JSON.parse(document.getElementById('grid-data')!.textContent || '{}');
  const { rows, statusMeta } = payload;

  // Beacon "gold-star" Quartz theme — ported verbatim from esassoc/Beacon
  // (Beacon.Web/.../ag-grid/beacon-grid-theme.ts). Literal hex, each annotated
  // with the Beacon design token it mirrors.
  const lucideFunnelSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>';
  const beaconIconOverrides = iconOverrides({
    type: 'image',
    mask: true,
    icons: { filter: { svg: lucideFunnelSvg }, filterActive: { svg: lucideFunnelSvg } },
  });

  const beaconTheme = themeQuartz.withPart(beaconIconOverrides).withParams({
    fontFamily: 'DM Sans, sans-serif',
    headerFontFamily: 'DM Sans, sans-serif',
    accentColor: '#f9a134', // ESA orange / --accent
    foregroundColor: '#3d3d3d', // gray-900
    headerBackgroundColor: '#005862', // teal-900 / --primary
    headerTextColor: '#ffffff',
    headerFontSize: '13px',
    headerFontWeight: 600,
    headerHeight: 48,
    rowHeight: 44,
    dataFontSize: '13px',
    oddRowBackgroundColor: '#fafafa', // gray-50
    rowHoverColor: '#effefb', // teal-50
    borderColor: '#dcdcdc', // gray-200
    wrapperBorder: '1px solid #dcdcdc', // gray-200
    wrapperBorderRadius: '4px 4px 0 0',
    borderRadius: '4px',
    headerColumnResizeHandleColor: 'rgba(255, 255, 255, 0.2)',
    checkboxCheckedBackgroundColor: '#f9a134', // ESA orange / --accent
  });

  // ── Renderers ───────────────────────────────────────────────────────────────
  function statusRenderer(p: ICellRendererParams<ActionRow>) {
    const meta = statusMeta[p.value as ActionStatus];
    if (!meta) return '';
    const el = document.createElement('span');
    el.className = 'tg-chip';
    el.style.setProperty('--_chip', meta.hex);
    el.innerHTML = `<span class="tg-chip__dot"></span>${meta.label}`;
    return el;
  }

  function linkRenderer(p: ICellRendererParams<ActionRow>) {
    const el = document.createElement('a');
    el.className = 'tg-name';
    el.href = '#';
    el.textContent = String(p.value ?? '');
    el.addEventListener('click', (e) => e.preventDefault());
    return el;
  }

  // Column set mirrors the live Progress Report view. Explicit (wider) widths so
  // the grid overflows the viewport and scrolls left/right, the way Beacon's
  // data-catalog grids do — no fit-to-width.
  const columnDefs: ColDef<ActionRow>[] = [
    { field: 'sourceDoc', headerName: 'Source Document', width: 260, cellRenderer: linkRenderer },
    { field: 'commitment', headerName: 'Commitment ID', width: 170, cellRenderer: linkRenderer },
    { field: 'name', headerName: 'Requirement Name', width: 340, cellRenderer: linkRenderer },
    { field: 'requirementText', headerName: 'Requirement Text', width: 460 },
    { field: 'type', headerName: 'Requirement Type', width: 200 },
    { field: 'status', headerName: 'Status', width: 180, cellRenderer: statusRenderer, cellClass: 'tg-status-cell', filterValueGetter: (p) => statusMeta[p.data!.status]?.label },
    { field: 'comments', headerName: 'Comment', width: 150, type: 'numericColumn', valueFormatter: (p) => (p.value ? String(p.value) : '') },
    { field: 'action', headerName: 'Action', width: 260 },
    { field: 'milestones', headerName: 'Milestone(s)', width: 200 },
    { field: 'resourceCategory', headerName: 'Resource Category', width: 240 },
  ];

  // ── Footer record counts (Total / Filtered) ───────────────────────────────
  const totalEl = document.getElementById('tt-total')!;
  const filteredEl = document.getElementById('tt-filtered')!;
  function updateCounts() {
    const total = rows.length;
    const displayed = api.getDisplayedRowCount();
    totalEl.textContent = String(total);
    if (displayed < total) {
      filteredEl.hidden = false;
      filteredEl.textContent = `Filtered Records: ${displayed}`;
    } else {
      filteredEl.hidden = true;
    }
  }

  const gridOptions: GridOptions<ActionRow> = {
    theme: beaconTheme,
    rowData: rows,
    columnDefs,
    defaultColDef: {
      sortable: true,
      resizable: true,
      filter: true,
      floatingFilter: false,
      suppressHeaderMenuButton: true,
      tooltipValueGetter: (p) => p.value,
    },
    tooltipShowDelay: 0,
    tooltipInteraction: true,
    tooltipShowMode: 'whenTruncated',
    onFirstDataRendered: updateCounts,
    onFilterChanged: updateCounts,
  };

  const gridDiv = document.getElementById('tracker-grid')!;
  const api: GridApi<ActionRow> = createGrid(gridDiv, gridOptions);

  // ── Grid header: search → quick filter (+ clear-x) ─────────────────────────
  const search = document.getElementById('tt-search') as HTMLInputElement;
  const searchClear = document.getElementById('tt-search-clear')!;
  search?.addEventListener('input', () => {
    api.setGridOption('quickFilterText', search.value);
    searchClear.hidden = !search.value;
  });
  searchClear.addEventListener('click', () => {
    search.value = '';
    api.setGridOption('quickFilterText', '');
    searchClear.hidden = true;
    search.focus();
  });

  // ── Clear Filters → reset all column filters (Beacon parity) ───────────────
  document.getElementById('tt-clear-filters')!.addEventListener('click', () => api.setFilterModel(null));

  // ── Download as CSV ────────────────────────────────────────────────────────
  document.getElementById('tt-download')!.addEventListener('click', () =>
    api.exportDataAsCsv({ fileName: '3600-alameda-requirements.csv' }),
  );

  // ── View toggle (Kanban / Timeline / Grid) ────────────────────────────────
  const panes: Record<string, HTMLElement> = {
    grid: document.getElementById('view-grid')!,
    kanban: document.getElementById('view-kanban')!,
    timeline: document.getElementById('view-timeline')!,
  };
  document.querySelectorAll<HTMLButtonElement>('.tt-view').forEach((btn) => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view!;
      document.querySelectorAll('.tt-view').forEach((b) => {
        b.classList.toggle('is-active', b === btn);
        b.setAttribute('aria-selected', String(b === btn));
      });
      Object.entries(panes).forEach(([key, el]) => (el.hidden = key !== view));
    });
  });
</script>

<style>
  /* ═══ Title badge — neutral, sits directly right of the H1 ═══ */
  .ctx-badge {
    display: inline-flex;
    align-items: center;
    padding: var(--spacing-100) var(--spacing-250);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    background: var(--bcn-gray-100);
    border: 1px solid var(--bcn-gray-200);
    border-radius: var(--radius-100, 4px);
  }

  /* ═══ Toolbar ═══ */
  .tt-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    flex-wrap: wrap;
    margin-bottom: var(--spacing-400);
  }
  .tt-views {
    display: inline-flex;
    padding: var(--spacing-050);
    background: var(--bcn-gray-100);
    border-radius: var(--radius-300);
  }
  .tt-view {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
    padding: var(--spacing-150) var(--spacing-400);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-secondary);
    border-radius: var(--radius-200);
    transition: background 150ms ease, color 150ms ease;
  }
  .tt-view :global(.esa-icon) {
    color: currentColor;
  }
  .tt-view.is-active {
    background: var(--color-surface);
    color: var(--color-primary);
    box-shadow: var(--shadow-100, 0 1px 2px rgba(0, 0, 0, 0.08));
  }

  /* ═══ View panes ═══ */
  .tt-view-pane[hidden] {
    display: none;
  }

  /* ═══ Beacon grid header: search · clear filters ═══ */
  .grid-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    margin-bottom: var(--spacing-300);
  }
  .grid-header__filter {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-200);
    padding: 0 var(--spacing-300);
    height: 36px;
    min-width: 280px;
    background: var(--color-surface);
    border: 1px solid var(--color-border-strong, #c7c7c7);
    border-radius: var(--radius-200);
    transition: border-color 150ms ease, box-shadow 150ms ease;
  }
  .grid-header__filter:focus-within {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent);
  }
  .grid-header__filter :global(.esa-icon) {
    color: var(--color-text-tertiary);
    flex-shrink: 0;
  }
  .grid-header__input {
    flex: 1;
    min-width: 0;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: 0.875rem;
    color: var(--color-text-primary);
  }
  .grid-header__input:focus {
    outline: none;
  }
  .grid-header__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-tertiary);
    border-radius: var(--radius-100, 4px);
  }
  .grid-header__clear:hover {
    color: var(--color-text-primary);
  }
  .grid-clear-filters {
    height: 36px;
    padding: 0 var(--spacing-400);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-secondary);
    background: var(--bcn-gray-100);
    border: 1px solid var(--bcn-gray-200);
    border-radius: var(--radius-200);
    white-space: nowrap;
    transition: background 150ms ease, color 150ms ease;
  }
  .grid-clear-filters:hover {
    background: var(--bcn-gray-200);
    color: var(--color-text-primary);
  }

  /* ═══ AG Grid host ═══ */
  .tracker-grid {
    width: 100%;
    height: calc(100vh - 420px);
    min-height: 400px;
  }

  /* ═══ Beacon grid footer: download · record count ═══ */
  .table-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--spacing-400);
    padding: var(--spacing-200) var(--spacing-400);
    background: var(--bcn-gray-50);
    border: 1px solid var(--bcn-gray-200);
    border-top: 0;
    border-radius: 0 0 var(--radius-100, 4px) var(--radius-100, 4px);
  }
  .download-button {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-200);
    font-size: var(--type-size-100);
    font-weight: var(--font-weight-medium);
    color: var(--color-text-link, #005862);
    border-radius: var(--radius-100, 4px);
    transition: color 150ms ease;
  }
  .download-button:hover {
    color: var(--color-primary-hover, #00474f);
  }
  .download-button :global(.esa-icon) {
    color: currentColor;
  }
  .row-count-data {
    display: flex;
    align-items: center;
    gap: var(--spacing-400);
    font-size: var(--type-size-100);
    color: var(--color-text-secondary);
    font-variant-numeric: tabular-nums;
  }
  .filtered-rows-count {
    color: var(--color-text-tertiary);
  }
  .filtered-rows-count[hidden] {
    display: none;
  }
  .grid-header__clear[hidden] {
    display: none;
  }
  /* Chip + name renderers (global — AG Grid injects cells outside scope) */
  /* Status cell: vertically center the compact chip in the row. */
  :global(.ag-cell.tg-status-cell) {
    display: flex;
    align-items: center;
  }
  :global(.tg-chip) {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-150);
    padding: 1px var(--spacing-200);
    border-radius: var(--radius-100, 4px);
    font-size: 0.75rem;
    line-height: 1.5;
    font-weight: var(--font-weight-semibold);
    white-space: nowrap;
    background: color-mix(in srgb, var(--_chip) 16%, transparent);
    color: color-mix(in srgb, var(--_chip) 70%, #1a1a1a);
  }
  :global(.tg-chip__dot) {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--_chip);
    flex-shrink: 0;
  }
  :global(.tg-name) {
    color: var(--color-text-link, #005862);
    font-weight: var(--font-weight-regular, 400);
    text-decoration: underline;
  }
  :global(.tg-name:hover) {
    color: var(--color-primary-hover, #00474f);
  }


  /* ═══ Empty state (timeline stub) ═══ */
  .tt-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--spacing-200);
    padding: var(--spacing-900) var(--spacing-400);
    color: var(--color-text-secondary);
  }
  .tt-empty :global(.esa-icon) {
    color: var(--color-text-tertiary);
  }
  .tt-empty h3 {
    margin: var(--spacing-200) 0 0;
    font-size: var(--type-size-300);
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
  }
  .tt-empty p {
    margin: 0;
    max-width: 46ch;
    line-height: 1.55;
  }

</style>

<!-- Green radar icon in the H1 (PageLayout renders the icon outside this page's
     scope, so override globally; only this page loads this rule). -->
<style is:global>
  .page-layout__title h1 .esa-icon {
    color: var(--color-secondary) !important;
  }
</style>
```
