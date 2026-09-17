# The feed — four views

The working half of the page: one esa-tab-layout carrying All, Important, To-do and Ongoing. Each tab carries a count; the panel below is the two-pane workspace and nothing else.

## Key decisions
- NO TEXT ABOUT THE PAGE. An earlier pass gave every view a byline, every pane a lede, and every rail row its count in words beside the badge that already carried it. All of it went: a view that needs a sentence explaining what it is has the wrong name, and a badge plus "54 duties" is two controls saying one thing.
- PANES ARE NOT CAPPED. Showing the first 25 of 70 meant the rail badge and the pane disagreed, patched with a sentence. The pane scrolls; 70 rows is not a problem worth a paragraph.
- EVERY VIEW IS TWO PANES: the timeline or list on the LEFT, the obligations related to the selected parent on the RIGHT. This geometry is the one part of the inbox that was always right and it is kept — it is what makes "why am I seeing this" structural rather than a sentence someone wrote. What a PARENT is varies by view: an event in All and To-do, a heading in Important. One frame serves all three so the page reads the same wherever you are.
- THE VIEWS REPLACE THE OPEN / SEEN PIVOT. The pivot asked "have you filed this", which is a question a feed of standing duties cannot answer. They ask the two that have answers: what is on right now, and what happened that I did not already know.
- THE FEED CARRIES WHAT YOU DID NOT ALREADY KNOW. This rule decides what reaches the timeline. An observation qualifies — nobody knew. A phase you entered does not: you already knew, so it never becomes a row.
- ALL GROUPS BY EVENT, NEVER BY DUTY. One sighting switches on several duties, so a flat list repeats the same sighting once per duty. Prod already returns this parent/children shape — ObservationComplianceDto is described in its own code as an observation together with the commitments it triggers.
- NO SEVERITY ORDERING. It appears nowhere in the source documents — we invented it and dropped it. A timeline sorts by time. To-do has nothing to sort on at all in this fixture, because no obligation carries a notice window.
- THREE VIEWS SHARE ONE SPINE. All, Important and To-do are three cuts of the SAME event set — everything, my subject areas, and what is owed. Important filtered the whole registry by subject and ignored events until 2026-09-16, which left one view that had plainly wandered in from another page. An event that raised nothing in the reader’s areas does not appear in Important at all.
- IMPORTANT IS PER-USER AND NOTHING ABOUT IT LANDS ON THE ENTITY — a saved filter, not a field. The saved areas are validated against the fixture at build time and THROW if one is missing. An earlier pass authored an area that did not exist and silently fell back to the largest, so the page named a filter it was not applying.
- ONGOING IS THE ODD ONE BY DESIGN. It is the inventory rather than the timeline, and the only view answering "what is on right now". It must not scroll like a feed: seasons and phases move slowly, so it is grouped by the reason each duty is in force.

## Gotchas
- EVERY PANEL RENDERS AT BUILD TIME — the rule inherited from the evidence inbox. Astro is compile-time; a panel assembled from a template literal bypasses the design system and no gate can see it. esa-tab-layout only reveals a panel that is already in the light DOM under slot="panel-N".
- esa-tab-layout takes `tabs` as an Array property. Passing it as a JSON string attribute works because Lit parses JSON for Array-typed attributes — do not try to build the tab list from markup.
- THE NOTIFY CLASS HAS THREE MEMBERS IN THIS FIXTURE, and none carries a notice window. To-do shows 4 rows across 4 events, all of them the same generic covered-species reporting duty raised by different sightings. An esa-alert-box under the rail states the shortfall rather than letting an empty view read as a bug.
- THE ROW LABEL IS THE TITLE, NEVER THE TRIGGER. Every duty carries a vivid trigger line and it is tempting to use it as the label. A list labelled with triggers reads as a list of ACCUSATIONS rather than duties in force. The trigger belongs on the record and in the event-driven views.
- A DUTY WRITTEN FOR ANY COVERED SPECIES CARRIES NO SPECIES LIST. A species-scoped predicate alone misses it, which is why To-do was empty on the first pass over this fixture. The covered-species predicate is what raises it.
- CLASS IS A CATEGORICAL FACET, NOT A STATUS — a quiet secondary badge at xs, the same idiom the wizard card uses. No colour carries meaning, and there is no status to carry.

## Done when
- Four tabs read All (5), Important (66), To-do (4) and Ongoing (317).
- All lists five observations in the rail, the giant garter snake sighting first; selecting one shows the duties it switched on in the right pane.
- Important lists the same events minus the turbidity exceedance, which raised nothing in the saved subject areas.
- Ongoing lists five reasons — two phases and three activities — and no event.
- To-do carries four rows and an alert box explaining that the fixture drafted three Notify duties and no notice windows.
- No status, verdict, severity, "seen" control or filing verb appears anywhere on the page.

## Markup
```html
<section class="bcn-tf">
  <esa-tab-layout
    tabs='[{"label":"All"},{"label":"Important"},{"label":"To-do"},{"label":"Ongoing"}]'
    appearance="underline"
    size="md"
    active-index="0"
    variant="underline"
    ><div slot="panel-0">
      <div class="bcn-tw" data-tw-view="all">
        <div class="bcn-tw__panes sidebar" data-gap="md">
          <div class="bcn-tw__rail">
            <h3 class="typography-label-sm bcn-tw__rail-label">Events</h3>
            <ul class="bcn-tw__list" role="listbox" aria-label="Events">
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="true"
                  data-tw-pick="obs-ggs"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                        ></path>
                        <path
                          d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        ></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Giant garter snake seen in an irrigation canal at the work edge</span
                  ><span class="bcn-tw__row-when">45m ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="obs-hawk"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                        ></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Injured Swainson's hawk recovered near a haul road</span
                  ><span class="bcn-tw__row-when">2h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="dmr-daily"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                        ></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Daily monitoring report — in-water work at the intake</span
                  ><span class="bcn-tw__row-when">16h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="obs-trbl"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
                        ></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Active tricolored blackbird colony found in the staging buffer</span
                  ><span class="bcn-tw__row-when">18h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="sr-turbid"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                        <path
                          d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
                        ></path>
                        <path d="M12 11h4"></path>
                        <path d="M12 16h4"></path>
                        <path d="M8 11h.01"></path>
                        <path d="M8 16h.01"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Turbidity above the approved threshold downstream of dewatering</span
                  ><span class="bcn-tw__row-when">22h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="obs-cts"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                        ></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >California tiger salamander found inside exclusion fencing</span
                  ><span class="bcn-tw__row-when">2d ago</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="bcn-tw__detail">
            <section
              class="bcn-tw__pane"
              data-tw-pane="obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Giant garter snake seen in an irrigation canal at the work edge
                </h3>
                <p class="bcn-tw__pane-when">45m ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Resource</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">giant garter snake</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Buffer</dt>
                    <dd class="typography-body-sm">200 ft</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">A. Mendes, biological monitor</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Avoidance Measures in Unmapped Habitat"
                        >Avoidance Measures in Unmapped Habitat</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="2 requirements">2</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMEQGNEXHJ6WJ7QGSE8T9"
                        data-code="COA 10.7"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.7</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Apply Avoidance Measures to Unmapped Species Occurrences"
                          >Apply Avoidance Measures to Unmapped Species Occurrences</span
                        >
                      </li>
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMES8P77HCP3S39H7JS59"
                        data-code="COA 10.8"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.8</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Apply Avoidance Measures to Unmapped Suitable Habitat"
                          >Apply Avoidance Measures to Unmapped Suitable Habitat</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Work Stoppage on Covered Species Encounter"
                        >Work Stoppage on Covered Species Encounter</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Injured Swainson's hawk recovered near a haul road
                </h3>
                <p class="bcn-tw__pane-when">2h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Compliance Concern</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">North haul road</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">swainson's hawk</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">R. Osei, biological monitor</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFW"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Care of covered species injured by covered activities"
                        >Care of covered species injured by covered activities</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHV7XKMQW8P8NFN047XX"
                        data-code="COA 11.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Transport Injured Covered Species to Rehabilitation Facility"
                          >Transport Injured Covered Species to Rehabilitation
                          Facility</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Work Stoppage on Covered Species Encounter"
                        >Work Stoppage on Covered Species Encounter</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="dmr-daily"
              hidden=""
              aria-label="Daily monitoring report — in-water work at the intake"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Daily monitoring report — in-water work at the intake
                </h3>
                <p class="bcn-tw__pane-when">16h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Package</dt>
                    <dd class="typography-body-sm">CP-2 Intake</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Weather</dt>
                    <dd class="typography-body-sm">Overcast, light wind</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Air temp</dt>
                    <dd class="typography-body-sm">68°F</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Precipitation</dt>
                    <dd class="typography-body-sm">None</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Field person</dt>
                    <dd class="typography-body-sm">D. Vance, field person</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6G9X"
                  data-class="monitor"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Monitor</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Watch for distressed or injured fish during pile driving"
                        >Watch for distressed or injured fish during pile driving</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMKSA5B31E9JAZ7XQPKZH"
                        data-code="COA 11.33"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.33</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Monitor Work Area for Distressed or Injured Fish"
                          >Monitor Work Area for Distressed or Injured Fish</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X5"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Dewatering pump shutdown"
                        >Dewatering pump shutdown</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMP4K7W5XYW0R2Z17AQ14"
                        data-code="COA 11.61"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.61</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Shut Down Pump and Contact Biologist if GGS Seen at Intake Screen"
                          >Shut Down Pump and Contact Biologist if GGS Seen at Intake
                          Screen</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="obs-trbl"
              hidden=""
              aria-label="Active tricolored blackbird colony found in the staging buffer"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Active tricolored blackbird colony found in the staging buffer
                </h3>
                <p class="bcn-tw__pane-when">18h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Nesting Bird</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Staging area 2</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">tricolored blackbird</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Buffer</dt>
                    <dd class="typography-body-sm">1300 ft</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">J. Whitfield, avian lead</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="sr-turbid"
              hidden=""
              aria-label="Turbidity above the approved threshold downstream of dewatering"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Turbidity above the approved threshold downstream of dewatering
                </h3>
                <p class="bcn-tw__pane-when">22h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Compliance point 3</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Activity</dt>
                    <dd class="typography-body-sm">Dewatering and fish isolation</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">On site</dt>
                    <dd class="typography-body-sm">Water quality team, M. Okafor</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">Water quality team</dd>
                  </div>
                </dl>
              </header>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKM0HYHZPHBXBXTP9J36"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Storm Onset Work Restriction"
                        >Storm Onset Work Restriction</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDND6Q88AT76ZWVB5VRY"
                        data-code="COA 9.7"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.7</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Restrict Sediment-Generating Work Ahead of Storm Onset"
                          >Restrict Sediment-Generating Work Ahead of Storm Onset</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="obs-cts"
              hidden=""
              aria-label="California tiger salamander found inside exclusion fencing"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  California tiger salamander found inside exclusion fencing
                </h3>
                <p class="bcn-tw__pane-when">2d ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Compliance Concern</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Reach 1 — upland margin</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">california tiger salamander</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">Wildlife capture crew</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Work Stoppage on Covered Species Encounter"
                        >Work Stoppage on Covered Species Encounter</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div slot="panel-1">
      <div class="bcn-tw" data-tw-view="important">
        <div class="bcn-tw__panes sidebar" data-gap="md">
          <div class="bcn-tw__rail">
            <h3 class="typography-label-sm bcn-tw__rail-label">In your filter</h3>
            <ul class="bcn-tw__list" role="listbox" aria-label="In your filter">
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="true"
                  data-tw-pick="imp-obs-ggs"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                        ></path>
                        <path
                          d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        ></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Giant garter snake seen in an irrigation canal at the work edge</span
                  ><span class="bcn-tw__row-when">45m ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="imp-obs-hawk"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                        ></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Injured Swainson's hawk recovered near a haul road</span
                  ><span class="bcn-tw__row-when">2h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="imp-obs-trbl"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
                        ></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Active tricolored blackbird colony found in the staging buffer</span
                  ><span class="bcn-tw__row-when">18h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="imp-obs-cts"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                        ></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >California tiger salamander found inside exclusion fencing</span
                  ><span class="bcn-tw__row-when">2d ago</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="bcn-tw__detail">
            <section
              class="bcn-tw__pane"
              data-tw-pane="imp-obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Giant garter snake seen in an irrigation canal at the work edge
                </h3>
                <p class="bcn-tw__pane-when">45m ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Resource</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">giant garter snake</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Buffer</dt>
                    <dd class="typography-body-sm">200 ft</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">A. Mendes, biological monitor</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEH"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Avoidance Measures in Unmapped Habitat"
                        >Avoidance Measures in Unmapped Habitat</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="2 requirements">2</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMEQGNEXHJ6WJ7QGSE8T9"
                        data-code="COA 10.7"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.7</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Apply Avoidance Measures to Unmapped Species Occurrences"
                          >Apply Avoidance Measures to Unmapped Species Occurrences</span
                        >
                      </li>
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMES8P77HCP3S39H7JS59"
                        data-code="COA 10.8"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.8</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Apply Avoidance Measures to Unmapped Suitable Habitat"
                          >Apply Avoidance Measures to Unmapped Suitable Habitat</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Work Stoppage on Covered Species Encounter"
                        >Work Stoppage on Covered Species Encounter</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="imp-obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Injured Swainson's hawk recovered near a haul road
                </h3>
                <p class="bcn-tw__pane-when">2h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Compliance Concern</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">North haul road</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">swainson's hawk</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">R. Osei, biological monitor</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3K6F3VSR2GCE566TNFW"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Care of covered species injured by covered activities"
                        >Care of covered species injured by covered activities</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHV7XKMQW8P8NFN047XX"
                        data-code="COA 11.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Transport Injured Covered Species to Rehabilitation Facility"
                          >Transport Injured Covered Species to Rehabilitation
                          Facility</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Work Stoppage on Covered Species Encounter"
                        >Work Stoppage on Covered Species Encounter</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="imp-obs-trbl"
              hidden=""
              aria-label="Active tricolored blackbird colony found in the staging buffer"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Active tricolored blackbird colony found in the staging buffer
                </h3>
                <p class="bcn-tw__pane-when">18h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Nesting Bird</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Staging area 2</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">tricolored blackbird</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Buffer</dt>
                    <dd class="typography-body-sm">1300 ft</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">J. Whitfield, avian lead</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="imp-obs-cts"
              hidden=""
              aria-label="California tiger salamander found inside exclusion fencing"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  California tiger salamander found inside exclusion fencing
                </h3>
                <p class="bcn-tw__pane-when">2d ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Compliance Concern</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Reach 1 — upland margin</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">california tiger salamander</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">Wildlife capture crew</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEM"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Work Stoppage on Covered Species Encounter"
                        >Work Stoppage on Covered Species Encounter</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
    <div slot="panel-2" class="stack" data-gap="md">
      <div class="bcn-tw" data-tw-view="todo">
        <div class="bcn-tw__panes sidebar" data-gap="md">
          <div class="bcn-tw__rail">
            <h3 class="typography-label-sm bcn-tw__rail-label">
              Events that owe a notice
            </h3>
            <ul class="bcn-tw__list" role="listbox" aria-label="Events that owe a notice">
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="true"
                  data-tw-pick="todo-obs-ggs"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
                        ></path>
                        <path
                          d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                        ></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Giant garter snake seen in an irrigation canal at the work edge</span
                  ><span class="bcn-tw__row-when">45m ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="todo-obs-hawk"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                        ></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Injured Swainson's hawk recovered near a haul road</span
                  ><span class="bcn-tw__row-when">2h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="todo-obs-trbl"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
                        ></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >Active tricolored blackbird colony found in the staging buffer</span
                  ><span class="bcn-tw__row-when">18h ago</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="todo-obs-cts"
                >
                  <span class="bcn-tw__row-glyph" aria-hidden="true"
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
                          d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
                        ></path>
                        <path d="M12 9v4"></path>
                        <path d="M12 17h.01"></path></svg></span></span
                  ><span class="bcn-tw__row-label"
                    >California tiger salamander found inside exclusion fencing</span
                  ><span class="bcn-tw__row-when">2d ago</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="bcn-tw__detail">
            <section
              class="bcn-tw__pane"
              data-tw-pane="todo-obs-ggs"
              aria-label="Giant garter snake seen in an irrigation canal at the work edge"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Giant garter snake seen in an irrigation canal at the work edge
                </h3>
                <p class="bcn-tw__pane-when">45m ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Resource</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Reach 3 — canal crossing</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">giant garter snake</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Buffer</dt>
                    <dd class="typography-body-sm">200 ft</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">A. Mendes, biological monitor</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="todo-obs-hawk"
              hidden=""
              aria-label="Injured Swainson's hawk recovered near a haul road"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Injured Swainson's hawk recovered near a haul road
                </h3>
                <p class="bcn-tw__pane-when">2h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Compliance Concern</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">North haul road</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">swainson's hawk</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">R. Osei, biological monitor</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="todo-obs-trbl"
              hidden=""
              aria-label="Active tricolored blackbird colony found in the staging buffer"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Active tricolored blackbird colony found in the staging buffer
                </h3>
                <p class="bcn-tw__pane-when">18h ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Nesting Bird</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Staging area 2</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">tricolored blackbird</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Buffer</dt>
                    <dd class="typography-body-sm">1300 ft</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">J. Whitfield, avian lead</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="todo-obs-cts"
              hidden=""
              aria-label="California tiger salamander found inside exclusion fencing"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  California tiger salamander found inside exclusion fencing
                </h3>
                <p class="bcn-tw__pane-when">2d ago</p>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Type</dt>
                    <dd class="typography-body-sm">Compliance Concern</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Site</dt>
                    <dd class="typography-body-sm">Reach 1 — upland margin</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Species</dt>
                    <dd class="typography-body-sm">california tiger salamander</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Reported by</dt>
                    <dd class="typography-body-sm">Wildlife capture crew</dd>
                  </div>
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">Flagged</dt>
                    <dd class="typography-body-sm">Concern</dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYV"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Ongoing demonstration of mitigation performance during the permit term"
                        >Ongoing demonstration of mitigation performance during the permit
                        term</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMXB61WXZTSWY83SJ53JY"
                        data-code="COA 13.3"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 13.3</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Provide Ongoing Demonstration of Mitigation Performance"
                          >Provide Ongoing Demonstration of Mitigation Performance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3QSDK9GEQ62EWCXSKYW"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor daily communication and immediate reports to the Designated Biologist"
                        >Biological Monitor daily communication and immediate reports to
                        the Designated Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCKEBRF744X854M9ESF"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Daily to Designated Biologist and Flag Non-Compliance"
                          >Report Daily to Designated Biologist and Flag
                          Non-Compliance</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKH7P3XH3JHE4Y9KPEK"
                  data-class="notify"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Notify</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Covered Species Encounter Reporting to the Biologist"
                        >Covered Species Encounter Reporting to the Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHSDAW774SZWKJC8RQZB"
                        data-code="COA 11.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Report Covered Species Encounters and Halt Work"
                          >Report Covered Species Encounters and Halt Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div class="esa-alert-box esa-alert-box--info typography-body-sm">
        <div class="esa-alert-box__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <div class="esa-alert-box__body">
          <div class="esa-alert-box__message">
            A duty reaches this view when an event leaves somebody owing a notice — class
            Notify, and only Notify. Monitor is a standing cadence: something that is ON
            rather than owed, so it sits in Ongoing. Adhere is a rule you comply with, and
            Roster is a standing qualification. This permit drafted 3 Notify duties out
            of333, against 64 Monitor — which is why this view is short. The hand-built
            registry of the same permits had 50 notices; nobody has yet checked whether
            the drafting pass routes them to Actions instead.
          </div>
        </div>
      </div>
    </div>
    <div slot="panel-3" class="stack" data-gap="md">
      <div class="bcn-tw" data-tw-view="ongoing">
        <div class="bcn-tw__panes sidebar" data-gap="md">
          <div class="bcn-tw__rail">
            <h3 class="typography-label-sm bcn-tw__rail-label">Why these are in force</h3>
            <ul class="bcn-tw__list" role="listbox" aria-label="Why these are in force">
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="true"
                  data-tw-pick="act-dewatering-and-fish-isolation"
                >
                  <span class="bcn-tw__row-label"
                    >Dewatering and fish isolation is under way</span
                  >
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="act-in-water-and-in-channel-work"
                >
                  <span class="bcn-tw__row-label"
                    >In-water and in-channel work is under way</span
                  >
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="bcn-tw__row"
                  role="option"
                  aria-selected="false"
                  data-tw-pick="roster-standing"
                >
                  <span class="bcn-tw__row-label">Who is qualified to do the work</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="bcn-tw__detail">
            <section
              class="bcn-tw__pane"
              data-tw-pane="act-dewatering-and-fish-isolation"
              aria-label="Dewatering and fish isolation is under way"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  Dewatering and fish isolation is under way
                </h3>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">In force because</dt>
                    <dd class="typography-body-sm">
                      In force while this activity is happening on site.
                    </dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3GTRYAK61ZHAYGX6GA0"
                  data-class="monitor"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Monitor</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Fisheries biologist present to rescue fish during dewatering"
                        >Fisheries biologist present to rescue fish during
                        dewatering</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMM0FVKV7MZMMSVC11NPB"
                        data-code="COA 11.37"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.37</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Station Fisheries Biologist Onsite to Rescue Fish During Dewatering"
                          >Station Fisheries Biologist Onsite to Rescue Fish During
                          Dewatering</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3GVB9GY756CNBCP3TGT"
                  data-class="monitor"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Monitor</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biologist present to salvage snakes during dewatering"
                        >Biologist present to salvage snakes during dewatering</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMP4K7W5XYW0R2Z17AQ13"
                        data-code="COA 11.61"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.61</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Station Biologist to Salvage GGS During Dewatering"
                          >Station Biologist to Salvage GGS During Dewatering</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y374X4RKETDHB3S1M1MZ"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Dewatering rate limit"
                        >Dewatering rate limit</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMM0FVKV7MZMMSVC11NPC"
                        data-code="COA 11.37"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.37</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Halt Dewatering When Water Levels Drop Too Quickly for Salvage"
                          >Halt Dewatering When Water Levels Drop Too Quickly for
                          Salvage</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3757AMQWDRRZPPRX5X5"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Dewatering pump shutdown"
                        >Dewatering pump shutdown</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMP4K7W5XYW0R2Z17AQ14"
                        data-code="COA 11.61"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.61</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Shut Down Pump and Contact Biologist if GGS Seen at Intake Screen"
                          >Shut Down Pump and Contact Biologist if GGS Seen at Intake
                          Screen</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXZ"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Dewatering Pump Intake Screening"
                        >Dewatering Pump Intake Screening</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMM0FVKV7MZMMSVC11NPA"
                        data-code="COA 11.37"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.37</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Screen Dewatering Pump Intakes to Prevent Fish Entrainment"
                          >Screen Dewatering Pump Intakes to Prevent Fish
                          Entrainment</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYG0"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Dewatering Window"
                        >Dewatering Window</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMP4K7W5XYW0R2Z17AQ16"
                        data-code="COA 11.61"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.61</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Limit Dewatering to the April 15–October 1 Window"
                          >Limit Dewatering to the April 15–October 1 Window</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="act-in-water-and-in-channel-work"
              hidden=""
              aria-label="In-water and in-channel work is under way"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">
                  In-water and in-channel work is under way
                </h3>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">In force because</dt>
                    <dd class="typography-body-sm">
                      In force while this activity is happening on site.
                    </dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKXGW0MHG5S1F0JJR7H"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Oil Absorbent Booms in Place"
                        >Oil Absorbent Booms in Place</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMK3ZJQ9BHNEKAKFQY2VM"
                        data-code="COA 11.22"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.22</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Use Oil-Absorbent Booms Near Water"
                          >Use Oil-Absorbent Booms Near Water</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXN"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Daily In-Water Work Limit"
                        >Daily In-Water Work Limit</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="2 requirements">2</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMKM1QM5KYNMAGYR6THA7"
                        data-code="COA 11.31.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.31.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Enforce Daily Sunset-to-Sunrise In-Water Work Curfew"
                          >Enforce Daily Sunset-to-Sunrise In-Water Work Curfew</span
                        >
                      </li>
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMKQJF35M22DBMHN9PNW7"
                        data-code="COA 11.32"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.32</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Enforce Daily Sunset-to-Sunrise In-Water Work Curfew"
                          >Enforce Daily Sunset-to-Sunrise In-Water Work Curfew</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGXQ"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="In-Water Work Window During Construction"
                        >In-Water Work Window During Construction</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMKNRCMV0V8XY1Q4V7P6R"
                        data-code="COA 11.31.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.31.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Restrict In-Water Construction to June 1–Oct 31 Window"
                          >Restrict In-Water Construction to June 1–Oct 31 Window</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYFX"
                  data-class="adhere"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Adhere</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="In-Channel Work Window"
                        >In-Channel Work Window</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMP2T4KRS4836CF7YNNNX"
                        data-code="COA 11.60"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.60</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Confine In-Channel Work to the Inactive-Season Window and Scope"
                          >Confine In-Channel Work to the Inactive-Season Window and
                          Scope</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
            <section
              class="bcn-tw__pane"
              data-tw-pane="roster-standing"
              hidden=""
              aria-label="Who is qualified to do the work"
            >
              <header class="bcn-tw__pane-head">
                <h3 class="bcn-tw__pane-title">Who is qualified to do the work</h3>
                <dl class="bcn-tw__facts">
                  <div class="bcn-tw__fact">
                    <dt class="typography-label-xs">In force because</dt>
                    <dd class="typography-body-sm">
                      Standing qualifications — always in force. These move when staff
                      change, not when something is seen, and Beacon has no personnel
                      event today.
                    </dd>
                  </div>
                </dl>
              </header>
              <div class="bcn-tw__verbs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-expand="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 15 5 5 5-5"></path>
                            <path d="m7 9 5-5 5 5"></path></svg></span
                        >Expand all</span
                      ></span
                    >
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    data-tw-collapse="true"
                  >
                    <span class="esa-button__label"
                      ><span class="bcn-tw__verb"
                        ><span class="esa-icon esa-icon--xs" aria-hidden="true"
                          ><svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            focusable="false"
                          >
                            <path d="m7 20 5-5 5 5"></path>
                            <path d="m7 4 5 5 5-5"></path></svg></span
                        >Collapse all</span
                      ></span
                    >
                  </button></span
                >
              </div>
              <ul class="bcn-tw__duties">
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y34HZ9RH8ZC58QF7AHXD"
                  data-class="roster"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Roster</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Permitted personnel for studies that may take Covered Fish Species"
                        >Permitted personnel for studies that may take Covered Fish
                        Species</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMGSM98FYZAKW9PV13PEW"
                        data-code="COA 10.22"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 10.22</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Ensure Permitted Personnel Conduct Covered Species Studies"
                          >Ensure Permitted Personnel Conduct Covered Species
                          Studies</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y34JV1PFVYQEE7T447XE"
                  data-class="roster"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Roster</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Designated Biologist and Fisheries Biologist qualifications and responsibilities"
                        >Designated Biologist and Fisheries Biologist qualifications and
                        responsibilities</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDAT8XEFVPD8J1CHZG7X"
                        data-code="COA 9.2.1"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.1</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Maintain Qualified Designated/Fisheries Biologist Credentials"
                          >Maintain Qualified Designated/Fisheries Biologist
                          Credentials</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y34JV1PFVYQEE7T447XF"
                  data-class="roster"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Roster</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Biological Monitor qualifications and permitted scope"
                        >Biological Monitor qualifications and permitted scope</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMDCJSES4G0RSSPXC7J7J"
                        data-code="COA 9.2.2"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 9.2.2</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Maintain Qualified Biological Monitor Scope of Work"
                          >Maintain Qualified Biological Monitor Scope of Work</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6Y3TQ8SHJTZ29GDGETEXW"
                  data-class="roster"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Roster</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Handling and relocation restricted to the approved Designated Biologist"
                        >Handling and relocation restricted to the approved Designated
                        Biologist</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMS9PZAA7R0G27BRK7FGS"
                        data-code="COA 11.108"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.108</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Collect, Handle and Relocate Threatened MALI Plants"
                          >Collect, Handle and Relocate Threatened MALI Plants</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKYBZ9A7EECEZB6FGY2"
                  data-class="roster"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Roster</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Licensed Pesticide Applicator"
                        >Licensed Pesticide Applicator</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="2 requirements">2</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHYSHPSSPHZ1CGQNSKGV"
                        data-code="COA 11.4"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.4</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Apply Sprays via Licensed Applicator Within Wind Speed Limit"
                          >Apply Sprays via Licensed Applicator Within Wind Speed
                          Limit</span
                        >
                      </li>
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMHYSHPSSPHZ1CGQNSKGX"
                        data-code="COA 11.4"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.4</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Keep Herbicide and Pesticide Application 300 Feet from Aquatic Habitat"
                          >Keep Herbicide and Pesticide Application 300 Feet from Aquatic
                          Habitat</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
                <li
                  class="bcn-swoc"
                  data-swo-card=""
                  data-id="obl_01M2G6YKKZS8T1WDX0E4QXHYGC"
                  data-class="roster"
                  draggable="false"
                >
                  <details class="bcn-swoc__node" data-swo-branch="">
                    <summary class="bcn-swoc__main">
                      <span class="bcn-swoc__chevron" aria-hidden="true"
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
                            <path d="m9 18 6-6-6-6"></path></svg></span></span
                      ><span class="bcn-swoc__class" data-swo-class-tag="">Roster</span
                      ><span
                        class="bcn-swoc__title bcn-swoc__title--static"
                        data-swo-text="Approved Wildlife Handler"
                        >Approved Wildlife Handler</span
                      ><span data-swo-count="obligation"
                        ><span class="bcn-swcb" aria-label="1 requirements">1</span></span
                      >
                    </summary>
                    <ul class="bcn-swoc__reqs">
                      <li
                        class="bcn-swoc__req"
                        draggable="false"
                        data-req="req_01M2ESMRD7GNZNESZEXHQR204E"
                        data-code="COA 11.92"
                      >
                        <span class="bcn-cbadge bcn-cbadge--sm">COA 11.92</span
                        ><span
                          class="bcn-swoc__req-name"
                          data-swo-text="Restrict TRBL Handling to CDFW-Approved Biologist"
                          >Restrict TRBL Handling to CDFW-Approved Biologist</span
                        >
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
      <div class="esa-alert-box esa-alert-box--info typography-body-sm">
        <div class="esa-alert-box__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <div class="esa-alert-box__body">
          <div class="esa-alert-box__message">
            The duties in each group are read from the data — a construction activity
            group holds the obligations whose requirements name that activity, and the
            qualifications group holds every Roster duty. What is AUTHORED is which
            activities are under way today: none of the333 obligations records that it is
            currently in force, and that gap is the last thing between this view and a
            working one.
          </div>
        </div>
      </div>
    </div></esa-tab-layout
  >
</section>
```

## Styles
```css
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-cbadge {
  font-family: var(--typography-font-family-mono);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
  border-radius: var(--radius-100);
  white-space: nowrap;
  flex-shrink: 0;
  display: inline-block;
}
.bcn-cbadge--md {
  font-size: var(--font-size-100);
  padding: 1px var(--spacing-200);
}
.bcn-cbadge--sm {
  padding: 1px var(--spacing-150);
  font-size: 0.75rem;
}
.bcn-cbadge--neutral {
  font-family: var(--typography-font-family-sans);
  color: var(--bcn-gray-700);
  background: var(--bcn-gray-100);
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.sidebar-toggle {
  border-radius: var(--spacing-050);
  width: 32px;
  height: 32px;
  color: var(--bcn-gray-600);
  cursor: pointer;
  background: 0 0;
  border: none;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition:
    background 0.15s,
    color 0.15s;
  display: flex;
}
.sidebar-toggle:hover {
  background: var(--bcn-gray-200);
  color: var(--color-background-brand);
}
.sidebar-toggle:focus-visible {
  outline: 2px solid var(--color-background-brand);
  outline-offset: 2px;
}
.sidebar-toggle__icon {
  transition: transform 0.15s;
}
.sidebar-toggle--collapsed .sidebar-toggle__icon {
  transform: scaleX(-1);
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
.sidebar-header {
  padding: var(--spacing-300) var(--spacing-400);
  flex-shrink: 0;
  transition: padding 0.2s ease-in-out;
}
.side-nav.collapsed .sidebar-header {
  padding: var(--spacing-300) var(--spacing-200);
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
.bcn-swoc__title--static {
  cursor: default;
  text-align: left;
}
.bcn-swoc {
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  color: var(--color-content-default);
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.8125rem;
  list-style: none;
  transition:
    border-color 0.12s,
    box-shadow 0.12s;
}
.bcn-swoc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden] {
  display: none;
}
.bcn-swoc.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__node {
  min-width: 0;
}
.bcn-swoc__main {
  align-items: center;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-300);
  cursor: pointer;
  border-radius: 6px;
  min-width: 0;
  list-style: none;
  transition:
    background-color 0.12s,
    box-shadow 0.12s;
  display: flex;
}
.bcn-swoc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main.is-over {
  box-shadow: inset 0 0 0 2px var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 6%, transparent);
}
.bcn-swoc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__grip {
  color: var(--bcn-gray-400);
  cursor: grab;
  flex-shrink: 0;
  display: inline-flex;
}
.bcn-swoc__grip:active {
  cursor: grabbing;
}
.bcn-swoc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class {
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
  background: color-mix(in srgb, var(--_hue) 14%, white);
  color: color-mix(in srgb, var(--_hue) 78%, black);
  flex-shrink: 0;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1.5;
  display: inline-flex;
}
.bcn-swoc[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  min-width: 0;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  border: none;
  flex: 1;
  padding: 0;
  overflow: hidden;
}
.bcn-swoc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb {
  border-radius: var(--radius-100);
  width: 22px;
  height: 22px;
  color: var(--color-content-default-tertiary);
  cursor: pointer;
  opacity: 0;
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  transition:
    opacity 0.12s,
    color 0.12s,
    background-color 0.12s;
  display: inline-flex;
}
.bcn-swoc__main:hover .bcn-swoc__verb,
.bcn-swoc__req:hover .bcn-swoc__verb,
.bcn-swoc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swoc__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150) calc(var(--spacing-300) + 22px);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__reqs:empty:after {
  content: "No requirements — drop one here or remove this obligation.";
  padding: var(--spacing-100) var(--spacing-200);
  color: var(--color-content-default-tertiary);
  font-style: italic;
  display: block;
}
.bcn-swoc__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__req.is-new {
  animation: 0.9s ease-out bcn-swoc-flash;
}
.bcn-swoc__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swoc__also {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  flex-shrink: 0;
  font-size: 0.6875rem;
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-xs {
  font-family: var(--typography-label-xs-font-family);
  font-size: var(--typography-label-xs-font-size);
  font-weight: var(--typography-label-xs-font-weight);
  line-height: var(--typography-label-xs-line-height);
  letter-spacing: var(--typography-label-xs-letter-spacing);
}
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-xs-strong {
  font-family: var(--typography-label-xs-strong-font-family);
  font-size: var(--typography-label-xs-strong-font-size);
  font-weight: var(--typography-label-xs-strong-font-weight);
  line-height: var(--typography-label-xs-strong-line-height);
  letter-spacing: var(--typography-label-xs-strong-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.bcn-swcb {
  min-width: 22px;
  padding: 2px var(--spacing-150);
  border-radius: var(--radius-100);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  font-family: var(--typography-font-family-sans);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
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
.bcn-tw__panes {
  --sidebar-width: 22rem;
  --sidebar-content-min: 50%;
  align-items: stretch;
}
.bcn-tw__rail,
.bcn-tw__detail {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-md);
  block-size: 38rem;
  min-block-size: 0;
  overflow: hidden;
}
.bcn-tw__rail {
  flex-direction: column;
  display: flex;
}
.bcn-tw__rail-label {
  padding: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
  color: var(--color-content-default-tertiary);
  flex: none;
  margin: 0;
}
.bcn-tw__list {
  flex: auto;
  margin: 0;
  padding: 0;
  list-style: none;
  overflow-y: auto;
}
.bcn-tw__row {
  align-items: baseline;
  gap: var(--spacing-050) var(--spacing-200);
  inline-size: 100%;
  padding: var(--spacing-300);
  border: none;
  border-block-end: 1px solid var(--color-border-default-subtle);
  text-align: start;
  font: inherit;
  color: inherit;
  cursor: pointer;
  background: 0 0;
  grid-template-columns: auto 1fr auto;
  display: grid;
}
.bcn-tw__row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-tw__row:focus-visible {
  outline: 2px solid var(--color-border-default-focus);
  outline-offset: -2px;
}
.bcn-tw__row[aria-selected="true"] {
  background: var(--color-background-elevation-sunken);
}
.bcn-tw__row[aria-selected="true"] .bcn-tw__row-label {
  font-weight: 600;
}
.bcn-tw__row-glyph {
  color: var(--color-content-default-tertiary);
  grid-column: 1;
}
.bcn-tw__row-label {
  text-overflow: ellipsis;
  white-space: nowrap;
  grid-column: 2;
  min-width: 0;
  line-height: 1.4;
  overflow: hidden;
}
.bcn-tw__row-when {
  color: var(--color-content-default-tertiary);
  white-space: nowrap;
  grid-column: 3;
}
.bcn-tw__detail {
  overflow-y: auto;
}
.bcn-tw__pane:not([hidden]) {
  display: block;
}
.bcn-tw__pane-head {
  padding: var(--spacing-300);
  border-bottom: 1px solid var(--color-border-default-subtle);
}
.bcn-tw__pane-title {
  color: var(--color-content-default);
  margin: 0;
  line-height: 1.35;
}
.bcn-tw__pane-when {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default-tertiary);
}
.bcn-tw__facts {
  gap: var(--spacing-200) var(--spacing-500);
  margin: var(--spacing-300) 0 0;
  flex-wrap: wrap;
  display: flex;
}
.bcn-tw__fact {
  min-width: 0;
}
.bcn-tw__verbs {
  justify-content: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-200) var(--spacing-400) 0;
  display: flex;
}
.bcn-tw__verb {
  align-items: center;
  gap: var(--spacing-100);
  display: inline-flex;
}
.bcn-tw__duties {
  gap: var(--spacing-200);
  padding: var(--spacing-300) var(--spacing-400) var(--spacing-400);
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-tw__fact dt {
  color: var(--color-content-default-tertiary);
}
.bcn-tw__fact dd {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default);
}
.bcn-tw__blank {
  padding: var(--spacing-500);
}
.esa-alert-box {
  --_alert-bg: var(--color-background-utility-info-subtle, #fbfdff);
  --_alert-border: var(--color-border-utility-info, #acd8fc);
  --_alert-accent: var(--color-content-utility-info, #0d74ce);
  --_alert-icon-color: var(--_alert-accent);
  --_alert-title-color: var(--_alert-accent);
  --_alert-text-color: var(
    --alert-box-text-color,
    var(--color-content-default-secondary, #646464)
  );
  align-items: flex-start;
  gap: var(--spacing-300, 0.75rem);
  padding: var(--spacing-300, 0.75rem) var(--spacing-400, 1rem);
  border: var(--border-width-default, 1px) solid var(--_alert-border);
  border-radius: var(--radius-md, 0.5rem);
  background: var(--_alert-bg);
  display: flex;
}
.esa-alert-box--success {
  --_alert-bg: var(--color-background-utility-success-subtle, #fbfefc);
  --_alert-border: var(--color-border-utility-success, #adddc0);
  --_alert-accent: var(--color-content-utility-success, #218358);
}
.esa-alert-box--warning {
  --_alert-bg: var(--color-background-utility-warning-subtle, #fefdfb);
  --_alert-border: var(--color-border-utility-warning, #f3d673);
  --_alert-accent: var(--color-content-utility-warning, #ab6400);
}
.esa-alert-box--danger {
  --_alert-bg: var(--color-background-utility-danger-subtle, #fffcfc);
  --_alert-border: var(--color-border-utility-danger, #fdbdbe);
  --_alert-accent: var(--color-content-utility-danger, #ce2c31);
}
.esa-alert-box__icon {
  color: var(--_alert-icon-color);
  flex-shrink: 0;
  padding-top: 1px;
}
.esa-alert-box__body {
  flex: 1;
  min-width: 0;
}
.esa-alert-box__title {
  color: var(--_alert-title-color);
  margin-bottom: var(--spacing-050, 0.125rem);
  display: block;
}
.esa-alert-box__message {
  color: var(--_alert-text-color);
}
.esa-alert-box__dismiss {
  border-radius: var(--radius-sm, 0.25rem);
  width: 24px;
  height: 24px;
  color: var(--color-content-default-secondary, #646464);
  cursor: pointer;
  transition:
    color var(--transition-fast, 0.15s ease),
    background var(--transition-fast, 0.15s ease);
  background: 0 0;
  border: none;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: inline-flex;
}
.esa-alert-box__dismiss:hover {
  color: var(--color-content-default, #202020);
  background: var(--color-background-overlay-strong-hover, #0000000f);
}
.esa-alert-box__dismiss:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color, #3e9b4f);
  outline-offset: var(--focus-ring-offset, 2px);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.sidebar {
  --gap: var(--spacing-500, 1.5rem);
  --sidebar-width: 18rem;
  --sidebar-content-min: 60%;
  gap: var(--gap);
  flex-wrap: wrap;
  display: flex;
}
.sidebar > :first-child {
  flex-basis: var(--sidebar-width);
  flex-grow: 1;
}
.sidebar > :last-child {
  min-inline-size: var(--sidebar-content-min);
  flex-grow: 999;
  flex-basis: 0;
}
.sidebar[data-side="end"] > :first-child {
  order: 2;
}
```

## Tokens
- `--alert-box-text-color`: #525252 _(component)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-gray-100`: #efefef _(component)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-200`: #dcdcdc _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-600`: #656565 _(component)_
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
- `--color-action`: #d45087 _(component)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-strong-hover`: #0000000d _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-subtle`: #fffcfc _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-subtle`: #fbfefc _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-content-ai`: #7d5e54 _(semantic)_
- `--color-content-brand`: #005862 _(semantic)_
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
- `--color-obligation`: #f95d6a _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-font-weight`: 500 _(semantic)_
- `--typography-label-sm-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-font-weight`: 500 _(semantic)_
- `--typography-label-xs-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-line-height`: 1.6 _(semantic)_
- `--typography-label-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-2xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-2xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-2xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-2xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-2xs-subtle-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-microcopy-2xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
