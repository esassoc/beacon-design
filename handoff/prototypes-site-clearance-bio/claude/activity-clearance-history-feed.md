# Activity — clearance history feed

The component-level clearance history: a single-column, date-grouped feed of recorded reviews, monitor notes, and live in-session edits. History ONLY — there is no Upcoming rail and no forward-looking entry of any kind; Beacon records what happened, it never forecasts. A Type filter scopes the feed; every entry jumps to its work-area drawer. One drawer save lands in BOTH the drawer's Activity fold and this feed.

## Key decisions
- Feed entries are the deterministic entry card: a work-area ID badge + an ENUMERATED event-type label (Review / Note / Edit) + the structured fact as the primary line (never a prose sentence). A review entry carries its kind as the primary, its outcome as the status chip, and its reviewer as the meta; a note entry quotes the verbatim text.
- The Type filter has NO color dots on purpose — color belongs to STATUS, not event type.
- There is no Component filter here — the page's Component picker already scopes the feed (a second component control would fight it).
- Live edits land in the fixture-TODAY group ("… · Today"), sorted above the dated fixture events.

## Gotchas
- The feed renders at BOOT but is only visible once the Activity tab is active — capture/automation must switch tabs first.
- Every feed entry carries data-wa (the observation feed entries are gone with the forecasting cut) — the observation drawer is reached from the map or the Data tab, not from here.
- A new review posted in the drawer must append here in the TODAY group — the feed derives from the store + session edits, not a static list.

## Done when
- Entries group by date (newest first) with the TODAY group labeled; the Type filter scopes Reviews/Notes/Edits; an entry opens its work-area drawer; a drawer save appears in the TODAY group; nothing future-dated ever renders.

## Markup
```html
<div class="feed">
  <div class="feed-main">
    <!-- Filter row — the same filter legos as the map/Data bars. Type
                 has no dots on purpose (colors belong to status, not event
                 type); the page's Component picker already scopes the feed. -->
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
        <h3 class="feed-heading">Jun 4, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRAI-DH-009" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-009</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">14-day clearance</span>
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
        <h3 class="feed-heading">Jun 3, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRAI-DH-014" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
          <li class="entry entry--card" data-wa="DCTR1-DH-008" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR1-DH-008</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Review</span><span class="entry__sep"> · </span
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
          <li class="entry entry--card" data-wa="DCRAI-DH-014" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-014</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This DH is located in a gravel work pad. It was moved slightly to be
                placed outside of a dry roadside ditch and to be situated further from the
                railroad tracks. There are several large trees, and waterways nearby, but
                the site is situated in an area that is highly disturbed. A few elderberry
                shrubs are near the entrance to the road, but they are greater than 165'
                away.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCRDS-DH-294" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRDS-DH-294</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “DH located in recently cut alfalfa field. Irrigation ditches surround the
                field and one access road to the site was available. The irrigation
                ditches had water and would be considered GGS aquatic habitat. The field
                had multiple burrows but is being actively farmed, making it unlikely
                upland habitat for GGS. The only entrance road tot eh field was approx.
                25' and had burrows in it but was actively used based on recent farming
                activities. The burrows were situated on either side of the road and down
                the middle. An established path was obvious where vehicles regularly drive
                that had no burrows. After discussing with Leah, it was determined that
                the DH could be safely accessed if the burrows were flagged and the
                vehicles crossed into the field within the established tire tracks and
                under the supervision of a biologist. A mallard nest was located near the
                entrance to the alfalfa field. If it is still present during the drilling
                a 50' buffer will be established from drilling activities.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCTR1-DH-008" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR1-DH-008</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This DH was located on the edge of an almond orchard. Some trimming of
                fruit and or almond trees may be required at the entrance to the row to
                access the DH. There were no biological concerns at this site, outside of
                the potential for nesting birds and Crotch's bumblebee (CBB) foraging
                habitat which were not observed on 6/2. Mowing is not recommended, but is
                also not required, just preferred.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCTR2-DH-100" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR2-DH-100</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This site is located along an unused dirt road on state lands in a
                wildlife preserve. The road would require mowing to access the DH. There
                is an irrigation canal with water and tulles along the border of the road.
                Several birds were observed to be nesting or were believed to be nesting
                along the road, in the slough, and in the adjacent field including
                red-winged blackbirds (based on behavior, did not observe nest), killdeer
                (observed one nest, two likely), and possibly a gold finch nest. One
                raptor nest was identified on the west side of the parcel approx. 2,500'
                to the west of the access road. The distance was too far to identify the
                raptor, but it was likely a red-tailed or Swainson's hawk nest. Due to the
                burrows in the road within 200' of aquatic habitat and the multiple nests
                it was determined by the group that the road can't be mowed, and the DH is
                not accessible.”
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
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
                ><span class="entry__primary">14-day clearance</span>
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
          <li class="entry entry--card" data-wa="DCBPP-DH-034" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCBPP-DH-034</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This site is in an active hayfield. The field has been hayed/baled but
                the bales have not yet been collected. The soil surface was cultivated
                prior to planting and there are no burrows. A stick nest large enough to
                be a raptor was observed on a hi-voltage electric tower 1,500 feet to the
                north, but no activity was seen around the nest. There are no wetlands or
                waters nearby.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCBPP-DH-066" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCBPP-DH-066</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This site is in an active hayfield. The field has been hayed/baled but
                the bales have not yet been collected. The soil surface was cultivated
                prior to planting and there are no burrows. A stick nest, probably not
                large enough to be a raptor was observed on a hi-voltage electric tower
                1,785 feet to the southeast, but no activity was seen around the nest.
                There are no wetlands or waters nearby.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCRAI-DH-010" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-010</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “The site is entirely in a dirt road. There is an agricultural ditch with
                water nearby. There are no burrows in the work site, but there are burrows
                in the road outside the work site that would need to be driven over for
                access. We were instructed that project vehicles may not drive over
                burrows in roads. Site is currently not in compliance for the GGS measure
                due to the need to drive over burrows.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCRAI-DH-011" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-011</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This site was not surveyed. It was determined to be inaccessible
                currently due to thickness of milkweed (corrected to milk thistle)
                surrounding it.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCRAI-DH-013" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRAI-DH-013</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “The site is entirely in a dirt road. It is about 190 feet from the San
                Joaquin River. There are riparian trees and Himalayan blackberry adjacent
                on one side that will be avoided. The other side is a row crop (tomato).
                There are no burrows in the work site, but there are burrows in the road
                outside the work site that would need to be driven over for access. We
                were instructed that project vehicles may not drive over burrows in roads.
                Site is currently not in compliance for the GGS measure due to the need to
                drive over burrows.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCRDS-DH-292" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRDS-DH-292</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “The site is entirely in a hard-packed gravel road, with annual grassland
                and ruderal vegetation on either side. There is an agricultural ditch with
                water nearby. There are no burrows in the road, nor any burrows in the
                road outside the site necessary for access.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCSHF-DH-144" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCSHF-DH-144</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This site is in an active hayfield. The field has been hayed/baled but
                the bales have not yet been collected. The soil surface was cultivated
                prior to planting and there are no burrows. A stick nest large enough to
                be a raptor was observed on a hi-voltage electric tower 1,325 feet to the
                north, but no activity was seen around the nest. There are no wetlands or
                waters nearby.”
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section class="feed-day">
        <h3 class="feed-heading">May 27, 2026</h3>
        <ul class="feed-day__list">
          <li class="entry entry--card" data-wa="DCRDS-DH-184" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCRDS-DH-184</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">H. Barbare (DWR)</span>
              </p>
              <p class="entry__secondary">
                “30-day Notification was scheduled to be sent 5/15/2026 for 6/15/2026 site
                clearance visit and 6/29/2026 work. This location is the closest to the
                nest.”
              </p>
            </div>
          </li>
          <li class="entry entry--card" data-wa="DCTR2-DH-012" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR2-DH-012</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">H. Barbare (DWR)</span>
              </p>
              <p class="entry__secondary">
                “30-day Notification was scheduled to be sent 5/15/2026 for 6/16/2026 site
                clearance visit and 6/30/2026 start of work.”
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
                ><span class="entry__primary">14-day clearance</span>
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
          <li class="entry entry--card" data-wa="DCTR2-DH-010" tabindex="0" role="button">
            <span class="entry__badge entry__badge--wa">DCTR2-DH-010</span>
            <div class="entry__body">
              <p class="entry__line">
                <span class="entry__type">Note</span><span class="entry__sep"> · </span
                ><span class="entry__primary">C. Anderson (ESA)</span>
              </p>
              <p class="entry__secondary">
                “This was the site clearance visit that identified the SWHA nest on 5/18.”
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
          Clear the Type filter to see the full feed.
        </p>
        <div class="esa-empty-state__actions"></div>
      </div>
    </div>
  </div>
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
.map-filterbar__buffer {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.feed {
  display: flex;
  flex-direction: column;
}
.feed-main {
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
.entry__badge--wa {
  color: var(--color-primary);
  background: color-mix(in srgb, var(--color-primary) 10%, white);
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
.esa-filter-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--_filter-container-row-gap, 0.5rem) var(--_filter-container-gap, 0.75rem);
}
.esa-filter-clear-button {
  --_clear-text: var(--filter-clear-color, var(--color-primary-strong, #3a7c59));
  --_clear-text-hover: var(
    --filter-clear-color-hover,
    var(--color-primary-strong, #3a7c59)
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
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--filter-clear-color`: #7c7c7c _(component)_
- `--filter-clear-color-hover`: #ce2c31 _(component)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
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
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
