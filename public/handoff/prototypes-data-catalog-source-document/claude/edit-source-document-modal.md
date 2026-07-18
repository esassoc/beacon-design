# Edit Source Document modal

The single-pane upsert — a single-column esa-dialog carrying the prod Edit Source Document field set (Name, Project, Date of Latest Amendment, Reference Number, Approving Agency, Agency Contact, Agency Signatory, Description). It is the only edit surface; there is no inline editing.

## Key decisions
- Single column, not a two-pane editor — the field set is small and flat (contrast the Action modal's two-pane assignment). Two paired fields (Amendment date + Reference Number; Contact + Signatory) sit in 2-up rows via .bcn-grid-2.
- Every control is an esa-* lego (esa-text-field / esa-select / esa-date-picker / esa-textarea); the dialog is 640px wide, 92vh max.
- Fields pre-populate from the page's editPayload on load; Save/Cancel just close in the prototype.

## Gotchas
- The modal is a peer dialog opened from the header Edit button (the apply recipe clicks #edit-doc); it is not nested in the page flow.
- Project is an esa-select with options set client-side; the date is an esa-date-picker taking an ISO value (2026-02-20).

## Done when
- Clicking "Edit source document" opens a 640px single-column modal with the 8 prod fields pre-filled; Cancel and Save close it.

## Markup
```html
<esa-dialog
  id="edit-dialog"
  heading="Edit Source Document"
  style="
    --_dialog-width: 640px;
    --_dialog-max-height: 92vh;
    --_dialog-bg: var(--color-surface, #fff);
    --z-modal-backdrop: 1150;
    --z-modal: 1200;
  "
  size="md"
  open=""
>
  <div class="bcn-form bcn-form--dialog">
    <esa-text-field id="d-name" label="Name" required="" size="md"></esa-text-field>
    <esa-select id="d-project" label="Project" required="true" size="md"></esa-select>
    <div class="bcn-grid-2">
      <esa-date-picker
        id="d-amended"
        label="Date of Latest Amendment"
        size="md"
      ></esa-date-picker>
      <esa-text-field id="d-ref" label="Reference Number" size="md"></esa-text-field>
    </div>
    <esa-text-field id="d-agency" label="Approving Agency" size="md"></esa-text-field>
    <div class="bcn-grid-2">
      <esa-text-field id="d-contact" label="Agency Contact" size="md"></esa-text-field>
      <esa-text-field
        id="d-signatory"
        label="Agency Signatory"
        size="md"
      ></esa-text-field>
    </div>
    <esa-textarea id="d-desc" label="Description" rows="5" size="md"></esa-textarea>
  </div>
  <div slot="footer" class="bcn-editor__foot">
    <span id="ed-cancel"
      ><span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Cancel </span>
        </button>
      </span>
    </span>
    <span id="ed-save"
      ><span
        class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Save </span>
        </button>
      </span>
    </span>
  </div>
</esa-dialog>
```

## Styles
```css
#download-coversheet .esa-button {
  width: 100%;
  justify-content: center;
}
.bcn-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.bcn-form--dialog {
  padding: var(--spacing-100) 0;
}
.bcn-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-300);
}
.bcn-editor__foot {
  display: flex;
  gap: var(--spacing-300);
  justify-content: flex-end;
  width: 100%;
}
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
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
  color: var(--_accent-text);
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
  --_accent: var(--color-danger);
  --_accent-hover: var(--color-danger-hover);
  --_accent-text: var(--color-danger-strong);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-surface-sunken, #efefef) 45%,
    var(--color-surface, #fff)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-strong, #d4d4d4);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled) {
  background: var(--_accent-hover);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-danger-hover`: #dc3e42 _(semantic)_
- `--color-danger-strong`: #ce2c31 _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
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
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
