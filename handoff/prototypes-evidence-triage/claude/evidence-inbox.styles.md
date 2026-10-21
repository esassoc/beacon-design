# Evidence Inbox: styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
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
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
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
.esa-card__body {
  padding: var(--_card-padding);
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
.bcn-ev-row {
  flex-direction: column;
  display: flex;
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
.bcn-ev-row__titlerow {
  align-items: center;
  gap: var(--spacing-200) var(--spacing-300);
  flex-wrap: wrap;
  min-width: 0;
  margin: 0;
  display: flex;
}
.bcn-ev-row__spacer {
  flex: 1 1 0;
  min-width: 0;
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
.bcn-ev-row__name {
  min-width: 22ch;
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex: 0 auto;
  line-height: 1.35;
}
.bcn-ev-row__tags {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  min-width: 0;
  display: flex;
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.modern-layout__body {
  flex: 1;
  padding-top: 52px;
  display: flex;
  overflow: hidden;
}
.modern-layout__content {
  flex: 1;
  min-width: 0;
  overflow-y: auto;
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.side-nav {
  background-color: var(--bcn-gray-50);
  border-right: 1px solid var(--bcn-gray-200);
  flex-direction: column;
  flex-shrink: 0;
  width: 280px;
  height: 100%;
  font-size: 0.875rem;
  transition: width 0.2s ease-in-out;
  display: flex;
  overflow: visible;
}
.side-nav.collapsed {
  width: 72px;
  max-width: 72px;
}
.sidebar-header {
  padding: var(--spacing-300) var(--spacing-400);
  flex-shrink: 0;
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .sidebar-header {
  padding: var(--spacing-300) var(--spacing-200);
}
.site-logo {
  padding: var(--spacing-200);
  border-radius: var(--spacing-050);
  align-items: center;
  text-decoration: none;
  transition: background 0.15s;
  display: inline-flex;
}
.site-logo:hover {
  background: #0000000a;
}
.site-logo__img {
  width: var(--spacing-700);
  object-fit: contain;
  object-position: left center;
  height: 3.75rem;
  transition: all 0.2s ease-in-out;
}
.side-nav.collapsed .site-logo__img {
  object-fit: contain;
  object-position: left center;
  width: 40px;
  height: 40px;
}
.project-switcher-container {
  padding: 0 var(--spacing-400) var(--spacing-300);
  flex-shrink: 0;
  min-width: 0;
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .project-switcher-container {
  padding: 0 var(--spacing-200);
}
.project-switcher__trigger {
  align-items: center;
  gap: var(--spacing-200);
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  padding: var(--spacing-200) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--bcn-gray-200);
  border-radius: var(--spacing-200);
  cursor: pointer;
  color: var(--bcn-gray-950);
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.15s;
  display: flex;
}
.project-switcher__trigger:hover {
  border-color: var(--bcn-gray-300);
  background: var(--bcn-gray-0);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.project-switcher__name {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.side-nav.collapsed .project-switcher__trigger {
  padding: var(--spacing-200);
  justify-content: center;
}
.side-nav.collapsed .project-switcher__name,
.side-nav.collapsed .project-switcher__chevron {
  display: none;
}
.main-nav {
  padding: 0 var(--spacing-400);
  gap: var(--spacing-050);
  scrollbar-width: none;
  -ms-overflow-style: none;
  flex-direction: column;
  flex: 1;
  transition: padding 0.2s ease-in-out;
  display: flex;
  overflow: visible auto;
}
.main-nav::-webkit-scrollbar {
  display: none;
}
.side-nav.collapsed .main-nav {
  padding: 0 var(--spacing-200);
}
.nav-section {
  flex-direction: column;
  display: flex;
  position: relative;
}
.nav-divider {
  height: 1px;
  margin: var(--spacing-200) 0;
  background: var(--bcn-gray-200);
  border: 0;
  flex-shrink: 0;
}
.nav-section__header {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-200);
  color: var(--bcn-gray-950);
  border-radius: var(--spacing-050);
  white-space: nowrap;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: none;
  width: 100%;
  font-size: 0.9375rem;
  font-weight: 550;
  text-decoration: none;
  transition: all 0.15s;
  display: flex;
}
.nav-section__header--link {
  color: var(--bcn-gray-950);
  text-decoration: none;
}
.nav-section__header:hover {
  color: var(--color-background-brand);
  background: #0000000a;
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
.nav-section__title {
  flex: 1;
  transition: opacity 0.2s ease-in-out;
  overflow: hidden;
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.side-nav.collapsed .nav-section__header {
  padding: var(--spacing-250) var(--spacing-200);
  justify-content: center;
}
.nav-section__items {
  opacity: 1;
  flex-direction: column;
  max-height: 500px;
  margin: 0;
  padding: 0;
  list-style: none;
  transition:
    max-height 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  display: flex;
  overflow: hidden;
}
.nav-section--collapsed .nav-section__items {
  opacity: 0;
  max-height: 0;
}
.side-nav.collapsed .nav-section__items {
  display: none;
}
.nav-item {
  padding: 0 0 0 2.5rem;
}
.nav-item + .nav-item {
  margin-top: var(--spacing-050);
}
.nav-sublink {
  padding: var(--spacing-200);
  color: var(--bcn-gray-950);
  border-radius: var(--spacing-050);
  font-size: 0.8125rem;
  line-height: 1.2;
  text-decoration: none;
  transition: all 0.15s;
  display: block;
}
.nav-sublink:hover {
  background: #0000000a;
}
.nav-sublink.active {
  color: var(--color-background-brand);
  background: #0000000a;
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
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
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
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
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
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
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
.bcn-triage-queue {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  flex-direction: column;
  height: 100%;
  min-height: 0;
  display: flex;
  overflow: hidden;
}
.bcn-triage-queue__scroll {
  min-height: 0;
  padding-bottom: var(--spacing-500);
  flex: 1;
  overflow-y: auto;
}
.bcn-triage-queue__group + .bcn-triage-queue__group {
  margin-top: 0;
}
.bcn-triage-queue__group[hidden] {
  display: none;
}
.bcn-triage-queue__day {
  z-index: 1;
  padding: var(--spacing-100) var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border-block: 1px solid var(--color-border-default-subtle);
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.4;
  position: sticky;
  top: 0;
}
.bcn-triage-queue__group:first-child .bcn-triage-queue__day {
  border-top: 0;
}
.bcn-triage-queue__list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-triage-queue__list[hidden] {
  display: none;
}
.bcn-triage-row {
  gap: var(--spacing-150);
  padding: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  display: flex;
}
.bcn-triage-row:last-child {
  border-bottom: 0;
}
.bcn-triage-row[hidden] {
  display: none;
}
.bcn-triage-row:hover {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 50%,
    var(--color-background-elevation-raised)
  );
}
.bcn-triage-row[data-active],
.bcn-triage-row[data-active]:hover {
  background: var(--color-border-default);
}
.bcn-triage-row__body {
  gap: var(--spacing-150);
  min-width: 0;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex-direction: column;
  padding: 0;
  display: flex;
}
.bcn-triage-row__body:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-triage-row__line {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-250);
  min-width: 0;
  display: flex;
}
.bcn-triage-row__title {
  min-width: 0;
  color: var(--color-content-default);
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.35;
}
.bcn-triage-row__date {
  color: var(--color-content-default-secondary);
  flex: none;
  font-size: 0.8125rem;
}
.bcn-triage-row__meta {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-triage-row__foot[hidden] {
  display: none;
}
.bcn-triage-row__foot {
  align-items: center;
  min-width: 0;
  display: flex;
}
.bcn-triage-row__match {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-triage-row__sug .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  --badge-height-md: 24px;
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-triage-queue__empty {
  padding: var(--spacing-700) var(--spacing-400);
}
.bcn-triage-queue__empty[hidden] {
  display: none;
}
.bcn-file-preview {
  min-height: 26rem;
  padding: var(--spacing-400) 0;
  background: var(--color-background-elevation-sunken);
  border-radius: var(--radius-100);
  justify-content: center;
  display: flex;
}
.bcn-file-preview__page {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  width: min(20rem, 100%);
  padding: var(--spacing-500);
  text-align: center;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  flex-direction: column;
  display: flex;
}
.bcn-file-preview__page .esa-icon {
  color: var(--color-content-default-secondary);
}
.bcn-file-preview__name {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  overflow-wrap: anywhere;
  margin: 0;
}
.bcn-file-preview__note {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-triage-review {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  flex-direction: column;
  min-height: 0;
  max-height: 100%;
  display: flex;
  overflow-y: auto;
}
.bcn-triage-review:has([data-triage-prompt]:not([hidden])) {
  background: 0 0;
  border: 0;
}
.bcn-triage-review__prompt {
  flex: 1;
  align-items: stretch;
  min-height: 22rem;
  display: flex;
}
.bcn-triage-review__invite {
  padding: var(--spacing-500);
  border: 1px dashed var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default-secondary);
  background: 0 0;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-size: 0.8125rem;
  font-style: italic;
  display: flex;
}
.bcn-triage-review__prompt[hidden] {
  display: none;
}
.bcn-triage-review__panel {
  flex-direction: column;
  display: flex;
}
.bcn-triage-review__panel[hidden] {
  display: none;
}
.bcn-triage-review__head {
  gap: var(--spacing-200);
  padding: var(--spacing-400) var(--spacing-400) var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.bcn-triage-review__titlerow {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-triage-review__close {
  flex: none;
}
.bcn-triage-review__title {
  min-width: 0;
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.3;
}
.bcn-triage-review__notes {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
}
.bcn-triage-review__facts {
  gap: var(--spacing-250) var(--spacing-400);
  margin: var(--spacing-150) 0 0;
  grid-template-columns: 1fr 1.1fr 1.6fr 1fr;
  display: grid;
}
@media (width<=60rem) {
  .bcn-triage-review__facts {
    grid-template-columns: 1fr 1fr;
  }
}
.bcn-triage-review__facts > div {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-triage-review__facts dd,
.bcn-triage-review__facts dt {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-triage-review__facts dt {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-triage-review__facts dd {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-triage-review__facts dd[data-warn] {
  font-weight: var(--typography-font-weight-regular, 400);
  color: var(--color-content-default-secondary);
  font-style: italic;
}
.bcn-triage-review__files {
  margin-top: var(--spacing-150);
  border-top: 1px solid var(--color-border-default);
}
.bcn-triage-review__files .esa-collapsible__summary {
  padding-block: var(--spacing-300) var(--spacing-150);
}
.bcn-triage-review__filelist {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-triage-review__files .esa-collapsible[open] .esa-collapsible__body {
  padding-top: var(--spacing-100);
  padding-bottom: var(--spacing-200);
}
.bcn-triage-review__section {
  gap: var(--spacing-250);
  padding: var(--spacing-300) var(--spacing-400) calc(var(--spacing-300) + var(--spacing-150));
  flex-direction: column;
  display: flex;
}
.bcn-triage-review__section + .bcn-triage-review__section {
  border-top: 1px solid var(--color-border-default);
}
.bcn-triage-review__legend {
  align-items: center;
  gap: var(--spacing-200);
  padding-block: var(--spacing-150);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.25;
  display: flex;
}
.bcn-triage-review__legend .esa-icon,
.bcn-triage-review__files .esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-triage-review__legendcount {
  margin-left: var(--spacing-150);
  display: inline-flex;
}
.bcn-triage-review__legendcount .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: color-mix(
    in srgb,
    var(--color-background-utility-info) 8%,
    var(--color-content-utility-info)
  );
  --badge-text-color: var(--color-content-default-knockout, #fff);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  font-size: 0.8125rem;
  line-height: 1;
  font-weight: var(--typography-font-weight-semibold);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  display: inline-flex;
}
.bcn-triage-review__nonetext {
  padding: var(--spacing-200) 0;
  text-align: center;
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.8125rem;
  font-style: italic;
  line-height: 1.45;
}
.bcn-triage-review__section[aria-label="Suggested\ actions"] {
  padding-left: calc(var(--spacing-400) + 1rem + var(--spacing-200));
  padding-bottom: var(--spacing-500);
}
.bcn-triage-review__sugs {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-triage-review__section[aria-label="Suggested\ actions"] {
  background: var(--color-background-utility-info-subtle);
}
.bcn-triage-review__add {
  margin-left: auto;
  display: inline-flex;
}
.bcn-triage-review__add .esa-icon-button {
  --triage-add-ink: var(--color-content-default-secondary);
  border-radius: var(--radius-100);
  color: var(--triage-add-ink);
  background: 0 0;
  border: 1px solid;
}
.bcn-triage-review__add .esa-icon {
  color: inherit;
}
.bcn-triage-review__add .esa-icon-button:hover {
  color: var(--color-content-default);
  background: var(--color-background-elevation-sunken);
}
.bcn-triage-add {
  gap: var(--spacing-300);
  flex-direction: column;
  min-height: 20rem;
  display: flex;
}
.bcn-triage-add__scope {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.8125rem;
}
.bcn-triage-add__staged[hidden] {
  display: none;
}
.bcn-triage-add__staged {
  gap: var(--spacing-200);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.bcn-triage-add__stagedlabel {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-triage-add__stagedlist {
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-triage-add__actions {
  justify-content: flex-end;
  gap: var(--spacing-250);
  display: flex;
}
.bcn-triage-sug {
  --card-padding: var(--spacing-250);
  --card-bg: var(--color-background-elevation-raised);
  --card-border-color: color-mix(in srgb, var(--color-background-utility-info) 45%, transparent);
  --card-radius: var(--radius-100);
}
.bcn-triage-sug[data-state="dismissed"] {
  opacity: 0.55;
}
.bcn-ev-row__titlerow {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-ev-row__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex: 0 auto;
  line-height: 1.35;
  overflow: hidden;
}
.bcn-ev-row__spacer {
  flex: auto;
}
.bcn-ev-row__tags {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  display: flex;
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-triage-sug__act,
.bcn-triage-sug__done {
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-200);
  margin-top: var(--spacing-250);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-wrap: wrap;
  display: flex;
}
.bcn-triage-sug__complete {
  min-width: 0;
  margin-right: auto;
}
.bcn-triage-sug__complete esa-button-toggle {
  align-items: center;
  gap: var(--spacing-200);
  flex-direction: row;
}
.bcn-triage-sug__act[hidden],
.bcn-triage-sug__done[hidden] {
  display: none;
}
.bcn-triage-review__attach .esa-collapsible[open] .esa-collapsible__body {
  padding-top: var(--spacing-150);
  padding-bottom: 0;
}
.bcn-triage-workspace__panes {
  --sidebar-width: 31rem;
  --sidebar-content-min: 42%;
  align-items: stretch;
  height: clamp(32rem, 70vh, 58rem);
}
.bcn-triage-workspace__queue {
  height: 100%;
  min-height: 0;
}
.bcn-triage-workspace__review {
  align-self: start;
  min-height: 0;
  max-height: 100%;
}
@media (width<=60rem) {
  .bcn-triage-workspace__panes {
    height: auto;
  }
}
@media (width<=60rem) {
  .bcn-triage-workspace__queue,
  .bcn-triage-workspace__review {
    height: clamp(24rem, 60vh, 40rem);
  }
}
.bcn-triage-counts {
  --gap: var(--spacing-250);
}
.bcn-triage-counts__chip {
  align-items: center;
  display: inline-flex;
}
.bcn-triage-counts__chip[hidden] {
  display: none;
}
.bcn-triage-counts__chip .esa-badge {
  --badge-height-md: 24px;
  font-weight: var(--typography-font-weight-medium);
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
}
.bcn-triage-counts__showing {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-triage-counts__showing[hidden] {
  display: none;
}
html,
.modern-layout__content {
  scroll-behavior: smooth;
}
@media (prefers-reduced-motion: reduce) {
  html,
  .modern-layout__content {
    scroll-behavior: auto;
  }
}
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
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
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
}
.bcn-file-row {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-300);
  border: var(--form-border-width, 1px) solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  grid-template-columns: auto 1fr auto auto;
  font-size: 0.875rem;
  display: grid;
}
.bcn-file-row__icon {
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-file-row__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--color-content-default);
  overflow: hidden;
}
.bcn-file-row__size {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  font-size: 0.8125rem;
}
.bcn-file-row__actions {
  align-items: center;
  gap: var(--spacing-050);
  display: inline-flex;
}
.bcn-file-row__act {
  display: inline-flex;
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
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
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
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
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
.esa-filter-clear-button {
  --_clear-text: var(--color-content-default-secondary, #646464);
  --_clear-text-hover: var(--color-content-utility-danger, var(--color-content-brand, #2a7e3b));
  --_clear-icon-size: 18px;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border-radius: var(--radius-sm, 0.25rem);
  color: var(--_clear-text);
  cursor: pointer;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  text-decoration: underline;
  display: inline-flex;
}
.esa-filter-clear-button:hover {
  color: var(--_clear-text-hover);
  background: var(--color-background-overlay-hover, #00000008);
}
.esa-filter-clear-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
.page-layout {
  min-height: calc(100vh - 52px);
  padding: var(--spacing-600);
  background: var(--bcn-gray-50);
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
}
.page-layout__container {
  flex-direction: column;
  display: flex;
}
.page-layout--bleed .page-layout__container {
  padding: 0 var(--spacing-600) var(--spacing-600);
}
.page-layout__bleed,
.page-layout section {
  width: 100%;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title {
  border-bottom: 1px solid var(--bcn-gray-200);
  padding: var(--spacing-500) 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.page-layout__title-main {
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  display: flex;
}
.page-layout__title h1 {
  align-items: center;
  gap: var(--spacing-300);
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-500);
  color: var(--bcn-gray-1000);
  margin: 0;
  display: flex;
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
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
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  gap: var(--gap);
  flex-wrap: wrap;
  display: flex;
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar > :last-child {
  min-inline-size: var(--sidebar-content-min);
  flex-grow: 999;
  flex-basis: 0;
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
.bcn-filterbar {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
}
.bcn-filterbar__top {
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__bottom {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-filterbar__top + .bcn-filterbar__bottom {
  border-top: 1px solid var(--color-border-default);
}
.bcn-filterbar__group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-filterbar__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-filterbar__search {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 380px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-filterbar__search esa-text-field {
  flex: 1;
}
.bcn-filterbar__sort {
  margin-left: var(--spacing-600);
  --typography-label-md-font-size: 14px;
}
.bcn-filterbar__sort esa-select {
  --_field-padding-y: calc((32px - 1lh) / 2 - var(--form-border-width, 1px));
  width: 9rem;
}
.bcn-filterbar__clear {
  margin-left: auto;
}
@media (width<=40rem) {
  .bcn-filterbar__search {
    min-width: 100%;
    margin-left: 0;
  }
}
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
  display: flex;
}
```
