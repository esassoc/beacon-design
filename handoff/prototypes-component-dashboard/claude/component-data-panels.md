# Component data panels

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

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

- Milestone rows show both dates; setting an override updates the header count; clearing it restores "Inherited"; component info saves and its danger zone confirms before deleting; sources and layers offer no Add. Saving new dates in component info re-checks the setup's season dismissals.

## Components

- `bcn-cdp` (spoke) · `src/components/bcn/BcnComponentDataPanel.astro`
- `bcn-danger-zone` (spoke) · `src/components/bcn/BcnDangerZone.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-date-picker` (hub) · `packages/ecology/src/components/esa-date-picker.ts`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

```html
<section class="bcn-cdp" data-cdp-body="component-info" data-cdp-heading="Component info" hidden="">
  <div class="bcn-cdp__form">
    <esa-text-field
      label="Name"
      value="Bouldin Island Geotechnical Exploration"
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
        value="2026-10-05"
        required="true"
        data-cdp-date="start"
        size="md"
      ></esa-date-picker
      ><esa-date-picker
        label="Expected end date"
        value="2027-01-29"
        data-cdp-date="end"
        size="md"
      ></esa-date-picker>
    </div>
    <esa-textarea
      label="Description"
      value="Geotechnical exploration — Bouldin Island"
      rows="3"
      size="md"
    ></esa-textarea>
    <h3 class="bcn-cdp__group-title">Custom fields</h3>
    <div class="bcn-cdp__form">
      <esa-text-field label="Reach" value="Central Delta — Reach 3" size="md"></esa-text-field
      ><esa-text-field label="Lead discipline" value="Geotechnical" size="md"></esa-text-field
      ><esa-text-field
        label="Exploration program"
        value="Phase 2 borings and CPTs"
        size="md"
      ></esa-text-field>
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
              Removes the component, its work areas, its milestone dates, and its commitment
              applicability decisions from Beacon.
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
.bcn-cdp {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-cdp[hidden] {
  display: none;
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
@media (width<=560px) {
  .bcn-cdp__pair {
    grid-template-columns: 1fr;
  }
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
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
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
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
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
.esa-button__label {
  white-space: nowrap;
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
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
@media (width<=640px) {
  .bcn-danger-zone__item {
    flex-direction: column;
    align-items: flex-start;
  }
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
