# Readiness strip

The census figure below the map: a single stacked bar of all work areas by derived status with a "Ready to drill N of M" summary and a per-status legend with live counts. It answers "how close is the program to clear?" at a glance and is scoped by the same Map filter bar as the markers.

## Key decisions
- One horizontal stacked bar, segments in STATUS_ORDER (the readiness ramp), each sized by its share of the total — the bar reads as a progression toward "ready", not an arbitrary pie.
- Provisional-block gets a red/white DIAGONAL STRIPE (repeating-linear-gradient), not a solid fill — same "not solidified" story as the hollow markers; a solid segment would read as confirmed Blocked and overstate the risk.
- Counts (bar segments, summary, legend) all derive from statusCounts() over the filtered set — one computation feeds every number so they can never disagree.

## Gotchas
- The strip is scoped by the Map facets, so its numbers are of the FILTERED set, not the whole program — label/tooltip must make the denominator honest when a filter is active.
- Zero-count statuses are dropped from the bar (flex 0) but kept in the legend marked empty, so the ramp stays legible without empty slivers.

## Done when
- The bar sums to the (filtered) total; provisional-block renders as a diagonal stripe; the "Ready to drill N of M" summary and every legend count agree with the bar and update when a Map facet changes.

## Markup
```html
<section class="readiness" aria-label="Work areas by clearance status">
  <div class="readiness__head">
    <span class="readiness__title">Work areas by clearance status</span>
    <span class="readiness__summary">
      Ready to drill <strong id="rs-ready">8</strong>
      <span id="rs-total">of 231 work areas</span>
    </span>
  </div>
  <div
    class="readiness__bar"
    id="rs-bar"
    role="img"
    aria-label="8 of 231 work areas ready"
  >
    <div
      title="Blocked: 3"
      style="height: 100%; flex: 0 0 1.2987%; background: var(--st-blocked)"
    ></div>
    <div
      title="Provisional Block: 18"
      style="
        height: 100%;
        flex: 0 0 7.79221%;
        background: repeating-linear-gradient(
          135deg,
          var(--st-provisional-block) 0 4px,
          var(--color-surface) 4px 7px
        );
      "
    ></div>
    <div
      title="Inaccessible: 2"
      style="height: 100%; flex: 0 0 0.865801%; background: var(--st-inaccessible)"
    ></div>
    <div
      title="Not Surveyed: 200"
      style="height: 100%; flex: 0 0 86.5801%; background: var(--st-not-surveyed)"
    ></div>
    <div
      title="Cleared w/ Stipulations: 2"
      style="
        height: 100%;
        flex: 0 0 0.865801%;
        background: var(--st-cleared-stipulations);
      "
    ></div>
    <div
      title="Cleared: 6"
      style="height: 100%; flex: 0 0 2.5974%; background: var(--st-cleared)"
    ></div>
  </div>
  <ul class="readiness__legend">
    <li class="readiness__legend-item" data-rs-item="blocked" data-empty="false">
      <span class="readiness__swatch" style="background: var(--st-blocked)"></span>
      <span class="readiness__legend-label">Blocked</span>
      <span class="readiness__legend-count" data-rs-count="blocked">3</span>
    </li>
    <li
      class="readiness__legend-item"
      data-rs-item="provisional-block"
      data-empty="false"
    >
      <span
        class="readiness__swatch"
        style="
          background: var(--color-surface);
          border: 2px solid var(--st-provisional-block);
          box-sizing: border-box;
        "
      ></span>
      <span class="readiness__legend-label">Provisional Block</span>
      <span class="readiness__legend-count" data-rs-count="provisional-block">18</span>
    </li>
    <li class="readiness__legend-item" data-rs-item="inaccessible" data-empty="false">
      <span class="readiness__swatch" style="background: var(--st-inaccessible)"></span>
      <span class="readiness__legend-label">Inaccessible</span>
      <span class="readiness__legend-count" data-rs-count="inaccessible">2</span>
    </li>
    <li class="readiness__legend-item" data-rs-item="not-surveyed" data-empty="false">
      <span class="readiness__swatch" style="background: var(--st-not-surveyed)"></span>
      <span class="readiness__legend-label">Not Surveyed</span>
      <span class="readiness__legend-count" data-rs-count="not-surveyed">200</span>
    </li>
    <li class="readiness__legend-item" data-rs-item="survey-scheduled" data-empty="true">
      <span
        class="readiness__swatch"
        style="background: var(--st-survey-scheduled)"
      ></span>
      <span class="readiness__legend-label">Survey Scheduled</span>
      <span class="readiness__legend-count" data-rs-count="survey-scheduled">0</span>
    </li>
    <li
      class="readiness__legend-item"
      data-rs-item="cleared-stipulations"
      data-empty="false"
    >
      <span
        class="readiness__swatch"
        style="background: var(--st-cleared-stipulations)"
      ></span>
      <span class="readiness__legend-label">Cleared w/ Stipulations</span>
      <span class="readiness__legend-count" data-rs-count="cleared-stipulations">2</span>
    </li>
    <li class="readiness__legend-item" data-rs-item="cleared" data-empty="false">
      <span class="readiness__swatch" style="background: var(--st-cleared)"></span>
      <span class="readiness__legend-label">Cleared</span>
      <span class="readiness__legend-count" data-rs-count="cleared">6</span>
    </li>
  </ul>
</section>
```

## Styles
```css
.readiness {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.readiness__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.readiness__title {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.readiness__summary {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.readiness__summary strong {
  color: var(--st-cleared);
  font-weight: var(--font-weight-bold);
}
.readiness__bar {
  display: flex;
  height: 10px;
  border-radius: var(--radius-full);
  overflow: hidden;
  background: var(--color-background);
}
.readiness__bar > div + div {
  border-left: 1px solid var(--color-surface);
}
.readiness__legend {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-200) var(--spacing-500);
}
.readiness__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.readiness__swatch {
  width: 12px;
  height: 12px;
  border-radius: var(--radius-050);
  flex-shrink: 0;
}
.readiness__legend-label {
  color: var(--color-text-primary);
}
.readiness__legend-count {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
}
.readiness__legend-item[data-empty="true"] {
  opacity: 0.4;
}
```

## Tokens
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
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
