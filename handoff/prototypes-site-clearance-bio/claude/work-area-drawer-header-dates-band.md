# Work-area drawer — header & dates band

The top of the write drawer (esa-side-dialog, 640px): a header with the work-area id, its derived status chip, and subtitle, then an always-visible Dates band of the three decision dates — Notification, Clearance visit, Planned start — with a red "Blocked until" cell that appears ONLY while a block horizon exists. These are the inputs a manager reads first to decide "can we work here yet?".

## Key decisions
- The dates band sits full-bleed directly under the header (above everything else) because the three dates + the block horizon are the decision context for the whole drawer — they frame the review history below, not the other way round.
- The status chip in the header is the BcnStatusChip reading the derived status (never a stored field) — it changes the instant a review is saved or a buffer clears.
- The "Blocked until" cell is conditional (#wa-d-until-wrap hidden by default) and rendered in the alert color — a block horizon is exceptional, so it only appears when there is one, rather than showing an empty "—" row.

## Gotchas
- Blocked-until is derived (blockedUntil() over the current review); an indefinite block shows no date cell, not "TBD" — do not fabricate a horizon.
- The three dates are SITE-LEVEL and are edited in the drawer's Edit mode (#wa-edit), not here; this band is read-only display of the current values.

## Done when
- Header shows id + derived status chip; the three dates render; the red "Blocked until" cell appears only when a block horizon exists and is hidden otherwise.

## Markup
```html
<div class="band band--4" id="wa-band">
  <div class="bcn-key-value">
    <span class="bcn-key-value__key">Notification</span>
    <span class="wa__kv-val" id="wa-d-notif">—</span>
  </div>
  <div class="bcn-key-value">
    <span class="bcn-key-value__key">Clearance visit</span>
    <span class="wa__kv-val" id="wa-d-visit">May 18, 2026</span>
  </div>
  <div class="bcn-key-value">
    <span class="bcn-key-value__key">Planned start</span>
    <span class="wa__kv-val" id="wa-d-start">—</span>
  </div>
  <span class="band__cell" id="wa-d-until-wrap">
    <div class="bcn-key-value">
      <span class="bcn-key-value__key">Blocked until</span>
      <span class="band__alert" id="wa-d-until">Jul 24, 2026</span>
    </div>
  </span>
</div>
```

## Styles
```css
.band {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-200) var(--spacing-300);
  margin: calc(-1 * var(--spacing-500, 1.5rem)) calc(-1 * var(--spacing-500, 1.5rem)) 0;
  padding: var(--spacing-250) var(--spacing-500, 1.5rem);
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
}
.wa__kv-val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.band__cell[hidden] {
  display: none;
}
.band.band--4 {
  grid-template-columns: repeat(4, 1fr);
}
.band__alert {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
}
.bcn-key-value {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.bcn-key-value__key {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
```

## Tokens
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-label-color`: #525252 _(component)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--st-blocked`: #d73027 _(component)_
