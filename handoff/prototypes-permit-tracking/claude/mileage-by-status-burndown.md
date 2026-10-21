# Mileage by status (burndown)

Permit Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracking/

![Mileage by status (burndown), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/mileage-by-status-burndown.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/mileage-by-status-burndown.phone.png

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

_6 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="burndown" aria-label="Mileage by permitting status">
  <div class="burndown__head">
    <span class="burndown__title">Mileage by status</span
    ><span class="burndown__summary"
      >Cleared to Construct <strong id="bd-cleared">10.6 mi</strong
      ><span id="bd-total">of 200.7 mi total · 5%</span></span
    >
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
    <!-- …and 3 more like this (<div>) -->
  </div>
  <ul class="burndown__legend">
    <li class="burndown__legend-item" data-bd-item="not-started" data-empty="false">
      <span class="burndown__swatch" style="background: var(--st-not-started)"></span
      ><span class="burndown__legend-label">Not Started</span
      ><span class="burndown__legend-mi" data-bd-mi="not-started">42.9 mi</span
      ><span class="burndown__legend-pct" data-bd-pct="not-started">21%</span>
    </li>
    <li class="burndown__legend-item" data-bd-item="in-preparation" data-empty="false">
      <span class="burndown__swatch" style="background: var(--st-in-preparation)"></span
      ><span class="burndown__legend-label">In Preparation</span
      ><span class="burndown__legend-mi" data-bd-mi="in-preparation">78.1 mi</span
      ><span class="burndown__legend-pct" data-bd-pct="in-preparation">39%</span>
    </li>
    <!-- …and 3 more like this (<li class="burndown__legend-item">) -->
  </ul>
</section>
```

## Styles

```css
.burndown {
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.burndown__head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.burndown__title {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.burndown__summary {
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
}
.burndown__summary strong {
  color: var(--st-cleared);
  font-weight: var(--typography-font-weight-bold);
}
.burndown__bar {
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  height: 10px;
  display: flex;
  overflow: hidden;
}
.burndown__bar > div + div {
  border-left: 1px solid var(--color-background-elevation-raised);
}
.burndown__legend {
  gap: var(--spacing-200) var(--spacing-500);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.burndown__legend-item {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
  display: flex;
}
.burndown__legend-item[data-empty="true"] {
  opacity: 0.4;
}
.burndown__swatch {
  border-radius: var(--radius-050);
  flex-shrink: 0;
  width: 12px;
  height: 12px;
}
.burndown__legend-label {
  color: var(--color-content-default);
}
.burndown__legend-mi {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.burndown__legend-pct {
  color: var(--color-content-default-tertiary);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-100` | `#efefef` | component |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--radius-050` | `.125rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--st-cleared` | `#1a9850` | component |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
