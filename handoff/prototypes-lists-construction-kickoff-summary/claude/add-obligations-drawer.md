# Add obligations drawer

Obligation list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/construction-kickoff-summary/

![Add obligations drawer, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/add-obligations-drawer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-construction-kickoff-summary/claude/add-obligations-drawer.phone.png

A right-hand side panel with a searchable checkbox tree of every registry obligation the list does not already hold, with facet filters (Phase, Species, Category, Class).

## Key decisions

- Replaces prod's separate edit page: selection happens in a drawer over the list it changes.
- Facet values that differ only by case (the permit spells species both ways) are keyed lowercased.
- Search marks hits in a light-DOM label beside each esa-checkbox; clicking the label toggles the box.

## Gotchas

- esa-checkbox renders its label in shadow DOM with no slot, so a <mark> cannot reach it; the label must live beside the box.
- Escape inside an open filter dropdown closes the whole side dialog. Known lego behaviour.

## Done when

- Ticking obligations and saving adds them to the tree under their registry branches, with counts updated.

## Components

- `bcn-laf` (spoke) · `src/components/bcn/BcnListAddFilters.astro`
- `bcn-lao` (spoke) · `src/components/bcn/list-add.ts`
- `bcn-swcb` (spoke) · `src/components/bcn/BcnSwCountBadge.astro`
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-filter-clear-button` (hub) · `packages/ecology/src/components/esa-filter-clear-button.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

_24 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-lao">
  <esa-text-field
    size="sm"
    name="lao-search"
    aria-label="Search obligations"
    placeholder="Search by obligation title"
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
        options='[{"value":"bullfrogs","label":"Bullfrogs"},{"value":"california tiger salamander","label":"California tiger salamander"}… [713 characters]'
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
  <p class="bcn-lao__nomatch" data-lao-nomatch="" hidden="">No obligations match.</p>
  <div class="bcn-lao__tree" data-lao-tree="">
    <details class="bcn-lao__cat" data-lao-cat="agency">
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
        ><span class="bcn-lao__name">Agency reporting and approvals</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="2 obligations available">2</span></span
        >
      </summary>
      <div class="bcn-lao__subs">
        <details class="bcn-lao__sub" data-lao-sub="sightings-reporting">
          <summary class="bcn-lao__row bcn-lao__row--sub">
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
            ><span class="bcn-lao__name">Species sightings and CNDDB reporting</span
            ><span data-lao-count=""
              ><span class="bcn-swcb" aria-label="1 obligations available">1</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
              data-title="Biological Monitor daily communication and immediate reports to the Designated Biologist"
              data-class="notify"
              data-description="The Biological Monitor(s) shall receive training and direction from the Designated Biologist(s) or Fisheries Biologist(s) for each task performed, and shall communicate daily with the Designated Biologist(s) or Fisheries Biologist(s) and immediately report any occurrence of Covered Species within the Project construction site, as well as any apparent non-compliance with any provision of this ITP."
              data-cat-id="agency"
              data-cat-name="Agency reporting and approvals"
              data-sub-id="sightings-reporting"
              data-sub-name="Species sightings and CNDDB reporting"
              data-reqs='[{"id":"req_01M2ESMDCKEBRF744X854M9ESF","code":"COA 9.2.2","name":"Report Daily to Designated Biologist and Flag Non-Compliance"}]'
              data-f-commitment="COA 9"
              data-f-phase="Construction"
              data-f-species=""
              data-f-category="agency"
              data-f-class="notify"
            >
              <esa-checkbox
                size="sm"
                aria-label="Biological Monitor daily communication and immediate reports to the Designated Biologist"
              ></esa-checkbox
              ><span
                class="bcn-lao__label"
                data-opt-label=""
                data-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                >Biological Monitor daily communication and immediate reports to the Designated
                Biologist</span
              >
            </li>
          </ul>
        </details>
        <details class="bcn-lao__sub" data-lao-sub="take-reporting">
          <summary class="bcn-lao__row bcn-lao__row--sub">
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
            ><span class="bcn-lao__name">Take and injury reporting</span
            ><span data-lao-count=""
              ><span class="bcn-swcb" aria-label="1 obligations available">1</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFQ"
              data-title="Carcass salvage, labeling and storage for the wildlife health lab"
              data-class="adhere"
              data-description="The carcass shall be photographed, salvaged, and placed in a labeled, clean plastic, resealable bag or vial and stored in a freezer by the Designated Biologist(s) for shipment to CDFW Wildlife Health Lab."
              data-cat-id="agency"
              data-cat-name="Agency reporting and approvals"
              data-sub-id="take-reporting"
              data-sub-name="Take and injury reporting"
              data-reqs='[{"id":"req_01M2ESMS0VRXQZQ44TNN5TJ4N1","code":"COA 11.103","name":"Salvage and Label CBB Carcass for CDFW Lab"}]'
              data-f-commitment="COA 11"
              data-f-phase="Pre-Construction|Construction|Maintenance"
              data-f-species="crotch bumble bee"
              data-f-category="agency"
              data-f-class="adhere"
            >
              <esa-checkbox
                size="sm"
                aria-label="Carcass salvage, labeling and storage for the wildlife health lab"
              ></esa-checkbox
              ><span
                class="bcn-lao__label"
                data-opt-label=""
                data-text="Carcass salvage, labeling and storage for the wildlife health lab"
                >Carcass salvage, labeling and storage for the wildlife health lab</span
              >
            </li>
          </ul>
        </details>
      </div>
    </details>
    <details class="bcn-lao__cat" data-lao-cat="air">
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
        ><span class="bcn-lao__name">Air quality</span
        ><span data-lao-count=""
          ><span class="bcn-swcb" aria-label="12 obligations available">12</span></span
        >
      </summary>
      <div class="bcn-lao__subs">
        <details class="bcn-lao__sub" data-lao-sub="fugitive-dust">
          <summary class="bcn-lao__row bcn-lao__row--sub">
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
            ><span class="bcn-lao__name">Fugitive dust</span
            ><span data-lao-count=""
              ><span class="bcn-swcb" aria-label="12 obligations available">12</span></span
            >
          </summary>
          <ul class="bcn-lao__opts">
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXC"
              data-title="Access Route Surface Stabilization"
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction|Maintenance"
              data-f-species=""
              data-f-category="air"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Access Route Surface Stabilization"></esa-checkbox
              ><span
                class="bcn-lao__label"
                data-opt-label=""
                data-text="Access Route Surface Stabilization"
                >Access Route Surface Stabilization</span
              >
            </li>
            <li
              class="bcn-lao__opt"
              data-lao-opt=""
              data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXB"
              data-title="Dryer and Conveyor Enclosure"
              data-class="adhere"
              data-description="Permittee shall implement fugitive dust control measures and enhanced dust control measures at all construction and staging areas to reduce construction-related fugitive dust."
              data-cat-id="air"
              data-cat-name="Air quality"
              data-sub-id="fugitive-dust"
              data-sub-name="Fugitive dust"
              data-reqs='[{"id":"req_01M2ESMKGJBCK65KGGWNK6WZX8","code":"COA 11.29","name":"Implement Construction-Area Fugitive Dust BMPs"}]'
              data-f-commitment="COA 11"
              data-f-phase="Construction"
              data-f-species=""
              data-f-category="air"
              data-f-class="adhere"
            >
              <esa-checkbox size="sm" aria-label="Dryer and Conveyor Enclosure"></esa-checkbox
              ><span
                class="bcn-lao__label"
                data-opt-label=""
                data-text="Dryer and Conveyor Enclosure"
                >Dryer and Conveyor Enclosure</span
              >
            </li>
            <!-- …and 10 more like this (<li class="bcn-lao__opt">) -->
          </ul>
        </details>
      </div>
    </details>
    <!-- …and 12 more like this (<details class="bcn-lao__cat">) -->
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
.bcn-lao__subs {
  flex-direction: column;
  display: flex;
}
.bcn-lao__sub + .bcn-lao__sub {
  border-top: 1px solid var(--color-border-default-subtle);
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
.bcn-lao__row--sub {
  padding-left: calc(var(--spacing-200) + 22px);
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
