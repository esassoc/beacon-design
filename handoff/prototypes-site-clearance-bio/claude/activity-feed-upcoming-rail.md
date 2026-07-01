# Activity — feed & upcoming rail

The week-at-a-glance: a date-grouped feed of what changed (completed reviews, new observations/log updates, notifications, edits) on the left, and a sticky Upcoming rail (soonest first) on the right. It is scoped by a Type/Component filter row; every entry jumps to the relevant drawer. One drawer save lands in BOTH the drawer's Activity fold and this feed.

## Key decisions
- Feed entries are the ch3 entry card: an ID badge + an ENUMERATED event-type label + the structured fact as the primary line (never a prose sentence) — deterministic, scannable rows, not free text.
- The Type filter has NO color dots on purpose — color belongs to STATUS, not event type; only status surfaces (map, chips, timeline) are colored.
- The Upcoming rail is NOT scoped by the feed filters (it is a forward-looking to-do, not a log slice); the feed filters scope only the dated groups. An empty filtered feed shows an esa-empty-state.

## Gotchas
- Feed + Upcoming render at BOOT (init + refreshAll) but are only visible once the Activity tab is active — capture/automation must switch tabs first.
- Entry jump target: a review/notification/edit entry carries data-wa (opens the work-area drawer); an observation entry carries data-obs (opens the observation drawer). jump.wa wins if both are present.
- This feed is the live change log, so a new review posted in the drawer must append here in the fixture-TODAY group — the feed is derived from the store + session edits, not a static list.

## Done when
- Entries group by date (newest first) with the TODAY group labeled; the Type/Component filters scope only the feed (not Upcoming); a review entry opens the work-area drawer and an observation entry opens the observation drawer; a drawer save appears in the TODAY group.

## Markup
```html
<div class="feed">
  <div class="feed-main">
    <!-- Filter row — the same filter legos as the map/Data bars. Scopes
                 the feed only; Type has no dots on purpose (colors belong to
                 status, not event type). -->
    <div class="map-filterbar feed-filterbar">
      <div class="map-filterbar__row">
        <span class="map-filterbar__label">Filters</span>
        <div
          class="esa-filter-container"
          style="
            --_filter-container-gap: var(
              --filter-container-gap,
              var(--spacing-300, 0.75rem)
            );
            --_filter-container-row-gap: var(--spacing-200, 0.5rem);
          "
        >
          <esa-filter-dropdown
            id="act-flt-type"
            label="Type"
            multiple=""
            size="sm"
          ></esa-filter-dropdown>
          <esa-filter-dropdown
            id="act-flt-component"
            label="Component"
            multiple=""
            size="sm"
          ></esa-filter-dropdown>
        </div>
        <span id="act-clear-filters"
          ><button
            class="esa-filter-clear-button"
            type="button"
            data-esa-filter-clear=""
            aria-label="Clear all filters"
          >
            <svg
              class="esa-filter-clear-button__icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"></path>
              <path d="m22 3-5 5"></path>
              <path d="m17 3 5 5"></path></svg
            ><span class="esa-filter-clear-button__label">Clear all</span>
          </button></span
        >
      </div>
    </div>
    <div id="feed-groups">
      <section class="feed-day">
        <h3 class="feed-heading">Jun 9, 2026</h3>
        <ul class="feed-day__list">
          <li
            class="entry entry--card"
            data-obs="Species-Swainson's Hawk-06092026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs"
              >Species-Swainson's Hawk-06092026</span
            >
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Swainson's Hawk · tracking only</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">Jun 4, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRAI-DH-009" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-009</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared-stipulations"
                    style="--_chip: var(--st-cleared-stipulations)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared w/ Stipulations</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li
            class="entry entry--card"
            data-obs="KILL-7655-06032026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">KILL-7655-06032026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Log update</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Killdeer</span>
              </p>
              <p class="entry__secondary">“1 bird on nest, tried to lead us away.”</p>
            </div>
            <span class="entry__meta">2:23 PM</span>
          </li>
          <li
            class="entry entry--card"
            data-obs="Unknown-5895-06032026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">Unknown-5895-06032026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Log update</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Unknown Raptor</span>
              </p>
              <p class="entry__secondary">
                “Large stick nest with raptor observed; too distant to identify (likely
                RTHA or SWHA).”
              </p>
            </div>
            <span class="entry__meta">2:20 PM</span>
          </li>
          <li
            class="entry entry--card"
            data-obs="MALL-1520-06022026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">MALL-1520-06022026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Log update</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Mallard</span>
              </p>
              <p class="entry__secondary">“A pair observed. Female stayed with nest.”</p>
            </div>
            <span class="entry__meta">2:14 PM</span>
          </li>
          <li
            class="entry entry--card"
            data-obs="CORA-2695-06042026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">CORA-2695-06042026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Common Raven · 250 ft buffer</span>
              </p>
            </div>
          </li>
          <li
            class="entry entry--card"
            data-obs="Species-Swainson's Hawk-06042026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs"
              >Species-Swainson's Hawk-06042026</span
            >
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Swainson's Hawk · tracking only</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">Jun 3, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRAI-DH-014" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCRDS-DH-294" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRDS-DH-294</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared-stipulations"
                    style="--_chip: var(--st-cleared-stipulations)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared w/ Stipulations</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCTR1-DH-008" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR1-DH-008</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCTR2-DH-100" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR2-DH-100</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="inaccessible"
                    style="--_chip: var(--st-inaccessible)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Inaccessible</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li
            class="entry entry--card"
            data-obs="KILL-7655-06032026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">KILL-7655-06032026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Killdeer · 100 ft buffer</span>
              </p>
            </div>
          </li>
          <li
            class="entry entry--card"
            data-obs="Unknown-5895-06032026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">Unknown-5895-06032026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Unknown Raptor · 500 ft buffer</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">Jun 2, 2026</h3>
        <ul class="feed-day__list">
          <li
            class="entry entry--card"
            data-obs="MALL-1520-06022026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">MALL-1520-06022026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Mallard · 50 ft buffer</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">Jun 1, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCBPP-DH-034" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCBPP-DH-034</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCBPP-DH-066" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCBPP-DH-066</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCRAI-DH-010" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-010</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="blocked"
                    style="--_chip: var(--st-blocked)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Blocked</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCRAI-DH-011" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-011</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="inaccessible"
                    style="--_chip: var(--st-inaccessible)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Inaccessible</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCRAI-DH-013" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-013</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="blocked"
                    style="--_chip: var(--st-blocked)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Blocked</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCRDS-DH-292" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRDS-DH-292</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li class="entry entry--card" data-wa="DCSHF-DH-144" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCSHF-DH-144</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Cleared</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">May 29, 2026</h3>
        <ul class="feed-day__list">
          <li
            class="entry entry--card"
            data-obs="CORA-5830-06052026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">CORA-5830-06052026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">Common Raven · 250 ft buffer</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">May 18, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCTR2-DH-010" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR2-DH-010</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">Biological · Clearance survey</span>
                <span class="gate__chipwrap"
                  ><span
                    class="bcn-status-chip"
                    data-status="blocked"
                    style="--_chip: var(--st-blocked)"
                  >
                    <span class="bcn-status-chip__dot"></span>
                    <span class="bcn-status-chip__label">Blocked</span>
                  </span>
                </span>
              </p>
            </div>
            <span class="entry__meta">C. Anderson (ESA)</span>
          </li>
          <li
            class="entry entry--card"
            data-obs="SWHA-2289-05182026"
            tabindex="0"
            role="button"
          >
            <span class="entry__badge entry__badge--obs">SWHA-2289-05182026</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Observation</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary"
                  >Swainson's Hawk · 2,640 ft buffer · 19 work areas affected</span
                >
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">May 15, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRDS-DH-184" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRDS-DH-184</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Notification</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">30-day landowner</span>
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCTR2-DH-012" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR2-DH-012</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Notification</span
                ><span class="entry__sep"> · </span
                ><span class="entry__primary">30-day landowner</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <div id="feed-empty" hidden="">
      <div class="esa-empty-state esa-empty-state--sm">
        <h3 class="esa-empty-state__title">No activity matches the filters</h3>
        <p class="esa-empty-state__description">
          Clear the Type / Component filters to see the full feed.
        </p>
        <div class="esa-empty-state__actions"></div>
      </div>
    </div>
  </div>
  <aside class="feed-upcoming" aria-label="Upcoming">
    <h3 class="feed-heading">Upcoming</h3>
    <ul class="feed-upcoming__list" id="feed-upcoming">
      <li class="entry entry--up" data-wa="DCSHF-DH-144" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCSHF-DH-144</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Work start</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Jun 12</span>
          </p>
        </div>
        <span class="entry__meta">tomorrow</span>
      </li>
      <li class="entry entry--up" data-wa="DCBPP-DH-066" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCBPP-DH-066</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Work start</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Jun 15</span>
          </p>
        </div>
        <span class="entry__meta">in 4 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCRDS-DH-184" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCRDS-DH-184</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Clearance visit</span
            ><span class="entry__sep"> · </span><span class="entry__primary">Jun 15</span>
          </p>
        </div>
        <span class="entry__meta">in 4 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCRDS-DH-292" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCRDS-DH-292</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Work start</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Jun 15</span>
          </p>
        </div>
        <span class="entry__meta">in 4 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCBPP-DH-034" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCBPP-DH-034</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Work start</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Jun 16</span>
          </p>
        </div>
        <span class="entry__meta">in 5 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCTR1-DH-008" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCTR1-DH-008</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Work start</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Jun 16</span>
          </p>
        </div>
        <span class="entry__meta">in 5 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCTR2-DH-012" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCTR2-DH-012</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Clearance visit</span
            ><span class="entry__sep"> · </span><span class="entry__primary">Jun 16</span>
          </p>
        </div>
        <span class="entry__meta">in 5 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCRAI-DH-014" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Work start</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Jun 17</span>
          </p>
        </div>
        <span class="entry__meta">in 6 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCRDS-DH-294" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCRDS-DH-294</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Work start</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Jun 17</span>
          </p>
        </div>
        <span class="entry__meta">in 6 days</span>
      </li>
      <li class="entry entry--up" data-wa="DCTR2-DH-010" tabindex="0" role="button">
        <span class="entry__badge entry__badge--wa">DCTR2-DH-010</span>
        <div class="entry__body">
          <p class="entry__line">
            <span class="entry__type">Review</span><span class="entry__sep"> · </span
            ><span class="entry__primary">Biological · Sep 2</span>
          </p>
        </div>
        <span class="entry__meta">in 83 days</span>
      </li>
    </ul>
  </aside>
</div>
```

## Styles
```css
.map-filterbar {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-300);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
}
.map-filterbar__row {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  padding: var(--spacing-250) var(--spacing-400);
}
.map-filterbar__label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.map-filterbar__goto {
  margin-left: auto;
  display: flex;
  gap: var(--spacing-200);
}
.map-filterbar__goto esa-combobox {
  --form-height-sm: 32px;
  --form-font-size-sm: var(--type-size-150);
}
.map-filterbar__row + .map-filterbar__row {
  border-top: 1px solid var(--color-border);
}
.feed {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 300px;
  grid-template-areas: "main side";
  align-items: start;
  gap: var(--spacing-500);
}
.feed-main {
  grid-area: main;
  min-width: 0;
}
.feed-heading {
  margin: 0 0 var(--spacing-200);
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.feed-day__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.entry {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
}
.entry--card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  cursor: pointer;
  transition:
    background 0.12s ease,
    border-color 0.12s ease;
}
.entry__badge {
  flex-shrink: 0;
  margin-top: 1px;
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-100);
  font-family: var(--font-mono, monospace);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  letter-spacing: 0;
  text-transform: uppercase;
  white-space: nowrap;
}
.entry__badge--obs {
  color: var(--obs-color-strong);
  background: color-mix(in srgb, var(--obs-color) 12%, white);
}
.entry__body {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.entry__line {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
}
.entry__type {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.entry__sep {
  color: var(--color-text-tertiary);
}
.entry__primary {
  color: var(--color-text-primary);
}
.entry__badge--wa {
  color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 10%, white);
}
.entry__line .gate__chipwrap {
  vertical-align: text-bottom;
}
.entry__meta {
  flex-shrink: 0;
  font-size: 0.8125rem;
  color: var(--color-text-tertiary);
  white-space: nowrap;
  text-align: right;
}
.entry__secondary {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.45;
  color: var(--color-text-secondary);
}
.feed-upcoming {
  grid-area: side;
  position: sticky;
  top: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
}
.feed-upcoming__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.entry--up {
  padding: var(--spacing-200) 0;
  cursor: pointer;
  flex-wrap: wrap;
}
.entry--up .entry__meta {
  flex-basis: 100%;
  text-align: left;
}
.entry--up + .entry--up {
  border-top: 1px solid var(--color-border-light);
}
.esa-filter-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
}
.esa-filter-clear-button {
  --_clear-text: var(--filter-clear-color, var(--color-primary, #43608a));
  --_clear-text-hover: var(
    --filter-clear-color-hover,
    var(--color-primary-hover, #39506f)
  );
  --_clear-font-size: var(--type-size-150, 0.875rem);
  --_clear-icon-size: 18px;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-100, 0.25rem);
  padding: var(--spacing-100, 0.25rem) var(--spacing-200, 0.5rem);
  border: none;
  border-radius: var(--radius-100, 0.25rem);
  background: transparent;
  color: var(--_clear-text);
  font-family: var(--font-sans, inherit);
  font-size: var(--_clear-font-size);
  font-weight: var(--font-weight-medium, 450);
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 2px;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
}
.esa-filter-clear-button__icon {
  width: var(--_clear-icon-size);
  height: var(--_clear-icon-size);
  flex: none;
}
.esa-filter-clear-button__label {
  white-space: nowrap;
}
.bcn-status-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  padding: 2px var(--spacing-250);
  border-radius: var(--radius-full);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
  background: color-mix(in srgb, var(--_chip) 16%, transparent);
  color: color-mix(in srgb, var(--_chip) 72%, #1a1a1a);
}
.bcn-status-chip__dot {
  width: 8px;
  height: 8px;
  border-radius: var(--radius-full);
  background: var(--_chip);
  flex-shrink: 0;
}
```

## Tokens
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--filter-clear-color`: #7c7c7c _(component)_
- `--filter-clear-color-hover`: #ef4444 _(component)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--obs-color`: #7b5ea7 _(component)_
- `--obs-color-strong`: #5b3f87 _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
