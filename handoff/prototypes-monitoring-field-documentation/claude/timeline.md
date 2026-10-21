# Timeline

Notifications & Daily Logs · source prototype: https://esassoc.github.io/beacon-design/prototypes/monitoring/field-documentation/

George’s calendar: working days across, drill holes down, grouped by agreement batch. Answers what goes out when and what is drilling when.

## Key decisions

- Weekends are collapsed out; client holidays stay as shaded, struck-through columns. The axis runs May 1 to Oct 2.
- Each notice is a 12px dot on its due date in the matrix’s four states; Missing is a square so red never relies on hue alone. The type is in the tooltip, not a text label.
- The USA ticket draws its window (14-day to 72-hr clearance) with the dot at the received date, or at the window end until one arrives.
- Drill days are a segmented bar, one segment per day coloured by the worst of that day’s three logs, the rig on the first segment.
- The tribal notification is one campaign-wide row above the batches, not a dot repeated on every hole.
- On first show the scroller puts TODAY about three-quarters across so the recent past is visible.

## Gotchas

- The scroll box owns both axes so the date header and id column can stick; the page never scrolls sideways.
- The panel is hidden until the view opens, so initial placement waits on a ResizeObserver, not the view event.

## Done when

- Clicking a dot opens the drawer scrolled to that document, tinted; clicking a drill day opens that day expanded.
- DCTR4-DH-004’s bar reads red on the days rig 8’s coordinator log is missing.

## Components

- `bcn-fd-mark` (spoke) · `src/components/bcn/BcnFieldDocMark.astro`
- `bcn-fd-tl` (spoke) · `src/components/bcn/BcnFieldDocTimeline.astro`

## Markup

_229 repeated elements are collapsed in the markup below; the comments say where._

```html
<div
  class="bcn-fd-tl"
  data-fd-timeline=""
  style="--tl-days: 111; --tl-today: 105; --tl-week-offset: 1"
>
  <div class="bcn-fd-tl__module">
    <div
      class="bcn-fd-tl__scroll"
      data-fd-tl-scroll=""
      tabindex="0"
      aria-label="Timeline of expected documents by drill hole"
    >
      <div class="bcn-fd-tl__canvas">
        <!-- ═══ Axis header ═══ -->
        <div class="bcn-fd-tl__head">
          <div class="bcn-fd-tl__corner">Exploration ID</div>
          <div class="bcn-fd-tl__axis">
            <div class="bcn-fd-tl__months">
              <div class="bcn-fd-tl__month" style="--span: 21">
                <span class="bcn-fd-tl__month-name">May</span>
              </div>
              <div class="bcn-fd-tl__month" style="--span: 22">
                <span class="bcn-fd-tl__month-name">June</span>
              </div>
              <!-- …and 4 more like this (<div class="bcn-fd-tl__month">) -->
            </div>
            <div class="bcn-fd-tl__days">
              <div class="bcn-fd-tl__day" title="Fri May 1">1</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon May 4">4</div>
              <div class="bcn-fd-tl__day is-holiday is-monday" title="Mon May 25, holiday">25</div>
              <div class="bcn-fd-tl__day is-holiday" title="Fri Jul 3, holiday">3</div>
              <div class="bcn-fd-tl__day is-today" title="Fri Sep 25">25</div>
              <!-- …and 106 more like this (<div class="bcn-fd-tl__day">) -->
            </div>
          </div>
        </div>
        <!-- ═══ Body ═══ -->
        <div class="bcn-fd-tl__body">
          <div class="bcn-fd-tl__grid" aria-hidden="true">
            <span class="bcn-fd-tl__holiday" style="--i: 16"></span
            ><span class="bcn-fd-tl__holiday" style="--i: 45"></span
            ><span class="bcn-fd-tl__holiday" style="--i: 91"></span
            ><span class="bcn-fd-tl__today"></span>
          </div>
          <div class="bcn-fd-tl__row bcn-fd-tl__row--campaign">
            <div class="bcn-fd-tl__label">Tribal notification</div>
            <div class="bcn-fd-tl__track">
              <span
                class="bcn-fd-tl__cell"
                style="--i: 0"
                title="Tribal notification. Due May 2. Received Apr 30."
                ><span
                  class="bcn-fd-mark bcn-fd-mark--dot"
                  data-status="received"
                  role="img"
                  aria-label="Tribal notification. Due May 2. Received Apr 30."
                ></span
              ></span>
            </div>
          </div>
          <div class="bcn-fd-tl__group" data-fd-group="Batch 4 (TEP)">
            <div class="bcn-fd-tl__batch">
              <span class="bcn-fd-tl__batch-text"
                ><span class="bcn-fd-tl__batch-name">Batch 4 (TEP)</span
                ><span class="bcn-fd-tl__batch-alert">8 holes missing documents</span></span
              >
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-014"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-06-17"
              data-missing="2"
              data-search="dcrai-dh-014 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a href="?view=timeline&amp;hole=DCRAI-DH-014" data-fd-target-hole="DCRAI-DH-014"
                  >DCRAI-DH-014</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 23; --to: 30"></span
                ><span class="bcn-fd-tl__bar" style="--from: 33; --to: 33"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 33"
                  href="?view=timeline&amp;hole=DCRAI-DH-014&amp;day=2026-06-17"
                  data-fd-target-hole="DCRAI-DH-014"
                  data-fd-target-day="2026-06-17"
                  title="Drill day Wed Jun 17, Rig 5. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 17, Rig 5. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 13"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-014&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-014"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 20. Received May 18."
                    aria-label="DCRAI-DH-014: Landowner notification, 14-day. Due May 20. Received May 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-014&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-014"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 22. Missing."
                    aria-label="DCRAI-DH-014: Landowner notification, 10-day. Due May 22. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><!-- …and 5 more like this (<span class="bcn-fd-tl__cell">) -->
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-292"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-06-17"
              data-missing="1"
              data-search="dcrds-dh-292 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a href="?view=timeline&amp;hole=DCRDS-DH-292" data-fd-target-hole="DCRDS-DH-292"
                  >DCRDS-DH-292</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 23; --to: 30"></span
                ><span class="bcn-fd-tl__bar" style="--from: 33; --to: 33"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 33"
                  href="?view=timeline&amp;hole=DCRDS-DH-292&amp;day=2026-06-17"
                  data-fd-target-hole="DCRDS-DH-292"
                  data-fd-target-day="2026-06-17"
                  title="Drill day Wed Jun 17, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 17, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 13"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-292&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-292"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 20. Received May 19."
                    aria-label="DCRDS-DH-292: Landowner notification, 14-day. Due May 20. Received May 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-292&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-292"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 22. Received May 21."
                    aria-label="DCRDS-DH-292: Landowner notification, 10-day. Due May 22. Received May 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><!-- …and 5 more like this (<span class="bcn-fd-tl__cell">) -->
              </div>
            </div>
            <!-- …and 22 more like this (<div class="bcn-fd-tl__row">) -->
          </div>
          <div class="bcn-fd-tl__group" data-fd-group="Batch 5 (TEP)">
            <div class="bcn-fd-tl__batch">
              <span class="bcn-fd-tl__batch-text"
                ><span class="bcn-fd-tl__batch-name">Batch 5 (TEP)</span
                ><span class="bcn-fd-tl__batch-alert">8 holes missing documents</span></span
              >
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCBPP-DH-036"
              data-status="complete"
              data-agreement="Batch 5 (TEP)"
              data-rig="3"
              data-county="Alameda"
              data-start="2026-06-01"
              data-missing="0"
              data-search="dcbpp-dh-036 pwr-8063"
            >
              <div class="bcn-fd-tl__label">
                <a href="?view=timeline&amp;hole=DCBPP-DH-036" data-fd-target-hole="DCBPP-DH-036"
                  >DCBPP-DH-036</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 11; --to: 20"></span
                ><span class="bcn-fd-tl__bar" style="--from: 21; --to: 30"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 21"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-01"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-01"
                  title="Drill day Mon Jun 1, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 1, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >3</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 22"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-02"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-02"
                  title="Drill day Tue Jun 2, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 2, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><!-- …and 8 more like this (<a class="bcn-fd-tl__cell bcn-fd-tl__cell--drill">) --><span
                  class="bcn-fd-tl__cell"
                  style="--i: 1"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-036&amp;doc=landowner14"
                    data-fd-target-hole="DCBPP-DH-036"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 4. Received May 4."
                    aria-label="DCBPP-DH-036: Landowner notification, 14-day. Due May 4. Received May 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 5"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-036&amp;doc=landowner10"
                    data-fd-target-hole="DCBPP-DH-036"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 8. Received May 7."
                    aria-label="DCBPP-DH-036: Landowner notification, 10-day. Due May 8. Received May 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><!-- …and 5 more like this (<span class="bcn-fd-tl__cell">) -->
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCBPP-DH-039"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="1"
              data-county="Alameda"
              data-start="2026-06-01"
              data-missing="1"
              data-search="dcbpp-dh-039 pwr-8063"
            >
              <div class="bcn-fd-tl__label">
                <a href="?view=timeline&amp;hole=DCBPP-DH-039" data-fd-target-hole="DCBPP-DH-039"
                  >DCBPP-DH-039</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 11; --to: 20"></span
                ><span class="bcn-fd-tl__bar" style="--from: 21; --to: 29"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 21"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-01"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-01"
                  title="Drill day Mon Jun 1, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 1, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >1</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 22"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-02"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-02"
                  title="Drill day Tue Jun 2, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 2, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><!-- …and 7 more like this (<a class="bcn-fd-tl__cell bcn-fd-tl__cell--drill">) --><span
                  class="bcn-fd-tl__cell"
                  style="--i: 1"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-039&amp;doc=landowner14"
                    data-fd-target-hole="DCBPP-DH-039"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 4. Received May 4."
                    aria-label="DCBPP-DH-039: Landowner notification, 14-day. Due May 4. Received May 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 5"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-039&amp;doc=landowner10"
                    data-fd-target-hole="DCBPP-DH-039"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 8. Received May 7."
                    aria-label="DCBPP-DH-039: Landowner notification, 10-day. Due May 8. Received May 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><!-- …and 5 more like this (<span class="bcn-fd-tl__cell">) -->
              </div>
            </div>
            <!-- …and 14 more like this (<div class="bcn-fd-tl__row">) -->
          </div>
          <div class="bcn-fd-tl__group" data-fd-group="ROW (2026)">
            <div class="bcn-fd-tl__batch">
              <span class="bcn-fd-tl__batch-text"
                ><span class="bcn-fd-tl__batch-name">ROW (2026)</span
                ><span class="bcn-fd-tl__batch-alert">14 holes missing documents</span></span
              >
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-DH-017"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="7"
              data-county="Sacramento"
              data-start="2026-07-29"
              data-missing="0"
              data-search="dctr2-dh-017 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a href="?view=timeline&amp;hole=DCTR2-DH-017" data-fd-target-hole="DCTR2-DH-017"
                  >DCTR2-DH-017</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 53; --to: 60"></span
                ><span class="bcn-fd-tl__bar" style="--from: 63; --to: 70"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 63"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-07-29"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-07-29"
                  title="Drill day Wed Jul 29, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jul 29, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >7</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 64"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-07-30"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-07-30"
                  title="Drill day Thu Jul 30, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jul 30, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><!-- …and 6 more like this (<a class="bcn-fd-tl__cell bcn-fd-tl__cell--drill">) --><span
                  class="bcn-fd-tl__cell"
                  style="--i: 43"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-017&amp;doc=landowner14"
                    data-fd-target-hole="DCTR2-DH-017"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 1. Received Jun 29."
                    aria-label="DCTR2-DH-017: Landowner notification, 14-day. Due Jul 1. Received Jun 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 44"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-017&amp;doc=landowner10"
                    data-fd-target-hole="DCTR2-DH-017"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 2. Received Jun 30."
                    aria-label="DCTR2-DH-017: Landowner notification, 10-day. Due Jul 2. Received Jun 30."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><!-- …and 4 more like this (<span class="bcn-fd-tl__cell">) -->
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-DH-015"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="7"
              data-county="Sacramento"
              data-start="2026-08-12"
              data-missing="1"
              data-search="dctr2-dh-015 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a href="?view=timeline&amp;hole=DCTR2-DH-015" data-fd-target-hole="DCTR2-DH-015"
                  >DCTR2-DH-015</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 63; --to: 70"></span
                ><span class="bcn-fd-tl__bar" style="--from: 73; --to: 78"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 73"
                  href="?view=timeline&amp;hole=DCTR2-DH-015&amp;day=2026-08-12"
                  data-fd-target-hole="DCTR2-DH-015"
                  data-fd-target-day="2026-08-12"
                  title="Drill day Wed Aug 12, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 12, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >7</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 74"
                  href="?view=timeline&amp;hole=DCTR2-DH-015&amp;day=2026-08-13"
                  data-fd-target-hole="DCTR2-DH-015"
                  data-fd-target-day="2026-08-13"
                  title="Drill day Thu Aug 13, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 13, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><!-- …and 4 more like this (<a class="bcn-fd-tl__cell bcn-fd-tl__cell--drill">) --><span
                  class="bcn-fd-tl__cell"
                  style="--i: 53"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-015&amp;doc=landowner14"
                    data-fd-target-hole="DCTR2-DH-015"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 15. Missing."
                    aria-label="DCTR2-DH-015: Landowner notification, 14-day. Due Jul 15. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 55"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-015&amp;doc=landowner10"
                    data-fd-target-hole="DCTR2-DH-015"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 17. Received Jul 17."
                    aria-label="DCTR2-DH-015: Landowner notification, 10-day. Due Jul 17. Received Jul 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><!-- …and 5 more like this (<span class="bcn-fd-tl__cell">) -->
              </div>
            </div>
            <!-- …and 24 more like this (<div class="bcn-fd-tl__row">) -->
          </div>
        </div>
      </div>
    </div>
    <!-- ═══ Key + count ═══ -->
    <div class="repel bcn-fd-tl__foot">
      <ul class="cluster bcn-fd-tl__key" data-gap="md" aria-label="Timeline key">
        <li class="cluster" data-gap="xs">
          <span
            class="bcn-fd-mark bcn-fd-mark--dot"
            data-status="received"
            aria-hidden="true"
          ></span
          ><span>Received</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span class="bcn-fd-mark bcn-fd-mark--dot" data-status="late" aria-hidden="true"></span
          ><span>Received late</span>
        </li>
        <!-- …and 5 more like this (<li class="cluster">) -->
      </ul>
      <span class="bcn-fd-tl__count"
        >Drill holes: 66<span data-fd-tl-shown="" hidden="">Showing: 66</span></span
      >
    </div>
  </div>
</div>
```

## Styles

```css
.bcn-fd-mark {
  border-radius: var(--radius-100);
  vertical-align: middle;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 24px;
  display: inline-flex;
}
.bcn-fd-mark--dot {
  border-radius: var(--radius-full);
  width: 12px;
  height: 12px;
}
.bcn-fd-mark--dot[data-status="missing"] {
  border-radius: 2px;
}
.bcn-fd-mark--bar {
  width: calc(var(--tl-col, 30px) - 2px);
  height: 22px;
  font-size: 12px;
  font-weight: var(--typography-font-weight-semibold);
  border-radius: 3px;
}
.bcn-fd-mark--text {
  width: auto;
  min-width: 3.25rem;
  padding: 0 var(--spacing-200);
  font-size: 13px;
  font-weight: var(--typography-font-weight-semibold);
  font-variant-numeric: tabular-nums;
}
.bcn-fd-mark--bar.bcn-fd-mark--text {
  width: calc(var(--tl-col, 30px) - 2px);
  min-width: 0;
  padding: 0;
  font-size: 12px;
}
.bcn-fd-mark[data-status="received"] {
  background: color-mix(in srgb, var(--bcn-status-completed) 14%, transparent);
  color: var(--bcn-status-completed);
}
.bcn-fd-mark[data-status="late"] {
  background: color-mix(in srgb, var(--bcn-status-in-progress) 26%, transparent);
  color: color-mix(in srgb, var(--bcn-status-in-progress) 45%, var(--color-content-default));
}
.bcn-fd-mark[data-status="missing"] {
  background: var(--bcn-status-overdue);
  color: var(--color-content-on-utility-danger);
}
.bcn-fd-mark[data-status="upcoming"] {
  box-shadow: inset 0 0 0 1px var(--bcn-status-not-started);
  color: var(--color-content-default-tertiary);
}
.bcn-fd-mark--dot[data-status="received"] {
  background: var(--bcn-status-completed);
}
.bcn-fd-mark--dot[data-status="late"] {
  background: var(--bcn-status-in-progress);
}
.bcn-fd-mark--dot[data-status="upcoming"] {
  box-shadow: inset 0 0 0 1.5px var(--bcn-gray-500);
  background: var(--color-background-elevation-raised);
}
.bcn-fd-mark--bar[data-status="upcoming"] {
  background: var(--color-background-elevation-raised);
}
.bcn-fd-tl {
  --tl-col: 30px;
  --tl-label: 9.5rem;
  --tl-row: 36px;
  --tl-head-row: 26px;
  --tl-line: var(--color-border-default-subtle);
}
.bcn-fd-tl__module {
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  font-size: 13px;
}
.bcn-fd-tl__scroll {
  border-radius: var(--radius-100) var(--radius-100) 0 0;
  max-height: max(26rem, 100vh - 11rem);
  overflow: auto;
}
.bcn-fd-tl__scroll:focus-visible {
  outline: 2px solid var(--color-border-focus, var(--color-background-utility-info));
  outline-offset: -2px;
}
.bcn-fd-tl__canvas {
  width: calc(var(--tl-label) + var(--tl-days) * var(--tl-col));
  position: relative;
}
.bcn-fd-tl__head {
  z-index: 5;
  grid-template-columns: var(--tl-label) calc(var(--tl-days) * var(--tl-col));
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  display: grid;
  position: sticky;
  top: 0;
}
.bcn-fd-tl__corner {
  z-index: 6;
  padding: 0 var(--spacing-300) var(--spacing-150);
  background: var(--color-background-default);
  border-right: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
  align-items: flex-end;
  display: flex;
  position: sticky;
  left: 0;
}
.bcn-fd-tl__months,
.bcn-fd-tl__days {
  height: var(--tl-head-row);
  display: flex;
}
.bcn-fd-tl__month {
  flex: 0 0 calc(var(--span) * var(--tl-col));
  border-left: 1px solid var(--color-border-default);
  align-items: center;
  min-width: 0;
  display: flex;
}
.bcn-fd-tl__month-name {
  left: calc(var(--tl-label) + var(--spacing-200));
  padding: 0 var(--spacing-200);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  position: sticky;
}
.bcn-fd-tl__day {
  flex: 0 0 var(--tl-col);
  font-variant-numeric: tabular-nums;
  color: var(--color-content-default-secondary);
  justify-content: center;
  align-items: center;
  font-size: 12px;
  display: flex;
}
.bcn-fd-tl__day.is-monday {
  box-shadow: inset 1px 0 0 var(--color-border-default);
}
.bcn-fd-tl__day.is-holiday {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-tertiary);
  text-decoration: line-through;
}
.bcn-fd-tl__day.is-today {
  background: var(--color-background-utility-info);
  color: var(--color-content-on-utility-info, #fff);
  font-weight: var(--typography-font-weight-semibold);
  border-radius: var(--radius-100) var(--radius-100) 0 0;
}
.bcn-fd-tl__body {
  position: relative;
}
.bcn-fd-tl__grid {
  inset: 0 0 0 var(--tl-label);
  pointer-events: none;
  background-image: repeating-linear-gradient(
    to right,
    var(--tl-line) 0 1px,
    transparent 1px calc(var(--tl-col) * 5)
  );
  background-position-x: calc(var(--tl-week-offset) * var(--tl-col));
  position: absolute;
}
.bcn-fd-tl__holiday {
  top: 0;
  bottom: 0;
  left: calc(var(--i) * var(--tl-col));
  width: var(--tl-col);
  background: var(--color-background-elevation-sunken);
  position: absolute;
}
.bcn-fd-tl__today {
  top: 0;
  bottom: 0;
  left: calc(var(--tl-today) * var(--tl-col) + var(--tl-col) / 2 - 1px);
  background: var(--color-background-utility-info);
  width: 2px;
  position: absolute;
}
.bcn-fd-tl__row {
  grid-template-columns: var(--tl-label) calc(var(--tl-days) * var(--tl-col));
  height: var(--tl-row);
  border-bottom: 1px solid var(--tl-line);
  display: grid;
  position: relative;
}
.bcn-fd-tl__row[hidden],
.bcn-fd-tl__group[hidden] {
  display: none;
}
.bcn-fd-tl__row:hover .bcn-fd-tl__track {
  background: color-mix(in srgb, var(--color-background-default) 70%, transparent);
}
.bcn-fd-tl__label {
  z-index: 3;
  padding: 0 var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border-right: 1px solid var(--color-border-default);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  align-items: center;
  display: flex;
  position: sticky;
  left: 0;
}
.bcn-fd-tl__label a {
  color: var(--color-content-default);
  text-decoration: none;
}
.bcn-fd-tl__label a:hover,
.bcn-fd-tl__label a:focus-visible {
  text-decoration: underline;
}
.bcn-fd-tl__row--campaign {
  border-bottom: 1px solid var(--color-border-default);
}
.bcn-fd-tl__row--campaign .bcn-fd-tl__label {
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
}
.bcn-fd-tl__track {
  position: relative;
}
.bcn-fd-tl__batch {
  z-index: 3;
  background: var(--color-background-default);
  border-bottom: 1px solid var(--color-border-default);
  align-items: center;
  height: 32px;
  display: flex;
  position: relative;
}
.bcn-fd-tl__group + .bcn-fd-tl__group .bcn-fd-tl__batch {
  border-top: 1px solid var(--color-border-default);
}
.bcn-fd-tl__batch-text {
  gap: var(--spacing-300);
  padding: 0 var(--spacing-300);
  white-space: nowrap;
  display: inline-flex;
  position: sticky;
  left: 0;
}
.bcn-fd-tl__batch-name {
  font-size: 14px;
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-fd-tl__batch-alert {
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-utility-danger);
}
.bcn-fd-tl__cell {
  top: 0;
  bottom: 0;
  left: calc(var(--i) * var(--tl-col));
  width: var(--tl-col);
  z-index: 2;
  justify-content: center;
  align-items: center;
  gap: 2px;
  display: flex;
  position: absolute;
}
.bcn-fd-tl__dot {
  border-radius: var(--radius-full);
  padding: 1px;
  display: inline-flex;
}
.bcn-fd-tl__dot:hover,
.bcn-fd-tl__cell--drill:hover {
  filter: brightness(0.9);
}
.bcn-fd-tl__dot:focus-visible,
.bcn-fd-tl__cell--drill:focus-visible {
  outline: 2px solid var(--color-background-utility-info);
  outline-offset: 1px;
}
.bcn-fd-tl__cell--drill {
  text-decoration: none;
}
.bcn-fd-tl__window {
  height: 2px;
  top: calc(50% - 1px);
  left: calc(var(--from) * var(--tl-col) + var(--tl-col) / 2);
  width: calc((var(--to) - var(--from)) * var(--tl-col));
  background: var(--bcn-gray-500);
  z-index: 1;
  position: absolute;
}
.bcn-fd-tl__bar {
  height: 24px;
  top: calc(50% - 12px);
  left: calc(var(--from) * var(--tl-col));
  width: calc((var(--to) - var(--from) + 1) * var(--tl-col));
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-sunken);
  z-index: 1;
  position: absolute;
}
.bcn-fd-tl__note {
  left: var(--tl-label);
  align-items: center;
  gap: var(--spacing-300);
  height: 100%;
  padding: 0 var(--spacing-300);
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  display: inline-flex;
  position: sticky;
}
.bcn-fd-tl__note-reason {
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default-secondary);
}
.bcn-fd-tl__foot {
  padding: var(--spacing-200) var(--spacing-400);
  border-top: 1px solid var(--color-border-default);
  background: var(--color-background-default);
  border-radius: 0 0 var(--radius-100) var(--radius-100);
  color: var(--color-content-default-secondary);
}
.bcn-fd-tl__key {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-fd-tl__key-window {
  background: var(--bcn-gray-500);
  width: 24px;
  height: 2px;
  display: inline-block;
}
.bcn-fd-tl__key-today {
  background: var(--color-background-utility-info);
  width: 2px;
  height: 16px;
  display: inline-block;
}
.bcn-fd-tl__count {
  font-variant-numeric: tabular-nums;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.repel {
  --gap: var(--spacing-400, 1rem);
  --align: center;
  gap: var(--gap);
  align-items: var(--align);
  flex-wrap: wrap;
  justify-content: space-between;
  display: flex;
}
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-status-completed` | `#2e7571` | component |
| `--bcn-status-in-progress` | `#f59e0b` | component |
| `--bcn-status-not-started` | `#bdbdbd` | component |
| `--bcn-status-overdue` | `#ce2c31` | component |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-focus` | `#3e9b4f` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-utility-danger` | `#fcfcfc` | semantic |
| `--color-content-on-utility-info` | `#fcfcfc` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--gap` | `1rem` | component |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--tl-col` | `30px` | component |
| `--tl-days` | `111` | component |
| `--tl-head-row` | `26px` | component |
| `--tl-label` | `9.5rem` | component |
| `--tl-line` | `#efefef` | component |
| `--tl-row` | `36px` | component |
| `--tl-today` | `105` | component |
| `--tl-week-offset` | `1` | component |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
