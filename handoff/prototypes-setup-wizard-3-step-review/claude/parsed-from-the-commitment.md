# Parsed from the commitment

Step 2 — Commitments · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/review/

![Parsed from the commitment, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step-review/claude/parsed-from-the-commitment.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step-review/claude/parsed-from-the-commitment.phone.png

Everything parsed out of the commitment: its requirements in text order, each with the ink it is highlighted in, its ID, its name, its type and an Edit key; Not tracked (N), shown only when there are any: each sentence under the wavy rule, quoted and cut to three lines, with Make a requirement (its record opens to edit) and Not binding, both small ghost keys; hovering one lights its words in the text; then a roll-up of what they link to, by kind: species, milestones, phases, construction activities, seasons. An empty kind is one quiet line ("None"). Hover a row and the text lights the words it came from; click a requirement to select it.

## Key decisions

- A requirement's ID is its commitment's, a colon, and its place in the text (Beacon's DisplayIndex): 11.3:2, CMP-14:2. A colon because a dot is ITP sub-numbering (11.42.1 is a commitment) and a dash is in MMRP codes. A split or an added requirement renumbers those after it. Aldo reads and says IDs ("remove 11.2:2").
- The kinds are Beacon's Requirement links (RequirementSpecies, RequirementMilestone, RequirementPhase, RequirementConstructionActivity, RequirementSeason). Timing, party and deliverable are not here: they belong to the actions the Compliance Index makes.
- An entity phrasing Beacon would fold into another carries Merge and Keep separate on its row: the project's entities are reviewed where they are used.

## Components

- `bcn-sw3at` (spoke) · `src/components/bcn/BcnSw3Attributes.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_8 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-sw3at" data-sw3-attrs="">
  <section class="bcn-sw3at__sec" data-at-sec="req">
    <h3 class="bcn-sw3at__h">
      Requirements
      <span data-at-count=""
        ><span class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
          ><span class="esa-badge__text">3</span></span
        ></span
      >
    </h3>
    <ol class="bcn-sw3at__reqs" data-at-reqs="">
      <li
        class="bcn-sw3at__req"
        data-req="coa-11-1-1"
        tabindex="0"
        role="button"
        aria-pressed="false"
      >
        <span class="bcn-sw3at__n" data-ink="1" data-suggested="" aria-hidden="true"></span
        ><span class="bcn-sw3at__reqtext"
          ><span class="bcn-sw3at__reqname"
            ><span class="bcn-sw3at__reqid">11.1:1</span>Report Covered Species Encounters and Halt
            Work</span
          ><span class="bcn-sw3at__reqtype">Avoidance &amp; BMPs</span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Edit requirement"
            title="Edit requirement"
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
            ></span></button
        ></span>
      </li>
      <li
        class="bcn-sw3at__req"
        data-req="coa-11-1-2"
        tabindex="0"
        role="button"
        aria-pressed="false"
      >
        <span class="bcn-sw3at__n" data-ink="2" data-suggested="" aria-hidden="true"></span
        ><span class="bcn-sw3at__reqtext"
          ><span class="bcn-sw3at__reqname"
            ><span class="bcn-sw3at__reqid">11.1:2</span>Relocate Trapped Covered Species by
            Designated Biologist</span
          ><span class="bcn-sw3at__reqtype">Avoidance &amp; BMPs</span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Edit requirement"
            title="Edit requirement"
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
            ></span></button
        ></span>
      </li>
      <li
        class="bcn-sw3at__req"
        data-req="coa-11-1-3"
        tabindex="0"
        role="button"
        aria-pressed="false"
      >
        <span class="bcn-sw3at__n" data-ink="3" data-suggested="" aria-hidden="true"></span
        ><span class="bcn-sw3at__reqtext"
          ><span class="bcn-sw3at__reqname"
            ><span class="bcn-sw3at__reqid">11.1:3</span>Record and Report Covered Species Sightings
            to CDFW</span
          ><span class="bcn-sw3at__reqtype">Reporting</span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Edit requirement"
            title="Edit requirement"
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
            ></span></button
        ></span>
      </li>
    </ol>
  </section>
  <section class="bcn-sw3at__sec" data-at-sec="gap" hidden="">
    <h3 class="bcn-sw3at__h">
      Not tracked
      <span data-at-count=""
        ><span class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
          ><span class="esa-badge__text">0</span></span
        ></span
      >
    </h3>
    <ul class="bcn-sw3at__list" data-at-gaps=""></ul>
  </section>
  <!-- …and 5 more like this (<section class="bcn-sw3at__sec">) --><!-- Keys the controller clones per row. --><template
    data-at-tpl="edit"
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
      data-astro-cid-5nhxdd72=""
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        aria-label="Edit requirement"
        title="Edit requirement"
        data-astro-cid-e4wmksru="true"
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
            <path
              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
            ></path>
            <path d="m15 5 4 4"></path></svg
        ></span></button></span></template
  ><template data-at-tpl="track"
    ><span
      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
      data-astro-cid-5nhxdd72=""
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        data-astro-cid-e4wmksru="true"
        data-astro-cid-5nhxdd72=""
      >
        <span class="esa-button__label" data-astro-cid-5nhxdd72="">Make a requirement</span>
      </button></span
    ></template
  ><!-- …and 3 more like this (<template>) -->
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
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
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
.bcn-sw3at {
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  line-height: 1.35;
  display: flex;
}
.bcn-sw3at__sec {
  gap: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-400);
  border-bottom: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-sw3at__sec:last-child {
  border-bottom: 0;
}
.bcn-sw3at__sec[hidden] {
  display: none;
}
.bcn-sw3at .bcn-sw3at__gap {
  gap: var(--spacing-150);
  padding: var(--spacing-150) var(--spacing-200);
  margin: 0 calc(-1 * var(--spacing-200));
  border-radius: var(--radius-100);
  flex-direction: column;
  display: flex;
}
.bcn-sw3at .bcn-sw3at__gap:hover {
  background: var(--color-background-default-hover);
}
.bcn-sw3at .bcn-sw3at__gap[data-selected] {
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 0 0 1px var(--color-border-default);
}
.bcn-sw3at .bcn-sw3at__quote {
  -webkit-line-clamp: 3;
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  text-decoration: underline wavy var(--bcn-aldo);
  text-underline-offset: 4px;
  quotes: "“" "”";
  -webkit-box-orient: vertical;
  text-decoration-thickness: 1px;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-sw3at .bcn-sw3at__gapkeys {
  gap: var(--spacing-150);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3at__h {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
}
.bcn-sw3at__none {
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-sw3at__none[hidden] {
  display: none;
}
.bcn-sw3at__reqs,
.bcn-sw3at__list {
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw3at__list:empty {
  display: none;
}
.bcn-sw3at .bcn-sw3at__req {
  align-items: start;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-200);
  margin: 0 calc(-1 * var(--spacing-200));
  border-radius: var(--radius-100);
  cursor: pointer;
  grid-template-columns: auto minmax(0, 1fr) auto;
  display: grid;
}
.bcn-sw3at .bcn-sw3at__req:hover {
  background: var(--color-background-default-hover);
}
.bcn-sw3at .bcn-sw3at__req[data-selected] {
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 0 0 1px var(--color-border-default);
}
.bcn-sw3at .bcn-sw3at__req:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-sw3at .bcn-sw3at__n {
  background: var(--bcn-marker-1) center / 100% 100% no-repeat;
  width: 1.125rem;
  height: 0.75rem;
  margin-top: 3px;
}
.bcn-sw3at .bcn-sw3at__n:not([data-ink]) {
  background: 0 0;
}
.bcn-sw3at .bcn-sw3at__n[data-ink="2"] {
  background-image: var(--bcn-marker-2);
}
.bcn-sw3at .bcn-sw3at__n[data-ink="3"] {
  background-image: var(--bcn-marker-3);
}
.bcn-sw3at .bcn-sw3at__n[data-ink="4"] {
  background-image: var(--bcn-marker-4);
}
.bcn-sw3at .bcn-sw3at__n[data-ink="5"] {
  background-image: var(--bcn-marker-5);
}
.bcn-sw3at .bcn-sw3at__n[data-ink="6"] {
  background-image: var(--bcn-marker-6);
}
.bcn-sw3at .bcn-sw3at__reqtext {
  flex-direction: column;
  gap: 1px;
  min-width: 0;
  display: flex;
}
.bcn-sw3at .bcn-sw3at__reqname {
  font-weight: 500;
}
.bcn-sw3at .bcn-sw3at__reqid {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  margin-right: 0.4em;
}
.bcn-sw3at .bcn-sw3at__reqtype {
  color: var(--color-content-default-secondary);
  font-size: 0.75rem;
}
.bcn-sw3at .bcn-sw3at__reqtype[data-unsure]:after {
  content: " (unsure)";
  color: var(--bcn-aldo);
}
.bcn-sw3at .bcn-sw3at__item {
  align-items: baseline;
  gap: var(--spacing-100) var(--spacing-200);
  padding: 3px var(--spacing-200);
  margin: 0 calc(-1 * var(--spacing-200));
  border-radius: var(--radius-100);
  flex-wrap: wrap;
  transition: opacity 0.12s;
  display: flex;
}
.bcn-sw3at .bcn-sw3at__item:hover {
  background: var(--color-background-default-hover);
}
.bcn-sw3at .bcn-sw3at__item[data-dim],
.bcn-sw3at .bcn-sw3at__req[data-dim] {
  opacity: 0.4;
}
.bcn-sw3at .bcn-sw3at__name {
  flex: 1;
  min-width: 8rem;
}
.bcn-sw3at .bcn-sw3at__merge {
  align-items: center;
  gap: var(--spacing-150);
  width: 100%;
  padding: var(--spacing-150) var(--spacing-200);
  border-radius: var(--radius-100);
  background: var(--color-background-warning-subtle);
  flex-wrap: wrap;
  font-size: 0.75rem;
  display: flex;
}
.bcn-sw3at .bcn-sw3at__merge > span {
  flex: 100%;
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-marker-1` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffeb5c' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23f5d52e' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23f5d52e' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E")` | component |
| `--bcn-marker-2` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffa8d2' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23f783bd' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23f783bd' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E")` | component |
| `--bcn-marker-3` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23b6f28c' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%2393e063' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%2393e063' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E")` | component |
| `--bcn-marker-4` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffc56e' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23fbaa45' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23fbaa45' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E")` | component |
| `--bcn-marker-5` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%239fd9ff' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%2372c3f7' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%2372c3f7' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E")` | component |
| `--bcn-marker-6` | `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%238ff0de' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%235fe0c8' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%235fe0c8' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E")` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#fcfcfc` | semantic |
| `--color-background-default-hover` | `#e8e8e8` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-warning-subtle` | `#fefdfb` | component |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#3d3d3d` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
| `--typography-microcopy-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-strong-line-height` | `1` | semantic |
