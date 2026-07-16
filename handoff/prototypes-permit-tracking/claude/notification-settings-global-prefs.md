# Notification settings (global prefs)

A GLOBAL, per-user preferences dialog (esa-dialog) opened from the page utilities "Notifications" button — email-me-when rules for the whole Permit Tracking feature, across every path and permit (BCN-1364). Four esa-switch-toggle rows, each with a title + sub explaining the trigger.

## Key decisions
- Per-user, feature-global (not per-permit): the lede makes clear these are personal preferences that do not change what teammates receive.
- Sensible defaults: status-change, segment-cleared, and @-mention ON; "any comment posted" OFF (high volume) — defaults encode the signal/noise judgment.
- esa-dialog (centered) not a side-dialog — it is a settings modal, not an inspector; esa-switch-toggle rows are the lego for on/off prefs.

## Gotchas
- Keep it global/per-user — do not let it drift into per-permit settings; per-permit subscription is a different feature.
- The @-mention rule ties back to the editor's mention typeahead — the two must reference the same user/notify model.
- z-stack: notifications at --z-modal 1400, above both drawers, since it is opened from the always-visible page utilities.

## Done when
- The Notifications utility opens a centered dialog of four toggle rows with the documented defaults (comment-posted off); Save/Cancel close it; preferences are framed as personal and feature-global.

## Markup
```html
<esa-dialog
  id="notif-dialog"
  heading="Notification settings"
  size="md"
  style="--z-modal: 1400; --z-modal-backdrop: 1380"
  open=""
>
  <div class="notif">
    <p class="notif__lede">
      Email <strong>you</strong> when these happen anywhere in Permit Tracking — across
      every path and permit. These are your personal preferences; they don't change what
      teammates receive.
    </p>
    <ul class="notif__list">
      <li class="notif__row">
        <span class="notif__text">
          <span class="notif__title">A permit's status changes</span>
          <span class="notif__sub"
            >Any move along the permitting ladder (e.g. Submitted → Issued)</span
          >
        </span>
        <esa-switch-toggle
          id="notif-status"
          checked=""
          size="md"
          label-position="after"
        ></esa-switch-toggle>
      </li>
      <li class="notif__row">
        <span class="notif__text">
          <span class="notif__title">A segment becomes Cleared to Construct</span>
          <span class="notif__sub">The milestone that lets crews roll on that reach</span>
        </span>
        <esa-switch-toggle
          id="notif-cleared"
          checked=""
          size="md"
          label-position="after"
        ></esa-switch-toggle>
      </li>
      <li class="notif__row">
        <span class="notif__text">
          <span class="notif__title">You're @-mentioned in a comment</span>
          <span class="notif__sub">Someone pulls you into a permit discussion</span>
        </span>
        <esa-switch-toggle
          id="notif-mention"
          checked=""
          size="md"
          label-position="after"
        ></esa-switch-toggle>
      </li>
      <li class="notif__row">
        <span class="notif__text">
          <span class="notif__title">Any comment is posted on a permit</span>
          <span class="notif__sub">High volume — off by default</span>
        </span>
        <esa-switch-toggle
          id="notif-comment"
          size="md"
          label-position="after"
        ></esa-switch-toggle>
      </li>
    </ul>
  </div>
  <div slot="footer" class="notif__footer">
    <span id="notif-cancel"
      ><span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Cancel </span>
        </button>
      </span>
    </span>
    <span id="notif-save"
      ><span
        class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Save preferences </span>
        </button>
      </span>
    </span>
  </div>
</esa-dialog>
```

## Styles
```css
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
.esa-button__label {
  white-space: nowrap;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--color-ghost .esa-button__native:hover:not(:disabled),
.esa-button--color-ghost.esa-button--active .esa-button__native {
  background: var(--color-surface-sunken, #efefef);
}
.notif {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.notif__lede {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: var(--color-text-secondary);
}
.notif__lede strong {
  color: var(--color-text-primary);
}
.notif__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.notif__row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  padding: var(--spacing-300) 0;
}
.notif__text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.notif__title {
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.notif__sub {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.notif esa-switch-toggle {
  flex-shrink: 0;
}
.notif__row + .notif__row {
  border-top: 1px solid var(--color-border-light);
}
.notif__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-200);
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
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
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
