# Setup Wizard: styles

```css
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
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
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
.bcn-swf__branches {
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-swf__branch {
  align-items: center;
  display: flex;
}
.bcn-swf__branch .bcn-swf__step {
  margin: var(--spacing-150) 0;
  flex: 1;
}
.bcn-swf__tine {
  width: 28px;
  margin-right: var(--spacing-200);
  flex: none;
  align-self: stretch;
  position: relative;
}
.bcn-swf__tine:before {
  content: "";
  border-top: 2px dotted var(--color-border-default);
  height: 0;
  position: absolute;
  inset: 50% 0 auto;
}
.bcn-swf__tine:after {
  content: "";
  border-left: 2px dotted var(--color-border-default);
  width: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
}
.bcn-swf__branch:first-child .bcn-swf__tine:after {
  top: 50%;
}
.bcn-swf__branch:last-child .bcn-swf__tine:after {
  bottom: 50%;
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
.bcn-swc {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swc__nomatch {
  padding: var(--spacing-300) var(--spacing-400);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-swc__body {
  flex-direction: column;
  display: flex;
}
.bcn-swc__cmt {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-swc__cmt:nth-of-type(2n) {
  background: color-mix(in srgb, var(--bcn-gray-100) 50%, white);
}
.bcn-swc__cmt:nth-of-type(2n) .bcn-swc__row:hover {
  background: var(--bcn-gray-100);
}
.bcn-swc__cmt:last-of-type {
  border-bottom: none;
}
.bcn-swc__req + .bcn-swc__req {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-swc__cmt[hidden],
.bcn-swc__req[hidden] {
  display: none;
}
.bcn-swc__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-swc__row::-webkit-details-marker {
  display: none;
}
.bcn-swc__row:hover {
  background: var(--color-background-default);
}
.bcn-swc__row--cmt {
  font-weight: 600;
}
.bcn-swc__row--req {
  padding-left: calc(var(--spacing-400) + 22px);
  font-weight: 400;
}
.bcn-swc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-swc__row .bcn-swc__chevron {
  transform: rotate(90deg);
}
.bcn-swc__req.is-leaf > .bcn-swc__row .bcn-swc__chevron {
  opacity: 0.25;
}
.bcn-swc__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  overflow: hidden;
}
.bcn-swc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: none;
  border-radius: 2px;
  padding: 0;
  overflow: hidden;
}
.bcn-swc__title:hover {
  text-decoration: underline;
}
.bcn-swc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
}
.bcn-swc__route {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: auto;
  font-size: 0.6875rem;
  font-weight: 500;
}
.bcn-swc__route--obligation {
  color: var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 10%, white);
}
.bcn-swc__route--action {
  color: var(--color-content-default-secondary);
  background: var(--bcn-gray-100);
}
.bcn-swc__route--unrouted {
  color: var(--color-background-utility-danger);
  background: color-mix(in srgb, var(--color-background-utility-danger) 10%, white);
}
.bcn-swc__gap {
  color: var(--color-background-utility-danger);
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: auto;
  font-size: 0.6875rem;
  font-weight: 500;
}
.bcn-swc__gap[hidden] {
  display: none;
}
.bcn-swc__verbs {
  flex-shrink: 0;
  gap: 2px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-swc__gap:not([hidden]) ~ .bcn-swc__verbs,
.bcn-swc__route ~ .bcn-swc__verbs {
  margin-left: 0;
}
.bcn-swc__verbs esa-tooltip {
  display: inline-flex;
}
.bcn-swc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  transition: opacity 0.12s;
  display: inline-flex;
}
.bcn-swc__row:hover .bcn-swc__verb,
.bcn-swc__row:focus-within .bcn-swc__verb,
.bcn-swc__obl:hover .bcn-swc__verb,
.bcn-swc__obl:focus-within .bcn-swc__verb {
  opacity: 1;
}
.bcn-swc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swc__reqs {
  flex-direction: column;
  display: flex;
}
.bcn-swc__obls {
  padding: 0 var(--spacing-400) var(--spacing-200) calc(var(--spacing-400) + 44px);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swc__obls:empty {
  display: none;
}
.bcn-swc__obl {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 30px;
  padding: var(--spacing-100) var(--spacing-200);
  border-left: 2px solid color-mix(in srgb, var(--color-obligation) 40%, transparent);
  transition: background-color 0.12s;
  display: flex;
}
.bcn-swc__obl:hover {
  background: var(--color-background-default);
}
.bcn-swc__obl.is-new {
  background: color-mix(in srgb, var(--color-obligation) 10%, white);
}
.bcn-swc__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: var(--bcn-gray-100);
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
  font-size: 0.6875rem;
  font-weight: 500;
}
.bcn-swc__obl-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: none;
  padding: 0;
  overflow: hidden;
}
.bcn-swc__obl-title:hover {
  text-decoration: underline;
}
.bcn-swc__filing {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  margin-left: auto;
  font-size: 0.6875rem;
}
.bcn-swc__filing + .bcn-swc__verbs {
  margin-left: 0;
}
.bcn-swc__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  background: var(--color-background-default);
  border-bottom-left-radius: var(--radius-200);
  border-bottom-right-radius: var(--radius-200);
  display: flex;
}
.bcn-swc__legend {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swc__stat {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.bcn-swc__sep {
  color: var(--bcn-gray-400);
}
.bcn-swc__dot {
  border-radius: var(--radius-full);
  width: 8px;
  height: 8px;
  display: inline-block;
}
.bcn-swc__dot--obligation {
  background: var(--color-obligation);
}
.bcn-swc__dot--action {
  background: var(--bcn-gray-400);
}
.bcn-swc__dot--unrouted {
  background: var(--color-background-utility-danger);
}
.bcn-swc__foot-end {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swc__foot-end:empty {
  display: none;
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
.bcn-swcp {
  gap: var(--spacing-400);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swcp--pick {
  gap: var(--spacing-200);
}
.bcn-swcp__pair {
  gap: var(--spacing-300);
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  align-items: start;
  display: grid;
}
.bcn-swcp__meta {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-swcp__meta--quiet {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-swcp__cmt {
  color: var(--color-content-default);
  font-weight: 500;
}
.bcn-swcp__sep {
  color: var(--bcn-gray-400);
}
.bcn-swcp__section {
  gap: var(--spacing-150);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-swcp__label-row {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-swcp__label {
  color: var(--form-label-color, #646464);
  font-size: 0.75rem;
  font-weight: 500;
}
.bcn-swcp__label-n {
  color: var(--color-content-default-tertiary);
  margin-left: var(--spacing-100);
  font-weight: 400;
}
.bcn-swcp__label-verbs {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-swcp__empty {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.75rem;
  font-style: italic;
}
.bcn-swcp__verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-swcp__list {
  border-top: 1px solid var(--color-border-default-subtle);
  flex-direction: column;
  display: flex;
}
.bcn-swcp__list:empty {
  border-top: none;
}
.bcn-swcp__code {
  font-family: var(--typography-font-family-mono);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  flex-shrink: 0;
  padding: 1px 6px;
  font-size: 0.6875rem;
  font-weight: 600;
}
.bcn-swcp__text {
  padding: var(--spacing-200) var(--spacing-300);
  border-left: 3px solid var(--color-commitment);
  background: var(--color-background-default);
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
}
.bcn-swcp__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  display: flex;
}
.bcn-swcp__foot--end {
  justify-content: flex-end;
}
.bcn-swcp__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: inline-flex;
}
.sw-verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
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
.bcn-swfr {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500);
  border-top: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swfr--panel .bcn-swfr__search,
.bcn-swfr--panel .bcn-swfr__picker {
  --color-background-field: var(--color-background-elevation-raised);
}
.bcn-swfr__search {
  flex: 180px;
  max-width: 360px;
}
.bcn-swfr__verbs {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swfr__verbs:empty {
  display: none;
}
.bcn-swsc__menu {
  vertical-align: baseline;
  display: inline-block;
}
.bcn-swsc {
  align-items: center;
  gap: var(--spacing-100);
  padding: 2px var(--spacing-200);
  background: color-mix(in srgb, var(--color-content-default) 5%, transparent);
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
  line-height: inherit;
  cursor: pointer;
  border: 1px solid #0000;
  border-radius: 6px;
  transition: background 0.12s;
  display: inline-flex;
}
.bcn-swsc:hover {
  background: color-mix(in srgb, var(--color-content-default) 10%, transparent);
}
.bcn-swsc:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.bcn-swsc__label {
  text-align: left;
  min-width: 0;
}
.bcn-swsc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  display: inline-flex;
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
```
