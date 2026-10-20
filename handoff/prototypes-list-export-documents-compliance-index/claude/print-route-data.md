# Print route + data

The project's whole Compliance Index as one document: every category › subcategory, and inside each subcategory its actions, then its obligations. Items with no subcategory print last under Unfiled.

## Key decisions
- Print route: `compliance-index-list/:complianceIndexListID` in print.routes.ts, a child of PrintLayoutComponent, guarded by printAuthGuard.
- Data: a NEW read, `GET /projects/{projectID}/compliance-index/export-data`, on ComplianceIndexController. The existing `GET /projects/{projectID}/compliance-index` returns the categories and subcategories without the obligations, so it cannot feed this document.
- The new DTO: categories in their SortOrder, each with subcategories in theirs, each with Actions (by Action.ComplianceIndexSubcategoryID: Name, Text, RequirementType, FrequencyName, commitment codes, implementations) and Obligations (by their subcategory: title, description, ObligationClass, audience, TriggerText, commitment codes). Plus the project name and the two totals.
- Inside a subcategory: actions first, then obligations, each run under a small label ("Actions", "Obligations" in the tenant's terms), each A–Z.
- Download: `GET compliance-index-lists/{complianceIndexListID}/generate-pdf`, file named `{list.Name}.pdf`, Letter via the PdfService paper option. The canonical index is a list like the rest, so it needs no project-keyed route.
- A version prints its own categories and subcategories in its own order, each subcategory holding the items of the canonical subcategories it draws from. Its title block adds Type "Compliance Index List" and prints its description; the canonical index's title already names its type.
- Summary columns: Item 56%, Type 24% (an action's RequirementType, an obligation's class), Commitments.

## Gotchas
- It is long. About 600 items print as roughly 137 Letter pages (28 of them the summary). GeneratePdfFromAngularRoute waits for NetworkIdle with a fixed navigation timeout; measure on a full project, and if it runs close, move the export to the event consumer path ReportPackageZipConsumer uses rather than raising the timeout.
- Action entries in the index show their Type in the facts row (the group is a subcategory, not a type); obligation entries show Class, Audience, Applies When.
- Entry titles here sit under three headings (category, subcategory, the kind label), so they are one level deeper than in the list PDFs.

## Done when
- On the canonical index, every action and every obligation on the project appears exactly once in the summary and once in the detail. On a version, every item of every subcategory it draws from appears once, even where two of those subcategories are merged.
- The title block's Actions and Obligations counts equal the rows printed of each kind.

## Markup
```html
<header class="bcn-doc__head">
  <img class="bcn-doc__logo" src="/beacon-design/images/dcp/dwr-logo.png" alt="DWR" />
  <h1 class="bcn-doc__title">Compliance Index</h1>
  <div class="bcn-doc__facts">
    <dl class="bcn-doc-facts bcn-doc-facts--title">
      <div class="bcn-doc-facts__pair">
        <dt>Project</dt>
        <dd>Delta Conveyance</dd>
      </div>
      <div class="bcn-doc-facts__pair">
        <dt>Exported</dt>
        <dd>2026-10-19</dd>
      </div>
      <div class="bcn-doc-facts__pair">
        <dt>Actions</dt>
        <dd>267</dd>
      </div>
      <div class="bcn-doc-facts__pair">
        <dt>Obligations</dt>
        <dd>333</dd>
      </div>
    </dl>
  </div>
</header>
```

## Styles
```css
.bcn-doc-facts {
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-doc-facts--title {
  gap: var(--spacing-100) var(--spacing-500);
  font-size: var(--bcn-print-font-size-body);
}
.bcn-doc-facts--entry {
  gap: var(--spacing-050) var(--spacing-500);
  font-size: var(--bcn-print-font-size-meta);
}
.bcn-doc-facts__pair {
  gap: var(--spacing-150);
  min-inline-size: 0;
  display: flex;
}
.bcn-doc-facts dt {
  white-space: nowrap;
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-doc-facts dd {
  min-inline-size: 0;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc__head {
  border-block-end: 2px solid var(--color-content-default);
  margin-block-end: var(--spacing-500);
  padding-block-end: var(--spacing-400);
}
.bcn-doc__logo {
  block-size: var(--bcn-print-logo-height);
  inline-size: auto;
  margin-block-end: var(--spacing-500);
  display: block;
}
.bcn-doc__title {
  font-size: var(--bcn-print-font-size-title);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc__facts {
  margin-block-start: var(--spacing-400);
}
```

## Tokens
- `--bcn-print-font-size-body`: 9pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--bcn-print-font-size-title`: 20pt _(component)_
- `--bcn-print-logo-height`: 54px _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
