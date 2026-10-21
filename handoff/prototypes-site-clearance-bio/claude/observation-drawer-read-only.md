# Observation drawer (read-only)

Site Clearance — Biological · source prototype: https://esassoc.github.io/beacon-design/prototypes/site-clearance-bio/

![Observation drawer (read-only), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/observation-drawer-read-only.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/observation-drawer-read-only.phone.png

The compact read-only counterpart to the write drawer (esa-side-dialog, 520px): an observation's facts (species code, kind, buffer distance, first observed), its latest field log, and — the reason it matters — the counted list of "Work areas within buffer" (each opening that site's write drawer). From a site you see its status; from an observation you see everything its buffer covers.

## Key decisions

- Read-only by design: an observation is a field FACT (a sighting), not a decision — you review the work area, you do not "edit" the bird.
- There is NO estimated-end date and no countdown — the observation carries no projection of when it stops mattering; it is active until the Monitoring Portal says otherwise. First observed is the only date, because it happened.
- The "Work areas within buffer" list reuses the same intersection that powers provisional-block detection and the grid's Work Areas Affected column — one computation, three surfaces.

## Gotchas

- A tracking-only sighting (buffer 0) still opens this drawer but its impact list is empty and it must never appear as affecting any work area.
- Impact rows show each covered site's DERIVED status chip — a reviewed site inside the buffer keeps its review color here too (the precedence rule is visible in this list).

## Done when

- Shows species/kind/buffer/first-observed + latest log (when present) + a counted "Work areas within buffer" list with derived-status chips; each row opens that work area's write drawer; no estimated-end or countdown renders anywhere.

## Components

- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`

## Markup

_25 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-side-dialog
  id="obs-dialog"
  size="md"
  style="--_width: 520px; --z-modal: 1300; --z-modal-backdrop: 1250"
  position="right"
  open=""
  ><div slot="header" class="wa__header">
    <div class="wa__headmain">
      <h2 class="wa__title" id="obs-title">Swainson's Hawk</h2>
      <span id="obs-chip"
        ><span class="bcn-status-chip" data-status="neutral" style="--_chip: var(--st-neutral)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">Active</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
      >
    </div>
    <p class="wa__subtitle" id="obs-sub">SWHA-2289-05182026</p>
  </div>
  <div class="wa">
    <div class="od__meta">
      <div class="bcn-key-value" data-size="md" data-layout="stack">
        <span class="bcn-key-value__key">Species code</span
        ><span class="wa__kv-val" id="obs-code">SWHA</span>
      </div>
      <div class="bcn-key-value" data-size="md" data-layout="stack">
        <span class="bcn-key-value__key">Kind</span
        ><span class="wa__kv-val" id="obs-kind">Nesting bird</span>
      </div>
      <!-- …and 2 more like this (<div class="bcn-key-value">) -->
    </div>
    <section id="obs-log-wrap">
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
            <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path>
            <path d="M2 6h4"></path>
            <!-- …and 4 more like this (<path>) -->
          </svg></span
        >Latest log
      </h3>
      <blockquote class="wa__note wa__note--log" id="obs-log">
        May 18, 2026, 1:31 PM: Active SWHA nest observed in tree during site clearance visit.
      </blockquote>
    </section>
    <section>
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
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="22" x2="18" y1="12" y2="12"></line>
            <line x1="6" x2="2" y1="12" y2="12"></line>
            <!-- …and 2 more like this (<line>) -->
          </svg></span
        >Work areas within buffer<span id="obs-impact-count"
          ><span class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
            ><span class="esa-badge__text">19</span></span
          ></span
        >
      </h3>
      <ul class="od__impact" id="obs-impact">
        <li class="entry entry--card" data-wa="DCRDS-DH-184" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCRDS-DH-184</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
            </p>
          </div>
          <span class="entry__meta">146 ft</span>
        </li>
        <li class="entry entry--card" data-wa="DCRDS-DH-183" tabindex="0" role="button">
          <span class="entry__badge entry__badge--wa">DCRDS-DH-183</span>
          <div class="entry__body">
            <p class="entry__line">
              <span class="entry__type">Work area</span><span class="entry__sep"> · </span
              ><span class="entry__primary">Boring</span>
              <span class="gate__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="provisional-block"
                  style="--_chip: var(--st-provisional-block)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Provisional Block</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              >
            </p>
          </div>
          <span class="entry__meta">702 ft</span>
        </li>
        <!-- …and 17 more like this (<li class="entry entry--card">) -->
      </ul>
    </section>
  </div>
  <div slot="footer" class="wa__footer">
    <!-- "Show on map" (round-5 ch5) — same jump as the work-area drawer's. --><span
      id="obs-showmap"
      class="wa__footer-start"
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label"
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
                <path
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle></svg></span
            >Show on map</span
          >
        </button></span
      ></span
    >
  </div></esa-side-dialog
>
```

## Styles

```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
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
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
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
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
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
.esa-button__label {
  white-space: nowrap;
}
.comp-picker__trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.entry {
  align-items: flex-start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
  display: flex;
}
.entry__badge {
  border-radius: var(--radius-100);
  font-family: var(--typography-font-family-mono, monospace);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 1px;
  padding: 0.125rem 0.375rem;
  line-height: 1.4;
}
.entry__badge--wa {
  color: var(--color-background-brand);
  background: color-mix(in srgb, var(--color-background-brand) 10%, white);
}
.entry__body {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.entry__line {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__type {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.entry__sep {
  color: var(--color-content-default-tertiary);
}
.entry__primary {
  color: var(--color-content-default);
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.entry__meta {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
  font-size: 0.8125rem;
}
.entry--card {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    background 0.12s,
    border-color 0.12s;
}
.entry--card:hover {
  background: var(--grid-row-bg-hover);
  border-color: var(--color-border-default-strong);
}
.bcn-status-chip[data-status="provisional-block"],
.bcn-grid-chip[data-status="provisional-block"],
.bcn-status-chip[data-status="provisional-block"] .bcn-status-chip__dot,
.bcn-grid-chip[data-status="provisional-block"] .bcn-grid-chip__dot {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 1.5px var(--st-provisional-block);
}
.wa {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.wa[hidden] {
  display: none;
}
.wa__header {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.wa__headmain {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.wa__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.wa__subtitle {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
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
.wa__footer {
  justify-content: flex-end;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.wa__footer [hidden] {
  display: none;
}
.wa__footer-start {
  margin-right: auto;
}
.wa__footer-start .esa-button__label {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.od__impact {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.od__impact .entry__meta {
  white-space: normal;
  max-width: 36%;
}
.wa__note {
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  color: var(--color-content-default-secondary);
  white-space: pre-line;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}
.wa__note--log {
  font-size: 0.9375rem;
}
.wa__note[hidden] {
  display: none;
}
.wa__activity .entry:not(.entry--empty) {
  padding: var(--spacing-200) 0;
}
.wa__activity .entry + .entry {
  border-top: 1px solid var(--color-border-default-subtle);
}
.od__meta {
  gap: var(--spacing-300) var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  grid-template-columns: 1fr 1fr;
  margin: 0;
  display: grid;
}
.wa__kv-val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--form-label-color` | `#525252` | component |
| `--grid-row-bg-hover` | `#efefef` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--st-provisional-block` | `#d73027` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
| `--typography-microcopy-xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-strong-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-strong-line-height` | `1` | semantic |
