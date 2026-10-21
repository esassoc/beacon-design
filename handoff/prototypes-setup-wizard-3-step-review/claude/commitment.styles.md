# Commitment: styles

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
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
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
mark.bcn-hl {
  --_hl: var(--bcn-topic-slate-1);
  background: var(--_hl);
  color: inherit;
  border-radius: var(--radius-xs, 2px);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.12em;
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="amber"] {
  --_ink: var(--bcn-topic-amber-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="blue"] {
  --_ink: var(--bcn-topic-blue-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="violet"] {
  --_ink: var(--bcn-topic-violet-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="grass"] {
  --_ink: var(--bcn-topic-grass-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="orange"] {
  --_ink: var(--bcn-topic-orange-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="crimson"] {
  --_ink: var(--bcn-topic-crimson-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="slate"] {
  --_ink: var(--bcn-topic-slate-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="none"] {
  --_ink: var(--color-content-default-tertiary);
}
mark.bcn-hl[data-suggested] {
  outline: 1.5px dashed var(--_ink);
  outline-offset: 0;
}
mark.bcn-hl[data-family="none"] {
  --_hl: transparent;
  outline: 1.5px dashed var(--color-border-default);
  outline-offset: -1px;
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="1"] {
  --_hl: var(--bcn-topic-amber-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="2"] {
  --_hl: var(--bcn-topic-amber-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="3"] {
  --_hl: var(--bcn-topic-amber-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="4"] {
  --_hl: var(--bcn-topic-amber-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="1"] {
  --_hl: var(--bcn-topic-blue-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="2"] {
  --_hl: var(--bcn-topic-blue-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="3"] {
  --_hl: var(--bcn-topic-blue-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="4"] {
  --_hl: var(--bcn-topic-blue-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="1"] {
  --_hl: var(--bcn-topic-violet-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="2"] {
  --_hl: var(--bcn-topic-violet-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="3"] {
  --_hl: var(--bcn-topic-violet-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="4"] {
  --_hl: var(--bcn-topic-violet-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="1"] {
  --_hl: var(--bcn-topic-grass-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="2"] {
  --_hl: var(--bcn-topic-grass-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="3"] {
  --_hl: var(--bcn-topic-grass-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="4"] {
  --_hl: var(--bcn-topic-grass-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="1"] {
  --_hl: var(--bcn-topic-orange-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="2"] {
  --_hl: var(--bcn-topic-orange-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="3"] {
  --_hl: var(--bcn-topic-orange-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="4"] {
  --_hl: var(--bcn-topic-orange-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="1"] {
  --_hl: var(--bcn-topic-crimson-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="2"] {
  --_hl: var(--bcn-topic-crimson-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="3"] {
  --_hl: var(--bcn-topic-crimson-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="4"] {
  --_hl: var(--bcn-topic-crimson-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="1"] {
  --_hl: var(--bcn-topic-slate-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="2"] {
  --_hl: var(--bcn-topic-slate-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="3"] {
  --_hl: var(--bcn-topic-slate-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="4"] {
  --_hl: var(--bcn-topic-slate-4);
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
@container (width<=640px) {
  .bcn-sw3c__group [data-c-tool] .esa-button__label {
    display: none;
  }
}
@container (width<=540px) {
  .bcn-sw3c__group [data-c-pages] .esa-button__label,
  .bcn-sw3c__rule {
    display: none;
  }
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
  box-shadow: inset 0 1px 3px color-mix(in srgb, var(--color-content-default) 22%, transparent);
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
@container sw3c-page (width>=46rem) {
  .bcn-sw3c__text,
  .bcn-sw3c__unanchored,
  .bcn-sw3c__parsing {
    padding-left: clamp(4rem, 14cqi - 2.5rem, 8rem);
  }
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
.bcn-sw3c__text[data-focus] mark.bcn-hl[data-ink="1"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-1);
}
.bcn-sw3c__text[data-focus] mark.bcn-hl[data-ink="2"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-2);
}
.bcn-sw3c__text[data-focus] mark.bcn-hl[data-ink="3"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-3);
}
.bcn-sw3c__text[data-focus] mark.bcn-hl[data-ink="4"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-4);
}
.bcn-sw3c__text[data-focus] mark.bcn-hl[data-ink="5"]:not([data-active]):not([data-hover]) {
  background-image: var(--bcn-marker-faint-5);
}
.bcn-sw3c__text[data-focus] mark.bcn-hl[data-ink="6"]:not([data-active]):not([data-hover]) {
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
  background: color-mix(in srgb, var(--bcn-aldo, var(--color-background-info)) 28%, transparent);
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
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
```
