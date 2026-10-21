# Topbar search trigger

Global Search · source prototype: https://esassoc.github.io/beacon-design/prototypes/global-search/

![Topbar search trigger, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-global-search/claude/topbar-search-trigger.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-global-search/claude/topbar-search-trigger.phone.png

The global-search affordance in the app bar: a button STYLED as a search input — leading magnifier, muted "Search…" placeholder, and a "/" keyboard-shortcut hint — centered in the topbar. It is a trigger, not a real field: clicking it (or pressing "/") opens the command palette.

## Key decisions

- It is a <button>, not an <input> — it submits nothing and owns no query; it only opens the overlay. Carry the semantics with aria-keyshortcuts="/".
- The open shortcut is "/" (a deliberate Beacon choice — NOT ⌘K). The single <kbd>/</kbd> hint advertises it.
- Centered in the topbar's center zone, max-width ~520px, so it reads like cb-fish's omnibox entry point rather than a utility icon.

## Gotchas

- Do not wire it as a real text field — it is purely an affordance; the actual input lives in the palette.
- On a tight app bar the placeholder text collapses to icon + "/" hint only (it must not push the bar wide).
- No esa-* lego is an omnibox trigger field (esa-text-field is a real bordered/labelled input; esa-icon-button is icon-only) — this is the bcn-search-trigger component.

## Done when

- Clicking the field or pressing "/" opens the palette; the trigger shows magnifier + "Search…" + a "/" hint and never submits a form.

## Components

- `bcn-search-trigger` (spoke) · `src/components/bcn/BcnSearchTrigger.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<button
  class="bcn-search-trigger"
  type="button"
  data-omni-trigger=""
  aria-label="Search"
  aria-keyshortcuts="/"
>
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
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path></svg></span
  ><span class="bcn-search-trigger__placeholder">Search…</span
  ><span class="bcn-search-trigger__kbd" aria-hidden="true"><kbd>/</kbd></span>
</button>
```

## Styles

```css
.bcn-search-trigger {
  align-items: center;
  gap: var(--spacing-200);
  width: 100%;
  max-width: 520px;
  padding: var(--spacing-150) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  cursor: text;
  margin: 0 auto;
  transition:
    border-color 0.15s,
    background 0.15s;
  display: flex;
}
.bcn-search-trigger:hover {
  border-color: var(--color-border-brand);
  background: var(--color-background-elevation-raised);
}
.bcn-search-trigger:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-search-trigger__placeholder {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
  font-size: var(--font-size-200);
  color: var(--color-content-default-tertiary);
  flex: 1;
  overflow: hidden;
}
.bcn-search-trigger__kbd {
  flex: none;
  gap: 2px;
  display: inline-flex;
}
.bcn-search-trigger__kbd kbd {
  min-width: 18px;
  height: 18px;
  font-family: inherit;
  font-size: 11px;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-tertiary);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  display: inline-flex;
}
@media (width<=720px) {
  .bcn-search-trigger__placeholder {
    display: none;
  }
}
@media (width<=720px) {
  .bcn-search-trigger {
    max-width: max-content;
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
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-brand` | `#b9d6d2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--typography-font-weight-medium` | `500` | semantic |
