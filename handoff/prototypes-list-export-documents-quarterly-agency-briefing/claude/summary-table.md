# Summary table

One line per commitment: Commitment (its code), Title, and how many requirements it holds, under full-width permit-section rows.

## Key decisions
- Same single-table build as the other list PDFs: one <thead> that repeats on every page.

## Done when
- The requirement count on each line equals the requirements printed under that commitment in the detail.

## Markup
```html
<table class="bcn-doc-summary">
  <colgroup>
    <col style="width: 18%" />
    <col />
    <col style="width: 16%" />
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Commitment</th>
      <th scope="col">Title</th>
      <th scope="col">Requirements</th>
    </tr>
  </thead>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">COA 7</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 7.5</th>
      <td>Phase 2 Project Operations Report</td>
      <td>1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">COA 10</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.3</th>
      <td>Tracking Habitat Feature Disturbances and GIS Reporting</td>
      <td>4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.5</th>
      <td>Reporting Approved Habitat Maps</td>
      <td>1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.12</th>
      <td>Monthly Compliance Report</td>
      <td>1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.13</th>
      <td>Annual Status Report</td>
      <td>1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.15</th>
      <td>Final Mitigation Report</td>
      <td>1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.15.1</th>
      <td>Mitigation Status Report Before ITP Expiration</td>
      <td>1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.18.1</th>
      <td>Monitoring Plan and Report Review and Finalization Process</td>
      <td>1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 10.27.3</th>
      <td>Hydraulic Testing Reports</td>
      <td>1</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="3">COA 11</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 11.3</th>
      <td>Covered Species Capture, Handling, and Reporting</td>
      <td>2</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 11.52.4</th>
      <td>Written Incident Report for CTS Take or Injury</td>
      <td>1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">COA 11.68.4</th>
      <td>Written Incident Report for GGS Take or Injury</td>
      <td>1</td>
    </tr>
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
- `--bcn-print-font-size-body`: 9pt _(component)_
- `--bcn-print-font-size-entry`: 9.5pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--bcn-print-font-size-subgroup`: 10.5pt _(component)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 400 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
