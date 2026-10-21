# Topic Index: styles

```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.bcn-topic-dot {
  background: var(--_ink, var(--bcn-topic-slate-ink));
  border-radius: 50%;
  flex: none;
  width: 0.625rem;
  height: 0.625rem;
  display: inline-block;
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
.bcn-topic-dot[data-shade] {
  background: var(--_hl);
  box-shadow: inset 0 0 0 1.5px var(--_ink);
}
.bcn-topic-dot[data-family="none"] {
  box-shadow: none;
  border: 1.5px dashed var(--_ink);
  background: 0 0;
}
.bcn-topic-dot[data-suggested] {
  background: color-mix(in srgb, var(--_ink) 22%, var(--color-background-elevation-raised));
  box-shadow: none;
  border: 1.5px dashed var(--_ink);
  box-sizing: border-box;
}
.bcn-proposal-ring {
  border: 1.5px solid #0000;
  border-radius: 50%;
  padding: 1px;
  display: inline-flex;
}
.bcn-proposal-ring[data-suggested] {
  border: 1.5px dashed var(--color-content-default-tertiary);
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
.bcn-cbt {
  position: relative;
}
.bcn-cbt__picker {
  z-index: 30;
  width: 22rem;
  padding: var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  box-shadow: var(--elevation-4);
  position: absolute;
}
.bcn-cbt__picker[hidden] {
  display: none;
}
.bcn-cbt__tools {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  min-height: 2rem;
  display: flex;
}
.bcn-cbt__status {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default);
  display: inline-flex;
}
.bcn-cbt__status[hidden] {
  display: none;
}
.bcn-cbt__verbs {
  gap: var(--spacing-100);
  margin-left: auto;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__expert {
  align-items: center;
  gap: var(--spacing-150, 0.375rem);
  font-weight: var(--typography-font-weight-regular);
  margin-left: auto;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__expert esa-select {
  width: 11rem;
}
.bcn-cbt .bcn-cbt__expert + .bcn-cbt__verbs {
  margin-left: 0;
}
.bcn-cbt__list {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-cbt .bcn-cbt__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-cbt .bcn-cbt__cat:last-child {
  border-radius: 0 0 var(--radius-200) var(--radius-200);
  border-bottom: none;
}
.bcn-cbt .bcn-cbt__cat:nth-child(2n of .bcn-cbt__cat) {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 50%,
    var(--color-background-elevation-raised)
  );
}
.bcn-cbt .bcn-cbt__sub + .bcn-cbt__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cbt .bcn-cbt__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  line-height: 1.4;
  display: flex;
}
.bcn-cbt .bcn-cbt__row--cat {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-cbt .bcn-cbt__row--sub {
  padding-left: calc(var(--spacing-400) + 4px);
  cursor: pointer;
}
.bcn-cbt .bcn-cbt__row--sub:hover {
  background: var(--color-background-default);
}
.bcn-cbt .bcn-cbt__chev {
  all: unset;
  cursor: pointer;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__chev[aria-expanded="true"] {
  transform: rotate(90deg);
}
.bcn-cbt .bcn-cbt__chev:disabled {
  visibility: hidden;
}
.bcn-cbt .bcn-cbt__chev:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-cbt .bcn-cbt__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  min-width: 0;
  padding: 0 2px;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__name[contenteditable="true"] {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  background: var(--color-background-elevation-raised);
  cursor: text;
  text-overflow: clip;
}
.bcn-cbt .bcn-cbt__verbs {
  flex-shrink: 0;
  justify-content: flex-end;
  gap: 2px;
  min-width: 56px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__verbs esa-tooltip {
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__verb {
  border-radius: var(--radius-100);
  width: 24px;
  height: 24px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__verb--quiet {
  opacity: 0;
  transition: opacity 0.12s;
}
.bcn-cbt :is(.bcn-cbt__row, .bcn-cbt__item):is(:hover, :focus-within) .bcn-cbt__verb--quiet {
  opacity: 1;
}
.bcn-cbt .bcn-cbt__verb:hover {
  background: var(--color-background-default);
  color: var(--color-content-default);
}
.bcn-cbt .bcn-cbt__verb:focus-visible {
  opacity: 1;
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 1px;
}
.bcn-cbt .bcn-cbt__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-cbt .bcn-cbt__verb[aria-pressed="true"] {
  color: var(--color-content-default);
}
.bcn-cbt .bcn-cbt__items {
  padding: 0 0 var(--spacing-200);
  margin: 0;
  list-style: none;
}
.bcn-cbt .bcn-cbt__item {
  align-items: center;
  gap: var(--spacing-300);
  min-height: 30px;
  padding: 0 var(--spacing-400) 0 calc(var(--spacing-400) + 44px);
  grid-template-columns: 3.5rem 10rem minmax(0, 1fr) minmax(0, 17rem) 56px;
  display: grid;
}
.bcn-cbt .bcn-cbt__item + .bcn-cbt__item {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cbt .bcn-cbt__item:hover {
  background: var(--color-background-default);
}
.bcn-cbt .bcn-cbt__key {
  color: var(--color-content-secondary);
  font-variant-numeric: tabular-nums;
}
.bcn-cbt .bcn-cbt__who {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__who:hover {
  text-decoration: underline;
}
.bcn-cbt .bcn-cbt__who:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 1px;
  border-radius: 2px;
}
.bcn-cbt :is(.bcn-cbt__excerpt, .bcn-cbt__resp) {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__excerpt {
  color: var(--color-content-secondary);
}
.bcn-cbt .bcn-cbt__resp {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default);
  text-decoration: none;
  display: inline-flex;
}
.bcn-cbt a.bcn-cbt__resp:hover .bcn-cbt__title {
  text-decoration: underline;
}
.bcn-cbt .bcn-cbt__resp svg {
  flex-shrink: 0;
}
.bcn-cbt .bcn-cbt__resp > span:last-child {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-cbt .bcn-cbt__resp[data-state="draft"] svg {
  color: var(--color-content-secondary);
}
.bcn-cbt .bcn-cbt__resp[data-state="planned"] svg {
  color: var(--color-content-success, var(--color-content-default));
}
.bcn-cbt .bcn-cbt__resp[data-state="none"] {
  color: var(--color-content-default-tertiary);
}
.bcn-cbt .bcn-cbt__resp esa-tooltip,
.bcn-cbt .bcn-cbt__glyph {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-cbt .bcn-cbt__resp {
  min-width: 0;
}
.bcn-cbt .bcn-cbt__item[data-moved] {
  animation: 1.2s ease-out bcn-cbt-moved;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-cbt .bcn-cbt__item[data-moved] {
    animation: none;
  }
}
.bcn-si .bcn-si__dots .bcn-topic-dot,
.bcn-si .bcn-si__more {
  width: 0.875rem;
  height: 0.875rem;
  box-shadow: 0 0 0 2px var(--color-background-elevation-raised);
}
.bcn-si .bcn-si__legend .bcn-topic-dot {
  align-self: center;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-avatar {
  --_avatar-size: var(--avatar-size-md, 40px);
  --_avatar-font-size: var(
    --avatar-font-size-md,
    var(--typography-label-md-strong-font-size, var(--font-size-200, 0.9375rem))
  );
  --_avatar-radius: var(--radius-pill, 9999px);
  --_avatar-bg: var(--avatar-bg, hsl(var(--_avatar-hue, 200) 45% 65%));
  --_avatar-text: var(--color-content-default-knockout, #fcfcfc);
  width: var(--_avatar-size);
  height: var(--_avatar-size);
  border-radius: var(--_avatar-radius);
  background: var(--_avatar-bg);
  color: var(--_avatar-text);
  font-size: var(--_avatar-font-size);
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  overflow: hidden;
}
.esa-avatar--xs {
  --_avatar-size: var(--avatar-size-xs, 20px);
  --_avatar-font-size: var(
    --avatar-font-size-xs,
    var(--typography-label-2xs-strong-font-size, var(--font-size-050, 0.625rem))
  );
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
.bcn-ap__input {
  margin: 0 calc(-1 * var(--spacing-200));
  --focus-ring-color: var(--color-background-elevation-raised);
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
