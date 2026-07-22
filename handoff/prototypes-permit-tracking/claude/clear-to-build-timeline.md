# Clear-to-build timeline

A horizontal timeline of segments ordered by projected clear-to-build date against a Today tick — the planning companion to the mileage strip (the two headline figures read together). Each row is a segment; its bar runs from Today to the projected clear date, colored by derived status. Clicking a row opens the segment dossier.

## Key decisions
- Projected clear date = the latest actual/estimated approval among the segment's gating permits (the segment is buildable only once its slowest permit lands).
- Rows are sorted by that date so leadership reads "what frees up next" top-to-bottom; a Today tick anchors the axis.
- JS-rendered from the same store as the map (renderTimeline at boot), so it re-derives after every permit edit.

## Gotchas
- Segments with no dated gating permit have no bar (clear date "—"); render the row without a bar rather than dropping it, so the backlog stays visible.
- The whole row is the click target → segment dossier (.ctb-row click → openSegment); preserve that affordance.

## Done when
- Segments listed by projected clear date with bars from Today to that date, colored by status; clicking a row opens the segment dossier.

## Markup
```html
<section class="ctb" aria-label="Clear-to-build timeline">
  <div class="ctb__head">
    <h3 class="ctb__title">Clear-to-build timeline</h3>
    <p class="ctb__sub">Segments by projected clear-to-build date</p>
  </div>
  <div class="ctb__axisrow" aria-hidden="true">
    <span></span>
    <div class="ctb__axis" id="ctb-axis">
      <span class="ctb-tick" style="left: 0%">Jun ’26</span
      ><span class="ctb-tick" style="left: 19.6078%">Jul</span
      ><span class="ctb-tick" style="left: 39.8693%">Aug</span
      ><span class="ctb-tick" style="left: 60.1307%">Sep</span
      ><span class="ctb-tick" style="left: 79.7386%">Oct</span
      ><span class="ctb-tick ctb-tick--today" style="left: 33.1427%">Today</span>
    </div>
    <span></span>
  </div>
  <ul class="ctb__rows" id="ctb-rows">
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 1E<span class="ctb-row__sub">Path 1</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 0.4629629629629629%;
            width: 32.67973856209151%;
            background: var(--st-cleared);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 0.4629629629629629%; background: var(--st-cleared)"
        ></span
      ></span>
      <span class="ctb-row__meta">Jun 2, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 1F<span class="ctb-row__sub">Path 1</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 0.4629629629629629%;
            width: 32.67973856209151%;
            background: var(--st-cleared);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 0.4629629629629629%; background: var(--st-cleared)"
        ></span
      ></span>
      <span class="ctb-row__meta">Jun 2, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3G<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 0.4629629629629629%;
            width: 32.67973856209151%;
            background: var(--st-cleared);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 0.4629629629629629%; background: var(--st-cleared)"
        ></span
      ></span>
      <span class="ctb-row__meta">Jun 2, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3F<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 31.835511982570807%;
            width: 1.3071895424836626%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 31.835511982570807%; background: var(--st-in-preparation)"
        ></span
      ></span>
      <span class="ctb-row__meta">Jul 20, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 1B<span class="ctb-row__sub">Path 1</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 18.95424836601306%;
            background: var(--st-under-review);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 52.09694989106753%; background: var(--st-under-review)"
        ></span
      ></span>
      <span class="ctb-row__meta">Aug 20, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Easements Reach<span class="ctb-row__sub">Path 1</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 25.490196078431367%;
            background: var(--st-under-review);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 58.63289760348584%; background: var(--st-under-review)"
        ></span
      ></span>
      <span class="ctb-row__meta">Aug 30, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 2B<span class="ctb-row__sub">Path 2</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 25.490196078431367%;
            background: var(--st-under-review);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 58.63289760348584%; background: var(--st-under-review)"
        ></span
      ></span>
      <span class="ctb-row__meta">Aug 30, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 4A<span class="ctb-row__sub">Path 4</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 29.411764705882355%;
            background: var(--st-submitted);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 62.554466230936825%; background: var(--st-submitted)"
        ></span
      ></span>
      <span class="ctb-row__meta">Sep 5, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 1A<span class="ctb-row__sub">Path 1</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 32.67973856209151%;
            background: var(--st-submitted);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 65.82244008714598%; background: var(--st-submitted)"
        ></span
      ></span>
      <span class="ctb-row__meta">Sep 10, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3B<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 32.67973856209151%;
            background: var(--st-submitted);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 65.82244008714598%; background: var(--st-submitted)"
        ></span
      ></span>
      <span class="ctb-row__meta">Sep 10, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 1C<span class="ctb-row__sub">Path 1</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 42.48366013071895%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 75.62636165577342%; background: var(--st-in-preparation)"
        ></span
      ></span>
      <span class="ctb-row__meta">Sep 25, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 2A<span class="ctb-row__sub">Path 2</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 42.48366013071895%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 75.62636165577342%; background: var(--st-in-preparation)"
        ></span
      ></span>
      <span class="ctb-row__meta">Sep 25, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3A<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 42.48366013071895%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 75.62636165577342%; background: var(--st-in-preparation)"
        ></span
      ></span>
      <span class="ctb-row__meta">Sep 25, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3H<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 55.55555555555555%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 88.69825708061002%; background: var(--st-not-started)"
        ></span
      ></span>
      <span class="ctb-row__meta">Oct 15, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3I<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 55.55555555555555%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 88.69825708061002%; background: var(--st-not-started)"
        ></span
      ></span>
      <span class="ctb-row__meta">Oct 15, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3J<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 55.55555555555555%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 88.69825708061002%; background: var(--st-not-started)"
        ></span
      ></span>
      <span class="ctb-row__meta">Oct 15, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3C<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 66.66666666666666%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 99.80936819172113%; background: var(--st-not-started)"
        ></span
      ></span>
      <span class="ctb-row__meta">Nov 1, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3D<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 66.66666666666666%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 99.80936819172113%; background: var(--st-not-started)"
        ></span
      ></span>
      <span class="ctb-row__meta">Nov 1, 2026</span>
    </li>
    <li class="ctb-row">
      <span class="ctb-row__name"
        >Segment 3E<span class="ctb-row__sub">Path 3</span></span
      >
      <span class="ctb-row__track"
        ><span
          class="ctb-row__bar"
          style="
            left: 33.14270152505447%;
            width: 66.66666666666666%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 99.80936819172113%; background: var(--st-not-started)"
        ></span
      ></span>
      <span class="ctb-row__meta">Nov 1, 2026</span>
    </li>
  </ul>
</section>
```

## Styles
```css
.ctb {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.ctb__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.ctb__title {
  margin: 0;
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.ctb__sub {
  margin: 0;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
}
.ctb__axisrow {
  display: grid;
  grid-template-columns: 190px 1fr 260px;
  gap: var(--spacing-400);
}
.ctb__axis {
  position: relative;
  height: 18px;
}
.ctb__rows {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ctb-tick {
  position: absolute;
  top: 0;
  transform: translate(-50%);
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.ctb-tick--today {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}
.ctb-row {
  display: grid;
  grid-template-columns: 190px 1fr 260px;
  gap: var(--spacing-400);
  align-items: center;
  padding: var(--spacing-200) 0;
  border-top: 1px solid var(--color-border-light);
  cursor: pointer;
}
.ctb-row__name {
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.ctb-row__sub {
  font-size: 0.75rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ctb-row__track {
  position: relative;
  height: 12px;
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
}
.ctb-row__bar {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 4px;
  border-radius: var(--radius-full);
  opacity: 0.55;
}
.ctb-row__dot {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-surface);
  box-shadow: 0 0 0 1px #0000001f;
}
.ctb-row__meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  min-width: 0;
  text-align: right;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
