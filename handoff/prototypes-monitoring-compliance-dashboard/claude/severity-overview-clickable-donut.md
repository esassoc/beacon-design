# Severity overview (clickable donut)

Compliance Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/compliance-dashboard/

![Severity overview (clickable donut), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-dashboard/claude/severity-overview-clickable-donut.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-dashboard/claude/severity-overview-clickable-donut.phone.png

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

## Components

- `bcn-ohero` (spoke) · `src/components/bcn/BcnOversightHero.astro`
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`

## Markup

_4 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="esa-card">
  <div class="esa-card__header">
    <div class="esa-card__header-content">
      <div class="esa-card__titles">
        <h3 class="esa-card__title typography-title-sm-strong">Severity Overview</h3>
      </div>
    </div>
  </div>
  <div class="esa-card__body typography-body-md">
    <div class="bcn-ohero cluster" data-gap="xl" data-align="start" data-justify="between">
      <!-- ── Clickable severity donut + legend ── -->
      <section class="stack" data-gap="xs">
        <!-- Names the set the donut plots. Must agree with asOfLabel in the donut hole:
           this read "Yesterday's Observations" after the donut moved from a prior-day
           sweep to the current active backlog, so the heading contradicted the data.
           It is now the only thing naming the set — the card's caption, which restated
           it and told the reader to click, came out with `subtitle` on 2026-08-16. -->
        <h4 class="bcn-ohero__section-title typography-title">Active Observations</h4>
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
                  style="stroke: var(--color-background-utility-success)"
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
                  style="stroke: var(--color-background-utility-warning)"
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
                  style="stroke: var(--color-background-utility-danger)"
                >
                  <title>Non-Compliance: 3 (19%)</title>
                </circle>
              </a></svg
            ><a
              class="bcn-ohero__hole"
              href="/beacon-design/prototypes/monitoring/compliance-observations"
              ><span class="bcn-ohero__hole-value">16</span
              ><span class="bcn-ohero__hole-cap typography-meta">active</span></a
            >
          </div>
          <ul class="bcn-ohero__legend stack" data-gap="2xs">
            <li>
              <a
                class="bcn-ohero__legend-row"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=in-compliance"
                ><span
                  class="bcn-ohero__dot"
                  style="--_c: var(--color-background-utility-success)"
                ></span
                ><span class="bcn-ohero__legend-label typography-body-sm">In Compliance</span
                ><span class="bcn-ohero__legend-value typography-label-xs">6</span></a
              >
            </li>
            <li>
              <a
                class="bcn-ohero__legend-row"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=needs-attention"
                ><span
                  class="bcn-ohero__dot"
                  style="--_c: var(--color-background-utility-warning)"
                ></span
                ><span class="bcn-ohero__legend-label typography-body-sm">Needs Attention</span
                ><span class="bcn-ohero__legend-value typography-label-xs">7</span></a
              >
            </li>
            <li>
              <a
                class="bcn-ohero__legend-row"
                href="/beacon-design/prototypes/monitoring/compliance-observations?severity=non-compliance"
                ><span
                  class="bcn-ohero__dot"
                  style="--_c: var(--color-background-utility-danger)"
                ></span
                ><span class="bcn-ohero__legend-label typography-body-sm">Non-Compliance</span
                ><span class="bcn-ohero__legend-value typography-label-xs">3</span></a
              >
            </li>
          </ul>
        </div>
      </section>
      <!-- ── Two category count lists, by severity ── -->
      <div class="bcn-ohero__breakdowns cluster" data-gap="xl" data-align="start">
        <section class="stack" data-gap="xs">
          <h4 class="bcn-ohero__section-title typography-title">Needs Attention by Category</h4>
          <ul class="bcn-ohero__counts stack" data-gap="2xs">
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label typography-body-sm"
                >Access &amp; Traffic Control</span
              ><span class="bcn-ohero__count-value typography-label-xs">2</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label typography-body-sm"
                >Erosion &amp; Sediment Control</span
              ><span class="bcn-ohero__count-value typography-label-xs">1</span>
            </li>
            <!-- …and 4 more like this (<li class="bcn-ohero__count-row">) -->
          </ul>
        </section>
        <section class="stack" data-gap="xs">
          <h4 class="bcn-ohero__section-title typography-title">Non-Compliance by Category</h4>
          <ul class="bcn-ohero__counts stack" data-gap="2xs">
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label typography-body-sm"
                >Stormwater / BMP Maintenance</span
              ><span class="bcn-ohero__count-value typography-label-xs">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label typography-body-sm"
                >Spill Prevention &amp; Response</span
              ><span class="bcn-ohero__count-value typography-label-xs">1</span>
            </li>
            <li class="bcn-ohero__count-row">
              <span class="bcn-ohero__count-label typography-body-sm"
                >Cultural Resources Protection</span
              ><span class="bcn-ohero__count-value typography-label-xs">1</span>
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
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
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
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
.bcn-ohero {
  --_donut-size: 168px;
}
.bcn-ohero__breakdowns {
  flex: 26rem;
  min-inline-size: 0;
}
.bcn-ohero__section-title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-ohero__donut {
  inline-size: var(--_donut-size);
  block-size: var(--_donut-size);
  flex-shrink: 0;
  position: relative;
}
.bcn-ohero__ring {
  block-size: 100%;
  inline-size: 100%;
  overflow: visible;
  transform: rotate(-90deg);
}
.bcn-ohero__track {
  stroke: var(--color-background-elevation-sunken);
}
.bcn-ohero__seg circle {
  transition:
    stroke-width 0.12s ease-out,
    opacity 0.12s ease-out;
}
.bcn-ohero__seg:hover circle,
.bcn-ohero__seg:focus-visible circle {
  stroke-width: 7.5px;
}
.bcn-ohero__ring:hover .bcn-ohero__seg:not(:hover) circle {
  opacity: 0.55;
}
.bcn-ohero__seg:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-ohero__hole {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;
  text-decoration: none;
  display: flex;
  position: absolute;
  inset: 30px;
}
.bcn-ohero__hole-value {
  font-family: var(--typography-font-family-display, var(--typography-font-family-sans));
  font-size: var(--font-size-600);
  font-weight: var(--typography-font-weight-bold);
  line-height: 1;
}
.bcn-ohero__hole-cap {
  color: var(--color-content-default-tertiary);
}
.bcn-ohero__hole:hover .bcn-ohero__hole-value {
  color: var(--color-background-brand-hover);
}
.bcn-ohero__hole:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-ohero__legend {
  min-inline-size: 0;
  padding: 0;
  list-style: none;
}
.bcn-ohero__legend-row {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--radius-200);
  color: var(--color-content-default-secondary);
  grid-template-columns: 10px minmax(0, 1fr) auto;
  text-decoration: none;
  display: grid;
}
.bcn-ohero__legend-row:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-ohero__legend-row:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-ohero__dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  block-size: 10px;
  inline-size: 10px;
}
.bcn-ohero__legend-label {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-ohero__legend-value {
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.bcn-ohero__counts {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-ohero__count-row {
  align-items: baseline;
  gap: var(--spacing-300);
  padding-block: var(--spacing-100);
  grid-template-columns: minmax(6rem, 1fr) auto;
  display: grid;
}
.bcn-ohero__count-row + .bcn-ohero__count-row {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-ohero__count-label {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-ohero__count-value {
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
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
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.typography-meta {
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
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
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
.esa-card__body {
  padding: var(--_card-padding);
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--card-bg` | `#fcfcfc` | component |
| `--card-border-color` | `#dcdcdc` | component |
| `--card-header-bg` | `transparent` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-600` | `clamp(1.375rem, 1.2rem + .88vw, 1.875rem)` | primitive |
| `--gap` | `2rem` | component |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-family-display` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
| `--typography-meta-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-meta-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-meta-font-weight` | `400` | semantic |
| `--typography-meta-letter-spacing` | `.01em` | semantic |
| `--typography-meta-line-height` | `1.6` | semantic |
| `--typography-title-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-font-weight` | `500` | semantic |
| `--typography-title-letter-spacing` | `.01em` | semantic |
| `--typography-title-line-height` | `1.6` | semantic |
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
