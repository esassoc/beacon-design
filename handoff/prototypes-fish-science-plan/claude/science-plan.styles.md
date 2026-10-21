# Science Plan: styles

```css
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
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
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--neutral:not(.esa-badge--dot),
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
.bcn-planr {
  gap: var(--spacing-400);
  font-size: var(--font-size-200);
  color: var(--color-content-default);
  flex-direction: column;
  display: flex;
}
.bcn-planr__filterbar {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
}
.bcn-planr__fb-top {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-planr__fb-group {
  align-items: center;
  gap: var(--spacing-300);
  display: inline-flex;
}
.bcn-planr__fb-label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
}
.bcn-planr__fb-divider {
  background: var(--color-border-default);
  width: 1px;
  margin: 0 var(--spacing-100);
  align-self: stretch;
}
.bcn-planr__fb-right {
  align-items: center;
  gap: var(--spacing-400);
  margin-left: auto;
  display: inline-flex;
}
.bcn-planr__fb-group esa-text-field {
  width: 240px;
}
.bcn-planr__fb-group esa-select {
  width: 12em;
  display: inline-block;
}
.bcn-planr__fb-group .bcn-status-select__trigger {
  height: 32px;
  padding: 0 var(--spacing-200);
  font-size: var(--typography-label-xs-font-size, 12px);
  font-weight: var(--typography-font-weight-regular);
}
.bcn-planr__counts {
  align-items: center;
  gap: var(--spacing-300);
  font-size: var(--font-size-100);
  display: inline-flex;
}
.bcn-planr__count {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  display: inline-flex;
}
.bcn-planr__count:before {
  content: "";
  border-radius: var(--radius-full);
  width: 8px;
  height: 8px;
}
.bcn-planr__count[data-s="open"]:before {
  background: var(--color-background-utility-warning);
}
.bcn-planr__count[data-s="addressed"]:before {
  background: var(--color-background-utility-info);
}
.bcn-planr__count[data-s="resolved"]:before {
  background: var(--color-background-utility-success);
}
.bcn-planr__grid {
  gap: var(--spacing-600);
  grid-template-columns: 300px minmax(0, 1fr);
  align-items: start;
  display: grid;
}
.bcn-planr__outline {
  top: var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  padding: var(--spacing-300);
  max-height: calc(100vh - 140px);
  position: sticky;
  overflow-y: auto;
}
.bcn-planr__toc {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-planr__toc-link {
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-200);
  border-radius: var(--radius-100);
  color: var(--color-content-default-secondary);
  font-size: var(--font-size-150);
  line-height: 1.35;
  text-decoration: none;
  display: flex;
}
.bcn-planr__toc-link:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default);
}
.bcn-planr__toc-item[data-level="1"] .bcn-planr__toc-link {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin-top: var(--spacing-150);
}
.bcn-planr__toc-item[data-level="3"] .bcn-planr__toc-link {
  padding-left: var(--spacing-500);
}
.bcn-planr__toc-num {
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  flex: none;
  min-width: 34px;
}
.bcn-planr__toc-title {
  min-width: 0;
}
.bcn-planr__toc-count {
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-full);
  flex: none;
  margin-left: auto;
  padding: 0 6px;
  line-height: 1.6;
}
.bcn-planr__doc {
  gap: var(--spacing-500);
  flex-direction: column;
  min-width: 0;
  max-width: 84ch;
  display: flex;
}
.bcn-planr__section {
  scroll-margin-top: var(--spacing-400);
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-planr__sec-head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-200) var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-planr__h1 {
  margin: var(--spacing-400) 0 0;
  padding-bottom: var(--spacing-200);
  border-bottom: 2px solid var(--color-border-default-strong);
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  flex: 100%;
  line-height: 1.3;
}
.bcn-planr__h2 {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  margin: 0;
  line-height: 1.3;
}
.bcn-planr__h3 {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  margin: 0;
  line-height: 1.35;
}
.bcn-planr__num {
  font-family: var(--typography-font-family-mono);
  color: var(--color-content-default-tertiary);
  margin-right: var(--spacing-250);
  font-size: 0.85em;
}
.bcn-planr__coas {
  align-items: center;
  gap: var(--spacing-150);
  flex-wrap: wrap;
  display: inline-flex;
}
.bcn-planr__coa {
  font-family: var(--typography-font-family-mono);
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  padding: 1px 5px;
  line-height: 1.5;
  text-decoration: none;
  display: inline-block;
}
a.bcn-planr__coa:hover {
  background: color-mix(in srgb, var(--color-commitment) 20%, white);
}
.bcn-planr__excerpt {
  font-size: var(--font-size-200);
  color: var(--color-content-default-secondary);
  max-width: 72ch;
  margin: 0;
  line-height: 1.6;
}
.bcn-planr__thread {
  margin: var(--spacing-100) 0 0;
  gap: var(--spacing-300);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-planr__comment,
.bcn-planr__reply {
  gap: var(--spacing-250);
  display: flex;
}
.bcn-planr__comment {
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
}
.bcn-planr__avatar {
  flex: none;
}
.bcn-planr__c-body {
  gap: var(--spacing-150);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-planr__c-meta {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-150);
  flex-wrap: wrap;
  display: flex;
}
.bcn-planr__c-author {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-planr__c-time {
  color: var(--color-content-default-tertiary);
  font-size: var(--font-size-100);
}
.bcn-planr__c-tags {
  align-items: center;
  gap: var(--spacing-150);
  margin-left: auto;
  display: inline-flex;
}
.bcn-planr__c-text {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.55;
}
.bcn-planr__replies {
  margin: var(--spacing-100) 0 0;
  padding: var(--spacing-250) 0 0 var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
  gap: var(--spacing-250);
  flex-direction: column;
  list-style: none;
  display: flex;
}
.bcn-planr__noresults {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  margin: 0;
}
@media (width<=1000px) {
  .bcn-planr__grid {
    grid-template-columns: 1fr;
  }
}
@media (width<=1000px) {
  .bcn-planr__outline {
    max-height: none;
    position: static;
  }
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
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-status-select {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
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
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
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
```
