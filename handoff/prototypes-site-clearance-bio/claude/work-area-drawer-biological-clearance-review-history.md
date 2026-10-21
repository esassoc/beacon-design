# Work-area drawer — biological clearance review history

Site Clearance — Biological · source prototype: https://esassoc.github.io/beacon-design/prototypes/site-clearance-bio/

![Work-area drawer — biological clearance review history, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/work-area-drawer-biological-clearance-review-history.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/work-area-drawer-biological-clearance-review-history.phone.png

The heart of the drawer: the full review history (reverse-chron node rail; the LATEST review sets the site's status) with an inline Add/Edit-review form. A review is a dated determination — Kind (from the tenant's configurable clearance-review-kind list), Date, a REQUIRED Outcome (Cleared / Inaccessible / Blocked), Reviewer (free text), and Note.

## Key decisions

- Every review carries an outcome — there is no "scheduled" review and no outcome-less state. The scheduled-visit concept was cut with forecasting; a review exists only once the determination is made.
- Kind reads the per-tenant configurable list (DCP seed: "14-day clearance", "72-hour clearance", "Management determination") — the kinds are the configurable axis; the outcome set is fixed. The form defaults the first review to 14-day and later ones to 72-hour.
- STIPULATIONS ARE CUT (epic decision): no stipulations field, no "Cleared w/ Stipulation" status. Any stipulation language belongs in the review's Note — see DCRDS-DH-294's fixture review for the pattern.
- Add/Edit is ONE inline form (#dd-form) — above the history when adding, swapped into a node when editing (the pencil affordance).
- Adding a review updates the work area's clearance-visit date; the "Sets current status" tag rides the latest review's node.

## Gotchas

- Status is derived from the LATEST review by date, so editing an older review must not change status unless it becomes the latest — recompute after every save.
- "0 reviews" is a real empty state (Add review + empty rail), not an error — a work area with no review is "Not Surveyed" (or Provisional Block if a buffer covers it).
- Do not add a stipulations control or a blocked-until picker from older mockups — both are explicitly out of scope (BCN-1447).

## Done when

- History lists reviews newest-first; every review shows kind, date, outcome chip, reviewer, note; the latest sets the header status and marker color; Add defaults kind sensibly and requires an outcome; saving updates the clearance-visit date and repaints every surface.

## Components

- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-date-picker` (hub) · `packages/ecology/src/components/esa-date-picker.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

```html
<section class="bioclear">
  <h3 class="wa__section">
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
          d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
        ></path>
        <path d="m9 12 2 2 4-4"></path></svg></span
    >Biological clearance<span class="bioclear__add"
      ><span class="dd__count" id="dd-count">1 review</span
      ><span id="dd-add"
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
          ><button class="esa-button__native typography-microcopy-xs" type="button">
            <span class="esa-button__label">Add review</span>
          </button></span
        ></span
      ></span
    >
  </h3>
  <!-- Add/Edit review form — inline above the history when adding; swapped
             into a history node when editing (the pencil affordance). Outcome is
             REQUIRED — a review IS a determination; any stipulation language
             belongs in the note (the epic cut the stipulations field). --><!-- Review history — reverse-chron node rail (JS-injected) -->
  <div class="dd__form" id="dd-form" hidden="">
    <esa-select id="dd-kind" label="Kind" size="sm"></esa-select>
    <div class="we__row">
      <esa-date-picker id="dd-date" label="Date" size="sm"></esa-date-picker
      ><esa-select id="dd-outcome" label="Outcome" size="sm"></esa-select>
    </div>
    <esa-text-field
      id="dd-reviewer"
      label="Reviewer"
      placeholder="Name (org)"
      size="sm"
    ></esa-text-field
    ><esa-textarea id="dd-note" label="Note" rows="2" auto-resize="" size="sm"></esa-textarea>
    <div class="dd__formactions">
      <span id="dd-cancel"
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
          ><button class="esa-button__native typography-microcopy-xs" type="button">
            <span class="esa-button__label">Cancel</span>
          </button></span
        ></span
      ><span id="dd-save"
        ><span
          class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
          ><button class="esa-button__native typography-microcopy-xs" type="button">
            <span class="esa-button__label">Save review</span>
          </button></span
        ></span
      >
    </div>
  </div>
  <ol class="revs" id="dd-history">
    <li class="rev">
      <span
        class="rev__dot"
        style="background: var(--st-blocked); border-color: var(--st-blocked)"
      ></span>
      <div class="rev__main">
        <p class="rev__head">
          14-day clearance<span class="rev__when">May 18, 2026 · C. Anderson (ESA)</span
          ><span class="rev__edit"
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                aria-label="Edit review"
                title="Edit review"
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path></svg
                ></span></button></span
          ></span>
        </p>
        <div class="rev__chiprow">
          <span class="gate__chipwrap"
            ><span class="bcn-status-chip" data-status="blocked" style="--_chip: var(--st-blocked)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Blocked</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
          ><span class="rev__current">Sets current status</span>
        </div>
        <p class="rev__note">
          Active SWHA nest within the 0.5-mile no-disturbance buffer — discovered during the site
          clearance visit.
        </p>
      </div>
    </li>
  </ol>
</section>
```

## Styles

```css
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
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
.esa-button__label {
  white-space: nowrap;
}
.comp-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.bcn-status-chip[data-status="provisional-block"],
.bcn-grid-chip[data-status="provisional-block"],
.bcn-status-chip[data-status="provisional-block"] .bcn-status-chip__dot,
.bcn-grid-chip[data-status="provisional-block"] .bcn-grid-chip__dot {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 1.5px var(--st-provisional-block);
}
#wa-read > .bioclear {
  padding-top: var(--spacing-500);
}
.bioclear__add {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.wa__section {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.wa__section .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.wa__footer-start .esa-button__label {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.dd__count {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.dd__form {
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.dd__form[hidden] {
  display: none;
}
.dd__formactions {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.revs {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.rev {
  column-gap: var(--spacing-250);
  padding-bottom: var(--spacing-400);
  grid-template-columns: 16px 1fr;
  display: grid;
  position: relative;
}
.rev:last-child {
  padding-bottom: 0;
}
.rev:not(:last-child):before {
  content: "";
  background: var(--color-border-default);
  width: 2px;
  position: absolute;
  top: 20px;
  bottom: 2px;
  left: 7px;
}
.rev__dot {
  border-radius: var(--radius-full);
  z-index: 1;
  background: var(--color-background-elevation-raised);
  border: 2px solid var(--color-border-default-strong);
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  margin-top: 2px;
}
.rev__main {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.rev__head {
  align-items: center;
  gap: var(--spacing-200);
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.rev__when {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.rev__edit {
  margin-left: auto;
}
.rev__chiprow {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.rev__current {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--color-background-brand) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-background-brand) 30%, transparent);
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
}
.rev__note {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.55;
}
.we__row {
  gap: var(--spacing-300);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--st-provisional-block` | `#d73027` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
