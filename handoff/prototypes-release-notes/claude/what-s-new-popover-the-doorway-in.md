# What's-new popover (the doorway in)

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![What's-new popover (the doorway in), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/what-s-new-popover-the-doorway-in.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/what-s-new-popover-the-doorway-in.phone.png

The app-wide entry point to this page: a popover above the floating help bar with the latest release's version pill and date, its features, one row per earlier release, and an "All release notes" footer.

## Key decisions

- Derived, not curated separately: the entries are LATEST_RELEASE.features, so the popover and the post always agree.
- Each entry is the feature title (serif) over its one-sentence `summary`, written for the popover. No clamping or ellipsis; the page has the full paragraph.
- Each entry links to `<release-notes>#<release anchor>-<feature id>`, landing on the feature itself.
- Under "Earlier", the two releases before the latest get one row each: a smaller version pill and that release's feature titles joined by " · ", linking to the release's anchor. No dates on these rows.
- No screenshots and no unread dot: the button is a doorway, not a notifier.
- The panel is the esa-popover lego (position="top", trigger="click"), which owns open/close, Esc and outside-click. The bar's own script only fits the panel to narrow screens.

## Gotchas

- Trigger the popover from the real button.
- esa-popover exposes no public padding or radius hook, so the bar sets its private --_popover-padding, --_popover-radius and --_popover-bg.

## Done when

- Clicking What's new opens a white panel above the bar headed by the latest version pill and date; it lists that release's features with a one-sentence summary each; clicking one lands on that feature on this page; each Earlier row lands on that release.

## Components

- `bcn-help-bar` (spoke) · `src/components/bcn/BcnHelpBar.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<div slot="content" class="bcn-help-bar__panel" style="--_room: 1112px; --_room-h: 703px">
  <p class="bcn-help-bar__panel-release">
    <span class="bcn-help-bar__pill">1.41.0</span
    ><time class="bcn-help-bar__panel-date" datetime="2026-10-13">October 13, 2026</time>
  </p>
  <p class="bcn-help-bar__panel-title">What's New</p>
  <ul class="bcn-help-bar__panel-list">
    <li>
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-41-0-lists"
        ><span class="bcn-help-bar__panel-item-title">Lists replace Action Lists</span
        ><span class="bcn-help-bar__panel-item-text"
          >One Lists page per project holds action lists and commitment lists.</span
        ></a
      >
    </li>
    <li>
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-41-0-monitoring-dashboard"
        ><span class="bcn-help-bar__panel-item-title">Configurable Monitoring Portal dashboard</span
        ><span class="bcn-help-bar__panel-item-text"
          >Admins build the dashboard from a gallery of widgets.</span
        ></a
      >
    </li>
    <li>
      <a
        class="bcn-help-bar__panel-link"
        href="/beacon-design/prototypes/release-notes#v1-41-0-list-evidence"
        ><span class="bcn-help-bar__panel-item-title">Evidence for a whole action list</span
        ><span class="bcn-help-bar__panel-item-text"
          >Save one set of evidence to every action on a component.</span
        ></a
      >
    </li>
  </ul>
  <div class="bcn-help-bar__panel-prev">
    <p class="bcn-help-bar__panel-earlier">Earlier</p>
    <ul class="bcn-help-bar__panel-prev-list">
      <li>
        <a
          class="bcn-help-bar__panel-prev-link"
          href="/beacon-design/prototypes/release-notes#v1-40-0"
          ><span class="bcn-help-bar__pill bcn-help-bar__pill--sm">1.40.0</span
          ><span class="bcn-help-bar__panel-prev-text"
            >Component dashboards&nbsp;· Evidence upload in the evidence drawer</span
          ></a
        >
      </li>
      <li>
        <a
          class="bcn-help-bar__panel-prev-link"
          href="/beacon-design/prototypes/release-notes#v1-39-0"
          ><span class="bcn-help-bar__pill bcn-help-bar__pill--sm">1.39.0</span
          ><span class="bcn-help-bar__panel-prev-text"
            >Project dashboard homepage&nbsp;· Global search ranking and results</span
          ></a
        >
      </li>
    </ul>
  </div>
  <a class="bcn-help-bar__panel-all" href="/beacon-design/prototypes/release-notes"
    >All release notes
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar__panel {
  width: min(400px, var(--_room, 400px));
  max-block-size: var(--_room-h, none);
  color: var(--color-content-default);
  white-space: normal;
  text-align: start;
  flex-direction: column;
  display: flex;
  overflow-y: auto;
}
:where(.bcn-help-bar__panel) p {
  margin: 0;
}
.bcn-help-bar__panel-release {
  align-items: center;
  gap: 10px;
  display: flex;
}
.bcn-help-bar__pill {
  padding: 3px var(--spacing-200);
  background: color-mix(in srgb, var(--color-content-brand) 10%, transparent);
  color: var(--color-content-brand);
  font-size: 13px;
  line-height: 18px;
  font-weight: var(--typography-font-weight-medium);
  font-variant-numeric: tabular-nums;
  border-radius: 7px;
  flex: none;
}
.bcn-help-bar__pill--sm {
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 12px;
  line-height: 16px;
}
.bcn-help-bar__panel-date,
.bcn-help-bar__panel-earlier {
  color: var(--color-content-default-tertiary);
  font-size: 13px;
  line-height: 18px;
}
.bcn-help-bar__panel-title,
.bcn-help-bar__panel-item-title {
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
}
.bcn-help-bar__panel-title {
  margin: 12px 0 4px;
  font-size: 24px;
  line-height: 30px;
}
.bcn-help-bar__panel-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-help-bar__panel-list li + li {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
.bcn-help-bar__panel-link {
  gap: var(--spacing-050);
  color: inherit;
  flex-direction: column;
  padding-block: 14px;
  text-decoration: none;
  display: flex;
}
.bcn-help-bar__panel-item-title {
  transition: color var(--transition-fast, 0.15s ease);
  font-size: 17px;
  line-height: 23px;
}
.bcn-help-bar__panel-link:hover .bcn-help-bar__panel-item-title {
  color: var(--color-content-brand);
}
.bcn-help-bar__panel-item-text {
  color: var(--color-content-default-tertiary);
  font-size: 14px;
  line-height: 21px;
}
.bcn-help-bar__panel-link:focus-visible,
.bcn-help-bar__panel-prev-link:focus-visible,
.bcn-help-bar__panel-all:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 1px;
  border-radius: var(--radius-md);
}
.bcn-help-bar__panel-prev {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
.bcn-help-bar__panel-earlier {
  font-weight: var(--typography-font-weight-medium);
  padding-block: 14px 6px;
}
.bcn-help-bar__panel-prev-list {
  margin: 0 calc(var(--spacing-200) * -1) 14px;
  padding: 0;
  list-style: none;
}
.bcn-help-bar__panel-prev-link {
  padding: 6px var(--spacing-200);
  border-radius: var(--radius-lg);
  color: var(--color-content-default-secondary);
  transition:
    background var(--transition-fast, 0.15s ease),
    color var(--transition-fast, 0.15s ease);
  align-items: flex-start;
  gap: 10px;
  text-decoration: none;
  display: flex;
}
.bcn-help-bar__panel-prev-link .bcn-help-bar__pill--sm {
  margin-block-start: 2px;
}
.bcn-help-bar__panel-prev-link:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-brand);
}
.bcn-help-bar__panel-prev-text {
  font-size: 14px;
  line-height: 20px;
}
.bcn-help-bar__panel-all {
  align-items: center;
  gap: var(--spacing-100);
  border-block-start: 1px solid var(--color-border-default-subtle);
  inline-size: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-brand);
  align-self: flex-start;
  padding-block-start: 14px;
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
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-lg` | `.75rem` | semantic |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
