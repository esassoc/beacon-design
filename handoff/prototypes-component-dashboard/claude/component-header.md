# Component header

The component's identity band: a full-width white bar carrying its mark, its name as the page's sole H1, the parent project as a link back up the tree, its status and dates, and the Tracking / Monitoring / Reporting pulse strip that makes the box you clicked on the project dashboard and the page you landed on tell the same story.

## Key decisions
- NO COVER PHOTO — a deliberate divergence from the project header, not an omission. A component gets a mark (glyph x color) vertically centred beside its name. The reasoning is the parking-garage floor: a visual landmark that says which one you are on. Asking a user to choose a photo for a launch shaft is a question with no good answer, so the field stays empty and every component looks identical.
- The mark persists three small columns — glyph key, color key, style (fill/outline) — from CLOSED sets of 20 and 20. It never stores a hex, so the ramp stays themeable and dark-mode safe. An uploaded image supersedes the pair without clearing it, so removing the image restores the old mark.
- A NEW COMPONENT IS BORN WITH A MARK, and with one no sibling in the project already wears. Differentiation is the whole point of the mark, so a blank default defeats it (nobody fills the field) and a colliding default defeats it on the first collision. Assign at creation from the pairs still free in that project, PERSIST the assignment, and let the user change it afterwards. The prototype models this with `nextUnusedMark(used)` in src/data/entity-marks.ts: a diagonal (Latin-square) walk over the two axes, so consecutive components differ in BOTH glyph and colour — walking one axis at a time would give a project twenty red components before it used a second colour. 20 x 20 = 400 pairs before anything must repeat.
- PERSIST it, do not derive it. The prototype recomputes marks from the component name because its fixtures predate the field; that is fine for a fixture and wrong for the product. A mark that changes when a sibling is renamed, or when a component is added ahead of it in the list, is not a landmark.
- The component name is the page H1 and PageLayout's own title row is suppressed, exactly as on the project header. The H1 reads as the entity, not the page.
- Sibling wayfinding (prev / next / all components) lives on the header, because landing three levels down with no way sideways is a dead end.
- The star uses the per-user starring model from BCN-1576 — the same model, not a second one. The two epics were explicitly required to agree.

## Gotchas
- esa-icon-button has a CLOSED prop set (icon, label, href, size, type) and silently drops unknown attributes — unlike esa-button, which forwards the rest. data-* and aria-pressed must ride a wrapper span, and the click listener with them. That is why the star and logo-edit hooks sit on wrappers.
- Component status deliberately does NOT reuse the pulse palette. The T-M-R dots sit inches away where amber means "attention", so mapping Active to the amber in-progress token would read as a warning. Active maps to the primary token instead.
- Hover-revealed controls need a keyboard path: the logo edit affordance is a real button and also appears on :focus-visible. Do not implement it as hover-only CSS. Same gotcha the project header carries.
- The band renders into PageLayout's `bleed` slot — a sanctioned per-page anomaly, not a layout primitive to generalize.

## Done when
- The mark, name, parent-project link, status, dates and three pulses render; the logo edit control is reachable by keyboard and opens the picker; the star reflects and toggles per-user state; prev/next/all-components navigate.

## Markup
```html
<section class="bcn-chd" aria-label="Bouldin Island Launch Shaft — component home">
  <!-- WAYFINDING MOVED OUT (review, 2026-08-13). Both the way back up the tree and
       the prev/next walk now live in the breadcrumb bar above this band: the trail
       carries the hierarchy (project › All Components › this one) and bcn-sibling-nav
       sits at its end, which is where prod puts record navigation — breadcrumbs.component
       imports <commitment-navigation>. Keeping a second copy here would give one
       action two affordances on one screen. -->
  <div class="bcn-chd__id">
    <!-- The mark IS the cover here. Editing it stays on the page (product
         meeting, 2026-08-04: "mouse over that header area … a little change
         logo just to keep people in one spot"). -->
    <span class="bcn-chd__markwrap">
      <span
        class="bcn-entity-logo"
        data-size="xl"
        data-variant="seal"
        data-shape="circle"
        data-style="fill"
        data-glyph="anchor"
        data-color="sky"
        style="--_c: var(--bcn-mark-sky)"
      >
        <span
          class="esa-icon esa-icon--xl"
          role="img"
          aria-label="Bouldin Island Launch Shaft mark"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path d="M12 22V8"></path>
            <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
            <circle cx="12" cy="5" r="3"></circle>
          </svg>
        </span>
      </span>
      <!-- The hook lives on the WRAPPER: esa-icon-button has a closed prop set
           and drops unknown attributes, so a data-* on the lego goes nowhere.
           The click bubbles out of the button to this span. -->
      <span class="bcn-chd__logo-edit" data-logo-edit="">
        <button
          class="esa-icon-button esa-icon-button--sm"
          type="button"
          aria-label="Change component logo"
          title="Change component logo"
        >
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
            <svg
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
              <path d="m15 5 4 4"></path>
            </svg>
          </span>
        </button>
      </span>
    </span>
    <div class="bcn-chd__ident">
      <div class="bcn-chd__title-row">
        <h1 class="bcn-chd__name type-page-title">Bouldin Island Launch Shaft</h1>
        <span
          class="bcn-status-chip"
          data-status="active"
          style="--_chip: var(--st-active, var(--color-primary))"
        >
          <span class="bcn-status-chip__dot"></span>
          <span class="bcn-status-chip__label">Active</span>
        </span>
        <span
          class="bcn-chd__star"
          data-star-toggle=""
          data-pressed="true"
          data-name="Bouldin Island Launch Shaft"
        >
          <button
            class="esa-icon-button esa-icon-button--md"
            type="button"
            aria-label="Unstar Bouldin Island Launch Shaft"
            title="Unstar Bouldin Island Launch Shaft"
            aria-pressed="true"
          >
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
                <path
                  d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                ></path>
              </svg>
            </span>
          </button>
        </span>
      </div>
    </div>
  </div>
  <!-- The T·M·R pulse strip that sat here was cut at review (2026-08-13). The
       Tracking / Monitoring / Reporting cards are the next thing on the page and
       carry the same figures with more precision — the strip restated the table
       below it, which is exactly the kind of text-about-the-page the house rules
       ban. The pulses still earn their place on the project dashboard's component
       boxes, where the cards they summarize are NOT on screen. -->
</section>
```

## Styles
```css
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
.bcn-mod__link .esa-icon {
  color: var(--color-text-muted);
}
.bcn-entity-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  line-height: 0;
  background: color-mix(in srgb, var(--_c) 12%, transparent);
  color: var(--_c);
  border: 1px solid color-mix(in srgb, var(--_c) 30%, transparent);
}
.bcn-entity-logo[data-style="fill"] {
  background: var(--_c);
  color: var(--color-text-inverse);
  border-color: transparent;
}
.bcn-entity-logo[data-style="image"] {
  background: var(--color-surface-sunken);
  border-color: var(--color-border-light);
}
.bcn-entity-logo__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.bcn-entity-logo[data-size="sm"] {
  width: 24px;
  height: 24px;
}
.bcn-entity-logo[data-size="md"] {
  width: 32px;
  height: 32px;
  --icon-size-sm: 18px;
}
.bcn-entity-logo[data-size="lg"] {
  width: 48px;
  height: 48px;
}
.bcn-entity-logo[data-size="xl"] {
  width: 72px;
  height: 72px;
  --icon-size-xl: 36px;
}
.bcn-entity-logo[data-size="2xl"] {
  width: 92px;
  height: 92px;
  --icon-size-xl: 44px;
}
.bcn-entity-logo[data-shape="rounded"][data-size="sm"],
.bcn-entity-logo[data-shape="rounded"][data-size="md"] {
  border-radius: var(--radius-200);
}
.bcn-entity-logo[data-shape="rounded"][data-size="lg"],
.bcn-entity-logo[data-shape="rounded"][data-size="xl"],
.bcn-entity-logo[data-shape="rounded"][data-size="2xl"] {
  border-radius: var(--radius-400);
}
.bcn-entity-logo[data-shape="circle"] {
  border-radius: var(--radius-full);
}
.bcn-entity-logo[data-variant="seal"] {
  border: var(--bcn-seal-ring-width) solid var(--bcn-seal-ring-color);
  box-shadow: var(--bcn-seal-shadow);
  box-sizing: content-box;
}
.bcn-chd {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-600);
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}
.bcn-chd__id {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
}
.bcn-chd__markwrap {
  position: relative;
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-chd__logo-edit {
  position: absolute;
  right: calc(var(--spacing-150) * -1);
  bottom: calc(var(--spacing-150) * -1);
  display: inline-flex;
  border-radius: var(--radius-full);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  opacity: 0;
  transition: opacity 0.15s ease;
}
.bcn-chd__markwrap:hover .bcn-chd__logo-edit,
.bcn-chd__markwrap:focus-within .bcn-chd__logo-edit {
  opacity: 1;
}
.bcn-chd__ident {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100);
  min-width: 0;
  flex: 1;
}
.bcn-chd__title-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  min-width: 0;
}
.bcn-chd__name {
  margin: 0;
  color: var(--color-text-primary);
}
.bcn-chd__desc {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-secondary);
}
.bcn-chd__facts {
  display: flex;
  align-items: center;
  gap: var(--spacing-150);
  flex-wrap: wrap;
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-chd__fact-value {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}
.bcn-chd__dot-sep {
  color: var(--color-border-strong);
}
.bcn-chd__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  flex-shrink: 0;
  margin-left: auto;
}
.bcn-chd__star button[aria-pressed="true"] {
  color: var(--color-warning);
}
.bcn-chd__star button[aria-pressed="true"] svg {
  fill: currentColor;
}
.bcn-sw__head .esa-icon {
  color: var(--color-text-secondary);
}
.type-page-title {
  font-family: var(--font-display, var(--font-sans));
  font-size: var(--type-size-600);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-tight);
}
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, var(--icon-size-large, 24px));
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
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
.esa-icon-button--xs {
  --_ib-size: var(--form-height-xs, 28px);
}
.esa-icon-button--sm {
  --_ib-size: var(--form-height-sm, 32px);
}
.esa-icon-button--lg {
  --_ib-size: var(--form-height-lg, 48px);
}
.esa-icon-button:hover {
  background: var(--_ib-bg-hover);
}
.esa-icon-button:focus-visible {
  outline: var(--focus-ring-width) solid currentColor;
  outline-offset: var(--focus-ring-offset, 2px);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: rgba(255, 255, 255, .92) _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--bcn-seal-ring-color`: #fcfcfc _(component)_
- `--bcn-seal-ring-width`: 3px _(component)_
- `--bcn-seal-shadow`: 0 2px 12px 0 rgba(0, 0, 0, .08) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--focus-ring-offset`: 2px _(primitive)_
- `--focus-ring-width`: 2px _(primitive)_
- `--font-display`: "DM Sans", sans-serif _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-lg`: 44px _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-height-xs`: 24px _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-large`: 24px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-400`: .75rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-600`: clamp(1.375rem, 1.2rem + .88vw, 1.875rem) _(primitive)_
