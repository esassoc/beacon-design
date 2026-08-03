# Floating help bar (app-wide)

Aldo's home: a floating utility pill fixed to the bottom-center of the viewport on EVERY page — Figma-toolbar energy, a dark glass surface deliberately distinct from the white app chrome. Left to right: the primary Guidance affordance (Aldo mark + label), a hairline divider, an icon-only Search button, and a What's-new icon button carrying an unread dot.

## Key decisions
- Mounted once in the AppShell chrome, so in-context help is available from any route without per-page wiring.
- Composed BLIND against its siblings: the bar adds NO open behavior for the drawer or for search. It only advertises the hooks the siblings already listen on — [data-help-trigger] (the guidance drawer opens on clicks here, via a document-level delegated listener) and [data-omni-trigger] (the existing global omni-search palette).
- The only local state it owns is the What's-new unread dot: the first open writes the newest entry date to localStorage 'bcn-whats-new-seen' and retires the dot for that browser.
- The What's-new trigger uses the notepad-text glyph — the same mark as the Release Notes page title. esa-icon-button forwards only a registry icon NAME (no custom paths passthrough), so that glyph was registered in the ecology icon registry rather than inlined here.
- Dark glass, but the popover it opens stays a white content surface — the bar is chrome, the panel is content.

## Gotchas
- esa-app-bar is the fixed TOP chrome strip, not a detached floating toolbar — the pill shell is this component's own composition glue. Everything inside it that CAN be a lego is one: esa-icon-button for Search and What's new, esa-tooltip for the Search hint, esa-popover for the What's-new panel.
- The Guidance control is bespoke because it pairs the animated Aldo mark with a text label, and esa-button / esa-icon-button accept only a Lucide icon name — not a custom SVG mark.
- localStorage access is wrapped in try/catch: in private mode the dot simply stops persisting rather than throwing.
- The bar is fixed to the viewport bottom-center — it must clear any page content that also anchors to the bottom, and it sits above page content but below modal chrome.

## Done when
- The pill floats bottom-center on every route; Guidance opens the drawer, Search opens the omni palette, What's new opens its popover above the bar; the unread dot disappears after the first open and stays gone on reload.

## Markup
```html
<div
  class="bcn-help-bar"
  data-help-bar=""
  data-newest="2026-06-02"
  role="toolbar"
  aria-label="Help &amp; utilities"
>
  <!-- Primary: Guidance — the Aldo mark + visible label; opens the guidance drawer via hook. -->
  <button
    type="button"
    class="bcn-help-bar__guidance"
    data-help-trigger=""
    aria-haspopup="dialog"
  >
    <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true">
      <span class="bcn-aldo-mark__glyph">
        <span class="esa-icon esa-icon--xs" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
            ></path>
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
        </span>
      </span>
    </span>
    <span class="bcn-help-bar__guidance-label">Guidance</span>
  </button>
  <span class="bcn-help-bar__divider" aria-hidden="true"></span>
  <!-- Search — icon-only; the tooltip host also carries the omni-search open hook. -->
  <esa-tooltip
    class="bcn-help-bar__tooltip"
    text="Search"
    position="above"
    data-omni-trigger="true"
  >
    <button
      class="esa-icon-button esa-icon-button--md"
      type="button"
      aria-label="Search"
      title="Search"
    >
      <span class="esa-icon esa-icon--md" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
      </span>
    </button>
  </esa-tooltip>
  <!-- What's new — icon-only trigger + unread dot; esa-popover panel opens above the bar. -->
  <esa-popover
    class="bcn-help-bar__popover"
    position="top"
    trigger="click"
    offset="12"
    appearance="default"
  >
    <span class="bcn-help-bar__whatsnew" data-whatsnew="">
      <button
        class="esa-icon-button esa-icon-button--md"
        type="button"
        aria-label="What's new"
        title="What's new"
      >
        <span class="esa-icon esa-icon--md" aria-hidden="true">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="M8 2v4"></path>
            <path d="M12 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="16" height="18" x="4" y="4" rx="2"></rect>
            <path d="M8 10h6"></path>
            <path d="M8 14h8"></path>
            <path d="M8 18h5"></path>
          </svg>
        </span>
      </button>
      <span class="bcn-help-bar__dot" data-whatsnew-dot="" aria-hidden="true"></span>
    </span>
    <div slot="content" class="bcn-help-bar__panel">
      <header class="bcn-help-bar__panel-header">
        <p class="bcn-help-bar__panel-title">What's new</p>
        <p class="bcn-help-bar__panel-release">
          1.33.0 · <time datetime="2026-06-02">Jun 2, 2026</time>
        </p>
      </header>
      <ul class="bcn-help-bar__panel-list">
        <li class="bcn-help-bar__panel-item">
          <a
            class="bcn-help-bar__panel-link"
            href="/beacon-design/prototypes/release-notes#v1-33-0"
          >
            <p class="bcn-help-bar__panel-item-title">Commitment Lists</p>
            <p class="bcn-help-bar__panel-item-blurb">
              Save a filtered view of commitments as a reusable, named List, then reopen
              it anytime to scope the grid to just its members.
            </p>
          </a>
        </li>
        <li class="bcn-help-bar__panel-item">
          <a
            class="bcn-help-bar__panel-link"
            href="/beacon-design/prototypes/release-notes#v1-33-0"
          >
            <p class="bcn-help-bar__panel-item-title">Evidence of Compliance</p>
            <p class="bcn-help-bar__panel-item-blurb">
              Every Evidence of Compliance record now lives in one Data Catalog grid with
              Project, Component, and Work Area scope selectors, instead of separate tabs
              on each page.
            </p>
          </a>
        </li>
        <li class="bcn-help-bar__panel-item">
          <a
            class="bcn-help-bar__panel-link"
            href="/beacon-design/prototypes/release-notes#v1-33-0"
          >
            <p class="bcn-help-bar__panel-item-title">Commitment Compliance</p>
            <p class="bcn-help-bar__panel-item-blurb">
              A new Monitoring Portal section shows which commitments are out of
              compliance and the field observations driving it, matched by species.
            </p>
          </a>
        </li>
      </ul>
      <div class="bcn-help-bar__panel-footer">
        <a class="bcn-help-bar__panel-all" href="/beacon-design/prototypes/release-notes">
          All release notes<span class="bcn-help-bar__panel-all-arrow" aria-hidden="true"
            >→</span
          >
        </a>
      </div>
    </div>
  </esa-popover>
</div>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
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
.bcn-aldo-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-text-inverse);
  line-height: 0;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-animated] {
  animation: bcn-aldo-pulse 2s ease-in-out infinite;
}
.bcn-aldo-mark__glyph {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: bcn-aldo-spin 8s linear infinite;
}
.bcn-help-bar {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-150);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  border-radius: var(--radius-400, 14px);
  box-shadow: 0 8px 24px #00000047;
}
.bcn-help-bar__guidance {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  height: 40px;
  padding: 0 var(--spacing-250, 0.625rem);
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: var(--bcn-helpbar-fg);
  font-family: inherit;
  font-size: var(--type-size-200, 0.9375rem);
  font-weight: var(--font-weight-medium);
  line-height: 1;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
  --icon-size-xs: 12px;
}
.bcn-help-bar__guidance-label {
  white-space: nowrap;
}
.bcn-help-bar__divider {
  flex: none;
  width: 1px;
  height: 22px;
  margin: 0 var(--spacing-050, 2px);
  background: var(--bcn-helpbar-divider);
}
.bcn-help-bar__tooltip,
.bcn-help-bar__popover {
  display: inline-flex;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar__whatsnew {
  position: relative;
  display: inline-flex;
}
.bcn-help-bar__dot {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--bcn-aldo);
  box-shadow: 0 0 0 2px var(--bcn-helpbar-bg-solid);
  pointer-events: none;
}
.bcn-help-bar__panel {
  width: 340px;
  max-width: 84vw;
  color: var(--color-text-primary);
}
.bcn-help-bar__panel-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
}
.bcn-help-bar__panel-title {
  margin: 0;
  font-size: var(--type-size-200, 0.9375rem);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-help-bar__panel-release {
  margin: 0;
  font-size: var(--type-size-150, 0.875rem);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-help-bar__panel-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-help-bar__panel-link {
  display: block;
  padding: var(--spacing-150) var(--spacing-150);
  margin: 0 calc(var(--spacing-150) * -1);
  border-radius: var(--radius-200, 8px);
  color: inherit;
  text-decoration: none;
  transition: background var(--transition-fast, 0.15s ease);
}
.bcn-help-bar__panel-item-title {
  margin: 0 0 2px;
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  font-weight: var(--font-weight-semibold);
  line-height: 1.3;
  color: var(--color-text-primary);
}
.bcn-help-bar__panel-item-blurb {
  margin: 0;
  font-size: var(--type-size-150, 0.875rem);
  font-weight: var(--font-weight-regular, 400);
  line-height: 1.45;
  color: var(--color-text-secondary);
}
.bcn-help-bar__panel-footer {
  margin-top: var(--spacing-300);
  padding-top: var(--spacing-250, 0.625rem);
  border-top: 1px solid var(--color-border);
}
.bcn-help-bar__panel-all {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: var(--type-size-150, 0.875rem);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-link);
  text-decoration: none;
}
.bcn-help-bar__panel-all-arrow {
  transition: transform 0.15s ease;
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
```

## Tokens
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-bg`: rgba(23, 25, 27, .78) _(component)_
- `--bcn-helpbar-bg-solid`: #1f2224 _(component)_
- `--bcn-helpbar-border`: rgba(255, 255, 255, .12) _(component)_
- `--bcn-helpbar-divider`: rgba(255, 255, 255, .16) _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-link`: #005862 _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-400`: .75rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
