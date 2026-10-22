# Changelog (Added / Changed / Fixed)

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![Changelog (Added / Changed / Fixed), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/changelog-added-changed-fixed.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/changelog-added-changed-fixed.phone.png

The release's complete list of changes, grouped Added, Changed, Fixed, in a dense 14px bulleted list below a hairline.

## Key decisions

- Lines that belong to one product area lead with that area as a quiet esa-badge (sm). App-wide lines carry no badge.
- A value as it appears in Beacon (a status or outcome name, written in backticks in the data) renders bold, not monospace: monospace is reserved for code.
- Group heads are 14px semibold labels in normal case, never ornamental micro-labels.

## Gotchas

- Every line starts with its group's verb (Added, Changed, Fixed) so a line read alone still says what happened.
- Customer Announcements only: ESA Internal, Dev-only, TBD items and Jira keys stay out of the data.

## Done when

- Each release shows its three groups in order; area badges align with the first line of text; backticked values read bold.

## Components

- `bcn-release-changelog` (spoke) · `src/components/bcn/BcnReleaseChangelog.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app

## Markup

_20 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-release-changelog" aria-label="Changes in 1.41.0">
  <div class="bcn-release-changelog__group">
    <h3 class="bcn-release-changelog__head typography-label-sm-strong">Added</h3>
    <ul class="bcn-release-changelog__list" role="list">
      <li class="bcn-release-changelog__item typography-body-sm">
        Added a Lists page to every project that holds action lists and commitment lists together,
        with keyword search and an Add button for each kind of list
      </li>
      <li class="bcn-release-changelog__item typography-body-sm">
        Added a page for every list, with editable details, sharing and delete, and views by type,
        by commitment or A to Z
      </li>
      <!-- …and 11 more like this (<li class="bcn-release-changelog__item typography-body-sm">) -->
    </ul>
  </div>
  <div class="bcn-release-changelog__group">
    <h3 class="bcn-release-changelog__head typography-label-sm-strong">Changed</h3>
    <ul class="bcn-release-changelog__list" role="list">
      <li class="bcn-release-changelog__item typography-body-sm">
        Changed Action Lists to Lists: the Action Lists entry in the navigation is gone on every
        tenant
      </li>
      <li class="bcn-release-changelog__item typography-body-sm">
        Changed where evidence is associated: one dialog on the evidence record’s page replaces
        Associate To Actions and the Associated Work Areas picker
      </li>
      <!-- …and 5 more like this (<li class="bcn-release-changelog__item typography-body-sm">) -->
    </ul>
  </div>
  <div class="bcn-release-changelog__group">
    <h3 class="bcn-release-changelog__head typography-label-sm-strong">Fixed</h3>
    <ul class="bcn-release-changelog__list" role="list">
      <li class="bcn-release-changelog__item typography-body-sm">
        Fixed deleting a component; the dialog now asks for the component’s name and shows what is
        removed and what is kept
      </li>
      <li class="bcn-release-changelog__item typography-body-sm">
        Fixed the Components link showing in a project’s navigation when Components are turned off
      </li>
      <!-- …and 4 more like this (<li class="bcn-release-changelog__item typography-body-sm">) -->
    </ul>
  </div>
</section>
```

## Styles

```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
.bcn-release-changelog {
  gap: var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  padding-block-start: var(--spacing-500);
  display: flex;
}
.bcn-release-changelog__head {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-release-changelog__list {
  margin: var(--spacing-200) 0 0;
  gap: var(--spacing-100);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-release-changelog__item {
  color: var(--color-content-default);
  padding-inline-start: var(--spacing-600);
  position: relative;
}
.bcn-release-changelog__item:before {
  content: "";
  border-radius: var(--radius-full);
  background: var(--color-border-default);
  block-size: 5px;
  inline-size: 5px;
  position: absolute;
  inset-block-start: 0.6lh;
  inset-inline-start: var(--spacing-200);
  translate: 0 -50%;
}
.bcn-release-changelog__item .esa-badge {
  vertical-align: 0.0625rem;
  margin-inline-end: var(--spacing-150);
}
.bcn-release-changelog__item strong {
  font-weight: var(--typography-font-weight-semibold);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
