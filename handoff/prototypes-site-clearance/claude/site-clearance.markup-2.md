# Site Clearance: markup, part 2 of 2

```html
                          </div>
                        </li>
                      </ul>
                    </section>
                    <section class="feed-day">
                      <h3 class="feed-heading">Jun 4, 2026</h3>
                      <ul class="feed-day__list">
                        <li
                          class="entry entry--card"
                          data-wa="DCRAI-DH-009"
                          tabindex="0"
                          role="button"
                        >
                          <span class="entry__badge entry__badge--wa">DCRAI-DH-009</span>
                          <div class="entry__body">
                            <p class="entry__line">
                              <span class="entry__type">Review</span
                              ><span class="entry__sep"> · </span
                              ><span class="entry__primary">Biological · Clearance survey</span>
                              <span class="gate__chipwrap"
                                ><span
                                  class="bcn-status-chip"
                                  data-status="cleared-stipulations"
                                  style="--_chip: var(--st-cleared-stipulations)"
                                  ><span class="bcn-status-chip__dot"></span
                                  ><span class="bcn-status-chip__label"
                                    >Cleared w/ Stipulations</span
                                  ></span
                                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
                              >
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
                        <!-- …and 4 more like this (<li class="entry entry--card">) -->
                      </ul>
                    </section>
                    <!-- …and 6 more like this (<section class="feed-day">) -->
                  </div>
                  <div id="feed-empty" hidden="">
                    <div class="esa-empty-state esa-empty-state--sm">
                      <h3 class="esa-empty-state__title typography-label-sm-strong">
                        No activity matches the filters
                      </h3>
                      <p class="esa-empty-state__description typography-body-xs">
                        Clear the Type / Component filters to see the full feed.
                      </p>
                      <div class="esa-empty-state__actions typography-label-md"></div>
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
                          <span class="entry__type">Work start</span
                          ><span class="entry__sep"> · </span
                          ><span class="entry__primary">Jun 12</span>
                        </p>
                      </div>
                      <span class="entry__meta">tomorrow</span>
                    </li>
                    <li class="entry entry--up" data-wa="DCBPP-DH-066" tabindex="0" role="button">
                      <span class="entry__badge entry__badge--wa">DCBPP-DH-066</span>
                      <div class="entry__body">
                        <p class="entry__line">
                          <span class="entry__type">Work start</span
                          ><span class="entry__sep"> · </span
                          ><span class="entry__primary">Jun 15</span>
                        </p>
                      </div>
                      <span class="entry__meta">in 4 days</span>
                    </li>
                    <!-- …and 10 more like this (<li class="entry entry--up">) -->
                  </ul>
                </aside>
              </div>
            </section></esa-tab-layout
          >
        </section>
      </div>
    </div>
    <esa-side-dialog
      id="wa-dialog"
      size="md"
      style="--_width: 640px; --z-modal: 1300; --z-modal-backdrop: 1250"
      position="right"
      ><div slot="header" class="wa__header">
        <div class="wa__headmain">
          <h2 class="wa__title" id="wa-title">Work area</h2>
          <span id="wa-chip"
            ><span
              class="bcn-status-chip"
              data-status="cleared"
              style="--_chip: var(--st-cleared, #1a9850)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">—</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
          >
        </div>
        <p class="wa__subtitle" id="wa-sub">—</p>
      </div>
      <div class="wa" id="wa-read">
        <!-- Dates band — always-visible decision inputs directly under the header
           (full-bleed against the lego's body padding); the red Blocked-until
           cell appears only while a block horizon exists. -->
        <div class="band" id="wa-band">
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Notification</span
            ><span class="wa__kv-val" id="wa-d-notif">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Clearance visit</span
            ><span class="wa__kv-val" id="wa-d-visit">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Planned start</span
            ><span class="wa__kv-val" id="wa-d-start">—</span>
          </div>
          <span class="band__cell" id="wa-d-until-wrap" hidden=""
            ><div class="bcn-key-value" data-size="md" data-layout="stack">
              <span class="bcn-key-value__key">Blocked until</span
              ><span class="band__alert" id="wa-d-until">—</span>
            </div></span
          >
        </div>
        <!-- Decision block — reads in ~2 seconds. Variants (data-variant, filled
           by JS): prov = [obs ID badge] fact line + right-aligned danger
           Confirm block (the manager's call); blocked = statement line;
           pending = awaiting-review line (+ start-conflict warn row with
           inline Edit start); cleared/neutral = one quiet line. -->
        <div class="decide" id="wa-decide" hidden="">
          <p class="decide__line decide__line--fact" id="wa-decide-fact"></p>
          <div class="decide__row decide__row--warn" id="wa-decide-warn" hidden="">
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
            ><span class="decide__warntext" id="wa-decide-warntext"></span
            ><span id="wa-edit-start"
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Edit start</span>
                </button></span
              ></span
            >
          </div>
          <!-- Confirm block rides esa-button's native danger color, re-pointed to
             the status red (--st-provisional-block) by the prov variant's CSS
             so it sits in the same red family as the block's tint/border/ink. -->
          <div class="decide__actions" id="wa-decide-actions" hidden="">
            <span id="wa-confirm-block"
              ><span
                class="esa-button esa-button--variant-danger esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Confirm block</span>
                </button></span
              ></span
            >
          </div>
        </div>
        <!-- Disciplines board — one button cell per dimension: name, current
           status chip (hollow "Not reviewed" when nothing is recorded), key
           date line, review-count badge when >1. Click opens the discipline's
           stacked child drawer. -->
        <section>
          <h3 class="wa__section">
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
          </h3>
          <div class="board" id="wa-board">
            <button type="button" class="board__cell" data-dim="biological">
              <span class="board__cellhead"
                ><span class="board__dim">Biological</span
                ><span class="board__count" hidden=""
                  ><span
                    class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">0</span></span
                  ></span
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
              ><span class="board__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="cleared"
                  style="--_chip: var(--st-cleared, #1a9850)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">—</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              ><span class="board__unreviewed gate__unreviewed" hidden="">Not reviewed</span
              ><span class="board__meta">—</span></button
            ><button type="button" class="board__cell" data-dim="cultural">
              <span class="board__cellhead"
                ><span class="board__dim">Cultural Resources</span
                ><span class="board__count" hidden=""
                  ><span
                    class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">0</span></span
                  ></span
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
              ><span class="board__chipwrap"
                ><span
                  class="bcn-status-chip"
                  data-status="cleared"
                  style="--_chip: var(--st-cleared, #1a9850)"
                  ><span class="bcn-status-chip__dot"></span
                  ><span class="bcn-status-chip__label">—</span></span
                ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
              ><span class="board__unreviewed gate__unreviewed" hidden="">Not reviewed</span
              ><span class="board__meta">—</span></button
            ><!-- …and 2 more like this (<button class="board__cell">) -->
          </div>
        </section>
        <!-- Collapsible summary rows — the v2 demotions: ambient detail folds
           until asked for. Titles carry live counts (JS updates the lego's
           title span). -->
        <div class="wa__more">
          <span class="wa__more-item" id="wa-conflicts-col" hidden=""
            ><details class="esa-collapsible esa-collapsible--flush">
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
                ><span class="esa-collapsible__title">Buffer conflicts</span>
              </summary>
              <div class="esa-collapsible__body typography-body-md">
                <ul class="wa__conflicts" id="wa-conflicts"></ul>
              </div></details></span
          ><span class="wa__more-item" id="wa-notes-col" hidden=""
            ><details class="esa-collapsible esa-collapsible--flush">
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
                ><span class="esa-collapsible__title">Notes</span>
              </summary>
              <div class="esa-collapsible__body typography-body-md">
                <blockquote class="wa__note" id="wa-note"></blockquote>
                <ul class="wa__notes-added" id="wa-notes-added"></ul>
              </div></details></span
          ><span class="wa__more-item"
            ><details class="esa-collapsible esa-collapsible--flush">
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
                <ul class="wa__activity" id="wa-activity"></ul>
              </div></details
          ></span>
        </div>
      </div>
      <div class="wa" id="wa-edit" hidden="">
        <section>
          <h3 class="wa__section">
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
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline></svg></span
            >Dates
          </h3>
          <div class="we__dates">
            <esa-date-picker id="we-notif" label="Notification" size="sm"></esa-date-picker
            ><esa-date-picker id="we-visit" label="Clearance visit" size="sm"></esa-date-picker
            ><esa-date-picker id="we-start" label="Planned start" size="sm"></esa-date-picker>
          </div>
        </section>
        <section>
          <h3 class="wa__section">
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
            >Notes
          </h3>
          <!-- Append-only: the verbatim seed note is the field record (read-only even
             here); "Add note" is the paste-the-biologist-email affordance. -->
          <blockquote class="wa__note" id="we-seed-note"></blockquote>
          <ul class="wa__notes-added" id="we-notes-added"></ul>
          <div class="we__addnote">
            <span class="we__addnote-title">Add note</span>
            <div class="we__row">
              <esa-date-picker id="we-note-date" label="Date" size="sm"></esa-date-picker
              ><esa-text-field
                id="we-note-author"
                label="Author"
                placeholder="Who sent it"
                size="sm"
              ></esa-text-field>
            </div>
            <esa-textarea
              id="we-note-text"
              label="Note"
              rows="3"
              auto-resize=""
              placeholder="Paste the biologist's email note…"
              size="sm"
            ></esa-textarea>
          </div>
        </section>
      </div>
      <div slot="footer" class="wa__footer">
        <!-- "Show on map" (round-5 ch5) — closes the drawer, switches to the Map
           tab, pans/zooms + pulses the marker (the ch2 go-to machinery). Hidden
           while editing — a mid-edit jump would discard the form. --><span
          id="wa-showmap"
          class="wa__footer-start"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label"
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
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle></svg></span
                >Show on map</span
              >
            </button></span
          ></span
        ><span id="wa-edit-btn"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Edit site details</span>
            </button></span
          ></span
        ><span id="wa-cancel" hidden=""
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Cancel</span>
            </button></span
          ></span
        ><span id="wa-save" hidden=""
          ><span
            class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Save</span>
            </button></span
          ></span
        >
      </div></esa-side-dialog
    ><esa-side-dialog
      id="disc-dialog"
      size="md"
      style="--_width: 560px; --z-modal: 1340; --z-modal-backdrop: 1310"
      position="right"
      ><div slot="header" class="wa__header">
        <div class="wa__headmain">
          <h2 class="wa__title" id="dd-title">Review</h2>
          <span id="dd-chip"
            ><span
              class="bcn-status-chip"
              data-status="cleared"
              style="--_chip: var(--st-cleared, #1a9850)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">—</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
          ><span class="gate__unreviewed" id="dd-unreviewed" hidden="">Not reviewed</span>
        </div>
        <p class="wa__subtitle" id="dd-sub">—</p>
      </div>
      <div class="wa">
        <div class="dd__bar">
          <span class="dd__count" id="dd-count">0 reviews</span
          ><span id="dd-add"
            ><span
              class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
              ><button class="esa-button__native typography-microcopy-xs" type="button">
                <span class="esa-button__label">Add review</span>
              </button></span
            ></span
          >
        </div>
        <!-- Add/Edit review form — inline at the top when adding; swapped into a
           history node when editing (the pencil affordance). The "Scheduled —
           no outcome yet" outcome choice saves an outcome-less review. -->
        <div class="dd__form" id="dd-form" hidden="">
          <esa-select id="dd-kind" label="Kind" size="sm"></esa-select>
          <div class="we__row">
            <esa-date-picker id="dd-date" label="Date" size="sm"></esa-date-picker
            ><esa-select id="dd-outcome" label="Outcome" size="sm"></esa-select>
          </div>
          <span id="dd-until-wrap" hidden=""
            ><esa-date-picker id="dd-until" label="Blocked until" size="sm"></esa-date-picker></span
          ><esa-text-field
            id="dd-reviewer"
            label="Reviewer"
            placeholder="Name (org)"
            size="sm"
          ></esa-text-field
          ><esa-textarea id="dd-note" label="Note" rows="2" auto-resize="" size="sm"></esa-textarea
          ><esa-input-tag
            id="dd-stips"
            label="Stipulations"
            placeholder="Add stipulation…"
            tags-below="true"
            size="sm"
          ></esa-input-tag>
          <div class="dd__formactions">
            <span id="dd-cancel"
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Cancel</span>
                </button></span
              ></span
            ><span id="dd-save"
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                ><button class="esa-button__native typography-microcopy-xs" type="button">
                  <span class="esa-button__label">Save review</span>
                </button></span
              ></span
            >
          </div>
        </div>
        <!-- Review history — reverse-chron node rail (JS-injected) -->
        <ol class="revs" id="dd-history"></ol>
      </div>
      <div slot="footer" class="wa__footer">
        <span id="dd-close"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label">Close</span>
            </button></span
          ></span
        >
      </div></esa-side-dialog
    ><esa-side-dialog
      id="obs-dialog"
      size="md"
      style="--_width: 520px; --z-modal: 1300; --z-modal-backdrop: 1250"
      position="right"
      ><div slot="header" class="wa__header">
        <div class="wa__headmain">
          <h2 class="wa__title" id="obs-title">Observation</h2>
          <span id="obs-chip"
            ><span
              class="bcn-status-chip"
              data-status="neutral"
              style="--_chip: var(--st-neutral, #3b4754)"
              ><span class="bcn-status-chip__dot"></span
              ><span class="bcn-status-chip__label">—</span></span
            ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
          >
        </div>
        <p class="wa__subtitle" id="obs-sub">—</p>
      </div>
      <div class="wa">
        <div class="od__meta">
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Species code</span
            ><span class="wa__kv-val" id="obs-code">—</span>
          </div>
          <div class="bcn-key-value" data-size="md" data-layout="stack">
            <span class="bcn-key-value__key">Kind</span
            ><span class="wa__kv-val" id="obs-kind">—</span>
          </div>
          <!-- …and 3 more like this (<div class="bcn-key-value">) -->
        </div>
        <section id="obs-log-wrap" hidden="">
          <h3 class="wa__section">
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
                <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path>
                <path d="M2 6h4"></path>
                <!-- …and 4 more like this (<path>) -->
              </svg></span
            >Latest log
          </h3>
          <blockquote class="wa__note wa__note--log" id="obs-log"></blockquote>
        </section>
        <section>
          <h3 class="wa__section">
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
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="22" x2="18" y1="12" y2="12"></line>
                <line x1="6" x2="2" y1="12" y2="12"></line>
                <!-- …and 2 more like this (<line>) -->
              </svg></span
            >Work areas within buffer<span id="obs-impact-count"
              ><span
                class="esa-badge esa-badge--neutral esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">0</span></span
              ></span
            >
          </h3>
          <ul class="od__impact" id="obs-impact"></ul>
        </section>
      </div>
      <div slot="footer" class="wa__footer">
        <!-- "Show on map" (round-5 ch5) — same jump as the work-area drawer's. --><span
          id="obs-showmap"
          class="wa__footer-start"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
            ><button class="esa-button__native typography-microcopy-md" type="button">
              <span class="esa-button__label"
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
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle></svg></span
                >Show on map</span
              >
            </button></span
          ></span
        >
      </div></esa-side-dialog
    ><template id="gc-chip-tpl"
      ><span class="gate__chipwrap" data-astro-cid-4wzd34vz=""
        ><span
          class="bcn-status-chip"
          data-status="cleared"
          style="--_chip: var(--st-cleared, #1a9850)"
          ><span class="bcn-status-chip__dot"></span
          ><span class="bcn-status-chip__label">—</span></span
        ><!-- is:global: a host that re-renders this chip at runtime (permitting-dashboard.astro's
     client script rebuilds its By Status list after applying saved overrides) hand-builds
     the SAME markup via innerHTML rather than re-invoking this component — Astro's scoped
     CSS only matches elements IT rendered (via a build-hashed data-astro-cid-* attribute),
     so a client-injected chip carries the classes but not that attribute and would render
     unstyled. Global selectors are scoped enough on their own (.bcn-status-chip* is
     specific to this one component) that this trades a hairline collision risk for the
     chip working wherever a host reconstructs it — the same reasoning BcnRollupSummary's
     style block already documents. --></span
      ></template
    ><template id="gc-pill-tpl"
      ><span
        class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
        data-astro-cid-xtwxlazl=""
        ><span class="esa-pill__label" data-astro-cid-xtwxlazl="">—</span></span
      >
      <script type="module">
        document.addEventListener(
          `click`,
          (e) => {
            let t = e.target.closest?.(`[data-esa-pill-remove]`);
            if (!t) return;
            e.stopPropagation();
            let n = t.closest(`.esa-pill`);
            n && (n.dispatchEvent(new CustomEvent(`removed`, { bubbles: !0 })), n.remove());
          },
          !0,
        );
      </script></template
    ><template id="dd-edit-tpl"
      ><span class="rev__edit" data-astro-cid-4wzd34vz=""
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          data-astro-cid-5nhxdd72=""
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Edit review"
            title="Edit review"
            data-astro-cid-4wzd34vz="true"
            data-astro-cid-5nhxdd72=""
          >
            <span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                data-astro-cid-wcwfib5m=""
              >
                <path
                  d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                ></path>
                <path d="m15 5 4 4"></path></svg
            ></span></button></span></span
    ></template>
  </div>
</div>
```
