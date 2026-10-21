# Library: styles

```css
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
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
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
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
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
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
.bcn-sw3src {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  height: 100%;
  min-height: 0;
  box-shadow: var(--elevation-3);
  flex-direction: column;
  font-size: 0.8125rem;
  line-height: 1.3;
  display: flex;
  overflow: hidden;
}
.bcn-sw3src__head {
  padding: var(--spacing-200) var(--spacing-200) var(--spacing-200) var(--spacing-400);
  background: var(--color-background-elevation-sunken);
  border-bottom: 1px solid var(--color-border-default);
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.bcn-sw3src__title {
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
}
.bcn-sw3src__list {
  min-height: 0;
  padding: var(--spacing-200);
  gap: var(--spacing-300);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-sw3src__foot {
  padding: var(--spacing-200) var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-sw3src__list .bcn-sw3src__srcrow,
.bcn-sw3src__list .bcn-sw3src__file {
  border-radius: var(--radius-100);
  align-items: flex-start;
  display: flex;
  position: relative;
}
.bcn-sw3src__list .bcn-sw3src__srcrow:hover,
.bcn-sw3src__list .bcn-sw3src__file:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-sw3src__list .bcn-sw3src__source[data-selected] > .bcn-sw3src__srcrow,
.bcn-sw3src__list .bcn-sw3src__file[data-selected] {
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 0 0 1px var(--color-border-default);
}
.bcn-sw3src__list .bcn-sw3src__fold {
  flex: none;
  margin: 3px 0 0 2px;
}
.bcn-sw3src__list button[data-src-fold] {
  width: 24px;
  height: 24px;
  min-height: 24px;
  padding: 5px;
}
.bcn-sw3src__list .bcn-sw3src__fold svg {
  transition: transform 0.15s;
}
.bcn-sw3src__list .bcn-sw3src__source[data-collapsed] .bcn-sw3src__fold svg {
  transform: rotate(-90deg);
}
.bcn-sw3src__list .bcn-sw3src__source[data-collapsed] .bcn-sw3src__files {
  display: none;
}
.bcn-sw3src__list .bcn-sw3src__srcbtn,
.bcn-sw3src__list .bcn-sw3src__filebtn {
  gap: var(--spacing-150, 0.375rem);
  min-width: 0;
  padding: var(--spacing-150, 0.375rem) var(--spacing-200);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: var(--radius-100);
  background: 0 0;
  border: 0;
  flex: 1;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__srcbtn {
  flex-direction: column;
  gap: 0;
  padding-left: 2px;
}
.bcn-sw3src__list .bcn-sw3src__srcbtn:focus-visible,
.bcn-sw3src__list .bcn-sw3src__filebtn:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-sw3src__list .bcn-sw3src__name {
  color: var(--color-content-default);
  font-weight: 600;
}
.bcn-sw3src__list .bcn-sw3src__files {
  padding: 0 0 0 var(--spacing-400);
  flex-direction: column;
  gap: 2px;
  margin: 2px 0 0;
  list-style: none;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fileicon {
  color: var(--color-content-default-secondary);
  flex: none;
  padding-top: 1px;
}
.bcn-sw3src__list .bcn-sw3src__filetext {
  flex-direction: column;
  flex: 1;
  gap: 1px;
  min-width: 0;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fname {
  min-width: 0;
  color: var(--color-content-default);
  white-space: nowrap;
  font-weight: 500;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fstart {
  text-overflow: ellipsis;
  min-width: 0;
  overflow: hidden;
}
.bcn-sw3src__list .bcn-sw3src__fend {
  flex: none;
}
.bcn-sw3src__list .bcn-sw3src__fstate {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fstate [hidden] {
  display: none;
}
.bcn-sw3src__list .bcn-sw3src__fstate {
  gap: var(--spacing-100);
  flex-wrap: nowrap;
  min-width: 0;
  margin-top: 2px;
}
.bcn-sw3src__list .bcn-sw3src__fstate [data-file-state-badge] {
  --color-background-brand-muted: var(--color-background-elevation-sunken);
  --color-content-on-brand-muted: var(--color-content-default-secondary);
}
.bcn-sw3src__list .bcn-sw3src__fstate .esa-badge--secondary {
  border: 1px solid var(--color-border-default);
}
.bcn-sw3src__list .bcn-sw3src__progress {
  margin-top: 2px;
  display: block;
}
.bcn-sw3src__list .bcn-sw3src__progress[hidden] {
  display: none;
}
.bcn-sw3src__list .bcn-sw3src__menu {
  opacity: 0;
  flex: none;
  padding: 2px 2px 0 0;
}
.bcn-sw3src__list .bcn-sw3src__srcrow:hover > .bcn-sw3src__menu,
.bcn-sw3src__list .bcn-sw3src__file:hover > .bcn-sw3src__menu,
.bcn-sw3src__list .bcn-sw3src__menu:focus-within,
.bcn-sw3src__list .bcn-sw3src__menu[open] {
  opacity: 1;
}
.bcn-sw3src__list .bcn-sw3src__menu {
  --spacing-200: 0.25rem;
  --spacing-300: 0.5rem;
  --dropdown-menu-min-width: 10rem;
  --typography-body-md-font-size: 0.8125rem;
  --typography-body-md-line-height: 1.3;
  --typography-body-md-font-weight: var(--typography-font-weight-medium);
}
.bcn-sw3src__list .bcn-sw3src__menu > * {
  --spacing-200: 0.5rem;
  --spacing-300: 0.75rem;
}
.bcn-sw3tools esa-button-group,
.bcn-sw3tools .esa-button,
.bcn-sw3tools esa-dropdown-menu {
  flex: none;
}
@container (width<=720px) {
  .bcn-sw3tools [data-tool="follow"] .esa-button__label {
    display: none;
  }
}
@container (width<=660px) {
  .bcn-sw3tools [data-tool]:not([data-tool="zoom-fit"]) .esa-button__label {
    display: none;
  }
}
.bcn-sw3scan[data-library="closed"] .bcn-sw3scan__sources > .bcn-sw3src,
.bcn-sw3scan__rail {
  display: none;
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```
