# Header

Dashboard (composable) · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/dashboard/

![Header, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-dashboard/claude/header.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-monitoring-dashboard/claude/header.phone.png

## Components

- `bcn-search-trigger` (spoke) · `src/components/bcn/BcnSearchTrigger.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

_7 repeated elements are collapsed in the markup below; the comments say where._

```html
<header class="topbar">
  <!-- Left: sidebar toggle + tenant trigger -->
  <div class="topbar__left">
    <button
      type="button"
      class="sidebar-toggle"
      id="sidebar-toggle"
      aria-label="Collapse sidebar"
      aria-expanded="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="sidebar-toggle__icon"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M9 3v18"></path>
      </svg></button
    ><button type="button" class="tenant-trigger">
      <span>DWR</span
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
          <path d="m6 9 6 6 6-6"></path></svg
      ></span>
    </button>
  </div>
  <!-- Center: global-search trigger field (opens BcnOmniSearch) -->
  <div class="topbar__center">
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
  </div>
  <!-- Right: QA badge, search, config/admin icon-buttons, user menu -->
  <div class="topbar__right">
    <span class="qa-warning"
      ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
          <path d="M12 9v4"></path>
          <path d="M12 17h.01"></path></svg></span
      >QA</span
    ><a href="/beacon-design/prototypes/settings" class="icon-button" aria-label="ESA-Config"
      ><span class="esa-icon esa-icon--md" aria-hidden="true"
        ><svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          focusable="false"
        >
          <line x1="21" x2="14" y1="4" y2="4"></line>
          <line x1="10" x2="3" y1="4" y2="4"></line>
          <!-- …and 7 more like this (<line>) -->
        </svg></span
      ></a
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
      ><a
        class="esa-button__native typography-microcopy-md"
        href="/beacon-design/prototypes/settings"
        aria-label="Admin settings"
        title="Admin settings"
        ><span class="esa-icon esa-icon--md" aria-hidden="true"
          ><svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 … [565 characters]"
            ></path>
            <circle cx="12" cy="12" r="3"></circle></svg></span></a
    ></span>
    <div class="user-menu" id="user-menu">
      <button
        type="button"
        class="user-menu-trigger"
        id="user-menu-trigger"
        aria-label="User menu"
        aria-expanded="false"
      >
        <span class="user-menu-trigger__avatar user-menu-trigger__avatar--fallback"
          ><span class="esa-icon esa-icon--md" aria-hidden="true"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path d="M18 20a6 6 0 0 0-12 0"></path>
              <circle cx="12" cy="10" r="4"></circle>
              <circle cx="12" cy="12" r="10"></circle></svg></span
        ></span>
      </button>
      <div class="user-panel" id="user-panel" hidden="">
        <div class="user-panel__header">
          <div class="user-panel__avatar-wrapper">
            <span class="user-panel__avatar user-panel__avatar--fallback"
              ><span class="esa-icon esa-icon--lg" aria-hidden="true"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  focusable="false"
                >
                  <path d="M18 20a6 6 0 0 0-12 0"></path>
                  <circle cx="12" cy="10" r="4"></circle>
                  <circle cx="12" cy="12" r="10"></circle></svg></span
            ></span>
          </div>
          <div class="user-panel__info">
            <span class="user-panel__name">Andy Lovseth</span
            ><span class="user-panel__email">andy.lovseth@esassoc.com</span>
          </div>
        </div>
        <div class="user-panel__menu">
          <button type="button" class="user-panel__item">
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
                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                ></path>
                <path d="m15 5 4 4"></path></svg></span
            ><span>Edit Profile</span></button
          ><a class="user-panel__item" href="#help"
            ><span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <path d="M12 17h.01"></path></svg></span
            ><span>Get Help</span></a
          ><button type="button" class="user-panel__item user-panel__item--danger">
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
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" x2="9" y1="12" y2="12"></line></svg></span
            ><span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
```

## Styles

```css
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
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
.qa-warning {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-050) var(--spacing-200);
  background: var(--color-background-accent);
  color: var(--color-background-elevation-raised);
  border-radius: var(--spacing-100);
  white-space: nowrap;
  font-size: 0.8125rem;
  font-weight: 600;
  display: inline-flex;
}
.topbar {
  background: var(--bcn-gray-100);
  border-bottom: 1px solid var(--bcn-gray-300);
  z-index: 1100;
  height: 52px;
  padding: 0 var(--spacing-200);
  grid-template-columns: auto 1fr auto;
  align-items: center;
  display: grid;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
@media (width>=768px) {
  .topbar {
    padding: 0 var(--spacing-400);
  }
}
.topbar__left {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.topbar__center {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  padding: 0 var(--spacing-400);
  display: flex;
}
.topbar__right {
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-100);
  display: flex;
}
.sidebar-toggle {
  border-radius: var(--spacing-050);
  width: 32px;
  height: 32px;
  color: var(--bcn-gray-600);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition:
    background 0.15s,
    color 0.15s;
  display: flex;
}
.sidebar-toggle:hover {
  background: var(--bcn-gray-200);
  color: var(--color-background-brand);
}
.sidebar-toggle:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.sidebar-toggle__icon {
  transition: transform 0.15s;
}
.sidebar-toggle--collapsed .sidebar-toggle__icon {
  transform: scaleX(-1);
}
.tenant-trigger {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--spacing-050);
  color: var(--bcn-gray-900);
  cursor: pointer;
  background: 0 0;
  border: none;
  font-size: 0.875rem;
  font-weight: 600;
  transition: background 0.15s;
  display: flex;
}
.tenant-trigger:hover {
  background: var(--bcn-gray-200);
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
}
.icon-button {
  border-radius: var(--spacing-050);
  width: 32px;
  height: 32px;
  color: var(--color-content-default-secondary);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-decoration: none;
  transition:
    background 0.15s,
    color 0.15s;
  display: flex;
}
.icon-button:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-background-brand);
}
.icon-button:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.user-menu {
  position: relative;
}
.user-menu-trigger {
  cursor: pointer;
  background: 0 0;
  border: none;
  border-radius: 9999px;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  transition: transform 0.15s;
  display: flex;
}
.user-menu-trigger:hover {
  transform: scale(1.05);
}
.user-menu-trigger:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.user-menu-trigger__avatar {
  object-fit: cover;
  border: 2px solid var(--bcn-gray-200);
  border-radius: 9999px;
  width: 32px;
  height: 32px;
  transition: border-color 0.15s;
}
.user-menu-trigger__avatar--fallback {
  background: var(--bcn-gray-200);
  color: var(--bcn-gray-500);
  justify-content: center;
  align-items: center;
  display: flex;
}
.user-menu-trigger:hover .user-menu-trigger__avatar {
  border-color: var(--color-background-brand);
}
.user-panel {
  top: calc(100% + var(--spacing-200));
  background: var(--color-background-elevation-raised);
  border-radius: var(--spacing-200);
  border: 1px solid var(--bcn-gray-200);
  z-index: 1200;
  min-width: 280px;
  position: absolute;
  right: 0;
  box-shadow: 0 4px 24px #0000001f;
}
.user-panel[hidden] {
  display: none;
}
.user-panel__header {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border-bottom: 1px solid var(--bcn-gray-200);
  display: flex;
}
.user-panel__avatar-wrapper {
  flex-shrink: 0;
}
.user-panel__avatar {
  object-fit: cover;
  border: 2px solid var(--bcn-gray-200);
  border-radius: 9999px;
  width: 48px;
  height: 48px;
}
.user-panel__avatar--fallback {
  background: var(--bcn-gray-100);
  color: var(--bcn-gray-400);
  justify-content: center;
  align-items: center;
  display: flex;
}
.user-panel__info {
  gap: var(--spacing-050);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.user-panel__name {
  color: var(--bcn-gray-900);
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.3;
  overflow: hidden;
}
.user-panel__email {
  color: var(--bcn-gray-500);
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 0.8125rem;
  line-height: 1.5;
  overflow: hidden;
}
.user-panel__menu {
  padding: var(--spacing-200);
}
.user-panel__item {
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300);
  color: var(--bcn-gray-900);
  border-radius: var(--spacing-150);
  cursor: pointer;
  text-align: left;
  background: 0 0;
  border: none;
  font-size: 0.9375rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.15s;
  display: flex;
}
.user-panel__item:hover {
  background: var(--bcn-gray-50);
}
.user-panel__item:active {
  background: var(--bcn-gray-100);
}
.user-panel__item--danger {
  color: var(--color-background-utility-danger);
}
.user-panel__item--danger:hover {
  background: var(--color-background-utility-danger-subtle);
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
.bcn-widget-menu__item .esa-icon {
  color: var(--color-content-default-secondary);
  flex: none;
}
.bcn-widget-menu__item--danger,
.bcn-widget-menu__item--danger .esa-icon {
  color: var(--color-content-utility-danger);
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
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
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
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-300` | `#bdbdbd` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-50` | `#fafafa` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-600` | `#656565` | component |
| `--bcn-gray-900` | `#3d3d3d` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-accent` | `#f76b15` | semantic |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-subtle` | `#fffcfc` | semantic |
| `--color-border-brand` | `#b9d6d2` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
