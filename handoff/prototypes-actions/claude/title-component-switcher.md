# Title + component switcher

Actions · source prototype: https://esassoc.github.io/beacon-design/prototypes/actions/

![Title + component switcher, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/title-component-switcher.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/title-component-switcher.phone.png

The H1 "Actions" (radar glyph in brand green) with the component switcher beside it, and Configure board, a small outline button, at the right of the title row.

## Key decisions

- The switcher shows each component's identity seal: a coloured circle, white glyph and white ring, Kim's component-identity-mark from prod (seal variant, fill weight). Marks come from the same assignment the Component Dashboard grid uses, so a component looks the same on both pages.
- The trigger seal is 20px beside a 14px / 550 name. The open list is a listbox of rows: 24px seal, name, and a check on the selected row.
- The choice is one session-wide value (localStorage beacon.activeComponent), shared with Obligations, Monitoring and Reporting.
- Configure board sits in the title row, not above the board, so the filter bar can own the pivots.

## Gotchas

- esa-popover centres its bottom position and has no start alignment yet; the prototype shims the panel to left-align under the trigger. Use a start-aligned overlay in prod.
- esa-popover's anchor wraps its own panel, so a click on an option bubbles back as a trigger click and reopens the list. Stop the option click at the panel.

## Done when

- Picking a component closes the list, swaps the trigger seal and name, and re-scopes the board, table and timeline.
- Arrow keys, Home and End walk the list; a keyboard open focuses the selected row, a pointer open does not.

## Components

- `bcn-component-picker` (spoke) · `src/components/bcn/BcnComponentPicker.astro`
- `bcn-entity-logo` (spoke) · `src/components/bcn/BcnComponentPicker.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-popover` (hub) · `packages/ecology/src/components/esa-popover.ts`

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

_22 repeated elements are collapsed in the markup below; the comments say where._

```html
<section class="page-layout__title" style="--page-title-icon-color: var(--color-content-brand)">
  <div class="page-layout__title-main">
    <h1>
      <span class="esa-icon esa-icon--lg" aria-hidden="true"
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
          <path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path>
          <path d="M4 6h.01"></path>
          <!-- …and 4 more like this (<path>) -->
          <circle cx="12" cy="12" r="2"></circle>
          <path d="m13.41 10.59 5.66-5.66"></path></svg></span
      >Actions
    </h1>
    <span
      ><span
        class="bcn-component-picker"
        data-component-picker=""
        data-components='["Southern Forebay &amp; Pumping Plant","Intake B — North Delta","Twin Cities Complex","Intake C — North Delta","Bouldin Island Geotechnical Exploration","Bethany Reservoir Aqueduct","Byron Tract Forebay"]'
        data-storage-key="beacon.activeComponent"
        data-default="Southern Forebay &amp; Pumping Plant"
        ><esa-popover
          class="bcn-component-picker__pop"
          position="bottom"
          has-arrow="false"
          label="Components"
          data-component-picker-pop="true"
          appearance="default"
          ><button
            type="button"
            class="bcn-component-picker__trigger bcn-component-picker__trigger--mark"
            aria-haspopup="dialog"
            aria-label="Switch component"
            aria-expanded="false"
          >
            <span
              class="bcn-component-picker__tmark"
              data-component-picker-tmark="Southern Forebay &amp; Pumping Plant"
              ><span
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
              ></span
            ><span
              class="bcn-component-picker__tmark"
              data-component-picker-tmark="Intake B — North Delta"
              hidden=""
              ><span
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
                    <circle cx="12" cy="10" r="3"></circle></svg></span></span></span
            ><!-- …and 5 more like this (<span class="bcn-component-picker__tmark">) --><span
              class="bcn-component-picker__label"
              data-component-picker-label=""
              >Southern Forebay &amp; Pumping Plant</span
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
                <path d="m6 9 6 6 6-6"></path></svg
            ></span>
          </button>
          <div
            slot="content"
            class="bcn-component-picker__panel"
            role="listbox"
            aria-label="Components"
          >
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
              ><span class="bcn-component-picker__optname"
                >Southern Forebay &amp; Pumping Plant</span
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
          </div></esa-popover
        ></span
      ><!-- script type="module" removed (0 bytes) --></span
    >
  </div>
  <div class="page-layout__utilities">
    <span data-aboard-configure=""
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
        ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 … [565 characters]"
              ></path>
              <circle cx="12" cy="12" r="3"></circle></svg></span
          ><span class="esa-button__label">Configure board</span>
        </button></span
      ></span
    >
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
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
.esa-button__label {
  white-space: nowrap;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.bcn-component-picker {
  align-self: center;
  align-items: center;
  min-width: 0;
  display: inline-flex;
}
.bcn-component-picker esa-dropdown-menu {
  --font-size-200: 0.875rem;
  align-items: center;
  display: inline-flex;
}
.bcn-component-picker__trigger {
  align-items: center;
  gap: var(--spacing-150);
  min-height: 28px;
  padding: var(--spacing-100) var(--spacing-200);
  border-radius: var(--radius-200);
  font: inherit;
  font-size: 0.875rem;
  line-height: 1.3;
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  cursor: pointer;
  white-space: nowrap;
  background: 0 0;
  border: 0;
  margin: 0;
  display: inline-flex;
}
.bcn-component-picker__trigger:hover {
  background: var(--color-background-elevation-sunken, var(--color-background-default));
  color: var(--color-content-default);
}
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-component-picker__pop {
  --_popover-padding: var(--spacing-150);
  display: inline-flex;
}
.bcn-component-picker__trigger--mark {
  gap: var(--spacing-200);
  padding: var(--spacing-100) var(--spacing-200) var(--spacing-100) var(--spacing-100);
  color: var(--color-content-default);
  font-size: 0.875rem;
  font-weight: 550;
}
.bcn-component-picker__tmark {
  display: inline-flex;
}
.bcn-component-picker__tmark .bcn-entity-logo {
  --icon-size-xs: 12px;
  width: 20px;
  height: 20px;
}
.bcn-component-picker__tmark[hidden] {
  display: none;
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
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
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
.page-layout__title {
  border-bottom: 1px solid var(--bcn-gray-200);
  padding: var(--spacing-500) 0;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.page-layout__title-main {
  align-items: center;
  gap: var(--spacing-400);
  min-width: 0;
  display: flex;
}
.page-layout__title h1 {
  align-items: center;
  gap: var(--spacing-300);
  font-family: var(--font-decorative);
  font-weight: var(--typography-font-weight-bold);
  font-size: var(--font-size-500);
  color: var(--bcn-gray-1000);
  margin: 0;
  display: flex;
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.page-layout__utilities {
  gap: var(--spacing-200);
  display: flex;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-200` | `#dcdcdc` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-seal-ring-color` | `#fcfcfc` | component |
| `--bcn-seal-ring-width` | `3px` | component |
| `--bcn-seal-shadow` | `0 2px 12px 0 #00000014` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-500` | `clamp(1.125rem, .98rem + .72vw, 1.5rem)` | primitive |
| `--icon-size-lg` | `24px` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--page-title-icon-color` | `#005862` | component |
| `--radius-200` | `.5rem` | primitive |
| `--radius-400` | `.75rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
