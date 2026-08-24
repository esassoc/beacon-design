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
        <div class="esa-stat__value typography-display-sm">5%</div>
        <div class="esa-stat__label typography-label-md">
          of the route cleared to construct
        </div>
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
            <div class="esa-stat__value typography-display-sm">+3.2 mi</div>
            <div class="esa-stat__label typography-label-md">
              cleared in the past 14 days
            </div>
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
            <div class="esa-stat__value typography-display-sm">Nov 1, 2026</div>
            <div class="esa-stat__label typography-label-md">
              forecast full-route clear
            </div>
            <div class="esa-stat__sub typography-body-sm">if agency estimates hold</div>
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
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
.help,
.error {
  margin: 0;
}
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
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
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.sd-permit__btn .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.pd__section-head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
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
.exec__kpi-icon--down {
  background: color-mix(in srgb, var(--st-not-started) 16%, transparent);
  color: var(--st-not-started);
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
.exec-legend__item[data-empty="true"] {
  opacity: 0.45;
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
.exec .esa-card,
.exec__hero {
  break-inside: avoid;
  box-shadow: none;
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
  display: flex;
  flex-direction: column;
  gap: var(--_stat-gap);
  background: transparent;
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
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
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
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-content-brand`: #2a7e3b _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-primary`: #005862 _(component)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-surface-sunken`: #efefef _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--font-display`: "DM Sans", sans-serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(component)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
- `--font-weight-bold`: 650 _(component)_
- `--font-weight-semibold`: 550 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--st-cleared`: #1a9850 _(component)_
- `--st-not-started`: #d73027 _(component)_
- `--stat-accent-color`: #2a7e3b _(component)_
- `--stat-value-color`: #202020 _(component)_
- `--stat-value-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(component)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(component)_
- `--type-size-500`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(component)_
- `--type-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(component)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-display-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-display-sm-font-size`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(semantic)_
- `--typography-display-sm-font-weight`: 650 _(semantic)_
- `--typography-display-sm-letter-spacing`: -.01em _(semantic)_
- `--typography-display-sm-line-height`: 1.3 _(semantic)_
- `--typography-font-family-display`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
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
