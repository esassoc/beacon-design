# Print route + data

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

## Markup
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
        <div class="bcn-doc-facts__pair">
          <dt>Exported</dt>
          <dd>2026-10-19</dd>
        </div>
        <div class="bcn-doc-facts__pair">
          <dt>Actions</dt>
          <dd>16</dd>
        </div>
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
        <tr class="bcn-doc-summary__row">
          <th scope="row">
            Notify CDFW of Likely Impact Exceedance and Revised Schedule
          </th>
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
                  Each year beginning in the fiscal year SWP Contractor charges cease to
                  be available, the Permittee deposits at least 10 percent of the
                  PAR-required Endowment Deposit Amount, adjusted for inflation and
                  present value, into the mutually agreed account, until the Endowment is
                  fully funded over a maximum of 10 years. Each installment amount is as
                  approved by CDFW in writing.
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
                        over a maximum 10-year period, in annual amounts of at least 10%,
                        commencing the fiscal year that SWP charges to the SWP Contractors
                        are no longer an available funding source
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
                    <dt>Bouldin Island Launch Shaft</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2027-03-10</span
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
                  After CDFW approves an HM lands site, the Permittee provides that site's
                  long-term management funding every year, in the amount set by the
                  CDFW-approved Property Analysis Record or equivalent, adjusted for
                  inflation and for actual management costs as CDFW approves, on written
                  terms acceptable to CDFW.
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
                        After obtaining CDFW approval of the HM lands, Permittee shall
                        provide long-term management funding for the perpetual management
                        of the HM lands
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
                    <dt>Bouldin Island Launch Shaft</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2026-08-31</span
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
                  <h3 class="bcn-doc-entry__title">
                    Deliver Annual Status Report to CDFW
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">
                    COA 10.13, COA 11.35, COA 11.36, COA 12
                  </p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee prepares and delivers the Annual Status Report to CDFW by
                  January 31 each year until CDFW accepts the Final Mitigation Report. It
                  summarizes the year's Monthly Compliance Reports, the annotated MMRP
                  table, incidental take, disturbance acreage, the 10 percent HM lands
                  stay-ahead demonstration for each Covered Species, the fish salvage
                  implementation and results summary, and the annual barge monitoring
                  summary with riverbank and vegetation imagery.
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
                  Within 45 days of completing Covered Activities and all mitigation
                  measures for a Project Phase — and again after all Phases are complete —
                  the Designated Biologist or Biological Monitor prepares and Permittee
                  delivers a Final Phase Mitigation Report to CDFW summarizing the Phase's
                  Monthly Compliance Reports and Annual Status Reports, MMRP
                  implementation dates, incidental take and impacts, Covered Activity
                  start and end dates, an effectiveness assessment and recommendations.
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
                        no later than 45 days after completion of Covered Activities and
                        all mitigation measures for each Project Phase
                      </dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Twin Cities Complex</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2026-07-10</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Notify CDFW of Likely Impact Exceedance and Revised Schedule
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 10.9</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  When impacts tracked for the Annual Status Report are likely to exceed
                  the permanent or temporary impacts CDFW approved for any Covered
                  Species, Permittee notifies CDFW and submits a revised Project Phase
                  schedule within 10 business days of that notice, keeping temporary
                  impacts within the COA 11.66 and 12.3 criteria.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>As needed</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>within 10 business days of the notification</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Intake C — North Delta</dt>
                    <dd>Not Started</dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Notify CDFW of TRBL Colony or Roost Disturbance
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">
                    COA 11.86, COA 11.88
                  </p>
                </div>
                <p class="bcn-doc-entry__desc">
                  The Designated Biologist or Biological Monitor consults CDFW immediately
                  when a TRBL colony is at risk, notifies CDFW within 24 hours when
                  Covered Activities are stopped for disrupting a colony or when nests or
                  nestlings are abandoned, works with CDFW on actions for surviving
                  nestlings, contacts CDFW when roost protective measures are not reducing
                  disruption, and files a written incident report within two days that is
                  carried into the Monthly Compliance Report and Annual Status Report.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>As needed</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>within 24 hours (one calendar day)</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Southern Forebay &amp; Pumping Plant</dt>
                    <dd>Not Started</dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Report Construction-Phase CBB and MALI Survey Results
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">
                    COA 11.97, COA 11.105
                  </p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee reports the construction-phase CBB and MALI survey efforts
                  conducted each year work occurs in suitable habitat to CDFW in the
                  Monthly Compliance Report and summarizes them in each Annual Status
                  Report.
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
                        reported to CDFW within the Monthly Compliance Reporting and
                        summarized within each Annual Status Report
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
                  <h3 class="bcn-doc-entry__title">
                    Report Habitat Disturbance Acreage and GIS Layers to CDFW
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">
                    COA 10.3, COA 10.5
                  </p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee attaches to each Monthly Compliance Report the current GIS
                  layers of suitable habitat features and disturbance with full metadata,
                  plus cumulatively disturbed acreage per Covered Species and the acreage
                  anticipated to be disturbed over the next 30 days. Updated per-species
                  maps and an annual summation of all habitat feature disturbance go to
                  CDFW with the Annual Status Report.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>Recurring</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>attached to the Monthly Compliance Report</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Intake B — North Delta</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2026-09-03</span
                      ><span class="bcn-doc-occ__aside">2 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Report Hydroacoustic and Pile Driving Monitoring Results
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.33</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee makes hydroacoustic monitoring results available to CDFW on
                  request and submits them in the Monthly Compliance Report, and provides
                  the annual pile driving monitoring information — including the sound
                  abatement plan performance evaluation and any threshold exceedances and
                  remediation — in the Annual Status Report.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>Recurring</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>submitted in the appropriate Monthly Compliance Report</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Bethany Reservoir Aqueduct</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2026-09-14</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Report Intake Sediment Deposition Assessment to CDFW
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 10.29</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Within 30 days of each annual sediment deposition inspection at the tee
                  screen bases, Permittee provides CDFW deposition estimates and an
                  assessment of sediment management device effectiveness and potential
                  impacts to fish screen performance.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>Recurring</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>Within 30 days of each inspection</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Bethany Reservoir Aqueduct</dt>
                    <dd>
                      On Hold<span class="bcn-doc-occ__aside">Due 2026-07-16</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Report Mercury Monitoring Results to CDFW
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.30</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee reports the information obtained through the Mercury
                  Management and Monitoring Plan in the Monthly Compliance Report and
                  summarizes it in the Annual Status Report for each year in-water Covered
                  Activities occur.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>Recurring</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>reported in the Monthly Compliance Report</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Intake C — North Delta</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2027-02-21</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Bethany Reservoir Aqueduct</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2026-12-22</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Submit Covered Species Observations to CNDDB
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 10.14</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  The Designated Biologist or Biological Monitor files each Covered
                  Species observation with CDFW's California Natural Diversity Database
                  within 60 calendar days of the observation, and includes copies of the
                  submitted CNDDB forms with the next Monthly Compliance Report or Annual
                  Status Report, whichever comes first.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>As needed</dd>
                    </div>
                    <div class="bcn-doc-facts__pair">
                      <dt>Timing</dt>
                      <dd>within 60 calendar days of the observation</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Intake C — North Delta</dt>
                    <dd>Not Started</dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Bethany Reservoir Aqueduct</dt>
                    <dd>Not Started</dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Submit Phase 2 Project Operations Report to CDFW
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 7.5</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  No more than six months after Phase 2 Operations begin, Permittee
                  provides CDFW a Phase 2 Project Operations Report summarizing all
                  Monthly Compliance Reports and Annual Status Reports, the MMRP table
                  with implementation dates, all Project-related take and other impacts,
                  Covered Activity start and end dates, an effectiveness assessment and
                  recommendations.
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
                        No more than six months after the initiation of Phase 2 Operations
                      </dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Byron Tract Forebay</dt>
                    <dd>Completed</dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Intake B — North Delta</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2026-05-20</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Submit Photo Monitoring Documentation Report
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 10.6</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Photo monitoring obtained at the stations established for each
                  temporarily impacted habitat area is delivered to CDFW for each calendar
                  month with the Monthly Compliance Report, in a geographic format with
                  the coordinate system identified, and all photo monitoring for the year
                  is included with the Annual Status Report.
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
                        provided for each calendar month with the Monthly Compliance
                        Report ... and included with the Annual Status Report
                      </dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Intake C — North Delta</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2027-01-25</span
                      ><span class="bcn-doc-occ__aside">2 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Bethany Reservoir Aqueduct</dt>
                    <dd>
                      On Hold<span class="bcn-doc-occ__aside">Due 2026-10-05</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Submit Restoration Monitoring Reports to CDFW
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 12.3.4</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  For each restored site, Permittee submits the first monitoring report to
                  CDFW six months after restoration is complete — covering vegetation
                  establishment, percent invasive species, site photos and other success
                  observations — a second at the end of the first year stating whether
                  restoration succeeded, then annual reports until standards are met for
                  three consecutive years, or semiannual reports while standards remain
                  unmet.
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
                        After the first six months following completion of restoration
                        activities at a Project Site
                      </dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Bethany Reservoir Aqueduct</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2026-09-03</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Southern Forebay &amp; Pumping Plant</dt>
                    <dd>
                      On Hold<span class="bcn-doc-occ__aside">Due 2027-03-18</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Twin Cities Complex</dt>
                    <dd>
                      On Hold<span class="bcn-doc-occ__aside">Due 2027-03-21</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
              <article class="bcn-doc-entry" data-doc-entry="action">
                <div class="bcn-doc-entry__head">
                  <h3 class="bcn-doc-entry__title">
                    Upload Stormwater Forms and Records to SMARTS
                  </h3>
                  <p class="bcn-doc-entry__codes" aria-label="Commitments">COA 11.25</p>
                </div>
                <p class="bcn-doc-entry__desc">
                  Permittee uploads the forms and records the SWPPP specifies — including
                  quarterly non-stormwater inspection reports and annual compliance
                  reports — to the State Water Board's SMARTS system.
                </p>
                <div class="bcn-doc-entry__facts">
                  <dl class="bcn-doc-facts bcn-doc-facts--entry">
                    <div class="bcn-doc-facts__pair">
                      <dt>Frequency</dt>
                      <dd>Recurring</dd>
                    </div>
                  </dl>
                </div>
                <dl class="bcn-doc-occ">
                  <div class="bcn-doc-occ__line">
                    <dt>Byron Tract Forebay</dt>
                    <dd>
                      In Progress<span class="bcn-doc-occ__aside">Due 2026-09-19</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Intake B — North Delta</dt>
                    <dd>
                      Not Started<span class="bcn-doc-occ__aside">Due 2027-01-03</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                  <div class="bcn-doc-occ__line">
                    <dt>Intake C — North Delta</dt>
                    <dd>
                      Overdue<span class="bcn-doc-occ__aside">Due 2026-12-25</span
                      ><span class="bcn-doc-occ__aside">1 of 3 done</span>
                    </dd>
                  </div>
                </dl>
              </article>
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
.bcn-doc-desk {
  background: var(--bcn-print-desk);
  padding: var(--spacing-600) var(--spacing-400);
  min-block-size: 100vh;
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
.bcn-doc-desk {
  background: 0 0;
  min-block-size: 0;
  padding: 0;
}
.bcn-doc {
  min-block-size: 0;
  inline-size: auto;
  box-shadow: none;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
  border: 0;
  padding: 0;
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
- `--bcn-print-desk`: #dcdcdc _(component)_
- `--bcn-print-font-size-body`: 9pt _(component)_
- `--bcn-print-font-size-entry`: 9.5pt _(component)_
- `--bcn-print-font-size-group`: 13pt _(component)_
- `--bcn-print-font-size-meta`: 8pt _(component)_
- `--bcn-print-font-size-subgroup`: 10.5pt _(component)_
- `--bcn-print-font-size-title`: 20pt _(component)_
- `--bcn-print-letter-height`: 11in _(component)_
- `--bcn-print-letter-width`: 8.5in _(component)_
- `--bcn-print-line-height`: 1.4 _(component)_
- `--bcn-print-logo-height`: 54px _(component)_
- `--bcn-print-margin`: 20mm _(component)_
- `--bcn-print-paper`: #fff _(component)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--shadow-200`: 0 4px 20px -4px #0000000f _(component)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 400 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
