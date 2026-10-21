# Study Planning: styles, part 1 of 2

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
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
.bcn-ev-targets__item .esa-card {
  overflow: visible;
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
.bcn-wb {
  gap: var(--spacing-300);
  --_label-w: 420px;
  --_lead-w: 120px;
  --_money-w: 96px;
  --_plot-w: 1900px;
  --_row-h: 28px;
  flex-direction: column;
  display: flex;
}
.bcn-wb.is-dragging {
  user-select: none;
}
.bcn-wb.is-dragging .bcn-wb__bar {
  transition: none;
}
.bcn-wb__filterbar {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  margin-bottom: var(--spacing-300);
}
.bcn-wb__fb-top {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-wb__fb-group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-wb__fb-group esa-text-field {
  width: 220px;
}
.bcn-wb__fb-year {
  width: 5.5em;
  display: inline-block;
}
.bcn-wb__fb-leadsel {
  width: 10em;
  display: inline-block;
}
.bcn-wb__fb-label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-wb__fb-divider {
  background: var(--color-border-default);
  width: 1px;
  margin: 0 var(--spacing-100);
  align-self: stretch;
}
.bcn-wb__fb-to {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
}
.bcn-wb__legend {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-400);
  box-shadow: inset 0 1px 0 var(--color-border-default-subtle);
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  display: flex;
}
.bcn-wb__legend-item {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-wb__legend-dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  width: 9px;
  height: 9px;
}
.bcn-wb__legend-summary {
  background: color-mix(in srgb, var(--color-content-default) 10%, transparent);
  border: 1px solid var(--color-border-default-strong);
  border-radius: 3px;
  width: 20px;
  height: 6px;
}
.bcn-wb__scroll {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  overflow-x: auto;
}
.bcn-wb__canvas {
  min-width: calc(var(--_label-w) + var(--_lead-w) + var(--_money-w) + var(--_plot-w));
}
.bcn-wb__axis {
  grid-template-columns: var(--_label-w) var(--_lead-w) var(--_money-w) 1fr;
  z-index: 5;
  background: var(--color-background-elevation-raised);
  border-bottom: 1px solid var(--color-border-default);
  display: grid;
  position: sticky;
  top: 0;
}
.bcn-wb__lead-head {
  left: var(--_label-w);
  z-index: 4;
  padding: var(--spacing-200) var(--spacing-300);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  align-items: flex-end;
  display: flex;
  position: sticky;
}
.bcn-wb__money-head {
  left: calc(var(--_label-w) + var(--_lead-w));
  z-index: 4;
  padding: var(--spacing-200) var(--spacing-300);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  position: sticky;
}
.bcn-wb__corner {
  z-index: 4;
  padding: var(--spacing-200) var(--spacing-300);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  align-items: flex-end;
  display: flex;
  position: sticky;
  left: 0;
}
.bcn-wb__head-plot {
  position: relative;
}
.bcn-wb__head-bands {
  z-index: 0;
  position: absolute;
  inset: 0;
}
.bcn-wb__head-phases {
  z-index: 1;
  height: 18px;
  position: relative;
}
.bcn-wb__head-years {
  z-index: 1;
  height: 20px;
  position: relative;
}
.bcn-wb__head-ms {
  z-index: 1;
  height: 22px;
  position: relative;
}
.bcn-wb__phase-tag {
  padding: 0 var(--spacing-150);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  align-items: center;
  display: inline-flex;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
.bcn-wb__yr {
  box-shadow: inset 1px 0 0 var(--color-border-default-subtle);
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-wb__yr.is-five {
  box-shadow: inset 1px 0 0 var(--color-border-default-strong);
}
.bcn-wb__yr-label {
  color: var(--bcn-content-muted);
  font-variant-numeric: tabular-nums;
  padding-left: 4px;
  font-size: 0.8125rem;
}
.bcn-wb__yr.is-five .bcn-wb__yr-label {
  color: var(--color-content-default-secondary);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-wb__ms-tag {
  font-size: 0.8125rem;
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
.bcn-wb__ms-tag.is-alt {
  top: 11px;
}
.bcn-wb__band[data-phase="baseline"] {
  background: color-mix(in srgb, var(--color-content-default) 7%, transparent);
}
.bcn-wb__band[data-phase="in-water-construction"] {
  background: color-mix(in srgb, var(--color-content-default) 3%, transparent);
}
.bcn-wb__band[data-phase="phase1-ops"] {
  background: color-mix(in srgb, var(--color-content-default) 7%, transparent);
}
.bcn-wb__band[data-phase="phase2-ops"] {
  background: color-mix(in srgb, var(--color-content-default) 3%, transparent);
}
.bcn-wb__body {
  position: relative;
}
.bcn-wb__row {
  grid-template-columns: var(--_label-w) var(--_lead-w) var(--_money-w) 1fr;
  border-bottom: 1px solid var(--color-border-default-subtle);
  display: grid;
}
.bcn-wb__row[hidden] {
  display: none;
}
.bcn-wb__row.is-program {
  background: color-mix(in srgb, var(--color-content-default) 3%, transparent);
}
.bcn-wb__row.is-study {
  background: color-mix(in srgb, var(--color-content-default) 1.5%, transparent);
}
.bcn-wb__row:hover .bcn-wb__plot {
  background: color-mix(in srgb, var(--color-background-brand-muted) 4%, transparent);
}
.bcn-wb__row.is-selected .bcn-wb__label {
  background: var(--color-background-brand-subtle);
}
.bcn-wb__label {
  align-items: center;
  gap: var(--spacing-150);
  min-height: var(--_row-h);
  padding: 0 var(--spacing-200) 0 calc(var(--spacing-200) + var(--_indent) * 18px);
  border-right: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  z-index: 3;
  display: flex;
  position: sticky;
  left: 0;
}
.bcn-wb__row:has(.bcn-wb__menu[open]) .bcn-wb__label {
  z-index: 4;
}
.bcn-wb__row.is-program .bcn-wb__label {
  background: color-mix(
    in srgb,
    var(--color-content-default) 3%,
    var(--color-background-elevation-raised)
  );
}
.bcn-wb__caret {
  width: 18px;
  height: 18px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  border-radius: var(--radius-100);
  background: 0 0;
  border: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.bcn-wb__caret:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-wb__caret svg {
  transition: transform 0.12s;
}
.bcn-wb__caret.is-collapsed svg {
  transform: rotate(-90deg);
}
.bcn-wb__caret-spacer {
  flex-shrink: 0;
  width: 18px;
}
.bcn-wb__name-btn {
  align-items: center;
  gap: var(--spacing-150);
  cursor: pointer;
  text-align: left;
  min-width: 0;
  font: inherit;
  background: 0 0;
  border: 0;
  flex: 1;
  padding: 2px 0;
  display: flex;
  overflow: hidden;
}
.bcn-wb__name-btn:hover .bcn-wb__name {
  color: var(--color-background-brand);
  text-decoration: underline;
}
.bcn-wb__name-btn:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-wb__id {
  font-family: var(--typography-font-family-mono);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  flex-shrink: 0;
  padding: 1px 5px;
}
.bcn-wb__ref {
  font-family: var(--typography-font-family-mono);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-sunken);
  border-radius: var(--radius-100);
  flex-shrink: 0;
  padding: 1px 5px;
  font-size: 0.6875rem;
}
.bcn-wb__row.is-program .bcn-wb__id {
  background: color-mix(in srgb, var(--color-commitment) 30%, white);
  color: color-mix(in srgb, var(--color-commitment) 85%, black);
}
.bcn-wb__row.is-study .bcn-wb__id {
  background: color-mix(in srgb, var(--color-commitment) 20%, white);
}
.bcn-wb__row.is-substudy .bcn-wb__id {
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
}
.bcn-wb__row.is-task .bcn-wb__id {
  background: color-mix(in srgb, var(--color-commitment) 6%, white);
}
.bcn-wb__name {
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-wb__name mark,
.bcn-wb__id mark {
  color: var(--color-content-default);
  background: #fde047;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-wb__name.is-editing {
  white-space: normal;
  outline: 2px solid var(--color-background-brand);
  outline-offset: 1px;
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  padding: 0 3px;
}
.bcn-wb__row.is-program .bcn-wb__name,
.bcn-wb__row.is-study .bcn-wb__name {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-wb__lead {
  left: var(--_label-w);
  z-index: 3;
  padding: 0 var(--spacing-300);
  min-height: var(--_row-h);
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  white-space: nowrap;
  text-overflow: ellipsis;
  align-items: center;
  display: flex;
  position: sticky;
  overflow: hidden;
}
.bcn-wb__lead.is-inherited {
  color: var(--bcn-content-muted);
}
.bcn-wb__row.is-program .bcn-wb__lead {
  background: color-mix(
    in srgb,
    var(--color-content-default) 3%,
    var(--color-background-elevation-raised)
  );
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-wb__row.is-study .bcn-wb__lead {
  background: color-mix(
    in srgb,
    var(--color-content-default) 1.5%,
    var(--color-background-elevation-raised)
  );
  font-weight: var(--typography-font-weight-medium);
}
.bcn-wb__row.is-selected .bcn-wb__lead {
  background: var(--color-background-brand-subtle);
}
.bcn-wb__money {
  left: calc(var(--_label-w) + var(--_lead-w));
  z-index: 3;
  padding: 0 var(--spacing-300);
  min-height: var(--_row-h);
  font-size: var(--font-size-150);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  justify-content: flex-end;
  align-items: center;
  display: flex;
  position: sticky;
}
.bcn-wb__row.is-program .bcn-wb__money,
.bcn-wb__row.is-study .bcn-wb__money,
.bcn-wb__row.is-substudy .bcn-wb__money {
  color: var(--bcn-content-muted);
}
.bcn-wb__row.is-program .bcn-wb__money {
  background: color-mix(
    in srgb,
    var(--color-content-default) 3%,
    var(--color-background-elevation-raised)
  );
}
.bcn-wb__row.is-study .bcn-wb__money {
  background: color-mix(
    in srgb,
    var(--color-content-default) 1.5%,
    var(--color-background-elevation-raised)
  );
}
.bcn-wb__row.is-selected .bcn-wb__money {
  background: var(--color-background-brand-subtle);
}
.bcn-wb__row--total {
  border-top: 2px solid var(--color-border-default-strong);
  border-bottom: 0;
}
.bcn-wb__label--total {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  align-items: center;
  display: flex;
}
.bcn-wb__money--total {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-wb__add {
  opacity: 0.55;
  flex-shrink: 0;
  margin-left: auto;
  transition: opacity 0.12s;
  display: inline-flex;
}
.bcn-wb__row:hover .bcn-wb__add,
.bcn-wb__add:focus-within {
  opacity: 1;
}
.bcn-wb__add .esa-icon-button {
  width: 24px;
  height: 24px;
  color: var(--color-content-default-tertiary);
  border-radius: var(--radius-100);
}
.bcn-wb__add .esa-icon-button:hover {
  color: var(--color-content-default);
  background: var(--color-background-elevation-sunken);
}
.bcn-wb__add + .bcn-wb__menu {
  margin-left: 0;
}
.bcn-wb__menu {
  flex-shrink: 0;
  margin-left: auto;
}
.bcn-wb__kebab {
  width: 24px;
  height: 24px;
  color: var(--color-content-default-tertiary);
  border-radius: var(--radius-100);
  cursor: pointer;
  background: 0 0;
  border: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 1rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-wb__kebab:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-wb__plot {
  min-height: var(--_row-h);
  position: relative;
}
.bcn-wb__band {
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-wb__grid {
  background: var(--color-border-default-subtle);
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-wb__grid.is-five {
  background: var(--color-border-default);
}
.bcn-wb__ms-line {
  background: repeating-linear-gradient(
    to bottom,
    color-mix(in srgb, var(--color-background-brand) 35%, transparent) 0 4px,
    transparent 4px 8px
  );
  width: 1px;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-wb__today {
  background: var(--color-background-utility-warning);
  z-index: 2;
  width: 2px;
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-wb__bar {
  border: 1px solid color-mix(in srgb, var(--_c) 72%, black);
  border-radius: var(--radius-100);
  background: var(--_c);
  cursor: pointer;
  z-index: 1;
  touch-action: none;
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
.bcn-wb__bar:hover {
  filter: brightness(1.05);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--_c) 35%, transparent);
}
.bcn-wb__bar:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 1px;
}
.bcn-wb__row.is-selected .bcn-wb__bar {
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--_c) 45%, transparent);
}
.bcn-wb__summary {
  z-index: 1;
  border-radius: 2px;
  min-width: 5px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.bcn-wb__row.is-program .bcn-wb__summary {
  background: color-mix(in srgb, var(--color-content-default) 24%, transparent);
  border: 1px solid var(--color-content-default-tertiary);
  height: 10px;
}
.bcn-wb__row.is-study .bcn-wb__summary {
  background: color-mix(in srgb, var(--color-content-default) 15%, transparent);
  border: 1px solid var(--color-border-default-strong);
  height: 7px;
}
.bcn-wb__row.is-substudy .bcn-wb__summary {
  background: color-mix(in srgb, var(--color-content-default) 10%, transparent);
  border: 0;
  height: 4px;
}
.bcn-wb__summary:before,
.bcn-wb__summary:after {
  content: "";
  background: var(--color-content-default-tertiary);
  width: 2px;
  position: absolute;
  top: -3px;
  bottom: -3px;
}
.bcn-wb__summary:before {
  left: 0;
}
.bcn-wb__summary:after {
  right: 0;
}
.bcn-wb__row.is-substudy .bcn-wb__summary:before,
.bcn-wb__row.is-substudy .bcn-wb__summary:after {
  display: none;
}
.bcn-wb__addrow {
  grid-template-columns: var(--_label-w) var(--_lead-w) var(--_money-w) 1fr;
  border-top: 1px solid var(--color-border-default-subtle);
  display: grid;
}
.bcn-wb__addrow > span:first-child {
  padding: var(--spacing-150) var(--spacing-200);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  display: block;
  position: sticky;
  left: 0;
}
.bcn-wb__addrow .esa-button {
  width: 100%;
  display: block;
}
.bcn-wb__addrow .esa-button .esa-button__native {
  justify-content: center;
  width: 100%;
}
.bcn-wb__dialog-foot {
  justify-content: flex-end;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-wb__dialog-cancel,
.bcn-wb__dialog-move {
  padding: var(--spacing-200) var(--spacing-400);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  border-radius: var(--radius-200);
  cursor: pointer;
  border: 1px solid var(--color-border-default);
}
.bcn-wb__dialog-cancel {
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default-secondary);
}
.bcn-wb__dialog-move {
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
  border-color: var(--color-background-brand);
}
.bcn-edit {
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  display: flex;
}
.bcn-edit__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-edit__title {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-edit__sched-grid {
  gap: var(--spacing-200) var(--spacing-300);
  grid-template-columns: 1fr 1fr;
  display: grid;
}
.bcn-edit__hint {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
}
.bcn-edit__hint:empty {
  display: none;
}
.bcn-edit__actions {
  align-items: center;
  gap: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  padding-top: var(--spacing-400);
  flex-flow: wrap;
  margin-top: auto;
}
.bcn-edit__actions .bcn-edit__details {
  margin-left: auto;
}
.bcn-edit__actions .bcn-edit__details a {
  text-decoration: none;
}
.bcn-memo {
  max-width: 76ch;
  color: var(--color-content-default);
  margin-inline: auto;
  font-size: 1rem;
  line-height: 1.6;
}
.bcn-memo__doc {
  gap: var(--spacing-600);
  flex-direction: column;
  display: flex;
}
.bcn-memo__head {
  gap: var(--spacing-400);
  padding-bottom: var(--spacing-500);
  border-bottom: 2px solid var(--color-border-default-strong);
  flex-direction: column;
  display: flex;
}
.bcn-memo__kicker {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-memo__meta {
  gap: var(--spacing-200) var(--spacing-400);
  grid-template-columns: max-content 1fr;
  margin: 0;
  display: grid;
}
.bcn-memo__meta-row {
  display: contents;
}
.bcn-memo__meta-label {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
}
.bcn-memo__meta-value {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-memo__meta-row:last-child .bcn-memo__meta-value {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  line-height: 1.35;
}
.bcn-memo__purpose {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-memo__purpose p {
  margin: 0;
}
.bcn-memo__milestones {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-memo__milestone {
  padding: var(--spacing-250) 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-memo__milestone:first-child {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-memo__milestone-line {
  align-items: baseline;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-memo__milestone-name {
  font-weight: var(--typography-font-weight-medium);
}
.bcn-memo__citation {
  font-size: var(--font-size-300);
  color: var(--color-content-default-tertiary);
}
.bcn-memo__assumptions {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-memo__assumption {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-memo__assumption-kind {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
}
.bcn-memo__assumption-kind[data-kind="question"] {
  color: var(--color-commitment);
}
.bcn-memo__section {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-memo__h2 {
  align-items: baseline;
  gap: var(--spacing-300);
  padding-bottom: var(--spacing-250);
  border-bottom: 1px solid var(--color-border-default);
  font-size: var(--font-size-500);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-wrap: wrap;
  margin: 0;
  line-height: 1.3;
  display: flex;
}
.bcn-memo__lede {
  margin: calc(-1 * var(--spacing-200)) 0 0;
  color: var(--color-content-default-secondary);
}
.bcn-memo__study {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-memo__h3 {
  align-items: baseline;
  gap: var(--spacing-250);
  margin: var(--spacing-300) 0 0;
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-wrap: wrap;
  line-height: 1.35;
  display: flex;
}
.bcn-memo__coa {
  font-family: var(--typography-font-family-mono);
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  padding: 0 6px;
  line-height: 1.5;
  display: inline-block;
}
.bcn-memo__coa--h {
  font-size: 0.9375rem;
}
.bcn-memo__studymeta {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-300);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-memo__ml {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
}
.bcn-memo__sep {
  color: var(--color-border-default-strong);
}
.bcn-memo__rollup {
  font-size: var(--font-size-300);
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-memo__status {
  align-items: center;
  gap: var(--spacing-150);
  white-space: nowrap;
  display: inline-flex;
}
.bcn-memo__dot {
  border-radius: var(--radius-full);
  background: var(--_tone, var(--bcn-content-muted));
  flex: none;
  width: 9px;
  height: 9px;
}
.bcn-memo__dot[data-tone="on-track"] {
  --_tone: var(--color-background-brand-muted);
}
.bcn-memo__dot[data-tone="complete"] {
  --_tone: var(--bcn-status-completed);
}
.bcn-memo__dot[data-tone="at-risk"] {
  --_tone: var(--bcn-status-in-progress);
}
.bcn-memo__dot[data-tone="blocked"] {
  --_tone: var(--bcn-status-overdue);
}
.bcn-memo__dot[data-tone="not-started"] {
  --_tone: var(--bcn-content-muted);
}
.bcn-memo__tasks {
  margin: var(--spacing-100) 0 0;
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-memo__task {
  gap: var(--spacing-100) var(--spacing-400);
  padding: var(--spacing-250) 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  grid-template-columns: max-content 1fr;
  display: grid;
}
.bcn-memo__task:first-child {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-memo__task-span {
  font-size: var(--font-size-300);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
}
.bcn-memo__task-body {
  flex-direction: column;
  gap: 2px;
  display: flex;
}
.bcn-memo__task-name {
  color: var(--color-content-default);
}
.bcn-memo__task-sub {
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--font-size-300);
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  display: inline-flex;
}
.bcn-memo__tablewrap {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  overflow-x: auto;
}
.bcn-memo__table {
  border-collapse: collapse;
  width: 100%;
  min-width: 44rem;
  font-size: var(--font-size-300);
}
.bcn-memo__table thead th {
  text-align: left;
  padding: var(--spacing-250) var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border-bottom: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  position: sticky;
  top: 0;
}
.bcn-memo__table td,
.bcn-memo__table tbody th {
  text-align: left;
  padding: var(--spacing-250) var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  vertical-align: top;
  color: var(--color-content-default-secondary);
}
.bcn-memo__table tbody tr:last-child td,
.bcn-memo__table tbody tr:last-child th {
  border-bottom: 0;
}
.bcn-memo__cell-name {
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
}
.bcn-memo__num {
  text-align: right;
}
.bcn-memo__mono {
  font-family: var(--typography-font-family-mono);
  font-variant-numeric: tabular-nums;
}
.bcn-memo__table .bcn-memo__mono {
  white-space: nowrap;
}
.bcn-readiness {
  gap: var(--spacing-800);
  color: var(--color-content-default);
  font-size: var(--font-size-200);
  flex-direction: column;
  line-height: 1.5;
  display: flex;
}
.bcn-readiness__region {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-readiness__h2 {
  padding-bottom: var(--spacing-200);
  border-bottom: 1px solid var(--color-border-default);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.3;
}
.bcn-readiness__mono {
  font-family: var(--typography-font-family-mono);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.bcn-readiness__status {
  align-items: center;
  gap: var(--spacing-150);
  white-space: nowrap;
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-readiness__dot {
  border-radius: var(--radius-full);
  background: var(--_tone, var(--bcn-content-muted));
  flex: none;
  width: 9px;
  height: 9px;
}
.bcn-readiness__dot[data-tone="on-track"] {
  --_tone: var(--color-background-brand-muted);
}
.bcn-readiness__dot[data-tone="complete"] {
  --_tone: var(--bcn-status-completed);
}
.bcn-readiness__dot[data-tone="at-risk"] {
  --_tone: var(--bcn-status-in-progress);
}
.bcn-readiness__dot[data-tone="blocked"] {
  --_tone: var(--bcn-status-overdue);
}
.bcn-readiness__dot[data-tone="not-started"] {
  --_tone: var(--bcn-content-muted);
}
.bcn-readiness__tid {
  justify-self: start;
}
a.bcn-readiness__coa {
  text-decoration: none;
}
a.bcn-readiness__coa:hover {
  background: color-mix(in srgb, var(--color-commitment) 20%, white);
}
.bcn-readiness__coa,
.bcn-readiness__tid {
  font-family: var(--typography-font-family-mono);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
```
