# Applicable Commitments drawer: styles

```css
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
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
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
.bcn-tl__pop .bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
  display: inline-block;
}
.bcn-mod__action-name .bcn-cbadge {
  margin-right: var(--spacing-150);
}
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
}
.bcn-sw {
  --side-dialog-width-lg: 1180px;
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --side-dialog-backdrop-filter: blur(2px);
  --typography-label-xs-font-size: var(--font-size-150);
}
.bcn-sw__body {
  gap: var(--spacing-400);
  height: 100%;
  min-height: 0;
  color: var(--color-content-default);
  flex-direction: column;
  display: flex;
}
.bcn-sw__head {
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
  display: flex;
}
.bcn-sw__headtitle {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  margin: 0;
}
.bcn-sw__head .esa-icon {
  color: var(--color-content-default-secondary);
}
.bcn-sw__head .esa-badge {
  color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-medium);
  background: 0 0;
}
.bcn-sw__search {
  width: 100%;
  display: inline-flex;
}
.bcn-sw__search esa-text-field {
  width: 100%;
}
.bcn-sw__lead {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  flex: none;
  display: flex;
}
.bcn-sw__figures {
  align-items: center;
  gap: var(--spacing-500);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw__figure {
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0;
  display: inline-flex;
}
.bcn-sw__figval {
  font-size: var(--font-size-500);
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default);
}
.bcn-sw__figlabel {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
}
.bcn-sw__bar {
  width: 140px;
}
.bcn-sw__controls {
  flex: none;
}
.bcn-sw__panes {
  gap: var(--spacing-400);
  flex: 1;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  align-items: stretch;
  min-height: 0;
  display: grid;
}
.bcn-sw__pane {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
}
.bcn-sw__pane--list {
  background: var(--color-background-elevation-sunken);
  position: relative;
  overflow: hidden;
}
.bcn-sw__scroll {
  min-height: 0;
  padding: var(--spacing-300);
  flex: 1;
  overflow-y: auto;
}
.bcn-sw__scroll--pad {
  padding: var(--spacing-500);
}
.bcn-sw__rows {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw__none[hidden],
.bcn-sw__nopreview[hidden] {
  display: none;
}
.bcn-sw-row {
  align-items: start;
  column-gap: var(--spacing-400);
  padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  cursor: pointer;
  grid-template-columns: auto minmax(0, 1fr);
  transition:
    border-color 0.12s,
    background 0.12s;
  display: grid;
}
.bcn-sw-row[hidden] {
  display: none;
}
.bcn-sw-row:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-sw-row[data-active] {
  border-color: var(--color-background-brand);
  background: color-mix(
    in srgb,
    var(--color-background-brand) 5%,
    var(--color-background-elevation-raised)
  );
}
.bcn-sw-row__content {
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-sw-row__top {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-width: 0;
  display: flex;
}
.bcn-sw-row__check {
  cursor: default;
  align-items: center;
  min-height: 1.75rem;
  display: inline-flex;
}
.bcn-sw-row__hit {
  min-width: 0;
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex: 1;
  padding: 0;
  display: flex;
}
.bcn-sw-row__hit:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-sw-row__titleline {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: nowrap;
  min-width: 0;
  display: flex;
}
.bcn-sw-row__name {
  min-width: 0;
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.35;
  overflow: hidden;
}
.bcn-sw-row__name mark {
  background: var(
    --color-background-utility-warning-subtle,
    color-mix(in srgb, var(--color-background-utility-warning) 25%, transparent)
  );
  color: inherit;
  border-radius: 2px;
}
.bcn-sw-row__note {
  color: var(--color-content-default-secondary);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8125rem;
  line-height: 1.35;
  overflow: hidden;
}
.bcn-sw-row__note[hidden] {
  display: none;
}
.bcn-sw-row__flag {
  align-items: center;
  gap: var(--spacing-100);
  min-width: 0;
  color: var(--color-content-utility-warning);
  font-size: 0.8125rem;
  line-height: 1.35;
  display: flex;
}
.bcn-sw-row__flag > span {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-sw-row__flag[hidden] {
  display: none;
}
.bcn-sw-row__marks {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  display: inline-flex;
}
.bcn-sw-row__state {
  flex: none;
  display: none;
}
.bcn-sw-row[data-decision="applied"] .bcn-sw-row__state--applied,
.bcn-sw-row[data-decision="dismissed"] .bcn-sw-row__state--dismissed {
  display: inline-flex;
}
.bcn-sw-row__state--applied .esa-badge {
  --badge-bg: transparent;
  --badge-text-color: var(--color-background-brand);
  border: 1px solid var(--color-border-brand, var(--color-border-default));
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-row__state--dismissed .esa-badge {
  --badge-bg: transparent;
  --badge-text-color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-row__acts {
  align-items: center;
  gap: var(--spacing-150);
  visibility: hidden;
  cursor: default;
  flex: none;
  margin-left: auto;
  display: flex;
}
.bcn-sw-row:hover .bcn-sw-row__acts,
.bcn-sw-row:focus-within .bcn-sw-row__acts {
  visibility: visible;
}
.bcn-sw-row[data-decision="applied"] .bcn-sw-row__act--apply,
.bcn-sw-row[data-decision="dismissed"] .bcn-sw-row__act--dismiss,
.bcn-sw-row[data-decision=""] .bcn-sw-row__act--undo {
  display: none;
}
.bcn-sw__listhead {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  min-height: 44px;
  padding: var(--spacing-200) var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  flex: none;
  display: flex;
}
.bcn-sw__listcount {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  font-size: 0.8125rem;
}
.bcn-sw__listacts {
  align-items: center;
  gap: var(--spacing-150);
  margin-left: auto;
  display: flex;
}
.bcn-sw__listacts[hidden] {
  display: none;
}
.bcn-sw-prev {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-sw-prev[hidden] {
  display: none;
}
.bcn-sw-prev__head {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw-prev__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.25;
}
.bcn-sw-prev__doc {
  padding: var(--spacing-400);
  border-radius: var(--radius-200);
  background: var(--bcn-citation-bg);
  font-family: var(--font-decorative);
  color: var(--color-content-default);
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.65;
}
.bcn-sw-prev__facts {
  gap: var(--spacing-300) var(--spacing-500);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  display: grid;
}
.bcn-sw-prev__effect,
.bcn-sw-prev__rec,
.bcn-sw-prev__decision {
  gap: var(--spacing-250, 0.625rem);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-sw-prev__rec {
  align-items: flex-start;
}
.bcn-sw-prev__decision {
  gap: var(--spacing-300) var(--spacing-500);
  flex-flow: wrap;
}
.bcn-sw-prev__effect[hidden],
.bcn-sw-prev__rec[hidden],
.bcn-sw-prev__decision[hidden],
[data-sw-prev-ratwrap][hidden] {
  display: none;
}
.bcn-sw-prev__efftitle {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-sw-prev__reasons {
  gap: var(--spacing-100);
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  flex-direction: column;
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
}
.bcn-sw-prev__actions {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-sw-prev__action {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  display: flex;
}
.bcn-sw-prev__actname {
  min-width: 0;
  font-size: var(--font-size-150);
  color: var(--color-content-default);
  flex: 1;
}
.bcn-sw-prev__acttype .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-sw-prev__decval {
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
}
.bcn-sw__foot {
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
@media (width<=60rem) {
  .bcn-sw__panes {
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr);
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
.bcn-filterbar {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
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
.bcn-filterbar__search--filters {
  width: 20rem;
  min-width: 0;
  margin-left: 0;
}
.bcn-filterbar--compact {
  --typography-microcopy-md-font-size: 14px;
  --typography-microcopy-md-strong-font-size: 14px;
  --typography-microcopy-md-subtle-font-size: 14px;
}
.bcn-filterbar--compact esa-button-toggle {
  --_pad-y: calc((26px - 1lh) / 2);
}
.bcn-filterbar--compact esa-button-toggle[data-icons] {
  --_icon-size: 14px;
  --_pad-y: calc((26px - max(1lh, 14px)) / 2);
}
.bcn-filterbar--compact esa-text-field {
  --_field-padding-y: calc((32px - 1.3em) / 2 - var(--form-border-width, 1px));
}
.bcn-filterbar--compact esa-switch-toggle {
  align-items: center;
  display: inline-flex;
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
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
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
.esa-progress-bar {
  --_progress-height: var(--progress-bar-height-md, 8px);
  --_progress-radius: var(--radius-pill, 9999px);
  --_progress-track-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_progress-fill-bg: var(--color-background-brand, #46a758);
  width: 100%;
  display: block;
}
.esa-progress-bar__header {
  margin-bottom: var(--spacing-100, 0.25rem);
  justify-content: space-between;
  align-items: baseline;
  display: flex;
}
.esa-progress-bar__value {
  color: var(--color-content-default-secondary, #646464);
  font-variant-numeric: tabular-nums;
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
.esa-progress-bar--sm {
  --_progress-height: var(--progress-bar-height-sm, 4px);
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```
