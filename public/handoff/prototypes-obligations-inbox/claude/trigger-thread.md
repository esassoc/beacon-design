# Trigger thread

The right pane: one trigger and every obligation it raised, split into "Needs a notice now" and "Also raised". Each obligation leads with its CONDITION — the observable phrased the way a monitor would see it — then the deadline, the reason it is here, and the commitments driving it.

## Key decisions
- THE CONDITION IS THE HEADLINE, not the obligation title. "Burrowing owl seen on or near site and not reported" reads as an instruction; "Burrowing owl sighting report to the Designated Biologist" reads as a catalogue entry. All 402 rows carry a condition, which makes it the most under-used field in the registry.
- EVERY ROW SHOWS WHAT IS DRIVING IT — commitment code over title, linked out, so "what is making me do this" is answerable without leaving the page. On the owl thread those resolve to COA 11.109 BUOW Avoidance, COA 11.117 BUOW Exclusion Activities, COA 11.116 BUOW Monitoring. This is why threading by trigger is worth the work.
- THE WHY LINE IS SHORT because the deadline rides its own chip. Inlining the window text produced sentences like "A notice is owed within one business day; within 24 hours when an owl moves on site because of this".
- Drivers render only in the "needs a notice now" group. In "Also raised" the codes collapse to a single line — forty rows each carrying three titles is a wall, and those rows are reference.
- DISMISSAL LIVES HERE, at the foot, after the reasons. It is an acknowledgement, not a resolution: the obligations stay in force and only the notice leaves, which the footnote says out loud.
- Fill and weight carry the tier. A row with an open clock gets a tinted ground; everything else is a hairline box.

## Gotchas
- EVERY THREAD IS RENDERED AT BUILD TIME and all but one hidden. Astro is compile-time, so a panel assembled from a JavaScript template literal would bypass the design system and no gate could see it (component-first is explicit). inbox.ts only reveals, hides and re-labels — it never builds markup. Same rule as triage.ts.
- Thread lengths vary wildly: the hawk raises 51 obligations, the barge grounding 16. The pane scrolls internally so the frame never resizes on selection.
- The dismiss attribute lands on esa-button's inner native <button>, not the wrapper, so the handler must use closest() rather than matching the click target.

## Done when
- The owl thread shows 5 obligations under "Needs a notice now" and 25 under "Also raised".
- Each urgent row shows its deadline chip ("Immediately", "Within 24 hours"), the reason it was raised, and at least one commitment code with its real title.
- Every obligation links through to its detail page by id.
- "Mark as seen" removes the trigger from the queue and selects the next one; clearing all eight reveals the cleared-inbox state in both panes rather than leaving them blank.

## Markup
```html
<section
  class="bcn-inbox-thread"
  data-inbox-thread="obs-owl"
  aria-label="Burrowing owl seen on the alignment"
>
  <header class="bcn-inbox-thread__head">
    <p class="bcn-inbox-thread__kind">
      <span class="bcn-inbox-thread__kind-icon"
        ><span class="esa-icon esa-icon--sm" aria-hidden="true"
          ><svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            focusable="false"
          >
            <path
              d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            ></path>
            <circle cx="12" cy="12" r="3"></circle></svg></span></span
      >Observation · 40m ago
    </p>
    <h2 class="bcn-inbox-thread__what">Burrowing owl seen on the alignment</h2>
    <dl class="bcn-inbox-thread__facts">
      <div>
        <dt>Where</dt>
        <dd>Reach 2 — Canal alignment, station 14+200</dd>
      </div>
      <div>
        <dt>Reported by</dt>
        <dd>M. Okonkwo, Biological Monitor</dd>
      </div>
      <div>
        <dt>Raised</dt>
        <dd>30 obligations</dd>
      </div>
    </dl>
  </header>
  <div class="bcn-inbox-thread__scroll">
    <section class="bcn-inbox-thread__group">
      <h3 class="bcn-inbox-thread__grouphead">
        Needs a notice now<span data-inbox-owedbadge="obs-owl"
          ><span
            class="esa-badge esa-badge--danger esa-badge--sm typography-microcopy-xs-strong"
            ><span class="esa-badge__text">5</span></span
          ></span
        >
      </h3>
      <ul class="bcn-inbox-obs">
        <li class="bcn-inbox-ob" data-urgency="now">
          <p class="bcn-inbox-ob__cond">
            Burrowing owl seen on or near site and not reported
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed because
            of this
          </p>
          <ul class="bcn-inbox-ob__drivers">
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.109</a
              ><span class="bcn-inbox-ob__ctitle">BUOW Avoidance</span>
            </li>
          </ul>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-026"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__verb"
              ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-inbox-file="4-026"
                  >
                    <span class="esa-button__label">Mark filed</span>
                  </button></span
                ></span
              ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                >Filed</span
              ></span
            ><span class="bcn-inbox-ob__id">4-026</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="now">
          <p class="bcn-inbox-ob__cond">
            Nest abandonment or distress not reported to CDFW within 24 hours
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock">Within 24 hours</span>A notice is owed
            because of this
          </p>
          <ul class="bcn-inbox-ob__drivers">
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">BIO-44</a
              ><span class="bcn-inbox-ob__ctitle"
                >Conduct Preconstruction Surveys and Implement Protective Measures to
                Avoid Disturbance of Tricolored Blackbird (FEIR)</span
              >
            </li>
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">BIO-36b</a
              ><span class="bcn-inbox-ob__ctitle"
                >Conduct Preconstruction Surveys and Implement Protective Measures to
                Avoid Disturbance of White-Tailed Kite (FEIR)</span
              >
            </li>
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">BIO-39</a
              ><span class="bcn-inbox-ob__ctitle"
                >Conduct Preconstruction Surveys and Implement Protective Measures to
                Minimize Disturbance of Swainson's Hawk (FEIR)</span
              >
            </li>
          </ul>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-012"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__verb"
              ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-inbox-file="4-012"
                  >
                    <span class="esa-button__label">Mark filed</span>
                  </button></span
                ></span
              ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                >Filed</span
              ></span
            ><span class="bcn-inbox-ob__id">4-012</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="now">
          <p class="bcn-inbox-ob__cond">
            Reoccupied blocked burrow not reported to CDFW immediately
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock">Immediately</span>A notice is owed because
            of this
          </p>
          <ul class="bcn-inbox-ob__drivers">
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.117</a
              ><span class="bcn-inbox-ob__ctitle">BUOW Exclusion Activities</span>
            </li>
          </ul>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-021"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__verb"
              ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-inbox-file="4-021"
                  >
                    <span class="esa-button__label">Mark filed</span>
                  </button></span
                ></span
              ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                >Filed</span
              ></span
            ><span class="bcn-inbox-ob__id">4-021</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="now">
          <p class="bcn-inbox-ob__cond">
            Owl presence changed on site without stop-work and CDFW notice
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock"
              >Within one business day; within 24 hours when an owl moves on site</span
            >A notice is owed because of this
          </p>
          <ul class="bcn-inbox-ob__drivers">
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.117</a
              ><span class="bcn-inbox-ob__ctitle">BUOW Exclusion Activities</span>
            </li>
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.116</a
              ><span class="bcn-inbox-ob__ctitle">BUOW Monitoring</span>
            </li>
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.114</a
              ><span class="bcn-inbox-ob__ctitle">Non-Disturbance Buffers (BUOW)</span>
            </li>
          </ul>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-027"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__verb"
              ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-inbox-file="4-027"
                  >
                    <span class="esa-button__label">Mark filed</span>
                  </button></span
                ></span
              ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                >Filed</span
              ></span
            ><span class="bcn-inbox-ob__id">4-027</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="now">
          <p class="bcn-inbox-ob__cond">
            CDFW representative not contacted within one business day of take or injury
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock">Within one business day</span>A notice is
            owed because of this
          </p>
          <ul class="bcn-inbox-ob__drivers">
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.103</a
              ><span class="bcn-inbox-ob__ctitle"
                >CBB Notification of CBB Take or Injury</span
              >
            </li>
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.52</a
              ><span class="bcn-inbox-ob__ctitle"
                >CTS - Notification of CTS Take or Injury</span
              >
            </li>
            <li>
              <a class="bcn-inbox-ob__code" href="#data-catalog/commitments">COA 11.68</a
              ><span class="bcn-inbox-ob__ctitle"
                >GGS - Notification of GGS Take or Injury</span
              >
            </li>
          </ul>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-003"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__verb"
              ><span class="bcn-inbox-ob__filewrap" data-inbox-filewrap=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    data-inbox-file="4-003"
                  >
                    <span class="esa-button__label">Mark filed</span>
                  </button></span
                ></span
              ><span class="bcn-inbox-ob__filed" data-inbox-filedmark="" hidden=""
                >Filed</span
              ></span
            ><span class="bcn-inbox-ob__id">4-003</span>
          </p>
        </li>
      </ul>
    </section>
    <section class="bcn-inbox-thread__group">
      <h3 class="bcn-inbox-thread__grouphead">
        Also raised<span
          class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
          ><span class="esa-badge__text">25</span></span
        >
      </h3>
      <ul class="bcn-inbox-obs">
        <li class="bcn-inbox-ob" data-urgency="soon">
          <p class="bcn-inbox-ob__cond">
            Required diverter, wildlife fencing or visual barrier not in place
          </p>
          <p class="bcn-inbox-ob__why">
            Concerns take or injury, so it applies the moment this happened
          </p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/2-056"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">AMM-18 · BIO-53 · BIO-22b</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="soon">
          <p class="bcn-inbox-ob__cond">
            Injured Covered Species not taken to the approved facility
          </p>
          <p class="bcn-inbox-ob__why">
            Concerns take or injury, so it applies the moment this happened
          </p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/2-003"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.2 · COA 11.52 · COA 11.68</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="soon">
          <p class="bcn-inbox-ob__cond">
            Work resumed after distress or threshold exceedance without CDFW consultation
          </p>
          <p class="bcn-inbox-ob__why">
            Concerns take or injury, so it applies the moment this happened
          </p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/1-109"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.33 · COA 11.116</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="soon">
          <p class="bcn-inbox-ob__cond">
            One-way doors installed without 48-hour CDFW notice
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock">48 hours before</span>Applies to what was
            seen here
          </p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-042"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.117</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="soon">
          <p class="bcn-inbox-ob__cond">
            Burrowing owl take or burrow relocation without CDFW mitigation consultation
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock">Not stated</span>Concerns take or injury, so
            it applies the moment this happened
          </p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-011"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">CMP-20</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="soon">
          <p class="bcn-inbox-ob__cond">
            Construction started before survey results reached CDFW
          </p>
          <p class="bcn-inbox-ob__why">
            <span class="bcn-inbox-ob__clock">At least 5 days before construction</span
            >Applies to what was seen here
          </p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-040"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Annual species survey not repeated for a site still in work
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-085"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.97 · COA 11.42 · COA 11.46</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Work continued after a biologist stop-work call
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-061"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">BIO-33 · BIO-24a · BIO-22a</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Burrows or refugia outside the footprint are damaged or destroyed
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/2-073"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">AMM-17 · COA 11.100 · COA 11.56</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Burrow complex map not updated with new sightings
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-057"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.112</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Burrow blocked or work inside a reduced buffer without the required monitoring
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-070"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117 · COA 11.116</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Ground disturbance in owl habitat without the 14-day and 24-hour surveys
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-086"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.111 · COA 11.110</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Burrowing owl mitigation acreage short of the phase requirement
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/2-095"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 12.6</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">Daily monitoring record missing or incomplete</p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-040"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">AQ-5 · EC-14 · COA 10.10</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            BUOW exclusion started without an approved Exclusion Activities Plan
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/1-106"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.117</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Nest, colony or den buffer unmarked or marker down
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/2-048"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">CM 6.3.2.1 · BIO-46 · BIO-36b</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Covered Activity within 1,640 ft of an occupied BUOW burrow, Feb 1 to Aug 31
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/2-028"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117 · COA 11.113</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            BUOW burrow excluded or excavated outside plan conditions
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/2-007"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117 · COA 11.111</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Owl exclusion or buffer reduction without the required monitoring
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-079"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.117 · COA 11.114</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Work resumed after a lapse without a repeat clearance survey
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-084"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">BIO-21 · BIO-24a · BIO-22a</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Rodenticide, poison or trapping used on site or habitat
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/1-054"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">AMM-17 · AMM-14 · BIO-2b</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Crew working near buffers without avoidance-procedure training
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-059"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.82 · COA 11.109</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Sensitive species handled by a biologist without the required expertise
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/4-071"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">COA 11.102 · COA 11.105 · COA 11.108</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            Vehicles exceed the posted speed limit on non-public roads or sites
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/1-087"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">AMM-17 · AMM-18 · AMM-14</span>
          </p>
        </li>
        <li class="bcn-inbox-ob" data-urgency="aware">
          <p class="bcn-inbox-ob__cond">
            One-way burrow doors not checked twice daily or left beyond 72 hours
          </p>
          <p class="bcn-inbox-ob__why">Applies to what was seen here</p>
          <p class="bcn-inbox-ob__acts">
            <a
              class="bcn-inbox-ob__link"
              href="/beacon-design/prototypes/data-catalog-obligation/3-012"
              >Open the obligation</a
            ><span class="bcn-inbox-ob__id">BIO-40 · COA 11.117</span>
          </p>
        </li>
      </ul>
    </section>
  </div>
  <footer class="bcn-inbox-thread__foot">
    <span
      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
      ><button
        class="esa-button__native typography-microcopy-md"
        type="button"
        data-inbox-dismiss="obs-owl"
      >
        <span class="esa-button__label">Mark as seen</span>
      </button></span
    ><span class="bcn-inbox-thread__footnote"
      >The obligations stay in force. Only this notice leaves the inbox.</span
    >
  </footer>
</section>
```

## Styles
```css
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-disclosure .esa-icon {
  transition: transform 0.15s;
}
.bcn-disclosure[aria-expanded="false"] .esa-icon {
  transform: rotate(-90deg);
}
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
}
.user-panel__item .esa-icon {
  color: var(--bcn-gray-500);
}
.user-panel__item--danger .esa-icon {
  color: var(--color-background-utility-danger);
}
.project-switcher__trigger > .esa-icon:first-child {
  color: var(--bcn-gray-500);
  flex-shrink: 0;
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-background-brand);
}
.nav-section__header > .esa-icon:first-child {
  color: var(--bcn-gray-950);
  flex-shrink: 0;
  transition: color 0.15s;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  flex-shrink: 0;
  transition:
    transform 0.15s,
    opacity 0.2s ease-in-out;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.side-nav.collapsed .nav-section__title,
.side-nav.collapsed .nav-section__header > .esa-icon:last-child {
  display: none;
}
.esa-button {
  --_btn-pad-y: var(--spacing-300, 0.75rem);
  --_btn-padding-x: var(--spacing-300, 0.75rem);
  --_btn-radius: var(--button-radius-md, 0.5rem);
  --_accent: var(--color-background-brand, #46a758);
  --_accent-hover: var(--color-background-brand-hover, #3e9b4f);
  --_on: var(--color-content-default-knockout, #fcfcfc);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--xs {
  --_btn-pad-y: var(--spacing-200, 0.5rem);
  --_btn-padding-x: var(--spacing-200, 0.5rem);
  --_btn-radius: var(--button-radius-xs, 4px);
}
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent-border, transparent);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),
.esa-button--appearance-fill.esa-button--active .esa-button__native {
  background: var(--_accent-hover);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  color: var(--_accent-text);
  border-color: var(--_accent);
  background: 0 0;
}
.esa-button--appearance-dashed .esa-button__native {
  border-style: dashed;
}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),
.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled) {
  background: var(--_btn-tint-hover);
}
.esa-button--appearance-outline.esa-button--active .esa-button__native,
.esa-button--appearance-dashed.esa-button--active .esa-button__native {
  background: var(--_btn-tint-active);
}
.esa-button--appearance-soft .esa-button__native {
  background: color-mix(
    in srgb,
    var(--color-background-elevation-sunken, #f0f0f0) 45%,
    var(--color-background-elevation-raised, #fcfcfc)
  );
  color: var(--_accent-text);
  border-color: var(--color-border-default-strong, #bbb);
}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),
.esa-button--appearance-soft.esa-button--active .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: var(--_accent);
}
.esa-button--variant-ghost .esa-button__native {
  color: var(--color-content-default, #202020);
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border-default, #cecece);
}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),
.esa-button--variant-ghost.esa-button--active .esa-button__native {
  background: var(--color-background-elevation-sunken, #f0f0f0);
}
.esa-button--variant-chrome .esa-button__native {
  color: inherit;
  background: 0 0;
  border-color: #0000;
}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),
.esa-button--variant-chrome.esa-button--active .esa-button__native,
.esa-button--variant-chrome.esa-button--current .esa-button__native {
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
}
.esa-button--variant-chrome .esa-button__native:focus-visible {
  outline-color: currentColor;
}
.esa-button__native {
  justify-content: center;
  align-items: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  padding-block: var(--_btn-pad-y);
  padding-inline: var(--_btn-padding-x);
  border: var(--border-width-default, 1px) solid transparent;
  border-radius: var(--_btn-radius);
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
  text-decoration: none;
  display: inline-flex;
}
.esa-button__native:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
.esa-button--icon-only .esa-button__native {
  padding-inline: var(--_btn-pad-y);
  aspect-ratio: 1;
}
summary.esa-button {
  cursor: pointer;
  list-style: none;
}
summary.esa-button::-webkit-details-marker {
  display: none;
}
summary.esa-button:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
  border-radius: var(--_btn-radius);
}
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-inbox-thread {
  flex-direction: column;
  block-size: 100%;
  min-block-size: 0;
  display: flex;
}
.bcn-inbox-thread__head {
  padding: var(--spacing-300);
  border-block-end: 1px solid var(--color-border-default);
}
.bcn-inbox-thread__kind {
  align-items: center;
  gap: var(--spacing-150);
  margin: 0 0 var(--spacing-150);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--bcn-content-muted);
  font-size: 0.75rem;
  display: flex;
}
.bcn-inbox-thread__what {
  margin: 0 0 var(--spacing-250);
  font-size: 1.25rem;
  line-height: 1.25;
  font-weight: var(--typography-font-weight-semibold);
  text-wrap: balance;
}
.bcn-inbox-thread__facts {
  gap: var(--spacing-200) var(--spacing-500);
  flex-wrap: wrap;
  margin: 0;
  display: flex;
}
.bcn-inbox-thread__facts dt {
  color: var(--bcn-content-muted);
  font-size: 0.75rem;
}
.bcn-inbox-thread__facts dd {
  margin: 0;
  font-size: 0.875rem;
}
.bcn-inbox-thread__scroll {
  min-block-size: 0;
  padding: var(--spacing-300);
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-inbox-thread__grouphead {
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-200);
  font-size: 0.9375rem;
  font-weight: var(--typography-font-weight-semibold);
  display: flex;
}
.bcn-inbox-thread__none {
  color: var(--bcn-content-muted);
  margin: 0;
  font-size: 0.875rem;
}
.bcn-inbox-obs {
  gap: var(--spacing-200);
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-inbox-ob {
  padding: var(--spacing-250);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
}
.bcn-inbox-ob[data-urgency="now"] {
  background: var(--color-background-utility-danger-subtle, #fbeceb);
  border-color: var(--color-border-utility-danger, #e8bdb8);
}
.bcn-inbox-ob[data-urgency="aware"] {
  border-color: var(--color-border-subtle, var(--color-border-default));
}
.bcn-inbox-ob__cond {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.4;
}
.bcn-inbox-ob[data-urgency="now"] .bcn-inbox-ob__cond {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-inbox-ob[data-urgency="aware"] .bcn-inbox-ob__cond {
  color: var(--color-content-default-secondary);
  font-size: 0.875rem;
}
.bcn-inbox-ob__why {
  align-items: baseline;
  gap: var(--spacing-150);
  margin: var(--spacing-100) 0 0;
  color: var(--bcn-content-muted);
  flex-wrap: wrap;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-inbox-ob__clock {
  padding: 1px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised, #fff);
  border: 1px solid var(--color-border-utility-danger, #e8bdb8);
  color: var(--color-content-utility-danger, #a8342a);
  font-weight: var(--typography-font-weight-medium);
  font-size: 0.75rem;
}
.bcn-inbox-ob__drivers {
  margin: var(--spacing-200) 0 0;
  gap: var(--spacing-100);
  flex-direction: column;
  padding: 0;
  list-style: none;
  display: flex;
}
.bcn-inbox-ob__drivers li {
  flex-direction: column;
  gap: 1px;
  display: flex;
}
.bcn-inbox-ob__code {
  font-variant-numeric: tabular-nums;
  color: var(--color-content-link);
  font-size: 0.75rem;
}
.bcn-inbox-ob__ctitle {
  color: var(--color-content-default-secondary);
  font-size: 0.8125rem;
  line-height: 1.35;
}
.bcn-inbox-ob__acts {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  margin: var(--spacing-200) 0 0;
  display: flex;
}
.bcn-inbox-ob__verb {
  align-items: center;
  gap: var(--spacing-200);
  margin-inline-start: auto;
  display: flex;
}
.bcn-inbox-ob__filewrap:not([hidden]) {
  display: inline-flex;
}
.bcn-inbox-ob__filed {
  padding: 1px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-utility-success-subtle, #eef5f4);
  color: var(--color-content-utility-success, #2e7571);
  font-size: 0.75rem;
  font-weight: var(--typography-font-weight-medium);
}
.bcn-inbox-ob[data-filed="1"] {
  border-color: var(--color-border-default);
  background: 0 0;
}
.bcn-inbox-ob[data-filed="1"] .bcn-inbox-ob__cond {
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
}
.bcn-inbox-ob[data-filed="1"] .bcn-inbox-ob__clock {
  background: var(--color-background-elevation-sunken);
  border-color: var(--color-border-default);
  color: var(--bcn-content-muted);
}
.bcn-inbox-ob__link {
  color: var(--color-content-link);
  font-size: 0.8125rem;
}
.bcn-inbox-ob__id {
  font-variant-numeric: tabular-nums;
  color: var(--bcn-content-muted);
  font-size: 0.75rem;
}
.bcn-inbox-thread__foot {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-250) var(--spacing-300);
  border-block-start: 1px solid var(--color-border-default);
  display: flex;
}
.bcn-inbox-thread__footnote {
  color: var(--bcn-content-muted);
  font-size: 0.8125rem;
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-md {
  font-family: var(--typography-microcopy-md-font-family);
  font-size: var(--typography-microcopy-md-font-size);
  font-weight: var(--typography-microcopy-md-font-weight);
  line-height: var(--typography-microcopy-md-line-height);
  letter-spacing: var(--typography-microcopy-md-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-md-subtle {
  font-family: var(--typography-microcopy-md-subtle-font-family);
  font-size: var(--typography-microcopy-md-subtle-font-size);
  font-weight: var(--typography-microcopy-md-subtle-font-weight);
  line-height: var(--typography-microcopy-md-subtle-line-height);
  letter-spacing: var(--typography-microcopy-md-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.typography-microcopy-md-strong {
  font-family: var(--typography-microcopy-md-strong-font-family);
  font-size: var(--typography-microcopy-md-strong-font-size);
  font-weight: var(--typography-microcopy-md-strong-font-weight);
  line-height: var(--typography-microcopy-md-strong-line-height);
  letter-spacing: var(--typography-microcopy-md-strong-letter-spacing);
}
.esa-icon {
  --_icon-size: var(--icon-size-md, 20px);
  width: var(--_icon-size);
  height: var(--_icon-size);
  color: inherit;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #43608a _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-content-muted`: #7c7c7c _(component)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-700`: #525252 _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg`: #ffffffeb _(component)_
- `--bcn-helpbar-fg-muted`: #ffffffb8 _(component)_
- `--bcn-helpbar-hover-bg`: #ffffff1a _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-subtle`: #efefef _(component)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-default`: #3d3d3d _(semantic)_
- `--color-content-default-knockout`: #fcfcfc _(semantic)_
- `--color-content-default-secondary`: #525252 _(semantic)_
- `--color-content-default-tertiary`: #656565 _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 350 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-microcopy-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-font-weight`: 500 _(semantic)_
- `--typography-microcopy-md-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-md-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-md-subtle-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-microcopy-md-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-md-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-md-subtle-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
