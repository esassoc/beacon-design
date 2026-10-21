# Unfiled group

Compliance Index PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/compliance-index/

![Unfiled group, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-compliance-index/claude/unfiled-group.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-compliance-index/claude/unfiled-group.phone.png

Items the index has not placed yet, as the LAST group: category "Unfiled", subcategory "Needs a home", the same bin the Compliance Index page shows.

## Key decisions

- In prod an action is unfiled when Action.ComplianceIndexSubcategoryID is null; an obligation, when it has no subcategory. Nothing is computed.
- Unfiled prints last in both the summary and the detail, whatever the categories' sort order.
- An empty Unfiled group does not print.

## Gotchas

- The prototype decides "unfiled" itself: an action files under the subcategory holding more than half of its requirements, else Unfiled (7 actions in the fixture). That rule exists only because the fixture has no subcategory field. Do not port it.

## Done when

- A project with one action whose subcategory is cleared prints that action under Unfiled › Needs a home, after every other category.

## Components

- `bcn-doc-entry` (spoke) · `src/components/bcn/BcnDocEntry.astro`
- `bcn-doc-facts` (spoke) · `src/components/bcn/BcnDocFacts.astro`
- `bcn-doc-groups` (spoke) · `src/components/bcn/BcnDocGroups.astro`
- `bcn-doc-occ` (spoke) · `src/components/bcn/BcnDocOccurrences.astro`

## Markup

_5 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-doc-groups__group">
  <h2 class="bcn-doc-groups__h2">Unfiled</h2>
  <section class="bcn-doc-groups__section">
    <h3 class="bcn-doc-groups__h3">Needs a home</h3>
    <div class="bcn-doc-groups__run">
      <h4 class="bcn-doc-groups__h4">Actions</h4>
      <div class="bcn-doc-groups__entries">
        <article class="bcn-doc-entry" data-doc-entry="action">
          <div class="bcn-doc-entry__head">
            <h5 class="bcn-doc-entry__title">Deliver Annual Status Report to CDFW</h5>
            <p class="bcn-doc-entry__codes" aria-label="Commitments">
              COA 10.13, COA 11.35, COA 11.36, COA 12
            </p>
          </div>
          <p class="bcn-doc-entry__desc">
            Permittee prepares and delivers the Annual Status Report to CDFW by January 31 each year
            until CDFW accepts the Final Mitigation Report. It summarizes the year's Monthly
            Compliance Reports, the annotated MMRP table, incidental take, disturbance acreage, the
            10 percent HM lands stay-ahead demonstration for each Covered Species, the fish salvage
            implementation and results summary, and the annual barge monitoring summary with
            riverbank and vegetation imagery.
          </p>
          <div class="bcn-doc-entry__facts">
            <dl class="bcn-doc-facts bcn-doc-facts--entry">
              <div class="bcn-doc-facts__pair">
                <dt>Type</dt>
                <dd>Reporting</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Frequency</dt>
                <dd>Recurring</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Timing</dt>
                <dd>no later than January 31 of every year</dd>
              </div>
            </dl>
          </div>
          <dl class="bcn-doc-occ">
            <div class="bcn-doc-occ__line">
              <dt>Intake C — North Delta</dt>
              <dd>
                Not Started<span class="bcn-doc-occ__aside">Due 2026-12-17</span
                ><span class="bcn-doc-occ__aside">1 of 3 done</span>
              </dd>
            </div>
            <div class="bcn-doc-occ__line">
              <dt>Bethany Reservoir Aqueduct</dt>
              <dd>
                Not Started<span class="bcn-doc-occ__aside">Due 2026-12-04</span
                ><span class="bcn-doc-occ__aside">1 of 3 done</span>
              </dd>
            </div>
          </dl>
        </article>
        <article class="bcn-doc-entry" data-doc-entry="action">
          <div class="bcn-doc-entry__head">
            <h5 class="bcn-doc-entry__title">
              Incorporate Litter and Erosion Control Language in Contractor Contracts
            </h5>
            <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.20, COA 11.27</p>
          </div>
          <p class="bcn-doc-entry__desc">
            Permittee's contracting and procurement staff insert the required environmental language
            into contractor procurement documents: litter-law obligations in every contract with a
            contractor working in Project construction sites or maintenance areas, and the erosion
            control material standard in the specifications or special provisions of the
            construction bid solicitation package. The executed contracts and the issued bid package
            carry the clauses as their record.
          </p>
          <div class="bcn-doc-entry__facts">
            <dl class="bcn-doc-facts bcn-doc-facts--entry">
              <div class="bcn-doc-facts__pair">
                <dt>Type</dt>
                <dd>Other</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Frequency</dt>
                <dd>One time</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Timing</dt>
                <dd>
                  throughout specifications or special provisions included in the construction bid
                  solicitation package
                </dd>
              </div>
            </dl>
          </div>
          <dl class="bcn-doc-occ">
            <div class="bcn-doc-occ__line">
              <dt>Byron Tract Forebay</dt>
              <dd>Not Started<span class="bcn-doc-occ__aside">Due 2026-11-25</span></dd>
            </div>
            <div class="bcn-doc-occ__line">
              <dt>Intake B — North Delta</dt>
              <dd>Not Started<span class="bcn-doc-occ__aside">Due 2026-03-04</span></dd>
            </div>
            <div class="bcn-doc-occ__line">
              <dt>Intake C — North Delta</dt>
              <dd>In Progress<span class="bcn-doc-occ__aside">Due 2026-09-07</span></dd>
            </div>
          </dl>
        </article>
        <!-- …and 5 more like this (<article class="bcn-doc-entry">) -->
      </div>
    </div>
  </section>
</section>
```

## Styles

```css
.bcn-doc-facts {
  flex-wrap: wrap;
  margin: 0;
  display: flex;
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
.bcn-doc-occ {
  gap: var(--spacing-050) var(--spacing-400);
  margin: var(--spacing-200) 0 0;
  font-size: var(--bcn-print-font-size-meta);
  grid-template-columns: max-content 1fr;
  display: grid;
}
.bcn-doc-occ__line {
  display: contents;
}
.bcn-doc-occ__line dt {
  color: var(--color-content-default-secondary);
}
.bcn-doc-occ__line dd {
  font-weight: var(--typography-font-weight-medium);
  margin: 0;
}
.bcn-doc-occ__aside {
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
  margin-inline-start: var(--spacing-300);
}
.bcn-doc-entry {
  padding-block: var(--spacing-250);
  break-inside: avoid;
}
.bcn-doc-entry__head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-500);
  display: flex;
}
.bcn-doc-entry__title {
  font-size: var(--bcn-print-font-size-entry);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-doc-entry__codes {
  text-align: end;
  max-inline-size: 40%;
  font-size: var(--bcn-print-font-size-meta);
  color: var(--color-content-default-secondary);
  flex: none;
  margin: 0;
}
.bcn-doc-entry__desc {
  margin: var(--spacing-100) 0 0;
  max-inline-size: 46em;
}
.bcn-doc-entry__facts {
  margin-block-start: var(--spacing-150);
}
.bcn-doc-groups__group + .bcn-doc-groups__group {
  margin-block-start: var(--spacing-600);
}
.bcn-doc-groups__h2 {
  border-block-end: 1px solid var(--color-content-default);
  font-size: var(--bcn-print-font-size-group);
  font-weight: var(--typography-font-weight-semibold);
  line-height: var(--line-height-tight);
  color: var(--color-content-default);
  break-after: avoid;
  margin: 0;
  padding-block-end: var(--spacing-150);
}
.bcn-doc-groups__section {
  margin-block-start: var(--spacing-400);
}
.bcn-doc-groups__h3 {
  margin: 0 0 var(--spacing-100);
  font-size: var(--bcn-print-font-size-subgroup);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  break-after: avoid;
}
.bcn-doc-groups__run + .bcn-doc-groups__run {
  margin-block-start: var(--spacing-300);
}
.bcn-doc-groups__h4 {
  padding-block: var(--spacing-100);
  font-size: var(--bcn-print-font-size-meta);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  break-after: avoid;
  margin: 0;
}
.bcn-doc-groups__entries > * + * {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-print-font-size-entry` | `9.5pt` | component |
| `--bcn-print-font-size-group` | `13pt` | component |
| `--bcn-print-font-size-meta` | `8pt` | component |
| `--bcn-print-font-size-subgroup` | `10.5pt` | component |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--line-height-tight` | `1.3` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
