# Facets rail

Obligation detail (Data Catalog) · source prototype: https://esassoc.github.io/beacon-design/prototypes/data-catalog-obligation/1-087/

![Facets rail, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligation-1-087/claude/facets-rail.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-obligation-1-087/claude/facets-rail.phone.png

The rail: Details, nested Subjects, Construction activities, Species, and Related commitments — a stack of esa-collapsible sections, all open, each a small list rather than a wall of badges.

## Key decisions

- SUBJECTS ARE NESTED major→minors, using the data-catalog lineage treatment rather than a flat pill row. An obligation belongs to every category that fits, so this is a small forest (several majors, each with its minors), not a path.
- ACTIVITIES ARE A BULLETED LIST and named "Construction activities" to match what the Action side calls them — prod models this as ActionProjectConstructionActivity.
- COMMITMENTS CARRY THEIR TITLES and group under the SOURCE DOCUMENT that states them. src/data/dcp-commitments.json resolves 1138 of 1270 references (90%) to a title, a category and a real source document. This is where normalization becomes legible: the speed-limit record is stated four times in the USFWS BiOp, four in the EIR, four in the ITP and once in the Amendment.
- An id that does not resolve keeps its code and sits under "Source not recorded", with the title replaced by an explicit line. It is NEVER guessed from the id prefix.
- The commitment row puts the code ABOVE the title, not beside it: titles run past 60 characters and a two-column row would either clip them or leave the code column mostly empty.
- A section whose field is absent renders nothing at all — 44% carry no species, and only the Notify class has a window. An empty heading reads as missing data rather than as inapplicable.

## Gotchas

- THE RAIL IS NOW TALLER THAN THE MAIN COLUMN on records with many commitments — fourteen titled commitments run roughly ten times the height of fourteen badges. That is the direct cost of showing titles, and it leaves a visible gap above the full-width scope table. If it needs fixing, cap the commitment list with a disclosure rather than reverting to codes.
- Category PILLS show display names but the record stores category IDS; the lookup is built once in src/data/obligations.ts. Do not denormalize names onto the row or the registry and the record can drift.

## Done when

- Subjects render as majors with their minors indented beneath a hairline, with no list markers.
- On the exemplar, Subjects shows Air quality → Fugitive dust, Birds → Burrowing owl, Site conduct → Speed limits.
- Related commitments shows five groups including "Source not recorded" for the one unresolved id (11.29), and COA 11.11 resolves to "Speed Limits".
- The Species section is absent on the exemplar, which carries none.

## Components

- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-ofacets` (spoke) · `src/components/bcn/BcnObligationFacets.astro`
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_2 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="stack bcn-ofacets" data-gap="md">
  <details class="esa-collapsible" open="">
    <summary class="esa-collapsible__summary typography-label-sm-strong">
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
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path></svg></span
      ><span class="esa-collapsible__title">Details</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <div class="bcn-key-value" data-size="md" data-layout="stack">
        <span class="bcn-key-value__key">Class</span><span class="bcn-key-value__val">Adhere</span
        ><span class="bcn-key-value__hint">A rule the work follows while its conditions apply</span>
      </div>
    </div>
  </details>
  <details class="esa-collapsible" open="">
    <summary class="esa-collapsible__summary typography-label-sm-strong">
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
          <line x1="6" x2="6" y1="3" y2="15"></line>
          <circle cx="18" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M18 9a9 9 0 0 1-9 9"></path></svg></span
      ><span class="esa-collapsible__title">Subjects</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <ol class="bcn-ofacets__tree">
        <li class="bcn-ofacets__major">
          <span class="bcn-ofacets__major-name">Air quality</span>
          <ul class="bcn-ofacets__minors">
            <li class="bcn-ofacets__minor">Fugitive dust</li>
          </ul>
        </li>
        <li class="bcn-ofacets__major">
          <span class="bcn-ofacets__major-name">Birds</span>
          <ul class="bcn-ofacets__minors">
            <li class="bcn-ofacets__minor">Burrowing owl</li>
          </ul>
        </li>
        <li class="bcn-ofacets__major">
          <span class="bcn-ofacets__major-name">Site conduct</span>
          <ul class="bcn-ofacets__minors">
            <li class="bcn-ofacets__minor">Speed limits</li>
          </ul>
        </li>
      </ol>
    </div>
  </details>
  <!-- …and 2 more like this (<details class="esa-collapsible">) -->
</div>
```

## Styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: var(--_aldo-gap);
}
.bcn-aldo-panel__side .bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: 0 var(--spacing-200);
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.bcn-ofacets__tree {
  gap: var(--spacing-250);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ofacets__major-name {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: block;
}
.bcn-ofacets__minors {
  margin: var(--spacing-100) 0 0;
  border-inline-start: 1px solid var(--color-border-default);
  flex-direction: column;
  gap: 1px;
  padding-inline-start: var(--spacing-300);
  list-style: none;
  display: flex;
}
.bcn-ofacets__minor {
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
}
.bcn-ofacets__bullets {
  color: var(--color-content-default-secondary);
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding-inline-start: var(--spacing-400);
  font-size: 0.875rem;
  display: flex;
}
.bcn-ofacets__source {
  margin: 0 0 var(--spacing-100);
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--bcn-content-muted);
}
.bcn-ofacets__commits {
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ofacets__commit {
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-ofacets__commit-code {
  font-variant-numeric: tabular-nums;
  color: var(--color-content-link);
  font-size: 0.8125rem;
}
.bcn-ofacets__commit-title {
  color: var(--color-content-default);
  font-size: 0.875rem;
  line-height: 1.4;
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
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
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--form-label-color` | `#525252` | component |
| `--gap` | `1rem` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
