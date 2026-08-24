# Severity overview (clickable donut)

BcnOversightHero — the band that answers "how bad is it right now, and in what categories". A severity donut of the CURRENT active observation set on the left, its legend beside it, and two category count lists (Needs Attention, Non-Compliance) on the right. Every severity is a real link: the ring segment and its legend row both route to the Observations list pre-filtered to that severity, and the donut centre routes to the unfiltered active list. It is a navigation surface, not a static readout.

## Key decisions
- The ring is stacked SVG <circle> strokes (stroke-dasharray as a percentage at r=15.915, so the circumference is ~100), each wrapped in an SVG <a>. The existing house idiom — a flat conic-gradient div, used by BcnMonitoringStats and permit-tracking — was rejected because a conic gradient CANNOT carry one click target per slice, and per-segment routing is the whole point of this widget.
- The donut and both category lists read the same active-observation set, so the severity totals and the category totals always reconcile. An earlier revision sourced them differently and the numbers disagreed on screen.
- The category lists are plain label + count rows, deliberately NOT bar charts — a bar track needs a shared max to be honest, and these two lists are scoped to different severities, so a shared scale would be meaningless.
- Severity colour comes from SEVERITY_META in the fixture (one hex per severity), threaded to both the ring stroke and the legend swatch, so a severity can never be two different colours on one page.

## Gotchas
- There is no esa-* chart lego anywhere in Ecology — this is bespoke SVG by necessity, not by preference. Third occurrence of the gap; see the improvement ledger before hand-rolling a fourth.
- SVG <a> needs href set via the SVG namespace semantics Astro already emits — do not swap the segments for <path onclick>, which loses keyboard access and the link affordance.
- The donut centre total is a link too, and it is easy to lose when restyling the hole — keep it focusable.

## Done when
- The ring renders one segment per severity, sized to its share of the active set, and the segment colours match the legend swatches exactly.
- Clicking any ring segment or legend row opens the Observations list filtered to that severity; clicking the centre total opens it unfiltered.
- The needs-attention and non-compliance category counts sum to the same totals the donut shows for those severities.

## Markup
```html
<div class="esa-card">
  <div class="esa-card__header">
    <div class="esa-card__header-content">
      <div class="esa-card__titles">
        <h3 class="esa-card__title typography-title-sm-strong">Severity Overview</h3>
        <p class="esa-card__subtitle typography-body-sm">
          Active observations by compliance severity — select a segment to open that
          filtered list
        </p>
      </div>
    </div>
  </div>
  <div class="esa-card__body typography-body-md">
    <div
      class="bcn-ohero cluster"
      data-gap="xl"
      data-align="start"
      data-justify="between"
    >
      <!-- ── Clickable severity donut + legend ── -->
      <section class="stack" data-gap="xs">
        <!-- Names the set the donut plots. Must agree with the card subtitle above and
           with asOfLabel in the donut hole: this read "Yesterday's Observations" after
           the donut moved from a prior-day sweep to the current active backlog, so the
           heading contradicted both the caption beneath it and the data. -->
        <h4 class="bcn-ohero__section-title type-card-title">Active Observations</h4>
        <div class="cluster" data-gap="lg" data-align="center">
          <div class="bcn-ohero__donut">
            <svg
              class="bcn-ohero__ring"
              viewBox="0 0 42 42"
              role="group"
              aria-label="Active observations by severity"
            >
              <circle
                class="bcn-ohero__track"
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke-width="6"
              ></circle>
              <a
                class="bcn-ohero__seg"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=in-compliance"
                aria-label="In Compliance: 6 (38%) — open the filtered list"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke-width="6"
                  stroke-dasharray="37.500 62.500"
                  stroke-dashoffset="0.000"
                  style="stroke: var(--color-success)"
                >
                  <title>In Compliance: 6 (38%)</title>
                </circle>
              </a>
              <a
                class="bcn-ohero__seg"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
                aria-label="Needs Attention: 7 (44%) — open the filtered list"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke-width="6"
                  stroke-dasharray="43.750 56.250"
                  stroke-dashoffset="-37.500"
                  style="stroke: var(--color-warning)"
                >
                  <title>Needs Attention: 7 (44%)</title>
                </circle>
              </a>
              <a
                class="bcn-ohero__seg"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
                aria-label="Non-Compliance: 3 (19%) — open the filtered list"
              >
                <circle
                  cx="21"
                  cy="21"
                  r="15.915"
                  fill="transparent"
                  stroke-width="6"
                  stroke-dasharray="18.750 81.250"
                  stroke-dashoffset="-81.250"
                  style="stroke: var(--color-danger)"
                >
                  <title>Non-Compliance: 3 (19%)</title>
                </circle>
              </a>
            </svg>
            <a
              class="bcn-ohero__hole"
              href="/beacon-design/prototypes/monitoring/compliance-observations"
            >
              <span class="bcn-ohero__hole-value">16</span>
              <span class="bcn-ohero__hole-cap type-caption">active</span>
            </a>
          </div>
          <ul class="bcn-ohero__legend stack" data-gap="2xs">
            <li>
              <a
                class="bcn-ohero__legend-row"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=in-compliance"
              >
                <span class="bcn-ohero__dot" style="--_c: var(--color-success)"></span>
                <span class="bcn-ohero__legend-label type-body-small">In Compliance</span>
                <span class="bcn-ohero__legend-value type-label">6</span>
              </a>
            </li>
            <li>
              <a
                class="bcn-ohero__legend-row"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
              >
                <span class="bcn-ohero__dot" style="--_c: var(--color-warning)"></span>
                <span class="bcn-ohero__legend-label type-body-small"
                  >Needs Attention</span
                >
                <span class="bcn-ohero__legend-value type-label">7</span>
              </a>
            </li>
            <li>
              <a
                class="bcn-ohero__legend-row"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
              >
                <span class="bcn-ohero__dot" style="--_c: var(--color-danger)"></span>
                <span class="bcn-ohero__legend-label type-body-small"
                  >Non-Compliance</span
                >
                <span class="bcn-ohero__legend-value type-label">3</span>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <!-- ── Two category count lists, by severity ── -->
      <div class="bcn-ohero__breakdowns cluster" data-gap="xl" data-align="start">
        <section class="stack" data-gap="xs">
          <h4 class="bcn-ohero__section-title type-card-title">
            Needs Attention by Category
          </h4>
          <ul class="bcn-ohero__counts stack" data-gap="2xs">
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small"
                >Access &amp; Traffic Control</span
              >
              <span class="bcn-ohero__count-value type-label">2</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small"
                >Erosion &amp; Sediment Control</span
              >
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small">Waste Management</span>
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small"
                >Vegetation &amp; Habitat Protection</span
              >
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small">Noise Management</span>
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small"
                >Stormwater / BMP Maintenance</span
              >
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
          </ul>
        </section>
        <section class="stack" data-gap="xs">
          <h4 class="bcn-ohero__section-title type-card-title">
            Non-Compliance by Category
          </h4>
          <ul class="bcn-ohero__counts stack" data-gap="2xs">
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small"
                >Stormwater / BMP Maintenance</span
              >
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small"
                >Spill Prevention &amp; Response</span
              >
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label type-body-small"
                >Cultural Resources Protection</span
              >
              <span class="bcn-ohero__count-value type-label">1</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</div>
```

## Styles
```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-ohero {
  --_donut-size: 168px;
}
.bcn-ohero__breakdowns {
  flex: 1 1 26rem;
  min-inline-size: 0;
}
.bcn-ohero__section-title {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-ohero__donut {
  position: relative;
  inline-size: var(--_donut-size);
  block-size: var(--_donut-size);
  flex-shrink: 0;
}
.bcn-ohero__ring {
  inline-size: 100%;
  block-size: 100%;
  transform: rotate(-90deg);
  overflow: visible;
}
.bcn-ohero__track {
  stroke: var(--color-surface-sunken);
}
.bcn-ohero__seg circle {
  transition:
    stroke-width 0.12s ease-out,
    opacity 0.12s ease-out;
}
.bcn-ohero__seg:hover circle,
.bcn-ohero__seg:focus-visible circle {
  stroke-width: 7.5;
}
.bcn-ohero__ring:hover .bcn-ohero__seg:not(:hover) circle {
  opacity: 0.55;
}
.bcn-ohero__seg:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-ohero__hole {
  position: absolute;
  inset: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1px;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  text-decoration: none;
  color: var(--color-text-primary);
}
.bcn-ohero__hole-value {
  font-family: var(--font-display, var(--font-sans));
  font-size: var(--type-size-600);
  font-weight: var(--font-weight-bold);
  line-height: 1;
}
.bcn-ohero__hole-cap {
  color: var(--color-text-tertiary);
}
.bcn-ohero__hole:hover .bcn-ohero__hole-value {
  color: var(--color-primary-hover);
}
.bcn-ohero__hole:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-ohero__legend {
  list-style: none;
  padding: 0;
  min-inline-size: 0;
}
.bcn-ohero__legend-row {
  display: grid;
  grid-template-columns: 10px minmax(0, 1fr) auto;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--radius-200);
  text-decoration: none;
  color: var(--color-text-secondary);
}
.bcn-ohero__legend-row:hover {
  background: var(--color-surface-sunken);
  color: var(--color-text-primary);
}
.bcn-ohero__legend-row:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-ohero__dot {
  inline-size: 10px;
  block-size: 10px;
  border-radius: var(--radius-full);
  background: var(--_c);
}
.bcn-ohero__legend-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-ohero__legend-value {
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.bcn-ohero__counts {
  list-style: none;
  padding: 0;
  margin: 0;
}
.bcn-ohero__count-row {
  display: grid;
  grid-template-columns: minmax(6rem, 1fr) auto;
  align-items: baseline;
  gap: var(--spacing-300);
  padding-block: var(--spacing-100);
}
.bcn-ohero__count-row + .bcn-ohero__count-row {
  border-top: 1px solid var(--color-border-light);
}
.bcn-ohero__count-label {
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-ohero__count-value {
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.type-card-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.type-body-small {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.type-label {
  font-family: var(--typography-label-font-family);
  font-size: var(--typography-label-font-size);
  font-weight: var(--typography-label-font-weight);
  line-height: var(--typography-label-line-height);
  letter-spacing: var(--typography-label-letter-spacing);
}
.type-caption {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  display: block;
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--elevation-2, 0 2px 12px 0 rgba(0, 0, 0, 0.04));
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
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
  margin: 0;
  color: inherit;
}
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, rgba(255, 255, 255, 0.8));
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
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.stack {
  --gap: var(--spacing-400, 1rem);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
}
```

## Tokens
- `--border-width-default`: 1px _(semantic)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #cecece _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-brand`: #46a758 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #f0f0f0 _(semantic)_
- `--color-border-default`: #cecece _(semantic)_
- `--color-border-default-subtle`: #d9d9d9 _(semantic)_
- `--color-border-light`: #efefef _(component)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-primary-hover`: #00474f _(component)_
- `--color-secondary`: #00918b _(component)_
- `--color-surface`: #fcfcfc _(component)_
- `--color-surface-sunken`: #efefef _(component)_
- `--color-text-primary`: #3d3d3d _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--elevation-2`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-display`: "DM Sans", sans-serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(component)_
- `--font-weight-bold`: 650 _(component)_
- `--gap`: 2rem _(component)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .5rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--type-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(component)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-font-family`: "DM Sans", sans-serif _(component)_
- `--typography-label-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--typography-label-font-weight`: 500 _(component)_
- `--typography-label-letter-spacing`: .01em _(component)_
- `--typography-label-line-height`: 1.6 _(component)_
- `--typography-meta-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-meta-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-meta-font-weight`: 350 _(semantic)_
- `--typography-meta-letter-spacing`: .01em _(semantic)_
- `--typography-meta-line-height`: 1.6 _(semantic)_
- `--typography-title-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-font-weight`: 500 _(semantic)_
- `--typography-title-letter-spacing`: .01em _(semantic)_
- `--typography-title-line-height`: 1.6 _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
