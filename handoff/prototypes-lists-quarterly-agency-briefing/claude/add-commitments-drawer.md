# Add commitments drawer

Commitment list · source prototype: https://esassoc.github.io/beacon-design/prototypes/lists/quarterly-agency-briefing/

![Add commitments drawer, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/add-commitments-drawer.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-lists-quarterly-agency-briefing/claude/add-commitments-drawer.phone.png

ONE flat checkbox list in code order, with search and a Source Document facet.

## Key decisions

- Andy rejected section folders and a nested parent/child checkbox group; keep it flat.
- The Source Document facet is kept with a single value, despite buildFacets' >1 rule.

## Components

- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-laf` (spoke) · `src/components/bcn/BcnListAddFilters.astro`
- `bcn-lam` (spoke) · `src/components/bcn/BcnListAddMembers.astro`
- `bcn-lao` (spoke) · `src/components/bcn/list-add.ts`
- `esa-checkbox` (hub) · `packages/ecology/src/components/esa-checkbox.ts`
- `esa-filter-clear-button` (hub) · `packages/ecology/src/components/esa-filter-clear-button.astro`
- `esa-filter-container` (hub) · `packages/ecology/src/components/esa-filter-container.astro`
- `esa-filter-dropdown` (hub) · `packages/ecology/src/components/esa-filter-dropdown.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

_280 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-lao">
  <esa-text-field
    size="sm"
    name="lam-search"
    aria-label="Search commitments"
    placeholder="Search by code or title"
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
        name="source"
        label="Source Document"
        placeholder="Search source document"
        size="sm"
        multiple=""
        options='[{"value":"Incidental Take Permit (ITP) 2081","label":"Incidental Take Permit (ITP) 2081"}]'
      ></esa-filter-dropdown
      ><span class="bcn-laf__clear" data-add-filters-clear="" hidden=""
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
  <p class="bcn-lao__nomatch" data-lam-nomatch="" hidden="">No commitments match.</p>
  <p class="bcn-lao__nomatch" data-lam-none="" hidden="">
    Every commitment in the registry is already on this list.
  </p>
  <div class="bcn-lao__tree" data-lam-tree="">
    <div data-lam-group="all">
      <ul class="bcn-lao__opts bcn-lam__opts bcn-lam__opts--flat">
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 4 ESA Consultation and ITP Precedence"
          data-item='{"memberId":"COA 4","id":"COA 4","title":"ESA Consultation and ITP Precedence","code":"COA 4","groupId":"COA 4","groupName":"COA 4","reqs":[{"id":"req_01M2ESMC0B9X341GWB1FC7JSGT","code":"COA 4","name":"Consult with CDFW on Federal Biological Opinion Terms"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 4"
          data-f-phase="Implementation Planning|Pre-Construction|Construction|Operations"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 4 ESA Consultation and ITP Precedence"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 4</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="ESA Consultation and ITP Precedence"
            >ESA Consultation and ITP Precedence</span
          >
        </li>
        <li
          class="bcn-lao__opt"
          data-lam-opt=""
          data-label="COA 6 Construction Phase Authorization Required Before Construction"
          data-item='{"memberId":"COA 6","id":"COA 6","title":"Construction Phase Authorization Required Before Construction","code":"COA 6","groupId":"COA 6","groupName":"COA 6","reqs":[{"id":"req_01M2ESMC3SG5TTMS74P5R5PTEA","code":"COA 6","name":"Obtain Construction Phase Authorization Before Each Phase"}],"source":"Incidental Take Permit (ITP) 2081"}'
          data-f-commitment="COA 6"
          data-f-phase="Pre-Construction|Construction|Maintenance"
          data-f-species=""
          data-f-source="Incidental Take Permit (ITP) 2081"
        >
          <esa-checkbox
            size="sm"
            aria-label="COA 6 Construction Phase Authorization Required Before Construction"
          ></esa-checkbox
          ><span class="bcn-cbadge bcn-cbadge--sm">COA 6</span
          ><span
            class="bcn-lao__label"
            data-opt-label=""
            data-text="Construction Phase Authorization Required Before Construction"
            >Construction Phase Authorization Required Before Construction</span
          >
        </li>
        <!-- …and 280 more like this (<li class="bcn-lao__opt">) -->
      </ul>
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
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lam__opts {
  padding-inline-start: calc(var(--spacing-200) + 22px);
}
.bcn-lam__opts--flat {
  padding-inline-start: var(--spacing-200);
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
.bcn-lao__cat[hidden],
.bcn-lao__sub[hidden],
.bcn-lao__opt[hidden] {
  display: none;
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-overlay-hover` | `#00000008` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--filter-container-padding` | `0` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
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
