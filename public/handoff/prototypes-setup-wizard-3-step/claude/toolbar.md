# Toolbar

Every control over the scan of the document in view, in one bar: what the run is doing now, in one line of narration ("Found MM AES-1b, Apply Aesthetic Design Treatments, on p. 18.", "Parsed MM AES-1a: 4 requirements. Timing and party from the table's columns."); Mark missed; the pace (One at a time, Watch, Full speed); Pause, Resume or Let it run; and the Aldo panel's open and close. Below, the page in view with previous and next, and the scrubber.

## Key decisions
- Pace is how fast the job dispatches page windows: a real control in prod, not a replay speed. Watch is the default while the run is learning; One at a time stops after each commitment parses; Full speed raises only what needs a person.
- Pause, Resume and every pace change are steers: pressed here or typed to Aldo, they land in the record with the page they came on.
- Pause lets the page in flight finish: its extraction call is already out.
- Restart is a prototype control over the replay; prod has none.

## Done when
- At the check after the first commitments, the button reads Let it run; pressing it goes on at the pace selected.
- Hide Aldo gives the page the full width; Aldo opens again on its own when a document stops for a check.

## Markup
```html
<div class="bcn-sw3bar" data-sw3-toolbar="">
  <div class="bcn-sw3bar__row">
    <p
      class="bcn-sw3bar__now typography-label-md"
      data-bar-status=""
      role="status"
      title="Not started. Tell Aldo where to start."
    >
      Not started. Tell Aldo where to start.
    </p>
    <div class="bcn-sw3bar__group">
      <span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        style="display: none"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-bar-follow="true"
        >
          <span class="esa-button__label">Follow the scan</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        style="display: none"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-bar-mark="true"
        >
          <span class="esa-button__label">Mark missed</span>
        </button></span
      >
    </div>
    <div class="bcn-sw3bar__group">
      <esa-button-toggle
        size="sm"
        value="watch"
        aria-label="Pace"
        data-bar-pace="true"
        data-options='[{"value":"step","label":"One at a time"},{"value":"watch","label":"Watch"},{"value":"run","label":"Full speed"}]'
      ></esa-button-toggle
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
        style="display: none"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-bar-toggle="true"
        >
          <span class="esa-button__label">Pause</span>
        </button></span
      >
    </div>
    <span
      class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-bar-aldo="true"
        aria-pressed="true"
      >
        <span class="esa-button__label">Aldo</span>
      </button></span
    >
  </div>
  <div class="bcn-sw3bar__row">
    <div class="bcn-sw3bar__pages">
      <span data-bar-prev=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Previous page"
            title="Previous page"
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
                <path d="m15 18-6-6 6-6"></path></svg
            ></span></button></span></span
      ><span class="bcn-sw3bar__pageno typography-label-md" data-bar-pageno=""
        >p. 131 of 247</span
      ><span data-bar-next=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Next page"
            title="Next page"
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
                <path d="m9 18 6-6-6-6"></path></svg
            ></span></button></span
      ></span>
    </div>
    <div class="bcn-sw3bar__scrub">
      <div
        class="bcn-scrub"
        data-page-scrubber=""
        data-size="50"
        style="--_n: 50; --_view: 30"
      >
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
            aria-label="Page in view"
            aria-valuemin="1"
            aria-valuemax="247"
            aria-valuenow="131"
            data-scrub-track=""
            aria-valuetext="Page 131"
          >
            <span
              class="bcn-scrub__page"
              data-page="101"
              data-state="out"
              title="p. 101, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="101:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="102"
              data-state="out"
              title="p. 102, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="102:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="103"
              data-state="out"
              title="p. 103, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="103:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="104"
              data-state="out"
              title="p. 104, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="104:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="105"
              data-state="out"
              title="p. 105, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="105:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="106"
              data-state="out"
              title="p. 106, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="106:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="107"
              data-state="out"
              title="p. 107, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="107:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="108"
              data-state="out"
              title="p. 108, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="108:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="109"
              data-state="out"
              title="p. 109, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="109:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="110"
              data-state="out"
              title="p. 110, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="110:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="111"
              data-state="out"
              title="p. 111, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="111:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="112"
              data-state="out"
              title="p. 112, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="112:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="113"
              data-state="out"
              title="p. 113, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="113:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="114"
              data-state="out"
              title="p. 114, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="114:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="115"
              data-state="out"
              title="p. 115, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="115:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="116"
              data-state="out"
              title="p. 116, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="116:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="117"
              data-state="out"
              title="p. 117, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="117:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="118"
              data-state="out"
              title="p. 118, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="118:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="119"
              data-state="out"
              title="p. 119, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="119:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="120"
              data-state="out"
              title="p. 120, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="120:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="121"
              data-state="out"
              title="p. 121, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="121:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="122"
              data-state="out"
              title="p. 122, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="122:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="123"
              data-state="out"
              title="p. 123, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="123:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="124"
              data-state="out"
              title="p. 124, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="124:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="125"
              data-state="out"
              title="p. 125, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="125:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="126"
              data-state="out"
              title="p. 126, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="126:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="127"
              data-state="out"
              title="p. 127, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="127:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="128"
              data-state="out"
              title="p. 128, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="128:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="129"
              data-state="out"
              title="p. 129, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="129:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="130"
              data-state="out"
              title="p. 130, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="130:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="131"
              data-state="out"
              title="p. 131, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="131:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="132"
              data-state="out"
              title="p. 132, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="132:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="133"
              data-state="out"
              title="p. 133, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="133:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="134"
              data-state="out"
              title="p. 134, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="134:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="135"
              data-state="out"
              title="p. 135, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="135:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="136"
              data-state="out"
              title="p. 136, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="136:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="137"
              data-state="out"
              title="p. 137, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="137:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="138"
              data-state="out"
              title="p. 138, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="138:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="139"
              data-state="out"
              title="p. 139, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="139:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="140"
              data-state="out"
              title="p. 140, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="140:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="141"
              data-state="out"
              title="p. 141, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="141:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="142"
              data-state="out"
              title="p. 142, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="142:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="143"
              data-state="out"
              title="p. 143, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="143:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="144"
              data-state="out"
              title="p. 144, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="144:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="145"
              data-state="out"
              title="p. 145, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="145:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="146"
              data-state="out"
              title="p. 146, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="146:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="147"
              data-state="out"
              title="p. 147, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="147:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="148"
              data-state="out"
              title="p. 148, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="148:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="149"
              data-state="out"
              title="p. 149, outside the scope"
              ><span class="bcn-scrub__pips" data-sig="149:"></span></span
            ><span
              class="bcn-scrub__page"
              data-page="150"
              data-state="out"
              title="p. 150, outside the scope"
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
            class="bcn-scrub__ticks typography-microcopy-sm"
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
        ><span class="bcn-scrub__range typography-microcopy-sm" data-scrub-range=""
          >pp. 101–150 of 247</span
        >
      </div>
    </div>
    <span
      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-bar-restart="true"
      >
        <span class="esa-button__label">Restart</span>
      </button></span
    >
  </div>
</div>
```

## Styles
```css
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
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
  align-items: start;
  gap: var(--spacing-200);
  user-select: none;
  grid-template-columns: auto minmax(0, 1fr) auto auto;
  display: grid;
}
.bcn-scrub > span {
  padding-top: 8px;
}
.bcn-scrub__strip {
  --_cell: calc(100% / var(--_n));
  gap: var(--spacing-100);
  flex-direction: column;
  min-width: 0;
  display: flex;
}
.bcn-scrub__range {
  min-width: 7.5rem;
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  padding-top: 14px !important;
}
.bcn-scrub__track {
  grid-template-columns: repeat(var(--_n), minmax(0, 1fr));
  cursor: pointer;
  touch-action: none;
  border-radius: var(--radius-100);
  gap: 2px;
  height: 40px;
  padding: 4px 0;
  display: grid;
  position: relative;
}
.bcn-scrub__track:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-scrub__track .bcn-scrub__page {
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: 2px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4px;
  transition: background-color 0.16s;
  display: flex;
  position: relative;
}
.bcn-scrub__track .bcn-scrub__page[data-state="scanned"] {
  background: color-mix(
    in srgb,
    var(--color-content-default) 26%,
    var(--color-background-elevation-raised)
  );
  border-color: #0000;
}
.bcn-scrub__track .bcn-scrub__page[data-state="gap"] {
  background: repeating-linear-gradient(
    135deg,
    var(--color-background-warning-subtle),
    var(--color-background-warning-subtle) 3px,
    var(--color-background-elevation-raised) 3px,
    var(--color-background-elevation-raised) 6px
  );
  border-color: var(--color-border-warning);
}
.bcn-scrub__track .bcn-scrub__page[data-state="out"] {
  opacity: 0.55;
  background: 0 0;
  border-style: dashed;
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
  border: 1.5px solid var(--color-commitment);
  background: var(--color-background-elevation-raised);
  cursor: pointer;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  animation: 0.22s ease-out bcn-scrub-pop;
  display: block;
}
.bcn-scrub__track .bcn-scrub__pip[data-parsed] {
  background: var(--color-commitment);
}
.bcn-scrub__track .bcn-scrub__pip[data-selected] {
  box-shadow:
    0 0 0 2px var(--color-background-elevation-raised),
    0 0 0 3.5px var(--color-commitment);
}
.bcn-scrub__head {
  top: 0;
  bottom: 0;
  left: calc(var(--_cell) * var(--_head, 0));
  width: var(--_cell);
  background: color-mix(in srgb, var(--color-background-brand) 22%, transparent);
  box-shadow: inset 0 -3px 0 var(--color-background-brand);
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
.bcn-scrub__ticks {
  height: 1.25rem;
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  line-height: 1.25rem;
  position: relative;
}
.bcn-scrub__ticks .bcn-scrub__tick {
  left: calc(var(--_cell) * var(--_i) + var(--_cell) / 2);
  position: absolute;
  transform: translate(-50%);
}
.bcn-sw3bar {
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  flex-direction: column;
  display: flex;
}
.bcn-sw3bar__row {
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.bcn-sw3bar__now {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 14rem;
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  flex: 1;
  margin: 0;
  overflow: hidden;
}
.bcn-sw3bar__group {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-sw3bar__pages {
  align-items: center;
  gap: var(--spacing-100);
  align-self: flex-start;
  display: flex;
}
.bcn-sw3bar__pageno {
  text-align: center;
  font-variant-numeric: tabular-nums;
  min-width: 6.5rem;
}
.bcn-sw3bar__scrub {
  flex: 1;
  min-width: 20rem;
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-sm {
  font-family: var(--typography-microcopy-sm-font-family);
  font-size: var(--typography-microcopy-sm-font-size);
  font-weight: var(--typography-microcopy-sm-font-weight);
  line-height: var(--typography-microcopy-sm-line-height);
  letter-spacing: var(--typography-microcopy-sm-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-sm-subtle {
  font-family: var(--typography-microcopy-sm-subtle-font-family);
  font-size: var(--typography-microcopy-sm-subtle-font-size);
  font-weight: var(--typography-microcopy-sm-subtle-font-weight);
  line-height: var(--typography-microcopy-sm-subtle-line-height);
  letter-spacing: var(--typography-microcopy-sm-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-sm-strong {
  font-family: var(--typography-microcopy-sm-strong-font-family);
  font-size: var(--typography-microcopy-sm-strong-font-size);
  font-weight: var(--typography-microcopy-sm-strong-font-weight);
  line-height: var(--typography-microcopy-sm-strong-line-height);
  letter-spacing: var(--typography-microcopy-sm-strong-letter-spacing);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-warning-subtle`: #fefdfb _(component)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-warning`: #f3d673 _(component)_
- `--color-commitment`: #58508d _(component)_
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
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-font-weight`: 500 _(semantic)_
- `--typography-microcopy-sm-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-sm-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-sm-subtle-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-microcopy-sm-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-sm-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-sm-subtle-line-height`: 1 _(semantic)_
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
