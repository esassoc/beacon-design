# Timeline

Actions · source prototype: https://esassoc.github.io/beacon-design/prototypes/actions/

![Timeline, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/timeline.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/timeline.phone.png

Due dates on a month axis, grouped by status, for the same filtered set.

## Done when

- Undated implementations are listed in a No due date group, not dropped.

## Components

- `bcn-atl` (spoke) · `src/components/bcn/BcnActionTimeline.astro`
- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Data

- Fixture: `src/data/action-tracking.ts`
- Client store: `src/lib/action-board.ts`
- category is prod's ActionImplementationStatusDtoEnum.

| Field | Meaning |
|---|---|
| `id` | ActionImplementationID, `<actionId>|<componentId>` |
| `name` | Action name |
| `type` | RequirementType; the Type tabs group these into workflows |
| `codes` | ClientCommitmentIDs, in code order (the card's commitment badges) |
| `sequence` | SequenceNumber, the occurrence for recurring and as-needed work |
| `dueDate` | ISO, or null when unscheduled (prod "Not set") |
| `completedDate` | ISO, Completed only |
| `columnId` | The workflow column the card sits in |
| `category` | The status backbone the column maps to |
| `notApplicable` | IsNotApplicable; the N/A switch hides these |
| `evidence` | Evidence count on the card |
| `comments` | Comment count; hidden at zero |

`category`: `NotStarted` · `InProgress` · `Completed`

`frequency`: `Onetime` · `Recurring` · `AsNeeded` · `Ongoing`

## Markup

_62 repeated elements are collapsed in the markup below; the comments say where._

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
              ><span class="bcn-atl__month-name" data-atl-month-name="">Apr 2026</span></span
            ><span class="bcn-atl__month" style="--x: 30; --span: 31"
              ><span class="bcn-atl__month-name" data-atl-month-name="">May</span></span
            ><!-- …and 16 more like this (<span class="bcn-atl__month">) --><span
              class="bcn-atl__today-flag"
              data-atl-today-flag=""
              >Today</span
            >
          </div>
        </div>
        <div class="bcn-atl__body" data-atl-body="">
          <div class="bcn-atl__grid" data-atl-grid="" aria-hidden="true">
            <span class="bcn-atl__today"></span><span class="bcn-atl__rule" style="--x: 30"></span
            ><span class="bcn-atl__rule" style="--x: 61"></span
            ><!-- …and 15 more like this (<span class="bcn-atl__rule">) -->
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
                      ><span class="bcn-atl__status" data-atl-status="">Not Started</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" style="--from: 164; --to: 188"></span
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
                      ><span class="bcn-atl__status" data-atl-status="">Not Started</span></span
                    >
                  </div>
                  <div class="bcn-atl__track">
                    <span class="bcn-atl__lag" data-atl-lag="" style="--from: 178; --to: 188"></span
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
                <!-- …and 16 more like this (<div class="bcn-atl__row">) -->
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
                      ><span class="bcn-atl__status" data-atl-status="">Collecting Data</span></span
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
                      ><span class="bcn-atl__status" data-atl-status="">Drafting</span></span
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
                <!-- …and 11 more like this (<div class="bcn-atl__row">) -->
              </div>
            </details>
            <!-- …and 2 more like this (<details class="bcn-atl__group">) -->
          </div>
        </div>
      </div>
    </div>
    <div class="bcn-atl__empty" data-atl-empty="" hidden="">
      <div class="esa-empty-state esa-empty-state--sm">
        <h3 class="esa-empty-state__title typography-label-sm-strong">No actions match</h3>
        <p class="esa-empty-state__description typography-body-xs">Clear a filter to see more.</p>
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
  ><!-- …and 2 more like this (<template>) -->
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
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
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
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
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
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--atl-day` | `4px` | component |
| `--atl-days` | `548` | component |
| `--atl-head` | `32px` | component |
| `--atl-label` | `320px` | component |
| `--atl-line` | `#efefef` | component |
| `--atl-mark-size` | `10px` | component |
| `--atl-row` | `48px` | component |
| `--atl-today` | `188` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-default-hover` | `#e8e8e8` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--typography-body-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-body-xs-font-weight` | `400` | semantic |
| `--typography-body-xs-letter-spacing` | `.01em` | semantic |
| `--typography-body-xs-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
