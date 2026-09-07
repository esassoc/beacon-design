# Facets rail

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

## Markup
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
      <div class="bcn-key-value">
        <span class="bcn-key-value__key">Class</span
        ><span class="bcn-key-value__val">Adhere</span
        ><span class="bcn-key-value__hint"
          >A rule the work follows while its conditions apply</span
        >
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
          <path d="M10 10V5a2 2 0 0 1 2-2 2 2 0 0 1 2 2v5"></path>
          <path d="M4 15v-3a6 6 0 0 1 6-6"></path>
          <path d="M14 6a6 6 0 0 1 6 6v3"></path>
          <rect width="20" height="4" x="2" y="15" rx="1"></rect></svg></span
      ><span class="esa-collapsible__title">Construction activities</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <ul class="bcn-ofacets__bullets">
        <li>Night work</li>
        <li>Vehicle travel on site</li>
      </ul>
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
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path></svg></span
      ><span class="esa-collapsible__title">Related commitments</span>
    </summary>
    <div class="esa-collapsible__body typography-body-md">
      <div class="stack bcn-ofacets__sources" data-gap="sm">
        <section>
          <h4 class="bcn-ofacets__source">DCP USFWS BiOp_2024_0029957_S7_001_03092026</h4>
          <ul class="bcn-ofacets__commits">
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >AMM-17</a
              ><span class="bcn-ofacets__commit-title"
                >Avoid and Minimize Impacts on Terrestrial Biological Resources from
                Maintenance Activities</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >AMM-18</a
              ><span class="bcn-ofacets__commit-title"
                >Avoid and Minimize Operational Traffic Impacts on Wildlife</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >AMM-14</a
              ><span class="bcn-ofacets__commit-title"
                >Construction Best Management Practices for Biological Resources</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >AMM-11</a
              ><span class="bcn-ofacets__commit-title">Fugitive Dust Control</span>
            </li>
          </ul>
        </section>
        <section>
          <h4 class="bcn-ofacets__source">EIR</h4>
          <ul class="bcn-ofacets__commits">
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >BIO-2b</a
              ><span class="bcn-ofacets__commit-title"
                >Avoid and Minimize Impacts on Terrestrial Biological Resources from
                Maintenance Activities (FEIR)</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >BIO-22b</a
              ><span class="bcn-ofacets__commit-title"
                >Avoid and Minimize Operational Traffic Impacts on Wildlife (FEIR)</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >EC-14</a
              ><span class="bcn-ofacets__commit-title"
                >Construction Best Management Practices for Biological Resources
                (FEIR)</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >EC-11</a
              ><span class="bcn-ofacets__commit-title">Fugitive Dust Control (FEIR)</span>
            </li>
          </ul>
        </section>
        <section>
          <h4 class="bcn-ofacets__source">Incidental Take Permit (ITP)</h4>
          <ul class="bcn-ofacets__commits">
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >COA 11.39</a
              ><span class="bcn-ofacets__commit-title">CTS Avoidance</span>
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >COA 11.41</a
              ><span class="bcn-ofacets__commit-title"
                >CTS Preconstruction Activities, SCADA and Transmission Line Construction
                and Maintenance, Access Road Construction and Maintenance Activities</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >COA 11.65</a
              ><span class="bcn-ofacets__commit-title"
                >GGS - Restoration of Temporary Impacts</span
              >
            </li>
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >COA 11.55</a
              ><span class="bcn-ofacets__commit-title">GGS Avoidance</span>
            </li>
          </ul>
        </section>
        <section>
          <h4 class="bcn-ofacets__source">
            Incidental Take Permit No. 2081-2024-018-00 (Amendment No. 1)
          </h4>
          <ul class="bcn-ofacets__commits">
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >COA 11.11</a
              ><span class="bcn-ofacets__commit-title">Speed Limits</span>
            </li>
          </ul>
        </section>
        <section>
          <h4 class="bcn-ofacets__source">Source not recorded</h4>
          <ul class="bcn-ofacets__commits">
            <li class="bcn-ofacets__commit">
              <a class="bcn-ofacets__commit-code" href="#data-catalog/commitments"
                >11.29</a
              ><span class="bcn-ofacets__commit-title"
                >Title not in the commitment library</span
              >
            </li>
          </ul>
        </section>
      </div>
    </div>
  </details>
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
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
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
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
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
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
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
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--form-label-color`: #525252 _(component)_
- `--gap`: 1rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
