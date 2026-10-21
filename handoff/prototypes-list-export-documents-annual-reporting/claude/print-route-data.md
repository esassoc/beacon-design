# Print route + data

Action list PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/annual-reporting/

![Print route + data, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-annual-reporting/claude/print-route-data.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-annual-reporting/claude/print-route-data.phone.png

An action list as the PDF its Export card downloads: title block, a summary table with one line per action, then every action in full from a new page, grouped by action type.

## Key decisions

- Print route: `action-list/:actionListID` in print.routes.ts, a child of PrintLayoutComponent beside `report/:reportID`, guarded by printAuthGuard.
- Data: the endpoint the list's tracking tree and the CSV already read, `actionListsActionListIDTrackingGet` (ActionListTrackingActionDto[]), plus the list detail for its Name and Description.
- Per action: Name, RequirementType (the group), FrequencyName, Commitments' codes, and ActionImplementations for the status lines.
- Download: `GET action-lists/{actionListID}/generate-pdf`, the same shape as the obligation list's, file named `{list.Name}.pdf`. Letter paper via the PdfService paper option.
- Groups are action types, A–Z, actions A–Z inside each. One level only, so entry titles sit one heading level below the type.

## Gotchas

- ActionListTrackingActionDto has no description and no timing. Extend it with the action's Text (printed as the description) rather than fetching each action.
- Timing in the prototype is the permit's stated timing sentence. Prod stores the schedule as structured fields (ActionScheduleDto: deadline milestone and offset, recurrence). If no stated-timing text exists, print the schedule as one sentence or leave Timing off; do not invent a field.
- The CSV keeps one row per occurrence. The PDF does not: see the next section.

## Done when

- Every action on the list appears once in the summary and once in the detail, under its type, in the same order in both.

## Components

- `bcn-doc` (spoke) · `src/components/bcn/BcnDocSheet.astro`
- `bcn-doc-entry` (spoke) · `src/components/bcn/BcnDocEntry.astro`
- `bcn-doc-facts` (spoke) · `src/components/bcn/BcnDocFacts.astro`
- `bcn-doc-groups` (spoke) · `src/components/bcn/BcnDocGroups.astro`
- `bcn-doc-occ` (spoke) · `src/components/bcn/BcnDocOccurrences.astro`
- `bcn-doc-summary` (spoke) · `src/components/bcn/BcnDocSummary.astro`

## Markup

_26 repeated elements are collapsed in the markup below; the comments say where._

```html
<article class="bcn-doc" data-doc="" data-doc-kind="action-list">
  <header class="bcn-doc__head">
    <img class="bcn-doc__logo" src="/beacon-design/images/dcp/dwr-logo.png" alt="DWR" />
    <h1 class="bcn-doc__title">Annual Reporting</h1>
    <p class="bcn-doc__desc">Actions that feed the annual compliance report.</p>
    <div class="bcn-doc__facts">
      <dl class="bcn-doc-facts bcn-doc-facts--title">
        <div class="bcn-doc-facts__pair">
          <dt>Type</dt>
          <dd>Action List</dd>
        </div>
        <div class="bcn-doc-facts__pair">
          <dt>Project</dt>
          <dd>Delta Conveyance</dd>
        </div>
        <!-- …and 2 more like this (<div class="bcn-doc-facts__pair">) -->
      </dl>
    </div>
  </header>
  <div class="bcn-doc__body">
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
    <div class="bcn-doc-groups">
      <section class="bcn-doc-groups__group">
        <h2 class="bcn-doc-groups__h2">Financial</h2>
        <section class="bcn-doc-groups__section">
          <div class="bcn-doc-groups__run">
            <div class="bcn-doc-groups__entries">
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Fund Annual Endowment Deposit Amount Installment
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">
                    COA 12.12, COA 12.12.3
                  </p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Each year beginning in the fiscal year SWP Contractor charges cease to be
                  available, the Permittee deposits at least 10 percent of the PAR-required
                  Endowment Deposit Amount, adjusted for inflation and present value, into the
                  mutually agreed account, until the Endowment is fully funded over a maximum of 10
                  years. Each installment amount is as approved by CDFW in writing.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>Recurring</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>
                        over a maximum 10-year period, in annual amounts of at least 10%, commencing
                        the fiscal year that SWP charges to the SWP Contractors are no longer an
                        available funding source
                      </dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Twin Cities Complex</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2026-09-12</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Bouldin Island Geotechnical Exploration</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2026-06-25</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Byron Tract Forebay</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2027-03-15</span
                      ><span class="bcn-doc-occ__aside">2 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Provide Annual Long-Term HM Lands Management Funding
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 12.12</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  After CDFW approves an HM lands site, the Permittee provides that site's long-term
                  management funding every year, in the amount set by the CDFW-approved Property
                  Analysis Record or equivalent, adjusted for inflation and for actual management
                  costs as CDFW approves, on written terms acceptable to CDFW.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>Recurring</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>
                        After obtaining CDFW approval of the HM lands, Permittee shall provide
                        long-term management funding for the perpetual management of the HM lands
                      </dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Twin Cities Complex</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2026-07-13</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Bouldin Island Geotechnical Exploration</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2026-10-24</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Byron Tract Forebay</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2026-09-22</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>
        </section>
      </section>
      <section class="bcn-doc-groups__group">
        <h2 class="bcn-doc-groups__h2">Reporting</h2>
        <section class="bcn-doc-groups__section">
          <div class="bcn-doc-groups__run">
            <div class="bcn-doc-groups__entries">
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">Deliver Annual Status Report to CDFW</h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">
                    COA 10.13, COA 11.35, COA 11.36, COA 12
                  </p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee prepares and delivers the Annual Status Report to CDFW by January 31
                  each year until CDFW accepts the Final Mitigation Report. It summarizes the year's
                  Monthly Compliance Reports, the annotated MMRP table, incidental take, disturbance
                  acreage, the 10 percent HM lands stay-ahead demonstration for each Covered
                  Species, the fish salvage implementation and results summary, and the annual barge
                  monitoring summary with riverbank and vegetation imagery.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
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
                  <h3 class="bcn-doc-entry__title">
                    Deliver Final Phase Mitigation Report to CDFW
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 10.15</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Within 45 days of completing Covered Activities and all mitigation measures for a
                  Project Phase — and again after all Phases are complete — the Designated Biologist
                  or Biological Monitor prepares and Permittee delivers a Final Phase Mitigation
                  Report to CDFW summarizing the Phase's Monthly Compliance Reports and Annual
                  Status Reports, MMRP implementation dates, incidental take and impacts, Covered
                  Activity start and end dates, an effectiveness assessment and recommendations.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>One time</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>
                        no later than 45 days after completion of Covered Activities and all
                        mitigation measures for each Project Phase
                      </dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Twin Cities Complex</dt>
                    <dd>Not Started<span class="bcn-doc-occ__aside">Due 2026-07-10</span></dd>
                  </div>
                </dl>
              </article>
              <!-- …and 12 more like this (<article class="bcn-doc-entry">) -->
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</article>
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
.bcn-doc {
  inline-size: var(--bcn-print-letter-width);
  min-block-size: var(--bcn-print-letter-height);
  padding: var(--bcn-print-margin);
  background: var(--bcn-print-paper);
  border: 1px solid var(--color-border-default);
  box-shadow: var(--shadow-200);
  color: var(--color-content-default);
  font-family: var(--typography-font-family-sans);
  font-size: var(--bcn-print-font-size-body);
  line-height: var(--bcn-print-line-height);
  margin-inline: auto;
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
.bcn-doc__desc {
  margin: var(--spacing-200) 0 0;
  max-inline-size: 42em;
  font-size: var(--bcn-print-font-size-entry);
}
.bcn-doc__facts {
  margin-block-start: var(--spacing-400);
}
@media print {
  .bcn-doc {
    min-block-size: 0;
    inline-size: auto;
    box-shadow: none;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    border: 0;
    padding: 0;
  }
}
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
.bcn-doc-groups {
  break-before: page;
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
.bcn-doc-groups__run + .bcn-doc-groups__run {
  margin-block-start: var(--spacing-300);
}
.bcn-doc-groups__entries > * + * {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-print-font-size-body` | `9pt` | component |
| `--bcn-print-font-size-entry` | `9.5pt` | component |
| `--bcn-print-font-size-group` | `13pt` | component |
| `--bcn-print-font-size-meta` | `8pt` | component |
| `--bcn-print-font-size-subgroup` | `10.5pt` | component |
| `--bcn-print-font-size-title` | `20pt` | component |
| `--bcn-print-letter-height` | `11in` | component |
| `--bcn-print-letter-width` | `8.5in` | component |
| `--bcn-print-line-height` | `1.4` | component |
| `--bcn-print-logo-height` | `54px` | component |
| `--bcn-print-margin` | `20mm` | component |
| `--bcn-print-paper` | `#fff` | component |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--line-height-tight` | `1.3` | primitive |
| `--shadow-200` | `0 4px 20px -4px #0000000f` | component |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
