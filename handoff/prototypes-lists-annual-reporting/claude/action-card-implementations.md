# Action card + implementations

Action list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/annual-reporting/

One action: type chip, title (opens the action panel), implementation count. Children are its IMPLEMENTATIONS, one per component: status pill, component name, comment count, evidence count.

## Key decisions

- Actions DO get status pills; obligations do not. Evidence is shown on both.
- An implementation row fires list:edit-implementation (its upsert dialog, not built here).
- Requirement codes ride on the card as data-codes / data-index so the mirrors can file it; requirements are not rendered as rows.

## Done when

- Card badge = number of implementation rows; each row has one status.

## Components

- `bcn-loc` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

```html
<li
  class="bcn-loc"
  data-list-card=""
  data-member-id="act_01M2G6Y3ENYWE6AXT12YDFDJM1"
  data-id="act_01M2G6Y3ENYWE6AXT12YDFDJM1"
  data-class="action"
  data-codes="COA 12.12|COA 12.12.3"
  data-index="Mitigation and restoration::Mitigation lands|Mitigation and restoration::Conservation endowment"
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
      ><span class="bcn-loc__class" data-list-class-tag="">Financial</span
      ><button
        type="button"
        class="bcn-loc__title"
        data-list-open=""
        data-list-title=""
        data-list-text="Fund Annual Endowment Deposit Amount Installment"
      >
        Fund Annual Endowment Deposit Amount Installment</button
      ><span data-list-count="member"
        ><span class="bcn-swcb" aria-label="3 implementations">3</span></span
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
    <ul class="bcn-loc__reqs bcn-loc__impls" data-list-impls="action">
      <li
        class="bcn-loc__req bcn-loc__impl"
        data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM1|twin-cities-complex"
        data-status="in-progress"
        data-evidence="6"
      >
        <span
          class="bcn-status-chip"
          data-status="in-progress"
          style="--_chip: var(--st-in-progress, var(--bcn-status-in-progress))"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">In Progress</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
          type="button"
          class="bcn-loc__req-name"
          data-list-text="Twin Cities Complex"
        >
          Twin Cities Complex</button
        ><span class="bcn-loc__comments" hidden="">0 comments</span
        ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
      </li>
      <li
        class="bcn-loc__req bcn-loc__impl"
        data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM1|bouldin-island-geotechnical-exploration"
        data-status="in-progress"
        data-evidence="6"
      >
        <span
          class="bcn-status-chip"
          data-status="in-progress"
          style="--_chip: var(--st-in-progress, var(--bcn-status-in-progress))"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">In Progress</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
          type="button"
          class="bcn-loc__req-name"
          data-list-text="Bouldin Island Geotechnical Exploration"
        >
          Bouldin Island Geotechnical Exploration</button
        ><span class="bcn-loc__comments" hidden="">0 comments</span
        ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
      </li>
      <li
        class="bcn-loc__req bcn-loc__impl"
        data-list-impl="act_01M2G6Y3ENYWE6AXT12YDFDJM1|byron-tract-forebay"
        data-status="completed"
        data-evidence="6"
      >
        <span
          class="bcn-status-chip"
          data-status="completed"
          style="--_chip: var(--st-completed, var(--bcn-status-completed))"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">Completed</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><button
          type="button"
          class="bcn-loc__req-name"
          data-list-text="Byron Tract Forebay"
        >
          Byron Tract Forebay</button
        ><span class="bcn-loc__comments" hidden="">0 comments</span
        ><span class="bcn-loc__evidence" data-list-evidence="">6 evidence</span>
      </li>
    </ul>
  </details>
</li>
```

## Styles

```css
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
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
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class,
.bcn-ci-chip {
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
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
