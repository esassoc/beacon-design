# Index tree

Custom Compliance Index list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/contractor-field-index/

![Index tree, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-contractor-field-index/claude/index-tree.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-contractor-field-index/claude/index-tree.phone.png

The list's own outline over the index's items: its categories and subcategories, named and ordered for its reader ("Before ground disturbance", "Every day on site"), each subcategory holding the actions and obligations of the canonical subcategories it draws from.

## Key decisions

- A version arranges SUBCATEGORIES, never single items. Each of its subcategories names one or more canonical subcategories; two names merge them ("Speed, access and parking" is Speed limits plus Access routes and parking). Trimming is leaving canonical subcategories out.
- Items follow their canonical filing until the version moves them. Refile an action in the setup wizard and it moves in every version that draws from either subcategory, except where that version has moved its member.
- Prod model: a ComplianceIndexList (Name, Description, ProjectID, IsCanonical) with its own ComplianceIndexListCategory and ComplianceIndexListSubcategory rows (Name, SortOrder), and a join from each list subcategory to the canonical ComplianceIndexSubcategoryIDs it draws from. The canonical index is the list with IsCanonical, whose subcategories map one to one.
- Creating one copies the canonical outline: every category and subcategory with its name and order, each subcategory drawing from its one canonical twin. The person then regroups, renames and trims.
- Rows and cards are the canonical page's: same card per item, actions then obligations inside a subcategory, each A–Z by the title the list shows; an item merged in from two subcategories appears once.
- Parity with an obligation list (Andy, 2026-10-20: "there should be parity between the ci and obligations lists"). On actions and obligations alike: Remove from this list (the x), Move or retitle (the title or pen, into the item panel), Duplicate (the copy verb: a second membership filed beside the first, with its own wording), and Rename for this list on a category or subcategory row (the branch panel obligation lists rename in too). Never: the item's type, class, requirements, or where the canonical index files it (2026-10-19: "You shouldn't be able to edit the nature of an obligation itself").
- Add items (the title row) puts the index's items back, as an obligation list's Add puts the registry's on (Andy, 2026-10-20). See Add drawer.
- Members are keyed by member id, as on an obligation list: the item id on load, `<item id>-m<n>` for a copy.
- Prod model: ComplianceIndexListMember (ComplianceIndexListMemberID, ComplianceIndexListID, ActionID or ObligationID, ComplianceIndexListSubcategoryID when moved, ListTitle, ListDescription; the last three nullable, null meaning the index's) for a member that differs from the outline's default: moved, reworded or copied. ComplianceIndexListItemExclusion (ComplianceIndexListID, ActionID or ObligationID) for one taken off. Renaming a branch writes the list's own category or subcategory Name.

## Gotchas

- A subcategory added to the canonical index later is in no version until someone places it. Open: whether a version should show unplaced canonical subcategories in a bin of its own.
- Open: merging, reordering and adding or removing whole categories and subcategories (the outline editor) is not built, so in this epic a whole subcategory comes off only item by item (Aldo's Keep and Take Out, which do it at once, are the separate Aldo epic). Rename is built, in a side panel.
- An item removed from a version is excluded by id, so refiling it in the canonical index does not bring it back into that version.
- Removing or moving the last member of a subcategory drops the subcategory from the page and the PDF; the list keeps its row, so moving a member back restores it under the same name, and the Move picker still offers it.

## Done when

- Each category's count is the sum of its subcategories' and the title badge is the sum of the categories'.
- A subcategory that merges two canonical subcategories lists the union of their items, once each.
- Remove asks first ("It stays in the project's Compliance Index"), then drops the card and every count by one.
- A retitled item shows its list title and a dot, files A–Z by that title, and prints that title and list description in the PDF.
- Duplicate puts a copy beside the member with the same wording and moves every count by one; the copy opens in the panel on its own.
- Moving a member files it A–Z in the chosen subcategory and re-tallies both subcategories.
- Add items lands each ticked item in the version subcategory that draws on its canonical subcategory, moves every count, and offers the subcategory in the Move picker.
- The canonical index shows none of these verbs.

## Components

- `bcn-loc` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `bcn-lot` (spoke) · `src/components/bcn/BcnListAddIndexItems.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

```html
<details class="bcn-lot__sub" data-index-sub="worker-awareness-training" open="">
  <summary class="bcn-lot__row bcn-lot__row--sub">
    <span class="bcn-lot__chevron" aria-hidden="true"
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
    ><span class="bcn-lot__name" data-list-name="" data-list-text="Worker awareness training"
      >Worker awareness training</span
    ><span class="bcn-swcb" aria-label="2 items" data-index-count="true">2</span
    ><span class="bcn-lot__verbs"
      ><esa-tooltip text="Rename for this list" align="end" position="above"
        ><button
          type="button"
          class="bcn-lot__verb bcn-lot__verb--quiet"
          aria-label="Rename this subcategory for this list"
          data-index-rename="sub"
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
              <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path
                d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
              ></path></svg
          ></span></button></esa-tooltip
    ></span>
  </summary>
  <ul class="bcn-lot__cards">
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y40SJ78J9AJM2D416MYM"
      data-id="act_01M2G6Y40SJ78J9AJM2D416MYM"
      data-class="action"
      data-codes="COA 11.82|COA 9.4"
      data-index="People and qualifications::Worker training|Birds::Nesting birds"
      data-list-description="Everyone who works past the gate attends once, and again each year. Sign the attendance sheet: no sign-in, no site access."
      data-registry-desc="A Designated Biologist, Fisheries Biologist, or Biological Monitor presents the Condition of Approval 9.4 education prog… [492 characters]"
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
          ><span class="bcn-loc__class" data-list-class-tag="">Training &amp; Education</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-edit=""
            data-list-title=""
            data-list-text="Attend worker awareness training before your first shift"
            data-registry-title="Conduct Worker Education Program and Annual Refresher Training"
          >
            Attend worker awareness training before your first shift</button
          ><span class="bcn-loc__edited" data-list-edited=""
            ><esa-tooltip text="Has its own list wording" position="above" align="center"
              ><span
                class="bcn-loc__dot"
                role="img"
                aria-label="Has its own list wording"
              ></span></esa-tooltip></span
          ><span data-list-count="member"
            ><span class="bcn-swcb" aria-label="2 implementations">2</span></span
          ><esa-tooltip text="Move or retitle for this list" position="above" align="center"
            ><button
              type="button"
              class="bcn-loc__verb"
              aria-label="Move or retitle this action for this list"
              data-list-edit=""
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
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
          ><esa-tooltip text="Duplicate for this list" position="above" align="center"
            ><button
              type="button"
              class="bcn-loc__verb"
              aria-label="Hold this action again with its own wording"
              data-list-duplicate=""
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
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg
              ></span></button></esa-tooltip
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
            data-list-impl="act_01M2G6Y40SJ78J9AJM2D416MYM|byron-tract-forebay"
            data-status="in-progress"
            data-evidence="0"
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
              data-list-text="Byron Tract Forebay"
            >
              Byron Tract Forebay</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none="">No evidence</span>
          </li>
          <li
            class="bcn-loc__req bcn-loc__impl"
            data-list-impl="act_01M2G6Y40SJ78J9AJM2D416MYM|intake-b-north-delta"
            data-status="completed"
            data-evidence="2"
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
              data-list-text="Intake B — North Delta"
            >
              Intake B — North Delta</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="">2 evidence</span>
          </li>
        </ul>
      </details>
    </li>
    <li
      class="bcn-loc"
      data-list-card=""
      data-member-id="act_01M2G6Y40SJ78J9AJM2D416MYP"
      data-id="act_01M2G6Y40SJ78J9AJM2D416MYP"
      data-class="action"
      data-codes="COA 11.36"
      data-index="People and qualifications::Worker training|Water::Barge and vessel operations"
      data-list-description="Permittee ensures every tugboat and barge operator working on the Project is trained to minimize impacts on Covered Species habitat, including reducing the effects of wake on vegetated banks, before that operator runs a Project vessel. Completion is documented for each named operator."
      data-registry-desc="Permittee ensures every tugboat and barge operator working on the Project is trained to minimize impacts on Covered Species habitat, including reducing the effects of wake on vegetated banks, before that operator runs a Project vessel. Completion is documented for each named operator."
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
          ><span class="bcn-loc__class" data-list-class-tag="">Training &amp; Education</span
          ><button
            type="button"
            class="bcn-loc__title"
            data-list-edit=""
            data-list-title=""
            data-list-text="Train Tugboat and Barge Operators on Habitat Impacts"
            data-registry-title="Train Tugboat and Barge Operators on Habitat Impacts"
          >
            Train Tugboat and Barge Operators on Habitat Impacts</button
          ><span class="bcn-loc__edited" data-list-edited="" hidden=""
            ><esa-tooltip text="Has its own list wording" position="above" align="center"
              ><span
                class="bcn-loc__dot"
                role="img"
                aria-label="Has its own list wording"
              ></span></esa-tooltip></span
          ><span data-list-count="member"
            ><span class="bcn-swcb" aria-label="1 implementations">1</span></span
          ><esa-tooltip text="Move or retitle for this list" position="above" align="center"
            ><button
              type="button"
              class="bcn-loc__verb"
              aria-label="Move or retitle this action for this list"
              data-list-edit=""
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
                  <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path
                    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
                  ></path></svg
              ></span></button></esa-tooltip
          ><esa-tooltip text="Duplicate for this list" position="above" align="center"
            ><button
              type="button"
              class="bcn-loc__verb"
              aria-label="Hold this action again with its own wording"
              data-list-duplicate=""
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
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg
              ></span></button></esa-tooltip
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
            data-list-impl="act_01M2G6Y40SJ78J9AJM2D416MYP|intake-b-north-delta"
            data-status="in-progress"
            data-evidence="0"
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
              data-list-text="Intake B — North Delta"
            >
              Intake B — North Delta</button
            ><span class="bcn-loc__comments" hidden="">0 comments</span
            ><span class="bcn-loc__evidence" data-list-evidence="" data-none="">No evidence</span>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</details>
```

## Styles

```css
.bcn-lot__cat[data-list-empty],
.bcn-lot__sub[data-list-empty] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: -2px;
}
.bcn-lit:not([data-index-editable])
  esa-tooltip:has([data-list-remove], [data-list-duplicate], .bcn-loc__verb[data-list-edit]) {
  display: none;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-swot__cat:nth-of-type(2n) .bcn-swot__row:hover,
.bcn-lot__cat:nth-of-type(2n) .bcn-lot__row:hover,
.bcn-ciidx__cat:nth-of-type(2n) .bcn-ciidx__row:hover {
  background: var(--bcn-gray-100);
}
.bcn-swot__sub + .bcn-swot__sub,
.bcn-lot__sub + .bcn-lot__sub {
  border-top: 1px solid var(--color-border-default-subtle);
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
.bcn-swot__cards,
.bcn-lot__cards {
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-300) calc(var(--spacing-400) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lot [data-list-flat] > .bcn-lot__cards {
  padding: var(--spacing-300) var(--spacing-400);
}
.bcn-lot__row .bcn-lot__name[hidden] {
  display: none;
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
| `--color-content-brand` | `#005862` | semantic |
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
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
