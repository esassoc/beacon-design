# Bulk evidence (bottom drawer, list mode): styles

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
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lit:not([data-index-editable])
  esa-tooltip:has([data-list-remove], [data-list-duplicate], .bcn-loc__verb[data-list-edit]) {
  display: none;
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
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__backdrop,
.bcn-bottom-drawer:not([open]):not([closing]) .bcn-bottom-drawer__panel {
  display: none;
}
.bcn-bottom-drawer__panel {
  left: 50%;
  bottom: var(--_inset);
  width: min(var(--_width), calc(100vw - var(--_inset) * 2));
  height: var(--_height);
  background: var(--color-background-elevation-raised);
  border-radius: var(--radius-300) var(--radius-300) 0 0;
  z-index: calc(var(--_z) + 1);
  outline: none;
  flex-direction: column;
  animation: 0.3s cubic-bezier(0.16, 1, 0.3, 1) bcn-bd-up;
  display: flex;
  position: fixed;
  overflow: hidden;
  transform: translate(-50%);
  box-shadow: 0 -12px 48px -12px #00000052;
}
.bcn-bottom-drawer[closing]:not([open]) .bcn-bottom-drawer__panel {
  animation: 0.22s cubic-bezier(0.5, 0, 0.75, 0) forwards bcn-bd-down;
}
.bcn-bottom-drawer__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-400);
  padding: var(--spacing-400) var(--spacing-500);
  border-bottom: 1px solid var(--color-border-default);
  flex: none;
  display: flex;
}
.bcn-bottom-drawer__headslot {
  flex: 1;
  min-width: 0;
}
.bcn-bottom-drawer__close {
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-bottom-drawer__body {
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-bottom-drawer__foot {
  padding: var(--spacing-300) var(--spacing-500);
  border-top: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  flex: none;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-bottom-drawer__panel,
  .bcn-bottom-drawer[closing]:not([open]) .bcn-bottom-drawer__panel,
  .bcn-bottom-drawer__backdrop,
  .bcn-bottom-drawer[closing]:not([open]) .bcn-bottom-drawer__backdrop {
    animation-duration: 1ms;
  }
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
.esa-card__body {
  padding: var(--_card-padding);
}
.bcn-ev-search {
  position: relative;
}
.bcn-ev-search esa-combobox {
  --_field-padding-y: var(--spacing-150);
}
.bcn-ev-search__icon {
  color: var(--color-content-default-tertiary);
  pointer-events: none;
  z-index: 1;
  align-items: center;
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0.75rem;
}
.bcn-disclosure {
  border-radius: var(--radius-100);
  width: 20px;
  height: 20px;
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
.bcn-disclosure:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-secondary);
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
.bcn-countchip {
  margin-left: var(--spacing-150);
  flex: none;
  display: inline-flex;
}
.bcn-countchip[hidden] {
  display: none;
}
.bcn-countchip__stack {
  width: 24px;
  height: 24px;
  display: inline-flex;
  position: relative;
}
.bcn-countchip__icon {
  width: 100%;
  height: 100%;
  color: var(--color-content-default-tertiary);
  --icon-size-md: 18px;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-countchip__num {
  display: inline-flex;
  position: absolute;
  bottom: -4px;
  right: -5px;
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
.bcn-countchip__sr {
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.bcn-ev-staging {
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  height: 100%;
  min-height: 0;
  display: flex;
}
.bcn-ev-staging__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  min-height: 60px;
  padding: var(--spacing-350, 0.875rem) var(--spacing-400);
  flex: none;
  display: flex;
}
.bcn-ev-staging__title {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.25;
  display: flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-staging__search {
  padding: 0 var(--spacing-400);
  margin-top: calc(var(--bcn-ev-search-gap) - var(--spacing-400));
  flex: none;
}
.bcn-ev-staging__scroll {
  min-height: 0;
  padding: var(--spacing-400) var(--spacing-400) var(--spacing-400);
  gap: var(--spacing-400);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-ev-staging__tabs {
  padding: 0 var(--spacing-400);
  flex: none;
}
.bcn-ev-staging__tabs esa-tab-layout {
  display: block;
}
.bcn-ev-staging__panel {
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-ev-staging__panel[hidden] {
  display: none;
}
.bcn-ev-staging__panel--upload {
  padding: var(--spacing-400);
  gap: var(--spacing-400);
  flex-direction: column;
  min-height: 0;
  display: flex;
  overflow-y: auto;
}
.bcn-ev-staging__drop {
  flex-direction: column;
  flex: 1;
  min-height: 140px;
  display: flex;
}
.bcn-ev-staging__draft {
  flex: none;
}
.bcn-ev-staging__draft[hidden] {
  display: none;
}
.bcn-ev-draft {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-ev-draft__titlerow {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-ev-draft__unsaved {
  --bcn-unsaved: var(--color-action);
  align-items: center;
  gap: var(--spacing-150);
  color: var(--bcn-unsaved);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  white-space: nowrap;
  flex: none;
  margin-left: auto;
  display: inline-flex;
}
.bcn-ev-draft__title {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.35;
}
.bcn-ev-draft__notes {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
}
.bcn-ev-draft__filesrow {
  gap: var(--spacing-150);
  min-width: 0;
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-ev-draft__fileslabel {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  flex: none;
  margin: 0;
}
.bcn-ev-draft__files {
  min-width: 0;
  padding: 0 0 0 var(--spacing-300);
  gap: var(--spacing-100);
  flex-direction: column;
  flex: 1;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-draft__foot {
  justify-content: flex-end;
  gap: var(--spacing-250, 0.625rem);
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-ev-staging__drop esa-file-upload {
  --color-background-field: var(--color-background-elevation-sunken);
  --form-border-color-focus: var(--color-background-brand-muted);
  flex: 1;
  display: grid;
}
.bcn-ev-staging__foot {
  padding: var(--spacing-300) var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  flex: none;
  justify-content: flex-end;
  display: flex;
}
.bcn-ev-staging__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-staging__list:not(:has(> li:not([hidden]))),
.bcn-ev-staging__item[hidden],
.bcn-ev-staging__empty[hidden] {
  display: none;
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-card {
  column-gap: var(--spacing-300);
  row-gap: var(--spacing-100);
  grid-template-columns: 20px minmax(0, 1fr);
  align-items: center;
  display: grid;
}
.bcn-ev-card__grip {
  grid-area: 1/1;
}
.bcn-ev-card__top {
  grid-area: 1/2;
}
.bcn-ev-card__toggle {
  grid-area: 2/1;
  display: inline-flex;
}
.bcn-ev-card__desc {
  grid-area: 2/2;
}
.bcn-ev-card__filesrow {
  align-items: flex-start;
  gap: var(--spacing-200);
  min-width: 0;
  margin-top: var(--spacing-100);
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  grid-area: 3/2;
  display: flex;
}
.bcn-ev-card__fileslabel {
  flex: none;
}
.bcn-ev-card__files {
  flex: 1;
  min-width: 0;
}
.bcn-ev-card__grip {
  width: 20px;
  height: 20px;
  color: var(--bcn-content-muted);
  cursor: grab;
  border-radius: var(--radius-100);
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-ev-card__grip:hover {
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-sunken);
}
.bcn-ev-card__grip:active {
  cursor: grabbing;
}
.bcn-ev-staging__item[data-exhausted] .bcn-ev-card__grip {
  cursor: not-allowed;
  color: var(--color-content-default-tertiary);
  opacity: 0.4;
  background: 0 0;
}
.bcn-ev-staging__item[data-dragging] {
  opacity: 0.4;
}
.bcn-ev-card__top {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border-default);
  --pill-text-color: var(--color-content-default-secondary);
}
.bcn-ev-card__fileslabel {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  line-height: var(--pill-height-sm, 22px);
  margin: 0;
}
.bcn-ev-card__desc {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.45;
}
.bcn-ev-staging__item[data-collapsed] .bcn-ev-card__desc {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-ev-staging__item[data-collapsed] .bcn-ev-card__filesrow {
  display: none;
}
.bcn-ev-card__title {
  min-width: 0;
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  line-height: 1.35;
  overflow: hidden;
}
.bcn-ev-card__count {
  white-space: nowrap;
  flex: none;
}
.bcn-ev-card__remove {
  margin-left: auto;
}
.bcn-ev-card__titlelink {
  color: inherit;
  text-decoration: none;
}
.bcn-ev-card__titlelink:hover,
.bcn-ev-card__titlelink:focus-visible {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-ev-card__remove {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-card__files {
  gap: var(--spacing-150);
  flex-wrap: wrap;
  min-width: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-ev-staging esa-combobox {
  display: block;
}
.esa-loading-spinner {
  --_spinner-size: 32px;
  --_spinner-border-width: 3px;
  --_spinner-color: var(--loading-spinner-color, var(--color-background-brand, #46a758));
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-loading-spinner--sm {
  --_spinner-size: 20px;
  --_spinner-border-width: 2px;
}
.esa-loading-spinner__ring {
  width: var(--_spinner-size);
  height: var(--_spinner-size);
  border: var(--_spinner-border-width) solid
    var(--loading-spinner-track-color, var(--color-border-default-subtle, #d9d9d9));
  border-top-color: var(--_spinner-color);
  border-radius: var(--radius-pill, 9999px);
  animation: esa-spinner-rotate var(--animation-spin, 0.75s linear infinite);
  box-sizing: border-box;
}
@media (prefers-reduced-motion: reduce) {
  .esa-loading-spinner__ring {
    animation-duration: 2.5s;
    animation-timing-function: steps(8, end);
  }
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
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets {
  background: var(--color-background-elevation-sunken);
  flex-direction: column;
  height: 100%;
  min-height: 0;
  display: flex;
}
.bcn-ev-targets__head {
  align-items: center;
  gap: var(--spacing-300);
  min-height: 60px;
  padding: var(--spacing-350, 0.875rem) var(--spacing-400);
  flex: none;
  display: flex;
}
.bcn-ev-targets__filters {
  --_lift: var(--spacing-050, 0.125rem);
  align-items: flex-start;
  gap: var(--spacing-400);
  margin: calc(var(--_lift) * -1) var(--spacing-400) 0;
  min-height: calc(var(--tab-layout-height-sm, 36px) + 1px + var(--_lift));
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-border-default);
  flex-wrap: nowrap;
  flex: none;
  display: flex;
}
.bcn-ev-targets__search {
  padding: var(--bcn-ev-search-gap) var(--spacing-400) 0;
  flex: none;
}
.bcn-ev-targets__filter {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: inline-flex;
}
.bcn-ev-targets__listmode[hidden],
.bcn-ev-targets__leftout[hidden] {
  display: none;
}
.bcn-ev-targets__listmode {
  gap: var(--spacing-300);
  display: grid;
}
.bcn-ev-targets__listmode [data-listmode-rows] {
  gap: var(--spacing-150);
  margin: 0;
  padding: 0;
  display: grid;
}
.bcn-ev-targets__listmode .bcn-loc__main {
  cursor: default;
}
.bcn-ev-targets__listmode .bcn-loc__title {
  cursor: inherit;
  text-decoration: none;
}
.bcn-ev-targets__listmode .bcn-loc__main > :last-child {
  margin-left: auto;
}
.bcn-ev-targets__leftout {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  margin: 0;
  display: flex;
}
.bcn-ev-targets__restore {
  font: inherit;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-brand, var(--color-background-brand));
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
  text-decoration: underline;
}
.bcn-ev-targets__filter[data-needs] esa-select {
  border-radius: var(--radius-md, 6px);
  box-shadow:
    0 0 0 1px var(--color-background-brand),
    0 0 0 4px color-mix(in srgb, var(--color-background-brand) 20%, transparent);
}
.bcn-ev-targets__filter[data-needs] .bcn-ev-targets__flabel {
  color: var(--color-background-brand);
}
.bcn-ev-targets__flabel {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex: none;
}
.bcn-ev-targets__filter esa-select {
  flex: 0 0 var(--_filter-box);
  min-width: 0;
  display: block;
}
.bcn-ev-targets__filters {
  --_filter-box: 200px;
}
.bcn-ev-targets__count {
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-tertiary);
}
.bcn-ev-targets__title {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.25;
  display: flex;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__pending {
  --bcn-unsaved: var(--color-action);
  --color-background-utility-warning-subtle: color-mix(in srgb, var(--bcn-unsaved) 6%, transparent);
  --color-border-utility-warning: color-mix(in srgb, var(--bcn-unsaved) 45%, transparent);
  --color-content-utility-warning: var(--bcn-unsaved);
  padding: 0 var(--spacing-400) var(--spacing-400);
  --alert-box-padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  flex: none;
}
.bcn-ev-targets__pending[hidden] {
  display: none;
}
.bcn-ev-targets__scroll {
  min-height: 0;
  padding: var(--spacing-400) var(--spacing-400) var(--spacing-400);
  gap: var(--spacing-300);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-ev-targets__working {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-default);
  color: var(--color-content-default-secondary);
  display: flex;
}
.bcn-ev-targets__working[hidden] {
  display: none;
}
.bcn-ev-targets__notice {
  padding: var(--spacing-250, 0.625rem) var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  background: var(--color-background-default);
  color: var(--color-content-default-secondary);
  margin: 0;
}
.bcn-ev-targets__notice[hidden] {
  display: none;
}
.bcn-ev-targets__list {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-targets__list:not(:has(> li:not([hidden]))),
.bcn-ev-targets__empty[hidden],
.bcn-ev-targets__item[hidden] {
  display: none;
}
.bcn-ev-row {
  flex-direction: column;
  display: flex;
}
.bcn-ev-row__head {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-ev-row__body {
  padding-left: calc(20px + var(--spacing-300));
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item[data-blocked] {
  pointer-events: none;
}
.bcn-ev-attached {
  margin: var(--spacing-250, 0.625rem) 0 0;
  gap: var(--spacing-150);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-attached:empty {
  display: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__hint {
  margin: var(--spacing-200) 0 0;
  padding: var(--spacing-200);
  border: 1px dashed var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default-tertiary);
  background: 0 0;
  justify-content: center;
  align-items: center;
  font-style: italic;
  transition:
    background 0.12s,
    border-color 0.12s;
  display: flex;
}
.bcn-ev-row__hint[hidden] {
  display: none;
}
.bcn-ev-targets__item[data-receiving] .bcn-ev-row__hint {
  border-color: var(--color-background-brand-muted);
  background: color-mix(in srgb, var(--color-background-brand-muted) 8%, transparent);
}
.bcn-ev-row__main {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-ev-row__titlerow {
  align-items: center;
  gap: var(--spacing-200) var(--spacing-300);
  flex-wrap: wrap;
  min-width: 0;
  margin: 0;
  display: flex;
}
.bcn-ev-row__spacer {
  flex: 1 1 0;
  min-width: 0;
}
.bcn-ev-targets__item[data-collapsed] .bcn-ev-row__body {
  display: none;
}
.bcn-ev-row__dot {
  --bcn-unsaved: var(--color-action);
  border-radius: var(--radius-full);
  background: var(--bcn-unsaved);
  flex: none;
  width: 8px;
  height: 8px;
}
.bcn-ev-row__dot[hidden] {
  display: none;
}
.bcn-ev-row__codes {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  margin-right: auto;
  display: inline-flex;
}
.bcn-ev-row__morepop {
  display: inline-flex;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
}
.bcn-ev-row__more {
  cursor: default;
  display: inline-flex;
}
.bcn-ev-row__poplist {
  min-width: 0;
}
.bcn-ev-row__poptitle {
  margin: 0 0 var(--spacing-200);
  color: var(--color-content-default-tertiary);
}
.bcn-ev-row__poplist ul {
  align-items: flex-start;
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__name {
  min-width: 22ch;
  font-size: var(--font-size-150, 0.875rem);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex: 0 auto;
  line-height: 1.35;
}
.bcn-ev-row__tags {
  align-items: center;
  gap: var(--spacing-150);
  flex: none;
  min-width: 0;
  display: flex;
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__side {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default-tertiary);
  flex: none;
  display: flex;
}
.bcn-ev__head {
  align-items: center;
  gap: var(--spacing-500);
  flex-wrap: wrap;
  min-width: 0;
  display: flex;
}
.bcn-ev__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.2;
}
.bcn-ev__panels {
  flex: 1;
  grid-template-columns: minmax(300px, 0.72fr) 1px 1fr;
  min-height: 0;
  display: grid;
}
.bcn-ev__pane {
  min-width: 0;
  min-height: 0;
}
.bcn-ev__joint {
  background: var(--color-border-default);
}
.bcn-ev__foot {
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-500);
  display: flex;
}
.bcn-ev__status {
  color: var(--color-content-default-secondary);
  margin: 0 auto 0 0;
}
.bcn-ev__status[hidden] {
  display: none;
}
.bcn-ev__actions {
  align-items: center;
  gap: var(--spacing-250, 0.625rem);
  flex: none;
  display: flex;
}
@media (width<=900px) {
  .bcn-ev__panels {
    grid-template-rows: 1fr 1px 1fr;
    grid-template-columns: 1fr;
    overflow-y: auto;
  }
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
.bcn-swoc,
.bcn-loc {
  --_req-indent: 22px;
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover,
.bcn-loc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden],
.bcn-loc[hidden] {
  display: none;
}
.bcn-swoc.is-new,
.bcn-loc.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swoc__main,
.bcn-loc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker,
.bcn-loc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover,
.bcn-loc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main:focus-visible,
.bcn-loc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main,
details[open] > .bcn-loc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class,
.bcn-ci-chip {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"],
.bcn-ci-chip[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"],
.bcn-ci-chip[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"],
.bcn-ci-chip[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-ci-chip[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"],
.bcn-lob[data-class="action"],
.bcn-ci-chip[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title,
.bcn-loc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  font-weight: 500;
  overflow: hidden;
}
.bcn-swoc__title:hover,
.bcn-loc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible,
.bcn-loc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip,
.bcn-loc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb,
.bcn-loc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover,
.bcn-loc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb:focus-visible,
.bcn-loc__verb:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swoc__verb--danger:hover,
.bcn-loc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-loc__title {
  flex: 0 auto;
}
.bcn-loc [data-list-count] {
  margin-inline-start: auto;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-status .esa-alert-box {
  padding: var(--_aldo-gap) var(--spacing-250, 0.625rem);
  font-size: var(--_aldo-text);
  align-items: center;
}
.bcn-aldo-status .esa-alert-box__icon svg {
  width: 16px;
  height: 16px;
}
.bcn-aldo-composer__context .esa-pill[data-auto] {
  --_pill-bg: transparent;
  border-style: dashed;
}
.bcn-aldo-composer__context .esa-pill {
  max-width: 100%;
}
.bcn-aldo-composer__context .esa-pill__label,
.bcn-aldo-msg__context .esa-pill__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 16rem;
  overflow: hidden;
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
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-meta {
  font-family: var(--typography-meta-font-family);
  font-size: var(--typography-meta-font-size);
  font-weight: var(--typography-meta-font-weight);
  line-height: var(--typography-meta-line-height);
  letter-spacing: var(--typography-meta-letter-spacing);
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-alert-box {
  --_alert-bg: var(--color-background-utility-info-subtle, #fbfdff);
  --_alert-border: var(--color-border-utility-info, #acd8fc);
  --_alert-accent: var(--color-content-utility-info, #0d74ce);
  --_alert-icon-color: var(--_alert-accent);
  --_alert-title-color: var(--_alert-accent);
  --_alert-text-color: var(--alert-box-text-color, var(--color-content-default-secondary, #646464));
  align-items: flex-start;
  gap: var(--spacing-300, 0.75rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  border: var(--border-width-default, 1px) solid var(--_alert-border);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--_alert-bg);
  display: flex;
}
.esa-alert-box--warning {
  --_alert-bg: var(--color-background-utility-warning-subtle, #fefdfb);
  --_alert-border: var(--color-border-utility-warning, #f3d673);
  --_alert-accent: var(--color-content-utility-warning, #ab6400);
}
.esa-alert-box__icon {
  color: var(--_alert-icon-color);
  flex-shrink: 0;
  padding-top: 1px;
}
.esa-alert-box__body {
  flex: 1;
  min-width: 0;
}
.esa-alert-box__title {
  color: var(--_alert-title-color);
  margin-bottom: var(--spacing-050, 0.125rem);
  display: block;
}
.esa-alert-box__message {
  color: var(--_alert-text-color);
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
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```
