# Data tab — table footer

The grid footer (Beacon's standard pattern): "Download as CSV" on the left, a live "Total Records: {n}" on the right with a separate filtered-count when a filter is narrowing the set.

## Key decisions
- Download CSV (esa-button ghost/outline, download icon) exports the ACTIVE grid (permits or segments) honoring the current filter — what you see is what you export.
- Total vs filtered are two distinct counts: total is the full set, the filtered count appears only when filters are active (the Beacon convention).

## Gotchas
- The filtered count must hide when no filter is active (#pt-filtered[hidden]) — showing "N of N" always reads as a bug.
- CSV export follows the active pivot + filters; do not always export permits.

## Done when
- Footer shows total records, adds a filtered count only when filtering, and "Download as CSV" exports the active, filtered grid.

## Markup
```html
<div class="table-footer">
  <span id="pt-download"
    ><span
      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
    >
      <button class="esa-button__native" type="button">
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
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
        </span>
        <span class="esa-button__label"> Download as CSV </span>
      </button>
    </span>
  </span>
  <div class="row-count-data">
    Total Records: <span id="pt-total">15</span>
    <span id="pt-filtered" class="filtered-rows-count" hidden=""></span>
  </div>
</div>
```

## Styles
```css
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
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
.pd__section-head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.table-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  padding: var(--spacing-200) var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-top: 0;
  border-radius: 0 0 var(--radius-100) var(--radius-100);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
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
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #43608a);
  --_accent-hover: var(--color-primary-hover, #39506f);
  --_on: var(--color-text-inverse, #ffffff);
  display: inline-block;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
