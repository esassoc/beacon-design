# Compliance section & controls

The Commitment Compliance workspace: a titled section over the observation list, with two independent organize controls — a "Show" lens (Needs action [default] | All) and a "Group by" switch (Source [default] | Date). It is the observation-first reframe of compliance — the OBSERVATION is the unit of work, its relevant commitments are children — and the design input for the empty BCN-1315.

## Key decisions
- Two DEFAULTS that frame the whole feature: Show = "Needs action" (you land on what needs you, not the full firehose) and Group by = "Source" (the two lanes — Compliance concerns vs Species observations). "Date" is the alternative: a newest-first reverse-chronological log.
- Both controls are esa-button-toggle legos (segmented), not tabs or selects — peer lenses switched in place with no navigation. Group-by swaps the visible pane; Show filters cards WITHIN whichever pane is active.
- Each group header carries a quiet NEUTRAL count badge (4px radius, light-gray border — the design-principles "compact + quiet" badge). It is a count label, never a status chip; no esa-* outline-badge variant exists, so it is the only bespoke bit and is page glue.
- Show and Group by are orthogonal axes: the filter runs inside BOTH panes and, after hiding cards, re-counts each group badge and hides any group that drops to zero visible cards.

## Gotchas
- The Show filter must re-derive every group's count and empty-state on each change, in BOTH the source and date panes — otherwise stale counts or empty headers leak when you switch grouping.
- Date grouping is computed at build time (SSR) from observedDate; the runtime Date.now is forbidden in this codebase. Port the grouping server-side, not in the browser.
- "Needs action" is DERIVED (findNeedsAction over the observation state), not a stored boolean — re-derive it in the app, do not persist a flag.
- Everything here except the two toggles is page-composition glue (header bar, control strip, panes, group headers, count badge); do not promote it to a component.

## Done when
- Lands on "Needs action" + "Source"; switching Show to All reveals every card and restores full counts; switching Group by to Date re-lays the same cards as a newest-first dated log; groups with no visible cards disappear.

## Markup
```html
<section class="cc">
  <div class="cc__bar">
    <h2 class="cc__title">Commitment Compliance</h2>
    <div class="cc__controls">
      <div class="cc__ctx">
        <span class="cc__ctx-label">Show</span>
        <esa-button-toggle id="cc-needs" value="needs" size="sm"></esa-button-toggle>
      </div>
      <div class="cc__ctx">
        <span class="cc__ctx-label">Group by</span>
        <esa-button-toggle id="cc-group" value="species" size="sm"></esa-button-toggle>
      </div>
    </div>
  </div>
  <!-- Group by source (default) — the two lanes -->
  <div class="cc__pane" id="cc-by-source">
    <section class="cc-group">
      <header class="cc-group__head">
        <span class="cc-group__name">Compliance concerns</span>
        <span class="cc-badge">1</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Swainson’s Hawk"
          data-date="2026-06-16"
        >
          <summary class="bcn-obs__summary" data-kind="concern">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__concern-icon" aria-label="Compliance concern"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="M12 17h.01"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__name"
              >Staging within the SWHA buffer before clearance</span
            >
            <span class="bcn-obs__id">CC-1042</span>
            <span class="bcn-obs__meta">raised 2026-06-16 · DCTR2-DH-010</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="open"
              style="--_chip: var(--st-open, #ef4444)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Open</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              ILLUSTRATIVE SAMPLE — the geotech export has no real compliance concerns
              yet. Geotechnical staging equipment was observed inside the Swainson’s hawk
              no-disturbance buffer at DCTR2-DH-010 before clearance was issued. The
              designated biologist halted staging and notified the construction lead.
              <a class="bcn-obs__detail-link" href="#concern/CC-1042">View Concern</a>
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group">
      <header class="cc-group__head">
        <span class="cc-group__name">Species observations</span>
        <span class="cc-badge">5</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Swainson’s Hawk"
          data-date="2026-05-18"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">SWHA</span>
            <span class="bcn-obs__name">Swainson’s Hawk</span>
            <span class="bcn-obs__id">SWHA-2289</span>
            <span class="bcn-obs__meta">observed 2026-05-18 · DCTR2-DH-010</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Active SWHA nest in a tree on the north side of Twin Cities Road. One adult
              sitting (presumably incubating); a second adult foraging and delivering
              food. Not disturbed by the preconstruction survey along the public roadway
              or at the bore site.
              <a class="bcn-obs__detail-link" href="#observation/SWHA-2289"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Common Raven"
          data-date="2026-06-04"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">CORA</span>
            <span class="bcn-obs__name">Common Raven</span>
            <span class="bcn-obs__id">CORA-2695</span>
            <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-009</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Both ravens perched outside the nest during the preconstruction survey.
              <a class="bcn-obs__detail-link" href="#observation/CORA-2695"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Common Raven"
          data-date="2026-05-29"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">CORA</span>
            <span class="bcn-obs__name">Common Raven</span>
            <span class="bcn-obs__id">CORA-5830</span>
            <span class="bcn-obs__meta">observed 2026-05-29</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="cleared"
              style="--_chip: var(--st-cleared, #2e7571)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Cleared</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Multiple ravens observed around the nest; one in the nest. 6/8: ravens
              perched high on the tower outside the nest and foraging — appear to have
              fledged.
              <a class="bcn-obs__detail-link" href="#observation/CORA-5830"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Killdeer"
          data-date="2026-06-03"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">KILL</span>
            <span class="bcn-obs__name">Killdeer</span>
            <span class="bcn-obs__id">KILL-7655</span>
            <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              One bird on the nest; tried to lead us away as we neared the site. Four eggs
              present.
              <a class="bcn-obs__detail-link" href="#observation/KILL-7655"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Mallard"
          data-date="2026-06-02"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">MALL</span>
            <span class="bcn-obs__name">Mallard</span>
            <span class="bcn-obs__id">MALL-1520</span>
            <span class="bcn-obs__meta">observed 2026-06-02 · DCRDS-DH-294</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              A pair observed. Female stayed with the nest and had eggs.
              <a class="bcn-obs__detail-link" href="#observation/MALL-1520"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Unknown raptor"
          data-date="2026-06-03"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">UNK</span>
            <span class="bcn-obs__name">Unknown raptor</span>
            <span class="bcn-obs__id">UNK-5895</span>
            <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Large stick nest with a raptor in it. Too far to identify to species and the
              site could not be accessed, so no closer ID was made.
              <a class="bcn-obs__detail-link" href="#observation/UNK-5895"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="BIO-37"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-37: Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied Nests (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-37</span>
                  <span class="bcn-crow__title"
                    >Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied
                    Nests (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Swainson’s Hawk"
          data-date="2026-06-04"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">SWHA</span>
            <span class="bcn-obs__name">Swainson’s Hawk</span>
            <span class="bcn-obs__id">SWHA-0604</span>
            <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-006</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="tracking"
              style="--_chip: var(--st-tracking, #7c7c7c)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Tracking</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Swainson’s hawk observed foraging overhead. No nest at the site.
              <a class="bcn-obs__detail-link" href="#observation/SWHA-0604"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Swainson’s Hawk"
          data-date="2026-06-09"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">SWHA</span>
            <span class="bcn-obs__name">Swainson’s Hawk</span>
            <span class="bcn-obs__id">SWHA-0609</span>
            <span class="bcn-obs__meta">observed 2026-06-09 · DCRAI-DH-012</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="tracking"
              style="--_chip: var(--st-tracking, #7c7c7c)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Tracking</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Swainson’s hawk observed soaring overhead to the west. No nest at the site.
              <a class="bcn-obs__detail-link" href="#observation/SWHA-0609"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Rodent burrows"
          data-date="2026-06-15"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">HAB</span>
            <span class="bcn-obs__name">Rodent burrows</span>
            <span class="bcn-obs__id">HAB-0615</span>
            <span class="bcn-obs__meta">observed 2026-06-15 · DCBPP-DH-066</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="tracking"
              style="--_chip: var(--st-tracking, #7c7c7c)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Tracking</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Two small rodent burrows flagged within the project footprint; several more
              flagged along the access road. Crew asked to avoid the road north of the
              berm (many burrows, not all flagged). 6/16: crew has been avoiding driving
              over burrow entrances.
              <a class="bcn-obs__detail-link" href="#observation/HAB-0615"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-40"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-40: Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-40</span>
                  <span class="bcn-crow__title"
                    >Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="BIO-47"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-47: Conduct Preconstruction Survey for American Badger and Implement Avoidance and Minimization Measures (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-47</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Survey for American Badger and Implement
                    Avoidance and Minimization Measures (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
  </div>
  <!-- Group by date (reverse-chronological log) -->
  <div class="cc__pane" id="cc-by-date" hidden="">
    <section class="cc-group">
      <header class="cc-group__head">
        <span class="cc-group__name">Tuesday, June 16, 2026</span>
        <span class="cc-badge">1</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Swainson’s Hawk"
          data-date="2026-06-16"
        >
          <summary class="bcn-obs__summary" data-kind="concern">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__concern-icon" aria-label="Compliance concern"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="M12 17h.01"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__name"
              >Staging within the SWHA buffer before clearance</span
            >
            <span class="bcn-obs__id">CC-1042</span>
            <span class="bcn-obs__meta">raised 2026-06-16 · DCTR2-DH-010</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="open"
              style="--_chip: var(--st-open, #ef4444)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Open</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              ILLUSTRATIVE SAMPLE — the geotech export has no real compliance concerns
              yet. Geotechnical staging equipment was observed inside the Swainson’s hawk
              no-disturbance buffer at DCTR2-DH-010 before clearance was issued. The
              designated biologist halted staging and notified the construction lead.
              <a class="bcn-obs__detail-link" href="#concern/CC-1042">View Concern</a>
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group" hidden="">
      <header class="cc-group__head">
        <span class="cc-group__name">Monday, June 15, 2026</span>
        <span class="cc-badge">0</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Rodent burrows"
          data-date="2026-06-15"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">HAB</span>
            <span class="bcn-obs__name">Rodent burrows</span>
            <span class="bcn-obs__id">HAB-0615</span>
            <span class="bcn-obs__meta">observed 2026-06-15 · DCBPP-DH-066</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="tracking"
              style="--_chip: var(--st-tracking, #7c7c7c)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Tracking</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Two small rodent burrows flagged within the project footprint; several more
              flagged along the access road. Crew asked to avoid the road north of the
              berm (many burrows, not all flagged). 6/16: crew has been avoiding driving
              over burrow entrances.
              <a class="bcn-obs__detail-link" href="#observation/HAB-0615"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-40"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-40: Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-40</span>
                  <span class="bcn-crow__title"
                    >Conduct Surveys and Minimize Impacts on Burrowing Owl (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="BIO-47"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-47: Conduct Preconstruction Survey for American Badger and Implement Avoidance and Minimization Measures (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-47</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Survey for American Badger and Implement
                    Avoidance and Minimization Measures (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group" hidden="">
      <header class="cc-group__head">
        <span class="cc-group__name">Tuesday, June 9, 2026</span>
        <span class="cc-badge">0</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Swainson’s Hawk"
          data-date="2026-06-09"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">SWHA</span>
            <span class="bcn-obs__name">Swainson’s Hawk</span>
            <span class="bcn-obs__id">SWHA-0609</span>
            <span class="bcn-obs__meta">observed 2026-06-09 · DCRAI-DH-012</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="tracking"
              style="--_chip: var(--st-tracking, #7c7c7c)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Tracking</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Swainson’s hawk observed soaring overhead to the west. No nest at the site.
              <a class="bcn-obs__detail-link" href="#observation/SWHA-0609"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group">
      <header class="cc-group__head">
        <span class="cc-group__name">Thursday, June 4, 2026</span>
        <span class="cc-badge">1</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Common Raven"
          data-date="2026-06-04"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">CORA</span>
            <span class="bcn-obs__name">Common Raven</span>
            <span class="bcn-obs__id">CORA-2695</span>
            <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-009</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Both ravens perched outside the nest during the preconstruction survey.
              <a class="bcn-obs__detail-link" href="#observation/CORA-2695"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Swainson’s Hawk"
          data-date="2026-06-04"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">SWHA</span>
            <span class="bcn-obs__name">Swainson’s Hawk</span>
            <span class="bcn-obs__id">SWHA-0604</span>
            <span class="bcn-obs__meta">observed 2026-06-04 · DCRAI-DH-006</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="tracking"
              style="--_chip: var(--st-tracking, #7c7c7c)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Tracking</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Swainson’s hawk observed foraging overhead. No nest at the site.
              <a class="bcn-obs__detail-link" href="#observation/SWHA-0604"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group">
      <header class="cc-group__head">
        <span class="cc-group__name">Wednesday, June 3, 2026</span>
        <span class="cc-badge">2</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Killdeer"
          data-date="2026-06-03"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">KILL</span>
            <span class="bcn-obs__name">Killdeer</span>
            <span class="bcn-obs__id">KILL-7655</span>
            <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              One bird on the nest; tried to lead us away as we neared the site. Four eggs
              present.
              <a class="bcn-obs__detail-link" href="#observation/KILL-7655"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Unknown raptor"
          data-date="2026-06-03"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">UNK</span>
            <span class="bcn-obs__name">Unknown raptor</span>
            <span class="bcn-obs__id">UNK-5895</span>
            <span class="bcn-obs__meta">observed 2026-06-03 · DCTR2-DH-100</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Large stick nest with a raptor in it. Too far to identify to species and the
              site could not be accessed, so no closer ID was made.
              <a class="bcn-obs__detail-link" href="#observation/UNK-5895"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="BIO-37"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-37: Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied Nests (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-37</span>
                  <span class="bcn-crow__title"
                    >Conduct Surveys for Golden Eagle and Avoid Disturbance of Occupied
                    Nests (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group">
      <header class="cc-group__head">
        <span class="cc-group__name">Tuesday, June 2, 2026</span>
        <span class="cc-badge">1</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Mallard"
          data-date="2026-06-02"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">MALL</span>
            <span class="bcn-obs__name">Mallard</span>
            <span class="bcn-obs__id">MALL-1520</span>
            <span class="bcn-obs__meta">observed 2026-06-02 · DCRDS-DH-294</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              A pair observed. Female stayed with the nest and had eggs.
              <a class="bcn-obs__detail-link" href="#observation/MALL-1520"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group" hidden="">
      <header class="cc-group__head">
        <span class="cc-group__name">Friday, May 29, 2026</span>
        <span class="cc-badge">0</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="false"
          data-species="Common Raven"
          data-date="2026-05-29"
          hidden=""
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">CORA</span>
            <span class="bcn-obs__name">Common Raven</span>
            <span class="bcn-obs__id">CORA-5830</span>
            <span class="bcn-obs__meta">observed 2026-05-29</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="cleared"
              style="--_chip: var(--st-cleared, #2e7571)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Cleared</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Multiple ravens observed around the nest; one in the nest. 6/8: ravens
              perched high on the tower outside the nest and foraging — appear to have
              fledged.
              <a class="bcn-obs__detail-link" href="#observation/CORA-5830"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
    <section class="cc-group">
      <header class="cc-group__head">
        <span class="cc-group__name">Monday, May 18, 2026</span>
        <span class="cc-badge">1</span>
      </header>
      <div class="cc-group__cards">
        <details
          class="bcn-obs"
          data-needs-action="true"
          data-species="Swainson’s Hawk"
          data-date="2026-05-18"
        >
          <summary class="bcn-obs__summary" data-kind="observation">
            <span class="bcn-obs__chev" aria-hidden="true"
              ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                <svg
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
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </span>
            <span class="bcn-obs__badge">SWHA</span>
            <span class="bcn-obs__name">Swainson’s Hawk</span>
            <span class="bcn-obs__id">SWHA-2289</span>
            <span class="bcn-obs__meta">observed 2026-05-18 · DCTR2-DH-010</span>
            <span class="bcn-obs__spacer"></span>
            <span
              class="bcn-status-chip"
              data-status="active"
              style="--_chip: var(--st-active, #f2770e)"
            >
              <span class="bcn-status-chip__dot"></span>
              <span class="bcn-status-chip__label">Active</span>
            </span>
          </summary>
          <div class="bcn-obs__body">
            <p class="bcn-obs__desc">
              Active SWHA nest in a tree on the north side of Twin Cities Road. One adult
              sitting (presumably incubating); a second adult foraging and delivering
              food. Not disturbed by the preconstruction survey along the public roadway
              or at the bore site.
              <a class="bcn-obs__detail-link" href="#observation/SWHA-2289"
                >View Observation</a
              >
            </p>
            <section class="bcn-obs__section">
              <h4 class="bcn-obs__h">Relevant commitments</h4>
              <div class="bcn-obs__rows">
                <div
                  class="bcn-crow"
                  data-code="BIO-39"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-39: Conduct Preconstruction Surveys and Implement Protective Measures to Minimize Disturbance of Swainson's Hawk (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-39</span>
                  <span class="bcn-crow__title"
                    >Conduct Preconstruction Surveys and Implement Protective Measures to
                    Minimize Disturbance of Swainson's Hawk (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="BIO-36a"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment BIO-36a: Conduct Nesting Surveys for Special-Status and Non-Special-Status Birds and Raptors and Implement Protective Measures to Avoid Disturbance of Nesting Birds and Raptors (FEIR)"
                >
                  <span class="bcn-crow__code">BIO-36a</span>
                  <span class="bcn-crow__title"
                    >Conduct Nesting Surveys for Special-Status and Non-Special-Status
                    Birds and Raptors and Implement Protective Measures to Avoid
                    Disturbance of Nesting Birds and Raptors (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
                <div
                  class="bcn-crow"
                  data-code="EC-14"
                  role="button"
                  tabindex="0"
                  aria-label="Open commitment EC-14: Construction Best Management Practices for Biological Resources (FEIR)"
                >
                  <span class="bcn-crow__code">EC-14</span>
                  <span class="bcn-crow__title"
                    >Construction Best Management Practices for Biological Resources
                    (FEIR)</span
                  >
                  <span class="bcn-crow__open" aria-hidden="true"
                    ><span class="esa-icon esa-icon--sm" aria-hidden="true">
                      <svg
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
                        <path d="m9 18 6-6-6-6"></path>
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
            </section>
          </div>
        </details>
      </div>
    </section>
  </div>
</section>
```

## Styles
```css
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_ib-size);
  height: var(--_ib-size);
  padding: 0;
  border: 0;
  border-radius: var(--radius-200, 8px);
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: background var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
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
.esa-icon {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
  color: inherit;
}
.esa-icon--xs {
  --_icon-size: var(--icon-size-xs, 14px);
}
.esa-icon svg {
  display: block;
  width: var(--_icon-size);
  height: var(--_icon-size);
}
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, var(--icon-size-small, 16px));
}
.esa-icon--md {
  --_icon-size: var(--icon-size-md, var(--icon-size-medium, 20px));
}
.bcn-search-trigger .esa-icon {
  flex: none;
  color: var(--color-text-tertiary);
}
.topbar__right .esa-icon-button {
  color: var(--color-text-secondary);
}
.project-switcher__trigger > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-500);
}
.nav-section__header > .esa-icon:first-child {
  flex-shrink: 0;
  color: var(--bcn-gray-950);
  transition: color 0.15s ease;
}
.nav-section__header > .esa-icon:last-child {
  color: var(--bcn-gray-400);
  transition:
    transform 0.15s ease,
    opacity 0.2s ease-in-out;
  flex-shrink: 0;
}
.nav-section--collapsed .nav-section__header > .esa-icon:last-child {
  transform: rotate(-90deg);
}
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.cc {
  margin-top: var(--spacing-700);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.cc__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-400);
  flex-wrap: wrap;
  padding-bottom: var(--spacing-200);
  border-bottom: 1px solid var(--color-border);
}
.cc__title {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: var(--type-size-400);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}
.cc__controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-400);
  flex-wrap: wrap;
}
.cc__ctx {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
}
.cc__ctx-label {
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-tertiary);
  white-space: nowrap;
}
.cc-group__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  margin-bottom: var(--spacing-300);
}
.cc-group__name {
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.cc-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 var(--spacing-150);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-100);
  font-variant-numeric: tabular-nums;
}
.cc-group__cards {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.bcn-obs {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-300);
  background: var(--color-surface);
  overflow: hidden;
}
.bcn-obs__summary {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-300) var(--spacing-400);
  cursor: pointer;
  list-style: none;
}
.bcn-obs__chev {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-text-tertiary);
  transition: transform 0.15s ease;
}
.bcn-obs__concern-icon {
  display: inline-flex;
  flex-shrink: 0;
  color: var(--color-danger);
}
.bcn-obs__name {
  flex-shrink: 0;
  font-size: var(--type-size-200);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-obs__id {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  color: var(--color-text-secondary);
}
.bcn-obs__meta {
  font-size: var(--type-size-100);
  color: var(--color-text-tertiary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bcn-obs__spacer {
  flex: 1 1 var(--spacing-300);
}
.cc-group + .cc-group {
  margin-top: var(--spacing-500);
}
.bcn-obs__badge {
  flex-shrink: 0;
  font-family: var(--font-mono);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  color: var(--color-secondary);
  background: color-mix(in srgb, var(--color-secondary) 12%, white);
  padding: 1px var(--spacing-200);
  border-radius: var(--radius-100);
}
.cc__pane[hidden],
.cc-group[hidden] {
  display: none;
}
.bcn-obs[hidden] {
  display: none;
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-danger`: #ef4444 _(semantic)_
- `--color-primary`: #005862 _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #ffffff _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-mono`: "Roboto Mono", ui-monospace, monospace _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-height-md`: 36px _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-300`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
- `--type-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
