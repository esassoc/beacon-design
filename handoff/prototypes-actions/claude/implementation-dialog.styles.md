# Implementation dialog: styles

```css
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-aid__dialog {
  --dialog-width-lg: min(1900px, 94vw);
  --_dialog-max-height: 86vh;
  --_dialog-padding: 0;
  --_dialog-bg: var(--color-background-elevation-raised, #fcfcfc);
  --_aid-stage: max(360px, calc(86vh - 15rem));
}
@media (height<=860px) {
  .bcn-aid__dialog {
    --_dialog-max-height: 94vh;
    --_aid-stage: max(320px, calc(94vh - 15rem));
  }
}
.bcn-aid [hidden] {
  display: none !important;
}
.bcn-aid__head {
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-300);
  min-width: 0;
  padding: var(--spacing-500) var(--spacing-500) var(--spacing-400);
  flex: 1;
  display: flex;
}
.bcn-aid__head-text {
  gap: var(--spacing-150);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-aid__mark {
  flex: none;
  display: inline-flex;
}
.bcn-aid__mark:not(:has(> :not([hidden]))) {
  display: none;
}
.bcn-aid__scope {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  font-weight: 550;
  display: flex;
}
.bcn-aid__title {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-aid__title-name {
  color: var(--color-content-default);
}
.bcn-aid__head-actions {
  flex: none;
}
.bcn-aid__tabs {
  display: block;
}
.bcn-aid__stage {
  height: var(--_aid-stage);
  min-height: 0;
}
.bcn-aid__overview {
  grid-template-columns: minmax(0, 1fr) 380px;
  display: grid;
}
.bcn-aid__main {
  gap: var(--spacing-600);
  min-width: 0;
  min-height: 0;
  padding: 0 var(--spacing-500) var(--spacing-500);
  flex-direction: column;
  display: flex;
  overflow-y: auto;
}
.bcn-aid__side {
  gap: var(--spacing-400);
  min-width: 0;
  min-height: 0;
  padding: 0 var(--spacing-500) var(--spacing-500);
  flex-direction: column;
  display: flex;
  overflow-y: auto;
}
.bcn-aid__discussion {
  padding: 0 var(--spacing-500) var(--spacing-500);
  overflow-y: auto;
}
.bcn-aid__discussion > div {
  max-width: 56rem;
}
.bcn-aid__kv {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-aid__kv-head {
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-300);
  padding-bottom: var(--spacing-200);
  border-bottom: 1px solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-aid__kv-keys {
  gap: var(--spacing-050);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-aid__kv-key {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-aid__kv-sub {
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-aid__text {
  color: var(--color-content-default);
  white-space: pre-wrap;
  margin: 0;
}
.bcn-aid__value {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-aid__none {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-style: italic;
}
.bcn-aid__notice {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  font-style: italic;
  display: flex;
}
.bcn-aid__end {
  --justify: flex-end;
}
.bcn-aid__center {
  --justify: center;
}
.bcn-aid__empty {
  padding: var(--spacing-500);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  background: var(--color-background-elevation-sunken);
}
.bcn-aid__req {
  gap: var(--spacing-400);
  padding: var(--spacing-400) var(--spacing-500);
  border-radius: var(--radius-sm);
  background: var(--color-background-elevation-sunken);
  flex-direction: column;
  display: flex;
}
.bcn-aid__req-text {
  font-family: var(--font-decorative);
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.6;
}
.bcn-aid__req-kv {
  --grid-min: 11rem;
}
.bcn-aid__na {
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-aid__list-link {
  color: var(--color-content-link);
  text-decoration: none;
}
.bcn-aid__list-link:hover {
  color: var(--color-content-link-hover);
  text-decoration: underline;
}
.bcn-aid__due-value {
  color: var(--color-content-default);
}
.bcn-aid__due-value[data-empty] {
  font-style: italic;
  font-weight: var(--typography-font-weight-regular, 400);
  color: var(--color-content-default-secondary);
}
.bcn-aid__due-original {
  color: var(--color-content-default-tertiary);
}
[data-aid-kv][data-empty] .bcn-key-value__val,
[data-aid-req-kv][data-empty] .bcn-key-value__val {
  font-style: italic;
  font-weight: var(--typography-font-weight-regular, 400);
  color: var(--color-content-default-secondary);
}
.bcn-aid__opt-group {
  list-style: none;
}
.bcn-aid__opt-group + .bcn-aid__opt-group {
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-100);
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-aid__opt-group-label {
  padding: var(--spacing-150) var(--spacing-300) var(--spacing-050);
  color: var(--color-content-default-secondary);
  display: block;
}
.bcn-aid__opt-group-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-aid__foot {
  --justify: flex-end;
  width: 100%;
  padding: 0 var(--spacing-500);
}
@media (width<=960px) {
  .bcn-aid__overview {
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
}
@media (width<=960px) {
  .bcn-aid__main,
  .bcn-aid__side {
    overflow: visible;
  }
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
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: var(--_aldo-gap);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
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
.bcn-aldo-panel__side .bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: 0 var(--spacing-200);
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
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border-default);
  --pill-text-color: var(--color-content-default-secondary);
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
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
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
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
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-component-picker__tmark .bcn-entity-logo {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
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
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.grid {
  --gap: var(--spacing-400, 1rem);
  --grid-min: 16rem;
  gap: var(--gap);
  grid-template-columns: repeat(auto-fit, minmax(min(var(--grid-min), 100%), 1fr));
  display: grid;
}
.bcn-change-log {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-change-log__day {
  padding: 0 0 var(--spacing-400) var(--spacing-500);
  border-left: 2px solid var(--color-border-default);
  margin-left: 5px;
  position: relative;
}
.bcn-change-log__day:last-child {
  border-left-color: #0000;
  padding-bottom: 0;
}
.bcn-change-log__day:before {
  content: "";
  background: var(--color-background-elevation-raised);
  border: 2px solid var(--color-background-brand-muted);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 3px;
  left: -6px;
}
.bcn-change-log__date {
  margin: 0 0 var(--spacing-200);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-change-log__events {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-change-log__event {
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-change-log__text {
  color: var(--color-content-default);
  font-size: 0.875rem;
  line-height: 1.4;
}
.bcn-change-log__by {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-change-log__meta .bcn-change-log__by {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-disc {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-disc__head {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__none {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-disc__tl {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-disc__item {
  gap: var(--spacing-300);
  padding-bottom: var(--spacing-400);
  grid-template-columns: auto 1fr;
  display: grid;
  position: relative;
}
.bcn-disc__item:not(:last-child):before {
  content: "";
  background: var(--color-border-default);
  width: 2px;
  position: absolute;
  top: 32px;
  bottom: 0;
  left: 13px;
}
.bcn-disc__item--compose {
  padding-bottom: 0;
}
.bcn-disc__node {
  z-index: 1;
  position: relative;
}
.bcn-disc__node .esa-avatar {
  --_avatar-bg: var(--_node-color, var(--color-background-brand-muted));
}
.bcn-disc__body {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-disc__meta {
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-disc__author {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-disc__time {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-disc__edited {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
  font-style: italic;
}
.bcn-disc__text {
  color: var(--color-content-default);
  white-space: pre-wrap;
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}
.bcn-disc__actions {
  opacity: 0;
  align-items: center;
  gap: 1px;
  margin-left: auto;
  transition: opacity 0.12s;
  display: inline-flex;
}
.bcn-disc__item:hover .bcn-disc__actions,
.bcn-disc__item:focus-within .bcn-disc__actions {
  opacity: 1;
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-disc__compose {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-disc__as {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-disc__compose esa-textarea {
  width: 100%;
}
.bcn-disc__compose-actions {
  justify-content: flex-end;
  display: flex;
}
.esa-pill {
  --_pill-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_pill-text: var(--color-content-default, #202020);
  --_pill-border: var(--color-border-default-subtle, #d9d9d9);
  --_pill-padding-y: var(--spacing-150, 0.375rem);
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  align-items: center;
  gap: var(--_pill-gap);
  padding-block: var(--_pill-padding-y);
  padding-inline: var(--_pill-padding-x);
  border: var(--border-width-default, 1px) solid var(--_pill-border);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  white-space: nowrap;
  box-sizing: border-box;
  display: inline-flex;
}
.esa-pill--sm {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill[data-category] {
  --_pill-bg: var(--category-2, var(--color-background-elevation-sunken, #f0f0f0));
  --_pill-border: var(--category-6, var(--color-border-default-subtle, #d9d9d9));
  --_pill-text: var(--category-11, var(--color-content-default, #202020));
}
.bcn-evidence-list {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-evidence-list__row-actions {
  gap: var(--spacing-300);
  display: flex;
}
.bcn-evidence-list__items {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-evidence-card .esa-card__header {
  min-height: 0;
  padding-block: var(--spacing-100);
}
.bcn-evidence-card:not(.is-expanded) .esa-card__header {
  border-bottom: 0;
}
.bcn-evidence-card__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-150);
  width: 100%;
  padding-inline: var(--spacing-200);
  display: flex;
}
.bcn-evidence-card__lead {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 0;
  padding: var(--spacing-150) 0;
  cursor: pointer;
  flex: 1;
  display: flex;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__name {
  min-width: 0;
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-evidence-card__actions {
  flex-shrink: 0;
  align-items: center;
  gap: 1px;
  display: flex;
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-evidence-card__actions .bcn-evidence-card__star--on {
  color: var(--color-background-accent);
}
.bcn-evidence-card__actions .bcn-evidence-card__star--on svg {
  fill: currentColor;
}
.bcn-evidence-card__fields[hidden] {
  display: none;
}
.bcn-evidence-card__fields {
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-evidence-card__field {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.bcn-evidence-card__label {
  align-items: center;
  gap: var(--spacing-150);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: inline-flex;
}
.bcn-evidence-card__text {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-evidence-card__text--muted {
  color: var(--color-content-default-tertiary);
  font-style: italic;
}
.bcn-evidence-card__pills {
  gap: var(--spacing-150);
  flex-wrap: wrap;
  display: flex;
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
.esa-avatar--sm {
  --_avatar-size: var(--avatar-size-sm, 28px);
  --_avatar-font-size: var(
    --avatar-font-size-sm,
    var(--typography-label-xs-strong-font-size, var(--font-size-100, 0.75rem))
  );
}
.bcn-entity-logo {
  background: color-mix(in srgb, var(--_c) 12%, transparent);
  color: var(--_c);
  border: 1px solid color-mix(in srgb, var(--_c) 30%, transparent);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
  overflow: hidden;
}
.bcn-entity-logo[data-style="fill"] {
  background: var(--_c);
  color: var(--color-content-default-knockout);
  border-color: #0000;
}
.bcn-entity-logo[data-style="image"] {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-border-default-subtle);
}
.bcn-entity-logo[data-size="sm"] {
  width: 24px;
  height: 24px;
}
.bcn-entity-logo[data-size="md"] {
  --icon-size-sm: 18px;
  width: 32px;
  height: 32px;
}
.bcn-entity-logo[data-size="lg"] {
  width: 48px;
  height: 48px;
}
.bcn-entity-logo[data-size="xl"] {
  --icon-size-xl: 36px;
  width: 72px;
  height: 72px;
}
.bcn-entity-logo[data-size="2xl"] {
  --icon-size-xl: 44px;
  width: 92px;
  height: 92px;
}
.bcn-entity-logo[data-shape="rounded"][data-size="sm"],
.bcn-entity-logo[data-shape="rounded"][data-size="md"] {
  border-radius: var(--radius-200);
}
.bcn-entity-logo[data-shape="rounded"][data-size="lg"],
.bcn-entity-logo[data-shape="rounded"][data-size="xl"],
.bcn-entity-logo[data-shape="rounded"][data-size="2xl"] {
  border-radius: var(--radius-400);
}
.bcn-entity-logo[data-shape="circle"] {
  border-radius: var(--radius-full);
}
.bcn-entity-logo[data-variant="seal"] {
  border: var(--bcn-seal-ring-width) solid var(--bcn-seal-ring-color);
  box-shadow: var(--bcn-seal-shadow);
  box-sizing: content-box;
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
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card__header {
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: var(--border-width-default, 1px) solid var(--_card-header-border);
  justify-content: space-between;
  align-items: center;
  min-height: 56px;
  display: flex;
}
.esa-card__body {
  padding: var(--_card-padding);
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush > .esa-collapsible__summary,
.esa-collapsible--flush > .esa-collapsible__body {
  padding-inline: 0;
}
.esa-collapsible__summary {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  color: var(--color-content-default, #202020);
  cursor: pointer;
  list-style: none;
  display: flex;
}
.esa-collapsible__summary::-webkit-details-marker {
  display: none;
}
.esa-collapsible__summary:after {
  content: "";
  border-right: 2px solid var(--color-content-default-secondary, #646464);
  border-bottom: 2px solid var(--color-content-default-secondary, #646464);
  width: 8px;
  height: 8px;
  margin-left: auto;
  transition: transform 0.15s;
  transform: rotate(-45deg);
}
.esa-collapsible[open] > .esa-collapsible__summary:after {
  transform: rotate(45deg);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.esa-collapsible__body {
  gap: var(--spacing-400, 1rem);
  padding: 0 var(--spacing-400, 1rem) var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
}
.bcn-key-value {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-key-value[data-layout="row"] {
  align-items: baseline;
  column-gap: var(--spacing-300);
  grid-template-columns: 6.5rem minmax(0, 1fr);
  display: grid;
}
.bcn-key-value__key {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__key {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__key {
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  color: var(--color-content-secondary);
}
.bcn-key-value[data-size="sm"] .bcn-key-value__val {
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
}
.bcn-status-select {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.bcn-status-select__label {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-status-select__dd {
  position: relative;
}
.bcn-status-select__trigger {
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  height: 40px;
  padding: 0 var(--spacing-300);
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--form-border-color);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
  display: flex;
}
.bcn-status-select__trigger:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-status-select__trigger[aria-expanded="true"] {
  border-color: var(--color-background-brand);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-background-brand) 18%, transparent);
}
.bcn-status-select__value {
  text-align: left;
  flex: 1;
}
.bcn-status-select__chev {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-status-select__trigger[aria-expanded="true"] .bcn-status-select__chev {
  transform: rotate(180deg);
}
.bcn-status-select__dot {
  border-radius: 50%;
  flex-shrink: 0;
  width: 9px;
  height: 9px;
}
.bcn-status-select[data-value="not-started"] .bcn-status-select__dot--trigger {
  background: var(--bcn-status-not-started);
}
.bcn-status-select[data-value="in-progress"] .bcn-status-select__dot--trigger {
  background: var(--bcn-status-in-progress);
}
.bcn-status-select[data-value="completed"] .bcn-status-select__dot--trigger {
  background: var(--bcn-status-completed);
}
.bcn-status-select__menu {
  z-index: 20;
  width: max-content;
  min-width: 100%;
  padding: var(--spacing-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-4);
  margin: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
}
.bcn-status-select__menu[hidden] {
  display: none;
}
.bcn-status-select__opt {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  color: var(--color-content-default);
  border-radius: var(--radius-200);
  cursor: pointer;
  white-space: nowrap;
  font-size: 0.875rem;
  display: flex;
}
.bcn-status-select__opt:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-status-select__opt[aria-selected="true"] {
  background: var(--color-background-elevation-sunken);
  font-weight: var(--typography-font-weight-semibold);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```
