# Exec — hero band (% + KPIs + donut)

The leadership rollup hero: a headline "% of the route cleared to construct" with two KPI stats (route-miles cleared in the past 14 days, and the forecast full-route clear date), beside a status donut of route-miles with a centered % and a legend. Read-only; every figure re-derives from the same store as the Map/Data tabs.

## Key decisions
- The headline number and KPIs are esa-stat inside esa-card — the KPI numbers are legos; only the donut is bespoke micro-viz (the same value-colored class canonicalized in BcnMonitoringStats).
- Miles-weighted throughout — route-miles cleared, never permit counts, because miles cleared is what lets crews roll.
- The 14-day trend is computed against the frozen reportHistory (the "since last review" delta); the forecast date is the projected full-route clear if current agency estimates hold (sub-labeled as such — it is a forecast, not a commitment).
- An "As of {timestamp}" stamp marks when the rollup was opened.

## Gotchas
- Exec content renders at BOOT (renderExec), but the burn-up sibling redraws at real width only when the tab is revealed (0→real); the recipe activates the tab so the captured state is the revealed one.
- The trend sign/icon flips with the delta (trending-up vs down) — drive the icon from the value, do not hard-code up.
- Forecast is conditional ("if agency estimates hold") — keep that caveat; presenting it as a fixed date overstates certainty.

## Done when
- Hero shows the cleared % headline, a 14-day miles trend KPI (signed, correct icon), a forecast full-route clear date with its caveat, and a status donut whose center % matches the headline.

## Markup
```html
<div class="exec__hero">
  <div class="exec__hero-figures">
    <div class="exec__hero-headline" id="exec-hero-stat">
      <div class="esa-stat">
        <div class="esa-stat__value">5%</div>
        <div class="esa-stat__label">of the route cleared to construct</div>
      </div>
    </div>
    <div class="exec__kpis">
      <div class="exec__kpi">
        <span class="exec__kpi-iconslot">
          <span class="exec__kpi-icon exec__kpi-icon--up" id="exec-trend-icon">
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
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
              </svg>
            </span>
          </span>
        </span>
        <span id="exec-trend-stat">
          <div class="esa-stat">
            <div class="esa-stat__value">+3.2 mi</div>
            <div class="esa-stat__label">cleared in the past 14 days</div>
          </div>
        </span>
      </div>
      <div class="exec__kpi">
        <span class="exec__kpi-iconslot">
          <span class="exec__kpi-icon" id="exec-forecast-icon">
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
                <path
                  d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                ></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
            </span>
          </span>
        </span>
        <span id="exec-forecast-stat">
          <div class="esa-stat">
            <div class="esa-stat__value">Nov 1, 2026</div>
            <div class="esa-stat__label">forecast full-route clear</div>
            <div class="esa-stat__sub">if agency estimates hold</div>
          </div>
        </span>
      </div>
    </div>
  </div>
  <div class="exec__donut-wrap">
    <div
      class="exec__donut"
      id="exec-donut"
      role="img"
      aria-label="Route-miles by permitting status"
      style="
        background: conic-gradient(
          var(--st-not-started) 0% 21.37%,
          var(--st-in-preparation) 21.37% 60.29%,
          var(--st-submitted) 60.29% 75.93%,
          var(--st-under-review) 75.93% 94.73%,
          var(--st-cleared) 94.73% 100%
        );
      "
    >
      <div class="exec__donut-hole">
        <span class="exec__donut-pct" id="exec-donut-pct">5%</span>
        <span class="exec__donut-cap">cleared</span>
      </div>
    </div>
    <ul class="exec__legend" id="exec-donut-legend">
      <li class="exec-legend__item" data-empty="false">
        <span class="exec-legend__dot" style="background: var(--st-not-started)"></span>
        <span class="exec-legend__label">Not Started</span>
        <span class="exec-legend__mi">42.9 mi</span>
        <span class="exec-legend__pct">21%</span>
      </li>
      <li class="exec-legend__item" data-empty="false">
        <span
          class="exec-legend__dot"
          style="background: var(--st-in-preparation)"
        ></span>
        <span class="exec-legend__label">In Preparation</span>
        <span class="exec-legend__mi">78.1 mi</span>
        <span class="exec-legend__pct">39%</span>
      </li>
      <li class="exec-legend__item" data-empty="false">
        <span class="exec-legend__dot" style="background: var(--st-submitted)"></span>
        <span class="exec-legend__label">Submitted</span>
        <span class="exec-legend__mi">31.4 mi</span>
        <span class="exec-legend__pct">16%</span>
      </li>
      <li class="exec-legend__item" data-empty="false">
        <span class="exec-legend__dot" style="background: var(--st-under-review)"></span>
        <span class="exec-legend__label">Under Review</span>
        <span class="exec-legend__mi">37.7 mi</span>
        <span class="exec-legend__pct">19%</span>
      </li>
      <li class="exec-legend__item" data-empty="false">
        <span class="exec-legend__dot" style="background: var(--st-cleared)"></span>
        <span class="exec-legend__label">Cleared to Construct</span>
        <span class="exec-legend__mi">10.6 mi</span>
        <span class="exec-legend__pct">5%</span>
      </li>
    </ul>
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
.exec__hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--spacing-600);
  align-items: center;
}
.exec__hero-figures {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.exec__hero-headline {
  --stat-value-size: clamp(3rem, 7vw, 4.25rem);
  --stat-value-weight: var(--font-weight-bold);
  --line-height-tight: 1;
  --line-height-normal: 1.35;
}
.exec__kpis {
  display: flex;
  gap: var(--spacing-600);
  flex-wrap: wrap;
}
.exec__kpi {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-250);
}
.exec__kpi-iconslot {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: calc(var(--type-size-700, 2.25rem) * 1.3);
}
.exec__kpi-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.exec__kpi-icon--up {
  background: color-mix(in srgb, var(--st-cleared) 16%, transparent);
  color: var(--st-cleared);
}
.exec__donut-wrap {
  display: flex;
  align-items: center;
  gap: var(--spacing-500);
}
.exec__donut {
  position: relative;
  width: 168px;
  height: 168px;
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  flex-shrink: 0;
}
.exec__donut-hole {
  position: absolute;
  inset: 30px;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
}
.exec__donut-pct {
  font-family: var(--font-display, var(--font-sans));
  font-size: var(--type-size-500);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  line-height: 1;
}
.exec__donut-cap {
  font-size: var(--type-size-100);
  color: var(--color-text-tertiary);
}
.exec__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
  min-width: 0;
}
.exec-legend__item {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--type-size-150);
  white-space: nowrap;
}
.exec-legend__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}
.exec-legend__label {
  color: var(--color-text-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
}
.exec-legend__mi {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
}
.exec-legend__pct {
  color: var(--color-text-tertiary);
  font-variant-numeric: tabular-nums;
  min-width: 34px;
  text-align: right;
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
  --_stat-accent-color: var(--stat-accent-color, var(--color-secondary, #5787b9));
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
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-display`: "DM Sans", sans-serif _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--st-cleared`: #1a9850 _(component)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-500`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(primitive)_
- `--type-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
