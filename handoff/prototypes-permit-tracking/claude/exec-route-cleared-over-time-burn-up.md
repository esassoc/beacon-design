# Exec — route cleared over time (burn-up)

Permit Tracking · source prototype: https://esassoc.github.io/beacon-design/prototypes/permit-tracking/

![Exec — route cleared over time (burn-up), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/exec-route-cleared-over-time-burn-up.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-permit-tracking/claude/exec-route-cleared-over-time-burn-up.phone.png

A burn-up chart: cumulative route-miles cleared to date (the actual trail from frozen reporting history) plus the projected path to full clearance from current agency estimates, against the full-route target line. Momentum — are we on pace?

## Key decisions

- Three series, keyed in the legend: actual miles cleared, projected clearance, and the full-route target ({total} miles). Actual is history; projected is the forecast continuation.
- Drawn as an SVG sized to the container's real pixel width (a ResizeObserver redraws on resize and when the tab first reveals it) so the axis text stays at true size, never CSS-scaled.

## Gotchas

- On boot the Summary panel is not the active slot, so clientWidth is 0 and the chart first draws at a 760px fallback; it MUST redraw at real width when revealed — wire the ResizeObserver (or an Angular afterViewInit/resize equivalent) or the labels render mis-sized.
- Projected ≠ committed — it is "if agency estimates hold"; keep it visually distinct (dashed/lighter) from the actual trail.

## Done when

- A burn-up with an actual-cleared trail, a projected continuation, and a full-route target line, correctly sized to the container on reveal and resize.

## Markup

_12 repeated elements are collapsed in the markup below; the comments say where._

```html
<div class="exec__burnup">
  <div class="exec__burnup-chart" id="exec-burnup">
    <svg
      viewBox="0 0 886 280"
      class="bu-svg"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Cumulative route-miles cleared to date, with the projected path to full clearance from current agency estimates"
    >
      <line x1="44" y1="250.0" x2="866" y2="250.0" class="bu-grid"></line>
      <text x="36" y="250.0" class="bu-ylabel">0</text>
      <line x1="44" y1="193.0" x2="866" y2="193.0" class="bu-grid"></line>
      <text x="36" y="193.0" class="bu-ylabel">50</text>
      <line x1="44" y1="136.0" x2="866" y2="136.0" class="bu-grid"></line>
      <text x="36" y="136.0" class="bu-ylabel">100</text>
      <line x1="44" y1="79.0" x2="866" y2="79.0" class="bu-grid"></line>
      <text x="36" y="79.0" class="bu-ylabel">151</text>
      <line x1="44" y1="22.0" x2="866" y2="22.0" class="bu-grid"></line>
      <text x="36" y="22.0" class="bu-ylabel">201</text>
      <text x="-66.4" y="272" class="bu-xlabel">Mar</text>
      <text x="51.6" y="272" class="bu-xlabel">Apr</text>
      <!-- …and 7 more like this (<text class="[object SVGAnimatedString]">) -->
      <line x1="44" y1="22.0" x2="866" y2="22.0" class="bu-target"></line>
      <polyline
        points="367.5,238.0 470.2,228.4 588.2,213.0 626.3,185.6 649.1,183.0 668.1,149.9 725.2,70.7 801.3,57.4 866.0,22.0"
        class="bu-proj"
      ></polyline>
      <polygon
        points="44,250.0 44.0,250.0 97.3,250.0 150.6,250.0 203.8,250.0 257.1,246.7 310.4,241.6 367.5,238.0 367.5,250.0"
        class="bu-area"
      ></polygon>
      <polyline
        points="44.0,250.0 97.3,250.0 150.6,250.0 203.8,250.0 257.1,246.7 310.4,241.6 367.5,238.0"
        class="bu-actual"
      ></polyline>
      <circle cx="44.0" cy="250.0" r="3" class="bu-dot"></circle>
      <circle cx="97.3" cy="250.0" r="3" class="bu-dot"></circle>
      <!-- …and 5 more like this (<circle class="[object SVGAnimatedString]">) -->
      <line x1="367.5" y1="22" x2="367.5" y2="250" class="bu-today"></line>
      <text x="367.5" y="16" class="bu-todaylabel">Today</text>
      <text x="367.5" y="229.0" class="bu-nowlabel">10.6 mi</text>
    </svg>
  </div>
  <ul class="exec__burnup-legend">
    <li><span class="exec__burnup-key exec__burnup-key--actual"></span>Miles cleared</li>
    <li><span class="exec__burnup-key exec__burnup-key--proj"></span>Projected clearance</li>
    <li><span class="exec__burnup-key exec__burnup-key--target"></span>Full route (200.7 mi)</li>
  </ul>
</div>
```

## Styles

```css
.exec__burnup {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.exec__burnup-chart {
  width: 100%;
}
.bu-svg {
  width: 100%;
  height: auto;
  display: block;
  overflow: visible;
}
.bu-grid {
  stroke: var(--color-border-default-subtle);
  stroke-width: 1px;
}
.bu-target {
  stroke: var(--color-content-default-tertiary);
  stroke-width: 1.5px;
  stroke-dasharray: 2 3;
}
.bu-proj {
  fill: none;
  stroke: var(--st-cleared);
  stroke-width: 2px;
  stroke-dasharray: 5 4;
  stroke-linejoin: round;
  opacity: 0.75;
}
.bu-today {
  stroke: var(--color-background-brand);
  stroke-width: 1px;
  stroke-dasharray: 3 3;
  opacity: 0.6;
}
.bu-area {
  fill: color-mix(in srgb, var(--st-cleared) 14%, transparent);
  stroke: none;
}
.bu-actual {
  fill: none;
  stroke: var(--st-cleared);
  stroke-width: 2.5px;
  stroke-linejoin: round;
  stroke-linecap: round;
}
.bu-dot {
  fill: var(--st-cleared);
  stroke: var(--color-background-elevation-raised);
  stroke-width: 1.5px;
}
.bu-ylabel {
  fill: var(--color-content-default-tertiary);
  text-anchor: end;
  dominant-baseline: middle;
  font-size: 12.5px;
}
.bu-xlabel {
  fill: var(--color-content-default-tertiary);
  text-anchor: middle;
  font-size: 12.5px;
}
.bu-todaylabel {
  fill: var(--color-background-brand);
  text-anchor: middle;
  font-size: 13.5px;
  font-weight: 600;
}
.bu-nowlabel {
  fill: var(--st-cleared);
  text-anchor: middle;
  font-size: 13.5px;
  font-weight: 700;
}
.exec__burnup-legend {
  gap: var(--spacing-200) var(--spacing-500);
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.exec__burnup-legend li {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.exec__burnup-key {
  border-top-style: solid;
  border-top-width: 2.5px;
  flex-shrink: 0;
  width: 18px;
  height: 0;
}
.exec__burnup-key--actual {
  border-top-color: var(--st-cleared);
}
.exec__burnup-key--proj {
  border-top-color: var(--st-cleared);
  border-top-style: dashed;
}
.exec__burnup-key--target {
  border-top-color: var(--color-content-default-tertiary);
  border-top-style: dotted;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--st-cleared` | `#1a9850` | component |
