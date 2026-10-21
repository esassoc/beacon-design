# Print route + data

Obligation list PDF · source prototype: https://esassoc.github.io/beacon-design/prototypes/list-export-documents/construction-kickoff-summary/

![Print route + data, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/print-route-data.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-list-export-documents-construction-kickoff-summary/claude/print-route-data.phone.png

An obligation list as the PDF its Export card downloads: a title block, a summary table with one line per obligation, then every obligation in full from a new page. It is the printed twin of the CSV: same list, same wording, same order.

## Key decisions

- Print route: `obligation-list/:obligationListID` in print.routes.ts, a child of PrintLayoutComponent beside `report/:reportID`, guarded by printAuthGuard like the rest.
- Data: the print component reads the same endpoint the list tree and the CSV read, `obligationListsObligationListIDTreeGet` (its Members, ObligationListTreeMemberDto), plus the list detail for its Name and Description. No new DTO.
- Per obligation it prints ListTitle (fallback ObligationTitle), ListDescription, ObligationClass, ObligationAudienceDisplayName, TriggerText (labelled "Applies When") and the Commitments' codes. These are the list's own wording, not the obligation registry's.
- Grouping is category › subcategory by ComplianceIndexCategoryName / ComplianceIndexSubcategoryName, in the order the list tree shows them; obligations A–Z inside a subcategory.
- Download: a new `GET obligation-lists/{obligationListID}/generate-pdf` modelled on ReportController.GenerateReportPdf, calling GeneratePdfFromAngularRoute($"obligation-list/{id}", tenant) and returning File(bytes, "application/pdf", $"{list.Name}.pdf").
- Build one grouping helper (the prototype's docOutline) that both the summary table and the detail render, so their order cannot drift.

## Gotchas

- Paper is LETTER, not A4. PdfService hard-codes Format = "A4" and an A4 viewport (794 × 1123). Add a paper option to GeneratePdfFromAngularRoute and pass Letter (816 × 1056 CSS px) for the three list-export routes, leaving the other routes on A4. The pdf-template skill says "design for A4"; these routes are the exception.
- Type is 9pt body and 8pt meta. That is under the 13px floor for screens on purpose: the floor does not apply to printed PDFs. Set it on the template, not on PrintLayoutComponent's 14px base, so other print routes are unchanged.
- PrintLayoutComponent renders into Shadow DOM with `all: revert`. The template's SCSS must declare its own table and heading styles; global app classes do not reach in.
- Prod's footer prints the document title and "Page N". The prototype prints "Page N of M". Adding the totalPages span changes every Angular-route PDF, so decide it once in PdfService.
- No evidence counts and no status on obligations: an obligation has no lifecycle.

## Done when

- Downloading from the Export card returns a Letter PDF named after the list, opening on the title block and summary table, with the detail starting on a new page.
- Every member of the list appears once in the summary and once in the detail, in the same order.

## Components

- `bcn-doc` (spoke) · `src/components/bcn/BcnDocSheet.astro`
- `bcn-doc-entry` (spoke) · `src/components/bcn/BcnDocEntry.astro`
- `bcn-doc-facts` (spoke) · `src/components/bcn/BcnDocFacts.astro`
- `bcn-doc-groups` (spoke) · `src/components/bcn/BcnDocGroups.astro`
- `bcn-doc-summary` (spoke) · `src/components/bcn/BcnDocSummary.astro`

## Markup

_36 repeated elements are collapsed in the markup below; the comments say where._

```html
<article class="bcn-doc" data-doc="" data-doc-kind="obligation-list">
  <header class="bcn-doc__head">
    <img class="bcn-doc__logo" src="/beacon-design/images/dcp/dwr-logo.png" alt="DWR" />
    <h1 class="bcn-doc__title">Construction Kickoff Summary</h1>
    <p class="bcn-doc__desc">
      Issued to each prime contractor at kickoff, and re-issued when a permit amendment changes a
      duty.
    </p>
    <div class="bcn-doc__facts">
      <dl class="bcn-doc-facts bcn-doc-facts--title">
        <div class="bcn-doc-facts__pair">
          <dt>Type</dt>
          <dd>Obligation List</dd>
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
    <div class="bcn-doc-groups">
      <section class="bcn-doc-groups__group">
        <h2 class="bcn-doc-groups__h2">Hazards</h2>
        <section class="bcn-doc-groups__section">
          <h3 class="bcn-doc-groups__h3">Fire prevention</h3>
          <div class="bcn-doc-groups__run">
            <div class="bcn-doc-groups__entries">
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">Fire Suppression Supplies On Site</h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.18</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  An extinguisher and a shovel ride with every crew working in dry vegetation.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Applies When</dt>
                      <dd>
                        During construction of the Bethany Complex or while undertaking maintenance
                        activities within the Bethany Complex
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">
                    Vegetation clearing method for fire prevention
                  </h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.18</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Hand removal of vegetation and/or weed whacking are the authorized methods for
                  vegetation removal along access roads, staging areas, and work areas within the
                  Bethany Complex prior to allowing heavy equipment and vehicles to access these
                  project sites after Covered Species preconstruction surveys and installment of
                  wildlife exclusion barriers.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Applies When</dt>
                      <dd>
                        Prior to allowing heavy equipment and vehicles to access these project sites
                        after Covered Species preconstruction surveys and installment of wildlife
                        exclusion barrier
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">
                    Vegetation Clearing Method for Fire Prevention
                  </h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 9.18</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Non-living vegetative debris shall be cleared from around the immediate work
                  footprint.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section class="bcn-doc-groups__section">
          <h3 class="bcn-doc-groups__h3">Chemicals and fuels on site</h3>
          <div class="bcn-doc-groups__run">
            <div class="bcn-doc-groups__entries">
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">Concrete Washwater Containment</h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.22, COA 11.26</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  storage of concrete, wash water, and other contaminants in watertight containment
                  structures
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                  </dl>
                </div>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">Contaminated Soil Segregation and Removal</h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.21</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  segregation, containment, and removal of contaminated soils to the approved
                  disposal site
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                  </dl>
                </div>
              </article>
              <!-- …and 6 more like this (<article class="bcn-doc-entry">) -->
            </div>
          </div>
        </section>
        <!-- …and 2 more like this (<section class="bcn-doc-groups__section">) -->
      </section>
      <section class="bcn-doc-groups__group">
        <h2 class="bcn-doc-groups__h2">Lighting</h2>
        <section class="bcn-doc-groups__section">
          <h3 class="bcn-doc-groups__h3">Lighting near habitat and waters</h3>
          <div class="bcn-doc-groups__run">
            <div class="bcn-doc-groups__entries">
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">
                    Access road location assessment before visual barrier installation
                  </h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.10</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  The Designated Biologist(s) and/or Biological Monitor(s) shall assess the
                  locations of the identified access roads prior to the installation of any visual
                  barriers.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Monitor</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Monitors</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Applies When</dt>
                      <dd>Prior to the installation of any visual barriers</dd>
                    </div>
                  </dl>
                </div>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">
                    Intake Lighting Restricted from the River Channel
                  </h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.9</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Temporary lighting on the north Delta intake structure or buildings associated
                  with the north Delta intakes may be utilized for CDFW approved construction phase
                  nighttime Covered Activities.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Applies When</dt>
                      <dd>
                        During approved construction phase Covered Activities shall not be
                        positioned such that lux can intersect the river channel, to the greatest
                        extent possible
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
              <!-- …and 2 more like this (<article class="bcn-doc-entry">) -->
            </div>
          </div>
        </section>
      </section>
      <section class="bcn-doc-groups__group">
        <h2 class="bcn-doc-groups__h2">Site conduct</h2>
        <section class="bcn-doc-groups__section">
          <h3 class="bcn-doc-groups__h3">Access routes and parking</h3>
          <div class="bcn-doc-groups__run">
            <div class="bcn-doc-groups__entries">
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">Equipment Confined to Access Routes</h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">
                    COA 11.55.1, COA 11.69
                  </p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Project-related vehicles shall access the Project construction site(s) during
                  Covered Activities using existing routes and shall not cross GGS habitat outside
                  of the Project construction site(s) unless otherwise authorized by CDFW.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Applies When</dt>
                      <dd>
                        During Covered Activities using existing routes and shall not cross GGS
                        habitat outside of the Project construction site(s) unless otherwise
                        authorized by CDFW
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">
                    Equipment confined to designated access routes
                  </h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.41, COA 11.65</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee shall confine movement of heavy equipment to existing or CDFW-approved
                  access roads or to locations at least 75 feet from flagged burrows.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                  </dl>
                </div>
              </article>
              <!-- …and 3 more like this (<article class="bcn-doc-entry">) -->
            </div>
          </div>
        </section>
        <section class="bcn-doc-groups__section">
          <h3 class="bcn-doc-groups__h3">Personal items and conduct</h3>
          <div class="bcn-doc-groups__run">
            <div class="bcn-doc-groups__entries">
              <article class="bcn-doc-entry" data-doc-entry="obligation">
                <div class="bcn-doc-entry__head">
                  <h4 class="bcn-doc-entry__title">No Pets, Campfires or Firearms On Site</h4>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.20</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee shall not permit pets, campfires, or firearms in Project construction
                  sites and site access routes, except firearms carried by authorized security
                  personnel or local, state, or federal law enforcement officials.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Class</dt>
                      <dd>Adhere</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Audience</dt>
                      <dd>Crews</dd>
                    </div>
                  </dl>
                </div>
              </article>
            </div>
          </div>
        </section>
        <!-- …and 3 more like this (<section class="bcn-doc-groups__section">) -->
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
