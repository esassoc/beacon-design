# Setup Wizard: styles

```css
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.bcn-swf {
  flex-direction: column;
  min-height: 100%;
  display: flex;
}
.bcn-swf__head {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) 0 var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-swf__home {
  align-items: center;
  gap: var(--spacing-300);
  color: inherit;
  border-radius: var(--radius-200);
  text-decoration: none;
  display: inline-flex;
}
.bcn-swf__home:hover .bcn-swf__title {
  text-decoration: underline;
}
.bcn-swf__home:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.bcn-swf__mark {
  border-radius: var(--radius-full);
  background: var(--bcn-teal-600, var(--color-background-brand));
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  display: inline-flex;
}
.bcn-swf__mark[data-square] {
  width: auto;
  height: auto;
  color: var(--bcn-teal-600, var(--color-content-brand));
  --icon-size-xs: 20px;
  background: 0 0;
  border-radius: 0;
}
.bcn-swf__title {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.2;
}
.bcn-swf__sub {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1;
}
.bcn-swf__nav {
  padding: 0 0 var(--spacing-500);
}
.bcn-swf__steps {
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-swf__item {
  flex: 1;
  align-items: center;
  min-width: 0;
  display: flex;
}
.bcn-swf__item--fork,
.bcn-swf__item:last-child {
  flex: none;
}
.bcn-swf__step {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  border-radius: var(--radius-200);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  text-decoration: none;
  transition:
    background-color 0.15s,
    color 0.15s;
  display: inline-flex;
}
.bcn-swf__icon {
  color: var(--_step);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-swf__check {
  margin-left: var(--spacing-100);
  color: var(--_step);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-swf__label {
  line-height: 1;
}
.bcn-swf__step:hover,
.bcn-swf__step[data-active] {
  background: var(--_step);
  color: var(--color-content-default-knockout);
}
.bcn-swf__step:hover .bcn-swf__icon,
.bcn-swf__step:hover .bcn-swf__check,
.bcn-swf__step[data-active] .bcn-swf__icon,
.bcn-swf__step[data-active] .bcn-swf__check {
  color: var(--color-content-default-knockout);
}
.bcn-swf__step:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.bcn-swf__connector {
  height: 0;
  margin: 0 var(--spacing-200);
  border-top: 2px dotted var(--color-border-default);
  flex: 1;
}
.bcn-swf__branch .bcn-swf__step {
  margin: var(--spacing-150) 0;
  flex: 1;
}
.bcn-swf__body {
  flex: 1;
  min-width: 0;
}
@media (width<=900px) {
  .bcn-swf__label {
    display: none;
  }
}
@media (width<=900px) {
  .bcn-swf__step[data-active] .bcn-swf__label {
    display: inline;
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
.bcn-cirun {
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.bcn-cirun__phases {
  gap: var(--spacing-400);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
}
.bcn-cirun__phase {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-cirun__phase-head {
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  display: flex;
}
.bcn-cirun__phase-n,
.bcn-cirun__phase-check {
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border-default);
  width: 18px;
  height: 18px;
  font-size: 0.6875rem;
  font-weight: var(--typography-font-weight-semibold);
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-cirun__phase-check {
  display: none;
}
.bcn-cirun__phase-label {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-cirun__phase-count {
  font-variant-numeric: tabular-nums;
  margin-left: auto;
}
.bcn-cirun__phase[data-state="running"] .bcn-cirun__phase-head {
  color: var(--color-content-default);
}
.bcn-cirun__phase[data-state="running"] .bcn-cirun__phase-n {
  background: var(--color-background-brand);
  border-color: var(--color-background-brand);
  color: var(--color-content-on-brand);
}
.bcn-cirun__phase[data-state="done"] .bcn-cirun__phase-n {
  display: none;
}
.bcn-cirun__phase[data-state="done"] .bcn-cirun__phase-check {
  background: var(--color-background-success-subtle);
  border-color: var(--color-border-success);
  color: var(--color-content-success);
  display: inline-flex;
}
.bcn-cirun__stats {
  gap: var(--spacing-400);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  grid-template-columns: repeat(6, minmax(0, 1fr));
  display: grid;
}
.bcn-cirun__bar {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-cirun__status {
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-cirun__clock {
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  font-variant-numeric: tabular-nums;
}
.bcn-cirun__controls {
  gap: var(--spacing-200);
  align-items: center;
  margin-left: auto;
  display: flex;
}
.bcn-cirun__log {
  height: 26rem;
  padding: var(--spacing-200) var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-150, var(--radius-200));
  background: var(--color-background-elevation-sunken);
  font-family: var(--typography-font-family-mono);
  font-size: var(--font-size-100);
  line-height: 22px;
  overflow-y: auto;
}
.bcn-cirun__log:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
.bcn-cirun__log .bcn-cirun__line {
  gap: var(--spacing-300);
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--color-content-default-tertiary);
  display: flex;
  overflow: hidden;
}
.bcn-cirun__log .bcn-cirun__stamp {
  color: var(--color-content-disabled);
  flex-shrink: 0;
}
.bcn-cirun__log .bcn-cirun__msg {
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-cirun__log [data-level="info"] .bcn-cirun__msg {
  padding-left: var(--spacing-300);
}
.bcn-cirun__log [data-level="heading"] {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-cirun__log [data-level="finding"] {
  color: var(--color-content-brand);
}
.bcn-cirun__log [data-level="warning"] {
  color: var(--color-content-warning);
}
.bcn-cirun__log [data-level="warning"] .bcn-cirun__msg {
  padding-left: var(--spacing-300);
}
.bcn-cirun__log [data-level="error"] {
  color: var(--color-content-danger);
  font-weight: var(--typography-font-weight-semibold);
}
@media (width<=960px) {
  .bcn-cirun__phases {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (width<=960px) {
  .bcn-cirun__stats {
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
.typography-display-sm {
  font-family: var(--typography-display-sm-font-family);
  font-size: var(--typography-display-sm-font-size);
  font-weight: var(--typography-display-sm-font-weight);
  line-height: var(--typography-display-sm-line-height);
  letter-spacing: var(--typography-display-sm-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-content-default, #202020));
  --_stat-value-font: var(
    --typography-font-family-display,
    var(
      --typography-display-sm-font-family,
      var(--typography-font-family-display, "DM Sans", sans-serif)
    )
  );
  --_stat-value-size: var(
    --stat-value-size,
    var(--typography-display-sm-font-size, var(--font-size-700, 2.25rem))
  );
  --_stat-value-weight: var(
    --typography-font-weight-bold,
    var(--typography-display-sm-font-weight, var(--typography-font-weight-bold, 650))
  );
  --_stat-label-color: var(--color-content-default-secondary, #646464);
  --_stat-label-size: var(
    --font-size-200,
    var(--typography-label-md-font-size, var(--font-size-200, 0.9375rem))
  );
  --_stat-label-weight: var(
    --typography-font-weight-medium,
    var(--typography-label-md-font-weight, var(--typography-font-weight-medium, 500))
  );
  --_stat-sub-color: var(--color-content-default-secondary, #646464);
  --_stat-sub-size: var(
    --font-size-150,
    var(--typography-body-sm-font-size, var(--font-size-150, 0.875rem))
  );
  --_stat-accent-color: var(--stat-accent-color, var(--color-content-brand, #2a7e3b));
  --_stat-gap: var(--spacing-050, 0.125rem);
  gap: var(--_stat-gap);
  background: 0 0;
  flex-direction: column;
  display: flex;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  color: var(--_stat-sub-color);
}
.esa-progress-bar {
  --_progress-height: var(--progress-bar-height-md, 8px);
  --_progress-radius: var(--radius-pill, 9999px);
  --_progress-track-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_progress-fill-bg: var(--color-background-brand, #46a758);
  width: 100%;
  display: block;
}
.esa-progress-bar__track {
  height: var(--_progress-height);
  border-radius: var(--_progress-radius);
  background: var(--_progress-track-bg);
  position: relative;
  overflow: hidden;
}
.esa-progress-bar__fill {
  border-radius: var(--_progress-radius);
  background: var(--_progress-fill-bg);
  height: 100%;
  transition: width 0.3s;
}
.esa-progress-bar--xs {
  --_progress-height: var(--progress-bar-height-xs, 2px);
}
.esa-progress-bar--indeterminate .esa-progress-bar__fill {
  animation: esa-progress-indeterminate var(--animation-indeterminate, 1.5s ease-in-out infinite);
  width: 40% !important;
}
@media (prefers-reduced-motion: reduce) {
  .esa-progress-bar--indeterminate .esa-progress-bar__fill {
    animation: 2s ease-in-out infinite esa-progress-pulse;
    width: 100% !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .esa-progress-bar__fill {
    transition: none;
  }
}
@media (forced-colors: active) {
  .esa-progress-bar__track {
    background: canvas;
    border: 1px solid canvastext;
  }
}
@media (forced-colors: active) {
  .esa-progress-bar__fill {
    background: highlight;
  }
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
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
.bcn-swsp {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-shrink: 0;
}
.bcn-swsp__header {
  padding: var(--spacing-400) var(--spacing-500);
}
.bcn-swsp__row {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-swsp__num {
  border-radius: var(--radius-full);
  background: var(--_step);
  width: 28px;
  height: 28px;
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  display: inline-flex;
}
.bcn-swsp__title {
  align-items: center;
  gap: var(--spacing-150);
  font-family: var(--font-decorative);
  color: var(--color-content-default);
  flex-wrap: wrap;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.2;
  display: inline-flex;
}
.bcn-swsp__actions {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swsp__actions:empty {
  display: none;
}
.bcn-swsp__intro {
  margin: var(--spacing-200) 0 0;
  color: var(--color-content-default);
  font-size: 0.875rem;
  line-height: 1.4;
}
```
