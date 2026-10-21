# Monitoring Portal: styles, part 1 of 2

```css
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
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
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
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
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-background-brand, #46a758);
  --_card-header-color: var(--color-content-default-knockout, #fcfcfc);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-background-elevation-sunken, #f0f0f0);
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
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: var(--border-width-default, 1px) solid var(--_card-header-border);
  background: var(--color-background-elevation-sunken, #f0f0f0);
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
.bcn-widget-menu__kebab {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-full);
  background: var(--color-background-elevation-base);
  block-size: 28px;
  inline-size: 28px;
  color: var(--color-content-default-secondary);
  cursor: pointer;
  justify-content: center;
  align-items: center;
  line-height: 1;
  display: inline-flex;
}
.bcn-widget-menu__kebab:hover,
.bcn-widget-menu[open] .bcn-widget-menu__kebab {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-widget-menu__panel {
  inline-size: calc(256px - 2 * var(--spacing-300));
}
.bcn-widget-menu__width {
  padding-inline: var(--spacing-250);
  padding-block-start: var(--spacing-100);
}
.bcn-widget-menu__rule {
  background: var(--color-border-default-subtle);
  block-size: 1px;
  margin-block: var(--spacing-250);
}
.bcn-widget-menu__item {
  align-items: center;
  gap: var(--spacing-250);
  block-size: 32px;
  inline-size: 100%;
  padding-inline: var(--spacing-250);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  display: flex;
}
.bcn-widget-menu__item:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-widget-menu__item .esa-icon {
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-widget-menu__item--danger,
.bcn-widget-menu__item--danger .esa-icon {
  color: var(--color-content-utility-danger);
}
.bcn-widget-menu__item--danger:hover {
  background: color-mix(in srgb, var(--color-content-utility-danger) 8%, transparent);
}
.bcn-dwidget {
  min-width: 0;
  align-self: start;
  margin-block-end: var(--_gap);
  display: flex;
  container-type: inline-size;
}
.bcn-dwidget[hidden] {
  display: none;
}
.bcn-dwidget[data-w="1"] {
  grid-column: span 1;
}
.bcn-dwidget[data-w="2"] {
  grid-column: span 2;
}
.bcn-dwidget[data-w="3"] {
  grid-column: span 3;
}
@media (width<=1180px) {
  .bcn-dwidget[data-w="3"] {
    grid-column: span 2;
  }
}
@media (width<=820px) {
  .bcn-dwidget[data-w] {
    grid-column: span 1;
  }
}
.bcn-dwidget .esa-card {
  --card-header-bg: var(--color-background-elevation-sunken);
  --_card-header-border: var(--color-border-default-strong);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-dwidget .esa-card__body {
  flex: 1;
  padding-block-start: var(--spacing-300);
}
.bcn-dwidget .esa-card__header {
  min-height: 0;
  padding-block: var(--spacing-200);
}
.bcn-dwidget [data-section][hidden] {
  display: none;
}
.bcn-dwidget .esa-stat__label {
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.bcn-dwidget .esa-stat {
  text-align: start;
}
.bcn-dwidget .esa-stat__value {
  padding-inline-start: var(--spacing-100);
}
.bcn-dwidget .esa-card {
  transition: box-shadow 0.12s;
}
.bcn-dwidget:hover {
  --card-border-color: var(--color-border-default-strong);
}
.bcn-dwidget:hover .esa-card {
  box-shadow: var(--elevation-2);
}
.bcn-dwidget__tools {
  transition: opacity 0.12s;
}
.bcn-dwidget__head {
  cursor: grab;
  touch-action: none;
  min-block-size: 28px;
  inline-size: 100%;
}
.bcn-dwidget:has(esa-popover[open]) {
  z-index: 30;
}
.bcn-dwidget:has(esa-popover[open]) .esa-card {
  overflow: visible;
}
.bcn-dwidget__glyph {
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-dwidget__title {
  margin: 0;
}
.bcn-dwidget__grip {
  border-radius: var(--radius-full);
  block-size: 28px;
  inline-size: 28px;
  color: var(--color-content-default-secondary);
  cursor: grab;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-dwidget__grip:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-primary);
}
[data-mode="drag"] .bcn-dwidget .esa-card {
  --card-border-color: var(--color-border-default);
  box-shadow: none;
}
[data-mode="drag"] .bcn-dwidget .bcn-dwidget__tools {
  opacity: 0;
  pointer-events: none;
}
[data-mode="drag"] .bcn-dwidget .bcn-dwidget__body,
[data-mode="drag"] .bcn-dwidget .bcn-dwidget__foot {
  opacity: 0.4;
}
[data-mode="drag"] .bcn-dwidget.is-drag-origin .esa-card {
  border: 1.5px dashed var(--color-border-default-strong);
  background: var(--color-background-elevation-sunken);
}
[data-mode="drag"] .bcn-dwidget.is-drag-origin .bcn-dwidget__head,
[data-mode="drag"] .bcn-dwidget.is-drag-origin .bcn-dwidget__body,
[data-mode="drag"] .bcn-dwidget.is-drag-origin .bcn-dwidget__foot {
  opacity: 0.25;
}
[data-mode="drag"] .bcn-dwidget.is-drag-lifted {
  z-index: 60;
  pointer-events: none;
  margin: 0;
  position: fixed;
}
[data-mode="drag"] .bcn-dwidget.is-drag-lifted .esa-card {
  box-shadow: var(--elevation-4);
  --card-border-color: var(--color-border-default-strong);
  transition:
    transform 0.12s,
    box-shadow 0.12s;
  transform: scale(1.02);
}
[data-mode="drag"] .bcn-dwidget.is-drag-lifted .bcn-dwidget__head,
[data-mode="drag"] .bcn-dwidget.is-drag-lifted .bcn-dwidget__body,
[data-mode="drag"] .bcn-dwidget.is-drag-lifted .bcn-dwidget__foot {
  opacity: 1;
}
.bcn-dwidget__foot {
  color: var(--color-content-link);
  font-size: var(--font-size-150);
  font-weight: 600;
  text-decoration: none;
}
.bcn-dwidget__foot:hover {
  text-decoration: underline;
}
.bcn-viztip {
  place-items: stretch stretch;
  inline-size: 100%;
  min-inline-size: 0;
  display: grid;
}
.bcn-viztip__panel {
  gap: var(--spacing-050);
  white-space: nowrap;
  flex-direction: column;
  display: flex;
}
.bcn-viztip__title {
  font-weight: var(--typography-font-weight-semibold, 600);
}
.bcn-viztip__row {
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.bcn-viztip__key {
  border-radius: var(--radius-xs);
  flex: none;
  block-size: 8px;
  inline-size: 8px;
}
.bcn-viztip__label {
  color: var(--color-content-default-secondary);
}
.bcn-viztip__value {
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  font-weight: var(--typography-font-weight-semibold, 600);
}
.bcn-viztip__note {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
}
.bcn-viztip__empty {
  color: var(--color-content-default-secondary);
}
.bcn-viz-donut {
  min-inline-size: 0;
}
.bcn-viz-donut__ring {
  flex: none;
}
.bcn-viz-donut__legend {
  flex: auto;
  min-inline-size: 0;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-viz-donut__slot {
  min-inline-size: 0;
  padding-inline: var(--spacing-100);
  margin-inline: calc(var(--spacing-100) * -1);
  border-radius: var(--radius-xs);
  display: grid;
}
.bcn-viz-donut__slot:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-viz-donut__row {
  --gap: var(--spacing-250);
  flex-wrap: nowrap;
  inline-size: 100%;
}
.bcn-viz-donut__dot {
  border-radius: var(--radius-full);
  background: var(--_c);
  flex: none;
  block-size: 10px;
  inline-size: 10px;
}
.bcn-viz-donut__label {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-viz-donut__value {
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  flex: none;
  margin-inline-start: auto;
}
.bcn-vizstack {
  --_stack-height: 96px;
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-200);
  grid-template-columns: auto 1fr;
  min-inline-size: 0;
  display: grid;
}
.bcn-vizstack__yaxis {
  border-inline-end: 1px solid var(--color-border-default);
  font-size: max(0.75rem, var(--font-size-100));
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-inline-end: var(--spacing-100);
  line-height: 1;
  display: flex;
}
.bcn-vizstack__axis,
.bcn-vizstack__legend {
  grid-column: 2;
}
.bcn-vizstack__strip {
  block-size: var(--_stack-height);
  align-items: flex-end;
  gap: 2px;
  display: flex;
}
.bcn-vizstack__slot {
  flex: 1;
  align-self: stretch;
  min-inline-size: 2px;
  display: grid;
}
.bcn-vizstack__cell {
  align-items: flex-end;
  inline-size: 100%;
  display: flex;
}
.bcn-vizstack__cell:hover .bcn-vizstack__col {
  filter: brightness(1.08);
}
.bcn-vizstack__col {
  border-radius: 1px;
  flex-direction: column-reverse;
  min-block-size: 3px;
  inline-size: 100%;
  min-inline-size: 2px;
  display: flex;
  overflow: hidden;
}
.bcn-vizstack__seg {
  min-block-size: 2px;
  display: block;
}
.bcn-vizstack__col--zero {
  background: var(--color-border-default);
  block-size: 2px;
  min-block-size: 0;
  inline-size: 100%;
}
.bcn-vizstack__axis {
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-tertiary);
  justify-content: space-between;
  display: flex;
}
.bcn-vizstack__legend {
  gap: var(--spacing-100) var(--spacing-300);
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-vizstack__key {
  align-items: center;
  gap: var(--spacing-100);
  min-inline-size: 0;
  display: inline-flex;
}
.bcn-vizstack__swatch {
  border-radius: var(--radius-xs);
  flex: none;
  block-size: 8px;
  inline-size: 8px;
}
.bcn-viz-bars {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-viz-bars__row {
  align-items: center;
  gap: var(--spacing-250);
  grid-template-columns: minmax(0, 1fr) minmax(52px, 1.15fr) auto;
  display: grid;
}
.bcn-viz-bars--code .bcn-viz-bars__row {
  grid-template-columns: 46px 1fr auto;
}
.bcn-viz-bars__name {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  overflow: hidden;
}
.bcn-viz-bars__track {
  background: var(--color-background-elevation-sunken);
  border-radius: var(--radius-xs);
  height: 12px;
  display: block;
  overflow: hidden;
}
.bcn-viz-bars__fill {
  background: var(
    --_mono,
    var(--_bar-fill, var(--_accent, var(--color-content-default-secondary)))
  );
  border-radius: var(--radius-xs);
  height: 100%;
  display: block;
}
.bcn-viz-bars__val {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  text-align: right;
}
@media (forced-colors: active) {
  .bcn-viz-bars__track {
    border: 1px solid canvastext;
  }
}
@media (forced-colors: active) {
  .bcn-viz-bars__fill {
    background: highlight;
  }
}
.bcn-viztrend {
  column-gap: var(--spacing-200);
  grid-template-columns: auto 1fr;
  display: grid;
}
.bcn-viztrend__yaxis {
  border-inline-end: 1px solid var(--color-border-default);
  font-size: max(0.75rem, var(--font-size-100));
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding-inline-end: var(--spacing-100);
  line-height: 1;
  display: flex;
}
.bcn-viztrend__strip {
  height: var(--_trend-height);
  align-items: flex-end;
  gap: 2px;
  display: flex;
}
.bcn-viztrend__slot {
  flex: 1;
  align-self: stretch;
  min-width: 2px;
  display: grid;
}
.bcn-viztrend__cell {
  align-items: flex-end;
  inline-size: 100%;
  display: flex;
}
.bcn-viztrend__col {
  background: var(--_accent, var(--color-content-default-secondary));
  border-radius: 1px;
  min-block-size: 3px;
  inline-size: 100%;
  min-inline-size: 2px;
  display: block;
}
.bcn-viztrend__col--zero {
  background: var(--color-border-default);
  block-size: 2px;
  min-block-size: 0;
}
.bcn-viztrend__cell:hover .bcn-viztrend__col {
  filter: brightness(1.08);
}
.bcn-viztrend__axis {
  margin-top: var(--spacing-100);
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  grid-column: 2;
  justify-content: space-between;
  display: flex;
}
.bcn-widget-flow {
  --_gap-x: var(--spacing-600);
  --_gap-y: var(--spacing-500);
  gap: var(--_gap-y) var(--_gap-x);
  flex-wrap: wrap;
  flex: 1;
  align-items: stretch;
  min-inline-size: 0;
  display: flex;
}
.bcn-widget-flow > * {
  min-inline-size: 0;
  position: relative;
}
.bcn-widget-flow > [data-flow="figure"] {
  flex: 0 auto;
  min-inline-size: 132px;
  max-inline-size: 240px;
}
.bcn-widget-flow > [data-flow="chart"] {
  flex: 1 1 var(--bcn-flow-chart-min, 360px);
}
.bcn-widget-flow > [data-flow="full"] {
  flex: 100%;
}
.bcn-widget-flow > .is-rowmate:before {
  content: "";
  border-inline-start: 1px solid var(--color-border-default-subtle);
  position: absolute;
  inset-block: 0;
  inset-inline-start: calc(-1 * var(--_gap-x) / 2);
}
.bcn-preview-stage {
  --_bg: var(--bcn-preview-stage-bg, var(--color-background-elevation-sunken));
  --_border: var(--bcn-preview-stage-border, 1px solid var(--color-border-default));
  --_radius: var(--bcn-preview-stage-radius, var(--radius-200));
  height: var(--bcn-preview-stage-height, 520px);
  background: var(--_bg);
  border: var(--_border);
  border-radius: var(--_radius);
  position: relative;
  overflow: hidden;
}
.bcn-preview-stage__scroll {
  height: 100%;
  overflow-y: var(--bcn-preview-stage-overflow, auto);
  padding: var(--bcn-preview-stage-padding, var(--spacing-500));
  scrollbar-gutter: stable;
}
.bcn-preview-stage[data-overflow="1"]:after {
  content: "";
  background: linear-gradient(to top, var(--_bg), color-mix(in srgb, var(--_bg) 0%, transparent));
  pointer-events: none;
  border-radius: 0 0 var(--_radius) var(--_radius);
  height: 40px;
  position: absolute;
  bottom: 1px;
  left: 1px;
  right: 1px;
}
.bcn-preview-stage__well {
  margin: 0 auto;
  position: relative;
}
.bcn-preview-stage__host {
  transform-origin: 0 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}
.bcn-preview-stage__host > * {
  min-width: 0;
  box-shadow: var(--bcn-stage-guest-shadow, var(--elevation-2));
  flex: 1;
}
.bcn-preview-stage__badge {
  top: var(--spacing-300);
  right: var(--spacing-300);
  z-index: 2;
  padding: 1px var(--spacing-200);
  font-size: var(--typography-label-sm-font-size);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  position: absolute;
}
.bcn-preview-stage__badge:empty {
  display: none;
}
.bcn-cfgsec-list {
  gap: 0;
}
.bcn-cfgsec + .bcn-cfgsec {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
.bcn-cfgsec.is-dragging {
  opacity: 0.4;
}
.bcn-cfgsec__bar {
  align-items: center;
  gap: var(--spacing-200);
  padding-inline: 0;
  padding-block: var(--spacing-300);
  display: flex;
}
.bcn-cfgsec__name {
  flex: 1;
  min-inline-size: 0;
  display: block;
}
.bcn-cfgsec__switch {
  min-inline-size: 0;
  display: block;
}
.bcn-cfgsec__switch::part(label) {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
  color: var(--color-content-default-secondary);
}
.bcn-cfgsec__sub {
  color: var(--color-content-default-tertiary);
  padding-inline-start: calc(32px + var(--spacing-200));
  display: block;
}
.bcn-cfgsec__grip,
.bcn-cfgsec__caret {
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.bcn-cfgsec__grip {
  cursor: grab;
  touch-action: none;
}
.bcn-cfgsec__caret svg {
  transition: transform 0.12s;
}
.bcn-cfgsec__caret[aria-expanded="true"] svg {
  transform: rotate(180deg);
}
.bcn-cfgsec__caret:disabled {
  cursor: not-allowed;
  color: var(--color-content-disabled);
}
.bcn-cfgsec__grip:focus-visible,
.bcn-cfgsec__caret:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 2px;
  border-radius: var(--radius-xs);
}
.bcn-cfgsec__body {
  padding-inline: var(--spacing-600) 0;
  padding-block: var(--spacing-200) var(--spacing-300);
}
.bcn-cfgsec__body [data-cfgsec-setting] {
  --_field-padding-y: var(--spacing-150);
}
.bcn-color-field {
  --_swatch: 24px;
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-color-field__name {
  color: var(--color-content-default-secondary);
}
.bcn-color-field__swatches {
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-color-field__swatch {
  width: var(--_swatch);
  height: var(--_swatch);
  border-radius: var(--radius-sm);
  background: var(--_fill);
  cursor: pointer;
  border: 0;
  padding: 0;
  box-shadow: inset 0 0 0 1px #00000024;
}
.bcn-color-field__swatch:hover {
  box-shadow:
    inset 0 0 0 1px #00000024,
    0 0 0 2px var(--color-background-elevation-raised),
    0 0 0 3px var(--color-border-default-strong);
}
.bcn-color-field__swatch[aria-pressed="true"],
.bcn-color-field__swatch[aria-pressed="true"]:hover {
  box-shadow:
    inset 0 0 0 1px #00000024,
    0 0 0 2px var(--color-background-elevation-raised),
    0 0 0 4px var(--color-content-default);
}
.bcn-color-field__swatch:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 3px;
}
.bcn-cfg {
  --_bleed: var(--spacing-500);
  margin: calc(-1 * var(--_bleed));
  grid-template-columns: minmax(0, 1fr) 396px;
  align-items: stretch;
  gap: 0;
  display: grid;
}
.bcn-cfg__preview {
  background: var(--color-background-elevation-sunken);
  padding: var(--_bleed);
  --bcn-preview-stage-height: auto;
  --bcn-preview-stage-overflow: visible;
  --bcn-preview-stage-bg: transparent;
  --bcn-preview-stage-border: 0;
  --bcn-preview-stage-radius: 0;
  --bcn-preview-stage-padding: 0;
  min-inline-size: 0;
}
.bcn-cfg__options {
  border-inline-start: 1px solid var(--color-border-default);
  padding: var(--_bleed);
  min-inline-size: 0;
}
@media (width<=900px) {
  .bcn-cfg {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (width<=900px) {
  .bcn-cfg__options {
    border-inline-start: 0;
    border-block-start: 1px solid var(--color-border-default);
  }
}
.bcn-cfg__label {
  color: var(--color-content-default-primary);
}
.bcn-cfg__group {
  color: var(--color-content-default);
  border-block-end: 1px solid var(--color-border-default);
  padding-block-end: var(--spacing-150);
}
.bcn-cfg [hidden] {
  display: none;
}
.bcn-cfg__foot {
  inline-size: 100%;
}
.bcn-cc {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-cc__show {
  align-self: flex-end;
  align-items: center;
  gap: var(--spacing-200);
  --color-content-brand: var(--color-content-default);
  flex-direction: row;
}
.bcn-cc[data-show="needs"] [data-cc-pane="all"],
.bcn-cc[data-show="all"] [data-cc-pane="needs"] {
  display: none;
}
.bcn-cc__pane {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-cc__lane {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-cc__lane-head {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  margin: 0;
  display: flex;
}
.bcn-cc__rows {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-cc__row {
  align-items: center;
  gap: var(--spacing-200);
  min-block-size: 40px;
  inline-size: 100%;
  padding-block: var(--spacing-150);
  padding-inline: var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default-primary);
  font: inherit;
  text-align: start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
}
.bcn-cc__row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-cc__alert {
  color: var(--color-background-utility-danger);
  display: inline-flex;
}
.bcn-cc__name {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
}
.bcn-cc__id {
  font-size: var(--font-size-100);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
}
.bcn-cc__meta {
  min-inline-size: 0;
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: auto;
  overflow: hidden;
}
.bcn-cc__chev {
  color: var(--color-content-default-tertiary);
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-cc__item.is-open > .bcn-cc__row .bcn-cc__chev,
.bcn-cc__stack.is-open > .bcn-cc__row--head .bcn-cc__chev {
  transform: rotate(180deg);
}
.bcn-cc__detail {
  display: none;
}
.bcn-cc__item.is-open > .bcn-cc__row {
  background: var(--color-background-elevation-sunken);
  border-end-end-radius: 0;
  border-end-start-radius: 0;
}
.bcn-cc__item.is-open > .bcn-cc__detail {
  gap: var(--spacing-250);
  padding: var(--spacing-250) var(--spacing-300);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  border-block-start: 0;
  border-end-end-radius: var(--radius-200);
  border-end-start-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.bcn-cc__desc {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-cc__cmts {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-cc__cmt {
  align-items: baseline;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-cc__cmt-title {
  font-size: var(--font-size-150);
  color: var(--color-content-default-primary);
}
.bcn-cc__stack {
  isolation: isolate;
  margin-block-end: var(--spacing-200);
  position: relative;
}
.bcn-cc__stack:before,
.bcn-cc__stack:after {
  content: "";
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  position: absolute;
}
.bcn-cc__stack:before {
  z-index: 2;
  inset: 0 4px -4px;
}
.bcn-cc__stack:after {
  z-index: 1;
  inset: 0 8px -8px;
}
.bcn-cc__row--head {
  z-index: 3;
  position: relative;
}
.bcn-cc__stack.is-open {
  margin-block-end: 0;
}
.bcn-cc__stack.is-open:before,
.bcn-cc__stack.is-open:after {
  content: none;
}
.bcn-cc__members {
  gap: var(--spacing-150);
  flex-direction: column;
  margin-block-start: var(--spacing-150);
  display: none;
}
.bcn-cc__stack.is-open .bcn-cc__members {
  display: flex;
}
.bcn-widget-card {
  border-radius: var(--radius-md);
  block-size: 100%;
  inline-size: 100%;
  color: inherit;
  font: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  margin: 0;
  padding: 0;
  display: block;
}
.bcn-widget-card > .esa-card {
  block-size: 100%;
}
.bcn-widget-card:not([data-on]):hover {
  --card-border-color: var(--color-border-default-strong);
  box-shadow: var(--elevation-2);
}
.bcn-widget-card:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.bcn-widget-card[data-on] {
  --card-bg: var(--color-background-elevation-sunken);
  --card-border-color: var(--color-border-default);
  cursor: default;
}
.bcn-widget-card__body {
  color: var(--color-content-default-secondary);
}
.bcn-widget-card[data-on] .bcn-widget-card__body {
  color: var(--color-content-default-tertiary);
}
.bcn-widget-card__title {
  color: var(--color-content-default);
}
.bcn-widget-card__stream {
  color: var(--color-content-default-secondary);
  font-size: var(--font-size-100);
}
.bcn-widget-card__state {
  display: none;
}
.bcn-widget-card[data-on] .bcn-widget-card__state {
  display: inline-flex;
}
.bcn-widget-card__state .esa-badge {
  font-weight: var(--typography-font-weight-medium);
}
.bcn-viz-seasons {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
  position: relative;
}
.bcn-viz-seasons__axis {
  height: 1rem;
  position: relative;
}
.bcn-viz-seasons__tick {
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  line-height: 1;
  position: absolute;
  top: 0;
  transform: translate(-50%);
}
.bcn-viz-seasons__lane {
  gap: var(--spacing-400);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-viz-seasons__row {
  gap: var(--spacing-050);
  flex-direction: column;
  display: flex;
}
.bcn-viz-seasons__dates {
  block-size: 1rem;
  display: block;
  position: relative;
}
.bcn-viz-seasons__date {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  position: absolute;
  top: 0;
}
.bcn-viz-seasons__date--end {
  transform: translate(-100%);
}
.bcn-viz-seasons__track {
  height: var(--bcn-viz-seasons-bar-height, 10px);
  display: block;
  position: relative;
}
.bcn-viz-seasons__rule {
  inset-inline: 0;
  background: var(--color-border-default);
  height: 1px;
  position: absolute;
  top: 50%;
}
.bcn-viz-seasons__bar {
  border-radius: var(--radius-xs);
  background: var(--_accent, var(--color-content-default-secondary));
  height: 100%;
  position: absolute;
  top: 0;
}
.bcn-viz-seasons__bar--open-start {
  border-start-start-radius: 0;
  border-end-start-radius: 0;
}
.bcn-viz-seasons__name {
  color: var(--color-content-default, var(--color-content-default-primary));
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-viz-seasons__todaymark {
  background: var(--color-content-default-primary, var(--color-content-default));
  opacity: 0.32;
  pointer-events: none;
  width: 1px;
  position: absolute;
  top: -2px;
  bottom: -2px;
}
.bcn-viz-seasons__today-flag {
  font-size: max(0.8125rem, var(--font-size-100));
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-raised, var(--card-bg, #fff));
  padding-inline: var(--spacing-100);
  white-space: nowrap;
  line-height: 1;
  position: absolute;
  top: 0;
  transform: translate(-50%);
}
.bcn-viz-seasons__more,
.bcn-viz-seasons__empty {
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-shead__line {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  align-items: center;
}
.bcn-shead__line--vh {
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.bcn-wdate {
  flex-wrap: nowrap;
  align-self: flex-end;
  min-inline-size: 0;
}
.bcn-wdate__label {
  font-weight: var(--typography-font-weight-semibold, 600);
  color: var(--color-content-default);
  white-space: nowrap;
}
.bcn-wdate esa-select {
  --_field-padding-y: var(--spacing-100);
  inline-size: var(--bcn-wdate-width, 9.5rem);
}
.mpdash {
  --_col: 3;
  --_gap: var(--spacing-400);
  --_row: 8px;
  grid-template-columns: repeat(var(--_col), minmax(0, 1fr));
  grid-auto-rows: var(--_row);
  row-gap: 0;
  column-gap: var(--_gap);
  display: grid;
  position: relative;
}
.mpdash > .bcn-dwidget {
  z-index: 1;
  position: relative;
}
.mpd-add {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  border: 1.5px dashed var(--color-border-default-strong);
  border-radius: var(--radius-md);
  background: var(--color-background-elevation-base);
  min-block-size: 64px;
  color: var(--color-content-default-secondary);
  font-size: var(--font-size-150);
  cursor: pointer;
  grid-column: 1/-1;
  margin-block-end: var(--_gap);
  font-weight: 600;
  display: flex;
}
.mpd-add:hover {
  border-color: var(--color-background-brand);
  background: var(--bcn-teal-100, var(--color-background-elevation-sunken));
  color: var(--color-content-default-primary);
}
.mpd-add > span {
  font-size: var(--font-size-400);
  line-height: 1;
}
[data-mode="drag"] .mpd-add {
  opacity: 0.4;
  pointer-events: none;
}
.mpd-tracks {
  inset: calc(var(--_gap) * -1) 0;
  grid-template-columns: repeat(var(--_col), minmax(0, 1fr));
  gap: var(--_gap);
  pointer-events: none;
  opacity: 0;
  z-index: 0;
  transition: opacity 0.12s;
  display: grid;
  position: absolute;
}
.mpdash[data-mode="drag"] .mpd-tracks {
  opacity: 1;
}
.mpd-tracks > i {
  background: var(--color-background-elevation-sunken);
  border: 1px dashed var(--color-border-default-strong);
  border-radius: var(--radius-200);
}
.mpdash .mpd-slot {
  border: 2px dashed var(--color-background-brand);
  border-radius: var(--radius-200);
  background: var(--bcn-teal-100, var(--color-background-brand-subtle));
  z-index: 1;
  margin-block-end: var(--_gap);
  position: relative;
}
.mpdash .mpd-slot:after {
  content: attr(data-size);
  padding: 2px var(--spacing-200);
  border-radius: var(--radius-100);
  background: var(--color-content-default);
  color: var(--color-background-elevation-base);
  font-size: var(--font-size-100);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
  position: absolute;
  inset-block-start: var(--spacing-200);
  inset-inline-end: var(--spacing-200);
}
.mpd-add-grid {
  gap: var(--spacing-400);
  padding-block: var(--spacing-200);
  grid-template-columns: repeat(auto-fill, minmax(216px, 1fr));
  display: grid;
}
[data-scope-empty] .bcn-viz-donut,
[data-scope-empty] .bcn-viz-bars,
[data-scope-empty] .bcn-viz-meter,
[data-scope-empty] .bcn-viztrend,
[data-scope-empty] .bcn-mt,
[data-scope-empty] [data-bcn-obsmap],
[data-scope-empty] [data-cc],
[data-scope-empty] [data-cc-show],
[data-scope-empty] .esa-stat__sub,
[data-scope-empty] .bcn-dwidget__body > :not(:has(.esa-stat)) {
  display: none;
}
@media (width<=1180px) {
  .mpdash {
    --_col: 2;
  }
}
@media (width<=820px) {
  .mpdash {
    --_col: 1;
  }
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
```
