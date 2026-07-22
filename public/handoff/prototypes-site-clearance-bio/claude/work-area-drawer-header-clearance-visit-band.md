# Work-area drawer — header & clearance-visit band

The top of the write drawer (esa-side-dialog, 640px): a header with the work-area id, its derived status chip, and the parent Component as the subtitle, then a single-cell band carrying the editable CLEARANCE-VISIT date. Deliberately spare — the drawer is a decision surface (status, reviews, discussion), not a record dump.

## Key decisions
- Clearance visit is the ONLY date on the work area: the date the clearance survey happened. It auto-updates when a review is added and is directly editable in Edit mode ("—" when unset). There is no notification date, no planned start, and no blocked-until — all cut with forecasting.
- The Work Area custom fields (Method, Depth, Parcel/DCPN, County, Entry agreement) do NOT render in the drawer — a design pass cut them as information overload. They live as columns on the Data tab's Work Areas grid, where comparing across sites is the actual job.
- The subtitle is the parent Component alone (e.g. "2024-2029 Geotechnical Activities") — the project name is already the app context and repeating it was noise.
- The status chip is the BcnStatusChip reading the derived status — it changes the instant a review is saved.

## Gotchas
- Adding a review writes the review's date into the clearance-visit date (the epic's rule) — the band must repaint on review save, not just on Edit-mode save.
- The epic text (BCN-1446) says the drawer opens "with its Work Area custom fields" — the prototype supersedes that with the fields on the grid only; follow the prototype.

## Done when
- Header shows id + derived status chip + the Component subtitle (no project name); the band shows only the visit date ("—" when unset); adding a review updates it; the custom fields appear on the Data grid, not in the drawer.

## Markup
```html
<div class="band" id="wa-band">
  <div class="bcn-key-value">
    <span class="bcn-key-value__key">Clearance visit</span>
    <span class="wa__kv-val" id="wa-d-visit">May 18, 2026</span>
  </div>
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
