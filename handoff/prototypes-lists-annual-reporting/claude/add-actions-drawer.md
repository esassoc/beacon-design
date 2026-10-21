# Add actions drawer

Action list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/annual-reporting/

![Add actions drawer, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/add-actions-drawer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-annual-reporting/claude/add-actions-drawer.phone.png

Checkbox drawer of every action not on the list, in Action Type folders, with search and facets Phase / Species / Type / Frequency.

## Key decisions

- Replaces prod's separate Edit Actions page.
- No Commitment facet.

## Gotchas

- The trigger attribute is shared with the obligation page (data-list-add-obligations); data-list-add-event names the event.

## Components

- `bcn-laf` (spoke) · `src/components/bcn/BcnListAddFilters.astro`
- `bcn-lam` (spoke) · `src/components/bcn/BcnListAddMembers.astro`
- `bcn-lao` (spoke) · `src/components/bcn/list-add.ts`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-filter-clear-button` (hub) · `packages/ecology/src/components/esa-filter-clear-button.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

_70 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-lao">
  <esa-text-field
    size="sm"
    name="lam-search"
    aria-label="Search actions"
    placeholder="Search by action name"
  ></esa-text-field>
  <div class="bcn-laf" data-add-filters="">
    <div
      class="esa-filter-container typography-label-md"
      style="
        --_filter-container-gap: var(--spacing-200, var(--spacing-300, 0.75rem));
        --_filter-container-row-gap: var(--spacing-200, 0.5rem);
      "
    >
      <esa-filter-dropdown
        name="phase"
        label="Phase"
        placeholder="Search phase"
        size="sm"
        multiple=""
        options='[{"value":"Implementation Planning","label":"Implementation Planning"},{"value":"Pre-Construction","label":"Pre-Construction"},{"value":"Construction","label":"Construction"},{"value":"Operations","label":"Operations"},{"value":"Maintenance","label":"Maintenance"},{"value":"Post-Construction","label":"Post-Construction"}]'
      ></esa-filter-dropdown
      ><esa-filter-dropdown
        name="species"
        label="Species"
        placeholder="Search species"
        size="sm"
        multiple=""
        options='[{"value":"black bass","label":"Black bass"},{"value":"california tiger salamander","label":"California tiger salamander… [919 characters]'
      ></esa-filter-dropdown
      ><!-- …and 2 more like this (<esa-filter-dropdown>) --><span
        class="bcn-laf__clear"
        data-add-filters-clear=""
        hidden=""
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
          ><span class="esa-filter-clear-button__label">Clear all</span>
        </button></span
      >
    </div>
  </div>
  <p class="bcn-lao__nomatch" data-lam-nomatch="" hidden="">No actions match.</p>
  <p class="bcn-lao__nomatch" data-lam-none="" hidden="">
    Every action in the registry is already on this list.
  </p>
  <div class="bcn-lao__tree" data-lam-tree="">
    <details class="bcn-lao__cat" data-lam-group="Analysis">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Analysis</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="13 actions available">13</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Calculate Phase Impacts and Mitigation for Authorization Package"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD077","id":"act_01M2G6Y32F2DZX3TCXSF7HD077","title":"Calculate Phase Impacts and … [866 characters]'
          data-f-commitment="COA 12"
          data-f-phase="Implementation Planning|Pre-Construction"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Calculate Phase Impacts and Mitigation for Authorization Package"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Calculate Phase Impacts and Mitigation for Authorization Package"
            >Calculate Phase Impacts and Mitigation for Authorization Package</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Complete COA 10.25 Series Models and Report"
          data-item='{"memberId":"act_01M2G6Y32F2DZX3TCXSF7HD073","id":"act_01M2G6Y32F2DZX3TCXSF7HD073","title":"Complete COA 10.25 Series Mo… [1282 characters]'
          data-f-commitment="COA 10"
          data-f-phase="Implementation Planning"
          data-f-species=""
          data-f-type="Analysis"
          data-f-frequency="Onetime"
          data-f-deliverable="report"
        >
          <esa-checkbox
            size="sm"
            aria-label="Complete COA 10.25 Series Models and Report"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Complete COA 10.25 Series Models and Report"
            >Complete COA 10.25 Series Models and Report</span
          >
        </li>
        <!-- …and 11 more like this (<li class="bcn-lao__opt">) -->
      </ul>
    </details>
    <details class="bcn-lao__cat" data-lam-group="ApprovalAndConsultation">
      <summary class="bcn-lao__row bcn-lao__row--cat">
        <span class="bcn-lao__chevron" aria-hidden="true"
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
        ><span class="bcn-lao__name">Approval &amp; Consultation</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="49 actions available">49</span></span
        >
      </summary>
      <ul class="bcn-lao__opts bcn-lam__opts">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Consult CDFW on Deceased CTS Specimen Disposal"
          data-item='{"memberId":"act_01M2G6Y34X89RDDJZVZVMK8Y0F","id":"act_01M2G6Y34X89RDDJZVZVMK8Y0F","title":"Consult CDFW on Deceased CTS… [685 characters]'
          data-f-commitment="COA 11"
          data-f-phase="Construction"
          data-f-species="california tiger salamander"
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Consult CDFW on Deceased CTS Specimen Disposal"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Consult CDFW on Deceased CTS Specimen Disposal"
            >Consult CDFW on Deceased CTS Specimen Disposal</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="Consult CDFW on Federal Biological Opinions"
          data-item='{"memberId":"act_01M2G6Y34ZRWNWJ42W3E737QZR","id":"act_01M2G6Y34ZRWNWJ42W3E737QZR","title":"Consult CDFW on Federal Biol… [824 characters]'
          data-f-commitment="COA 4"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-type="ApprovalAndConsultation"
          data-f-frequency="AsNeeded"
          data-f-deliverable="notification"
        >
          <esa-checkbox
            size="sm"
            aria-label="Consult CDFW on Federal Biological Opinions"
          ></esa-checkbox
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Consult CDFW on Federal Biological Opinions"
            >Consult CDFW on Federal Biological Opinions</span
          >
        </li>
        <!-- …and 47 more like this (<li class="bcn-lao__opt">) -->
      </ul>
    </details>
    <!-- …and 10 more like this (<details class="bcn-lao__cat">) -->
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.bcn-lam__opts {
  padding-inline-start: calc(var(--spacing-200) + 22px);
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
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-laf__clear[hidden] {
  display: none;
}
.bcn-lao {
  gap: var(--spacing-300);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-lao__nomatch {
  padding: var(--spacing-300) var(--spacing-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-lao__tree {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-lao__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-lao__cat[hidden],
.bcn-lao__sub[hidden],
.bcn-lao__opt[hidden] {
  display: none;
}
.bcn-lao__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-200);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-lao__row::-webkit-details-marker {
  display: none;
}
.bcn-lao__row:hover {
  background: var(--color-background-default);
}
.bcn-lao__row--cat {
  font-weight: 600;
}
.bcn-lao__row:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: calc(var(--focus-ring-offset, 2px) * -1);
}
.bcn-lao__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-lao__row .bcn-lao__chevron {
  transform: rotate(90deg);
}
.bcn-lao__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.bcn-lao__opts {
  padding: var(--spacing-150) var(--spacing-200) var(--spacing-300) calc(var(--spacing-200) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-lao__opts:empty {
  display: none;
}
.bcn-lao__opt {
  align-items: flex-start;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-lao__opt esa-checkbox {
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-lao__label {
  cursor: pointer;
  user-select: none;
  flex: 1;
  min-width: 0;
  line-height: 1.45;
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
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
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
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-overlay-hover` | `#00000008` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
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
