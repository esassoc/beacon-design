# Board: styles

```css
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-acard {
  --_ink-meta: var(--color-content-default-secondary);
  font-optical-sizing: auto;
  gap: var(--spacing-150);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-250);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  cursor: grab;
  touch-action: none;
  user-select: none;
  flex-direction: column;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
  display: flex;
  position: relative;
}
.bcn-acard:hover {
  border-color: var(--color-border-default-strong, var(--color-border-default));
  box-shadow: var(--elevation-1, 0 1px 2px #0000000f);
}
.bcn-acard[data-na] {
  background: var(--color-background-elevation-sunken);
}
.bcn-acard[data-na] .bcn-acard__name {
  color: var(--color-content-default-secondary);
}
.bcn-acard__top {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  min-block-size: 20px;
  display: flex;
}
.bcn-acard__codes {
  gap: var(--spacing-100);
  min-inline-size: 0;
  display: inline-flex;
  overflow: hidden;
}
.bcn-acard__flag {
  color: var(--color-content-utility-danger, var(--color-content-default-secondary));
  display: inline-flex;
}
.bcn-acard__name {
  all: unset;
  font-family: var(--typography-font-family-sans);
  letter-spacing: -0.005em;
  color: var(--color-content-default);
  -webkit-line-clamp: 2;
  cursor: inherit;
  -webkit-box-orient: vertical;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.3;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-acard__name:after {
  content: "";
  border-radius: inherit;
  position: absolute;
  inset: 0;
}
.bcn-acard__name:focus-visible:after {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-acard__meta {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-medium);
  color: var(--_ink-meta);
  line-height: 1.35;
}
.bcn-acard__foot {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-200);
  border-block-start: 1px solid var(--color-border-default);
  min-block-size: 28px;
  padding-block-start: var(--spacing-200);
  display: flex;
}
.bcn-acard__due,
.bcn-acard__count {
  align-items: center;
  gap: var(--spacing-100);
  color: var(--_ink-meta);
  white-space: nowrap;
  font-size: 0.8125rem;
  line-height: 1.3;
  display: inline-flex;
}
.bcn-acard__due {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-acard__count {
  font-weight: var(--typography-font-weight-medium);
  font-variant-numeric: tabular-nums;
}
.bcn-acard__due[data-urgency="overdue"] {
  color: var(--color-content-utility-danger);
  font-weight: var(--typography-font-weight-bold);
}
.bcn-acard__due[data-urgency="due-soon"] {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-bold);
}
.bcn-acard__due[data-empty] {
  color: var(--color-content-default-tertiary);
}
.bcn-acard__counts {
  align-items: center;
  gap: var(--spacing-250);
  margin-inline-start: auto;
  display: inline-flex;
}
.bcn-acard__count[data-zero] {
  color: var(--color-content-default-tertiary);
}
.bcn-acard__who,
.bcn-acard__avatar {
  display: inline-flex;
}
.bcn-acard[data-lifted] {
  z-index: 60;
  pointer-events: none;
  box-shadow: var(--elevation-4, 0 12px 28px #0000002e);
  transform-origin: 50%;
  cursor: grabbing;
  position: fixed;
  rotate: 1.5deg;
}
.bcn-aboard {
  min-inline-size: 0;
}
.bcn-aboard[hidden] {
  display: none;
}
.bcn-aboard__cols {
  gap: var(--spacing-300);
  block-size: max(420px, calc(100dvh - var(--_top, 400px) - var(--spacing-500)));
  grid-auto-columns: minmax(272px, 1fr);
  grid-auto-flow: column;
  align-items: stretch;
  padding-block-end: var(--spacing-200);
  display: grid;
  overflow-x: auto;
}
.bcn-aboard__col {
  --_col-bg: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 55%,
    var(--color-background-default)
  );
  background: var(--_col-bg);
  border: 1px solid
    color-mix(in srgb, var(--color-border-default) 60%, var(--color-border-default-subtle));
  border-radius: var(--radius-300, var(--radius-200));
  flex-direction: column;
  min-block-size: 0;
  min-inline-size: 0;
  transition:
    background-color 0.12s,
    border-color 0.12s;
  display: flex;
}
.bcn-aboard__col[data-drop] {
  background: color-mix(in srgb, var(--color-background-brand) 8%, var(--_col-bg));
  border-color: var(--color-background-brand);
}
.bcn-aboard__head {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-300) var(--spacing-200);
  display: flex;
}
.bcn-aboard__dot {
  border-radius: 50%;
  flex-shrink: 0;
  block-size: 8px;
  inline-size: 8px;
}
.bcn-aboard__name {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-aboard__count {
  color: var(--color-content-default-secondary);
  margin-inline-start: auto;
}
.bcn-aboard__list {
  gap: var(--spacing-200);
  padding: 0 var(--spacing-200) var(--spacing-200);
  flex-direction: column;
  flex: 1;
  min-block-size: 0;
  display: flex;
  overflow-y: auto;
}
.bcn-at .bcn-status-chip {
  font-size: 0.875rem;
  line-height: 1.4;
}
.bcn-search-trigger .esa-icon {
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
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-2xs-strong {
  font-family: var(--typography-label-2xs-strong-font-family);
  font-size: var(--typography-label-2xs-strong-font-size);
  font-weight: var(--typography-label-2xs-strong-font-weight);
  line-height: var(--typography-label-2xs-strong-line-height);
  letter-spacing: var(--typography-label-2xs-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__node .esa-avatar {
  --_avatar-bg: var(--_node-color, var(--color-background-brand-muted));
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.esa-avatar {
  --_avatar-size: var(--avatar-size-md, 40px);
  --_avatar-font-size: var(
    --avatar-font-size-md,
    var(--typography-label-md-strong-font-size, var(--font-size-200, 0.9375rem))
  );
  --_avatar-radius: var(--radius-pill, 9999px);
  --_avatar-bg: var(--avatar-bg, hsl(var(--_avatar-hue, 200) 45% 65%));
  --_avatar-text: var(--color-content-default-knockout, #fcfcfc);
  width: var(--_avatar-size);
  height: var(--_avatar-size);
  border-radius: var(--_avatar-radius);
  background: var(--_avatar-bg);
  color: var(--_avatar-text);
  font-size: var(--_avatar-font-size);
  user-select: none;
  box-sizing: border-box;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  display: inline-flex;
  overflow: hidden;
}
.esa-avatar--xs {
  --_avatar-size: var(--avatar-size-xs, 20px);
  --_avatar-font-size: var(
    --avatar-font-size-xs,
    var(--typography-label-2xs-strong-font-size, var(--font-size-050, 0.625rem))
  );
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
.bcn-status-chip {
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
  display: inline-flex;
}
.bcn-status-chip__dot {
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
  width: 8px;
  height: 8px;
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
```
