# Timeline

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

## Markup
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
              <div class="bcn-fd-tl__month" style="--span: 23">
                <span class="bcn-fd-tl__month-name">July</span>
              </div>
              <div class="bcn-fd-tl__month" style="--span: 21">
                <span class="bcn-fd-tl__month-name">August</span>
              </div>
              <div class="bcn-fd-tl__month" style="--span: 22">
                <span class="bcn-fd-tl__month-name">September</span>
              </div>
              <div class="bcn-fd-tl__month" style="--span: 2">
                <span class="bcn-fd-tl__month-name">October</span>
              </div>
            </div>
            <div class="bcn-fd-tl__days">
              <div class="bcn-fd-tl__day" title="Fri May 1">1</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon May 4">4</div>
              <div class="bcn-fd-tl__day" title="Tue May 5">5</div>
              <div class="bcn-fd-tl__day" title="Wed May 6">6</div>
              <div class="bcn-fd-tl__day" title="Thu May 7">7</div>
              <div class="bcn-fd-tl__day" title="Fri May 8">8</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon May 11">11</div>
              <div class="bcn-fd-tl__day" title="Tue May 12">12</div>
              <div class="bcn-fd-tl__day" title="Wed May 13">13</div>
              <div class="bcn-fd-tl__day" title="Thu May 14">14</div>
              <div class="bcn-fd-tl__day" title="Fri May 15">15</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon May 18">18</div>
              <div class="bcn-fd-tl__day" title="Tue May 19">19</div>
              <div class="bcn-fd-tl__day" title="Wed May 20">20</div>
              <div class="bcn-fd-tl__day" title="Thu May 21">21</div>
              <div class="bcn-fd-tl__day" title="Fri May 22">22</div>
              <div
                class="bcn-fd-tl__day is-holiday is-monday"
                title="Mon May 25, holiday"
              >
                25
              </div>
              <div class="bcn-fd-tl__day" title="Tue May 26">26</div>
              <div class="bcn-fd-tl__day" title="Wed May 27">27</div>
              <div class="bcn-fd-tl__day" title="Thu May 28">28</div>
              <div class="bcn-fd-tl__day" title="Fri May 29">29</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jun 1">1</div>
              <div class="bcn-fd-tl__day" title="Tue Jun 2">2</div>
              <div class="bcn-fd-tl__day" title="Wed Jun 3">3</div>
              <div class="bcn-fd-tl__day" title="Thu Jun 4">4</div>
              <div class="bcn-fd-tl__day" title="Fri Jun 5">5</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jun 8">8</div>
              <div class="bcn-fd-tl__day" title="Tue Jun 9">9</div>
              <div class="bcn-fd-tl__day" title="Wed Jun 10">10</div>
              <div class="bcn-fd-tl__day" title="Thu Jun 11">11</div>
              <div class="bcn-fd-tl__day" title="Fri Jun 12">12</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jun 15">15</div>
              <div class="bcn-fd-tl__day" title="Tue Jun 16">16</div>
              <div class="bcn-fd-tl__day" title="Wed Jun 17">17</div>
              <div class="bcn-fd-tl__day" title="Thu Jun 18">18</div>
              <div class="bcn-fd-tl__day" title="Fri Jun 19">19</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jun 22">22</div>
              <div class="bcn-fd-tl__day" title="Tue Jun 23">23</div>
              <div class="bcn-fd-tl__day" title="Wed Jun 24">24</div>
              <div class="bcn-fd-tl__day" title="Thu Jun 25">25</div>
              <div class="bcn-fd-tl__day" title="Fri Jun 26">26</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jun 29">29</div>
              <div class="bcn-fd-tl__day" title="Tue Jun 30">30</div>
              <div class="bcn-fd-tl__day" title="Wed Jul 1">1</div>
              <div class="bcn-fd-tl__day" title="Thu Jul 2">2</div>
              <div class="bcn-fd-tl__day is-holiday" title="Fri Jul 3, holiday">3</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jul 6">6</div>
              <div class="bcn-fd-tl__day" title="Tue Jul 7">7</div>
              <div class="bcn-fd-tl__day" title="Wed Jul 8">8</div>
              <div class="bcn-fd-tl__day" title="Thu Jul 9">9</div>
              <div class="bcn-fd-tl__day" title="Fri Jul 10">10</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jul 13">13</div>
              <div class="bcn-fd-tl__day" title="Tue Jul 14">14</div>
              <div class="bcn-fd-tl__day" title="Wed Jul 15">15</div>
              <div class="bcn-fd-tl__day" title="Thu Jul 16">16</div>
              <div class="bcn-fd-tl__day" title="Fri Jul 17">17</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jul 20">20</div>
              <div class="bcn-fd-tl__day" title="Tue Jul 21">21</div>
              <div class="bcn-fd-tl__day" title="Wed Jul 22">22</div>
              <div class="bcn-fd-tl__day" title="Thu Jul 23">23</div>
              <div class="bcn-fd-tl__day" title="Fri Jul 24">24</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Jul 27">27</div>
              <div class="bcn-fd-tl__day" title="Tue Jul 28">28</div>
              <div class="bcn-fd-tl__day" title="Wed Jul 29">29</div>
              <div class="bcn-fd-tl__day" title="Thu Jul 30">30</div>
              <div class="bcn-fd-tl__day" title="Fri Jul 31">31</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Aug 3">3</div>
              <div class="bcn-fd-tl__day" title="Tue Aug 4">4</div>
              <div class="bcn-fd-tl__day" title="Wed Aug 5">5</div>
              <div class="bcn-fd-tl__day" title="Thu Aug 6">6</div>
              <div class="bcn-fd-tl__day" title="Fri Aug 7">7</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Aug 10">10</div>
              <div class="bcn-fd-tl__day" title="Tue Aug 11">11</div>
              <div class="bcn-fd-tl__day" title="Wed Aug 12">12</div>
              <div class="bcn-fd-tl__day" title="Thu Aug 13">13</div>
              <div class="bcn-fd-tl__day" title="Fri Aug 14">14</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Aug 17">17</div>
              <div class="bcn-fd-tl__day" title="Tue Aug 18">18</div>
              <div class="bcn-fd-tl__day" title="Wed Aug 19">19</div>
              <div class="bcn-fd-tl__day" title="Thu Aug 20">20</div>
              <div class="bcn-fd-tl__day" title="Fri Aug 21">21</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Aug 24">24</div>
              <div class="bcn-fd-tl__day" title="Tue Aug 25">25</div>
              <div class="bcn-fd-tl__day" title="Wed Aug 26">26</div>
              <div class="bcn-fd-tl__day" title="Thu Aug 27">27</div>
              <div class="bcn-fd-tl__day" title="Fri Aug 28">28</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Aug 31">31</div>
              <div class="bcn-fd-tl__day" title="Tue Sep 1">1</div>
              <div class="bcn-fd-tl__day" title="Wed Sep 2">2</div>
              <div class="bcn-fd-tl__day" title="Thu Sep 3">3</div>
              <div class="bcn-fd-tl__day" title="Fri Sep 4">4</div>
              <div class="bcn-fd-tl__day is-holiday is-monday" title="Mon Sep 7, holiday">
                7
              </div>
              <div class="bcn-fd-tl__day" title="Tue Sep 8">8</div>
              <div class="bcn-fd-tl__day" title="Wed Sep 9">9</div>
              <div class="bcn-fd-tl__day" title="Thu Sep 10">10</div>
              <div class="bcn-fd-tl__day" title="Fri Sep 11">11</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Sep 14">14</div>
              <div class="bcn-fd-tl__day" title="Tue Sep 15">15</div>
              <div class="bcn-fd-tl__day" title="Wed Sep 16">16</div>
              <div class="bcn-fd-tl__day" title="Thu Sep 17">17</div>
              <div class="bcn-fd-tl__day" title="Fri Sep 18">18</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Sep 21">21</div>
              <div class="bcn-fd-tl__day" title="Tue Sep 22">22</div>
              <div class="bcn-fd-tl__day" title="Wed Sep 23">23</div>
              <div class="bcn-fd-tl__day" title="Thu Sep 24">24</div>
              <div class="bcn-fd-tl__day is-today" title="Fri Sep 25">25</div>
              <div class="bcn-fd-tl__day is-monday" title="Mon Sep 28">28</div>
              <div class="bcn-fd-tl__day" title="Tue Sep 29">29</div>
              <div class="bcn-fd-tl__day" title="Wed Sep 30">30</div>
              <div class="bcn-fd-tl__day" title="Thu Oct 1">1</div>
              <div class="bcn-fd-tl__day" title="Fri Oct 2">2</div>
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
                ><span class="bcn-fd-tl__batch-alert"
                  >8 holes missing documents</span
                ></span
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
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-014"
                  data-fd-target-hole="DCRAI-DH-014"
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
                ><span class="bcn-fd-tl__cell" style="--i: 18"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-014&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-014"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 27. Received May 22."
                    aria-label="DCRAI-DH-014: Public notification (3-week look-ahead). Due May 27. Received May 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-014&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-014"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 29. Received May 27."
                    aria-label="DCRAI-DH-014: Landowner notification, 72-hr. Due May 29. Received May 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 23"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-014&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-014"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 3. Received Jun 2."
                    aria-label="DCRAI-DH-014: Site clearance, 14-day. Due Jun 3. Received Jun 2."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 28"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-014&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-014"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 3 to Jun 12. Received Jun 10."
                    aria-label="DCRAI-DH-014: USA ticket. Due Jun 3 to Jun 12. Received Jun 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 30"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-014&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-014"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    aria-label="DCRAI-DH-014: Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
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
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-292"
                  data-fd-target-hole="DCRDS-DH-292"
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
                ><span class="bcn-fd-tl__cell" style="--i: 18"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-292&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-292"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 27. Received May 22."
                    aria-label="DCRDS-DH-292: Public notification (3-week look-ahead). Due May 27. Received May 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-292&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-292"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 29. Missing."
                    aria-label="DCRDS-DH-292: Landowner notification, 72-hr. Due May 29. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 23"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-292&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-292"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 3. Received Jun 3."
                    aria-label="DCRDS-DH-292: Site clearance, 14-day. Due Jun 3. Received Jun 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 27"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-292&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-292"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 3 to Jun 12. Received Jun 9."
                    aria-label="DCRDS-DH-292: USA ticket. Due Jun 3 to Jun 12. Received Jun 9."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 30"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-292&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-292"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    aria-label="DCRDS-DH-292: Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-006"
              data-status="complete"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-06-18"
              data-missing="0"
              data-search="dcrai-dh-006 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-006"
                  data-fd-target-hole="DCRAI-DH-006"
                  >DCRAI-DH-006</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 24; --to: 31"></span
                ><span class="bcn-fd-tl__bar" style="--from: 34; --to: 34"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 34"
                  href="?view=timeline&amp;hole=DCRAI-DH-006&amp;day=2026-06-18"
                  data-fd-target-hole="DCRAI-DH-006"
                  data-fd-target-day="2026-06-18"
                  title="Drill day Thu Jun 18, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 18, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 14"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-006&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-006"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 21. Received May 19."
                    aria-label="DCRAI-DH-006: Landowner notification, 14-day. Due May 21. Received May 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-006&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-006"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 22. Received May 21."
                    aria-label="DCRAI-DH-006: Landowner notification, 10-day. Due May 22. Received May 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 19"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-006&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-006"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 28. Received May 22."
                    aria-label="DCRAI-DH-006: Public notification (3-week look-ahead). Due May 28. Received May 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 21"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-006&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-006"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jun 1. Received May 28."
                    aria-label="DCRAI-DH-006: Landowner notification, 72-hr. Due Jun 1. Received May 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 24"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-006&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-006"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 4. Received Jun 3."
                    aria-label="DCRAI-DH-006: Site clearance, 14-day. Due Jun 4. Received Jun 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-006&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-006"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 4 to Jun 15. Received Jun 4."
                    aria-label="DCRAI-DH-006: USA ticket. Due Jun 4 to Jun 15. Received Jun 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 31"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-006&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-006"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 15. Received Jun 15."
                    aria-label="DCRAI-DH-006: Site clearance, 72-hr. Due Jun 15. Received Jun 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-248"
              data-status="complete"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-08-28"
              data-missing="0"
              data-search="dcrds-dh-248 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-248"
                  data-fd-target-hole="DCRDS-DH-248"
                  >DCRDS-DH-248</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 75; --to: 82"></span
                ><span class="bcn-fd-tl__bar" style="--from: 85; --to: 85"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 85"
                  href="?view=timeline&amp;hole=DCRDS-DH-248&amp;day=2026-08-28"
                  data-fd-target-hole="DCRDS-DH-248"
                  data-fd-target-day="2026-08-28"
                  title="Drill day Fri Aug 28, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 28, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-248&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-248"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 31. Received Jul 30."
                    aria-label="DCRDS-DH-248: Landowner notification, 14-day. Due Jul 31. Received Jul 30."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-248&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-248"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 4. Received Aug 3."
                    aria-label="DCRDS-DH-248: Landowner notification, 10-day. Due Aug 4. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-248&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-248"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 7. Received Aug 3."
                    aria-label="DCRDS-DH-248: Public notification (3-week look-ahead). Due Aug 7. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-248&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-248"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 11. Received Aug 11."
                    aria-label="DCRDS-DH-248: Landowner notification, 72-hr. Due Aug 11. Received Aug 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-248&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-248"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 14. Received Aug 14."
                    aria-label="DCRDS-DH-248: Site clearance, 14-day. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 79"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-248&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-248"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 14 to Aug 25. Received Aug 20."
                    aria-label="DCRDS-DH-248: USA ticket. Due Aug 14 to Aug 25. Received Aug 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-248&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-248"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 25. Received Aug 25."
                    aria-label="DCRDS-DH-248: Site clearance, 72-hr. Due Aug 25. Received Aug 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-253"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-08-28"
              data-missing="2"
              data-search="dcrds-dh-253 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-253"
                  data-fd-target-hole="DCRDS-DH-253"
                  >DCRDS-DH-253</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 75; --to: 82"></span
                ><span class="bcn-fd-tl__bar" style="--from: 85; --to: 85"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 85"
                  href="?view=timeline&amp;hole=DCRDS-DH-253&amp;day=2026-08-28"
                  data-fd-target-hole="DCRDS-DH-253"
                  data-fd-target-day="2026-08-28"
                  title="Drill day Fri Aug 28, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 28, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-253&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-253"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 31. Received Jul 30."
                    aria-label="DCRDS-DH-253: Landowner notification, 14-day. Due Jul 31. Received Jul 30."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-253&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-253"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 4. Received Aug 3."
                    aria-label="DCRDS-DH-253: Landowner notification, 10-day. Due Aug 4. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-253&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-253"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 7. Received Aug 3."
                    aria-label="DCRDS-DH-253: Public notification (3-week look-ahead). Due Aug 7. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-253&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-253"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 11. Missing."
                    aria-label="DCRDS-DH-253: Landowner notification, 72-hr. Due Aug 11. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-253&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-253"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 14. Missing."
                    aria-label="DCRDS-DH-253: Site clearance, 14-day. Due Aug 14. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-253&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-253"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 14 to Aug 25. Received Aug 21."
                    aria-label="DCRDS-DH-253: USA ticket. Due Aug 14 to Aug 25. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-253&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-253"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 25. Received Aug 25."
                    aria-label="DCRDS-DH-253: Site clearance, 72-hr. Due Aug 25. Received Aug 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-255"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-08-28"
              data-missing="1"
              data-search="dcrds-dh-255 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-255"
                  data-fd-target-hole="DCRDS-DH-255"
                  >DCRDS-DH-255</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 75; --to: 82"></span
                ><span class="bcn-fd-tl__bar" style="--from: 85; --to: 85"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 85"
                  href="?view=timeline&amp;hole=DCRDS-DH-255&amp;day=2026-08-28"
                  data-fd-target-hole="DCRDS-DH-255"
                  data-fd-target-day="2026-08-28"
                  title="Drill day Fri Aug 28, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 28, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-255&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-255"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 31. Received Jul 31."
                    aria-label="DCRDS-DH-255: Landowner notification, 14-day. Due Jul 31. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-255&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-255"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 4. Received Jul 31."
                    aria-label="DCRDS-DH-255: Landowner notification, 10-day. Due Aug 4. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-255&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-255"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 7. Received Aug 3."
                    aria-label="DCRDS-DH-255: Public notification (3-week look-ahead). Due Aug 7. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-255&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-255"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 11. Received Aug 7."
                    aria-label="DCRDS-DH-255: Landowner notification, 72-hr. Due Aug 11. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-255&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-255"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 14. Received Aug 13."
                    aria-label="DCRDS-DH-255: Site clearance, 14-day. Due Aug 14. Received Aug 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 78"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-255&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-255"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 14 to Aug 25. Received Aug 19."
                    aria-label="DCRDS-DH-255: USA ticket. Due Aug 14 to Aug 25. Received Aug 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-255&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-255"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 25. Missing."
                    aria-label="DCRDS-DH-255: Site clearance, 72-hr. Due Aug 25. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR4-DH-004"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="8"
              data-county="San Joaquin"
              data-start="2026-08-31"
              data-missing="8"
              data-search="dctr4-dh-004 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR4-DH-004"
                  data-fd-target-hole="DCTR4-DH-004"
                  >DCTR4-DH-004</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 76; --to: 85"></span
                ><span class="bcn-fd-tl__bar" style="--from: 86; --to: 97"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 86"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-08-31"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-08-31"
                  title="Drill day Mon Aug 31, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 31, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 87"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-01"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-01"
                  title="Drill day Tue Sep 1, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Missing."
                  aria-label="Drill day Tue Sep 1, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Missing."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 88"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-02"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-02"
                  title="Drill day Wed Sep 2, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 2, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 89"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-03"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-03"
                  title="Drill day Thu Sep 3, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 3, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 90"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-04"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-04"
                  title="Drill day Fri Sep 4, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 4, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 92"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-08"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-08"
                  title="Drill day Tue Sep 8, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 8, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 93"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-09"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-09"
                  title="Drill day Wed Sep 9, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 9, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 94"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-10"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-10"
                  title="Drill day Thu Sep 10, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 10, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 95"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-11"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-11"
                  title="Drill day Fri Sep 11, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 11, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 96"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-14"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-14"
                  title="Drill day Mon Sep 14, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Mon Sep 14, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 97"
                  href="?view=timeline&amp;hole=DCTR4-DH-004&amp;day=2026-09-15"
                  data-fd-target-hole="DCTR4-DH-004"
                  data-fd-target-day="2026-09-15"
                  title="Drill day Tue Sep 15, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 15, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-004&amp;doc=landowner14"
                    data-fd-target-hole="DCTR4-DH-004"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 3. Received Jul 31."
                    aria-label="DCTR4-DH-004: Landowner notification, 14-day. Due Aug 3. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-004&amp;doc=landowner10"
                    data-fd-target-hole="DCTR4-DH-004"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 7. Received Aug 6."
                    aria-label="DCTR4-DH-004: Landowner notification, 10-day. Due Aug 7. Received Aug 6."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-004&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR4-DH-004"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 10. Received Aug 10."
                    aria-label="DCTR4-DH-004: Public notification (3-week look-ahead). Due Aug 10. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-004&amp;doc=landowner72"
                    data-fd-target-hole="DCTR4-DH-004"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 14. Received Aug 13."
                    aria-label="DCTR4-DH-004: Landowner notification, 72-hr. Due Aug 14. Received Aug 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 76"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-004&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR4-DH-004"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 17. Received Aug 14."
                    aria-label="DCTR4-DH-004: Site clearance, 14-day. Due Aug 17. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-004&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR4-DH-004"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 17 to Aug 28. Received Aug 21."
                    aria-label="DCTR4-DH-004: USA ticket. Due Aug 17 to Aug 28. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-004&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR4-DH-004"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    aria-label="DCTR4-DH-004: Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR4-DH-008"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-08-31"
              data-missing="1"
              data-search="dctr4-dh-008 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR4-DH-008"
                  data-fd-target-hole="DCTR4-DH-008"
                  >DCTR4-DH-008</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 76; --to: 85"></span
                ><span class="bcn-fd-tl__bar" style="--from: 86; --to: 94"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 86"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-08-31"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-08-31"
                  title="Drill day Mon Aug 31, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 31, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 87"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-09-01"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-09-01"
                  title="Drill day Tue Sep 1, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 1, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 88"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-09-02"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-09-02"
                  title="Drill day Wed Sep 2, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 2, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 89"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-09-03"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-09-03"
                  title="Drill day Thu Sep 3, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 3, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 90"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-09-04"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-09-04"
                  title="Drill day Fri Sep 4, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 4, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 92"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-09-08"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-09-08"
                  title="Drill day Tue Sep 8, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 8, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 93"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-09-09"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-09-09"
                  title="Drill day Wed Sep 9, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 9, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 94"
                  href="?view=timeline&amp;hole=DCTR4-DH-008&amp;day=2026-09-10"
                  data-fd-target-hole="DCTR4-DH-008"
                  data-fd-target-day="2026-09-10"
                  title="Drill day Thu Sep 10, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 10, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-008&amp;doc=landowner14"
                    data-fd-target-hole="DCTR4-DH-008"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 3. Received Aug 3."
                    aria-label="DCTR4-DH-008: Landowner notification, 14-day. Due Aug 3. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-008&amp;doc=landowner10"
                    data-fd-target-hole="DCTR4-DH-008"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 7. Received Aug 5."
                    aria-label="DCTR4-DH-008: Landowner notification, 10-day. Due Aug 7. Received Aug 5."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-008&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR4-DH-008"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 10. Received Aug 10."
                    aria-label="DCTR4-DH-008: Public notification (3-week look-ahead). Due Aug 10. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-008&amp;doc=landowner72"
                    data-fd-target-hole="DCTR4-DH-008"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 14. Received Aug 14."
                    aria-label="DCTR4-DH-008: Landowner notification, 72-hr. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 76"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-008&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR4-DH-008"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 17. Received Aug 17."
                    aria-label="DCTR4-DH-008: Site clearance, 14-day. Due Aug 17. Received Aug 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-008&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR4-DH-008"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 17 to Aug 28. Missing."
                    aria-label="DCTR4-DH-008: USA ticket. Due Aug 17 to Aug 28. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR4-DH-008&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR4-DH-008"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    aria-label="DCTR4-DH-008: Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-246"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="7"
              data-county="San Joaquin"
              data-start="2026-09-04"
              data-missing="1"
              data-search="dcrds-dh-246 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-246"
                  data-fd-target-hole="DCRDS-DH-246"
                  >DCRDS-DH-246</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 80; --to: 87"></span
                ><span class="bcn-fd-tl__bar" style="--from: 90; --to: 93"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 90"
                  href="?view=timeline&amp;hole=DCRDS-DH-246&amp;day=2026-09-04"
                  data-fd-target-hole="DCRDS-DH-246"
                  data-fd-target-day="2026-09-04"
                  title="Drill day Fri Sep 4, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 4, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >7</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 92"
                  href="?view=timeline&amp;hole=DCRDS-DH-246&amp;day=2026-09-08"
                  data-fd-target-hole="DCRDS-DH-246"
                  data-fd-target-day="2026-09-08"
                  title="Drill day Tue Sep 8, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 8, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 93"
                  href="?view=timeline&amp;hole=DCRDS-DH-246&amp;day=2026-09-09"
                  data-fd-target-hole="DCRDS-DH-246"
                  data-fd-target-day="2026-09-09"
                  title="Drill day Wed Sep 9, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 9, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-246&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-246"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 7. Received Aug 7."
                    aria-label="DCRDS-DH-246: Landowner notification, 14-day. Due Aug 7. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-246&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-246"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 11. Missing."
                    aria-label="DCRDS-DH-246: Landowner notification, 10-day. Due Aug 11. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-246&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-246"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    aria-label="DCRDS-DH-246: Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-246&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-246"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 18. Received Aug 14."
                    aria-label="DCRDS-DH-246: Landowner notification, 72-hr. Due Aug 18. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-246&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-246"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 21. Received Aug 20."
                    aria-label="DCRDS-DH-246: Site clearance, 14-day. Due Aug 21. Received Aug 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 81"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-246&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-246"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 21 to Sep 1. Received Aug 24."
                    aria-label="DCRDS-DH-246: USA ticket. Due Aug 21 to Sep 1. Received Aug 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 87"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-246&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-246"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    aria-label="DCRDS-DH-246: Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-011"
              data-status="complete"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-09-17"
              data-missing="0"
              data-search="dcrai-dh-011 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-011"
                  data-fd-target-hole="DCRAI-DH-011"
                  >DCRAI-DH-011</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 89; --to: 96"></span
                ><span class="bcn-fd-tl__bar" style="--from: 99; --to: 99"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 99"
                  href="?view=timeline&amp;hole=DCRAI-DH-011&amp;day=2026-09-17"
                  data-fd-target-hole="DCRAI-DH-011"
                  data-fd-target-day="2026-09-17"
                  title="Drill day Thu Sep 17, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 17, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 79"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-011&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-011"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 20. Received Aug 19."
                    aria-label="DCRAI-DH-011: Landowner notification, 14-day. Due Aug 20. Received Aug 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 81"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-011&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-011"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 24. Received Aug 21."
                    aria-label="DCRAI-DH-011: Landowner notification, 10-day. Due Aug 24. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 84"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-011&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-011"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 27. Received Aug 24."
                    aria-label="DCRAI-DH-011: Public notification (3-week look-ahead). Due Aug 27. Received Aug 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-011&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-011"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 31. Received Aug 31."
                    aria-label="DCRAI-DH-011: Landowner notification, 72-hr. Due Aug 31. Received Aug 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 89"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-011&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-011"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 3. Received Sep 3."
                    aria-label="DCRAI-DH-011: Site clearance, 14-day. Due Sep 3. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-011&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-011"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 3 to Sep 14. Received Sep 3."
                    aria-label="DCRAI-DH-011: USA ticket. Due Sep 3 to Sep 14. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 96"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-011&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-011"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 14. Received Sep 14."
                    aria-label="DCRAI-DH-011: Site clearance, 72-hr. Due Sep 14. Received Sep 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-013"
              data-status="complete"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-09-17"
              data-missing="0"
              data-search="dcrai-dh-013 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-013"
                  data-fd-target-hole="DCRAI-DH-013"
                  >DCRAI-DH-013</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 89; --to: 96"></span
                ><span class="bcn-fd-tl__bar" style="--from: 99; --to: 99"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 99"
                  href="?view=timeline&amp;hole=DCRAI-DH-013&amp;day=2026-09-17"
                  data-fd-target-hole="DCRAI-DH-013"
                  data-fd-target-day="2026-09-17"
                  title="Drill day Thu Sep 17, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 17, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 79"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-013&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-013"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 20. Received Aug 20."
                    aria-label="DCRAI-DH-013: Landowner notification, 14-day. Due Aug 20. Received Aug 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 81"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-013&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-013"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 24. Received Aug 20."
                    aria-label="DCRAI-DH-013: Landowner notification, 10-day. Due Aug 24. Received Aug 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 84"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-013&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-013"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 27. Received Aug 24."
                    aria-label="DCRAI-DH-013: Public notification (3-week look-ahead). Due Aug 27. Received Aug 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-013&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-013"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 31. Received Aug 27."
                    aria-label="DCRAI-DH-013: Landowner notification, 72-hr. Due Aug 31. Received Aug 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 89"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-013&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-013"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 3. Received Sep 3."
                    aria-label="DCRAI-DH-013: Site clearance, 14-day. Due Sep 3. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 95"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-013&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-013"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 3 to Sep 14. Received Sep 11."
                    aria-label="DCRAI-DH-013: USA ticket. Due Sep 3 to Sep 14. Received Sep 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 96"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-013&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-013"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 14. Received Sep 14."
                    aria-label="DCRAI-DH-013: Site clearance, 72-hr. Due Sep 14. Received Sep 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-010"
              data-status="missing"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-09-18"
              data-missing="1"
              data-search="dcrai-dh-010 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-010"
                  data-fd-target-hole="DCRAI-DH-010"
                  >DCRAI-DH-010</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 90; --to: 97"></span
                ><span class="bcn-fd-tl__bar" style="--from: 100; --to: 100"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 100"
                  href="?view=timeline&amp;hole=DCRAI-DH-010&amp;day=2026-09-18"
                  data-fd-target-hole="DCRAI-DH-010"
                  data-fd-target-day="2026-09-18"
                  title="Drill day Fri Sep 18, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 18, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-010&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-010"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 21. Missing."
                    aria-label="DCRAI-DH-010: Landowner notification, 14-day. Due Aug 21. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-010&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-010"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 25. Received Aug 21."
                    aria-label="DCRAI-DH-010: Landowner notification, 10-day. Due Aug 25. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-010&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-010"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 28. Received Aug 24."
                    aria-label="DCRAI-DH-010: Public notification (3-week look-ahead). Due Aug 28. Received Aug 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 87"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-010&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-010"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Sep 1. Received Aug 31."
                    aria-label="DCRAI-DH-010: Landowner notification, 72-hr. Due Sep 1. Received Aug 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-010&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-010"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 4. Received Sep 2."
                    aria-label="DCRAI-DH-010: Site clearance, 14-day. Due Sep 4. Received Sep 2."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 93"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-010&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-010"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 4 to Sep 15. Received Sep 9."
                    aria-label="DCRAI-DH-010: USA ticket. Due Sep 4 to Sep 15. Received Sep 9."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 97"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-010&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-010"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 15. Received Sep 15."
                    aria-label="DCRAI-DH-010: Site clearance, 72-hr. Due Sep 15. Received Sep 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-012"
              data-status="complete"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-09-18"
              data-missing="0"
              data-search="dcrai-dh-012 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-012"
                  data-fd-target-hole="DCRAI-DH-012"
                  >DCRAI-DH-012</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 90; --to: 97"></span
                ><span class="bcn-fd-tl__bar" style="--from: 100; --to: 100"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 100"
                  href="?view=timeline&amp;hole=DCRAI-DH-012&amp;day=2026-09-18"
                  data-fd-target-hole="DCRAI-DH-012"
                  data-fd-target-day="2026-09-18"
                  title="Drill day Fri Sep 18, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 18, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-012&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-012"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 21. Received Aug 21."
                    aria-label="DCRAI-DH-012: Landowner notification, 14-day. Due Aug 21. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-012&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-012"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 25. Received Aug 25."
                    aria-label="DCRAI-DH-012: Landowner notification, 10-day. Due Aug 25. Received Aug 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-012&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-012"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 28. Received Aug 24."
                    aria-label="DCRAI-DH-012: Public notification (3-week look-ahead). Due Aug 28. Received Aug 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 87"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-012&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-012"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Sep 1. Received Aug 28."
                    aria-label="DCRAI-DH-012: Landowner notification, 72-hr. Due Sep 1. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-012&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-012"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 4. Received Sep 3."
                    aria-label="DCRAI-DH-012: Site clearance, 14-day. Due Sep 4. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 95"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-012&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-012"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 4 to Sep 15. Received Sep 11."
                    aria-label="DCRAI-DH-012: USA ticket. Due Sep 4 to Sep 15. Received Sep 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 97"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-012&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-012"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 15. Received Sep 15."
                    aria-label="DCRAI-DH-012: Site clearance, 72-hr. Due Sep 15. Received Sep 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-008"
              data-status="upcoming"
              data-agreement="Batch 4 (TEP)"
              data-rig="HA"
              data-county="San Joaquin"
              data-start="2026-09-28"
              data-missing="0"
              data-search="dcrai-dh-008 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-008"
                  data-fd-target-hole="DCRAI-DH-008"
                  >DCRAI-DH-008</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 96; --to: 105"></span
                ><span class="bcn-fd-tl__bar" style="--from: 106; --to: 107"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 106"
                  href="?view=timeline&amp;hole=DCRAI-DH-008&amp;day=2026-09-28"
                  data-fd-target-hole="DCRAI-DH-008"
                  data-fd-target-day="2026-09-28"
                  title="Drill day Mon Sep 28, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Mon Sep 28, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 107"
                  href="?view=timeline&amp;hole=DCRAI-DH-008&amp;day=2026-09-29"
                  data-fd-target-hole="DCRAI-DH-008"
                  data-fd-target-day="2026-09-29"
                  title="Drill day Tue Sep 29, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Tue Sep 29, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-008&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-008"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    aria-label="DCRAI-DH-008: Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-008&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-008"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    aria-label="DCRAI-DH-008: Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-008&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-008"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    aria-label="DCRAI-DH-008: Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 95"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-008&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-008"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Sep 11. Received Sep 11."
                    aria-label="DCRAI-DH-008: Landowner notification, 72-hr. Due Sep 11. Received Sep 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 96"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-008&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-008"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 14. Received Sep 10."
                    aria-label="DCRAI-DH-008: Site clearance, 14-day. Due Sep 14. Received Sep 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-008&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-008"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 14 to Sep 25. Received Sep 14."
                    aria-label="DCRAI-DH-008: USA ticket. Due Sep 14 to Sep 25. Received Sep 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 105"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-008&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-008"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    aria-label="DCRAI-DH-008: Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRAI-DH-009"
              data-status="upcoming"
              data-agreement="Batch 4 (TEP)"
              data-rig="HA"
              data-county="San Joaquin"
              data-start="2026-09-28"
              data-missing="0"
              data-search="dcrai-dh-009 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRAI-DH-009"
                  data-fd-target-hole="DCRAI-DH-009"
                  >DCRAI-DH-009</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 96; --to: 105"></span
                ><span class="bcn-fd-tl__bar" style="--from: 106; --to: 107"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 106"
                  href="?view=timeline&amp;hole=DCRAI-DH-009&amp;day=2026-09-28"
                  data-fd-target-hole="DCRAI-DH-009"
                  data-fd-target-day="2026-09-28"
                  title="Drill day Mon Sep 28, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Mon Sep 28, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 107"
                  href="?view=timeline&amp;hole=DCRAI-DH-009&amp;day=2026-09-29"
                  data-fd-target-hole="DCRAI-DH-009"
                  data-fd-target-day="2026-09-29"
                  title="Drill day Tue Sep 29, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Tue Sep 29, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-009&amp;doc=landowner14"
                    data-fd-target-hole="DCRAI-DH-009"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 31. Received Aug 31."
                    aria-label="DCRAI-DH-009: Landowner notification, 14-day. Due Aug 31. Received Aug 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-009&amp;doc=landowner10"
                    data-fd-target-hole="DCRAI-DH-009"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Sep 4. Received Sep 2."
                    aria-label="DCRAI-DH-009: Landowner notification, 10-day. Due Sep 4. Received Sep 2."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-009&amp;doc=publicNotice"
                    data-fd-target-hole="DCRAI-DH-009"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    aria-label="DCRAI-DH-009: Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 95"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-009&amp;doc=landowner72"
                    data-fd-target-hole="DCRAI-DH-009"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Sep 11. Received Sep 11."
                    aria-label="DCRAI-DH-009: Landowner notification, 72-hr. Due Sep 11. Received Sep 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 96"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-009&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRAI-DH-009"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 14. Received Sep 14."
                    aria-label="DCRAI-DH-009: Site clearance, 14-day. Due Sep 14. Received Sep 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 103"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-009&amp;doc=usaTicket"
                    data-fd-target-hole="DCRAI-DH-009"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 14 to Sep 25. Received Sep 23."
                    aria-label="DCRAI-DH-009: USA ticket. Due Sep 14 to Sep 25. Received Sep 23."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 105"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRAI-DH-009&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRAI-DH-009"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    aria-label="DCRAI-DH-009: Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-294"
              data-status="upcoming"
              data-agreement="Batch 4 (TEP)"
              data-rig="HA"
              data-county="San Joaquin"
              data-start="2026-09-28"
              data-missing="0"
              data-search="dcrds-dh-294 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-294"
                  data-fd-target-hole="DCRDS-DH-294"
                  >DCRDS-DH-294</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 96; --to: 105"></span
                ><span class="bcn-fd-tl__bar" style="--from: 106; --to: 107"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 106"
                  href="?view=timeline&amp;hole=DCRDS-DH-294&amp;day=2026-09-28"
                  data-fd-target-hole="DCRDS-DH-294"
                  data-fd-target-day="2026-09-28"
                  title="Drill day Mon Sep 28, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Mon Sep 28, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 107"
                  href="?view=timeline&amp;hole=DCRDS-DH-294&amp;day=2026-09-29"
                  data-fd-target-hole="DCRDS-DH-294"
                  data-fd-target-day="2026-09-29"
                  title="Drill day Tue Sep 29, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Tue Sep 29, Hand auger. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-294&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-294"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    aria-label="DCRDS-DH-294: Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-294&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-294"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    aria-label="DCRDS-DH-294: Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-294&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-294"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    aria-label="DCRDS-DH-294: Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 95"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-294&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-294"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Sep 11. Received Sep 10."
                    aria-label="DCRDS-DH-294: Landowner notification, 72-hr. Due Sep 11. Received Sep 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 96"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-294&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-294"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 14. Received Sep 14."
                    aria-label="DCRDS-DH-294: Site clearance, 14-day. Due Sep 14. Received Sep 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 105"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-294&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-294"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 14 to Sep 25. Upcoming."
                    aria-label="DCRDS-DH-294: USA ticket. Due Sep 14 to Sep 25. Upcoming."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="upcoming"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-294&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-294"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    aria-label="DCRDS-DH-294: Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-317"
              data-status="upcoming"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="2026-09-28"
              data-missing="0"
              data-search="dcrds-dh-317 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-317"
                  data-fd-target-hole="DCRDS-DH-317"
                  >DCRDS-DH-317</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 96; --to: 105"></span
                ><span class="bcn-fd-tl__bar" style="--from: 106; --to: 106"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 106"
                  href="?view=timeline&amp;hole=DCRDS-DH-317&amp;day=2026-09-28"
                  data-fd-target-hole="DCRDS-DH-317"
                  data-fd-target-day="2026-09-28"
                  title="Drill day Mon Sep 28, Rig 5. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Mon Sep 28, Rig 5. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-317&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-317"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    aria-label="DCRDS-DH-317: Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-317&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-317"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    aria-label="DCRDS-DH-317: Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-317&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-317"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    aria-label="DCRDS-DH-317: Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 95"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-317&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-317"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Sep 11. Received Sep 10."
                    aria-label="DCRDS-DH-317: Landowner notification, 72-hr. Due Sep 11. Received Sep 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 96"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-317&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-317"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 14. Received Sep 11."
                    aria-label="DCRDS-DH-317: Site clearance, 14-day. Due Sep 14. Received Sep 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-317&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-317"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 14 to Sep 25. Received Sep 14."
                    aria-label="DCRDS-DH-317: USA ticket. Due Sep 14 to Sep 25. Received Sep 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 105"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-317&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-317"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    aria-label="DCRDS-DH-317: Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-CPT-102"
              data-status="upcoming"
              data-agreement="Batch 4 (TEP)"
              data-rig="CPT"
              data-county="San Joaquin"
              data-start="2026-09-28"
              data-missing="0"
              data-search="dctr2-cpt-102 state-7220-m"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR2-CPT-102"
                  data-fd-target-hole="DCTR2-CPT-102"
                  >DCTR2-CPT-102</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 96; --to: 105"></span
                ><span class="bcn-fd-tl__bar" style="--from: 106; --to: 107"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 106"
                  href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;day=2026-09-28"
                  data-fd-target-hole="DCTR2-CPT-102"
                  data-fd-target-day="2026-09-28"
                  title="Drill day Mon Sep 28, CPT. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Mon Sep 28, CPT. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                    >CPT</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 107"
                  href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;day=2026-09-29"
                  data-fd-target-hole="DCTR2-CPT-102"
                  data-fd-target-day="2026-09-29"
                  title="Drill day Tue Sep 29, CPT. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  aria-label="Drill day Tue Sep 29, CPT. Daily biological monitoring log: Upcoming. Daily field coordinator log: Upcoming. Daily geologist log: Upcoming."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="upcoming"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;doc=landowner14"
                    data-fd-target-hole="DCTR2-CPT-102"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    aria-label="DCTR2-CPT-102: Landowner notification, 14-day. Due Aug 31. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;doc=landowner10"
                    data-fd-target-hole="DCTR2-CPT-102"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    aria-label="DCTR2-CPT-102: Landowner notification, 10-day. Due Sep 4. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR2-CPT-102"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    aria-label="DCTR2-CPT-102: Public notification (3-week look-ahead). Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 95"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;doc=landowner72"
                    data-fd-target-hole="DCTR2-CPT-102"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Sep 11. Received Sep 9."
                    aria-label="DCTR2-CPT-102: Landowner notification, 72-hr. Due Sep 11. Received Sep 9."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 96"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR2-CPT-102"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Sep 14. Received Sep 11."
                    aria-label="DCTR2-CPT-102: Site clearance, 14-day. Due Sep 14. Received Sep 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 103"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR2-CPT-102"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Sep 14 to Sep 25. Received Sep 23."
                    aria-label="DCTR2-CPT-102: USA ticket. Due Sep 14 to Sep 25. Received Sep 23."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 105"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-102&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR2-CPT-102"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    aria-label="DCTR2-CPT-102: Site clearance, 72-hr. Due Sep 25. Received Sep 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCPWR-DH-001"
              data-status="unscheduled"
              data-agreement="Batch 4 (TEP)"
              data-rig="4"
              data-county="San Joaquin"
              data-start="9999-12-31"
              data-missing="0"
              data-search="dcpwr-dh-001 wtr-8202-f"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCPWR-DH-001"
                  data-fd-target-hole="DCPWR-DH-001"
                  >DCPWR-DH-001</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__note"
                  ><span class="bcn-fd-tl__note-reason">TBD</span>Field Flood - GGS Zone
                  (Oct 1)- Harvest</span
                >
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCSHF-DH-092"
              data-status="unscheduled"
              data-agreement="Batch 4 (TEP)"
              data-rig="8"
              data-county="San Joaquin"
              data-start="9999-12-31"
              data-missing="0"
              data-search="dcshf-dh-092 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCSHF-DH-092"
                  data-fd-target-hole="DCSHF-DH-092"
                  >DCSHF-DH-092</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__note"
                  ><span class="bcn-fd-tl__note-reason">TBD</span>After October 1 Harvest
                  / Bio Zone Travel</span
                >
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCSHF-DH-098"
              data-status="unscheduled"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="9999-12-31"
              data-missing="0"
              data-search="dcshf-dh-098 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCSHF-DH-098"
                  data-fd-target-hole="DCSHF-DH-098"
                  >DCSHF-DH-098</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__note"
                  ><span class="bcn-fd-tl__note-reason">TBD</span>After October 1 Harvest
                  / Bio Zone Travel</span
                >
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCSHF-DH-103"
              data-status="unscheduled"
              data-agreement="Batch 4 (TEP)"
              data-rig="8"
              data-county="San Joaquin"
              data-start="9999-12-31"
              data-missing="0"
              data-search="dcshf-dh-103 sjc-0481"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCSHF-DH-103"
                  data-fd-target-hole="DCSHF-DH-103"
                  >DCSHF-DH-103</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__note"
                  ><span class="bcn-fd-tl__note-reason">TBD</span>After October 1 Harvest
                  / Bio Zone Travel</span
                >
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-CPT-099"
              data-status="unscheduled"
              data-agreement="Batch 4 (TEP)"
              data-rig="CPT"
              data-county="San Joaquin"
              data-start="9999-12-31"
              data-missing="0"
              data-search="dctr2-cpt-099 state-7220-m"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR2-CPT-099"
                  data-fd-target-hole="DCTR2-CPT-099"
                  >DCTR2-CPT-099</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__note"
                  ><span class="bcn-fd-tl__note-reason">Bio Stop</span>Bio Stop - emailed
                  no work this season SC</span
                >
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-DH-100"
              data-status="unscheduled"
              data-agreement="Batch 4 (TEP)"
              data-rig="5"
              data-county="San Joaquin"
              data-start="9999-12-31"
              data-missing="0"
              data-search="dctr2-dh-100 state-7220-m"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR2-DH-100"
                  data-fd-target-hole="DCTR2-DH-100"
                  >DCTR2-DH-100</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__note"
                  ><span class="bcn-fd-tl__note-reason">Bio Stop</span>Bio Stop - emailed
                  no work this season SC</span
                >
              </div>
            </div>
          </div>
          <div class="bcn-fd-tl__group" data-fd-group="Batch 5 (TEP)">
            <div class="bcn-fd-tl__batch">
              <span class="bcn-fd-tl__batch-text"
                ><span class="bcn-fd-tl__batch-name">Batch 5 (TEP)</span
                ><span class="bcn-fd-tl__batch-alert"
                  >8 holes missing documents</span
                ></span
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
                <a
                  href="?view=timeline&amp;hole=DCBPP-DH-036"
                  data-fd-target-hole="DCBPP-DH-036"
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
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 23"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-03"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-03"
                  title="Drill day Wed Jun 3, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 3, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 24"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-04"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-04"
                  title="Drill day Thu Jun 4, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 4, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 25"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-05"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-05"
                  title="Drill day Fri Jun 5, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 5, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 26"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-08"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-08"
                  title="Drill day Mon Jun 8, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 8, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 27"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-09"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-09"
                  title="Drill day Tue Jun 9, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 9, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 28"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-10"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-10"
                  title="Drill day Wed Jun 10, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 10, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 29"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-11"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-11"
                  title="Drill day Thu Jun 11, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 11, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 30"
                  href="?view=timeline&amp;hole=DCBPP-DH-036&amp;day=2026-06-12"
                  data-fd-target-hole="DCBPP-DH-036"
                  data-fd-target-day="2026-06-12"
                  title="Drill day Fri Jun 12, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 12, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 1"
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
                ><span class="bcn-fd-tl__cell" style="--i: 6"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-036&amp;doc=publicNotice"
                    data-fd-target-hole="DCBPP-DH-036"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 11. Received May 11."
                    aria-label="DCBPP-DH-036: Public notification (3-week look-ahead). Due May 11. Received May 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 10"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-036&amp;doc=landowner72"
                    data-fd-target-hole="DCBPP-DH-036"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 15. Received May 15."
                    aria-label="DCBPP-DH-036: Landowner notification, 72-hr. Due May 15. Received May 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 11"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-036&amp;doc=siteClearance14"
                    data-fd-target-hole="DCBPP-DH-036"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due May 18. Received May 15."
                    aria-label="DCBPP-DH-036: Site clearance, 14-day. Due May 18. Received May 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-036&amp;doc=usaTicket"
                    data-fd-target-hole="DCBPP-DH-036"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due May 18 to May 29. Received May 22."
                    aria-label="DCBPP-DH-036: USA ticket. Due May 18 to May 29. Received May 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-036&amp;doc=siteClearance72"
                    data-fd-target-hole="DCBPP-DH-036"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due May 29. Received May 29."
                    aria-label="DCBPP-DH-036: Site clearance, 72-hr. Due May 29. Received May 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
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
                <a
                  href="?view=timeline&amp;hole=DCBPP-DH-039"
                  data-fd-target-hole="DCBPP-DH-039"
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
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 23"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-03"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-03"
                  title="Drill day Wed Jun 3, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 3, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 24"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-04"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-04"
                  title="Drill day Thu Jun 4, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 4, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 25"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-05"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-05"
                  title="Drill day Fri Jun 5, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 5, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 26"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-08"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-08"
                  title="Drill day Mon Jun 8, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 8, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 27"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-09"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-09"
                  title="Drill day Tue Jun 9, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 9, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 28"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-10"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-10"
                  title="Drill day Wed Jun 10, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  aria-label="Drill day Wed Jun 10, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 29"
                  href="?view=timeline&amp;hole=DCBPP-DH-039&amp;day=2026-06-11"
                  data-fd-target-hole="DCBPP-DH-039"
                  data-fd-target-day="2026-06-11"
                  title="Drill day Thu Jun 11, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 11, Rig 1. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 1"
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
                ><span class="bcn-fd-tl__cell" style="--i: 6"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-039&amp;doc=publicNotice"
                    data-fd-target-hole="DCBPP-DH-039"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 11. Received May 11."
                    aria-label="DCBPP-DH-039: Public notification (3-week look-ahead). Due May 11. Received May 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 10"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-039&amp;doc=landowner72"
                    data-fd-target-hole="DCBPP-DH-039"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 15. Received May 13."
                    aria-label="DCBPP-DH-039: Landowner notification, 72-hr. Due May 15. Received May 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 11"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-039&amp;doc=siteClearance14"
                    data-fd-target-hole="DCBPP-DH-039"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due May 18. Received May 15."
                    aria-label="DCBPP-DH-039: Site clearance, 14-day. Due May 18. Received May 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 14"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-039&amp;doc=usaTicket"
                    data-fd-target-hole="DCBPP-DH-039"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due May 18 to May 29. Received May 21."
                    aria-label="DCBPP-DH-039: USA ticket. Due May 18 to May 29. Received May 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-039&amp;doc=siteClearance72"
                    data-fd-target-hole="DCBPP-DH-039"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due May 29. Missing."
                    aria-label="DCBPP-DH-039: Site clearance, 72-hr. Due May 29. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCSHF-DH-144"
              data-status="late"
              data-agreement="Batch 5 (TEP)"
              data-rig="4"
              data-county="Alameda"
              data-start="2026-06-12"
              data-missing="0"
              data-search="dcshf-dh-144 pwr-8063"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCSHF-DH-144"
                  data-fd-target-hole="DCSHF-DH-144"
                  >DCSHF-DH-144</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 20; --to: 27"></span
                ><span class="bcn-fd-tl__bar" style="--from: 30; --to: 42"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 30"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-12"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-12"
                  title="Drill day Fri Jun 12, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 12, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >4</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 31"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-15"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-15"
                  title="Drill day Mon Jun 15, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 15, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 32"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-16"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-16"
                  title="Drill day Tue Jun 16, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 16, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 33"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-17"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-17"
                  title="Drill day Wed Jun 17, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 17, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 34"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-18"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-18"
                  title="Drill day Thu Jun 18, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 18, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 35"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-19"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-19"
                  title="Drill day Fri Jun 19, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 19, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 36"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-22"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-22"
                  title="Drill day Mon Jun 22, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 22, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 37"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-23"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-23"
                  title="Drill day Tue Jun 23, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 23, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 38"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-24"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-24"
                  title="Drill day Wed Jun 24, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 24, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 39"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-25"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-25"
                  title="Drill day Thu Jun 25, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 25, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 40"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-26"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-26"
                  title="Drill day Fri Jun 26, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 26, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 41"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-29"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-29"
                  title="Drill day Mon Jun 29, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  aria-label="Drill day Mon Jun 29, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 42"
                  href="?view=timeline&amp;hole=DCSHF-DH-144&amp;day=2026-06-30"
                  data-fd-target-hole="DCSHF-DH-144"
                  data-fd-target-day="2026-06-30"
                  title="Drill day Tue Jun 30, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 30, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 10"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCSHF-DH-144&amp;doc=landowner14"
                    data-fd-target-hole="DCSHF-DH-144"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 15. Received May 14."
                    aria-label="DCSHF-DH-144: Landowner notification, 14-day. Due May 15. Received May 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 12"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCSHF-DH-144&amp;doc=landowner10"
                    data-fd-target-hole="DCSHF-DH-144"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 19. Received May 18."
                    aria-label="DCSHF-DH-144: Landowner notification, 10-day. Due May 19. Received May 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCSHF-DH-144&amp;doc=publicNotice"
                    data-fd-target-hole="DCSHF-DH-144"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 22. Received May 18."
                    aria-label="DCSHF-DH-144: Public notification (3-week look-ahead). Due May 22. Received May 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 17"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCSHF-DH-144&amp;doc=landowner72"
                    data-fd-target-hole="DCSHF-DH-144"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 26. Received May 26."
                    aria-label="DCSHF-DH-144: Landowner notification, 72-hr. Due May 26. Received May 26."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCSHF-DH-144&amp;doc=siteClearance14"
                    data-fd-target-hole="DCSHF-DH-144"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due May 29. Received May 27."
                    aria-label="DCSHF-DH-144: Site clearance, 14-day. Due May 29. Received May 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 28"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCSHF-DH-144&amp;doc=usaTicket"
                    data-fd-target-hole="DCSHF-DH-144"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due May 29 to Jun 9. Received Jun 10."
                    aria-label="DCSHF-DH-144: USA ticket. Due May 29 to Jun 9. Received Jun 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="late"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 27"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCSHF-DH-144&amp;doc=siteClearance72"
                    data-fd-target-hole="DCSHF-DH-144"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 9. Received Jun 9."
                    aria-label="DCSHF-DH-144: Site clearance, 72-hr. Due Jun 9. Received Jun 9."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCBPP-DH-066"
              data-status="late"
              data-agreement="Batch 5 (TEP)"
              data-rig="6"
              data-county="Alameda"
              data-start="2026-06-15"
              data-missing="0"
              data-search="dcbpp-dh-066 pwr-8064"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCBPP-DH-066"
                  data-fd-target-hole="DCBPP-DH-066"
                  >DCBPP-DH-066</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 21; --to: 30"></span
                ><span class="bcn-fd-tl__bar" style="--from: 31; --to: 39"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 31"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-15"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-15"
                  title="Drill day Mon Jun 15, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 15, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >6</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 32"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-16"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-16"
                  title="Drill day Tue Jun 16, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 16, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 33"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-17"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-17"
                  title="Drill day Wed Jun 17, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 17, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 34"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-18"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-18"
                  title="Drill day Thu Jun 18, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 18, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 35"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-19"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-19"
                  title="Drill day Fri Jun 19, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 19, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 36"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-22"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-22"
                  title="Drill day Mon Jun 22, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 22, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 37"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-23"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-23"
                  title="Drill day Tue Jun 23, Rig 6. Daily biological monitoring log: Received late. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 23, Rig 6. Daily biological monitoring log: Received late. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 38"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-24"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-24"
                  title="Drill day Wed Jun 24, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 24, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 39"
                  href="?view=timeline&amp;hole=DCBPP-DH-066&amp;day=2026-06-25"
                  data-fd-target-hole="DCBPP-DH-066"
                  data-fd-target-day="2026-06-25"
                  title="Drill day Thu Jun 25, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 25, Rig 6. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 11"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-066&amp;doc=landowner14"
                    data-fd-target-hole="DCBPP-DH-066"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 18. Received May 15."
                    aria-label="DCBPP-DH-066: Landowner notification, 14-day. Due May 18. Received May 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-066&amp;doc=landowner10"
                    data-fd-target-hole="DCBPP-DH-066"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 22. Received May 21."
                    aria-label="DCBPP-DH-066: Landowner notification, 10-day. Due May 22. Received May 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-066&amp;doc=publicNotice"
                    data-fd-target-hole="DCBPP-DH-066"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 22. Received May 22."
                    aria-label="DCBPP-DH-066: Public notification (3-week look-ahead). Due May 22. Received May 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-066&amp;doc=landowner72"
                    data-fd-target-hole="DCBPP-DH-066"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 29. Received Jun 3."
                    aria-label="DCBPP-DH-066: Landowner notification, 72-hr. Due May 29. Received Jun 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="late"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 21"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-066&amp;doc=siteClearance14"
                    data-fd-target-hole="DCBPP-DH-066"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 1. Received Jun 1."
                    aria-label="DCBPP-DH-066: Site clearance, 14-day. Due Jun 1. Received Jun 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 23"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-066&amp;doc=usaTicket"
                    data-fd-target-hole="DCBPP-DH-066"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 1 to Jun 12. Received Jun 3."
                    aria-label="DCBPP-DH-066: USA ticket. Due Jun 1 to Jun 12. Received Jun 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 30"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-066&amp;doc=siteClearance72"
                    data-fd-target-hole="DCBPP-DH-066"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    aria-label="DCBPP-DH-066: Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCBPP-DH-034"
              data-status="complete"
              data-agreement="Batch 5 (TEP)"
              data-rig="3"
              data-county="Alameda"
              data-start="2026-06-16"
              data-missing="0"
              data-search="dcbpp-dh-034 pwr-8063"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCBPP-DH-034"
                  data-fd-target-hole="DCBPP-DH-034"
                  >DCBPP-DH-034</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 22; --to: 30"></span
                ><span class="bcn-fd-tl__bar" style="--from: 32; --to: 39"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 32"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-16"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-16"
                  title="Drill day Tue Jun 16, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 16, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >3</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 33"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-17"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-17"
                  title="Drill day Wed Jun 17, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 17, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 34"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-18"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-18"
                  title="Drill day Thu Jun 18, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 18, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 35"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-19"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-19"
                  title="Drill day Fri Jun 19, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 19, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 36"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-22"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-22"
                  title="Drill day Mon Jun 22, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 22, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 37"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-23"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-23"
                  title="Drill day Tue Jun 23, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 23, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 38"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-24"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-24"
                  title="Drill day Wed Jun 24, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 24, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 39"
                  href="?view=timeline&amp;hole=DCBPP-DH-034&amp;day=2026-06-25"
                  data-fd-target-hole="DCBPP-DH-034"
                  data-fd-target-day="2026-06-25"
                  title="Drill day Thu Jun 25, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 25, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 12"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-034&amp;doc=landowner14"
                    data-fd-target-hole="DCBPP-DH-034"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 19. Received May 19."
                    aria-label="DCBPP-DH-034: Landowner notification, 14-day. Due May 19. Received May 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-034&amp;doc=landowner10"
                    data-fd-target-hole="DCBPP-DH-034"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 22. Received May 21."
                    aria-label="DCBPP-DH-034: Landowner notification, 10-day. Due May 22. Received May 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 17"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-034&amp;doc=publicNotice"
                    data-fd-target-hole="DCBPP-DH-034"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 26. Received May 22."
                    aria-label="DCBPP-DH-034: Public notification (3-week look-ahead). Due May 26. Received May 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-034&amp;doc=landowner72"
                    data-fd-target-hole="DCBPP-DH-034"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 29. Received May 29."
                    aria-label="DCBPP-DH-034: Landowner notification, 72-hr. Due May 29. Received May 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 22"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-034&amp;doc=siteClearance14"
                    data-fd-target-hole="DCBPP-DH-034"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 2. Received Jun 2."
                    aria-label="DCBPP-DH-034: Site clearance, 14-day. Due Jun 2. Received Jun 2."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 24"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-034&amp;doc=usaTicket"
                    data-fd-target-hole="DCBPP-DH-034"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 2 to Jun 12. Received Jun 4."
                    aria-label="DCBPP-DH-034: USA ticket. Due Jun 2 to Jun 12. Received Jun 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 30"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-034&amp;doc=siteClearance72"
                    data-fd-target-hole="DCBPP-DH-034"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    aria-label="DCBPP-DH-034: Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR1-DH-008"
              data-status="complete"
              data-agreement="Batch 5 (TEP)"
              data-rig="2"
              data-county="Sacramento"
              data-start="2026-06-16"
              data-missing="0"
              data-search="dctr1-dh-008 sac-0274"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR1-DH-008"
                  data-fd-target-hole="DCTR1-DH-008"
                  >DCTR1-DH-008</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 22; --to: 30"></span
                ><span class="bcn-fd-tl__bar" style="--from: 32; --to: 42"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 32"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-16"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-16"
                  title="Drill day Tue Jun 16, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 16, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >2</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 33"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-17"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-17"
                  title="Drill day Wed Jun 17, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 17, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 34"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-18"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-18"
                  title="Drill day Thu Jun 18, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 18, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 35"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-19"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-19"
                  title="Drill day Fri Jun 19, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 19, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 36"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-22"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-22"
                  title="Drill day Mon Jun 22, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 22, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 37"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-23"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-23"
                  title="Drill day Tue Jun 23, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 23, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 38"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-24"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-24"
                  title="Drill day Wed Jun 24, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jun 24, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 39"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-25"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-25"
                  title="Drill day Thu Jun 25, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 25, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 40"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-26"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-26"
                  title="Drill day Fri Jun 26, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jun 26, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 41"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-29"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-29"
                  title="Drill day Mon Jun 29, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jun 29, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 42"
                  href="?view=timeline&amp;hole=DCTR1-DH-008&amp;day=2026-06-30"
                  data-fd-target-hole="DCTR1-DH-008"
                  data-fd-target-day="2026-06-30"
                  title="Drill day Tue Jun 30, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jun 30, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 12"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR1-DH-008&amp;doc=landowner14"
                    data-fd-target-hole="DCTR1-DH-008"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 19. Received May 18."
                    aria-label="DCTR1-DH-008: Landowner notification, 14-day. Due May 19. Received May 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 15"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR1-DH-008&amp;doc=landowner10"
                    data-fd-target-hole="DCTR1-DH-008"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due May 22. Received May 21."
                    aria-label="DCTR1-DH-008: Landowner notification, 10-day. Due May 22. Received May 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 17"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR1-DH-008&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR1-DH-008"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due May 26. Received May 22."
                    aria-label="DCTR1-DH-008: Public notification (3-week look-ahead). Due May 26. Received May 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 20"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR1-DH-008&amp;doc=landowner72"
                    data-fd-target-hole="DCTR1-DH-008"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due May 29. Received May 28."
                    aria-label="DCTR1-DH-008: Landowner notification, 72-hr. Due May 29. Received May 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 22"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR1-DH-008&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR1-DH-008"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 2. Received Jun 1."
                    aria-label="DCTR1-DH-008: Site clearance, 14-day. Due Jun 2. Received Jun 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 23"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR1-DH-008&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR1-DH-008"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 2 to Jun 12. Received Jun 3."
                    aria-label="DCTR1-DH-008: USA ticket. Due Jun 2 to Jun 12. Received Jun 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 30"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR1-DH-008&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR1-DH-008"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    aria-label="DCTR1-DH-008: Site clearance, 72-hr. Due Jun 12. Received Jun 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-131"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="5"
              data-county="Sacramento"
              data-start="2026-06-25"
              data-missing="1"
              data-search="dcrds-dh-131 sac-2851"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-131"
                  data-fd-target-hole="DCRDS-DH-131"
                  >DCRDS-DH-131</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 29; --to: 36"></span
                ><span class="bcn-fd-tl__bar" style="--from: 39; --to: 39"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 39"
                  href="?view=timeline&amp;hole=DCRDS-DH-131&amp;day=2026-06-25"
                  data-fd-target-hole="DCRDS-DH-131"
                  data-fd-target-day="2026-06-25"
                  title="Drill day Thu Jun 25, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jun 25, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 19"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-131&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-131"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due May 28. Received May 28."
                    aria-label="DCRDS-DH-131: Landowner notification, 14-day. Due May 28. Received May 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 21"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-131&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-131"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jun 1. Received May 29."
                    aria-label="DCRDS-DH-131: Landowner notification, 10-day. Due Jun 1. Received May 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 24"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-131&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-131"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jun 4. Received Jun 1."
                    aria-label="DCRDS-DH-131: Public notification (3-week look-ahead). Due Jun 4. Received Jun 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 26"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-131&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-131"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jun 8. Missing."
                    aria-label="DCRDS-DH-131: Landowner notification, 72-hr. Due Jun 8. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 29"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-131&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-131"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 11. Received Jun 10."
                    aria-label="DCRDS-DH-131: Site clearance, 14-day. Due Jun 11. Received Jun 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 31"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-131&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-131"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 11 to Jun 22. Received Jun 15."
                    aria-label="DCRDS-DH-131: USA ticket. Due Jun 11 to Jun 22. Received Jun 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 36"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-131&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-131"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jun 22. Received Jun 22."
                    aria-label="DCRDS-DH-131: Site clearance, 72-hr. Due Jun 22. Received Jun 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCBPP-DH-019"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="7"
              data-county="Alameda"
              data-start="2026-07-06"
              data-missing="1"
              data-search="dcbpp-dh-019 pwr-8063"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCBPP-DH-019"
                  data-fd-target-hole="DCBPP-DH-019"
                  >DCBPP-DH-019</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 36; --to: 44"></span
                ><span class="bcn-fd-tl__bar" style="--from: 46; --to: 53"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 46"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-06"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-06"
                  title="Drill day Mon Jul 6, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jul 6, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >7</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 47"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-07"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-07"
                  title="Drill day Tue Jul 7, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jul 7, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 48"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-08"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-08"
                  title="Drill day Wed Jul 8, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Wed Jul 8, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 49"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-09"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-09"
                  title="Drill day Thu Jul 9, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jul 9, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 50"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-10"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-10"
                  title="Drill day Fri Jul 10, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jul 10, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 51"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-13"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-13"
                  title="Drill day Mon Jul 13, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jul 13, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 52"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-14"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-14"
                  title="Drill day Tue Jul 14, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jul 14, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 53"
                  href="?view=timeline&amp;hole=DCBPP-DH-019&amp;day=2026-07-15"
                  data-fd-target-hole="DCBPP-DH-019"
                  data-fd-target-day="2026-07-15"
                  title="Drill day Wed Jul 15, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  aria-label="Drill day Wed Jul 15, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 26"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-019&amp;doc=landowner14"
                    data-fd-target-hole="DCBPP-DH-019"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jun 8. Received Jun 4."
                    aria-label="DCBPP-DH-019: Landowner notification, 14-day. Due Jun 8. Received Jun 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 30"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-019&amp;doc=landowner10"
                    data-fd-target-hole="DCBPP-DH-019"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jun 12. Received Jun 12."
                    aria-label="DCBPP-DH-019: Landowner notification, 10-day. Due Jun 12. Received Jun 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 31"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-019&amp;doc=publicNotice"
                    data-fd-target-hole="DCBPP-DH-019"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jun 15. Received Jun 15."
                    aria-label="DCBPP-DH-019: Public notification (3-week look-ahead). Due Jun 15. Received Jun 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 35"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-019&amp;doc=landowner72"
                    data-fd-target-hole="DCBPP-DH-019"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jun 19. Received Jun 18."
                    aria-label="DCBPP-DH-019: Landowner notification, 72-hr. Due Jun 19. Received Jun 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 36"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-019&amp;doc=siteClearance14"
                    data-fd-target-hole="DCBPP-DH-019"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 22. Received Jun 22."
                    aria-label="DCBPP-DH-019: Site clearance, 14-day. Due Jun 22. Received Jun 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-019&amp;doc=usaTicket"
                    data-fd-target-hole="DCBPP-DH-019"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 22 to Jul 2. Received Jun 22."
                    aria-label="DCBPP-DH-019: USA ticket. Due Jun 22 to Jul 2. Received Jun 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 44"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-019&amp;doc=siteClearance72"
                    data-fd-target-hole="DCBPP-DH-019"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jul 2. Received Jul 2."
                    aria-label="DCBPP-DH-019: Site clearance, 72-hr. Due Jul 2. Received Jul 2."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCBPP-DH-003"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="3"
              data-county="Alameda"
              data-start="2026-07-13"
              data-missing="2"
              data-search="dcbpp-dh-003 pwr-8063"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCBPP-DH-003"
                  data-fd-target-hole="DCBPP-DH-003"
                  >DCBPP-DH-003</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 41; --to: 50"></span
                ><span class="bcn-fd-tl__bar" style="--from: 51; --to: 58"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 51"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-13"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-13"
                  title="Drill day Mon Jul 13, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jul 13, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >3</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 52"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-14"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-14"
                  title="Drill day Tue Jul 14, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jul 14, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 53"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-15"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-15"
                  title="Drill day Wed Jul 15, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jul 15, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 54"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-16"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-16"
                  title="Drill day Thu Jul 16, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jul 16, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 55"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-17"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-17"
                  title="Drill day Fri Jul 17, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jul 17, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 56"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-20"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-20"
                  title="Drill day Mon Jul 20, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Mon Jul 20, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 57"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-21"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-21"
                  title="Drill day Tue Jul 21, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jul 21, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 58"
                  href="?view=timeline&amp;hole=DCBPP-DH-003&amp;day=2026-07-22"
                  data-fd-target-hole="DCBPP-DH-003"
                  data-fd-target-day="2026-07-22"
                  title="Drill day Wed Jul 22, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jul 22, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 31"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-003&amp;doc=landowner14"
                    data-fd-target-hole="DCBPP-DH-003"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jun 15. Received Jun 12."
                    aria-label="DCBPP-DH-003: Landowner notification, 14-day. Due Jun 15. Received Jun 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 35"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-003&amp;doc=landowner10"
                    data-fd-target-hole="DCBPP-DH-003"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jun 19. Received Jun 18."
                    aria-label="DCBPP-DH-003: Landowner notification, 10-day. Due Jun 19. Received Jun 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 36"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-003&amp;doc=publicNotice"
                    data-fd-target-hole="DCBPP-DH-003"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jun 22. Received Jun 22."
                    aria-label="DCBPP-DH-003: Public notification (3-week look-ahead). Due Jun 22. Received Jun 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 40"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-003&amp;doc=landowner72"
                    data-fd-target-hole="DCBPP-DH-003"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jun 26. Missing."
                    aria-label="DCBPP-DH-003: Landowner notification, 72-hr. Due Jun 26. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 41"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-003&amp;doc=siteClearance14"
                    data-fd-target-hole="DCBPP-DH-003"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jun 29. Received Jun 25."
                    aria-label="DCBPP-DH-003: Site clearance, 14-day. Due Jun 29. Received Jun 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 49"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-003&amp;doc=usaTicket"
                    data-fd-target-hole="DCBPP-DH-003"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jun 29 to Jul 10. Received Jul 9."
                    aria-label="DCBPP-DH-003: USA ticket. Due Jun 29 to Jul 10. Received Jul 9."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 50"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-DH-003&amp;doc=siteClearance72"
                    data-fd-target-hole="DCBPP-DH-003"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jul 10. Received Jul 10."
                    aria-label="DCBPP-DH-003: Site clearance, 72-hr. Due Jul 10. Received Jul 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCIN3-DH-016"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="2"
              data-county="Sacramento"
              data-start="2026-07-21"
              data-missing="2"
              data-search="dcin3-dh-016 sac-0058"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCIN3-DH-016"
                  data-fd-target-hole="DCIN3-DH-016"
                  >DCIN3-DH-016</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 47; --to: 55"></span
                ><span class="bcn-fd-tl__bar" style="--from: 57; --to: 61"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 57"
                  href="?view=timeline&amp;hole=DCIN3-DH-016&amp;day=2026-07-21"
                  data-fd-target-hole="DCIN3-DH-016"
                  data-fd-target-day="2026-07-21"
                  title="Drill day Tue Jul 21, Rig 2. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Jul 21, Rig 2. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                    >2</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 58"
                  href="?view=timeline&amp;hole=DCIN3-DH-016&amp;day=2026-07-22"
                  data-fd-target-hole="DCIN3-DH-016"
                  data-fd-target-day="2026-07-22"
                  title="Drill day Wed Jul 22, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Jul 22, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 59"
                  href="?view=timeline&amp;hole=DCIN3-DH-016&amp;day=2026-07-23"
                  data-fd-target-hole="DCIN3-DH-016"
                  data-fd-target-day="2026-07-23"
                  title="Drill day Thu Jul 23, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jul 23, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 60"
                  href="?view=timeline&amp;hole=DCIN3-DH-016&amp;day=2026-07-24"
                  data-fd-target-hole="DCIN3-DH-016"
                  data-fd-target-day="2026-07-24"
                  title="Drill day Fri Jul 24, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jul 24, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 61"
                  href="?view=timeline&amp;hole=DCIN3-DH-016&amp;day=2026-07-27"
                  data-fd-target-hole="DCIN3-DH-016"
                  data-fd-target-day="2026-07-27"
                  title="Drill day Mon Jul 27, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Jul 27, Rig 2. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 37"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCIN3-DH-016&amp;doc=landowner14"
                    data-fd-target-hole="DCIN3-DH-016"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jun 23. Received Jun 23."
                    aria-label="DCIN3-DH-016: Landowner notification, 14-day. Due Jun 23. Received Jun 23."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 40"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCIN3-DH-016&amp;doc=landowner10"
                    data-fd-target-hole="DCIN3-DH-016"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jun 26. Received Jun 24."
                    aria-label="DCIN3-DH-016: Landowner notification, 10-day. Due Jun 26. Received Jun 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 42"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCIN3-DH-016&amp;doc=publicNotice"
                    data-fd-target-hole="DCIN3-DH-016"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jun 30. Received Jun 29."
                    aria-label="DCIN3-DH-016: Public notification (3-week look-ahead). Due Jun 30. Received Jun 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 44"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCIN3-DH-016&amp;doc=landowner72"
                    data-fd-target-hole="DCIN3-DH-016"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 2. Received Jul 1."
                    aria-label="DCIN3-DH-016: Landowner notification, 72-hr. Due Jul 2. Received Jul 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 47"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCIN3-DH-016&amp;doc=siteClearance14"
                    data-fd-target-hole="DCIN3-DH-016"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 7. Missing."
                    aria-label="DCIN3-DH-016: Site clearance, 14-day. Due Jul 7. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCIN3-DH-016&amp;doc=usaTicket"
                    data-fd-target-hole="DCIN3-DH-016"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 7 to Jul 17. Received Jul 7."
                    aria-label="DCIN3-DH-016: USA ticket. Due Jul 7 to Jul 17. Received Jul 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 55"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCIN3-DH-016&amp;doc=siteClearance72"
                    data-fd-target-hole="DCIN3-DH-016"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jul 17. Received Jul 17."
                    aria-label="DCIN3-DH-016: Site clearance, 72-hr. Due Jul 17. Received Jul 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCBPP-CPT-035"
              data-status="complete"
              data-agreement="Batch 5 (TEP)"
              data-rig="CPT"
              data-county="Alameda"
              data-start="2026-07-23"
              data-missing="0"
              data-search="dcbpp-cpt-035 pwr-8063"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCBPP-CPT-035"
                  data-fd-target-hole="DCBPP-CPT-035"
                  >DCBPP-CPT-035</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 49; --to: 56"></span
                ><span class="bcn-fd-tl__bar" style="--from: 59; --to: 60"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 59"
                  href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;day=2026-07-23"
                  data-fd-target-hole="DCBPP-CPT-035"
                  data-fd-target-day="2026-07-23"
                  title="Drill day Thu Jul 23, CPT. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Jul 23, CPT. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >CPT</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 60"
                  href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;day=2026-07-24"
                  data-fd-target-hole="DCBPP-CPT-035"
                  data-fd-target-day="2026-07-24"
                  title="Drill day Fri Jul 24, CPT. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jul 24, CPT. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 39"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;doc=landowner14"
                    data-fd-target-hole="DCBPP-CPT-035"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jun 25. Received Jun 24."
                    aria-label="DCBPP-CPT-035: Landowner notification, 14-day. Due Jun 25. Received Jun 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 41"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;doc=landowner10"
                    data-fd-target-hole="DCBPP-CPT-035"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jun 29. Received Jun 26."
                    aria-label="DCBPP-CPT-035: Landowner notification, 10-day. Due Jun 29. Received Jun 26."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 44"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;doc=publicNotice"
                    data-fd-target-hole="DCBPP-CPT-035"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 2. Received Jun 29."
                    aria-label="DCBPP-CPT-035: Public notification (3-week look-ahead). Due Jul 2. Received Jun 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 46"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;doc=landowner72"
                    data-fd-target-hole="DCBPP-CPT-035"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 6. Received Jul 1."
                    aria-label="DCBPP-CPT-035: Landowner notification, 72-hr. Due Jul 6. Received Jul 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 49"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;doc=siteClearance14"
                    data-fd-target-hole="DCBPP-CPT-035"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 9. Received Jul 9."
                    aria-label="DCBPP-CPT-035: Site clearance, 14-day. Due Jul 9. Received Jul 9."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 53"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;doc=usaTicket"
                    data-fd-target-hole="DCBPP-CPT-035"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 9 to Jul 20. Received Jul 15."
                    aria-label="DCBPP-CPT-035: USA ticket. Due Jul 9 to Jul 20. Received Jul 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 56"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCBPP-CPT-035&amp;doc=siteClearance72"
                    data-fd-target-hole="DCBPP-CPT-035"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jul 20. Received Jul 20."
                    aria-label="DCBPP-CPT-035: Site clearance, 72-hr. Due Jul 20. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-DH-010"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="3"
              data-county="Sacramento"
              data-start="2026-08-17"
              data-missing="1"
              data-search="dctr2-dh-010 sac-2484"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR2-DH-010"
                  data-fd-target-hole="DCTR2-DH-010"
                  >DCTR2-DH-010</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 66; --to: 75"></span
                ><span class="bcn-fd-tl__bar" style="--from: 76; --to: 86"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 76"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-17"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-17"
                  title="Drill day Mon Aug 17, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 17, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >3</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 77"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-18"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-18"
                  title="Drill day Tue Aug 18, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Aug 18, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 78"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-19"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-19"
                  title="Drill day Wed Aug 19, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 19, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 79"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-20"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-20"
                  title="Drill day Thu Aug 20, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 20, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 80"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-21"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-21"
                  title="Drill day Fri Aug 21, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 21, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 81"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-24"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-24"
                  title="Drill day Mon Aug 24, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 24, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 82"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-25"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-25"
                  title="Drill day Tue Aug 25, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  aria-label="Drill day Tue Aug 25, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 83"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-26"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-26"
                  title="Drill day Wed Aug 26, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 26, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 84"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-27"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-27"
                  title="Drill day Thu Aug 27, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 27, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 85"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-28"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-28"
                  title="Drill day Fri Aug 28, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 28, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 86"
                  href="?view=timeline&amp;hole=DCTR2-DH-010&amp;day=2026-08-31"
                  data-fd-target-hole="DCTR2-DH-010"
                  data-fd-target-day="2026-08-31"
                  title="Drill day Mon Aug 31, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 31, Rig 3. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 56"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-010&amp;doc=landowner14"
                    data-fd-target-hole="DCTR2-DH-010"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 20. Missing."
                    aria-label="DCTR2-DH-010: Landowner notification, 14-day. Due Jul 20. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-010&amp;doc=landowner10"
                    data-fd-target-hole="DCTR2-DH-010"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 24. Received Jul 23."
                    aria-label="DCTR2-DH-010: Landowner notification, 10-day. Due Jul 24. Received Jul 23."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-010&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR2-DH-010"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 27. Received Jul 27."
                    aria-label="DCTR2-DH-010: Public notification (3-week look-ahead). Due Jul 27. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-010&amp;doc=landowner72"
                    data-fd-target-hole="DCTR2-DH-010"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 31. Received Jul 30."
                    aria-label="DCTR2-DH-010: Landowner notification, 72-hr. Due Jul 31. Received Jul 30."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-010&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR2-DH-010"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 3. Received Jul 31."
                    aria-label="DCTR2-DH-010: Site clearance, 14-day. Due Aug 3. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-010&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR2-DH-010"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 3 to Aug 14. Received Aug 10."
                    aria-label="DCTR2-DH-010: USA ticket. Due Aug 3 to Aug 14. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-010&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR2-DH-010"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    aria-label="DCTR2-DH-010: Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-184"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="5"
              data-county="Sacramento"
              data-start="2026-08-21"
              data-missing="1"
              data-search="dcrds-dh-184 sac-2484"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-184"
                  data-fd-target-hole="DCRDS-DH-184"
                  >DCRDS-DH-184</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 70; --to: 77"></span
                ><span class="bcn-fd-tl__bar" style="--from: 80; --to: 80"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 80"
                  href="?view=timeline&amp;hole=DCRDS-DH-184&amp;day=2026-08-21"
                  data-fd-target-hole="DCRDS-DH-184"
                  data-fd-target-day="2026-08-21"
                  title="Drill day Fri Aug 21, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 21, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-184&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-184"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 24. Received Jul 23."
                    aria-label="DCRDS-DH-184: Landowner notification, 14-day. Due Jul 24. Received Jul 23."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 62"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-184&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-184"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 28. Received Jul 24."
                    aria-label="DCRDS-DH-184: Landowner notification, 10-day. Due Jul 28. Received Jul 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-184&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-184"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 31. Received Jul 27."
                    aria-label="DCRDS-DH-184: Public notification (3-week look-ahead). Due Jul 31. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-184&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-184"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 4. Received Aug 3."
                    aria-label="DCRDS-DH-184: Landowner notification, 72-hr. Due Aug 4. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-184&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-184"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 7. Received Aug 5."
                    aria-label="DCRDS-DH-184: Site clearance, 14-day. Due Aug 7. Received Aug 5."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 76"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-184&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-184"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 7 to Aug 18. Received Aug 17."
                    aria-label="DCRDS-DH-184: USA ticket. Due Aug 7 to Aug 18. Received Aug 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-184&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-184"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 18. Missing."
                    aria-label="DCRDS-DH-184: Site clearance, 72-hr. Due Aug 18. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-DH-029"
              data-status="missing"
              data-agreement="Batch 5 (TEP)"
              data-rig="4"
              data-county="Sacramento"
              data-start="2026-08-24"
              data-missing="1"
              data-search="dctr2-dh-029 state-7220-b"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR2-DH-029"
                  data-fd-target-hole="DCTR2-DH-029"
                  >DCTR2-DH-029</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 71; --to: 80"></span
                ><span class="bcn-fd-tl__bar" style="--from: 81; --to: 89"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 81"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-08-24"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-08-24"
                  title="Drill day Mon Aug 24, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 24, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >4</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 82"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-08-25"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-08-25"
                  title="Drill day Tue Aug 25, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Aug 25, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 83"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-08-26"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-08-26"
                  title="Drill day Wed Aug 26, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 26, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 84"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-08-27"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-08-27"
                  title="Drill day Thu Aug 27, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 27, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 85"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-08-28"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-08-28"
                  title="Drill day Fri Aug 28, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 28, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 86"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-08-31"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-08-31"
                  title="Drill day Mon Aug 31, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  aria-label="Drill day Mon Aug 31, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received late."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 87"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-09-01"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-09-01"
                  title="Drill day Tue Sep 1, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 1, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 88"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-09-02"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-09-02"
                  title="Drill day Wed Sep 2, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 2, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 89"
                  href="?view=timeline&amp;hole=DCTR2-DH-029&amp;day=2026-09-03"
                  data-fd-target-hole="DCTR2-DH-029"
                  data-fd-target-day="2026-09-03"
                  title="Drill day Thu Sep 3, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 3, Rig 4. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-029&amp;doc=landowner14"
                    data-fd-target-hole="DCTR2-DH-029"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 27. Received Jul 27."
                    aria-label="DCTR2-DH-029: Landowner notification, 14-day. Due Jul 27. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-029&amp;doc=landowner10"
                    data-fd-target-hole="DCTR2-DH-029"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 31. Received Jul 29."
                    aria-label="DCTR2-DH-029: Landowner notification, 10-day. Due Jul 31. Received Jul 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-029&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR2-DH-029"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 3. Received Aug 3."
                    aria-label="DCTR2-DH-029: Public notification (3-week look-ahead). Due Aug 3. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-029&amp;doc=landowner72"
                    data-fd-target-hole="DCTR2-DH-029"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 7. Missing."
                    aria-label="DCTR2-DH-029: Landowner notification, 72-hr. Due Aug 7. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-029&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR2-DH-029"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 10. Received Aug 7."
                    aria-label="DCTR2-DH-029: Site clearance, 14-day. Due Aug 10. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-029&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR2-DH-029"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 10 to Aug 21. Received Aug 14."
                    aria-label="DCTR2-DH-029: USA ticket. Due Aug 10 to Aug 21. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-029&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR2-DH-029"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 21. Received Aug 21."
                    aria-label="DCTR2-DH-029: Site clearance, 72-hr. Due Aug 21. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-CPT-024"
              data-status="complete"
              data-agreement="Batch 5 (TEP)"
              data-rig="CPT"
              data-county="Sacramento"
              data-start="2026-09-04"
              data-missing="0"
              data-search="dctr2-cpt-024 state-7220-b"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR2-CPT-024"
                  data-fd-target-hole="DCTR2-CPT-024"
                  >DCTR2-CPT-024</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 80; --to: 87"></span
                ><span class="bcn-fd-tl__bar" style="--from: 90; --to: 90"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 90"
                  href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;day=2026-09-04"
                  data-fd-target-hole="DCTR2-CPT-024"
                  data-fd-target-day="2026-09-04"
                  title="Drill day Fri Sep 4, CPT. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 4, CPT. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >CPT</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;doc=landowner14"
                    data-fd-target-hole="DCTR2-CPT-024"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 7. Received Aug 7."
                    aria-label="DCTR2-CPT-024: Landowner notification, 14-day. Due Aug 7. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;doc=landowner10"
                    data-fd-target-hole="DCTR2-CPT-024"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 11. Received Aug 10."
                    aria-label="DCTR2-CPT-024: Landowner notification, 10-day. Due Aug 11. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR2-CPT-024"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    aria-label="DCTR2-CPT-024: Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;doc=landowner72"
                    data-fd-target-hole="DCTR2-CPT-024"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 18. Received Aug 14."
                    aria-label="DCTR2-CPT-024: Landowner notification, 72-hr. Due Aug 18. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR2-CPT-024"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 21. Received Aug 21."
                    aria-label="DCTR2-CPT-024: Site clearance, 14-day. Due Aug 21. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 83"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR2-CPT-024"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 21 to Sep 1. Received Aug 26."
                    aria-label="DCTR2-CPT-024: USA ticket. Due Aug 21 to Sep 1. Received Aug 26."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 87"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-CPT-024&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR2-CPT-024"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    aria-label="DCTR2-CPT-024: Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR1-DH-056"
              data-status="unscheduled"
              data-agreement="Batch 5 (TEP)"
              data-rig="3"
              data-county="Sacramento"
              data-start="9999-12-31"
              data-missing="0"
              data-search="dctr1-dh-056 state-7220-a"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR1-DH-056"
                  data-fd-target-hole="DCTR1-DH-056"
                  >DCTR1-DH-056</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__note"
                  ><span class="bcn-fd-tl__note-reason">TBD</span>Bio Stop Pos - Mow Plan
                  - need clearance</span
                >
              </div>
            </div>
          </div>
          <div class="bcn-fd-tl__group" data-fd-group="ROW (2026)">
            <div class="bcn-fd-tl__batch">
              <span class="bcn-fd-tl__batch-text"
                ><span class="bcn-fd-tl__batch-name">ROW (2026)</span
                ><span class="bcn-fd-tl__batch-alert"
                  >14 holes missing documents</span
                ></span
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
                <a
                  href="?view=timeline&amp;hole=DCTR2-DH-017"
                  data-fd-target-hole="DCTR2-DH-017"
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
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 65"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-07-31"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-07-31"
                  title="Drill day Fri Jul 31, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Jul 31, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 66"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-08-03"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-08-03"
                  title="Drill day Mon Aug 3, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 3, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 67"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-08-04"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-08-04"
                  title="Drill day Tue Aug 4, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Aug 4, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 68"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-08-05"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-08-05"
                  title="Drill day Wed Aug 5, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 5, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 69"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-08-06"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-08-06"
                  title="Drill day Thu Aug 6, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 6, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 70"
                  href="?view=timeline&amp;hole=DCTR2-DH-017&amp;day=2026-08-07"
                  data-fd-target-hole="DCTR2-DH-017"
                  data-fd-target-day="2026-08-07"
                  title="Drill day Fri Aug 7, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 7, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 43"
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
                ><span class="bcn-fd-tl__cell" style="--i: 48"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-017&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR2-DH-017"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 8. Received Jul 6."
                    aria-label="DCTR2-DH-017: Public notification (3-week look-ahead). Due Jul 8. Received Jul 6."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 50"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-017&amp;doc=landowner72"
                    data-fd-target-hole="DCTR2-DH-017"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 10. Received Jul 9."
                    aria-label="DCTR2-DH-017: Landowner notification, 72-hr. Due Jul 10. Received Jul 9."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 53"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-017&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR2-DH-017"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 15. Received Jul 14."
                    aria-label="DCTR2-DH-017: Site clearance, 14-day. Due Jul 15. Received Jul 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-017&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR2-DH-017"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 15 to Jul 24. Received Jul 15."
                    aria-label="DCTR2-DH-017: USA ticket. Due Jul 15 to Jul 24. Received Jul 15."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-017&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR2-DH-017"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Jul 24. Received Jul 24."
                    aria-label="DCTR2-DH-017: Site clearance, 72-hr. Due Jul 24. Received Jul 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
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
                <a
                  href="?view=timeline&amp;hole=DCTR2-DH-015"
                  data-fd-target-hole="DCTR2-DH-015"
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
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 75"
                  href="?view=timeline&amp;hole=DCTR2-DH-015&amp;day=2026-08-14"
                  data-fd-target-hole="DCTR2-DH-015"
                  data-fd-target-day="2026-08-14"
                  title="Drill day Fri Aug 14, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 14, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 76"
                  href="?view=timeline&amp;hole=DCTR2-DH-015&amp;day=2026-08-17"
                  data-fd-target-hole="DCTR2-DH-015"
                  data-fd-target-day="2026-08-17"
                  title="Drill day Mon Aug 17, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 17, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 77"
                  href="?view=timeline&amp;hole=DCTR2-DH-015&amp;day=2026-08-18"
                  data-fd-target-hole="DCTR2-DH-015"
                  data-fd-target-day="2026-08-18"
                  title="Drill day Tue Aug 18, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Aug 18, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 78"
                  href="?view=timeline&amp;hole=DCTR2-DH-015&amp;day=2026-08-19"
                  data-fd-target-hole="DCTR2-DH-015"
                  data-fd-target-day="2026-08-19"
                  title="Drill day Wed Aug 19, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 19, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 53"
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
                ><span class="bcn-fd-tl__cell" style="--i: 58"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-015&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR2-DH-015"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 22. Received Jul 20."
                    aria-label="DCTR2-DH-015: Public notification (3-week look-ahead). Due Jul 22. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-015&amp;doc=landowner72"
                    data-fd-target-hole="DCTR2-DH-015"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 24. Received Jul 22."
                    aria-label="DCTR2-DH-015: Landowner notification, 72-hr. Due Jul 24. Received Jul 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 63"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-015&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR2-DH-015"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 29. Received Jul 28."
                    aria-label="DCTR2-DH-015: Site clearance, 14-day. Due Jul 29. Received Jul 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-015&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR2-DH-015"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 29 to Aug 7. Received Aug 3."
                    aria-label="DCTR2-DH-015: USA ticket. Due Jul 29 to Aug 7. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-015&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR2-DH-015"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 7. Received Aug 7."
                    aria-label="DCTR2-DH-015: Site clearance, 72-hr. Due Aug 7. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-172"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-13"
              data-missing="0"
              data-search="dcrds-dh-172 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-172"
                  data-fd-target-hole="DCRDS-DH-172"
                  >DCRDS-DH-172</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 64; --to: 71"></span
                ><span class="bcn-fd-tl__bar" style="--from: 74; --to: 74"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 74"
                  href="?view=timeline&amp;hole=DCRDS-DH-172&amp;day=2026-08-13"
                  data-fd-target-hole="DCRDS-DH-172"
                  data-fd-target-day="2026-08-13"
                  title="Drill day Thu Aug 13, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 13, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 54"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-172&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-172"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 16. Received Jul 16."
                    aria-label="DCRDS-DH-172: Landowner notification, 14-day. Due Jul 16. Received Jul 16."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 56"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-172&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-172"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 20. Received Jul 20."
                    aria-label="DCRDS-DH-172: Landowner notification, 10-day. Due Jul 20. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 59"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-172&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-172"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 23. Received Jul 20."
                    aria-label="DCRDS-DH-172: Public notification (3-week look-ahead). Due Jul 23. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-172&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-172"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 27. Received Jul 24."
                    aria-label="DCRDS-DH-172: Landowner notification, 72-hr. Due Jul 27. Received Jul 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 64"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-172&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-172"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 30. Received Jul 28."
                    aria-label="DCRDS-DH-172: Site clearance, 14-day. Due Jul 30. Received Jul 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-172&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-172"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 30 to Aug 10. Received Aug 7."
                    aria-label="DCRDS-DH-172: USA ticket. Due Jul 30 to Aug 10. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-172&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-172"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 10. Received Aug 10."
                    aria-label="DCRDS-DH-172: Site clearance, 72-hr. Due Aug 10. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-173"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-13"
              data-missing="0"
              data-search="dcrds-dh-173 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-173"
                  data-fd-target-hole="DCRDS-DH-173"
                  >DCRDS-DH-173</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 64; --to: 71"></span
                ><span class="bcn-fd-tl__bar" style="--from: 74; --to: 74"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 74"
                  href="?view=timeline&amp;hole=DCRDS-DH-173&amp;day=2026-08-13"
                  data-fd-target-hole="DCRDS-DH-173"
                  data-fd-target-day="2026-08-13"
                  title="Drill day Thu Aug 13, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 13, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 54"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-173&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-173"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 16. Received Jul 16."
                    aria-label="DCRDS-DH-173: Landowner notification, 14-day. Due Jul 16. Received Jul 16."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 56"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-173&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-173"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 20. Received Jul 17."
                    aria-label="DCRDS-DH-173: Landowner notification, 10-day. Due Jul 20. Received Jul 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 59"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-173&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-173"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 23. Received Jul 20."
                    aria-label="DCRDS-DH-173: Public notification (3-week look-ahead). Due Jul 23. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-173&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-173"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 27. Received Jul 27."
                    aria-label="DCRDS-DH-173: Landowner notification, 72-hr. Due Jul 27. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 64"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-173&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-173"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 30. Received Jul 28."
                    aria-label="DCRDS-DH-173: Site clearance, 14-day. Due Jul 30. Received Jul 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 68"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-173&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-173"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 30 to Aug 10. Received Aug 5."
                    aria-label="DCRDS-DH-173: USA ticket. Due Jul 30 to Aug 10. Received Aug 5."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-173&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-173"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 10. Received Aug 10."
                    aria-label="DCRDS-DH-173: Site clearance, 72-hr. Due Aug 10. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-170"
              data-status="late"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-14"
              data-missing="0"
              data-search="dcrds-dh-170 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-170"
                  data-fd-target-hole="DCRDS-DH-170"
                  >DCRDS-DH-170</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 65; --to: 72"></span
                ><span class="bcn-fd-tl__bar" style="--from: 75; --to: 75"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 75"
                  href="?view=timeline&amp;hole=DCRDS-DH-170&amp;day=2026-08-14"
                  data-fd-target-hole="DCRDS-DH-170"
                  data-fd-target-day="2026-08-14"
                  title="Drill day Fri Aug 14, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 14, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 55"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-170&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-170"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 17. Received Jul 16."
                    aria-label="DCRDS-DH-170: Landowner notification, 14-day. Due Jul 17. Received Jul 16."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 57"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-170&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-170"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 21. Received Jul 20."
                    aria-label="DCRDS-DH-170: Landowner notification, 10-day. Due Jul 21. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-170&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-170"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 24. Received Jul 20."
                    aria-label="DCRDS-DH-170: Public notification (3-week look-ahead). Due Jul 24. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 62"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-170&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-170"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 28. Received Jul 31."
                    aria-label="DCRDS-DH-170: Landowner notification, 72-hr. Due Jul 28. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="late"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-170&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-170"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 31. Received Jul 30."
                    aria-label="DCRDS-DH-170: Site clearance, 14-day. Due Jul 31. Received Jul 30."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-170&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-170"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 31 to Aug 11. Received Aug 4."
                    aria-label="DCRDS-DH-170: USA ticket. Due Jul 31 to Aug 11. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-170&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-170"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 11. Received Aug 11."
                    aria-label="DCRDS-DH-170: Site clearance, 72-hr. Due Aug 11. Received Aug 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-171"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-14"
              data-missing="0"
              data-search="dcrds-dh-171 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-171"
                  data-fd-target-hole="DCRDS-DH-171"
                  >DCRDS-DH-171</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 65; --to: 72"></span
                ><span class="bcn-fd-tl__bar" style="--from: 75; --to: 75"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 75"
                  href="?view=timeline&amp;hole=DCRDS-DH-171&amp;day=2026-08-14"
                  data-fd-target-hole="DCRDS-DH-171"
                  data-fd-target-day="2026-08-14"
                  title="Drill day Fri Aug 14, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 14, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 55"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-171&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-171"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 17. Received Jul 17."
                    aria-label="DCRDS-DH-171: Landowner notification, 14-day. Due Jul 17. Received Jul 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 57"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-171&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-171"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 21. Received Jul 17."
                    aria-label="DCRDS-DH-171: Landowner notification, 10-day. Due Jul 21. Received Jul 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-171&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-171"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 24. Received Jul 20."
                    aria-label="DCRDS-DH-171: Public notification (3-week look-ahead). Due Jul 24. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 62"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-171&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-171"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 28. Received Jul 28."
                    aria-label="DCRDS-DH-171: Landowner notification, 72-hr. Due Jul 28. Received Jul 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-171&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-171"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Jul 31. Received Jul 31."
                    aria-label="DCRDS-DH-171: Site clearance, 14-day. Due Jul 31. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-171&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-171"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Jul 31 to Aug 11. Received Aug 3."
                    aria-label="DCRDS-DH-171: USA ticket. Due Jul 31 to Aug 11. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-171&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-171"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 11. Received Aug 11."
                    aria-label="DCRDS-DH-171: Site clearance, 72-hr. Due Aug 11. Received Aug 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-168"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-17"
              data-missing="0"
              data-search="dcrds-dh-168 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-168"
                  data-fd-target-hole="DCRDS-DH-168"
                  >DCRDS-DH-168</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 66; --to: 75"></span
                ><span class="bcn-fd-tl__bar" style="--from: 76; --to: 76"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 76"
                  href="?view=timeline&amp;hole=DCRDS-DH-168&amp;day=2026-08-17"
                  data-fd-target-hole="DCRDS-DH-168"
                  data-fd-target-day="2026-08-17"
                  title="Drill day Mon Aug 17, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 17, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 56"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-168&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-168"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 20. Received Jul 20."
                    aria-label="DCRDS-DH-168: Landowner notification, 14-day. Due Jul 20. Received Jul 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-168&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-168"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 24. Received Jul 22."
                    aria-label="DCRDS-DH-168: Landowner notification, 10-day. Due Jul 24. Received Jul 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-168&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-168"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 27. Received Jul 27."
                    aria-label="DCRDS-DH-168: Public notification (3-week look-ahead). Due Jul 27. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-168&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-168"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 31. Received Jul 30."
                    aria-label="DCRDS-DH-168: Landowner notification, 72-hr. Due Jul 31. Received Jul 30."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-168&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-168"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 3. Received Jul 30."
                    aria-label="DCRDS-DH-168: Site clearance, 14-day. Due Aug 3. Received Jul 30."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-168&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-168"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 3 to Aug 14. Received Aug 3."
                    aria-label="DCRDS-DH-168: USA ticket. Due Aug 3 to Aug 14. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-168&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-168"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    aria-label="DCRDS-DH-168: Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-169"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-17"
              data-missing="1"
              data-search="dcrds-dh-169 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-169"
                  data-fd-target-hole="DCRDS-DH-169"
                  >DCRDS-DH-169</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 66; --to: 75"></span
                ><span class="bcn-fd-tl__bar" style="--from: 76; --to: 76"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 76"
                  href="?view=timeline&amp;hole=DCRDS-DH-169&amp;day=2026-08-17"
                  data-fd-target-hole="DCRDS-DH-169"
                  data-fd-target-day="2026-08-17"
                  title="Drill day Mon Aug 17, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 17, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 56"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-169&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-169"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 20. Received Jul 17."
                    aria-label="DCRDS-DH-169: Landowner notification, 14-day. Due Jul 20. Received Jul 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-169&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-169"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 24. Missing."
                    aria-label="DCRDS-DH-169: Landowner notification, 10-day. Due Jul 24. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-169&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-169"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 27. Received Jul 27."
                    aria-label="DCRDS-DH-169: Public notification (3-week look-ahead). Due Jul 27. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-169&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-169"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 31. Received Jul 31."
                    aria-label="DCRDS-DH-169: Landowner notification, 72-hr. Due Jul 31. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-169&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-169"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 3. Received Aug 3."
                    aria-label="DCRDS-DH-169: Site clearance, 14-day. Due Aug 3. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 68"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-169&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-169"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 3 to Aug 14. Received Aug 5."
                    aria-label="DCRDS-DH-169: USA ticket. Due Aug 3 to Aug 14. Received Aug 5."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-169&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-169"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    aria-label="DCRDS-DH-169: Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-167"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-18"
              data-missing="1"
              data-search="dcrds-dh-167 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-167"
                  data-fd-target-hole="DCRDS-DH-167"
                  >DCRDS-DH-167</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 67; --to: 75"></span
                ><span class="bcn-fd-tl__bar" style="--from: 77; --to: 77"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 77"
                  href="?view=timeline&amp;hole=DCRDS-DH-167&amp;day=2026-08-18"
                  data-fd-target-hole="DCRDS-DH-167"
                  data-fd-target-day="2026-08-18"
                  title="Drill day Tue Aug 18, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Aug 18, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 57"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-167&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-167"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 21. Received Jul 17."
                    aria-label="DCRDS-DH-167: Landowner notification, 14-day. Due Jul 21. Received Jul 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-167&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-167"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 24. Missing."
                    aria-label="DCRDS-DH-167: Landowner notification, 10-day. Due Jul 24. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 62"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-167&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-167"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 28. Received Jul 27."
                    aria-label="DCRDS-DH-167: Public notification (3-week look-ahead). Due Jul 28. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-167&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-167"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 31. Received Jul 31."
                    aria-label="DCRDS-DH-167: Landowner notification, 72-hr. Due Jul 31. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-167&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-167"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 4. Received Aug 4."
                    aria-label="DCRDS-DH-167: Site clearance, 14-day. Due Aug 4. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 68"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-167&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-167"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 4 to Aug 14. Received Aug 5."
                    aria-label="DCRDS-DH-167: USA ticket. Due Aug 4 to Aug 14. Received Aug 5."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-167&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-167"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    aria-label="DCRDS-DH-167: Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCLEV-DH-015"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-19"
              data-missing="0"
              data-search="dclev-dh-015 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCLEV-DH-015"
                  data-fd-target-hole="DCLEV-DH-015"
                  >DCLEV-DH-015</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 68; --to: 75"></span
                ><span class="bcn-fd-tl__bar" style="--from: 78; --to: 79"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 78"
                  href="?view=timeline&amp;hole=DCLEV-DH-015&amp;day=2026-08-19"
                  data-fd-target-hole="DCLEV-DH-015"
                  data-fd-target-day="2026-08-19"
                  title="Drill day Wed Aug 19, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 19, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 79"
                  href="?view=timeline&amp;hole=DCLEV-DH-015&amp;day=2026-08-20"
                  data-fd-target-hole="DCLEV-DH-015"
                  data-fd-target-day="2026-08-20"
                  title="Drill day Thu Aug 20, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 20, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 58"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-015&amp;doc=landowner14"
                    data-fd-target-hole="DCLEV-DH-015"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 22. Received Jul 21."
                    aria-label="DCLEV-DH-015: Landowner notification, 14-day. Due Jul 22. Received Jul 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-015&amp;doc=landowner10"
                    data-fd-target-hole="DCLEV-DH-015"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 24. Received Jul 22."
                    aria-label="DCLEV-DH-015: Landowner notification, 10-day. Due Jul 24. Received Jul 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 63"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-015&amp;doc=publicNotice"
                    data-fd-target-hole="DCLEV-DH-015"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 29. Received Jul 27."
                    aria-label="DCLEV-DH-015: Public notification (3-week look-ahead). Due Jul 29. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-015&amp;doc=landowner72"
                    data-fd-target-hole="DCLEV-DH-015"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Jul 31. Received Jul 31."
                    aria-label="DCLEV-DH-015: Landowner notification, 72-hr. Due Jul 31. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 68"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-015&amp;doc=siteClearance14"
                    data-fd-target-hole="DCLEV-DH-015"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 5. Received Aug 4."
                    aria-label="DCLEV-DH-015: Site clearance, 14-day. Due Aug 5. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-015&amp;doc=usaTicket"
                    data-fd-target-hole="DCLEV-DH-015"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 5 to Aug 14. Received Aug 7."
                    aria-label="DCLEV-DH-015: USA ticket. Due Aug 5 to Aug 14. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-015&amp;doc=siteClearance72"
                    data-fd-target-hole="DCLEV-DH-015"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    aria-label="DCLEV-DH-015: Site clearance, 72-hr. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-166"
              data-status="late"
              data-agreement="ROW (2026)"
              data-rig="8"
              data-county="Sacramento"
              data-start="2026-08-20"
              data-missing="0"
              data-search="dcrds-dh-166 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-166"
                  data-fd-target-hole="DCRDS-DH-166"
                  >DCRDS-DH-166</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 69; --to: 76"></span
                ><span class="bcn-fd-tl__bar" style="--from: 79; --to: 79"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 79"
                  href="?view=timeline&amp;hole=DCRDS-DH-166&amp;day=2026-08-20"
                  data-fd-target-hole="DCRDS-DH-166"
                  data-fd-target-day="2026-08-20"
                  title="Drill day Thu Aug 20, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 20, Rig 8. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                    >8</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 59"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-166&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-166"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 23. Received Jul 22."
                    aria-label="DCRDS-DH-166: Landowner notification, 14-day. Due Jul 23. Received Jul 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-166&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-166"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 27. Received Jul 23."
                    aria-label="DCRDS-DH-166: Landowner notification, 10-day. Due Jul 27. Received Jul 23."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 64"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-166&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-166"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 30. Received Jul 27."
                    aria-label="DCRDS-DH-166: Public notification (3-week look-ahead). Due Jul 30. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-166&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-166"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 3. Received Aug 3."
                    aria-label="DCRDS-DH-166: Landowner notification, 72-hr. Due Aug 3. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 69"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-166&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-166"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 6. Received Aug 4."
                    aria-label="DCRDS-DH-166: Site clearance, 14-day. Due Aug 6. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 73"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-166&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-166"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 6 to Aug 17. Received Aug 12."
                    aria-label="DCRDS-DH-166: USA ticket. Due Aug 6 to Aug 17. Received Aug 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 76"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-166&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-166"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 17. Received Aug 17."
                    aria-label="DCRDS-DH-166: Site clearance, 72-hr. Due Aug 17. Received Aug 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-178"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="5"
              data-county="Sacramento"
              data-start="2026-08-20"
              data-missing="1"
              data-search="dcrds-dh-178 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-178"
                  data-fd-target-hole="DCRDS-DH-178"
                  >DCRDS-DH-178</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 69; --to: 76"></span
                ><span class="bcn-fd-tl__bar" style="--from: 79; --to: 79"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 79"
                  href="?view=timeline&amp;hole=DCRDS-DH-178&amp;day=2026-08-20"
                  data-fd-target-hole="DCRDS-DH-178"
                  data-fd-target-day="2026-08-20"
                  title="Drill day Thu Aug 20, Rig 5. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 20, Rig 5. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 59"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-178&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-178"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 23. Received Jul 23."
                    aria-label="DCRDS-DH-178: Landowner notification, 14-day. Due Jul 23. Received Jul 23."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 61"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-178&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-178"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 27. Received Jul 27."
                    aria-label="DCRDS-DH-178: Landowner notification, 10-day. Due Jul 27. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 64"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-178&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-178"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 30. Received Jul 27."
                    aria-label="DCRDS-DH-178: Public notification (3-week look-ahead). Due Jul 30. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 66"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-178&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-178"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 3. Received Aug 3."
                    aria-label="DCRDS-DH-178: Landowner notification, 72-hr. Due Aug 3. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 69"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-178&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-178"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 6. Received Aug 4."
                    aria-label="DCRDS-DH-178: Site clearance, 14-day. Due Aug 6. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 74"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-178&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-178"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 6 to Aug 17. Received Aug 13."
                    aria-label="DCRDS-DH-178: USA ticket. Due Aug 6 to Aug 17. Received Aug 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 76"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-178&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-178"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 17. Received Aug 17."
                    aria-label="DCRDS-DH-178: Site clearance, 72-hr. Due Aug 17. Received Aug 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-177"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="5"
              data-county="Sacramento"
              data-start="2026-08-21"
              data-missing="0"
              data-search="dcrds-dh-177 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-177"
                  data-fd-target-hole="DCRDS-DH-177"
                  >DCRDS-DH-177</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 70; --to: 77"></span
                ><span class="bcn-fd-tl__bar" style="--from: 80; --to: 80"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 80"
                  href="?view=timeline&amp;hole=DCRDS-DH-177&amp;day=2026-08-21"
                  data-fd-target-hole="DCRDS-DH-177"
                  data-fd-target-day="2026-08-21"
                  title="Drill day Fri Aug 21, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 21, Rig 5. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >5</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 60"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-177&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-177"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 24. Received Jul 22."
                    aria-label="DCRDS-DH-177: Landowner notification, 14-day. Due Jul 24. Received Jul 22."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 62"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-177&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-177"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 28. Received Jul 28."
                    aria-label="DCRDS-DH-177: Landowner notification, 10-day. Due Jul 28. Received Jul 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-177&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-177"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Jul 31. Received Jul 27."
                    aria-label="DCRDS-DH-177: Public notification (3-week look-ahead). Due Jul 31. Received Jul 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-177&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-177"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 4. Received Jul 31."
                    aria-label="DCRDS-DH-177: Landowner notification, 72-hr. Due Aug 4. Received Jul 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-177&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-177"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 7. Received Aug 7."
                    aria-label="DCRDS-DH-177: Site clearance, 14-day. Due Aug 7. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 74"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-177&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-177"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 7 to Aug 18. Received Aug 13."
                    aria-label="DCRDS-DH-177: USA ticket. Due Aug 7 to Aug 18. Received Aug 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-177&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-177"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 18. Received Aug 18."
                    aria-label="DCRDS-DH-177: Site clearance, 72-hr. Due Aug 18. Received Aug 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCTR2-DH-012"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="7"
              data-county="Sacramento"
              data-start="2026-08-25"
              data-missing="1"
              data-search="dctr2-dh-012 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCTR2-DH-012"
                  data-fd-target-hole="DCTR2-DH-012"
                  >DCTR2-DH-012</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 72; --to: 80"></span
                ><span class="bcn-fd-tl__bar" style="--from: 82; --to: 88"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 82"
                  href="?view=timeline&amp;hole=DCTR2-DH-012&amp;day=2026-08-25"
                  data-fd-target-hole="DCTR2-DH-012"
                  data-fd-target-day="2026-08-25"
                  title="Drill day Tue Aug 25, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Aug 25, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >7</span
                  ></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 83"
                  href="?view=timeline&amp;hole=DCTR2-DH-012&amp;day=2026-08-26"
                  data-fd-target-hole="DCTR2-DH-012"
                  data-fd-target-day="2026-08-26"
                  title="Drill day Wed Aug 26, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Aug 26, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 84"
                  href="?view=timeline&amp;hole=DCTR2-DH-012&amp;day=2026-08-27"
                  data-fd-target-hole="DCTR2-DH-012"
                  data-fd-target-day="2026-08-27"
                  title="Drill day Thu Aug 27, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  aria-label="Drill day Thu Aug 27, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Missing. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 85"
                  href="?view=timeline&amp;hole=DCTR2-DH-012&amp;day=2026-08-28"
                  data-fd-target-hole="DCTR2-DH-012"
                  data-fd-target-day="2026-08-28"
                  title="Drill day Fri Aug 28, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Aug 28, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 86"
                  href="?view=timeline&amp;hole=DCTR2-DH-012&amp;day=2026-08-31"
                  data-fd-target-hole="DCTR2-DH-012"
                  data-fd-target-day="2026-08-31"
                  title="Drill day Mon Aug 31, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Mon Aug 31, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 87"
                  href="?view=timeline&amp;hole=DCTR2-DH-012&amp;day=2026-09-01"
                  data-fd-target-hole="DCTR2-DH-012"
                  data-fd-target-day="2026-09-01"
                  title="Drill day Tue Sep 1, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 1, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 88"
                  href="?view=timeline&amp;hole=DCTR2-DH-012&amp;day=2026-09-02"
                  data-fd-target-hole="DCTR2-DH-012"
                  data-fd-target-day="2026-09-02"
                  title="Drill day Wed Sep 2, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 2, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                  ></span></a
                ><span class="bcn-fd-tl__cell" style="--i: 62"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-012&amp;doc=landowner14"
                    data-fd-target-hole="DCTR2-DH-012"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Jul 28. Received Jul 28."
                    aria-label="DCTR2-DH-012: Landowner notification, 14-day. Due Jul 28. Received Jul 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 65"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-012&amp;doc=landowner10"
                    data-fd-target-hole="DCTR2-DH-012"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Jul 31. Received Jul 29."
                    aria-label="DCTR2-DH-012: Landowner notification, 10-day. Due Jul 31. Received Jul 29."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-012&amp;doc=publicNotice"
                    data-fd-target-hole="DCTR2-DH-012"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 4. Received Aug 3."
                    aria-label="DCTR2-DH-012: Public notification (3-week look-ahead). Due Aug 4. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-012&amp;doc=landowner72"
                    data-fd-target-hole="DCTR2-DH-012"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 7. Received Aug 7."
                    aria-label="DCTR2-DH-012: Landowner notification, 72-hr. Due Aug 7. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-012&amp;doc=siteClearance14"
                    data-fd-target-hole="DCTR2-DH-012"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 11. Received Aug 7."
                    aria-label="DCTR2-DH-012: Site clearance, 14-day. Due Aug 11. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 73"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-012&amp;doc=usaTicket"
                    data-fd-target-hole="DCTR2-DH-012"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 11 to Aug 21. Received Aug 12."
                    aria-label="DCTR2-DH-012: USA ticket. Due Aug 11 to Aug 21. Received Aug 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCTR2-DH-012&amp;doc=siteClearance72"
                    data-fd-target-hole="DCTR2-DH-012"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 21. Received Aug 21."
                    aria-label="DCTR2-DH-012: Site clearance, 72-hr. Due Aug 21. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-156"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-01"
              data-missing="1"
              data-search="dcrds-dh-156 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-156"
                  data-fd-target-hole="DCRDS-DH-156"
                  >DCRDS-DH-156</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 77; --to: 85"></span
                ><span class="bcn-fd-tl__bar" style="--from: 87; --to: 87"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 87"
                  href="?view=timeline&amp;hole=DCRDS-DH-156&amp;day=2026-09-01"
                  data-fd-target-hole="DCRDS-DH-156"
                  data-fd-target-day="2026-09-01"
                  title="Drill day Tue Sep 1, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 1, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-156&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-156"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 4. Received Aug 4."
                    aria-label="DCRDS-DH-156: Landowner notification, 14-day. Due Aug 4. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-156&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-156"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 7. Received Aug 6."
                    aria-label="DCRDS-DH-156: Landowner notification, 10-day. Due Aug 7. Received Aug 6."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-156&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-156"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 11. Received Aug 10."
                    aria-label="DCRDS-DH-156: Public notification (3-week look-ahead). Due Aug 11. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-156&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-156"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 14. Received Aug 13."
                    aria-label="DCRDS-DH-156: Landowner notification, 72-hr. Due Aug 14. Received Aug 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-156&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-156"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 18. Received Aug 18."
                    aria-label="DCRDS-DH-156: Site clearance, 14-day. Due Aug 18. Received Aug 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-156&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-156"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 18 to Aug 28. Missing."
                    aria-label="DCRDS-DH-156: USA ticket. Due Aug 18 to Aug 28. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-156&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-156"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    aria-label="DCRDS-DH-156: Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-157"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-01"
              data-missing="0"
              data-search="dcrds-dh-157 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-157"
                  data-fd-target-hole="DCRDS-DH-157"
                  >DCRDS-DH-157</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 77; --to: 85"></span
                ><span class="bcn-fd-tl__bar" style="--from: 87; --to: 87"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 87"
                  href="?view=timeline&amp;hole=DCRDS-DH-157&amp;day=2026-09-01"
                  data-fd-target-hole="DCRDS-DH-157"
                  data-fd-target-day="2026-09-01"
                  title="Drill day Tue Sep 1, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 1, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 67"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-157&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-157"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 4. Received Aug 3."
                    aria-label="DCRDS-DH-157: Landowner notification, 14-day. Due Aug 4. Received Aug 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-157&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-157"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 7. Received Aug 6."
                    aria-label="DCRDS-DH-157: Landowner notification, 10-day. Due Aug 7. Received Aug 6."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-157&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-157"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 11. Received Aug 10."
                    aria-label="DCRDS-DH-157: Public notification (3-week look-ahead). Due Aug 11. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-157&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-157"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 14. Received Aug 12."
                    aria-label="DCRDS-DH-157: Landowner notification, 72-hr. Due Aug 14. Received Aug 12."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-157&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-157"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 18. Received Aug 14."
                    aria-label="DCRDS-DH-157: Site clearance, 14-day. Due Aug 18. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 83"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-157&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-157"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 18 to Aug 28. Received Aug 26."
                    aria-label="DCRDS-DH-157: USA ticket. Due Aug 18 to Aug 28. Received Aug 26."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-157&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-157"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    aria-label="DCRDS-DH-157: Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-158"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-02"
              data-missing="2"
              data-search="dcrds-dh-158 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-158"
                  data-fd-target-hole="DCRDS-DH-158"
                  >DCRDS-DH-158</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 78; --to: 85"></span
                ><span class="bcn-fd-tl__bar" style="--from: 88; --to: 88"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 88"
                  href="?view=timeline&amp;hole=DCRDS-DH-158&amp;day=2026-09-02"
                  data-fd-target-hole="DCRDS-DH-158"
                  data-fd-target-day="2026-09-02"
                  title="Drill day Wed Sep 2, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 2, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 68"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-158&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-158"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 5. Received Aug 4."
                    aria-label="DCRDS-DH-158: Landowner notification, 14-day. Due Aug 5. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-158&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-158"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 7. Received Aug 7."
                    aria-label="DCRDS-DH-158: Landowner notification, 10-day. Due Aug 7. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 73"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-158&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-158"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 12. Received Aug 10."
                    aria-label="DCRDS-DH-158: Public notification (3-week look-ahead). Due Aug 12. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-158&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-158"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 14. Missing."
                    aria-label="DCRDS-DH-158: Landowner notification, 72-hr. Due Aug 14. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 78"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-158&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-158"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 19. Received Aug 19."
                    aria-label="DCRDS-DH-158: Site clearance, 14-day. Due Aug 19. Received Aug 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-158&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-158"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 19 to Aug 28. Missing."
                    aria-label="DCRDS-DH-158: USA ticket. Due Aug 19 to Aug 28. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-158&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-158"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    aria-label="DCRDS-DH-158: Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-159"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-02"
              data-missing="1"
              data-search="dcrds-dh-159 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-159"
                  data-fd-target-hole="DCRDS-DH-159"
                  >DCRDS-DH-159</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 78; --to: 85"></span
                ><span class="bcn-fd-tl__bar" style="--from: 88; --to: 88"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 88"
                  href="?view=timeline&amp;hole=DCRDS-DH-159&amp;day=2026-09-02"
                  data-fd-target-hole="DCRDS-DH-159"
                  data-fd-target-day="2026-09-02"
                  title="Drill day Wed Sep 2, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 2, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 68"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-159&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-159"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 5. Received Aug 4."
                    aria-label="DCRDS-DH-159: Landowner notification, 14-day. Due Aug 5. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-159&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-159"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 7. Received Aug 7."
                    aria-label="DCRDS-DH-159: Landowner notification, 10-day. Due Aug 7. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 73"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-159&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-159"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 12. Received Aug 10."
                    aria-label="DCRDS-DH-159: Public notification (3-week look-ahead). Due Aug 12. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-159&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-159"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 14. Received Aug 14."
                    aria-label="DCRDS-DH-159: Landowner notification, 72-hr. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 78"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-159&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-159"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 19. Missing."
                    aria-label="DCRDS-DH-159: Site clearance, 14-day. Due Aug 19. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 84"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-159&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-159"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 19 to Aug 28. Received Aug 27."
                    aria-label="DCRDS-DH-159: USA ticket. Due Aug 19 to Aug 28. Received Aug 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-159&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-159"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    aria-label="DCRDS-DH-159: Site clearance, 72-hr. Due Aug 28. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-160"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-03"
              data-missing="3"
              data-search="dcrds-dh-160 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-160"
                  data-fd-target-hole="DCRDS-DH-160"
                  >DCRDS-DH-160</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 79; --to: 86"></span
                ><span class="bcn-fd-tl__bar" style="--from: 89; --to: 89"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 89"
                  href="?view=timeline&amp;hole=DCRDS-DH-160&amp;day=2026-09-03"
                  data-fd-target-hole="DCRDS-DH-160"
                  data-fd-target-day="2026-09-03"
                  title="Drill day Thu Sep 3, Hand auger. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 3, Hand auger. Daily biological monitoring log: Missing. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="missing"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 69"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-160&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-160"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 6. Received Aug 5."
                    aria-label="DCRDS-DH-160: Landowner notification, 14-day. Due Aug 6. Received Aug 5."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-160&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-160"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 10. Received Aug 10."
                    aria-label="DCRDS-DH-160: Landowner notification, 10-day. Due Aug 10. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 74"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-160&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-160"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 13. Received Aug 10."
                    aria-label="DCRDS-DH-160: Public notification (3-week look-ahead). Due Aug 13. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 76"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-160&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-160"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 17. Missing."
                    aria-label="DCRDS-DH-160: Landowner notification, 72-hr. Due Aug 17. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 79"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-160&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-160"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 20. Received Aug 19."
                    aria-label="DCRDS-DH-160: Site clearance, 14-day. Due Aug 20. Received Aug 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-160&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-160"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 20 to Aug 31. Missing."
                    aria-label="DCRDS-DH-160: USA ticket. Due Aug 20 to Aug 31. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-160&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-160"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 31. Received Aug 31."
                    aria-label="DCRDS-DH-160: Site clearance, 72-hr. Due Aug 31. Received Aug 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-161"
              data-status="complete"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-03"
              data-missing="0"
              data-search="dcrds-dh-161 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-161"
                  data-fd-target-hole="DCRDS-DH-161"
                  >DCRDS-DH-161</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 79; --to: 86"></span
                ><span class="bcn-fd-tl__bar" style="--from: 89; --to: 89"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 89"
                  href="?view=timeline&amp;hole=DCRDS-DH-161&amp;day=2026-09-03"
                  data-fd-target-hole="DCRDS-DH-161"
                  data-fd-target-day="2026-09-03"
                  title="Drill day Thu Sep 3, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Thu Sep 3, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 69"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-161&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-161"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 6. Received Aug 4."
                    aria-label="DCRDS-DH-161: Landowner notification, 14-day. Due Aug 6. Received Aug 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 71"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-161&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-161"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 10. Received Aug 7."
                    aria-label="DCRDS-DH-161: Landowner notification, 10-day. Due Aug 10. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 74"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-161&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-161"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 13. Received Aug 10."
                    aria-label="DCRDS-DH-161: Public notification (3-week look-ahead). Due Aug 13. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 76"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-161&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-161"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 17. Received Aug 13."
                    aria-label="DCRDS-DH-161: Landowner notification, 72-hr. Due Aug 17. Received Aug 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 79"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-161&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-161"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 20. Received Aug 18."
                    aria-label="DCRDS-DH-161: Site clearance, 14-day. Due Aug 20. Received Aug 18."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-161&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-161"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 20 to Aug 31. Received Aug 20."
                    aria-label="DCRDS-DH-161: USA ticket. Due Aug 20 to Aug 31. Received Aug 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 86"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-161&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-161"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Aug 31. Received Aug 31."
                    aria-label="DCRDS-DH-161: Site clearance, 72-hr. Due Aug 31. Received Aug 31."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-162"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-04"
              data-missing="1"
              data-search="dcrds-dh-162 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-162"
                  data-fd-target-hole="DCRDS-DH-162"
                  >DCRDS-DH-162</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 80; --to: 87"></span
                ><span class="bcn-fd-tl__bar" style="--from: 90; --to: 90"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 90"
                  href="?view=timeline&amp;hole=DCRDS-DH-162&amp;day=2026-09-04"
                  data-fd-target-hole="DCRDS-DH-162"
                  data-fd-target-day="2026-09-04"
                  title="Drill day Fri Sep 4, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 4, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-162&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-162"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 7. Received Aug 6."
                    aria-label="DCRDS-DH-162: Landowner notification, 14-day. Due Aug 7. Received Aug 6."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-162&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-162"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 11. Received Aug 7."
                    aria-label="DCRDS-DH-162: Landowner notification, 10-day. Due Aug 11. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-162&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-162"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    aria-label="DCRDS-DH-162: Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-162&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-162"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 18. Received Aug 20."
                    aria-label="DCRDS-DH-162: Landowner notification, 72-hr. Due Aug 18. Received Aug 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="late"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-162&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-162"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 21. Received Aug 21."
                    aria-label="DCRDS-DH-162: Site clearance, 14-day. Due Aug 21. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 87"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-162&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-162"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 21 to Sep 1. Missing."
                    aria-label="DCRDS-DH-162: USA ticket. Due Aug 21 to Sep 1. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-162&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-162"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    aria-label="DCRDS-DH-162: Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-164"
              data-status="late"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-04"
              data-missing="0"
              data-search="dcrds-dh-164 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-164"
                  data-fd-target-hole="DCRDS-DH-164"
                  >DCRDS-DH-164</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 80; --to: 87"></span
                ><span class="bcn-fd-tl__bar" style="--from: 90; --to: 90"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 90"
                  href="?view=timeline&amp;hole=DCRDS-DH-164&amp;day=2026-09-04"
                  data-fd-target-hole="DCRDS-DH-164"
                  data-fd-target-day="2026-09-04"
                  title="Drill day Fri Sep 4, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received late."
                  aria-label="Drill day Fri Sep 4, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received late. Daily geologist log: Received late."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="late"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 70"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-164&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-164"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 7. Received Aug 6."
                    aria-label="DCRDS-DH-164: Landowner notification, 14-day. Due Aug 7. Received Aug 6."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-164&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-164"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 11. Received Aug 11."
                    aria-label="DCRDS-DH-164: Landowner notification, 10-day. Due Aug 11. Received Aug 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-164&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-164"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    aria-label="DCRDS-DH-164: Public notification (3-week look-ahead). Due Aug 14. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-164&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-164"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 18. Received Aug 17."
                    aria-label="DCRDS-DH-164: Landowner notification, 72-hr. Due Aug 18. Received Aug 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-164&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-164"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 21. Received Aug 20."
                    aria-label="DCRDS-DH-164: Site clearance, 14-day. Due Aug 21. Received Aug 20."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-164&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-164"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 21 to Sep 1. Received Aug 28."
                    aria-label="DCRDS-DH-164: USA ticket. Due Aug 21 to Sep 1. Received Aug 28."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 87"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-164&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-164"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    aria-label="DCRDS-DH-164: Site clearance, 72-hr. Due Sep 1. Received Sep 1."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-174"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-08"
              data-missing="1"
              data-search="dcrds-dh-174 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-174"
                  data-fd-target-hole="DCRDS-DH-174"
                  >DCRDS-DH-174</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 82; --to: 90"></span
                ><span class="bcn-fd-tl__bar" style="--from: 92; --to: 92"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 92"
                  href="?view=timeline&amp;hole=DCRDS-DH-174&amp;day=2026-09-08"
                  data-fd-target-hole="DCRDS-DH-174"
                  data-fd-target-day="2026-09-08"
                  title="Drill day Tue Sep 8, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 8, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-174&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-174"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 11. Received Aug 10."
                    aria-label="DCRDS-DH-174: Landowner notification, 14-day. Due Aug 11. Received Aug 10."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-174&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-174"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 14. Received Aug 13."
                    aria-label="DCRDS-DH-174: Landowner notification, 10-day. Due Aug 14. Received Aug 13."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-174&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-174"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 18. Missing."
                    aria-label="DCRDS-DH-174: Public notification (3-week look-ahead). Due Aug 18. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-174&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-174"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 21. Received Aug 19."
                    aria-label="DCRDS-DH-174: Landowner notification, 72-hr. Due Aug 21. Received Aug 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-174&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-174"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 25. Received Aug 25."
                    aria-label="DCRDS-DH-174: Site clearance, 14-day. Due Aug 25. Received Aug 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 89"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-174&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-174"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 25 to Sep 4. Received Sep 3."
                    aria-label="DCRDS-DH-174: USA ticket. Due Aug 25 to Sep 4. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-174&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-174"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 4. Received Sep 4."
                    aria-label="DCRDS-DH-174: Site clearance, 72-hr. Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-175"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-08"
              data-missing="1"
              data-search="dcrds-dh-175 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-175"
                  data-fd-target-hole="DCRDS-DH-175"
                  >DCRDS-DH-175</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 82; --to: 90"></span
                ><span class="bcn-fd-tl__bar" style="--from: 92; --to: 92"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 92"
                  href="?view=timeline&amp;hole=DCRDS-DH-175&amp;day=2026-09-08"
                  data-fd-target-hole="DCRDS-DH-175"
                  data-fd-target-day="2026-09-08"
                  title="Drill day Tue Sep 8, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Tue Sep 8, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 72"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-175&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-175"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 11. Received Aug 7."
                    aria-label="DCRDS-DH-175: Landowner notification, 14-day. Due Aug 11. Received Aug 7."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-175&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-175"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 14. Received Aug 14."
                    aria-label="DCRDS-DH-175: Landowner notification, 10-day. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-175&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-175"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 18. Missing."
                    aria-label="DCRDS-DH-175: Public notification (3-week look-ahead). Due Aug 18. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-175&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-175"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 21. Received Aug 19."
                    aria-label="DCRDS-DH-175: Landowner notification, 72-hr. Due Aug 21. Received Aug 19."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-175&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-175"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 25. Received Aug 24."
                    aria-label="DCRDS-DH-175: Site clearance, 14-day. Due Aug 25. Received Aug 24."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-175&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-175"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 25 to Sep 4. Received Aug 25."
                    aria-label="DCRDS-DH-175: USA ticket. Due Aug 25 to Sep 4. Received Aug 25."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-175&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-175"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 4. Received Sep 4."
                    aria-label="DCRDS-DH-175: Site clearance, 72-hr. Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCRDS-DH-176"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="HA"
              data-county="Sacramento"
              data-start="2026-09-09"
              data-missing="2"
              data-search="dcrds-dh-176 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCRDS-DH-176"
                  data-fd-target-hole="DCRDS-DH-176"
                  >DCRDS-DH-176</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 83; --to: 90"></span
                ><span class="bcn-fd-tl__bar" style="--from: 93; --to: 93"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 93"
                  href="?view=timeline&amp;hole=DCRDS-DH-176&amp;day=2026-09-09"
                  data-fd-target-hole="DCRDS-DH-176"
                  data-fd-target-day="2026-09-09"
                  title="Drill day Wed Sep 9, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Wed Sep 9, Hand auger. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >HA</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 73"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-176&amp;doc=landowner14"
                    data-fd-target-hole="DCRDS-DH-176"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 12. Received Aug 11."
                    aria-label="DCRDS-DH-176: Landowner notification, 14-day. Due Aug 12. Received Aug 11."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-176&amp;doc=landowner10"
                    data-fd-target-hole="DCRDS-DH-176"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 14. Received Aug 14."
                    aria-label="DCRDS-DH-176: Landowner notification, 10-day. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 78"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-176&amp;doc=publicNotice"
                    data-fd-target-hole="DCRDS-DH-176"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 19. Missing."
                    aria-label="DCRDS-DH-176: Public notification (3-week look-ahead). Due Aug 19. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-176&amp;doc=landowner72"
                    data-fd-target-hole="DCRDS-DH-176"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 21. Received Aug 21."
                    aria-label="DCRDS-DH-176: Landowner notification, 72-hr. Due Aug 21. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 83"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-176&amp;doc=siteClearance14"
                    data-fd-target-hole="DCRDS-DH-176"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 26. Missing."
                    aria-label="DCRDS-DH-176: Site clearance, 14-day. Due Aug 26. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 84"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-176&amp;doc=usaTicket"
                    data-fd-target-hole="DCRDS-DH-176"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 26 to Sep 4. Received Aug 27."
                    aria-label="DCRDS-DH-176: USA ticket. Due Aug 26 to Sep 4. Received Aug 27."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 90"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCRDS-DH-176&amp;doc=siteClearance72"
                    data-fd-target-hole="DCRDS-DH-176"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 4. Received Sep 4."
                    aria-label="DCRDS-DH-176: Site clearance, 72-hr. Due Sep 4. Received Sep 4."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
            <div
              class="bcn-fd-tl__row"
              data-fd-row=""
              data-hole="DCLEV-DH-026"
              data-status="missing"
              data-agreement="ROW (2026)"
              data-rig="7"
              data-county="Sacramento"
              data-start="2026-09-11"
              data-missing="1"
              data-search="dclev-dh-026 state or county"
            >
              <div class="bcn-fd-tl__label">
                <a
                  href="?view=timeline&amp;hole=DCLEV-DH-026"
                  data-fd-target-hole="DCLEV-DH-026"
                  >DCLEV-DH-026</a
                >
              </div>
              <div class="bcn-fd-tl__track">
                <span class="bcn-fd-tl__window" style="--from: 85; --to: 92"></span
                ><span class="bcn-fd-tl__bar" style="--from: 95; --to: 95"></span
                ><a
                  class="bcn-fd-tl__cell bcn-fd-tl__cell--drill"
                  style="--i: 95"
                  href="?view=timeline&amp;hole=DCLEV-DH-026&amp;day=2026-09-11"
                  data-fd-target-hole="DCLEV-DH-026"
                  data-fd-target-day="2026-09-11"
                  title="Drill day Fri Sep 11, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  aria-label="Drill day Fri Sep 11, Rig 7. Daily biological monitoring log: Received. Daily field coordinator log: Received. Daily geologist log: Received."
                  ><span
                    class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
                    data-status="received"
                    aria-hidden="true"
                    >7</span
                  ></a
                ><span class="bcn-fd-tl__cell" style="--i: 75"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-026&amp;doc=landowner14"
                    data-fd-target-hole="DCLEV-DH-026"
                    data-fd-target-doc="landowner14"
                    title="Landowner notification, 14-day. Due Aug 14. Received Aug 14."
                    aria-label="DCLEV-DH-026: Landowner notification, 14-day. Due Aug 14. Received Aug 14."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 77"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-026&amp;doc=landowner10"
                    data-fd-target-hole="DCLEV-DH-026"
                    data-fd-target-doc="landowner10"
                    title="Landowner notification, 10-day. Due Aug 18. Received Aug 17."
                    aria-label="DCLEV-DH-026: Landowner notification, 10-day. Due Aug 18. Received Aug 17."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 80"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-026&amp;doc=publicNotice"
                    data-fd-target-hole="DCLEV-DH-026"
                    data-fd-target-doc="publicNotice"
                    title="Public notification (3-week look-ahead). Due Aug 21. Missing."
                    aria-label="DCLEV-DH-026: Public notification (3-week look-ahead). Due Aug 21. Missing."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="missing"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 82"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-026&amp;doc=landowner72"
                    data-fd-target-hole="DCLEV-DH-026"
                    data-fd-target-doc="landowner72"
                    title="Landowner notification, 72-hr. Due Aug 25. Received Aug 21."
                    aria-label="DCLEV-DH-026: Landowner notification, 72-hr. Due Aug 25. Received Aug 21."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 85"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-026&amp;doc=siteClearance14"
                    data-fd-target-hole="DCLEV-DH-026"
                    data-fd-target-doc="siteClearance14"
                    title="Site clearance, 14-day. Due Aug 28. Received Aug 26."
                    aria-label="DCLEV-DH-026: Site clearance, 14-day. Due Aug 28. Received Aug 26."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 89"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-026&amp;doc=usaTicket"
                    data-fd-target-hole="DCLEV-DH-026"
                    data-fd-target-doc="usaTicket"
                    title="USA ticket. Due Aug 28 to Sep 8. Received Sep 3."
                    aria-label="DCLEV-DH-026: USA ticket. Due Aug 28 to Sep 8. Received Sep 3."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a></span
                ><span class="bcn-fd-tl__cell" style="--i: 92"
                  ><a
                    class="bcn-fd-tl__dot"
                    href="?view=timeline&amp;hole=DCLEV-DH-026&amp;doc=siteClearance72"
                    data-fd-target-hole="DCLEV-DH-026"
                    data-fd-target-doc="siteClearance72"
                    title="Site clearance, 72-hr. Due Sep 8. Received Sep 8."
                    aria-label="DCLEV-DH-026: Site clearance, 72-hr. Due Sep 8. Received Sep 8."
                    ><span
                      class="bcn-fd-mark bcn-fd-mark--dot"
                      data-status="received"
                      aria-hidden="true"
                    ></span></a
                ></span>
              </div>
            </div>
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
          <span
            class="bcn-fd-mark bcn-fd-mark--dot"
            data-status="late"
            aria-hidden="true"
          ></span
          ><span>Received late</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span
            class="bcn-fd-mark bcn-fd-mark--dot"
            data-status="missing"
            aria-hidden="true"
          ></span
          ><span>Missing</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span
            class="bcn-fd-mark bcn-fd-mark--dot"
            data-status="upcoming"
            aria-hidden="true"
          ></span
          ><span>Upcoming</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span class="bcn-fd-tl__key-window" aria-hidden="true"></span
          ><span>USA ticket window</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span
            class="bcn-fd-mark bcn-fd-mark--bar bcn-fd-mark--text"
            data-status="received"
            aria-hidden="true"
            >8</span
          ><span>Drill days (rig)</span>
        </li>
        <li class="cluster" data-gap="xs">
          <span class="bcn-fd-tl__key-today" aria-hidden="true"></span
          ><span>Today, Sep 25</span>
        </li>
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
.bcn-fd-mark--sm {
  width: 22px;
  height: 20px;
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
  color: color-mix(
    in srgb,
    var(--bcn-status-in-progress) 45%,
    var(--color-content-default)
  );
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
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-status-completed`: #2e7571 _(component)_
- `--bcn-status-in-progress`: #f59e0b _(component)_
- `--bcn-status-not-started`: #bdbdbd _(component)_
- `--bcn-status-overdue`: #ce2c31 _(component)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-focus`: #3e9b4f _(component)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-utility-danger`: #fcfcfc _(semantic)_
- `--color-content-on-utility-info`: #fcfcfc _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--gap`: 1rem _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--tl-days`: 111 _(component)_
- `--tl-today`: 105 _(component)_
- `--tl-week-offset`: 1 _(component)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
