# Add drawer

Put the Compliance Index's items back on this version: every action and obligation the version does not hold, filed where the canonical index files them (category, subcategory, then actions before obligations, A–Z). The obligation list's Add drawer (bcn-list-add-obligations), over the index instead of the registry.

## Key decisions
- Candidates are the items this version removed plus everything in the canonical subcategories it draws on nowhere. Never an item the index does not hold: a version only arranges the index.
- Search by title, Phase and Species filters, every category closed on open, a Selected count, Add to list disabled until something is ticked. Save-left order: Add to list, then Cancel.
- Where an added item lands: the version subcategory that draws on its canonical subcategory. Where none does, the version gains that canonical subcategory under its canonical name (inside the version's category of the same name, else a new category of the canonical name, at the end). The person can then move or rename it.
- The added card is the item's card on the canonical index, in the index's wording; the version can retitle it after.
- Prod: adding a removed item deletes its ComplianceIndexListItemExclusion. Adding from a subcategory the version left out adds that ComplianceIndexListSubcategory (drawing on the canonical one) and its category if needed.

## Gotchas
- An item taken off during the session is not offered again until the page reloads, the same as the obligation drawer.

## Done when
- The drawer never lists an item the version already holds.
- Adding an item the version removed puts it back in its old subcategory and moves every count by one.
- Adding an item from a canonical subcategory the version left out brings in that subcategory under its canonical name, with the item.

## Markup
```html
<esa-side-dialog
  id="bcn-lai"
  heading="Add items"
  position="right"
  show-close-button="true"
  style="--_width: min(680px, 94vw); --z-modal: 1300; --z-modal-backdrop: 1250"
  size="md"
  open=""
  ><div class="bcn-lao">
    <esa-text-field
      size="sm"
      name="lai-search"
      aria-label="Search the Compliance Index"
      placeholder="Search by title"
    ></esa-text-field>
    <div class="bcn-laf" data-add-filters="">
      <div
        class="esa-filter-container typography-label-md"
        style="
          --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
          --_filter-container-row-gap: var(--spacing-200, 0.5rem);
        "
      >
        <esa-filter-dropdown
          name="phase"
          label="Phase"
          placeholder="Search phase"
          size="sm"
          multiple=""
          options='[{"value":"Implementation Planning","label":"Implementation Planning"},{"value":"Pre-Construction","label":"Pre-Construction"},{"value":"Construction","label":"Construction"},{"value":"Operations","label":"Operations"},{"value":"Maintenance","label":"Maintenance"},{"value":"Post-Construction","label":"Post-Construction"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          name="species"
          label="Species"
          placeholder="Search species"
          size="sm"
          multiple=""
          options='[{"value":"black bass","label":"Black bass"},{"value":"bullfrogs","label":"Bullfrogs"},{"value":"california tiger salamander","label":"California tiger salamander"},{"value":"catfish","label":"Catfish"},{"value":"chinook salmon","label":"Chinook salmon"},{"value":"crotch bumble bee","label":"Crotch bumble bee"},{"value":"delta smelt","label":"Delta smelt"},{"value":"giant garter snake","label":"Giant garter snake"},{"value":"longfin smelt","label":"Longfin smelt"},{"value":"mason’s lilaeopsis","label":"Mason’s lilaeopsis"},{"value":"sacramento pikeminnow","label":"Sacramento pikeminnow"},{"value":"spring-run chinook salmon","label":"Spring-run chinook salmon"},{"value":"striped bass","label":"Striped bass"},{"value":"swainson’s hawk","label":"Swainson’s hawk"},{"value":"tricolored blackbird","label":"Tricolored blackbird"},{"value":"white sturgeon","label":"White sturgeon"},{"value":"winter-run chinook salmon","label":"Winter-run chinook salmon"}]'
        ></esa-filter-dropdown
        ><span class="bcn-laf__clear" data-add-filters-clear="" hidden=""
          ><button
            class="esa-filter-clear-button typography-microcopy-sm"
            type="button"
            data-esa-filter-clear=""
            aria-label="Clear all filters"
          >
            <svg
              class="esa-filter-clear-button__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
              <path d="m22 3-5 5"></path>
              <path d="m17 3 5 5"></path></svg
            ><span class="esa-filter-clear-button__label">Clear all</span>
          </button></span
        >
      </div>
    </div>
    <p class="bcn-lao__nomatch" data-lai-nomatch="" hidden="">No items match.</p>
    <div class="bcn-lao__tree" data-lai-tree="">
      <details class="bcn-lao__cat" data-lai-cat="agency-reporting-and-approvals">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Agency reporting and approvals</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="43 items available">43</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-agency-approvals"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Agency approvals</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="22 items available">22</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HT"
                data-title="Calculate Phase Security Amount Before Phase Approval"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 13"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="AsNeeded"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Calculate Phase Security Amount Before Phase Approval"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Calculate Phase Security Amount Before Phase Approval"
                  >Calculate Phase Security Amount Before Phase Approval</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZR"
                data-title="Consult CDFW on Federal Biological Opinions"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 4"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Consult CDFW on Federal Biological Opinions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Consult CDFW on Federal Biological Opinions"
                  >Consult CDFW on Federal Biological Opinions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0D"
                data-title="Coordinate with CDFW on Breeding Habitat Buffer Encroachment"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction|Construction"
                data-f-species="california tiger salamander"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Coordinate with CDFW on Breeding Habitat Buffer Encroachment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Coordinate with CDFW on Breeding Habitat Buffer Encroachment"
                  >Coordinate with CDFW on Breeding Habitat Buffer Encroachment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34V8WHD9WZSVEXW30W6"
                data-title="Notify and Consult CDFW on ITP Amendment Conditions"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 10|COA 12|COA 8"
                data-f-phase="Operations|Pre-Construction|Construction|Implementation Planning"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify and Consult CDFW on ITP Amendment Conditions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify and Consult CDFW on ITP Amendment Conditions"
                  >Notify and Consult CDFW on ITP Amendment Conditions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0M"
                data-title="Obtain CDFW Approval for In-Channel Work in the GGS Active Season"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval for In-Channel Work in the GGS Active Season"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval for In-Channel Work in the GGS Active Season"
                  >Obtain CDFW Approval for In-Channel Work in the GGS Active Season</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0N"
                data-title="Obtain CDFW Approval of Dewatering Measure Deviations"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="giant garter snake"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of Dewatering Measure Deviations"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of Dewatering Measure Deviations"
                  >Obtain CDFW Approval of Dewatering Measure Deviations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZN"
                data-title="Obtain CDFW Approval of HM Lands Before Acquisition"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of HM Lands Before Acquisition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of HM Lands Before Acquisition"
                  >Obtain CDFW Approval of HM Lands Before Acquisition</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZD"
                data-title="Obtain CDFW Approval of Nighttime Covered Activities"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of Nighttime Covered Activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of Nighttime Covered Activities"
                  >Obtain CDFW Approval of Nighttime Covered Activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZK"
                data-title="Obtain CDFW Approval of the Mitigation or Conservation Bank"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of the Mitigation or Conservation Bank"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of the Mitigation or Conservation Bank"
                  >Obtain CDFW Approval of the Mitigation or Conservation Bank</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34WE7XE98281ZXQVPK5"
                data-title="Obtain CDFW Approval to Extend Phase 1 Operations"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval to Extend Phase 1 Operations"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval to Extend Phase 1 Operations"
                  >Obtain CDFW Approval to Extend Phase 1 Operations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0J"
                data-title="Obtain CDFW Approval to Work Outside the Seasonal Window"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval to Work Outside the Seasonal Window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval to Work Outside the Seasonal Window"
                  >Obtain CDFW Approval to Work Outside the Seasonal Window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZJ"
                data-title="Obtain CESA Authorization for HM Lands Activities"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Construction|Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CESA Authorization for HM Lands Activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CESA Authorization for HM Lands Activities"
                  >Obtain CESA Authorization for HM Lands Activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTT"
                data-title="Submit Aquatic Conditions Assessments with the Phase 2 Package"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Aquatic Conditions Assessments with the Phase 2 Package"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Aquatic Conditions Assessments with the Phase 2 Package"
                  >Submit Aquatic Conditions Assessments with the Phase 2 Package</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZS"
                data-title="Submit Construction Phase Authorization Package to CDFW"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 6"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Construction Phase Authorization Package to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Construction Phase Authorization Package to CDFW"
                  >Submit Construction Phase Authorization Package to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34TCYX1R0179FZ33YWM"
                data-title="Submit Fish Study Plans and Reports for CDFW Approval"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Ongoing"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Fish Study Plans and Reports for CDFW Approval"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Fish Study Plans and Reports for CDFW Approval"
                  >Submit Fish Study Plans and Reports for CDFW Approval</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTV"
                data-title="Submit Joint Operations Study Results and Compliance Report"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Joint Operations Study Results and Compliance Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Joint Operations Study Results and Compliance Report"
                  >Submit Joint Operations Study Results and Compliance Report</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZV"
                data-title="Submit Phase 2 Authorization Package to CDFW"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 7"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Phase 2 Authorization Package to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Phase 2 Authorization Package to CDFW"
                  >Submit Phase 2 Authorization Package to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZT"
                data-title="Submit Pre-implementation Phase Authorization Package to CDFW"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 6"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Pre-implementation Phase Authorization Package to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Pre-implementation Phase Authorization Package to CDFW"
                  >Submit Pre-implementation Phase Authorization Package to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTN"
                data-title="Submit Preconstruction Habitat Survey Results in the Phase Package"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Preconstruction Habitat Survey Results in the Phase Package"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Preconstruction Habitat Survey Results in the Phase Package"
                  >Submit Preconstruction Habitat Survey Results in the Phase
                  Package</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKES"
                data-title="Submit Species and Habitat Survey Protocols to CDFW"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 11|COA 6"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Species and Habitat Survey Protocols to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Species and Habitat Survey Protocols to CDFW"
                  >Submit Species and Habitat Survey Protocols to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTQ"
                data-title="Submit Subsurface Vibration Study Results to CDFW"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Subsurface Vibration Study Results to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Subsurface Vibration Study Results to CDFW"
                  >Submit Subsurface Vibration Study Results to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTW"
                data-title="Submit Supplemental Phase 1 Operations Data Before Phase 2"
                data-land="agency-reporting-and-approvals-agency-approvals"
                data-f-commitment="COA 7"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Supplemental Phase 1 Operations Data Before Phase 2"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Supplemental Phase 1 Operations Data Before Phase 2"
                  >Submit Supplemental Phase 1 Operations Data Before Phase 2</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-non-compliance-reporting"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Non-compliance reporting</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6P"
                data-title="Notify CDFW of Inability to Comply with the ITP"
                data-land="agency-reporting-and-approvals-non-compliance-reporting"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of Inability to Comply with the ITP"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of Inability to Comply with the ITP"
                  >Notify CDFW of Inability to Comply with the ITP</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6N"
                data-title="Report ITP Non-Compliance to CDFW"
                data-land="agency-reporting-and-approvals-non-compliance-reporting"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report ITP Non-Compliance to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report ITP Non-Compliance to CDFW"
                  >Report ITP Non-Compliance to CDFW</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-periodic-compliance-reports"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Periodic compliance reports</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="3 items available">3</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R6NBY4JTT233FQYDT9"
                data-title="Deliver Final Phase Mitigation Report to CDFW"
                data-land="agency-reporting-and-approvals-periodic-compliance-reports"
                data-f-commitment="COA 10"
                data-f-phase="Post-Construction|Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Deliver Final Phase Mitigation Report to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Deliver Final Phase Mitigation Report to CDFW"
                  >Deliver Final Phase Mitigation Report to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R7PYV1TN3PG7JYE8R0"
                data-title="Deliver Mitigation Status Report Before ITP Expiration"
                data-land="agency-reporting-and-approvals-periodic-compliance-reports"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Deliver Mitigation Status Report Before ITP Expiration"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Deliver Mitigation Status Report Before ITP Expiration"
                  >Deliver Mitigation Status Report Before ITP Expiration</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R99JZNVA7RWDTVTCW2"
                data-title="Submit Photo Monitoring Documentation Report"
                data-land="agency-reporting-and-approvals-periodic-compliance-reports"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Photo Monitoring Documentation Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Photo Monitoring Documentation Report"
                  >Submit Photo Monitoring Documentation Report</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-schedule-notices"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Schedule notices</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="3 items available">3</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR01863"
                data-title="Conduct Preconstruction GGS Survey"
                data-land="agency-reporting-and-approvals-schedule-notices"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction"
                data-f-species="giant garter snake"
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Preconstruction GGS Survey"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Preconstruction GGS Survey"
                  >Conduct Preconstruction GGS Survey</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R2ZP7KE7EZHM396ZJY"
                data-title="Notify CDFW 14 Days Before Starting Covered Activities"
                data-land="agency-reporting-and-approvals-schedule-notices"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW 14 Days Before Starting Covered Activities"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW 14 Days Before Starting Covered Activities"
                  >Notify CDFW 14 Days Before Starting Covered Activities</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6X"
                data-title="Notify CDFW 60 Days Before In-Water Maintenance"
                data-land="agency-reporting-and-approvals-schedule-notices"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW 60 Days Before In-Water Maintenance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW 60 Days Before In-Water Maintenance"
                  >Notify CDFW 60 Days Before In-Water Maintenance</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-species-sightings-and-cnddb-reporting"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Species sightings and CNDDB reporting</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="3 items available">3</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXS"
                data-title="Report Covered Species Sightings to CDFW"
                data-land="agency-reporting-and-approvals-species-sightings-and-cnddb-reporting"
                data-f-commitment="COA 10|COA 11"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Covered Species Sightings to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Covered Species Sightings to CDFW"
                  >Report Covered Species Sightings to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R5TVSWTRCYD79ASQ4C"
                data-title="Submit Covered Species Observations to CNDDB"
                data-land="agency-reporting-and-approvals-species-sightings-and-cnddb-reporting"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Covered Species Observations to CNDDB"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Covered Species Observations to CNDDB"
                  >Submit Covered Species Observations to CNDDB</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                data-title="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                data-land="agency-reporting-and-approvals-species-sightings-and-cnddb-reporting"
                data-f-commitment="COA 9"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="agency-reporting-and-approvals"
                data-f-class="notify"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                  >Biological Monitor daily communication and immediate reports to the
                  Designated Biologist</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="agency-reporting-and-approvals-take-and-injury-reporting"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Take and injury reporting</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="10 items available">10</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0F"
                data-title="Consult CDFW on Deceased CTS Specimen Disposal"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Consult CDFW on Deceased CTS Specimen Disposal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Consult CDFW on Deceased CTS Specimen Disposal"
                  >Consult CDFW on Deceased CTS Specimen Disposal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJW"
                data-title="Notify CDFW of Potential CBB Nest Loss"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of Potential CBB Nest Loss"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of Potential CBB Nest Loss"
                  >Notify CDFW of Potential CBB Nest Loss</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJT"
                data-title="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="tricolored blackbird"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
                  >Notify CDFW of TRBL Nest or Colony Abandonment or Distress</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXP"
                data-title="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance|Operations"
                data-f-species="crotch bumble bee|california tiger salamander|swainson’s hawk"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
                  >Notify the Designated Biologist of CBB, CTS or SWHA Take or
                  Injury</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXN"
                data-title="Notify the Designated Biologist of Covered Species Take or Injury"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 10|COA 11"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species="giant garter snake|tricolored blackbird"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify the Designated Biologist of Covered Species Take or Injury"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify the Designated Biologist of Covered Species Take or Injury"
                  >Notify the Designated Biologist of Covered Species Take or Injury</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXM"
                data-title="Report CBB, CTS and SWHA Take or Injury Incidents to CDFW"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance|Post-Construction|Operations"
                data-f-species="crotch bumble bee|california tiger salamander|swainson’s hawk"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report CBB, CTS and SWHA Take or Injury Incidents to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report CBB, CTS and SWHA Take or Injury Incidents to CDFW"
                  >Report CBB, CTS and SWHA Take or Injury Incidents to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R7PYV1TN3PG7JYE8R1"
                data-title="Report Covered Species Take or Injury to CDFW"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 10|COA 11"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance|Post-Construction"
                data-f-species="california tiger salamander|giant garter snake|tricolored blackbird"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Covered Species Take or Injury to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Covered Species Take or Injury to CDFW"
                  >Report Covered Species Take or Injury to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXW"
                data-title="Report GGS Relocations to CDFW"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report GGS Relocations to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report GGS Relocations to CDFW"
                  >Report GGS Relocations to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTX"
                data-title="Submit Phase 2 Project Operations Report to CDFW"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 7"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Phase 2 Project Operations Report to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Phase 2 Project Operations Report to CDFW"
                  >Submit Phase 2 Project Operations Report to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFQ"
                data-title="Carcass salvage, labeling and storage for the wildlife health lab"
                data-land="agency-reporting-and-approvals-take-and-injury-reporting"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="agency-reporting-and-approvals"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Carcass salvage, labeling and storage for the wildlife health lab"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Carcass salvage, labeling and storage for the wildlife health lab"
                  >Carcass salvage, labeling and storage for the wildlife health lab</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="amphibians-and-reptiles">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Amphibians and reptiles</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="31 items available">31</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lai-sub="amphibians-and-reptiles-amphibians">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Amphibians</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="31 items available">31</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR01862"
                data-title="Conduct and Report Annual CTS Surveys"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-type="Survey"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct and Report Annual CTS Surveys"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct and Report Annual CTS Surveys"
                  >Conduct and Report Annual CTS Surveys</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR01861"
                data-title="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander"
                data-f-type="Survey"
                data-f-frequency="AsNeeded"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct CTS Walking Clearance Survey Before Ground Disturbance"
                  >Conduct CTS Walking Clearance Survey Before Ground Disturbance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y37QZY1A3K7JAYVP7ZEA"
                data-title="Conduct daily clearance surveys before work begins"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct daily clearance surveys before work begins"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct daily clearance surveys before work begins"
                  >Conduct daily clearance surveys before work begins</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0G"
                data-title="Consult CDFW on Non-Native or Hybrid Salamander Measures"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="california tiger salamander"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Consult CDFW on Non-Native or Hybrid Salamander Measures"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Consult CDFW on Non-Native or Hybrid Salamander Measures"
                  >Consult CDFW on Non-Native or Hybrid Salamander Measures</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJP"
                data-title="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="california tiger salamander"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
                  >Report Barred Tiger Salamander or Hybrid Detections to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEW"
                data-title="Submit CTS Relocation Plan"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="california tiger salamander"
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit CTS Relocation Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit CTS Relocation Plan"
                  >Submit CTS Relocation Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEV"
                data-title="Submit Preconstruction CTS Burrow Watering Protocol"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="california tiger salamander"
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Preconstruction CTS Burrow Watering Protocol"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Preconstruction CTS Burrow Watering Protocol"
                  >Submit Preconstruction CTS Burrow Watering Protocol</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA3"
                data-title="Biological monitoring of initial grading and excavation"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological monitoring of initial grading and excavation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological monitoring of initial grading and excavation"
                  >Biological monitoring of initial grading and excavation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA2"
                data-title="Biologist presence during site selection, access and set-up"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist presence during site selection, access and set-up"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist presence during site selection, access and set-up"
                  >Biologist presence during site selection, access and set-up</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RF"
                data-title="Biologist survey before work resumes after rain"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biologist survey before work resumes after rain"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biologist survey before work resumes after rain"
                  >Biologist survey before work resumes after rain</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N1"
                data-title="Breeding habitat no-activity buffer"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Breeding habitat no-activity buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Breeding habitat no-activity buffer"
                  >Breeding habitat no-activity buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WW"
                data-title="Burrow avoidance"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Burrow avoidance"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow avoidance"
                  >Burrow avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFR"
                data-title="Burrow Avoidance"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Burrow Avoidance"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow Avoidance"
                  >Burrow Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGQ"
                data-title="Burrow monitoring when night lighting spills toward habitat"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Burrow monitoring when night lighting spills toward habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow monitoring when night lighting spills toward habitat"
                  >Burrow monitoring when night lighting spills toward habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X0"
                data-title="Burrow release protocol"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Burrow release protocol"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Burrow release protocol"
                  >Burrow release protocol</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RG"
                data-title="Clearance survey after barrier repair"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Clearance survey after barrier repair"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Clearance survey after barrier repair"
                  >Clearance survey after barrier repair</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA1"
                data-title="Daily burrow check before work starts"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily burrow check before work starts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily burrow check before work starts"
                  >Daily burrow check before work starts</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N2"
                data-title="Habitat disturbance work window"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Habitat disturbance work window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Habitat disturbance work window"
                  >Habitat disturbance work window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY4"
                data-title="Habitat Disturbance Work Window"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Habitat Disturbance Work Window"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Habitat Disturbance Work Window"
                  >Habitat Disturbance Work Window</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WX"
                data-title="Hand excavation of burrows in the trench alignment"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Hand excavation of burrows in the trench alignment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Hand excavation of burrows in the trench alignment"
                  >Hand excavation of burrows in the trench alignment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA4"
                data-title="Morning survey after burrow watering"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Morning survey after burrow watering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Morning survey after burrow watering"
                  >Morning survey after burrow watering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5WP"
                data-title="Mowing pattern"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mowing pattern"></esa-checkbox
                ><span class="bcn-lao__label" data-opt-label="" data-text="Mowing pattern"
                  >Mowing pattern</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFT"
                data-title="Mowing Pattern"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Mowing Pattern"></esa-checkbox
                ><span class="bcn-lao__label" data-opt-label="" data-text="Mowing Pattern"
                  >Mowing Pattern</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG5"
                data-title="Night Work Prohibition After Construction"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Post-Construction"
                data-f-species=""
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Night Work Prohibition After Construction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Night Work Prohibition After Construction"
                  >Night Work Prohibition After Construction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFN"
                data-title="No-Activity Buffer Around Occupied Burrows"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No-Activity Buffer Around Occupied Burrows"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No-Activity Buffer Around Occupied Burrows"
                  >No-Activity Buffer Around Occupied Burrows</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGX"
                data-title="No-activity buffer around occupied burrows and refugia"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No-activity buffer around occupied burrows and refugia"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No-activity buffer around occupied burrows and refugia"
                  >No-activity buffer around occupied burrows and refugia</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1N0"
                data-title="Occupied burrow no-activity buffer"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Occupied burrow no-activity buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Occupied burrow no-activity buffer"
                  >Occupied burrow no-activity buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGV"
                data-title="Presence surveys before and during each work day"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Presence surveys before and during each work day"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Presence surveys before and during each work day"
                  >Presence surveys before and during each work day</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RJ"
                data-title="Presence surveys before and during each work day"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Presence surveys before and during each work day"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Presence surveys before and during each work day"
                  >Presence surveys before and during each work day</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3XJH7593GF8314KY8RH"
                data-title="Site survey before work on days with rain forecast"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Site survey before work on days with rain forecast"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Site survey before work on days with rain forecast"
                  >Site survey before work on days with rain forecast</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA7"
                data-title="Yearly site assessment of the active season"
                data-land="amphibians-and-reptiles-amphibians"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander"
                data-f-category="amphibians-and-reptiles"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Yearly site assessment of the active season"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Yearly site assessment of the active season"
                  >Yearly site assessment of the active season</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="birds">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Birds</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="1 item available">1</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lai-sub="birds-bird-strike-diverters">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Bird strike diverters</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="1 item available">1</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NPMSXZQMQNBGV7AENM"
                data-title="Submit Bird Strike Diverter Location and Type Plan"
                data-land="birds-bird-strike-diverters"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="swainson’s hawk|tricolored blackbird"
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Bird Strike Diverter Location and Type Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Bird Strike Diverter Location and Type Plan"
                  >Submit Bird Strike Diverter Location and Type Plan</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="fish">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Fish</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="17 items available">17</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lai-sub="fish-aquatic-habitat-mitigation">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Aquatic habitat mitigation</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="3 items available">3</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZT"
                data-title="Coordinate with CDFW on Mitigation Site Selection and Design"
                data-land="fish-aquatic-habitat-mitigation"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction"
                data-f-species="delta smelt|longfin smelt"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Ongoing"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Coordinate with CDFW on Mitigation Site Selection and Design"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Coordinate with CDFW on Mitigation Site Selection and Design"
                  >Coordinate with CDFW on Mitigation Site Selection and Design</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V2EGJHQX6564T6639A"
                data-title="Site, Design and Restore Construction Mitigation Habitat for Covered Fish"
                data-land="fish-aquatic-habitat-mitigation"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-type="RestorationAndMitigation"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Site, Design and Restore Construction Mitigation Habitat for Covered Fish"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Site, Design and Restore Construction Mitigation Habitat for Covered Fish"
                  >Site, Design and Restore Construction Mitigation Habitat for Covered
                  Fish</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V2EGJHQX6564T6639B"
                data-title="Site, Design and Restore Operations Mitigation Habitat for Covered Fish"
                data-land="fish-aquatic-habitat-mitigation"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Construction|Operations"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-type="RestorationAndMitigation"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Site, Design and Restore Operations Mitigation Habitat for Covered Fish"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Site, Design and Restore Operations Mitigation Habitat for Covered Fish"
                  >Site, Design and Restore Operations Mitigation Habitat for Covered
                  Fish</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="fish-chinook-salmon">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Chinook salmon</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="1 item available">1</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZW"
                data-title="Coordinate Annual Selection of CHNWR and CHNSR Funded Projects"
                data-land="fish-chinook-salmon"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Construction|Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Recurring"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Coordinate Annual Selection of CHNWR and CHNSR Funded Projects"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Coordinate Annual Selection of CHNWR and CHNSR Funded Projects"
                  >Coordinate Annual Selection of CHNWR and CHNSR Funded Projects</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="fish-delta-smelt-and-longfin-smelt">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Delta smelt and longfin smelt</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HR"
                data-title="Contribute Funding to the Longfin Smelt Culture Program"
                data-land="fish-delta-smelt-and-longfin-smelt"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning"
                data-f-species="longfin smelt"
                data-f-type="Financial"
                data-f-frequency=""
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Contribute Funding to the Longfin Smelt Culture Program"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Contribute Funding to the Longfin Smelt Culture Program"
                  >Contribute Funding to the Longfin Smelt Culture Program</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD079"
                data-title="Develop CDFW-Approved Spring LFS Operational Scenario"
                data-land="fish-delta-smelt-and-longfin-smelt"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning"
                data-f-species="delta smelt|longfin smelt"
                data-f-type="Analysis"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop CDFW-Approved Spring LFS Operational Scenario"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop CDFW-Approved Spring LFS Operational Scenario"
                  >Develop CDFW-Approved Spring LFS Operational Scenario</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="fish-fish-rescue-and-salvage">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Fish rescue and salvage</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="9 items available">9</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y37SEW3JD5E67FT3BE0V"
                data-title="Complete fish salvage and relocation before in-water work"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete fish salvage and relocation before in-water work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete fish salvage and relocation before in-water work"
                  >Complete fish salvage and relocation before in-water work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6Y"
                data-title="Notify CDFW Before Dewatering or Fish-Isolating Work"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW Before Dewatering or Fish-Isolating Work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW Before Dewatering or Fish-Isolating Work"
                  >Notify CDFW Before Dewatering or Fish-Isolating Work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6Z"
                data-title="Notify CDFW When Fish Salvage Is Complete"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW When Fish Salvage Is Complete"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW When Fish Salvage Is Complete"
                  >Notify CDFW When Fish Salvage Is Complete</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEP"
                data-title="Submit Fish Salvage Plan"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Fish Salvage Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Fish Salvage Plan"
                  >Submit Fish Salvage Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y40SJ78J9AJM2D416MYQ"
                data-title="Train and Staff Fish Salvage Teams Before Site Access"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-type="TrainingAndEducation"
                data-f-frequency="Onetime"
                data-f-deliverable="training"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Train and Staff Fish Salvage Teams Before Site Access"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Train and Staff Fish Salvage Teams Before Site Access"
                  >Train and Staff Fish Salvage Teams Before Site Access</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG3"
                data-title="Dead Specimen Preservation"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="giant garter snake"
                data-f-category="fish"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Dead Specimen Preservation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Dead Specimen Preservation"
                  >Dead Specimen Preservation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA0"
                data-title="Fisheries biologist present to rescue fish during dewatering"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="fish"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fisheries biologist present to rescue fish during dewatering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fisheries biologist present to rescue fish during dewatering"
                  >Fisheries biologist present to rescue fish during dewatering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFX"
                data-title="Preservation and delivery of dead covered fish"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="fish"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Preservation and delivery of dead covered fish"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Preservation and delivery of dead covered fish"
                  >Preservation and delivery of dead covered fish</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGR"
                data-title="Preservation and delivery of dead covered specimens"
                data-land="fish-fish-rescue-and-salvage"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="california tiger salamander"
                data-f-category="fish"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Preservation and delivery of dead covered specimens"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Preservation and delivery of dead covered specimens"
                  >Preservation and delivery of dead covered specimens</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="fish-white-sturgeon">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">White sturgeon</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD07A"
                data-title="Complete WS Life Cycle Model Re-Evaluation Report"
                data-land="fish-white-sturgeon"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Construction"
                data-f-species="white sturgeon"
                data-f-type="Analysis"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete WS Life Cycle Model Re-Evaluation Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete WS Life Cycle Model Re-Evaluation Report"
                  >Complete WS Life Cycle Model Re-Evaluation Report</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V2EGJHQX6564T6639C"
                data-title="Fund and Complete White Sturgeon Mitigation Projects"
                data-land="fish-white-sturgeon"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction"
                data-f-species="white sturgeon"
                data-f-type="RestorationAndMitigation"
                data-f-frequency="Onetime"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fund and Complete White Sturgeon Mitigation Projects"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fund and Complete White Sturgeon Mitigation Projects"
                  >Fund and Complete White Sturgeon Mitigation Projects</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="habitat-protection">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Habitat protection</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="20 items available">20</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="habitat-protection-exclusion-fencing-and-esas"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Exclusion fencing and ESAs</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="1 item available">1</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0E"
                data-title="Submit Exclusion Barrier Design and Locations to CDFW"
                data-land="fencing-and-exclusion-areas"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="california tiger salamander|giant garter snake"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Exclusion Barrier Design and Locations to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Exclusion Barrier Design and Locations to CDFW"
                  >Submit Exclusion Barrier Design and Locations to CDFW</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="habitat-protection-habitat-avoidance-and-work-footprint"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Habitat avoidance and work footprint</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="9 items available">9</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR0185X"
                data-title="Conduct Habitat Evaluation Field Survey"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Habitat Evaluation Field Survey"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Habitat Evaluation Field Survey"
                  >Conduct Habitat Evaluation Field Survey</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
                data-title="Avoidance Measures in Unmapped Habitat"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Avoidance Measures in Unmapped Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Avoidance Measures in Unmapped Habitat"
                  >Avoidance Measures in Unmapped Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J32"
                data-title="Conservation Easement Buffer"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conservation Easement Buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conservation Easement Buffer"
                  >Conservation Easement Buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYC"
                data-title="Geotechnical investigation avoidance of aquatic features"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Geotechnical investigation avoidance of aquatic features"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Geotechnical investigation avoidance of aquatic features"
                  >Geotechnical investigation avoidance of aquatic features</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J31"
                data-title="No Disturbance of CDFW Conserved Lands"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 9"
                data-f-phase="Construction|Maintenance"
                data-f-species=""
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No Disturbance of CDFW Conserved Lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No Disturbance of CDFW Conserved Lands"
                  >No Disturbance of CDFW Conserved Lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X7"
                data-title="Suitable habitat avoidance"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="giant garter snake|swainson’s hawk|tricolored blackbird"
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Suitable habitat avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Suitable habitat avoidance"
                  >Suitable habitat avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY0"
                data-title="Suitable Habitat Avoidance"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="california tiger salamander|giant garter snake|crotch bumble bee"
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Suitable Habitat Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Suitable Habitat Avoidance"
                  >Suitable Habitat Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3766PDKM5BW1NBAQNYE"
                data-title="Work footprint limit"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 9"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Work footprint limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Work footprint limit"
                  >Work footprint limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFV9"
                data-title="Work Footprint Limit"
                data-land="habitat-protection-habitat-avoidance-and-work-footprint"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis|crotch bumble bee"
                data-f-category="habitat-protection"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Work Footprint Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Work Footprint Limit"
                  >Work Footprint Limit</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="habitat-protection-habitat-impact-tracking"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Habitat impact tracking</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="10 items available">10</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD077"
                data-title="Calculate Phase Impacts and Mitigation for Authorization Package"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Calculate Phase Impacts and Mitigation for Authorization Package"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Calculate Phase Impacts and Mitigation for Authorization Package"
                  >Calculate Phase Impacts and Mitigation for Authorization Package</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR0185W"
                data-title="Complete Pre-Disturbance Habitat Photo Documentation"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete Pre-Disturbance Habitat Photo Documentation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete Pre-Disturbance Habitat Photo Documentation"
                  >Complete Pre-Disturbance Habitat Photo Documentation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQN"
                data-title="Conduct Photo Monitoring of Temporary Impact Areas"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 10"
                data-f-phase="Maintenance|Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Photo Monitoring of Temporary Impact Areas"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Photo Monitoring of Temporary Impact Areas"
                  >Conduct Photo Monitoring of Temporary Impact Areas</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3Y1MDXG6FS3PQ7VM4YJ"
                data-title="Establish Restoration Treatment and Reference Transects"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Establish Restoration Treatment and Reference Transects"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Establish Restoration Treatment and Reference Transects"
                  >Establish Restoration Treatment and Reference Transects</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6M"
                data-title="Notify CDFW of Likely Impact Exceedance and Revised Schedule"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 10"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of Likely Impact Exceedance and Revised Schedule"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of Likely Impact Exceedance and Revised Schedule"
                  >Notify CDFW of Likely Impact Exceedance and Revised Schedule</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXX"
                data-title="Report Habitat Disturbance Acreage and GIS Layers to CDFW"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Habitat Disturbance Acreage and GIS Layers to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Habitat Disturbance Acreage and GIS Layers to CDFW"
                  >Report Habitat Disturbance Acreage and GIS Layers to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQR"
                data-title="Survey Riverbank and Vegetation Conditions at Barge Sites"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Survey Riverbank and Vegetation Conditions at Barge Sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Survey Riverbank and Vegetation Conditions at Barge Sites"
                  >Survey Riverbank and Vegetation Conditions at Barge Sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQW"
                data-title="Verify Impact Multipliers in the Annual Status Report"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Verify Impact Multipliers in the Annual Status Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Verify Impact Multipliers in the Annual Status Report"
                  >Verify Impact Multipliers in the Annual Status Report</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCT"
                data-title="GIS tracking of land disturbance and suitable habitat feature impacts"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species=""
                data-f-category="habitat-protection"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="GIS tracking of land disturbance and suitable habitat feature impacts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="GIS tracking of land disturbance and suitable habitat feature impacts"
                  >GIS tracking of land disturbance and suitable habitat feature
                  impacts</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH2"
                data-title="GIS tracking of land disturbance and suitable habitat feature impacts"
                data-land="habitat-protection-habitat-impact-tracking"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Post-Construction"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis"
                data-f-category="habitat-protection"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="GIS tracking of land disturbance and suitable habitat feature impacts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="GIS tracking of land disturbance and suitable habitat feature impacts"
                  >GIS tracking of land disturbance and suitable habitat feature
                  impacts</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="hazards">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Hazards</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="8 items available">8</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="hazards-pesticides-and-rodenticides"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Pesticides and rodenticides</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="8 items available">8</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0C"
                data-title="Obtain CDFW Approval for Pesticide and Herbicide Use"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval for Pesticide and Herbicide Use"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval for Pesticide and Herbicide Use"
                  >Obtain CDFW Approval for Pesticide and Herbicide Use</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEX"
                data-title="Submit Fertilizer Application Plan"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="AsNeeded"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Fertilizer Application Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Fertilizer Application Plan"
                  >Submit Fertilizer Application Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34X89RDDJZVZVMK8Y0K"
                data-title="Submit Fertilizer Application Plan for CDFW Approval"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Fertilizer Application Plan for CDFW Approval"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Fertilizer Application Plan for CDFW Approval"
                  >Submit Fertilizer Application Plan for CDFW Approval</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKET"
                data-title="Submit Herbicide and Pesticide Application Plan"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="AsNeeded"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Herbicide and Pesticide Application Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Herbicide and Pesticide Application Plan"
                  >Submit Herbicide and Pesticide Application Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY2"
                data-title="Licensed Pesticide Applicator"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Licensed Pesticide Applicator"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Licensed Pesticide Applicator"
                  >Licensed Pesticide Applicator</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY1"
                data-title="Pesticide Application Wind Limit"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pesticide Application Wind Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pesticide Application Wind Limit"
                  >Pesticide Application Wind Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY3"
                data-title="Pesticide Setback from Aquatic Habitat"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pesticide Setback from Aquatic Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pesticide Setback from Aquatic Habitat"
                  >Pesticide Setback from Aquatic Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY7"
                data-title="Rodenticide and Poison Prohibition"
                data-land="hazards-pesticides-and-rodenticides"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species=""
                data-f-category="hazards"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Rodenticide and Poison Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Rodenticide and Poison Prohibition"
                  >Rodenticide and Poison Prohibition</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="mitigation-and-restoration">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Mitigation and restoration</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="52 items available">52</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="mitigation-and-restoration-conservation-endowment"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Conservation endowment</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="4 items available">4</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZS"
                data-title="Obtain CDFW Approval of the Endowment Management Agreement"
                data-land="mitigation-and-restoration-conservation-endowment"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of the Endowment Management Agreement"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of the Endowment Management Agreement"
                  >Obtain CDFW Approval of the Endowment Management Agreement</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD078"
                data-title="Prepare Endowment Assessment for CDFW Approval"
                data-land="mitigation-and-restoration-conservation-endowment"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="AsNeeded"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Prepare Endowment Assessment for CDFW Approval"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Prepare Endowment Assessment for CDFW Approval"
                  >Prepare Endowment Assessment for CDFW Approval</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZR"
                data-title="Submit Endowment Assessment for CDFW Approval"
                data-land="mitigation-and-restoration-conservation-endowment"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Endowment Assessment for CDFW Approval"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Endowment Assessment for CDFW Approval"
                  >Submit Endowment Assessment for CDFW Approval</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZQ"
                data-title="Submit Endowment Manager Proposal to CDFW"
                data-land="mitigation-and-restoration-conservation-endowment"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Endowment Manager Proposal to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Endowment Manager Proposal to CDFW"
                  >Submit Endowment Manager Proposal to CDFW</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="mitigation-and-restoration-mitigation-funding"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Mitigation funding</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3ECJBAXS25FWDD40W6Y"
                data-title="Funding of interim management of Habitat Management lands"
                data-land="mitigation-and-restoration-mitigation-funding"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Funding of interim management of Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Funding of interim management of Habitat Management lands"
                  >Funding of interim management of Habitat Management lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3ED1PK4KH8NVSG8XQJ2"
                data-title="Holding, pooling and disbursement of the Endowment"
                data-land="mitigation-and-restoration-mitigation-funding"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Holding, pooling and disbursement of the Endowment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Holding, pooling and disbursement of the Endowment"
                  >Holding, pooling and disbursement of the Endowment</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="mitigation-and-restoration-mitigation-funding-contributions"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Mitigation funding contributions</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="1 item available">1</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HS"
                data-title="Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation"
                data-land="mitigation-and-restoration-mitigation-funding-contributions"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-type="Financial"
                data-f-frequency="Onetime"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation"
                  >Fund CHNWR, CHNSR and White Sturgeon Operations Mitigation</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="mitigation-and-restoration-mitigation-lands"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Mitigation lands</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="26 items available">26</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3Y1MDXG6FS3PQ7VM4YH"
                data-title="Complete Baseline Biological Assessment and Land Survey"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete Baseline Biological Assessment and Land Survey"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete Baseline Biological Assessment and Land Survey"
                  >Complete Baseline Biological Assessment and Land Survey</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V2EGJHQX6564T66397"
                data-title="Complete HM Lands Start-Up Fencing, Signage and Enhancement"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="RestorationAndMitigation"
                data-f-frequency="Onetime"
                data-f-deliverable="installation"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete HM Lands Start-Up Fencing, Signage and Enhancement"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete HM Lands Start-Up Fencing, Signage and Enhancement"
                  >Complete HM Lands Start-Up Fencing, Signage and Enhancement</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V2EGJHQX6564T66396"
                data-title="Complete Mitigation and HM Lands Protection Before Impacts"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12|COA 13"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="RestorationAndMitigation"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete Mitigation and HM Lands Protection Before Impacts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete Mitigation and HM Lands Protection Before Impacts"
                  >Complete Mitigation and HM Lands Protection Before Impacts</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQK2"
                data-title="Demonstrate Project Funding Arrangements to CDFW"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 13"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Demonstrate Project Funding Arrangements to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Demonstrate Project Funding Arrangements to CDFW"
                  >Demonstrate Project Funding Arrangements to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZP"
                data-title="Designate CDFW-Approved Interim and Long-Term Land Managers"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency=""
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Designate CDFW-Approved Interim and Long-Term Land Managers"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Designate CDFW-Approved Interim and Long-Term Land Managers"
                  >Designate CDFW-Approved Interim and Long-Term Land Managers</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3ENYWE6AXT12YDFDJM0"
                data-title="Establish Long-Term HM Lands Management Endowment"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="AsNeeded"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Establish Long-Term HM Lands Management Endowment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Establish Long-Term HM Lands Management Endowment"
                  >Establish Long-Term HM Lands Management Endowment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3ENYWE6AXT12YDFDJM1"
                data-title="Fund Annual Endowment Deposit Amount Installment"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="Recurring"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fund Annual Endowment Deposit Amount Installment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fund Annual Endowment Deposit Amount Installment"
                  >Fund Annual Endowment Deposit Amount Installment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJX"
                data-title="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
                  >Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQK0"
                data-title="Notify CDFW of a Land Manager Change"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of a Land Manager Change"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of a Land Manager Change"
                  >Notify CDFW of a Land Manager Change</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZH"
                data-title="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Ongoing"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
                  >Obtain CDFW Approval of Mitigation Habitat Restoration Projects</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34YSP53SW383CFT2CZM"
                data-title="Obtain CDFW Approval of the HM Lands Conservation Easement"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of the HM Lands Conservation Easement"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of the HM Lands Conservation Easement"
                  >Obtain CDFW Approval of the HM Lands Conservation Easement</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NPMSXZQMQNBGV7AENH"
                data-title="Prepare HM Lands Management Plan"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Prepare HM Lands Management Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Prepare HM Lands Management Plan"
                  >Prepare HM Lands Management Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD07B"
                data-title="Prepare Phase Security Cost Estimate for HM Lands"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="AsNeeded"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Prepare Phase Security Cost Estimate for HM Lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Prepare Phase Security Cost Estimate for HM Lands"
                  >Prepare Phase Security Cost Estimate for HM Lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3ENYWE6AXT12YDFDJM2"
                data-title="Provide Annual Long-Term HM Lands Management Funding"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="Recurring"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Provide Annual Long-Term HM Lands Management Funding"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Provide Annual Long-Term HM Lands Management Funding"
                  >Provide Annual Long-Term HM Lands Management Funding</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJZ"
                data-title="Provide Title and Environmental Documentation for HM Lands"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Provide Title and Environmental Documentation for HM Lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Provide Title and Environmental Documentation for HM Lands"
                  >Provide Title and Environmental Documentation for HM Lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HQ"
                data-title="Reimburse CDFW Costs for ITP Issuance and Monitoring"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="AsNeeded"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Reimburse CDFW Costs for ITP Issuance and Monitoring"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Reimburse CDFW Costs for ITP Issuance and Monitoring"
                  >Reimburse CDFW Costs for ITP Issuance and Monitoring</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HW"
                data-title="Submit and Update the CESA Mitigation Funding Strategy"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 13"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="Recurring"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit and Update the CESA Mitigation Funding Strategy"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit and Update the CESA Mitigation Funding Strategy"
                  >Submit and Update the CESA Mitigation Funding Strategy</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJY"
                data-title="Submit Credit Bill of Sale and Payment Receipt to CDFW"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="payment"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Credit Bill of Sale and Payment Receipt to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Credit Bill of Sale and Payment Receipt to CDFW"
                  >Submit Credit Bill of Sale and Payment Receipt to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEY0"
                data-title="Compensatory habitat acreage for each covered species"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis|delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Compensatory habitat acreage for each covered species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Compensatory habitat acreage for each covered species"
                  >Compensatory habitat acreage for each covered species</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XC"
                data-title="Fee title to Habitat Management lands"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fee title to Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fee title to Habitat Management lands"
                  >Fee title to Habitat Management lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXZ"
                data-title="Habitat Management lands stay-ahead ratio"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis|delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Habitat Management lands stay-ahead ratio"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Habitat Management lands stay-ahead ratio"
                  >Habitat Management lands stay-ahead ratio</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1E"
                data-title="Integration of the spawning habitat study into shallow spawning habitat design"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="delta smelt|longfin smelt"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Integration of the spawning habitat study into shallow spawning habitat design"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Integration of the spawning habitat study into shallow spawning habitat design"
                  >Integration of the spawning habitat study into shallow spawning habitat
                  design</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEY1"
                data-title="Interim management of Habitat Management lands"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Interim management of Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Interim management of Habitat Management lands"
                  >Interim management of Habitat Management lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH9"
                data-title="Long-term monitoring of tidal habitat mitigation sites"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Operations|Maintenance"
                data-f-species="delta smelt|longfin smelt"
                data-f-category="mitigation-and-restoration"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Long-term monitoring of tidal habitat mitigation sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Long-term monitoring of tidal habitat mitigation sites"
                  >Long-term monitoring of tidal habitat mitigation sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                data-title="Ongoing demonstration of mitigation performance during the permit term"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 13"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="notify"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Ongoing demonstration of mitigation performance during the permit term"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Ongoing demonstration of mitigation performance during the permit term"
                  >Ongoing demonstration of mitigation performance during the permit
                  term</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEY2"
                data-title="Perpetual management, maintenance and monitoring of Habitat Management lands"
                data-land="mitigation-and-restoration-mitigation-lands"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Perpetual management, maintenance and monitoring of Habitat Management lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Perpetual management, maintenance and monitoring of Habitat Management lands"
                  >Perpetual management, maintenance and monitoring of Habitat Management
                  lands</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="mitigation-and-restoration-restoration"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Restoration</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="18 items available">18</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V2EGJHQX6564T66398"
                data-title="Backfill and Restore Preconstruction Investigation Sites"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="RestorationAndMitigation"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Backfill and Restore Preconstruction Investigation Sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Backfill and Restore Preconstruction Investigation Sites"
                  >Backfill and Restore Preconstruction Investigation Sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NPMSXZQMQNBGV7AENK"
                data-title="Develop Temporary Impact Restoration Schedule"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Temporary Impact Restoration Schedule"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Temporary Impact Restoration Schedule"
                  >Develop Temporary Impact Restoration Schedule</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32EX2B7J0Q0QX2WW1TP"
                data-title="Develop Tidal Wetland Restoration Efficacy Study Plan"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Operations"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Tidal Wetland Restoration Efficacy Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Tidal Wetland Restoration Efficacy Study Plan"
                  >Develop Tidal Wetland Restoration Efficacy Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6YKM817BXJNTVA76DKTZ6"
                data-title="Remove Temporary Fill and Construction Refuse at Completion"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 9"
                data-f-phase="Post-Construction"
                data-f-species=""
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Remove Temporary Fill and Construction Refuse at Completion"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Remove Temporary Fill and Construction Refuse at Completion"
                  >Remove Temporary Fill and Construction Refuse at Completion</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V2EGJHQX6564T66395"
                data-title="Restore Riverbank Eroded by Barge Operations"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Post-Construction"
                data-f-species=""
                data-f-type="RestorationAndMitigation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Restore Riverbank Eroded by Barge Operations"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Restore Riverbank Eroded by Barge Operations"
                  >Restore Riverbank Eroded by Barge Operations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V103NJ75GYQV09GB8T"
                data-title="Restore Temporarily Impacted Habitat to Pre-Project Conditions"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 11|COA 12"
                data-f-phase="Post-Construction"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis"
                data-f-type="RestorationAndMitigation"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Restore Temporarily Impacted Habitat to Pre-Project Conditions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Restore Temporarily Impacted Habitat to Pre-Project Conditions"
                  >Restore Temporarily Impacted Habitat to Pre-Project Conditions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NPMSXZQMQNBGV7AENJ"
                data-title="Submit Restoration and Revegetation Plan"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Restoration and Revegetation Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Restoration and Revegetation Plan"
                  >Submit Restoration and Revegetation Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQK1"
                data-title="Submit Restoration Monitoring Reports to CDFW"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Restoration Monitoring Reports to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Restoration Monitoring Reports to CDFW"
                  >Submit Restoration Monitoring Reports to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRW"
                data-title="Erosion protection of restoration soils until vegetation establishes"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Erosion protection of restoration soils until vegetation establishes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Erosion protection of restoration soils until vegetation establishes"
                  >Erosion protection of restoration soils until vegetation
                  establishes</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRQ"
                data-title="Invasive plant management and cover limit at restoration sites"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive plant management and cover limit at restoration sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive plant management and cover limit at restoration sites"
                  >Invasive plant management and cover limit at restoration sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH7"
                data-title="Monitoring and maintenance of habitat restoration areas"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring and maintenance of habitat restoration areas"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring and maintenance of habitat restoration areas"
                  >Monitoring and maintenance of habitat restoration areas</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGY"
                data-title="Monitoring of restored habitat until success"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 11"
                data-f-phase="Post-Construction"
                data-f-species="giant garter snake"
                data-f-category="mitigation-and-restoration"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring of restored habitat until success"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring of restored habitat until success"
                  >Monitoring of restored habitat until success</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRV"
                data-title="Restoration survivorship and cover success standards with remedial action"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Restoration survivorship and cover success standards with remedial action"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Restoration survivorship and cover success standards with remedial action"
                  >Restoration survivorship and cover success standards with remedial
                  action</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRR"
                data-title="Seed mix composition and sourcing for restoration"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Seed mix composition and sourcing for restoration"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Seed mix composition and sourcing for restoration"
                  >Seed mix composition and sourcing for restoration</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRX"
                data-title="Seeding timing and reseeding at restoration sites"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Seeding timing and reseeding at restoration sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Seeding timing and reseeding at restoration sites"
                  >Seeding timing and reseeding at restoration sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRY"
                data-title="Substrate removal, topsoil salvage and imported fill in restoration areas"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Construction|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Substrate removal, topsoil salvage and imported fill in restoration areas"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Substrate removal, topsoil salvage and imported fill in restoration areas"
                  >Substrate removal, topsoil salvage and imported fill in restoration
                  areas</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRT"
                data-title="Target native vegetation community for each restoration area"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Target native vegetation community for each restoration area"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Target native vegetation community for each restoration area"
                  >Target native vegetation community for each restoration area</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGG"
                data-title="Vehicle Barriers on Restored Shoulders"
                data-land="mitigation-and-restoration-restoration"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction|Maintenance"
                data-f-species=""
                data-f-category="mitigation-and-restoration"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vehicle Barriers on Restored Shoulders"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vehicle Barriers on Restored Shoulders"
                  >Vehicle Barriers on Restored Shoulders</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="mitigation-and-restoration-security-and-funding-assurances"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Security and funding assurances</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="1 item available">1</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3EPKKKVFDBN1YQGB0HV"
                data-title="Submit Covered Fish Monitoring Funding Strategy to CDFW"
                data-land="mitigation-and-restoration-security-and-funding-assurances"
                data-f-commitment="COA 13"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Financial"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Covered Fish Monitoring Funding Strategy to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Covered Fish Monitoring Funding Strategy to CDFW"
                  >Submit Covered Fish Monitoring Funding Strategy to CDFW</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="noise-and-vibration">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Noise and vibration</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="2 items available">2</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lai-sub="noise-and-vibration-vibration">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Vibration</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H29GVGPNMNFZ3NX9WZ"
                data-title="Implement CDFW-Approved Subsurface Vibration Study"
                data-land="noise-and-vibration-vibration"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Implement CDFW-Approved Subsurface Vibration Study"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Implement CDFW-Approved Subsurface Vibration Study"
                  >Implement CDFW-Approved Subsurface Vibration Study</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NH29YN1B50VPENFKBE"
                data-title="Submit Subsurface Testing and Monitoring Study Plan"
                data-land="noise-and-vibration-vibration"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Subsurface Testing and Monitoring Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Subsurface Testing and Monitoring Study Plan"
                  >Submit Subsurface Testing and Monitoring Study Plan</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="people-and-qualifications">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">People and qualifications</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="4 items available">4</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="people-and-qualifications-designated-biologists-and-monitors"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Designated biologists and monitors</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZY"
                data-title="Submit Annual Biologist Reapproval List to CDFW"
                data-land="biologists-on-site"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Recurring"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Annual Biologist Reapproval List to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Annual Biologist Reapproval List to CDFW"
                  >Submit Annual Biologist Reapproval List to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34ZRWNWJ42W3E737QZZ"
                data-title="Submit Biologist Resume Forms to CDFW Before Each Phase"
                data-land="biologists-on-site"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Biologist Resume Forms to CDFW Before Each Phase"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Biologist Resume Forms to CDFW Before Each Phase"
                  >Submit Biologist Resume Forms to CDFW Before Each Phase</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="people-and-qualifications-qualified-specialists"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Qualified specialists</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6Q"
                data-title="Notify CDFW of the Designated Representative and Substitutes"
                data-land="people-and-qualifications-qualified-specialists"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of the Designated Representative and Substitutes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of the Designated Representative and Substitutes"
                  >Notify CDFW of the Designated Representative and Substitutes</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y34HZ9RH8ZC58QF7AHXD"
                data-title="Permitted personnel for studies that may take Covered Fish Species"
                data-land="people-and-qualifications-qualified-specialists"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-category="people-and-qualifications"
                data-f-class="roster"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Permitted personnel for studies that may take Covered Fish Species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Permitted personnel for studies that may take Covered Fish Species"
                  >Permitted personnel for studies that may take Covered Fish
                  Species</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="plants-and-invertebrates">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Plants and invertebrates</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="28 items available">28</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="plants-and-invertebrates-bumble-bees-and-monarchs"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Bumble bees and monarchs</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="19 items available">19</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3Y008XT5YC8FTSZY6JD"
                data-title="Conduct Annual CBB Flight Season Surveys"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-type="Survey"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Annual CBB Flight Season Surveys"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Annual CBB Flight Season Surveys"
                  >Conduct Annual CBB Flight Season Surveys</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3Y008XT5YC8FTSZY6JF"
                data-title="Conduct Pre-Activity CBB Foraging and Nest Surveys"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-type="Survey"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Pre-Activity CBB Foraging and Nest Surveys"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Pre-Activity CBB Foraging and Nest Surveys"
                  >Conduct Pre-Activity CBB Foraging and Nest Surveys</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3Y008XT5YC8FTSZY6JE"
                data-title="Conduct Preconstruction CBB Habitat Survey"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="crotch bumble bee"
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Preconstruction CBB Habitat Survey"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Preconstruction CBB Habitat Survey"
                  >Conduct Preconstruction CBB Habitat Survey</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJV"
                data-title="Notify CDFW of a CBB Detection"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of a CBB Detection"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of a CBB Detection"
                  >Notify CDFW of a CBB Detection</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y37TC7ZSR7P81QYD2THA"
                data-title="Obtain agency approval of designated wildlife handlers"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain agency approval of designated wildlife handlers"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain agency approval of designated wildlife handlers"
                  >Obtain agency approval of designated wildlife handlers</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXQ"
                data-title="Report CBB Sightings to the Designated Biologist"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report CBB Sightings to the Designated Biologist"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report CBB Sightings to the Designated Biologist"
                  >Report CBB Sightings to the Designated Biologist</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NPMSXZQMQNBGV7AENG"
                data-title="Submit CBB Buffer Zone Design Plan"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="crotch bumble bee"
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit CBB Buffer Zone Design Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit CBB Buffer Zone Design Plan"
                  >Submit CBB Buffer Zone Design Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKMT"
                data-title="Submit CBB Nest Relocation Plan"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="crotch bumble bee"
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit CBB Nest Relocation Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit CBB Nest Relocation Plan"
                  >Submit CBB Nest Relocation Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MH"
                data-title="Active nest buffer"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Active nest buffer"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Active nest buffer"
                  >Active nest buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH5"
                data-title="Daily visual sweeps for bee flight activity during work"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily visual sweeps for bee flight activity during work"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily visual sweeps for bee flight activity during work"
                  >Daily visual sweeps for bee flight activity during work</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGF"
                data-title="Flowering Vegetation Removal Timing"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Flowering Vegetation Removal Timing"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Flowering Vegetation Removal Timing"
                  >Flowering Vegetation Removal Timing</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH4"
                data-title="Inspection and supervision of refugia removal during overwintering"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Inspection and supervision of refugia removal during overwintering"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Inspection and supervision of refugia removal during overwintering"
                  >Inspection and supervision of refugia removal during
                  overwintering</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH3"
                data-title="Monitoring of a relocated nest"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Monitoring of a relocated nest"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Monitoring of a relocated nest"
                  >Monitoring of a relocated nest</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGE"
                data-title="Overwintering Habitat Disturbance Avoidance"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Overwintering Habitat Disturbance Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Overwintering Habitat Disturbance Avoidance"
                  >Overwintering Habitat Disturbance Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXX"
                data-title="Relocation as a last resort under the approved protocol"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Relocation as a last resort under the approved protocol"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Relocation as a last resort under the approved protocol"
                  >Relocation as a last resort under the approved protocol</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3TH6"
                data-title="Search for the active nest when a bee is detected on site"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Search for the active nest when a bee is detected on site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Search for the active nest when a bee is detected on site"
                  >Search for the active nest when a bee is detected on site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MJ"
                data-title="Stop work on covered species discovery"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="mason’s lilaeopsis|crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Stop work on covered species discovery"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Stop work on covered species discovery"
                  >Stop work on covered species discovery</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y373BPFVREHD3RRNHKKV"
                data-title="Underground refugia buffer"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Underground refugia buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Underground refugia buffer"
                  >Underground refugia buffer</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MG"
                data-title="Vegetation removal clearance near refugia"
                data-land="plants-and-invertebrates-bumble-bees-and-monarchs"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="crotch bumble bee"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vegetation removal clearance near refugia"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vegetation removal clearance near refugia"
                  >Vegetation removal clearance near refugia</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="plants-and-invertebrates-special-status-plants"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Special-status plants</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="9 items available">9</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR0185Z"
                data-title="Conduct Annual MALI Surveys in Suitable Habitat"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Pre-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-type="Survey"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Annual MALI Surveys in Suitable Habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Annual MALI Surveys in Suitable Habitat"
                  >Conduct Annual MALI Surveys in Suitable Habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR0185Y"
                data-title="Conduct Preconstruction MALI Survey"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Preconstruction MALI Survey"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Preconstruction MALI Survey"
                  >Conduct Preconstruction MALI Survey</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXV"
                data-title="Report CTS and MALI Relocations to CDFW"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="mason’s lilaeopsis|california tiger salamander"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report CTS and MALI Relocations to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report CTS and MALI Relocations to CDFW"
                  >Report CTS and MALI Relocations to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKMV"
                data-title="Submit MALI Translocation Plan"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit MALI Translocation Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit MALI Translocation Plan"
                  >Submit MALI Translocation Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXV"
                data-title="Avoidance of covered plant removal"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Avoidance of covered plant removal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Avoidance of covered plant removal"
                  >Avoidance of covered plant removal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVA"
                data-title="Covered Plant Removal Avoidance"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Plant Removal Avoidance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Plant Removal Avoidance"
                  >Covered Plant Removal Avoidance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVB"
                data-title="Levee Landside Line Maintenance"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Maintenance"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Levee Landside Line Maintenance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Levee Landside Line Maintenance"
                  >Levee Landside Line Maintenance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PRS"
                data-title="Post-disturbance grading to elevations and hydrology suitable for covered plants"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 12"
                data-f-phase="Post-Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Post-disturbance grading to elevations and hydrology suitable for covered plants"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Post-disturbance grading to elevations and hydrology suitable for covered plants"
                  >Post-disturbance grading to elevations and hydrology suitable for
                  covered plants</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y374X4RKETDHB3S1M1MK"
                data-title="Special-status plant occurrence buffer"
                data-land="plants-and-invertebrates-special-status-plants"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species="mason’s lilaeopsis"
                data-f-category="plants-and-invertebrates"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Special-status plant occurrence buffer"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Special-status plant occurrence buffer"
                  >Special-status plant occurrence buffer</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="site-conduct">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Site conduct</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="16 items available">16</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="site-conduct-agency-and-biologist-access"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Agency and biologist access</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="6 items available">6</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFY"
                data-title="Agency access to construction sites"
                data-land="site-conduct-agency-and-biologist-access"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Agency access to construction sites"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Agency access to construction sites"
                  >Agency access to construction sites</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447XD"
                data-title="CDFW access to the Project and mitigation lands"
                data-land="site-conduct-agency-and-biologist-access"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="CDFW access to the Project and mitigation lands"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="CDFW access to the Project and mitigation lands"
                  >CDFW access to the Project and mitigation lands</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GVB9GY756CNBCP3THD"
                data-title="Construction-monitoring documentation kept on site"
                data-land="site-conduct-agency-and-biologist-access"
                data-f-commitment="COA 9"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Construction-monitoring documentation kept on site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Construction-monitoring documentation kept on site"
                  >Construction-monitoring documentation kept on site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFZ"
                data-title="No agreements restricting contractor or biologist communication with CDFW"
                data-land="site-conduct-agency-and-biologist-access"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No agreements restricting contractor or biologist communication with CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No agreements restricting contractor or biologist communication with CDFW"
                  >No agreements restricting contractor or biologist communication with
                  CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNG0"
                data-title="Unfettered biologist access to the Project Site"
                data-land="site-conduct-agency-and-biologist-access"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Unfettered biologist access to the Project Site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Unfettered biologist access to the Project Site"
                  >Unfettered biologist access to the Project Site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y40FW7TYCC8DP1VT56RE"
                data-title="Wallet card or fact sheet carried by workers in the Project Area"
                data-land="site-conduct-agency-and-biologist-access"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Wallet card or fact sheet carried by workers in the Project Area"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Wallet card or fact sheet carried by workers in the Project Area"
                  >Wallet card or fact sheet carried by workers in the Project Area</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="site-conduct-compliance-inspections-and-records"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Compliance inspections and records</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="4 items available">4</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NH29YN1B50VPENFKBD"
                data-title="Develop Environmental Compliance Monitoring Plan per Site"
                data-land="site-conduct-compliance-inspections-and-records"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Environmental Compliance Monitoring Plan per Site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Environmental Compliance Monitoring Plan per Site"
                  >Develop Environmental Compliance Monitoring Plan per Site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R2ZP7KE7EZHM396ZJZ"
                data-title="Submit Monthly Compliance Report to CDFW"
                data-land="site-conduct-compliance-inspections-and-records"
                data-f-commitment="COA 10|COA 9"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Monthly Compliance Report to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Monthly Compliance Report to CDFW"
                  >Submit Monthly Compliance Report to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH0"
                data-title="Daily biologist compliance inspection at each construction site and maintenance activity"
                data-land="site-conduct-compliance-inspections-and-records"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily biologist compliance inspection at each construction site and maintenance activity"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily biologist compliance inspection at each construction site and maintenance activity"
                  >Daily biologist compliance inspection at each construction site and
                  maintenance activity</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3QRJRM8HB4RC5N41ANR"
                data-title="Daily written observation and inspection record"
                data-land="site-conduct-compliance-inspections-and-records"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Daily written observation and inspection record"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Daily written observation and inspection record"
                  >Daily written observation and inspection record</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="site-conduct-facility-design-and-siting"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Facility design and siting</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="6 items available">6</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6YKM817BXJNTVA76DKTZ1"
                data-title="Install Bird Strike Diverters on New Transmission Lines"
                data-land="site-conduct-facility-design-and-siting"
                data-f-commitment="COA 11|COA 12"
                data-f-phase="Construction"
                data-f-species="swainson’s hawk|tricolored blackbird"
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Onetime"
                data-f-deliverable="installation"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Install Bird Strike Diverters on New Transmission Lines"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Install Bird Strike Diverters on New Transmission Lines"
                  >Install Bird Strike Diverters on New Transmission Lines</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34WE7XE98281ZXQVPK7"
                data-title="Submit Culvert Under-Crossing Count and Location Report"
                data-land="site-conduct-facility-design-and-siting"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Culvert Under-Crossing Count and Location Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Culvert Under-Crossing Count and Location Report"
                  >Submit Culvert Under-Crossing Count and Location Report</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9N"
                data-title="Annual inspection and replacement of bird strike diverters"
                data-land="site-conduct-facility-design-and-siting"
                data-f-commitment="COA 11"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Annual inspection and replacement of bird strike diverters"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Annual inspection and replacement of bird strike diverters"
                  >Annual inspection and replacement of bird strike diverters</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGH"
                data-title="Bird Strike Diverter Maintenance"
                data-land="site-conduct-facility-design-and-siting"
                data-f-commitment="COA 12"
                data-f-phase="Operations|Maintenance"
                data-f-species="swainson’s hawk|tricolored blackbird"
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Bird Strike Diverter Maintenance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Bird Strike Diverter Maintenance"
                  >Bird Strike Diverter Maintenance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1C"
                data-title="Power line and support structure siting away from covered species habitat"
                data-land="site-conduct-facility-design-and-siting"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction"
                data-f-species="swainson’s hawk"
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Power line and support structure siting away from covered species habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Power line and support structure siting away from covered species habitat"
                  >Power line and support structure siting away from covered species
                  habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3C2SY5ZD9STA88WHY1A"
                data-title="Roadway design passable by covered species"
                data-land="site-conduct-facility-design-and-siting"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction"
                data-f-species=""
                data-f-category="site-conduct"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Roadway design passable by covered species"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Roadway design passable by covered species"
                  >Roadway design passable by covered species</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="water">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Water</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="27 items available">27</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lai-sub="water-barge-and-vessel-operations">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Barge and vessel operations</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="9 items available">9</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW70"
                data-title="Report Vessel Groundings and Barge Plan Deviations to CDFW"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Vessel Groundings and Barge Plan Deviations to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Vessel Groundings and Barge Plan Deviations to CDFW"
                  >Report Vessel Groundings and Barge Plan Deviations to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEQ"
                data-title="Submit Barge Operations Plan"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Barge Operations Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Barge Operations Plan"
                  >Submit Barge Operations Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXX"
                data-title="Barge Mooring and Anchoring"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Barge Mooring and Anchoring"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Barge Mooring and Anchoring"
                  >Barge Mooring and Anchoring</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Z"
                data-title="Biological monitoring of barge operations"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological monitoring of barge operations"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological monitoring of barge operations"
                  >Biological monitoring of barge operations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXW"
                data-title="Propeller Wash Limit"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Propeller Wash Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Propeller Wash Limit"
                  >Propeller Wash Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXY"
                data-title="Vessel Deck Loose Material Containment"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Deck Loose Material Containment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Deck Loose Material Containment"
                  >Vessel Deck Loose Material Containment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXT"
                data-title="Vessel Navigation Regulation Compliance"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Navigation Regulation Compliance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Navigation Regulation Compliance"
                  >Vessel Navigation Regulation Compliance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXS"
                data-title="Vessel Speed and Wake Limit"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Speed and Wake Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Speed and Wake Limit"
                  >Vessel Speed and Wake Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXV"
                data-title="Vessel Spill Kits Onboard"
                data-land="water-barge-and-vessel-operations"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Vessel Spill Kits Onboard"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Vessel Spill Kits Onboard"
                  >Vessel Spill Kits Onboard</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="water-geotechnical-exploration">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Geotechnical exploration</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="1 item available">1</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34WE7XE98281ZXQVPKE"
                data-title="Submit Over-Water Geotechnical Exploration Description to CDFW"
                data-land="water-geotechnical-exploration"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Over-Water Geotechnical Exploration Description to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Over-Water Geotechnical Exploration Description to CDFW"
                  >Submit Over-Water Geotechnical Exploration Description to CDFW</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="water-groundwater">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Groundwater</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="3 items available">3</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTR"
                data-title="Disclose Detected Wells in the Construction Phase Package"
                data-land="water-groundwater"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Implementation Planning"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Disclose Detected Wells in the Construction Phase Package"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Disclose Detected Wells in the Construction Phase Package"
                  >Disclose Detected Wells in the Construction Phase Package</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKN2"
                data-title="Submit Groundwater Testing and Monitoring Plan"
                data-land="water-groundwater"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Groundwater Testing and Monitoring Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Groundwater Testing and Monitoring Plan"
                  >Submit Groundwater Testing and Monitoring Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKN3"
                data-title="Submit Underground Well Detection Plan"
                data-land="water-groundwater"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Underground Well Detection Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Underground Well Detection Plan"
                  >Submit Underground Well Detection Plan</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="water-invasive-species">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Invasive species</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="10 items available">10</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y37E7QF03BCX148MFCR7"
                data-title="Clean and decontaminate equipment at each work site"
                data-land="water-invasive-species"
                data-f-commitment="COA 9"
                data-f-phase="Pre-Construction|Construction|Operations|Maintenance"
                data-f-species=""
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Ongoing"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Clean and decontaminate equipment at each work site"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Clean and decontaminate equipment at each work site"
                  >Clean and decontaminate equipment at each work site</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQP"
                data-title="Conduct Annual Invasive Plant Survey"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Post-Construction|Operations"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Annual Invasive Plant Survey"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Annual Invasive Plant Survey"
                  >Conduct Annual Invasive Plant Survey</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQJN"
                data-title="Report Invasive Aquatic Species Detections to CDFW"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Invasive Aquatic Species Detections to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Invasive Aquatic Species Detections to CDFW"
                  >Report Invasive Aquatic Species Detections to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKMZ"
                data-title="Submit Invasive Plant Species Monitoring, Management and Control Plan"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction|Operations"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Invasive Plant Species Monitoring, Management and Control Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Invasive Plant Species Monitoring, Management and Control Plan"
                  >Submit Invasive Plant Species Monitoring, Management and Control
                  Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR71"
                data-title="Invasive Animal Removal"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="bullfrogs"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive Animal Removal"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive Animal Removal"
                  >Invasive Animal Removal</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXY"
                data-title="Invasive plant removal methods in restoration areas"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Post-Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive plant removal methods in restoration areas"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive plant removal methods in restoration areas"
                  >Invasive plant removal methods in restoration areas</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9Y"
                data-title="Invasive species inspection of in-water equipment before deployment"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-category="water"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive species inspection of in-water equipment before deployment"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive species inspection of in-water equipment before deployment"
                  >Invasive species inspection of in-water equipment before
                  deployment</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR72"
                data-title="Invasive Species Spread Prevention"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Invasive Species Spread Prevention"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Invasive Species Spread Prevention"
                  >Invasive Species Spread Prevention</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR70"
                data-title="Pathogen Spread Prevention BMPs"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species=""
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Pathogen Spread Prevention BMPs"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Pathogen Spread Prevention BMPs"
                  >Pathogen Spread Prevention BMPs</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY8"
                data-title="Predatory Species Introduction Prohibition"
                data-land="water-invasive-species"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="california tiger salamander"
                data-f-category="water"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Predatory Species Introduction Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Predatory Species Introduction Prohibition"
                  >Predatory Species Introduction Prohibition</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="water-water-quality">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Water quality</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="4 items available">4</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQQ"
                data-title="Conduct Baseline and Annual In-Water Mercury Monitoring"
                data-land="water-water-quality"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Baseline and Annual In-Water Mercury Monitoring"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Baseline and Annual In-Water Mercury Monitoring"
                  >Conduct Baseline and Annual In-Water Mercury Monitoring</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3V103NJ75GYQV09GB8S"
                data-title="Develop and Implement Methylmercury Management Approach"
                data-land="water-water-quality"
                data-f-commitment="COA 10"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-type="RestorationAndMitigation"
                data-f-frequency="AsNeeded"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop and Implement Methylmercury Management Approach"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop and Implement Methylmercury Management Approach"
                  >Develop and Implement Methylmercury Management Approach</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R99JZNVA7RWDTVTCW4"
                data-title="Report Mercury Monitoring Results to CDFW"
                data-land="water-water-quality"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Mercury Monitoring Results to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Mercury Monitoring Results to CDFW"
                  >Report Mercury Monitoring Results to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NMGVH2VJSMJC7KKSH9"
                data-title="Submit Mercury Management and Monitoring Plan"
                data-land="water-water-quality"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Mercury Management and Monitoring Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Mercury Management and Monitoring Plan"
                  >Submit Mercury Management and Monitoring Plan</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="water-operations">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Water operations</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="79 items available">79</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details
            class="bcn-lao__sub"
            data-lai-sub="water-operations-biological-performance-criteria"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Biological performance criteria</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="7 items available">7</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32EX2B7J0Q0QX2WW1TQ"
                data-title="Develop Real-Time Biological Criteria Compliance Model"
                data-land="water-operations-biological-performance-criteria"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="Ongoing"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Real-Time Biological Criteria Compliance Model"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Real-Time Biological Criteria Compliance Model"
                  >Develop Real-Time Biological Criteria Compliance Model</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34WE7XE98281ZXQVPK6"
                data-title="Obtain CDFW Approval of Biological Criteria Compliance Models"
                data-land="water-operations-biological-performance-criteria"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Operations"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Ongoing"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Obtain CDFW Approval of Biological Criteria Compliance Models"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Obtain CDFW Approval of Biological Criteria Compliance Models"
                  >Obtain CDFW Approval of Biological Criteria Compliance Models</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCY"
                data-title="Biological criterion on entrainment, survival and abundance reduction"
                data-land="water-operations-biological-performance-criteria"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Operations"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological criterion on entrainment, survival and abundance reduction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological criterion on entrainment, survival and abundance reduction"
                  >Biological criterion on entrainment, survival and abundance
                  reduction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCZ"
                data-title="Biological criterion on population growth rate"
                data-land="water-operations-biological-performance-criteria"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Biological criterion on population growth rate"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Biological criterion on population growth rate"
                  >Biological criterion on population growth rate</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K5EMRXM9ZZ0CA3RZAK"
                data-title="Covered Fish Species Biological Criteria met during operations"
                data-land="water-operations-biological-performance-criteria"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered Fish Species Biological Criteria met during operations"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered Fish Species Biological Criteria met during operations"
                  >Covered Fish Species Biological Criteria met during operations</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCQ"
                data-title="Funding and data support for Covered Fish Species life cycle models"
                data-land="water-operations-biological-performance-criteria"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species="delta smelt|longfin smelt|spring-run chinook salmon|winter-run chinook salmon|white sturgeon"
                data-f-category="water-operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Funding and data support for Covered Fish Species life cycle models"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Funding and data support for Covered Fish Species life cycle models"
                  >Funding and data support for Covered Fish Species life cycle
                  models</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9G"
                data-title="No entrainment of juvenile salmon at the north Delta intakes"
                data-land="water-operations-biological-performance-criteria"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No entrainment of juvenile salmon at the north Delta intakes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No entrainment of juvenile salmon at the north Delta intakes"
                  >No entrainment of juvenile salmon at the north Delta intakes</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="water-operations-diversion-limits-and-bypass-flows"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Diversion limits and bypass flows</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="20 items available">20</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD075"
                data-title="Complete Joint Operations Optimization Study"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency=""
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete Joint Operations Optimization Study"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete Joint Operations Optimization Study"
                  >Complete Joint Operations Optimization Study</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12F"
                data-title="Develop Hydraulic Data Plan for Operating Criteria"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 10|COA 11"
                data-f-phase="Pre-Construction|Operations|Implementation Planning"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency=""
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Hydraulic Data Plan for Operating Criteria"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Hydraulic Data Plan for Operating Criteria"
                  >Develop Hydraulic Data Plan for Operating Criteria</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD076"
                data-title="Prepare Weekly Operating-Criteria Risk Assessment Report"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Prepare Weekly Operating-Criteria Risk Assessment Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Prepare Weekly Operating-Criteria Risk Assessment Report"
                  >Prepare Weekly Operating-Criteria Risk Assessment Report</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12J"
                data-title="Submit Joint Operations Optimization Study Plan"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Joint Operations Optimization Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Joint Operations Optimization Study Plan"
                  >Submit Joint Operations Optimization Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3TR9MB6F5AADY7R6PS2"
                data-title="Additional Suisun Marsh Salinity Control Gate operating days for Delta smelt habitat"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 12"
                data-f-phase="Operations"
                data-f-species="delta smelt"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Additional Suisun Marsh Salinity Control Gate operating days for Delta smelt habitat"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Additional Suisun Marsh Salinity Control Gate operating days for Delta smelt habitat"
                  >Additional Suisun Marsh Salinity Control Gate operating days for Delta
                  smelt habitat</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y3"
                data-title="Annual Operating Criteria Schedule"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Annual Operating Criteria Schedule"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Annual Operating Criteria Schedule"
                  >Annual Operating Criteria Schedule</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9E"
                data-title="Annual schedule for applying the diversion operating criteria"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Annual schedule for applying the diversion operating criteria"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Annual schedule for applying the diversion operating criteria"
                  >Annual schedule for applying the diversion operating criteria</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y0"
                data-title="Bypass Flow Minimum"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="Bypass Flow Minimum"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Bypass Flow Minimum"
                  >Bypass Flow Minimum</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFR"
                data-title="Combined south and north Delta SWP diversion daily cap"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Combined south and north Delta SWP diversion daily cap"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Combined south and north Delta SWP diversion daily cap"
                  >Combined south and north Delta SWP diversion daily cap</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XZ"
                data-title="Diversion Flow Fraction Limit"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Diversion Flow Fraction Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Diversion Flow Fraction Limit"
                  >Diversion Flow Fraction Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKGY4YJ4PEN2GRTDYZ2"
                data-title="Flow Reversal Minimization"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Flow Reversal Minimization"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Flow Reversal Minimization"
                  >Flow Reversal Minimization</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y2"
                data-title="June Diversion Limit"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox size="sm" aria-label="June Diversion Limit"></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="June Diversion Limit"
                  >June Diversion Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGJ"
                data-title="Larval Distribution Operational Scenario"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 12"
                data-f-phase="Operations"
                data-f-species="longfin smelt"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Larval Distribution Operational Scenario"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Larval Distribution Operational Scenario"
                  >Larval Distribution Operational Scenario</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFT"
                data-title="Limits on shifting exports from south Delta to north Delta during balanced conditions"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Limits on shifting exports from south Delta to north Delta during balanced conditions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Limits on shifting exports from south Delta to north Delta during balanced conditions"
                  >Limits on shifting exports from south Delta to north Delta during
                  balanced conditions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFS"
                data-title="No additional upstream stored water releases for north Delta diversion"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No additional upstream stored water releases for north Delta diversion"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No additional upstream stored water releases for north Delta diversion"
                  >No additional upstream stored water releases for north Delta
                  diversion</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6Y1"
                data-title="No Diversion When the Delta Cross Channel Gates Are Open"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No Diversion When the Delta Cross Channel Gates Are Open"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No Diversion When the Delta Cross Channel Gates Are Open"
                  >No Diversion When the Delta Cross Channel Gates Are Open</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFV"
                data-title="No north Delta diversion during balanced conditions at low south Delta exports"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="No north Delta diversion during balanced conditions at low south Delta exports"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="No north Delta diversion during balanced conditions at low south Delta exports"
                  >No north Delta diversion during balanced conditions at low south Delta
                  exports</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XX"
                data-title="Phase 1 Operations Limit"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Phase 1 Operations Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Phase 1 Operations Limit"
                  >Phase 1 Operations Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKW469S9XKYKCE1V6XY"
                data-title="Phase 2 Operations Limit"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Phase 2 Operations Limit"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Phase 2 Operations Limit"
                  >Phase 2 Operations Limit</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCX"
                data-title="Salmon presence off-ramp from spring operating criteria"
                data-land="water-operations-diversion-limits-and-bypass-flows"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Salmon presence off-ramp from spring operating criteria"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Salmon presence off-ramp from spring operating criteria"
                  >Salmon presence off-ramp from spring operating criteria</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="water-operations-fish-guidance-systems"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Fish guidance systems</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="3 items available">3</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34V8WHD9WZSVEXW30W7"
                data-title="Convene Fish Guidance System Working Group"
                data-land="water-operations-fish-guidance-systems"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Convene Fish Guidance System Working Group"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Convene Fish Guidance System Working Group"
                  >Convene Fish Guidance System Working Group</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12K"
                data-title="Develop Fish Guidance System Study Plan"
                data-land="water-operations-fish-guidance-systems"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency=""
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Fish Guidance System Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Fish Guidance System Study Plan"
                  >Develop Fish Guidance System Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD074"
                data-title="Submit Fish Guidance System Recommendation Report to CDFW"
                data-land="water-operations-fish-guidance-systems"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Fish Guidance System Recommendation Report to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Fish Guidance System Recommendation Report to CDFW"
                  >Submit Fish Guidance System Recommendation Report to CDFW</span
                >
              </li>
            </ul>
          </details>
          <details class="bcn-lao__sub" data-lai-sub="water-operations-fish-screens">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Fish screens</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="18 items available">18</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6YKM9WGMGA0BV3KTY98EG"
                data-title="Adjust and Retest Fish Screen Baffles After a Non-Compliant Test"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="AsNeeded"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Adjust and Retest Fish Screen Baffles After a Non-Compliant Test"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Adjust and Retest Fish Screen Baffles After a Non-Compliant Test"
                  >Adjust and Retest Fish Screen Baffles After a Non-Compliant Test</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32F2DZX3TCXSF7HD073"
                data-title="Complete COA 10.25 Series Models and Report"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete COA 10.25 Series Models and Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete COA 10.25 Series Models and Report"
                  >Complete COA 10.25 Series Models and Report</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H3KQ2JH8QCYXWA8G3R"
                data-title="Conduct North Delta Intake Fish Screen Hydraulic Tests"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10|COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct North Delta Intake Fish Screen Hydraulic Tests"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct North Delta Intake Fish Screen Hydraulic Tests"
                  >Conduct North Delta Intake Fish Screen Hydraulic Tests</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3CAZ0RTVT4JT3NA167V"
                data-title="Develop Refugia Design and Field Study Plan"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning|Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Design"
                data-f-frequency=""
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Refugia Design and Field Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Refugia Design and Field Study Plan"
                  >Develop Refugia Design and Field Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQM"
                data-title="Implement Fish Screen Impingement Study"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Ongoing"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Implement Fish Screen Impingement Study"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Implement Fish Screen Impingement Study"
                  >Implement Fish Screen Impingement Study</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQK"
                data-title="Inspect Sediment Deposition at Intake Tee Screens Annually"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Inspect Sediment Deposition at Intake Tee Screens Annually"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Inspect Sediment Deposition at Intake Tee Screens Annually"
                  >Inspect Sediment Deposition at Intake Tee Screens Annually</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6R"
                data-title="Notify CDFW of Non-Operational Fish Screens"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Notify CDFW of Non-Operational Fish Screens"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Notify CDFW of Non-Operational Fish Screens"
                  >Notify CDFW of Non-Operational Fish Screens</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6YKM817BXJNTVA76DKTZ7"
                data-title="Remove and Clean North Delta Intake Fish Screens"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Recurring"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Remove and Clean North Delta Intake Fish Screens"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Remove and Clean North Delta Intake Fish Screens"
                  >Remove and Clean North Delta Intake Fish Screens</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R99JZNVA7RWDTVTCW9"
                data-title="Report Intake Sediment Deposition Assessment to CDFW"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Intake Sediment Deposition Assessment to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Intake Sediment Deposition Assessment to CDFW"
                  >Report Intake Sediment Deposition Assessment to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H41AKKXC7WAC4X6PQJ"
                data-title="Retest Fish Screen Hydraulics After a Qualifying Event"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Retest Fish Screen Hydraulics After a Qualifying Event"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Retest Fish Screen Hydraulics After a Qualifying Event"
                  >Retest Fish Screen Hydraulics After a Qualifying Event</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R99JZNVA7RWDTVTCW8"
                data-title="Submit Fish Screen Hydraulic Testing Data and Report to CDFW"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Fish Screen Hydraulic Testing Data and Report to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Fish Screen Hydraulic Testing Data and Report to CDFW"
                  >Submit Fish Screen Hydraulic Testing Data and Report to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12M"
                data-title="Submit Hydraulic Testing Plan for Intake Fish Screens"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Construction|Operations"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Hydraulic Testing Plan for Intake Fish Screens"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Hydraulic Testing Plan for Intake Fish Screens"
                  >Submit Hydraulic Testing Plan for Intake Fish Screens</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKMS"
                data-title="Submit Screen Impingement Study Plan"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Screen Impingement Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Screen Impingement Study Plan"
                  >Submit Screen Impingement Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEG"
                data-title="Approach Velocity Maintenance"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Approach Velocity Maintenance"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Approach Velocity Maintenance"
                  >Approach Velocity Maintenance</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVD"
                data-title="Diversion Spreading Across Screens"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Diversion Spreading Across Screens"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Diversion Spreading Across Screens"
                  >Diversion Spreading Across Screens</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVC"
                data-title="Fish Screen Velocity Criteria"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fish Screen Velocity Criteria"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fish Screen Velocity Criteria"
                  >Fish Screen Velocity Criteria</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6YKKJFSBZ7MC77J15GFVE"
                data-title="Unscreened Diversion Prohibition"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Unscreened Diversion Prohibition"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Unscreened Diversion Prohibition"
                  >Unscreened Diversion Prohibition</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GS5JKTENA4JZKKAVH1"
                data-title="Visual inspection of intake fish screens for integrity, cleaning and impingement"
                data-land="water-operations-fish-screens"
                data-f-commitment="COA 10"
                data-f-phase="Operations|Maintenance"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Visual inspection of intake fish screens for integrity, cleaning and impingement"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Visual inspection of intake fish screens for integrity, cleaning and impingement"
                  >Visual inspection of intake fish screens for integrity, cleaning and
                  impingement</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="water-operations-hydraulic-and-sediment-models"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Hydraulic and sediment models</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="2 items available">2</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32EX2B7J0Q0QX2WW1TR"
                data-title="Complete Hydraulic and Sediment Transport Modeling Report"
                data-land="water-operations-hydraulic-and-sediment-models"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete Hydraulic and Sediment Transport Modeling Report"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete Hydraulic and Sediment Transport Modeling Report"
                  >Complete Hydraulic and Sediment Transport Modeling Report</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R99JZNVA7RWDTVTCW7"
                data-title="Submit Final Hydraulic and Sediment Models and Reports to CDFW"
                data-land="water-operations-hydraulic-and-sediment-models"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Final Hydraulic and Sediment Models and Reports to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Final Hydraulic and Sediment Models and Reports to CDFW"
                  >Submit Final Hydraulic and Sediment Models and Reports to CDFW</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="water-operations-operations-coordination-and-data"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Operations coordination and data</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="10 items available">10</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKMX"
                data-title="Develop Real-Time Information Sharing Process with CDFW"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Operations"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Real-Time Information Sharing Process with CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Real-Time Information Sharing Process with CDFW"
                  >Develop Real-Time Information Sharing Process with CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H3KQ2JH8QCYXWA8G3P"
                data-title="Install Real-Time Water Quality Monitoring Station"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Onetime"
                data-f-deliverable="installation"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Install Real-Time Water Quality Monitoring Station"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Install Real-Time Water Quality Monitoring Station"
                  >Install Real-Time Water Quality Monitoring Station</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RB67EQDRWNDJBKFW6S"
                data-title="Provide NDDMT Raw Data and Modeling to CDFW on Request"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Provide NDDMT Raw Data and Modeling to CDFW on Request"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Provide NDDMT Raw Data and Modeling to CDFW on Request"
                  >Provide NDDMT Raw Data and Modeling to CDFW on Request</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RC1N589S9ETAS5HQK3"
                data-title="Share Phase 1 Operations Data with CDFW"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 7"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="Ongoing"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Share Phase 1 Operations Data with CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Share Phase 1 Operations Data with CDFW"
                  >Share Phase 1 Operations Data with CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKMW"
                data-title="Submit North Delta Diversion Monitoring Team Charter"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit North Delta Diversion Monitoring Team Charter"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit North Delta Diversion Monitoring Team Charter"
                  >Submit North Delta Diversion Monitoring Team Charter</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCV"
                data-title="North Delta Diversion Monitoring Team membership and meeting cadence"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="North Delta Diversion Monitoring Team membership and meeting cadence"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="North Delta Diversion Monitoring Team membership and meeting cadence"
                  >North Delta Diversion Monitoring Team membership and meeting
                  cadence</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447X8"
                data-title="North Delta Diversion Monitoring Team membership and meeting cadence"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="North Delta Diversion Monitoring Team membership and meeting cadence"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="North Delta Diversion Monitoring Team membership and meeting cadence"
                  >North Delta Diversion Monitoring Team membership and meeting
                  cadence</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9F"
                data-title="North Delta Diversion Monitoring Team membership and meeting cadence"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="North Delta Diversion Monitoring Team membership and meeting cadence"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="North Delta Diversion Monitoring Team membership and meeting cadence"
                  >North Delta Diversion Monitoring Team membership and meeting
                  cadence</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y34JV1PFVYQEE7T447X9"
                data-title="Resolution and implementation of real-time operations decisions"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="adhere"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Resolution and implementation of real-time operations decisions"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Resolution and implementation of real-time operations decisions"
                  >Resolution and implementation of real-time operations decisions</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCW"
                data-title="Weekly operations risk assessment content"
                data-land="water-operations-operations-coordination-and-data"
                data-f-commitment="COA 11"
                data-f-phase="Operations"
                data-f-species="delta smelt|longfin smelt|white sturgeon|winter-run chinook salmon|spring-run chinook salmon"
                data-f-category="water-operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Weekly operations risk assessment content"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Weekly operations risk assessment content"
                  >Weekly operations risk assessment content</span
                >
              </li>
            </ul>
          </details>
          <details
            class="bcn-lao__sub"
            data-lai-sub="water-operations-operations-monitoring-and-studies"
          >
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Operations monitoring and studies</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="19 items available">19</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y32EX2B7J0Q0QX2WW1TN"
                data-title="Complete Sacramento River Hydrograph Limb Impact Evaluation"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Construction|Operations|Pre-Construction"
                data-f-species=""
                data-f-type="Analysis"
                data-f-frequency="Onetime"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Complete Sacramento River Hydrograph Limb Impact Evaluation"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Complete Sacramento River Hydrograph Limb Impact Evaluation"
                  >Complete Sacramento River Hydrograph Limb Impact Evaluation</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XYHN837NKGVMS0K46X"
                data-title="Conduct Baseline Food Web Resource Surveys"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction"
                data-f-species=""
                data-f-type="Survey"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Baseline Food Web Resource Surveys"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Baseline Food Web Resource Surveys"
                  >Conduct Baseline Food Web Resource Surveys</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H3KQ2JH8QCYXWA8G3Q"
                data-title="Conduct Ecological Response Evaluation Studies"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Ongoing"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Ecological Response Evaluation Studies"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Ecological Response Evaluation Studies"
                  >Conduct Ecological Response Evaluation Studies</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H3KQ2JH8QCYXWA8G3M"
                data-title="Conduct Fisheries Evaluation Studies for Covered Fish"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species="chinook salmon|black bass|catfish|sacramento pikeminnow|striped bass"
                data-f-type="Monitoring"
                data-f-frequency="Ongoing"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Fisheries Evaluation Studies for Covered Fish"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Fisheries Evaluation Studies for Covered Fish"
                  >Conduct Fisheries Evaluation Studies for Covered Fish</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XZ7WK0185QGKR0185V"
                data-title="Conduct Sacramento River Bathymetric Surveys Near the Intakes"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Survey"
                data-f-frequency="Recurring"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Sacramento River Bathymetric Surveys Near the Intakes"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Sacramento River Bathymetric Surveys Near the Intakes"
                  >Conduct Sacramento River Bathymetric Surveys Near the Intakes</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H3KQ2JH8QCYXWA8G3N"
                data-title="Conduct Water Quality Evaluation Studies"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Ongoing"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Conduct Water Quality Evaluation Studies"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Conduct Water Quality Evaluation Studies"
                  >Conduct Water Quality Evaluation Studies</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12E"
                data-title="Develop Covered Fish Species Abundance and Distribution Study Plan"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency=""
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Covered Fish Species Abundance and Distribution Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Covered Fish Species Abundance and Distribution Study Plan"
                  >Develop Covered Fish Species Abundance and Distribution Study
                  Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12C"
                data-title="Develop Migration and Survival Study Plan"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species="chinook salmon"
                data-f-type="Plan"
                data-f-frequency=""
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Migration and Survival Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Migration and Survival Study Plan"
                  >Develop Migration and Survival Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12D"
                data-title="Develop Predation Study Plan"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning"
                data-f-species="chinook salmon"
                data-f-type="Plan"
                data-f-frequency=""
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Predation Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Predation Study Plan"
                  >Develop Predation Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12G"
                data-title="Develop Sediment and Turbidity Monitoring Study Plan"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency=""
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Sediment and Turbidity Monitoring Study Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Sediment and Turbidity Monitoring Study Plan"
                  >Develop Sediment and Turbidity Monitoring Study Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12H"
                data-title="Develop Sediment Reintroduction Plan"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="AsNeeded"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Develop Sediment Reintroduction Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Develop Sediment Reintroduction Plan"
                  >Develop Sediment Reintroduction Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3XYHN837NKGVMS0K46Y"
                data-title="Fund and Implement the DS/LFS Spawning Habitat Study"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species="delta smelt|longfin smelt"
                data-f-type="Survey"
                data-f-frequency="Onetime"
                data-f-deliverable="survey"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Fund and Implement the DS/LFS Spawning Habitat Study"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Fund and Implement the DS/LFS Spawning Habitat Study"
                  >Fund and Implement the DS/LFS Spawning Habitat Study</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3H3KQ2JH8QCYXWA8G3K"
                data-title="Implement Covered Fish Species Monitoring and Science Program"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Monitoring"
                data-f-frequency="Ongoing"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Implement Covered Fish Species Monitoring and Science Program"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Implement Covered Fish Species Monitoring and Science Program"
                  >Implement Covered Fish Species Monitoring and Science Program</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTM"
                data-title="Report Bathymetric Survey Results to CDFW"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Bathymetric Survey Results to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Bathymetric Survey Results to CDFW"
                  >Report Bathymetric Survey Results to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3NJADVCJBHXD7RXW12B"
                data-title="Submit Covered Fish Species Monitoring and Science Plan"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Implementation Planning|Pre-Construction"
                data-f-species=""
                data-f-type="Plan"
                data-f-frequency="Onetime"
                data-f-deliverable="plan"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Covered Fish Species Monitoring and Science Plan"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Covered Fish Species Monitoring and Science Plan"
                  >Submit Covered Fish Species Monitoring and Science Plan</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCS"
                data-title="Assessment of juvenile salmon route entrainment by reach and junction"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Pre-Construction|Construction|Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Assessment of juvenile salmon route entrainment by reach and junction"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Assessment of juvenile salmon route entrainment by reach and junction"
                  >Assessment of juvenile salmon route entrainment by reach and
                  junction</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y323R4AB65RD0MJDTZ9G"
                data-title="Covered fish monitoring across baseline, construction and operations periods"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Covered fish monitoring across baseline, construction and operations periods"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Covered fish monitoring across baseline, construction and operations periods"
                  >Covered fish monitoring across baseline, construction and operations
                  periods</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJCR"
                data-title="Food web and larval fish entrainment study"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 10"
                data-f-phase="Operations"
                data-f-species=""
                data-f-category="water-operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Food web and larval fish entrainment study"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Food web and larval fish entrainment study"
                  >Food web and larval fish entrainment study</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="obl_01M2G6Y324Y1TBHKG18MZXXJD0"
                data-title="Modeling of operations effects on Delta smelt habitat in Suisun Marsh and Grizzly Bay"
                data-land="water-operations-operations-monitoring-and-studies"
                data-f-commitment="COA 12"
                data-f-phase="Implementation Planning|Operations"
                data-f-species="delta smelt"
                data-f-category="water-operations"
                data-f-class="monitor"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Modeling of operations effects on Delta smelt habitat in Suisun Marsh and Grizzly Bay"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Modeling of operations effects on Delta smelt habitat in Suisun Marsh and Grizzly Bay"
                  >Modeling of operations effects on Delta smelt habitat in Suisun Marsh
                  and Grizzly Bay</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
      <details class="bcn-lao__cat" data-lai-cat="unfiled">
        <summary class="bcn-lao__row bcn-lao__row--cat">
          <span class="bcn-lao__chevron" aria-hidden="true"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span class="bcn-lao__name">Unfiled</span
          ><span data-lai-count=""
            ><span class="bcn-swcb" aria-label="7 items available">7</span></span
          >
        </summary>
        <div class="bcn-lao__subs">
          <details class="bcn-lao__sub" data-lai-sub="unfiled-needs-a-home">
            <summary class="bcn-lao__row bcn-lao__row--sub">
              <span class="bcn-lao__chevron" aria-hidden="true"
                ><span class="esa-icon esa-icon--sm" aria-hidden="true"
                  ><svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="m9 18 6-6-6-6"></path></svg></span></span
              ><span class="bcn-lao__name">Needs a home</span
              ><span data-lai-count=""
                ><span class="bcn-swcb" aria-label="7 items available">7</span></span
              >
            </summary>
            <ul class="bcn-lao__opts">
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R3GHBSN2G09CZKZQ72"
                data-title="Deliver Annual Status Report to CDFW"
                data-land="unfiled-needs-a-home"
                data-f-commitment="COA 10|COA 11|COA 12"
                data-f-phase="Pre-Construction|Construction|Post-Construction|Operations|Maintenance"
                data-f-species="california tiger salamander|giant garter snake|swainson’s hawk|tricolored blackbird|crotch bumble bee|mason’s lilaeopsis|delta smelt|longfin smelt|winter-run chinook salmon|spring-run chinook salmon|white sturgeon"
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Deliver Annual Status Report to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Deliver Annual Status Report to CDFW"
                  >Deliver Annual Status Report to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3KFHG8TXPSP55F7CZQA"
                data-title="Incorporate Litter and Erosion Control Language in Contractor Contracts"
                data-land="unfiled-needs-a-home"
                data-f-commitment="COA 11"
                data-f-phase="Implementation Planning|Construction|Maintenance"
                data-f-species=""
                data-f-type="Other"
                data-f-frequency="Onetime"
                data-f-deliverable="other"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Incorporate Litter and Erosion Control Language in Contractor Contracts"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Incorporate Litter and Erosion Control Language in Contractor Contracts"
                  >Incorporate Litter and Erosion Control Language in Contractor
                  Contracts</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y37E7QF03BCX148MFCR4"
                data-title="Install wildlife under-crossing culverts and speed limit signage"
                data-land="unfiled-needs-a-home"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Pre-Construction|Operations|Maintenance"
                data-f-species="california tiger salamander"
                data-f-type="AvoidanceAndBMPs"
                data-f-frequency="Onetime"
                data-f-deliverable="installation"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Install wildlife under-crossing culverts and speed limit signage"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Install wildlife under-crossing culverts and speed limit signage"
                  >Install wildlife under-crossing culverts and speed limit signage</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R99JZNVA7RWDTVTCW3"
                data-title="Report Construction-Phase CBB and MALI Survey Results"
                data-land="unfiled-needs-a-home"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance"
                data-f-species="mason’s lilaeopsis|crotch bumble bee"
                data-f-type="Reporting"
                data-f-frequency="Recurring"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report Construction-Phase CBB and MALI Survey Results"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report Construction-Phase CBB and MALI Survey Results"
                  >Report Construction-Phase CBB and MALI Survey Results</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXT"
                data-title="Report GPS-Recorded CBB Nest and MALI Locations to CDFW"
                data-land="unfiled-needs-a-home"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction|Construction|Maintenance"
                data-f-species="mason’s lilaeopsis|crotch bumble bee"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="report"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report GPS-Recorded CBB Nest and MALI Locations to CDFW"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report GPS-Recorded CBB Nest and MALI Locations to CDFW"
                  >Report GPS-Recorded CBB Nest and MALI Locations to CDFW</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXR"
                data-title="Report MALI and CTS Finds to the Designated Biologist"
                data-land="unfiled-needs-a-home"
                data-f-commitment="COA 11"
                data-f-phase="Construction|Maintenance|Operations"
                data-f-species="mason’s lilaeopsis|california tiger salamander"
                data-f-type="Reporting"
                data-f-frequency="AsNeeded"
                data-f-deliverable="notification"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Report MALI and CTS Finds to the Designated Biologist"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Report MALI and CTS Finds to the Designated Biologist"
                  >Report MALI and CTS Finds to the Designated Biologist</span
                >
              </li>
              <li
                class="bcn-lao__opt"
                data-lai-opt=""
                data-id="act_01M2G6Y34V8WHD9WZSVEXW30W8"
                data-title="Submit Preconstruction Survey Results for CDFW Approval"
                data-land="unfiled-needs-a-home"
                data-f-commitment="COA 11"
                data-f-phase="Pre-Construction"
                data-f-species="mason’s lilaeopsis|california tiger salamander"
                data-f-type="ApprovalAndConsultation"
                data-f-frequency="Onetime"
                data-f-deliverable="approval"
              >
                <esa-checkbox
                  size="sm"
                  aria-label="Submit Preconstruction Survey Results for CDFW Approval"
                ></esa-checkbox
                ><span
                  class="bcn-lao__label"
                  data-opt-label=""
                  data-text="Submit Preconstruction Survey Results for CDFW Approval"
                  >Submit Preconstruction Survey Results for CDFW Approval</span
                >
              </li>
            </ul>
          </details>
        </div>
      </details>
    </div>
  </div>
  <span slot="footer" class="bcn-lao__foot"
    ><span class="bcn-lao__selected">Selected: <span data-lai-n="">0</span></span
    ><span class="bcn-lao__foot-right"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm esa-button--disabled"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lai-add="true"
          disabled=""
        >
          <span class="esa-button__label">Add to list</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-lai-cancel="true"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    ></span
  ></esa-side-dialog
>
```

## Styles
```css
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-laf__clear[hidden] {
  display: none;
}
.bcn-lao {
  gap: var(--spacing-300);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__nomatch {
  padding: var(--spacing-300) var(--spacing-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-lao__tree {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-lao__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-lao__cat[hidden],
.bcn-lao__sub[hidden],
.bcn-lao__opt[hidden] {
  display: none;
}
.bcn-lao__subs {
  flex-direction: column;
  display: flex;
}
.bcn-lao__sub + .bcn-lao__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-lao__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-200);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-lao__row::-webkit-details-marker {
  display: none;
}
.bcn-lao__row:hover {
  background: var(--color-background-default);
}
.bcn-lao__row--cat {
  font-weight: 600;
}
.bcn-lao__row--sub {
  padding-left: calc(var(--spacing-200) + 22px);
}
.bcn-lao__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset, 2px) * -1);
}
.bcn-lao__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-lao__row .bcn-lao__chevron {
  transform: rotate(90deg);
}
.bcn-lao__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.bcn-lao__opts {
  padding: var(--spacing-150) var(--spacing-200) var(--spacing-300)
    calc(var(--spacing-200) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lao__opts:empty {
  display: none;
}
.bcn-lao__opt {
  align-items: flex-start;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lao__opt esa-checkbox {
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-lao__label {
  cursor: pointer;
  user-select: none;
  flex: 1;
  min-width: 0;
  line-height: 1.45;
}
.bcn-lao__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__selected {
  color: var(--color-content-default-secondary);
}
.bcn-lao__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(
    --color-content-utility-danger,
    var(--color-content-brand, #2a7e3b)
  );
  --_clear-icon-size: 18px;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border-radius: var(--radius-sm, 0.25rem);
  color: var(--_clear-text);
  cursor: pointer;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  text-decoration: underline;
  display: inline-flex;
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, #00000008);
}
.esa-filter-clear-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
}
.bcn-swcb--sm {
  min-width: 18px;
  padding: 2px var(--spacing-100);
  font-size: var(--font-size-050);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-hover`: #00000008 _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--filter-container-padding`: 0 _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-font-weight`: 500 _(semantic)_
- `--typography-microcopy-sm-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-subtle-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-sm-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-subtle-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
