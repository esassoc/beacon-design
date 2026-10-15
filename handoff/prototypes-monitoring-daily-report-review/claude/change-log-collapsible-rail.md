# Change log (collapsible rail)

Who changed what, and when: a date-grouped timeline of every edit (field · context, old → new, who · time, tag: Pending sync / Synced to Fulcrum / Withdrawn / Beacon only) and every event (submitted from Fulcrum, pushed, report generated). Filter: All · Syncs to Fulcrum · Beacon only. Collapses to a slim strip that hands its width back to the report.

## Key decisions
- BcnChangeLog was extended (backward compatible) rather than duplicated; runtime rows reuse its exact markup.
- Not a live region: every entry records something the user just did elsewhere, and that control owns its feedback.
- Collapsed/expanded is remembered per browser.

## Gotchas
- A correction's tag reflects its CURRENT state — an entry logged as pending reads "Synced to Fulcrum" after a push.

## Done when
- Every edit on the page appears at the top of the log immediately with the right tag.
- Collapsing the rail widens the report column; reloading keeps it collapsed.

## Markup
```html
<div class="bcn-dmr-change-log" data-bcn-dmr-change-log="">
  <div
    class="bcn-dmr-change-log__strip stack"
    data-gap="sm"
    data-dmr-log-strip=""
    hidden=""
  >
    <span data-dmr-log-expand=""
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Expand change log"
          title="Expand change log"
          aria-controls="bcn-dmr-change-log-body"
          aria-expanded="true"
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
          ></span></button></span></span
    ><span
      class="bcn-dmr-change-log__strip-label typography-label-md-strong"
      aria-hidden="true"
      >Change log</span
    >
  </div>
  <div class="bcn-dmr-change-log__head stack" data-gap="sm" data-dmr-log-open="">
    <div class="repel" data-gap="xs">
      <h2
        id="bcn-dmr-change-log-title"
        class="bcn-dmr-change-log__title typography-title"
      >
        Change log
      </h2>
      <span data-dmr-log-collapse=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Collapse change log"
            title="Collapse change log"
            aria-controls="bcn-dmr-change-log-body"
            aria-expanded="true"
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
    <esa-button-toggle
      data-dmr-log-filter="true"
      label="Show"
      size="sm"
      value="all"
      options='[{"label":"All","value":"all"},{"label":"Syncs to Fulcrum","value":"fulcrum"},{"label":"Beacon only","value":"beacon"}]'
    ></esa-button-toggle>
  </div>
  <div
    class="bcn-dmr-change-log__body"
    id="bcn-dmr-change-log-body"
    role="region"
    aria-labelledby="bcn-dmr-change-log-title"
    tabindex="0"
    data-dmr-log-open=""
  >
    <div data-dmr-log-list="">
      <ol class="bcn-change-log">
        <li class="bcn-change-log__day">
          <p class="bcn-change-log__date">
            <time datetime="2026-09-12">September 12, 2026</time>
          </p>
          <ul class="bcn-change-log__events">
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text"
                ><strong>Wind Speed</strong>
                <span class="bcn-change-log__context">· General Information</span></span
              ><span class="bcn-change-log__change"
                ><del class="bcn-change-log__from">60 mph</del
                ><span class="bcn-change-log__arrow" aria-hidden="true">→</span
                ><span class="visually-hidden">changed to</span
                ><ins class="bcn-change-log__to">6 mph</ins></span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Priya Raman · <time datetime="2026-09-12T08:54:00">8:54 AM</time></span
                ><span class="bcn-change-log__tag bcn-change-log__tag--warning"
                  ><span
                    class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Pending sync</span></span
                  ></span
                ></span
              >
            </li>
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text"
                ><strong>Compliance Level</strong>
                <span class="bcn-change-log__context">· CW-TS22</span></span
              ><span class="bcn-change-log__change"
                ><del class="bcn-change-log__from">Level 1 – In Compliance</del
                ><span class="bcn-change-log__arrow" aria-hidden="true">→</span
                ><span class="visually-hidden">changed to</span
                ><ins class="bcn-change-log__to">Level 2 – Minor Deviation</ins></span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Priya Raman · <time datetime="2026-09-12T08:52:00">8:52 AM</time></span
                ><span class="bcn-change-log__tag bcn-change-log__tag--warning"
                  ><span
                    class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Pending sync</span></span
                  ></span
                ></span
              >
            </li>
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text"
                ><strong>Notes</strong>
                <span class="bcn-change-log__context">· CW-TS31</span></span
              ><span class="bcn-change-log__change bcn-change-log__change--long"
                ><del class="bcn-change-log__from"
                  >nest found in creosote nw corner of pad. buffer staked 50ft. no work in
                  buffer</del
                ><span class="bcn-change-log__arrow" aria-hidden="true">→</span
                ><span class="visually-hidden">changed to</span
                ><ins class="bcn-change-log__to"
                  >An active verdin nest was found in a creosote bush at the northwest
                  corner of the CW-TS31 pad. A 50-foot no-work buffer was staked and
                  flagged, and no work took place inside it.</ins
                >
                <details class="bcn-change-log__more">
                  <summary>
                    <span class="bcn-change-log__more-show">Show full text</span
                    ><span class="bcn-change-log__more-hide">Show less</span>
                  </summary>
                </details></span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Jordan Ellis ·
                  <time datetime="2026-09-12T08:36:00">8:36 AM</time></span
                ><span class="bcn-change-log__tag bcn-change-log__tag--info"
                  ><span
                    class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Beacon only</span></span
                  ></span
                ></span
              >
            </li>
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text"
                ><strong>Description</strong>
                <span class="bcn-change-log__context"
                  >· CW-TS14 · Cactus salvage tag removal</span
                ></span
              ><span class="bcn-change-log__change bcn-change-log__change--long"
                ><del class="bcn-change-log__from"
                  >removing tags from non salvaged cactus.. crew pulling metal tags off
                  plants at TS14, pad marked salvaged</del
                ><span class="bcn-change-log__arrow" aria-hidden="true">→</span
                ><span class="visually-hidden">changed to</span
                ><ins class="bcn-change-log__to"
                  >Fieldstone observed the Ridgeline Electric crew removing salvage tags
                  from cacti that were not selected for salvage at CW-TS14, marking the
                  pad as salvage-complete. No live plants were disturbed.</ins
                >
                <details class="bcn-change-log__more">
                  <summary>
                    <span class="bcn-change-log__more-show">Show full text</span
                    ><span class="bcn-change-log__more-hide">Show less</span>
                  </summary>
                </details></span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Jordan Ellis ·
                  <time datetime="2026-09-12T08:31:00">8:31 AM</time></span
                ><span class="bcn-change-log__tag bcn-change-log__tag--info"
                  ><span
                    class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Beacon only</span></span
                  ></span
                ></span
              >
            </li>
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text">Pushed 1 change to Fulcrum </span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Priya Raman · <time datetime="2026-09-12T08:10:00">8:10 AM</time></span
                ></span
              >
            </li>
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text"
                ><strong>Time In</strong>
                <span class="bcn-change-log__context">· General Information</span></span
              ><span class="bcn-change-log__change"
                ><del class="bcn-change-log__from">7:30 AM</del
                ><span class="bcn-change-log__arrow" aria-hidden="true">→</span
                ><span class="visually-hidden">changed to</span
                ><ins class="bcn-change-log__to">7:00 AM</ins></span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Priya Raman · <time datetime="2026-09-12T08:05:00">8:05 AM</time></span
                ><span class="bcn-change-log__tag bcn-change-log__tag--success"
                  ><span
                    class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Synced to Fulcrum</span></span
                  ></span
                ></span
              >
            </li>
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text">Status changed to Needs Review </span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Priya Raman · <time datetime="2026-09-12T08:02:00">8:02 AM</time></span
                ></span
              >
            </li>
          </ul>
        </li>
        <li class="bcn-change-log__day">
          <p class="bcn-change-log__date">
            <time datetime="2026-09-11">September 11, 2026</time>
          </p>
          <ul class="bcn-change-log__events">
            <li class="bcn-change-log__event">
              <span class="bcn-change-log__text">Submitted from Fulcrum </span
              ><span class="bcn-change-log__meta cluster" data-gap="xs"
                ><span class="bcn-change-log__by"
                  >Dana Whitcomb ·
                  <time datetime="2026-09-11T16:42:00">4:42 PM</time></span
                ></span
              >
            </li>
          </ul>
        </li>
      </ol>
    </div>
    <div data-dmr-log-empty="" hidden="">
      <div class="esa-empty-state esa-empty-state--sm">
        <h3 class="esa-empty-state__title typography-label-sm-strong">
          No changes to show
        </h3>
        <p class="esa-empty-state__description typography-body-xs">
          Select All to see every change.
        </p>
        <div class="esa-empty-state__actions typography-label-md"></div>
      </div>
    </div>
  </div>
  <template data-dmr-log-tag="pending"
    ><span
      class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
      data-astro-cid-yahmuvtj=""
      ><span class="esa-badge__text" data-astro-cid-yahmuvtj="">Pending sync</span></span
    ></template
  ><template data-dmr-log-tag="synced"
    ><span
      class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
      data-astro-cid-yahmuvtj=""
      ><span class="esa-badge__text" data-astro-cid-yahmuvtj=""
        >Synced to Fulcrum</span
      ></span
    ></template
  ><template data-dmr-log-tag="withdrawn"
    ><span
      class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
      data-astro-cid-yahmuvtj=""
      ><span class="esa-badge__text" data-astro-cid-yahmuvtj="">Withdrawn</span></span
    ></template
  ><template data-dmr-log-tag="beacon"
    ><span
      class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
      data-astro-cid-yahmuvtj=""
      ><span class="esa-badge__text" data-astro-cid-yahmuvtj="">Beacon only</span></span
    ></template
  >
</div>
```

## Styles
```css
/* Both message nodes ALWAYS render — a live region created at the same moment as
       its text is routinely not announced, so it has to already exist. When empty they
       carry .visually-hidden, which takes them out of flow: .field is a flex column
       with a gap, so an in-flow empty node would spend 4px of dead space each.
       Deliberately NOT display:none, which drops them from the accessibility tree. */

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
}
/* Both message nodes are ALWAYS rendered — a live region created at the same moment
       as its text is routinely not announced, so it has to already exist. When there is
       nothing to say they carry .visually-hidden, which takes them out of flow: .field
       is a flex column with a gap, so an in-flow empty node would spend 4px of dead
       space per message. Deliberately NOT display:none, which would drop them from the
       accessibility tree and defeat the arrangement entirely. */

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-100, 4px);
}
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
  clip-path: none;
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
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
.bcn-dmr-wa__heading .esa-icon,
.bcn-dmr-wa__subhead .esa-icon {
  color: var(--color-content-default-secondary, #646464);
}
.bcn-dmr-change-log {
  top: var(--spacing-400);
  align-self: start;
  gap: var(--spacing-400);
  max-block-size: calc(100dvh - 2 * var(--spacing-400));
  padding: var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-md);
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  position: sticky;
}
.bcn-dmr-change-log__title {
  color: var(--color-content-default);
  margin: 0;
}
.bcn-dmr-change-log[data-collapsed] {
  --sidebar-width: 3.5rem;
  padding: var(--spacing-200) var(--spacing-100);
  flex-grow: 0;
  align-items: center;
}
.bcn-dmr-change-log__strip {
  align-items: center;
}
.bcn-dmr-change-log__strip[hidden],
.bcn-dmr-change-log [data-dmr-log-open][hidden] {
  display: none;
}
.bcn-dmr-change-log__strip-label {
  writing-mode: vertical-rl;
  color: var(--color-content-default-secondary);
}
.bcn-dmr-change-log__body {
  overscroll-behavior: contain;
  min-block-size: 0;
  padding: var(--spacing-050);
  margin: calc(-1 * var(--spacing-050));
  flex: auto;
  overflow-y: auto;
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
.typography-title {
  font-family: var(--typography-title-font-family);
  font-size: var(--typography-title-font-size);
  font-weight: var(--typography-title-font-weight);
  line-height: var(--typography-title-line-height);
  letter-spacing: var(--typography-title-letter-spacing);
}
.typography-body-xs {
  font-family: var(--typography-body-xs-font-family);
  font-size: var(--typography-body-xs-font-size);
  font-weight: var(--typography-body-xs-font-weight);
  line-height: var(--typography-body-xs-line-height);
  letter-spacing: var(--typography-body-xs-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.typography-title-strong {
  font-family: var(--typography-title-strong-font-family);
  font-size: var(--typography-title-strong-font-size);
  font-weight: var(--typography-title-strong-font-weight);
  line-height: var(--typography-title-strong-line-height);
  letter-spacing: var(--typography-title-strong-letter-spacing);
}
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.visually-hidden {
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  border: 0;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
}
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  white-space: normal;
  clip: auto;
  clip-path: none;
  width: auto;
  height: auto;
  margin: 0;
  position: static;
  overflow: visible;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
}
.bcn-change-log {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-change-log__day {
  padding: 0 0 var(--spacing-400) var(--spacing-500);
  border-left: 2px solid var(--color-border-default);
  margin-left: 5px;
  position: relative;
}
.bcn-change-log__day:last-child {
  border-left-color: #0000;
  padding-bottom: 0;
}
.bcn-change-log__day:before {
  content: "";
  background: var(--color-background-elevation-raised);
  border: 2px solid var(--color-background-brand-muted);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 3px;
  left: -6px;
}
.bcn-change-log__date {
  margin: 0 0 var(--spacing-200);
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-change-log__events {
  gap: var(--spacing-300);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-change-log__event {
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-change-log__text {
  color: var(--color-content-default);
  font-size: 0.875rem;
  line-height: 1.4;
}
.bcn-change-log__target {
  color: var(--color-content-link);
  text-decoration: none;
}
.bcn-change-log__target:hover {
  text-decoration: underline;
}
.bcn-change-log__by {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-change-log__context {
  color: var(--color-content-default-secondary);
}
.bcn-change-log__change {
  align-items: baseline;
  column-gap: var(--spacing-100);
  color: var(--color-content-default);
  overflow-wrap: anywhere;
  flex-wrap: wrap;
  font-size: 0.875rem;
  line-height: 1.4;
  display: flex;
}
.bcn-change-log__from {
  color: var(--color-content-default-secondary);
  text-decoration: line-through;
}
.bcn-change-log__to {
  text-decoration: none;
}
.bcn-change-log__arrow {
  color: var(--color-content-default-secondary);
}
.bcn-change-log__change--long {
  align-items: stretch;
  row-gap: var(--spacing-100);
  flex-direction: column;
}
.bcn-change-log__change--long .bcn-change-log__arrow {
  display: none;
}
.bcn-change-log__change--long :is(.bcn-change-log__from, .bcn-change-log__to) {
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  overflow: hidden;
}
.bcn-change-log__change--long:has(> .bcn-change-log__more[open])
  :is(.bcn-change-log__from, .bcn-change-log__to) {
  -webkit-line-clamp: unset;
  line-clamp: none;
  display: block;
  overflow: visible;
}
.bcn-change-log__more > summary {
  cursor: pointer;
  color: var(--color-content-link);
  font-size: 0.8125rem;
  list-style: none;
  display: inline;
}
.bcn-change-log__more > summary::-webkit-details-marker {
  display: none;
}
.bcn-change-log__more > summary:hover {
  text-decoration: underline;
}
.bcn-change-log__more[open] .bcn-change-log__more-show,
.bcn-change-log__more:not([open]) .bcn-change-log__more-hide {
  display: none;
}
.bcn-change-log__meta {
  margin-top: var(--spacing-050);
}
.bcn-change-log__meta .bcn-change-log__by {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
}
.bcn-change-log__tag {
  display: inline-flex;
}
.bcn-change-log__tag--neutral {
  --badge-bg: var(--color-background-elevation-sunken);
  --badge-text-color: var(--color-content-default-secondary);
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
.esa-empty-state {
  --_empty-icon-size: var(--empty-state-icon-size-md, 48px);
  --_empty-gap: var(--spacing-200, 0.5rem);
  text-align: center;
  padding: var(--spacing-600, 2rem) var(--spacing-400, 1rem);
  justify-content: center;
  align-items: center;
  gap: var(--_empty-gap);
  flex-direction: column;
  display: flex;
}
.esa-empty-state--xs {
  --_empty-icon-size: var(--empty-state-icon-size-xs, 24px);
  padding: var(--spacing-300, 0.75rem) var(--spacing-200, 0.5rem);
}
.esa-empty-state--sm {
  --_empty-icon-size: var(--empty-state-icon-size-sm, 32px);
  padding: var(--spacing-400, 1rem) var(--spacing-300, 0.75rem);
}
.esa-empty-state--lg {
  --_empty-icon-size: var(--empty-state-icon-size-lg, 64px);
  padding: var(--spacing-800, 4rem) var(--spacing-400, 1rem);
}
.esa-empty-state__icon {
  color: var(--color-content-default-secondary, #646464);
  margin-bottom: var(--spacing-100, 0.25rem);
  display: inline-flex;
}
.esa-empty-state__icon svg {
  width: var(--_empty-icon-size);
  height: var(--_empty-icon-size);
}
.esa-empty-state__title {
  color: var(--color-content-default, #202020);
  margin: 0;
}
.esa-empty-state__description {
  color: var(--color-content-default-secondary, #646464);
  max-width: 360px;
  margin: 0;
}
.esa-empty-state__actions {
  margin-top: var(--spacing-200, 0.5rem);
}
.esa-empty-state__actions:empty {
  display: none;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
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
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-link`: #005862 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--gap`: 1.5rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-body-xs-font-weight`: 400 _(semantic)_
- `--typography-body-xs-letter-spacing`: .01em _(semantic)_
- `--typography-body-xs-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
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
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-title-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-font-weight`: 500 _(semantic)_
- `--typography-title-letter-spacing`: .01em _(semantic)_
- `--typography-title-line-height`: 1.6 _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-title-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-strong-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-strong-font-weight`: 550 _(semantic)_
- `--typography-title-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-strong-line-height`: 1.6 _(semantic)_
