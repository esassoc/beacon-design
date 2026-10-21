# Insight — permits by status (census)

Permit Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracking/

![Insight — permits by status (census), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/insight-permits-by-status-census.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/insight-permits-by-status-census.phone.png

The left insight card: a census of permits grouped by permitting-ladder status (a count per status). The "where does the whole permit portfolio stand?" snapshot, JS-rendered from the store so it re-derives after every edit.

## Key decisions

- Counts PERMITS (not miles) — this card is portfolio health by the permitting ladder, the counterpart to the miles-weighted mileage strip.
- Ordered by the permitting-status ladder (PERMIT_STATUS_ORDER) so it reads as a pipeline, not an arbitrary tally.

## Gotchas

- Permit status (the ladder: not-started → in-preparation → submitted → under-review → issued, plus not-required) is a DIFFERENT vocabulary from the derived SEGMENT status (the readiness ramp). Do not conflate them — this card uses permit status; the map/mileage use derived segment status.

## Done when

- One row per permitting status with a live count, in ladder order; the counts move when a permit's status is edited.

## Markup

_4 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="ins-card" aria-label="Permits by status">
  <h3 class="ins-card__title">Permits by status</h3>
  <ul class="ins-list" id="ins-status">
    <li class="ins-row">
      <span class="ins-dot" style="background: var(--st-not-started)"></span>
      <span class="ins-row__label">Not Started</span>
      <span class="ins-bar"
        ><span
          style="
            display: block;
            height: 100%;
            border-radius: inherit;
            width: 14.285714285714285%;
            background: var(--st-not-started);
          "
        ></span
      ></span>
      <span class="ins-row__val">2</span>
    </li>
    <li class="ins-row">
      <span class="ins-dot" style="background: var(--st-in-preparation)"></span>
      <span class="ins-row__label">In Preparation</span>
      <span class="ins-bar"
        ><span
          style="
            display: block;
            height: 100%;
            border-radius: inherit;
            width: 21.428571428571427%;
            background: var(--st-in-preparation);
          "
        ></span
      ></span>
      <span class="ins-row__val">3</span>
    </li>
    <!-- …and 4 more like this (<li class="ins-row">) -->
  </ul>
</section>
```

## Styles

```css
.ins-card {
  gap: var(--spacing-200);
  padding: var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.ins-card__title {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.ins-list {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.ins-row {
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-200) 0;
  display: flex;
}
.ins-row + .ins-row {
  border-top: 1px solid var(--color-border-default-subtle);
}
.ins-row[data-ins-permit] {
  cursor: pointer;
  margin: 0 calc(-1 * var(--spacing-200));
  padding-inline: var(--spacing-200);
  border-radius: var(--radius-200);
}
.ins-row[data-ins-permit]:hover {
  background: var(--grid-row-bg-hover);
}
.ins-dot {
  border-radius: 50%;
  flex-shrink: 0;
  width: 9px;
  height: 9px;
}
.ins-row__label {
  min-width: 0;
  color: var(--color-content-default);
  flex-direction: column;
  flex: 1;
  gap: 1px;
  font-size: 0.875rem;
  display: flex;
}
.ins-row__val {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  display: flex;
}
.ins-bar {
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  flex: 0 0 72px;
  height: 6px;
  overflow: hidden;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-100` | `#efefef` | component |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--grid-row-bg-hover` | `#efefef` | component |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
