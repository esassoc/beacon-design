# Timeline Explorer (category sparkline grid)

BcnTimelineExplorer — replaced the old aggregate opened-vs-resolved bar chart (BcnTrendPanel) after user feedback that a single grouped-bar plot was confusing and not actionable. A 30/60/90-day esa-button-toggle drives one small sparkline tile per concern category (needs-attention/non-compliance scope, the same categories as the two count lists above), each showing that category's own recent trend and current open count. It answers "which category is trending up", which an 8-way stacked chart could not show at a glance.

## Key decisions
- Small multiples, one sparkline per category, instead of one combined chart — a compliance lead scans for the category climbing, not the aggregate total, and eight thin lines on one axis would be unreadable.
- This is a COHORT / AGING view, not an opened-vs-closed event flow: each observation is counted exactly once, under the week it was first reported, still bucketed by category. Carried over from the retired trend panel's own hard-won fix — do not reintroduce double-counting when re-deriving this.
- The 30/60/90 toggle re-slices the SAME underlying 13-week series; it does not re-fetch or re-derive data. Selecting a shorter window only changes how many of the trailing weeks are plotted and read out in the hint caption.
- Tile colours are a fixed categorical map (CATEGORY_COLOR in the fixture, one hex per category) — the same colours used nowhere else on this page, since categories are not otherwise colour-coded elsewhere on the dashboard.
- An off-screen table beside the sparkline grid carries the full trailing-90-day dataset for assistive tech — the visual grid is aria-hidden, so the table is not a redundant decoration but the accessible reading of the same data.

## Gotchas
- The toggle changes how many of the 13 weeks are SLICED for display, not the data itself — a re-implementation that re-queries per window risks the slice disagreeing with the table's fixed 90-day view.
- Per-tile normalisation (scaling each sparkline to its own min/max) is a plausible-looking bug: a flat, low-volume category and a spiking, high-volume one would render as visually identical shapes. Confirm intent before choosing per-tile vs shared scaling if re-deriving this.
- No esa-* chart lego exists for this — same documented gap as the donut and the retired trend panel.

## Done when
- One sparkline tile renders per category, each with a distinct, consistent colour and a current open-count readout.
- Selecting 30d/60d/90d re-slices every tile to that trailing window and updates the hint caption naming the window and week count.
- The off-screen table lists the full 13-week series for every category, independent of the toggle's current selection.

## Markup
```html
<div class="esa-card">
  <div class="esa-card__header">
    <div class="esa-card__header-content">
      <div class="esa-card__titles">
        <h3 class="esa-card__title">Timeline Explorer</h3>
        <p class="esa-card__subtitle">
          Open needs-attention / non-compliance concerns by category — select a window to
          see the trend
        </p>
      </div>
    </div>
  </div>
  <div class="esa-card__body">
    <div class="bcn-tlx stack" data-gap="md">
      <div class="bcn-tlx__toolbar cluster" data-gap="md" data-align="center">
        <span class="bcn-tlx__toolbar-label type-label">Timeframe</span>
        <esa-button-toggle id="tlx-window" size="sm"></esa-button-toggle>
        <span class="bcn-tlx__hint type-caption" id="tlx-hint"
          >last 30 days · 4 weeks shown</span
        >
      </div>
      <div class="bcn-tlx__grid" id="tlx-grid" aria-hidden="true">
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Access &amp; Traffic Control</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Access &amp; Traffic Control: Jul 10 — 1, Jul 17 — 1, Jul 24 — 2, Jul 31 — 2"
              >
                <title>
                  Access &amp; Traffic Control: Jul 10 — 1, Jul 17 — 1, Jul 24 — 2, Jul 31
                  — 2
                </title>
                <path
                  d="M4.0,17.0 L54.7,17.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#2a78d6"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,17.0 54.7,17.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#2a78d6"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#2a78d6"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">2</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--up">↑ +1</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Cultural Resources Protection</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Cultural Resources Protection: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1"
              >
                <title>
                  Cultural Resources Protection: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1, Jul
                  31 — 1
                </title>
                <path
                  d="M4.0,4.0 L54.7,4.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#eb6834"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,4.0 54.7,4.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#eb6834"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#eb6834"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">1</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--flat">→ flat</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Erosion &amp; Sediment Control</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Erosion &amp; Sediment Control: Jul 10 — 0, Jul 17 — 0, Jul 24 — 0, Jul 31 — 1"
              >
                <title>
                  Erosion &amp; Sediment Control: Jul 10 — 0, Jul 17 — 0, Jul 24 — 0, Jul
                  31 — 1
                </title>
                <path
                  d="M4.0,30.0 L54.7,30.0 L105.3,30.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#1baf7a"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,30.0 54.7,30.0 105.3,30.0 156.0,4.0"
                  fill="none"
                  stroke="#1baf7a"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#1baf7a"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">1</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--up">↑ +1</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Noise Management</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Noise Management: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1"
              >
                <title>
                  Noise Management: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1
                </title>
                <path
                  d="M4.0,4.0 L54.7,4.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#eda100"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,4.0 54.7,4.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#eda100"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#eda100"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">1</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--flat">→ flat</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Spill Prevention &amp; Response</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Spill Prevention &amp; Response: Jul 10 — 0, Jul 17 — 0, Jul 24 — 1, Jul 31 — 1"
              >
                <title>
                  Spill Prevention &amp; Response: Jul 10 — 0, Jul 17 — 0, Jul 24 — 1, Jul
                  31 — 1
                </title>
                <path
                  d="M4.0,30.0 L54.7,30.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#e87ba4"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,30.0 54.7,30.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#e87ba4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#e87ba4"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">1</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--up">↑ +1</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Stormwater / BMP Maintenance</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Stormwater / BMP Maintenance: Jul 10 — 1, Jul 17 — 1, Jul 24 — 2, Jul 31 — 2"
              >
                <title>
                  Stormwater / BMP Maintenance: Jul 10 — 1, Jul 17 — 1, Jul 24 — 2, Jul 31
                  — 2
                </title>
                <path
                  d="M4.0,17.0 L54.7,17.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#008300"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,17.0 54.7,17.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#008300"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#008300"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">2</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--up">↑ +1</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Vegetation &amp; Habitat Protection</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Vegetation &amp; Habitat Protection: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1"
              >
                <title>
                  Vegetation &amp; Habitat Protection: Jul 10 — 1, Jul 17 — 1, Jul 24 — 1,
                  Jul 31 — 1
                </title>
                <path
                  d="M4.0,4.0 L54.7,4.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#4a3aa7"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,4.0 54.7,4.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#4a3aa7"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#4a3aa7"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">1</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--flat">→ flat</span>
            </div>
          </div>
        </div>
        <div class="bcn-tlx__tile">
          <div class="bcn-tlx__tile-label">Waste Management</div>
          <div class="bcn-tlx__tile-row">
            <div class="bcn-tlx__tile-spark">
              <svg
                viewBox="0 0 160 34"
                role="img"
                aria-label="Waste Management: Jul 10 — 0, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1"
              >
                <title>
                  Waste Management: Jul 10 — 0, Jul 17 — 1, Jul 24 — 1, Jul 31 — 1
                </title>
                <path
                  d="M4.0,30.0 L54.7,4.0 L105.3,4.0 L156.0,4.0 L156.0,30 L4.0,30 Z"
                  fill="#8a5a44"
                  opacity="0.16"
                  stroke="none"
                ></path>
                <polyline
                  points="4.0,30.0 54.7,4.0 105.3,4.0 156.0,4.0"
                  fill="none"
                  stroke="#8a5a44"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></polyline>
                <circle cx="156.0" cy="4.0" r="2.6" fill="#8a5a44"></circle>
              </svg>
            </div>
            <div class="bcn-tlx__tile-stat">
              <span class="bcn-tlx__tile-count">1</span>
              <span class="bcn-tlx__delta bcn-tlx__delta--up">↑ +1</span>
            </div>
          </div>
        </div>
      </div>
      <!-- The tile grid is aria-hidden; this table is the accessible reading of
         the full trailing-90-day dataset (not re-sliced by the toggle). -->
      <table class="bcn-tlx__table">
        <caption>
          Open needs-attention / non-compliance concerns by category, by week (trailing 90
          days)
        </caption>
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">May 8</th>
            <th scope="col">May 15</th>
            <th scope="col">May 22</th>
            <th scope="col">May 29</th>
            <th scope="col">Jun 5</th>
            <th scope="col">Jun 12</th>
            <th scope="col">Jun 19</th>
            <th scope="col">Jun 26</th>
            <th scope="col">Jul 3</th>
            <th scope="col">Jul 10</th>
            <th scope="col">Jul 17</th>
            <th scope="col">Jul 24</th>
            <th scope="col">Jul 31</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Access &amp; Traffic Control</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">Cultural Resources Protection</th>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">Erosion &amp; Sediment Control</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">Noise Management</th>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">Spill Prevention &amp; Response</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">Stormwater / BMP Maintenance</th>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <th scope="row">Vegetation &amp; Habitat Protection</th>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
          <tr>
            <th scope="row">Waste Management</th>
            <td>1</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
```

## Styles
```css
.bcn-tlx__toolbar-label {
  color: var(--color-text-tertiary);
}
.bcn-tlx__hint {
  color: var(--color-text-tertiary);
  font-variant-numeric: tabular-nums;
}
.bcn-tlx__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: var(--spacing-300);
}
.bcn-tlx__tile {
  background: var(--color-surface-sunken);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  padding: var(--spacing-300) var(--spacing-350);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-tlx__tile-label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-tlx__tile-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.bcn-tlx__tile-spark {
  flex: 1 1 auto;
  min-inline-size: 0;
}
.bcn-tlx__tile-spark svg {
  display: block;
  width: 100%;
  height: 34px;
}
.bcn-tlx__tile-stat {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
}
.bcn-tlx__tile-count {
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-bold);
  font-variant-numeric: tabular-nums;
  color: var(--color-text-primary);
  line-height: 1;
}
.bcn-tlx__delta {
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  margin-top: 2px;
}
.bcn-tlx__delta--up {
  color: var(--color-warning);
}
.bcn-tlx__delta--down {
  color: var(--color-success);
}
.bcn-tlx__delta--flat {
  color: var(--color-text-tertiary);
}
.bcn-tlx__table {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
.bcn-ev-staging__item .esa-card {
  overflow: visible;
}
.bcn-ev-targets__item[data-receiving] .esa-card {
  border-color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 5%, transparent);
}
.bcn-ev-targets__item[data-blocked] .esa-card {
  opacity: 0.45;
}
.bcn-ev-targets__item .esa-card {
  overflow: visible;
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
- `--color-secondary`: #00918b _(semantic)_
- `--color-success`: #2e7571 _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--color-warning`: #f59e0b _(semantic)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 500 _(primitive)_
- `--font-weight-regular`: 350 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--gap`: 2rem _(component)_
- `--letter-spacing-normal`: .01em _(primitive)_
- `--line-height-normal`: 1.6 _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--shadow-100`: 0 2px 12px 0 rgba(0, 0, 0, .04) _(primitive)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-250`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
