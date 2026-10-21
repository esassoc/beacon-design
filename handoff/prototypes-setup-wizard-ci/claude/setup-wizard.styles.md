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
.bcn-swoc__reqs,
.bcn-loc__reqs,
.bcn-ciitem__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150) calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req,
.bcn-ciitem__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req-name,
.bcn-loc__req-name,
.bcn-ciitem__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swot__cat:nth-of-type(2n),
.bcn-lot__cat:nth-of-type(2n),
.bcn-ciidx__cat:nth-of-type(2n) {
  background: color-mix(in srgb, var(--bcn-gray-100) 50%, white);
}
.bcn-swot__cat:nth-of-type(2n) .bcn-swot__row:hover,
.bcn-lot__cat:nth-of-type(2n) .bcn-lot__row:hover,
.bcn-ciidx__cat:nth-of-type(2n) .bcn-ciidx__row:hover {
  background: var(--bcn-gray-100);
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
.bcn-ciidx {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-ciidx__rollup {
  gap: var(--spacing-400);
  padding: var(--spacing-500);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  grid-template-columns: repeat(5, minmax(0, 1fr));
  display: grid;
}
.bcn-ciidx__tools {
  align-items: flex-end;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  display: flex;
}
.bcn-ciidx__search {
  flex: 18rem;
  max-width: 28rem;
}
.bcn-ciidx__verbs {
  gap: var(--spacing-100);
  margin-left: auto;
  display: inline-flex;
}
.bcn-ciidx__list {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
  overflow: hidden;
}
.bcn-ciidx__cat {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-ciidx__cat:last-of-type {
  border-bottom: none;
}
.bcn-ciidx__subs {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-ciidx__sub + .bcn-ciidx__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-ciidx__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  font-size: inherit;
  margin: 0;
  line-height: 1.4;
  display: flex;
}
.bcn-ciidx__row--cat {
  font-weight: 600;
}
.bcn-ciidx__row--sub:hover {
  background: var(--color-background-default);
}
.bcn-ciidx__chev {
  all: unset;
  cursor: pointer;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-ciidx__chev[aria-expanded="true"] {
  transform: rotate(90deg);
}
.bcn-ciidx__chev:disabled {
  visibility: hidden;
}
.bcn-ciidx__chev:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-ciidx__sub-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-ciidx__review {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-ciidx__review[hidden] {
  display: none;
}
.bcn-ciidx__items {
  padding: 0 var(--spacing-400) var(--spacing-200) calc(var(--spacing-400) + 22px);
  margin: 0;
  list-style: none;
}
.bcn-ciidx__items[hidden] {
  display: none;
}
.bcn-ciidx__item {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 30px;
  padding: 0 var(--spacing-200);
  display: flex;
}
.bcn-ciidx__item + .bcn-ciidx__item {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-ciidx__item[hidden] {
  display: none;
}
.bcn-ciidx__item-title {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-ciidx__item-merged {
  color: var(--color-content-brand);
  white-space: nowrap;
}
.bcn-ciidx__item[data-dismissed] .bcn-ciidx__item-title {
  color: var(--color-content-default-tertiary);
  text-decoration: line-through;
}
.bcn-ciidx__sub[hidden],
.bcn-ciidx__cat[hidden] {
  display: none;
}
@media (width<=960px) {
  .bcn-ciidx__rollup {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.bcn-ciitem {
  --_req-indent: 2.75rem;
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-ciitem[hidden] {
  display: none;
}
.bcn-ciitem__line {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-300);
  font-size: 0.8125rem;
  display: flex;
}
.bcn-ciitem:hover > .bcn-ciitem__line {
  background: var(--color-background-default);
}
.bcn-ciitem[data-active] > .bcn-ciitem__line {
  background: color-mix(in srgb, var(--color-background-brand) 8%, transparent);
}
.bcn-ciitem__chev {
  all: unset;
  cursor: pointer;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
.bcn-ciitem__chev[aria-expanded="true"] {
  transform: rotate(90deg);
}
.bcn-ciitem__chev:focus-visible,
.bcn-ciitem__title:focus-visible,
.bcn-ciitem__req:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
  border-radius: var(--radius-100);
}
.bcn-ciitem__title {
  all: unset;
  cursor: pointer;
  min-width: 0;
  color: var(--color-content-default);
  flex: auto;
}
.bcn-ciitem__title:hover {
  text-decoration: underline;
}
.bcn-ciitem__merged {
  color: var(--color-content-brand);
  white-space: nowrap;
}
.bcn-ciitem__merged[hidden] {
  display: none;
}
.bcn-ciitem__verbs {
  flex-shrink: 0;
  align-items: center;
  display: inline-flex;
}
.bcn-ciitem__reqs[hidden] {
  display: none;
}
.bcn-ciitem__req {
  appearance: none;
  box-sizing: border-box;
  border: 0;
  border-top: 1px solid var(--color-border-default-subtle);
  width: 100%;
  font: inherit;
  text-align: start;
  color: var(--color-content-default-secondary);
  cursor: pointer;
  background: 0 0;
  font-size: 0.8125rem;
}
.bcn-ciitem__reqs > li:first-child > .bcn-ciitem__req {
  border-top: 0;
}
.bcn-ciitem__req:hover {
  color: var(--color-content-default);
}
.bcn-ciitem__req[aria-current="true"] {
  background: color-mix(in srgb, var(--color-background-brand) 8%, transparent);
  color: var(--color-content-default);
}
.bcn-ciitem[data-dismissed] .bcn-ciitem__title {
  color: var(--color-content-default-tertiary);
  text-decoration: line-through;
}
.bcn-ciitem[data-dismissed] .bcn-ciitem__verbs,
.bcn-ciitem[data-dismissed] esa-checkbox {
  visibility: hidden;
}
.bcn-ciitem__dismissed {
  align-items: center;
  gap: var(--spacing-200);
  padding: 0 var(--spacing-300) var(--spacing-150) calc(var(--spacing-300) + 2.75rem);
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
  display: flex;
}
.bcn-ciitem__dismissed[hidden] {
  display: none;
}
.bcn-cidet {
  gap: var(--spacing-400);
  padding-top: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-cidet__grid {
  gap: var(--spacing-300) var(--spacing-400);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
}
.bcn-cidet__wide {
  grid-column: 1/-1;
}
.bcn-cidet[data-kind="action"] [data-for="obligation"],
.bcn-cidet[data-kind="obligation"] [data-for="action"] {
  display: none;
}
.bcn-cidet__label {
  margin: 0 0 var(--spacing-150);
  color: var(--color-content-default);
  font-size: 0.8125rem;
  font-weight: 600;
}
.bcn-cidet__source-list {
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-cidet__source-list li + li {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cidet__source-list .bcn-cidet__source {
  all: unset;
  box-sizing: border-box;
  align-items: baseline;
  gap: var(--spacing-200);
  width: 100%;
  padding: var(--spacing-200) var(--spacing-300);
  cursor: pointer;
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  display: flex;
}
.bcn-cidet__source-list .bcn-cidet__source:hover {
  background: var(--color-background-hover);
}
.bcn-cidet__source-list .bcn-cidet__source:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: -2px;
}
.bcn-cidet__source-list .bcn-cidet__empty {
  padding: var(--spacing-200) var(--spacing-300);
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-cidet__foot {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) 0;
  background: var(--color-background-elevation-raised);
  border-top: 1px solid var(--color-border-default-subtle);
  display: flex;
  position: sticky;
  bottom: 0;
}
.bcn-cidet__spacer {
  flex: 1;
}
.bcn-cidet__saved {
  color: var(--color-content-success);
  font-size: 0.8125rem;
}
.bcn-cidet__saved[hidden] {
  display: none;
}
.bcn-cirev__head {
  align-items: center;
  gap: var(--spacing-200);
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-cirev__heading {
  min-width: 0;
  margin-left: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-cirev__crumb {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-cirev__title {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.2;
}
.bcn-cirev__pos {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  margin-left: auto;
  font-size: 0.8125rem;
}
.bcn-cirev__body {
  gap: var(--spacing-400);
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
  height: calc(90vh - 10rem);
  display: grid;
}
.bcn-cirev__tree,
.bcn-cirev__panel {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  min-height: 0;
  overflow-y: auto;
}
.bcn-cirev__tools {
  z-index: 1;
  gap: var(--spacing-150);
  padding: var(--spacing-200) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border-bottom: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
  position: sticky;
  top: 0;
}
.bcn-cirev__tools-row {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-cirev__sel {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-cirev__spacer {
  flex: 1;
}
.bcn-cirev__bin[hidden],
.bcn-cirev__group[hidden],
.bcn-cirev__empty[hidden] {
  display: none;
}
.bcn-cirev__group-title {
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-150);
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
}
.bcn-cirev__empty {
  padding: var(--spacing-400);
}
.bcn-cirev__panel {
  padding: var(--spacing-200) var(--spacing-400) 0;
  flex-direction: column;
  display: flex;
}
.bcn-cirev__panel-body {
  flex-direction: column;
  flex: 1;
  min-height: 0;
  display: flex;
}
.bcn-cirev__panel-body[hidden] {
  display: none;
}
.bcn-cirev__panel-body esa-tab-layout::part(tabs) {
  top: calc(-1 * var(--spacing-200));
  z-index: 1;
  background: var(--color-background-elevation-raised);
  position: sticky;
}
.bcn-cirev__doc {
  gap: var(--spacing-400);
  padding: var(--spacing-300) 0 var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-cirev__doc .bcn-cirev__com {
  gap: var(--spacing-200);
  flex-direction: column;
  display: flex;
}
.bcn-cirev__doc .bcn-cirev__com + .bcn-cirev__com {
  padding-top: var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-cirev__doc .bcn-cirev__doc-head {
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
}
.bcn-cirev__doc .bcn-cirev__doc-title {
  font-size: 0.875rem;
  font-weight: 600;
}
.bcn-cirev__doc .bcn-cirev__doc-from {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-cirev__doc .bcn-cirev__doc-text p {
  margin: 0 0 var(--spacing-300);
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
  line-height: 1.65;
}
.bcn-cirev__doc mark {
  background: color-mix(in srgb, var(--color-background-utility-warning) 40%, transparent);
  color: var(--color-content-default);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-cirev__doc mark[data-focus] {
  background: color-mix(in srgb, var(--color-background-utility-warning) 70%, transparent);
}
.bcn-cirev__pdf {
  gap: var(--spacing-200);
  height: calc(90vh - 17rem);
  padding-top: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-cirev__pdf-bar {
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-cirev__pdf-bar esa-select {
  flex: 0 24rem;
}
.bcn-cirev__frame {
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  flex: 1;
  width: 100%;
}
.bcn-cirev__foot {
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  display: flex;
}
.bcn-cirev__tally {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-cirev__approved {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  font-weight: 600;
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
