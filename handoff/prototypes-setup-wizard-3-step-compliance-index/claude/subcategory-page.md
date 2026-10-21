# Subcategory page

Step 3: Compliance Index · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/compliance-index/

One bar pinned across the top of the pane, as the PDF's page tools are on step 1: where it sits, Category › Subcategory as plain text (a header, not links), each with its color dot in the category's hue (as in the index and the scrubber), each cut to fit with the full name in its title; then Merge (off until two or more are ticked, then Merge (N)), Discard all and Approve all (N). In a pane under 720px, Merge and Discard all fold to their icons. No title in the document voice. Before drafting: the lists as develop renders them before a run fills them, Actions (0) and Obligations (0) each reading None, Approve all and Discard all disabled. Drafted: two lists, Actions then Obligations, then Discarded (N), folded, with Restore and Restore all. Each draft is one line: a box to tick for Merge, its kind chip, its title cut to the row, and its commitments as purple commitment badges. More than one commitment stacks left to right, the ones under it peeking out; pressing the stack opens a popover to its left listing every commitment with its title, each opening it. The title opens the draft's edit form in the side panel. Approve all (N) asks first; Discard all does not.

## Key decisions

- Review is by home subcategory only. Also filed in shows on the obligation, read only.
- A draft action with no scope cannot be approved: "This draft has no scope. Set one before approving it."
- Actions and obligations are the structure. Audience is a field on the obligation, not a grouping; sorting, filtering or grouping by it can come later as options.
- Merge takes two or more drafts of one kind; when it cannot, its title says why. Obligations read by different people, or of different classes, merge: the dialog asks which Audience and Class the merged draft keeps (prod refuses different audiences). The merged draft keeps every source.
- The header is esa-breadcrumbs with no links; its icon slot holds the dot, and the controller writes the names and the hue at run time.
- Rationale is never stored or shown, as in prod.
- Kind chips: an action is its requirement type (Plan, Reporting, Approval & Consultation…) tinted from the action hue; an obligation is develop's class chip (Adhere, Monitor, Notify, Roster) tinted from the class hue. Each list's kind column is as wide as its widest chip.

## Done when

- Ticking two Compliance staff drafts in Take and injury reporting and merging them leaves 20 drafts where there were 21.

## Components

- `bcn-sw3ip` (spoke) · `src/components/bcn/BcnSw3IndexPage.astro`
- `esa-breadcrumbs` (hub) · `packages/ecology/src/components/esa-breadcrumbs.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<article class="bcn-sw3ip" data-sw3-index-page="" aria-label="Subcategory">
  <div class="bcn-sw3ip__tools" role="toolbar" aria-label="Subcategory tools">
    <div class="bcn-sw3ip__crumbs" data-ip-crumbs="">
      <nav class="esa-breadcrumbs esa-breadcrumbs--sm" aria-label="Breadcrumb">
        <ol class="esa-breadcrumbs__list">
          <li class="esa-breadcrumbs__item">
            <span class="esa-breadcrumbs__current typography-label-sm"
              ><span class="esa-breadcrumbs__icon"
                ><span class="bcn-sw3ip__dot" data-ip-dot=""></span></span
              >Category</span
            ><svg
              class="esa-breadcrumbs__separator"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </li>
          <li class="esa-breadcrumbs__item" aria-current="page">
            <span class="esa-breadcrumbs__current typography-label-sm"
              ><span class="esa-breadcrumbs__icon"
                ><span class="bcn-sw3ip__dot" data-ip-dot=""></span></span
              >Subcategory</span
            >
          </li>
        </ol>
      </nav>
    </div>
    <div class="bcn-sw3ip__toolkeys" data-ip-acts="">
      <span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          title="Merge the ticked drafts"
          data-ip-merge="true"
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
              <path d="m8 6 4-4 4 4"></path>
              <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
              <path d="m20 22-5-5"></path></svg></span
          ><span class="esa-button__label">Merge</span>
        </button></span
      ><span class="bcn-sw3ip__rule" aria-hidden="true"></span
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          title="Discard all"
          data-ip-discard-all="true"
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path></svg></span
          ><span class="esa-button__label">Discard all</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ip-approve-all="true"
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path></svg></span
          ><span class="esa-button__label">Approve all</span>
        </button></span
      >
    </div>
  </div>
  <div class="bcn-sw3ip__review" data-ip-review="">
    <div class="bcn-sw3ip__groups" data-ip-groups=""></div>
    <p class="bcn-sw3ip__empty" data-ip-empty="" hidden=""></p>
    <details class="bcn-sw3ip__discarded" data-ip-discarded="">
      <summary class="bcn-sw3ip__gh"><span data-ip-discarded-label="">Discarded</span></summary>
      <div class="bcn-sw3ip__discarded-acts" data-ip-restore-all-wrap="">
        <span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            data-ip-restore-all="true"
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
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path></svg></span
            ><span class="esa-button__label">Restore all</span>
          </button></span
        >
      </div>
      <ol class="bcn-sw3ip__entries" data-ip-discarded-list=""></ol>
    </details>
  </div>
  <template data-ip-tpl="group"
    ><section class="bcn-sw3ip__group" data-astro-cid-volza5tu="">
      <h3 class="bcn-sw3ip__gh" data-g-name="" data-astro-cid-volza5tu=""></h3>
      <ol
        class="bcn-sw3ip__entries"
        data-g-entries=""
        data-astro-cid-volza5tu=""
      ></ol></section></template
  ><template data-ip-tpl="entry"
    ><li class="bcn-sw3ip__entry" data-status="draft" data-astro-cid-volza5tu="">
      <div class="bcn-sw3ip__line" data-astro-cid-volza5tu="">
        <span class="bcn-sw3ip__tick" data-e-tick="" data-astro-cid-volza5tu=""
          ><esa-checkbox
            size="sm"
            aria-label="Select for merge"
            data-astro-cid-volza5tu="true"
          ></esa-checkbox></span
        ><span class="bcn-sw3ip__chip" data-e-chip="" data-astro-cid-volza5tu=""></span
        ><a class="bcn-sw3ip__name" href="#" data-e-open="" data-astro-cid-volza5tu=""></a
        ><span class="bcn-sw3ip__cites" data-e-cites="" data-astro-cid-volza5tu=""></span
        ><span class="bcn-sw3ip__ok" data-e-ok="" data-astro-cid-volza5tu=""
          ><span
            class="esa-icon esa-icon--sm"
            role="img"
            aria-label="Approved"
            data-astro-cid-wcwfib5m=""
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
              <circle cx="12" cy="12" r="10"></circle>
              <path d="m9 12 2 2 4-4"></path></svg></span
        ></span>
      </div></li></template
  ><template data-ip-tpl="badge"
    ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3=""></span></template
  ><span hidden="" data-ip-merge-glyph=""
    ><path d="m8 6 4-4 4 4"
      ><path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"><path d="m20 22-5-5"></path></path></path
  ></span>
</article>
```

## Styles

```css
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
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
@container (width<=640px) {
  .bcn-sw3c__group [data-c-tool] .esa-button__label {
    display: none;
  }
}
@container (width<=540px) {
  .bcn-sw3c__group [data-c-pages] .esa-button__label,
  .bcn-sw3c__rule {
    display: none;
  }
}
.bcn-console__more .esa-button__native {
  font-family: var(--_mono);
  height: auto;
  min-height: 0;
  padding: 0 1ch;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
}
.bcn-console__more .esa-button__native:hover {
  color: var(--bcn-console-fg);
}
.esa-breadcrumbs {
  --_crumb-link-color: var(--breadcrumbs-link-color, #646464);
  --_crumb-link-hover: var(--breadcrumbs-link-hover, #202020);
  --_crumb-current-color: var(--color-content-default, #202020);
  --_crumb-separator-color: var(--color-border-default-strong, #bbb);
  --_crumb-gap: var(--spacing-200, 8px);
  background: var(--breadcrumbs-bg, transparent);
  display: block;
}
.esa-breadcrumbs__list {
  align-items: center;
  gap: var(--_crumb-gap);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.esa-breadcrumbs__item {
  align-items: center;
  gap: var(--_crumb-gap);
  display: flex;
}
.esa-breadcrumbs__current {
  align-items: center;
  gap: var(--spacing-100, 4px);
  color: var(--_crumb-current-color);
  display: inline-flex;
}
.esa-breadcrumbs__icon {
  align-items: center;
  display: inline-flex;
}
.esa-breadcrumbs__separator {
  color: var(--_crumb-separator-color);
  flex-shrink: 0;
}
.bcn-sw3ip {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}
.bcn-sw3ip [hidden] {
  display: none !important;
}
.bcn-sw3ip__tools {
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-100) var(--spacing-300);
  box-sizing: border-box;
  min-height: 2.75rem;
  padding: var(--spacing-150, 0.375rem) var(--spacing-200) var(--spacing-150, 0.375rem)
    var(--spacing-600);
  background: var(--color-background-elevation-raised);
  border-bottom: 1px solid var(--color-border-default);
  display: flex;
  position: sticky;
  top: 0;
  container-type: inline-size;
}
@container (width<=720px) {
  .bcn-sw3ip__toolkeys :is([data-ip-merge], [data-ip-discard-all]) .esa-button__label {
    display: none;
  }
}
.bcn-sw3ip__toolkeys {
  align-items: center;
  gap: var(--spacing-100);
  flex: none;
  display: flex;
}
.bcn-sw3ip__rule {
  width: 1px;
  margin: 2px var(--spacing-100);
  background: var(--color-border-default);
  align-self: stretch;
}
.bcn-sw3ip__tools button:disabled {
  opacity: 0.38;
}
.bcn-sw3ip__crumbs {
  flex: 1;
  min-width: 0;
  font-size: 0.8125rem;
}
.bcn-sw3ip__crumbs .esa-breadcrumbs__list {
  --_crumb-gap: var(--spacing-150, 6px);
  flex-wrap: nowrap;
}
.bcn-sw3ip__crumbs .esa-breadcrumbs__item {
  min-width: 0;
}
.bcn-sw3ip__crumbs .esa-breadcrumbs__item:first-child {
  flex: 0 auto;
  max-width: 45%;
}
.bcn-sw3ip__crumbs .esa-breadcrumbs__link,
.bcn-sw3ip__crumbs .esa-breadcrumbs__current {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  display: block;
  overflow: hidden;
}
.bcn-sw3ip__crumbs .esa-breadcrumbs__icon {
  vertical-align: middle;
  margin-right: var(--spacing-150, 6px);
  display: inline-flex;
}
.bcn-sw3ip__crumbs .esa-breadcrumbs__item:first-child .esa-breadcrumbs__current {
  color: var(--color-content-default-secondary);
  font-weight: 400;
}
.bcn-sw3ip__crumbs .bcn-sw3ip__dot {
  background: var(--_hue, var(--color-content-default-tertiary));
  border-radius: 50%;
  width: 8px;
  height: 8px;
}
.bcn-sw3ip .bcn-sw3ip__gh {
  color: var(--color-content-default);
  padding-bottom: var(--spacing-100);
  border-bottom: 1px solid var(--color-border-default);
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
}
.bcn-sw3ip__empty {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-sw3ip__review {
  gap: var(--spacing-500);
  padding: var(--spacing-500) var(--spacing-600);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip__groups {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__group {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__entries {
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-100);
  grid-template-columns: auto fit-content(9.5rem) minmax(0, 1fr) auto auto;
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}
.bcn-sw3ip .bcn-sw3ip__entries > li {
  grid-column: 1/-1;
}
.bcn-sw3ip .bcn-sw3ip__entry {
  grid-template-columns: subgrid;
  display: grid;
}
.bcn-sw3ip__discarded {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3ip__discarded > summary {
  cursor: pointer;
  list-style-position: inside;
}
.bcn-sw3ip__discarded-acts {
  padding: var(--spacing-150) 0;
  justify-content: flex-end;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__entry {
  border: 1px dashed var(--color-border-default-strong, var(--color-border-default));
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="approved"] {
  border-style: solid;
  border-color: var(--color-border-default);
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="discarded"] {
  background: 0 0;
  border-color: #0000;
}
.bcn-sw3ip .bcn-sw3ip__entry[data-open] {
  border-style: solid;
  border-color: var(--color-border-default-strong, var(--color-border-default));
}
.bcn-sw3ip .bcn-sw3ip__entry[data-focus] {
  border-color: var(--color-border-default-focus);
}
.bcn-sw3ip .bcn-sw3ip__line {
  grid-column: 1/-1;
  grid-template-columns: subgrid;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  font-size: 0.875rem;
  display: grid;
}
.bcn-sw3ip .bcn-sw3ip__tick {
  width: 1.25rem;
  padding-right: var(--spacing-100);
  line-height: 0;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__ok {
  width: 1.25rem;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__entry:not([data-status="draft"]) .bcn-sw3ip__tick {
  visibility: hidden;
}
.bcn-sw3ip .bcn-sw3ip__chip {
  min-width: 0;
  line-height: 0;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__chip .bcn-draft-kind {
  max-width: 100%;
}
.bcn-sw3ip .bcn-sw3ip__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--color-content-default);
  font-weight: 500;
  text-decoration: none;
  overflow: hidden;
}
.bcn-sw3ip .bcn-sw3ip__none {
  padding: var(--spacing-150) var(--spacing-300);
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
}
.bcn-sw3ip .bcn-sw3ip__name:hover {
  text-decoration: underline;
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="discarded"] .bcn-sw3ip__name {
  color: var(--color-content-default-tertiary);
  text-decoration: line-through;
}
.bcn-sw3ip .bcn-sw3ip__entry[data-open] {
  background: var(--color-background-elevation-sunken);
}
.bcn-sw3ip .bcn-sw3ip__ok {
  visibility: hidden;
  color: var(--color-content-success);
  line-height: 0;
}
.bcn-sw3ip .bcn-sw3ip__entry[data-status="approved"] .bcn-sw3ip__ok {
  visibility: visible;
}
.bcn-sw3ip .bcn-sw3ip__cites {
  justify-content: flex-end;
  line-height: 0;
  display: flex;
}
.bcn-sw3ip :is(.bcn-sw3ip__cite, .bcn-sw3ip__stack) {
  border-radius: var(--radius-100);
  cursor: pointer;
  font: inherit;
  background: 0 0;
  border: 0;
  padding: 0;
  line-height: 1.5;
  text-decoration: none;
  display: inline-flex;
}
.bcn-sw3ip .bcn-sw3ip__cite:hover .bcn-cbadge,
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:first-child {
  background: color-mix(
    in srgb,
    var(--color-commitment) 22%,
    var(--color-background-elevation-raised)
  );
}
.bcn-sw3ip .bcn-sw3ip__stack {
  padding-right: calc((var(--_n) - 1) * 9px);
  display: inline-grid;
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge {
  box-shadow:
    1.5px 0 0 0 var(--color-background-elevation-raised),
    0 0 0 1px var(--color-background-elevation-raised);
  grid-area: 1/1;
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:first-child {
  z-index: 3;
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:nth-child(2) {
  z-index: 2;
  color: #0000;
  background: color-mix(
    in srgb,
    var(--color-commitment) 26%,
    var(--color-background-elevation-raised)
  );
  transform: translate(9px) scaleY(0.84);
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:nth-child(3) {
  z-index: 1;
  color: #0000;
  background: color-mix(
    in srgb,
    var(--color-commitment) 40%,
    var(--color-background-elevation-raised)
  );
  transform: translate(18px) scaleY(0.68);
}
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:nth-child(2) {
  transform: translate(11px) scaleY(0.84);
}
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:nth-child(3) {
  transform: translate(22px) scaleY(0.68);
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge {
  transition: transform 0.12s ease-out;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge {
    transition: none;
  }
}
.bcn-sw3ip .bcn-sw3ip__citelist {
  width: max-content;
  min-width: 16rem;
  max-width: min(26rem, 60vw);
  margin: calc(-1 * var(--spacing-100));
  flex-direction: column;
  line-height: 1.4;
  display: flex;
}
.bcn-sw3ip .bcn-sw3ip__citelist a {
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-200);
  border-radius: var(--radius-100);
  color: var(--color-content-default);
  grid-template-columns: auto minmax(0, 1fr);
  font-size: 0.8125rem;
  text-decoration: none;
  display: grid;
}
.bcn-sw3ip .bcn-sw3ip__citelist a:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-sw3ip .bcn-sw3ip__citelist a span:last-child {
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
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
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
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
.esa-button__label {
  white-space: nowrap;
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-console-fg` | `#ffffffed` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--breadcrumbs-bg` | `transparent` | component |
| `--breadcrumbs-link-color` | `#525252` | component |
| `--breadcrumbs-link-hover` | `#3d3d3d` | component |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#fcfcfc` | semantic |
| `--color-background-brand-muted-hover` | `#efefef` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#3d3d3d` | semantic |
| `--color-content-success` | `#218358` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-label-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
