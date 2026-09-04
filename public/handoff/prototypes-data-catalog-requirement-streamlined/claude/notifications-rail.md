# Notifications rail

The Notifications rail module: rule-phrasing trigger rows (Coming up / Due / Past due), each an icon | name | rule. It mirrors the standard Action detail page's trigger list and states only the notification RULES — never any one implementation's calculated dates.

## Key decisions
- Rules-only: "7 days before due", "On the due date", "1 day after due" — config phrasing, so the module is honest that it is setup, not a live schedule.
- The full editable notification config (toggles, lead days, additional recipients, and the schedule computed off a due date) lives in the edit modal's Notifications tab; the rail is a read summary.

## Gotchas
- Do not render per-implementation notification dates in the rail — that is tracking leakage; the computed schedule is only shown inside the modal against a read-only due date.
- Keep the row anatomy icon | name | rule (rule right-aligned) consistent with the standard Action page so the two read as the same control.

## Done when
- Three trigger rows (Coming up / Due / Past due) showing rule phrasing only, no concrete dates.

## Markup
```html
<ul class="bcn-triggers">
  <li class="bcn-trigger-row">
    <span class="esa-icon esa-icon--sm" aria-hidden="true"
      ><svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path
          d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
        ></path></svg></span
    ><span class="bcn-trigger-row__name">Coming up</span
    ><span class="bcn-trigger-row__rule">7 days before due</span>
  </li>
  <li class="bcn-trigger-row">
    <span class="esa-icon esa-icon--sm" aria-hidden="true"
      ><svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <path d="M8 2v4"></path>
        <path d="M16 2v4"></path>
        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
        <path d="M3 10h18"></path></svg></span
    ><span class="bcn-trigger-row__name">Due</span
    ><span class="bcn-trigger-row__rule">On the due date</span>
  </li>
  <li class="bcn-trigger-row">
    <span class="esa-icon esa-icon--sm" aria-hidden="true"
      ><svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        focusable="false"
      >
        <path
          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
        ></path>
        <path d="M12 9v4"></path>
        <path d="M12 17h.01"></path></svg></span
    ><span class="bcn-trigger-row__name">Past due</span
    ><span class="bcn-trigger-row__rule">1 day after due</span>
  </li>
</ul>
```

## Styles
```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-triggers {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-trigger-row {
  align-items: center;
  gap: var(--spacing-250);
  font-size: var(--typography-label-md-font-size);
  display: flex;
}
.bcn-trigger-row .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
}
.bcn-trigger-row__name {
  color: var(--color-content-default);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-trigger-row__rule {
  color: var(--color-content-default-secondary);
  text-align: right;
  margin-left: auto;
}
.bcn-context__doc .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-note .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-ntoggle__title .esa-icon {
  color: var(--color-content-default);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.bcn-reqref__ext .esa-icon {
  --_icon-size: 12px;
  opacity: 0.75;
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
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
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
```

## Tokens
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
