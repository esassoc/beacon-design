# Title + component switcher

The H1 "Obligations" with the standard project-component switcher inline beside it, the same bcn-component-picker the Monitoring Portal uses.

## Key decisions
- The switcher is the page's ONLY component scope. The filter row's Component picker and the component/implementation rows under each obligation card were both cut as duplicates of it (Andy, 2026-09-23).
- The choice is one session-wide value (localStorage beacon.activeComponent), shared with Monitoring and Reporting, not per page.

## Gotchas
- In the prototype the switcher does not yet filter the records: it offers the geotech register while the feed's records carry the 7 DCP construction components. In prod the records must be keyed to the same component register the switcher offers.

## Done when
- Changing the component re-scopes every view to records on that component.

## Markup
```html
<section class="page-layout__title">
  <div class="page-layout__title-main">
    <h1>
      <span class="esa-icon esa-icon--lg" aria-hidden="true"
        ><svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
          ></path>
          <path d="m9 12 2 2 4-4"></path></svg></span
      >Obligations
    </h1>
    <span
      ><span
        class="bcn-component-picker"
        data-component-picker=""
        data-components='["2024-2029 Geotechnical Activities","2027 Geotechnical Activities - Covered under ITP","AEM Surveys - Fall 2026","Compensatory Mitigation 1 - I-5 Ponds"]'
        data-storage-key="beacon.activeComponent"
        data-default="2024-2029 Geotechnical Activities"
        ><esa-dropdown-menu
          position="below-start"
          data-component-picker-menu="true"
          width="auto"
          ><button
            type="button"
            class="bcn-component-picker__trigger"
            aria-label="Switch component"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-controls="menu"
          >
            <span class="bcn-component-picker__label" data-component-picker-label=""
              >2024-2029 Geotechnical Activities</span
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
                <path d="m6 9 6 6 6-6"></path></svg
            ></span></button></esa-dropdown-menu
      ></span>
      <script
        type="module"
        src="/beacon-design/_astro/BcnComponentPicker.astro_astro_type_script_index_0_lang.BkuXXS3g.js"
      ></script
    ></span>
  </div>
</section>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.bcn-component-picker {
  align-self: center;
  align-items: center;
  min-width: 0;
  display: inline-flex;
}
.bcn-component-picker esa-dropdown-menu {
  --font-size-200: 0.875rem;
  align-items: center;
  display: inline-flex;
}
.bcn-component-picker__trigger {
  align-items: center;
  gap: var(--spacing-150);
  min-height: 28px;
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--radius-200);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  cursor: pointer;
  white-space: nowrap;
  background: 0 0;
  border: 0;
  margin: 0;
  display: inline-flex;
}
.bcn-component-picker__trigger:hover {
  background: var(--color-background-elevation-sunken, var(--color-background-default));
  color: var(--color-content-default);
}
.bcn-component-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
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
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title {
  border-bottom: 1px solid var(--bcn-gray-200);
  padding: var(--spacing-500) 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.page-layout__title-main {
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  display: flex;
}
.page-layout__title h1 {
  align-items: center;
  gap: var(--spacing-300);
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-500);
  color: var(--bcn-gray-1000);
  margin: 0;
  display: flex;
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-500`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
