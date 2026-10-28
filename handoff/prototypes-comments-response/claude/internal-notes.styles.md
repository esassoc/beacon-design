# Internal notes: styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_badge-text: var(--badge-text-color, var(--color-content-default-secondary, #646464));
  --_badge-border: var(--badge-border-color, var(--color-border-default, #cecece));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
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
.esa-button__label {
  white-space: nowrap;
}
.bcn-nc {
  gap: var(--spacing-200);
  width: min(30rem, 100%);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-3);
  font-family: var(--typography-font-family-sans);
  --form-border-width: 0;
  --color-background-field: transparent;
  flex-direction: column;
  animation: 0.18s cubic-bezier(0.2, 0.8, 0.2, 1) bcn-nc-in;
  display: flex;
}
.bcn-nc[hidden],
.bcn-nc [hidden] {
  display: none;
}
.bcn-nc:focus-within {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 0;
}
.bcn-nc[data-inline] {
  width: 100%;
  box-shadow: none;
  animation: none;
}
.bcn-nc[data-mode="aldo"] {
  border: 1.5px solid var(--bcn-aldo);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  border-radius: 20px;
}
.bcn-nc[data-mode="aldo"][data-inline] {
  box-shadow: none;
}
.bcn-nc[data-mode="aldo"]:focus-within {
  outline-color: var(--bcn-aldo-prompt-ring);
}
.bcn-nc__head {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-nc__who {
  display: inline-flex;
}
.bcn-nc__title {
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  color: var(--color-content-default);
}
.bcn-nc[data-mode="aldo"] .bcn-nc__title {
  color: var(--bcn-aldo-600);
}
.bcn-nc__quote {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-style: italic;
  font-size: var(--typography-body-md-font-size);
  color: var(--color-content-secondary);
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-nc:not([data-mode="aldo"]) .bcn-nc__quote {
  font-style: normal;
}
.bcn-nc__hl {
  background: var(--bcn-note-tint);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 2px;
  padding: 0.05em 0.1em;
}
.bcn-nc[data-mode="aldo"] .bcn-nc__hl {
  background: var(--bcn-aldo-50);
}
.bcn-nc__input {
  margin: 0 calc(-1 * var(--spacing-200));
  --focus-ring-color: transparent;
  display: block;
}
.bcn-nc__foot {
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.bcn-nc__keys {
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  margin-right: auto;
}
.bcn-nc__send {
  --button-radius-md: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  display: inline-flex;
}
.bcn-nc[data-working] {
  position: relative;
  overflow: hidden;
}
.bcn-nc[data-working]:after {
  content: "";
  background: linear-gradient(90deg, transparent, var(--bcn-aldo), transparent);
  background-repeat: no-repeat;
  background-size: 50% 100%;
  height: 2px;
  animation: 1.1s linear infinite bcn-nc-work;
  position: absolute;
  inset: auto 0 0;
}
.bcn-nc[data-working] .bcn-nc__input {
  opacity: 0.6;
}
.bcn-nc[data-working] .bcn-nc__keys {
  color: var(--bcn-aldo-600);
  font-weight: var(--typography-font-weight-semibold);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-nc {
    animation: none;
  }
}
@media (prefers-reduced-motion: reduce) {
  .bcn-nc[data-working]:after {
    background: var(--bcn-aldo);
    animation: none;
  }
}
.bcn-rn {
  max-width: 44rem;
  margin-top: var(--spacing-700, 2.5rem);
}
.bcn-rn:before {
  content: "";
  width: 6rem;
  height: 1px;
  margin-bottom: var(--spacing-400);
  background: var(--color-content-default-tertiary);
  display: block;
}
.bcn-rn[hidden],
.bcn-rn [hidden][hidden] {
  display: none;
}
.bcn-rn__head {
  align-items: center;
  gap: var(--spacing-200);
  margin-bottom: var(--spacing-300);
  display: flex;
}
.bcn-rn__all {
  gap: var(--spacing-100);
  margin-left: auto;
  display: inline-flex;
}
.bcn-rn__title {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: -0.005em;
  color: var(--color-content-default);
  margin: 0;
}
.bcn-rn .bcn-rn__num .esa-badge,
.bcn-rn__count .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default);
  border: 1px solid var(--color-border-default);
  font-variant-numeric: tabular-nums;
}
.bcn-rn__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-rn .bcn-rn__item .esa-card {
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
}
.bcn-rn .bcn-rn__item:hover .esa-card {
  border-color: var(--color-border-default-strong, var(--color-border-default));
}
.bcn-rn .bcn-rn__item[data-flash] .esa-card {
  border-color: var(--color-content-default-tertiary);
  box-shadow: var(--elevation-2);
}
.bcn-rn .bcn-rn__card {
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-300);
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  display: grid;
}
.bcn-rn .bcn-rn__num {
  grid-column: 1;
  padding-top: 0.15em;
}
.bcn-rn .bcn-rn__passage {
  all: unset;
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-style: italic;
  font-size: var(--typography-body-md-font-size);
  color: var(--color-content-default);
  cursor: pointer;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  grid-column: 2;
  line-height: 1.6;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-rn .bcn-rn__num[hidden] + .bcn-rn__passage {
  grid-column: 1/3;
}
.bcn-rn .bcn-rn__hl {
  background: var(--bcn-note-tint);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 2px;
  padding: 0.05em 0.1em;
  transition: background-color 0.15s;
}
.bcn-rn .bcn-rn__passage:hover:not(:disabled) .bcn-rn__hl {
  background: var(--bcn-note-tint-lit);
}
.bcn-rn .bcn-rn__item[data-resolved] .bcn-rn__hl,
.bcn-rn .bcn-rn__passage:disabled .bcn-rn__hl {
  background: 0 0;
}
.bcn-rn .bcn-rn__passage:disabled {
  cursor: default;
  color: var(--color-content-secondary);
}
.bcn-rn .bcn-rn__passage:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--radius-sm);
}
.bcn-rn .bcn-rn__fold {
  margin: calc(-1 * var(--spacing-100)) calc(-1 * var(--spacing-100)) 0 0;
  grid-area: 1/3;
}
.bcn-rn .bcn-rn__fold svg {
  transition: transform 0.15s;
}
.bcn-rn .bcn-rn__item[data-collapsed] .bcn-rn__fold svg {
  transform: rotate(-90deg);
}
.bcn-rn .bcn-rn__summary,
.bcn-rn .bcn-rn__body {
  grid-column: 2/4;
  min-width: 0;
}
.bcn-rn .bcn-rn__summary {
  margin: calc(-1 * var(--spacing-200)) 0 0;
  font-size: var(--typography-label-sm-font-size);
  color: var(--color-content-secondary);
}
.bcn-rn .bcn-rn__body {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-rn .bcn-rn__item:is([data-collapsed], [data-composing]) .esa-card__footer {
  display: none;
}
.bcn-rn .bcn-rn__thread {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-rn .bcn-rn__entry {
  gap: var(--spacing-200);
  grid-template-columns: 20px minmax(0, 1fr);
  align-items: start;
  display: grid;
}
.bcn-rn .bcn-rn__who-mark {
  padding-top: 1px;
  display: inline-flex;
}
.bcn-rn .bcn-rn__meta {
  align-items: baseline;
  gap: var(--spacing-150, 0.375rem);
  font-family: var(--typography-font-family-sans);
  font-size: var(--typography-label-sm-font-size);
  margin: 0;
  line-height: 20px;
  display: flex;
}
.bcn-rn .bcn-rn__who {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-rn .bcn-rn__when {
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
  font-size: 0.8125rem;
}
.bcn-rn .bcn-rn__when:before {
  content: "·";
  margin-right: var(--spacing-150, 0.375rem);
}
.bcn-rn .bcn-rn__text {
  margin: var(--spacing-050, 0.125rem) 0 0;
  max-width: 62ch;
  font-family: var(--typography-font-family-sans);
  font-size: var(--typography-body-md-font-size);
  color: var(--color-content-default);
  text-wrap: pretty;
  line-height: 1.55;
}
.bcn-rn .bcn-rn__acts {
  align-items: center;
  gap: var(--spacing-100);
  margin: calc(-1 * var(--spacing-100)) calc(-1 * var(--spacing-200));
  display: flex;
}
.bcn-rn .bcn-rn__end {
  margin-left: auto;
  display: inline-flex;
}
.bcn-rn .bcn-rn__compose:empty {
  display: none;
}
.bcn-rn .bcn-rn__item[data-resolved] :is(.bcn-rn__passage, .bcn-rn__text, .bcn-rn__who) {
  color: var(--color-content-secondary);
}
.bcn-rn__resolved {
  margin-top: var(--spacing-400);
}
.bcn-rn__resolved > .bcn-rn__list {
  margin-top: var(--spacing-200);
}
.bcn-rn__resolved [data-rn-toggle] svg {
  transition: transform 0.15s;
}
.bcn-rn__resolved[data-open] [data-rn-toggle] svg {
  transform: rotate(90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-rn .bcn-rn__item .esa-card,
  .bcn-rn .bcn-rn__fold svg,
  .bcn-rn .bcn-rn__hl,
  .bcn-rn__resolved [data-rn-toggle] svg {
    transition: none;
  }
}
.bcn-rr__panel-link .esa-icon {
  color: var(--color-content-secondary);
}
.bcn-rr__panel-link:hover .esa-icon {
  color: var(--color-content-default);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
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
.esa-card {
  --_card-bg: var(--card-bg, var(--color-background-elevation-raised, #fcfcfc));
  --_card-border: var(--card-border-color, var(--color-border-default, #cecece));
  --_card-radius: var(--radius-md, 0.5rem);
  --_card-padding: var(--spacing-500, 1.5rem);
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--color-content-default, #202020);
  --_card-header-border: var(--color-border-default-subtle, #d9d9d9);
  --_card-meta-label-color: var(--color-content-default-secondary, #646464);
  --_card-meta-label-size: var(--typography-label-sm-font-size, 0.875rem);
  --_card-meta-value-size: var(--typography-label-md-font-size, 0.9375rem);
  background: var(--_card-bg);
  border: var(--border-width-default, 1px) solid var(--_card-border);
  border-radius: var(--_card-radius);
  display: block;
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.bcn-record-id .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default);
  border: 1px solid var(--color-border-default);
  font-variant-numeric: tabular-nums;
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
