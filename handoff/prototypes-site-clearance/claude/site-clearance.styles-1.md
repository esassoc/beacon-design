# Site Clearance: styles, part 1 of 2

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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
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
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
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
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
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
.map-wrap {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  width: 100%;
  height: 70vh;
  min-height: 480px;
  position: relative;
  overflow: hidden;
}
.map {
  z-index: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
}
.gc-reset__btn {
  justify-content: center;
  align-items: center;
  display: flex;
}
.gc-reset__btn svg {
  width: 16px;
  height: 16px;
  display: block;
}
.map-filterbar {
  margin-bottom: var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.map-filterbar__row {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.map-filterbar__row + .map-filterbar__row {
  border-top: 1px solid var(--color-border-default);
}
.map-filterbar__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.map-filterbar__goto {
  gap: var(--spacing-200);
  margin-left: auto;
  display: flex;
}
.map-filterbar__goto esa-combobox {
  font-size: var(--font-size-150);
}
.map-legend {
  bottom: var(--spacing-400);
  left: var(--spacing-400);
  z-index: 500;
  gap: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-400);
  background: color-mix(in srgb, var(--color-background-elevation-raised) 94%, transparent);
  backdrop-filter: blur(4px);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  box-shadow: var(--elevation-5);
  color: var(--color-content-default-secondary);
  flex-direction: column;
  font-size: 0.875rem;
  display: flex;
  position: absolute;
}
.map-legend__title {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.map-legend__row {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.map-legend__dot {
  width: 12px;
  height: 12px;
  box-shadow: 0 0 0 2px var(--color-background-elevation-raised);
  border-radius: 50%;
  flex-shrink: 0;
}
.map-legend__ring {
  border: 1.5px dashed var(--obs-color);
  background: color-mix(in srgb, var(--obs-color) 12%, transparent);
  box-sizing: border-box;
  border-radius: 50%;
  flex-shrink: 0;
  width: 14px;
  height: 14px;
}
.map-legend__hollow {
  border: 1.5px solid var(--obs-color);
  background: var(--color-background-elevation-raised);
  box-sizing: border-box;
  border-radius: 50%;
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  margin-inline: 2px;
}
.readiness {
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.readiness__head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.readiness__title {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.readiness__summary {
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
}
.readiness__summary strong {
  color: var(--st-cleared);
  font-weight: var(--typography-font-weight-bold);
}
.readiness__bar {
  border-radius: var(--radius-full);
  background: var(--color-background-default);
  height: 10px;
  display: flex;
  overflow: hidden;
}
.readiness__bar > div + div {
  border-left: 1px solid var(--color-background-elevation-raised);
}
.readiness__legend {
  gap: var(--spacing-200) var(--spacing-500);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.readiness__legend-item {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
  display: flex;
}
.readiness__legend-item[data-empty="true"] {
  opacity: 0.4;
}
.readiness__swatch {
  border-radius: var(--radius-050);
  flex-shrink: 0;
  width: 12px;
  height: 12px;
}
.readiness__legend-label {
  color: var(--color-content-default);
}
.readiness__legend-count {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
}
.tl {
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.tl__head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.tl__title {
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.tl__sub {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.tl__axisrow {
  gap: var(--spacing-400);
  grid-template-columns: 190px 1fr 120px;
  display: grid;
}
.tl__axis {
  height: 18px;
  position: relative;
}
.tl-tick {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  font-size: 0.8125rem;
  position: absolute;
  top: 0;
  transform: translate(-50%);
}
.tl-tick--today {
  color: var(--color-background-brand);
  font-weight: var(--typography-font-weight-semibold);
}
.tl__chart {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
  position: relative;
}
.tl-today-line {
  background: color-mix(in srgb, var(--color-background-brand) 45%, transparent);
  pointer-events: none;
  z-index: 1;
  width: 2px;
  margin-left: -1px;
  position: absolute;
  top: 0;
  bottom: 0;
}
.tl-lane {
  flex-direction: column;
  display: flex;
}
.tl-lane__label {
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-100);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.tl-lane__count {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
}
.tl-lane__rows {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tl-row {
  gap: var(--spacing-400);
  padding: var(--spacing-150) 0;
  border-top: 1px solid var(--color-border-default-subtle);
  cursor: pointer;
  grid-template-columns: 190px 1fr 120px;
  align-items: center;
  display: grid;
}
.tl-row:hover {
  background: var(--grid-row-bg-hover);
}
.tl-row__name {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.tl-row__sub {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.tl-row__track {
  border-radius: var(--radius-full);
  background: var(--color-background-default);
  height: 14px;
  position: relative;
}
.tl-dot {
  border: 2px solid var(--color-background-elevation-raised);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px #0000001f;
}
.tl-dot--hollow {
  background: var(--color-background-elevation-raised);
  border: 2.5px solid var(--st-provisional-block);
  box-shadow: none;
}
.tl-row__meta {
  text-align: right;
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tl__excluded {
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.875rem;
}
.feed {
  align-items: start;
  gap: var(--spacing-500);
  grid-template-columns: minmax(0, 1fr) 300px;
  grid-template-areas: "main side";
  display: grid;
}
.feed-main {
  grid-area: main;
  min-width: 0;
}
.feed-upcoming {
  top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  grid-area: side;
  position: sticky;
}
@media (width<=1100px) {
  .feed {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: "side" "main";
  }
}
@media (width<=1100px) {
  .feed-upcoming {
    position: static;
  }
}
.feed-upcoming[hidden] {
  display: none;
}
.feed-upcoming__list {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.feed-heading {
  margin: 0 0 var(--spacing-200);
  font-size: 1rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.feed-day__list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.entry {
  align-items: flex-start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
  display: flex;
}
.entry__badge {
  border-radius: var(--radius-100);
  font-family: var(--typography-font-family-mono, monospace);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
  flex-shrink: 0;
  margin-top: 1px;
  padding: 0.125rem 0.375rem;
  line-height: 1.4;
}
.entry__badge--obs {
  color: var(--obs-color-strong);
  background: color-mix(in srgb, var(--obs-color) 12%, white);
}
.entry__badge--wa {
  color: var(--color-background-brand);
  background: color-mix(in srgb, var(--color-background-brand) 10%, white);
}
.entry__body {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.entry__line {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__type {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.entry__sep {
  color: var(--color-content-default-tertiary);
}
.entry__primary {
  color: var(--color-content-default);
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.entry__secondary {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__meta {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-align: right;
  flex-shrink: 0;
  font-size: 0.8125rem;
}
.entry--card {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    background 0.12s,
    border-color 0.12s;
}
.entry--card:hover {
  background: var(--grid-row-bg-hover);
  border-color: var(--color-border-default-strong);
}
.entry--up {
  padding: var(--spacing-200) 0;
  cursor: pointer;
  flex-wrap: wrap;
}
.entry--up + .entry--up {
  border-top: 1px solid var(--color-border-default-subtle);
}
.entry--up .entry__meta {
  text-align: left;
  flex-basis: 100%;
}
.print-header {
  display: none;
}
@media print {
  .topbar,
  .side-nav,
  .page-layout__breadcrumbs,
  .page-layout__title {
    display: none !important;
  }
}
@media print {
  esa-tab-layout::part(tabs),
  .map-filterbar {
    display: none;
  }
}
@media print {
  .print-header {
    justify-content: space-between;
    align-items: baseline;
    gap: var(--spacing-400);
    margin-bottom: var(--spacing-300);
    display: flex;
  }
}
@media print {
  .print-header__title {
    font-size: 16pt;
    font-weight: var(--typography-font-weight-bold);
    color: var(--color-content-default);
  }
}
@media print {
  .print-header__meta {
    color: var(--color-content-default-secondary);
    font-size: 9pt;
  }
}
@media print {
  .map-wrap {
    break-inside: avoid;
    height: 380pt;
    min-height: 0;
  }
}
@media print {
  .readiness {
    break-inside: avoid;
    border-color: var(--color-border-default, #ccc);
  }
}
.bcn-filterbar {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  margin-bottom: var(--spacing-400);
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
  border-top: 1px solid var(--color-border-default);
  flex-wrap: wrap;
  display: flex;
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
  min-width: 300px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-filterbar__search esa-text-field {
  flex: 1;
}
.bcn-filterbar__clear {
  margin-left: auto;
}
.bcn-view-pane[hidden] {
  display: none;
}
.gc-grid {
  width: 100%;
  height: calc(100vh - 430px);
  min-height: 520px;
}
.table-footer {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-200) var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: 0 0 var(--radius-100) var(--radius-100);
  border-top: 0;
  display: flex;
}
.row-count-data {
  align-items: center;
  gap: var(--spacing-400);
  font-size: var(--font-size-100);
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  display: flex;
}
.filtered-rows-count {
  color: var(--color-content-default-tertiary);
}
.filtered-rows-count[hidden] {
  display: none;
}
.bcn-status-chip[data-status="provisional-block"],
.bcn-grid-chip[data-status="provisional-block"],
.bcn-status-chip[data-status="provisional-block"] .bcn-status-chip__dot,
.bcn-grid-chip[data-status="provisional-block"] .bcn-grid-chip__dot {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 1.5px var(--st-provisional-block);
}
.wa {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.wa[hidden] {
  display: none;
}
.wa__header {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.wa__headmain {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.wa__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.wa__subtitle {
  color: var(--color-content-default-secondary);
  margin: 0;
  font-size: 0.875rem;
}
.band {
  gap: var(--spacing-200) var(--spacing-300);
  margin: calc(-1 * var(--spacing-500, 1.5rem)) calc(-1 * var(--spacing-500, 1.5rem)) 0;
  padding: var(--spacing-250) var(--spacing-500, 1.5rem);
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  grid-template-columns: repeat(3, 1fr);
  display: grid;
}
.band.band--4 {
  grid-template-columns: repeat(4, 1fr);
}
.band__cell[hidden] {
  display: none;
}
.band__alert {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
}
.decide {
  gap: var(--spacing-200);
  padding: var(--spacing-250) var(--spacing-300);
  border-radius: var(--radius-200);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.decide[hidden] {
  display: none;
}
.decide[data-variant="prov"] {
  background: color-mix(in srgb, var(--st-provisional-block) 6%, transparent);
  border-color: color-mix(in srgb, var(--st-provisional-block) 45%, transparent);
  --color-background-utility-danger: var(--st-provisional-block);
}
.decide[data-variant="blocked"] {
  background: color-mix(in srgb, var(--st-blocked) 10%, transparent);
  border-color: color-mix(in srgb, var(--st-blocked) 30%, transparent);
}
.decide__line {
  min-width: 0;
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex: 1;
  margin: 0;
  line-height: 1.45;
}
.decide[data-variant="prov"] .decide__line {
  color: color-mix(in srgb, var(--st-provisional-block) 72%, #1a1a1a);
}
.decide[data-variant="blocked"] .decide__line {
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
}
.decide .obs-id {
  margin-right: var(--spacing-100);
  font-family: var(--typography-font-family-mono, monospace);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid color-mix(in srgb, var(--st-provisional-block) 45%, transparent);
  color: color-mix(in srgb, var(--st-provisional-block) 72%, #1a1a1a);
  white-space: nowrap;
}
.decide__row {
  align-items: center;
  gap: var(--spacing-250);
  display: flex;
}
.decide__row[hidden] {
  display: none;
}
.decide__row--warn .esa-icon {
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  flex-shrink: 0;
}
.decide__warntext {
  min-width: 0;
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: color-mix(in srgb, var(--st-blocked) 72%, #1a1a1a);
  flex: 1;
  line-height: 1.45;
}
.decide__actions {
  justify-content: flex-end;
  display: flex;
}
.decide__actions[hidden] {
  display: none;
}
.board {
  gap: var(--spacing-200);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.board__cell {
  align-items: flex-start;
  gap: var(--spacing-150);
  padding: var(--spacing-250) var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  text-align: left;
  cursor: pointer;
  flex-direction: column;
  font-family: inherit;
  transition:
    border-color 0.12s,
    background 0.12s;
  display: flex;
}
.board__cell:hover {
  border-color: var(--color-border-default-strong);
  background: var(--grid-row-bg-hover, var(--color-background-default));
}
.board__cellhead {
  align-items: center;
  gap: var(--spacing-150);
  width: 100%;
  display: flex;
}
.board__dim {
  min-width: 0;
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex: 1;
}
.board__count[hidden],
.board__chipwrap[hidden],
.board__unreviewed[hidden] {
  display: none;
}
.board__chev {
  color: var(--color-content-default-tertiary);
  display: inline-flex;
}
.board__meta {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.wa__more {
  flex-direction: column;
  display: flex;
}
.wa__more-item {
  display: block;
}
.wa__more-item[hidden] {
  display: none;
}
.wa__more-item + .wa__more-item {
  border-top: 1px solid var(--color-border-default-subtle);
}
.wa__more-item[hidden] + .wa__more-item {
  border-top: none;
}
.wa__section {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  display: flex;
}
.wa__section .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.wa__section .esa-badge {
  vertical-align: middle;
}
.wa__footer {
  justify-content: flex-end;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.wa__footer [hidden] {
  display: none;
}
.wa__footer-start {
  margin-right: auto;
}
.wa__footer-start .esa-button__label {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.gate__unreviewed {
  padding: 2px var(--spacing-250);
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
}
.gate__unreviewed[hidden] {
  display: none;
}
.dd__bar {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.dd__count {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.dd__form {
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.dd__form[hidden],
#dd-until-wrap[hidden] {
  display: none;
}
.dd__formactions {
  justify-content: flex-end;
  gap: var(--spacing-200);
  display: flex;
}
.revs {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.we__dates {
  gap: var(--spacing-300);
  grid-template-columns: repeat(3, 1fr);
  display: grid;
}
.we__row {
  gap: var(--spacing-300);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.we__addnote {
  gap: var(--spacing-300);
  margin-top: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.we__addnote-title {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.wa__conflicts,
.od__impact {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.wa__conflicts .entry__meta,
.od__impact .entry__meta {
  white-space: normal;
  max-width: 36%;
}
.wa__note {
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  color: var(--color-content-default-secondary);
  white-space: pre-line;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
}
.wa__note--log {
  font-size: 0.9375rem;
}
.wa__note[hidden] {
  display: none;
}
.wa__notes-added {
  margin: var(--spacing-300) 0 0;
  gap: var(--spacing-300);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.wa__activity {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.wa__activity .entry:not(.entry--empty) {
  padding: var(--spacing-200) 0;
}
.wa__activity .entry + .entry {
  border-top: 1px solid var(--color-border-default-subtle);
}
.od__meta {
  gap: var(--spacing-300) var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  grid-template-columns: 1fr 1fr;
  margin: 0;
  display: grid;
}
.wa__kv-val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
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
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
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
.esa-filter-container {
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
  padding: var(--filter-container-padding, 0);
  flex-wrap: wrap;
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
```
