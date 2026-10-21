# Exec — hero band (% + KPIs + donut)

Permit Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracking/

![Exec — hero band (% + KPIs + donut), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/exec-hero-band-kpis-donut.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/exec-hero-band-kpis-donut.phone.png

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

## Components

- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-stat` (hub) · `packages/ecology/src/components/esa-stat.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="exec__hero">
  <div class="exec__hero-figures">
    <div class="exec__hero-headline" id="exec-hero-stat">
      <div class="esa-stat">
        <div class="esa-stat__value typography-display-sm">5%</div>
        <div class="esa-stat__label typography-label-md">of the route cleared to construct</div>
      </div>
    </div>
    <div class="exec__kpis">
      <div class="exec__kpi">
        <span class="exec__kpi-iconslot"
          ><span class="exec__kpi-icon exec__kpi-icon--up" id="exec-trend-icon"
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
                <path d="M16 7h6v6"></path>
                <path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></span></span></span
        ><span id="exec-trend-stat"
          ><div class="esa-stat">
            <div class="esa-stat__value typography-display-sm">+3.2 mi</div>
            <div class="esa-stat__label typography-label-md">cleared in the past 14 days</div>
          </div></span
        >
      </div>
      <div class="exec__kpi">
        <span class="exec__kpi-iconslot"
          ><span class="exec__kpi-icon" id="exec-forecast-icon"
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
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line></svg></span></span></span
        ><span id="exec-forecast-stat"
          ><div class="esa-stat">
            <div class="esa-stat__value typography-display-sm">Nov 1, 2026</div>
            <div class="esa-stat__label typography-label-md">forecast full-route clear</div>
            <div class="esa-stat__sub typography-body-sm">if agency estimates hold</div>
          </div></span
        >
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
        <span class="exec__donut-pct" id="exec-donut-pct">5%</span
        ><span class="exec__donut-cap">cleared</span>
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
        <span class="exec-legend__dot" style="background: var(--st-in-preparation)"></span>
        <span class="exec-legend__label">In Preparation</span>
        <span class="exec-legend__mi">78.1 mi</span>
        <span class="exec-legend__pct">39%</span>
      </li>
      <!-- …and 3 more like this (<li class="exec-legend__item">) -->
    </ul>
  </div>
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.sd-permit__btn .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.pd__section-head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.exec__hero {
  gap: var(--spacing-600);
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  display: grid;
}
@media (width<=820px) {
  .exec__hero {
    grid-template-columns: 1fr;
  }
}
.exec__hero-figures {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.exec__hero-headline {
  --stat-value-size: clamp(3rem, 7vw, 4.25rem);
  --stat-value-weight: var(--typography-font-weight-bold);
  --line-height-tight: 1;
  --line-height-normal: 1.35;
}
.exec__kpis {
  gap: var(--spacing-600);
  flex-wrap: wrap;
  display: flex;
}
.exec__kpi {
  align-items: flex-start;
  gap: var(--spacing-250);
  display: flex;
}
.exec__kpi-iconslot {
  height: calc(var(--font-size-700, 2.25rem) * 1.3);
  flex-shrink: 0;
  align-items: center;
  display: flex;
}
.exec__kpi-icon {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  width: 32px;
  height: 32px;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.exec__kpi-icon--up {
  background: color-mix(in srgb, var(--st-cleared) 16%, transparent);
  color: var(--st-cleared);
}
.exec__donut-wrap {
  align-items: center;
  gap: var(--spacing-500);
  display: flex;
}
@media (width<=560px) {
  .exec__donut-wrap {
    flex-direction: column;
    align-items: flex-start;
  }
}
.exec__donut {
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  flex-shrink: 0;
  width: 168px;
  height: 168px;
  position: relative;
}
.exec__donut-hole {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  display: flex;
  position: absolute;
  inset: 30px;
}
.exec__donut-pct {
  font-family: var(--typography-font-family-display, var(--typography-font-family-sans));
  font-size: var(--font-size-500);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
  line-height: 1;
}
.exec__donut-cap {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
}
.exec__legend {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.exec-legend__item {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-150);
  white-space: nowrap;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  display: grid;
}
.exec-legend__item[data-empty="true"] {
  opacity: 0.45;
}
.exec-legend__dot {
  border-radius: 50%;
  flex-shrink: 0;
  width: 10px;
  height: 10px;
}
.exec-legend__label {
  color: var(--color-content-default-secondary);
  text-overflow: ellipsis;
  overflow: hidden;
}
.exec-legend__mi {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
}
.exec-legend__pct {
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
  text-align: right;
  min-width: 34px;
}
@media print {
  .exec .esa-card,
  .exec__hero {
    break-inside: avoid;
    box-shadow: none;
  }
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
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--font-size-700` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--st-cleared` | `#1a9850` | component |
| `--stat-accent-color` | `#005862` | component |
| `--stat-value-color` | `#3d3d3d` | component |
| `--stat-value-size` | `clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem)` | component |
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
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
