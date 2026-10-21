# Rewrite with Aldo

Response · source prototype: https://esassoc.github.io/beacon-design/prototypes/comments/response/

![Rewrite with Aldo, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/rewrite-with-aldo.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-comments-response/claude/rewrite-with-aldo.phone.png

The whole-letter rewrite: the green Aldo bar opens a composer whose field takes references. "@" picks from the Response Library (past ESA responses, anonymized), "#" picks one of the comments this response answers by its comment number (C-018.001). Send replaces the letter with Aldo's draft in one undoable step; the bar then reads "Aldo rewrote the response from N references" with Undo.

## Key decisions

- References are chips in the prompt, not attachments: the person writes the ask and points at sources in the same sentence.
- While Aldo works the composer shimmers and locks; when the draft lands, every block he wrote anew is washed in his tint, which fades over about three seconds.
- Nothing is saved by a rewrite. Save (or ⌘S) is the only write; the rail shows Unsaved changes until then.

## Gotchas

- The prototype runs no model: the draft alternates between two prebuilt texts, quotes each "#" comment where the letter answers it and adds a lead paragraph from each "@" library response. "shorter" / "concise" keeps first sentences.
- The reference menu hangs off <body>; a pick there must not close the composer (the composer ignores pointerdown inside .bcn-slash).

## Done when

- Sending with one @ and one # reference adds the quoted comment and a library paragraph; Undo restores the previous letter exactly.

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-ap` (spoke) · `src/components/bcn/BcnAldoPrompt.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<div data-response-aldo="">
  <div class="bcn-ap" data-aldo-prompt="">
    <div class="bcn-ap__bar">
      <button type="button" class="bcn-ap__open" aria-expanded="false" data-ap-open="">
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
            <circle
              cx="33.2"
              cy="31.1"
              r="2"
              fill="currentColor"
              stroke="none"
            ></circle></svg></span
        ><span class="bcn-ap__prompt typography-label-md-strong"
          >Ask Aldo to rewrite this response</span
        ></button
      ><span class="bcn-ap__result typography-body-sm" data-ap-result="" hidden=""
        ><span data-ap-result-text=""></span
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-ap-undo="true"
          >
            <span class="esa-button__label">Undo</span>
          </button></span
        ></span
      >
    </div>
    <div
      class="bcn-ap__card"
      role="dialog"
      aria-label="Rewrite with Aldo"
      data-ap-card=""
      hidden=""
    >
      <div class="bcn-ap__shimmer" aria-hidden="true"></div>
      <div class="bcn-ap__head">
        <span data-ap-mark=""
          ><span class="bcn-aldo-mark" data-size="sm" data-variant="badge" aria-hidden="true"
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
              <circle
                cx="33.2"
                cy="31.1"
                r="2"
                fill="currentColor"
                stroke="none"
              ></circle></svg></span></span
        ><span class="typography-label-md-strong">Rewrite with Aldo</span
        ><span class="bcn-ap__close"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              aria-label="Close"
              title="Close"
              data-ap-close="true"
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
                  <path d="m6 6 12 12"></path></svg
              ></span></button></span
        ></span>
      </div>
      <div
        class="bcn-ap__rich"
        data-ap-rich=""
        data-label="What Aldo should change"
        data-placeholder="e.g. Answer #C-018.001 directly, in the tone of @Use of DNL"
      >
        <div
          contenteditable="true"
          role="textbox"
          aria-label="What Aldo should change"
          aria-multiline="true"
          translate="no"
          class="tiptap ProseMirror bcn-prompt"
          tabindex="0"
          style=""
        >
          <p
            data-placeholder="e.g. Answer #C-018.001 directly, in the tone of @Use of DNL"
            class="is-empty is-editor-empty"
          >
            <br class="ProseMirror-trailingBreak" />
          </p>
        </div>
      </div>
      <div class="bcn-ap__foot">
        <span class="bcn-ap__context typography-body-sm" data-ap-context=""></span
        ><span class="bcn-ap__keys typography-body-sm" aria-hidden="true">⌘ Enter</span
        ><span class="bcn-ap__send"
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md esa-button--icon-only esa-button--disabled"
            ><button
              class="esa-button__native typography-microcopy-md"
              type="button"
              aria-label="Send guidance"
              title="Send guidance"
              data-ap-send="true"
              disabled=""
            >
              <span class="esa-icon esa-icon--md" aria-hidden="true"
                ><svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="m5 12 7-7 7 7"></path>
                  <path d="M12 19V5"></path></svg
              ></span></button></span
        ></span>
      </div>
    </div>
  </div>
  <!-- script type="module" removed (0 bytes) -->
</div>
```

## Styles

```css
.ProseMirror {
  position: relative;
}
.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0;
}
.ProseMirror [contenteditable="false"] {
  white-space: normal;
}
.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}
.ProseMirror pre {
  white-space: pre-wrap;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
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
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
.bcn-doc .is-empty.is-editor-empty:first-child:before,
.bcn-doc p.is-empty:only-child:before,
.bcn-re__pane .bcn-doc:focus p.is-empty:before {
  content: attr(data-placeholder);
  float: left;
  pointer-events: none;
  height: 0;
  color: var(--color-content-default-tertiary);
}
.bcn-prompt {
  min-height: 3.25rem;
  max-height: 16rem;
  font-size: var(--typography-body-lg-font-size);
  color: var(--color-content-default);
  outline: none;
  line-height: 1.55;
  overflow-y: auto;
}
.bcn-prompt p {
  margin: 0;
}
.bcn-prompt p.is-editor-empty:first-child:before {
  content: attr(data-placeholder);
  float: left;
  pointer-events: none;
  height: 0;
  color: var(--color-content-default-tertiary);
}
.bcn-rr__panel-link .esa-icon {
  color: var(--color-content-secondary);
}
.bcn-rr__panel-link:hover .esa-icon {
  color: var(--color-content-default);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.bcn-ap {
  min-width: 0;
  position: relative;
}
.bcn-ap__bar {
  align-items: center;
  gap: var(--spacing-300);
  min-height: 44px;
  padding-right: var(--spacing-300);
  background: var(--bcn-aldo-prompt-wash);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: 999px;
  display: flex;
}
.bcn-ap__open {
  all: unset;
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-width: 0;
  padding: 0 var(--spacing-300) 0 var(--spacing-250, 0.625rem);
  cursor: pointer;
  color: var(--bcn-aldo-600);
  border-radius: 999px;
  flex: 1;
  align-self: stretch;
  display: flex;
}
.bcn-ap__open:hover .bcn-ap__prompt {
  color: var(--color-content-default);
}
.bcn-ap__open:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 2px;
}
.bcn-ap__prompt {
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.15s;
  overflow: hidden;
}
.bcn-ap__result {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-ap__result[hidden] {
  display: none;
}
.bcn-ap__card {
  z-index: 40;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--bcn-aldo-100);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  transform-origin: top;
  --form-border-width: 0;
  --color-background-field: transparent;
  border-radius: 20px;
  flex-direction: column;
  animation: 0.22s cubic-bezier(0.2, 0.8, 0.2, 1) bcn-ap-in;
  display: flex;
  position: absolute;
  top: -6px;
  left: -6px;
  right: -6px;
  overflow: hidden;
}
.bcn-ap__card[hidden] {
  display: none;
}
.bcn-ap__card:focus-within {
  outline: 2px solid var(--bcn-aldo-prompt-ring);
  outline-offset: 0;
}
.bcn-ap__head {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default);
  display: flex;
}
.bcn-ap__close {
  margin-left: auto;
}
.bcn-ap__rich {
  display: block;
}
.bcn-ap__foot {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-ap__context {
  min-width: 0;
  color: var(--color-content-secondary);
  flex: 1;
}
.bcn-ap__keys {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-ap__send {
  --button-radius-md: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  display: inline-flex;
}
.bcn-ap__shimmer {
  background: var(--bcn-aldo-prompt-shimmer);
  opacity: 0;
  background-repeat: no-repeat;
  background-size: 40% 100%;
  height: 2px;
  position: absolute;
  inset: 0 0 auto;
}
.bcn-ap[data-working] .bcn-ap__shimmer {
  opacity: 1;
  animation: 0.9s linear infinite bcn-ap-shimmer;
}
.bcn-ap[data-working] .bcn-ap__input {
  opacity: 0.6;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-ap__card,
  .bcn-ap[data-working] .bcn-ap__shimmer {
    animation: none;
  }
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-aldo-prompt-ring` | `#08908b8c` | component |
| `--bcn-aldo-prompt-shadow` | `0 1px 2px #1018200f, 0 10px 24px -6px #10182024, 0 28px 60px -18px #08908b61` | component |
| `--bcn-aldo-prompt-shimmer` | `linear-gradient(90deg, transparent 0%, #08908be6 50%, transparent 100%)` | component |
| `--bcn-aldo-prompt-wash` | `linear-gradient(100deg, #e8f6f5 0%, #f3fbfa 55%, #fff 100%)` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
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
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-secondary` | `#525252` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-lg-font-size` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
