# Page header

The project title row: an H1 reading the project name ("3600 Alameda") with a green radar (Tracking) glyph, immediately followed by a neutral "Project Tracking" badge that names the workspace. The badge sits directly right of the H1, not in the far-right utilities slot.

## Key decisions
- The H1 is the PROJECT, not the page — the workspace name ("Project Tracking") is demoted to a badge beside it, so the user always sees what project they are in first.
- The radar icon is the Tracking section glyph, tinted brand green (--color-secondary / teal-500) to tie the title to the active nav section.
- The badge is neutral (gray-100 bg, gray-200 border, 4px radius) — it labels, it does not signal status, so it must not read as a colored state chip.

## Gotchas
- PageLayout renders the icon outside the page component's style scope, so the green tint is applied with a global override — re-implementing in Angular, color the icon on the title component directly.
- Keep the badge directly adjacent to the H1 (same flex group); do not push it to the opposite end of the title row.

## Done when
- H1 shows the project name with a green radar glyph; "Project Tracking" badge sits immediately to its right and reads as a neutral label.

## Markup
```html
<section class="page-layout__title">
  <div class="page-layout__title-main">
    <h1>
      <span class="esa-icon esa-icon--lg" aria-hidden="true">
        <svg
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
          <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
          <path d="M4 6h.01"></path>
          <path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path>
          <path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path>
          <path d="M12 18h.01"></path>
          <path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path>
          <circle cx="12" cy="12" r="2"></circle>
          <path d="m13.41 10.59 5.66-5.66"></path>
        </svg>
      </span>
      3600 Alameda
    </h1>
    <span class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs">
      <span class="esa-pill__label">Project Tracking</span>
    </span>
    <script type="module">
      document.addEventListener(
        "click",
        (t) => {
          const s = t.target.closest?.("[data-esa-pill-remove]");
          if (!s) return;
          t.stopPropagation();
          const e = s.closest(".esa-pill");
          e && (e.dispatchEvent(new CustomEvent("removed", { bubbles: !0 })), e.remove());
        },
        !0,
      );
    </script>
  </div>
</section>
```

## Styles
```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
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
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s ease;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-ev-staging__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.bcn-ev-card__count .esa-pill {
  --pill-bg: transparent;
  --pill-border-color: var(--color-border);
  --pill-text-color: var(--color-text-secondary);
}
.bcn-ev-card__files .esa-pill {
  max-width: 100%;
}
.bcn-ev-card__files .esa-pill__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.bcn-ev-targets__title .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-disc__head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-evidence-card__lead .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-tertiary);
  transition: transform 0.15s ease;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.page-layout__title h1 .esa-icon {
  color: var(--color-secondary) !important;
}
.bcn-list-link .esa-icon {
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.esa-pill {
  --_pill-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_pill-text: var(--color-content-default, #202020);
  --_pill-border: var(--color-border-default-subtle, #d9d9d9);
  --_pill-padding-y: var(--spacing-150, 0.375rem);
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  display: inline-flex;
  align-items: center;
  gap: var(--_pill-gap);
  padding-block: var(--_pill-padding-y);
  padding-inline: var(--_pill-padding-x);
  border: var(--border-width-default, 1px) solid var(--_pill-border);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-pill--xs {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-100, 0.25rem);
}
.esa-pill--sm {
  --_pill-padding-y: var(--spacing-100, 0.25rem);
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill--lg {
  --_pill-padding-y: var(--spacing-200, 0.5rem);
  --_pill-padding-x: var(--spacing-300, 0.75rem);
}
.esa-pill--round {
  border-radius: var(--radius-pill, 9999px);
}
.esa-pill--primary {
  --_pill-bg: var(--color-background-brand-subtle, var(--color-grass-2));
  --_pill-text: var(--color-content-brand, var(--color-grass-11));
  --_pill-border: var(--color-border-brand, var(--color-grass-6));
}
.esa-pill--info {
  --_pill-bg: var(--color-background-utility-info-subtle, var(--color-blue-2));
  --_pill-text: var(--color-content-utility-info, #0d74ce);
  --_pill-border: var(--color-border-utility-info, var(--color-blue-6));
}
.esa-pill--success {
  --_pill-bg: var(--color-background-utility-success-subtle, var(--color-green-2));
  --_pill-text: var(--color-content-utility-success, #218358);
  --_pill-border: var(--color-border-utility-success, var(--color-green-6));
}
.esa-pill--warning {
  --_pill-bg: var(--color-background-utility-warning-subtle, var(--color-yellow-2));
  --_pill-text: var(--color-content-utility-warning, #ab6400);
  --_pill-border: var(--color-border-utility-warning, var(--color-yellow-6));
}
.esa-pill--danger {
  --_pill-bg: var(--color-background-utility-danger-subtle, var(--color-red-2));
  --_pill-text: var(--color-content-utility-danger, #ce2c31);
  --_pill-border: var(--color-border-utility-danger, var(--color-red-6));
}
.esa-pill[data-category] {
  --_pill-bg: var(--category-2, var(--color-background-elevation-sunken, #f0f0f0));
  --_pill-border: var(--category-6, var(--color-border-default-subtle, #d9d9d9));
  --_pill-text: var(--category-11, var(--color-content-default, #202020));
}
.esa-pill__icon {
  flex-shrink: 0;
  display: inline-flex;
}
.esa-pill__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  border-radius: var(--radius-pill, 9999px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  opacity: 0.6;
  transition:
    opacity var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
}
.esa-pill__remove:hover {
  opacity: 1;
  background: var(--color-background-overlay-heavy-hover, rgba(0, 0, 0, 0.1));
}
.esa-pill__remove:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
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
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-content-default-secondary, #646464);
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.bcn-reqref__ext .esa-icon {
  --_icon-size: 12px;
  opacity: 0.75;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title {
  border-bottom: 1px solid var(--bcn-gray-200);
  padding: var(--spacing-500) 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
.page-layout__title-main {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
}
.page-layout__title h1 {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  font-family: var(--font-decorative);
  font-weight: var(--font-weight-bold);
  font-size: var(--type-size-500);
  margin: 0;
  color: var(--bcn-gray-1000);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--color-background-brand-subtle`: #effefb _(semantic)_
- `--color-background-elevation-sunken`: #f0f0f0 _(semantic)_
- `--color-background-overlay-heavy-hover`: rgba(0, 0, 0, .1) _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-blue-2`: #f4faff _(primitive)_
- `--color-blue-6`: #acd8fc _(primitive)_
- `--color-border`: #dcdcdc _(component)_
- `--color-border-brand`: #b2ddb5 _(semantic)_
- `--color-border-default-subtle`: #d9d9d9 _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #202020 _(semantic)_
- `--color-content-default-secondary`: #646464 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-danger`: #ce2c31 _(component)_
- `--color-grass-11`: #2a7e3b _(primitive)_
- `--color-grass-2`: #f5fbf5 _(primitive)_
- `--color-grass-6`: #b2ddb5 _(primitive)_
- `--color-green-2`: #f4fbf6 _(primitive)_
- `--color-green-6`: #adddc0 _(primitive)_
- `--color-primary`: #005862 _(component)_
- `--color-red-2`: #fff7f7 _(primitive)_
- `--color-red-6`: #fdbdbe _(primitive)_
- `--color-secondary`: #00918b _(component)_
- `--color-text-secondary`: #525252 _(component)_
- `--color-text-tertiary`: #656565 _(component)_
- `--color-yellow-2`: #fefbe9 _(primitive)_
- `--color-yellow-6`: #f3d673 _(primitive)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-weight-bold`: 650 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--type-size-500`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(component)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
