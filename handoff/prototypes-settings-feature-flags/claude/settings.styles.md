# Settings: styles

```css
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
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
.bcn-aldo-mark__from {
  stop-color: var(--bcn-aldo-ring-from, var(--color-teal-6));
}
.bcn-aldo-mark__to {
  stop-color: var(--bcn-aldo-ring-to, var(--color-teal-9));
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
.bcn-aldo-panel {
  --_aldo-text: 0.8125rem;
  --_aldo-meta: 0.75rem;
  --_aldo-weight-body: 400;
  --_aldo-weight-meta: 500;
  --_aldo-weight-strong: 600;
  --_aldo-radius: var(--radius-200);
  --_aldo-radius-sm: var(--radius-100);
  --_aldo-gap: var(--spacing-150, 0.375rem);
  --_aldo-pad: var(--spacing-400);
  --_aldo-line: var(--border-width-default, 1px);
  --_aldo-inner: var(--spacing-200, 0.5rem);
  --_aldo-same: var(--spacing-300, 0.75rem);
  --_aldo-turn: var(--spacing-500, 1.5rem);
  --_aldo-region: var(--spacing-300, 0.75rem);
  --_aldo-bubble-radius: 1rem;
  min-height: 0;
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-body);
  flex-direction: column;
  line-height: 1.4;
  display: flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-msg[data-streaming] .bcn-aldo-actions,
.bcn-aldo-msg[data-streaming] .bcn-aldo-msg__time,
.bcn-aldo-msg[data-streaming] .bcn-aldo-msg__tools {
  display: none;
}
.bcn-aldo-msg[data-stopped] .bcn-aldo-actions {
  display: none;
}
.bcn-aldo-actions {
  gap: var(--_aldo-gap);
  flex-wrap: wrap;
  display: flex;
}
.bcn-aldo-actions:empty {
  display: none;
}
.bcn-aldo-needs__item .bcn-aldo-actions {
  gap: var(--spacing-100);
}
.bcn-aldo-status > .bcn-aldo-actions {
  margin-top: var(--_aldo-gap);
}
.bcn-aldo-composer {
  gap: var(--_aldo-inner);
  flex-direction: column;
  display: flex;
}
.bcn-aldo-composer__suggest {
  padding: 0 var(--_aldo-pad);
  gap: var(--spacing-200);
}
.bcn-aldo-composer__anchor {
  position: relative;
}
.bcn-aldo-composer__shell {
  --_aldo-radius: 0.75rem;
  align-items: flex-end;
  gap: var(--spacing-200);
  margin: 0 var(--spacing-300);
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) var(--spacing-300);
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  flex-wrap: wrap;
  display: flex;
}
.bcn-aldo-composer__shell:focus-within {
  outline: var(--focus-ring-width, 2px) solid var(--bcn-aldo-prompt-ring);
}
.bcn-aldo-composer__field {
  --focus-ring-color: var(--color-background-elevation-raised);
  --form-border-width: 0;
  flex: 1;
  min-width: 0;
}
.bcn-aldo-composer__send {
  --button-radius-sm: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  padding-bottom: var(--spacing-100);
  display: inline-flex;
}
.bcn-aldo-composer__send[data-empty] {
  --color-background-brand: var(--color-background-elevation-sunken);
  --color-background-brand-hover: var(--color-background-elevation-sunken);
  --color-content-default-knockout: var(--color-content-default-tertiary);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-aldo-composer__send[data-stop] {
  --color-background-brand: var(--color-content-default);
  --color-background-brand-hover: var(--color-content-default-secondary);
}
.bcn-aldo-composer__context {
  gap: var(--spacing-100);
  padding-top: var(--spacing-150, 0.375rem);
  flex-wrap: wrap;
  flex-basis: 100%;
  display: flex;
}
.bcn-aldo-composer__context[hidden] {
  display: none;
}
.bcn-aldo-composer__context .esa-pill[data-auto] {
  --_pill-bg: transparent;
  border-style: dashed;
}
.bcn-aldo-composer__context .esa-pill {
  max-width: 100%;
}
.bcn-aldo-composer__context .esa-pill__label,
.bcn-aldo-msg__context .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 16rem;
  overflow: hidden;
}
.bcn-aldo-composer__menu {
  z-index: 10;
  bottom: calc(100% + var(--spacing-100));
  left: var(--spacing-300);
  right: var(--spacing-300);
  max-height: 15rem;
  padding: var(--spacing-100);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-4);
  margin: 0;
  list-style: none;
  position: absolute;
  overflow-y: auto;
}
.bcn-aldo-composer__menu[hidden] {
  display: none;
}
.bcn-aldo-composer[data-dropping] .bcn-aldo-composer__shell {
  border-style: dashed;
  border-color: var(--bcn-aldo);
  background: var(--color-background-elevation-sunken);
}
.bcn-aldo-composer__drop {
  inset: 0 var(--spacing-300);
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  pointer-events: none;
  place-items: center;
  margin: 0;
  display: grid;
  position: absolute;
}
.bcn-aldo-composer__drop[hidden] {
  display: none;
}
.bcn-aldo-panel [data-aldo-overlay="dock"],
.bcn-aldo-panel[data-expanded] [data-aldo-overlay="open"],
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__close {
  display: none;
}
.bcn-aldo-panel[data-expanded] [data-aldo-overlay="dock"] {
  display: inline-flex;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__body {
  --_aldo-text: 0.9375rem;
  --_aldo-meta: 0.8125rem;
  --_aldo-turn: var(--spacing-600, 2rem);
  --_aldo-same: var(--spacing-400, 1rem);
  --_aldo-inner: var(--spacing-300, 0.75rem);
  --_aldo-region: var(--spacing-400, 1rem);
  z-index: 1050;
  top: calc(var(--_aldo-top, 0px) + var(--spacing-400, 1rem));
  right: var(--spacing-400, 1rem);
  bottom: var(--spacing-400, 1rem);
  width: var(--aldo-expanded-width, max(50vw, 36rem));
  max-width: calc(100vw - 2 * var(--spacing-400, 1rem));
  padding-bottom: var(--spacing-400, 1rem);
  font-size: var(--_aldo-text);
  border-radius: var(--radius-300, 0.75rem);
  box-shadow: var(--elevation-5), var(--bcn-aldo-prompt-shadow);
  line-height: 1.6;
  animation: 0.24s ease-out bcn-aldo-pin;
  position: fixed;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
  padding-block: var(--spacing-400);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__title {
  font-size: 1rem;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-thread {
  padding-block: var(--spacing-500) var(--spacing-200);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-needs__list {
  max-height: none;
  overflow: visible;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-composer__shell {
  --_aldo-radius: 1rem;
  margin-inline: var(--_aldo-pad);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-300) var(--spacing-400);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-composer__menu {
  left: var(--_aldo-pad);
  right: var(--_aldo-pad);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__body {
    animation: none;
  }
}
.bcn-aldo-panel[data-side-open] .bcn-aldo-panel__waiting svg {
  transform: rotate(180deg);
}
.bcn-aldo-panel[data-side-open] .bcn-aldo-panel__side {
  z-index: 5;
  top: var(--_aldo-head-h, 3rem);
  left: var(--spacing-200);
  right: var(--spacing-200);
  max-height: min(70%, 28rem);
  padding: var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-4);
  animation: 0.16s ease-out bcn-aldo-tray;
  display: flex;
  position: absolute;
  overflow-y: auto;
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__body {
    width: var(--aldo-expanded-width, 60vw);
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr) 17.5rem;
    gap: 0;
    padding-bottom: 0;
    display: grid;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
    grid-column: 1/-1;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__waiting {
    display: none;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__main {
    --_aldo-pad: max(var(--spacing-500, 1.5rem), calc((100% - 46rem) / 2));
    padding-bottom: var(--spacing-400);
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
    padding-inline: var(--spacing-500, 1.5rem);
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side {
    min-height: 0;
    max-height: none;
    box-shadow: none;
    padding: var(--spacing-400);
    gap: var(--spacing-500, 1.5rem);
    border: 0;
    border-left: var(--_aldo-line) solid var(--color-border-default-subtle);
    background: var(--color-background-elevation-raised);
    border-radius: 0;
    border-bottom-right-radius: inherit;
    font-size: 0.8125rem;
    line-height: 1.45;
    animation: none;
    display: flex;
    position: static;
    overflow-y: auto;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side .bcn-aldo-needs__toggle {
    pointer-events: auto;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side .bcn-aldo-needs__toggle svg {
    display: inline;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded]
    .bcn-aldo-panel__side
    .bcn-aldo-needs[data-folded]
    .bcn-aldo-needs__list {
    display: none;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded]
    .bcn-aldo-panel__body:not(:has(.bcn-aldo-panel__side > :not([hidden]))) {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded]
    .bcn-aldo-panel__body:not(:has(.bcn-aldo-panel__side > :not([hidden])))
    .bcn-aldo-panel__side {
    display: none;
  }
}
.bcn-admin-cue {
  border-radius: var(--radius-full);
  color: #fff;
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  align-items: center;
  gap: 1px;
  padding: 1px;
  display: inline-flex;
}
@supports not (backdrop-filter: blur(1px)) {
  .bcn-admin-cue {
    background: var(--bcn-helpbar-bg-solid);
  }
}
@media (prefers-reduced-transparency: reduce) {
  .bcn-admin-cue {
    background: var(--bcn-helpbar-bg-solid);
    backdrop-filter: none;
  }
}
.bcn-admin-cue[hidden] {
  display: none;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn[hidden] {
  display: none;
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
.bcn-admin-cue esa-tooltip {
  --color-background-default-knockout: var(--bcn-helpbar-bg-solid);
  --color-content-default-knockout: var(--bcn-helpbar-fg);
  display: inline-flex;
}
.bcn-gd {
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --side-dialog-width: 460px;
  --side-dialog-backdrop-filter: blur(2px);
}
.bcn-gd__header {
  --bcn-aldo-mark-size: 22px;
  --bcn-aldo-ring-from: var(--color-teal-7);
  --bcn-aldo-ring-to: var(--bcn-aldo);
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-width: 0;
  display: flex;
}
.bcn-gd__title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.2;
}
.bcn-gd__stream {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-gd__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-gd__section[hidden] {
  display: none;
}
.bcn-gd__label {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__here-head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-gd__here-purpose {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.5;
}
.bcn-gd__pick[hidden] {
  display: none;
}
.bcn-gd-trow:is(:hover, :focus-within) .bcn-gd-row {
  padding-inline-end: calc(var(--_tools-w, 52px) + var(--spacing-200));
}
.bcn-gd-trow[data-hidden-here] .bcn-gd-row__title,
.bcn-gd-trow[data-hidden-here] .bcn-gd-row__sub {
  color: var(--color-content-default-tertiary);
}
.bcn-gd__rows {
  flex-direction: column;
  display: flex;
}
.bcn-gd__rows:empty {
  display: none;
}
.bcn-gd-row {
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300) var(--spacing-100);
  border: 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  display: flex;
}
.bcn-gd-row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-gd-row__text {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-gd-row__title {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-gd-row__sub {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
  line-height: 1.4;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__foot {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-gd__browse {
  align-self: flex-end;
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand);
  text-decoration: none;
  display: inline-flex;
}
.bcn-gd__browse:hover {
  text-decoration: underline;
}
.bcn-gd__aldo .bcn-aldo-composer__shell {
  margin: 0;
}
.bcn-gd-msg {
  gap: var(--spacing-300);
  align-items: flex-start;
  display: flex;
}
.bcn-gd__chat .bcn-aldo-msg__text {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-gd-msg__group {
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
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
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
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
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
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
```
