# Component timeline

Component Dashboard · source prototype: https://esassoc.github.io/beacon-design/prototypes/component-dashboard/

![Component timeline, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-timeline.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-component-dashboard/claude/component-timeline.phone.png

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

## Components

- `bcn-tl` (spoke) · `src/components/bcn/BcnProjectTimeline.astro`

## Markup

_6 repeated elements are collapsed in the markup below; the comments say where._

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
      ><!-- …and 3 more like this (<span class="bcn-tl__tick">) -->
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
    <div class="bcn-tl__track bcn-tl__track--bars" data-tl-lane="seasons" style="height: 88px">
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
      ><!-- …and 2 more like this (<button class="bcn-tl__bar">) -->
    </div>
  </div>
  <div class="bcn-tl__row bcn-tl__row--more">
    <span class="bcn-tl__lane-label"></span
    ><button class="bcn-tl__showall" type="button" data-tl-showall="">Show all 11 seasons</button>
  </div>
  <!-- …and 1 more like this (<div class="bcn-tl__row bcn-tl__row--axis">) --><!-- Milestones -->
  <p class="bcn-tl__empty" data-tl-empty="" hidden="">Nothing scheduled in this window.</p>
  <!-- One click-pinned popover, repositioned per mark. -->
</div>
```

## Styles

```css
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
@media (width<=720px) {
  .bcn-tl__row {
    grid-template-columns: 4rem 1fr;
  }
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-content-muted` | `#7c7c7c` | component |
| `--bcn-teal-800` | `#0a6562` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-warning` | `#f59e0b` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--typography-font-weight-semibold` | `550` | semantic |
