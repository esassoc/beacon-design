# Aldo: styles

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
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 12s linear infinite bcn-aldo-spin;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-mark[data-animated],
  .bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
    animation: none;
  }
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
.bcn-aldo-panel {
  --_aldo-text: 0.8125rem;
  --_aldo-meta: 0.75rem;
  --_aldo-weight-body: 400;
  --_aldo-weight-meta: 500;
  --_aldo-weight-strong: 600;
  --_aldo-radius: var(--radius-200);
  --_aldo-radius-sm: var(--radius-100);
  --_aldo-gap: var(--spacing-150, 0.375rem);
  --_aldo-pad: var(--spacing-400);
  --_aldo-line: var(--border-width-default, 1px);
  --_aldo-inner: var(--spacing-200, 0.5rem);
  --_aldo-same: var(--spacing-300, 0.75rem);
  --_aldo-turn: var(--spacing-500, 1.5rem);
  --_aldo-region: var(--spacing-300, 0.75rem);
  --_aldo-bubble-radius: 1rem;
  min-height: 0;
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-body);
  flex-direction: column;
  line-height: 1.4;
  display: flex;
}
.bcn-aldo-panel__body {
  gap: var(--_aldo-region);
  padding-bottom: var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border-radius: var(--_aldo-radius);
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-aldo-panel--glow .bcn-aldo-panel__body {
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  box-shadow: var(--bcn-aldo-prompt-shadow);
}
.bcn-aldo-panel__head {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--_aldo-pad);
  border-bottom: var(--_aldo-line) solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-aldo-panel__title {
  font-size: 0.875rem;
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-aldo-panel__close {
  margin-left: auto;
}
.bcn-aldo-panel__rail,
[data-aldo="closed"] .bcn-aldo-panel__body {
  display: none;
}
[data-aldo="closed"] .bcn-aldo-panel__rail {
  display: flex;
}
.bcn-aldo-panel__rail {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) 0;
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-2);
  color: var(--color-content-default-secondary);
  font: inherit;
  cursor: pointer;
  flex-direction: column;
  flex: 1;
}
.bcn-aldo-panel__rail:hover {
  color: var(--color-content-default);
  background: var(--color-background-elevation-sunken);
}
.bcn-aldo-panel__rail:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-aldo-panel__railname {
  writing-mode: vertical-rl;
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
}
.bcn-aldo-panel__dot {
  display: inline-flex;
}
.bcn-aldo-panel__dot[hidden] {
  display: none;
}
.bcn-aldo-thread {
  min-height: 8rem;
  padding: var(--_aldo-pad);
  flex-direction: column;
  flex: 1;
  gap: 0;
  margin: 0;
  list-style: none;
  display: flex;
  overflow-y: auto;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-msg[data-streaming] .bcn-aldo-actions,
.bcn-aldo-msg[data-streaming] .bcn-aldo-msg__time,
.bcn-aldo-msg[data-streaming] .bcn-aldo-msg__tools {
  display: none;
}
.bcn-aldo-msg[data-stopped] .bcn-aldo-actions {
  display: none;
}
.bcn-aldo-actions {
  gap: var(--_aldo-gap);
  flex-wrap: wrap;
  display: flex;
}
.bcn-aldo-actions:empty {
  display: none;
}
.bcn-aldo-instructions {
  padding: 0 var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default-subtle);
  border-radius: var(--_aldo-radius-sm);
  background: var(--color-background-elevation-sunken);
  --typography-label-sm-strong-font-size: var(--_aldo-text);
  margin: 0;
}
.bcn-aldo-instructions[hidden] {
  display: none;
}
.bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: var(--_aldo-gap);
}
.bcn-aldo-instructions__list {
  gap: var(--_aldo-gap);
  max-height: 9rem;
  padding: 0 0 var(--spacing-200) var(--spacing-400);
  font-size: var(--_aldo-text);
  flex-direction: column;
  margin: 0;
  line-height: 1.35;
  display: flex;
  overflow-y: auto;
}
.bcn-aldo-needs {
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius-sm);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-1);
  margin: 0;
  overflow: hidden;
}
.bcn-aldo-needs[hidden] {
  display: none;
}
.bcn-aldo-needs__head {
  align-items: center;
  gap: var(--_aldo-gap);
  padding: var(--_aldo-gap) var(--spacing-300);
  background: var(--color-background-elevation-sunken);
  border-bottom: var(--_aldo-line) solid var(--color-border-default);
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.bcn-aldo-needs__head {
  padding: 0;
}
.bcn-aldo-needs__toggle {
  align-items: center;
  gap: var(--_aldo-gap);
  width: 100%;
  padding: var(--_aldo-gap) var(--spacing-300);
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  display: flex;
}
.bcn-aldo-needs__toggle:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: calc(-1 * var(--focus-ring-width, 2px));
}
.bcn-aldo-needs__toggle svg {
  transition: transform 0.15s;
}
.bcn-aldo-needs[data-folded] .bcn-aldo-needs__toggle svg {
  transform: rotate(-90deg);
}
.bcn-aldo-needs[data-folded] .bcn-aldo-needs__list {
  display: none;
}
.bcn-aldo-needs[data-folded] .bcn-aldo-needs__head {
  border-bottom: 0;
}
.bcn-aldo-needs__list {
  max-height: 13rem;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
}
.bcn-aldo-needs__item .bcn-aldo-actions {
  gap: var(--spacing-100);
}
.bcn-aldo-status > .bcn-aldo-actions {
  margin-top: var(--_aldo-gap);
}
.bcn-aldo-composer {
  gap: var(--_aldo-inner);
  flex-direction: column;
  display: flex;
}
.bcn-aldo-composer__suggest {
  padding: 0 var(--_aldo-pad);
  gap: var(--spacing-200);
}
.bcn-aldo-composer__anchor {
  position: relative;
}
.bcn-aldo-composer__shell {
  --_aldo-radius: 0.75rem;
  align-items: flex-end;
  gap: var(--spacing-200);
  margin: 0 var(--spacing-300);
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) var(--spacing-300);
  border: var(--_aldo-line) solid var(--bcn-aldo-100);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--bcn-aldo-prompt-shadow);
  flex-wrap: wrap;
  display: flex;
}
.bcn-aldo-composer__shell:focus-within {
  outline: var(--focus-ring-width, 2px) solid var(--bcn-aldo-prompt-ring);
}
.bcn-aldo-composer__field {
  --focus-ring-color: var(--color-background-elevation-raised);
  --form-border-width: 0;
  flex: 1;
  min-width: 0;
}
.bcn-aldo-composer__send {
  --button-radius-sm: 999px;
  --color-background-brand: var(--bcn-aldo);
  --color-background-brand-hover: var(--bcn-aldo-600);
  padding-bottom: var(--spacing-100);
  display: inline-flex;
}
.bcn-aldo-composer__send[data-stop] {
  --color-background-brand: var(--color-content-default);
  --color-background-brand-hover: var(--color-content-default-secondary);
}
.bcn-aldo-composer__context {
  gap: var(--spacing-100);
  padding-top: var(--spacing-150, 0.375rem);
  flex-wrap: wrap;
  flex-basis: 100%;
  display: flex;
}
.bcn-aldo-composer__context[hidden] {
  display: none;
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
.bcn-aldo-composer__menu {
  z-index: 10;
  bottom: calc(100% + var(--spacing-100));
  left: var(--spacing-300);
  right: var(--spacing-300);
  max-height: 15rem;
  padding: var(--spacing-100);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-4);
  margin: 0;
  list-style: none;
  position: absolute;
  overflow-y: auto;
}
.bcn-aldo-composer__menu[hidden] {
  display: none;
}
.bcn-aldo-composer[data-dropping] .bcn-aldo-composer__shell {
  border-style: dashed;
  border-color: var(--bcn-aldo);
  background: var(--color-background-elevation-sunken);
}
.bcn-aldo-composer__drop {
  inset: 0 var(--spacing-300);
  font-size: var(--_aldo-text);
  font-weight: var(--_aldo-weight-strong);
  color: var(--color-content-default);
  pointer-events: none;
  place-items: center;
  margin: 0;
  display: grid;
  position: absolute;
}
.bcn-aldo-composer__drop[hidden] {
  display: none;
}
.bcn-aldo-panel__expand {
  margin-left: auto;
  display: inline-flex;
}
.bcn-aldo-panel__expand + .bcn-aldo-panel__close {
  margin-left: 0;
}
.bcn-aldo-panel [data-aldo-overlay="dock"],
.bcn-aldo-panel[data-expanded] [data-aldo-overlay="open"],
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__close {
  display: none;
}
.bcn-aldo-panel[data-expanded] [data-aldo-overlay="dock"] {
  display: inline-flex;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__body {
  --_aldo-text: 0.9375rem;
  --_aldo-meta: 0.8125rem;
  --_aldo-turn: var(--spacing-600, 2rem);
  --_aldo-same: var(--spacing-400, 1rem);
  --_aldo-inner: var(--spacing-300, 0.75rem);
  --_aldo-region: var(--spacing-400, 1rem);
  z-index: 1050;
  top: calc(var(--_aldo-top, 0px) + var(--spacing-400, 1rem));
  right: var(--spacing-400, 1rem);
  bottom: var(--spacing-400, 1rem);
  width: var(--aldo-expanded-width, max(50vw, 36rem));
  max-width: calc(100vw - 2 * var(--spacing-400, 1rem));
  padding-bottom: var(--spacing-400, 1rem);
  font-size: var(--_aldo-text);
  border-radius: var(--radius-300, 0.75rem);
  box-shadow: var(--elevation-5), var(--bcn-aldo-prompt-shadow);
  line-height: 1.6;
  animation: 0.24s ease-out bcn-aldo-pin;
  position: fixed;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
  padding-block: var(--spacing-400);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-panel__title {
  font-size: 1rem;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-thread {
  padding-block: var(--spacing-500) var(--spacing-200);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-needs__list {
  max-height: none;
  overflow: visible;
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-composer__shell {
  --_aldo-radius: 1rem;
  margin-inline: var(--_aldo-pad);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-300) var(--spacing-400);
}
.bcn-aldo-panel[data-expanded] .bcn-aldo-composer__menu {
  left: var(--_aldo-pad);
  right: var(--_aldo-pad);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__body {
    animation: none;
  }
}
.bcn-aldo-panel__main {
  gap: var(--_aldo-region);
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-aldo-panel__body {
  position: relative;
}
.bcn-aldo-panel__waiting {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-50, 0.125rem) var(--spacing-150, 0.375rem);
  border: var(--_aldo-line) solid var(--color-border-utility-warning);
  background: var(--color-background-utility-warning-subtle);
  color: var(--color-content-default);
  font: inherit;
  font-size: var(--_aldo-meta);
  font-weight: var(--_aldo-weight-strong);
  cursor: pointer;
  border-radius: 999px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-aldo-panel__waiting[hidden] {
  display: none;
}
.bcn-aldo-panel__waiting:has([data-waiting-count][hidden]) {
  border-color: var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default-secondary);
}
.bcn-aldo-panel__waiting [data-waiting-count][hidden] {
  display: none;
}
.bcn-aldo-panel__waiting:hover {
  filter: brightness(0.97);
}
.bcn-aldo-panel__waiting:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-aldo-panel__waiting svg {
  transition: transform 0.15s;
}
.bcn-aldo-panel[data-side-open] .bcn-aldo-panel__waiting svg {
  transform: rotate(180deg);
}
.bcn-aldo-panel__waiting:not([hidden]) + .bcn-aldo-panel__expand {
  margin-left: 0;
}
.bcn-aldo-panel__waiting[data-nudge] {
  animation: 0.6s ease-out bcn-aldo-nudge;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-panel__waiting[data-nudge] {
    animation: none;
  }
}
.bcn-aldo-panel__side {
  gap: var(--spacing-300);
  flex-direction: column;
  display: none;
}
.bcn-aldo-panel[data-side-open] .bcn-aldo-panel__side {
  z-index: 5;
  top: var(--_aldo-head-h, 3rem);
  left: var(--spacing-200);
  right: var(--spacing-200);
  max-height: min(70%, 28rem);
  padding: var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  box-shadow: var(--elevation-4);
  animation: 0.16s ease-out bcn-aldo-tray;
  display: flex;
  position: absolute;
  overflow-y: auto;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-panel__side {
    animation: none !important;
  }
}
.bcn-aldo-panel__side .bcn-aldo-needs__toggle svg {
  display: none;
}
.bcn-aldo-panel__side .bcn-aldo-needs__toggle {
  pointer-events: none;
}
.bcn-aldo-panel__side .bcn-aldo-needs[data-folded] .bcn-aldo-needs__list {
  display: block;
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__body {
    width: var(--aldo-expanded-width, 60vw);
    grid-template-rows: auto minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr) 17.5rem;
    gap: 0;
    padding-bottom: 0;
    display: grid;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
    grid-column: 1/-1;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__waiting {
    display: none;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__main {
    --_aldo-pad: max(var(--spacing-500, 1.5rem), calc((100% - 46rem) / 2));
    padding-bottom: var(--spacing-400);
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__head {
    padding-inline: var(--spacing-500, 1.5rem);
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side {
    min-height: 0;
    max-height: none;
    box-shadow: none;
    padding: var(--spacing-400);
    gap: var(--spacing-500, 1.5rem);
    border: 0;
    border-left: var(--_aldo-line) solid var(--color-border-default-subtle);
    background: var(--color-background-elevation-raised);
    border-radius: 0;
    border-bottom-right-radius: inherit;
    font-size: 0.8125rem;
    line-height: 1.45;
    animation: none;
    display: flex;
    position: static;
    overflow-y: auto;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side .bcn-aldo-needs__toggle {
    pointer-events: auto;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded] .bcn-aldo-panel__side .bcn-aldo-needs__toggle svg {
    display: inline;
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded]
    .bcn-aldo-panel__side
    .bcn-aldo-needs[data-folded]
    .bcn-aldo-needs__list {
    display: none;
  }
}
.bcn-aldo-panel__side .bcn-aldo-needs {
  box-shadow: none;
  background: 0 0;
  border: 0;
  overflow: visible;
}
.bcn-aldo-panel__side .bcn-aldo-needs__head {
  background: 0 0;
  border-bottom: 0;
}
.bcn-aldo-panel__side .bcn-aldo-needs__toggle {
  padding: 0 0 var(--spacing-200);
}
.bcn-aldo-panel__side .bcn-aldo-needs__list {
  gap: var(--spacing-200);
  flex-direction: column;
  max-height: none;
  display: flex;
  overflow: visible;
}
.bcn-aldo-panel__side .bcn-aldo-needs__item {
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  border: var(--_aldo-line) solid var(--color-border-default);
  border-radius: var(--_aldo-radius);
  background: var(--color-background-elevation-raised);
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-aldo-panel__side .bcn-aldo-needs__item:hover {
  border-color: var(--bcn-aldo-100);
  box-shadow: var(--elevation-1);
}
.bcn-aldo-panel__side .bcn-aldo-needs__item + .bcn-aldo-needs__item {
  border-top: var(--_aldo-line) solid var(--color-border-default);
}
.bcn-aldo-panel__side .bcn-aldo-needs__item:hover + .bcn-aldo-needs__item {
  border-top-color: var(--color-border-default);
}
.bcn-aldo-panel__side .bcn-aldo-instructions {
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-aldo-panel__side .bcn-aldo-instructions .esa-collapsible__summary {
  padding-block: 0 var(--spacing-200);
}
.bcn-aldo-panel__side .bcn-aldo-instructions__list {
  gap: var(--spacing-300);
  max-height: none;
  padding: 0;
  list-style: none;
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded]
    .bcn-aldo-panel__body:not(:has(.bcn-aldo-panel__side > :not([hidden]))) {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (width>=90rem) {
  .bcn-aldo-panel[data-expanded]
    .bcn-aldo-panel__body:not(:has(.bcn-aldo-panel__side > :not([hidden])))
    .bcn-aldo-panel__side {
    display: none;
  }
}
.bcn-console__more .esa-button__native {
  font-family: var(--_mono);
  height: auto;
  min-height: 0;
  padding: 0 1ch;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
}
.bcn-console__more .esa-button__native:hover {
  color: var(--bcn-console-fg);
}
.visually-hidden {
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
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
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--neutral {
  --_badge-bg: var(--color-content-default-secondary, #646464);
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
@media (forced-colors: active) {
  .esa-badge {
    border: 1px solid canvastext;
  }
}
@media (forced-colors: active) {
  .esa-badge--dot {
    background: canvastext;
    border: 0;
    outline: 1px solid canvastext;
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
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.esa-collapsible {
  border: var(--border-width-default, 1px) solid var(--color-border-default, #cecece);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--color-background-elevation-raised, #fcfcfc);
}
.esa-collapsible--flush {
  background: 0 0;
  border: none;
  border-radius: 0;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```
