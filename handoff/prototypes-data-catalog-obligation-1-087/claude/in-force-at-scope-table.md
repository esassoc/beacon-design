# In force at (scope table)

Obligation detail (Data Catalog) · source prototype: https://esassoc.github.io/beacon-design/prototypes/data-catalog-obligation/1-087/

![In force at (scope table), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligation-1-087/claude/in-force-at-scope-table.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligation-1-087/claude/in-force-at-scope-table.phone.png

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

## Components

- `bcn-mt` (spoke) · `src/components/bcn/BcnMiniTable.astro`
- `bcn-oscope` (spoke) · `src/components/bcn/BcnObligationScope.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app

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
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
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
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
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

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--gap` | `.75rem` | component |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
