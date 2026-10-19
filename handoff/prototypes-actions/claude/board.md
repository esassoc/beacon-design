# Board

The Kanban. All actions is the merged board: one column per backbone category (Not Started, In Progress, Completed). A workflow tab shows that workflow's own columns (Plans: Not Started, Drafting, Internal Review, Submitted to Agency, Agency Comments, Approved) and only the types it covers.

## Key decisions
- One card per action implementation. Prod's action card with nested "#1 Not Started" implementation rows is gone (Andy, 2026-10-06).
- Columns are equal and full height to the viewport floor, each scrolling its own cards, so an empty column is as big a drop target as a full one.
- Columns are a lighter grey than the sunken surface with an edge a step darker than the fill.
- Drag is pointer-based: lift past 4px, the card follows the pointer, the column under it lights up, release commits, Escape flies it home. A drop changes the column only; order inside a column is the sort.
- On the merged board a drop lands in the first column of that category in the card's own workflow.

## Gotchas
- A drop must write both the workflow column and its backbone status, so rollups and the API keep one meaning of done.
- Keyboard users move a card from the dialog's Status field; the drag has no keyboard path.

## Done when
- Dragging a Plan card from Drafting to Approved marks it Completed everywhere.
- Each column header shows its count, and the counts follow filters and drops.

## Markup
```html
<section
  class="bcn-aboard"
  data-aboard=""
  data-type-label='{"AvoidanceAndBMPs":"Avoidance &amp; BMPs","Reporting":"Reporting","Monitoring":"Monitoring","ApprovalAndConsultation":"Approval &amp; Consultation","Plan":"Plan","Analysis":"Analysis","Survey":"Survey","RestorationAndMitigation":"Restoration &amp; Mitigation","Financial":"Financial","Other":"Other","TrainingAndEducation":"Training &amp; Education","Design":"Design"}'
>
  <div class="bcn-aboard__cols" data-aboard-cols="" style="--_cols: 3; --_top: 434px">
    <div class="bcn-aboard__col" data-aboard-col="" data-col-id="cat-NotStarted">
      <header class="bcn-aboard__head">
        <span
          class="bcn-aboard__dot"
          data-aboard-dot=""
          style="background: var(--bcn-status-not-started)"
        ></span
        ><span class="bcn-aboard__name typography-label-md-strong" data-aboard-name=""
          >Not Started</span
        ><span class="bcn-aboard__count typography-body-sm" data-aboard-count="">26</span>
      </header>
      <div class="bcn-aboard__list" data-aboard-list="">
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJY|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.10</span></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Credit Bill of Sale and Payment Receipt to CDFW"
          >
            Submit Credit Bill of Sale and Payment Receipt to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction · #1
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Overdue · due Sep 12, 2026"
              data-urgency="overdue"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Sep 12</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RA6HTPQEBMJTM46QTT|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Aquatic Conditions Assessments with the Phase 2 Package"
          >
            Submit Aquatic Conditions Assessments with the Phase 2 Package
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">Reporting · Operations</div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Overdue · due Sep 26, 2026"
              data-urgency="overdue"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Sep 26</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RA6HTPQEBMJTM46QTP|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.84</span></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Preconstruction TRBL Survey Results to CDFW"
          >
            Submit Preconstruction TRBL Survey Results to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Overdue · due Oct 1, 2026"
              data-urgency="overdue"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Oct 1</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3R7PYV1TN3PG7JYE8R0|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.15.1</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Deliver Mitigation Status Report Before ITP Expiration"
          >
            Deliver Mitigation Status Report Before ITP Expiration
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">Reporting · Operations</div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Nov 17, 2026"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Nov 17</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Priya Patel"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 65"
                    ><span class="esa-avatar__initials">PP</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34YSP53SW383CFT2CZM|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.2</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Obtain CDFW Approval of the HM Lands Conservation Easement"
          >
            Obtain CDFW Approval of the HM Lands Conservation Easement
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Implementation Planning +3
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jan 6, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jan 6, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="3 comments"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">3</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3R2ZP7KE7EZHM396ZJY|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.1</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Notify CDFW 14 Days Before Starting Covered Activities"
          >
            Notify CDFW 14 Days Before Starting Covered Activities
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +2
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jan 29, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jan 29, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJS|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.86</span
              ><span data-acard-more="" title="COA 11.88"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+1</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Notify CDFW of TRBL Colony or Roost Disturbance"
          >
            Notify CDFW of TRBL Colony or Roost Disturbance
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Construction +1 · #4
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jan 31, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jan 31, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="3 comments"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">3</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="James Okafor"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 8"
                    ><span class="esa-avatar__initials">JO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJT|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.93</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Notify CDFW of TRBL Nest or Colony Abandonment or Distress"
          >
            Notify CDFW of TRBL Nest or Colony Abandonment or Distress
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Construction +1 · #2
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Feb 6, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Feb 6, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="1 comment"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">1</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Hannah Brooks"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 64"
                    ><span class="esa-avatar__initials">HB</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NJADVCJBHXD7RXW12B|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.18</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Covered Fish Species Monitoring and Science Plan"
          >
            Submit Covered Fish Species Monitoring and Science Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning +1
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Feb 12, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Feb 12, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34V8WHD9WZSVEXW30W8|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.42</span
              ><span data-acard-more="" title="COA 11.105"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+1</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Preconstruction Survey Results for CDFW Approval"
          >
            Submit Preconstruction Survey Results for CDFW Approval
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Pre-Construction
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Mar 23, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Mar 23, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RA6HTPQEBMJTM46QTQ|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.17</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Subsurface Vibration Study Results to CDFW"
          >
            Submit Subsurface Vibration Study Results to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jun 10, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jun 10, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Priya Patel"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 65"
                    ><span class="esa-avatar__initials">PP</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NNJMTS3JZDQQZNRKER|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.37</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Dewatering Plan"
          >
            Submit Dewatering Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jul 13, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jul 13, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NMGVH2VJSMJC7KKSH7|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.26</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Erosion and Sediment Control Plan"
          >
            Submit Erosion and Sediment Control Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning +1
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Aug 27, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Aug 27, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34YSP53SW383CFT2CZH|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12</span
              ><span
                data-acard-more=""
                title="COA 12.6.1, COA 12.6.2, COA 12.6.4, COA 12.7.1, COA 12.7.2, COA 12.8.1, COA 12.8.2"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+7</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Obtain CDFW Approval of Mitigation Habitat Restoration Projects"
          >
            Obtain CDFW Approval of Mitigation Habitat Restoration Projects
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Implementation Planning +3
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Sep 3, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Sep 3, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQK3|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 7.1</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Share Phase 1 Operations Data with CDFW"
          >
            Share Phase 1 Operations Data with CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">Reporting · Operations</div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Sep 30, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Sep 30, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3R8HSR7K069ZM5EZCXW|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.67.1</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Report GGS Relocations to CDFW"
          >
            Report GGS Relocations to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +2 · #1
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Oct 12, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Oct 12, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="3 comments"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">3</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34ZRWNWJ42W3E737QZY|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.2</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Annual Biologist Reapproval List to CDFW"
          >
            Submit Annual Biologist Reapproval List to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Pre-Construction +3 · #2
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jan 30, 2028"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jan 30, 2028</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RA6HTPQEBMJTM46QTN|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.8</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Preconstruction Habitat Survey Results in the Phase Package"
          >
            Submit Preconstruction Habitat Survey Results in the Phase Package
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Feb 7, 2028"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Feb 7, 2028</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y32F2DZX3TCXSF7HD073|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.25.1</span
              ><span data-acard-more="" title="COA 10.25.2, COA 10.25.3, COA 10.25.4"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+3</span
                ></span
              ></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Complete COA 10.25 Series Models and Report"
          >
            Complete COA 10.25 Series Models and Report
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Analysis · Implementation Planning
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3R8HSR7K069ZM5EZCXP|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.52</span
              ><span data-acard-more="" title="COA 11.81, COA 11.103"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+2</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury"
          >
            Notify the Designated Biologist of CBB, CTS or SWHA Take or Injury
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +3 · #3
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RA6HTPQEBMJTM46QTM|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.23</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Report Bathymetric Survey Results to CDFW"
          >
            Report Bathymetric Survey Results to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +2 · #2
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3R7PYV1TN3PG7JYE8R1|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.16</span
              ><span
                data-acard-more=""
                title="COA 11.2, COA 11.52.4, COA 11.68, COA 11.68.2, COA 11.68.4, COA 11.93"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+6</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Report Covered Species Take or Injury to CDFW"
          >
            Report Covered Species Take or Injury to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +4 · #1
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJN|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.36</span></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Report Invasive Aquatic Species Detections to CDFW"
          >
            Report Invasive Aquatic Species Detections to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +1 · #4
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="3 comments"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">3</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEQ|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.36</span></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Barge Operations Plan"
          >
            Submit Barge Operations Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34ZRWNWJ42W3E737QZV|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 7</span
              ><span data-acard-more="" title="COA 7.1"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+1</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Phase 2 Authorization Package to CDFW"
          >
            Submit Phase 2 Authorization Package to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Operations +1
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="1 comment"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">1</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34ZRWNWJ42W3E737QZT|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 6.1</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Pre-implementation Phase Authorization Package to CDFW"
          >
            Submit Pre-implementation Phase Authorization Package to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Implementation Planning +1
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
      </div>
    </div>
    <div class="bcn-aboard__col" data-aboard-col="" data-col-id="cat-InProgress">
      <header class="bcn-aboard__head">
        <span
          class="bcn-aboard__dot"
          data-aboard-dot=""
          style="background: var(--bcn-status-in-progress)"
        ></span
        ><span class="bcn-aboard__name typography-label-md-strong" data-aboard-name=""
          >In Progress</span
        ><span class="bcn-aboard__count typography-body-sm" data-aboard-count="">19</span>
      </header>
      <div class="bcn-aboard__list" data-aboard-list="">
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3R2ZP7KE7EZHM396ZJZ|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.9</span
              ><span data-acard-more="" title="COA 10.12"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+1</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Monthly Compliance Report to CDFW"
          >
            Submit Monthly Compliance Report to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +3 · #4
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Collecting Data</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Nov 13, 2026"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Nov 13</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="James Okafor"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 8"
                    ><span class="esa-avatar__initials">JO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3R99JZNVA7RWDTVTCW6|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.33</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Report Hydroacoustic Threshold Exceedances to CDFW"
          >
            Report Hydroacoustic Threshold Exceedances to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Construction · #4
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Drafting</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Nov 24, 2026"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Nov 24</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="James Okafor"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 8"
                    ><span class="esa-avatar__initials">JO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y32F2DZX3TCXSF7HD075|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.110</span></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Complete Joint Operations Optimization Study"
          >
            Complete Joint Operations Optimization Study
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">Analysis · Operations</div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Collecting Data</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Dec 28, 2026"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Dec 28</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="6 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">6</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJZ|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.4</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Provide Title and Environmental Documentation for HM Lands"
          >
            Provide Title and Environmental Documentation for HM Lands
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Implementation Planning +3 · #3
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">QA/QC</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jan 24, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jan 24, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="4 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">4</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RA6HTPQEBMJTM46QTR|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.24</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Disclose Detected Wells in the Construction Phase Package"
          >
            Disclose Detected Wells in the Construction Phase Package
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Implementation Planning +1 · #4
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">QA/QC</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Mar 15, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Mar 15, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="3 comments"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">3</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34ZRWNWJ42W3E737QZZ|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 9.2</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Biologist Resume Forms to CDFW Before Each Phase"
          >
            Submit Biologist Resume Forms to CDFW Before Each Phase
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Pre-Construction +3
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Submitted</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jul 7, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jul 7, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="5 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">5</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NJADVCJBHXD7RXW12D|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.19.2</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Develop Predation Study Plan"
          >
            Develop Predation Study Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Drafting</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jul 14, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jul 14, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="1 evidence item"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">1</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJR|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.77</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Notify CDFW of Nest Survey Results Before Vegetation Removal"
          >
            Notify CDFW of Nest Survey Results Before Vegetation Removal
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +2 · #3
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Collecting Data</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Aug 5, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Aug 5, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Maria Chen"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y32F2DZX3TCXSF7HD078|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.12.2</span
              ><span
                data-acard-more=""
                title="COA 12.12.2.1, COA 12.12.2.2, COA 12.12.2.2.1, COA 12.12.2.2.2, COA 12.12.2.2.3"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+5</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Prepare Endowment Assessment for CDFW Approval"
          >
            Prepare Endowment Assessment for CDFW Approval
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Analysis · Operations +1 · #2
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Drafting</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Sep 18, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Sep 18, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="1 comment"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">1</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Priya Patel"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 65"
                    ><span class="esa-avatar__initials">PP</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34YSP53SW383CFT2CZK|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.10</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Obtain CDFW Approval of the Mitigation or Conservation Bank"
          >
            Obtain CDFW Approval of the Mitigation or Conservation Bank
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Implementation Planning +1 · #4
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Under Agency Review</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Nov 19, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Nov 19, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Dana Whitfield"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJP|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.53</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Report Barred Tiger Salamander or Hybrid Detections to CDFW"
          >
            Report Barred Tiger Salamander or Hybrid Detections to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Pre-Construction +1 · #2
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">QA/QC</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Dec 5, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Dec 5, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="6 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">6</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Priya Patel"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 65"
                    ><span class="esa-avatar__initials">PP</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34YSP53SW383CFT2CZD|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.7</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Obtain CDFW Approval of Nighttime Covered Activities"
          >
            Obtain CDFW Approval of Nighttime Covered Activities
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Implementation Planning +1 · #1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Under Agency Review</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Dec 23, 2027"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Dec 23, 2027</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="6 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">6</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="3 comments"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">3</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Priya Patel"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 65"
                    ><span class="esa-avatar__initials">PP</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34YSP53SW383CFT2CZG|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.76</span
              ><span data-acard-more="" title="COA 11.79"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+1</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Obtain CDFW Approval to Remove or Trim a Known Nest Tree"
          >
            Obtain CDFW Approval to Remove or Trim a Known Nest Tree
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Pre-Construction +2 · #2
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Preparing Request</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              title="Due Jan 17, 2028"
              data-urgency="upcoming"
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Jan 17, 2028</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Maria Chen"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y32F2DZX3TCXSF7HD077|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Calculate Phase Impacts and Mitigation for Authorization Package"
          >
            Calculate Phase Impacts and Mitigation for Authorization Package
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Analysis · Implementation Planning +1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">QA/QC</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Maria Chen"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQJX|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall"
          >
            Notify CDFW and Provide a Plan for a Stay-Ahead Shortfall
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Construction +1 · #4
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">QA/QC</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="James Okafor"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 8"
                    ><span class="esa-avatar__initials">JO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQK0|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.11.5</span></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Notify CDFW of a Land Manager Change"
          >
            Notify CDFW of a Land Manager Change
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Construction +2 · #4
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Collecting Data</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="0 evidence items"
                data-zero=""
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">0</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="James Okafor"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 8"
                    ><span class="esa-avatar__initials">JO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NNJMTS3JZDQQZNRKET|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.4</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Herbicide and Pesticide Application Plan"
          >
            Submit Herbicide and Pesticide Application Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Pre-Construction +4 · #3
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Internal Review</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="1 comment"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">1</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RC1N589S9ETAS5HQK1|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.3.4</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Restoration Monitoring Reports to CDFW"
          >
            Submit Restoration Monitoring Reports to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Reporting · Post-Construction +1 · #1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Drafting</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="4 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">4</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="1 comment"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">1</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3RA6HTPQEBMJTM46QTW|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 7.1</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Supplemental Phase 1 Operations Data Before Phase 2"
          >
            Submit Supplemental Phase 1 Operations Data Before Phase 2
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">Reporting · Operations</div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-in-progress)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">QA/QC</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span
              class="bcn-acard__due"
              data-acard-field="due"
              data-acard-due=""
              data-empty=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">No due date</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="5 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">5</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
      </div>
    </div>
    <div class="bcn-aboard__col" data-aboard-col="" data-col-id="cat-Completed">
      <header class="bcn-aboard__head">
        <span
          class="bcn-aboard__dot"
          data-aboard-dot=""
          style="background: var(--bcn-status-completed)"
        ></span
        ><span class="bcn-aboard__name typography-label-md-strong" data-aboard-name=""
          >Completed</span
        ><span class="bcn-aboard__count typography-body-sm" data-aboard-count="">10</span>
      </header>
      <div class="bcn-aboard__list" data-aboard-list="">
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34ZRWNWJ42W3E737QZS|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 6</span
              ><span data-acard-more="" title="COA 6.2"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+1</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Construction Phase Authorization Package to CDFW"
          >
            Submit Construction Phase Authorization Package to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Pre-Construction +2
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Approved</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Apr 1</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="5 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">5</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="James Okafor"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 8"
                    ><span class="esa-avatar__initials">JO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKN4|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.25</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Prepare Stormwater Pollution Prevention Plan"
          >
            Prepare Stormwater Pollution Prevention Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning +1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Approved</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Apr 30</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="6 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">6</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Hannah Brooks"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 64"
                    ><span class="esa-avatar__initials">HB</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEM|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.33</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Underwater Sound Abatement Plan"
          >
            Submit Underwater Sound Abatement Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning +2
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Approved</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed May 16</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="5 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">5</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Priya Patel"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 65"
                    ><span class="esa-avatar__initials">PP</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y34ZRWNWJ42W3E737QZR|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 4</span></span
            ><span class="bcn-acard__flag" data-acard-flag="" title="Flagged"
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
                  <path
                    d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
                  ></path>
                  <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
            ></span>
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Consult CDFW on Federal Biological Opinions"
          >
            Consult CDFW on Federal Biological Opinions
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Approval &amp; Consultation · Implementation Planning +3 · #1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Approved</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed May 24</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Priya Patel"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 65"
                    ><span class="esa-avatar__initials">PP</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NK6K0BZ6XYWCKNWKN3|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.24</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Underground Well Detection Plan"
          >
            Submit Underground Well Detection Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning +1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Approved</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Jun 2</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Luis Ortega"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y32F2DZX3TCXSF7HD074|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 10.26</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Fish Guidance System Recommendation Report to CDFW"
          >
            Submit Fish Guidance System Recommendation Report to CDFW
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Analysis · Implementation Planning
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Submitted</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Jul 10</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="2 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">2</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Maria Chen"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3ENYWE6AXT12YDFDJKZ|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.68</span
              ><span data-acard-more="" title="COA 11.68.2, COA 11.93"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+2</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Pay Care and Treatment Costs for Injured Covered Species"
          >
            Pay Care and Treatment Costs for Injured Covered Species
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Financial · Pre-Construction +4 · #1
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Jul 5</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="5 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">5</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="Maria Chen"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y32F2DZX3TCXSF7HD079|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.6.5</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Develop CDFW-Approved Spring LFS Operational Scenario"
          >
            Develop CDFW-Approved Spring LFS Operational Scenario
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Analysis · Implementation Planning
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Submitted</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Aug 9</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="6 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">6</span></span
              ><span
                class="bcn-acard__count"
                data-acard-field="comments"
                data-acard-comments=""
                title="1 comment"
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
                    <path
                      d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    ></path></svg></span
                ><span data-acard-n="">1</span></span
              ><span
                class="bcn-acard__who"
                data-acard-field="assignee"
                data-acard-assignee=""
                ><span class="bcn-acard__avatar" title="James Okafor"
                  ><span
                    class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
                    style="--_avatar-hue: 8"
                    ><span class="esa-avatar__initials">JO</span></span
                  ></span
                ></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y3NNJMTS3JZDQQZNRKEN|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 11.34</span></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Submit Pile Driving Plan"
          >
            Submit Pile Driving Plan
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Plan · Implementation Planning +1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Approved</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Aug 18</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="5 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">5</span></span
              ></span
            >
          </div>
        </article>
        <article
          class="bcn-acard"
          data-acard=""
          data-impl-id="act_01M2G6Y32F2DZX3TCXSF7HD07B|southern-forebay-pumping-plant"
        >
          <div class="bcn-acard__top" data-acard-field="codes">
            <span class="bcn-acard__codes" data-acard-codes=""
              ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.9</span
              ><span data-acard-more="" title="COA 12.9.1, COA 12.9.3"
                ><span class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
                  >+2</span
                ></span
              ></span
            >
          </div>
          <button
            type="button"
            class="bcn-acard__name"
            data-acard-open=""
            title="Prepare Phase Security Cost Estimate for HM Lands"
          >
            Prepare Phase Security Cost Estimate for HM Lands
          </button>
          <div class="bcn-acard__meta" data-acard-meta="">
            Analysis · Implementation Planning +1 · #1
          </div>
          <div data-acard-status="">
            <span
              class="bcn-status-chip"
              data-status="custom"
              style="--_chip: var(--bcn-status-completed)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Submitted</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
          </div>
          <div class="bcn-acard__foot">
            <span class="bcn-acard__due" data-acard-field="due" data-acard-due=""
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
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path></svg></span
              ><span data-acard-due-text="">Completed Sep 8</span></span
            ><span class="bcn-acard__counts"
              ><span
                class="bcn-acard__count"
                data-acard-field="evidence"
                data-acard-evidence=""
                title="5 evidence items"
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
                    <path
                      d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                    ></path></svg></span
                ><span data-acard-n="">5</span></span
              ></span
            >
          </div>
        </article>
      </div>
    </div>
  </div>
  <template data-aboard-col-tpl=""
    ><div class="bcn-aboard__col" data-aboard-col="" data-astro-cid-62bixnss="">
      <header class="bcn-aboard__head" data-astro-cid-62bixnss="">
        <span class="bcn-aboard__dot" data-aboard-dot="" data-astro-cid-62bixnss=""></span
        ><span
          class="bcn-aboard__name typography-label-md-strong"
          data-aboard-name=""
          data-astro-cid-62bixnss=""
        ></span
        ><span
          class="bcn-aboard__count typography-body-sm"
          data-aboard-count=""
          data-astro-cid-62bixnss=""
        ></span>
      </header>
      <div
        class="bcn-aboard__list"
        data-aboard-list=""
        data-astro-cid-62bixnss=""
      ></div></div></template
  ><template data-acard-tpl=""
    ><article class="bcn-acard" data-acard="" data-astro-cid-eeovrw5v="">
      <div class="bcn-acard__top" data-acard-field="codes" data-astro-cid-eeovrw5v="">
        <span class="bcn-acard__codes" data-acard-codes="" data-astro-cid-eeovrw5v=""
          ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3=""></span
          ><span data-acard-more="" data-astro-cid-eeovrw5v=""
            ><span
              class="bcn-cbadge bcn-cbadge--sm bcn-cbadge--neutral"
              data-astro-cid-cqxc3yz3=""
            ></span></span></span
        ><span
          class="bcn-acard__flag"
          data-acard-flag=""
          title="Flagged"
          data-astro-cid-eeovrw5v=""
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
              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
              <line x1="4" x2="4" y1="22" y2="15"></line></svg></span
        ></span>
      </div>
      <button
        type="button"
        class="bcn-acard__name"
        data-acard-open=""
        data-astro-cid-eeovrw5v=""
      ></button>
      <div class="bcn-acard__meta" data-acard-meta="" data-astro-cid-eeovrw5v=""></div>
      <div data-acard-status="" hidden="" data-astro-cid-eeovrw5v="">
        <span
          class="bcn-status-chip"
          data-status="custom"
          style="--_chip: var(--st-custom, #9ca3af)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label"></span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
      </div>
      <div class="bcn-acard__foot" data-astro-cid-eeovrw5v="">
        <span
          class="bcn-acard__due"
          data-acard-field="due"
          data-acard-due=""
          data-astro-cid-eeovrw5v=""
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
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path></svg></span
          ><span data-acard-due-text="" data-astro-cid-eeovrw5v=""></span></span
        ><span class="bcn-acard__counts" data-astro-cid-eeovrw5v=""
          ><span
            class="bcn-acard__count"
            data-acard-field="evidence"
            data-acard-evidence=""
            data-astro-cid-eeovrw5v=""
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
                <path
                  d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
                ></path></svg></span
            ><span data-acard-n="" data-astro-cid-eeovrw5v=""></span></span
          ><span
            class="bcn-acard__count"
            data-acard-field="comments"
            data-acard-comments=""
            data-astro-cid-eeovrw5v=""
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
                <path
                  d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                ></path></svg></span
            ><span data-acard-n="" data-astro-cid-eeovrw5v=""></span></span
          ><span
            class="bcn-acard__who"
            data-acard-field="assignee"
            data-acard-assignee=""
            data-astro-cid-eeovrw5v=""
          ></span
        ></span>
      </div></article></template
  ><template data-acard-avatar="Maria Chen"
    ><span class="bcn-acard__avatar" title="Maria Chen" data-astro-cid-eeovrw5v=""
      ><span
        class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
        style="--_avatar-hue: 56"
        data-astro-cid-cgicqi4o=""
        ><span class="esa-avatar__initials" data-astro-cid-cgicqi4o="">MC</span></span
      ></span
    ></template
  ><template data-acard-avatar="James Okafor"
    ><span class="bcn-acard__avatar" title="James Okafor" data-astro-cid-eeovrw5v=""
      ><span
        class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
        style="--_avatar-hue: 8"
        data-astro-cid-cgicqi4o=""
        ><span class="esa-avatar__initials" data-astro-cid-cgicqi4o="">JO</span></span
      ></span
    ></template
  ><template data-acard-avatar="Priya Patel"
    ><span class="bcn-acard__avatar" title="Priya Patel" data-astro-cid-eeovrw5v=""
      ><span
        class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
        style="--_avatar-hue: 65"
        data-astro-cid-cgicqi4o=""
        ><span class="esa-avatar__initials" data-astro-cid-cgicqi4o="">PP</span></span
      ></span
    ></template
  ><template data-acard-avatar="Dana Whitfield"
    ><span class="bcn-acard__avatar" title="Dana Whitfield" data-astro-cid-eeovrw5v=""
      ><span
        class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
        style="--_avatar-hue: 266"
        data-astro-cid-cgicqi4o=""
        ><span class="esa-avatar__initials" data-astro-cid-cgicqi4o="">DW</span></span
      ></span
    ></template
  ><template data-acard-avatar="Luis Ortega"
    ><span class="bcn-acard__avatar" title="Luis Ortega" data-astro-cid-eeovrw5v=""
      ><span
        class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
        style="--_avatar-hue: 91"
        data-astro-cid-cgicqi4o=""
        ><span class="esa-avatar__initials" data-astro-cid-cgicqi4o="">LO</span></span
      ></span
    ></template
  ><template data-acard-avatar="Hannah Brooks"
    ><span class="bcn-acard__avatar" title="Hannah Brooks" data-astro-cid-eeovrw5v=""
      ><span
        class="esa-avatar esa-avatar--xs esa-avatar--circle typography-label-2xs-strong"
        style="--_avatar-hue: 64"
        data-astro-cid-cgicqi4o=""
        ><span class="esa-avatar__initials" data-astro-cid-cgicqi4o="">HB</span></span
      ></span
    ></template
  >
</section>
```

## Styles
```css
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
.help,
.error {
  margin: 0;
}
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-acard {
  --_ink-meta: var(--color-content-default-secondary);
  font-optical-sizing: auto;
  gap: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-250);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  cursor: grab;
  touch-action: none;
  user-select: none;
  flex-direction: column;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
  display: flex;
  position: relative;
}
.bcn-acard:hover {
  border-color: var(--color-border-default-strong, var(--color-border-default));
  box-shadow: var(--elevation-1, 0 1px 2px #0000000f);
}
.bcn-acard[data-na] {
  background: var(--color-background-elevation-sunken);
}
.bcn-acard[data-na] .bcn-acard__name {
  color: var(--color-content-default-secondary);
}
.bcn-acard__top {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  min-block-size: 20px;
  display: flex;
}
.bcn-acard__codes {
  gap: var(--spacing-100);
  min-inline-size: 0;
  display: inline-flex;
  overflow: hidden;
}
.bcn-acard__flag {
  color: var(--color-content-utility-danger, var(--color-content-default-secondary));
  display: inline-flex;
}
.bcn-acard__name {
  all: unset;
  font-family: var(--typography-font-family-sans);
  letter-spacing: -0.005em;
  color: var(--color-content-default);
  -webkit-line-clamp: 2;
  cursor: inherit;
  -webkit-box-orient: vertical;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-acard__name:after {
  content: "";
  border-radius: inherit;
  position: absolute;
  inset: 0;
}
.bcn-acard__name:focus-visible:after {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-acard__meta {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--_ink-meta);
  line-height: 1.35;
}
.bcn-acard__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  border-block-start: 1px solid var(--color-border-default);
  min-block-size: 28px;
  padding-block-start: var(--spacing-200);
  display: flex;
}
.bcn-acard__due,
.bcn-acard__count {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--_ink-meta);
  white-space: nowrap;
  font-size: 0.8125rem;
  line-height: 1.3;
  display: inline-flex;
}
.bcn-acard__due {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-acard__count {
  font-weight: var(--typography-font-weight-medium);
  font-variant-numeric: tabular-nums;
}
.bcn-acard__due[data-urgency="overdue"] {
  color: var(--color-content-utility-danger);
  font-weight: var(--typography-font-weight-bold);
}
.bcn-acard__due[data-urgency="due-soon"] {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-bold);
}
.bcn-acard__due[data-empty] {
  color: var(--color-content-default-tertiary);
}
.bcn-acard__counts {
  align-items: center;
  gap: var(--spacing-250);
  margin-inline-start: auto;
  display: inline-flex;
}
.bcn-acard__count[data-zero] {
  color: var(--color-content-default-tertiary);
}
.bcn-acard__who,
.bcn-acard__avatar {
  display: inline-flex;
}
.bcn-acard[data-lifted] {
  z-index: 60;
  pointer-events: none;
  box-shadow: var(--elevation-4, 0 12px 28px #0000002e);
  transform-origin: 50%;
  cursor: grabbing;
  position: fixed;
  rotate: 1.5deg;
}
.bcn-aboard {
  min-inline-size: 0;
}
.bcn-aboard[hidden] {
  display: none;
}
.bcn-aboard__cols {
  gap: var(--spacing-300);
  block-size: max(420px, calc(100dvh - var(--_top, 400px) - var(--spacing-500)));
  grid-auto-columns: minmax(272px, 1fr);
  grid-auto-flow: column;
  align-items: stretch;
  padding-block-end: var(--spacing-200);
  display: grid;
  overflow-x: auto;
}
.bcn-aboard__col {
  --_col-bg: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 55%,
    var(--color-background-default)
  );
  background: var(--_col-bg);
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-border-default) 60%,
      var(--color-border-default-subtle)
    );
  border-radius: var(--radius-300, var(--radius-200));
  flex-direction: column;
  min-block-size: 0;
  min-inline-size: 0;
  transition:
    background-color 0.12s,
    border-color 0.12s;
  display: flex;
}
.bcn-aboard__col[data-drop] {
  background: color-mix(in srgb, var(--color-background-brand) 8%, var(--_col-bg));
  border-color: var(--color-background-brand);
}
.bcn-aboard__head {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-200);
  display: flex;
}
.bcn-aboard__dot {
  border-radius: 50%;
  flex-shrink: 0;
  block-size: 8px;
  inline-size: 8px;
}
.bcn-aboard__name {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-aboard__count {
  color: var(--color-content-default-secondary);
  margin-inline-start: auto;
}
.bcn-aboard__list {
  gap: var(--spacing-200);
  padding: 0 var(--spacing-200) var(--spacing-200);
  flex-direction: column;
  flex: 1;
  min-block-size: 0;
  display: flex;
  overflow-y: auto;
}
.bcn-aboard__hole {
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-200);
  background: 0 0;
}
.bcn-at .bcn-status-chip {
  font-size: 0.875rem;
  line-height: 1.4;
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
.bcn-disc__node .esa-avatar {
  --_avatar-bg: var(--_node-color, var(--color-background-brand-muted));
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
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
.esa-avatar {
  --_avatar-size: var(--avatar-size-md, 40px);
  --_avatar-font-size: var(
    --avatar-font-size-md,
    var(--typography-label-md-strong-font-size, var(--font-size-200, 0.9375rem))
  );
  --_avatar-radius: var(--radius-pill, 9999px);
  --_avatar-bg: var(--avatar-bg, hsl(var(--_avatar-hue, 200) 45% 65%));
  --_avatar-text: var(--color-content-default-knockout, #fcfcfc);
  width: var(--_avatar-size);
  height: var(--_avatar-size);
  border-radius: var(--_avatar-radius);
  background: var(--_avatar-bg);
  color: var(--_avatar-text);
  font-size: var(--_avatar-font-size);
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  overflow: hidden;
}
.esa-avatar--xs {
  --_avatar-size: var(--avatar-size-xs, 20px);
  --_avatar-font-size: var(
    --avatar-font-size-xs,
    var(--typography-label-2xs-strong-font-size, var(--font-size-050, 0.625rem))
  );
}
.esa-avatar--sm {
  --_avatar-size: var(--avatar-size-sm, 28px);
  --_avatar-font-size: var(
    --avatar-font-size-sm,
    var(--typography-label-xs-strong-font-size, var(--font-size-100, 0.75rem))
  );
}
.esa-avatar--lg {
  --_avatar-size: var(--avatar-size-lg, 56px);
  --_avatar-font-size: var(
    --avatar-font-size-lg,
    var(--typography-title-font-size, var(--font-size-400, 1.25rem))
  );
}
.esa-avatar--square {
  --_avatar-radius: var(--radius-md, 0.5rem);
}
.esa-avatar__image {
  object-fit: cover;
  width: 100%;
  height: 100%;
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
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
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
- `--avatar-bg`: hsl(200 45% 65%) _(component)_
- `--avatar-font-size-lg`: clamp(1rem, .88rem + .6vw, 1.25rem) _(component)_
- `--avatar-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--avatar-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--avatar-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--avatar-size-lg`: 56px _(component)_
- `--avatar-size-md`: 40px _(component)_
- `--avatar-size-sm`: 28px _(component)_
- `--avatar-size-xs`: 20px _(component)_
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
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--elevation-1`: 0 1px 4px 0 #00000008 _(semantic)_
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-bold`: 650 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-label-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-2xs-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
