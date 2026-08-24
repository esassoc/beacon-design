# Component picker (inline beside the H1)

The single-select Component picker that scopes the whole page — map, grids, and activity all read the selected component. It renders as a quiet text+chevron trigger beside the page title (NOT a form-field dropdown) and opens an esa-dropdown-menu over the real component register. The selection persists in browser storage, so returning to the page reopens the last-selected component.

## Key decisions
- Placement is title-adjacent (the PageLayout title-badge slot), because the component IS the page subject — "Site Clearance · <component>" reads as one heading, not a filter.
- The trigger is a borderless text button with a chevron-down, deliberately quieter than the Besley H1 beside it; the esa-dropdown-menu lego supplies the panel, outside-click, and Esc behavior.
- The active component carries the menu item's leading dot as the selected marker; picking one re-scopes every surface, clears the status facets, closes any open drawer (it belonged to the old scope), and refits the map to the component's sites.
- A component with no geo-located work areas (every one but the geotech program in this fixture) renders the map's esa-empty-state, an empty grid, and an empty feed — the page never pretends.

## Gotchas
- Persist the selection (localStorage here; user profile/state in prod) and validate it against the live component list on boot — a stale saved value must fall back to the default, not crash the scope.
- The SSR-rendered counts assume the default component; the boot path re-derives the View-bar counts for the persisted selection before first paint of the bar.

## Done when
- The picker lists the tenant's components with the active one marked; selecting re-scopes map/grid/activity and refits the map; the choice survives a reload; an empty component shows the empty state instead of stale markers.

## Markup
```html
<span class="comp-picker">
  <!-- The lego takes its trigger via the DEFAULT slot. -->
  <esa-dropdown-menu id="comp-menu" position="below-start" width="auto">
    <button
      type="button"
      class="comp-picker__trigger"
      aria-label="Switch component"
      aria-haspopup="menu"
      aria-expanded="false"
      aria-controls="menu"
    >
      <span class="comp-picker__label" id="comp-label"
        >2024-2029 Geotechnical Activities</span
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
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </span>
    </button>
  </esa-dropdown-menu>
</span>
```

## Styles
```css
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
.comp-picker {
  display: inline-flex;
  align-items: center;
  align-self: center;
  min-width: 0;
}
.comp-picker esa-dropdown-menu {
  display: inline-flex;
  align-items: center;
  --type-size-200: 0.875rem;
}
.comp-picker__trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  margin: 0;
  padding: var(--spacing-100) var(--spacing-200);
  border: 0;
  border-radius: var(--radius-200);
  background: transparent;
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  cursor: pointer;
  white-space: nowrap;
}
.comp-picker__trigger:hover {
  background: var(--color-surface-sunken, var(--color-background));
  color: var(--color-text-primary);
}
.comp-picker__trigger .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.wa__section .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-content-default-secondary, #646464);
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
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
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
- `--color-background`: #fafafa _(component)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-surface-sunken`: #efefef _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--font-weight-medium`: 500 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
