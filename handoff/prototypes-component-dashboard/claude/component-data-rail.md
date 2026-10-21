# Component data rail

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

![Component data rail, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-data-rail.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-data-rail.phone.png

The quiet utility rail: four links that open component-data side panels via the ?data=<key> URL contract, the same contract the project dashboard established.

## Key decisions

- The prototype rail has four keys: component info, milestones, source documents, footprint layers. Production already ships more (component-species-panel and component-commitments-panel among them), whose species and sources are derived from applied commitments; keep those. Setup's answers are a different thing and must not be shown as, or written into, those derived lists.
- Milestones is the only genuinely editable one, matching production, where it is a component's single edit tab.
- Source documents and footprint layers are read-only here. Which documents apply is chosen in Component Setup; layers are managed in the Spatial Library zone.

## Gotchas

- Panel state must ride the URL so panels are bookmarkable and the browser Back button closes them — honored on first load AND on popstate, not just on click.

## Done when

- Each row opens its panel; ?data=<key> deep-links to an open panel; Back closes it.

## Components

- `bcn-lrc` (spoke) · `src/components/bcn/BcnLinkRowCard.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_2 repeated elements are collapsed in the markup below; the comments say where._

```html
<ul class="bcn-lrc">
  <li>
    <a class="bcn-lrc__row" href="?data=component-info"
      ><span class="bcn-lrc__label">Component info</span
      ><span class="bcn-lrc__right"
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
    <a class="bcn-lrc__row" href="?data=milestones"
      ><span class="bcn-lrc__label">Milestones</span
      ><span class="bcn-lrc__right"
        ><span class="bcn-lrc__meta">3 of 12</span
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
  <!-- …and 2 more like this (<li>) -->
</ul>
```

## Styles

```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
}
.bcn-lrc {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-lrc__row {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) 0;
  color: inherit;
  text-decoration: none;
  display: flex;
}
.bcn-lrc li + li .bcn-lrc__row {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-lrc__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  min-width: 0;
}
.bcn-lrc__row:hover .bcn-lrc__label {
  color: var(--color-background-brand);
}
.bcn-lrc__right {
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-lrc__meta {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-lrc__row:hover .bcn-lrc__chev {
  color: var(--color-background-brand);
}
.bcn-sw__head .esa-icon {
  color: var(--color-content-default-secondary);
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
