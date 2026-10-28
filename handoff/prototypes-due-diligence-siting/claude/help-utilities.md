# Help & utilities

Site Screening · source prototype: https://esassoc.github.io/beacon-design/prototypes/due-diligence-siting/

![Help & utilities, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-due-diligence-siting/claude/help-utilities.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-due-diligence-siting/claude/help-utilities.phone.png

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-help-bar` (spoke) · `src/components/bcn/BcnHelpBar.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-popover` (hub) · `packages/ecology/src/components/esa-popover.ts`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

```html
<div class="bcn-help-bar" data-help-bar="" role="toolbar" aria-label="Help &amp; utilities">
  <!-- Primary: Guidance — the Aldo mark alone (the label went 2026-10-21), named by
       aria-label and the tooltip; opens the guidance drawer via hook. --><esa-tooltip
    class="bcn-help-bar__tooltip"
    text="Help &amp; Guidance"
    position="above"
    delay="150"
    align="center"
    ><button
      type="button"
      class="bcn-help-bar__guidance"
      data-help-trigger=""
      aria-haspopup="dialog"
      aria-label="Help &amp; Guidance"
    >
      <span class="bcn-aldo-mark" data-size="md" data-variant="rings" aria-hidden="true"
        ><svg
          class="bcn-aldo-mark__glyph"
          viewBox="12 12 40 40"
          fill="none"
          stroke="url(#bcn-aldo-ring-7hslvk9)"
          stroke-width="3.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <defs>
            <linearGradient
              id="bcn-aldo-ring-7hslvk9"
              x1="14"
              y1="12"
              x2="52"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" class="bcn-aldo-mark__from"></stop>
              <stop offset="1" class="bcn-aldo-mark__to"></stop>
            </linearGradient>
          </defs>
          <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
          <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
          <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
          <circle
            cx="33.2"
            cy="31.1"
            r="2"
            fill="url(#bcn-aldo-ring-7hslvk9)"
            stroke="none"
          ></circle></svg
      ></span></button></esa-tooltip
  ><!-- Attach Evidence of Compliance — icon-only; the tooltip host carries the drawer's open hook.
       GLYPH: the paper clip, as on prod's bar and in global-search's SCOPES (what the ⌘K
       palette shows for Evidence of Compliance). The hub registry has no paperclip and
       iconOnly takes only a registry name, so the glyph rides in the lego's default slot
       as an EsaIcon with `paths`, and the esa-button--icon-only class keeps the square
       icon-button geometry. Swap to icon="paperclip" once the hub registers it.
       This slot used to hold a duplicate Search button. It was replaced (product meeting
       2026-08-04): search already has the top bar's own field and ⌘K, and this bar is
       where Beacon's bottom affordances live, which is where the global evidence drawer
       belongs. --><esa-tooltip
    class="bcn-help-bar__tooltip"
    text="Add Evidence"
    position="above"
    delay="150"
    data-evidence-trigger="true"
    align="center"
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        aria-label="Add Evidence"
      >
        <span class="esa-button__label"
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
                d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"
              ></path></svg></span
        ></span></button></span></esa-tooltip
  ><!-- What's new — icon-only trigger; esa-popover panel opens above the bar. --><esa-popover
    class="bcn-help-bar__popover"
    position="top"
    trigger="click"
    offset="12"
    appearance="default"
    ><esa-tooltip
      class="bcn-help-bar__tooltip"
      text="Release Notes"
      position="above"
      delay="150"
      align="center"
      ><span class="bcn-help-bar__whatsnew" data-whatsnew=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--md esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-md"
            type="button"
            aria-label="Release Notes"
            title="Release Notes"
            aria-expanded="false"
          >
            <span class="esa-icon esa-icon--md" aria-hidden="true"
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
                <path d="M8 2v4"></path>
                <path d="M12 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="16" height="18" x="4" y="4" rx="2"></rect>
                <path d="M8 10h6"></path>
                <path d="M8 14h8"></path>
                <path d="M8 18h5"></path></svg
            ></span></button></span></span
    ></esa-tooltip>
    <div slot="content" class="bcn-help-bar__panel">
      <p class="bcn-help-bar__panel-release">
        <span class="bcn-help-bar__pill">1.41.0</span
        ><time class="bcn-help-bar__panel-date" datetime="2026-10-13">October 13, 2026</time>
      </p>
      <p class="bcn-help-bar__panel-title">What's New</p>
      <ul class="bcn-help-bar__panel-list">
        <li>
          <a
            class="bcn-help-bar__panel-link"
            href="/beacon-design/prototypes/release-notes#v1-41-0-lists"
            ><span class="bcn-help-bar__panel-item-title">Lists replace Action Lists</span
            ><span class="bcn-help-bar__panel-item-text"
              >One Lists page per project holds action lists and commitment lists.</span
            ></a
          >
        </li>
        <li>
          <a
            class="bcn-help-bar__panel-link"
            href="/beacon-design/prototypes/release-notes#v1-41-0-monitoring-dashboard"
            ><span class="bcn-help-bar__panel-item-title"
              >Configurable Monitoring Portal dashboard</span
            ><span class="bcn-help-bar__panel-item-text"
              >Admins build the dashboard from a gallery of widgets.</span
            ></a
          >
        </li>
        <li>
          <a
            class="bcn-help-bar__panel-link"
            href="/beacon-design/prototypes/release-notes#v1-41-0-list-evidence"
            ><span class="bcn-help-bar__panel-item-title">Evidence for a whole action list</span
            ><span class="bcn-help-bar__panel-item-text"
              >Save one set of evidence to every action on a component.</span
            ></a
          >
        </li>
      </ul>
      <div class="bcn-help-bar__panel-prev">
        <p class="bcn-help-bar__panel-earlier">Earlier</p>
        <ul class="bcn-help-bar__panel-prev-list">
          <li>
            <a
              class="bcn-help-bar__panel-prev-link"
              href="/beacon-design/prototypes/release-notes#v1-40-0"
              ><span class="bcn-help-bar__pill bcn-help-bar__pill--sm">1.40.0</span
              ><span class="bcn-help-bar__panel-prev-text"
                >Component dashboards&nbsp;· Evidence upload in the evidence drawer</span
              ></a
            >
          </li>
          <li>
            <a
              class="bcn-help-bar__panel-prev-link"
              href="/beacon-design/prototypes/release-notes#v1-39-0"
              ><span class="bcn-help-bar__pill bcn-help-bar__pill--sm">1.39.0</span
              ><span class="bcn-help-bar__panel-prev-text"
                >Project dashboard homepage&nbsp;· Global search ranking and results</span
              ></a
            >
          </li>
        </ul>
      </div>
      <a class="bcn-help-bar__panel-all" href="/beacon-design/prototypes/release-notes"
        >All release notes
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
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path></svg></span
      ></a></div
  ></esa-popover>
</div>
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-aldo-mark[data-variant="rings"] {
  width: var(--bcn-aldo-mark-size, 24px);
  height: var(--bcn-aldo-mark-size, 24px);
  background: 0 0;
  border-radius: 0;
}
.bcn-aldo-mark__from {
  stop-color: var(--bcn-aldo-ring-from, var(--color-teal-6));
}
.bcn-aldo-mark__to {
  stop-color: var(--bcn-aldo-ring-to, var(--color-teal-9));
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 12s linear infinite bcn-aldo-spin;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-mark[data-animated],
  .bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
    animation: none;
  }
}
.bcn-help-bar {
  z-index: 1000;
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-100) var(--spacing-150);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  border-radius: var(--radius-400, 14px);
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  box-shadow: 0 8px 24px #00000047;
}
@supports not (backdrop-filter: blur(1px)) {
  .bcn-help-bar {
    background: var(--bcn-helpbar-bg-solid);
  }
}
@media (prefers-reduced-transparency: reduce) {
  .bcn-help-bar {
    background: var(--bcn-helpbar-bg-solid);
    backdrop-filter: none;
  }
}
.bcn-help-bar__guidance {
  border-radius: var(--radius-200, 8px);
  width: 40px;
  height: 40px;
  color: var(--bcn-helpbar-fg);
  font-family: inherit;
  font-size: var(--font-size-200, 0.9375rem);
  font-weight: var(--typography-font-weight-medium);
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  line-height: 1;
  display: inline-flex;
}
.bcn-help-bar__guidance:hover {
  background: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar__guidance {
  --bcn-aldo-mark-size: 20px;
  --bcn-aldo-ring-from: var(--color-teal-7);
  --bcn-aldo-ring-to: var(--bcn-aldo);
}
.bcn-help-bar__guidance[aria-pressed="true"] {
  background: var(--bcn-helpbar-hover-bg);
  box-shadow: inset 0 0 0 1px var(--bcn-aldo);
}
.bcn-help-bar__guidance:focus-visible {
  outline: 2px solid var(--bcn-helpbar-fg);
  outline-offset: 2px;
}
.bcn-help-bar__tooltip,
.bcn-help-bar__popover {
  display: inline-flex;
}
.bcn-help-bar__popover {
  --_popover-bg: var(--color-background-default);
  --_popover-radius: 12px;
  --_popover-padding: 20px 24px;
}
.bcn-help-bar__tooltip {
  --color-background-default-knockout: var(--bcn-helpbar-bg-solid);
  --color-content-default-knockout: var(--bcn-helpbar-fg);
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-help-bar__whatsnew {
  display: inline-flex;
}
.bcn-help-bar__panel {
  width: min(400px, var(--_room, 400px));
  max-block-size: var(--_room-h, none);
  color: var(--color-content-default);
  white-space: normal;
  text-align: start;
  flex-direction: column;
  display: flex;
  overflow-y: auto;
}
:where(.bcn-help-bar__panel) p {
  margin: 0;
}
.bcn-help-bar__panel-release {
  align-items: center;
  gap: 10px;
  display: flex;
}
.bcn-help-bar__pill {
  padding: 3px var(--spacing-200);
  background: color-mix(in srgb, var(--color-content-brand) 10%, transparent);
  color: var(--color-content-brand);
  font-size: 13px;
  line-height: 18px;
  font-weight: var(--typography-font-weight-medium);
  font-variant-numeric: tabular-nums;
  border-radius: 7px;
  flex: none;
}
.bcn-help-bar__pill--sm {
  border-radius: 6px;
  padding: 2px 6px;
  font-size: 12px;
  line-height: 16px;
}
.bcn-help-bar__panel-date,
.bcn-help-bar__panel-earlier {
  color: var(--color-content-default-tertiary);
  font-size: 13px;
  line-height: 18px;
}
.bcn-help-bar__panel-title,
.bcn-help-bar__panel-item-title {
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default);
}
.bcn-help-bar__panel-title {
  margin: 12px 0 4px;
  font-size: 24px;
  line-height: 30px;
}
.bcn-help-bar__panel-list {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-help-bar__panel-list li + li {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
.bcn-help-bar__panel-link {
  gap: var(--spacing-050);
  color: inherit;
  flex-direction: column;
  padding-block: 14px;
  text-decoration: none;
  display: flex;
}
.bcn-help-bar__panel-item-title {
  transition: color var(--transition-fast, 0.15s ease);
  font-size: 17px;
  line-height: 23px;
}
.bcn-help-bar__panel-link:hover .bcn-help-bar__panel-item-title {
  color: var(--color-content-brand);
}
.bcn-help-bar__panel-item-text {
  color: var(--color-content-default-tertiary);
  font-size: 14px;
  line-height: 21px;
}
.bcn-help-bar__panel-link:focus-visible,
.bcn-help-bar__panel-prev-link:focus-visible,
.bcn-help-bar__panel-all:focus-visible {
  outline: 2px solid var(--color-content-link);
  outline-offset: 1px;
  border-radius: var(--radius-md);
}
.bcn-help-bar__panel-prev {
  border-block-start: 1px solid var(--color-border-default-subtle);
}
.bcn-help-bar__panel-earlier {
  font-weight: var(--typography-font-weight-medium);
  padding-block: 14px 6px;
}
.bcn-help-bar__panel-prev-list {
  margin: 0 calc(var(--spacing-200) * -1) 14px;
  padding: 0;
  list-style: none;
}
.bcn-help-bar__panel-prev-link {
  padding: 6px var(--spacing-200);
  border-radius: var(--radius-lg);
  color: var(--color-content-default-secondary);
  transition:
    background var(--transition-fast, 0.15s ease),
    color var(--transition-fast, 0.15s ease);
  align-items: flex-start;
  gap: 10px;
  text-decoration: none;
  display: flex;
}
.bcn-help-bar__panel-prev-link .bcn-help-bar__pill--sm {
  margin-block-start: 2px;
}
.bcn-help-bar__panel-prev-link:hover {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-brand);
}
.bcn-help-bar__panel-prev-text {
  font-size: 14px;
  line-height: 20px;
}
.bcn-help-bar__panel-all {
  align-items: center;
  gap: var(--spacing-100);
  border-block-start: 1px solid var(--color-border-default-subtle);
  inline-size: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-brand);
  align-self: flex-start;
  padding-block-start: 14px;
  text-decoration: none;
  display: inline-flex;
}
.bcn-help-bar__panel-all:hover {
  text-decoration: underline;
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
.esa-button__label {
  white-space: nowrap;
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
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
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
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
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `#17191bc7` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `#ffffff1f` | component |
| `--bcn-helpbar-fg` | `#ffffffeb` | component |
| `--bcn-helpbar-fg-muted` | `#ffffffb8` | component |
| `--bcn-helpbar-hover-bg` | `#ffffff1a` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-link` | `#005862` | semantic |
| `--color-teal-6` | `#a1ded2` | primitive |
| `--color-teal-7` | `#83cdc1` | primitive |
| `--color-teal-9` | `#12a594` | primitive |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-lg` | `.75rem` | semantic |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
