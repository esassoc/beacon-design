# Timeline

A slim, full-width band plotting the next 30 / 60 / 90 days on one date axis, in three lanes: action due dates (dots colored by derived urgency), season windows (bars), and milestones (azure diamonds). Users asked for a calendar; the review's judgment was to keep the dashboard view "slim… high level" rather than defaulting to a month grid.

## Key decisions
- The window opens 7 days BEFORE today, so work that is already overdue stays visible instead of falling off the left edge. The today line marks the boundary.
- Marks open a CLICK-PINNED popover, not a hover tooltip. An action's popover is an action-implementation card: commitment badge, type, component, due date with the overdue callout, status, and a link to the action. A season's adds source document and related species.
- Milestones use --color-info (azure) because they mark SCHEDULE, not severity — they must not borrow the red/amber urgency palette or an entity color.
- Seasons scale: a project can carry 10–15. The lane shows the ones whose start or end falls inside the window (the ones changing) and hides the rest behind a show-all toggle. Bars carry their own date range.
- A separate month-grid calendar page was built and then CUT — the timeline covers the need. Do not rebuild one without asking.

## Gotchas
- DEFERRED PAST SLICE 1. The timeline needs observation→action and report→action relationships to be real before its lanes mean anything.
- esa-card sets `overflow: hidden`, so the popover MUST be rendered outside the card (the prototype appends it to document.body and positions it fixed, flipping above the mark when there is no room below, and repositioning on scroll/resize). Rendering it inside the card clips it.
- Seasons recur annually: resolve start and end AS A PAIR per candidate year, or a wrap-year season (Nov 1 – Mar 31) matches the wrong occurrence and renders in the wrong place.
- All positions derive from a fixed TODAY in the fixture so the demo renders identically on every run; the real implementation obviously uses the current date, but keep the derivation server-side and deterministic.

## Done when
- A 30-day window shows overdue actions to the left of the today line; the 60 and 90 toggles change which actions, seasons, and milestones appear; clicking a dot pins an action card that survives mouse-out and closes on Esc or outside click; the popover is never clipped by the card.

## Markup
```html
<div class="bcn-tl" data-bcn-timeline="" data-tl-id="bcn-tl">
  <!-- Axis -->
  <div class="bcn-tl__row bcn-tl__row--axis">
    <span class="bcn-tl__lane-label"></span>
    <div class="bcn-tl__track" data-tl-axis="">
      <span class="bcn-tl__today" data-tl-today="" style="left: 18.9189%"
        ><span class="bcn-tl__today-flag">Today</span></span
      >
      <span class="bcn-tl__tick" style="left: 0%">Mar 18</span
      ><span class="bcn-tl__tick" style="left: 37.8378%">Apr 1</span
      ><span class="bcn-tl__tick" style="left: 56.7568%">Apr 8</span
      ><span class="bcn-tl__tick" style="left: 75.6757%">Apr 15</span
      ><span class="bcn-tl__tick" style="left: 94.5946%">Apr 22</span>
    </div>
  </div>
  <!-- Actions -->
  <div class="bcn-tl__row">
    <span class="bcn-tl__lane-label">Actions</span>
    <div class="bcn-tl__track bcn-tl__track--items" data-tl-lane="actions">
      <span class="bcn-tl__rule"></span>
      <button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="overdue"
        aria-label="BIO-03 Nesting-bird preconstruction survey, due Mar 24"
        style="left: 16.2162%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="due-soon"
        aria-label="BIO-21 Giant garter snake preconstruction survey, due Mar 31"
        style="left: 35.1351%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="due-soon"
        aria-label="WQ-05 Turbidity monitoring — in-water work, due Apr 5"
        style="left: 48.6486%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="overdue"
        aria-label="RPT-02 Annual mitigation summary to USFWS, due Mar 18"
        style="left: 0%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="due-soon"
        aria-label="RPT-01 Q1 ITP compliance report to CDFW, due Apr 1"
        style="left: 37.8378%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="due-soon"
        aria-label="RPT-04 Monthly construction compliance report, due Mar 31"
        style="left: 35.1351%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="overdue"
        aria-label="BIO-14 Exclusion fencing inspection, due Mar 21"
        style="left: 8.10811%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="overdue"
        aria-label="AIR-07 Fugitive dust control plan review, due Mar 23"
        style="left: 13.5135%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="due-soon"
        aria-label="CUL-02 Cultural resources worker training, due Mar 30"
        style="left: 32.4324%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="due-soon"
        aria-label="TRA-11 Haul route compliance verification, due Apr 7"
        style="left: 54.0541%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="upcoming"
        aria-label="WQ-12 SWPPP quarterly inspection, due Apr 10"
        style="left: 62.1622%"
      >
        <span class="bcn-tl__dot"></span></button
      ><button
        class="bcn-tl__item"
        type="button"
        data-tl-mark="action"
        data-urgency="upcoming"
        aria-label="NOI-03 Noise monitoring plan submittal, due Apr 22"
        style="left: 94.5946%"
      >
        <span class="bcn-tl__dot"></span>
      </button>
    </div>
  </div>
  <!-- Seasons -->
  <div class="bcn-tl__row bcn-tl__row--bars">
    <span class="bcn-tl__lane-label">Seasons</span>
    <div
      class="bcn-tl__track bcn-tl__track--bars"
      data-tl-lane="seasons"
      style="height: 88px"
    >
      <button
        class="bcn-tl__bar"
        type="button"
        data-tl-mark="season"
        style="left: 0%; width: 35.1351%; top: 0px"
      >
        <span class="bcn-tl__bar-label">CTS breeding season</span
        ><span class="bcn-tl__bar-dates">Nov 1 – Mar 31</span></button
      ><button
        class="bcn-tl__bar"
        type="button"
        data-tl-mark="season"
        style="left: 37.8378%; width: 62.1622%; top: 22px"
      >
        <span class="bcn-tl__bar-label">Bat maternity roost season</span
        ><span class="bcn-tl__bar-dates">Apr 1 – Aug 31</span></button
      ><button
        class="bcn-tl__bar"
        type="button"
        data-tl-mark="season"
        style="left: 0%; width: 100%; top: 44px"
      >
        <span class="bcn-tl__bar-label">Raptor nesting season</span
        ><span class="bcn-tl__bar-dates">Feb 1 – Sep 15</span></button
      ><button
        class="bcn-tl__bar"
        type="button"
        data-tl-mark="season"
        style="left: 0%; width: 100%; top: 66px"
      >
        <span class="bcn-tl__bar-label">Passerine nesting season</span
        ><span class="bcn-tl__bar-dates">Mar 15 – Sep 1</span>
      </button>
    </div>
  </div>
  <div class="bcn-tl__row bcn-tl__row--more">
    <span class="bcn-tl__lane-label"></span>
    <button class="bcn-tl__showall" type="button" data-tl-showall="">
      Show all 11 seasons
    </button>
  </div>
  <!-- Milestones -->
  <div class="bcn-tl__row">
    <span class="bcn-tl__lane-label">Milestones</span>
    <div class="bcn-tl__track bcn-tl__track--items" data-tl-lane="milestones">
      <span class="bcn-tl__rule"></span>
      <button
        class="bcn-tl__item bcn-tl__item--ms"
        type="button"
        data-tl-mark="milestone"
        aria-label="USACE Section 408 permission, Apr 15"
        style="left: 75.6757%"
      >
        <span class="bcn-tl__diamond"></span>
      </button>
    </div>
  </div>
  <p class="bcn-tl__empty" data-tl-empty="" hidden="">
    Nothing scheduled in this window.
  </p>
  <!-- One click-pinned popover, repositioned per mark. -->
</div>
```

## Styles
```css
.bcn-tl__head {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-400);
}
.bcn-tl__full {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
  white-space: nowrap;
}
.bcn-tl__full:hover {
  color: var(--color-primary-hover);
}
.bcn-tl {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
}
.bcn-tl__row {
  display: grid;
  grid-template-columns: 5.5rem 1fr;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-tl__row--bars {
  align-items: start;
}
.bcn-tl__row--more {
  margin-top: calc(var(--spacing-250) * -1);
}
.bcn-tl__lane-label {
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
}
.bcn-tl__track {
  position: relative;
  height: 30px;
}
.bcn-tl__row--axis .bcn-tl__track {
  height: 20px;
}
.bcn-tl__track--bars {
  height: 22px;
}
.bcn-tl__rule {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--color-border);
}
.bcn-tl__today {
  position: absolute;
  top: 0;
  bottom: -170px;
  width: 2px;
  background: var(--color-orange-400, #f9a134);
  z-index: 1;
  pointer-events: none;
}
.bcn-tl__today-flag {
  position: absolute;
  top: -2px;
  left: 4px;
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-orange-400, #f9a134);
}
.bcn-tl__showall {
  justify-self: start;
  padding: 0;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  background: none;
  border: 0;
  cursor: pointer;
}
.bcn-tl__showall:hover {
  color: var(--color-primary-hover);
}
.bcn-tl__empty {
  margin: 0;
  font-size: var(--type-size-150);
  color: var(--color-text-tertiary);
}
.bcn-tl .bcn-tl__tick {
  position: absolute;
  top: 2px;
  transform: translate(-50%);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  white-space: nowrap;
}
.bcn-tl .bcn-tl__item {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
  border-radius: var(--radius-full);
}
.bcn-tl .bcn-tl__item:hover,
.bcn-tl .bcn-tl__item[data-pinned] {
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
}
.bcn-tl .bcn-tl__item:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: -2px;
}
.bcn-tl .bcn-tl__dot {
  display: block;
  width: 11px;
  height: 11px;
  border-radius: var(--radius-full);
  background: var(--color-border-strong);
  border: 2px solid var(--color-surface);
  box-shadow: 0 0 0 1px var(--color-border);
}
.bcn-tl [data-urgency="overdue"] .bcn-tl__dot {
  background: var(--color-danger);
  box-shadow: none;
}
.bcn-tl [data-urgency="due-soon"] .bcn-tl__dot {
  background: var(--color-warning);
  box-shadow: none;
}
.bcn-tl .bcn-tl__diamond {
  display: block;
  width: 11px;
  height: 11px;
  background: var(--color-info);
  transform: rotate(45deg);
}
.bcn-tl .bcn-tl__bar {
  position: absolute;
  height: 18px;
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  padding: 0 var(--spacing-150);
  background: color-mix(in srgb, var(--color-secondary) 16%, var(--color-surface));
  border: 1px solid color-mix(in srgb, var(--color-secondary) 40%, var(--color-surface));
  border-radius: var(--radius-100);
  overflow: hidden;
  cursor: pointer;
  text-align: left;
}
.bcn-tl .bcn-tl__bar:hover,
.bcn-tl .bcn-tl__bar[data-pinned] {
  background: color-mix(in srgb, var(--color-secondary) 26%, var(--color-surface));
}
.bcn-tl .bcn-tl__bar-label {
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--bcn-teal-800, var(--color-secondary-hover));
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-tl .bcn-tl__bar-dates {
  margin-left: auto;
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.bcn-tl__pop {
  position: fixed;
  z-index: 5;
  width: 19rem;
  max-width: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
  padding: var(--spacing-350, var(--spacing-300)) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  box-shadow: var(--shadow-300, 0 8px 24px -6px rgba(0, 0, 0, 0.18));
}
.bcn-tl__pop[hidden] {
  display: none;
}
.bcn-tl__pop-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.bcn-tl__pop-type {
  font-size: 0.75rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  text-transform: capitalize;
}
.bcn-tl__pop-title {
  margin: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--line-height-tight);
}
.bcn-tl__pop-facts {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-tl__pop-facts div {
  display: grid;
  grid-template-columns: 6.5rem 1fr;
  gap: var(--spacing-200);
}
.bcn-tl__pop-facts dt {
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.bcn-tl__pop-facts dd {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-text-primary);
}
.bcn-tl__pop-late {
  font-weight: var(--font-weight-semibold);
  color: var(--color-danger);
}
.bcn-tl__pop-species {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-150);
}
.bcn-tl__pop-chip {
  padding: 1px var(--spacing-200);
  font-size: 0.75rem;
  color: var(--color-text-secondary);
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-100);
}
.bcn-tl__pop-link {
  align-self: flex-start;
  font-size: 0.8125rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-decoration: none;
}
.bcn-tl__pop .bcn-cbadge {
  display: inline-block;
  font-family: var(--font-mono);
  font-weight: var(--font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  font-size: 0.75rem;
  padding: 1px var(--spacing-150);
}
```

## Tokens
- `--bcn-teal-800`: #0a6562 _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-border-strong`: #bdbdbd _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-danger`: #e5484d _(semantic)_
- `--color-info`: #228be6 _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-secondary-hover`: #0a6562 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-300`: 0 6px 24px -6px rgba(0, 0, 0, .07) _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
