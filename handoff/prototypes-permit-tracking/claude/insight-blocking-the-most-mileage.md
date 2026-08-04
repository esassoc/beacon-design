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
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
