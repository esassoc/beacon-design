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
>
  <div slot="header" class="sd__header">
    <h2 class="sd__title" id="sd-title">Segment 1E</h2>
    <span id="sd-chip"
      ><span
        class="bcn-status-chip"
        data-status="cleared"
        style="--_chip: var(--st-cleared)"
      >
        <span class="bcn-status-chip__dot"></span>
        <span class="bcn-status-chip__label">Cleared to Construct</span>
      </span>
    </span>
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
        ><span class="esa-badge esa-badge--primary esa-badge--sm">
          <span class="esa-badge__text">4</span>
        </span>
      </span>
    </h3>
    <ul class="sd__permits" id="sd-permits">
      <li class="sd-permit" data-permit-row="usace-nwp">
        <button type="button" class="sd-permit__btn" data-edit-permit="usace-nwp">
          <span class="sd-permit__main">
            <span class="sd-permit__name">Nationwide Permit (Section 404)</span>
            <span class="sd-permit__agency">US Army Corps of Engineers · Federal</span>
          </span>
          <span class="sd-permit__meta">
            <span class="sd-permit__chips">
              <esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
              >
                <span class="sd-permit__gating" data-gating-tag="" hidden="">Gating</span>
              </esa-tooltip>
              <span data-permit-chip="usace-nwp">
                <span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Issued</span>
                </span>
              </span>
            </span>
            <span class="sd-permit__date" data-permit-date="usace-nwp">May 28, 2026</span>
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </li>
      <li class="sd-permit" data-permit-row="wa-dnr">
        <button type="button" class="sd-permit__btn" data-edit-permit="wa-dnr">
          <span class="sd-permit__main">
            <span class="sd-permit__name">Aquatic Lands Use Authorization</span>
            <span class="sd-permit__agency">WA Dept. of Natural Resources · State</span>
          </span>
          <span class="sd-permit__meta">
            <span class="sd-permit__chips">
              <esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
              >
                <span class="sd-permit__gating" data-gating-tag="" hidden="">Gating</span>
              </esa-tooltip>
              <span data-permit-chip="wa-dnr">
                <span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Issued</span>
                </span>
              </span>
            </span>
            <span class="sd-permit__date" data-permit-date="wa-dnr">Jun 1, 2026</span>
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </li>
      <li class="sd-permit" data-permit-row="sepa-walla-walla">
        <button type="button" class="sd-permit__btn" data-edit-permit="sepa-walla-walla">
          <span class="sd-permit__main">
            <span class="sd-permit__name">SEPA Environmental Review</span>
            <span class="sd-permit__agency"
              >Walla Walla County (Lead Agency) · Local</span
            >
          </span>
          <span class="sd-permit__meta">
            <span class="sd-permit__chips">
              <esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
              >
                <span class="sd-permit__gating" data-gating-tag="" hidden="">Gating</span>
              </esa-tooltip>
              <span data-permit-chip="sepa-walla-walla">
                <span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Issued</span>
                </span>
              </span>
            </span>
            <span class="sd-permit__date" data-permit-date="sepa-walla-walla"
              >Apr 22, 2026</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </li>
      <li class="sd-permit" data-permit-row="ww-county-row">
        <button type="button" class="sd-permit__btn" data-edit-permit="ww-county-row">
          <span class="sd-permit__main">
            <span class="sd-permit__name">County Right-of-Way Permit</span>
            <span class="sd-permit__agency">Walla Walla County Public Works · Local</span>
          </span>
          <span class="sd-permit__meta">
            <span class="sd-permit__chips">
              <esa-tooltip
                text="Least-advanced covering permit — its status sets this segment's status"
                position="top"
              >
                <span class="sd-permit__gating" data-gating-tag="" hidden="">Gating</span>
              </esa-tooltip>
              <span data-permit-chip="ww-county-row">
                <span
                  class="bcn-status-chip"
                  data-status="issued"
                  style="--_chip: var(--st-cleared)"
                >
                  <span class="bcn-status-chip__dot"></span>
                  <span class="bcn-status-chip__label">Issued</span>
                </span>
              </span>
            </span>
            <span class="sd-permit__date" data-permit-date="ww-county-row"
              >Jun 2, 2026</span
            >
          </span>
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
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
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </span>
        </button>
      </li>
    </ul>
  </div>
</esa-side-dialog>
```

## Styles
```css
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-primary, #43608a));
  --_badge-text: var(--badge-text-color, var(--color-text-inverse, #fff));
  --_badge-height: var(--badge-height-md, 20px);
  --_badge-font-size: 11px;
  --_badge-padding-x: 6px;
  --_badge-min-width: var(--badge-height-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(--_badge-height);
  min-width: var(--_badge-min-width);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--badge-radius, var(--radius-100, 4px));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-badge--sm {
  --_badge-height: var(--badge-height-sm, 16px);
  --_badge-font-size: 10px;
  --_badge-padding-x: 4px;
  --_badge-min-width: var(--badge-height-sm, 16px);
}
.sd__header {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.sd__title {
  margin: 0;
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.sd {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.sd__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-300) var(--spacing-400);
  margin: 0;
  padding: var(--spacing-400);
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.sd__kv {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.sd__kv dt {
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
.sd__kv dd,
.sd__section {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.sd__section .esa-badge {
  vertical-align: middle;
  margin-left: var(--spacing-100);
}
.sd__permits {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.pd__section-head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.sd-permit__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300);
  text-align: left;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    border-color 0.12s ease,
    background 0.12s ease;
}
.sd-permit__main {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  flex: 1;
}
.sd-permit__name {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.sd-permit__agency {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.sd-permit__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: var(--spacing-100);
  flex-shrink: 0;
}
.sd-permit__chips {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
}
.sd-permit__gating {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-full);
  font-size: 0.6875rem;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  background: var(--color-text-primary);
  color: var(--color-surface);
  white-space: nowrap;
}
.sd-permit__gating[hidden] {
  display: none;
}
.sd-permit__date {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.sd-permit__btn .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
```

## Tokens
- `--badge-bg`: #005862 _(component)_
- `--badge-height-md`: 20px _(component)_
- `--badge-height-sm`: 16px _(component)_
- `--badge-radius`: .25rem _(component)_
- `--badge-text-color`: #ffffff _(component)_
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--form-label-color`: #525252 _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
