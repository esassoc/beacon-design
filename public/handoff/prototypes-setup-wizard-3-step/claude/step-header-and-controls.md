# Step header and controls

One panel: the step's numeral and title with a status line (the only place the page appears: "Reading ITP_2081-2024-018-00_Signed.pdf, p. 133 of 247", "Stopped at 3 commitments to check", "Paused at p. 40 of 170", "Done: 157 commitments in 04_DCP_MMRP_ADA.pdf") and the Aldo panel toggle; under a gray rule, the controls of the file in view. Left, Mark missed. Center, the pace with icons (One at a time, Watch, Full speed). Right, one primary that is the next thing to do (Start scan, Pause, Resume, Continue after the check) and a menu for the rare ones (Restart this scan, Download file, Delete file). Below, every page of the file in one strip.

## Key decisions
- Pace is how fast the job dispatches page windows: a real control in prod, not a replay speed. Every pace change, pause and resume is recorded as a steer.
- Pause lets the page in flight finish: its extraction call is already out.
- With a source (not a file) selected, the controls are dimmed and inert: there is no file to control.
- Restart this scan re-queues the file's job; prod has no endpoint for it yet (only delete and re-upload).

## Done when
- At the check after the first three commitments, the primary reads Continue; with all three checked, the status reads "Checked 3 commitments. Continue when ready".
- Press M or Mark missed: the button is pressed and the page becomes a drawing surface.
- Hide Aldo gives the page the full width; Aldo opens again on its own when a file stops for a check.

## Markup
```html
<div class="bcn-sw3bar" data-sw3-toolbar="">
  <div class="bcn-sw3bar__row">
    <span
      class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
      ><button
        class="esa-button__native typography-microcopy-xs"
        type="button"
        data-ico="square-dashed"
        data-bar-mark="true"
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
            data-ico="square-dashed"
          >
            <path d="M5 3a2 2 0 0 0-2 2"></path>
            <path d="M19 3a2 2 0 0 1 2 2"></path>
            <path d="M21 19a2 2 0 0 1-2 2"></path>
            <path d="M5 21a2 2 0 0 1-2-2"></path>
            <path d="M9 3h1"></path>
            <path d="M9 21h1"></path>
            <path d="M14 3h1"></path>
            <path d="M14 21h1"></path>
            <path d="M3 9v1"></path>
            <path d="M21 9v1"></path>
            <path d="M3 14v1"></path>
            <path d="M21 14v1"></path></svg></span
        ><span class="esa-button__label">Mark missed</span>
      </button></span
    ><esa-button-toggle
      class="bcn-sw3bar__pace"
      size="sm"
      value="watch"
      aria-label="Pace"
      data-bar-pace="true"
      data-options='[{"value":"step","label":"One at a time","icon":"&lt;line x1=\"6\" x2=\"6\" y1=\"4\" y2=\"20\"/&gt;&lt;polygon points=\"10 4 20 12 10 20 10 4\"/&gt;"},{"value":"watch","label":"Watch","icon":"&lt;path d=\"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0\"/&gt;&lt;circle cx=\"12\" cy=\"12\" r=\"3\"/&gt;"},{"value":"run","label":"Full speed","icon":"&lt;polygon points=\"13 19 22 12 13 5 13 19\"/&gt;&lt;polygon points=\"2 19 11 12 2 5 2 19\"/&gt;"}]'
    ></esa-button-toggle>
    <div class="bcn-sw3bar__end">
      <span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ico="play"
          data-bar-toggle="true"
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
              data-ico="play"
            >
              <polygon points="6 3 20 12 6 21 6 3"></polygon></svg></span
          ><span class="esa-button__label">Start scan</span>
        </button></span
      ><esa-dropdown-menu
        position="below-end"
        data-bar-more="true"
        data-items='[{"label":"Restart this scan","action":"restart"},{"label":"Download file","action":"download"},{"divider":true},{"label":"Delete file","action":"delete","variant":"danger"},{"divider":true},{"label":"Reset the prototype","action":"reset"}]'
        width="auto"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="More scan actions"
            title="More scan actions"
            data-ico="ellipsis"
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
                data-ico="ellipsis"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle></svg
            ></span></button></span
      ></esa-dropdown-menu>
    </div>
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
          aria-label="Pages of the file"
          aria-valuemin="1"
          aria-valuemax="247"
          aria-valuenow="131"
          data-scrub-track=""
          aria-valuetext="Page 131"
        >
          <span
            class="bcn-scrub__page"
            data-page="101"
            data-state="pending"
            title="p. 101"
            ><span class="bcn-scrub__pips" data-sig="101:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="102"
            data-state="pending"
            title="p. 102"
            ><span class="bcn-scrub__pips" data-sig="102:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="103"
            data-state="pending"
            title="p. 103"
            ><span class="bcn-scrub__pips" data-sig="103:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="104"
            data-state="pending"
            title="p. 104"
            ><span class="bcn-scrub__pips" data-sig="104:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="105"
            data-state="pending"
            title="p. 105"
            ><span class="bcn-scrub__pips" data-sig="105:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="106"
            data-state="pending"
            title="p. 106"
            ><span class="bcn-scrub__pips" data-sig="106:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="107"
            data-state="pending"
            title="p. 107"
            ><span class="bcn-scrub__pips" data-sig="107:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="108"
            data-state="pending"
            title="p. 108"
            ><span class="bcn-scrub__pips" data-sig="108:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="109"
            data-state="pending"
            title="p. 109"
            ><span class="bcn-scrub__pips" data-sig="109:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="110"
            data-state="pending"
            title="p. 110"
            ><span class="bcn-scrub__pips" data-sig="110:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="111"
            data-state="pending"
            title="p. 111"
            ><span class="bcn-scrub__pips" data-sig="111:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="112"
            data-state="pending"
            title="p. 112"
            ><span class="bcn-scrub__pips" data-sig="112:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="113"
            data-state="pending"
            title="p. 113"
            ><span class="bcn-scrub__pips" data-sig="113:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="114"
            data-state="pending"
            title="p. 114"
            ><span class="bcn-scrub__pips" data-sig="114:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="115"
            data-state="pending"
            title="p. 115"
            ><span class="bcn-scrub__pips" data-sig="115:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="116"
            data-state="pending"
            title="p. 116"
            ><span class="bcn-scrub__pips" data-sig="116:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="117"
            data-state="pending"
            title="p. 117"
            ><span class="bcn-scrub__pips" data-sig="117:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="118"
            data-state="pending"
            title="p. 118"
            ><span class="bcn-scrub__pips" data-sig="118:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="119"
            data-state="pending"
            title="p. 119"
            ><span class="bcn-scrub__pips" data-sig="119:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="120"
            data-state="pending"
            title="p. 120"
            ><span class="bcn-scrub__pips" data-sig="120:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="121"
            data-state="pending"
            title="p. 121"
            ><span class="bcn-scrub__pips" data-sig="121:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="122"
            data-state="pending"
            title="p. 122"
            ><span class="bcn-scrub__pips" data-sig="122:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="123"
            data-state="pending"
            title="p. 123"
            ><span class="bcn-scrub__pips" data-sig="123:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="124"
            data-state="pending"
            title="p. 124"
            ><span class="bcn-scrub__pips" data-sig="124:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="125"
            data-state="pending"
            title="p. 125"
            ><span class="bcn-scrub__pips" data-sig="125:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="126"
            data-state="pending"
            title="p. 126"
            ><span class="bcn-scrub__pips" data-sig="126:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="127"
            data-state="pending"
            title="p. 127"
            ><span class="bcn-scrub__pips" data-sig="127:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="128"
            data-state="pending"
            title="p. 128"
            ><span class="bcn-scrub__pips" data-sig="128:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="129"
            data-state="pending"
            title="p. 129"
            ><span class="bcn-scrub__pips" data-sig="129:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="130"
            data-state="pending"
            title="p. 130"
            ><span class="bcn-scrub__pips" data-sig="130:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="131"
            data-state="pending"
            title="p. 131"
            ><span class="bcn-scrub__pips" data-sig="131:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="132"
            data-state="pending"
            title="p. 132"
            ><span class="bcn-scrub__pips" data-sig="132:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="133"
            data-state="pending"
            title="p. 133"
            ><span class="bcn-scrub__pips" data-sig="133:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="134"
            data-state="pending"
            title="p. 134"
            ><span class="bcn-scrub__pips" data-sig="134:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="135"
            data-state="pending"
            title="p. 135"
            ><span class="bcn-scrub__pips" data-sig="135:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="136"
            data-state="pending"
            title="p. 136"
            ><span class="bcn-scrub__pips" data-sig="136:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="137"
            data-state="pending"
            title="p. 137"
            ><span class="bcn-scrub__pips" data-sig="137:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="138"
            data-state="pending"
            title="p. 138"
            ><span class="bcn-scrub__pips" data-sig="138:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="139"
            data-state="pending"
            title="p. 139"
            ><span class="bcn-scrub__pips" data-sig="139:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="140"
            data-state="pending"
            title="p. 140"
            ><span class="bcn-scrub__pips" data-sig="140:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="141"
            data-state="pending"
            title="p. 141"
            ><span class="bcn-scrub__pips" data-sig="141:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="142"
            data-state="pending"
            title="p. 142"
            ><span class="bcn-scrub__pips" data-sig="142:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="143"
            data-state="pending"
            title="p. 143"
            ><span class="bcn-scrub__pips" data-sig="143:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="144"
            data-state="pending"
            title="p. 144"
            ><span class="bcn-scrub__pips" data-sig="144:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="145"
            data-state="pending"
            title="p. 145"
            ><span class="bcn-scrub__pips" data-sig="145:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="146"
            data-state="pending"
            title="p. 146"
            ><span class="bcn-scrub__pips" data-sig="146:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="147"
            data-state="pending"
            title="p. 147"
            ><span class="bcn-scrub__pips" data-sig="147:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="148"
            data-state="pending"
            title="p. 148"
            ><span class="bcn-scrub__pips" data-sig="148:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="149"
            data-state="pending"
            title="p. 149"
            ><span class="bcn-scrub__pips" data-sig="149:"></span></span
          ><span
            class="bcn-scrub__page"
            data-page="150"
            data-state="pending"
            title="p. 150"
            ><span class="bcn-scrub__pips" data-sig="150:"></span></span
          ><span
            class="bcn-scrub__head"
            data-scrub-head=""
            hidden=""
            aria-hidden="true"
          ></span
          ><span class="bcn-scrub__thumb" data-scrub-thumb="" aria-hidden="true"></span
          ><span
            class="bcn-scrub__tip typography-label-sm"
            data-scrub-tip=""
            hidden=""
            aria-hidden="true"
          ></span>
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
            ></span></button></span
      ></span>
    </div>
  </div>
</div>
```

## Styles
```css
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.bcn-sw3src__foot .esa-button,
.bcn-sw3src__foot .esa-button__native {
  justify-content: center;
  width: 100%;
}
.bcn-scrub {
  align-items: start;
  gap: var(--spacing-200);
  user-select: none;
  grid-template-columns: auto minmax(0, 1fr) auto;
  display: grid;
}
.bcn-scrub > span {
  padding-top: 6px;
}
.bcn-scrub__strip {
  --_cell: calc(100% / var(--_n));
  gap: var(--spacing-100);
  flex-direction: column;
  min-width: 0;
  display: flex;
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
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
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
  background: color-mix(
    in srgb,
    var(--color-content-default) 20%,
    var(--color-background-elevation-raised)
  );
  border-color: #0000;
}
.bcn-scrub__track .bcn-scrub__page[data-state="out"] {
  background: color-mix(
    in srgb,
    var(--color-content-default) 6%,
    var(--color-background-elevation-sunken)
  );
  border-color: #0000;
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
  bottom: calc(100% + 4px);
  left: calc(var(--_cell) * var(--_tip, 0) + var(--_cell) / 2);
  padding: 1px var(--spacing-150, 0.375rem);
  border-radius: var(--radius-100);
  background: var(--color-content-default);
  color: var(--color-content-default-knockout);
  white-space: nowrap;
  pointer-events: none;
  z-index: 1;
  position: absolute;
  transform: translate(-50%);
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
  gap: var(--spacing-300);
  padding: var(--spacing-300) var(--spacing-500) var(--spacing-200);
  border-top: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
}
.bcn-sw3bar__row {
  align-items: center;
  gap: var(--spacing-300);
  grid-template-columns: 1fr auto 1fr;
  display: grid;
}
.bcn-sw3bar__row > :first-child {
  justify-self: start;
}
.bcn-sw3bar__end {
  justify-self: end;
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-sw3bar[data-disabled] {
  opacity: 0.4;
}
.bcn-sw3bar[data-disabled] .bcn-sw3bar__scrub {
  visibility: hidden;
}
.bcn-sw3bar [data-bar-mark][aria-pressed="true"] {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-content-default);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-label-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-font-weight`: 500 _(semantic)_
- `--typography-label-sm-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
