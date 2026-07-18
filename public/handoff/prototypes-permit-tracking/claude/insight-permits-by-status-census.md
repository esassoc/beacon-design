# Insight — permits by status (census)

The left insight card: a census of permits grouped by permitting-ladder status (a count per status). The "where does the whole permit portfolio stand?" snapshot, JS-rendered from the store so it re-derives after every edit.

## Key decisions
- Counts PERMITS (not miles) — this card is portfolio health by the permitting ladder, the counterpart to the miles-weighted mileage strip.
- Ordered by the permitting-status ladder (PERMIT_STATUS_ORDER) so it reads as a pipeline, not an arbitrary tally.

## Gotchas
- Permit status (the ladder: not-started → in-preparation → submitted → under-review → issued, plus not-required) is a DIFFERENT vocabulary from the derived SEGMENT status (the readiness ramp). Do not conflate them — this card uses permit status; the map/mileage use derived segment status.

## Done when
- One row per permitting status with a live count, in ladder order; the counts move when a permit's status is edited.

## Markup
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
    <li class="ins-row">
      <span class="ins-dot" style="background: var(--st-submitted)"></span>
      <span class="ins-row__label">Submitted</span>
      <span class="ins-bar"
        ><span
          style="
            display: block;
            height: 100%;
            border-radius: inherit;
            width: 14.285714285714285%;
            background: var(--st-submitted);
          "
        ></span
      ></span>
      <span class="ins-row__val">2</span>
    </li>
    <li class="ins-row">
      <span class="ins-dot" style="background: var(--st-under-review)"></span>
      <span class="ins-row__label">Under Review</span>
      <span class="ins-bar"
        ><span
          style="
            display: block;
            height: 100%;
            border-radius: inherit;
            width: 21.428571428571427%;
            background: var(--st-under-review);
          "
        ></span
      ></span>
      <span class="ins-row__val">3</span>
    </li>
    <li class="ins-row">
      <span class="ins-dot" style="background: var(--st-cleared)"></span>
      <span class="ins-row__label">Issued</span>
      <span class="ins-bar"
        ><span
          style="
            display: block;
            height: 100%;
            border-radius: inherit;
            width: 28.57142857142857%;
            background: var(--st-cleared);
          "
        ></span
      ></span>
      <span class="ins-row__val">4</span>
    </li>
    <li class="ins-row">
      <span class="ins-dot" style="background: var(--st-not-required)"></span>
      <span class="ins-row__label">Not Required</span>
      <span class="ins-bar"
        ><span
          style="
            display: block;
            height: 100%;
            border-radius: inherit;
            width: 0%;
            background: var(--st-not-required);
          "
        ></span
      ></span>
      <span class="ins-row__val">0</span>
    </li>
  </ul>
</section>
```

## Styles
```css
.ins-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.ins-card__title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.ins-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.ins-card__sub {
  margin: calc(-1 * var(--spacing-100)) 0 0;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.ins-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-200) 0;
}
.ins-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  flex-shrink: 0;
}
.ins-row__label {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 0.875rem;
  color: var(--color-text-primary);
}
.ins-bar {
  flex: 0 0 72px;
  height: 6px;
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  overflow: hidden;
}
.ins-row__val {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ins-row + .ins-row {
  border-top: 1px solid var(--color-border-light);
}
.ins-row[data-ins-permit] {
  cursor: pointer;
  margin: 0 calc(-1 * var(--spacing-200));
  padding-inline: var(--spacing-200);
  border-radius: var(--radius-200);
}
.ins-row__sub {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
