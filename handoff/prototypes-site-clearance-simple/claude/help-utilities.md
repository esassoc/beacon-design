# Help & utilities

Site Clearance — simplified model · source prototype: https://esassoc.github.io/beacon-design/prototypes/site-clearance-simple/

![Help & utilities, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-simple/claude/help-utilities.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-simple/claude/help-utilities.phone.png

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/aldo/BcnAldoMark.astro`
- `bcn-help-bar` (spoke) · `src/components/bcn/BcnHelpBar.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-popover` (hub) · `packages/ecology/src/components/esa-popover.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-help-bar"
  data-help-bar=""
  data-newest="2026-06-02"
  role="toolbar"
  aria-label="Help &amp; utilities"
>
  <!-- Primary: Guidance — the Aldo mark + visible label; opens the guidance drawer via hook. --><button
    type="button"
    class="bcn-help-bar__guidance"
    data-help-trigger=""
    aria-haspopup="dialog"
  >
    <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
      ><svg
        class="bcn-aldo-mark__glyph"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
        <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
        <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
        <circle cx="33.2" cy="31.1" r="2" fill="currentColor" stroke="none"></circle></svg></span
    ><span class="bcn-help-bar__guidance-label">Guidance</span></button
  ><span class="bcn-help-bar__divider" aria-hidden="true"></span
  ><!-- Attach Evidence of Compliance — icon-only; the tooltip host carries the drawer's open hook.
       GLYPH NOTE: the spoke's committed evidence glyph is the paperclip in global-search's
       SCOPES (what the ⌘K palette shows for Evidence of Compliance), but esa-icon-button
       forwards only a registry `name` — no custom `paths` — and the hub registry has no
       paperclip. Using 'file-text' until paperclip is registered in the hub, the same
       constraint and the same fix as 'notepad-text' below.
       This slot used to hold a duplicate Search button. It was replaced (product meeting
       2026-08-04): search already has the top bar's own field and ⌘K, and this bar is
       where Beacon's bottom affordances live, which is where the global evidence drawer
       belongs. --><esa-tooltip
    class="bcn-help-bar__tooltip"
    text="Attach Evidence of Compliance"
    position="above"
    data-evidence-trigger="true"
    align="center"
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        aria-label="Attach Evidence of Compliance"
        title="Attach Evidence of Compliance"
      >
        <span class="esa-icon esa-icon--md" aria-hidden="true"
          ><svg
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
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <!-- …and 3 more like this (<path>) -->
          </svg></span
        >
      </button></span
    ></esa-tooltip
  ><!-- What's new — icon-only trigger + unread dot; esa-popover panel opens above the bar. --><esa-popover
    class="bcn-help-bar__popover"
    position="top"
    trigger="click"
    offset="12"
    appearance="default"
    ><span class="bcn-help-bar__whatsnew" data-whatsnew=""
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          aria-label="What's new"
          title="What's new"
          aria-expanded="false"
        >
          <span class="esa-icon esa-icon--md" aria-hidden="true"
            ><svg
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
              <path d="M8 18h5"></path></svg
          ></span></button></span
      ><span class="bcn-help-bar__dot" data-whatsnew-dot="" aria-hidden="true"></span
    ></span>
    <div slot="content" class="bcn-help-bar__panel">
      <header class="bcn-help-bar__panel-header">
        <p class="bcn-help-bar__panel-title">What's new</p>
        <p class="bcn-help-bar__panel-release">
          1.33.0 · <time datetime="2026-06-02">Jun 2, 2026</time>
        </p>
      </header>
      <ul class="bcn-help-bar__panel-list">
        <li class="bcn-help-bar__panel-item">
          <a class="bcn-help-bar__panel-link" href="/beacon-design/prototypes/release-notes#v1-33-0"
            ><p class="bcn-help-bar__panel-item-title">Commitment Lists</p>
            <p class="bcn-help-bar__panel-item-blurb">
              Save a filtered view of commitments as a reusable, named List, then reopen it anytime
              to scope the grid to just its members.
            </p></a
          >
        </li>
        <li class="bcn-help-bar__panel-item">
          <a class="bcn-help-bar__panel-link" href="/beacon-design/prototypes/release-notes#v1-33-0"
            ><p class="bcn-help-bar__panel-item-title">Evidence of Compliance</p>
            <p class="bcn-help-bar__panel-item-blurb">
              Every Evidence of Compliance record now lives in one Data Catalog grid with Project,
              Component, and Work Area scope selectors, instead of separate tabs on each page.
            </p></a
          >
        </li>
        <li class="bcn-help-bar__panel-item">
          <a class="bcn-help-bar__panel-link" href="/beacon-design/prototypes/release-notes#v1-33-0"
            ><p class="bcn-help-bar__panel-item-title">Commitment Compliance</p>
            <p class="bcn-help-bar__panel-item-blurb">
              A new Monitoring Portal section shows which commitments are out of compliance and the
              field observations driving it, matched by species.
            </p></a
          >
        </li>
      </ul>
      <div class="bcn-help-bar__panel-footer">
        <a class="bcn-help-bar__panel-all" href="/beacon-design/prototypes/release-notes"
          >All release notes<span class="bcn-help-bar__panel-all-arrow" aria-hidden="true"
            >→</span
          ></a
        >
      </div>
    </div></esa-popover
  >
</div>
```

## Styles

```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 12s linear infinite bcn-aldo-spin;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-mark[data-animated],
  .bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
    animation: none;
  }
}
.bcn-help-bar {
  z-index: 1000;
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-150);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  border-radius: var(--radius-400, 14px);
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 8px 24px #00000047;
}
@supports not (backdrop-filter: blur(1px)) {
  .bcn-help-bar {
    background: var(--bcn-helpbar-bg-solid);
  }
}
@media (prefers-reduced-transparency: reduce) {
  .bcn-help-bar {
    background: var(--bcn-helpbar-bg-solid);
    backdrop-filter: none;
  }
}
.bcn-help-bar__guidance {
  align-items: center;
  gap: var(--spacing-150);
  height: 40px;
  padding: 0 var(--spacing-250, 0.625rem);
  border-radius: var(--radius-200, 8px);
  color: var(--bcn-helpbar-fg);
  font-family: inherit;
  font-size: var(--font-size-200, 0.9375rem);
  font-weight: var(--typography-font-weight-medium);
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: 0;
  line-height: 1;
  display: inline-flex;
}
.bcn-help-bar__guidance:hover {
  background: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar__guidance:focus-visible {
  outline: 2px solid var(--bcn-helpbar-fg);
  outline-offset: 2px;
}
.bcn-help-bar__guidance-label {
  white-space: nowrap;
}
.bcn-help-bar__divider {
  width: 1px;
  height: 22px;
  margin: 0 var(--spacing-050, 2px);
  background: var(--bcn-helpbar-divider);
  flex: none;
}
.bcn-help-bar__tooltip,
.bcn-help-bar__popover {
  display: inline-flex;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-help-bar__whatsnew {
  display: inline-flex;
  position: relative;
}
.bcn-help-bar__dot {
  background: var(--bcn-aldo);
  width: 8px;
  height: 8px;
  box-shadow: 0 0 0 2px var(--bcn-helpbar-bg-solid);
  pointer-events: none;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  right: 7px;
}
.bcn-help-bar__dot[hidden] {
  display: none;
}
.bcn-help-bar__panel {
  width: 340px;
  max-width: 84vw;
  color: var(--color-content-default);
}
.bcn-help-bar__panel-header {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  display: flex;
}
.bcn-help-bar__panel-title {
  font-size: var(--font-size-200, 0.9375rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-help-bar__panel-release {
  font-size: var(--font-size-150, 0.875rem);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  margin: 0;
}
.bcn-help-bar__panel-list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-bar__panel-link {
  padding: var(--spacing-150) var(--spacing-150);
  margin: 0 calc(var(--spacing-150) * -1);
  border-radius: var(--radius-200, 8px);
  color: inherit;
  transition: background var(--transition-fast, 0.15s ease);
  text-decoration: none;
  display: block;
}
.bcn-help-bar__panel-link:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-help-bar__panel-link:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
}
.bcn-help-bar__panel-item-title {
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0 0 2px;
  line-height: 1.3;
}
.bcn-help-bar__panel-item-blurb {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-regular, 400);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.45;
}
.bcn-help-bar__panel-footer {
  margin-top: var(--spacing-300);
  padding-top: var(--spacing-250, 0.625rem);
  border-top: 1px solid var(--color-border-default);
}
.bcn-help-bar__panel-all {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-link);
  align-items: center;
  gap: 4px;
  text-decoration: none;
  display: inline-flex;
}
.bcn-help-bar__panel-all:hover {
  text-decoration: underline;
}
.bcn-help-bar__panel-all:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-help-bar__panel-all-arrow {
  transition: transform 0.15s;
}
.bcn-help-bar__panel-all:hover .bcn-help-bar__panel-all-arrow {
  transform: translate(2px);
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `#17191bc7` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `#ffffff1f` | component |
| `--bcn-helpbar-divider` | `#ffffff29` | component |
| `--bcn-helpbar-fg` | `#ffffffeb` | component |
| `--bcn-helpbar-fg-muted` | `#ffffffb8` | component |
| `--bcn-helpbar-hover-bg` | `#ffffff1a` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
