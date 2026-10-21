# Recommendations: two-column review

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

The last step: every commitment with no decision yet lands in one of two columns, Not Applicable or Will Apply, and the person moves rows between them before the one Save.

## Key decisions

- TWO COLUMNS, ONE SAVE. Save dismisses the Not Applicable column and applies the Will Apply column, creating their actions (Andy, 2026-10-20: "Apply on save"). The label says both numbers, e.g. "Dismiss 26 and Apply 11". There is no third "leave undecided" place; the drawer still allows Undo afterwards.
- THE SAVE CONFIRMS FIRST with what it will do on the component: commitments dismissed and applied, actions created, and field records unlinked from the dismissed commitments (fixture: "Dismisses 26 commitments and applies 11 on this component. Creates 11 actions. Unlinks 3 field records from this component."). When rows were moved by hand, the confirm adds an optional note for them.
- ONLY UNDECIDED COMMITMENTS ARE IN THE COLUMNS. Decisions already made, by hand or by an earlier setup, are listed apart under a collapsed "Already Decided (N)", and the save does not touch them.
- A move arrow on every row. A row moved against setup's placement shows "Moved by Hand"; moving it back clears that. It saves as Moved by Hand with the person, the date and the optional note from the confirm.
- Not Applicable lists the recommendations first, then ONE COLLAPSED GROUP PER UNSELECTED SOURCE DOCUMENT ("Construction MMRP (7)"), so the recommendations stay easy to scan. Rows inside a group move like any other.
- Will Apply rows show what speaks for them, then the actions they create ("Ground Disturbance, Drilling and Boring · Creates 1 action").
- Below the columns, when setup is re-run: Back to Needs a Decision (setup dismissals whose reason no longer holds), then Already Decided.

## Gotchas

- No transfer-list lego exists in the hub or in prod; logged in docs/system-improvement-ledger.md. Do not take the bcn- markup as a pattern to copy into Angular without checking for one first.

## Done when

- The column counts, the save label and the rail summary agree; moving a row updates all three; after Save the drawer reads 0 need a decision, 14 applied, 28 dismissed (42) in the fixture.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-cs` (spoke) · `src/components/bcn/BcnComponentSetup.astro`
- `bcn-cs-opt` (spoke) · `src/components/bcn/BcnComponentSetup.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_93 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-cs__transfer" data-cs-transfer="">
  <div class="bcn-cs__col" data-cs-col="na">
    <header class="bcn-cs__panehead">
      <h3 class="bcn-cs__h">Not Applicable</h3>
      <span class="bcn-cs__count" data-cs-count="na"></span>
    </header>
    <ul class="bcn-cs__options">
      <li class="bcn-cs-opt" data-cs-row="na:cc-001" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Worker environmental awareness training"
              >Worker environmental awareness training</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-001" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span class="bcn-cs-opt__meta" data-cs-reason="na:cc-001"></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-1"
            title="Move to Will Apply: GT-BIO-1"
            data-cs-move="cc-001"
            data-cs-to="apply"
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-002" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nesting bird preconstruction survey"
              >Nesting bird preconstruction survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-002" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span class="bcn-cs-opt__meta" data-cs-reason="na:cc-002"></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-2"
            title="Move to Will Apply: GT-BIO-2"
            data-cs-move="cc-002"
            data-cs-to="apply"
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt bcn-cs-opt--none" data-cs-col-none="na" hidden="">
        <span class="bcn-cs-opt__meta">None</span>
      </li>
      <!-- …and 40 more like this (<li class="bcn-cs-opt">) -->
    </ul>
    <div class="bcn-cs__srcgroups" data-cs-srcgroups="" hidden="">
      <div data-cs-srcgrp="c-mmrp" data-cs-srcname="Construction MMRP" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">Construction MMRP</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-026" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nesting bird preconstruction survey"
                      >Nesting bird preconstruction survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-026" hidden=""></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="src:cc-026"></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: BIO-03"
                    title="Move to Will Apply: BIO-03"
                    data-cs-move="cc-026"
                    data-cs-to="apply"
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-027" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Worker cultural resources awareness training"
                      >Worker cultural resources awareness training</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-027" hidden=""></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="src:cc-027"></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: CUL-02"
                    title="Move to Will Apply: CUL-02"
                    data-cs-move="cc-027"
                    data-cs-to="apply"
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <!-- …and 5 more like this (<li class="bcn-cs-opt">) -->
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="c-itp" data-cs-srcname="ITP" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">ITP</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-033" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Giant Garter Snake active-season restriction"
                      >Giant Garter Snake active-season restriction</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-033" hidden=""></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="src:cc-033"></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-6.2"
                    title="Move to Will Apply: ITP-6.2"
                    data-cs-move="cc-033"
                    data-cs-to="apply"
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-034" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Swainson’s hawk foraging habitat mitigation"
                      >Swainson’s hawk foraging habitat mitigation</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-034" hidden=""></span
                    ><span class="bcn-cs-opt__meta" data-cs-reason="src:cc-034"></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-7.1"
                    title="Move to Will Apply: ITP-7.1"
                    data-cs-move="cc-034"
                    data-cs-to="apply"
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
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <!-- …and 2 more like this (<li class="bcn-cs-opt">) -->
            </ul>
          </div>
        </details>
      </div>
      <!-- …and 6 more like this (<div>) -->
    </div>
  </div>
  <div class="bcn-cs__col" data-cs-col="apply">
    <header class="bcn-cs__panehead">
      <h3 class="bcn-cs__h">Will Apply</h3>
      <span class="bcn-cs__count" data-cs-count="apply"></span>
    </header>
    <ul class="bcn-cs__options">
      <li class="bcn-cs-opt" data-cs-row="apply:cc-001" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Worker environmental awareness training"
              >Worker environmental awareness training</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-001" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span class="bcn-cs-opt__meta" data-cs-reason="apply:cc-001"></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-1"
            title="Move to Not Applicable: GT-BIO-1"
            data-cs-move="cc-001"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-002" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nesting bird preconstruction survey"
              >Nesting bird preconstruction survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-002" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span class="bcn-cs-opt__meta" data-cs-reason="apply:cc-002"></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-2"
            title="Move to Not Applicable: GT-BIO-2"
            data-cs-move="cc-002"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt bcn-cs-opt--none" data-cs-col-none="apply" hidden="">
        <span class="bcn-cs-opt__meta">None</span>
      </li>
      <!-- …and 40 more like this (<li class="bcn-cs-opt">) -->
    </ul>
  </div>
</div>
```

## Styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: var(--_aldo-gap);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-aldo-panel__side .bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: 0 var(--spacing-200);
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn .esa-button__native {
  --focus-ring-color: #fff;
  border-radius: var(--radius-full);
  color: #ffffffb8;
  block-size: 22px;
  min-block-size: 0;
  inline-size: 22px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-admin-btn .esa-button__native:hover,
.bcn-admin-btn .esa-button__native:focus-visible {
  color: #fff;
  background: #ffffff24;
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-tl__pop .bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
  display: inline-block;
}
.bcn-mod__action-name .bcn-cbadge {
  margin-right: var(--spacing-150);
}
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
}
.bcn-sw__head .esa-icon {
  color: var(--color-content-default-secondary);
}
.bcn-sw__head .esa-badge {
  color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-medium);
  background: 0 0;
}
.bcn-sw-row__state--applied .esa-badge {
  --badge-bg: transparent;
  --badge-text-color: var(--color-background-brand);
  border: 1px solid var(--color-border-brand, var(--color-border-default));
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-row__state--dismissed .esa-badge {
  --badge-bg: transparent;
  --badge-text-color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-prev__acttype .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-cs__panehead {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-cs__h {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-cs__count {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  margin-left: auto;
  font-size: 0.8125rem;
}
.bcn-cs__transfer {
  gap: var(--spacing-400);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  display: grid;
}
.bcn-cs__col {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-cs-opt__body.bcn-cs-opt__body--stack {
  align-items: stretch;
  gap: var(--spacing-050);
  flex-direction: column;
}
.bcn-cs-opt__body--stack .bcn-cs-opt__titleline {
  max-width: none;
}
.bcn-cs-opt__metaline {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 0;
  display: flex;
}
.bcn-cs-opt__metaline .bcn-cs-opt__meta {
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  overflow: hidden;
}
.bcn-cs__srcgroups {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-cs__srcgroups[hidden],
[data-cs-srcgrp][hidden],
.bcn-cs__options[hidden] {
  display: none;
}
.bcn-cs__srcgroups .esa-collapsible__summary {
  padding: var(--spacing-200) var(--spacing-300);
}
.bcn-cs__srcgroups .esa-collapsible__body {
  border-top: 1px solid var(--color-border-default-subtle);
  padding: 0;
}
.bcn-cs__options--bare {
  background: 0 0;
  border: 0;
  border-radius: 0;
}
.bcn-cs__transfer + .bcn-cs__group,
.bcn-cs__group + .bcn-cs__group {
  padding-top: var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cs__options {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  overflow: hidden;
}
.bcn-cs-opt {
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-150) var(--spacing-300);
  display: flex;
}
.bcn-cs-opt + .bcn-cs-opt {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cs__options--grid .bcn-cs-opt {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
}
.bcn-cs-opt[hidden] {
  display: none;
}
.bcn-cs-opt__body {
  align-items: baseline;
  gap: var(--spacing-300);
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-cs-opt__body > {
  min-width: 0;
}
.bcn-cs-opt__titleline {
  align-items: center;
  gap: var(--spacing-200);
  flex: none;
  min-width: 0;
  max-width: 60%;
  display: flex;
}
.bcn-cs-opt__name {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  white-space: nowrap;
  flex: none;
}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__name {
  text-overflow: ellipsis;
  flex: 0 auto;
  min-width: 0;
  overflow: hidden;
}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__meta {
  flex: none;
}
.bcn-cs-opt__name--clip {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 auto;
  min-width: 0;
  overflow: hidden;
}
.bcn-cs-opt__meta {
  color: var(--color-content-default-secondary);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8125rem;
  overflow: hidden;
}
.bcn-cs-opt__meta:empty {
  display: none;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
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
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
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
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-brand` | `#b9d6d2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#203c25` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
| `--typography-microcopy-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-strong-line-height` | `1` | semantic |
