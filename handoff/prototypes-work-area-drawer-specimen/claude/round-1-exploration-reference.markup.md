# Round 1 exploration (reference): markup

```html
<section class="round1" aria-labelledby="round1-title">
  <header class="round1__head">
    <h2 class="round1__title" id="round1-title">Round 1 exploration (reference)</h2>
    <p class="round1__line">
      The three structural options as first presented — Decision-first (option 1) was selected and
      is developed at the top of the page. Kept for the record of what each structure prioritized.
    </p>
  </header>
  <div class="concepts">
    <!-- ═══════════════════ Concept 1 — Decision-first ═══════════════════ -->
    <section class="concept" aria-labelledby="c1-name">
      <header class="concept__thesis">
        <h3 class="concept__name" id="c1-name">
          <span class="concept__num">1</span>Decision-first
        </h3>
        <p class="concept__line">
          The top half answers one question: can work start — and if not, what single action moves
          it?
        </p>
        <div class="concept__pt">
          <p class="concept__pt-label">Prioritizes</p>
          <ul>
            <li>
              The manager's go/no-go decision, with the ONE next action promoted to a real button
            </li>
            <li>A four-cell discipline board you can scan in a second</li>
          </ul>
          <p class="concept__pt-label">Trades away</p>
          <ul>
            <li>
              Ambient detail — conflicts, surveys, notes, dates and activity collapse until asked
              for
            </li>
          </ul>
        </div>
      </header>
      <!-- Case A: DCRDS-DH-184 -->
      <figure class="mockup">
        <figcaption class="mockup__case">
          DCRDS-DH-184 · provisional block — the system found a buffer conflict; a manager must
          decide now.
        </figcaption>
        <article class="drawer">
          <header class="drawer__head">
            <div class="drawer__headrow">
              <h3 class="drawer__title">DCRDS-DH-184</h3>
              <span
                class="bcn-status-chip"
                data-status="provisional-block"
                style="--_chip: var(--st-provisional-block, #d73027)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Provisional Block</span></span
              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
            </div>
            <p class="drawer__sub">Roads · 2024-2029 Geotechnical Activities</p>
          </header>
          <div class="drawer__body">
            <section>
              <h4 class="drawer__section">Next action</h4>
              <div class="action action--provisional">
                <p class="action__title">Confirm the block?</p>
                <p class="action__text">
                  Inside the Swainson's Hawk ½-mile buffer (SWHA-2289-05182026) — 146 ft from the
                  nest, est. end Jul 24, 2026. The system detected the conflict; it stays
                  provisional until a manager decides.
                </p>
                <p class="action__facts">
                  Survey scheduled Jun 15, 2026 · planned startJun 29, 2026 (in 18 days)
                </p>
                <div class="action__btns">
                  <span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label">Confirm block</span>
                    </button></span
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label">Review gates</span>
                    </button></span
                  >
                </div>
              </div>
            </section>
            <section>
              <h4 class="drawer__section">
                <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Disciplines
              </h4>
              <div class="board">
                <div class="board__cell">
                  <span class="board__dim">Biological</span
                  ><span
                    class="bcn-status-chip"
                    data-status="survey-scheduled"
                    style="--_chip: var(--st-survey-scheduled, #74add1)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Survey Scheduled</span></span
                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="board__meta">Scheduled Jun 15, 2026</span>
                </div>
                <div class="board__cell">
                  <span class="board__dim">Cultural Resources</span
                  ><span class="unreviewed">Not reviewed</span><span class="board__meta">—</span>
                </div>
                <!-- …and 2 more like this (<div class="board__cell">) -->
              </div>
            </section>
            <div class="drawer__more">
              <details class="esa-collapsible esa-collapsible--flush" open="">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                      <path d="M12 17h.01"></path></svg></span
                  ><span class="esa-collapsible__title">Buffer conflicts (1)</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <ul class="rows">
                    <li class="conflict">
                      <span class="conflict__main"
                        >Swainson's Hawk<span class="conflict__sub"
                          >SWHA-2289-05182026 · 2,640 ft buffer</span
                        ></span
                      ><span class="conflict__meta"
                        >146 ft away<span class="conflict__sub">est. end Jul 24, 2026</span></span
                      >
                    </li>
                  </ul>
                </div>
              </details>
              <details class="esa-collapsible esa-collapsible--flush">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                      <path d="m9 14 2 2 4-4"></path></svg></span
                  ><span class="esa-collapsible__title">Survey records</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <p class="empty">No survey on record.</p>
                </div>
              </details>
              <!-- …and 3 more like this (<details class="esa-collapsible esa-collapsible--flush">) -->
            </div>
          </div>
          <footer class="drawer__foot">
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
              ><button class="esa-button__native typography-microcopy-md" type="button">
                <span class="esa-button__label">Edit clearance</span>
              </button></span
            >
          </footer>
        </article>
      </figure>
      <!-- Case B: DCRAI-DH-014 -->
      <figure class="mockup">
        <figcaption class="mockup__case">
          DCRAI-DH-014 · multi-discipline — pending reviews, and a planned start that lands before
          them.
        </figcaption>
        <article class="drawer">
          <header class="drawer__head">
            <div class="drawer__headrow">
              <h3 class="drawer__title">DCRAI-DH-014</h3>
              <span
                class="bcn-status-chip"
                data-status="survey-scheduled"
                style="--_chip: var(--st-survey-scheduled, #74add1)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Survey Scheduled</span></span
              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
            </div>
            <p class="drawer__sub">Rail Alignment · 2024-2029 Geotechnical Activities</p>
          </header>
          <div class="drawer__body">
            <section>
              <h4 class="drawer__section">Next action</h4>
              <div class="action">
                <p class="action__title">Awaiting geology review — Jun 18, 2026</p>
                <p class="action__text">
                  Site relocated — pending geologist confirmation of the new position. Noise review
                  follows Jun 20, 2026.
                </p>
                <p class="action__conflict">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                      <path d="M12 17h.01"></path></svg></span
                  >Planned start Jun 17, 2026 lands before both pending reviews.
                </p>
                <div class="action__btns">
                  <span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button class="esa-button__native typography-microcopy-xs" type="button">
                      <span class="esa-button__label">Edit planned start</span>
                    </button></span
                  >
                </div>
              </div>
            </section>
            <section>
              <h4 class="drawer__section">
                <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1 1 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                    ></path>
                    <path d="m9 12 2 2 4-4"></path></svg></span
                >Disciplines
              </h4>
              <div class="board">
                <div class="board__cell">
                  <span class="board__dim">Biological</span
                  ><span
                    class="bcn-status-chip"
                    data-status="cleared"
                    style="--_chip: var(--st-cleared, #1a9850)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Cleared</span></span
                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="board__meta"
                    >Jun 3, 2026 · C. Anderson (ESA)</span
                  >
                </div>
                <div class="board__cell">
                  <span class="board__dim">Cultural Resources</span
                  ><span class="unreviewed">Not reviewed</span><span class="board__meta">—</span>
                </div>
                <!-- …and 2 more like this (<div class="board__cell">) -->
              </div>
            </section>
            <div class="drawer__more">
              <details class="esa-collapsible esa-collapsible--flush">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                      <path d="m9 14 2 2 4-4"></path></svg></span
                  ><span class="esa-collapsible__title">Survey records (1)</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <ul class="rows">
                    <li class="survey">
                      <a class="survey__link" href="#" onclick="return false;"
                        >Pre-construction clearance survey · Jun 3, 2026 · C. Anderson (ESA)</a
                      >
                    </li>
                  </ul>
                </div>
              </details>
              <details class="esa-collapsible esa-collapsible--flush">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                        d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                      ></path>
                      <path
                        d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
                      ></path></svg></span
                  ><span class="esa-collapsible__title">Notes (1)</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <blockquote class="note">
                    6/3 email: This DH is located in a gravel work pad. It was moved slightly to be
                    placed outside of a dry roadside ditch and to be situated further from the
                    railroad tracks. There are several large trees, and waterways nearby, but the
                    site is situated in an area that is highly disturbed. A few elderberry shrubs
                    are near the entrance to the road, but they are greater than 165' away.
                  </blockquote>
                </div>
              </details>
              <!-- …and 2 more like this (<details class="esa-collapsible esa-collapsible--flush">) -->
            </div>
          </div>
          <footer class="drawer__foot">
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
              ><button class="esa-button__native typography-microcopy-md" type="button">
                <span class="esa-button__label">Edit clearance</span>
              </button></span
            >
          </footer>
        </article>
      </figure>
    </section>
    <!-- ═══════════════════ Concept 2 — Discipline workspace ═══════════════════ -->
    <section class="concept" aria-labelledby="c2-name">
      <header class="concept__thesis">
        <h3 class="concept__name" id="c2-name">
          <span class="concept__num">2</span>Discipline workspace
        </h3>
        <p class="concept__line">
          One discipline at a time, at full depth — the drawer is a segmented workspace, not a
          stack.
        </p>
        <div class="concept__pt">
          <p class="concept__pt-label">Prioritizes</p>
          <ul>
            <li>
              Per-discipline depth: status, dates, reviewer, notes and survey record in one panel
            </li>
            <li>
              Clean per-discipline editing — add/edit/remove scoped to the open panel, no long form
            </li>
            <li>
              A thin rollup strip keeps the site-level answer and the live conflict always in view
            </li>
          </ul>
          <p class="concept__pt-label">Trades away</p>
          <ul>
            <li>Whole-site glanceability — you visit four panels to read everything</li>
          </ul>
        </div>
      </header>
      <figure class="mockup">
        <figcaption class="mockup__case">
          DCRAI-DH-014 · the switcher opens on Geology — the next pending review. The tabs work;
          click through.
        </figcaption>
        <article class="drawer" data-workspace="">
          <header class="drawer__head">
            <div class="drawer__headrow">
              <h3 class="drawer__title">DCRAI-DH-014</h3>
              <span
                class="bcn-status-chip"
                data-status="survey-scheduled"
                style="--_chip: var(--st-survey-scheduled, #74add1)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Survey Scheduled</span></span
              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
            </div>
            <p class="drawer__sub">Rail Alignment · 2024-2029 Geotechnical Activities</p>
          </header>
          <div class="drawer__body">
            <!-- Always-visible rollup strip: derived status + the live conflict -->
            <div class="strip">
              <span class="esa-icon esa-icon--sm" aria-hidden="true"
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
                  <path d="M12 17h.01"></path></svg></span
              ><span class="strip__text"
                ><strong>Planned start Jun 17, 2026</strong> — lands before 2 pending reviews
                (geology Jun 18, 2026, noise Jun 20, 2026)</span
              >
            </div>
            <div class="disc-tabs" role="tablist" aria-label="Disciplines">
              <button type="button" role="tab" data-dim="biological" aria-selected="false">
                <span class="disc-tabs__dot" style="background: var(--st-cleared, #1a9850)"></span
                ><span class="disc-tabs__label">Biological</span></button
              ><button type="button" role="tab" data-dim="cultural" aria-selected="false">
                <span class="disc-tabs__dot" data-none="true"></span
                ><span class="disc-tabs__label">Cultural</span></button
              ><!-- …and 2 more like this (<button>) -->
            </div>
            <!-- Biological — cleared -->
            <section class="disc-panel" data-panel="biological" hidden="">
              <div class="disc-panel__head">
                <span
                  class="bcn-status-chip"
                  data-status="cleared"
                  style="--_chip: var(--st-cleared, #1a9850)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Cleared</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="disc-panel__when">Reviewed Jun 3, 2026</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Reviewer</span
                ><span class="bcn-key-value__val">C. Anderson (ESA)</span>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Determination note</span
                ><span class="kv-text"
                  >Highly disturbed gravel work pad; elderberry shrubs &gt;165 ft from access.</span
                >
              </div>
              <!-- …and 2 more like this (<div class="bcn-key-value">) -->
              <div class="disc-panel__foot">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Edit biological review</span>
                  </button></span
                >
              </div>
            </section>
            <!-- Cultural — not reviewed -->
            <section class="disc-panel" data-panel="cultural" hidden="">
              <div class="disc-panel__head"><span class="unreviewed">Not reviewed</span></div>
              <p class="empty">
                No cultural resources review has been recorded for this work area.
              </p>
              <div class="disc-panel__foot">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Add review</span>
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Mark no review required</span>
                  </button></span
                >
              </div>
            </section>
            <!-- …and 2 more like this (<section class="disc-panel">) --><!-- Noise — review scheduled --><!-- Geology — review scheduled (default panel: the next pending review) -->
          </div>
          <footer class="drawer__foot">
            <span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
              ><button class="esa-button__native typography-microcopy-md" type="button">
                <span class="esa-button__label">Edit site details</span>
              </button></span
            >
          </footer>
        </article>
      </figure>
    </section>
    <!-- ═══════════════════ Concept 3 — Lifecycle / checklist ═══════════════════ -->
    <section class="concept" aria-labelledby="c3-name">
      <header class="concept__thesis">
        <h3 class="concept__name" id="c3-name">
          <span class="concept__num">3</span>Lifecycle / checklist
        </h3>
        <p class="concept__line">
          The work area is a pipeline — Notification → Survey → Determinations → Outcome → Work
          start — and every fact, conflict and edit lives at its step.
        </p>
        <div class="concept__pt">
          <p class="concept__pt-label">Prioritizes</p>
          <ul>
            <li>Temporal clarity: where are we, what's next, what's late — dates on every step</li>
            <li>
              Conflicts surface where they belong: the buffer conflict at Determinations, the
              start-before-review clash at Work start
            </li>
            <li>Inline edits at the step — no separate edit mode</li>
          </ul>
          <p class="concept__pt-label">Trades away</p>
          <ul>
            <li>Dense at-a-glance status across disciplines; the pipeline runs tall</li>
          </ul>
        </div>
      </header>
      <!-- Case A: DCRDS-DH-184 -->
      <figure class="mockup">
        <figcaption class="mockup__case">
          DCRDS-DH-184 · the conflict jumped the queue — Determinations is live before the survey
          happens.
        </figcaption>
        <article class="drawer">
          <header class="drawer__head">
            <div class="drawer__headrow">
              <h3 class="drawer__title">DCRDS-DH-184</h3>
              <span
                class="bcn-status-chip"
                data-status="provisional-block"
                style="--_chip: var(--st-provisional-block, #d73027)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Provisional Block</span></span
              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
            </div>
            <p class="drawer__sub">Roads · 2024-2029 Geotechnical Activities</p>
          </header>
          <div class="drawer__body">
            <ol class="steps">
              <li class="step" data-state="done">
                <span class="step__dot"></span>
                <div class="step__content">
                  <p class="step__title">
                    Notification <span class="step__when">May 15, 2026</span>
                  </p>
                  <p class="step__text">30-day landowner notification sent.</p>
                </div>
              </li>
              <li class="step" data-state="scheduled">
                <span class="step__dot"></span>
                <div class="step__content">
                  <p class="step__title">
                    Clearance survey<span class="step__when">scheduled Jun 15, 2026</span>
                  </p>
                  <p class="step__text">Biological clearance visit in 4 days.</p>
                </div>
              </li>
              <!-- …and 3 more like this (<li class="step">) -->
            </ol>
          </div>
        </article>
      </figure>
      <!-- Case B: DCRAI-DH-014 -->
      <figure class="mockup">
        <figcaption class="mockup__case">
          DCRAI-DH-014 · determinations are the live step; the start-before-review clash is flagged
          at Work start.
        </figcaption>
        <article class="drawer">
          <header class="drawer__head">
            <div class="drawer__headrow">
              <h3 class="drawer__title">DCRAI-DH-014</h3>
              <span
                class="bcn-status-chip"
                data-status="survey-scheduled"
                style="--_chip: var(--st-survey-scheduled, #74add1)"
                ><span class="bcn-status-chip__dot"></span
                ><span class="bcn-status-chip__label">Survey Scheduled</span></span
              ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. -->
            </div>
            <p class="drawer__sub">Rail Alignment · 2024-2029 Geotechnical Activities</p>
          </header>
          <div class="drawer__body">
            <ol class="steps">
              <li class="step" data-state="future">
                <span class="step__dot"></span>
                <div class="step__content">
                  <p class="step__title">
                    Notification <span class="step__when">not on record</span>
                  </p>
                  <p class="step__text">No 30-day landowner notification recorded.</p>
                  <div class="step__act">
                    <span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button class="esa-button__native typography-microcopy-xs" type="button">
                        <span class="esa-button__label">Record notification</span>
                      </button></span
                    >
                  </div>
                </div>
              </li>
              <li class="step" data-state="done">
                <span class="step__dot"></span>
                <div class="step__content">
                  <p class="step__title">
                    Clearance survey <span class="step__when">Jun 3, 2026</span>
                  </p>
                  <p class="step__text">
                    <a class="survey__link" href="#" onclick="return false;"
                      >Pre-construction clearance survey · Jun 3, 2026 · C. Anderson (ESA)</a
                    >
                  </p>
                </div>
              </li>
              <!-- …and 3 more like this (<li class="step">) -->
            </ol>
          </div>
        </article>
      </figure>
    </section>
  </div>
</section>
```
