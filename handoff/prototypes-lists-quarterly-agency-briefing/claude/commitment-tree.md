# Commitment tree

Commitment list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/quarterly-agency-briefing/

![Commitment tree, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/commitment-tree.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/commitment-tree.phone.png

One flat list of commitments in code order. Each card keeps its REQUIREMENT rows — commitments have no implementations.

## Key decisions

- Card title links to the commitment page (data-list-goto); requirement rows open the requirement panel.
- Remove from list is a non-danger confirm.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-lmc` (spoke) · `src/components/bcn/BcnListMemberCard.astro`
- `bcn-lmt` (spoke) · `src/components/bcn/BcnListMemberTree.astro`
- `bcn-loc` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-lot` (spoke) · `src/components/bcn/BcnListAddIndexItems.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-confirm-dialog` (hub) · `packages/ecology/src/components/esa-confirm-dialog.ts`
- `esa-empty-state` (hub) · `packages/ecology/src/components/esa-empty-state.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

_16 repeated elements are collapsed in the markup below; the comments say where._

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
      <h3 class="esa-empty-state__title typography-label-sm-strong">No commitments on this list</h3>
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
            ><span data-list-code=""><span class="bcn-cbadge bcn-cbadge--sm">COA 7.5</span></span
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
            ><span data-list-code=""><span class="bcn-cbadge bcn-cbadge--sm">COA 10.3</span></span
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
            <!-- …and 2 more like this (<li class="bcn-loc__req">) -->
          </ul>
        </details>
      </li>
      <!-- …and 10 more like this (<li class="bcn-loc">) -->
    </ul>
  </div>
  <div class="bcn-lot__body" data-list-mirror-body=""></div>
  <template data-list-tpl="section"
    ><details class="bcn-lot__cat" data-list-group="" data-astro-cid-jcfghirm="">
      <summary class="bcn-lot__row bcn-lot__row--cat" data-astro-cid-jcfghirm="">
        <span class="bcn-lot__chevron" aria-hidden="true" data-astro-cid-jcfghirm=""
          ><span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">COA</span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-jcfghirm=""></span
        ><span data-list-count="group" data-astro-cid-jcfghirm=""
          ><span class="bcn-swcb" data-astro-cid-jcfghirm="true" data-astro-cid-pmjgmd6u=""
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
          ><span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
              data-astro-cid-wcwfib5m=""
            >
              <path d="m9 18 6-6-6-6"></path></svg></span></span
        ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">COA</span
        ><span class="bcn-lot__name" data-list-name="" data-astro-cid-jcfghirm=""></span
        ><span data-list-count="group" data-astro-cid-jcfghirm=""
          ><span class="bcn-swcb" data-astro-cid-jcfghirm="true" data-astro-cid-pmjgmd6u=""
            >0</span
          ></span
        >
      </summary>
      <ul
        class="bcn-lot__cards"
        data-list-cards=""
        data-astro-cid-jcfghirm=""
      ></ul></details></template
  ><!-- …and 4 more like this (<template>) --><esa-confirm-dialog
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
.bcn-lmc__title {
  cursor: inherit;
}
.bcn-lmc__title:hover {
  text-decoration: none;
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
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
.bcn-lit:not([data-index-editable])
  esa-tooltip:has([data-list-remove], [data-list-duplicate], .bcn-loc__verb[data-list-edit]) {
  display: none;
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
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"],
.bcn-ci-chip[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"],
.bcn-ci-chip[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"],
.bcn-ci-chip[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-ci-chip[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"],
.bcn-lob[data-class="action"],
.bcn-ci-chip[data-class="action"] {
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
.bcn-loc__reqs,
.bcn-ciitem__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150) calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req,
.bcn-ciitem__req {
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
.bcn-loc__req-name,
.bcn-ciitem__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
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
.bcn-swot__cards,
.bcn-lot__cards {
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-300) calc(var(--spacing-400) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lot[data-list-view="index"] [data-list-cats],
.bcn-lot[data-list-view="commitment"] [data-list-cats],
.bcn-lot[data-list-view="az"] [data-list-cats],
.bcn-lot:not([data-list-view="index"]):not([data-list-view="commitment"]):not([data-list-view="az"])
  [data-list-mirror-body] {
  display: none;
}
.bcn-lot [data-list-flat] > .bcn-lot__cards {
  padding: var(--spacing-300) var(--spacing-400);
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--empty-state-icon-size-md` | `48px` | component |
| `--empty-state-icon-size-sm` | `32px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-050` | `.125rem` | primitive |
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
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
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
