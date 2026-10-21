# Component list

Actions · source prototype: https://esassoc.github.io/beacon-design/prototypes/actions/

![Component list, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/component-list.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/component-list.phone.png

The open switcher: every component on the project, each with its seal, the current one tinted and checked.

## Done when

- The list opens left-aligned under the trigger and scrolls past about 520px.

## Components

- `bcn-component-picker` (spoke) · `src/components/bcn/BcnComponentPicker.astro`
- `bcn-entity-logo` (spoke) · `src/components/bcn/BcnComponentPicker.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Data

- Fixture: `src/data/action-tracking.ts`
- Client store: `src/lib/action-board.ts`
- category is prod's ActionImplementationStatusDtoEnum.

| Field | Meaning |
|---|---|
| `id` | ActionImplementationID, `<actionId>|<componentId>` |
| `name` | Action name |
| `type` | RequirementType; the Type tabs group these into workflows |
| `codes` | ClientCommitmentIDs, in code order (the card's commitment badges) |
| `sequence` | SequenceNumber, the occurrence for recurring and as-needed work |
| `dueDate` | ISO, or null when unscheduled (prod "Not set") |
| `completedDate` | ISO, Completed only |
| `columnId` | The workflow column the card sits in |
| `category` | The status backbone the column maps to |
| `notApplicable` | IsNotApplicable; the N/A switch hides these |
| `evidence` | Evidence count on the card |
| `comments` | Comment count; hidden at zero |

`category`: `NotStarted` · `InProgress` · `Completed`

`frequency`: `Onetime` · `Recurring` · `AsNeeded` · `Ongoing`

## Markup

_9 repeated elements are collapsed in the markup below; the comments say where._

```html
<div slot="content" class="bcn-component-picker__panel" role="listbox" aria-label="Components">
  <button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Southern Forebay &amp; Pumping Plant"
    aria-selected="true"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="bird"
      data-color="rust"
      style="--_c: var(--bcn-mark-rust)"
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
          <path d="M16 7h.01"></path>
          <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
          <!-- …and 4 more like this (<path>) -->
        </svg></span
      ></span
    ><span class="bcn-component-picker__optname">Southern Forebay &amp; Pumping Plant</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><button
    type="button"
    role="option"
    class="bcn-component-picker__opt"
    data-component-picker-opt="Intake B — North Delta"
    aria-selected="false"
  >
    <span
      class="bcn-entity-logo"
      data-size="sm"
      data-variant="seal"
      data-shape="circle"
      data-style="fill"
      data-glyph="map-pin"
      data-color="emerald"
      style="--_c: var(--bcn-mark-emerald)"
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
          <path
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
          ></path>
          <circle cx="12" cy="10" r="3"></circle></svg></span></span
    ><span class="bcn-component-picker__optname">Intake B — North Delta</span
    ><span class="bcn-component-picker__check"
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
          <path d="M20 6 9 17l-5-5"></path></svg></span
    ></span></button
  ><!-- …and 5 more like this (<button class="bcn-component-picker__opt">) -->
</div>
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
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-component-picker__tmark .bcn-entity-logo {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
}
.bcn-component-picker__panel {
  flex-direction: column;
  gap: 2px;
  max-block-size: min(60vh, 520px);
  min-inline-size: 340px;
  display: flex;
  overflow-y: auto;
}
.bcn-component-picker__opt {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-200) var(--spacing-250) var(--spacing-200) var(--spacing-200);
  border-radius: var(--radius-200);
  font: inherit;
  color: var(--color-content-default);
  text-align: start;
  cursor: pointer;
  background: 0 0;
  border: 0;
  grid-template-columns: auto minmax(0, 1fr) 16px;
  font-size: 0.9375rem;
  font-weight: 500;
  line-height: 1.3;
  display: grid;
}
.bcn-component-picker__opt:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-component-picker__opt:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-component-picker__opt[aria-selected="true"] {
  background: color-mix(in srgb, var(--color-background-brand) 8%, transparent);
  font-weight: 600;
}
.bcn-component-picker__optname {
  white-space: nowrap;
  text-overflow: ellipsis;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-component-picker__check {
  color: var(--color-background-brand);
  visibility: hidden;
  display: inline-flex;
}
.bcn-component-picker__opt[aria-selected="true"] .bcn-component-picker__check {
  visibility: visible;
}
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
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
.bcn-entity-logo {
  background: color-mix(in srgb, var(--_c) 12%, transparent);
  color: var(--_c);
  border: 1px solid color-mix(in srgb, var(--_c) 30%, transparent);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
  overflow: hidden;
}
.bcn-entity-logo[data-style="fill"] {
  background: var(--_c);
  color: var(--color-content-default-knockout);
  border-color: #0000;
}
.bcn-entity-logo[data-style="image"] {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-border-default-subtle);
}
.bcn-entity-logo[data-size="sm"] {
  width: 24px;
  height: 24px;
}
.bcn-entity-logo[data-size="md"] {
  --icon-size-sm: 18px;
  width: 32px;
  height: 32px;
}
.bcn-entity-logo[data-size="lg"] {
  width: 48px;
  height: 48px;
}
.bcn-entity-logo[data-size="xl"] {
  --icon-size-xl: 36px;
  width: 72px;
  height: 72px;
}
.bcn-entity-logo[data-size="2xl"] {
  --icon-size-xl: 44px;
  width: 92px;
  height: 92px;
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
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
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

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-seal-ring-color` | `#fcfcfc` | component |
| `--bcn-seal-ring-width` | `3px` | component |
| `--bcn-seal-shadow` | `0 2px 12px 0 #00000014` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--page-title-icon-color` | `#005862` | component |
| `--radius-200` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
