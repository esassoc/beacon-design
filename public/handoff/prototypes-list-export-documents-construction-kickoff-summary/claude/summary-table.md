# Summary table

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

## Markup
```html
<table class="bcn-doc-summary">
  <colgroup>
    <col style="width: 56%" />
    <col />
    <col />
    <col style="width: 20%" />
  </colgroup>
  <thead>
    <tr>
      <th scope="col">Obligation</th>
      <th scope="col">Class</th>
      <th scope="col">Audience</th>
      <th scope="col">Commitments</th>
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
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Database of historic contamination and hazardous materials inspections
      </th>
      <td>Monitor</td>
      <td>Monitors</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hazardous Materials Container Labeling</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hazardous Materials in Designated Storage</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Hazardous Materials Storage Duration Limit</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Material Safety Data Sheets provided to site personnel</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.21</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Petroleum Storage Containment</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.22</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Refueling and equipment servicing</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Daily contaminant leak check and maintenance of vehicles and equipment
      </th>
      <td>Monitor</td>
      <td>Monitors</td>
      <td>COA 9.13</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Daily inspection of equipment in contact with water for petroleum leaks
      </th>
      <td>Monitor</td>
      <td>Monitors</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Fuel Transfer Containment</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Refueling Practices</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.13</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Refueling Setback from Water</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.13</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Spill prevention and response</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment Cleaning Before Water Contact</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Oil Absorbent Booms in Place</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spill Containment and Response</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spill Kits On Site</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.21, COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spill Kits On Site</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.21, COA 11.22</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Spill Response</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.14</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Staging Area Spill Containment</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.22</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="4">Lighting</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Lighting near habitat and waters</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">
        Access road location assessment before visual barrier installation
      </th>
      <td>Monitor</td>
      <td>Monitors</td>
      <td>COA 11.10</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Intake Lighting Restricted from the River Channel</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.9</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Lighting Color Near Habitat</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.8</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Night Lighting Spill Control</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.8, COA 11.47</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__group">
      <th scope="colgroup" colspan="4">Site conduct</th>
    </tr>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Access routes and parking</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment Confined to Access Routes</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.55.1, COA 11.69</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment confined to designated access routes</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.41, COA 11.65</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Equipment Storage Setback from Aquatic Habitat</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Staging Area Confinement</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Use of Established Access Routes</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.10, COA 9.11</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Personal items and conduct</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">No Pets, Campfires or Firearms On Site</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.20</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Speed limits</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Nighttime Speed Limit</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Paved Road Speed Limit</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Speed Limit Near Habitat</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.11, COA 11.39.1, COA 11.55.1</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Speed Limit Posting</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.11</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Unpaved Road Speed Limit</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.11, COA 11.29</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Wildlife Crossing Signage</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.11</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Trash and food waste</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Covered Food Waste Containers</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.20</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Trash Abatement</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 9.6</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Trash Load Covering</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.20</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Trash Removal Cadence</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.20</td>
    </tr>
  </tbody>
  <tbody>
    <tr class="bcn-doc-summary__section">
      <th scope="colgroup" colspan="4">Work hours</th>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Daytime Work Hour Limit</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.7, COA 11.46</td>
    </tr>
    <tr class="bcn-doc-summary__row">
      <th scope="row">Night Vehicle Travel Caution</th>
      <td>Adhere</td>
      <td>Crews</td>
      <td>COA 11.7</td>
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
