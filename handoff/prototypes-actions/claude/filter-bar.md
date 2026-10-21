# Filter bar

Actions · source prototype: https://esassoc.github.io/beacon-design/prototypes/actions/

![Filter bar, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/filter-bar.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/filter-bar.phone.png

One control strip over all three views. Top row: View (Board / Table / Timeline) and Type (All actions plus one tab per workflow). Bottom row: search, then the Type, Phase and List facets, the N/A switch, and Clear all.

## Key decisions

- Sort, Frequency, Assignee and Due were cut (Andy, 2026-10-07). Every view sorts by due date; undated work sinks to the bottom.
- The Type tabs are workflows, not single types (Plans covers Plan and Design). They scope every view, not only the board.
- Every control on both rows is 32px with 14px text. N/A sits on the row's centre line.
- N/A is prod's IsNotApplicable toggle: off hides not-applicable implementations.
- The view rides ?view=; Clear all resets search, facets and N/A but leaves the view and Type tabs alone.

## Gotchas

- The Type tabs are user data: a workflow saved, renamed or deleted in Configure board must re-sync them.
- The facets hardcode 32px while the toggle, text field and select size by padding, so heights drift unless each is solved for 32px. Match them on one control-height scale.

## Done when

- All controls on both rows measure the same height.
- On Plans, the board and the table show the same implementations.

## Components

- `bcn-filterbar` (spoke) · `src/components/bcn/BcnEvidenceTargets.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-toggle` (hub) · `packages/ecology/src/components/esa-button-toggle.ts`
- `esa-filter-clear-button` (hub) · `packages/ecology/src/components/esa-filter-clear-button.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-switch-toggle` (hub) · `packages/ecology/src/components/esa-switch-toggle.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

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

```html
<div data-act-filters="">
  <div class="bcn-filterbar bcn-filterbar--compact">
    <div class="bcn-filterbar__top">
      <div class="bcn-filterbar__group">
        <span class="bcn-filterbar__label">View</span
        ><esa-button-toggle
          slot="lead"
          data-act-view="true"
          data-icons="true"
          value="board"
          size="md"
          data-options="[{&quot;value&quot;:&quot;board&quot;,&quot;label&quot;:&quot;Board&quot;,&quot;icon&quot;:&quot;&lt;rect width='18' height='18' x='3' y='3' rx='2'/&gt;&lt;path d='M8 7v7'/&gt;&lt;path d='M1… [446 characters]"
        ></esa-button-toggle>
      </div>
      <div class="bcn-filterbar__group bcn-filterbar__scope">
        <span class="bcn-filterbar__label">Type</span
        ><esa-button-toggle
          slot="scope"
          data-act-scope="true"
          size="md"
          aria-label="Action types"
        ></esa-button-toggle>
      </div>
    </div>
    <div class="bcn-filterbar__bottom">
      <span class="bcn-filterbar__label">Filters</span>
      <div class="bcn-filterbar__search bcn-filterbar__search--filters">
        <esa-text-field
          slot="search"
          data-act-search="true"
          placeholder="Search action, commitment or assignee"
          aria-label="Search actions"
          size="md"
        ></esa-text-field
        ><span data-act-search-clear="" hidden=""
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Clear search"
              title="Clear search"
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
                  <path d="m6 6 12 12"></path></svg
              ></span></button></span
        ></span>
      </div>
      <div
        class="esa-filter-container typography-label-md"
        style="
          --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
          --_filter-container-row-gap: var(--spacing-200, 0.5rem);
        "
      >
        <esa-filter-dropdown
          data-act-facet="type"
          label="Type"
          multiple=""
          size="sm"
          data-options='[{"value":"Plan","label":"Plan"},{"value":"Design","label":"Design"},{"value":"ApprovalAndConsultation","label":"Approval &amp; Consultation"},{"value":"Reporting","label":"Reporting"},{"value":"Analysis","label":"Analysis"},{"value":"Financial","label":"Financial"},{"value":"Other","label":"Other"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          data-act-facet="phase"
          label="Phase"
          multiple=""
          size="sm"
          data-options='[{"value":"Implementation Planning","label":"Implementation Planning"},{"value":"Pre-Construction","label":"Pre-Construction"},{"value":"Construction","label":"Construction"},{"value":"Post-Construction","label":"Post-Construction"},{"value":"Operations","label":"Operations"},{"value":"Maintenance","label":"Maintenance"}]'
        ></esa-filter-dropdown
        ><esa-filter-dropdown
          data-act-facet="list"
          label="List"
          multiple=""
          size="sm"
          data-options='[{"value":"annual-reporting","label":"Annual Reporting"},{"value":"desktop-actions","label":"Desktop Actions"},{"value":"mapping","label":"Mapping"},{"value":"monthly-reporting","label":"Monthly Reporting"},{"value":"qualified-biologist-for-species","label":"Qualified Biologist for Species"},{"value":"survey-protocol-approval","label":"Survey Protocol Approval"}]'
        ></esa-filter-dropdown
        ><esa-switch-toggle
          data-act-na="true"
          size="sm"
          label="N/A"
          label-position="after"
        ></esa-switch-toggle>
      </div>
      <span class="bcn-filterbar__clear"
        ><span data-act-clear=""
          ><button
            class="esa-filter-clear-button typography-microcopy-sm"
            type="button"
            data-esa-filter-clear=""
            aria-label="Clear all filters"
          >
            <svg
              class="esa-filter-clear-button__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
              <path d="m22 3-5 5"></path>
              <path d="m17 3 5 5"></path></svg
            ><span class="esa-filter-clear-button__label">Clear all</span></button
          ><!-- script type="module" removed (173 bytes) --></span
        ></span
      >
    </div>
  </div>
</div>
```

## Styles

```css
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
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
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
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
.bcn-filterbar {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
}
.bcn-filterbar__top {
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__bottom {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__top + .bcn-filterbar__bottom {
  border-top: 1px solid var(--color-border-default);
}
.bcn-filterbar__group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-filterbar__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-filterbar__search {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 380px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-filterbar__search esa-text-field {
  flex: 1;
}
.bcn-filterbar__scope {
  margin-left: var(--spacing-600);
}
.bcn-filterbar__search--filters {
  width: 20rem;
  min-width: 0;
  margin-left: 0;
}
.bcn-filterbar--compact {
  --typography-microcopy-md-font-size: 14px;
  --typography-microcopy-md-strong-font-size: 14px;
  --typography-microcopy-md-subtle-font-size: 14px;
}
.bcn-filterbar--compact esa-button-toggle {
  --_pad-y: calc((26px - 1lh) / 2);
}
.bcn-filterbar--compact esa-button-toggle[data-icons] {
  --_icon-size: 14px;
  --_pad-y: calc((26px - max(1lh, 14px)) / 2);
}
.bcn-filterbar--compact esa-text-field {
  --_field-padding-y: calc((32px - 1.3em) / 2 - var(--form-border-width, 1px));
}
.bcn-filterbar--compact esa-switch-toggle {
  align-items: center;
  display: inline-flex;
}
.bcn-filterbar__clear {
  margin-left: auto;
}
@media (width<=40rem) {
  .bcn-filterbar__search {
    min-width: 100%;
    margin-left: 0;
  }
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(--color-content-utility-danger, var(--color-content-brand, #2a7e3b));
  --_clear-icon-size: 18px;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border-radius: var(--radius-sm, 0.25rem);
  color: var(--_clear-text);
  cursor: pointer;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  text-decoration: underline;
  display: inline-flex;
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, #00000008);
}
.esa-filter-clear-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
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
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-overlay-hover` | `#00000008` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--form-border-width` | `1px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-font-weight` | `500` | semantic |
| `--typography-label-md-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-line-height` | `1.6` | semantic |
| `--typography-microcopy-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-microcopy-sm-font-weight` | `500` | semantic |
| `--typography-microcopy-sm-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-sm-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
