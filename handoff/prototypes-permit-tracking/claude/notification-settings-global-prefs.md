# Notification settings (global prefs)

Permit Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracking/

![Notification settings (global prefs), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/notification-settings-global-prefs.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/notification-settings-global-prefs.phone.png

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

## Components

- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-switch-toggle` (hub) · `packages/ecology/src/components/esa-switch-toggle.ts`

## Markup

_2 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-dialog
  id="notif-dialog"
  heading="Notification settings"
  size="md"
  style="--z-modal: 1400; --z-modal-backdrop: 1380"
  open=""
  ><div class="notif">
    <p class="notif__lede">
      Email <strong>you</strong> when these happen anywhere in Permit Tracking — across every path
      and permit. These are your personal preferences; they don't change what teammates receive.
    </p>
    <ul class="notif__list">
      <li class="notif__row">
        <span class="notif__text"
          ><span class="notif__title">A permit's status changes</span
          ><span class="notif__sub"
            >Any move along the permitting ladder (e.g. Submitted → Issued)</span
          ></span
        ><esa-switch-toggle
          id="notif-status"
          checked=""
          size="md"
          label-position="after"
        ></esa-switch-toggle>
      </li>
      <li class="notif__row">
        <span class="notif__text"
          ><span class="notif__title">A segment becomes Cleared to Construct</span
          ><span class="notif__sub">The milestone that lets crews roll on that reach</span></span
        ><esa-switch-toggle
          id="notif-cleared"
          checked=""
          size="md"
          label-position="after"
        ></esa-switch-toggle>
      </li>
      <!-- …and 2 more like this (<li class="notif__row">) -->
    </ul>
  </div>
  <div slot="footer" class="notif__footer">
    <span id="notif-cancel"
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    ><span id="notif-save"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Save preferences</span>
        </button></span
      ></span
    >
  </div></esa-dialog
>
```

## Styles

```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
.esa-button__label {
  white-space: nowrap;
}
.notif {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.notif__lede {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
}
.notif__lede strong {
  color: var(--color-content-default);
}
.notif__list {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.notif__row {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-300) 0;
  display: flex;
}
.notif__row + .notif__row {
  border-top: 1px solid var(--color-border-default-subtle);
}
.notif__text {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.notif__title {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.notif__sub {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.notif esa-switch-toggle {
  flex-shrink: 0;
}
.notif__footer {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
