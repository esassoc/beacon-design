# Page shell — Feed / Registry: styles

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
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
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
.bcn-aldo-status .esa-alert-box {
  padding: var(--_aldo-gap) var(--spacing-250, 0.625rem);
  font-size: var(--_aldo-text);
  align-items: center;
}
.bcn-aldo-status .esa-alert-box__icon svg {
  width: 16px;
  height: 16px;
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
.esa-card--padding-none {
  --_card-padding: 0;
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
.bcn-swoc__node,
.bcn-loc__node {
  min-width: 0;
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
.bcn-swoc__chevron,
.bcn-loc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron,
details[open] > summary .bcn-loc__chevron {
  transform: rotate(90deg);
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
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
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
.bcn-swoc__req:hover,
.bcn-loc__req:hover {
  background: var(--color-background-default);
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
.bcn-swot,
.bcn-lot {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  color: var(--color-content-default);
  flex-direction: column;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-swot__nomatch,
.bcn-lot__nomatch {
  padding: var(--spacing-300) var(--spacing-400);
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-style: italic;
}
.bcn-swot__body,
.bcn-lot__body {
  flex-direction: column;
  display: flex;
}
.bcn-swot__cat,
.bcn-lot__cat {
  border-bottom: 1px solid var(--color-border-default);
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
.bcn-swot__sub + .bcn-swot__sub,
.bcn-lot__sub + .bcn-lot__sub {
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-swot__cat:last-of-type,
.bcn-lot__cat:last-of-type {
  border-bottom: none;
}
.bcn-swot__cat[hidden],
.bcn-swot__sub[hidden],
.bcn-lot__cat[hidden],
.bcn-lot__sub[hidden] {
  display: none;
}
.bcn-swot__row,
.bcn-lot__row {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 34px;
  padding: var(--spacing-100) var(--spacing-400);
  cursor: pointer;
  user-select: none;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swot__row::-webkit-details-marker,
.bcn-lot__row::-webkit-details-marker {
  display: none;
}
.bcn-swot__row:hover,
.bcn-lot__row:hover {
  background: var(--color-background-default);
}
.bcn-swot__row--cat,
.bcn-lot__row--cat {
  font-weight: 600;
}
.bcn-swot__row--sub,
.bcn-lot__row--sub {
  padding-left: calc(var(--spacing-400) + 22px);
}
.bcn-swot__chevron,
.bcn-lot__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > .bcn-swot__row .bcn-swot__chevron,
details[open] > .bcn-lot__row .bcn-lot__chevron {
  transform: rotate(90deg);
}
.bcn-swot__name,
.bcn-lot__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: 2px;
  min-width: 0;
  padding: 0 2px;
  overflow: hidden;
}
.bcn-swot__name.is-editing,
.bcn-lot__name.is-editing {
  outline: 2px solid var(--color-obligation);
  outline-offset: 0;
  background: var(--color-background-elevation-raised);
  cursor: text;
  user-select: text;
  font-weight: 500;
}
.bcn-swot__verbs,
.bcn-lot__verbs {
  gap: 2px;
  margin-left: auto;
  display: inline-flex;
}
.bcn-swot__verbs esa-tooltip,
.bcn-lot__verbs esa-tooltip {
  display: inline-flex;
}
.bcn-swot__verb,
.bcn-lot__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swot__row:hover .bcn-swot__verb--quiet,
.bcn-swot__row:focus-within .bcn-swot__verb--quiet,
.bcn-lot__row:hover .bcn-lot__verb--quiet,
.bcn-lot__row:focus-within .bcn-lot__verb--quiet {
  opacity: 1;
}
.bcn-swot__verb:hover,
.bcn-lot__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swot__verb:focus-visible,
.bcn-lot__verb:focus-visible {
  opacity: 1;
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swot__subs,
.bcn-lot__subs {
  flex-direction: column;
  display: flex;
}
.bcn-swot__cards,
.bcn-lot__cards {
  padding: var(--spacing-200) var(--spacing-400) var(--spacing-300) calc(var(--spacing-400) + 44px);
  gap: var(--spacing-150);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swc__title--static {
  cursor: default;
  text-align: left;
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
.bcn-tev__node {
  border-block-end: 1px solid var(--color-border-default-subtle);
}
.bcn-tev:last-child .bcn-tev__node {
  border-block-end: none;
}
.bcn-tev__main {
  align-items: baseline;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-200);
  cursor: pointer;
  grid-template-columns: auto auto 1fr auto;
  list-style: none;
  display: grid;
}
.bcn-tev__main::-webkit-details-marker {
  display: none;
}
.bcn-tev__main:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-tev__main:focus-visible {
  outline: 2px solid var(--color-border-default-focus);
  outline-offset: -2px;
}
.bcn-tev__chevron {
  color: var(--color-content-default-tertiary);
  transition: transform 0.12s;
}
.bcn-tev__node[open] > .bcn-tev__main .bcn-tev__chevron {
  transform: rotate(90deg);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-tev__chevron {
    transition: none;
  }
}
.bcn-tev__glyph {
  color: var(--color-content-default-tertiary);
}
.bcn-tev__head {
  min-width: 0;
}
.bcn-tev__title {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  overflow: hidden;
}
.bcn-tev__meta {
  gap: var(--spacing-100);
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  margin-block-start: var(--spacing-050);
  display: flex;
}
.bcn-tev__kind {
  color: var(--color-content-default-secondary);
}
.bcn-tev__body {
  padding: 0 var(--spacing-200) var(--spacing-300) var(--spacing-600);
}
.bcn-tev__why {
  margin: 0 0 var(--spacing-300);
  color: var(--color-content-default-secondary);
}
.bcn-tev__facts {
  gap: var(--spacing-200) var(--spacing-500);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-tev__fact {
  min-width: 0;
  max-inline-size: 100%;
}
.bcn-tev__fact dt {
  color: var(--color-content-default-tertiary);
}
.bcn-tev__fact dd {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default);
}
@media (width<=40rem) {
  .bcn-tev__main {
    grid-template-columns: auto auto 1fr;
  }
}
.bcn-tw__bar {
  justify-content: flex-end;
  padding-block-end: var(--spacing-200);
  display: flex;
}
.bcn-tw__side:not([hidden]) {
  display: block;
}
.bcn-tw__panes {
  --sidebar-width: 22rem;
  --sidebar-content-min: 50%;
  align-items: stretch;
}
.bcn-tw__rail,
.bcn-tw__detail {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  block-size: 38rem;
  min-block-size: 0;
  overflow: hidden;
}
.bcn-tw__rail {
  flex-direction: column;
  display: flex;
}
.bcn-tw__rail-label {
  padding: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  flex: none;
  margin: 0;
}
.bcn-tw__list {
  flex: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
}
.bcn-tw__row {
  align-items: baseline;
  gap: var(--spacing-050) var(--spacing-200);
  inline-size: 100%;
  padding: var(--spacing-300);
  border: none;
  border-block-end: 1px solid var(--color-border-default-subtle);
  text-align: start;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  grid-template-columns: auto 1fr auto;
  display: grid;
}
.bcn-tw__row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-tw__row:focus-visible {
  outline: 2px solid var(--color-border-default-focus);
  outline-offset: -2px;
}
.bcn-tw__row[aria-selected="true"] {
  background: var(--color-background-elevation-sunken);
}
.bcn-tw__row[aria-selected="true"] .bcn-tw__row-label {
  font-weight: 600;
}
.bcn-tw__row-glyph {
  color: var(--color-content-default-tertiary);
  grid-column: 1;
}
.bcn-tw__row-label {
  text-overflow: ellipsis;
  white-space: nowrap;
  grid-column: 2;
  min-width: 0;
  line-height: 1.4;
  overflow: hidden;
}
.bcn-tw__row-when {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  grid-column: 3;
}
.bcn-tw__detail {
  overflow-y: auto;
}
.bcn-tw__pane:not([hidden]) {
  display: block;
}
.bcn-tw__pane-head {
  padding: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-tw__pane-title {
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.35;
}
.bcn-tw__pane-when {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default-tertiary);
}
.bcn-tw__facts {
  gap: var(--spacing-200) var(--spacing-500);
  margin: var(--spacing-300) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.bcn-tw__fact {
  min-width: 0;
  max-inline-size: 100%;
}
.bcn-tw__verbs {
  justify-content: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-400) 0;
  display: flex;
}
.bcn-tw__verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-tw__duties {
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-400);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-tw__events {
  padding: 0 var(--spacing-200) var(--spacing-300);
  margin: 0;
  list-style: none;
}
.bcn-tw__fact dt {
  color: var(--color-content-default-tertiary);
}
.bcn-tw__fact dd {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default);
}
@media (width<=60rem) {
  .bcn-tw__rail,
  .bcn-tw__detail {
    block-size: auto;
    max-block-size: 30rem;
  }
}
.bcn-treg__bar {
  justify-content: flex-end;
  display: flex;
}
.bcn-treg .esa-card {
  overflow: visible;
}
.bcn-treg__view:not([hidden]),
.bcn-treg__filters:not([hidden]) {
  display: block;
}
.bcn-treg__verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
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
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
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
.bcn-swfr--inset {
  border-top: none;
}
.bcn-swfr--panel .bcn-swfr__search,
.bcn-swfr--panel .bcn-swfr__picker {
  --color-background-field: var(--color-background-elevation-raised);
}
.bcn-swfr__search {
  flex: 180px;
  max-width: 360px;
}
.bcn-swfr__picker {
  flex: 0 180px;
  min-width: 140px;
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
.bcn-swoc__title--static {
  cursor: default;
  text-align: left;
}
.bcn-swoc.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__main.is-over {
  box-shadow: inset 0 0 0 2px var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 6%, transparent);
}
.bcn-swoc__reqs:empty:after {
  content: "No requirements — drop one here or remove this obligation.";
  padding: var(--spacing-100) var(--spacing-200);
  color: var(--color-content-default-tertiary);
  font-style: italic;
  display: block;
}
.bcn-swoc__req.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__req.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swot__row.is-over {
  box-shadow: inset 0 0 0 2px var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 6%, transparent);
}
.bcn-swot__cards {
  border-radius: 6px;
  min-height: 34px;
}
.bcn-swot__cards.is-over {
  box-shadow: inset 0 0 0 2px var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 4%, transparent);
}
.bcn-swot__cards:empty:after {
  content: "No obligations yet. Drop one here.";
  color: var(--color-content-default-tertiary);
  padding: var(--spacing-100) 0;
  font-style: italic;
}
.bcn-swot__foot {
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
.bcn-swot__foot-end {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swot__foot-end:empty {
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
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
