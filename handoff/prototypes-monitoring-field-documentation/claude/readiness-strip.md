# Readiness strip

Notifications & Daily Logs · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/field-documentation/

![Readiness strip, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-field-documentation/claude/readiness-strip.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-field-documentation/claude/readiness-strip.phone.png

Four campaign-wide counts: drill holes with a missing document, missing documents, documents received late, and documents due in the next 5 working days.

## Key decisions

- Only the two missing counts turn red, and only when above zero.
- "Next 5 working days" uses the same working-day calendar as the due dates (weekends plus the client holiday list).

## Done when

- Counts equal the sums of the matrix below with no filters applied.

## Components

- `bcn-fd-readiness` (spoke) · `src/components/bcn/BcnFieldDocReadiness.astro`
- `esa-stat` (hub) · `packages/ecology/src/components/esa-stat.astro`

## Markup

_1 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="switcher bcn-fd-readiness" style="--switcher-threshold: 40rem">
  <div class="bcn-fd-readiness__stat is-alert">
    <div class="esa-stat">
      <div class="esa-stat__value typography-display-sm">30</div>
      <div class="esa-stat__label typography-label-md">Drill holes missing documents</div>
      <div class="esa-stat__sub typography-body-sm">of 59 scheduled</div>
    </div>
  </div>
  <div class="bcn-fd-readiness__stat is-alert">
    <div class="esa-stat">
      <div class="esa-stat__value typography-display-sm">45</div>
      <div class="esa-stat__label typography-label-md">Missing documents</div>
    </div>
  </div>
  <div class="bcn-fd-readiness__stat">
    <div class="esa-stat">
      <div class="esa-stat__value typography-display-sm">18</div>
      <div class="esa-stat__label typography-label-md">Documents received late</div>
    </div>
  </div>
  <!-- …and 1 more like this (<div class="bcn-fd-readiness__stat is-alert">) -->
</div>
```

## Styles

```css
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.bcn-fd-readiness__stat {
  padding-inline: var(--spacing-200);
}
.bcn-fd-readiness__stat.is-alert {
  --stat-value-color: var(--color-content-utility-danger);
}
.bcn-fd-readiness__stat + .bcn-fd-readiness__stat {
  border-left: 1px solid var(--color-border-default);
  padding-left: var(--spacing-500);
}
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-content-default, #202020));
  --_stat-value-font: var(
    --typography-font-family-display,
    var(
      --typography-display-sm-font-family,
      var(--typography-font-family-display, "DM Sans", sans-serif)
    )
  );
  --_stat-value-size: var(
    --stat-value-size,
    var(--typography-display-sm-font-size, var(--font-size-700, 2.25rem))
  );
  --_stat-value-weight: var(
    --typography-font-weight-bold,
    var(--typography-display-sm-font-weight, var(--typography-font-weight-bold, 650))
  );
  --_stat-label-color: var(--color-content-default-secondary, #646464);
  --_stat-label-size: var(
    --font-size-200,
    var(--typography-label-md-font-size, var(--font-size-200, 0.9375rem))
  );
  --_stat-label-weight: var(
    --typography-font-weight-medium,
    var(--typography-label-md-font-weight, var(--typography-font-weight-medium, 500))
  );
  --_stat-sub-color: var(--color-content-default-secondary, #646464);
  --_stat-sub-size: var(
    --font-size-150,
    var(--typography-body-sm-font-size, var(--font-size-150, 0.875rem))
  );
  --_stat-accent-color: var(--stat-accent-color, var(--color-content-brand, #2a7e3b));
  --_stat-gap: var(--spacing-050, 0.125rem);
  gap: var(--_stat-gap);
  background: 0 0;
  flex-direction: column;
  display: flex;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  color: var(--_stat-sub-color);
}
.switcher {
  --gap: var(--spacing-400, 1rem);
  --switcher-threshold: 32rem;
  flex-wrap: wrap;
  display: flex;
}
.switcher > * {
  flex-grow: 1;
  flex-basis: calc((var(--switcher-threshold) - 100%) * 999);
}
.switcher {
  gap: var(--gap);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--gap` | `1rem` | component |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--stat-accent-color` | `#005862` | component |
| `--stat-value-color` | `#3d3d3d` | component |
| `--stat-value-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |
| `--switcher-threshold` | `40rem` | component |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-display-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-display-sm-font-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | semantic |
| `--typography-display-sm-font-weight` | `650` | semantic |
| `--typography-display-sm-letter-spacing` | `-.01em` | semantic |
| `--typography-display-sm-line-height` | `1.3` | semantic |
| `--typography-font-family-display` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
