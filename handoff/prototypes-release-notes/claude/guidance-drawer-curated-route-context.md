# Guidance drawer — curated route context

Release Notes · source prototype: https://esassoc.github.io/beacon-design/prototypes/release-notes/

![Guidance drawer — curated route context, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/guidance-drawer-curated-route-context.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-release-notes/claude/guidance-drawer-curated-route-context.phone.png

Aldo's opening message on THIS route — the route-aware half of the guidance drawer. "You are here" names the page and states its purpose in plain words; "On this page" lists the how-to articles curated for it; "Terms" lists the glossary terms it uses. Every page gets this; the Release Notes route has a curated entry rather than the generic fallback.

## Key decisions

- Route context is a DATA RECORD, not logic: HELP_ROUTE_CONTEXTS is an ordered list of { pattern, page, purpose, howtos, terms }, matched by pathname substring with FIRST MATCH WINNING. Adding guidance for a route is a data edit.
- HELP_GENERAL_CONTEXT is the fallback for any route without a curated entry, so the drawer is never empty — an uncurated page still gets an orienting answer.
- The pattern is a base-agnostic pathname substring, so the same record works under the prototype base path and in the real app.
- howtos and terms are ARRAYS OF ARTICLE IDS into the one shared dataset — the drawer never holds its own copy of an article. Curating a route means choosing which existing articles surface, not writing new text.
- The Release Notes entry curates to what this page actually raises: the how-to for tenant settings and the "feature flag" glossary term — matching the flag notes on the entries above.
- Section labels are readable words with a leading esa-icon glyph (map-pin / list / book), not ornamental micro-labels.
- Rendering is a MOVE, not a build: every article is pre-rendered once as a row into a hidden pool, and the client moves the matched route's rows into these two sections. Astro is compile-time and the drawer is route-agnostic at build, so the move is what makes it route-aware.

## Gotchas

- Order matters in HELP_ROUTE_CONTEXTS — first match wins, so a broad pattern placed above a specific one will shadow it. Keep specific routes before general ones.
- A curated entry whose howtos or terms name an id that no longer exists silently renders one fewer row. Validate the ids against the dataset at build time.
- The "On this page" and "Terms" sections hide themselves when their list is empty — a curated entry with no terms should not leave a labeled empty section.
- This intro is a message in the chat stream, not a fixed header: it scrolls away as the conversation grows. Do not pin it.

## Done when

- Opening the drawer on this route shows "Release Notes" with its purpose sentence, the curated how-to row, and the "feature flag" term; opening it on an uncurated route shows the general fallback instead of an empty drawer; every listed row opens that article in the stacked reader.

## Components

- `bcn-gd` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-gd-msg` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-gd-row` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-combobox` (hub) · `packages/ecology/src/components/esa-combobox.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

_4 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-gd-msg bcn-gd-msg--aldo" data-gd-intro="">
  <div class="bcn-gd-msg__group">
    <!-- The page: its name as the heading, its description under it (round 17: no box,
             no "You are here" label). An admin, on a page whose description is the
             tenant's rich text, gets an Edit chip at the end of the heading row. -->
    <section class="bcn-gd__section bcn-gd__here">
      <div class="bcn-gd__here-head">
        <h2 class="bcn-gd__label">
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
              <path
                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
              ></path>
              <circle cx="12" cy="10" r="3"></circle></svg
          ></span>
          <span data-gd-page="">Release Notes</span>
        </h2>
        <span class="bcn-admin-cue" data-gd-here-note="" hidden=""
          ><esa-tooltip
            text="Edit page description for everyone in AWS"
            position="above"
            delay="150"
            align="center"
            ><span class="bcn-admin-btn" data-gd-here-edit=""
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-2xs"
                  type="button"
                  aria-label="Edit Page Description"
                  title="Edit Page Description"
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
                      <path
                        d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                      ></path>
                      <path d="m15 5 4 4"></path></svg
                  ></span></button></span></span></esa-tooltip
        ></span>
      </div>
      <p class="bcn-gd__here-purpose" data-gd-purpose="">
        What changed in each Beacon release — headline features, per-area improvements, and fixes,
        newest first.
      </p>
    </section>
    <!-- On This Page. On a page with help dots, the section is its dots (round 17: a page
             that mounts <BcnHelpDotList> moves the list into the slot) and lists no articles;
             without dots, the route's how-to articles are the section. -->
    <section class="bcn-gd__section" data-gd-section="howtos">
      <h2 class="bcn-gd__label">
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
            <line x1="8" x2="21" y1="6" y2="6"></line>
            <line x1="8" x2="21" y1="12" y2="12"></line>
            <!-- …and 4 more like this (<line>) -->
          </svg></span
        >
        On this page
      </h2>
      <div data-help-dots-list-slot=""></div>
      <div class="bcn-gd__rows" data-gd-howtos="">
        <button
          type="button"
          class="bcn-gd-row"
          data-article-id="managing-tenant-settings"
          data-kind="howto"
          data-title="Managing tenant settings"
          data-summary="Configure the display labels, defaults, and enabled features that apply across a tenant."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Managing tenant settings</span
            ><span class="bcn-gd-row__sub"
              >Configure the display labels, defaults, and enabled features that apply across a
              tenant.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </div>
    </section>
    <!-- Terms. An admin attaches a glossary term to this page with + Add Term (a
             typeahead over the glossary) and detaches one with its ×; terms the page takes
             from its parent can only be hidden here or edited there (round 17). -->
    <section class="bcn-gd__section" data-gd-section="terms">
      <div class="bcn-gd__here-head">
        <h2 class="bcn-gd__label">
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
              <path
                d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
              ></path></svg
          ></span>
          Terms
        </h2>
        <span class="bcn-admin-cue" data-gd-term-add-wrap="" hidden=""
          ><esa-tooltip
            text="ESA admin: add a term to this page for every tenant"
            position="above"
            delay="150"
            align="center"
            ><span class="bcn-admin-btn" data-gd-term-add=""
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-2xs"
                  type="button"
                  aria-label="Add Term"
                  title="Add Term"
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
                      <path d="M12 5v14"></path></svg
                  ></span></button></span></span></esa-tooltip
        ></span>
      </div>
      <div class="bcn-gd__pick" data-gd-term-pick="" hidden="">
        <esa-combobox
          mode="autocomplete"
          size="sm"
          label="Add Term"
          placeholder="Search the glossary"
          data-gd-term-combo="true"
        ></esa-combobox>
      </div>
      <div class="bcn-gd__rows" data-gd-terms="">
        <button
          type="button"
          class="bcn-gd-row"
          data-article-id="feature-flag"
          data-kind="glossary"
          data-title="Feature Flag"
          data-summary="A tenant-level switch that enables or disables a Beacon capability."
        >
          <span class="bcn-gd-row__text"
            ><span class="bcn-gd-row__title">Feature Flag</span
            ><span class="bcn-gd-row__sub"
              >A tenant-level switch that enables or disables a Beacon capability.</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </div>
      <!-- An admin's row tools, cloned onto each term row: an attached term's ×, an
               inherited term's Hide and Edit on Project. --><template data-gd-trow-attached=""
        ><span class="bcn-gd-trow__tools bcn-admin-cue" data-astro-cid-i5kl5miz=""
          ><esa-tooltip
            text="ESA admin: Detach from this page"
            position="above"
            delay="150"
            data-astro-cid-i5kl5miz="true"
            ><span class="bcn-admin-btn" data-gd-term-detach="" data-astro-cid-i5kl5miz=""
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                data-astro-cid-5nhxdd72=""
                ><button
                  class="esa-button__native typography-microcopy-2xs"
                  type="button"
                  aria-label="Detach Term"
                  title="Detach Term"
                  data-astro-cid-i5kl5miz="true"
                  data-astro-cid-5nhxdd72=""
                >
                  <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                      data-astro-cid-wcwfib5m=""
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button></span></span></esa-tooltip></span></template
      ><template data-gd-trow-inherited=""
        ><span class="bcn-gd-trow__tools bcn-admin-cue" data-astro-cid-i5kl5miz=""
          ><esa-tooltip
            text="ESA admin: Hide on this page"
            position="above"
            delay="150"
            data-astro-cid-i5kl5miz="true"
            ><span class="bcn-admin-btn" data-gd-term-hide="" data-astro-cid-i5kl5miz=""
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                data-astro-cid-5nhxdd72=""
                ><button
                  class="esa-button__native typography-microcopy-2xs"
                  type="button"
                  aria-label="Hide on This Page"
                  title="Hide on This Page"
                  data-astro-cid-i5kl5miz="true"
                  data-astro-cid-5nhxdd72=""
                >
                  <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                      data-astro-cid-wcwfib5m=""
                    >
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button></span></span></esa-tooltip
          ><esa-tooltip
            text="ESA admin: Edit on Project"
            position="above"
            delay="150"
            data-astro-cid-i5kl5miz="true"
            ><span class="bcn-admin-btn" data-gd-term-parent="" data-astro-cid-i5kl5miz=""
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                data-astro-cid-5nhxdd72=""
                ><button
                  class="esa-button__native typography-microcopy-2xs"
                  type="button"
                  aria-label="Edit on Project"
                  title="Edit on Project"
                  data-astro-cid-i5kl5miz="true"
                  data-astro-cid-5nhxdd72=""
                >
                  <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                      data-astro-cid-wcwfib5m=""
                    >
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                      <path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      ></path></svg
                  ></span></button></span></span></esa-tooltip></span
      ></template>
    </section>
  </div>
</div>
```

## Styles

```css
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-cue {
  border-radius: var(--radius-full);
  color: #fff;
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  align-items: center;
  gap: 1px;
  padding: 1px;
  display: inline-flex;
}
@supports not (backdrop-filter: blur(1px)) {
  .bcn-admin-cue {
    background: var(--bcn-helpbar-bg-solid);
  }
}
@media (prefers-reduced-transparency: reduce) {
  .bcn-admin-cue {
    background: var(--bcn-helpbar-bg-solid);
    backdrop-filter: none;
  }
}
.bcn-admin-cue[hidden] {
  display: none;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn[hidden] {
  display: none;
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
.bcn-admin-cue esa-tooltip {
  --color-background-default-knockout: var(--bcn-helpbar-bg-solid);
  --color-content-default-knockout: var(--bcn-helpbar-fg);
  display: inline-flex;
}
.bcn-gd__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-gd__section[hidden] {
  display: none;
}
.bcn-gd__label {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__here-head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-gd__here-purpose {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.5;
}
.bcn-gd__pick[hidden] {
  display: none;
}
.bcn-gd-trow:is(:hover, :focus-within) .bcn-gd-row {
  padding-inline-end: calc(var(--_tools-w, 52px) + var(--spacing-200));
}
.bcn-gd-trow[data-hidden-here] .bcn-gd-row__title,
.bcn-gd-trow[data-hidden-here] .bcn-gd-row__sub {
  color: var(--color-content-default-tertiary);
}
.bcn-gd__rows {
  flex-direction: column;
  display: flex;
}
.bcn-gd__rows:empty {
  display: none;
}
.bcn-gd-row {
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300) var(--spacing-100);
  border: 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  display: flex;
}
.bcn-gd-row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-gd-row__text {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-gd-row__title {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-gd-row__sub {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
  line-height: 1.4;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-msg {
  gap: var(--spacing-300);
  align-items: flex-start;
  display: flex;
}
.bcn-gd-msg__group {
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
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
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
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
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `#17191bc7` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `#ffffff1f` | component |
| `--bcn-helpbar-fg` | `#ffffffeb` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
