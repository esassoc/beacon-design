# Component data panels

The four side panels themselves. Component info opens straight into its editable form and ends in a delete danger zone; milestones is the date-override surface; sources and layers are read-only lists.

## Key decisions
- A milestone row shows BOTH the project's estimated date and this component's override, because an override only means anything against what it overrides.
- Milestones edit IN THE ROW rather than in a stacked child drawer. Every key here resolves to an inline form or a read-only list, so there is no per-row Edit to open a drawer with — and a second drawer holding one date field is ceremony. The project panel's stacked-drawer pattern still applies if a future key needs it.
- A row with no override reads as "Inherited" — a quiet word, not a colored border and not an ornamental micro-label.
- No key has an Add: a component cannot create a project milestone, assign itself a source, or author a layer.

## Gotchas
- esa-select takes its selection only as a property, so an SSR'd select cannot carry its initial value in markup — every consumer needs a JS pass.
- esa-switch-toggle has no accessible-name hook other than a visible label, so a per-row visibility switch either repeats "Visible" on every row or ships unnamed. Worked around by clipping the exposed label part; the name stays in the a11y tree.
- Footer actions are right-aligned with Save LEFT of Cancel — Windows order, house rule.

## Done when
- Milestone rows show both dates; setting an override updates the header count; clearing it restores "Inherited"; component info saves and its danger zone confirms before deleting; sources and layers offer no Add.

## Markup
```html
<section
  class="bcn-cdp"
  data-cdp-body="component-info"
  data-cdp-heading="Component info"
  hidden=""
>
  <div class="bcn-cdp__form">
    <esa-text-field
      label="Name"
      value="Bouldin Island Launch Shaft"
      required=""
      size="md"
    ></esa-text-field>
    <esa-select
      label="Status"
      options='[{"label":"Active","value":"Active"},{"label":"On Hold","value":"On Hold"},{"label":"Complete","value":"Complete"}]'
      data-cdp-select-value="Active"
      required="true"
      size="md"
    ></esa-select>
    <div class="bcn-cdp__pair">
      <esa-date-picker
        label="Start date"
        value="2025-09-02"
        required="true"
        size="md"
      ></esa-date-picker>
      <esa-date-picker
        label="Expected end date"
        value="2029-11-30"
        size="md"
      ></esa-date-picker>
    </div>
    <esa-textarea
      label="Description"
      value="Tunnel launch shaft — Bouldin Island"
      rows="3"
      size="md"
    ></esa-textarea>
    <h3 class="bcn-cdp__group-title">Custom fields</h3>
    <div class="bcn-cdp__form">
      <esa-text-field
        label="Reach"
        value="Central Delta — Reach 3"
        size="md"
      ></esa-text-field
      ><esa-text-field
        label="Lead discipline"
        value="Geotechnical"
        size="md"
      ></esa-text-field
      ><esa-text-field label="Shaft type" value="Launch" size="md"></esa-text-field>
    </div>
  </div>
  <div class="bcn-cdp__danger">
    <section class="bcn-danger-zone" aria-labelledby="bcn-danger-zone-1">
      <h2 class="bcn-danger-zone__heading" id="bcn-danger-zone-1">Danger Zone</h2>
      <div class="bcn-danger-zone__box">
        <div class="bcn-danger-zone__item">
          <div class="bcn-danger-zone__text">
            <h3 class="bcn-danger-zone__title">Delete this component</h3>
            <p class="bcn-danger-zone__desc">
              Removes the component, its work areas, its milestone dates, and its
              commitment applicability decisions from Beacon.
            </p>
          </div>
          <div class="bcn-danger-zone__action">
            <span data-cdp-delete=""
              ><span
                class="esa-button esa-button--color-danger esa-button--appearance-soft esa-button--md"
              >
                <button class="esa-button__native" type="button">
                  <span class="esa-button__label"> Delete component </span>
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</section>
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
.bcn-cdp {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-cdp[hidden] {
  display: none;
}
.bcn-cdp__foot {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.bcn-cdp__foot-actions {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-cdp__foot-actions[hidden] {
  display: none;
}
.bcn-cdp__rows {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-cdp__row {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
}
.bcn-cdp__row--inline {
  flex-direction: row;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-cdp__row-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-cdp__row-main {
  display: flex;
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  flex: 1;
}
.bcn-cdp__row-name {
  flex: 1;
  min-width: 0;
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-cdp__row-sub {
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
  line-height: var(--line-height-tight);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-cdp__row-icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-text-muted);
}
p.bcn-cdp__row-sub {
  margin: 0;
  white-space: normal;
}
.bcn-cdp__state {
  flex-shrink: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-cdp__state[hidden],
.bcn-cdp__revert[hidden] {
  display: none;
}
.bcn-cdp__revert {
  flex-shrink: 0;
}
.bcn-cdp__code {
  flex-shrink: 0;
  padding: 1px var(--spacing-200);
  font-family: var(--font-mono);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-100);
}
.bcn-cdp__link-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  text-decoration: none;
}
.bcn-cdp__link-row:hover {
  border-color: var(--color-border-strong);
}
.bcn-cdp__row--inline esa-switch-toggle::part(label) {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.bcn-cdp__link-row:hover .bcn-cdp__row-name {
  color: var(--color-primary);
}
.bcn-cdp__count {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-cdp__lede,
.bcn-cdp__zone {
  padding-bottom: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-light);
}
.bcn-cdp__zone {
  padding-bottom: 0;
  padding-top: var(--spacing-300);
  border-bottom: 0;
  border-top: 1px solid var(--color-border-light);
}
.bcn-cdp__zone-link {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-cdp__zone-link:hover {
  color: var(--color-primary-hover);
}
.bcn-cdp__form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-cdp__pair {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  gap: var(--spacing-300) var(--spacing-400);
}
.bcn-cdp__group-title {
  margin: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-cdp__danger {
  padding-top: var(--spacing-500);
  margin-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-light);
}
.bcn-danger-zone {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-danger-zone__heading {
  margin: 0;
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-danger-zone__box {
  padding: var(--spacing-500);
  border: 1px solid var(--color-danger);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-danger-zone__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
}
.bcn-danger-zone__text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  min-width: 0;
}
.bcn-danger-zone__title {
  margin: 0;
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-danger-zone__desc {
  margin: 0;
  font-size: var(--form-font-size-md);
  color: var(--color-text-secondary);
}
.bcn-danger-zone__action {
  flex-shrink: 0;
}
```

## Tokens
- `--button-on-warning`: #ffffff _(component)_
- `--color-ai`: #699cc6 _(semantic)_
- `--color-ai-hover`: #4c75a9 _(semantic)_
- `--color-ai-strong`: #7d5e54 _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
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
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--color-warning-hover`: #ffba18 _(semantic)_
- `--color-warning-strong`: #ab6400 _(semantic)_
- `--focus-ring-color`: #65ba74 _(primitive)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
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
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
