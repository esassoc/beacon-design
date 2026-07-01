# Timeline — work-availability swimlanes

The Timeline answers "when does work become available, and in what status?" — one shared auto-ranged time axis with a fixture-TODAY marker line and three swimlanes of one-dot-per-site milestones: Work starts (cleared sites @ planned start), Clearance visits (sites with a scheduled review @ the earliest upcoming visit), and Blocks expected to lift (blocked / provisional-block sites @ blockedUntil). Dots are colored by derived status; a row opens the work-area drawer.

## Key decisions
- Adapted from permit-tracking's clear-to-build timeline: ONE row per site per lane (the stagger) is the collision strategy — 18 provisional blocks lifting on the same date read as one aligned column of hollow dots instead of an unreadable pile.
- Provisional-block dots are HOLLOW (same grammar as the map/legend/readiness); confirmed statuses are solid, colored by var(--st-<status>) — the dot color IS the derived status.
- Everything is JS-derived from the store and re-derives after every save / block confirmation; indefinite blocks with no lift date are counted in the side note (#tl-excluded), not plotted, so the axis stays honest.

## Gotchas
- The axis auto-ranges to the data — an out-of-range milestone would silently fall off; keep the excluded-count note so nothing is hidden.
- Timeline rows carry the work-area id in their title and wire an openWorkArea click listener directly (NO data-wa attribute) — automation must click by row text/title, not [data-wa].

## Done when
- Three lanes on one axis with a TODAY marker; one dot per site per lane colored by derived status; provisional-block dots hollow; indefinite blocks noted, not plotted; clicking a row opens its work-area drawer.

## Markup
```html
<section class="tl" aria-label="Work availability timeline">
  <div class="tl__head">
    <h3 class="tl__title">When does work become available?</h3>
    <p class="tl__sub">
      Work areas by milestone date — colored by current derived status
    </p>
  </div>
  <div class="tl__axisrow" aria-hidden="true">
    <span></span>
    <div class="tl__axis" id="tl-axis">
      <span class="tl-tick" style="left: 0%">Jun 2026</span
      ><span class="tl-tick" style="left: 24.5902%">Jul 2026</span
      ><span class="tl-tick" style="left: 50%">Aug 2026</span
      ><span class="tl-tick" style="left: 75.4098%">Sep 2026</span
      ><span class="tl-tick tl-tick--today" style="left: 8.19672%">Today</span>
    </div>
    <span></span>
  </div>
  <div class="tl__chart" id="tl-chart">
    <span class="tl-today-line" style="left: calc(8.19672% + 177.967px)"></span>
    <section class="tl-lane">
      <h4 class="tl-lane__label">
        Work starts<span class="tl-lane__count">9 work areas</span>
      </h4>
      <ul class="tl-lane__rows">
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCSHF-DH-144 · Cleared · Jun 12, 2026"
        >
          <span class="tl-row__name"
            >DCSHF-DH-144<span class="tl-row__sub">Shaft Sites</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 9.01639%; background: var(--st-cleared)"
            ></span></span
          ><span class="tl-row__meta">Jun 12, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCBPP-DH-066 · Cleared · Jun 15, 2026"
        >
          <span class="tl-row__name"
            >DCBPP-DH-066<span class="tl-row__sub">Bethany Pumping Plant</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 11.4754%; background: var(--st-cleared)"
            ></span></span
          ><span class="tl-row__meta">Jun 15, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-292 · Cleared · Jun 15, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-292<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 11.4754%; background: var(--st-cleared)"
            ></span></span
          ><span class="tl-row__meta">Jun 15, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCBPP-DH-034 · Cleared · Jun 16, 2026"
        >
          <span class="tl-row__name"
            >DCBPP-DH-034<span class="tl-row__sub">Bethany Pumping Plant</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 12.2951%; background: var(--st-cleared)"
            ></span></span
          ><span class="tl-row__meta">Jun 16, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR1-DH-008 · Cleared · Jun 16, 2026"
        >
          <span class="tl-row__name"
            >DCTR1-DH-008<span class="tl-row__sub">Tunnel Reach 1</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 12.2951%; background: var(--st-cleared)"
            ></span></span
          ><span class="tl-row__meta">Jun 16, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRAI-DH-014 · Cleared · Jun 17, 2026"
        >
          <span class="tl-row__name"
            >DCRAI-DH-014<span class="tl-row__sub">Rail Alignment</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 13.1148%; background: var(--st-cleared)"
            ></span></span
          ><span class="tl-row__meta">Jun 17, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-294 · Cleared w/ Stipulations · Jun 17, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-294<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 13.1148%; background: var(--st-cleared-stipulations)"
            ></span></span
          ><span class="tl-row__meta">Jun 17, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-184 · Provisional Block · Jun 29, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-184<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 22.9508%"></span></span
          ><span class="tl-row__meta">Jun 29, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-DH-012 · Provisional Block · Jun 30, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-DH-012<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 23.7705%"></span></span
          ><span class="tl-row__meta">Jun 30, 2026</span>
        </li>
      </ul>
    </section>
    <section class="tl-lane">
      <h4 class="tl-lane__label">
        Clearance visits<span class="tl-lane__count">3 work areas</span>
      </h4>
      <ul class="tl-lane__rows">
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-184 · Provisional Block · Jun 15, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-184<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 11.4754%"></span></span
          ><span class="tl-row__meta">Jun 15, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-DH-012 · Provisional Block · Jun 16, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-DH-012<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 12.2951%"></span></span
          ><span class="tl-row__meta">Jun 16, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-DH-010 · Blocked · Sep 2, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-DH-010<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 76.2295%; background: var(--st-blocked)"
            ></span></span
          ><span class="tl-row__meta">Sep 2, 2026</span>
        </li>
      </ul>
    </section>
    <section class="tl-lane">
      <h4 class="tl-lane__label">
        Blocks expected to lift<span class="tl-lane__count">19 work areas</span>
      </h4>
      <ul class="tl-lane__rows">
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-023 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-023<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-025 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-025<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-027 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-027<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-029 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-029<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-032 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-032<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-033 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-033<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-034 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-034<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-035 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-035<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-036 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-036<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCLEV-DH-037 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCLEV-DH-037<span class="tl-row__sub">Levees</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-181 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-181<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-182 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-182<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-183 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-183<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCRDS-DH-184 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCRDS-DH-184<span class="tl-row__sub">Roads</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-CPT-007 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-CPT-007<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-DH-003 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-DH-003<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-DH-006 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-DH-006<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-DH-010 · Blocked · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-DH-010<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span
              class="tl-dot"
              style="left: 43.4426%; background: var(--st-blocked)"
            ></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
        <li
          class="tl-row"
          tabindex="0"
          role="button"
          title="DCTR2-DH-012 · Provisional Block · Jul 24, 2026"
        >
          <span class="tl-row__name"
            >DCTR2-DH-012<span class="tl-row__sub">Tunnel Reach 2</span></span
          ><span class="tl-row__track"
            ><span class="tl-dot tl-dot--hollow" style="left: 43.4426%"></span></span
          ><span class="tl-row__meta">Jul 24, 2026</span>
        </li>
      </ul>
    </section>
  </div>
  <p class="tl__excluded" id="tl-excluded">
    200 work areas not yet surveyed — no dates to plot · 2 blocked indefinitely (GGS) · 1
    cleared without a planned start date
  </p>
</section>
```

## Styles
```css
.tl {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.tl__head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: var(--spacing-300);
  flex-wrap: wrap;
}
.tl__title {
  margin: 0;
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.tl__sub {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}
.tl__axisrow {
  display: grid;
  grid-template-columns: 190px 1fr 120px;
  gap: var(--spacing-400);
}
.tl__axis {
  position: relative;
  height: 18px;
}
.tl-tick {
  position: absolute;
  top: 0;
  transform: translate(-50%);
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.tl-tick--today {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
}
.tl__chart {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-500);
}
.tl-today-line {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 2px;
  margin-left: -1px;
  background: color-mix(in srgb, var(--color-primary) 45%, transparent);
  pointer-events: none;
  z-index: 1;
}
.tl-lane {
  display: flex;
  flex-direction: column;
}
.tl-lane__label {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-100);
  font-size: 0.9375rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.tl-lane__count {
  font-size: 0.875rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-text-tertiary);
  font-variant-numeric: tabular-nums;
}
.tl-lane__rows {
  list-style: none;
  margin: 0;
  padding: 0;
}
.tl-row {
  display: grid;
  grid-template-columns: 190px 1fr 120px;
  gap: var(--spacing-400);
  align-items: center;
  padding: var(--spacing-150) 0;
  border-top: 1px solid var(--color-border-light);
  cursor: pointer;
}
.tl-row__name {
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.tl-row__sub {
  font-size: 0.8125rem;
  font-weight: var(--font-weight-regular);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.tl-row__track {
  position: relative;
  height: 14px;
  border-radius: var(--radius-full);
  background: var(--color-background);
}
.tl-dot {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-surface);
  box-shadow: 0 0 0 1px #0000001f;
}
.tl-row__meta {
  text-align: right;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.tl-dot--hollow {
  background: var(--color-surface);
  border: 2.5px solid var(--st-provisional-block);
  box-shadow: none;
}
.tl__excluded {
  margin: 0;
  padding-top: var(--spacing-200);
  border-top: 1px solid var(--color-border-light);
  font-size: 0.875rem;
  color: var(--color-text-tertiary);
}
```

## Tokens
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--st-provisional-block`: #d73027 _(component)_
