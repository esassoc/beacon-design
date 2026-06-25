# Data tab — bulk status bar

A contextual action bar that appears above the Permits grid when one or more rows are checkbox-selected: a live "{n} selected" count, a "Set status…" esa-select, an "Apply status" primary action, and "Clear selection". It is the multi-permit write path (one status across many permits at once).

## Key decisions
- Hidden until selection (#bulk-bar[hidden]); it is a selection-scoped surface, not a permanent toolbar.
- Applying a status writes to every selected permit and then RE-DERIVES segment status everywhere (map, mileage, timeline, insights, exec) — the same re-derivation a single edit triggers, batched.
- Permits-grid only — segments have no editable status (theirs is derived), so the pivot to Segments hides this path.

## Gotchas
- This section captures the bar in its HIDDEN structure (revealing it requires selecting grid rows). In the app, drive its visibility off the grid selection model and keep the count in sync with deselectAll/Clear selection.
- After a bulk apply, re-derive and repaint all dependent figures — a bulk edit that updates only the grid would desync the map and rollup.

## Done when
- Selecting permit rows reveals the bar with a live count; "Apply status" sets the chosen status on all selected and re-derives every dependent figure; "Clear selection" hides it.

## Markup
```html
<div class="bulk-bar" id="bulk-bar" hidden="">
  <span class="bulk-bar__count" id="bulk-count">0 selected</span>
  <esa-select id="bulk-status" placeholder="Set status…" size="md"></esa-select>
  <span id="bulk-apply"
    ><span
      class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
    >
      <button class="esa-button__native" type="button">
        <span class="esa-button__label"> Apply status </span>
      </button>
    </span>
  </span>
  <span id="bulk-clear"
    ><span
      class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
    >
      <button class="esa-button__native" type="button">
        <span class="esa-button__label"> Clear selection </span>
      </button>
    </span>
  </span>
</div>
```

## Styles
```css
.bulk-bar {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  margin-bottom: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-400);
  background: color-mix(in srgb, var(--color-primary) 5%, var(--color-surface));
  border: 1px solid color-mix(in srgb, var(--color-primary) 25%, var(--color-border));
  border-radius: var(--radius-200);
}
.bulk-bar[hidden] {
  display: none;
}
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #43608a);
  --_accent-hover: var(--color-primary-hover, #39506f);
  --_on: var(--color-text-inverse, #ffffff);
  display: inline-block;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
