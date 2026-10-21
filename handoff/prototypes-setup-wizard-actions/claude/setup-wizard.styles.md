# Setup Wizard: styles

```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.bcn-swai {
  border-top: 1px solid
    color-mix(in srgb, var(--color-background-brand) 10%, var(--color-border-default-subtle));
  background: color-mix(
    in srgb,
    var(--color-background-brand) 4%,
    var(--color-background-elevation-raised)
  );
}
.bcn-swai__header {
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300) var(--spacing-500);
  color: var(--color-content-default);
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: none;
  font-family: inherit;
  font-size: 0.9375rem;
  font-weight: 500;
  display: flex;
}
.bcn-swai__header:hover {
  background: color-mix(in srgb, var(--color-content-default) 4%, transparent);
}
.bcn-swai__header:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: -2px;
}
.bcn-swai__mark {
  border-radius: var(--radius-full);
  background: var(--color-background-brand);
  width: 20px;
  height: 20px;
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swai__tag {
  align-items: center;
  gap: var(--spacing-050);
  padding: 1px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--bcn-flag-on-bg);
  color: var(--bcn-flag-on-color);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  flex-shrink: 0;
  font-size: 0.625rem;
  font-weight: 600;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swai__chevron {
  color: var(--color-content-brand);
  flex-shrink: 0;
  margin-left: auto;
  display: inline-flex;
}
.bcn-swai__chevron--open,
.bcn-swai[data-expanded] .bcn-swai__chevron--closed {
  display: none;
}
.bcn-swai[data-expanded] .bcn-swai__chevron--open {
  display: inline-flex;
}
.bcn-swai__body {
  gap: var(--spacing-400);
  padding: 0 var(--spacing-500) var(--spacing-400);
  align-items: stretch;
  display: flex;
}
.bcn-swai__main {
  flex-direction: column;
  flex: 2 1 0;
  min-width: 0;
  display: flex;
}
.bcn-swai__shell {
  background: var(--color-background-elevation-raised);
  border: 1px solid
    color-mix(in srgb, var(--color-background-brand) 22%, var(--color-border-default-subtle));
  border-radius: var(--radius-200);
  flex-direction: column;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
  display: flex;
  overflow: hidden;
}
.bcn-swai__shell:focus-within {
  border-color: var(--color-border-brand);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-background-brand) 18%, transparent);
}
.bcn-swai__textarea {
  width: 100%;
  min-height: 96px;
  padding: var(--spacing-300);
  color: var(--color-content-default);
  resize: vertical;
  background: 0 0;
  border: none;
  outline: none;
  font-family: inherit;
  font-size: 0.875rem;
}
.bcn-swai__textarea::placeholder {
  color: var(--color-content-default-tertiary);
}
.bcn-swai__input-footer {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-300);
  background: var(--color-background-default);
  border-top: 1px solid var(--color-border-default-subtle);
  flex-wrap: wrap;
  display: flex;
}
.bcn-swai__chips {
  gap: var(--spacing-200);
  flex-wrap: wrap;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-swai__chip {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-050) var(--spacing-200);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  font-size: 0.75rem;
  display: inline-flex;
}
.bcn-swai__chip strong {
  font-weight: 600;
}
.bcn-swai__footer-actions {
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
  display: flex;
}
.bcn-swai__suggest {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-300);
  border: 1px solid var(--color-border-default);
  color: var(--color-content-default);
  white-space: nowrap;
  cursor: pointer;
  background: 0 0;
  border-radius: 6px;
  font-family: inherit;
  font-size: 0.8125rem;
  display: inline-flex;
}
.bcn-swai__suggest:hover {
  background: color-mix(in srgb, var(--color-content-default) 4%, transparent);
}
.bcn-swai__send {
  border-radius: var(--radius-full);
  background: var(--color-background-brand);
  width: 36px;
  height: 36px;
  color: var(--color-content-default-knockout);
  cursor: pointer;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.bcn-swai__send:hover {
  background: var(--color-background-brand-hover);
}
.bcn-swai__sidecar {
  flex: 1 1 0;
  min-width: 300px;
}
.bcn-swai__divider {
  height: 1px;
  margin: 0 var(--spacing-500);
  background: color-mix(
    in srgb,
    var(--color-background-brand) 22%,
    var(--color-background-elevation-sunken)
  );
}
@media (width<=900px) {
  .bcn-swai__body {
    flex-direction: column;
  }
}
@media (width<=900px) {
  .bcn-swai__sidecar {
    min-width: 0;
  }
}
.bcn-swb {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  grid-template-columns: 2fr 3fr;
  min-height: 360px;
  display: grid;
  overflow: hidden;
}
.bcn-swb__col {
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  display: flex;
}
.bcn-swb__col + .bcn-swb__col {
  border-left: 1px solid var(--color-border-default-subtle);
}
.bcn-swb__col--left {
  background: var(--color-background-default);
}
.bcn-swb__head {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 48px;
  padding: var(--spacing-200) var(--spacing-400);
  border-bottom: 1px solid var(--color-border-default-subtle);
  display: flex;
}
.bcn-swb__title {
  font-family: var(--font-decorative);
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
}
.bcn-swb__head-verbs {
  align-items: center;
  gap: var(--spacing-200);
  margin-left: auto;
  display: inline-flex;
}
.bcn-swb__head-verbs:empty {
  display: none;
}
.bcn-swb__body {
  min-height: 0;
  max-height: 500px;
  padding: var(--spacing-300) var(--spacing-400);
  gap: var(--spacing-200);
  flex-direction: column;
  flex: auto;
  display: flex;
  overflow-y: auto;
}
.bcn-swb__foot {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400);
  border-top: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-raised);
  display: flex;
}
.bcn-swb__foot--split {
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (width<=900px) {
  .bcn-swb {
    grid-template-columns: 1fr;
  }
}
@media (width<=900px) {
  .bcn-swb__col + .bcn-swb__col {
    border-left: none;
    border-top: 1px solid var(--color-border-default-subtle);
  }
}
.bcn-swrr {
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-raised);
  border-radius: 6px;
  flex-shrink: 0;
  transition: border-color 0.12s;
  overflow: hidden;
}
.bcn-swrr:hover {
  border-color: var(--color-border-default);
}
.bcn-swrr__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  cursor: pointer;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-swrr__main:hover {
  background: var(--color-background-default);
}
.bcn-swrr__main:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: -2px;
}
.bcn-swrr__grip {
  color: var(--bcn-gray-400);
  cursor: grab;
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-swrr__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-swrr__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--color-content-default);
  flex: 1;
  font-size: 0.9375rem;
  overflow: hidden;
}
.bcn-swrr__main {
  position: relative;
}
.bcn-swrr__verbs {
  right: var(--spacing-200);
  align-items: center;
  gap: var(--spacing-100);
  padding-left: var(--spacing-400);
  background: linear-gradient(
    to right,
    transparent,
    var(--color-background-default) var(--spacing-300)
  );
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s;
  display: inline-flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.bcn-swrr__main:hover .bcn-swrr__verbs,
.bcn-swrr__main:focus-within .bcn-swrr__verbs {
  pointer-events: auto;
  opacity: 1;
}
.bcn-swac {
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-elevation-raised);
  border-radius: 6px;
  flex-shrink: 0;
  list-style: none;
  transition: border-color 0.12s;
  overflow: hidden;
}
.bcn-swac[data-status="approved"] {
  border-color: var(--color-success-200);
  background: var(--color-success-50);
}
.bcn-swac__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-300);
  cursor: pointer;
  min-width: 0;
  transition: background-color 0.12s;
  display: flex;
}
.bcn-swac__main:hover {
  background: color-mix(in srgb, var(--color-content-default-tertiary) 6%, transparent);
}
.bcn-swac__main:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: -2px;
}
.bcn-swac__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-swac__approve {
  cursor: pointer;
  border-radius: var(--radius-full);
  background: 0 0;
  border: none;
  flex-shrink: 0;
  padding: 0;
  display: inline-flex;
}
.bcn-swac__approve:focus-visible {
  outline: 2px solid var(--color-action);
  outline-offset: 2px;
}
.bcn-swac__pill {
  align-items: center;
  gap: var(--spacing-100);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  color: var(--bcn-gray-700);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5;
  transition:
    background-color 0.12s,
    color 0.12s;
  display: inline-flex;
}
.bcn-swac__dot {
  border-radius: var(--radius-full);
  background: var(--bcn-status-not-started);
  width: 6px;
  height: 6px;
}
.bcn-swac__pill--approved,
.bcn-swac__approve:hover .bcn-swac__pill {
  background: var(--color-success-100);
  color: var(--color-background-utility-success);
}
.bcn-swac__pill--approved .bcn-swac__dot,
.bcn-swac__approve:hover .bcn-swac__dot {
  background: var(--color-background-utility-success);
}
.bcn-swac__title-group {
  align-items: center;
  gap: var(--spacing-100);
  flex: auto;
  min-width: 9rem;
  display: flex;
}
.bcn-swac__name {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  color: var(--color-content-default);
  flex: auto;
  font-size: 0.9375rem;
  font-weight: 500;
  overflow: hidden;
}
.bcn-swac__edit,
.bcn-swac__delete {
  border-radius: var(--radius-100);
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0.6;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 2px;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swac:hover .bcn-swac__edit,
.bcn-swac:hover .bcn-swac__delete,
.bcn-swac__edit:focus-visible,
.bcn-swac__delete:focus-visible {
  opacity: 1;
}
.bcn-swac__edit:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swac__delete {
  color: var(--bcn-gray-400);
  padding: 0;
}
.bcn-swac__delete:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swac__tags {
  align-items: center;
  gap: var(--spacing-100);
  white-space: nowrap;
  flex-wrap: wrap;
  flex: 0 auto;
  min-width: 0;
  max-height: 1.25rem;
  display: flex;
  overflow: hidden;
}
.bcn-swac__tag {
  padding: var(--spacing-050) var(--spacing-200);
  border-radius: var(--radius-100);
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 500;
  display: inline-flex;
}
.bcn-swaed {
  --side-dialog-width-lg: min(780px, 92vw);
}
.bcn-swaed__head {
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
  display: flex;
}
.bcn-swaed__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-swaed__body {
  gap: var(--spacing-500);
  grid-template-columns: minmax(200px, 260px) minmax(0, 1fr);
  align-items: start;
  display: grid;
}
.bcn-swaed__rail {
  gap: var(--spacing-250);
  padding: var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  background: var(--color-background-elevation-sunken);
  flex-direction: column;
  display: flex;
}
.bcn-swaed__rail-head {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-swaed__rail-title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-swaed__rail-list {
  gap: var(--spacing-250);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-swaed__rail-item {
  align-items: center;
  gap: var(--spacing-150);
  padding-bottom: var(--spacing-250);
  border-bottom: 1px solid var(--color-border-default-subtle);
  flex-wrap: wrap;
  display: flex;
}
.bcn-swaed__rail-item:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}
.bcn-swaed__rail-name {
  color: var(--color-content-default);
  flex: 100%;
  margin: 0;
}
.bcn-swaed__detail {
  min-width: 0;
}
.bcn-swaed__panel {
  gap: var(--spacing-400);
  flex-direction: column;
  display: flex;
}
.bcn-swaed__pairs {
  gap: var(--spacing-300) var(--spacing-600);
  flex-wrap: wrap;
  display: flex;
}
.bcn-swaed__timing-group {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-swaed__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-swaed__foot-right {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
@media (width<=720px) {
  .bcn-swaed__body {
    grid-template-columns: 1fr;
  }
}
.sw-verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.sw-verb__rot {
  display: inline-flex;
  transform: rotate(90deg);
}
.sw-dropzone {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-400);
  border: 1px dashed var(--color-border-default);
  background: color-mix(in srgb, var(--color-action) 3%, transparent);
  color: var(--color-action);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.875rem;
  display: flex;
}
.sw-action-list {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.sw-legend {
  align-items: center;
  gap: var(--spacing-150);
  color: var(--color-content-default-tertiary);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.sw-legend__stat {
  align-items: center;
  gap: var(--spacing-150);
  display: inline-flex;
}
.sw-legend__sep {
  color: var(--bcn-gray-400);
}
.sw-legend__dot {
  border-radius: var(--radius-full);
  width: 8px;
  height: 8px;
  display: inline-block;
}
.sw-legend__dot--approved {
  background: var(--color-background-utility-success);
}
.sw-legend__dot--draft {
  background: var(--bcn-status-not-started);
}
.sw-foot-verbs {
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  display: flex;
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
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
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
