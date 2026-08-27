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
          <h3 class="esa-card__title">Component status</h3>
        </div>
      </div>
      <div class="esa-card__actions">
        <span class="bcn-summary__count">16 total</span>
      </div>
    </div>
    <div class="esa-card__body">
      <div class="bcn-summary__main">
        <div class="esa-stat">
          <div class="esa-stat__value">16</div>
          <div class="esa-stat__label">Components tracked</div>
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
            style="--_c: var(--color-warning); width: 43.75%"
          ></span
          ><span
            class="bcn-summary__seg"
            style="--_c: var(--bcn-status-on-hold); width: 12.5%"
          ></span
          ><span
            class="bcn-summary__seg"
            style="--_c: var(--color-success); width: 18.75%"
          ></span>
        </div>
        <ul class="bcn-summary__legend">
          <li class="bcn-summary__legend-item">
            <span
              class="bcn-summary__dot"
              style="--_c: var(--bcn-status-not-started)"
            ></span>
            Not started <span class="bcn-summary__legend-count">4</span>
          </li>
          <li class="bcn-summary__legend-item">
            <span class="bcn-summary__dot" style="--_c: var(--color-warning)"></span> In
            progress <span class="bcn-summary__legend-count">7</span>
          </li>
          <li class="bcn-summary__legend-item">
            <span class="bcn-summary__dot" style="--_c: var(--bcn-status-on-hold)"></span>
            On hold <span class="bcn-summary__legend-count">2</span>
          </li>
          <li class="bcn-summary__legend-item">
            <span class="bcn-summary__dot" style="--_c: var(--color-success)"></span>
            Complete <span class="bcn-summary__legend-count">3</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="esa-card">
    <div class="esa-card__header">
      <div class="esa-card__header-content">
        <div class="esa-card__titles">
          <h3 class="esa-card__title">Needs attention</h3>
        </div>
      </div>
    </div>
    <div class="esa-card__body">
      <div class="bcn-summary__attention">
        <div style="--stat-value-color: var(--color-danger-strong)">
          <div class="esa-stat">
            <div class="esa-stat__value">5</div>
            <div class="esa-stat__label">Components with overdue actions</div>
          </div>
        </div>
        <ul class="bcn-summary__att-list">
          <li class="bcn-summary__att-row">
            <span class="bcn-summary__att-name"
              >Southern Tunnel Reach — King Island to Bethany Complex Launch Shaft
              Transition Zone</span
            >
            <span class="bcn-summary__att-flag">6 overdue</span>
          </li>
          <li class="bcn-summary__att-row">
            <span class="bcn-summary__att-name"
              >Southern Forebay &amp; Pumping Plant</span
            >
            <span class="bcn-summary__att-flag">3 overdue</span>
          </li>
          <li class="bcn-summary__att-row">
            <span class="bcn-summary__att-name">Intake B — North Delta</span>
            <span class="bcn-summary__att-flag">2 overdue</span>
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
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-summary {
  display: grid;
  grid-template-columns: minmax(0, 1.9fr) minmax(0, 1fr);
  gap: var(--spacing-500);
  align-items: stretch;
}
.bcn-summary > .esa-card {
  height: 100%;
}
.bcn-summary__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 var(--spacing-150);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  font-variant-numeric: tabular-nums;
}
.bcn-summary__main {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-summary__bar {
  height: 14px;
  border-radius: var(--radius-full);
  overflow: hidden;
  display: flex;
  background: var(--color-surface-sunken);
}
.bcn-summary__seg {
  height: 100%;
  background: var(--_c);
}
.bcn-summary__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-200) var(--spacing-500);
}
.bcn-summary__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-summary__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
}
.bcn-summary__legend-count {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
}
.bcn-summary__attention {
  display: flex;
  flex-direction: column;
}
.bcn-summary__att-list {
  list-style: none;
  margin: var(--spacing-400) 0 0;
  padding: var(--spacing-400) 0 0;
  border-top: 1px solid var(--color-border-light);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-summary__att-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  justify-content: space-between;
}
.bcn-summary__att-name {
  font-size: var(--type-size-150);
  color: var(--color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-summary__att-flag {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-danger-strong);
  background: color-mix(in srgb, var(--color-danger) 12%, white);
  border: 1px solid color-mix(in srgb, var(--color-danger) 26%, white);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-summary__att-more {
  font-size: var(--type-size-100);
  color: var(--color-text-muted);
}
.bcn-summary__att-clear {
  margin: var(--spacing-400) 0 0;
  padding: var(--spacing-400) 0 0;
  border-top: 1px solid var(--color-border-light);
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-surface, #ffffff));
  --_card-border: var(--card-border-color, var(--color-border, #e5e5e5));
  --_card-radius: var(--card-radius, var(--radius-300, 0.5rem));
  --_card-padding: var(--card-padding, var(--spacing-500, 1.5rem));
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--card-header-color, var(--color-text-primary, #171717));
  --_card-header-border: var(
    --card-header-border-color,
    var(--color-border-light, #efefef)
  );
  display: block;
  background: var(--_card-bg);
  border: 1px solid var(--_card-border);
  border-radius: var(--_card-radius);
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border, #e5e5e5);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--shadow-100, 0 2px 12px 0 rgba(0, 0, 0, 0.04));
}
.esa-card--filled {
  --_card-bg: var(--color-surface-sunken, #efefef);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-primary, #43608a);
  --_card-header-color: var(--color-text-inverse, #ffffff);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-surface-sunken, #efefef);
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: 1px solid var(--_card-header-border);
  min-height: 56px;
}
.esa-card__header-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
}
.esa-card__titles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-050, 0.125rem);
}
.esa-card__title {
  font-size: var(--type-size-250, 1.0625rem);
  font-weight: 600;
  margin: 0;
  color: inherit;
  font-family: var(--font-sans, "DM Sans", sans-serif);
}
.esa-card__subtitle {
  font-size: var(--type-size-150, 0.8125rem);
  color: var(--color-text-secondary, #525252);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: 1px solid var(--_card-header-border);
  background: var(--card-footer-bg, var(--color-surface-sunken, #efefef));
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-text-primary, #171717));
  --_stat-value-font: var(
    --stat-value-font,
    var(--font-display, var(--font-sans, "DM Sans", sans-serif))
  );
  --_stat-value-size: var(--stat-value-size, var(--type-size-700, 2.25rem));
  --_stat-value-weight: var(--stat-value-weight, var(--font-weight-bold, 650));
  --_stat-label-color: var(--stat-label-color, var(--color-text-secondary, #525252));
  --_stat-label-size: var(--stat-label-size, var(--type-size-200, 0.9375rem));
  --_stat-label-weight: var(--stat-label-weight, var(--font-weight-medium, 450));
  --_stat-sub-color: var(--stat-sub-color, var(--color-text-muted, #737373));
  --_stat-sub-size: var(--stat-sub-size, var(--type-size-150, 0.875rem));
  --_stat-accent-color: var(--stat-accent-color, var(--color-secondary-strong, #3a7c59));
  --_stat-gap: var(--stat-gap, var(--spacing-050, 0.125rem));
  display: flex;
  flex-direction: column;
  gap: var(--_stat-gap);
  background: transparent;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  line-height: var(--line-height-tight, 1.3);
  letter-spacing: var(--letter-spacing-tight, -0.01em);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  font-weight: var(--font-weight-regular, 350);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-sub-color);
}
```

## Tokens
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-footer-bg`: #efefef _(component)_
- `--card-header-bg`: transparent _(component)_
- `--card-header-border-color`: #efefef _(component)_
- `--card-header-color`: #3d3d3d _(component)_
- `--card-padding`: 1.5rem _(component)_
- `--card-radius`: .5rem _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-strong`: #ce2c31 _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-strong`: #2a7e3b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--font-display`: "DM Sans", sans-serif _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
- `--type-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
