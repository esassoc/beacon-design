# Highlighted text

The submission in Beacon's document voice (Besley, body-lg) with each passage painted as a highlighter stroke: topic = hue family, subtopic = shade (a passage filed under several subtopics paints in its first). Hover underlines a passage in its family ink; the active one rings in it. Drag the grips at either end of the active passage to resize it; select free text to add one.

## Key decisions
- Highlight, not brackets, is the metaphor (brief). box-decoration-break: clone keeps each wrapped line a clean stroke.
- Offsets are derived from the comment's quote, never stored; a resized or added comment keeps a start hint only when its quote occurs twice.
- Resize snaps to whole words and stops at a paragraph break or the next passage. A new selection is trimmed to the free text the same way. Passages never overlap.
- Highlights are focusable; Enter opens the panel. J / K step through them in text order.

## Gotchas
- Paint on the client from the working state; each paragraph carries its start offset (data-off) so a DOM point maps back to a text offset.
- During a drag, hide the grip from hit testing (pointer-events: none) before caretPositionFromPoint, or the grip finds itself.
- Open the panel for a selection AFTER the drag's click: opened on mouseup, the modal reads that click as outside it and light-dismisses at once.

## Done when
- Dragging across free text opens the panel as New comment, and it stays open.
- Selecting part of an existing passage does not create an overlapping one.

## Markup
```html
<div class="bcn-st" data-submission-text="sub-18">
  <div class="bcn-st__body typography-body-lg" data-st-body="">
    <p data-off="0">
      I've lived in central Seattle for many years and have watched the number of planes
      overhead climb, with roughly four flight paths now in use.
      <mark
        class="bcn-hl"
        data-cid="c-045"
        data-family="violet"
        data-shade="2"
        tabindex="0"
        title="Nighttime operations: Overnight flights"
        aria-label="Nighttime operations: Overnight flights"
        >There is a new pattern of planes all night, at about 1:30, 2 and 4 a.m. and then
        steadily after that, sometimes only seconds apart.</mark
      >
      <mark
        class="bcn-hl"
        data-cid="c-046"
        data-family="crimson"
        data-shade="1"
        tabindex="0"
        title="Health: Sleep disruption"
        aria-label="Health: Sleep disruption"
        >My sleep has been broken for months, and I've had illness, anxiety, stress,
        headaches and trouble getting through the day</mark
      >, plus the long-term health risks of loud noise and lost sleep, all because of
      Sea-Tac and the growing number of flights at every hour.
    </p>
    <p data-off="532">
      I understand there is a late night noise program that has existed for years, and
      that it is voluntary. That alone is absurd: it leaves airlines to decide where they
      fly rather than putting residents first, which I assumed was the airport's job. Late
      night flights should not keep increasing.
      <mark
        class="bcn-hl"
        data-cid="c-047"
        data-family="violet"
        data-shade="1"
        tabindex="0"
        title="Nighttime operations: Late Night Noise Limitation Program"
        aria-label="Nighttime operations: Late Night Noise Limitation Program"
        >Someone should recognize that the program is not working and make it
        mandatory.</mark
      >
      <mark
        class="bcn-hl"
        data-cid="c-048"
        data-family="blue"
        data-shade="1"
        tabindex="0"
        title="Flight paths: Elliott Bay route"
        aria-label="Flight paths: Elliott Bay route"
        >We are surrounded by water, so why aren't planes flying over it, where fewer
        people would be bothered?</mark
      >
      The loop from south to north and back south again makes no sense and only adds noise
      and traffic. The noise grows by the day, nobody is getting enough sleep, and
      <mark
        class="bcn-hl"
        data-cid="c-049"
        data-family="slate"
        data-shade="1"
        tabindex="0"
        title="Process and outreach: Unanswered complaints"
        aria-label="Process and outreach: Unanswered complaints"
        >being told that summer winds make it quieter is just another excuse meant to
        placate us.</mark
      >
      I am deeply upset by what is happening, and I urge that your noise study make
      changes that ease the burden on our neighborhood, which is carrying far more than
      its share.
    </p>
  </div>
  <span
    class="bcn-st__grip"
    data-topic-ink=""
    data-st-grip="start"
    hidden=""
    aria-hidden="true"
  ></span
  ><span
    class="bcn-st__grip"
    data-topic-ink=""
    data-st-grip="end"
    hidden=""
    aria-hidden="true"
  ></span>
</div>
```

## Styles
```css
.typography-body-lg {
  font-family: var(--typography-body-lg-font-family);
  font-size: var(--typography-body-lg-font-size);
  font-weight: var(--typography-body-lg-font-weight);
  line-height: var(--typography-body-lg-line-height);
  letter-spacing: var(--typography-body-lg-letter-spacing);
}
.bcn-st {
  position: relative;
}
.bcn-st__body {
  font-family: var(--font-decorative, var(--typography-font-family-sans));
  color: var(--color-content-default);
}
.bcn-st__body p {
  margin: 0 0 var(--spacing-400) 0;
  max-width: 68ch;
}
.bcn-st__body p:last-child {
  margin-bottom: 0;
}
.bcn-st__body mark.bcn-hl {
  cursor: pointer;
}
.bcn-st__body mark.bcn-hl:hover {
  box-shadow: inset 0 -2px 0 var(--_ink);
}
.bcn-st__body mark.bcn-hl:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: 1px;
}
.bcn-st__body mark.bcn-hl[data-active] {
  outline: 2px solid var(--_ink);
  outline-offset: 1px;
}
.bcn-st__grip {
  --_ink: var(--color-content-default);
  background: var(--_ink);
  cursor: ew-resize;
  touch-action: none;
  z-index: 1;
  width: 2px;
  margin-left: -1px;
  position: absolute;
}
.bcn-st__grip:after {
  content: "";
  background: var(--_ink);
  border: 2px solid var(--color-background-elevation-raised);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
.bcn-st__grip[data-st-grip="start"]:after {
  top: -10px;
}
.bcn-st__grip[data-st-grip="end"]:after {
  bottom: -10px;
}
.bcn-st__grip:before {
  content: "";
  position: absolute;
  inset: -6px -10px;
}
.bcn-st[data-dragging] .bcn-st__body {
  user-select: none;
  cursor: ew-resize;
}
mark.bcn-hl {
  --_hl: var(--bcn-topic-slate-1);
  background: var(--_hl);
  color: inherit;
  border-radius: var(--radius-xs, 2px);
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
  padding: 0.08em 0.12em;
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="amber"] {
  --_ink: var(--bcn-topic-amber-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="blue"] {
  --_ink: var(--bcn-topic-blue-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="violet"] {
  --_ink: var(--bcn-topic-violet-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="grass"] {
  --_ink: var(--bcn-topic-grass-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="orange"] {
  --_ink: var(--bcn-topic-orange-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="crimson"] {
  --_ink: var(--bcn-topic-crimson-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="slate"] {
  --_ink: var(--bcn-topic-slate-ink);
}
:is(mark.bcn-hl, .bcn-topic-dot, [data-topic-ink])[data-family="none"] {
  --_ink: var(--color-content-default-tertiary);
}
mark.bcn-hl[data-family="none"] {
  --_hl: transparent;
  outline: 1.5px dashed var(--color-border-default);
  outline-offset: -1px;
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="1"] {
  --_hl: var(--bcn-topic-amber-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="2"] {
  --_hl: var(--bcn-topic-amber-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="3"] {
  --_hl: var(--bcn-topic-amber-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="amber"][data-shade="4"] {
  --_hl: var(--bcn-topic-amber-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="1"] {
  --_hl: var(--bcn-topic-blue-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="2"] {
  --_hl: var(--bcn-topic-blue-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="3"] {
  --_hl: var(--bcn-topic-blue-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="blue"][data-shade="4"] {
  --_hl: var(--bcn-topic-blue-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="1"] {
  --_hl: var(--bcn-topic-violet-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="2"] {
  --_hl: var(--bcn-topic-violet-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="3"] {
  --_hl: var(--bcn-topic-violet-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="violet"][data-shade="4"] {
  --_hl: var(--bcn-topic-violet-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="1"] {
  --_hl: var(--bcn-topic-grass-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="2"] {
  --_hl: var(--bcn-topic-grass-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="3"] {
  --_hl: var(--bcn-topic-grass-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="grass"][data-shade="4"] {
  --_hl: var(--bcn-topic-grass-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="1"] {
  --_hl: var(--bcn-topic-orange-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="2"] {
  --_hl: var(--bcn-topic-orange-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="3"] {
  --_hl: var(--bcn-topic-orange-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="orange"][data-shade="4"] {
  --_hl: var(--bcn-topic-orange-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="1"] {
  --_hl: var(--bcn-topic-crimson-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="2"] {
  --_hl: var(--bcn-topic-crimson-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="3"] {
  --_hl: var(--bcn-topic-crimson-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="crimson"][data-shade="4"] {
  --_hl: var(--bcn-topic-crimson-4);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="1"] {
  --_hl: var(--bcn-topic-slate-1);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="2"] {
  --_hl: var(--bcn-topic-slate-2);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="3"] {
  --_hl: var(--bcn-topic-slate-3);
}
:is(mark.bcn-hl, .bcn-topic-dot)[data-family="slate"][data-shade="4"] {
  --_hl: var(--bcn-topic-slate-4);
}
.typography-body-lg {
  font-family: var(--typography-body-lg-font-family);
  font-size: var(--typography-body-lg-font-size);
  font-weight: var(--typography-body-lg-font-weight);
  line-height: var(--typography-body-lg-line-height);
  letter-spacing: var(--typography-body-lg-letter-spacing);
}
```

## Tokens
- `--bcn-topic-amber-1`: #ffee9c _(component)_
- `--bcn-topic-amber-2`: #f3d673 _(component)_
- `--bcn-topic-amber-3`: #e9c162 _(component)_
- `--bcn-topic-amber-4`: #e2a336 _(component)_
- `--bcn-topic-amber-ink`: #ab6400 _(component)_
- `--bcn-topic-blue-1`: #d5efff _(component)_
- `--bcn-topic-blue-2`: #acd8fc _(component)_
- `--bcn-topic-blue-3`: #8ec8f6 _(component)_
- `--bcn-topic-blue-4`: #5eb1ef _(component)_
- `--bcn-topic-blue-ink`: #0d74ce _(component)_
- `--bcn-topic-crimson-1`: #fedce7 _(component)_
- `--bcn-topic-crimson-2`: #f3bed1 _(component)_
- `--bcn-topic-crimson-3`: #eaacc3 _(component)_
- `--bcn-topic-crimson-4`: #e093b2 _(component)_
- `--bcn-topic-crimson-ink`: #cb1d63 _(component)_
- `--bcn-topic-grass-1`: #daf1db _(component)_
- `--bcn-topic-grass-2`: #b2ddb5 _(component)_
- `--bcn-topic-grass-3`: #94ce9a _(component)_
- `--bcn-topic-grass-4`: #65ba74 _(component)_
- `--bcn-topic-grass-ink`: #2a7e3b _(component)_
- `--bcn-topic-orange-1`: #ffdfb5 _(component)_
- `--bcn-topic-orange-2`: #ffc182 _(component)_
- `--bcn-topic-orange-3`: #f5ae73 _(component)_
- `--bcn-topic-orange-4`: #ec9455 _(component)_
- `--bcn-topic-orange-ink`: #cc4e00 _(component)_
- `--bcn-topic-slate-1`: #e0e1e6 _(component)_
- `--bcn-topic-slate-2`: #d9d9e0 _(component)_
- `--bcn-topic-slate-3`: #cdced6 _(component)_
- `--bcn-topic-slate-4`: #b9bbc6 _(component)_
- `--bcn-topic-slate-ink`: #60646c _(component)_
- `--bcn-topic-violet-1`: #ebe4ff _(component)_
- `--bcn-topic-violet-2`: #d4cafe _(component)_
- `--bcn-topic-violet-3`: #c2b5f5 _(component)_
- `--bcn-topic-violet-4`: #aa99ec _(component)_
- `--bcn-topic-violet-ink`: #6550b9 _(component)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--radius-xs`: .125rem _(semantic)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-body-lg-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-lg-font-size`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(semantic)_
- `--typography-body-lg-font-weight`: 350 _(semantic)_
- `--typography-body-lg-letter-spacing`: .01em _(semantic)_
- `--typography-body-lg-line-height`: 1.8 _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
