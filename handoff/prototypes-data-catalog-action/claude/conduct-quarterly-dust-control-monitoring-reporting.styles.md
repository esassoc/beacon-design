# Conduct Quarterly Dust-Control Monitoring & Reporting: styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.bcn-action {
  gap: var(--spacing-600);
  flex-direction: column;
  display: flex;
}
.bcn-action__head {
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-400);
  padding-bottom: var(--spacing-400);
  border-bottom: 1px solid var(--color-border-default);
  display: flex;
}
.bcn-action__head-actions {
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-action__identity {
  align-items: flex-start;
  gap: var(--spacing-100);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-action__title-row {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  min-width: 0;
  display: flex;
}
.bcn-action__title {
  font-family: var(--font-decorative);
  font-size: 1.5rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.2;
}
.bcn-action__badge {
  border-radius: var(--radius-100);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0.125rem 0.375rem;
  line-height: 1.4;
}
.bcn-action__badge--commitment {
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
}
.bcn-action__badge--type {
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-sunken);
  transform: translateY(2px);
}
.bcn-action__body {
  gap: var(--spacing-600);
  grid-template-columns: minmax(0, 1fr) 360px;
  align-items: start;
  display: grid;
}
.bcn-action__main {
  gap: var(--spacing-600);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-action__rail {
  gap: var(--spacing-500);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-action__rail .esa-collapsible__title {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-action__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-section-title {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-prose {
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.6;
}
.bcn-action__section--evidence {
  gap: var(--spacing-500);
}
.bcn-subfield {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-subfield__label {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-subfield esa-file-list {
  margin-top: var(--spacing-100);
}
.bcn-req-read {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-req-read__row {
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-150) var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  display: flex;
}
.bcn-req-read__badge {
  border-radius: var(--radius-100);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0.0625rem 0.375rem;
}
.bcn-req-read__name {
  min-width: 0;
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
  flex: 1;
  text-decoration: none;
}
.bcn-req-read__name:hover {
  text-decoration: underline;
}
.bcn-lists {
  align-items: flex-start;
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-list-link {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand);
  text-decoration: none;
}
.bcn-list-link:hover {
  text-decoration: underline;
}
.bcn-triggers {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-trigger-row {
  align-items: center;
  gap: var(--spacing-250);
  font-size: var(--typography-label-md-font-size);
  display: flex;
}
.bcn-trigger-row .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
}
.bcn-trigger-row__name {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-trigger-row__rule {
  color: var(--color-content-default-secondary);
  text-align: right;
  margin-left: auto;
}
.bcn-btn-ico {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-action__impl {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-impl-grid {
  width: 100%;
}
.ag-cell.bcn-grid-status-cell {
  align-items: center;
  display: flex;
}
.bcn-grid-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  font-size: 0.75rem;
  line-height: 1.5;
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 70%, #1a1a1a);
  display: inline-flex;
}
.bcn-grid-chip__dot {
  background: var(--_chip);
  border-radius: 50%;
  flex-shrink: 0;
  width: 7px;
  height: 7px;
}
@media (width<=1024px) {
  .bcn-action__body {
    grid-template-columns: 1fr;
  }
}
.bcn-editor {
  height: calc(86vh - 8.5rem);
  margin: calc(-1 * var(--_dialog-padding, 1.5rem));
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  align-items: stretch;
  display: grid;
  overflow: hidden;
}
.bcn-editor__head {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-editor__head-title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-editor__foot {
  gap: var(--spacing-300);
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
.bcn-reqs {
  border-right: 1px solid var(--color-border-default);
  flex-direction: column;
  min-width: 0;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.bcn-reqs__region {
  gap: var(--spacing-300);
  min-height: 0;
  padding: var(--spacing-500);
  flex-direction: column;
  flex: 1 1 0;
  display: flex;
}
.bcn-reqs__region--browse {
  border-top: 1px solid var(--color-border-default);
  background: var(--color-background-default);
}
.bcn-reqs__assigned,
.bcn-reqs__browse {
  gap: var(--spacing-150);
  flex-direction: column;
  flex: 1 1 0;
  min-height: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  overflow-y: auto;
}
.bcn-reqs__assigned:empty:after {
  content: "No requirements assigned yet. Use the + button in Browse All.";
  padding: var(--spacing-500);
  text-align: center;
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default-tertiary);
  border: 1px dashed var(--color-border-default);
  border-radius: var(--radius-200);
  display: block;
}
.bcn-reqs__filters {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-reqs__filter-row {
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-reqs__filter-row esa-select {
  flex: 1;
  min-width: 0;
}
.bcn-req-row {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-250);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  display: flex;
}
.bcn-req-row--assigned {
  background: var(--color-background-default);
}
.bcn-req-row__badge {
  border-radius: var(--radius-100);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0.0625rem 0.375rem;
}
.bcn-req-row__name {
  min-width: 0;
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  overflow: hidden;
}
.bcn-req-row__act {
  flex-shrink: 0;
}
.bcn-config {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
}
.bcn-config esa-tab-layout {
  --_tab-padding-x: var(--spacing-500);
  display: block;
}
.bcn-form {
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-500) var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-grid-3 {
  gap: var(--spacing-300);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}
.bcn-field {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-field__label {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-field__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-note {
  align-items: flex-start;
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  border-radius: var(--radius-200);
  background: color-mix(in srgb, var(--color-background-brand) 8%, white);
  color: var(--color-content-default-secondary);
  font-size: var(--typography-label-md-font-size);
  line-height: 1.45;
  display: flex;
}
.bcn-note .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-notif {
  gap: var(--spacing-400);
}
.bcn-ncard {
  gap: var(--spacing-250);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  display: flex;
}
.bcn-ncard__title {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-bold);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-content-default);
  margin: 0;
}
.bcn-ncard__date {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-ncard__hint {
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.45;
}
.bcn-ntoggle {
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  display: flex;
}
.bcn-ntoggle__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-ntoggle__title {
  align-items: center;
  gap: var(--spacing-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  display: inline-flex;
}
.bcn-ntoggle__title .esa-icon {
  color: var(--color-content-default);
}
.bcn-ntoggle__body {
  gap: var(--spacing-200);
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}
.bcn-ntoggle__body[hidden] {
  display: none;
}
.bcn-ntoggle__body esa-text-field {
  max-width: 240px;
}
.bcn-check {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
  cursor: pointer;
  display: inline-flex;
}
.bcn-check input {
  width: 1rem;
  height: 1rem;
  accent-color: var(--color-background-brand);
}
.bcn-nsched__row {
  margin: 0 0 var(--spacing-150);
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
}
.bcn-nsched__k {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-nsched__test {
  align-items: center;
  gap: var(--spacing-300);
  margin-top: var(--spacing-200);
  display: flex;
}
.bcn-nsched__test[hidden] {
  display: none;
}
@media (width<=860px) {
  .bcn-editor {
    grid-template-columns: 1fr;
  }
}
.page-layout__title {
  display: none !important;
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
.esa-button__label {
  white-space: nowrap;
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
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.bcn-key-value__val {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-key-value__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
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
.page-layout__content {
  padding: var(--spacing-500) 0;
  min-height: 70vh;
  position: relative;
}
```
