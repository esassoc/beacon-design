# Component Setup dialog: styles

```css
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
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
.bcn-sw__head .esa-icon {
  color: var(--color-content-default-secondary);
}
.bcn-sw__head .esa-badge {
  color: var(--color-content-default-secondary);
  border: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-medium);
  background: 0 0;
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
.bcn-sw-prev__acttype .esa-badge {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-hmap {
  gap: var(--spacing-300);
  flex-direction: column;
  height: 100%;
  min-height: 0;
  display: flex;
}
.bcn-hmap__bar {
  flex: none;
}
.bcn-hmap__surface {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-sunken);
  flex: 1;
  min-height: 320px;
  overflow: hidden;
}
.bcn-hmap__surface .leaflet-container {
  height: 100%;
  font-family: inherit;
}
.bcn-hmap__legend {
  gap: var(--spacing-200) var(--spacing-500);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  flex: none;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-hmap__key {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-hmap__swatch {
  border-radius: 2px;
  width: 12px;
  height: 12px;
}
.bcn-hmap__swatch--foot {
  border: 2px solid var(--color-content-default);
  background: color-mix(in srgb, var(--color-content-default) 6%, transparent);
}
.bcn-hmap__swatch--hab {
  background: color-mix(in srgb, var(--color-background-utility-info) 18%, transparent);
  border: 1px solid var(--color-background-utility-info);
}
.bcn-hmap__swatch--sel {
  background: color-mix(in srgb, var(--color-background-brand) 25%, transparent);
  border: 2px solid var(--color-background-brand);
}
.bcn-so {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-so__grid {
  align-items: center;
  gap: var(--spacing-250, 0.625rem) var(--spacing-400);
  grid-template-columns: minmax(12rem, auto) minmax(0, 1fr) 7rem;
  display: grid;
}
.bcn-so__axis {
  border-bottom: 1px solid var(--color-border-default);
  height: 1.25rem;
  position: relative;
}
.bcn-so__tick {
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  font-size: 0.8125rem;
  position: absolute;
  bottom: 2px;
  transform: translate(-50%);
}
.bcn-so__tick[hidden] {
  display: none;
}
.bcn-so__name {
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-so__label {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
}
.bcn-so__window {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-so__track {
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  height: 1.5rem;
  position: relative;
}
.bcn-so__seg {
  background: color-mix(in srgb, var(--color-background-utility-info) 55%, transparent);
  border-radius: 2px;
  height: 0.75rem;
  position: absolute;
  top: 0.375rem;
}
.bcn-so__seg[hidden] {
  display: none;
}
.bcn-so__band {
  border: 2px solid var(--color-background-brand);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--color-background-brand) 8%, transparent);
  position: absolute;
  top: 0;
  bottom: 0;
}
.bcn-so__verdict {
  display: inline-flex;
}
.bcn-so__yes,
.bcn-so__no {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default);
  white-space: nowrap;
  font-size: 0.8125rem;
  display: inline-flex;
}
.bcn-so__yes svg {
  color: var(--color-content-utility-success);
}
.bcn-so__no {
  color: var(--color-content-default-secondary);
}
.bcn-so__yes[hidden],
.bcn-so__no[hidden] {
  display: none;
}
.bcn-so__key {
  gap: var(--spacing-500);
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  display: flex;
}
.bcn-so__keyitem {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-so__swatch {
  border-radius: 2px;
  width: 1.25rem;
  height: 0.75rem;
}
.bcn-so__swatch--season {
  background: color-mix(in srgb, var(--color-background-utility-info) 55%, transparent);
  height: 0.5rem;
}
.bcn-so__swatch--work {
  border: 2px solid var(--color-background-brand);
  background: color-mix(in srgb, var(--color-background-brand) 8%, transparent);
}
.bcn-cs {
  --dialog-bg: var(--color-background-elevation-raised);
}
.bcn-cs__head {
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
  display: flex;
}
.bcn-cs__title {
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  white-space: nowrap;
  margin: 0;
}
.bcn-cs__entity {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: inline-flex;
}
.bcn-cs__entityname {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-cs__frame {
  gap: var(--spacing-500);
  grid-template-columns: 15.5rem minmax(0, 1fr);
  height: min(85vh - 11rem, 680px);
  min-height: 0;
  display: grid;
}
.bcn-cs__rail {
  justify-content: space-between;
  gap: var(--spacing-400);
  min-height: 0;
  padding-right: var(--spacing-400);
  border-right: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-cs__steps {
  flex-direction: column;
  gap: 0;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-cs__step {
  align-items: flex-start;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-150) var(--spacing-200);
  border-radius: var(--radius-200);
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: var(--color-content-default);
  background: 0 0;
  border: 1px solid #0000;
  display: flex;
}
.bcn-cs__step:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-cs__step:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: 1px;
}
.bcn-cs__step[aria-current="step"] {
  border-color: var(--color-border-default);
  background: var(--color-background-elevation-sunken);
}
.bcn-cs__num {
  border: 1px solid var(--color-border-default-strong);
  width: 1.25rem;
  height: 1.25rem;
  font-size: var(--font-size-100);
  line-height: 1;
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  border-radius: 50%;
  flex: none;
  place-items: center;
  margin-top: 1px;
  display: grid;
}
.bcn-cs__digit,
.bcn-cs__tick {
  grid-area: 1/1;
  display: inline-flex;
}
.bcn-cs__tick {
  display: none;
}
.bcn-cs__step[data-done] .bcn-cs__num {
  border-color: var(--color-background-brand);
  color: var(--color-content-brand);
}
.bcn-cs__step[data-done] .bcn-cs__digit {
  display: none;
}
.bcn-cs__step[data-done] .bcn-cs__tick {
  display: inline-flex;
}
.bcn-cs__step[aria-current="step"] .bcn-cs__num {
  border-color: var(--color-background-brand);
  background: var(--color-background-brand);
  color: var(--color-content-default-knockout);
}
.bcn-cs__step[aria-current="step"] .bcn-cs__digit {
  display: inline-flex;
}
.bcn-cs__step[aria-current="step"] .bcn-cs__tick {
  display: none;
}
.bcn-cs__stepbody {
  flex-direction: column;
  gap: 0;
  min-width: 0;
  display: flex;
}
.bcn-cs__steplabel {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-cs__stepsum {
  color: var(--color-content-default-secondary);
  white-space: pre-line;
  font-size: 0.8125rem;
}
.bcn-cs__tally {
  gap: var(--spacing-100);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-cs__fig {
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0;
  display: flex;
}
.bcn-cs__figval {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default);
}
.bcn-cs__figlabel {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-cs__panel {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
}
.bcn-cs__pane {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-cs__pane[hidden],
.bcn-cs__group[hidden],
[data-cs-review-none][hidden] {
  display: none;
}
.bcn-cs__pane--split {
  gap: var(--spacing-500);
  grid-template-columns: minmax(0, 1fr) 19rem;
  height: 100%;
  display: grid;
}
.bcn-cs__pane--split[hidden] {
  display: none;
}
.bcn-cs__map {
  height: 100%;
  min-height: 0;
}
.bcn-cs__side {
  gap: var(--spacing-300);
  flex-direction: column;
  min-height: 0;
  display: flex;
  overflow-y: auto;
}
.bcn-cs__panehead {
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-cs__h {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-cs__count {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  margin-left: auto;
  font-size: 0.8125rem;
}
.bcn-cs__group {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-cs__transfer {
  gap: var(--spacing-400);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  display: grid;
}
.bcn-cs__col {
  gap: var(--spacing-200);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-cs-opt__body.bcn-cs-opt__body--stack {
  align-items: stretch;
  gap: var(--spacing-050);
  flex-direction: column;
}
.bcn-cs-opt__body--stack .bcn-cs-opt__titleline {
  max-width: none;
}
.bcn-cs-opt__metaline {
  align-items: center;
  gap: var(--spacing-150);
  min-width: 0;
  display: flex;
}
.bcn-cs-opt__metaline .bcn-cs-opt__meta {
  white-space: nowrap;
  text-overflow: ellipsis;
  min-width: 0;
  overflow: hidden;
}
.bcn-cs__srcgroups {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-cs__srcgroups[hidden],
[data-cs-srcgrp][hidden],
.bcn-cs__options[hidden] {
  display: none;
}
.bcn-cs__srcgroups .esa-collapsible__summary {
  padding: var(--spacing-200) var(--spacing-300);
}
.bcn-cs__srcgroups .esa-collapsible__body {
  border-top: 1px solid var(--color-border-default-subtle);
  padding: 0;
}
.bcn-cs__options--bare {
  background: 0 0;
  border: 0;
  border-radius: 0;
}
.bcn-cs__transfer + .bcn-cs__group,
.bcn-cs__group + .bcn-cs__group {
  padding-top: var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cs__options {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  overflow: hidden;
}
.bcn-cs__options--grid {
  gap: var(--spacing-150);
  background: 0 0;
  border: 0;
  grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  display: grid;
  overflow: visible;
}
.bcn-cs-opt {
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-150) var(--spacing-300);
  display: flex;
}
.bcn-cs-opt + .bcn-cs-opt {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cs__options--grid .bcn-cs-opt {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
}
.bcn-cs-opt[hidden] {
  display: none;
}
.bcn-cs-opt__body {
  align-items: baseline;
  gap: var(--spacing-300);
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-cs-opt__body > {
  min-width: 0;
}
.bcn-cs-opt__titleline {
  align-items: center;
  gap: var(--spacing-200);
  flex: none;
  min-width: 0;
  max-width: 60%;
  display: flex;
}
.bcn-cs-opt__name {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
  white-space: nowrap;
  flex: none;
}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__name {
  text-overflow: ellipsis;
  flex: 0 auto;
  min-width: 0;
  overflow: hidden;
}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__meta {
  flex: none;
}
.bcn-cs-opt__name--clip {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 0 auto;
  min-width: 0;
  overflow: hidden;
}
.bcn-cs-opt__meta {
  color: var(--color-content-default-secondary);
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.8125rem;
  overflow: hidden;
}
.bcn-cs-opt__meta:empty {
  display: none;
}
.bcn-cs-opt__end {
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  flex: none;
  font-size: 0.8125rem;
}
.bcn-cs__dates esa-date-picker {
  width: 13rem;
}
.bcn-cs__foot {
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
}
.bcn-cs__foot [hidden] {
  display: none;
}
.bcn-cs__footacts {
  gap: var(--spacing-300);
  margin-left: auto;
  display: inline-flex;
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
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
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
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
.bcn-entity-logo {
  background: color-mix(in srgb, var(--_c) 12%, transparent);
  color: var(--_c);
  border: 1px solid color-mix(in srgb, var(--_c) 30%, transparent);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
  overflow: hidden;
}
.bcn-entity-logo[data-style="fill"] {
  background: var(--_c);
  color: var(--color-content-default-knockout);
  border-color: #0000;
}
.bcn-entity-logo[data-style="image"] {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-border-default-subtle);
}
.bcn-entity-logo[data-size="sm"] {
  width: 24px;
  height: 24px;
}
.bcn-entity-logo[data-size="md"] {
  --icon-size-sm: 18px;
  width: 32px;
  height: 32px;
}
.bcn-entity-logo[data-size="lg"] {
  width: 48px;
  height: 48px;
}
.bcn-entity-logo[data-size="xl"] {
  --icon-size-xl: 36px;
  width: 72px;
  height: 72px;
}
.bcn-entity-logo[data-size="2xl"] {
  --icon-size-xl: 44px;
  width: 92px;
  height: 92px;
}
.bcn-entity-logo[data-shape="rounded"][data-size="sm"],
.bcn-entity-logo[data-shape="rounded"][data-size="md"] {
  border-radius: var(--radius-200);
}
.bcn-entity-logo[data-shape="rounded"][data-size="lg"],
.bcn-entity-logo[data-shape="rounded"][data-size="xl"],
.bcn-entity-logo[data-shape="rounded"][data-size="2xl"] {
  border-radius: var(--radius-400);
}
.bcn-entity-logo[data-shape="circle"] {
  border-radius: var(--radius-full);
}
.bcn-entity-logo[data-variant="seal"] {
  border: var(--bcn-seal-ring-width) solid var(--bcn-seal-ring-color);
  box-shadow: var(--bcn-seal-shadow);
  box-sizing: content-box;
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
```
