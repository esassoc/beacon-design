# 90-day trend (cohort bars)

BcnTrendPanel — a three-up stat band (still active / resolved / net change over the trailing 90 days) over a compact grouped weekly bar chart: 13 columns, two thin bars each. It answers "is the backlog growing or shrinking", which neither the donut nor the outstanding list can show.

## Key decisions
- This is a COHORT / AGING view, not an opened-vs-closed event flow. Each observation is counted exactly ONCE, under the week it was first reported, split by its CURRENT status. That is the single most important property of the widget and the easiest to break.
- All bars scale against ONE shared max computed across every week AND both series, so heights are comparable across the whole chart. Bars are never renormalised per column.
- The stat band is three esa-stat legos; only the plot itself is bespoke.

## Gotchas
- An earlier version bucketed resolved items by their RESOLVE date while active items were bucketed by report date. That counted every resolved observation twice — once in each of two different weeks — and inflated the chart. If you re-derive this server-side, bucket strictly by first-reported week and split by current status.
- Per-column normalisation makes every week look equally busy and is a plausible-looking bug. Compute the max once, across both series and all 13 weeks, before rendering any bar.
- No esa-* chart lego exists for this either — same documented gap as the donut.

## Done when
- Thirteen weekly columns render, two bars each, with a caption naming the trailing-90-day window.
- Summing the two series across all weeks equals the total observation count for the window — no observation appears in two columns or two bars.
- The tallest bar in the chart touches the plot ceiling and every other bar is proportional to it, not to its own column.

## Markup
```html
<div class="esa-card">
  <div class="esa-card__header">
    <div class="esa-card__header-content">
      <div class="esa-card__titles"><h3 class="esa-card__title">90-Day Trend</h3></div>
    </div>
  </div>
  <div class="esa-card__body">
    <div class="bcn-trend stack" data-gap="lg">
      <!-- ── summary band ── -->
      <div class="bcn-trend__stats cluster" data-gap="xl" data-align="start">
        <div class="esa-stat">
          <div class="esa-stat__value">10</div>
          <div class="esa-stat__label">Still Active (90d)</div>
          <div class="esa-stat__sub">0.8/wk average</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value">7</div>
          <div class="esa-stat__label">Resolved (90d)</div>
          <div class="esa-stat__sub">0.5/wk average</div>
        </div>
        <div class="esa-stat">
          <div class="esa-stat__value">+3</div>
          <div class="esa-stat__label">Net change</div>
          <div class="esa-stat__sub">Backlog growing</div>
        </div>
      </div>
      <!-- ── weekly grouped bar chart ── -->
      <div class="stack" data-gap="sm">
        <ul class="bcn-trend__legend cluster" data-gap="md">
          <li class="bcn-trend__legend-item">
            <span class="bcn-trend__dot" style="--_c: var(--_c-active)"></span>
            <span class="type-label">Active</span>
          </li>
          <li class="bcn-trend__legend-item">
            <span class="bcn-trend__dot" style="--_c: var(--_c-resolved)"></span>
            <span class="type-label">Resolved</span>
          </li>
        </ul>
        <div class="bcn-trend__chart" style="--_cols: 13">
          <div class="bcn-trend__yaxis type-caption" aria-hidden="true">
            <span>3</span> <span>0</span>
          </div>
          <div class="bcn-trend__plot" aria-hidden="true">
            <div class="bcn-trend__col" title="May 8 — 0 still active, 1 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 33.3%"
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="May 15 — 0 still active, 1 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 33.3%"
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="May 22 — 0 still active, 1 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 33.3%"
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="May 29 — 0 still active, 0 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 0%"
                  data-zero=""
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jun 5 — 0 still active, 2 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 66.7%"
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jun 12 — 0 still active, 1 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 33.3%"
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jun 19 — 0 still active, 1 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 33.3%"
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jun 26 — 0 still active, 0 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 0%"
                  data-zero=""
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 0%"
                  data-zero=""
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jul 3 — 2 still active, 0 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 66.7%"
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 0%"
                  data-zero=""
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jul 10 — 3 still active, 0 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 100%"
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 0%"
                  data-zero=""
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jul 17 — 1 still active, 0 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 33.3%"
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 0%"
                  data-zero=""
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jul 24 — 3 still active, 0 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 100%"
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 0%"
                  data-zero=""
                ></span>
              </div>
            </div>
            <div class="bcn-trend__col" title="Jul 31 — 1 still active, 0 resolved">
              <div class="bcn-trend__bars">
                <span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-active); --_h: 33.3%"
                ></span
                ><span
                  class="bcn-trend__bar"
                  style="--_c: var(--_c-resolved); --_h: 0%"
                  data-zero=""
                ></span>
              </div>
            </div>
          </div>
          <div class="bcn-trend__ticks" aria-hidden="true">
            <span class="bcn-trend__tick type-caption">May 8</span
            ><span class="bcn-trend__tick type-caption"></span
            ><span class="bcn-trend__tick type-caption">May 22</span
            ><span class="bcn-trend__tick type-caption"></span
            ><span class="bcn-trend__tick type-caption">Jun 5</span
            ><span class="bcn-trend__tick type-caption"></span
            ><span class="bcn-trend__tick type-caption">Jun 19</span
            ><span class="bcn-trend__tick type-caption"></span
            ><span class="bcn-trend__tick type-caption">Jul 3</span
            ><span class="bcn-trend__tick type-caption"></span
            ><span class="bcn-trend__tick type-caption">Jul 17</span
            ><span class="bcn-trend__tick type-caption"></span
            ><span class="bcn-trend__tick type-caption">Jul 31</span>
          </div>
        </div>
        <!-- The plot is aria-hidden; this table is the accessible reading of the
           same data (and the visible-values relief the low-contrast amber
           series owes against a near-white surface). -->
        <table class="bcn-trend__table">
          <caption>
            Needs-attention/non-compliance observations by week first reported, trailing
            90 days
          </caption>
          <thead>
            <tr>
              <th scope="col">Week of</th>
              <th scope="col">Still Active</th>
              <th scope="col">Resolved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">May 8</th>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">May 15</th>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">May 22</th>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">May 29</th>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Jun 5</th>
              <td>0</td>
              <td>2</td>
            </tr>
            <tr>
              <th scope="row">Jun 12</th>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Jun 19</th>
              <td>0</td>
              <td>1</td>
            </tr>
            <tr>
              <th scope="row">Jun 26</th>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Jul 3</th>
              <td>2</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Jul 10</th>
              <td>3</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Jul 17</th>
              <td>1</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Jul 24</th>
              <td>3</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Jul 31</th>
              <td>1</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
```

## Styles
```css
.bcn-trend {
  --_c-active: var(--bcn-trend-active-color, var(--color-warning));
  --_c-resolved: var(--bcn-trend-resolved-color, var(--color-text-tertiary));
  --_plot-h: var(--bcn-trend-plot-height, 132px);
  --_bar-w: var(--bcn-trend-bar-width, 9px);
}
.bcn-trend .esa-stat__value {
  font-variant-numeric: tabular-nums;
}
.bcn-trend__legend {
  list-style: none;
  padding: 0;
}
.bcn-trend__legend-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-text-secondary);
}
.bcn-trend__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  background: var(--_c);
  flex-shrink: 0;
}
.bcn-trend__chart {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: var(--spacing-200);
  row-gap: var(--spacing-100);
}
.bcn-trend__yaxis {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: var(--_plot-h);
  text-align: right;
  color: var(--color-text-secondary);
  font-variant-numeric: tabular-nums;
}
.bcn-trend__plot,
.bcn-trend__ticks {
  grid-column: 2;
  display: grid;
  grid-template-columns: repeat(var(--_cols), minmax(0, 1fr));
  gap: var(--spacing-150);
}
.bcn-trend__plot {
  height: var(--_plot-h);
  border-bottom: 1px solid var(--color-border);
}
.bcn-trend__col {
  display: flex;
  align-items: flex-end;
  border-radius: var(--radius-100) var(--radius-100) 0 0;
}
.bcn-trend__col:hover {
  background: var(--color-surface-sunken);
}
.bcn-trend__bars {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2px;
  width: 100%;
  height: 100%;
}
.bcn-trend__bar {
  flex: 0 1 var(--_bar-w);
  height: var(--_h);
  background: var(--_c);
  border-radius: var(--radius-100) var(--radius-100) 0 0;
}
.bcn-trend__bar:not([data-zero]) {
  min-height: 2px;
}
.bcn-trend__tick {
  color: var(--color-text-secondary);
  text-align: center;
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.bcn-trend__table {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  display: flex;
  flex-direction: column;
  gap: var(--gap);
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
}
.type-label {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.type-caption {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-normal);
  letter-spacing: var(--letter-spacing-normal);
}
.esa-stat {
  --_stat-value-color: var(--stat-value-color, var(--color-text-primary, #171717));
  --_stat-value-font: var(
    --stat-value-font,
    var(--font-display, var(--font-sans, "DM Sans", sans-serif))
  );
  --_stat-value-size: var(--stat-value-size, var(--type-size-700, 2.25rem));
  --_stat-value-weight: var(--stat-value-weight, var(--font-weight-bold, 650));
  --_stat-label-color: var(--stat-label-color, var(--color-text-secondary, #525252));
  --_stat-label-size: var(--stat-label-size, var(--type-size-200, 0.9375rem));
  --_stat-label-weight: var(--stat-label-weight, var(--font-weight-medium, 450));
  --_stat-sub-color: var(--stat-sub-color, var(--color-text-muted, #737373));
  --_stat-sub-size: var(--stat-sub-size, var(--type-size-150, 0.875rem));
  --_stat-accent-color: var(--stat-accent-color, var(--color-secondary-strong, #3a7c59));
  --_stat-gap: var(--stat-gap, var(--spacing-050, 0.125rem));
  display: flex;
  flex-direction: column;
  gap: var(--_stat-gap);
  background: transparent;
}
.esa-stat__value {
  font-family: var(--_stat-value-font);
  font-size: var(--_stat-value-size);
  font-weight: var(--_stat-value-weight);
  line-height: var(--line-height-tight, 1.3);
  letter-spacing: var(--letter-spacing-tight, -0.01em);
  color: var(--_stat-value-color);
}
.esa-stat--accent .esa-stat__value {
  color: var(--_stat-accent-color);
}
.esa-stat__label {
  font-size: var(--_stat-label-size);
  font-weight: var(--_stat-label-weight);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-label-color);
}
.esa-stat__sub {
  font-size: var(--_stat-sub-size);
  font-weight: var(--font-weight-regular, 350);
  line-height: var(--line-height-normal, 1.6);
  color: var(--_stat-sub-color);
}
.esa-card {
  --_card-bg: var(--card-bg, var(--color-surface, #ffffff));
  --_card-border: var(--card-border-color, var(--color-border, #e5e5e5));
  --_card-radius: var(--card-radius, var(--radius-300, 0.5rem));
  --_card-padding: var(--card-padding, var(--spacing-500, 1.5rem));
  --_card-header-bg: var(--card-header-bg, transparent);
  --_card-header-color: var(--card-header-color, var(--color-text-primary, #171717));
  --_card-header-border: var(
    --card-header-border-color,
    var(--color-border-light, #efefef)
  );
  display: block;
  background: var(--_card-bg);
  border: 1px solid var(--_card-border);
  border-radius: var(--_card-radius);
  overflow: hidden;
}
.esa-card--outlined {
  --_card-border: var(--color-border, #e5e5e5);
}
.esa-card--elevated {
  --_card-border: transparent;
  box-shadow: var(--shadow-100, 0 2px 12px 0 rgba(0, 0, 0, 0.04));
}
.esa-card--filled {
  --_card-bg: var(--color-surface-sunken, #efefef);
  --_card-border: transparent;
}
.esa-card--header-primary .esa-card__header {
  --_card-header-bg: var(--color-primary, #43608a);
  --_card-header-color: var(--color-text-inverse, #ffffff);
}
.esa-card--header-muted .esa-card__header {
  --_card-header-bg: var(--color-surface-sunken, #efefef);
}
.esa-card--padding-none {
  --_card-padding: 0;
}
.esa-card--padding-compact {
  --_card-padding: var(--spacing-300, 0.75rem);
}
.esa-card--padding-spacious {
  --_card-padding: var(--spacing-700, 3rem);
}
.esa-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-400, 1rem) var(--_card-padding);
  background: var(--_card-header-bg);
  color: var(--_card-header-color);
  border-bottom: 1px solid var(--_card-header-border);
  min-height: 56px;
}
.esa-card__header-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-300, 0.75rem);
}
.esa-card__titles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-050, 0.125rem);
}
.esa-card__title {
  font-size: var(--type-size-250, 1.0625rem);
  font-weight: 600;
  margin: 0;
  color: inherit;
  font-family: var(--font-sans, "DM Sans", sans-serif);
}
.esa-card__subtitle {
  font-size: var(--type-size-150, 0.8125rem);
  color: var(--color-text-secondary, #525252);
  margin: 0;
}
.esa-card--header-primary .esa-card__subtitle {
  color: #fffc;
}
.esa-card__icon {
  color: inherit;
  flex-shrink: 0;
}
.esa-card__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-200, 0.5rem);
}
.esa-card__body {
  padding: var(--_card-padding);
}
.esa-card__footer {
  padding: var(--spacing-300, 0.75rem) var(--_card-padding);
  border-top: 1px solid var(--_card-header-border);
  background: var(--card-footer-bg, var(--color-surface-sunken, #efefef));
}
```

## Tokens
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-footer-bg`: #efefef _(component)_
- `--card-header-bg`: transparent _(component)_
- `--card-header-border-color`: #efefef _(component)_
- `--card-header-color`: #3d3d3d _(component)_
- `--card-padding`: 1.5rem _(component)_
- `--card-radius`: .5rem _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary-strong`: #2a7e3b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-muted`: #7c7c7c _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--font-display`: "DM Sans", sans-serif _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--gap`: 2rem _(component)_
- `--letter-spacing-normal`: .01em _(primitive)_
- `--letter-spacing-tight`: -.01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--line-height-tight`: 1.3 _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
- `--type-size-700`: clamp(1.625rem, 1.41rem + 1.08vw, 2.25rem) _(primitive)_
