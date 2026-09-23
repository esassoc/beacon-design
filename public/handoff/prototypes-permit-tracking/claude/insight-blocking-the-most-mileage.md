# Insight — blocking the most mileage

The right insight card: the actionable one — pending permits ranked by the route-miles they gate, so leadership sees exactly which approvals would unlock the most construction. Each row is clickable and jumps straight to that permit's editor.

## Key decisions
- Ranks by route-miles gated, not by permit age or count — it answers "what is the single highest-leverage approval to chase?"
- Only pending (not-yet-cleared) permits appear; an issued permit blocks nothing.
- Each row carries data-ins-permit and opens the permit editor on click (delegated on .insights) — the insight is a launch point for action, not a dead readout.

## Gotchas
- The mileage a permit gates counts only segments where it is the GATING (least-advanced) permit — a permit behind an even-less-advanced one on the same segment is not what is blocking that segment.
- Keep the row → editor jump (openPermit); without it the card is just a chart and loses its point.

## Done when
- Pending permits ranked by gated route-miles; clicking a row opens that permit's editor drawer.

## Markup
```html
<section class="ins-card" aria-label="Blocking the most mileage">
  <h3 class="ins-card__title">Blocking the most mileage</h3>
  <p class="ins-card__sub">Pending permits, ranked by the route-miles they gate</p>
  <ul class="ins-list" id="ins-blockers">
    <li class="ins-row" data-ins-permit="uma-county-row" tabindex="0" role="button">
      <span class="ins-dot" style="background: var(--st-submitted)"></span>
      <span class="ins-row__label"
        >County Right-of-Way Permit<span class="ins-row__sub"
          >Umatilla County Public Works · 5 segments</span
        ></span
      >
      <span class="ins-row__val">98.8 mi<span class="ins-row__sub">gated</span></span>
    </li>
    <li class="ins-row" data-ins-permit="odot-permit" tabindex="0" role="button">
      <span class="ins-dot" style="background: var(--st-under-review)"></span>
      <span class="ins-row__label"
        >Right-of-Way &amp; Utility Permit<span class="ins-row__sub"
          >Oregon DOT · 3 segments</span
        ></span
      >
      <span class="ins-row__val">79.6 mi<span class="ins-row__sub">gated</span></span>
    </li>
    <li class="ins-row" data-ins-permit="or-dsl" tabindex="0" role="button">
      <span class="ins-dot" style="background: var(--st-in-preparation)"></span>
      <span class="ins-row__label"
        >Removal–Fill Permit<span class="ins-row__sub"
          >Oregon Dept. of State Lands · 3 segments</span
        ></span
      >
      <span class="ins-row__val">69.7 mi<span class="ins-row__sub">gated</span></span>
    </li>
    <li class="ins-row" data-ins-permit="benton-row" tabindex="0" role="button">
      <span class="ins-dot" style="background: var(--st-not-started)"></span>
      <span class="ins-row__label"
        >County Right-of-Way Permit<span class="ins-row__sub"
          >Benton County Public Works · 3 segments</span
        ></span
      >
      <span class="ins-row__val">31.1 mi<span class="ins-row__sub">gated</span></span>
    </li>
    <li class="ins-row" data-ins-permit="ecology-stormwater" tabindex="0" role="button">
      <span class="ins-dot" style="background: var(--st-in-preparation)"></span>
      <span class="ins-row__label"
        >Construction Stormwater (NPDES)<span class="ins-row__sub"
          >WA Dept. of Ecology · 2 segments</span
        ></span
      >
      <span class="ins-row__val">29.9 mi<span class="ins-row__sub">gated</span></span>
    </li>
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
.ins-card__sub {
  margin: calc(-1 * var(--spacing-100)) 0 0;
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
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
.ins-row__sub {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
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
```

## Tokens
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--grid-row-bg-hover`: #efefef _(component)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
