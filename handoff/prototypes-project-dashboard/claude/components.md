# Components

Project Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/project-dashboard/

![Components, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-project-dashboard/claude/components.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-project-dashboard/claude/components.phone.png

The components the user works in, as portal cards into their component dashboards, each carrying a Tracking / Monitoring / Reporting pulse so a component's health reads across all three at a glance. A PROJECT-WIDE row leads the list, answering the review's question of whether "the project view is inclusive of components or not."

## Key decisions

- The project-wide row uses the same card anatomy with a folder glyph and no star — it is always present and cannot be unstarred. Its pulses count actions with no component.
- Stars are PER-USER — a personal lens, not a team designation (a user-preference keyed user × component).
- For slice 1 the only star affordance is A STAR COLUMN ON THE ALL-COMPONENTS LIST: "I think we could add a star column here for now." The full starring UX belongs to the Component Dashboard epic (BCN-1412).
- A user with no stars should see the most active components rather than an empty section — the homepage centre is never blank.
- No headline row: the three pulses carry the story (an editorial one-liner per component was tried and removed).

## Gotchas

- The two prototypes must agree on the starring model — Component Dashboard (BCN-1412) is queued directly behind this epic and owns the richer starring UX.
- Card text maps to real DTO fields: name → Component.Name, the classifier line → Component.Description, and the trailing status → ComponentStatus.Name shown only when it is not "Active". Do not synthesize prose here.

## Done when

- A project-wide row leads the list, followed by the user's starred components; each card shows three pulses and opens that component's dashboard; stars are visible per-user and can be set from the all-components list.

## Components

- `bcn-stc` (spoke) · `src/components/bcn/BcnStarredComponents.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="bcn-stc" aria-label="Components">
  <header class="bcn-stc__head">
    <!-- No lede — the starred cards and their pulses are self-describing
         (data-grounded review, 2026-08-03). -->
    <div class="bcn-stc__headings">
      <h2 class="bcn-stc__title typography-heading-md">Components</h2>
    </div>
    <a class="bcn-stc__all" href="/beacon-design/prototypes/component-dashboard"
      >All 24 components
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
          <path d="m9 18 6-6-6-6"></path></svg></span
    ></a>
  </header>
  <div class="bcn-stc__list">
    <div class="bcn-stc__card bcn-stc__card--scope">
      <a
        class="bcn-stc__portal"
        href="/beacon-design/prototypes/requirement-tracker"
        aria-label="Open project-scoped tracking"
      ></a>
      <div class="bcn-stc__main">
        <div class="bcn-stc__card-head">
          <span class="bcn-stc__glyph bcn-stc__glyph--scope"
            ><span class="esa-icon esa-icon--md" aria-hidden="true"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path
                  d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2z"
                ></path>
                <path d="M2 8v11a2 2 0 0 0 2 2h14"></path></svg></span></span
          ><span class="bcn-stc__ident"
            ><span class="bcn-stc__name">Project-wide</span
            ><!-- The identity line is the project record itself — the component
                 rows carry Component.Description in this slot, so this one
                 carries Project.Name rather than a definition of the scope. --><span
              class="bcn-stc__type"
              >Delta Conveyance Project</span
            ></span
          >
        </div>
      </div>
      <ul class="bcn-stc__pulse">
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-background-utility-warning)"
            aria-hidden="true"
          ></span
          ><span class="bcn-stc__pulse-area">Tracking</span
          ><span class="bcn-stc__pulse-note">2 actions · 1 overdue</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--bcn-status-not-started)"
            aria-hidden="true"
          ></span
          ><span class="bcn-stc__pulse-area">Monitoring</span
          ><span class="bcn-stc__pulse-note">No actions</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-background-utility-warning)"
            aria-hidden="true"
          ></span
          ><span class="bcn-stc__pulse-area">Reporting</span
          ><span class="bcn-stc__pulse-note">4 actions · 1 overdue</span>
        </li>
      </ul>
    </div>
    <div class="bcn-stc__card">
      <a
        class="bcn-stc__portal"
        href="/beacon-design/prototypes/component-dashboard"
        aria-label="Open the Bouldin Island Geotechnical Exploration component dashboard"
      ></a
      ><span class="bcn-stc__star" data-star-toggle=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Unstar Bouldin Island Geotechnical Exploration"
            title="Unstar Bouldin Island Geotechnical Exploration"
            aria-pressed="true"
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
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                ></path></svg
            ></span></button></span
      ></span>
      <div class="bcn-stc__main">
        <div class="bcn-stc__card-head">
          <span class="bcn-stc__glyph"
            ><span class="esa-icon esa-icon--md" aria-hidden="true"
              ><svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                focusable="false"
              >
                <path
                  d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                ></path>
                <path d="M3.29 7 12 12l8.71-5"></path>
                <path d="M12 22V12"></path></svg></span></span
          ><span class="bcn-stc__ident"
            ><span class="bcn-stc__name">Bouldin Island Geotechnical Exploration</span
            ><span class="bcn-stc__type">Geotechnical exploration — Bouldin Island</span></span
          >
        </div>
      </div>
      <ul class="bcn-stc__pulse">
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-background-utility-warning)"
            aria-hidden="true"
          ></span
          ><span class="bcn-stc__pulse-area">Tracking</span
          ><span class="bcn-stc__pulse-note">3 overdue actions</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-background-utility-danger)"
            aria-hidden="true"
          ></span
          ><span class="bcn-stc__pulse-area">Monitoring</span
          ><span class="bcn-stc__pulse-note">Survey expired Mar 24</span>
        </li>
        <li class="bcn-stc__pulse-row">
          <span
            class="bcn-stc__dot"
            style="--_c: var(--color-background-utility-success)"
            aria-hidden="true"
          ></span
          ><span class="bcn-stc__pulse-area">Reporting</span
          ><span class="bcn-stc__pulse-note">Nothing due</span>
        </li>
      </ul>
    </div>
    <!-- …and 3 more like this (<div class="bcn-stc__card bcn-stc__card--scope">) -->
  </div>
</section>
```

## Styles

```css
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
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
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
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
.bcn-stc {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-stc__head {
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-stc__headings {
  gap: var(--spacing-100);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-stc__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-stc__all {
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  white-space: nowrap;
  display: inline-flex;
}
.bcn-stc__all:hover {
  color: var(--color-background-brand-hover);
}
.bcn-stc__list {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-stc__card {
  align-items: center;
  gap: var(--spacing-500);
  padding: var(--spacing-400) var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
  transition:
    border-color 0.15s,
    box-shadow 0.15s,
    transform 0.15s;
  display: grid;
  position: relative;
}
.bcn-stc__portal {
  border-radius: var(--radius-300);
  position: absolute;
  inset: 0;
}
.bcn-stc__portal:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: -2px;
}
.bcn-stc__star {
  top: var(--spacing-200);
  right: var(--spacing-200);
  z-index: 1;
  position: absolute;
}
.bcn-stc__star button[aria-pressed="true"] {
  color: var(--color-background-utility-warning);
}
.bcn-stc__star button[aria-pressed="true"] svg {
  fill: currentColor;
}
.bcn-stc__card:hover {
  border-color: var(--color-border-default-strong);
  box-shadow: var(--elevation-2, 0 2px 12px 0 #0000000f);
  transform: translateY(-1px);
}
@media (width<=720px) {
  .bcn-stc__card {
    gap: var(--spacing-300);
    grid-template-columns: 1fr;
  }
}
.bcn-stc__main {
  gap: var(--spacing-300);
  min-width: 0;
  padding-right: var(--spacing-500);
  border-right: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-stc__card-head {
  align-items: flex-start;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-stc__glyph--scope {
  background: var(--color-background-elevation-sunken) !important;
  color: var(--color-content-default-secondary) !important;
}
.bcn-stc__glyph {
  border-radius: var(--radius-200);
  background: color-mix(
    in srgb,
    var(--color-background-brand) 10%,
    var(--color-background-elevation-raised)
  );
  width: 36px;
  height: 36px;
  color: var(--color-background-brand);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-stc__ident {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-stc__name {
  font-size: var(--font-size-250, 1.0625rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: var(--line-height-tight);
}
.bcn-stc__type {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
}
.bcn-stc__dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
  width: 9px;
  height: 9px;
}
.bcn-stc__pulse {
  padding: 0 var(--spacing-600) 0 0;
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
@media (width<=720px) {
  .bcn-stc__main {
    border-right: 0;
    padding-right: 0;
  }
}
@media (width<=720px) {
  .bcn-stc__pulse {
    padding: var(--spacing-300) 0 0;
    border-top: 1px solid var(--color-border-default-subtle);
  }
}
.bcn-stc__pulse-row {
  align-items: center;
  gap: var(--spacing-200);
  grid-template-columns: auto 6rem 1fr;
  min-width: 0;
  display: grid;
}
.bcn-stc__pulse-area {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-stc__pulse-note {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
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
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
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
| `--bcn-content-muted` | `#7c7c7c` | component |
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
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--line-height-tight` | `1.3` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-heading-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-heading-md-font-size` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | semantic |
| `--typography-heading-md-font-weight` | `550` | semantic |
| `--typography-heading-md-letter-spacing` | `-.01em` | semantic |
| `--typography-heading-md-line-height` | `1.3` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
