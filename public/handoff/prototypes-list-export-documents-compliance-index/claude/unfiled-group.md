# Unfiled group

Items the index has not placed yet, as the LAST group: category "Unfiled", subcategory "Needs a home", the same bin the Compliance Index page shows.

## Key decisions
- In prod an action is unfiled when Action.ComplianceIndexSubcategoryID is null; an obligation, when it has no subcategory. Nothing is computed.
- Unfiled prints last in both the summary and the detail, whatever the categories' sort order.
- An empty Unfiled group does not print.

## Gotchas
- The prototype decides "unfiled" itself: an action files under the subcategory holding more than half of its requirements, else Unfiled (7 actions in the fixture). That rule exists only because the fixture has no subcategory field. Do not port it.

## Done when
- A project with one action whose subcategory is cleared prints that action under Unfiled › Needs a home, after every other category.

## Markup
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
            Permittee prepares and delivers the Annual Status Report to CDFW by January 31
            each year until CDFW accepts the Final Mitigation Report. It summarizes the
            year's Monthly Compliance Reports, the annotated MMRP table, incidental take,
            disturbance acreage, the 10 percent HM lands stay-ahead demonstration for each
            Covered Species, the fish salvage implementation and results summary, and the
            annual barge monitoring summary with riverbank and vegetation imagery.
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
            <p class="bcn-doc-entry__codes" aria-label="Commitments">
              COA 11.20, COA 11.27
            </p>
          </div>
          <p class="bcn-doc-entry__desc">
            Permittee's contracting and procurement staff insert the required
            environmental language into contractor procurement documents: litter-law
            obligations in every contract with a contractor working in Project
            construction sites or maintenance areas, and the erosion control material
            standard in the specifications or special provisions of the construction bid
            solicitation package. The executed contracts and the issued bid package carry
            the clauses as their record.
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
                  throughout specifications or special provisions included in the
                  construction bid solicitation package
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
        <article class="bcn-doc-entry" data-doc-entry="action">
          <div class="bcn-doc-entry__head">
            <h5 class="bcn-doc-entry__title">
              Install wildlife under-crossing culverts and speed limit signage
            </h5>
            <p class="bcn-doc-entry__codes" aria-label="Commitments">
              COA 11.12, COA 11.39.1
            </p>
          </div>
          <p class="bcn-doc-entry__desc">
            Install wildlife under-crossing culverts and post speed limit and wildlife
            crossing signage on roads through covered species habitat.
          </p>
          <div class="bcn-doc-entry__facts">
            <dl class="bcn-doc-facts bcn-doc-facts--entry">
              <div class="bcn-doc-facts__pair">
                <dt>Type</dt>
                <dd>Avoidance &amp; BMPs</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Frequency</dt>
                <dd>One time</dd>
              </div>
            </dl>
          </div>
          <dl class="bcn-doc-occ">
            <div class="bcn-doc-occ__line">
              <dt>Bouldin Island Launch Shaft</dt>
              <dd>Overdue<span class="bcn-doc-occ__aside">Due 2026-12-03</span></dd>
            </div>
          </dl>
        </article>
        <article class="bcn-doc-entry" data-doc-entry="action">
          <div class="bcn-doc-entry__head">
            <h5 class="bcn-doc-entry__title">
              Report Construction-Phase CBB and MALI Survey Results
            </h5>
            <p class="bcn-doc-entry__codes" aria-label="Commitments">
              COA 11.97, COA 11.105
            </p>
          </div>
          <p class="bcn-doc-entry__desc">
            Permittee reports the construction-phase CBB and MALI survey efforts conducted
            each year work occurs in suitable habitat to CDFW in the Monthly Compliance
            Report and summarizes them in each Annual Status Report.
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
                <dd>
                  reported to CDFW within the Monthly Compliance Reporting and summarized
                  within each Annual Status Report
                </dd>
              </div>
            </dl>
          </div>
          <dl class="bcn-doc-occ">
            <div class="bcn-doc-occ__line">
              <dt>Bethany Reservoir Aqueduct</dt>
              <dd>
                Not Started<span class="bcn-doc-occ__aside">Due 2026-12-24</span
                ><span class="bcn-doc-occ__aside">2 of 3 done</span>
              </dd>
            </div>
          </dl>
        </article>
        <article class="bcn-doc-entry" data-doc-entry="action">
          <div class="bcn-doc-entry__head">
            <h5 class="bcn-doc-entry__title">
              Report GPS-Recorded CBB Nest and MALI Locations to CDFW
            </h5>
            <p class="bcn-doc-entry__codes" aria-label="Commitments">
              COA 11.98, COA 11.106
            </p>
          </div>
          <p class="bcn-doc-entry__desc">
            The Designated Biologist records a discovered CBB nest location with GPS and
            reports it to CDFW within 24 hours of finding the nest, and records MALI
            occurrence locations with GPS and reports them to CDFW under COA 11.1.
          </p>
          <div class="bcn-doc-entry__facts">
            <dl class="bcn-doc-facts bcn-doc-facts--entry">
              <div class="bcn-doc-facts__pair">
                <dt>Type</dt>
                <dd>Reporting</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Frequency</dt>
                <dd>As needed</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Timing</dt>
                <dd>within 24 hours (one calendar day) of finding the nest</dd>
              </div>
            </dl>
          </div>
          <dl class="bcn-doc-occ">
            <div class="bcn-doc-occ__line">
              <dt>Intake B — North Delta</dt>
              <dd>In Progress</dd>
            </div>
          </dl>
        </article>
        <article class="bcn-doc-entry" data-doc-entry="action">
          <div class="bcn-doc-entry__head">
            <h5 class="bcn-doc-entry__title">
              Report MALI and CTS Finds to the Designated Biologist
            </h5>
            <p class="bcn-doc-entry__codes" aria-label="Commitments">
              COA 11.51.1, COA 11.108
            </p>
          </div>
          <p class="bcn-doc-entry__desc">
            Project personnel immediately notify the Designated Biologist when MALI is
            found within a construction site or maintenance area, or when a CTS is found
            within a construction site or 75 feet beyond it.
          </p>
          <div class="bcn-doc-entry__facts">
            <dl class="bcn-doc-facts bcn-doc-facts--entry">
              <div class="bcn-doc-facts__pair">
                <dt>Type</dt>
                <dd>Reporting</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Frequency</dt>
                <dd>As needed</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Timing</dt>
                <dd>shall notify the Designated Biologist(s) immediately</dd>
              </div>
            </dl>
          </div>
          <dl class="bcn-doc-occ">
            <div class="bcn-doc-occ__line">
              <dt>Intake B — North Delta</dt>
              <dd>Overdue</dd>
            </div>
          </dl>
        </article>
        <article class="bcn-doc-entry" data-doc-entry="action">
          <div class="bcn-doc-entry__head">
            <h5 class="bcn-doc-entry__title">
              Submit Preconstruction Survey Results for CDFW Approval
            </h5>
            <p class="bcn-doc-entry__codes" aria-label="Commitments">
              COA 11.42, COA 11.105
            </p>
          </div>
          <p class="bcn-doc-entry__desc">
            Permittee compiles the Designated Biologist's preconstruction floristic MALI
            survey results and protocol CTS survey results, including the required
            buffers, and submits them to CDFW in the appropriate Construction Phase
            Authorization Package for written approval before Covered Activities begin.
          </p>
          <div class="bcn-doc-entry__facts">
            <dl class="bcn-doc-facts bcn-doc-facts--entry">
              <div class="bcn-doc-facts__pair">
                <dt>Type</dt>
                <dd>Approval &amp; Consultation</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Frequency</dt>
                <dd>One time</dd>
              </div>
              <div class="bcn-doc-facts__pair">
                <dt>Timing</dt>
                <dd>prior to initiating Covered Activities</dd>
              </div>
            </dl>
          </div>
          <dl class="bcn-doc-occ">
            <div class="bcn-doc-occ__line">
              <dt>Southern Forebay &amp; Pumping Plant</dt>
              <dd>Not Started<span class="bcn-doc-occ__aside">Due 2026-11-24</span></dd>
            </div>
            <div class="bcn-doc-occ__line">
              <dt>Twin Cities Complex</dt>
              <dd>In Progress<span class="bcn-doc-occ__aside">Due 2026-11-23</span></dd>
            </div>
            <div class="bcn-doc-occ__line">
              <dt>Bouldin Island Launch Shaft</dt>
              <dd>Not Started<span class="bcn-doc-occ__aside">Due 2026-12-14</span></dd>
            </div>
          </dl>
        </article>
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
.bcn-doc-entry__reqs {
  margin: var(--spacing-150) 0 0;
  padding: 0;
  list-style: none;
}
.bcn-doc-entry__req + .bcn-doc-entry__req {
  margin-block-start: var(--spacing-150);
}
.bcn-doc-entry__req-name {
  font-weight: var(--typography-font-weight-medium);
  margin: 0;
}
.bcn-doc-entry__req-text {
  margin: var(--spacing-050) 0 0;
  max-inline-size: 46em;
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
- `--bcn-print-font-size-body`: 9pt _(component)_
- `--bcn-print-font-size-entry`: 9.5pt _(component)_
- `--bcn-print-font-size-group`: 13pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--bcn-print-font-size-subgroup`: 10.5pt _(component)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 400 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
