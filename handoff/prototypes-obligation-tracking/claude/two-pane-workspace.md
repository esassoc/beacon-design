# Two-pane workspace

The frame one view lives in: a rail of parents on the left, and the obligations related to the selected parent on the right. Selecting a row on the left swaps the right pane; nothing else moves.

## Key decisions
- A FIXED FOOTPRINT that never resizes on interaction. Selecting a parent must not make the page jump, and a pane with thirty duties must not grow the viewport — each side scrolls inside its own half, so the rail keeps its place while a long list is read.
- THE RAIL HEADING SAYS WHAT A PARENT IS (Events / In your filter / Events that owe a notice / Why it is in force), so the left column never leaves the reader to infer what it is a list of.
- SELECTION IS A FILLED ROW, never a coloured left border — the house design principles ban that as a status device, and there is no status on this page for it to mean.
- The row reports, it does not act. There is no verb on a rail row; the inbox’s per-notice filing is gone entirely.

## Gotchas
- EVERY DETAIL PANE IS RENDERED AT BUILD TIME, all but the first hidden. The controller only reveals — it never builds. A pane assembled from a template literal would bypass the design system and no gate could see it.
- THE [hidden] ATTRIBUTE LOSES TO AN AUTHOR display RULE. The visible pane rule is guarded with :not([hidden]) or no pane ever hides.
- THE ARROW-KEY LISTENER IS ON THE RAIL, NEVER THE DOCUMENT. A keydown with nothing focused targets the document, and calling closest() on it throws — which silently kills every shortcut on the page.
- Below 60rem the fixed height releases and the page scrolls, or the detail pane is trapped in a short box.

## Done when
- Four workspaces exist, one per view. In the by-event direction they hold 19 rail rows and 19 detail panes between them; in the by-obligation direction, 23 and 23.
- Clicking a rail row marks it aria-selected and reveals only its pane.
- ArrowUp / ArrowDown move the selection and follow focus.

## Markup
```html
<div class="bcn-tw" data-tw-view="all">
  <div class="bcn-tw__side" data-tw-side="event">
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
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Observation</dd>
              </div>
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
                    >Biological Monitor daily communication and immediate reports to the
                    Designated Biologist</span
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
                      >Report Daily to Designated Biologist and Flag Non-Compliance</span
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
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Observation</dd>
              </div>
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
                      >Transport Injured Covered Species to Rehabilitation Facility</span
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
                    >Biological Monitor daily communication and immediate reports to the
                    Designated Biologist</span
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
                      >Report Daily to Designated Biologist and Flag Non-Compliance</span
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
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Daily monitoring report</dd>
              </div>
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
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Observation</dd>
              </div>
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
                    >Biological Monitor daily communication and immediate reports to the
                    Designated Biologist</span
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
                      >Report Daily to Designated Biologist and Flag Non-Compliance</span
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
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Site report</dd>
              </div>
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
                <dt class="typography-label-xs">Source</dt>
                <dd class="typography-body-sm">Observation</dd>
              </div>
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
                    >Biological Monitor daily communication and immediate reports to the
                    Designated Biologist</span
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
                      >Report Daily to Designated Biologist and Flag Non-Compliance</span
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
.bcn-swoc,
.bcn-loc {
  --_req-indent: 22px;
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
.bcn-swoc:hover,
.bcn-loc:hover {
  border-color: var(--color-border-default-strong);
}
.bcn-swoc[hidden],
.bcn-loc[hidden] {
  display: none;
}
.bcn-swoc.is-new,
.bcn-loc.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.bcn-swoc__node,
.bcn-loc__node {
  min-width: 0;
}
.bcn-swoc__main,
.bcn-loc__main {
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
.bcn-swoc__main::-webkit-details-marker,
.bcn-loc__main::-webkit-details-marker {
  display: none;
}
.bcn-swoc__main:hover,
.bcn-loc__main:hover {
  background: var(--color-background-default);
}
.bcn-swoc__main:focus-visible,
.bcn-loc__main:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: -2px;
}
details[open] > .bcn-swoc__main,
details[open] > .bcn-loc__main {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.bcn-swoc__chevron,
.bcn-loc__chevron {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.12s;
  display: inline-flex;
}
details[open] > summary .bcn-swoc__chevron,
details[open] > summary .bcn-loc__chevron {
  transform: rotate(90deg);
}
.bcn-swoc__class,
.bcn-loc__class,
.bcn-lob__class {
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
.bcn-swoc[data-class="adhere"],
.bcn-loc[data-class="adhere"],
.bcn-lob[data-class="adhere"] {
  --_hue: var(--color-obligation);
}
.bcn-swoc[data-class="monitor"],
.bcn-loc[data-class="monitor"],
.bcn-lob[data-class="monitor"] {
  --_hue: #ff7c43;
}
.bcn-swoc[data-class="notify"],
.bcn-loc[data-class="notify"],
.bcn-lob[data-class="notify"] {
  --_hue: #ffa600;
}
.bcn-swoc[data-class="roster"],
.bcn-loc[data-class="roster"],
.bcn-lob[data-class="roster"],
.bcn-loc[data-class="action"],
.bcn-lac[data-class="action"] {
  --_hue: var(--color-action);
}
.bcn-swoc__title,
.bcn-loc__title {
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
  font-weight: 500;
  overflow: hidden;
}
.bcn-swoc__title:hover,
.bcn-loc__title:hover {
  text-underline-offset: 2px;
  text-decoration: underline;
}
.bcn-swoc__title:focus-visible,
.bcn-loc__title:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 2px;
  border-radius: 2px;
}
.bcn-swoc esa-tooltip,
.bcn-loc esa-tooltip {
  display: inline-flex;
}
.bcn-swoc__verb,
.bcn-loc__verb {
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
.bcn-swoc__verb:focus-visible,
.bcn-loc__main:hover .bcn-loc__verb,
.bcn-loc__verb:focus-visible {
  opacity: 1;
}
.bcn-swoc__verb:hover,
.bcn-loc__verb:hover {
  background: var(--bcn-gray-100);
  color: var(--color-content-default);
}
.bcn-swoc__verb:focus-visible,
.bcn-loc__verb:focus-visible {
  outline: 2px solid var(--color-obligation);
  outline-offset: 1px;
}
.bcn-swoc__verb--danger:hover,
.bcn-loc__verb--danger:hover {
  color: var(--color-background-utility-danger);
}
.bcn-swoc__reqs,
.bcn-loc__reqs {
  padding: 0 var(--spacing-300) var(--spacing-150)
    calc(var(--spacing-300) + var(--_req-indent));
  flex-direction: column;
  margin: 0;
  list-style: none;
  display: flex;
}
.bcn-swoc__req,
.bcn-loc__req {
  align-items: center;
  gap: var(--spacing-200);
  min-height: 28px;
  padding: var(--spacing-050) var(--spacing-200);
  border-top: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-100);
  display: flex;
}
.bcn-swoc__req:hover,
.bcn-loc__req:hover {
  background: var(--color-background-default);
}
.bcn-swoc__req-name,
.bcn-loc__req-name {
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  overflow: hidden;
}
.bcn-swoc__also,
.bcn-loc__also {
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
.bcn-tw__bar {
  justify-content: flex-end;
  padding-block-end: var(--spacing-200);
  display: flex;
}
.bcn-tw__side:not([hidden]) {
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
  max-inline-size: 100%;
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
.bcn-tw__events {
  padding: 0 var(--spacing-200) var(--spacing-300);
  margin: 0;
  list-style: none;
}
.bcn-tw__blank {
  padding: var(--spacing-500);
}
.bcn-tw__fact dt {
  color: var(--color-content-default-tertiary);
}
.bcn-tw__fact dd {
  margin: var(--spacing-050) 0 0;
  color: var(--color-content-default);
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
.bcn-swcb--sm {
  min-width: 18px;
  padding: 2px var(--spacing-100);
  font-size: var(--font-size-050);
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
.bcn-swoc__title--static {
  cursor: default;
  text-align: left;
}
.bcn-swoc.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__main.is-over {
  box-shadow: inset 0 0 0 2px var(--color-obligation);
  background: color-mix(in srgb, var(--color-obligation) 6%, transparent);
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
.bcn-swoc__reqs:empty:after {
  content: "No requirements — drop one here or remove this obligation.";
  padding: var(--spacing-100) var(--spacing-200);
  color: var(--color-content-default-tertiary);
  font-style: italic;
  display: block;
}
.bcn-swoc__req.is-dragging {
  opacity: 0.4;
}
.bcn-swoc__req.is-new {
  animation: 0.9s ease-out bcn-obl-flash;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
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
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
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
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-md`: .25rem _(semantic)_
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
