# Scrubber

Every page of the file, fifty at a time, with chevrons centered on the pages to page the window and small page guides under them. Unread pages are light gray; read pages take the Source Documents color, each find a white dot on them; pages outside the scope are blank. The scan head is Aldo green. Hovering a page shows a small dark popover: its number, whether it is read, and what was found on it. Clicking the head cell takes up following the scan again.

## Key decisions
- All pages, not only those holding commitments: the person sees where the scope sits in the whole document.
- No page or range label here: the header's status line carries it once.

## Done when
- On the ITP, page the window forward: the pages past Condition 11 read as out of scope.

## Markup
```html
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
      ><span class="bcn-scrub__page" data-page="103" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="103:"></span></span
      ><span class="bcn-scrub__page" data-page="104" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="104:"></span></span
      ><span class="bcn-scrub__page" data-page="105" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="105:"></span></span
      ><span class="bcn-scrub__page" data-page="106" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="106:"></span></span
      ><span class="bcn-scrub__page" data-page="107" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="107:"></span></span
      ><span class="bcn-scrub__page" data-page="108" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="108:"></span></span
      ><span class="bcn-scrub__page" data-page="109" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="109:"></span></span
      ><span class="bcn-scrub__page" data-page="110" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="110:"></span></span
      ><span class="bcn-scrub__page" data-page="111" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="111:"></span></span
      ><span class="bcn-scrub__page" data-page="112" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="112:"></span></span
      ><span class="bcn-scrub__page" data-page="113" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="113:"></span></span
      ><span class="bcn-scrub__page" data-page="114" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="114:"></span></span
      ><span class="bcn-scrub__page" data-page="115" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="115:"></span></span
      ><span class="bcn-scrub__page" data-page="116" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="116:"></span></span
      ><span class="bcn-scrub__page" data-page="117" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="117:"></span></span
      ><span class="bcn-scrub__page" data-page="118" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="118:"></span></span
      ><span class="bcn-scrub__page" data-page="119" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="119:"></span></span
      ><span class="bcn-scrub__page" data-page="120" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="120:"></span></span
      ><span class="bcn-scrub__page" data-page="121" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="121:"></span></span
      ><span class="bcn-scrub__page" data-page="122" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="122:"></span></span
      ><span class="bcn-scrub__page" data-page="123" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="123:"></span></span
      ><span class="bcn-scrub__page" data-page="124" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="124:"></span></span
      ><span class="bcn-scrub__page" data-page="125" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="125:"></span></span
      ><span class="bcn-scrub__page" data-page="126" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="126:"></span></span
      ><span class="bcn-scrub__page" data-page="127" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="127:"></span></span
      ><span class="bcn-scrub__page" data-page="128" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="128:"></span></span
      ><span class="bcn-scrub__page" data-page="129" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="129:"></span></span
      ><span class="bcn-scrub__page" data-page="130" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="130:"></span></span
      ><span class="bcn-scrub__page" data-page="131" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="131:"></span></span
      ><span class="bcn-scrub__page" data-page="132" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="132:"></span></span
      ><span class="bcn-scrub__page" data-page="133" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="133:"></span></span
      ><span class="bcn-scrub__page" data-page="134" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="134:"></span></span
      ><span class="bcn-scrub__page" data-page="135" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="135:"></span></span
      ><span class="bcn-scrub__page" data-page="136" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="136:"></span></span
      ><span class="bcn-scrub__page" data-page="137" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="137:"></span></span
      ><span class="bcn-scrub__page" data-page="138" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="138:"></span></span
      ><span class="bcn-scrub__page" data-page="139" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="139:"></span></span
      ><span class="bcn-scrub__page" data-page="140" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="140:"></span></span
      ><span class="bcn-scrub__page" data-page="141" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="141:"></span></span
      ><span class="bcn-scrub__page" data-page="142" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="142:"></span></span
      ><span class="bcn-scrub__page" data-page="143" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="143:"></span></span
      ><span class="bcn-scrub__page" data-page="144" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="144:"></span></span
      ><span class="bcn-scrub__page" data-page="145" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="145:"></span></span
      ><span class="bcn-scrub__page" data-page="146" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="146:"></span></span
      ><span class="bcn-scrub__page" data-page="147" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="147:"></span></span
      ><span class="bcn-scrub__page" data-page="148" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="148:"></span></span
      ><span class="bcn-scrub__page" data-page="149" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="149:"></span></span
      ><span class="bcn-scrub__page" data-page="150" data-state="pending"
        ><span class="bcn-scrub__pips" data-sig="150:"></span></span
      ><span
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
      ><span class="bcn-scrub__tick" style="--_i: 19">120</span
      ><span class="bcn-scrub__tick" style="--_i: 29">130</span
      ><span class="bcn-scrub__tick" style="--_i: 39">140</span
      ><span class="bcn-scrub__tick" style="--_i: 49">150</span>
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
```

## Styles
```css
/* No box of its own — the buttons stay direct flex items of the host. */
.esa-button-group__slot {
  display: contents;
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
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
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
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
  padding-top: 4px;
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
  border: 1.5px solid var(--color-background-elevation-raised);
  cursor: pointer;
  background: 0 0;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  animation: 0.22s ease-out bcn-scrub-pop;
  display: block;
}
.bcn-scrub__track .bcn-scrub__pip[data-parsed] {
  background: var(--color-background-elevation-raised);
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
.bcn-sw3tools esa-button-group,
.bcn-sw3tools .esa-button,
.bcn-sw3tools esa-dropdown-menu {
  flex: none;
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
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-aldo`: #08908b _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-inverse`: #202020 _(component)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-source`: #003f5c _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--shadow-300`: 0 6px 24px -6px #00000012 _(component)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
