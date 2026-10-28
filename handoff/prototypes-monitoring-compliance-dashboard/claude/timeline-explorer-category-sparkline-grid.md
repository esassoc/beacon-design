# Timeline Explorer (category sparkline grid)

Compliance Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/compliance-dashboard/

![Timeline Explorer (category sparkline grid), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-dashboard/claude/timeline-explorer-category-sparkline-grid.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-compliance-dashboard/claude/timeline-explorer-category-sparkline-grid.phone.png

BcnTimelineExplorer — replaced the old aggregate opened-vs-resolved bar chart (BcnTrendPanel) after user feedback that a single grouped-bar plot was confusing and not actionable. A 30/60/90-day esa-button-toggle drives one small sparkline tile per concern category (needs-attention/non-compliance scope, the same categories as the two count lists above), each showing that category's own recent trend and current open count. It answers "which category is trending up", which an 8-way stacked chart could not show at a glance.

## Key decisions

- Small multiples, one sparkline per category, instead of one combined chart — a compliance lead scans for the category climbing, not the aggregate total, and eight thin lines on one axis would be unreadable.
- This is a COHORT / AGING view, not an opened-vs-closed event flow: each observation is counted exactly once, under the week it was first reported, still bucketed by category. Carried over from the retired trend panel's own hard-won fix — do not reintroduce double-counting when re-deriving this.
- The 30/60/90 toggle re-slices the SAME underlying 13-week series; it does not re-fetch or re-derive data. Selecting a shorter window only changes how many of the trailing weeks are plotted and read out in the hint caption.
- Tile colours are a fixed categorical map (CATEGORY_COLOR in the fixture, one hex per category) — the same colours used nowhere else on this page, since categories are not otherwise colour-coded elsewhere on the dashboard.
- An off-screen table beside the sparkline grid carries the full trailing-90-day dataset for assistive tech — the visual grid is aria-hidden, so the table is not a redundant decoration but the accessible reading of the same data.

## Gotchas

- The toggle changes how many of the 13 weeks are SLICED for display, not the data itself — a re-implementation that re-queries per window risks the slice disagreeing with the table's fixed 90-day view.
- Per-tile normalisation (scaling each sparkline to its own min/max) is a plausible-looking bug: a flat, low-volume category and a spiking, high-volume one would render as visually identical shapes. Confirm intent before choosing per-tile vs shared scaling if re-deriving this.
- No esa-* chart lego exists for this — same documented gap as the donut and the retired trend panel.

## Done when

- One sparkline tile renders per category, each with a distinct, consistent colour and a current open-count readout.
- Selecting 30d/60d/90d re-slices every tile to that trailing window and updates the hint caption naming the window and week count.
- The off-screen table lists the full 13-week series for every category, independent of the toggle's current selection.

## Components

- `bcn-tlx` (spoke) · `src/components/bcn/BcnTimelineExplorer.astro`
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-card` (hub) · `packages/ecology/src/components/esa-card.astro`

## Markup

_46 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="esa-card">
  <div class="esa-card__header">
    <div class="esa-card__header-content">
      <div class="esa-card__titles">
        <h3 class="esa-card__title typography-title-sm-strong">Timeline Explorer</h3>
        <p class="esa-card__subtitle typography-body-sm">
          Open needs-attention / non-compliance concerns by category — select a window to see the
          trend
        </p>
      </div>
    </div>
  </div>
  <div class="esa-card__body typography-body-md">
    <div class="bcn-tlx stack" data-gap="md">
      <div class="bcn-tlx__toolbar cluster" data-gap="md" data-align="center">
        <span class="bcn-tlx__toolbar-label typography-label-xs">Timeframe</span
        ><esa-button-toggle id="tlx-window" size="sm"></esa-button-toggle
        ><span class="bcn-tlx__hint typography-meta" id="tlx-hint"
          >last 30 days · 4 weeks shown</span
        >
      </div>
      <div class="bcn-tlx__grid" id="tlx-grid" aria-hidden="true">
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Access &amp; Traffic Control</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Access &amp; Traffic Control: Jul 10 — 1, Jul 17 — 1, Jul 24 — 2, Jul 31 — 2"
              >
                <title>
                  Access &amp; Traffic Control: Jul 10 — 1, Jul 17 — 1, Jul 24 — 2, Jul 31 — 2
                </title>
                <path
                  d="M4.0,17.0 L54.7,17.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#2a78d6"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,17.0 54.7,17.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#2a78d6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#2a78d6"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">2</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--up">↑ +1</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Cultural Resources Protection</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Cultural Resources Protection: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1"
              >
                <title>
                  Cultural Resources Protection: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1
                </title>
                <path
                  d="M4.0,4.0 L54.7,4.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#eb6834"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,4.0 54.7,4.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#eb6834"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#eb6834"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">1</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--flat">→ flat</span>
            </div>
          </div>
        </div>
        <!-- …and 6 more like this (<div class="bcn-tlx__tile">) -->
      </div>
      <!-- The tile grid is aria-hidden; this table is the accessible reading of
         the full trailing-90-day dataset (not re-sliced by the toggle). -->
      <table class="bcn-tlx__table">
        <caption>
          Open needs-attention / non-compliance concerns by category, by week (trailing 90 days)
        </caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">May 8</th>
            <!-- …and 12 more like this (<th>) -->
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Access &amp; Traffic Control</th>
            <td>0</td>
            <td>0</td>
            <!-- …and 11 more like this (<td>) -->
          </tr>
          <tr>
            <th scope="row">Cultural Resources Protection</th>
            <td>0</td>
            <td>1</td>
            <!-- …and 11 more like this (<td>) -->
          </tr>
          <!-- …and 6 more like this (<tr>) -->
        </tbody>
      </table>
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
.bcn-tlx__toolbar-label {
  color: var(--color-content-default-tertiary);
}
.bcn-tlx__hint {
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
}
.bcn-tlx__grid {
  gap: var(--spacing-300);
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  display: grid;
}
.bcn-tlx__tile {
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  padding: var(--spacing-300) var(--spacing-350);
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-tlx__tile-label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-tlx__tile-row {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-tlx__tile-spark {
  flex: auto;
  min-inline-size: 0;
}
.bcn-tlx__tile-spark svg {
  width: 100%;
  height: 34px;
  display: block;
}
.bcn-tlx__tile-stat {
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-end;
  display: flex;
}
.bcn-tlx__tile-count {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-bold);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default);
  line-height: 1;
}
.bcn-tlx__delta {
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  margin-top: 2px;
}
.bcn-tlx__delta--up {
  color: var(--color-background-utility-warning);
}
.bcn-tlx__delta--flat {
  color: var(--color-content-default-tertiary);
}
.bcn-tlx__table {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
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
.esa-card__subtitle {
  color: var(--color-content-default-secondary, #646464);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: var(--color-content-on-brand, #fffc);
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
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand` | `#fcfcfc` | semantic |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--gap` | `2rem` | component |
| `--radius-200` | `.5rem` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
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
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
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
| `--typography-title-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-sm-strong-font-size` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | semantic |
| `--typography-title-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-sm-strong-line-height` | `1.6` | semantic |
