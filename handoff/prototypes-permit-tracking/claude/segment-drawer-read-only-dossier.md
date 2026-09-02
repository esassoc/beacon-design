# Segment drawer (read-only dossier)

The read-only segment dossier (esa-side-dialog, 640px), reachable from BOTH tabs (map click, clear-to-build row, or segments grid). It shows the segment's identity + derived status, its meta (path, build phase, projected clear-to-build, length, jurisdiction, contractor), and the list of covering permits — with the GATING permit flagged. Each covering permit jumps to its editor.

## Key decisions
- Read-only by design: a segment has no editable fields — its status is DERIVED. To change anything you go to a covering permit (the rows link to the editor).
- The covering-permits list marks the gating permit with a tooltip-explained "Gating" tag ("least-advanced covering permit — its status sets this segment's status"), making the derivation legible.
- Rows are cloned from an SSR <template> (not innerHTML strings) so the BcnStatusChip markup and Astro scoped styles stay the single source.
- Header pairs the segment title with a BcnStatusChip of the derived status; a count esa-badge labels the covering-permits list.

## Gotchas
- Do not add edit controls here — routing edits through the covering permit is what keeps status derivation honest.
- The gating flag must track the CURRENT least-advanced permit after edits, not a stored flag.
- z-stack: the segment drawer sits at --z-modal 1300 (above the topbar 1100); the permit editor opened from it stacks higher (1340).

## Done when
- Opening a segment shows its derived-status header, meta, and covering permits with the gating one tagged; clicking a covering permit opens that permit's editor; nothing in the dossier is editable.

## Markup
```html
<esa-side-dialog
  id="segment-dialog"
  size="md"
  style="--_width: 640px; --z-modal: 1300; --z-modal-backdrop: 1250"
  position="right"
  open=""
  ><div slot="header" class="sd__header">
    <h2 class="sd__title" id="sd-title">Segment 1E</h2>
    <span id="sd-chip"
      ><span
        class="bcn-status-chip"
        data-status="cleared"
        style="--_chip: var(--st-cleared)"
        ><span class="bcn-status-chip__dot"></span
        ><span class="bcn-status-chip__label">Cleared to Construct</span></span
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
  <div class="sd">
    <dl class="sd__meta">
      <div class="sd__kv">
        <dt>Path</dt>
        <dd id="sd-path">Path 1</dd>
      </div>
      <div class="sd__kv">
        <dt>Build phase</dt>
        <dd id="sd-phase">Day 1</dd>
      </div>
      <div class="sd__kv">
        <dt>Projected clear-to-build</dt>
        <dd id="sd-clear">Jun 2, 2026</dd>
      </div>
      <div class="sd__kv">
        <dt>Length</dt>
        <dd id="sd-length">4.5 mi (23,820 ft)</dd>
      </div>
      <div class="sd__kv">
        <dt>Jurisdiction</dt>
        <dd id="sd-jur">Walla Walla County, WA</dd>
      </div>
      <div class="sd__kv">
        <dt>Build contractor</dt>
        <dd id="sd-build">Fishel (proposed)</dd>
      </div>
    </dl>
    <h3 class="sd__section">
      Covering permits
      <span id="sd-count"
        ><span
          class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
          ><span class="esa-badge__text">4</span></span
        ></span
      >
    </h3>
    <ul class="sd__permits" id="sd-permits">
      <li class="sd-permit" data-permit-row="usace-nwp">
        <button type="button" class="sd-permit__btn" data-edit-permit="usace-nwp">
          <span class="sd-permit__main"
            ><span class="sd-permit__name">Nationwide Permit (Section 404)</span
            ><span class="sd-permit__agency"
              >US Army Corps of Engineers · Federal</span
            ></span
          ><span class="sd-permit__meta"
            ><span class="sd-permit__chips"
              ><esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
                ><span class="sd-permit__gating" data-gating-tag="" hidden=""
                  >Gating</span
                ></esa-tooltip
              ><span data-permit-chip="usace-nwp"
                ><span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Issued</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              ></span
            ><span class="sd-permit__date" data-permit-date="usace-nwp"
              >May 28, 2026</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </li>
      <li class="sd-permit" data-permit-row="wa-dnr">
        <button type="button" class="sd-permit__btn" data-edit-permit="wa-dnr">
          <span class="sd-permit__main"
            ><span class="sd-permit__name">Aquatic Lands Use Authorization</span
            ><span class="sd-permit__agency"
              >WA Dept. of Natural Resources · State</span
            ></span
          ><span class="sd-permit__meta"
            ><span class="sd-permit__chips"
              ><esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
                ><span class="sd-permit__gating" data-gating-tag="" hidden=""
                  >Gating</span
                ></esa-tooltip
              ><span data-permit-chip="wa-dnr"
                ><span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Issued</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              ></span
            ><span class="sd-permit__date" data-permit-date="wa-dnr"
              >Jun 1, 2026</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </li>
      <li class="sd-permit" data-permit-row="sepa-walla-walla">
        <button type="button" class="sd-permit__btn" data-edit-permit="sepa-walla-walla">
          <span class="sd-permit__main"
            ><span class="sd-permit__name">SEPA Environmental Review</span
            ><span class="sd-permit__agency"
              >Walla Walla County (Lead Agency) · Local</span
            ></span
          ><span class="sd-permit__meta"
            ><span class="sd-permit__chips"
              ><esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
                ><span class="sd-permit__gating" data-gating-tag="" hidden=""
                  >Gating</span
                ></esa-tooltip
              ><span data-permit-chip="sepa-walla-walla"
                ><span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Issued</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              ></span
            ><span class="sd-permit__date" data-permit-date="sepa-walla-walla"
              >Apr 22, 2026</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </li>
      <li class="sd-permit" data-permit-row="ww-county-row">
        <button type="button" class="sd-permit__btn" data-edit-permit="ww-county-row">
          <span class="sd-permit__main"
            ><span class="sd-permit__name">County Right-of-Way Permit</span
            ><span class="sd-permit__agency"
              >Walla Walla County Public Works · Local</span
            ></span
          ><span class="sd-permit__meta"
            ><span class="sd-permit__chips"
              ><esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
                ><span class="sd-permit__gating" data-gating-tag="" hidden=""
                  >Gating</span
                ></esa-tooltip
              ><span data-permit-chip="ww-county-row"
                ><span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Issued</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              ></span
            ><span class="sd-permit__date" data-permit-date="ww-county-row"
              >Jun 2, 2026</span
            ></span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span>
        </button>
      </li>
    </ul></div
></esa-side-dialog>
```

## Styles
```css
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
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.sd {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.sd__header {
  align-items: center;
  gap: var(--spacing-300);
  flex: 1;
  min-width: 0;
  display: flex;
}
.sd__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.sd__meta {
  gap: var(--spacing-300) var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  grid-template-columns: 1fr 1fr;
  margin: 0;
  display: grid;
}
.sd__kv {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.sd__kv dt {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.sd__kv dd,
.sd__section {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.sd__section .esa-badge {
  vertical-align: middle;
  margin-left: var(--spacing-100);
}
.sd__permits {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.sd-permit__btn {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300);
  text-align: left;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    border-color 0.12s,
    background 0.12s;
  display: flex;
}
.sd-permit__btn:hover {
  background: var(--grid-row-bg-hover);
  border-color: var(--color-border-default-strong);
}
.sd-permit__main {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.sd-permit__name {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.sd-permit__agency {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.sd-permit__meta {
  align-items: flex-end;
  gap: var(--spacing-100);
  flex-direction: column;
  flex-shrink: 0;
  display: flex;
}
.sd-permit__chips {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.sd-permit__gating {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-full);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  background: var(--color-content-default);
  color: var(--color-background-elevation-raised);
  white-space: nowrap;
}
.sd-permit__gating[hidden] {
  display: none;
}
.sd-permit__date {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  font-size: 0.8125rem;
}
.sd-permit__btn .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.pd__section-head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
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
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
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
- `--badge-bg`: #43608a _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--form-label-color`: #525252 _(component)_
- `--grid-row-bg-hover`: #efefef _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
