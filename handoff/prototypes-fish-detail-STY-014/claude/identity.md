# Identity

Record detail pages (work breakdown) · source prototype: https://esassoc.github.io/beacon-design/prototypes/fish-detail/STY-014/

![Identity, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-fish-detail-STY-014/claude/identity.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-fish-detail-STY-014/claude/identity.phone.png

## Components

- `bcn-detail` (spoke) · `src/components/bcn/BcnNodeDetail.astro`
- `bcn-funding` (spoke) · `src/components/bcn/BcnFundingPlan.astro`
- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-rollup` (spoke) · `src/components/bcn/BcnNodeDetail.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app

## Markup

_4 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-detail">
  <!-- ── 1 · Identity ── -->
  <section class="bcn-detail__section">
    <h3 class="bcn-detail__title">Identity</h3>
    <div class="bcn-detail__rows">
      <div data-live="name">
        <div class="bcn-key-value" data-size="md" data-layout="stack">
          <span class="bcn-key-value__key">Name</span
          ><span class="bcn-key-value__val">Migration &amp; Survival Study</span>
        </div>
      </div>
      <div data-live="idrow">
        <div class="bcn-key-value" data-size="md" data-layout="stack">
          <span class="bcn-key-value__key">ID</span><span class="bcn-key-value__val">STY-014</span>
        </div>
      </div>
      <!-- …and 2 more like this (<div>) -->
    </div>
  </section>
  <!-- ── 2 · Timing (fish-study calendar: water years + field seasons) ── -->
  <section class="bcn-detail__section">
    <h3 class="bcn-detail__title">Timing</h3>
    <div class="bcn-detail__rows">
      <div data-live="span">
        <div class="bcn-key-value" data-size="md" data-layout="stack">
          <span class="bcn-key-value__key">Rolled-up span</span
          ><span class="bcn-key-value__val">Jul 2026 – Oct 2031</span
          ><span class="bcn-key-value__hint"
            >min start → max end across all tasks in this branch</span
          >
        </div>
      </div>
      <div data-live="wy">
        <div class="bcn-key-value" data-size="md" data-layout="stack">
          <span class="bcn-key-value__key">Water years</span
          ><span class="bcn-key-value__val">WY2026–WY2032</span>
        </div>
      </div>
    </div>
  </section>
  <!-- ── 3 · Funding (CDFW dollars per water year; tasks sum upward) ── --><!-- ── 4 · Roll-up (PARENT nodes only) ── --><!-- ── 5 · Constraints / notes (collapsed by default) ── -->
  <section class="bcn-detail__section bcn-detail__section--flush">
    <details class="esa-collapsible esa-collapsible--flush">
      <summary class="esa-collapsible__summary typography-label-sm-strong">
        <span class="esa-collapsible__title">Constraints &amp; notes</span>
      </summary>
      <div class="esa-collapsible__body typography-body-md">
        <div class="bcn-detail__notes" data-live="notes">
          <p class="bcn-detail__note bcn-detail__note--empty">None recorded.</p>
        </div>
      </div>
    </details>
  </section>
  <!-- …and 2 more like this (<section class="bcn-detail__section">) -->
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
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.bcn-dassign .bcn-status-chip {
  align-self: flex-start;
  width: fit-content;
}
.bcn-fdetail__rail .bcn-status-chip {
  align-self: flex-start;
  width: fit-content;
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
}
.bcn-funding {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-funding__table {
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
  width: 100%;
}
.bcn-funding__table th,
.bcn-funding__table td {
  padding: var(--spacing-150) var(--spacing-200);
  font-size: var(--font-size-200);
  text-align: left;
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-funding__table thead th {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-funding--slim .bcn-funding__table thead th {
  font-size: var(--typography-label-md-font-size, var(--typography-label-xs-font-size, 12px));
  font-weight: var(--typography-label-md-font-weight, var(--typography-font-weight-medium));
  color: var(--form-label-color);
}
.bcn-funding--slim .bcn-funding__table:not(:has([data-cell="sub"])) .bcn-funding__edit {
  width: 60%;
}
.bcn-funding__num {
  text-align: right;
}
.bcn-funding__year {
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default);
}
.bcn-funding__muted {
  color: var(--color-content-default-secondary);
}
.bcn-funding__strong {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-funding__table tfoot th,
.bcn-funding__table tfoot td {
  border-top: 1px solid var(--color-border-default-strong);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  border-bottom: 0;
}
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
}
.bcn-rollup {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-rollup__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-rollup__from {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-rollup__bar {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default-subtle);
  height: 12px;
  display: flex;
  overflow: hidden;
}
.bcn-rollup__seg {
  background: var(--_c);
  height: 100%;
  display: block;
}
.bcn-rollup__seg + .bcn-rollup__seg {
  box-shadow: -1px 0 0 var(--color-background-elevation-raised);
}
.bcn-rollup__counts {
  align-items: center;
  gap: var(--spacing-100) var(--spacing-400);
  font-size: var(--font-size-100);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  display: flex;
}
.bcn-rollup__total {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
}
.bcn-rollup__count {
  align-items: center;
  gap: var(--spacing-150);
  font-variant-numeric: tabular-nums;
  display: inline-flex;
}
.bcn-rollup__dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
  width: 9px;
  height: 9px;
}
.bcn-detail {
  gap: var(--spacing-700);
  flex-direction: column;
  display: flex;
}
.bcn-detail__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-detail__section--flush {
  border-top: 1px solid var(--color-border-default-subtle);
  padding-top: var(--spacing-200);
}
.bcn-detail__title {
  padding-bottom: var(--spacing-200);
  border-bottom: 1px solid var(--color-border-default);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.3;
}
.bcn-detail__rows {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-detail__notes {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-detail__note {
  font-size: var(--font-size-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.55;
}
.bcn-detail__note--empty {
  color: var(--color-content-default-tertiary);
  font-style: italic;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--form-label-color` | `#525252` | component |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-700` | `3rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
