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
      ><span class="ctb-tick" style="left: 16.3934%">Jul</span
      ><span class="ctb-tick" style="left: 33.3333%">Aug</span
      ><span class="ctb-tick" style="left: 50.2732%">Sep</span
      ><span class="ctb-tick" style="left: 66.6667%">Oct</span
      ><span class="ctb-tick" style="left: 83.6066%">Nov</span
      ><span class="ctb-tick ctb-tick--today" style="left: 50.8197%">Today</span>
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
            left: 0.546448087431694%;
            width: 50.27322404371585%;
            background: var(--st-cleared);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 0.546448087431694%; background: var(--st-cleared)"
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
            left: 0.546448087431694%;
            width: 50.27322404371585%;
            background: var(--st-cleared);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 0.546448087431694%; background: var(--st-cleared)"
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
            left: 0.546448087431694%;
            width: 50.27322404371585%;
            background: var(--st-cleared);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 0.546448087431694%; background: var(--st-cleared)"
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
            left: 26.775956284153008%;
            width: 24.043715846994534%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 26.775956284153008%; background: var(--st-in-preparation)"
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
            left: 43.71584699453552%;
            width: 7.1038251366120235%;
            background: var(--st-under-review);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 43.71584699453552%; background: var(--st-under-review)"
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
            left: 49.18032786885246%;
            width: 1.639344262295083%;
            background: var(--st-under-review);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 49.18032786885246%; background: var(--st-under-review)"
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
            left: 49.18032786885246%;
            width: 1.639344262295083%;
            background: var(--st-under-review);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 49.18032786885246%; background: var(--st-under-review)"
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
            left: 50.81967213114754%;
            width: 1.639344262295083%;
            background: var(--st-submitted);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 52.459016393442624%; background: var(--st-submitted)"
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
            left: 50.81967213114754%;
            width: 4.37158469945355%;
            background: var(--st-submitted);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 55.19125683060109%; background: var(--st-submitted)"
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
            left: 50.81967213114754%;
            width: 4.37158469945355%;
            background: var(--st-submitted);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 55.19125683060109%; background: var(--st-submitted)"
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
            left: 50.81967213114754%;
            width: 12.568306010928964%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 63.387978142076506%; background: var(--st-in-preparation)"
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
            left: 50.81967213114754%;
            width: 12.568306010928964%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 63.387978142076506%; background: var(--st-in-preparation)"
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
            left: 50.81967213114754%;
            width: 12.568306010928964%;
            background: var(--st-in-preparation);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 63.387978142076506%; background: var(--st-in-preparation)"
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
            left: 50.81967213114754%;
            width: 23.497267759562845%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 74.31693989071039%; background: var(--st-not-started)"
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
            left: 50.81967213114754%;
            width: 23.497267759562845%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 74.31693989071039%; background: var(--st-not-started)"
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
            left: 50.81967213114754%;
            width: 23.497267759562845%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 74.31693989071039%; background: var(--st-not-started)"
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
            left: 50.81967213114754%;
            width: 32.786885245901644%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 83.60655737704919%; background: var(--st-not-started)"
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
            left: 50.81967213114754%;
            width: 32.786885245901644%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 83.60655737704919%; background: var(--st-not-started)"
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
            left: 50.81967213114754%;
            width: 32.786885245901644%;
            background: var(--st-not-started);
          "
        ></span>
        <span
          class="ctb-row__dot"
          style="left: 83.60655737704919%; background: var(--st-not-started)"
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
  gap: var(--spacing-200);
  margin-top: var(--spacing-400);
  padding: var(--spacing-400);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  flex-direction: column;
  display: flex;
}
.ctb__head {
  justify-content: space-between;
  align-items: baseline;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  display: flex;
}
.ctb__title {
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.ctb__sub {
  color: var(--color-content-default-tertiary);
  margin: 0;
  font-size: 0.8125rem;
}
.ctb__axisrow {
  gap: var(--spacing-400);
  grid-template-columns: 190px 1fr 260px;
  display: grid;
}
.ctb__axis {
  height: 18px;
  position: relative;
}
.ctb-tick {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  font-size: 0.75rem;
  position: absolute;
  top: 0;
  transform: translate(-50%);
}
.ctb-tick--today {
  color: var(--color-background-brand);
  font-weight: var(--typography-font-weight-semibold);
}
.ctb__rows {
  margin: 0;
  padding: 0;
  list-style: none;
}
.ctb-row {
  gap: var(--spacing-400);
  padding: var(--spacing-200) 0;
  border-top: 1px solid var(--color-border-default-subtle);
  cursor: pointer;
  grid-template-columns: 190px 1fr 260px;
  align-items: center;
  display: grid;
}
.ctb-row:hover {
  background: var(--grid-row-bg-hover);
}
.ctb-row__name {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.ctb-row__sub {
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.ctb-row__track {
  border-radius: var(--radius-full);
  background: var(--bcn-gray-100);
  height: 12px;
  position: relative;
}
.ctb-row__bar {
  border-radius: var(--radius-full);
  opacity: 0.55;
  height: 4px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.ctb-row__dot {
  border: 2px solid var(--color-background-elevation-raised);
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px #0000001f;
}
.ctb-row__meta {
  text-align: right;
  min-width: 0;
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  font-variant-numeric: tabular-nums;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  display: flex;
}
```

## Tokens
- `--bcn-gray-100`: #efefef _(component)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--grid-row-bg-hover`: #efefef _(component)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--typography-font-weight-regular`: 350 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
