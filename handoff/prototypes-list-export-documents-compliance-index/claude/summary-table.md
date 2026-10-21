# Summary table

Compliance Index PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/compliance-index/

![Summary table, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-compliance-index/claude/summary-table.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-compliance-index/claude/summary-table.phone.png

One line per item across the whole index, with category, subcategory and kind as full-width rows over one repeating header.

## Key decisions

- Same single-table build as the list PDFs; the kind label is a third full-width row inside each subcategory.

## Done when

- Every printed page of the summary starts with the Item / Type / Commitments header.

## Components

- `bcn-doc-summary` (spoke) · `src/components/bcn/BcnDocSummary.astro`

## Markup

_84 repeated elements are collapsed in the markup below; the comments say where._

```html
<table class="bcn-doc-summary">
  <colgroup>
    <col style="width: 56%" />
    <col style="width: 24%" />
    <col />
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Type</th>
      <th scope="col">Commitments</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">Agency reporting and approvals</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Agency approvals</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Calculate Phase Security Amount Before Phase Approval</th>
      <td>Financial</td>
      <td>COA 13.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Consult CDFW on Federal Biological Opinions</th>
      <td>Approval &amp; Consultation</td>
      <td>COA 4</td>
    </tr>
    <!-- …and 20 more like this (<tr class="bcn-doc-summary__row">) -->
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="3">Non-compliance reporting</th>
    </tr>
    <tr class="bcn-doc-summary__run">
      <th scope="colgroup" colspan="3">Actions</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of Inability to Comply with the ITP</th>
      <td>Reporting</td>
      <td>COA 9.3</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report ITP Non-Compliance to CDFW</th>
      <td>Reporting</td>
      <td>COA 10.2</td>
    </tr>
  </tbody>
  <!-- …and 64 more like this (<tbody>) -->
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
.bcn-doc-summary__run th {
  padding: var(--spacing-150) 0 var(--spacing-050);
  text-align: start;
  font-size: var(--bcn-print-font-size-meta);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
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
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
