# Summary table

Obligation list PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/construction-kickoff-summary/

![Summary table, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/summary-table.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/summary-table.phone.png

One line per obligation, ahead of the detail: Obligation, Class, Audience, Commitments. It scans like a table of contents for a crew lead who needs to find one duty fast.

## Key decisions

- ONE <table> for the whole document, with the category and subcategory as full-width rows (`th colspan`), so the column header repeats at the top of every printed page and a group never restarts the columns.
- No descriptions and no Applies When in the summary. With prose columns the index's summary ran 53 pages; without them, 28.
- Column widths: Obligation 56%, Commitments 20%, the rest share what is left (table-layout: fixed).

## Gotchas

- Chromium repeats a <thead> on each page only while the table stays display: table. Do not make it a grid or flex for layout.
- Keep `break-inside: avoid` on each row and `break-after: avoid` on the group rows, or a heading prints alone at the foot of a page.

## Done when

- On a list that runs past one page, page 2 starts with the column header.

## Components

- `bcn-doc-summary` (spoke) · `src/components/bcn/BcnDocSummary.astro`

## Markup

_18 repeated elements are collapsed in the markup below; the comments say where._

```html
<table class="bcn-doc-summary">
  <colgroup>
    <col style="width: 56%" />
    <col />
    <!-- …and 2 more like this (<col>) -->
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Obligation</th>
      <th scope="col">Class</th>
      <!-- …and 2 more like this (<th>) -->
    </tr>
  </thead>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="4">Hazards</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Fire prevention</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fire Suppression Supplies On Site</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.18</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation clearing method for fire prevention</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.18</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Vegetation Clearing Method for Fire Prevention</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.18</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Chemicals and fuels on site</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Concrete Washwater Containment</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.22, COA 11.26</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Contaminated Soil Segregation and Removal</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.21</td>
    </tr>
    <!-- …and 6 more like this (<tr class="bcn-doc-summary__row">) -->
  </tbody>
  <!-- …and 8 more like this (<tbody>) -->
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
.bcn-doc-summary__section th {
  padding: var(--spacing-250) 0 var(--spacing-100);
  text-align: start;
  font-size: var(--bcn-print-font-size-entry);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
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
| `--bcn-print-font-size-entry` | `9.5pt` | component |
| `--bcn-print-font-size-meta` | `8pt` | component |
| `--bcn-print-font-size-subgroup` | `10.5pt` | component |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
