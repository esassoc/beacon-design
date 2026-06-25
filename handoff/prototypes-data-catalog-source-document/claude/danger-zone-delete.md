# Danger zone (delete)

The destructive action lives in a bottom danger zone (BcnDangerZone — GitHub layout: a heading OUTSIDE/above a red-bordered box, and inside it a row of [bold title + description | right-aligned soft-danger button]). Deleting the document also deletes its files, so it is deliberately separated from the rest of the page and gated by a confirm.

## Key decisions
- Uses BcnDangerZone, not esa-danger-zone: the lego stacks heading-INSIDE the box; this ports Beacon's ui-danger-zone as GitHub's heading-OUTSIDE / per-item-row anatomy. It is a candidate to promote to an esa- variant.
- Delete is a SOFT-danger button (color=danger, appearance=soft), not a loud solid fill — present but not alarming.
- Confirm is a simple yes/no esa-confirm-dialog (danger variant), NOT type-to-confirm — faithful to Beacon. On confirm, prod navigates back to the source-documents list.
- There is NO header trash icon — delete is reachable only here, at the bottom, behind the confirm.

## Gotchas
- Do not add a type-to-confirm; Beacon uses a plain confirm and the prototype matches it.
- The confirm dialog z-index (1400) must sit above the topbar and the other dialogs.
- BcnDangerZone reads only the semantic token layer; the box border is --color-danger.

## Done when
- A red-bordered danger zone at the page bottom with a soft-danger "Delete source document" button; clicking it opens a simple confirm; confirming routes to the source-documents list.

## Markup
```html
<section class="bcn-danger-zone" aria-labelledby="bcn-danger-zone-1">
  <h2 class="bcn-danger-zone__heading" id="bcn-danger-zone-1">Danger Zone</h2>
  <div class="bcn-danger-zone__box">
    <div class="bcn-danger-zone__item">
      <div class="bcn-danger-zone__text">
        <h3 class="bcn-danger-zone__title">Delete this source document</h3>
        <p class="bcn-danger-zone__desc">
          Deleting this source document also deletes all files attached to it. This action
          cannot be undone.
        </p>
      </div>
      <div class="bcn-danger-zone__action">
        <span id="delete-doc"
          ><span
            class="esa-button esa-button--color-danger esa-button--appearance-soft esa-button--md"
          >
            <button class="esa-button__native" type="button">
              <span class="esa-button__label"> Delete source document </span>
            </button>
          </span>
        </span>
      </div>
    </div>
  </div>
</section>
```

## Styles
```css
.bcn-danger-zone {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.bcn-danger-zone__heading {
  margin: 0;
  font-size: var(--type-size-250);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-danger-zone__box {
  padding: var(--spacing-500);
  border: 1px solid var(--color-danger);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-danger-zone__item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
}
.bcn-danger-zone__text {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  min-width: 0;
}
.bcn-danger-zone__title {
  margin: 0;
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-danger-zone__desc {
  margin: 0;
  font-size: var(--form-font-size-md);
  color: var(--color-text-secondary);
}
.bcn-danger-zone__action {
  flex-shrink: 0;
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
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button__label {
  white-space: nowrap;
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
.esa-button--color-danger {
  --_accent: var(--color-danger, #ef4444);
  --_accent-hover: color-mix(in srgb, var(--color-danger, #ef4444) 85%, #000);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-surface-sunken, #efefef) 45%,
    var(--color-surface, #fff)
  );
  color: var(--_accent);
  border-color: var(--color-border-strong, #d4d4d4);
}
#download-coversheet .esa-button {
  width: 100%;
  justify-content: center;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #ef4444 _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
