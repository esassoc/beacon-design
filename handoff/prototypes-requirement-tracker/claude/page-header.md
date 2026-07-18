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
      <span class="esa-icon esa-icon--md" aria-hidden="true">
        <svg
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
    <span class="esa-pill esa-pill--default esa-pill--sm">
      <span class="esa-pill__label">Project Tracking</span>
    </span>
  </div>
</section>
```

## Styles
```css
.page-layout__title h1 .esa-icon {
  color: var(--color-secondary) !important;
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
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
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
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
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
  gap: var(--spacing-200);
  min-width: 0;
}
.page-layout__title h1 {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  font-family: var(--font-decorative);
  font-weight: var(--font-weight-bold);
  font-size: var(--type-size-500);
  margin: 0;
  color: var(--bcn-gray-1000);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-pill {
  --_pill-bg: var(--pill-bg, var(--color-surface-sunken, #efefef));
  --_pill-text: var(--pill-text-color, var(--color-text-primary, #171717));
  --_pill-border: var(--pill-border-color, var(--color-border-light, #efefef));
  --_pill-height: var(--pill-height-md, 28px);
  --_pill-font-size: 13px;
  --_pill-padding-x: var(--spacing-200, 0.5rem);
  --_pill-gap: var(--spacing-100, 0.25rem);
  display: inline-flex;
  align-items: center;
  gap: var(--_pill-gap);
  height: var(--_pill-height);
  padding-inline: var(--_pill-padding-x);
  border: 1px solid var(--_pill-border);
  border-radius: var(--pill-radius, var(--radius-full, 9999px));
  background: var(--_pill-bg);
  color: var(--_pill-text);
  font-size: var(--_pill-font-size);
  line-height: 1;
  white-space: nowrap;
  box-sizing: border-box;
}
.esa-pill--sm {
  --_pill-height: var(--pill-height-sm, 22px);
  --_pill-font-size: 11px;
  --_pill-padding-x: var(--spacing-150, 0.375rem);
}
.esa-pill__label {
  font-weight: 500;
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-link {
  --_il-font: var(--icon-link-font-size-md, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--icon-link-gap, var(--spacing-150, 6px));
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--_il-font);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.esa-icon-link--sm {
  --_il-font: var(--icon-link-font-size-sm, 0.875rem);
}
.esa-icon-link--medium {
  font-weight: var(--font-weight-medium, 500);
}
.esa-icon-link__label {
  display: inline-block;
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-link-font-size-md`: 1rem _(component)_
- `--icon-link-font-size-sm`: .875rem _(component)_
- `--icon-link-gap`: .375rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--pill-bg`: #efefef _(component)_
- `--pill-border-color`: #efefef _(component)_
- `--pill-height-md`: 28px _(component)_
- `--pill-height-sm`: 22px _(component)_
- `--pill-radius`: .25rem _(component)_
- `--pill-text-color`: #3d3d3d _(component)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-500`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(primitive)_
