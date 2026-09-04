# Component status summary

A project-wide roll-up above the list: how many components exist, how they distribute across the lifecycle, and which ones have overdue actions. It answers "is anything wrong" before the user has to read any rows, which is the only question this page can usefully answer beyond routing.

## Key decisions
- The status breakdown is a single proportional bar plus a legend with counts, not four stat cards. The distribution IS the information; four cards would spend a quarter of the page saying what one bar says.
- The "Needs attention" lane lists components by overdue action count, most-overdue first, and links straight to each. It is the one place this page earns its keep as more than a router.
- Lifecycle colors come from STATUS_META in src/data/component-dashboard.ts, which re-points onto the Beacon status-color standard in theme-beacon.css. Nothing here carries a literal hex.

## Gotchas
- on-hold is deliberately DARKER than not-started. A paused component is a decision; not-started is an absence, and the palette should say which is which. --bcn-status-on-hold was added for exactly this surface — the first one to render all four lifecycle states side by side.
- The count rule this page follows: a bare number means "the contents of this list". Anything narrower must say "N of M". A bare number over a filtered set is the bug this whole epic exists to stop repeating.

## Done when
- The bar segments and legend counts sum to the total; the attention lane lists only components with overdue actions and each row navigates to that component; every color resolves through a token, and the four lifecycle states are visually distinguishable from one another.

## Markup
```html
<section class="bcn-summary" aria-label="Component status summary">
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Component status</h3>
        </div>
      </div>
      <div class="esa-card__actions typography-label-md">
        <span class="bcn-summary__count">16 total</span>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="bcn-summary__main">
        <div class="esa-stat">
          <div class="esa-stat__value typography-display-sm">16</div>
          <div class="esa-stat__label typography-label-md">Components tracked</div>
        </div>
        <div
          class="bcn-summary__bar"
          role="img"
          aria-label="4 not started, 7 in progress, 2 on hold, 3 complete"
        >
          <span
            class="bcn-summary__seg"
            style="--_c: var(--bcn-status-not-started); width: 25%"
          ></span
          ><span
            class="bcn-summary__seg"
            style="--_c: var(--color-background-utility-warning); width: 43.75%"
          ></span
          ><span
            class="bcn-summary__seg"
            style="--_c: var(--bcn-status-on-hold); width: 12.5%"
          ></span
          ><span
            class="bcn-summary__seg"
            style="--_c: var(--color-background-utility-success); width: 18.75%"
          ></span>
        </div>
        <ul class="bcn-summary__legend">
          <li class="bcn-summary__legend-item">
            <span
              class="bcn-summary__dot"
              style="--_c: var(--bcn-status-not-started)"
            ></span
            >Not started<span class="bcn-summary__legend-count">4</span>
          </li>
          <li class="bcn-summary__legend-item">
            <span
              class="bcn-summary__dot"
              style="--_c: var(--color-background-utility-warning)"
            ></span
            >In progress<span class="bcn-summary__legend-count">7</span>
          </li>
          <li class="bcn-summary__legend-item">
            <span class="bcn-summary__dot" style="--_c: var(--bcn-status-on-hold)"></span
            >On hold<span class="bcn-summary__legend-count">2</span>
          </li>
          <li class="bcn-summary__legend-item">
            <span
              class="bcn-summary__dot"
              style="--_c: var(--color-background-utility-success)"
            ></span
            >Complete<span class="bcn-summary__legend-count">3</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title typography-title-sm-strong">Needs attention</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body typography-body-md">
      <div class="bcn-summary__attention">
        <div style="--stat-value-color: var(--color-content-utility-danger)">
          <div class="esa-stat">
            <div class="esa-stat__value typography-display-sm">5</div>
            <div class="esa-stat__label typography-label-md">
              Components with overdue actions
            </div>
          </div>
        </div>
        <ul class="bcn-summary__att-list">
          <li class="bcn-summary__att-row">
            <span class="bcn-summary__att-name"
              >Southern Tunnel Reach — King Island to Bethany Complex Launch Shaft
              Transition Zone</span
            ><span class="bcn-summary__att-flag">6 overdue</span>
          </li>
          <li class="bcn-summary__att-row">
            <span class="bcn-summary__att-name">Southern Forebay &amp; Pumping Plant</span
            ><span class="bcn-summary__att-flag">3 overdue</span>
          </li>
          <li class="bcn-summary__att-row">
            <span class="bcn-summary__att-name">Intake B — North Delta</span
            ><span class="bcn-summary__att-flag">2 overdue</span>
          </li>
          <li class="bcn-summary__att-more">+2 more</li>
        </ul>
      </div>
    </div>
  </div>
</section>
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--elevation-2, 0 2px 12px 0 #0000000a);
}
.esa-card--filled {
  --_card-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
}
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, #fffc);
}
.esa-card__meta {
  gap: var(--spacing-100, 0.25rem) var(--spacing-500, 1.5rem);
  margin: var(--spacing-050, 0.125rem) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.esa-card__meta-pair {
  align-items: baseline;
  gap: var(--spacing-100, 0.25rem);
  min-width: 0;
  display: flex;
}
.esa-card__meta dt {
  font-size: var(--_card-meta-label-size);
  font-weight: var(--font-weight-medium, 500);
  color: var(--_card-meta-label-color);
}
.esa-card__meta dd {
  font-size: var(--_card-meta-value-size);
  color: inherit;
  margin: 0;
}
.esa-card--header-primary .esa-card__meta dt {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-summary {
  gap: var(--spacing-500);
  grid-template-columns: minmax(0, 1.9fr) minmax(0, 1fr);
  align-items: stretch;
  display: grid;
}
.bcn-summary > .esa-card {
  height: 100%;
}
.bcn-summary__count {
  min-width: 22px;
  height: 22px;
  padding: 0 var(--spacing-150);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  font-variant-numeric: tabular-nums;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-summary__main {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-summary__bar {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  height: 14px;
  display: flex;
  overflow: hidden;
}
.bcn-summary__seg {
  background: var(--_c);
  height: 100%;
}
.bcn-summary__legend {
  gap: var(--spacing-200) var(--spacing-500);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-summary__legend-item {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  display: flex;
}
.bcn-summary__dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
  width: 10px;
  height: 10px;
}
.bcn-summary__legend-count {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
}
.bcn-summary__attention {
  flex-direction: column;
  display: flex;
}
.bcn-summary__att-list {
  margin: var(--spacing-400) 0 0;
  padding: var(--spacing-400) 0 0;
  border-top: 1px solid var(--color-border-default-subtle);
  gap: var(--spacing-200);
  flex-direction: column;
  list-style: none;
  display: flex;
}
.bcn-summary__att-row {
  align-items: center;
  gap: var(--spacing-200);
  justify-content: space-between;
  display: flex;
}
.bcn-summary__att-name {
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-summary__att-flag {
  align-items: center;
  gap: var(--spacing-100);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-utility-danger);
  background: color-mix(in srgb, var(--color-background-utility-danger) 12%, white);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-danger) 26%, white);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-summary__att-more {
  font-size: var(--font-size-100);
  color: var(--bcn-content-muted);
}
.bcn-summary__att-clear {
  margin: var(--spacing-400) 0 0;
  padding: var(--spacing-400) 0 0;
  border-top: 1px solid var(--color-border-default-subtle);
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
}
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
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
```

## Tokens
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--stat-accent-color`: #3a7c59 _(component)_
- `--stat-value-color`: #3d3d3d _(component)_
- `--stat-value-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(component)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-display-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-display-sm-font-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(semantic)_
- `--typography-display-sm-font-weight`: 650 _(semantic)_
- `--typography-display-sm-letter-spacing`: -.01em _(semantic)_
- `--typography-display-sm-line-height`: 1.3 _(semantic)_
- `--typography-font-family-display`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
