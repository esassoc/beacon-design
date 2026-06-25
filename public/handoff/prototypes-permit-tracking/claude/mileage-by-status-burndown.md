# Mileage by status (burndown)

A SECONDARY supporting figure under the map: a single full-width stacked bar of route-miles by derived status, headlined "Cleared to Construct {miles} of {total} total · {pct}%", with a per-status legend (miles + percent each). It quantifies what the map shows in color — how much of the route is actually buildable.

## Key decisions
- Miles-weighted, never permit counts — route-miles cleared is what lets crews roll. The headline foregrounds the cleared figure; the rest of the ramp is context.
- The bar is build-time SSR for a clean first paint, then re-derived in the browser after every permit edit (footageByStatus) so it always agrees with the map and the exec rollup.
- Zero-mileage statuses are dropped from the bar but kept in the legend (data-empty) so the ramp stays legible without empty slivers.

## Gotchas
- It is deliberately secondary — supporting the map, not competing with it. Keep it visually quieter than the map and the timeline headline.
- Percentages are of TOTAL route feet, not of the filtered subset, unless the Paths/Status scope is applied — keep the denominator consistent with whatever scope is active.

## Done when
- A stacked miles-by-status bar with a "Cleared to Construct X of Y · Z%" headline and a miles+percent legend; it moves when a permit edit changes derived status.

## Markup
```html
<section class="burndown" aria-label="Mileage by permitting status">
  <div class="burndown__head">
    <span class="burndown__title">Mileage by status</span>
    <span class="burndown__summary">
      Cleared to Construct <strong id="bd-cleared">10.6 mi</strong>
      <span id="bd-total">of 200.7 mi total · 5%</span>
    </span>
  </div>
  <div class="burndown__bar" id="bd-bar" role="img" aria-label="5 percent cleared">
    <div
      title="Not Started: 42.9 mi"
      style="height: 100%; flex: 0 0 21.3733%; background: var(--st-not-started)"
    ></div>
    <div
      title="In Preparation: 78.1 mi"
      style="height: 100%; flex: 0 0 38.9205%; background: var(--st-in-preparation)"
    ></div>
    <div
      title="Submitted: 31.4 mi"
      style="height: 100%; flex: 0 0 15.6409%; background: var(--st-submitted)"
    ></div>
    <div
      title="Under Review: 37.7 mi"
      style="height: 100%; flex: 0 0 18.7949%; background: var(--st-under-review)"
    ></div>
    <div
      title="Cleared to Construct: 10.6 mi"
      style="height: 100%; flex: 0 0 5.2704%; background: var(--st-cleared)"
    ></div>
  </div>
  <ul class="burndown__legend">
    <li class="burndown__legend-item" data-bd-item="not-started" data-empty="false">
      <span class="burndown__swatch" style="background: var(--st-not-started)"></span>
      <span class="burndown__legend-label">Not Started</span>
      <span class="burndown__legend-mi" data-bd-mi="not-started">42.9 mi</span>
      <span class="burndown__legend-pct" data-bd-pct="not-started">21%</span>
    </li>
    <li class="burndown__legend-item" data-bd-item="in-preparation" data-empty="false">
      <span class="burndown__swatch" style="background: var(--st-in-preparation)"></span>
      <span class="burndown__legend-label">In Preparation</span>
      <span class="burndown__legend-mi" data-bd-mi="in-preparation">78.1 mi</span>
      <span class="burndown__legend-pct" data-bd-pct="in-preparation">39%</span>
    </li>
    <li class="burndown__legend-item" data-bd-item="submitted" data-empty="false">
      <span class="burndown__swatch" style="background: var(--st-submitted)"></span>
      <span class="burndown__legend-label">Submitted</span>
      <span class="burndown__legend-mi" data-bd-mi="submitted">31.4 mi</span>
      <span class="burndown__legend-pct" data-bd-pct="submitted">16%</span>
    </li>
    <li class="burndown__legend-item" data-bd-item="under-review" data-empty="false">
      <span class="burndown__swatch" style="background: var(--st-under-review)"></span>
      <span class="burndown__legend-label">Under Review</span>
      <span class="burndown__legend-mi" data-bd-mi="under-review">37.7 mi</span>
      <span class="burndown__legend-pct" data-bd-pct="under-review">19%</span>
    </li>
    <li class="burndown__legend-item" data-bd-item="cleared" data-empty="false">
      <span class="burndown__swatch" style="background: var(--st-cleared)"></span>
      <span class="burndown__legend-label">Cleared to Construct</span>
      <span class="burndown__legend-mi" data-bd-mi="cleared">10.6 mi</span>
      <span class="burndown__legend-pct" data-bd-pct="cleared">5%</span>
    </li>
  </ul>
</section>
```

## Styles
```css
.burndown {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.burndown__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.burndown__title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.burndown__summary {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.burndown__summary strong {
  color: var(--st-cleared);
  font-weight: var(--font-weight-bold);
}
.burndown__bar {
  display: flex;
  height: 10px;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--bcn-gray-100);
}
.burndown__bar > div + div {
  border-left: 1px solid var(--color-surface);
}
.burndown__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-200) var(--spacing-500);
}
.burndown__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.burndown__swatch {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-050);
  flex-shrink: 0;
}
.burndown__legend-label {
  color: var(--color-text-primary);
}
.burndown__legend-mi {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.burndown__legend-pct {
  color: var(--color-text-tertiary);
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-050`: .125rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--st-cleared`: #1a9850 _(component)_
