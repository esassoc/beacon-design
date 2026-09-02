# Component timeline

The same 30/60/90-day near-term timeline as the project dashboard, scoped to this component's actions and its milestone dates. It answers "what lands on me soon" without the rest of the project's noise.

## Key decisions
- The component reuses the project timeline component outright, parameterized — it is not a second timeline. Defaults preserve the project dashboard's rendering exactly.
- A milestone's effective date here is the COMPONENT'S override when one exists, otherwise the project estimate, because the timeline answers "when does this land for me". An overridden mark is labelled as a component date so it is never mistaken for the project schedule.
- Seasons stay project-level and are shown unchanged — a component does not get its own nesting season.

## Gotchas
- TODAY now travels in the serialized JSON payload. It used to be hardcoded a SECOND time inside the client script, mirrored from the fixture; that duplicate is gone and must not come back.
- The popover is appended to document.body because esa-card sets overflow:hidden. That is a workaround, not an accident — do not "fix" it.
- DOM ids are namespaced by idPrefix so the component and project timelines could coexist on one page. The default reproduces the project dashboard's original ids.

## Done when
- Only this component's actions plot; overridden milestones show the component date and say so; the 30/60/90 toggle re-lays the marks; the project dashboard's timeline is byte-for-byte unchanged.

## Markup
```html
<div class="bcn-tl" data-bcn-timeline="" data-tl-id="cmp-tl">
  <!-- Axis -->
  <div class="bcn-tl__row bcn-tl__row--axis">
    <span class="bcn-tl__lane-label"></span>
    <div class="bcn-tl__track" data-tl-axis="">
      <span class="bcn-tl__today" data-tl-today="" style="left: 18.9189%"
        ><span class="bcn-tl__today-flag">Today</span></span
      ><span class="bcn-tl__tick" style="left: 0%">Mar 18</span
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
      <span class="bcn-tl__rule"></span
      ><button
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
        aria-label="CUL-02 Cultural resources worker training, due Mar 30"
        style="left: 32.4324%"
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
    <span class="bcn-tl__lane-label"></span
    ><button class="bcn-tl__showall" type="button" data-tl-showall="">
      Show all 11 seasons
    </button>
  </div>
  <!-- Milestones -->
  <div class="bcn-tl__row">
    <span class="bcn-tl__lane-label">Milestones</span>
    <div class="bcn-tl__track bcn-tl__track--items" data-tl-lane="milestones">
      <span class="bcn-tl__rule"></span>
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
  align-items: center;
  gap: var(--spacing-400);
  display: inline-flex;
}
.bcn-tl__full {
  align-items: center;
  gap: var(--spacing-100);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  white-space: nowrap;
  text-decoration: none;
  display: inline-flex;
}
.bcn-tl__full:hover {
  color: var(--color-background-brand-hover);
}
.bcn-tl {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
  position: relative;
}
.bcn-tl__row {
  align-items: center;
  gap: var(--spacing-300);
  grid-template-columns: 5.5rem 1fr;
  display: grid;
}
.bcn-tl__row--bars {
  align-items: start;
}
.bcn-tl__row--more {
  margin-top: calc(var(--spacing-250) * -1);
}
.bcn-tl__lane-label {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-tl__track {
  height: 30px;
  position: relative;
}
.bcn-tl__row--axis .bcn-tl__track {
  height: 20px;
}
.bcn-tl__track--bars {
  height: 22px;
}
.bcn-tl__rule {
  background: var(--color-border-default);
  height: 1px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
}
.bcn-tl__today {
  background: var(--color-orange-400, #f9a134);
  z-index: 1;
  pointer-events: none;
  width: 2px;
  position: absolute;
  top: 0;
  bottom: -170px;
}
.bcn-tl__today-flag {
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-orange-400, #f9a134);
  position: absolute;
  top: -2px;
  left: 4px;
}
.bcn-tl__showall {
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  cursor: pointer;
  background: 0 0;
  border: 0;
  justify-self: start;
  padding: 0;
}
.bcn-tl__showall:hover {
  color: var(--color-background-brand-hover);
}
.bcn-tl__empty {
  font-size: var(--font-size-150);
  color: var(--color-content-default-tertiary);
  margin: 0;
}
.bcn-tl .bcn-tl__tick {
  color: var(--bcn-content-muted);
  white-space: nowrap;
  font-size: 0.75rem;
  position: absolute;
  top: 2px;
  transform: translate(-50%);
}
.bcn-tl .bcn-tl__item {
  cursor: pointer;
  border-radius: var(--radius-full);
  background: 0 0;
  border: 0;
  place-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  display: grid;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.bcn-tl .bcn-tl__item:hover,
.bcn-tl .bcn-tl__item[data-pinned] {
  background: color-mix(in srgb, var(--color-background-brand) 10%, transparent);
}
.bcn-tl .bcn-tl__item:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: -2px;
}
.bcn-tl .bcn-tl__dot {
  border-radius: var(--radius-full);
  background: var(--color-border-default-strong);
  border: 2px solid var(--color-background-elevation-raised);
  width: 11px;
  height: 11px;
  box-shadow: 0 0 0 1px var(--color-border-default);
  display: block;
}
.bcn-tl [data-urgency="overdue"] .bcn-tl__dot {
  background: var(--color-background-utility-danger);
  box-shadow: none;
}
.bcn-tl [data-urgency="due-soon"] .bcn-tl__dot {
  background: var(--color-background-utility-warning);
  box-shadow: none;
}
.bcn-tl .bcn-tl__diamond {
  background: var(--color-background-utility-info);
  width: 11px;
  height: 11px;
  display: block;
  transform: rotate(45deg);
}
.bcn-tl .bcn-tl__bar {
  align-items: center;
  gap: var(--spacing-200);
  height: 18px;
  padding: 0 var(--spacing-150);
  background: color-mix(
    in srgb,
    var(--color-background-brand-muted) 16%,
    var(--color-background-elevation-raised)
  );
  border: 1px solid
    color-mix(
      in srgb,
      var(--color-background-brand-muted) 40%,
      var(--color-background-elevation-raised)
    );
  border-radius: var(--radius-100);
  cursor: pointer;
  text-align: left;
  display: flex;
  position: absolute;
  overflow: hidden;
}
.bcn-tl .bcn-tl__bar:hover,
.bcn-tl .bcn-tl__bar[data-pinned] {
  background: color-mix(
    in srgb,
    var(--color-background-brand-muted) 26%,
    var(--color-background-elevation-raised)
  );
}
.bcn-tl .bcn-tl__bar-label {
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--bcn-teal-800, var(--color-background-brand-muted-hover));
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.bcn-tl .bcn-tl__bar-dates {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  margin-left: auto;
  font-size: 0.75rem;
}
.bcn-tl__pop {
  z-index: 5;
  gap: var(--spacing-250);
  width: 19rem;
  max-width: calc(100% - 16px);
  padding: var(--spacing-350, var(--spacing-300)) var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  box-shadow: var(--elevation-4, 0 8px 24px -6px #0000002e);
  flex-direction: column;
  display: flex;
  position: fixed;
}
.bcn-tl__pop[hidden] {
  display: none;
}
.bcn-tl__pop-head {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-tl__pop-type {
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-tertiary);
  text-transform: capitalize;
}
.bcn-tl__pop-title {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: var(--line-height-tight);
  margin: 0;
}
.bcn-tl__pop-facts {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  display: flex;
}
.bcn-tl__pop-facts div {
  gap: var(--spacing-200);
  grid-template-columns: 6.5rem 1fr;
  display: grid;
}
.bcn-tl__pop-facts dt {
  color: var(--color-content-default-tertiary);
  font-size: 0.8125rem;
}
.bcn-tl__pop-facts dd {
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
}
.bcn-tl__pop-late {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-utility-danger);
}
.bcn-tl__pop-species {
  gap: var(--spacing-150);
  flex-wrap: wrap;
  display: flex;
}
.bcn-tl__pop-chip {
  padding: 1px var(--spacing-200);
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-sunken);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  font-size: 0.75rem;
}
.bcn-tl__pop-link {
  font-size: 0.8125rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  align-self: flex-start;
  text-decoration: none;
}
.bcn-tl__pop .bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
  display: inline-block;
}
```

## Tokens
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-teal-800`: #0a6562 _(component)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
