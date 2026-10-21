# Step header and console

Step 1 — Source Documents · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/

![Step header and console, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/step-header-and-console.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/step-header-and-console.phone.png

One panel: the step's numeral, title and prod's description; under a gray rule, the console for the file in view: a sunken tray across the panel, as steps 2 and 3 carry theirs, with Prev at its left end and Next at its right (a page each, as [ and ] are), and centered between them the transport (Scan or Resume, Pause, Restart), each a neutral key with its icon and name, the page in view of the file's page count as one field (type a page to go to it), and the speed (One at a time, Slow, Fast) in a menu. Nothing beside the console says where the run is: the console's pressed key, the page field and the strip show it. When the run is paused partway, one button sits beside it: Review the N so far, with its one action when it has one (Review the 12 so far). Below, every page of the file in one strip.

## Key decisions

- Each key is live only when it can act, and the run's state reads as a pressed key: Scan before the run, Resume when it is paused or stopped for the check, Pause while it reads, Restart once it has begun. Restart asks first and clears the file's scan and steers.
- Speed is how fast the job dispatches page windows: a real control in prod. Every speed change, pause and resume is recorded as a steer.
- With a source (not a file) selected, the console is dimmed and inert.
- Prev is off on the first page and Next on the last.

## Done when

- At the check after the first three commitments, Resume goes on past it at the speed chosen.
- Type 140 in the page field and press Enter: the page and the scrubber's thumb move to p. 140.
- Fold the Library and Aldo from their headers: each becomes a rail and the page takes the width; a rail opens it again.

## Components

- `bcn-scrub` (spoke) · `src/components/bcn/BcnPageScrubber.astro`
- `bcn-sw3bar` (spoke) · `src/components/bcn/BcnSw3Toolbar.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-button-group` (hub) · `packages/ecology/src/components/esa-button-group.ts`
- `esa-dropdown-menu` (hub) · `packages/ecology/src/components/esa-dropdown-menu.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Markup

_57 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="bcn-sw3bar" data-sw3-toolbar="">
  <div class="bcn-sw3bar__console">
    <span class="bcn-sw3bar__end"
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          title="Previous page ([)"
          data-bar-prev="true"
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
              <path d="m15 18-6-6 6-6"></path></svg></span
          ><span class="esa-button__label">Prev</span>
        </button></span
      ></span
    ><span class="bcn-sw3bar__keys"
      ><esa-button-group class="bcn-sw3bar__transport" aria-label="Scan transport" role="group"
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-ico="scan-text"
            data-tx="play"
            aria-pressed="false"
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
                data-ico="scan-text"
              >
                <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                <!-- …and 5 more like this (<path>) -->
              </svg></span
            ><span class="esa-button__label">Scan</span>
          </button></span
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-ico="pause"
            data-tx="pause"
            disabled=""
            aria-pressed="false"
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
                data-ico="pause"
              >
                <rect x="14" y="4" width="4" height="16" rx="1"></rect>
                <rect x="6" y="4" width="4" height="16" rx="1"></rect></svg></span
            ><span class="esa-button__label">Pause</span>
          </button></span
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-tx="restart"
            disabled=""
            aria-pressed="false"
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
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path></svg></span
            ><span class="esa-button__label">Restart</span>
          </button></span
        ></esa-button-group
      ><esa-text-field
        class="bcn-sw3bar__page"
        size="sm"
        inputmode="numeric"
        aria-label="Page"
        prefix="p."
        suffix="of 1"
        data-bar-page="true"
      ></esa-text-field
      ><esa-dropdown-menu
        position="below-start"
        data-bar-speed="true"
        data-items='[{"label":"One at a time","action":"step"},{"label":"Slow","action":"watch"},{"label":"Fast","action":"run"}]'
        width="auto"
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            data-ico="gauge"
            data-bar-speed-btn="true"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-controls="menu"
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
                data-ico="gauge"
              >
                <path d="m12 14 4-4"></path>
                <path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg></span
            ><span class="esa-button__label">Slow</span
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
            ></span></button></span
      ></esa-dropdown-menu>
      <p class="bcn-sw3bar__status" data-bar-status="" role="status" hidden="">
        <!-- No readout (text and dot removed 2026-10-14): the keys, the page and the strip say
             where the run is. Only the status's action shows here. --><span
          class="bcn-sw3bar__status-act"
          data-bar-status-action=""
        ></span></p></span
    ><span class="bcn-sw3bar__end bcn-sw3bar__end--next"
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          title="Next page (])"
          data-bar-next="true"
        >
          <span class="esa-button__label">Next</span
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
              <path d="m9 18 6-6-6-6"></path></svg
          ></span></button></span
    ></span>
  </div>
  <div class="bcn-sw3bar__scrub">
    <div class="bcn-scrub" data-page-scrubber="" data-size="50" style="--_n: 50; --_view: 30">
      <span data-scrub-prev=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Earlier pages"
            title="Earlier pages"
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
                <path d="m11 17-5-5 5-5"></path>
                <path d="m18 17-5-5 5-5"></path></svg
            ></span></button></span
      ></span>
      <div class="bcn-scrub__strip">
        <div
          class="bcn-scrub__track"
          role="slider"
          tabindex="0"
          aria-label="Pages of the file"
          aria-valuemin="1"
          aria-valuemax="247"
          aria-valuenow="131"
          data-scrub-track=""
          aria-valuetext="Page 131"
        >
          <span class="bcn-scrub__page" data-page="101" data-state="pending"
            ><span class="bcn-scrub__pips" data-sig="101:"></span></span
          ><span class="bcn-scrub__page" data-page="102" data-state="pending"
            ><span class="bcn-scrub__pips" data-sig="102:"></span></span
          ><!-- …and 48 more like this (<span class="bcn-scrub__page">) --><span
            class="bcn-scrub__head"
            data-scrub-head=""
            hidden=""
            aria-hidden="true"
          ></span
          ><span class="bcn-scrub__thumb" data-scrub-thumb="" aria-hidden="true"></span>
        </div>
        <div
          class="bcn-scrub__ticks"
          aria-hidden="true"
          data-scrub-ticks=""
          data-sig="101,110,120,130,140,150"
        >
          <span class="bcn-scrub__tick" style="--_i: 0">101</span
          ><span class="bcn-scrub__tick" style="--_i: 9">110</span
          ><!-- …and 4 more like this (<span class="bcn-scrub__tick">) -->
        </div>
      </div>
      <span data-scrub-next=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Later pages"
            title="Later pages"
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
                <path d="m6 17 5-5-5-5"></path>
                <path d="m13 17 5-5-5-5"></path></svg
            ></span></button></span></span
      ><span class="bcn-scrub__tip" data-scrub-tip="" hidden="" aria-hidden="true"
        ><span class="bcn-scrub__tippage" data-tip-page=""></span
        ><span class="bcn-scrub__tipstate" data-tip-state=""></span
        ><span class="bcn-scrub__tipfinds" data-tip-finds="" hidden=""></span
      ></span>
    </div>
  </div>
</div>
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
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
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
.bcn-scrub {
  --_cell: calc(100% / var(--_n));
  align-items: center;
  column-gap: var(--spacing-200);
  user-select: none;
  grid-template-rows: auto auto;
  grid-template-columns: auto minmax(0, 1fr) auto;
  row-gap: 2px;
  display: grid;
}
.bcn-scrub > [data-scrub-prev] {
  grid-area: 1/1;
}
.bcn-scrub > [data-scrub-next] {
  grid-area: 1/3;
}
.bcn-scrub__strip {
  display: contents;
}
.bcn-scrub__track {
  grid-area: 1/2;
}
.bcn-scrub__ticks {
  grid-area: 2/2;
}
.bcn-scrub__track {
  grid-template-columns: repeat(var(--_n), minmax(0, 1fr));
  cursor: pointer;
  touch-action: none;
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  gap: 2px;
  height: 44px;
  padding: 6px;
  display: grid;
  position: relative;
}
.bcn-scrub__track:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-scrub__track .bcn-scrub__page {
  background: color-mix(
    in srgb,
    var(--color-content-default) 16%,
    var(--color-background-elevation-raised)
  );
  border-radius: 2px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 6px;
  transition: background-color 0.16s;
  display: flex;
  position: relative;
}
.bcn-scrub__track .bcn-scrub__page[data-state="scanned"],
.bcn-scrub__track .bcn-scrub__page[data-state="gap"] {
  background: var(--color-source);
}
.bcn-scrub__track .bcn-scrub__page[data-state="out"] {
  background: var(--color-background-elevation-raised);
  box-shadow: inset 0 0 0 1px var(--color-border-default-subtle);
}
.bcn-scrub__track .bcn-scrub__page[data-state="none"] {
  visibility: hidden;
}
.bcn-scrub__track .bcn-scrub__pips {
  flex-direction: column;
  align-items: center;
  gap: 2px;
  display: flex;
}
.bcn-scrub__track .bcn-scrub__pip {
  border: 1.25px solid var(--color-background-elevation-raised);
  cursor: pointer;
  background: 0 0;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  animation: 0.22s ease-out bcn-scrub-pop;
  display: block;
}
.bcn-scrub__track .bcn-scrub__pip[data-role="whole"] {
  background: var(--color-background-elevation-raised);
}
.bcn-scrub__track .bcn-scrub__pip[data-role="start"],
.bcn-scrub__track .bcn-scrub__pip[data-role="end"] {
  background: linear-gradient(
      var(--_dir, 180deg),
      var(--color-background-elevation-raised) 50%,
      transparent 50%
    )
    border-box;
  border-color: #0000;
}
.bcn-scrub__track .bcn-scrub__pip[data-role="end"] {
  --_dir: 0deg;
}
.bcn-scrub__track .bcn-scrub__pip:not([data-parsed]) {
  opacity: 0.5;
}
.bcn-scrub__track .bcn-scrub__pip[data-selected] {
  box-shadow:
    0 0 0 1.5px var(--color-source),
    0 0 0 3px var(--color-background-elevation-raised);
}
.bcn-scrub__head {
  top: 0;
  bottom: 0;
  left: calc(var(--_cell) * var(--_head, 0));
  width: var(--_cell);
  background: color-mix(in srgb, var(--bcn-aldo) 24%, transparent);
  box-shadow: inset 0 -3px 0 var(--bcn-aldo);
  pointer-events: none;
  border-radius: 2px;
  transition: left 0.3s;
  position: absolute;
}
.bcn-scrub__thumb {
  top: -3px;
  bottom: -3px;
  left: calc(var(--_cell) * var(--_view, 0) - 2px);
  width: calc(var(--_cell) + 4px);
  border: 2px solid var(--color-content-default);
  pointer-events: none;
  border-radius: 4px;
  position: absolute;
}
.bcn-scrub__tip {
  z-index: 50;
  background: var(--color-background-inverse, #1f2328);
  max-width: 16rem;
  color: var(--color-content-default-knockout);
  box-shadow: var(--shadow-300, 0 4px 12px #0003);
  pointer-events: none;
  border-radius: 6px;
  flex-direction: column;
  gap: 1px;
  padding: 5px 8px;
  font-size: 0.75rem;
  line-height: 1.3;
  display: flex;
  position: fixed;
  transform: translate(-50%, -100%);
}
.bcn-scrub__tip[hidden] {
  display: none;
}
.bcn-scrub__tip:after {
  content: "";
  border: 5px solid #0000;
  border-top-color: var(--color-background-inverse, #1f2328);
  margin-left: -5px;
  position: absolute;
  top: 100%;
  left: 50%;
}
.bcn-scrub__tippage {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.bcn-scrub__tipstate {
  opacity: 0.75;
}
.bcn-scrub__tipfinds {
  white-space: pre-line;
}
.bcn-scrub__tipfinds[hidden] {
  display: none;
}
.bcn-scrub__ticks {
  height: 1rem;
  color: color-mix(in srgb, var(--color-content-default-secondary) 75%, transparent);
  font-variant-numeric: tabular-nums;
  font-size: 0.6875rem;
  line-height: 1rem;
  position: relative;
}
.bcn-scrub__ticks .bcn-scrub__tick {
  left: calc(var(--_cell) * var(--_i) + var(--_cell) / 2);
  position: absolute;
  transform: translate(-50%);
}
@media (prefers-reduced-motion: reduce) {
  .bcn-scrub__track .bcn-scrub__pip,
  .bcn-scrub__head {
    transition: none;
    animation: none;
  }
}
.bcn-sw3bar {
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500) var(--spacing-200);
  border-top: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.bcn-sw3bar__status {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  flex-wrap: wrap;
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
  display: inline-flex;
}
.bcn-sw3bar__status[hidden],
.bcn-sw3bar__status-act:empty {
  display: none;
}
.bcn-sw3bar__console {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-100);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  grid-template-columns: 1fr auto 1fr;
  display: grid;
}
.bcn-sw3bar__keys {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200);
  flex-wrap: wrap;
  grid-column: 2;
  min-width: 0;
  display: flex;
}
.bcn-sw3bar__end {
  grid-area: 1/1;
  justify-self: start;
}
.bcn-sw3bar__end--next {
  grid-column: 3;
  justify-self: end;
}
.bcn-sw3bar [data-bar-prev]:disabled,
.bcn-sw3bar [data-bar-next]:disabled {
  opacity: 0.38;
}
.bcn-sw3bar__page {
  --_field-padding-x: 0.4375rem;
  --typography-microcopy-xs-subtle-font-weight: var(--typography-microcopy-xs-font-weight, 500);
  --form-affix-bg: var(--color-background-elevation-raised);
  --form-affix-color: var(--color-content-default);
  --form-affix-border-color: transparent;
  --color-background-field: var(--color-background-elevation-raised);
  width: 7.25rem;
}
.bcn-sw3bar [data-tx][aria-pressed="true"] {
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 1px 3px color-mix(in srgb, var(--color-content-default) 22%, transparent);
}
.bcn-sw3bar__console esa-dropdown-menu[data-bar-speed] {
  --spacing-200: 0.25rem;
  --spacing-300: 0.5rem;
  --dropdown-menu-min-width: 8.5rem;
  --typography-body-md-font-size: 0.8125rem;
  --typography-body-md-line-height: 1.3;
  --typography-body-md-font-weight: var(--typography-font-weight-medium);
}
.bcn-sw3bar__console [data-bar-speed] > * {
  --spacing-200: 0.5rem;
  --spacing-300: 0.75rem;
}
.bcn-sw3bar [data-tx] button:disabled,
.bcn-sw3bar button[data-tx]:disabled {
  opacity: 0.38;
}
.bcn-sw3bar[data-disabled] {
  opacity: 0.4;
}
.bcn-sw3bar[data-disabled] .bcn-sw3bar__scrub {
  visibility: hidden;
}
.bcn-sw3tools esa-button-group,
.bcn-sw3tools .esa-button,
.bcn-sw3tools esa-dropdown-menu {
  flex: none;
}
@container (width<=720px) {
  .bcn-sw3tools [data-tool="follow"] .esa-button__label {
    display: none;
  }
}
@container (width<=660px) {
  .bcn-sw3tools [data-tool]:not([data-tool="zoom-fit"]) .esa-button__label {
    display: none;
  }
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
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
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#fcfcfc` | semantic |
| `--color-background-brand-muted-hover` | `#efefef` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-inverse` | `#202020` | component |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#3d3d3d` | semantic |
| `--color-source` | `#003f5c` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--shadow-300` | `0 6px 24px -6px #00000012` | component |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
