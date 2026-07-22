# Data tab — filter bar

The Data tab's filter bar, ported from the requirement-tracker idiom: a View toggle that PIVOTS the grid between Permits and Segments, a keyword search, and Status + Level filter dropdowns in an esa-filter-container, with a clear-all. It drives whichever grid is active.

## Key decisions
- View is an esa-button-toggle pivot (Permits | Segments) that swaps the visible grid pane, not two separate screens — same filter bar serves both.
- Filters are esa-filter-dropdown (multiple) inside esa-filter-container with an esa-filter-clear-button — the shared Beacon filter-bar composition, not bespoke selects.
- Search has its own inline clear (esa-icon-button x), shown only when there is a query.
- The Level dropdown is wrapped (#flt-level-wrap) so it can be hidden in the Segments pivot where agency level is not a column.

## Gotchas
- This whole tab is LAZY: the AG Grids are created only when the Data tab is first activated (ensureGrids). The filter bar is light-DOM markup so it exists earlier, but the grids it controls do not — capture/recipes must activate the tab first.
- The pivot must re-point the filter bar at the active grid (status/level options differ between permits and segments); do not keep two stale filter states.

## Done when
- View toggles the grid between Permits and Segments; Status/Level dropdowns and search filter the active grid; clear resets all; search-clear shows only with a query.

## Markup
```html
<div class="bcn-filterbar">
  <div class="bcn-filterbar__top">
    <div class="bcn-filterbar__group">
      <span class="bcn-filterbar__label">View</span>
      <esa-button-toggle id="pivot-toggle" value="permits" size="md"></esa-button-toggle>
    </div>
    <div class="bcn-filterbar__search">
      <esa-text-field
        id="pt-search"
        placeholder="Search permits…"
        size="md"
      ></esa-text-field>
      <span id="pt-search-clear" hidden=""
        ><button
          class="esa-icon-button esa-icon-button--sm"
          type="button"
          aria-label="Clear search"
          title="Clear search"
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </span>
        </button>
      </span>
    </div>
  </div>
  <div class="bcn-filterbar__bottom">
    <span class="bcn-filterbar__label">Filters</span>
    <div
      class="esa-filter-container"
      style="
        --_filter-container-gap: var(--filter-container-gap, var(--spacing-300, 0.75rem));
        --_filter-container-row-gap: var(--spacing-200, 0.5rem);
      "
    >
      <esa-filter-dropdown
        id="flt-status"
        label="Status"
        multiple=""
        size="sm"
      ></esa-filter-dropdown>
      <span id="flt-level-wrap"
        ><esa-filter-dropdown
          id="flt-level"
          label="Level"
          multiple=""
          size="sm"
        ></esa-filter-dropdown
      ></span>
    </div>
    <span id="pt-clear-filters" class="bcn-filterbar__clear"
      ><button
        class="esa-filter-clear-button"
        type="button"
        data-esa-filter-clear=""
        aria-label="Clear all filters"
      >
        <svg
          class="esa-filter-clear-button__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
          <path d="m22 3-5 5"></path>
          <path d="m17 3 5 5"></path></svg
        ><span class="esa-filter-clear-button__label">Clear all</span>
      </button></span
    >
  </div>
</div>
```

## Styles
```css
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.pd__section-head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.bcn-filterbar {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  margin-bottom: var(--spacing-400);
}
.bcn-filterbar__top {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
}
.bcn-filterbar__group {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-filterbar__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-filterbar__search {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  min-width: 300px;
}
.bcn-filterbar__search esa-text-field {
  flex: 1;
}
.bcn-filterbar__bottom {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  border-top: 1px solid var(--color-border);
  flex-wrap: wrap;
}
.bcn-filterbar__clear {
  margin-left: auto;
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
.esa-filter-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
}
.esa-filter-clear-button {
  --_clear-text: var(--filter-clear-color, var(--color-primary-strong, #3a7c59));
  --_clear-text-hover: var(
    --filter-clear-color-hover,
    var(--color-primary-strong, #3a7c59)
  );
  --_clear-font-size: var(--type-size-150, 0.875rem);
  --_clear-icon-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border: none;
  border-radius: var(--radius-100, 0.25rem);
  background: transparent;
  color: var(--_clear-text);
  font-family: var(--font-sans, inherit);
  font-size: var(--_clear-font-size);
  font-weight: var(--font-weight-medium, 450);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--filter-clear-color`: #7c7c7c _(component)_
- `--filter-clear-color-hover`: #ce2c31 _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
