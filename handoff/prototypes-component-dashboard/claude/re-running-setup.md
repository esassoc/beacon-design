# Re-running setup

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

What happens to earlier setup decisions when anything they rest on changes: the setup (Edit Setup), the component's dates anywhere (Edit Component included), its boundary (the nightly feature-layer reconcile included), or a requirement's tags.

## Key decisions

- SETUP DISMISSALS REOPEN when their reason no longer holds: they go back to Needs a decision with "Back from setup: was <reasons>". One whose reason still holds stays dismissed and takes the new reason.
- Selecting a source document again reopens its "Source document not applicable" commitments, so a person sees them fresh. Unselecting one records its open commitments Not Applicable on the next Save.
- SETUP APPLIES STAY APPLIED, with their actions, and are FLAGGED (Andy, 2026-10-20: "Flag for review"). In the Applied view the row carries a warning line "Setup now says not applicable: <reason>", and its preview offers "Dismiss with This Reason".
- A dismissal made with Dismiss with This Reason counts as a setup decision, so it reopens if its reason stops holding.
- Hand decisions, applied or dismissed, are never changed and never flagged; setup's Will Apply only means it could not rule a commitment out, which is weaker than a person's call.

## Done when

- Fixture, after the setup above (0 / 14 / 28): saving Jan 4 – Apr 30, 2027 in Edit Component reopens 2 dismissals with "Back from setup" notes (2 / 14 / 26) and flags only LSAA-4 ("Outside the fall bird migration season"); Dismiss with This Reason confirms, then gives 2 / 13 / 27. Totals stay 42.

## Components

- `bcn-sw-row` (spoke) · `src/components/bcn/BcnSetupWorkspace.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<span class="bcn-sw-row__flag" data-sw-flag="" hidden=""
  ><span class="esa-icon esa-icon--xs" aria-hidden="true"
    ><svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
      <path d="M12 9v4"></path>
      <path d="M12 17h.01"></path></svg></span
  ><span data-sw-flag-text=""></span
></span>
```

## Styles

```css
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
.bcn-mod__link .esa-icon {
  color: var(--bcn-content-muted);
}
.bcn-sw__head .esa-icon {
  color: var(--color-content-default-secondary);
}
.bcn-sw-row__flag {
  align-items: center;
  gap: var(--spacing-100);
  min-width: 0;
  color: var(--color-content-utility-warning);
  font-size: 0.8125rem;
  line-height: 1.35;
  display: flex;
}
.bcn-sw-row__flag > span {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-sw-row__flag[hidden] {
  display: none;
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
