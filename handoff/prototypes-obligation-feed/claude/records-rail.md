# Records rail

Obligations (feed) · source prototype: https://esassoc.github.io/beacon-design/prototypes/obligation-feed/

![Records rail, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/records-rail.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-obligation-feed/claude/records-rail.phone.png

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

## Components

- `bcn-frc` (spoke) · `src/components/bcn/BcnFeedRailCard.astro`
- `bcn-fw` (spoke) · `src/components/bcn/BcnFeedWorkspace.astro`

## Markup

_3 repeated elements are collapsed in the markup below; the comments say where._

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
            ><span class="bcn-frc__label">Injured Swainson's hawk recovered near a haul road</span>
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
    <!-- …and 3 more like this (<div class="bcn-fw__group">) -->
    <p class="bcn-fw__none typography-body-sm" data-fw-none="" hidden="">
      Nothing matches these filters.
    </p>
  </div>
</aside>
```

## Styles

```css
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
@media (width<=60rem) {
  .bcn-fw__rail {
    max-block-size: 26rem;
    position: static;
  }
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

| Token | Value | Tier |
|---|---|---|
| `--color-action` | `#d45087` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand` | `#fcfcfc` | semantic |
| `--color-obligation` | `#f95d6a` | component |
| `--gap` | `1.5rem` | component |
| `--radius-md` | `.25rem` | semantic |
| `--spacing-050` | `.125rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-900` | `6rem` | primitive |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-label-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-label-xs-font-weight` | `500` | semantic |
| `--typography-label-xs-letter-spacing` | `.01em` | semantic |
| `--typography-label-xs-line-height` | `1.6` | semantic |
