# Feature Flags: styles

```css
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
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
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
.esa-card--outlined {
  --_card-border: var(--color-border-default, #cecece);
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
.esa-card__header-content {
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
  display: flex;
}
.esa-card__titles {
  gap: var(--spacing-050, 0.125rem);
  flex-direction: column;
  display: flex;
}
.esa-card__title {
  color: inherit;
  margin: 0;
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
.bcn-settings-search,
.bcn-settings-search__fieldwrap {
  position: relative;
}
.bcn-settings-search__field {
  --_field-padding-x: 2rem;
  --form-border-color-focus: var(--color-content-link);
  --focus-ring-color: var(--color-content-link);
  display: block;
}
.bcn-settings-search__icon {
  z-index: 1;
  color: var(--color-content-default-tertiary);
  pointer-events: none;
  display: inline-flex;
  position: absolute;
  inset-block-start: 50%;
  inset-inline-start: var(--spacing-250);
  transform: translateY(-50%);
}
.bcn-settings-search__panel {
  z-index: 30;
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  max-block-size: min(24rem, 60vh);
  box-shadow: var(--elevation-4);
  flex-direction: column;
  display: flex;
  position: absolute;
  inset-block-start: calc(100% + var(--spacing-100));
  inset-inline: 0;
  overflow-y: auto;
}
.bcn-settings-search__panel[hidden] {
  display: none;
}
.bcn-settings-search__count {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-250);
  border-bottom: 1px solid var(--color-border-default-subtle, var(--color-border-default));
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
  display: flex;
}
.bcn-settings-search__count kbd {
  min-width: 19px;
  height: 19px;
  font-family: inherit;
  font-size: 11px;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  display: inline-flex;
}
.bcn-settings-search__list {
  padding: var(--spacing-100);
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-settings-search__result {
  padding: var(--spacing-150) var(--spacing-200);
  border-radius: var(--radius-100);
  color: inherit;
  flex-direction: column;
  gap: 1px;
  text-decoration: none;
  display: flex;
}
.bcn-settings-search__result[hidden] {
  display: none;
}
.bcn-settings-search__result:hover,
.bcn-settings-search__result.is-active {
  background: var(--color-background-elevation-sunken);
}
.bcn-settings-search__result-label {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-settings-search__result:hover .bcn-settings-search__result-label,
.bcn-settings-search__result.is-active .bcn-settings-search__result-label {
  color: var(--color-content-link);
}
.bcn-settings-search__result-label mark {
  color: var(--color-content-default);
  background: #fde047;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-settings-search__result-meta {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.4;
  overflow: hidden;
}
.bcn-settings-search__more,
.bcn-settings-search__empty {
  padding: var(--spacing-200) var(--spacing-250);
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-settings-search__more {
  border-top: 1px solid var(--color-border-default-subtle, var(--color-border-default));
  color: var(--color-content-default-tertiary);
}
.bcn-settings-search__more[hidden],
.bcn-settings-search__empty[hidden] {
  display: none;
}
.bcn-settings-nav {
  gap: var(--spacing-500, 1.5rem);
  flex-direction: column;
  display: flex;
}
.bcn-settings-nav__block {
  gap: var(--spacing-400, 1rem);
  flex-direction: column;
  display: flex;
}
.bcn-settings-nav__block + .bcn-settings-nav__block {
  margin-block-start: var(--spacing-300, 0.75rem);
}
.bcn-settings-nav__block--esa {
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  border-radius: var(--radius-300, 0.5rem);
  padding: var(--spacing-300, 0.75rem);
}
@supports not (backdrop-filter: blur(1px)) {
  .bcn-settings-nav__block--esa {
    background: var(--bcn-helpbar-bg-solid);
  }
}
@media (prefers-reduced-transparency: reduce) {
  .bcn-settings-nav__block--esa {
    background: var(--bcn-helpbar-bg-solid);
    backdrop-filter: none;
  }
}
.bcn-settings-nav__block--esa .bcn-settings-nav__aud {
  color: #fff;
}
.bcn-settings-nav__block--esa .bcn-settings-nav__zone {
  color: #ffffffc7;
}
.bcn-settings-nav__block--esa .bcn-settings-nav__link {
  color: #ffffffe0;
}
.bcn-settings-nav__block--esa .bcn-settings-nav__link:hover {
  color: #fff;
  background: #ffffff14;
}
.bcn-settings-nav__block--esa .bcn-settings-nav__link[aria-current="page"] {
  color: #fff;
  background: #ffffff2e;
}
.bcn-settings-nav__block--esa .bcn-settings-nav__link:focus-visible {
  outline-color: #fff;
}
.bcn-settings-nav__aud {
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding-inline: var(--spacing-300, 0.75rem);
  border-block-end: 1px solid var(--color-border-default-subtle, var(--color-border-default));
  font-weight: var(--typography-font-weight-semibold, 600);
  color: var(--color-content-default);
  margin: 0;
  padding-block-end: var(--spacing-200, 0.5rem);
  display: flex;
}
.bcn-settings-nav__aud-icon {
  flex: none;
  display: inline-flex;
}
.bcn-settings-nav__block--esa .bcn-settings-nav__aud {
  border-block-end-color: #ffffff2e;
}
.bcn-settings-nav__zone {
  margin: 0 0 var(--spacing-100, 0.25rem);
  padding-inline: var(--spacing-300, 0.75rem);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: var(--typography-font-weight-bold, 700);
  color: var(--color-content-default-tertiary);
}
.bcn-settings-nav__list {
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-settings-nav__link {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
  padding: var(--spacing-150, 0.375rem) var(--spacing-300, 0.75rem);
  border-radius: var(--radius-200, 0.5rem);
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  text-decoration: none;
  transition:
    background 0.1s,
    color 0.1s;
  display: flex;
}
.bcn-settings-nav__page {
  min-width: 0;
}
.bcn-settings-nav__count {
  border-radius: var(--radius-100, 0.25rem);
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  flex: none;
  padding: 1px 5px;
  font-size: 0.6875rem;
  line-height: 1.2;
}
.bcn-settings-nav__block--esa .bcn-settings-nav__count {
  color: #ffffffc7;
  background: #ffffff24;
}
.bcn-settings-nav__link[aria-current="page"] .bcn-settings-nav__count {
  color: inherit;
  background: color-mix(in srgb, var(--color-content-default) 10%, transparent);
}
.bcn-settings-nav__block--esa
  .bcn-settings-nav__link[aria-current="page"]
  .bcn-settings-nav__count {
  background: #fff3;
}
.bcn-settings-nav__link:hover {
  background: color-mix(in srgb, var(--color-background-elevation-sunken) 50%, transparent);
  color: var(--color-content-default);
}
.bcn-settings-nav__link:focus-visible {
  outline: var(--focus-ring-width, 2px) solid
    var(--focus-ring-color, var(--color-content-link, #005862));
  outline-offset: 2px;
}
.bcn-settings-nav__link[aria-current="page"] {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-settings-shell__rail {
  align-self: start;
}
.bcn-settings-shell__content {
  --card-bg: #fff;
  min-inline-size: 0;
}
.bcn-settings-shell__content[data-esa-surface] .esa-card {
  --card-header-bg: var(--bcn-helpbar-bg);
  --card-header-color: #fff;
  --card-header-border-color: transparent;
}
.bcn-settings-shell__content[data-esa-surface] .esa-card__header .esa-card__subtitle {
  color: #ffffffd1;
}
.bcn-settings-shell__content[data-esa-surface] .esa-card__header .esa-card__actions {
  --color-content-default: #fff;
  --color-border-default: #ffffff6b;
  --color-background-elevation-sunken: #ffffff29;
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
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
.bcn-flag-row {
  column-gap: var(--spacing-400);
  row-gap: var(--spacing-100);
  padding-block: var(--spacing-250);
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  display: grid;
}
.bcn-flag-row__switch {
  grid-area: 1/1;
  align-items: center;
  display: flex;
}
.bcn-flag-row__name {
  grid-area: 1/2;
}
.bcn-flag-row__desc {
  grid-area: 2/2;
}
.bcn-flag-row__meta {
  grid-area: 3/2;
}
.bcn-flag-row esa-switch-toggle::part(label) {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.bcn-flag-row__name {
  line-height: 1.4;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-flag-row__desc {
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.4;
}
.bcn-flag-row__meta {
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-flag-list__desc {
  margin: 0 0 var(--spacing-400, 1rem);
  color: var(--color-content-default-secondary, #525252);
}
.bcn-flag-list {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-flag-list > li + li {
  border-top: 1px solid var(--color-border-default-subtle);
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
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
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
```
