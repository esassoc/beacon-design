# Detail panel (read-only)

An esa-side-dialog showing one observation in full — header chips for severity and status over a key-value record of the logged detail. Read-only by design: ESA reviews this log, it does not own it.

## Key decisions
- esa-side-dialog (520px) rather than a route or a modal — it keeps the filtered list and scroll position intact behind it, so you can work through several observations in sequence.
- Composed from reused bcn-* pieces (BcnKeyValue, BcnStatusChip) with page-composition glue around them, the same pattern as the Permits & Studies detail dialog.
- NO edit, resolve, or comment affordance. The first-party inspector owns the observation; adding a write control here would misrepresent who is accountable for it.
- The z-stack lifts the panel and backdrop above the fixed topbar (--z-modal 1200 / backdrop 1150, over the topbar's 1100).

## Gotchas
- esa-side-dialog is a CUSTOM (non-native) overlay — clearing the topbar requires raising --z-modal / --z-modal-backdrop on the element, not DOM order.
- --_width must carry a unit. A unitless value is a <number> inside the lego's length calc, which is invalid at computed-value time and silently collapses the panel to width:auto — it grows to fit its content with no console error.
- ONE shared dialog instance serves every row; openDetail() overwrites its contents. The SSR markup is seeded from the first row purely so the panel has structure before any JS runs — do not mistake that seed for the selected record.

## Done when
- Clicking a grid row opens a 520px right side-dialog above the topbar showing that observation's severity, status, and full logged detail.
- The panel exposes no control that would modify the observation.
- Closing returns to the list with filters and scroll position unchanged.

## Markup
```html
<esa-side-dialog
  id="ov-detail"
  size="md"
  style="--_width: 520px; --z-modal: 1200; --z-modal-backdrop: 1150"
  position="right"
  open=""
  ><div slot="header" class="bcn-detail__head">
    <div class="bcn-detail__title-row">
      <h2 id="ov-detail-title" class="bcn-detail__title">obs-0142</h2>
    </div>
  </div>
  <div class="bcn-detail__body">
    <div id="ov-detail-chips" class="bcn-detail__chips">
      <span id="ov-detail-severity-chip"
        ><span
          class="bcn-status-chip"
          data-status="non-compliance"
          style="--_chip: var(--color-background-utility-danger)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">Non-Compliance</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
      ><span id="ov-detail-status-chip"
        ><span
          class="bcn-status-chip"
          data-status="active"
          style="--_chip: var(--color-background-utility-info)"
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
    <div class="bcn-detail__grid">
      <span id="ov-detail-category"
        ><div class="bcn-key-value">
          <span class="bcn-key-value__key">Category</span
          ><span class="bcn-key-value__val">Stormwater / BMP Maintenance</span>
        </div></span
      ><span id="ov-detail-area"
        ><div class="bcn-key-value">
          <span class="bcn-key-value__key">Area</span
          ><span class="bcn-key-value__val">South Array — Block B</span>
        </div></span
      ><span id="ov-detail-inspector"
        ><div class="bcn-key-value">
          <span class="bcn-key-value__key">Inspector</span
          ><span class="bcn-key-value__val">R. Delgado</span>
        </div></span
      ><span id="ov-detail-reported"
        ><div class="bcn-key-value">
          <span class="bcn-key-value__key">Reported</span
          ><span class="bcn-key-value__val">Jul 29, 2026</span>
        </div></span
      ><span id="ov-detail-resolved"
        ><div class="bcn-key-value">
          <span class="bcn-key-value__key">Resolved</span
          ><span class="bcn-key-value__val">—</span>
        </div></span
      ><span id="ov-detail-age"
        ><div class="bcn-key-value">
          <span class="bcn-key-value__key">Days active</span
          ><span class="bcn-key-value__val">7d</span>
        </div></span
      ><span id="ov-detail-reviewed"
        ><div class="bcn-key-value">
          <span class="bcn-key-value__key">ESA QC reviewed</span
          ><span class="bcn-key-value__val">Yes</span>
        </div></span
      >
    </div>
    <span id="ov-detail-description"
      ><div class="bcn-key-value">
        <span class="bcn-key-value__key">Description</span
        ><span class="bcn-key-value__val"
          >Silt fence down for ~40 ft along the Block B swale after last week's wind
          event; sediment tracking toward the wash crossing.</span
        >
      </div></span
    >
  </div></esa-side-dialog
>
```

## Styles
```css
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
.bcn-detail__head {
  gap: var(--spacing-150);
  min-width: 0;
  padding: var(--spacing-400) var(--spacing-500);
  flex-direction: column;
  flex: 1;
  display: flex;
}
.bcn-detail__title-row {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  min-width: 0;
  display: flex;
}
.bcn-detail__title {
  font-family: var(--font-decorative);
  font-size: 1.125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.3;
}
.bcn-detail__chips {
  gap: var(--spacing-200);
  margin-bottom: var(--spacing-400);
  display: flex;
}
.bcn-detail__grid {
  gap: var(--spacing-400);
  margin-bottom: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-detail__body esa-side-dialog {
  display: block;
}
```

## Tokens
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--form-label-color`: #525252 _(component)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
