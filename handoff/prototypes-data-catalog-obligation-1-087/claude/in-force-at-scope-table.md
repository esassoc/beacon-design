# In force at (scope table)

The full-width table of components the obligation applies at — the positional sibling of the Action page's "Tracked Actions" section. Four columns: component, type, the activity that carries it, and an evidence count.

## Key decisions
- DELIBERATELY NOT CALLED IMPLEMENTATIONS. An Action's implementation is a trackable instance with status, owner, due date and completion — that is ActionImplementation in prod. An obligation's instances are not enumerable (the world generates them: per rain, per encounter, per day of work), so there is nothing to instantiate. A row here is an applicability assertion plus an evidence anchor, and carries none of those four columns.
- A mini-table, not a second AG Grid. The Action page justifies a grid because its rows carry status and are sortable; four read-only columns inside a detail page do not.
- Component names come from the project's real fixture (src/data/component-dashboard.ts POPULATED), reused so this table names the same components as every other surface in the spoke.

## Gotchas
- THE ROWS ARE EXAMPLE SCOPE. The registry carries no scope, and whether obligations get scope rows AT ALL is an open model question. They are derived deterministically from the obligation id (no Math.random, no Date.now) purely so the table's shape can be reviewed — reload twice and diff nothing.
- The first version of this used a stride of 7 to pick components from a 7-entry fixture, so every row picked the SAME component. Any derivation like this needs a stride of 1, or an explicit distinct check.

## Done when
- The table lists 2 to 4 distinct components — never the same component twice — each with the activity that carries the obligation.
- An obligation whose activities resolve to no components renders the esa-empty-state instead of an empty table.

## Markup
```html
<section class="stack bcn-oscope" data-gap="sm" aria-label="In force at">
  <h2 class="type-section-title bcn-oscope__title">
    In force at<span
      class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
      ><span class="esa-badge__text">2</span></span
    >
  </h2>
  <table class="bcn-mt" role="table" data-fill="" style="--_tracks: auto auto auto auto">
    <thead role="rowgroup">
      <tr role="row">
        <th scope="col" role="columnheader">Component</th>
        <th scope="col" role="columnheader">Type</th>
        <th scope="col" role="columnheader">Carried by</th>
        <th class="bcn-mt--end" scope="col" role="columnheader">Evidence</th>
      </tr>
    </thead>
    <tbody role="rowgroup">
      <tr role="row">
        <td role="cell">Twin Cities Complex</td>
        <td role="cell">Tunnel shaft · Staging</td>
        <td role="cell">Vehicle travel on site</td>
        <td class="bcn-mt--end bcn-mt--num" role="cell">4</td>
      </tr>
      <tr role="row">
        <td role="cell">Intake C — North Delta</td>
        <td role="cell">Screened intake · Sacramento River</td>
        <td role="cell">Night work</td>
        <td class="bcn-mt--end bcn-mt--num" role="cell">5</td>
      </tr>
    </tbody>
  </table>
</section>
```

## Styles
```css
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.type-section-title {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.bcn-oscope__title {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0;
  display: flex;
}
.bcn-mt {
  grid-template-columns: var(--_tracks);
  column-gap: var(--bcn-mt-column-gap, var(--spacing-300));
  inline-size: 100%;
  font-size: var(--font-size-150);
  display: grid;
}
.bcn-mt thead,
.bcn-mt tbody {
  display: contents;
}
.bcn-mt tr {
  grid-column: 1/-1;
  grid-template-columns: subgrid;
  align-items: baseline;
  display: grid;
}
.bcn-mt[data-fill] {
  justify-content: space-between;
}
.bcn-mt tr[hidden] {
  display: none;
}
.bcn-mt thead tr {
  border-block-end: 1px solid var(--color-border-default);
}
.bcn-mt tbody tr:not([hidden]) + tr:not([hidden]) {
  border-block-start: 1px solid var(--color-border-default);
}
.bcn-mt th {
  text-align: start;
  color: var(--color-content-default-secondary);
  padding-block: var(--spacing-100);
  min-inline-size: 0;
  font-weight: 600;
}
.bcn-mt td {
  padding-block: var(--spacing-150);
  color: var(--color-content-default-primary);
  min-inline-size: 0;
}
.bcn-mt th.bcn-mt--end,
.bcn-mt td.bcn-mt--end {
  text-align: end;
}
.bcn-mt--num {
  font-variant-numeric: tabular-nums;
}
.bcn-mt td a {
  color: var(--color-content-brand);
  font-weight: 600;
  text-decoration: none;
}
.bcn-mt td a:hover {
  text-decoration: underline;
}
.bcn-mt__dot {
  border-radius: var(--radius-full);
  block-size: 7px;
  inline-size: 7px;
  vertical-align: 1px;
  margin-inline-end: var(--spacing-100);
  display: inline-block;
}
.bcn-mt--truncate {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
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
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--gap`: .75rem _(component)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-heading-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-heading-md-font-size`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(semantic)_
- `--typography-heading-md-font-weight`: 550 _(semantic)_
- `--typography-heading-md-letter-spacing`: -.01em _(semantic)_
- `--typography-heading-md-line-height`: 1.3 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
