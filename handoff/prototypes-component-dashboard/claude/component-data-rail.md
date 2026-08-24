# Component data rail

The quiet utility rail: four links that open component-data side panels via the ?data=<key> URL contract, the same contract the project dashboard established.

## Key decisions
- FOUR keys, not six: component info, milestones, source documents, footprint layers. Species, seasons and construction activities are project-level. Offering component copies would imply an override the data model does not have — this asymmetry is deliberate and a future reader should not "fix" it.
- Milestones is the only genuinely editable one, matching production, where it is a component's single edit tab.
- Source documents and footprint layers are read-only here. Sources reach a component through commitments, not by assignment; layers are managed in the Spatial Library zone.

## Gotchas
- Panel state must ride the URL so panels are bookmarkable and the browser Back button closes them — honored on first load AND on popstate, not just on click.

## Done when
- Each row opens its panel; ?data=<key> deep-links to an open panel; Back closes it; no species / seasons / construction-activity row exists.

## Markup
```html
<ul class="bcn-lrc">
  <li>
    <a class="bcn-lrc__row" href="?data=component-info">
      <span class="bcn-lrc__label">Component info</span>
      <span class="bcn-lrc__right">
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </span>
    </a>
  </li>
  <li>
    <a class="bcn-lrc__row" href="?data=milestones">
      <span class="bcn-lrc__label">Milestones</span>
      <span class="bcn-lrc__right">
        <span class="bcn-lrc__meta">3 of 12</span>
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </span>
    </a>
  </li>
  <li>
    <a class="bcn-lrc__row" href="?data=sources">
      <span class="bcn-lrc__label">Source documents</span>
      <span class="bcn-lrc__right">
        <span class="bcn-lrc__meta">3</span>
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </span>
    </a>
  </li>
  <li>
    <a class="bcn-lrc__row" href="?data=layers">
      <span class="bcn-lrc__label">Footprint layers</span>
      <span class="bcn-lrc__right">
        <span class="bcn-lrc__meta">2 of 4</span>
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
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </span>
    </a>
  </li>
</ul>
```

## Styles
```css
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
.bcn-lrc {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.bcn-lrc__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
  padding: var(--spacing-250) 0;
  text-decoration: none;
  color: inherit;
}
.bcn-lrc li + li .bcn-lrc__row {
  border-top: 1px solid var(--color-border-light);
}
.bcn-lrc__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  min-width: 0;
}
.bcn-lrc__row:hover .bcn-lrc__label {
  color: var(--color-primary);
}
.bcn-lrc__right {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
}
.bcn-lrc__meta {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-lrc__chev {
  color: var(--color-text-muted);
}
.bcn-lrc__row:hover .bcn-lrc__chev {
  color: var(--color-primary);
}
.bcn-lrc__footer {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-250);
  border-top: 1px solid var(--color-border-light);
  width: 100%;
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-lrc__footer:hover {
  color: var(--color-primary-hover);
}
.bcn-sw__head .esa-icon {
  color: var(--color-text-secondary);
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
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
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
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
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border-light`: #efefef _(component)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-primary-hover`: #00474f _(component)_
- `--color-text-muted`: #7c7c7c _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(component)_
