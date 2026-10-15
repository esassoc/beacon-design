# Commitment panel

Where a locator leads: the commitment as step 2 marked it up, read only, the requirement in focus and the draft's excerpt a heavier pass inside it. The page key opens the PDF; Open in Commitments lands step 2 on that commitment.

## Markup
```html
<esa-side-dialog
  class="bcn-sw3cp-dialog"
  heading="Commitment"
  size="lg"
  data-sw3-commitment-panel="true"
  position="right"
  ><article
    class="bcn-sw3c"
    data-c=""
    data-mode="select"
    aria-labelledby="sw3c-ro-title"
    data-readonly="true"
  >
    <div class="bcn-sw3c__tools" role="toolbar" aria-label="Commitment tools">
      <span></span>
      <div class="bcn-sw3c__group">
        <span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Hide highlights"
            title="Hide highlights"
            data-ico="highlighter"
            data-c-view="marks"
            aria-pressed="true"
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
                data-ico="highlighter"
              >
                <path d="m9 11-6 6v3h9l3-3"></path>
                <path
                  d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
                ></path></svg
            ></span></button></span
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Hide underlines"
            title="Hide underlines"
            data-ico="underline"
            data-c-view="lines"
            aria-pressed="true"
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
                data-ico="underline"
              >
                <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
                <line x1="4" x2="20" y1="20" y2="20"></line></svg
            ></span></button></span
        ><span class="bcn-sw3c__rule" aria-hidden="true"></span
        ><span data-c-peek=""
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
            ><button
              class="esa-button__native typography-microcopy-xs"
              type="button"
              title="Open the source page"
              data-c-pages="true"
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
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path></svg></span
              ><span class="esa-button__label">p. 1</span>
            </button></span
          ></span
        ><span data-c-open=""
          ><span
            class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
            ><button class="esa-button__native typography-microcopy-xs" type="button">
              <span class="esa-button__label">Open in Commitments</span
              ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                  <path d="m12 5 7 7-7 7"></path></svg
              ></span></button></span
        ></span>
      </div>
    </div>
    <div class="bcn-sw3c__page" data-c-page="">
      <header class="bcn-sw3c__head">
        <span data-c-badge=""><span class="bcn-cbadge bcn-cbadge--md"></span></span>
        <h2 class="bcn-sw3c__title" id="sw3c-ro-title" data-c-title=""></h2>
      </header>
      <p class="bcn-sw3c__parsing" data-c-parsing="" hidden="">Parsing</p>
      <div class="bcn-sw3c__text" data-c-text=""></div>
      <div class="bcn-sw3c__unanchored" data-c-unanchored=""></div>
      <span class="bcn-sw3c__grip" data-c-grip="start" hidden="" aria-hidden="true"></span
      ><span class="bcn-sw3c__grip" data-c-grip="end" hidden="" aria-hidden="true"></span>
    </div></article
></esa-side-dialog>
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
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.bcn-sw3c {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}
.bcn-sw3c__tools {
  z-index: 2;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-100) var(--spacing-300);
  padding: var(--spacing-150, 0.375rem) var(--spacing-200);
  background: var(--color-background-elevation-raised);
  border-bottom: 1px solid var(--color-border-default);
  flex-wrap: wrap;
  display: flex;
  position: sticky;
  top: 0;
  container-type: inline-size;
}
.bcn-sw3c__group {
  align-items: center;
  gap: var(--spacing-100);
  flex: none;
  display: flex;
}
.bcn-sw3c__group > * {
  flex: none;
}
.bcn-sw3c__rule {
  width: 1px;
  margin: 2px var(--spacing-100);
  background: var(--color-border-default);
  align-self: stretch;
}
.bcn-sw3c__tools [data-c-tool]:disabled,
.bcn-sw3c__tools [data-c-tool] button:disabled,
.bcn-sw3c__tools button:disabled {
  opacity: 0.38;
}
.bcn-sw3c__tools [data-c-tool][aria-pressed="true"] {
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 1px 3px
    color-mix(in srgb, var(--color-content-default) 22%, transparent);
}
.bcn-sw3c__page {
  gap: var(--spacing-400);
  padding: var(--spacing-500) var(--spacing-600);
  flex-direction: column;
  display: flex;
  position: relative;
  container: sw3c-page/inline-size;
}
.bcn-sw3c:not([data-readonly]) .bcn-sw3c__page {
  padding-bottom: calc(var(--spacing-500) + 2.5rem);
}
.bcn-sw3c__head {
  align-items: flex-start;
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3c__title {
  min-width: 0;
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  text-wrap: balance;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.25;
}
.bcn-sw3c:not([data-confirmed]) [data-c-reopen],
.bcn-sw3c[data-confirmed] [data-c-confirm] {
  display: none;
}
.bcn-sw3c__parsing {
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-sw3c__text {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  color: var(--color-content-default);
  font-size: 1rem;
  line-height: 1.75;
}
.bcn-sw3c__text[hidden] {
  display: none;
}
.bcn-sw3c__text p {
  margin: 0 0 var(--spacing-400) 0;
  white-space: pre-line;
  max-width: 70ch;
}
.bcn-sw3c__text p:last-child {
  margin-bottom: 0;
}
.bcn-sw3c__text mark.bcn-hl {
  cursor: pointer;
  color: inherit;
  box-shadow: none;
  background: var(--bcn-marker-1) 0 60% / 100% 96% no-repeat;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  outline: none;
  margin: 0 -0.22em;
  padding: 0 0.3em;
  text-decoration: none;
  transition: opacity 0.12s;
}
.bcn-sw3c__text mark.bcn-hl[data-ink="2"] {
  background-image: var(--bcn-marker-2);
  background-position: 0;
}
.bcn-sw3c__text mark.bcn-hl[data-ink="3"] {
  background-image: var(--bcn-marker-3);
}
.bcn-sw3c__text mark.bcn-hl[data-ink="4"] {
  background-image: var(--bcn-marker-4);
  background-position: 0;
}
.bcn-sw3c__text mark.bcn-hl[data-ink="5"] {
  background-image: var(--bcn-marker-5);
}
.bcn-sw3c__text mark.bcn-hl[data-ink="6"] {
  background-image: var(--bcn-marker-6);
  background-position: 0;
}
.bcn-sw3c__text mark.bcn-hl[data-suggested] {
  outline: none;
  text-decoration: none;
}
.bcn-sw3c__text mark.bcn-hl[data-active] {
  filter: saturate(1.5) brightness(0.94);
  box-shadow: none;
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="1"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-1);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="2"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-2);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="3"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-3);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="4"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-4);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="5"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-5);
}
.bcn-sw3c__text[data-focus]
  mark.bcn-hl[data-ink="6"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-6);
}
.bcn-sw3c[data-mode="mark"] .bcn-sw3c__text {
  cursor: text;
}
.bcn-sw3c[data-mode="mark"] .bcn-sw3c__text ::selection,
.bcn-sw3c[data-mode="mark"] .bcn-sw3c__text ::selection {
  background: var(--bcn-marker-selection);
}
.bcn-sw3c__text mark.bcn-hl[data-dup] {
  box-shadow: none;
  text-decoration: underline wavy var(--bcn-aldo);
  text-underline-offset: 5px;
}
.bcn-sw3c__text .bcn-at-lit {
  font-weight: 600;
}
.bcn-sw3c[data-readonly] .bcn-sw3c__text mark.bcn-hl {
  cursor: default;
}
.bcn-sw3c__text .bcn-at-val {
  text-decoration: underline solid var(--bcn-topic-amber-ink);
  text-underline-offset: 4px;
  text-decoration-thickness: 2px;
}
.bcn-sw3c__text .bcn-at-val[data-lit] {
  background: var(--bcn-topic-amber-3);
  border-radius: 2px;
}
.bcn-sw3c__text mark.bcn-at-gap {
  cursor: pointer;
}
.bcn-sw3c__text mark.bcn-at-gap[data-lit] {
  background: color-mix(in srgb, var(--bcn-aldo) 14%, transparent);
  border-radius: 2px;
}
.bcn-sw3c__text mark.bcn-at-gap {
  color: inherit;
  text-decoration: underline wavy var(--bcn-aldo);
  text-underline-offset: 5px;
  background: 0 0;
  text-decoration-thickness: 1.5px;
}
.bcn-sw3c__text ::selection,
.bcn-sw3c__text ::selection {
  background: color-mix(
    in srgb,
    var(--bcn-aldo, var(--color-background-info)) 28%,
    transparent
  );
}
.bcn-sw3c__pop {
  z-index: 3;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  box-shadow: 0 4px 14px color-mix(in srgb, var(--color-content-default) 14%, transparent);
  font-family: var(--typography-font-family-sans);
  gap: 2px;
  padding: 2px;
  display: flex;
  position: absolute;
}
.bcn-sw3c__pop[hidden] {
  display: none;
}
.bcn-sw3c__pop {
  align-items: center;
}
.bcn-sw3c__pop [hidden] {
  display: none;
}
.bcn-sw3c__pop button:disabled {
  opacity: 0.38;
}
.bcn-sw3c__pop-ref {
  padding: 0 var(--spacing-200);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  font-size: 0.75rem;
  font-weight: 600;
}
.bcn-sw3c__pop[data-c-req-pop] {
  flex-wrap: wrap;
  max-width: calc(100% - 16px);
}
.bcn-sw3c__tools [data-c-view] {
  position: relative;
}
.bcn-sw3c__tools [data-c-view][aria-pressed="false"]:after {
  content: "";
  pointer-events: none;
  background: currentColor;
  border-radius: 1px;
  width: 18px;
  height: 1.5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-45deg);
}
.bcn-sw3c__tools [data-c-view][aria-pressed="false"] svg {
  opacity: 0.55;
}
.bcn-sw3c[data-hide-marks] .bcn-sw3c__text mark.bcn-hl:not([data-active]) {
  background: 0 0;
}
.bcn-sw3c[data-hide-lines]
  .bcn-sw3c__text
  :is(.bcn-at-val, mark.bcn-at-gap:not([data-lit]), mark.bcn-hl[data-dup]) {
  text-decoration: none;
}
.bcn-sw3c__grip {
  background: var(--color-content-default);
  cursor: ew-resize;
  touch-action: none;
  z-index: 1;
  width: 2px;
  margin-left: -1px;
  position: absolute;
}
.bcn-sw3c__grip[hidden] {
  display: none;
}
.bcn-sw3c__grip:after {
  content: "";
  background: var(--color-content-default);
  border: 2px solid var(--color-background-elevation-raised);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.bcn-sw3c__grip[data-c-grip="start"]:after {
  top: -10px;
}
.bcn-sw3c__grip[data-c-grip="end"]:after {
  bottom: -10px;
}
.bcn-sw3c__grip:before {
  content: "";
  position: absolute;
  inset: -6px -10px;
}
.bcn-sw3c[data-dragging] .bcn-sw3c__text {
  user-select: none;
  cursor: ew-resize;
}
.bcn-sw3c__unanchored {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3c__unanchored:empty {
  display: none;
}
.bcn-sw3c__unanchored .bcn-sw3c__ghost {
  padding: var(--spacing-300);
  border: 1.5px dashed var(--color-border-warning);
  border-radius: var(--radius-100);
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-console__more .esa-button__native {
  font-family: var(--_mono);
  height: auto;
  min-height: 0;
  padding: 0 1ch;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
}
.bcn-console__more .esa-button__native:hover {
  color: var(--bcn-console-fg);
}
.bcn-sw3ip .bcn-sw3ip__cite:hover .bcn-cbadge,
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:first-child {
  background: color-mix(
    in srgb,
    var(--color-commitment) 22%,
    var(--color-background-elevation-raised)
  );
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge {
  box-shadow:
    1.5px 0 0 0 var(--color-background-elevation-raised),
    0 0 0 1px var(--color-background-elevation-raised);
  grid-area: 1/1;
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:first-child {
  z-index: 3;
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:nth-child(2) {
  z-index: 2;
  color: #0000;
  background: color-mix(
    in srgb,
    var(--color-commitment) 26%,
    var(--color-background-elevation-raised)
  );
  transform: translate(9px) scaleY(0.84);
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge:nth-child(3) {
  z-index: 1;
  color: #0000;
  background: color-mix(
    in srgb,
    var(--color-commitment) 40%,
    var(--color-background-elevation-raised)
  );
  transform: translate(18px) scaleY(0.68);
}
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:nth-child(2) {
  transform: translate(11px) scaleY(0.84);
}
.bcn-sw3ip .bcn-sw3ip__stack:hover .bcn-cbadge:nth-child(3) {
  transform: translate(22px) scaleY(0.68);
}
.bcn-sw3ip .bcn-sw3ip__stack .bcn-cbadge {
  transition: transform 0.12s ease-out;
}
.bcn-sw3cp-dialog {
  --side-dialog-width-lg: min(760px, 56vw);
}
.bcn-sw3cp-dialog .bcn-sw3c__page {
  padding: var(--spacing-400) 0 0;
  gap: var(--spacing-300);
}
.bcn-sw3cp-dialog .bcn-sw3c__tools {
  padding-inline: 0;
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
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
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
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
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
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-console-fg`: #ffffffed _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--bcn-marker-1`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffeb5c' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23f5d52e' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23f5d52e' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-2`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffa8d2' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23f783bd' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23f783bd' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-3`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23b6f28c' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%2393e063' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%2393e063' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-4`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffc56e' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%23fbaa45' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%23fbaa45' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-5`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%239fd9ff' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%2372c3f7' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%2372c3f7' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-6`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%238ff0de' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3Cpath fill='%235fe0c8' fill-opacity='0.35' d='M3.5 8.6C28 7.7 57 9 96.8 8.2L97 11.3C61 12.1 30 10.8 3.6 11.6Z'/%3E%3Cpath fill='%235fe0c8' fill-opacity='0.21' d='M6 13.4C35 12.9 64 13.8 95 13.1L95.2 14.6C64 15.2 35 14.4 6.1 15Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-1`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23fff8c9' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-2`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffe3f0' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-3`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23e9fbdc' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-4`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23ffeccf' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-5`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23e2f3ff' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-faint-6`: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20' preserveAspectRatio='none'%3E%3Cpath fill='%23dbfbf5' d='M2.2 4.6C18 3.2 41 4.4 63 3.6S93 3.9 98.6 5C99.7 8.2 99.3 12.6 98.1 16.1C81 17.5 57 16.3 33 17.3S7 16.7 1.4 15.8C.5 12.3.7 8.1 2.2 4.6Z'/%3E%3C/svg%3E") _(component)_
- `--bcn-marker-selection`: #ffeb5c _(component)_
- `--bcn-topic-amber-3`: #e9c162 _(component)_
- `--bcn-topic-amber-ink`: #ab6400 _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-info`: #228be6 _(component)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-warning`: #f3d673 _(component)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
