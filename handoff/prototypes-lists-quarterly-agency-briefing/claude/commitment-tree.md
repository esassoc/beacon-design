# Commitment tree

One flat list of commitments in code order. Each card keeps its REQUIREMENT rows — commitments have no implementations.

## Key decisions
- Card title links to the commitment page (data-list-goto); requirement rows open the requirement panel.
- Remove from list is a non-danger confirm.

## Markup
```html
<section
  class="bcn-lot bcn-lmt"
  aria-label="Quarterly Agency Briefing"
  data-list-label="Quarterly Agency Briefing"
  data-list-type="commitment"
  data-list-noun="commitments"
  data-list-titles="{}"
  data-list-view="category"
>
  <p class="bcn-lot__nomatch" data-list-nomatch="" hidden="">No commitments match.</p>
  <div class="bcn-lmt__empty" data-list-empty-state="" hidden="">
    <div class="esa-empty-state esa-empty-state--sm">
      <h3 class="esa-empty-state__title typography-label-sm-strong">
        No commitments on this list
      </h3>
      <p class="esa-empty-state__description typography-body-xs">
        Add commitments to start the list.
      </p>
      <div class="esa-empty-state__actions typography-label-md"></div>
    </div>
  </div>
  <div class="bcn-lot__body" data-list-cats="" data-list-flat="">
    <ul class="bcn-lot__cards" data-list-cards="">
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 7.5"
        data-id="COA 7.5"
        data-class="commitment"
        data-codes="COA 7.5"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 7.5</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Phase 2 Project Operations Report"
              >Phase 2 Project Operations Report</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%207.5"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 7.5"
              data-req-id="req_01M2ESMD3CWDMXW1Q6M5DTN4MS"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 7.5</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Submit Phase 2 Project Operations Report to CDFW"
              >
                Submit Phase 2 Project Operations Report to CDFW
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.3"
        data-id="COA 10.3"
        data-class="commitment"
        data-codes="COA 10.3"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.3</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Tracking Habitat Feature Disturbances and GIS Reporting"
              >Tracking Habitat Feature Disturbances and GIS Reporting</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="4 requirements">4</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.3"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.3"
              data-req-id="req_01M2ESMEGDMF3XE1YW7BYGW6H7"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.3</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Maintain GIS Layers Tracking Land and Habitat Feature Disturbance"
              >
                Maintain GIS Layers Tracking Land and Habitat Feature Disturbance
              </button>
            </li>
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.3"
              data-req-id="req_01M2ESMEGDMF3XE1YW7BYGW6H8"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.3</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Photo-Document Habitat Areas Before Covered Activities Begin"
              >
                Photo-Document Habitat Areas Before Covered Activities Begin
              </button>
            </li>
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.3"
              data-req-id="req_01M2ESMEGEH6VF63EFMK7NHEGK"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.3</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Attach GIS Layers and Metadata to the Monthly Compliance Report"
              >
                Attach GIS Layers and Metadata to the Monthly Compliance Report
              </button>
            </li>
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.3"
              data-req-id="req_01M2ESMEGEH6VF63EFMK7NHEGM"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.3</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Summarize Habitat Disturbance and Update Maps with the Annual Status Report"
              >
                Summarize Habitat Disturbance and Update Maps with the Annual Status
                Report
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.5"
        data-id="COA 10.5"
        data-class="commitment"
        data-codes="COA 10.5"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.5</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Reporting Approved Habitat Maps"
              >Reporting Approved Habitat Maps</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.5"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.5"
              data-req-id="req_01M2ESMEKX08QZ22RBTX3WH5T9"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.5</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Report Habitat Disturbance Acreages to CDFW"
              >
                Report Habitat Disturbance Acreages to CDFW
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.12"
        data-id="COA 10.12"
        data-class="commitment"
        data-codes="COA 10.12"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.12</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Monthly Compliance Report"
              >Monthly Compliance Report</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.12"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.12"
              data-req-id="req_01M2ESMF0PKSGVSRBAB5339S9M"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.12</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Compile and Submit Monthly Compliance Report"
              >
                Compile and Submit Monthly Compliance Report
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.13"
        data-id="COA 10.13"
        data-class="commitment"
        data-codes="COA 10.13"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.13</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Annual Status Report"
              >Annual Status Report</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.13"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.13"
              data-req-id="req_01M2ESMF2JKWGK226B0XNDKRFC"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.13</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Deliver Annual Status Report by January 31"
              >
                Deliver Annual Status Report by January 31
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.15"
        data-id="COA 10.15"
        data-class="commitment"
        data-codes="COA 10.15"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.15</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Final Mitigation Report"
              >Final Mitigation Report</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.15"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.15"
              data-req-id="req_01M2ESMF66E2240EKD6VJ291QY"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.15</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Deliver Final Phase Mitigation Report After Phase Completion"
              >
                Deliver Final Phase Mitigation Report After Phase Completion
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.15.1"
        data-id="COA 10.15.1"
        data-class="commitment"
        data-codes="COA 10.15.1"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.15.1</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Mitigation Status Report Before ITP Expiration"
              >Mitigation Status Report Before ITP Expiration</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.15.1"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.15.1"
              data-req-id="req_01M2ESMF7XVAKBFM66763ENDSK"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.15.1</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Deliver Mitigation Status Report Before ITP Expiration"
              >
                Deliver Mitigation Status Report Before ITP Expiration
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.18.1"
        data-id="COA 10.18.1"
        data-class="commitment"
        data-codes="COA 10.18.1"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18.1</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Monitoring Plan and Report Review and Finalization Process"
              >Monitoring Plan and Report Review and Finalization Process</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.18.1"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.18.1"
              data-req-id="req_01M2ESMFF83ZDJRVZFNX2DKF42"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.18.1</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Adhere to CDFW Review Process for Fish Study Plans and Reports"
              >
                Adhere to CDFW Review Process for Fish Study Plans and Reports
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 10.27.3"
        data-id="COA 10.27.3"
        data-class="commitment"
        data-codes="COA 10.27.3"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.27.3</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Hydraulic Testing Reports"
              >Hydraulic Testing Reports</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2010.27.3"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 10.27.3"
              data-req-id="req_01M2ESMHJA6YJA4EHD7WDAT58E"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 10.27.3</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Submit Hydraulic Testing Report Within 30 Days"
              >
                Submit Hydraulic Testing Report Within 30 Days
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 11.3"
        data-id="COA 11.3"
        data-class="commitment"
        data-codes="COA 11.3"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.3</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Covered Species Capture, Handling, and Reporting"
              >Covered Species Capture, Handling, and Reporting</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="2 requirements">2</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2011.3"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 11.3"
              data-req-id="req_01M2ESMHX0CTAX0Q3ZYCPP7TNK"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 11.3</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Capture and Handle Covered Species per Hygiene Protocol"
              >
                Capture and Handle Covered Species per Hygiene Protocol
              </button>
            </li>
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 11.3"
              data-req-id="req_01M2ESMHX1CGVWY7BBSAT1ZC2S"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 11.3</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Maintain Capture and Relocation Monitoring Records"
              >
                Maintain Capture and Relocation Monitoring Records
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 11.52.4"
        data-id="COA 11.52.4"
        data-class="commitment"
        data-codes="COA 11.52.4"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.52.4</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Written Incident Report for CTS Take or Injury"
              >Written Incident Report for CTS Take or Injury</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2011.52.4"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 11.52.4"
              data-req-id="req_01M2ESMNH15YZ4G05ST577QXV5"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 11.52.4</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Submit Written CTS Take/Injury Incident Report to CDFW"
              >
                Submit Written CTS Take/Injury Incident Report to CDFW
              </button>
            </li>
          </ul>
        </details>
      </li>
      <li
        class="bcn-loc"
        data-list-card=""
        data-member-id="COA 11.68.4"
        data-id="COA 11.68.4"
        data-class="commitment"
        data-codes="COA 11.68.4"
        data-index=""
        data-source="Incidental Take Permit (ITP) 2081"
      >
        <details class="bcn-loc__node">
          <summary class="bcn-loc__main">
            <span class="bcn-loc__chevron" aria-hidden="true"
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
            ><span data-list-code=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.68.4</span></span
            ><span
              class="bcn-loc__title bcn-lmc__title"
              data-list-title=""
              data-list-text="Written Incident Report for GGS Take or Injury"
              >Written Incident Report for GGS Take or Injury</span
            ><span data-list-count="member"
              ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
            ><esa-tooltip text="Open commitment" position="above" align="center"
              ><a
                class="bcn-loc__verb"
                href="/beacon-design/prototypes/data-catalog-commitment?id=COA%2011.68.4"
                aria-label="Open this commitment in the Data Catalog"
                data-list-goto=""
                ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M15 3h6v6"></path>
                    <path d="M10 14 21 3"></path>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path></svg></span></a></esa-tooltip
            ><esa-tooltip text="Remove from this list" align="end" position="above"
              ><button
                type="button"
                class="bcn-loc__verb bcn-loc__verb--danger"
                aria-label="Remove from this list"
                data-list-remove=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true"
                  ><svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    focusable="false"
                  >
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path></svg
                ></span></button
            ></esa-tooltip>
          </summary>
          <ul class="bcn-loc__reqs">
            <li
              class="bcn-loc__req"
              data-list-req=""
              data-code="COA 11.68.4"
              data-req-id="req_01M2ESMPXZ8BZZ7N0NNT5MKQFM"
            >
              <span class="bcn-cbadge bcn-cbadge--sm">COA 11.68.4</span
              ><button
                type="button"
                class="bcn-loc__req-name"
                data-list-text="Send CDFW Written Incident Report Within Two Business Days"
              >
                Send CDFW Written Incident Report Within Two Business Days
              </button>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div class="bcn-lot__body" data-list-mirror-body=""></div>
  <template data-list-tpl="section"
    ><details class="bcn-lot__cat" data-list-group="" data-astro-cid-jcfghirm="">
      <summary class="bcn-lot__row bcn-lot__row--cat" data-astro-cid-jcfghirm="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-jcfghirm=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">COA</span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-jcfghirm=""></span
        ><span data-list-count="group" data-astro-cid-jcfghirm=""
          ><span
            class="bcn-swcb"
            data-astro-cid-jcfghirm="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <div
        class="bcn-lot__subs"
        data-list-subs=""
        data-astro-cid-jcfghirm=""
      ></div></details></template
  ><template data-list-tpl="commitment"
    ><details class="bcn-lot__sub" data-list-group="" data-astro-cid-jcfghirm="">
      <summary class="bcn-lot__row bcn-lot__row--sub" data-astro-cid-jcfghirm="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-jcfghirm=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">COA</span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-jcfghirm=""></span
        ><span data-list-count="group" data-astro-cid-jcfghirm=""
          ><span
            class="bcn-swcb"
            data-astro-cid-jcfghirm="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <ul
        class="bcn-lot__cards"
        data-list-cards=""
        data-astro-cid-jcfghirm=""
      ></ul></details></template
  ><template data-list-tpl="index-cat"
    ><details class="bcn-lot__cat" data-list-group="" data-astro-cid-jcfghirm="">
      <summary class="bcn-lot__row bcn-lot__row--cat" data-astro-cid-jcfghirm="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-jcfghirm=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-jcfghirm=""></span
        ><span data-list-count="group" data-astro-cid-jcfghirm=""
          ><span
            class="bcn-swcb"
            data-astro-cid-jcfghirm="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <div
        class="bcn-lot__subs"
        data-list-subs=""
        data-astro-cid-jcfghirm=""
      ></div></details></template
  ><template data-list-tpl="index-sub"
    ><details class="bcn-lot__sub" data-list-group="" data-astro-cid-jcfghirm="">
      <summary class="bcn-lot__row bcn-lot__row--sub" data-astro-cid-jcfghirm="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-jcfghirm=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-jcfghirm=""></span
        ><span data-list-count="group" data-astro-cid-jcfghirm=""
          ><span
            class="bcn-swcb"
            data-astro-cid-jcfghirm="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <ul
        class="bcn-lot__cards"
        data-list-cards=""
        data-astro-cid-jcfghirm=""
      ></ul></details></template
  ><template data-list-tpl="group"
    ><details class="bcn-lot__cat" open="" data-astro-cid-jcfghirm="">
      <summary class="bcn-lot__row bcn-lot__row--cat" data-astro-cid-jcfghirm="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-jcfghirm=""
          ><span
            class="esa-icon esa-icon--sm"
            aria-hidden="true"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-jcfghirm=""></span
        ><span data-list-count="cat" data-astro-cid-jcfghirm=""
          ><span
            class="bcn-swcb"
            data-astro-cid-jcfghirm="true"
            data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <ul
        class="bcn-lot__cards bcn-lmt__cards"
        data-list-cards=""
        data-astro-cid-jcfghirm=""
      ></ul></details></template
  ><template data-list-tpl="card"
    ><li
      class="bcn-loc"
      data-list-card=""
      data-member-id=""
      data-id=""
      data-class="commitment"
      data-codes=""
      data-index=""
      data-astro-cid-f7dl3m6l=""
    >
      <details class="bcn-loc__node" data-astro-cid-f7dl3m6l="">
        <summary class="bcn-loc__main" data-astro-cid-f7dl3m6l="">
          <span class="bcn-loc__chevron" aria-hidden="true" data-astro-cid-f7dl3m6l=""
            ><span
              class="esa-icon esa-icon--sm"
              aria-hidden="true"
              data-astro-cid-c7ivvrtd=""
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
                data-astro-cid-c7ivvrtd=""
              >
                <path d="m9 18 6-6-6-6"></path></svg></span></span
          ><span data-list-code="" data-astro-cid-f7dl3m6l=""
            ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3=""
              >COA</span
            ></span
          ><span
            class="bcn-loc__title bcn-lmc__title"
            data-list-title=""
            data-list-text=""
            data-astro-cid-f7dl3m6l=""
          ></span
          ><span data-list-count="member" data-astro-cid-f7dl3m6l=""
            ><span
              class="bcn-swcb"
              aria-label="1 requirements"
              data-astro-cid-f7dl3m6l="true"
              data-astro-cid-pmjgmd6u=""
              >1</span
            ></span
          ><esa-tooltip text="Open commitment" data-astro-cid-f7dl3m6l="true"
            ><a
              class="bcn-loc__verb"
              href="/beacon-design/prototypes/data-catalog-commitment?id=COA"
              aria-label="Open this commitment in the Data Catalog"
              data-list-goto=""
              data-astro-cid-f7dl3m6l=""
              ><span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-c7ivvrtd=""
                ><svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                  data-astro-cid-c7ivvrtd=""
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path
                    d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                  ></path></svg></span></a></esa-tooltip
          ><esa-tooltip
            text="Remove from this list"
            align="end"
            data-astro-cid-f7dl3m6l="true"
            ><button
              type="button"
              class="bcn-loc__verb bcn-loc__verb--danger"
              aria-label="Remove from this list"
              data-list-remove=""
              data-astro-cid-f7dl3m6l=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-c7ivvrtd=""
                ><svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                  data-astro-cid-c7ivvrtd=""
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path></svg
              ></span></button
          ></esa-tooltip>
        </summary>
        <ul class="bcn-loc__reqs" data-astro-cid-f7dl3m6l="">
          <li
            class="bcn-loc__req"
            data-list-req=""
            data-code=""
            data-req-id=""
            data-index=""
            data-astro-cid-f7dl3m6l=""
          >
            <span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3=""></span
            ><button
              type="button"
              class="bcn-loc__req-name"
              data-list-text=""
              data-astro-cid-f7dl3m6l=""
            ></button>
          </li>
        </ul>
      </details></li></template
  ><esa-confirm-dialog
    data-list-confirm="true"
    heading="Remove from this list?"
    confirm-label="Remove"
    cancel-label="Cancel"
    show-close-button="true"
    data-list-one="commitment"
    style="--z-modal: 1500; --z-modal-backdrop: 1450"
    variant="default"
  ></esa-confirm-dialog>
</section>
```

## Styles
```css
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-loc__edited {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-loc__edited[hidden] {
  display: none;
}
.bcn-loc__dot {
  place-items: center;
  block-size: 1rem;
  inline-size: 1rem;
  display: inline-grid;
}
.bcn-loc__dot:before {
  content: "";
  background: var(--color-content-brand);
  border-radius: 50%;
  block-size: 6px;
  inline-size: 6px;
}
.bcn-lot__folds {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lot__verb-label {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-lot__cat[data-list-empty],
.bcn-lot__sub[data-list-empty] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
.bcn-lmc__title {
  cursor: inherit;
}
.bcn-lmc__title:hover {
  text-decoration: none;
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lmt__folds {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lmt__verb-label {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-lmt__cards {
  padding-inline-start: calc(var(--spacing-400) + 22px);
}
.bcn-lot__cat[data-list-empty],
.bcn-lmt [data-list-cats] [data-list-class-tag] {
  display: none;
}
.bcn-lmt__empty {
  padding: var(--spacing-600) var(--spacing-400);
}
.bcn-lmt__empty[hidden],
.bcn-lmt[data-list-none] [data-list-cats] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: -2px;
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
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__listmode .bcn-loc__main {
  cursor: default;
}
.bcn-ev-targets__listmode .bcn-loc__title {
  cursor: inherit;
  text-decoration: none;
}
.bcn-ev-targets__listmode .bcn-loc__main > :last-child {
  margin-left: auto;
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
.bcn-swoc,
.bcn-loc {
  --_req-indent: 22px;
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover,
.bcn-loc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden],
.bcn-loc[hidden] {
  display: none;
}
.bcn-swoc.is-new,
.bcn-loc.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swoc__node,
.bcn-loc__node {
  min-width: 0;
}
.bcn-swoc__main,
.bcn-loc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker,
.bcn-loc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover,
.bcn-loc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main:focus-visible,
.bcn-loc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main,
details[open] > .bcn-loc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__chevron,
.bcn-loc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron,
details[open] > summary .bcn-loc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title,
.bcn-loc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  font-weight: 500;
  overflow: hidden;
}
.bcn-swoc__title:hover,
.bcn-loc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible,
.bcn-loc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip,
.bcn-loc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb,
.bcn-loc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover,
.bcn-loc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb:focus-visible,
.bcn-loc__verb:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swoc__verb--danger:hover,
.bcn-loc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swoc__reqs,
.bcn-loc__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150)
    calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover,
.bcn-loc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req-name,
.bcn-loc__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swoc__also,
.bcn-loc__also {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.6875rem;
}
.bcn-loc__title {
  flex: 0 auto;
}
.bcn-loc [data-list-count] {
  margin-inline-start: auto;
}
.bcn-loc__req {
  color: var(--color-content-default-secondary);
  cursor: pointer;
}
.bcn-loc__req-name {
  font: inherit;
  color: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-loc__req:hover .bcn-loc__req-name {
  color: var(--color-content-default);
}
.bcn-loc__req-name:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
  border-radius: 2px;
}
.bcn-loc__impl[hidden] {
  display: none;
}
.bcn-loc__impl .bcn-status-chip {
  flex-shrink: 0;
}
.bcn-loc__comments {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence {
  text-align: end;
  min-width: 5.5rem;
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence[data-none] {
  color: var(--color-content-default-tertiary);
  font-weight: 400;
}
.bcn-swot,
.bcn-lot {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swot__nomatch,
.bcn-lot__nomatch {
  padding: var(--spacing-300) var(--spacing-400);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-swot__body,
.bcn-lot__body {
  flex-direction: column;
  display: flex;
}
.bcn-swot__cat,
.bcn-lot__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-swot__cat:nth-of-type(2n),
.bcn-lot__cat:nth-of-type(2n) {
  background: color-mix(in srgb, var(--bcn-gray-100) 50%, white);
}
.bcn-swot__cat:nth-of-type(2n) .bcn-swot__row:hover,
.bcn-lot__cat:nth-of-type(2n) .bcn-lot__row:hover {
  background: var(--bcn-gray-100);
}
.bcn-swot__sub + .bcn-swot__sub,
.bcn-lot__sub + .bcn-lot__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-swot__cat:last-of-type,
.bcn-lot__cat:last-of-type {
  border-bottom: none;
}
.bcn-swot__cat[hidden],
.bcn-swot__sub[hidden],
.bcn-lot__cat[hidden],
.bcn-lot__sub[hidden] {
  display: none;
}
.bcn-swot__row,
.bcn-lot__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swot__row::-webkit-details-marker,
.bcn-lot__row::-webkit-details-marker {
  display: none;
}
.bcn-swot__row:hover,
.bcn-lot__row:hover {
  background: var(--color-background-default);
}
.bcn-swot__row--cat,
.bcn-lot__row--cat {
  font-weight: 600;
}
.bcn-swot__row--sub,
.bcn-lot__row--sub {
  padding-left: calc(var(--spacing-400) + 22px);
}
.bcn-swot__chevron,
.bcn-lot__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-swot__row .bcn-swot__chevron,
details[open] > .bcn-lot__row .bcn-lot__chevron {
  transform: rotate(90deg);
}
.bcn-swot__name,
.bcn-lot__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  min-width: 0;
  padding: 0 2px;
  overflow: hidden;
}
.bcn-swot__name.is-editing,
.bcn-lot__name.is-editing {
  outline: 2px solid var(--color-obligation);
  outline-offset: 0;
  background: var(--color-background-elevation-raised);
  cursor: text;
  user-select: text;
  font-weight: 500;
}
.bcn-swot__verbs,
.bcn-lot__verbs {
  gap: 2px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-swot__verbs esa-tooltip,
.bcn-lot__verbs esa-tooltip {
  display: inline-flex;
}
.bcn-swot__verb,
.bcn-lot__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swot__verb--quiet,
.bcn-lot__verb--quiet {
  opacity: 0;
  transition: opacity 0.12s;
}
.bcn-swot__row:hover .bcn-swot__verb--quiet,
.bcn-swot__row:focus-within .bcn-swot__verb--quiet,
.bcn-lot__row:hover .bcn-lot__verb--quiet,
.bcn-lot__row:focus-within .bcn-lot__verb--quiet {
  opacity: 1;
}
.bcn-swot__verb:hover,
.bcn-lot__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swot__verb:focus-visible,
.bcn-lot__verb:focus-visible {
  opacity: 1;
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swot__verb--danger:hover,
.bcn-lot__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swot__subs,
.bcn-lot__subs {
  flex-direction: column;
  display: flex;
}
.bcn-swot__cards,
.bcn-lot__cards {
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-300)
    calc(var(--spacing-400) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swot__hit,
.bcn-lot__hit {
  color: inherit;
  background: #fff176;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-swot__hit-chip,
.bcn-lot__hit-chip {
  box-shadow: 0 0 0 2px #fff176;
}
.bcn-lot[data-list-view="index"] [data-list-cats],
.bcn-lot[data-list-view="commitment"] [data-list-cats],
.bcn-lot[data-list-view="az"] [data-list-cats],
.bcn-lot:not([data-list-view="index"]):not([data-list-view="commitment"]):not(
    [data-list-view="az"]
  )
  [data-list-mirror-body] {
  display: none;
}
.bcn-lot [data-list-flat] > .bcn-lot__cards {
  padding: var(--spacing-300) var(--spacing-400);
}
.bcn-lot__row .bcn-lot__name[hidden] {
  display: none;
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state--xs {
  --_empty-icon-size: var(--empty-state-icon-size-xs, 24px);
  padding: var(--spacing-300, 0.75rem) var(--spacing-200, 0.5rem);
}
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
}
.esa-empty-state--lg {
  --_empty-icon-size: var(--empty-state-icon-size-lg, 64px);
  padding: var(--spacing-800, 4rem) var(--spacing-400, 1rem);
}
.esa-empty-state__icon {
  color: var(--color-content-default-secondary, #646464);
  margin-bottom: var(--spacing-100, 0.25rem);
  display: inline-flex;
}
.esa-empty-state__icon svg {
  width: var(--_empty-icon-size);
  height: var(--_empty-icon-size);
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-action`: #d45087 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--typography-body-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-body-xs-font-weight`: 350 _(semantic)_
- `--typography-body-xs-letter-spacing`: .01em _(semantic)_
- `--typography-body-xs-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
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
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
