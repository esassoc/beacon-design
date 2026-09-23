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
    ></esa-text-field
    ><esa-select
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
      ></esa-date-picker
      ><esa-date-picker
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
                class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--md"
                ><button class="esa-button__native typography-microcopy-md" type="button">
                  <span class="esa-button__label">Delete component</span>
                </button></span
              ></span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</section>
```

## Styles
```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.bcn-cdp {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-cdp[hidden] {
  display: none;
}
.bcn-cdp__foot {
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
.bcn-cdp__foot-actions {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-cdp__foot-actions[hidden] {
  display: none;
}
.bcn-cdp__rows {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-cdp__row {
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.bcn-cdp__row--inline {
  align-items: center;
  gap: var(--spacing-300);
  flex-direction: row;
}
.bcn-cdp__row-head {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-cdp__row-main {
  flex-direction: column;
  flex: 1;
  gap: 1px;
  min-width: 0;
  display: flex;
}
.bcn-cdp__row-name {
  min-width: 0;
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: var(--line-height-tight);
  flex: 1;
}
.bcn-cdp__row-sub {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  line-height: var(--line-height-tight);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-cdp__row-icon {
  color: var(--bcn-content-muted);
  flex-shrink: 0;
  display: inline-flex;
}
p.bcn-cdp__row-sub {
  white-space: normal;
  margin: 0;
}
.bcn-cdp__state {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-cdp__state[hidden],
.bcn-cdp__revert[hidden] {
  display: none;
}
.bcn-cdp__revert {
  flex-shrink: 0;
}
.bcn-cdp__code {
  padding: 1px var(--spacing-200);
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  flex-shrink: 0;
}
.bcn-cdp__link-row {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  text-decoration: none;
  display: flex;
}
.bcn-cdp__link-row:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-cdp__row--inline esa-switch-toggle::part(label) {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.bcn-cdp__link-row:hover .bcn-cdp__row-name {
  color: var(--color-background-brand);
}
.bcn-cdp__count {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-cdp__lede,
.bcn-cdp__zone {
  padding-bottom: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-cdp__zone {
  padding-bottom: 0;
  padding-top: var(--spacing-300);
  border-bottom: 0;
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cdp__zone-link {
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  text-decoration: none;
  display: inline-flex;
}
.bcn-cdp__zone-link:hover {
  color: var(--color-background-brand-hover);
}
.bcn-cdp__form {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-cdp__pair {
  align-items: end;
  gap: var(--spacing-300) var(--spacing-400);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-cdp__group-title {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-cdp__danger {
  padding-top: var(--spacing-500);
  margin-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
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
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.bcn-danger-zone {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-danger-zone__heading {
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-danger-zone__box {
  padding: var(--spacing-500);
  border: 1px solid var(--color-background-utility-danger);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
}
.bcn-danger-zone__item {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  display: flex;
}
.bcn-danger-zone__text {
  gap: var(--spacing-100);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-danger-zone__title {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-danger-zone__desc {
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-danger-zone__action {
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
