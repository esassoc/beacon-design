# Permit editor (write surface)

Permit Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracking/

![Permit editor (write surface), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/permit-editor-write-surface.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/permit-editor-write-surface.phone.png

The write surface (esa-side-dialog, 640px): edit a permit's Status, Timing (submitted / estimated / actual approval), and Segment applicability; read its Details (agency / level / type — source-document data); collaborate in a Comments thread (@-mention); and read the Activity log. Saving re-derives status across the entire feature.

## Key decisions

- Sectioned with icon-led heads: Status (esa-select), Timing (esa-date-picker ×3), Segments (esa-input-tag, strict + tags-below — segments are a fixed vocabulary), then read-only Details (BcnKeyValue), Comments, and Activity.
- Details are READ-ONLY: agency/level/type are source-document facts; this drawer edits status, timing, and applicability — not the permit's identity.
- Comments (BCN-1364) is a real collaboration thread DISTINCT from the read-only Activity log: an esa-textarea compose with an @-mention typeahead that feeds notifications; it is rendered live per-permit (so it cannot be the static BcnDiscussion SSR component).
- Activity is seeded from the permit's own dates so it reads with history on day one, and grows as edits land. Save re-derives everywhere; Cancel discards.

## Gotchas

- Saving MUST re-derive and repaint every dependent surface (map lines, chips, grids, mileage strip, timeline, insights, exec rollup) from the updated store — the editor is the origin of the whole re-derivation cascade.
- Segment applicability is strict (fixed vocabulary) — do not allow free-text segment tags.
- The @-mention menu is a live typeahead over project users; mentions drive the notification rules (see the settings dialog), so keep the user list and the notify path connected.
- z-stack: editor at --z-modal 1340 so it stacks above the segment drawer (1300) it can be opened from.

## Done when

- Opening a permit shows editable Status/Timing/Segments, read-only Details, a live Comments thread with @-mention, and a seeded Activity log; Save re-derives status across the map, grids, and rollup; Cancel discards.

## Components

- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-date-picker` (hub) · `packages/ecology/src/components/esa-date-picker.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-input-tag` (hub) · `packages/ecology/src/components/esa-input-tag.ts`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

_4 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-side-dialog
  id="permit-dialog"
  size="md"
  style="--_width: 640px; --z-modal: 1340; --z-modal-backdrop: 1310"
  position="right"
  open=""
  ><div slot="header" class="pd__header">
    <h2 class="pd__title" id="pd-title">County Right-of-Way Permit</h2>
    <span id="pd-chip"
      ><span class="bcn-status-chip" data-status="submitted" style="--_chip: var(--st-submitted)"
        ><span class="bcn-status-chip__dot"></span
        ><span class="bcn-status-chip__label">Submitted</span></span
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
  <div class="pd">
    <section class="pd__section">
      <h3 class="pd__section-head">
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
            <circle cx="12" cy="12" r="1"></circle></svg></span
        >Status
      </h3>
      <div class="pd__group"><esa-select id="pd-status" size="md"></esa-select></div>
    </section>
    <section class="pd__section">
      <h3 class="pd__section-head">
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
            <polyline points="12 6 12 12 16 14"></polyline></svg></span
        >Timing
      </h3>
      <div class="pd__group">
        <div class="pd__row">
          <esa-date-picker id="pd-submitted" label="Submitted date" size="md"></esa-date-picker
          ><esa-date-picker
            id="pd-estimated"
            label="Estimated approval"
            size="md"
          ></esa-date-picker>
        </div>
        <esa-date-picker id="pd-actual" label="Actual approval" size="md"></esa-date-picker>
      </div>
    </section>
    <!-- …and 4 more like this (<section class="pd__section">) --><!-- Details are READ-ONLY: agency / level / type are source-document data —
           this drawer edits permit status, timing, and segment applicability. --><!-- Comments (BCN-1364) — a collaboration thread, DISTINCT from the read-only
           Activity log below. @-mention project users (feeds notifications). --><!-- Change log — seeded from the permit's own dates, grows as edits land -->
  </div>
  <div slot="footer" class="pd__footer">
    <span id="pd-cancel"
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    ><span id="pd-save"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Save</span>
        </button></span
      ></span
    >
  </div></esa-side-dialog
>
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
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
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
.esa-button__label {
  white-space: nowrap;
}
.ins-row {
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-200) 0;
  display: flex;
}
.ins-row + .ins-row {
  border-top: 1px solid var(--color-border-default-subtle);
}
.ins-row[data-ins-permit] {
  cursor: pointer;
  margin: 0 calc(-1 * var(--spacing-200));
  padding-inline: var(--spacing-200);
  border-radius: var(--radius-200);
}
.ins-row[data-ins-permit]:hover {
  background: var(--grid-row-bg-hover);
}
.ins-row__label {
  min-width: 0;
  color: var(--color-content-default);
  flex-direction: column;
  flex: 1;
  gap: 1px;
  font-size: 0.875rem;
  display: flex;
}
.ins-row__sub {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.ins-row__val {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  display: flex;
}
.pd__activity {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.sd-permit__btn .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.pd {
  flex-direction: column;
  display: flex;
}
.pd__header {
  align-items: center;
  gap: var(--spacing-300);
  flex: 1;
  min-width: 0;
  display: flex;
}
.pd__title {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.pd__section {
  padding-block: var(--spacing-400);
}
.pd__section:first-child {
  padding-top: var(--spacing-100);
}
.pd__section + .pd__section {
  border-top: 1px solid var(--color-border-default-subtle);
}
.pd__section-head {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.pd__section-head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.pd__group {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.pd__row {
  gap: var(--spacing-300);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.pd__kv-val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.pd__footer {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.pd__comments {
  margin: 0 0 var(--spacing-300);
  gap: var(--spacing-400);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.pd-comment {
  gap: var(--spacing-300);
  grid-template-columns: auto minmax(0, 1fr);
  align-items: start;
  display: grid;
}
.pd-comment__avatar {
  background: var(--_c, var(--color-background-brand-muted));
  color: #fff;
  width: 28px;
  height: 28px;
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-bold);
  letter-spacing: 0.02em;
  border-radius: 50%;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.pd-comment__body {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.pd-comment__meta {
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.pd-comment__author {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.pd-comment__time {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.pd-comment__text {
  color: var(--color-content-default);
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}
.pd-mention {
  color: var(--color-background-brand);
  font-weight: var(--typography-font-weight-semibold);
  background: color-mix(in srgb, var(--color-background-brand) 10%, transparent);
  border-radius: var(--radius-050);
  padding: 0 2px;
}
.pd-mention--me {
  color: var(--st-cleared);
  background: color-mix(in srgb, var(--st-cleared) 14%, transparent);
}
.pd-badge {
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-sunken);
  min-width: 18px;
  height: 18px;
  color: var(--color-content-default-secondary);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-bold);
  vertical-align: middle;
  margin-left: var(--spacing-100);
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  display: inline-flex;
}
.pd__compose {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.pd__compose-field {
  position: relative;
}
.pd__compose-field esa-textarea {
  width: 100%;
}
.pd__mention-menu {
  z-index: 5;
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  box-shadow: var(--elevation-5);
  max-height: 208px;
  margin: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  overflow-y: auto;
}
.pd__mention-menu[hidden] {
  display: none;
}
.pd__compose-foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.pd__compose-hint {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
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
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--elevation-5` | `0 8px 32px -8px #00000014` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--form-label-color` | `#525252` | component |
| `--grid-row-bg-hover` | `#efefef` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-050` | `.125rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--st-cleared` | `#1a9850` | component |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
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
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
