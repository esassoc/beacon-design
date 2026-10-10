# Timeline

Due dates on a month axis, grouped by status, for the same filtered set.

## Done when
- Undated implementations are listed in a No due date group, not dropped.

## Markup
```html
<section
  class="bcn-atl"
  data-atl=""
  aria-label="Actions timeline"
  style="--atl-days: 548; --atl-today: 188"
>
  <div class="bcn-atl__module">
    <div
      class="bcn-atl__scroll"
      data-atl-scroll=""
      tabindex="0"
      aria-label="Action implementations by due date"
    >
      <div class="bcn-atl__canvas" data-atl-canvas="">
        <div class="bcn-atl__head">
          <div class="bcn-atl__corner">Action</div>
          <div class="bcn-atl__axis" data-atl-months="">
            <span class="bcn-atl__month" style="--x: 0; --span: 30"
              ><span class="bcn-atl__month-name" data-atl-month-name=""
                >Apr 2026</span
              ></span
            ><span class="bcn-atl__month" style="--x: 30; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">May</span></span
            ><span class="bcn-atl__month" style="--x: 61; --span: 30"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Jun</span></span
            ><span class="bcn-atl__month" style="--x: 91; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Jul</span></span
            ><span class="bcn-atl__month" style="--x: 122; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Aug</span></span
            ><span class="bcn-atl__month" style="--x: 153; --span: 30"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Sep</span></span
            ><span class="bcn-atl__month" style="--x: 183; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Oct</span></span
            ><span class="bcn-atl__month" style="--x: 214; --span: 30"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Nov</span></span
            ><span class="bcn-atl__month" style="--x: 244; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Dec</span></span
            ><span class="bcn-atl__month" style="--x: 275; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name=""
                >Jan 2027</span
              ></span
            ><span class="bcn-atl__month" style="--x: 306; --span: 28"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Feb</span></span
            ><span class="bcn-atl__month" style="--x: 334; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Mar</span></span
            ><span class="bcn-atl__month" style="--x: 365; --span: 30"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Apr</span></span
            ><span class="bcn-atl__month" style="--x: 395; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">May</span></span
            ><span class="bcn-atl__month" style="--x: 426; --span: 30"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Jun</span></span
            ><span class="bcn-atl__month" style="--x: 456; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Jul</span></span
            ><span class="bcn-atl__month" style="--x: 487; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Aug</span></span
            ><span class="bcn-atl__month" style="--x: 518; --span: 30"
              ><span class="bcn-atl__month-name" data-atl-month-name="">Sep</span></span
            ><span class="bcn-atl__today-flag" data-atl-today-flag="">Today</span>
          </div>
        </div>
        <div class="bcn-atl__body" data-atl-body="">
          <div class="bcn-atl__grid" data-atl-grid="" aria-hidden="true">
            <span class="bcn-atl__today"></span
            ><span class="bcn-atl__rule" style="--x: 30"></span
            ><span class="bcn-atl__rule" style="--x: 61"></span
            ><span class="bcn-atl__rule" style="--x: 91"></span
            ><span class="bcn-atl__rule" style="--x: 122"></span
            ><span class="bcn-atl__rule" style="--x: 153"></span
            ><span class="bcn-atl__rule" style="--x: 183"></span
            ><span class="bcn-atl__rule" style="--x: 214"></span
            ><span class="bcn-atl__rule" style="--x: 244"></span
            ><span class="bcn-atl__rule" style="--x: 275"></span
            ><span class="bcn-atl__rule" style="--x: 306"></span
            ><span class="bcn-atl__rule" style="--x: 334"></span
            ><span class="bcn-atl__rule" style="--x: 365"></span
            ><span class="bcn-atl__rule" style="--x: 395"></span
            ><span class="bcn-atl__rule" style="--x: 426"></span
            ><span class="bcn-atl__rule" style="--x: 456"></span
            ><span class="bcn-atl__rule" style="--x: 487"></span
            ><span class="bcn-atl__rule" style="--x: 518"></span>
          </div>
          <div data-atl-groups="">
            <details class="bcn-atl__group" open="" data-group="NotStarted">
              <summary class="bcn-atl__ghead">
                <span class="bcn-atl__ghead-text"
                  ><span class="bcn-atl__chevron" aria-hidden="true"
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
                  ><span
                    class="bcn-atl__swatch"
                    data-atl-swatch=""
                    aria-hidden="true"
                    style="--atl-tone: var(--bcn-status-not-started)"
                  ></span
                  ><span class="bcn-atl__glabel" data-atl-glabel="">Not Started</span
                  ><span class="bcn-atl__gcount" data-atl-gcount="">18</span></span
                >
              </summary>
              <div data-atl-rows="">
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJY|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJY%7Csouthern-forebay-pumping-plant"
                      title="Submit Credit Bill of Sale and Payment Receipt to CDFW"
                      >Submit Credit Bill of Sale and Payment Receipt to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.10</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span
                      class="bcn-atl__lag"
                      data-atl-lag=""
                      style="--from: 164; --to: 188"
                    ></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Credit Bill of Sale and Payment Receipt to CDFW
Due Sep 12, 2026, 24 days overdue"
                      aria-label="Submit Credit Bill of Sale and Payment Receipt to CDFW. Due Sep 12, 2026, 24 days overdue"
                      style="--x: 164; --atl-tone: var(--color-background-utility-danger)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTT|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RA6HTPQEBMJTM46QTT%7Csouthern-forebay-pumping-plant"
                      title="Submit Aquatic Conditions Assessments with the Phase 2 Package"
                      >Submit Aquatic Conditions Assessments with the Phase 2 Package</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span
                      class="bcn-atl__lag"
                      data-atl-lag=""
                      style="--from: 178; --to: 188"
                    ></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Aquatic Conditions Assessments with the Phase 2 Package
Due Sep 26, 2026, 10 days overdue"
                      aria-label="Submit Aquatic Conditions Assessments with the Phase 2 Package. Due Sep 26, 2026, 10 days overdue"
                      style="--x: 178; --atl-tone: var(--color-background-utility-danger)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTP|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RA6HTPQEBMJTM46QTP%7Csouthern-forebay-pumping-plant"
                      title="Submit Preconstruction TRBL Survey Results to CDFW"
                      >Submit Preconstruction TRBL Survey Results to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.84</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span
                      class="bcn-atl__lag"
                      data-atl-lag=""
                      style="--from: 183; --to: 188"
                    ></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Preconstruction TRBL Survey Results to CDFW
Due Oct 1, 2026, 5 days overdue"
                      aria-label="Submit Preconstruction TRBL Survey Results to CDFW. Due Oct 1, 2026, 5 days overdue"
                      style="--x: 183; --atl-tone: var(--color-background-utility-danger)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3R7PYV1TN3PG7JYE8R0|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3R7PYV1TN3PG7JYE8R0%7Csouthern-forebay-pumping-plant"
                      title="Deliver Mitigation Status Report Before ITP Expiration"
                      >Deliver Mitigation Status Report Before ITP Expiration</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.15.1</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Deliver Mitigation Status Report Before ITP Expiration
Due Nov 17, 2026"
                      aria-label="Deliver Mitigation Status Report Before ITP Expiration. Due Nov 17, 2026"
                      style="--x: 230; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34YSP53SW383CFT2CZM|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34YSP53SW383CFT2CZM%7Csouthern-forebay-pumping-plant"
                      title="Obtain CDFW Approval of the HM Lands Conservation Easement"
                      >Obtain CDFW Approval of the HM Lands Conservation Easement</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.2</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Obtain CDFW Approval of the HM Lands Conservation Easement
Due Jan 6, 2027"
                      aria-label="Obtain CDFW Approval of the HM Lands Conservation Easement. Due Jan 6, 2027"
                      style="--x: 280; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3R2ZP7KE7EZHM396ZJY|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3R2ZP7KE7EZHM396ZJY%7Csouthern-forebay-pumping-plant"
                      title="Notify CDFW 14 Days Before Starting Covered Activities"
                      >Notify CDFW 14 Days Before Starting Covered Activities</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.1</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Notify CDFW 14 Days Before Starting Covered Activities
Due Jan 29, 2027"
                      aria-label="Notify CDFW 14 Days Before Starting Covered Activities. Due Jan 29, 2027"
                      style="--x: 303; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJS|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJS%7Csouthern-forebay-pumping-plant"
                      title="Notify CDFW of TRBL Colony or Roost Disturbance"
                      >Notify CDFW of TRBL Colony or Roost Disturbance</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.86</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Notify CDFW of TRBL Colony or Roost Disturbance
Due Jan 31, 2027"
                      aria-label="Notify CDFW of TRBL Colony or Roost Disturbance. Due Jan 31, 2027"
                      style="--x: 305; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJT|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJT%7Csouthern-forebay-pumping-plant"
                      title="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
                      >Notify CDFW of TRBL Nest or Colony Abandonment or Distress</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.93</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Notify CDFW of TRBL Nest or Colony Abandonment or Distress
Due Feb 6, 2027"
                      aria-label="Notify CDFW of TRBL Nest or Colony Abandonment or Distress. Due Feb 6, 2027"
                      style="--x: 311; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NJADVCJBHXD7RXW12B|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NJADVCJBHXD7RXW12B%7Csouthern-forebay-pumping-plant"
                      title="Submit Covered Fish Species Monitoring and Science Plan"
                      >Submit Covered Fish Species Monitoring and Science Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Covered Fish Species Monitoring and Science Plan
Due Feb 12, 2027"
                      aria-label="Submit Covered Fish Species Monitoring and Science Plan. Due Feb 12, 2027"
                      style="--x: 317; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34V8WHD9WZSVEXW30W8|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34V8WHD9WZSVEXW30W8%7Csouthern-forebay-pumping-plant"
                      title="Submit Preconstruction Survey Results for CDFW Approval"
                      >Submit Preconstruction Survey Results for CDFW Approval</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.42</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Preconstruction Survey Results for CDFW Approval
Due Mar 23, 2027"
                      aria-label="Submit Preconstruction Survey Results for CDFW Approval. Due Mar 23, 2027"
                      style="--x: 356; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTQ|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RA6HTPQEBMJTM46QTQ%7Csouthern-forebay-pumping-plant"
                      title="Submit Subsurface Vibration Study Results to CDFW"
                      >Submit Subsurface Vibration Study Results to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.17</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Subsurface Vibration Study Results to CDFW
Due Jun 10, 2027"
                      aria-label="Submit Subsurface Vibration Study Results to CDFW. Due Jun 10, 2027"
                      style="--x: 435; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKER|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NNJMTS3JZDQQZNRKER%7Csouthern-forebay-pumping-plant"
                      title="Submit Dewatering Plan"
                      >Submit Dewatering Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.37</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Dewatering Plan
Due Jul 13, 2027"
                      aria-label="Submit Dewatering Plan. Due Jul 13, 2027"
                      style="--x: 468; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NMGVH2VJSMJC7KKSH7|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NMGVH2VJSMJC7KKSH7%7Csouthern-forebay-pumping-plant"
                      title="Submit Erosion and Sediment Control Plan"
                      >Submit Erosion and Sediment Control Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.26</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Erosion and Sediment Control Plan
Due Aug 27, 2027"
                      aria-label="Submit Erosion and Sediment Control Plan. Due Aug 27, 2027"
                      style="--x: 513; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34YSP53SW383CFT2CZH|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34YSP53SW383CFT2CZH%7Csouthern-forebay-pumping-plant"
                      title="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
                      >Obtain CDFW Approval of Mitigation Habitat Restoration Projects</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Obtain CDFW Approval of Mitigation Habitat Restoration Projects
Due Sep 3, 2027"
                      aria-label="Obtain CDFW Approval of Mitigation Habitat Restoration Projects. Due Sep 3, 2027"
                      style="--x: 520; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQK3|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQK3%7Csouthern-forebay-pumping-plant"
                      title="Share Phase 1 Operations Data with CDFW"
                      >Share Phase 1 Operations Data with CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 7.1</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Share Phase 1 Operations Data with CDFW
Due Sep 30, 2027"
                      aria-label="Share Phase 1 Operations Data with CDFW. Due Sep 30, 2027"
                      style="--x: 547; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXW|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3R8HSR7K069ZM5EZCXW%7Csouthern-forebay-pumping-plant"
                      title="Report GGS Relocations to CDFW"
                      >Report GGS Relocations to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.67.1</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark is-clipped"
                      data-atl-mark=""
                      role="img"
                      title="Report GGS Relocations to CDFW
Due Oct 12, 2027"
                      aria-label="Report GGS Relocations to CDFW. Due Oct 12, 2027"
                      style="--x: 547; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34ZRWNWJ42W3E737QZY|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34ZRWNWJ42W3E737QZY%7Csouthern-forebay-pumping-plant"
                      title="Submit Annual Biologist Reapproval List to CDFW"
                      >Submit Annual Biologist Reapproval List to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.2</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark is-clipped"
                      data-atl-mark=""
                      role="img"
                      title="Submit Annual Biologist Reapproval List to CDFW
Due Jan 30, 2028"
                      aria-label="Submit Annual Biologist Reapproval List to CDFW. Due Jan 30, 2028"
                      style="--x: 547; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTN|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RA6HTPQEBMJTM46QTN%7Csouthern-forebay-pumping-plant"
                      title="Submit Preconstruction Habitat Survey Results in the Phase Package"
                      >Submit Preconstruction Habitat Survey Results in the Phase
                      Package</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.8</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark is-clipped"
                      data-atl-mark=""
                      role="img"
                      title="Submit Preconstruction Habitat Survey Results in the Phase Package
Due Feb 7, 2028"
                      aria-label="Submit Preconstruction Habitat Survey Results in the Phase Package. Due Feb 7, 2028"
                      style="--x: 547; --atl-tone: var(--bcn-status-not-started)"
                    ></span>
                  </div>
                </div>
              </div>
            </details>
            <details class="bcn-atl__group" open="" data-group="InProgress">
              <summary class="bcn-atl__ghead">
                <span class="bcn-atl__ghead-text"
                  ><span class="bcn-atl__chevron" aria-hidden="true"
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
                  ><span
                    class="bcn-atl__swatch"
                    data-atl-swatch=""
                    aria-hidden="true"
                    style="--atl-tone: var(--bcn-status-in-progress)"
                  ></span
                  ><span class="bcn-atl__glabel" data-atl-glabel="">In Progress</span
                  ><span class="bcn-atl__gcount" data-atl-gcount="">13</span></span
                >
              </summary>
              <div data-atl-rows="">
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3R2ZP7KE7EZHM396ZJZ|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3R2ZP7KE7EZHM396ZJZ%7Csouthern-forebay-pumping-plant"
                      title="Submit Monthly Compliance Report to CDFW"
                      >Submit Monthly Compliance Report to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.9</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Collecting Data</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Monthly Compliance Report to CDFW
Due Nov 13, 2026"
                      aria-label="Submit Monthly Compliance Report to CDFW. Due Nov 13, 2026"
                      style="--x: 226; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3R99JZNVA7RWDTVTCW6|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3R99JZNVA7RWDTVTCW6%7Csouthern-forebay-pumping-plant"
                      title="Report Hydroacoustic Threshold Exceedances to CDFW"
                      >Report Hydroacoustic Threshold Exceedances to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.33</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Drafting</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Report Hydroacoustic Threshold Exceedances to CDFW
Due Nov 24, 2026"
                      aria-label="Report Hydroacoustic Threshold Exceedances to CDFW. Due Nov 24, 2026"
                      style="--x: 237; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y32F2DZX3TCXSF7HD075|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y32F2DZX3TCXSF7HD075%7Csouthern-forebay-pumping-plant"
                      title="Complete Joint Operations Optimization Study"
                      >Complete Joint Operations Optimization Study</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.110</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Collecting Data</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Complete Joint Operations Optimization Study
Due Dec 28, 2026"
                      aria-label="Complete Joint Operations Optimization Study. Due Dec 28, 2026"
                      style="--x: 271; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJZ|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJZ%7Csouthern-forebay-pumping-plant"
                      title="Provide Title and Environmental Documentation for HM Lands"
                      >Provide Title and Environmental Documentation for HM Lands</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.4</span></span
                      ><span class="bcn-atl__status" data-atl-status="">QA/QC</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Provide Title and Environmental Documentation for HM Lands
Due Jan 24, 2027"
                      aria-label="Provide Title and Environmental Documentation for HM Lands. Due Jan 24, 2027"
                      style="--x: 298; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTR|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RA6HTPQEBMJTM46QTR%7Csouthern-forebay-pumping-plant"
                      title="Disclose Detected Wells in the Construction Phase Package"
                      >Disclose Detected Wells in the Construction Phase Package</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.24</span></span
                      ><span class="bcn-atl__status" data-atl-status="">QA/QC</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Disclose Detected Wells in the Construction Phase Package
Due Mar 15, 2027"
                      aria-label="Disclose Detected Wells in the Construction Phase Package. Due Mar 15, 2027"
                      style="--x: 348; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34ZRWNWJ42W3E737QZZ|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34ZRWNWJ42W3E737QZZ%7Csouthern-forebay-pumping-plant"
                      title="Submit Biologist Resume Forms to CDFW Before Each Phase"
                      >Submit Biologist Resume Forms to CDFW Before Each Phase</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.2</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Submitted</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Biologist Resume Forms to CDFW Before Each Phase
Due Jul 7, 2027"
                      aria-label="Submit Biologist Resume Forms to CDFW Before Each Phase. Due Jul 7, 2027"
                      style="--x: 462; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NJADVCJBHXD7RXW12D|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NJADVCJBHXD7RXW12D%7Csouthern-forebay-pumping-plant"
                      title="Develop Predation Study Plan"
                      >Develop Predation Study Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.19.2</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Drafting</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Develop Predation Study Plan
Due Jul 14, 2027"
                      aria-label="Develop Predation Study Plan. Due Jul 14, 2027"
                      style="--x: 469; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJR|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJR%7Csouthern-forebay-pumping-plant"
                      title="Notify CDFW of Nest Survey Results Before Vegetation Removal"
                      >Notify CDFW of Nest Survey Results Before Vegetation Removal</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.77</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Collecting Data</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Notify CDFW of Nest Survey Results Before Vegetation Removal
Due Aug 5, 2027"
                      aria-label="Notify CDFW of Nest Survey Results Before Vegetation Removal. Due Aug 5, 2027"
                      style="--x: 491; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y32F2DZX3TCXSF7HD078|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y32F2DZX3TCXSF7HD078%7Csouthern-forebay-pumping-plant"
                      title="Prepare Endowment Assessment for CDFW Approval"
                      >Prepare Endowment Assessment for CDFW Approval</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Drafting</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Prepare Endowment Assessment for CDFW Approval
Due Sep 18, 2027"
                      aria-label="Prepare Endowment Assessment for CDFW Approval. Due Sep 18, 2027"
                      style="--x: 535; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34YSP53SW383CFT2CZK|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34YSP53SW383CFT2CZK%7Csouthern-forebay-pumping-plant"
                      title="Obtain CDFW Approval of the Mitigation or Conservation Bank"
                      >Obtain CDFW Approval of the Mitigation or Conservation Bank</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.10</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Under Agency Review</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark is-clipped"
                      data-atl-mark=""
                      role="img"
                      title="Obtain CDFW Approval of the Mitigation or Conservation Bank
Due Nov 19, 2027"
                      aria-label="Obtain CDFW Approval of the Mitigation or Conservation Bank. Due Nov 19, 2027"
                      style="--x: 547; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJP|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJP%7Csouthern-forebay-pumping-plant"
                      title="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
                      >Report Barred Tiger Salamander or Hybrid Detections to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.53</span></span
                      ><span class="bcn-atl__status" data-atl-status="">QA/QC</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark is-clipped"
                      data-atl-mark=""
                      role="img"
                      title="Report Barred Tiger Salamander or Hybrid Detections to CDFW
Due Dec 5, 2027"
                      aria-label="Report Barred Tiger Salamander or Hybrid Detections to CDFW. Due Dec 5, 2027"
                      style="--x: 547; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34YSP53SW383CFT2CZD|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34YSP53SW383CFT2CZD%7Csouthern-forebay-pumping-plant"
                      title="Obtain CDFW Approval of Nighttime Covered Activities"
                      >Obtain CDFW Approval of Nighttime Covered Activities</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.7</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Under Agency Review</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark is-clipped"
                      data-atl-mark=""
                      role="img"
                      title="Obtain CDFW Approval of Nighttime Covered Activities
Due Dec 23, 2027"
                      aria-label="Obtain CDFW Approval of Nighttime Covered Activities. Due Dec 23, 2027"
                      style="--x: 547; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34YSP53SW383CFT2CZG|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34YSP53SW383CFT2CZG%7Csouthern-forebay-pumping-plant"
                      title="Obtain CDFW Approval to Remove or Trim a Known Nest Tree"
                      >Obtain CDFW Approval to Remove or Trim a Known Nest Tree</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.76</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Preparing Request</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark is-clipped"
                      data-atl-mark=""
                      role="img"
                      title="Obtain CDFW Approval to Remove or Trim a Known Nest Tree
Due Jan 17, 2028"
                      aria-label="Obtain CDFW Approval to Remove or Trim a Known Nest Tree. Due Jan 17, 2028"
                      style="--x: 547; --atl-tone: var(--bcn-status-in-progress)"
                    ></span>
                  </div>
                </div>
              </div>
            </details>
            <details class="bcn-atl__group" open="" data-group="Completed">
              <summary class="bcn-atl__ghead">
                <span class="bcn-atl__ghead-text"
                  ><span class="bcn-atl__chevron" aria-hidden="true"
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
                  ><span
                    class="bcn-atl__swatch"
                    data-atl-swatch=""
                    aria-hidden="true"
                    style="--atl-tone: var(--bcn-status-completed)"
                  ></span
                  ><span class="bcn-atl__glabel" data-atl-glabel="">Completed</span
                  ><span class="bcn-atl__gcount" data-atl-gcount="">10</span></span
                >
              </summary>
              <div data-atl-rows="">
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34ZRWNWJ42W3E737QZS|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34ZRWNWJ42W3E737QZS%7Csouthern-forebay-pumping-plant"
                      title="Submit Construction Phase Authorization Package to CDFW"
                      >Submit Construction Phase Authorization Package to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 6</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Approved</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Construction Phase Authorization Package to CDFW
Completed Apr 1, 2026
Due Apr 10, 2026"
                      aria-label="Submit Construction Phase Authorization Package to CDFW. Completed Apr 1, 2026
Due Apr 10, 2026"
                      style="--x: 0; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKN4|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NK6K0BZ6XYWCKNWKN4%7Csouthern-forebay-pumping-plant"
                      title="Prepare Stormwater Pollution Prevention Plan"
                      >Prepare Stormwater Pollution Prevention Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.25</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Approved</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Prepare Stormwater Pollution Prevention Plan
Completed Apr 30, 2026
Due May 10, 2026"
                      aria-label="Prepare Stormwater Pollution Prevention Plan. Completed Apr 30, 2026
Due May 10, 2026"
                      style="--x: 29; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEM|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NNJMTS3JZDQQZNRKEM%7Csouthern-forebay-pumping-plant"
                      title="Submit Underwater Sound Abatement Plan"
                      >Submit Underwater Sound Abatement Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.33</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Approved</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Underwater Sound Abatement Plan
Completed May 16, 2026
Due May 25, 2026"
                      aria-label="Submit Underwater Sound Abatement Plan. Completed May 16, 2026
Due May 25, 2026"
                      style="--x: 45; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34ZRWNWJ42W3E737QZR|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34ZRWNWJ42W3E737QZR%7Csouthern-forebay-pumping-plant"
                      title="Consult CDFW on Federal Biological Opinions"
                      >Consult CDFW on Federal Biological Opinions</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 4</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Approved</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Consult CDFW on Federal Biological Opinions
Completed May 24, 2026
Due May 27, 2026"
                      aria-label="Consult CDFW on Federal Biological Opinions. Completed May 24, 2026
Due May 27, 2026"
                      style="--x: 53; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKN3|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NK6K0BZ6XYWCKNWKN3%7Csouthern-forebay-pumping-plant"
                      title="Submit Underground Well Detection Plan"
                      >Submit Underground Well Detection Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.24</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Approved</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Underground Well Detection Plan
Completed Jun 2, 2026
Due Jun 4, 2026"
                      aria-label="Submit Underground Well Detection Plan. Completed Jun 2, 2026
Due Jun 4, 2026"
                      style="--x: 62; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3ENYWE6AXT12YDFDJKZ|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3ENYWE6AXT12YDFDJKZ%7Csouthern-forebay-pumping-plant"
                      title="Pay Care and Treatment Costs for Injured Covered Species"
                      >Pay Care and Treatment Costs for Injured Covered Species</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.68</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Completed</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Pay Care and Treatment Costs for Injured Covered Species
Completed Jul 5, 2026
Due Jul 13, 2026"
                      aria-label="Pay Care and Treatment Costs for Injured Covered Species. Completed Jul 5, 2026
Due Jul 13, 2026"
                      style="--x: 95; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y32F2DZX3TCXSF7HD074|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y32F2DZX3TCXSF7HD074%7Csouthern-forebay-pumping-plant"
                      title="Submit Fish Guidance System Recommendation Report to CDFW"
                      >Submit Fish Guidance System Recommendation Report to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.26</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Submitted</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Fish Guidance System Recommendation Report to CDFW
Completed Jul 10, 2026
Due Jul 12, 2026"
                      aria-label="Submit Fish Guidance System Recommendation Report to CDFW. Completed Jul 10, 2026
Due Jul 12, 2026"
                      style="--x: 100; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y32F2DZX3TCXSF7HD079|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y32F2DZX3TCXSF7HD079%7Csouthern-forebay-pumping-plant"
                      title="Develop CDFW-Approved Spring LFS Operational Scenario"
                      >Develop CDFW-Approved Spring LFS Operational Scenario</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.5</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Submitted</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Develop CDFW-Approved Spring LFS Operational Scenario
Completed Aug 9, 2026
Due Aug 20, 2026"
                      aria-label="Develop CDFW-Approved Spring LFS Operational Scenario. Completed Aug 9, 2026
Due Aug 20, 2026"
                      style="--x: 130; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEN|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NNJMTS3JZDQQZNRKEN%7Csouthern-forebay-pumping-plant"
                      title="Submit Pile Driving Plan"
                      >Submit Pile Driving Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.34</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Approved</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Submit Pile Driving Plan
Completed Aug 18, 2026
Due Aug 27, 2026"
                      aria-label="Submit Pile Driving Plan. Completed Aug 18, 2026
Due Aug 27, 2026"
                      style="--x: 139; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y32F2DZX3TCXSF7HD07B|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y32F2DZX3TCXSF7HD07B%7Csouthern-forebay-pumping-plant"
                      title="Prepare Phase Security Cost Estimate for HM Lands"
                      >Prepare Phase Security Cost Estimate for HM Lands</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.9</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Submitted</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      title="Prepare Phase Security Cost Estimate for HM Lands
Completed Sep 8, 2026
Due Sep 16, 2026"
                      aria-label="Prepare Phase Security Cost Estimate for HM Lands. Completed Sep 8, 2026
Due Sep 16, 2026"
                      style="--x: 160; --atl-tone: var(--bcn-status-completed)"
                    ></span>
                  </div>
                </div>
              </div>
            </details>
            <details class="bcn-atl__group" data-group="none">
              <summary class="bcn-atl__ghead">
                <span class="bcn-atl__ghead-text"
                  ><span class="bcn-atl__chevron" aria-hidden="true"
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
                  ><span class="bcn-atl__glabel" data-atl-glabel="">No due date</span
                  ><span class="bcn-atl__gcount" data-atl-gcount="">14</span></span
                >
              </summary>
              <div data-atl-rows="">
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y32F2DZX3TCXSF7HD077|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y32F2DZX3TCXSF7HD077%7Csouthern-forebay-pumping-plant"
                      title="Calculate Phase Impacts and Mitigation for Authorization Package"
                      >Calculate Phase Impacts and Mitigation for Authorization Package</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12</span></span
                      ><span class="bcn-atl__status" data-atl-status="">QA/QC</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y32F2DZX3TCXSF7HD073|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y32F2DZX3TCXSF7HD073%7Csouthern-forebay-pumping-plant"
                      title="Complete COA 10.25 Series Models and Report"
                      >Complete COA 10.25 Series Models and Report</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.25.1</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJX|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJX%7Csouthern-forebay-pumping-plant"
                      title="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
                      >Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12</span></span
                      ><span class="bcn-atl__status" data-atl-status="">QA/QC</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQK0|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQK0%7Csouthern-forebay-pumping-plant"
                      title="Notify CDFW of a Land Manager Change"
                      >Notify CDFW of a Land Manager Change</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.5</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Collecting Data</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3R8HSR7K069ZM5EZCXP|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3R8HSR7K069ZM5EZCXP%7Csouthern-forebay-pumping-plant"
                      title="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
                      >Notify the Designated Biologist of CBB, CTS or SWHA Take or
                      Injury</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.52</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTM|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RA6HTPQEBMJTM46QTM%7Csouthern-forebay-pumping-plant"
                      title="Report Bathymetric Survey Results to CDFW"
                      >Report Bathymetric Survey Results to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.23</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3R7PYV1TN3PG7JYE8R1|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3R7PYV1TN3PG7JYE8R1%7Csouthern-forebay-pumping-plant"
                      title="Report Covered Species Take or Injury to CDFW"
                      >Report Covered Species Take or Injury to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.16</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQJN|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQJN%7Csouthern-forebay-pumping-plant"
                      title="Report Invasive Aquatic Species Detections to CDFW"
                      >Report Invasive Aquatic Species Detections to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.36</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEQ|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NNJMTS3JZDQQZNRKEQ%7Csouthern-forebay-pumping-plant"
                      title="Submit Barge Operations Plan"
                      >Submit Barge Operations Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.36</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3NNJMTS3JZDQQZNRKET|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3NNJMTS3JZDQQZNRKET%7Csouthern-forebay-pumping-plant"
                      title="Submit Herbicide and Pesticide Application Plan"
                      >Submit Herbicide and Pesticide Application Plan</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.4</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Internal Review</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34ZRWNWJ42W3E737QZV|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34ZRWNWJ42W3E737QZV%7Csouthern-forebay-pumping-plant"
                      title="Submit Phase 2 Authorization Package to CDFW"
                      >Submit Phase 2 Authorization Package to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 7</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y34ZRWNWJ42W3E737QZT|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y34ZRWNWJ42W3E737QZT%7Csouthern-forebay-pumping-plant"
                      title="Submit Pre-implementation Phase Authorization Package to CDFW"
                      >Submit Pre-implementation Phase Authorization Package to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 6.1</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Not Started</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RC1N589S9ETAS5HQK1|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RC1N589S9ETAS5HQK1%7Csouthern-forebay-pumping-plant"
                      title="Submit Restoration Monitoring Reports to CDFW"
                      >Submit Restoration Monitoring Reports to CDFW</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.3.4</span></span
                      ><span class="bcn-atl__status" data-atl-status=""
                        >Drafting</span
                      ></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
                <div
                  class="bcn-atl__row"
                  data-atl-row=""
                  data-id="act_01M2G6Y3RA6HTPQEBMJTM46QTW|southern-forebay-pumping-plant"
                >
                  <div class="bcn-atl__label">
                    <a
                      class="bcn-atl__name"
                      data-atl-name=""
                      href="#act_01M2G6Y3RA6HTPQEBMJTM46QTW%7Csouthern-forebay-pumping-plant"
                      title="Submit Supplemental Phase 1 Operations Data Before Phase 2"
                      >Submit Supplemental Phase 1 Operations Data Before Phase 2</a
                    ><span class="bcn-atl__meta"
                      ><span class="bcn-atl__code" data-atl-code=""
                        ><span class="bcn-cbadge bcn-cbadge--sm">COA 7.1</span></span
                      ><span class="bcn-atl__status" data-atl-status="">QA/QC</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" hidden=""></span
                    ><span
                      class="bcn-atl__mark"
                      data-atl-mark=""
                      role="img"
                      hidden=""
                    ></span>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
    <div class="bcn-atl__empty" data-atl-empty="" hidden="">
      <div class="esa-empty-state esa-empty-state--sm">
        <h3 class="esa-empty-state__title typography-label-sm-strong">
          No actions match
        </h3>
        <p class="esa-empty-state__description typography-body-xs">
          Clear a filter to see more.
        </p>
        <div class="esa-empty-state__actions typography-label-md"></div>
      </div>
    </div>
  </div>
  <template data-atl-tpl="month"
    ><span class="bcn-atl__month" data-astro-cid-2ga7krdi=""
      ><span
        class="bcn-atl__month-name"
        data-atl-month-name=""
        data-astro-cid-2ga7krdi=""
      ></span></span></template
  ><template data-atl-tpl="rule"
    ><span class="bcn-atl__rule" data-astro-cid-2ga7krdi=""></span></template
  ><template data-atl-tpl="group"
    ><details class="bcn-atl__group" open="" data-astro-cid-2ga7krdi="">
      <summary class="bcn-atl__ghead" data-astro-cid-2ga7krdi="">
        <span class="bcn-atl__ghead-text" data-astro-cid-2ga7krdi=""
          ><span class="bcn-atl__chevron" aria-hidden="true" data-astro-cid-2ga7krdi=""
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
          ><span
            class="bcn-atl__swatch"
            data-atl-swatch=""
            aria-hidden="true"
            data-astro-cid-2ga7krdi=""
          ></span
          ><span
            class="bcn-atl__glabel"
            data-atl-glabel=""
            data-astro-cid-2ga7krdi=""
          ></span
          ><span
            class="bcn-atl__gcount"
            data-atl-gcount=""
            data-astro-cid-2ga7krdi=""
          ></span
        ></span>
      </summary>
      <div data-atl-rows="" data-astro-cid-2ga7krdi=""></div></details></template
  ><template data-atl-tpl="row"
    ><div class="bcn-atl__row" data-atl-row="" data-astro-cid-2ga7krdi="">
      <div class="bcn-atl__label" data-astro-cid-2ga7krdi="">
        <a class="bcn-atl__name" data-atl-name="" href="#" data-astro-cid-2ga7krdi=""></a
        ><span class="bcn-atl__meta" data-astro-cid-2ga7krdi=""
          ><span class="bcn-atl__code" data-atl-code="" data-astro-cid-2ga7krdi=""
            ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3=""
              >COA</span
            ></span
          ><span
            class="bcn-atl__status"
            data-atl-status=""
            data-astro-cid-2ga7krdi=""
          ></span
        ></span>
      </div>
      <div class="bcn-atl__track" data-astro-cid-2ga7krdi="">
        <span
          class="bcn-atl__lag"
          data-atl-lag=""
          hidden=""
          data-astro-cid-2ga7krdi=""
        ></span
        ><span
          class="bcn-atl__mark"
          data-atl-mark=""
          role="img"
          hidden=""
          data-astro-cid-2ga7krdi=""
        ></span>
      </div></div
  ></template>
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
.bcn-atl {
  --atl-day: 4px;
  --atl-label: 320px;
  --atl-row: 48px;
  --atl-head: 32px;
  --atl-mark-size: 10px;
  --atl-line: var(--color-border-default-subtle);
}
.bcn-atl[hidden],
.bcn-atl [hidden] {
  display: none;
}
.bcn-atl__module {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  font-size: 14px;
}
.bcn-atl__scroll {
  border-radius: var(--radius-100);
  max-height: max(26rem, 100vh - 14rem);
  overflow: auto;
}
.bcn-atl__scroll:focus-visible {
  outline: var(--focus-ring-width, 2px) solid
    var(--focus-ring-color, var(--color-border-default-focus));
  outline-offset: -2px;
}
.bcn-atl__canvas {
  width: calc(var(--atl-label) + var(--atl-days, 0) * var(--atl-day));
  position: relative;
}
.bcn-atl__head {
  z-index: 5;
  grid-template-columns: var(--atl-label) calc(var(--atl-days, 0) * var(--atl-day));
  height: var(--atl-head);
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  display: grid;
  position: sticky;
  top: 0;
}
.bcn-atl__corner {
  z-index: 6;
  padding: 0 var(--spacing-300);
  background: var(--color-background-default);
  border-right: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  align-items: center;
  display: flex;
  position: sticky;
  left: 0;
}
.bcn-atl__axis {
  position: relative;
}
.bcn-atl__month {
  top: 0;
  bottom: 0;
  left: calc(var(--x) * var(--atl-day));
  width: calc(var(--span) * var(--atl-day));
  border-left: 1px solid var(--color-border-default);
  align-items: center;
  display: flex;
  position: absolute;
}
.bcn-atl__month-name {
  padding: 0 var(--spacing-200);
  font-size: 13px;
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: var(--color-content-default-secondary);
}
.bcn-atl__today-flag {
  bottom: 0;
  left: calc(var(--atl-today, 0) * var(--atl-day));
  z-index: 1;
  padding: 0 var(--spacing-150);
  border-radius: var(--radius-100) var(--radius-100) 0 0;
  background: var(--color-background-utility-info);
  color: var(--color-content-default-knockout);
  font-size: 13px;
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  line-height: 1.5;
  position: absolute;
  transform: translate(-50%);
}
.bcn-atl__body {
  position: relative;
}
.bcn-atl__grid {
  inset: 0 0 0 var(--atl-label);
  pointer-events: none;
  position: absolute;
}
.bcn-atl__rule {
  top: 0;
  bottom: 0;
  left: calc(var(--x) * var(--atl-day));
  background: var(--atl-line);
  width: 1px;
  position: absolute;
}
.bcn-atl__today {
  top: 0;
  bottom: 0;
  left: calc(var(--atl-today, 0) * var(--atl-day) - 1px);
  z-index: 1;
  background: var(--color-background-utility-info);
  width: 2px;
  position: absolute;
}
.bcn-atl__ghead {
  z-index: 4;
  cursor: pointer;
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  align-items: center;
  height: 36px;
  list-style: none;
  display: flex;
  position: relative;
}
.bcn-atl__ghead::-webkit-details-marker {
  display: none;
}
.bcn-atl__group + .bcn-atl__group .bcn-atl__ghead {
  border-top: 1px solid var(--color-border-default);
}
.bcn-atl__ghead:focus-visible {
  outline: var(--focus-ring-width, 2px) solid
    var(--focus-ring-color, var(--color-border-default-focus));
  outline-offset: -2px;
}
.bcn-atl__ghead-text {
  align-items: center;
  gap: var(--spacing-200);
  padding: 0 var(--spacing-300);
  white-space: nowrap;
  display: inline-flex;
  position: sticky;
  left: 0;
}
.bcn-atl__chevron {
  color: var(--color-content-default-secondary);
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-atl__group[open] > .bcn-atl__ghead .bcn-atl__chevron {
  transform: rotate(90deg);
}
.bcn-atl__swatch {
  width: var(--atl-mark-size);
  height: var(--atl-mark-size);
  border-radius: var(--radius-full);
  background: var(--atl-tone);
}
.bcn-atl__glabel {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-atl__gcount {
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
}
.bcn-atl__row {
  grid-template-columns: var(--atl-label) calc(var(--atl-days, 0) * var(--atl-day));
  height: var(--atl-row);
  border-bottom: 1px solid var(--atl-line);
  cursor: pointer;
  display: grid;
  position: relative;
}
.bcn-atl__row:hover .bcn-atl__label,
.bcn-atl__row:hover .bcn-atl__track {
  background: color-mix(
    in srgb,
    var(--color-background-default-hover) 45%,
    var(--color-background-elevation-raised)
  );
}
.bcn-atl__label {
  z-index: 3;
  min-width: 0;
  padding: 0 var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  display: flex;
  position: sticky;
  left: 0;
}
.bcn-atl__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  text-decoration: none;
  overflow: hidden;
}
.bcn-atl__name:hover {
  text-decoration: underline;
}
.bcn-atl__name:focus-visible {
  outline: var(--focus-ring-width, 2px) solid
    var(--focus-ring-color, var(--color-border-default-focus));
  outline-offset: 1px;
}
.bcn-atl__meta {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  color: var(--color-content-default-secondary);
  font-size: 13px;
  display: flex;
}
.bcn-atl__code {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-atl__status {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-atl__track {
  position: relative;
}
.bcn-atl__mark {
  top: calc(50% - var(--atl-mark-size) / 2);
  left: calc(var(--x) * var(--atl-day) - var(--atl-mark-size) / 2 + var(--atl-day) / 2);
  z-index: 2;
  width: var(--atl-mark-size);
  height: var(--atl-mark-size);
  border-radius: var(--radius-full);
  background: var(--atl-tone);
  box-shadow: 0 0 0 2px var(--color-background-elevation-raised);
  position: absolute;
}
.bcn-atl__row:hover .bcn-atl__mark {
  transform: scale(1.3);
}
.bcn-atl__mark.is-clipped {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 2px var(--atl-tone);
}
.bcn-atl__lag {
  top: calc(50% - 1px);
  left: calc(var(--from) * var(--atl-day) + var(--atl-day) / 2);
  width: calc((var(--to) - var(--from)) * var(--atl-day));
  z-index: 1;
  background: color-mix(in srgb, var(--color-background-utility-danger) 40%, transparent);
  height: 2px;
  position: absolute;
}
.bcn-atl__empty {
  padding: var(--spacing-600) var(--spacing-400);
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
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
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
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
```

## Tokens
- `--atl-days`: 548 _(component)_
- `--atl-today`: 188 _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
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
- `--typography-font-weight-medium`: 500 _(semantic)_
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
