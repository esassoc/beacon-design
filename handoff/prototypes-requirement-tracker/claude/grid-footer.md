# Grid footer

Beacon's standard grid footer: "Download as CSV" (download glyph) on the left, "Total Records: N" on the right, with "Filtered Records: N" appearing only when a search/filter narrows the set. Attaches flush under the grid to complete the rounded card.

## Key decisions
- Download exports the current grid via api.exportDataAsCsv().
- Total Records always shows the full row count; Filtered Records appears only while a filter is active — the gap between them is the at-a-glance "how much am I looking at".
- The footer border has no top edge and bottom-rounded corners because the grid wrapper is radius "4px 4px 0 0" — the two form one continuous card.

## Gotchas
- Record counts must update from the grid's onFilterChanged (async), not from the input handler.
- Footer belongs to the Grid pane only.

## Done when
- Total Records: 130 on load; searching shows Filtered Records: N; Download exports a CSV.

## Markup
```html
<div class="table-footer">
  <span id="tt-download"
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
    Total Records: <span id="tt-total">130</span>
    <span id="tt-filtered" class="filtered-rows-count" hidden=""></span>
  </div>
</div>
```

## Styles
```css
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-height: var(--form-height-xs, 28px);
  --_btn-padding-x: var(--form-padding-x-xs, 8px);
  --_btn-font-size: var(--form-font-size-xs, 11px);
  --_btn-radius: var(--form-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-height: var(--form-height-lg, 48px);
  --_btn-padding-x: var(--form-padding-x-lg, 20px);
  --_btn-font-size: var(--form-font-size-lg, 16px);
  --_btn-radius: var(--form-radius-lg, 8px);
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--sm.esa-button--icon-only .esa-button__native {
  height: var(--form-height-sm, 32px);
  padding-block: 0;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--color-secondary {
  --_accent: var(--color-secondary);
  --_accent-hover: var(--color-secondary-hover);
  --_on: var(--color-secondary-on-fill, var(--color-gray-12));
  --_accent-text: var(--color-secondary-strong);
}
.esa-button--color-danger {
  --_accent: var(--color-danger);
  --_accent-hover: var(--color-danger-hover);
  --_accent-text: var(--color-danger-strong);
}
.esa-button--color-success {
  --_accent: var(--color-success);
  --_accent-hover: var(--color-success-hover);
  --_on: var(--color-success-on-fill);
  --_accent-text: var(--color-success-strong);
}
.esa-button--color-warning {
  --_accent: var(--color-warning);
  --_accent-hover: var(--color-warning-hover);
  --_on: var(--button-on-warning, var(--color-gray-12));
  --_accent-text: var(--color-warning-strong);
}
.esa-button--color-info {
  --_accent: var(--color-info);
  --_accent-hover: var(--color-info-hover);
  --_accent-text: var(--color-info-strong);
}
.esa-button--color-ai {
  --_accent: var(--color-ai);
  --_accent-hover: var(--color-ai-hover);
  --_accent-text: var(--color-ai-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled) {
  background: var(--_accent-hover);
}
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
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
    var(--color-surface-sunken, #efefef) 45%,
    var(--color-surface, #fff)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-strong, #d4d4d4);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
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
.esa-button--color-ghost .esa-button__native:hover:not(:disabled),
.esa-button--color-ghost.esa-button--active .esa-button__native {
  background: var(--color-surface-sunken, #efefef);
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
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: 0;
  width: var(--_btn-height);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  visibility: hidden;
  width: 0;
  overflow: hidden;
}
.esa-button__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: esa-button-spin 0.6s linear infinite;
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
.bcn-disc__head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-evidence-card__lead .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-tertiary);
  transition: transform 0.15s ease;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.page-layout__title h1 .esa-icon {
  color: var(--color-secondary) !important;
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
.bcn-list-link .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.bcn-reqref__ext .esa-icon {
  --_icon-size: 12px;
  opacity: 0.75;
}
.bcn-reqref__footer .esa-button--color-ghost .esa-button__native {
  color: var(--color-secondary);
}
.bcn-reqref__footer .esa-button--color-ghost .esa-button__native:hover:not(:disabled) {
  color: var(--color-secondary-hover);
  background: color-mix(in srgb, var(--color-secondary) 10%, transparent);
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
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-icon-link {
  --_il-font: var(--icon-link-font-size-md, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--icon-link-gap, var(--spacing-150, 6px));
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--_il-font);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.esa-icon-link--sm {
  --_il-font: var(--icon-link-font-size-sm, 0.875rem);
}
.esa-icon-link--regular {
  font-weight: var(--font-weight-regular, 400);
}
.esa-icon-link--medium {
  font-weight: var(--font-weight-medium, 500);
}
.esa-icon-link--semibold {
  font-weight: var(--font-weight-semibold, 600);
}
.esa-icon-link:hover {
  text-decoration: underline;
}
.esa-icon-link:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--radius-100, 4px);
}
.esa-icon-link.is-active {
  font-weight: var(--font-weight-semibold, 600);
}
.esa-icon-link__label {
  display: inline-block;
}
summary.esa-icon-link {
  list-style: none;
}
summary.esa-icon-link::-webkit-details-marker {
  display: none;
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
- `--button-on-warning`: #ffffff _(component)_
- `--color-ai`: #699cc6 _(semantic)_
- `--color-ai-hover`: #4c75a9 _(semantic)_
- `--color-ai-strong`: #7d5e54 _(semantic)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-hover`: #dc3e42 _(semantic)_
- `--color-danger-strong`: #ce2c31 _(semantic)_
- `--color-gray-12`: #202020 _(primitive)_
- `--color-info`: #228be6 _(semantic)_
- `--color-info-hover`: #0588f0 _(semantic)_
- `--color-info-strong`: #0d74ce _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-hover`: #0a6562 _(semantic)_
- `--color-secondary-on-fill`: #203c25 _(semantic)_
- `--color-secondary-strong`: #2a7e3b _(semantic)_
- `--color-success`: #2e7571 _(semantic)_
- `--color-success-hover`: #b0e64c _(semantic)_
- `--color-success-on-fill`: #37401c _(semantic)_
- `--color-success-strong`: #5c7c2f _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--color-warning-hover`: #ffba18 _(semantic)_
- `--color-warning-strong`: #ab6400 _(semantic)_
- `--focus-ring-color`: #65ba74 _(primitive)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-lg`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(component)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--form-padding-x-lg`: 1rem _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-padding-x-xs`: .5rem _(component)_
- `--form-radius-lg`: .25rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--form-radius-xs`: .25rem _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-link-font-size-md`: 1rem _(component)_
- `--icon-link-font-size-sm`: .875rem _(component)_
- `--icon-link-gap`: .375rem _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
