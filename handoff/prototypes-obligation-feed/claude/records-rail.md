# Records rail

A mail list: a pale grey panel of two-line cards (source + time, then the title on one line), grouped Today / Yesterday / This week / This month / Older under sticky date heads.

## Key decisions
- The selected record is the brand fill with on-brand text, like a highlighted message.
- No per-source coloured icons and no rail header band (Andy, 2026-09-23).
- The rail is a listbox: Up/Down move the selection and open the record.
- The rail sticks under the topbar and scrolls on its own; overflow-anchor: none, so growing the open record never shifts the rail.

## Gotchas
- The page scroller starts below a 52px fixed topbar: size the rail to 100vh minus the topbar and its insets, or its bottom slides out of reach.
- Put the sticky date head's top padding ON the head (plus a thin same-colour shadow above it), not on the scroller, or text shows above the stuck head.

## Done when
- Scrolling the rail keeps each date head clean; opening a long record leaves the rail where it was.

## Markup
```html
<aside class="bcn-fw__rail" aria-label="Records">
  <div class="bcn-fw__scroll" role="listbox" aria-label="Records">
    <div class="bcn-fw__group" role="group" aria-label="Today" data-fw-group="">
      <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">Today</p>
      <ul class="bcn-fw__list stack" data-gap="xs" role="none">
        <li class="bcn-frc" data-frc="" data-fw-record="obs-ggs">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="true"
            data-of-pick="obs-ggs"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Biological resource observation</span
              ><span class="bcn-frc__when">8:35 AM</span></span
            ><span class="bcn-frc__label"
              >Giant garter snake seen in an irrigation canal at the work edge</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="obs-hawk">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="obs-hawk"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Compliance concern</span
              ><span class="bcn-frc__when">7:10 AM</span></span
            ><span class="bcn-frc__label"
              >Injured Swainson's hawk recovered near a haul road</span
            >
          </button>
        </li>
      </ul>
    </div>
    <div class="bcn-fw__group" role="group" aria-label="Yesterday" data-fw-group="">
      <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">Yesterday</p>
      <ul class="bcn-fw__list stack" data-gap="xs" role="none">
        <li class="bcn-frc" data-frc="" data-fw-record="dmr-daily">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="dmr-daily"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Daily monitoring report</span
              ><span class="bcn-frc__when">5:05 PM</span></span
            ><span class="bcn-frc__label"
              >Daily monitoring report — in-water work at the intake</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="obs-trbl">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="obs-trbl"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Nesting bird observation</span
              ><span class="bcn-frc__when">3:40 PM</span></span
            ><span class="bcn-frc__label"
              >Active tricolored blackbird colony found in the staging buffer</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="sr-turbid">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="sr-turbid"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Site report</span
              ><span class="bcn-frc__when">11:25 AM</span></span
            ><span class="bcn-frc__label"
              >Turbidity above the approved threshold downstream of dewatering</span
            >
          </button>
        </li>
      </ul>
    </div>
    <div class="bcn-fw__group" role="group" aria-label="This week" data-fw-group="">
      <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">This week</p>
      <ul class="bcn-fw__list stack" data-gap="xs" role="none">
        <li class="bcn-frc" data-frc="" data-fw-record="dmr-0914">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="dmr-0914"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Daily monitoring report</span
              ><span class="bcn-frc__when">Mon 5:30 PM</span></span
            ><span class="bcn-frc__label"
              >Daily monitoring report — Intake B cofferdam</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="obs-cts">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="obs-cts"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Compliance concern</span
              ><span class="bcn-frc__when">Mon 9:05 AM</span></span
            ><span class="bcn-frc__label"
              >California tiger salamander found inside exclusion fencing</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="svy-0913">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="svy-0913"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Survey</span
              ><span class="bcn-frc__when">Sun 2:00 PM</span></span
            ><span class="bcn-frc__label"
              >Pre-activity presence survey — Reach 1 upland</span
            >
          </button>
        </li>
      </ul>
    </div>
    <div class="bcn-fw__group" role="group" aria-label="This month" data-fw-group="">
      <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">This month</p>
      <ul class="bcn-fw__list stack" data-gap="xs" role="none">
        <li class="bcn-frc" data-frc="" data-fw-record="ev-fence-0911">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="ev-fence-0911"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Uploaded evidence</span
              ><span class="bcn-frc__when">Sep 11</span></span
            ><span class="bcn-frc__label"
              >Exclusion fencing inspection — Reach 1 photo set</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="weap-0908">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="weap-0908"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">WEAP training</span
              ><span class="bcn-frc__when">Sep 8</span></span
            ><span class="bcn-frc__label">WEAP session — 14 new crew members</span>
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="sr-0903">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="sr-0903"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Site report</span
              ><span class="bcn-frc__when">Sep 3</span></span
            ><span class="bcn-frc__label">Dewatering pump intake screen inspected</span>
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="nb-0902">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="nb-0902"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Nesting bird observation</span
              ><span class="bcn-frc__when">Sep 2</span></span
            ><span class="bcn-frc__label"
              >Active Swainson's hawk nest confirmed near the Intake C haul road</span
            >
          </button>
        </li>
      </ul>
    </div>
    <div class="bcn-fw__group" role="group" aria-label="Older" data-fw-group="">
      <p class="bcn-fw__group-head typography-label-xs" aria-hidden="true">Older</p>
      <ul class="bcn-fw__list stack" data-gap="xs" role="none">
        <li class="bcn-frc" data-frc="" data-fw-record="cc-0828">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="cc-0828"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Compliance concern</span
              ><span class="bcn-frc__when">Aug 28</span></span
            ><span class="bcn-frc__label"
              >No spill kit at the Byron Tract staging area</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="ev-dust-0822">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="ev-dust-0822"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Uploaded evidence</span
              ><span class="bcn-frc__when">Aug 22</span></span
            ><span class="bcn-frc__label">Dust suppression log — week of August 17</span>
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="svy-0815" hidden="">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="svy-0815"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Survey</span
              ><span class="bcn-frc__when">Aug 15</span></span
            ><span class="bcn-frc__label">Nesting bird sweep — Byron Tract</span>
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="dmr-0806" hidden="">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="dmr-0806"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Daily monitoring report</span
              ><span class="bcn-frc__when">Aug 6</span></span
            ><span class="bcn-frc__label"
              >Daily monitoring report — Bethany aqueduct tie-in</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="ev-erosion-0725" hidden="">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="ev-erosion-0725"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Uploaded evidence</span
              ><span class="bcn-frc__when">Jul 25</span></span
            ><span class="bcn-frc__label">Post-storm erosion control inspection</span>
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="br-0712" hidden="">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="br-0712"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Biological resource observation</span
              ><span class="bcn-frc__when">Jul 12</span></span
            ><span class="bcn-frc__label"
              >Western pond turtle basking at the forebay edge</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="weap-0701" hidden="">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="weap-0701"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">WEAP training</span
              ><span class="bcn-frc__when">Jul 1</span></span
            ><span class="bcn-frc__label">WEAP session — Intake B mobilization</span>
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="cc-0605" hidden="">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="cc-0605"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Compliance concern</span
              ><span class="bcn-frc__when">Jun 5</span></span
            ><span class="bcn-frc__label"
              >Night lighting spilling into habitat at the pumping plant</span
            >
          </button>
        </li>
        <li class="bcn-frc" data-frc="" data-fw-record="ev-quals-0520" hidden="">
          <button
            type="button"
            class="bcn-frc__row"
            role="option"
            aria-selected="false"
            data-of-pick="ev-quals-0520"
          >
            <span class="bcn-frc__from"
              ><span class="bcn-frc__source">Uploaded evidence</span
              ><span class="bcn-frc__when">May 20</span></span
            ><span class="bcn-frc__label"
              >Designated Biologist approval letter from CDFW</span
            >
          </button>
        </li>
      </ul>
    </div>
    <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
      Nothing matches these filters.
    </p>
  </div>
</aside>
```

## Styles
```css
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.bcn-frc {
  list-style: none;
}
.bcn-frc[hidden] {
  display: none;
}
.bcn-frc__row {
  gap: var(--spacing-050);
  inline-size: 100%;
  padding: var(--spacing-150) var(--spacing-300);
  border: 1px solid var(--color-border-default-subtle);
  background: var(--color-background-default);
  font: inherit;
  color: var(--color-content-default);
  text-align: start;
  cursor: pointer;
  border-radius: 6px;
  flex-direction: column;
  font-size: 0.8125rem;
  transition:
    border-color 0.12s,
    background-color 0.12s;
  display: flex;
}
.bcn-frc__row:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-frc__row:focus-visible {
  outline: 2px solid var(--color-border-default-focus);
  outline-offset: 2px;
}
.bcn-frc__row[aria-selected="true"] {
  border-color: var(--color-background-brand);
  background: var(--color-background-brand);
  color: var(--color-content-on-brand);
}
.bcn-frc__row[aria-selected="true"] .bcn-frc__from,
.bcn-frc__row[aria-selected="true"] .bcn-frc__when {
  color: var(--color-content-on-brand);
}
.bcn-frc__row[aria-selected="true"] .bcn-frc__class {
  background: color-mix(in srgb, var(--color-content-on-brand) 18%, transparent);
  color: var(--color-content-on-brand);
}
.bcn-frc__from {
  align-items: center;
  gap: var(--spacing-150);
  min-inline-size: 0;
  color: var(--color-content-default-secondary);
  font-size: 0.75rem;
  display: flex;
}
.bcn-frc__source {
  text-overflow: ellipsis;
  white-space: nowrap;
  min-inline-size: 0;
  overflow: hidden;
}
.bcn-frc__when {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  margin-inline-start: auto;
}
.bcn-frc__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
}
.bcn-frc[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-frc[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-frc[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-frc[data-class="roster"] {
  --_hue: var(--color-action);
}
.bcn-frc__label {
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  line-height: 1.4;
  overflow: hidden;
}
.bcn-frec__none[hidden],
.bcn-fw__side[hidden],
.bcn-fw__pane[hidden],
.bcn-fw__group[hidden],
.bcn-fw__none[hidden] {
  display: none;
}
.bcn-fw__rail {
  --_rail-bg: color-mix(
    in srgb,
    var(--color-background-elevation-sunken) 30%,
    var(--color-background-default)
  );
  top: var(--spacing-400);
  max-block-size: calc(100vh - 52px - var(--spacing-400) - var(--spacing-900));
  overflow-anchor: none;
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  background: var(--_rail-bg);
  flex-direction: column;
  align-self: start;
  display: flex;
  position: sticky;
  overflow: hidden;
}
.bcn-fw__scroll {
  padding: 0 var(--spacing-300) var(--spacing-300);
  overflow-y: auto;
}
.bcn-fw__group + .bcn-fw__group {
  margin-block-start: var(--spacing-100);
}
.bcn-fw__group-head {
  z-index: 1;
  padding: var(--spacing-300) 2px var(--spacing-150);
  background: var(--_rail-bg);
  box-shadow: 0 -2px 0 var(--_rail-bg);
  color: var(--color-content-default-secondary);
  margin: 0;
  position: sticky;
  top: 0;
}
.bcn-fw__list {
  margin: 0;
  padding: 2px;
}
.bcn-fw__none {
  padding: var(--spacing-300) var(--spacing-100);
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
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
```

## Tokens
- `--color-action`: #d45087 _(component)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-obligation`: #f95d6a _(component)_
- `--gap`: 1.5rem _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-900`: 6rem _(primitive)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-font-weight`: 500 _(semantic)_
- `--typography-label-xs-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-strong-line-height`: 1.6 _(semantic)_
