# Work-area drawer — header & clearance-visit band

Site Clearance — Biological · source prototype: https://esassoc.github.io/beacon-design/prototypes/site-clearance-bio/

![Work-area drawer — header & clearance-visit band, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/work-area-drawer-header-clearance-visit-band.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-site-clearance-bio/claude/work-area-drawer-header-clearance-visit-band.phone.png

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

## Components

- `bcn-key-value` (spoke) · `src/components/bcn/BcnImplementationDialog.astro`

## Markup

```html
<div class="band" id="wa-band">
  <div class="bcn-key-value" data-size="md" data-layout="stack">
    <span class="bcn-key-value__key">Clearance visit</span
    ><span class="wa__kv-val" id="wa-d-visit">May 18, 2026</span>
  </div>
</div>
```

## Styles

```css
.band {
  gap: var(--spacing-200) var(--spacing-300);
  margin: calc(-1 * var(--spacing-500, 1.5rem)) calc(-1 * var(--spacing-500, 1.5rem)) 0;
  padding: var(--spacing-250) var(--spacing-500, 1.5rem);
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  grid-template-columns: repeat(3, 1fr);
  display: grid;
}
.wa__kv-val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-default` | `#fafafa` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--form-label-color` | `#525252` | component |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-font-weight` | `500` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
