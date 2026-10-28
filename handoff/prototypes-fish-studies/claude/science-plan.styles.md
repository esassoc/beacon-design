# Science Plan: styles

```css
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.bcn-roles {
  gap: var(--spacing-300);
  --_study-w: 300px;
  flex-direction: column;
  display: flex;
}
.bcn-roles__filterbar {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-wrap: wrap;
  display: flex;
}
.bcn-roles__fb-group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-roles__filterbar esa-text-field {
  width: 240px;
}
.bcn-roles__filterbar esa-select {
  width: 11em;
}
.bcn-roles__fb-label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-roles__fb-divider {
  background: var(--color-border-default);
  width: 1px;
  margin: 0 var(--spacing-100);
  align-self: stretch;
}
.bcn-roles__fb-hint {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  margin-left: auto;
  font-style: italic;
}
.bcn-roles__scroll {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  max-height: calc(100vh - 360px);
  overflow: auto;
}
.bcn-roles__table {
  border-collapse: separate;
  border-spacing: 0;
  width: max-content;
  min-width: 100%;
}
.bcn-roles__table thead th {
  z-index: 2;
  background: var(--color-background-elevation-sunken);
  border-bottom: 1px solid var(--color-border-default);
  position: sticky;
  top: 0;
}
.bcn-roles__corner {
  width: var(--_study-w);
  min-width: var(--_study-w);
  text-align: left;
  padding: var(--spacing-300);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  border-right: 1px solid var(--color-border-default);
  position: sticky;
  left: 0;
  z-index: 3 !important;
}
.bcn-roles__ws {
  min-width: 148px;
  max-width: 176px;
  padding: var(--spacing-250) var(--spacing-300);
  text-align: left;
  vertical-align: bottom;
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  line-height: 1.3;
}
.bcn-roles__row {
  cursor: pointer;
}
.bcn-roles__study {
  z-index: 1;
  width: var(--_study-w);
  min-width: var(--_study-w);
  text-align: left;
  vertical-align: top;
  padding: var(--spacing-250) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  border-bottom: 1px solid var(--color-border-default-subtle);
  position: sticky;
  left: 0;
}
.bcn-roles__coa {
  font-family: var(--typography-font-family-mono);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  margin-bottom: 2px;
  padding: 1px 5px;
  display: inline-block;
}
.bcn-roles__name {
  font-size: var(--font-size-100);
  color: var(--color-content-default);
  line-height: 1.35;
  display: block;
}
.bcn-roles__cell {
  padding: var(--spacing-250) var(--spacing-300);
  vertical-align: top;
  border-bottom: 1px solid var(--color-border-default-subtle);
  border-right: 1px solid var(--color-border-default-subtle);
}
.bcn-roles__row:hover .bcn-roles__cell {
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-roles__row:hover .bcn-roles__study {
  background: color-mix(
    in srgb,
    var(--color-background-brand-muted) 5%,
    var(--color-background-elevation-raised)
  );
}
.bcn-roles__assign {
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-roles__org {
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  line-height: 1.3;
}
.bcn-roles__person {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
  line-height: 1.3;
}
.bcn-roles__empty {
  color: var(--color-border-default-strong);
}
.bcn-roles__tentative {
  border-radius: var(--radius-full);
  background: color-mix(in srgb, var(--color-background-utility-warning) 20%, white);
  width: 14px;
  height: 14px;
  color: color-mix(in srgb, var(--color-background-utility-warning) 80%, black);
  font-size: 0.625rem;
  font-weight: var(--typography-font-weight-semibold);
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  display: inline-flex;
}
.bcn-roles__tentative--legend {
  margin: 0 2px;
}
.bcn-roles__note {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
  line-height: 1.5;
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
.bcn-timeline {
  gap: var(--spacing-300);
  --_label-w: 340px;
  --_plot-w: 1900px;
  --_row-h: 30px;
  flex-direction: column;
  display: flex;
}
.bcn-timeline__legend {
  align-items: center;
  gap: var(--spacing-300);
  font-size: var(--font-size-100);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  display: flex;
}
.bcn-timeline__legend-title {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
}
.bcn-timeline__legend-item {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-timeline__legend-dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  width: 9px;
  height: 9px;
}
.bcn-timeline__legend-hint {
  color: var(--bcn-content-muted);
  margin-left: auto;
  font-style: italic;
}
.bcn-timeline__scroll {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  overflow-x: auto;
}
.bcn-timeline__canvas {
  min-width: calc(var(--_label-w) + var(--_plot-w));
}
.bcn-timeline__axis {
  grid-template-columns: var(--_label-w) 1fr;
  z-index: 5;
  background: var(--color-background-elevation-raised);
  border-bottom: 1px solid var(--color-border-default);
  display: grid;
  position: sticky;
  top: 0;
}
.bcn-timeline__corner {
  padding: var(--spacing-200) var(--spacing-300);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  border-right: 1px solid var(--color-border-default);
  align-items: flex-end;
  display: flex;
}
.bcn-timeline__head-plot {
  position: relative;
}
.bcn-timeline__head-bands {
  z-index: 0;
  position: absolute;
  inset: 0;
}
.bcn-timeline__head-phases {
  z-index: 1;
  height: 18px;
  position: relative;
}
.bcn-timeline__head-years {
  z-index: 1;
  height: 20px;
  position: relative;
}
.bcn-timeline__head-ms {
  z-index: 1;
  height: 22px;
  position: relative;
}
.bcn-timeline__phase-tag {
  padding: 0 var(--spacing-150);
  font-size: 0.625rem;
  font-weight: var(--typography-font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
.bcn-timeline__yr {
  border-left: 1px solid var(--color-border-default-subtle);
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-timeline__yr.is-five {
  border-left-color: var(--color-border-default-strong);
}
.bcn-timeline__yr-label {
  color: var(--bcn-content-muted);
  font-variant-numeric: tabular-nums;
  padding-left: 4px;
  font-size: 0.6875rem;
}
.bcn-timeline__yr.is-five .bcn-timeline__yr-label {
  color: var(--color-content-default-secondary);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-timeline__ms-tag {
  font-size: 0.625rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  white-space: nowrap;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-brand);
  border-radius: var(--radius-100);
  padding: 0 3px;
  position: absolute;
  top: 2px;
  transform: translate(-50%);
}
.bcn-timeline__ms-tag.is-alt {
  top: 11px;
}
.bcn-timeline__band[data-phase="baseline"] {
  background: color-mix(in srgb, var(--color-content-default) 7%, transparent);
}
.bcn-timeline__band[data-phase="in-water-construction"] {
  background: color-mix(in srgb, var(--color-content-default) 3%, transparent);
}
.bcn-timeline__band[data-phase="phase1-ops"] {
  background: color-mix(in srgb, var(--color-content-default) 7%, transparent);
}
.bcn-timeline__band[data-phase="phase2-ops"] {
  background: color-mix(in srgb, var(--color-content-default) 3%, transparent);
}
.bcn-timeline__lane-title {
  padding: var(--spacing-150) var(--spacing-300);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-sunken);
  border-bottom: 1px solid var(--color-border-default);
  z-index: 3;
  margin: 0;
  position: sticky;
  left: 0;
}
.bcn-timeline__lane-title[hidden] {
  display: none;
}
.bcn-timeline__row {
  grid-template-columns: var(--_label-w) 1fr;
  border-bottom: 1px solid var(--color-border-default-subtle);
  display: grid;
}
.bcn-timeline__row[hidden] {
  display: none;
}
.bcn-timeline__row:hover .bcn-timeline__plot {
  background: color-mix(in srgb, var(--color-background-brand-muted) 4%, transparent);
}
.bcn-timeline__row-label {
  align-items: center;
  gap: var(--spacing-200);
  padding: 0 var(--spacing-300);
  min-height: var(--_row-h);
  border: 0;
  border-right: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  z-index: 3;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font: inherit;
  display: flex;
  position: sticky;
  left: 0;
  overflow: hidden;
}
.bcn-timeline__row-label:hover .bcn-timeline__name {
  color: var(--color-background-brand);
  text-decoration: underline;
}
.bcn-timeline__row-label:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: -2px;
}
.bcn-timeline__coa {
  font-family: var(--typography-font-family-mono);
  font-size: 0.625rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  flex-shrink: 0;
  padding: 1px 5px;
}
.bcn-timeline__name {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-timeline__plot {
  min-height: var(--_row-h);
  position: relative;
}
.bcn-timeline__band {
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-timeline__grid {
  border-left: 1px solid var(--color-border-default-subtle);
  width: 0;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-timeline__grid.is-five {
  border-left-color: var(--color-border-default);
}
.bcn-timeline__ms-line {
  border-left: 1px dashed color-mix(in srgb, var(--color-background-brand) 35%, transparent);
  width: 0;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-timeline__today {
  border-left: 2px solid var(--color-background-utility-warning);
  z-index: 2;
  width: 0;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-timeline__bar {
  border: 1px solid color-mix(in srgb, var(--_c) 72%, black);
  border-radius: var(--radius-100);
  background: linear-gradient(90deg, var(--_c) 0%, color-mix(in srgb, var(--_c) 62%, white) 100%);
  cursor: pointer;
  z-index: 1;
  min-width: 5px;
  height: 16px;
  padding: 0;
  transition:
    filter 0.12s,
    box-shadow 0.12s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.bcn-timeline__bar:hover {
  filter: brightness(1.05);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--_c) 35%, transparent);
}
.bcn-timeline__bar:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 1px;
}
.bcn-fs-utils {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
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
.bcn-filterbar__group[hidden] {
  display: none;
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
.fs-grid {
  width: 100%;
  height: calc(100vh - 300px);
  min-height: 600px;
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
.bcn-grid-name {
  color: var(--color-content-link);
  font-weight: var(--typography-font-weight-regular);
  text-decoration: underline;
}
.bcn-grid-name:hover {
  color: var(--color-background-brand-hover);
}
.bcn-out__head {
  font-family: var(--font-decorative);
  font-size: 1.375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-out__lede {
  margin: 0 0 var(--spacing-400);
  font-size: var(--font-size-200);
  color: var(--color-content-default-secondary);
  line-height: 1.5;
}
.bcn-out__list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-out__item {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  display: flex;
}
.bcn-out__item .esa-icon {
  color: var(--color-background-brand-muted);
  flex-shrink: 0;
}
.bcn-out__item div {
  flex-direction: column;
  flex: 1;
  gap: 1px;
  min-width: 0;
  display: flex;
}
.bcn-out__item strong {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-out__item span {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-out__foot {
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
.bcn-drawer {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-drawer-head {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  min-width: 0;
  display: flex;
}
.bcn-drawer-head__badge {
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  flex-shrink: 0;
}
.bcn-drawer-head__title {
  font-family: var(--font-decorative);
  font-size: 1.125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  min-width: 0;
  line-height: 1.25;
}
.bcn-drawer__dates {
  gap: var(--spacing-300);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-drawer__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  display: flex;
}
.bcn-drawer__foot-actions {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
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
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.breadcrumbs {
  padding: var(--spacing-400) 0;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  display: flex;
}
.breadcrumbs__items {
  gap: var(--spacing-100);
  flex-wrap: wrap;
  align-items: center;
  display: flex;
}
.breadcrumb-item {
  color: var(--bcn-gray-600);
  text-transform: capitalize;
  font-size: 0.875rem;
}
a.breadcrumb-item {
  text-decoration: none;
}
a.breadcrumb-item:hover {
  text-decoration: underline;
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
.page-layout__utilities {
  gap: var(--spacing-200);
  display: flex;
}
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
```
