# Band above the Guidance bar

Help Dots · source prototype: https://esassoc.github.io/beacon-design/prototypes/help-dots/

![Band above the Guidance bar, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help-dots/claude/band-above-the-guidance-bar.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help-dots/claude/band-above-the-guidance-bar.phone.png

Guidance on a page with dots turns the dots on and raises a band above the Guidance bar. Everyone gets Open Help & Guidance. ESA admins ONLY also get Add Dot and Edit Dots, in a quiet admin inset; a tenant admin sees exactly what a reader sees.

## Key decisions

- Roles: Add Dot, Edit Dots, the Need a Spot chip, drafts and every dot editing control are ESA admin only. Dots are ESA-authored help content and identical for every tenant (BCN-1513), so no tenant role authors them.
- Every ESA-only control says so in its tooltip ("ESA admin: …"), so the role is legible on the surface, not only in the permission check.
- The band rises from behind the bar and fades in (220ms, easing-enter); off, it drops back (160ms, easing-exit). Reduced motion: fades only.
- Dots come in at random: each draws a delay (0 to 350ms) and a length (180 to 260ms) on every Guidance-on; pings start once a dot lands.

## Gotchas

- Gate on the ESA admin claim, not on a tenant admin role: a tenant admin must not see Add Dot or Edit Dots.

## Done when

- A reader and a tenant admin see only Open Help & Guidance in the band; an ESA admin also sees Add Dot and Edit Dots.

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-help-dots` (spoke) · `src/components/bcn/BcnHelpDots.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-popover` (hub) · `packages/ecology/src/components/esa-popover.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

```html
<div class="bcn-help-dots__band" data-help-panelbar="">
  <div class="bcn-help-dots__row" data-help-band-menu="">
    <span class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-help-panel-open="true"
      >
        <span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
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
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
            <path d="M12 17h.01"></path></svg></span
        ><span class="esa-button__label">Open Help &amp; Guidance</span>
      </button></span
    >
    <div class="bcn-help-dots__admin" data-help-band-admin="" hidden="">
      <esa-tooltip
        text="ESA admin: add a dot, shown to every tenant"
        position="above"
        delay="150"
        align="center"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-help-band-add="true"
          >
            <span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
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
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path></svg></span
            ><span class="esa-button__label">Add Dot</span>
          </button></span
        ></esa-tooltip
      ><esa-tooltip
        text="ESA admin: move, edit or detach dots for every tenant"
        position="above"
        delay="150"
        align="center"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-help-band-edit="true"
          >
            <span class="esa-icon esa-icon--sm" aria-hidden="true"
              ><svg
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
                <path
                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                ></path>
                <path d="m15 5 4 4"></path></svg></span
            ><span class="esa-button__label">Edit Dots</span>
          </button></span
        ></esa-tooltip
      >
    </div>
  </div>
  <div class="bcn-help-dots__row bcn-help-dots__state" data-help-pickbar="" role="status" hidden="">
    <span class="bcn-aldo-mark" data-size="sm" data-variant="badge" aria-hidden="true"
      ><svg
        class="bcn-aldo-mark__glyph"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
        <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
        <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
        <circle cx="33.2" cy="31.1" r="2" fill="currentColor" stroke="none"></circle></svg></span
    ><span class="bcn-help-dots__state-text" data-help-pick-text=""
      >Editing dots: drag to move, click to edit</span
    ><span class="bcn-help-dots__item" data-help-orphans-wrap="" hidden=""
      ><esa-popover
        trigger="click"
        position="top"
        offset="10"
        appearance="inverse"
        label="Needs a New Spot"
        ><esa-tooltip
          text="ESA admin: dots whose part is gone from this page"
          position="above"
          delay="150"
          align="center"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              data-help-orphans-chip="true"
              aria-expanded="false"
              aria-haspopup="dialog"
            >
              <span class="esa-icon esa-icon--sm" aria-hidden="true"
                ><svg
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span
              ><span class="esa-button__label">0 Need a Spot</span>
            </button></span
          ></esa-tooltip
        >
        <div
          slot="content"
          class="bcn-help-dots__orphans stack"
          data-gap="3xs"
          data-help-orphans=""
        ></div></esa-popover></span
    ><span class="bcn-help-dots__item" data-help-done-wrap=""
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-help-edit-done="true"
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
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
              <path d="M20 6 9 17l-5-5"></path></svg></span
          ><span class="esa-button__label">Done</span>
        </button></span
      ></span
    ><span class="bcn-help-dots__item" data-help-cancel-wrap="" hidden=""
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-help-pick-cancel="true"
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true"
            ><svg
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
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path></svg></span
          ><span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    >
  </div>
</div>
```

## Styles

```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-aldo-mark[data-variant="rings"] {
  width: var(--bcn-aldo-mark-size, 24px);
  height: var(--bcn-aldo-mark-size, 24px);
  background: 0 0;
  border-radius: 0;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 12s linear infinite bcn-aldo-spin;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-mark[data-animated],
  .bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
    animation: none;
  }
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn .esa-button__native {
  --focus-ring-color: #fff;
  border-radius: var(--radius-full);
  color: #ffffffb8;
  block-size: 22px;
  min-block-size: 0;
  inline-size: 22px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-admin-btn .esa-button__native:hover,
.bcn-admin-btn .esa-button__native:focus-visible {
  color: #fff;
  background: #ffffff24;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
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
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.bcn-list-empty .bcn-list-empty__tour .esa-button__label {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-list-empty .bcn-list-empty__tour .esa-button__native {
  --bcn-aldo-mark-size: 20px;
  --bcn-aldo-ring-from: var(--color-teal-7);
  --bcn-aldo-ring-to: var(--color-teal-9);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg-solid);
  border-color: var(--bcn-helpbar-border);
}
.bcn-list-empty .bcn-list-empty__tour .esa-button__native:hover {
  color: var(--bcn-helpbar-fg);
  background: color-mix(in srgb, var(--bcn-helpbar-bg-solid) 88%, white);
}
.bcn-hd__dot .bcn-aldo-mark {
  background: var(--bcn-aldo-raised-fill);
  box-shadow: var(--bcn-aldo-raised-shadow);
}
.bcn-hd__detach .esa-button__native {
  --focus-ring-color: var(--bcn-helpbar-fg);
  border-radius: var(--radius-full);
  block-size: 18px;
  min-block-size: 0;
  inline-size: 18px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-hd__detach .esa-icon {
  block-size: 12px;
  inline-size: 12px;
}
.bcn-help-dots__carry .bcn-aldo-mark {
  background: var(--bcn-aldo-raised-fill);
  box-shadow: var(--bcn-aldo-raised-shadow);
}
.bcn-help-dots__band {
  padding: var(--spacing-075, 3px);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  border-radius: var(--radius-400, 14px);
  white-space: nowrap;
  position: fixed;
  inset-block-end: 86px;
  inset-inline-start: 50%;
  translate: -50%;
  box-shadow: 0 8px 24px #00000047;
}
.bcn-help-dots__row {
  align-items: center;
  gap: var(--spacing-075, 3px);
  display: flex;
}
.bcn-help-dots__admin {
  border-radius: var(--radius-300);
  background: #ffffff12;
  align-items: center;
  gap: 2px;
  margin-inline-start: var(--spacing-100);
  padding: 2px;
  display: flex;
  box-shadow: inset 0 0 0 1px #ffffff24;
}
.bcn-help-dots__state {
  gap: var(--spacing-150);
  padding-inline-start: var(--spacing-200);
}
.bcn-help-dots__state-text {
  font-weight: var(--typography-font-weight-medium);
  padding-inline-end: var(--spacing-100);
}
.bcn-help-dots__item {
  display: inline-flex;
}
.bcn-help-dots__band .esa-button {
  color: var(--bcn-helpbar-fg);
  --focus-ring-color: var(--bcn-helpbar-fg);
}
.bcn-help-dots__state esa-popover {
  --color-background-default-knockout: var(--bcn-helpbar-bg-solid);
  --color-border-default-knockout: var(--bcn-helpbar-border);
  --color-content-default-knockout: var(--bcn-helpbar-fg);
}
.bcn-help-dots__orphans {
  white-space: normal;
  min-inline-size: 220px;
}
.bcn-help-dots__orphans .bcn-help-dots__orphan {
  padding: var(--spacing-150) var(--spacing-200);
  border-radius: var(--radius-200);
  color: var(--bcn-helpbar-fg);
  font: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-help-dots__orphans .bcn-help-dots__orphan:hover,
.bcn-help-dots__orphans .bcn-help-dots__orphan:focus-visible {
  background: #ffffff14;
}
.bcn-help-dots__orphans .bcn-help-dots__orphan-spot {
  color: var(--bcn-helpbar-fg-muted);
}
.bcn-help-dots[hidden],
.bcn-help-dots__highlight[hidden],
.bcn-help-dots__carry[hidden],
.bcn-help-dots__band [hidden],
.bcn-help-dots__band[hidden] {
  display: none;
}
.bcn-help-dots__band {
  z-index: 999;
  transition:
    translate 0.22s var(--easing-enter),
    opacity 0.22s var(--easing-enter),
    display 0.22s allow-discrete;
}
.bcn-help-dots__band[hidden] {
  opacity: 0;
  transition-duration: 0.16s;
  transition-timing-function: var(--easing-exit);
  translate: -50% 66px;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-help-dots__band,
  .bcn-help-dots__band[hidden] {
    translate: -50%;
  }
}
.bcn-hdr__mark .bcn-aldo-mark {
  background: var(--bcn-aldo-raised-fill);
  box-shadow: var(--bcn-aldo-raised-shadow);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-aldo-raised-fill` | `linear-gradient(150deg, #12a594 0%, #06736f 100%)` | component |
| `--bcn-aldo-raised-shadow` | `inset 0 1px 0 #ffffff59, inset 0 -1px 1px #00282640, 0 1px 2px #10182038, 0 3px 8px -2px #08908b73` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `#17191bc7` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `#ffffff1f` | component |
| `--bcn-helpbar-fg` | `#ffffffeb` | component |
| `--bcn-helpbar-fg-muted` | `#ffffffb8` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-teal-7` | `#83cdc1` | primitive |
| `--color-teal-9` | `#12a594` | primitive |
| `--easing-enter` | `ease-out` | primitive |
| `--easing-exit` | `ease-in` | primitive |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
