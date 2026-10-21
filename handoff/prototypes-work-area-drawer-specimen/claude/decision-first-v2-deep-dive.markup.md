# Decision-first — v2 deep dive: markup

```html
<section class="v2" aria-labelledby="v2-title">
  <header class="v2__head">
    <h2 class="v2__title" id="v2-title">Decision-first — v2 deep dive</h2>
    <ul class="v2__changes">
      <li>
        <strong>Dates up high.</strong> Notification · Clearance visit · Planned start (+ Blocked
        until when relevant) render as a compact band directly under the header — decision inputs,
        not detail.
      </li>
      <li>
        <strong>A two-second confirm.</strong> The provisional banner is now one slim line —
        observation ID · "within buffer · est. through Jul 24" · a compact Confirm block inline.
      </li>
      <!-- …and 2 more like this (<li>) -->
    </ul>
  </header>
  <div class="v2__pair">
    <!-- v2 · Case A: DCRDS-DH-184 -->
    <figure class="mockup">
      <figcaption class="mockup__case">
        DCRDS-DH-184 · provisional block — the dates band answers "when", the slim line answers
        "what now".
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
        <div class="band">
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Notification</span
            ><span class="bcn-key-value__val">May 15, 2026</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Clearance visit</span
            ><span class="bcn-key-value__val">Jun 15, 2026</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Planned start</span
            ><span class="bcn-key-value__val">Jun 29, 2026</span>
          </div>
        </div>
        <div class="drawer__body">
          <div class="decide decide--prov">
            <p class="decide__line decide__line--fact">
              <span class="obs-id">SWHA-2289</span
              ><span>within buffer · est. through Jul 24, 2026</span>
            </p>
            <div class="decide__actions">
              <span
                class="esa-button esa-button--variant-danger esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Confirm block</span>
                </button></span
              >
            </div>
          </div>
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
              <button type="button" class="board__cell board__cell--btn">
                <span class="board__cellhead"
                  ><span class="board__dim">Biological</span
                  ><span class="board__chev"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span></span
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
     style block already documents. --><span class="board__meta"
                  >Scheduled Jun 15, 2026</span
                ></button
              ><button type="button" class="board__cell board__cell--btn">
                <span class="board__cellhead"
                  ><span class="board__dim">Cultural Resources</span
                  ><span class="board__chev"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span></span
                ><span class="unreviewed">Not reviewed</span
                ><span class="board__meta">—</span></button
              ><!-- …and 2 more like this (<button class="board__cell board__cell--btn">) -->
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
                  5/27 email (from H. Barbare): 30-day Notification was scheduled to be sent
                  5/15/2026 for 6/15/2026 site clearance visit and 6/29/2026 work. This location is
                  the closest to the nest.
                </blockquote>
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
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M12 7v5l4 2"></path></svg></span
                ><span class="esa-collapsible__title">Activity</span>
              </summary>
              <div class="esa-collapsible__body typography-body-md">
                <p class="empty">No changes this session.</p>
              </div>
            </details>
          </div>
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
    <!-- v2 · Case B: DCRAI-DH-014 -->
    <figure class="mockup">
      <figcaption class="mockup__case">
        DCRAI-DH-014 · multi-discipline — the empty dates are as informative as the filled ones.
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
        <div class="band">
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Notification</span
            ><span class="bcn-key-value__val">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Clearance visit</span
            ><span class="bcn-key-value__val">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Planned start</span
            ><span class="bcn-key-value__val">Jun 17, 2026</span>
          </div>
        </div>
        <div class="drawer__body">
          <div class="decide">
            <p class="decide__line">Awaiting geology review — Jun 18, 2026 (in 7 days)</p>
            <div class="decide__row decide__row--warn">
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
              ><span class="decide__warntext"
                >Start Jun 17, 2026 precedes the geology and noise reviews</span
              >
            </div>
            <div class="decide__actions">
              <span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Edit start</span>
                </button></span
              >
            </div>
          </div>
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
              <button type="button" class="board__cell board__cell--btn">
                <span class="board__cellhead"
                  ><span class="board__dim">Biological</span
                  ><span class="board__chev"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span></span
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
                ></button
              ><button type="button" class="board__cell board__cell--btn">
                <span class="board__cellhead"
                  ><span class="board__dim">Cultural Resources</span
                  ><span class="board__chev"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span></span
                ><span class="unreviewed">Not reviewed</span
                ><span class="board__meta">—</span></button
              ><!-- …and 2 more like this (<button class="board__cell board__cell--btn">) -->
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
                  railroad tracks. There are several large trees, and waterways nearby, but the site
                  is situated in an area that is highly disturbed. A few elderberry shrubs are near
                  the entrance to the road, but they are greater than 165' away.
                </blockquote>
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
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M12 7v5l4 2"></path></svg></span
                ><span class="esa-collapsible__title">Activity</span>
              </summary>
              <div class="esa-collapsible__body typography-body-md">
                <p class="empty">No changes this session.</p>
              </div>
            </details>
          </div>
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
  </div>
  <h3 class="v2__sub">The discipline child drawer — stacked over the parent</h3>
  <figure class="mockup mockup--stack">
    <figcaption class="mockup__case">
      DCTR2-DH-010 · clicking the Biological cell (count "2") opens its review history as a child
      drawer stacked over the parent — the parent slides aside and dims behind it, exactly as the
      permit workspace stacks its permit editor over the segment drawer.
    </figcaption>
    <div class="stack">
      <!-- Parent drawer (under card — dimmed, peeking out at the left) -->
      <article class="drawer stack__parent">
        <header class="drawer__head">
          <div class="drawer__headrow">
            <h4 class="drawer__title">DCTR2-DH-010</h4>
            <span
              class="bcn-status-chip"
              data-status="blocked"
              style="--_chip: var(--st-blocked, #d73027)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Blocked</span></span
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
          <p class="drawer__sub">Tunnel Reach 2 · 2024-2029 Geotechnical Activities</p>
        </header>
        <div class="band band--4">
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Notification</span
            ><span class="bcn-key-value__val">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Clearance visit</span
            ><span class="bcn-key-value__val">May 18, 2026</span>
          </div>
          <!-- …and 2 more like this (<div class="bcn-key-value">) -->
        </div>
        <div class="drawer__body">
          <div class="decide decide--blocked">
            <p class="decide__line">
              Blocked through Jul 24, 2026 — est. 43 more days · re-surveySep 2, 2026
            </p>
          </div>
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
              <button type="button" class="board__cell board__cell--btn" data-active="true">
                <span class="board__cellhead"
                  ><span class="board__dim">Biological</span
                  ><span
                    class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">2</span></span
                  ><span class="board__chev"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span></span
                ><span
                  class="bcn-status-chip"
                  data-status="blocked"
                  style="--_chip: var(--st-blocked, #d73027)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">Blocked</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="board__meta"
                  >May 18, 2026 · C. Anderson (ESA)</span
                ></button
              ><button type="button" class="board__cell board__cell--btn">
                <span class="board__cellhead"
                  ><span class="board__dim">Cultural Resources</span
                  ><span class="board__chev"
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
                        <path d="m9 18 6-6-6-6"></path></svg></span></span></span
                ><span class="unreviewed">Not reviewed</span
                ><span class="board__meta">—</span></button
              ><!-- …and 2 more like this (<button class="board__cell board__cell--btn">) -->
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
                      >878 ft away<span class="conflict__sub">est. end Jul 24, 2026</span></span
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
                  This was the site clearance visit that identified the SWHA nest on 5/18.
                </blockquote>
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
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M12 7v5l4 2"></path></svg></span
                ><span class="esa-collapsible__title">Activity</span>
              </summary>
              <div class="esa-collapsible__body typography-body-md">
                <p class="empty">No changes this session.</p>
              </div>
            </details>
          </div>
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
      <!-- Child drawer (top card — the discipline's review history) -->
      <article class="drawer stack__child">
        <header class="drawer__head">
          <div class="drawer__headrow">
            <h4 class="drawer__title">Biological review</h4>
            <span
              class="bcn-status-chip"
              data-status="blocked"
              style="--_chip: var(--st-blocked, #d73027)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">Blocked</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="drawer__close"
              ><span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Close review history"
                  title="Close review history"
                >
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
                      <path d="M18 6 6 18"></path>
                      <path d="m6 6 12 12"></path></svg
                  ></span></button></span
            ></span>
          </div>
          <p class="drawer__sub">DCTR2-DH-010 · the latest completed review sets this status</p>
        </header>
        <div class="drawer__body">
          <div class="child__bar">
            <span class="child__count">2 reviews</span
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
              ><button class="esa-button__native typography-microcopy-xs" type="button">
                <span class="esa-button__label">Add review</span>
              </button></span
            >
          </div>
          <ol class="revs">
            <li class="rev" data-kind="scheduled">
              <span class="rev__dot"></span>
              <div class="rev__main">
                <p class="rev__head">
                  Re-survey <span class="rev__when">scheduled Sep 2, 2026</span>
                </p>
                <div class="rev__chiprow">
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
                <p class="rev__note">
                  Post-fledge confirmation visit — SWHA est. fledge Jul 24, 2026. Reviewer not yet
                  assigned.
                </p>
              </div>
            </li>
            <li class="rev" data-kind="blocked">
              <span class="rev__dot"></span>
              <div class="rev__main">
                <p class="rev__head">
                  Clearance survey<span class="rev__when">May 18, 2026 · C. Anderson (ESA)</span>
                </p>
                <div class="rev__chiprow">
                  <span
                    class="bcn-status-chip"
                    data-status="blocked"
                    style="--_chip: var(--st-blocked, #d73027)"
                    ><span class="bcn-status-chip__dot"></span
                    ><span class="bcn-status-chip__label">Blocked</span></span
                  ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --><span class="rev__until">until Jul 24, 2026</span
                  ><span class="rev__current">Sets current status</span>
                </div>
                <p class="rev__note">
                  Active SWHA nest within the 0.5-mile no-disturbance buffer — discovered during the
                  site clearance visit.
                </p>
              </div>
            </li>
          </ol>
        </div>
        <footer class="drawer__foot">
          <span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Close</span>
            </button></span
          >
        </footer>
      </article>
    </div>
  </figure>
  <aside class="model-note">
    <p class="model-note__title">Data-model note (for productionizing)</p>
    <p class="model-note__text">
      Today's <code>ClearanceGate</code> holds one status per discipline — it cannot say "Blocked
      now, re-survey scheduled Sep 2." Productionizing v2 turns each discipline's gate into a
      per-discipline<strong>review list</strong> (date, kind — Clearance survey / Re-survey /
      Management determination — reviewer, outcome, notes/stipulations): the latest completed review
      derives the discipline's current status, and future reviews ride the history as scheduled. The
      fixture keeps its single-gate shape for now; the June → September story above is mocked
      statically in this specimen.
    </p>
  </aside>
</section>
```
