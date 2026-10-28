# Hole checklist drawer

Notifications & Daily Logs · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/field-documentation/

![Hole checklist drawer, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-field-documentation/claude/hole-checklist-drawer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-field-documentation/claude/hole-checklist-drawer.phone.png

One hole: location facts, every pre-drilling document in due-date order with its source system, received date and file, then the daily logs one drill day at a time.

## Key decisions

- Drill days with a missing log open by default; the rest are collapsed.
- The drawer is addressable: ?hole=<exploration id> opens it on load, and Back closes it.

## Done when

- Opening DCTR4-DH-004 shows its missing field coordinator logs as open drill days.

## Components

- `bcn-fd-checklist` (spoke) · `src/components/bcn/BcnFieldDocChecklist.astro`
- `bcn-fd-days` (spoke) · `src/components/bcn/BcnFieldDocChecklist.astro`
- `bcn-fd-mark` (spoke) · `src/components/bcn/BcnFieldDocMark.astro`
- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`

## Markup

_145 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-side-dialog
  id="fd-record"
  heading="Drill hole"
  style="--_width: 640px; --z-modal: 1300; --z-modal-backdrop: 1250"
  position="right"
  size="md"
  open=""
  ><div slot="header">
    <div data-fd-head="DCRDS-DH-292" hidden="">
      <div class="cluster" data-gap="sm">
        <h2 class="typography-title-strong">DCRDS-DH-292</h2>
        <span
          class="bcn-status-chip"
          data-status="fd-hole-missing"
          style="--_chip: var(--st-fd-hole-missing, #ce2c31)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">Missing documents</span></span
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
    </div>
    <div data-fd-head="DCRDS-DH-317" hidden="">
      <div class="cluster" data-gap="sm">
        <h2 class="typography-title-strong">DCRDS-DH-317</h2>
        <span
          class="bcn-status-chip"
          data-status="fd-hole-upcoming"
          style="--_chip: var(--st-fd-hole-upcoming, #bdbdbd)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">Upcoming</span></span
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
    </div>
    <!-- …and 64 more like this (<div>) -->
  </div>
  <div data-fd-body="DCRDS-DH-292" hidden="">
    <div class="stack bcn-fd-checklist" data-gap="lg">
      <div class="bcn-fd-checklist__facts">
        <div class="bcn-key-value" data-size="md" data-layout="stack">
          <span class="bcn-key-value__key">Agreement</span
          ><span class="bcn-key-value__val">Batch 4 (TEP)</span>
        </div>
        <div class="bcn-key-value" data-size="md" data-layout="stack">
          <span class="bcn-key-value__key">Property</span
          ><span class="bcn-key-value__val">WTR-8202-F</span>
        </div>
        <!-- …and 6 more like this (<div class="bcn-key-value">) -->
      </div>
      <section class="stack" data-gap="sm">
        <h3 class="bcn-fd-checklist__title">Pre-drilling documents</h3>
        <table class="bcn-fd-checklist__table">
          <thead>
            <tr>
              <th scope="col">Document</th>
              <th scope="col">Due</th>
              <!-- …and 2 more like this (<th>) -->
            </tr>
          </thead>
          <tbody>
            <tr data-status="received" data-fd-doc="tribal">
              <th scope="row">
                <span class="bcn-fd-checklist__doc">Tribal notification</span
                ><span class="bcn-fd-checklist__sub">Survey123 Notification Log</span
                ><a class="bcn-fd-checklist__file" href="#"
                  >Tribal-Notification_2026-Geotechnical-Campaign.pdf</a
                >
              </th>
              <td><span class="bcn-fd-checklist__date">May 2</span></td>
              <td><span class="bcn-fd-checklist__date">Apr 30</span></td>
              <td>
                <span
                  class="bcn-status-chip"
                  data-status="fd-received"
                  style="--_chip: var(--st-fd-received, #2e7571)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Received</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
              </td>
            </tr>
            <tr data-status="received" data-fd-doc="landowner14">
              <th scope="row">
                <span class="bcn-fd-checklist__doc">Landowner notification, 14-day</span
                ><span class="bcn-fd-checklist__sub">Survey123 Notification Log</span
                ><a class="bcn-fd-checklist__file" href="#"
                  >DCRDS-DH-292_Landowner-Notice-14-Day.pdf</a
                >
              </th>
              <td><span class="bcn-fd-checklist__date">May 20</span></td>
              <td><span class="bcn-fd-checklist__date">May 19</span></td>
              <td>
                <span
                  class="bcn-status-chip"
                  data-status="fd-received"
                  style="--_chip: var(--st-fd-received, #2e7571)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Received</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
              </td>
            </tr>
            <!-- …and 6 more like this (<tr>) -->
          </tbody>
        </table>
      </section>
      <section class="stack" data-gap="sm">
        <h3 class="bcn-fd-checklist__title">Daily logs</h3>
        <div class="bcn-fd-days">
          <div class="bcn-fd-days__head" aria-hidden="true">
            <span>Drill day</span><span>Biological</span
            ><!-- …and 2 more like this (<span>) -->
          </div>
          <details class="bcn-fd-days__day" data-fd-day="2026-06-17" open="">
            <summary class="bcn-fd-days__summary">
              <span class="bcn-fd-days__date"
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
                    <path d="m9 18 6-6-6-6"></path></svg></span
                >Jun 17</span
              ><span class="bcn-fd-days__mark"
                ><span
                  class="bcn-fd-mark bcn-fd-mark--sm"
                  data-status="received"
                  role="img"
                  aria-label="Daily biological monitoring log: Received"
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
                      <path d="M20 6 9 17l-5-5"></path></svg></span></span></span
              ><span class="bcn-fd-days__mark"
                ><span
                  class="bcn-fd-mark bcn-fd-mark--sm"
                  data-status="received"
                  role="img"
                  aria-label="Daily field coordinator log: Received"
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
                      <path d="M20 6 9 17l-5-5"></path></svg></span></span></span
              ><span class="bcn-fd-days__mark"
                ><span
                  class="bcn-fd-mark bcn-fd-mark--sm"
                  data-status="received"
                  role="img"
                  aria-label="Daily geologist log: Received"
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
                      <path d="M20 6 9 17l-5-5"></path></svg></span></span
              ></span>
            </summary>
            <table class="bcn-fd-checklist__table bcn-fd-days__records">
              <tbody>
                <tr data-status="received">
                  <th scope="row">
                    <span class="bcn-fd-checklist__doc">Daily biological monitoring log</span
                    ><span class="bcn-fd-checklist__sub">Fulcrum</span
                    ><a class="bcn-fd-checklist__file" href="#"
                      >DCRDS-DH-292_Daily-Bio-Monitoring_2026-06-17.pdf</a
                    >
                  </th>
                  <td><span class="bcn-fd-checklist__date">Jun 17</span></td>
                  <td>
                    <span
                      class="bcn-status-chip"
                      data-status="fd-received"
                      style="--_chip: var(--st-fd-received, #2e7571)"
                      ><span class="bcn-status-chip__dot"></span
                      ><span class="bcn-status-chip__label">Received</span></span
                    ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
                  </td>
                </tr>
                <tr data-status="received">
                  <th scope="row">
                    <span class="bcn-fd-checklist__doc">Daily field coordinator log</span
                    ><span class="bcn-fd-checklist__sub">Survey123 Daily Logs</span
                    ><a class="bcn-fd-checklist__file" href="#"
                      >DCRDS-DH-292_Field-Coordinator-Log_2026-06-17.pdf</a
                    >
                  </th>
                  <td><span class="bcn-fd-checklist__date">Jun 17</span></td>
                  <td>
                    <span
                      class="bcn-status-chip"
                      data-status="fd-received"
                      style="--_chip: var(--st-fd-received, #2e7571)"
                      ><span class="bcn-status-chip__dot"></span
                      ><span class="bcn-status-chip__label">Received</span></span
                    ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
                  </td>
                </tr>
                <tr data-status="received">
                  <th scope="row">
                    <span class="bcn-fd-checklist__doc">Daily geologist log</span
                    ><span class="bcn-fd-checklist__sub">Survey123 Daily Logs</span
                    ><a class="bcn-fd-checklist__file" href="#"
                      >DCRDS-DH-292_Geologist-Log_2026-06-17.pdf</a
                    >
                  </th>
                  <td><span class="bcn-fd-checklist__date">Jun 17</span></td>
                  <td>
                    <span
                      class="bcn-status-chip"
                      data-status="fd-received"
                      style="--_chip: var(--st-fd-received, #2e7571)"
                      ><span class="bcn-status-chip__dot"></span
                      ><span class="bcn-status-chip__label">Received</span></span
                    ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
                  </td>
                </tr>
              </tbody>
            </table>
          </details>
        </div>
      </section>
    </div>
  </div>
  <!-- …and 65 more like this (<div>) --></esa-side-dialog
>
```

## Styles

```css
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-fd-mark {
  border-radius: var(--radius-100);
  vertical-align: middle;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 24px;
  display: inline-flex;
}
.bcn-fd-mark--sm {
  width: 22px;
  height: 20px;
}
.bcn-fd-mark[data-status="received"] {
  background: color-mix(in srgb, var(--bcn-status-completed) 14%, transparent);
  color: var(--bcn-status-completed);
}
.bcn-fd-mark[data-status="late"] {
  background: color-mix(in srgb, var(--bcn-status-in-progress) 26%, transparent);
  color: color-mix(in srgb, var(--bcn-status-in-progress) 45%, var(--color-content-default));
}
.bcn-fd-mark[data-status="missing"] {
  background: var(--bcn-status-overdue);
  color: var(--color-content-on-utility-danger);
}
.bcn-fd-mark[data-status="upcoming"] {
  box-shadow: inset 0 0 0 1px var(--bcn-status-not-started);
  color: var(--color-content-default-tertiary);
}
.bcn-fd-checklist {
  --st-fd-received: var(--bcn-status-completed);
  --st-fd-late: var(--bcn-status-in-progress);
  --st-fd-missing: var(--bcn-status-overdue);
  --st-fd-upcoming: var(--bcn-gray-500);
  font-size: 14px;
}
.bcn-fd-checklist__facts {
  gap: var(--spacing-400) var(--spacing-500);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}
.bcn-fd-checklist__title {
  font-size: 15px;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-fd-checklist__table {
  border-collapse: collapse;
  font-variant-numeric: tabular-nums;
  width: 100%;
}
.bcn-fd-checklist__table th,
.bcn-fd-checklist__table td {
  text-align: left;
  vertical-align: top;
  padding: var(--spacing-200) var(--spacing-300) var(--spacing-200) 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-fd-checklist__table thead th {
  font-size: 13px;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-tertiary);
  border-bottom-color: var(--color-border-default);
}
.bcn-fd-checklist__table tbody th {
  font-weight: var(--typography-font-weight-regular);
}
.bcn-fd-checklist__table td {
  width: 5.5rem;
}
.bcn-fd-checklist__table td:last-child {
  width: 8rem;
  padding-right: 0;
}
.bcn-fd-checklist__table tr[data-status="missing"] > {
  background: color-mix(in srgb, var(--bcn-status-overdue) 6%, transparent);
}
.bcn-fd-checklist__doc,
.bcn-fd-checklist__date,
.bcn-fd-checklist__file,
.bcn-fd-checklist__sub {
  display: block;
}
.bcn-fd-checklist__doc {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-fd-checklist__sub {
  color: var(--color-content-default-tertiary);
  font-size: 13px;
}
.bcn-fd-checklist__date {
  white-space: nowrap;
}
.bcn-fd-checklist__file {
  color: var(--color-content-default-secondary);
  overflow-wrap: anywhere;
  margin-top: 2px;
  font-size: 13px;
}
.bcn-fd-checklist__none {
  color: var(--color-content-default-tertiary);
}
.bcn-fd-days__head,
.bcn-fd-days__summary {
  align-items: center;
  column-gap: var(--spacing-300);
  grid-template-columns: 1fr repeat(3, 7.5rem);
  display: grid;
}
.bcn-fd-days__head {
  font-size: 13px;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-tertiary);
  padding-bottom: var(--spacing-200);
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-fd-days__head span:not(:first-child) {
  text-align: center;
}
.bcn-fd-days__day {
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-fd-days__summary {
  cursor: pointer;
  padding: var(--spacing-200) 0;
  list-style: none;
}
.bcn-fd-days__summary::-webkit-details-marker {
  display: none;
}
.bcn-fd-days__date {
  align-items: center;
  gap: var(--spacing-100);
  font-weight: var(--typography-font-weight-semibold);
  display: inline-flex;
}
.bcn-fd-days__date svg {
  color: var(--color-content-default-tertiary);
  transition: transform 0.12s;
}
.bcn-fd-days__day[open] .bcn-fd-days__date svg {
  transform: rotate(90deg);
}
.bcn-fd-days__mark {
  justify-self: center;
  display: inline-flex;
}
.bcn-fd-checklist__table tr[data-fd-target] >,
.bcn-fd-days__day[data-fd-target] {
  background: color-mix(in srgb, var(--color-background-utility-info) 9%, transparent);
}
.bcn-fd-days__records {
  margin: 0 0 var(--spacing-200) var(--spacing-500);
  width: calc(100% - var(--spacing-500));
}
.bcn-fd-days__records tr:last-child > {
  border-bottom: 0;
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
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
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-status-completed` | `#2e7571` | component |
| `--bcn-status-in-progress` | `#f59e0b` | component |
| `--bcn-status-not-started` | `#bdbdbd` | component |
| `--bcn-status-overdue` | `#ce2c31` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-utility-danger` | `#fcfcfc` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--form-label-color` | `#525252` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-title-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-title-strong-font-size` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | semantic |
| `--typography-title-strong-font-weight` | `550` | semantic |
| `--typography-title-strong-letter-spacing` | `.01em` | semantic |
| `--typography-title-strong-line-height` | `1.6` | semantic |
