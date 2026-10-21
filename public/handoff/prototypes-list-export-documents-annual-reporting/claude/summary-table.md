# Summary table

One line per action: Action, Frequency, Commitments, under full-width type rows.

## Key decisions
- Same single-table build as the obligation list: one <thead> that repeats on every page, groups as `th colspan` rows.
- No Type column: the type is the group row.
- Column widths: Action 62%, Commitments 22%.

## Done when
- Page 2 of a long list starts with the column header.

## Markup
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
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of Likely Impact Exceedance and Revised Schedule</th>
      <td>As needed</td>
      <td>COA 10.9</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Notify CDFW of TRBL Colony or Roost Disturbance</th>
      <td>As needed</td>
      <td>COA 11.86, COA 11.88</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Construction-Phase CBB and MALI Survey Results</th>
      <td>Recurring</td>
      <td>COA 11.97, COA 11.105</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Habitat Disturbance Acreage and GIS Layers to CDFW</th>
      <td>Recurring</td>
      <td>COA 10.3, COA 10.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Hydroacoustic and Pile Driving Monitoring Results</th>
      <td>Recurring</td>
      <td>COA 11.33</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Intake Sediment Deposition Assessment to CDFW</th>
      <td>Recurring</td>
      <td>COA 10.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Report Mercury Monitoring Results to CDFW</th>
      <td>Recurring</td>
      <td>COA 11.30</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Covered Species Observations to CNDDB</th>
      <td>As needed</td>
      <td>COA 10.14</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Phase 2 Project Operations Report to CDFW</th>
      <td>One time</td>
      <td>COA 7.5</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Photo Monitoring Documentation Report</th>
      <td>Recurring</td>
      <td>COA 10.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Submit Restoration Monitoring Reports to CDFW</th>
      <td>Recurring</td>
      <td>COA 12.3.4</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Upload Stormwater Forms and Records to SMARTS</th>
      <td>Recurring</td>
      <td>COA 11.25</td>
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
