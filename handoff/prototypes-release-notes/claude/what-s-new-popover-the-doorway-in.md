# What's-new popover (the doorway in)

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![What's-new popover (the doorway in), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/what-s-new-popover-the-doorway-in.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/what-s-new-popover-the-doorway-in.phone.png

The app-wide entry point to this page: a popover above the floating help bar listing the latest post's features, each deep-linking to that feature on this page, with an "All Release Notes" footer.

## Key decisions

- Derived, not curated separately: the entries are LATEST_RELEASE.features, so the popover and the post always agree.
- Each entry is the feature title over its paragraph, clamped to two lines; the page has the rest.
- Each entry links to `<release-notes>#<release anchor>-<feature id>`, landing on the feature itself.
- The panel is the esa-popover lego (position="top", trigger="click"), which owns open/close, Esc and outside-click. The bar's own script only persists the seen state.

## Gotchas

- The unread dot is retired by writing the latest RELEASE DATE to localStorage, not a boolean, so the dot comes back when the next release ships.
- Trigger the popover from the real button; the dot is an aria-hidden decoration.

## Done when

- Clicking What's new opens a white panel above the bar headed by the latest version and date; it lists that release's features; clicking one lands on that feature on this page; the unread dot is gone afterward and stays gone on reload.

## Components

- `bcn-help-bar` (spoke) · `src/components/bcn/BcnHelpBar.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<div slot="content" class="bcn-help-bar__panel" style="--_room: 1134px">
  <header class="bcn-help-bar__panel-header">
    <p class="bcn-help-bar__panel-title typography-label-md-strong">What's New</p>
    <p class="bcn-help-bar__panel-release typography-label-sm">
      1.41.0 · <time datetime="2026-10-13">Oct 13, 2026</time>
    </p>
  </header>
  <ul class="bcn-help-bar__panel-list">
    <li>
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-41-0-lists"
        ><span class="bcn-help-bar__panel-text"
          ><span class="bcn-help-bar__panel-item-title typography-label-md-strong"
            >Lists replace Action Lists</span
          ><span class="bcn-help-bar__panel-item-text typography-body-xs"
            >Each project now has one Lists page for action lists and commitment lists. Every list
            has its own page, with a searchable drawer for adding items, Select mode for removing
            many, and CSV export.</span
          ></span
        ><span class="bcn-help-bar__panel-go" aria-hidden="true"
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
      ></a>
    </li>
    <li>
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-41-0-monitoring-dashboard"
        ><span class="bcn-help-bar__panel-text"
          ><span class="bcn-help-bar__panel-item-title typography-label-md-strong"
            >Configurable Monitoring Portal dashboard</span
          ><span class="bcn-help-bar__panel-item-text typography-body-xs"
            >The dashboard is now a board of widgets. Admins add them from a gallery, then resize,
            reorder, recolor and configure each one, and the layout is saved for the project.</span
          ></span
        ><span class="bcn-help-bar__panel-go" aria-hidden="true"
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
      ></a>
    </li>
    <li>
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-41-0-list-evidence"
        ><span class="bcn-help-bar__panel-text"
          ><span class="bcn-help-bar__panel-item-title typography-label-md-strong"
            >Evidence for a whole action list</span
          ><span class="bcn-help-bar__panel-item-text typography-body-xs"
            >Choose a component, stage the evidence, and save it to every action on that component
            in one step.</span
          ></span
        ><span class="bcn-help-bar__panel-go" aria-hidden="true"
          ><span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
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
              <path d="m9 18 6-6-6-6"></path></svg></span></span
      ></a>
    </li>
  </ul>
  <a
    class="bcn-help-bar__panel-all typography-label-sm-strong"
    href="/beacon-design/prototypes/release-notes"
    >All Release Notes
    <span class="esa-icon esa-icon--sm" aria-hidden="true"
      ><svg
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
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path></svg></span
  ></a>
</div>
```

## Styles

```css
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar__panel {
  gap: var(--spacing-200);
  width: min(320px, var(--_room, 320px));
  color: var(--color-content-default);
  white-space: normal;
  text-align: start;
  flex-direction: column;
  display: flex;
}
.bcn-help-bar__panel-header {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-200);
  border-block-end: 1px solid var(--color-border-default);
  padding-block-end: var(--spacing-150);
  display: flex;
}
.bcn-help-bar__panel-header p {
  margin: 0;
}
.bcn-help-bar__panel-release {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-help-bar__panel-list {
  margin: 0 calc(var(--spacing-150) * -1);
  gap: var(--spacing-050);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-help-bar__panel-link {
  align-items: center;
  gap: var(--spacing-150);
  padding: var(--spacing-150);
  border-radius: var(--radius-200, 8px);
  color: inherit;
  transition: background var(--transition-fast, 0.15s ease);
  text-decoration: none;
  display: flex;
}
.bcn-help-bar__panel-link:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-help-bar__panel-link:focus-visible,
.bcn-help-bar__panel-all:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 1px;
}
.bcn-help-bar__panel-text {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-help-bar__panel-item-title {
  color: var(--color-content-default);
}
.bcn-help-bar__panel-item-text {
  -webkit-line-clamp: 2;
  line-clamp: 2;
  color: var(--color-content-default-secondary);
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-help-bar__panel-go {
  color: var(--color-content-default-tertiary);
  opacity: 0;
  transition: opacity var(--transition-fast, 0.15s ease);
  display: inline-flex;
}
.bcn-help-bar__panel-link:hover .bcn-help-bar__panel-go,
.bcn-help-bar__panel-link:focus-visible .bcn-help-bar__panel-go {
  opacity: 1;
}
.bcn-help-bar__panel-all {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-link);
  border-radius: 2px;
  align-self: flex-start;
  padding-block-start: var(--spacing-150);
  text-decoration: none;
  display: inline-flex;
}
.bcn-help-bar__panel-all:hover {
  text-decoration: underline;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
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
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
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
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
