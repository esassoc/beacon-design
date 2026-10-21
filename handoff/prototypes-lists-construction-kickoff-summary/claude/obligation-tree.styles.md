# Obligation tree: styles

```css
.bcn-lot__cat[data-list-empty],
.bcn-lot__sub[data-list-empty] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
.bcn-loc[data-class="commitment"] .bcn-loc__req .bcn-cbadge {
  display: none;
}
.bcn-lot__cat[data-list-empty],
.bcn-lmt [data-list-cats] [data-list-class-tag] {
  display: none;
}
.bcn-lot__row:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: -2px;
}
.bcn-lit:not([data-index-editable])
  esa-tooltip:has([data-list-remove], [data-list-duplicate], .bcn-loc__verb[data-list-edit]) {
  display: none;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-loc__title {
  flex: 0 auto;
}
.bcn-loc [data-list-count] {
  margin-inline-start: auto;
}
.bcn-loc__edited {
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-loc__edited[hidden] {
  display: none;
}
.bcn-loc__dot {
  place-items: center;
  block-size: 1rem;
  inline-size: 1rem;
  display: inline-grid;
}
.bcn-loc__dot:before {
  content: "";
  background: var(--color-content-brand);
  border-radius: 50%;
  block-size: 6px;
  inline-size: 6px;
}
.bcn-loc__req {
  color: var(--color-content-default-secondary);
  cursor: pointer;
}
.bcn-loc__req-name {
  font: inherit;
  color: inherit;
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  padding: 0;
}
.bcn-loc__req:hover .bcn-loc__req-name {
  color: var(--color-content-default);
}
.bcn-loc__req-name:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
  border-radius: 2px;
}
.bcn-loc__impl[hidden] {
  display: none;
}
.bcn-loc__impl .bcn-status-chip {
  flex-shrink: 0;
}
.bcn-loc__comments {
  font-size: var(--font-size-100);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence {
  text-align: end;
  min-width: 5.5rem;
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  white-space: nowrap;
  flex-shrink: 0;
}
.bcn-loc__evidence[data-none] {
  color: var(--color-content-default-tertiary);
  font-weight: 400;
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
.bcn-swot__verb--quiet,
.bcn-lot__verb--quiet {
  opacity: 0;
  transition: opacity 0.12s;
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
.bcn-swot__hit,
.bcn-lot__hit {
  color: inherit;
  background: #fff176;
  border-radius: 2px;
  padding: 0 1px;
}
.bcn-lot[data-list-view="index"] [data-list-cats],
.bcn-lot[data-list-view="commitment"] [data-list-cats],
.bcn-lot[data-list-view="az"] [data-list-cats],
.bcn-lot:not([data-list-view="index"]):not([data-list-view="commitment"]):not([data-list-view="az"])
  [data-list-mirror-body] {
  display: none;
}
.bcn-lot [data-list-flat] > .bcn-lot__cards {
  padding: var(--spacing-300) var(--spacing-400);
}
.bcn-lot__row .bcn-lot__name[hidden] {
  display: none;
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```
