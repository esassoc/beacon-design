# Summary table

Action list PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/annual-reporting/

![Summary table, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-annual-reporting/claude/summary-table.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-annual-reporting/claude/summary-table.phone.png

One line per action: Action, Frequency, Commitments, under full-width type rows.

## Key decisions

- Same single-table build as the obligation list: one <thead> that repeats on every page, groups as `th colspan` rows.
- No Type column: the type is the group row.
- Column widths: Action 62%, Commitments 22%.

## Done when

- Page 2 of a long list starts with the column header.

## Components

- `bcn-doc-summary` (spoke) · `src/components/bcn/BcnDocSummary.astro`

## Markup

_12 repeated elements are collapsed in the markup below; the comments say where._

```html
<table class="bcn-doc-summary">
  <colgroup>
    <col style="width: 62%" />
    <col />
    <col style="width: 22%" />
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Action</th>
      <th scope="col">Frequency</th>
      <th scope="col">Commitments</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Financial</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fund Annual Endowment Deposit Amount Installment</th>
      <td>Recurring</td>
      <td>COA 12.12, COA 12.12.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Provide Annual Long-Term HM Lands Management Funding</th>
      <td>Recurring</td>
      <td>COA 12.12</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Reporting</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Deliver Annual Status Report to CDFW</th>
      <td>Recurring</td>
      <td>COA 10.13, COA 11.35, COA 11.36, COA 12</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Deliver Final Phase Mitigation Report to CDFW</th>
      <td>One time</td>
      <td>COA 10.15</td>
    </tr>
    <!-- …and 12 more like this (<tr class="bcn-doc-summary__row">) -->
  </tbody>
</table>
```

## Styles

```css
.bcn-doc-summary {
  border-collapse: collapse;
  table-layout: fixed;
  inline-size: 100%;
  font-size: var(--bcn-print-font-size-body);
}
.bcn-doc-summary thead th {
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) 0;
  text-align: start;
  vertical-align: bottom;
  font-size: var(--bcn-print-font-size-meta);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  border-block-end: 1px solid var(--color-content-default);
}
.bcn-doc-summary__group th {
  padding: var(--spacing-400) 0 var(--spacing-100);
  text-align: start;
  font-size: var(--bcn-print-font-size-subgroup);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  border-block-end: 1px solid var(--color-border-default-strong);
}
.bcn-doc-summary__group,
.bcn-doc-summary__section,
.bcn-doc-summary__run {
  break-after: avoid;
}
.bcn-doc-summary__row > {
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) 0;
  text-align: start;
  vertical-align: top;
  font-weight: var(--typography-font-weight-regular);
  border-block-start: 1px solid var(--color-border-default-subtle);
  overflow-wrap: anywhere;
}
.bcn-doc-summary__row > th {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-doc-summary__row {
  break-inside: avoid;
}
.bcn-doc-summary__section + .bcn-doc-summary__row >,
.bcn-doc-summary__run + .bcn-doc-summary__row >,
.bcn-doc-summary__group + .bcn-doc-summary__row > {
  border-block-start: 0;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-print-font-size-body` | `9pt` | component |
| `--bcn-print-font-size-meta` | `8pt` | component |
| `--bcn-print-font-size-subgroup` | `10.5pt` | component |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
