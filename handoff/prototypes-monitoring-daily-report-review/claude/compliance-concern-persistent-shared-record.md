# Compliance concern (persistent, shared record)

A compliance concern is a persistent record (prod's Observation) that many DMRs log against. Collapsed it reads like prod's row; expanded it separates THIS report's log entry (report-only) from the SHARED concern record (Status, Description — prod's observation-detail facts) and shows the full Daily Logs history across reports, this report's entry tagged.

## Key decisions
- Editing the shared record from a DMR is allowed but never silent: a "Shared record" box lists every other DMR that includes the concern with its report status; the editor's helper line repeats it; Save asks for confirmation naming those reports.
- Product decision: record edits ARE allowed from a DMR (with the warning + confirmation), and every other report whose PDF was already generated is flagged "Out of date — regenerate" (in the Shared record list, and logged in the change log). The issued PDF itself never changes silently.
- Record fields are Fulcrum data, so record edits batch-sync like any other correction and are labelled "shared record" in the change log.
- A concern that only this DMR includes (Dust-2347-09112026) says so and skips the confirmation.

## Gotchas
- Concern titles are record IDs (type-number-first-observed date), matching prod; the report shows the record's CURRENT status beside the ID.
- Each generated report is flagged once per concern; drafts are not flagged (they pick up the record change when they are generated).

## Done when
- Expanding a concern shows three parts in order: this report's log entry, the shared record (with the list of other reports), and Daily Logs (newest first).
- Changing Status on Erosion-2331-09092026 opens a confirmation naming Sep 9, Sep 10 and Sep 12; confirming updates the row's status badge, marks the field "Pending sync", and flags Sep 9 and Sep 10 (generated) "Out of date — regenerate"; declining keeps the editor open.

## Markup
```html
<article
  class="bcn-cc"
  data-bcn-cc=""
  data-item-id="ts22-c1"
  data-concern-id="Erosion-2331-09092026"
  aria-label="Compliance concern Erosion-2331-09092026"
  data-cc-ready=""
  data-open=""
>
  <div class="bcn-cc__row">
    <div class="bcn-cc__text">
      <div class="bcn-cc__head">
        <span class="bcn-cc__icon"
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
        ><span class="bcn-cc__title typography-label-md-strong"
          >Erosion-2331-09092026</span
        ><time class="bcn-cc__muted typography-body-sm" datetime="2026-09-11T11:34"
          >11:34 AM</time
        ><span class="bcn-cc__quiet"
          ><span data-bcn-cc-status="" data-status="Open"
            ><span
              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
              ><span class="esa-badge__text">Open</span></span
            ></span
          ><span data-bcn-cc-status="" data-status="In Progress" hidden=""
            ><span
              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
              ><span class="esa-badge__text">In Progress</span></span
            ></span
          ><span data-bcn-cc-status="" data-status="Resolved" hidden=""
            ><span
              class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
              ><span class="esa-badge__text">Resolved</span></span
            ></span
          ></span
        >
      </div>
      <p class="bcn-cc__summary typography-body-md" data-bcn-cc-summary="" hidden="">
        Mesa Civil re-staked part of the fence this morning but about 15 ft is still down
        at the wash crossing. No sediment past the fence line yet. Foreman says it will be
        finished today.
      </p>
    </div>
    <ul class="bcn-cc__photos cluster" data-gap="xs">
      <li class="bcn-cc__thumb frame" data-bcn-dmr-photo="p5">
        <img
          src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%2296%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22173.6%22%20cy%3D%2294%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%20110%20L60%20104%20L80%20112%22%20stroke%3D%22%232f2f2f%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M80%20112%20L120%20128%20L150%20124%22%20stroke%3D%22%232f2f2f%22%20stroke-width%3D%223%22%20fill%3D%22none%22%20stroke-dasharray%3D%226%205%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%2210%22%20y1%3D%2296%22%20x2%3D%2210%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3Cline%20x1%3D%2230%22%20y1%3D%2296%22%20x2%3D%2230%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3Cline%20x1%3D%2250%22%20y1%3D%2296%22%20x2%3D%2250%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%22118%22%20y1%3D%22112%22%20x2%3D%22126%22%20y2%3D%22132%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3C%2Fsvg%3E"
          alt="Section of silt fence down where the access road crosses the wash"
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
        />
      </li>
      <li class="bcn-cc__thumb frame" data-bcn-dmr-photo="p6">
        <img
          src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cpath%20d%3D%22M60%20150%20C80%20120%20110%20110%20130%2078%20L150%2078%20C135%20112%20110%20130%20100%20150Z%22%20fill%3D%22%23bfa77c%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M80%20150%20C95%20125%20118%20110%20138%2080%22%20stroke%3D%22%23a89067%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Cellipse%20cx%3D%2240%22%20cy%3D%22100%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2243.6%22%20cy%3D%2298%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%22110%22%20rx%3D%2210%22%20ry%3D%227%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22174%22%20cy%3D%22108%22%20rx%3D%226%22%20ry%3D%224.5%22%20fill%3D%22%235f6b41%22%2F%3E%3C%2Fsvg%3E"
          alt="Drainage crossing downslope of the CW-TS22 pad"
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
        />
      </li>
    </ul>
    <span class="bcn-cc__toggle"
      ><button
        type="button"
        class="bcn-disclosure"
        aria-expanded="true"
        aria-label="Erosion-2331-09092026 details and daily logs"
        data-bcn-cc-toggle="ts22-c1"
        aria-controls="bcn-cc-panel-ts22-c1"
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
            <path d="m6 9 6 6 6-6"></path></svg
        ></span></button
    ></span>
  </div>
  <div
    class="bcn-cc__panel stack"
    data-gap="lg"
    id="bcn-cc-panel-ts22-c1"
    data-bcn-cc-panel=""
  >
    <section class="stack" data-gap="xs" aria-labelledby="bcn-cc-panel-ts22-c1-entry">
      <h4 id="bcn-cc-panel-ts22-c1-entry" class="bcn-cc__h typography-label-md-strong">
        This report's log entry
      </h4>
      <div
        class="bcn-tracked-field"
        data-bcn-tracked-field=""
        data-field-id="item:ts22-c1:summary"
        data-layout="block"
        data-label="Log entry"
        data-kind="beacon"
        data-marker=""
        data-tf-ready=""
      >
        <div class="bcn-tracked-field__read" data-gap="2xs" data-tf-read="">
          <p data-tf-value="true" class="bcn-tracked-field__value typography-body-md">
            Mesa Civil re-staked part of the fence this morning but about 15 ft is still
            down at the wash crossing. No sediment past the fence line yet. Foreman says
            it will be finished today.
          </p>
          <span class="bcn-tracked-field__aside cluster" data-gap="2xs"
            ><esa-tooltip
              class="bcn-tracked-field__tip"
              text=""
              position="above"
              align="end"
              data-tf-marker="pending"
              hidden=""
              ><span class="bcn-tracked-field__marker" tabindex="0"
                ><span
                  class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Pending sync</span></span
                ><span
                  class="visually-hidden"
                  data-tf-detail=""
                ></span></span></esa-tooltip
            ><esa-tooltip
              class="bcn-tracked-field__tip"
              text=""
              position="above"
              align="end"
              data-tf-marker="synced"
              hidden=""
              ><span class="bcn-tracked-field__marker" tabindex="0"
                ><span
                  class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Synced</span></span
                ><span
                  class="visually-hidden"
                  data-tf-detail=""
                ></span></span></esa-tooltip
            ><esa-tooltip
              class="bcn-tracked-field__tip"
              text=""
              position="above"
              align="end"
              data-tf-marker="beacon"
              hidden=""
              ><span class="bcn-tracked-field__marker" tabindex="0"
                ><span
                  class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Edited in Beacon</span></span
                ><span
                  class="visually-hidden"
                  data-tf-detail=""
                ></span></span></esa-tooltip
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-xs"
                type="button"
                aria-label="Edit Log entry, CW-TS22 · Erosion-2331-09092026"
                title="Edit Log entry, CW-TS22 · Erosion-2331-09092026"
                data-tf-edit="true"
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
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path></svg
                ></span></button></span
          ></span>
        </div>
        <div
          class="bcn-tracked-field__editor stack"
          data-gap="xs"
          data-tf-editor=""
          hidden=""
        >
          <div data-tf-slot=""></div>
          <div class="bcn-tracked-field__footer cluster" data-gap="xs">
            <span data-tf-restore-wrap="" hidden=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-tf-restore="true"
                >
                  <span class="esa-button__label">Restore inspector's text</span>
                </button></span
              ></span
            ><span class="bcn-tracked-field__actions cluster" data-gap="xs"
              ><span
                class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-tf-save="true"
                >
                  <span class="esa-button__label">Save</span>
                </button></span
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  data-tf-cancel="true"
                >
                  <span class="esa-button__label">Cancel</span>
                </button></span
              ></span
            >
          </div>
        </div>
      </div>
    </section>
    <section class="stack" data-gap="sm" aria-labelledby="bcn-cc-panel-ts22-c1-record">
      <h4 id="bcn-cc-panel-ts22-c1-record" class="bcn-cc__h typography-label-md-strong">
        Concern record
      </h4>
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
          <strong class="esa-alert-box__title typography-label-sm-strong"
            >Shared record</strong
          >
          <div class="esa-alert-box__message">
            <p class="bcn-cc__alert-p">
              Changes here update Erosion-2331-09092026 in every daily report that
              includes it:
            </p>
            <ul class="bcn-cc__reports stack" data-gap="2xs">
              <li class="cluster" data-gap="xs">
                <time datetime="2026-09-09">September 9, 2026</time
                ><span>Marcus Oyelaran</span
                ><span class="bcn-cc__quiet"
                  ><span
                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Report Generated</span></span
                  ></span
                ><span data-bcn-cc-outdated="dmr-2026-09-09-oyelaran" hidden=""
                  ><span
                    class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Out of date — regenerate</span></span
                  ></span
                >
              </li>
              <li class="cluster" data-gap="xs">
                <time datetime="2026-09-10">September 10, 2026</time
                ><span>Dana Whitcomb</span
                ><span class="bcn-cc__quiet"
                  ><span
                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Report Generated</span></span
                  ></span
                ><span data-bcn-cc-outdated="dmr-2026-09-10-whitcomb" hidden=""
                  ><span
                    class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Out of date — regenerate</span></span
                  ></span
                >
              </li>
              <li class="cluster" data-gap="xs">
                <time datetime="2026-09-12">September 12, 2026</time
                ><span>Marcus Oyelaran</span
                ><span class="bcn-cc__quiet"
                  ><span
                    class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                    ><span class="esa-badge__text">Draft</span></span
                  ></span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <dl class="bcn-detail-facts" data-columns="2">
        <div class="bcn-detail-fact">
          <dt class="bcn-detail-fact__label">Status</dt>
          <dd class="bcn-detail-fact__value">
            <div
              class="bcn-tracked-field"
              data-bcn-tracked-field=""
              data-field-id="concern:Erosion-2331-09092026:status"
              data-layout="inline"
              data-label="Status"
              data-kind="fulcrum"
              data-marker=""
              data-tf-ready=""
            >
              <div class="bcn-tracked-field__read cluster" data-gap="2xs" data-tf-read="">
                <span data-tf-value="true" class="bcn-tracked-field__value">Open</span
                ><span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="start"
                    data-tf-marker="pending"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Pending sync</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="start"
                    data-tf-marker="synced"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Synced</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><esa-tooltip
                    class="bcn-tracked-field__tip"
                    text=""
                    position="above"
                    align="start"
                    data-tf-marker="beacon"
                    hidden=""
                    ><span class="bcn-tracked-field__marker" tabindex="0"
                      ><span
                        class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                        ><span class="esa-badge__text">Edited in Beacon</span></span
                      ><span
                        class="visually-hidden"
                        data-tf-detail=""
                      ></span></span></esa-tooltip
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-2xs"
                      type="button"
                      aria-label="Edit Status, Erosion-2331-09092026 · shared record"
                      title="Edit Status, Erosion-2331-09092026 · shared record"
                      data-tf-edit="true"
                    >
                      <span class="esa-icon esa-icon--xs" aria-hidden="true"
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
                          <path
                            d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                          ></path>
                          <path d="m15 5 4 4"></path></svg
                      ></span></button></span
                ></span>
              </div>
              <div
                class="bcn-tracked-field__editor stack"
                data-gap="xs"
                data-tf-editor=""
                hidden=""
              >
                <div data-tf-slot=""></div>
                <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                  <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                    ><span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-save="true"
                      >
                        <span class="esa-button__label">Save</span>
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        data-tf-cancel="true"
                      >
                        <span class="esa-button__label">Cancel</span>
                      </button></span
                    ></span
                  >
                </div>
              </div>
            </div>
          </dd>
        </div>
        <div class="bcn-detail-fact">
          <dt class="bcn-detail-fact__label">First Observation</dt>
          <dd class="bcn-detail-fact__value">
            <time datetime="2026-09-09T14:20:00">September 9, 2026, 2:20 PM</time>
          </dd>
        </div>
        <div class="bcn-detail-fact">
          <dt class="bcn-detail-fact__label">Reporter</dt>
          <dd class="bcn-detail-fact__value">Marcus Oyelaran</dd>
        </div>
        <div class="bcn-detail-fact">
          <dt class="bcn-detail-fact__label">Work Site</dt>
          <dd class="bcn-detail-fact__value">CW-TS22</dd>
        </div>
        <div class="bcn-detail-fact" data-full="true">
          <dt class="bcn-detail-fact__label">Description</dt>
          <dd class="bcn-detail-fact__value">
            <span class="bcn-cc__prose"
              ><div
                class="bcn-tracked-field"
                data-bcn-tracked-field=""
                data-field-id="concern:Erosion-2331-09092026:description"
                data-layout="block"
                data-label="Description"
                data-kind="fulcrum"
                data-marker=""
                data-tf-ready=""
              >
                <div class="bcn-tracked-field__read" data-gap="2xs" data-tf-read="">
                  <p
                    data-tf-value="true"
                    class="bcn-tracked-field__value typography-body-md"
                  >
                    Silt fence undercut and down where the CW-TS22 access road crosses the
                    wash. Risk of sediment reaching the drainage if it rains before
                    repair.
                  </p>
                  <span class="bcn-tracked-field__aside cluster" data-gap="2xs"
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="end"
                      data-tf-marker="pending"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--warning esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Pending sync</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="end"
                      data-tf-marker="synced"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--success esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Synced</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><esa-tooltip
                      class="bcn-tracked-field__tip"
                      text=""
                      position="above"
                      align="end"
                      data-tf-marker="beacon"
                      hidden=""
                      ><span class="bcn-tracked-field__marker" tabindex="0"
                        ><span
                          class="esa-badge esa-badge--info esa-badge--sm typography-microcopy-xs-strong"
                          ><span class="esa-badge__text">Edited in Beacon</span></span
                        ><span
                          class="visually-hidden"
                          data-tf-detail=""
                        ></span></span></esa-tooltip
                    ><span
                      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        aria-label="Edit Description, Erosion-2331-09092026 · shared record"
                        title="Edit Description, Erosion-2331-09092026 · shared record"
                        data-tf-edit="true"
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
                            <path
                              d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                            ></path>
                            <path d="m15 5 4 4"></path></svg
                        ></span></button></span
                  ></span>
                </div>
                <div
                  class="bcn-tracked-field__editor stack"
                  data-gap="xs"
                  data-tf-editor=""
                  hidden=""
                >
                  <div data-tf-slot=""></div>
                  <div class="bcn-tracked-field__footer cluster" data-gap="xs">
                    <span class="bcn-tracked-field__actions cluster" data-gap="xs"
                      ><span
                        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-save="true"
                        >
                          <span class="esa-button__label">Save</span>
                        </button></span
                      ><span
                        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          data-tf-cancel="true"
                        >
                          <span class="esa-button__label">Cancel</span>
                        </button></span
                      ></span
                    >
                  </div>
                </div>
              </div></span
            >
          </dd>
        </div>
      </dl>
    </section>
    <section class="stack" data-gap="sm" aria-labelledby="bcn-cc-panel-ts22-c1-logs">
      <h4
        id="bcn-cc-panel-ts22-c1-logs"
        class="bcn-cc__h cluster typography-label-md-strong"
        data-gap="xs"
      >
        <span>Daily Logs</span
        ><span
          class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
          ><span class="esa-badge__text">4</span></span
        >
      </h4>
      <ul class="bcn-cc__logs stack" data-gap="sm">
        <li class="bcn-cc__log">
          <div class="bcn-cc__log-text stack" data-gap="2xs">
            <div class="bcn-cc__muted cluster typography-body-sm" data-gap="xs">
              <span class="bcn-cc__person">Marcus Oyelaran</span
              ><span aria-hidden="true">·</span
              ><time datetime="2026-09-12T08:40:00">Sep 12, 2026, 8:40 AM</time
              ><span class="bcn-cc__quiet"
                ><span
                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Draft</span></span
                ></span
              >
            </div>
            <p class="bcn-cc__log-notes typography-body-md">
              Fence reinstalled and keyed in along the full run. Recommend resolving.
            </p>
          </div>
        </li>
        <li class="bcn-cc__log" data-this-report="true">
          <div class="bcn-cc__log-text stack" data-gap="2xs">
            <div class="bcn-cc__muted cluster typography-body-sm" data-gap="xs">
              <span class="bcn-cc__person">Dana Whitcomb</span
              ><span aria-hidden="true">·</span
              ><time datetime="2026-09-11T11:34:00">Sep 11, 2026, 11:34 AM</time
              ><span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">This report</span></span
              >
            </div>
            <p class="bcn-cc__log-notes typography-body-md" data-bcn-cc-this-log="">
              Mesa Civil re-staked part of the fence this morning but about 15 ft is still
              down at the wash crossing. No sediment past the fence line yet. Foreman says
              it will be finished today.
            </p>
          </div>
          <ul class="bcn-cc__photos cluster" data-gap="xs">
            <li class="bcn-cc__thumb frame" data-bcn-dmr-photo="p5">
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%2296%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22173.6%22%20cy%3D%2294%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%20110%20L60%20104%20L80%20112%22%20stroke%3D%22%232f2f2f%22%20stroke-width%3D%223%22%20fill%3D%22none%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M80%20112%20L120%20128%20L150%20124%22%20stroke%3D%22%232f2f2f%22%20stroke-width%3D%223%22%20fill%3D%22none%22%20stroke-dasharray%3D%226%205%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%2210%22%20y1%3D%2296%22%20x2%3D%2210%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3Cline%20x1%3D%2230%22%20y1%3D%2296%22%20x2%3D%2230%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3Cline%20x1%3D%2250%22%20y1%3D%2296%22%20x2%3D%2250%22%20y2%3D%22112%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%0A%20%20%20%20%3Cline%20x1%3D%22118%22%20y1%3D%22112%22%20x2%3D%22126%22%20y2%3D%22132%22%20stroke%3D%22%236e5a3a%22%20stroke-width%3D%223%22%2F%3E%3C%2Fsvg%3E"
                alt="Section of silt fence down where the access road crosses the wash"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </li>
            <li class="bcn-cc__thumb frame" data-bcn-dmr-photo="p6">
              <img
                src="data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20150%22%20preserveAspectRatio%3D%22xMidYMid%20slice%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23cfdde6%22%2F%3E%3Cpath%20d%3D%22M0%2070%20L40%2052%20L75%2062%20L120%2044%20L165%2060%20L200%2050%20L200%2080%20L0%2080Z%22%20fill%3D%22%23b9c3c4%22%2F%3E%3Crect%20y%3D%2278%22%20width%3D%22200%22%20height%3D%2272%22%20fill%3D%22%23d9c7a3%22%2F%3E%3Cpath%20d%3D%22M60%20150%20C80%20120%20110%20110%20130%2078%20L150%2078%20C135%20112%20110%20130%20100%20150Z%22%20fill%3D%22%23bfa77c%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M80%20150%20C95%20125%20118%20110%20138%2080%22%20stroke%3D%22%23a89067%22%20stroke-width%3D%222%22%20fill%3D%22none%22%2F%3E%3Cellipse%20cx%3D%2240%22%20cy%3D%22100%22%20rx%3D%229%22%20ry%3D%226.3%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%2243.6%22%20cy%3D%2298%22%20rx%3D%225.3999999999999995%22%20ry%3D%224.05%22%20fill%3D%22%235f6b41%22%2F%3E%3Cellipse%20cx%3D%22170%22%20cy%3D%22110%22%20rx%3D%2210%22%20ry%3D%227%22%20fill%3D%22%237d8a5a%22%2F%3E%3Cellipse%20cx%3D%22174%22%20cy%3D%22108%22%20rx%3D%226%22%20ry%3D%224.5%22%20fill%3D%22%235f6b41%22%2F%3E%3C%2Fsvg%3E"
                alt="Drainage crossing downslope of the CW-TS22 pad"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
            </li>
          </ul>
        </li>
        <li class="bcn-cc__log">
          <div class="bcn-cc__log-text stack" data-gap="2xs">
            <div class="bcn-cc__muted cluster typography-body-sm" data-gap="xs">
              <span class="bcn-cc__person">Dana Whitcomb</span
              ><span aria-hidden="true">·</span
              ><time datetime="2026-09-10T10:05:00">Sep 10, 2026, 10:05 AM</time
              ><span class="bcn-cc__quiet"
                ><span
                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Report Generated</span></span
                ></span
              >
            </div>
            <p class="bcn-cc__log-notes typography-body-md">
              Fence still down. Repair scheduled for tomorrow morning. No sediment past
              the fence line.
            </p>
          </div>
        </li>
        <li class="bcn-cc__log">
          <div class="bcn-cc__log-text stack" data-gap="2xs">
            <div class="bcn-cc__muted cluster typography-body-sm" data-gap="xs">
              <span class="bcn-cc__person">Marcus Oyelaran</span
              ><span aria-hidden="true">·</span
              ><time datetime="2026-09-09T14:20:00">Sep 9, 2026, 2:20 PM</time
              ><span class="bcn-cc__quiet"
                ><span
                  class="esa-badge esa-badge--primary esa-badge--sm typography-microcopy-xs-strong"
                  ><span class="esa-badge__text">Report Generated</span></span
                ></span
              >
            </div>
            <p class="bcn-cc__log-notes typography-body-md">
              About 40 ft of silt fence undercut by overnight runoff at the wash crossing.
              Mesa Civil foreman notified.
            </p>
          </div>
        </li>
      </ul>
    </section>
  </div>
</article>
```

## Styles
```css
/* Type comes from .typography-body-md on the element, leading included — the
       role leads at normal, which is what a one-word label beside a 22px track
       wants. This carried a line-height override back when body-md was relaxed
       (1.8) and the row outgrew the track; the role moved, so the override went. */

    /* FORCED COLORS. The worst case in the kit: on/off is --_bg-on vs --_bg-off
       (both force-adjusted to the same Canvas) and the thumb's ONLY separation
       from the track is its background plus --elevation-1, which is deleted. The
       control becomes an empty pill with an invisible thumb, and the position
       channel is unreadable because the thing being positioned cannot be seen.
       There is no "On"/"Off" text to fall back on — 'label' is the field name and
       is identical in both states.

       Two channels are restored: the thumb FILL (Canvas when off, Highlight when
       on) and its POSITION, which already worked.

       The 'left' re-declaration is not optional. ':host([checked]) .thumb' above
       computes '--_track-w - --_thumb - 2px', which assumes --_track-w is the
       track's padding-box width. Adding a border under box-sizing: border-box
       shrinks that box by 2px while the calc still uses the full value, so the
       checked thumb would overshoot the right edge at every one of the four
       sizes. -4px absorbs it. */
    @media (forced-colors: active) {
      .track {
        box-sizing: border-box;
        border: 1px solid CanvasText;
        background: Canvas;
      }
/* Both message nodes ALWAYS render — a live region created at the same moment as
       its text is routinely not announced, so it has to already exist. When empty they
       carry .visually-hidden, which takes them out of flow: .field is a flex column
       with a gap, so an in-flow empty node would spend 4px of dead space each.
       Deliberately NOT display:none, which drops them from the accessibility tree. */

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
    }
/* Both message nodes are ALWAYS rendered — a live region created at the same moment
       as its text is routinely not announced, so it has to already exist. When there is
       nothing to say they carry .visually-hidden, which takes them out of flow: .field
       is a flex column with a gap, so an in-flow empty node would spend 4px of dead
       space per message. Deliberately NOT display:none, which would drop them from the
       accessibility tree and defeat the arrangement entirely. */

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-100, 4px);
    }
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-2xs-strong {
  font-family: var(--typography-microcopy-2xs-strong-font-family);
  font-size: var(--typography-microcopy-2xs-strong-font-size);
  font-weight: var(--typography-microcopy-2xs-strong-font-weight);
  line-height: var(--typography-microcopy-2xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-2xs-strong-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
}
.visually-hidden--focusable:focus,
.visually-hidden--focusable:focus-within,
.visually-hidden--focusable:active {
  position: static;
  width: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  white-space: normal;
  clip: auto;
  clip-path: none;
}
.bcn-search-trigger .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover:var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-disclosure{border-radius:var(--radius-100);width:20px;height:20px;color:var(--color-content-default-tertiary);cursor:pointer;background:0 0;border:0;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}
.bcn-disclosure:hover{background:var(--color-background-elevation-sunken);color:var(--color-content-default-secondary)}
.bcn-disclosure .esa-icon{transition:transform .15s}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-countchip__num .esa-badge{--badge-radius:var(--radius-full);--badge-bg:var(--color-border-default);--badge-text-color:var(--color-content-default-secondary);box-sizing:border-box;font-variant-numeric:tabular-nums;min-width:19px;height:19px;box-shadow:0 0 0 1.5px var(--color-background-elevation-raised);justify-content:center;align-items:center;padding:0 4px;font-size:.8125rem;line-height:1;display:inline-flex}
.bcn-ev-staging__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-targets__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-attached__mark .esa-badge{--badge-bg:var(--color-background-utility-info-subtle);--badge-text-color:var(--color-content-default);border:1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);font-weight:var(--typography-font-weight-medium)}
.bcn-ev-row__mark .esa-badge{--badge-bg:var(--color-background-utility-info-subtle);--badge-text-color:var(--color-content-default);border:1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);font-weight:var(--typography-font-weight-medium)}
.bcn-ev-row__tags .esa-badge{--badge-bg:var(--bcn-gray-100);--badge-text-color:var(--bcn-gray-700);font-weight:var(--typography-font-weight-medium)}
.topbar__right .esa-icon-button{color:var(--color-content-default-secondary)}
.user-panel__item .esa-icon{color:var(--bcn-gray-500)}
.user-panel__item--danger .esa-icon{color:var(--color-background-utility-danger)}
.project-switcher__trigger>.esa-icon:first-child{color:var(--bcn-gray-500);flex-shrink:0}
.nav-section__header:hover .esa-icon,.nav-section--active .nav-section__header,.nav-section--active .nav-section__header .esa-icon{color:var(--color-background-brand)}
.nav-section__header>.esa-icon:first-child{color:var(--bcn-gray-950);flex-shrink:0;transition:color .15s}
.nav-section__header>.esa-icon:last-child{color:var(--bcn-gray-400);flex-shrink:0;transition:transform .15s,opacity .2s ease-in-out}
.nav-section--collapsed .nav-section__header>.esa-icon:last-child{transform:rotate(-90deg)}
.side-nav.collapsed .nav-section__title,.side-nav.collapsed .nav-section__header>.esa-icon:last-child{display:none}
.bcn-detail-facts{grid-template-columns:minmax(0,1fr);margin:0;display:grid}
.bcn-detail-facts>.bcn-detail-fact+.bcn-detail-fact{border-top:var(--border-width-default,1px) solid var(--color-border-default-subtle)}
.bcn-detail-facts[data-columns="2"]>.bcn-detail-fact:nth-child(2){border-top:none}
.bcn-detail-facts[data-columns="2"]>.bcn-detail-fact[data-full]{grid-column:1/-1}
.bcn-detail-fact{gap:var(--spacing-100,.25rem);padding-block:var(--spacing-300,.75rem);flex-direction:column;display:flex}
.bcn-detail-fact__label{font-size:var(--typography-label-md-font-size);color:var(--color-content-default-secondary)}
.bcn-detail-fact__value{font-size:var(--typography-body-md-font-size,1rem);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);overflow-wrap:anywhere;margin:0}
.bcn-detail-fact__note{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-regular,400);color:var(--color-content-default-secondary);font-style:italic;display:block}
.bcn-tracked-field{gap:var(--spacing-050,.125rem);flex-direction:column;min-width:0;display:flex}
.bcn-tracked-field [hidden]{display:none}
.bcn-tracked-field__key{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-medium);color:var(--form-label-color)}
.bcn-tracked-field[data-layout=fact] .bcn-tracked-field__value{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default)}
.bcn-tracked-field__value{overflow-wrap:anywhere;min-width:0}
.bcn-tracked-field[data-layout=block] .bcn-tracked-field__read{align-items:start;column-gap:var(--spacing-200,.5rem);grid-template-columns:minmax(0,1fr) auto;display:grid}
.bcn-tracked-field[data-layout=block] .bcn-tracked-field__value{color:var(--color-content-default);margin:0}
.bcn-tracked-field[data-layout=inline]{align-items:center;column-gap:var(--spacing-100,.25rem);vertical-align:middle;flex-flow:wrap;display:inline-flex}
.bcn-tracked-field[data-layout=inline][data-editing]{flex-direction:column;align-items:stretch;width:100%;display:flex}
.bcn-tracked-field__aside{flex-wrap:nowrap}
.bcn-tracked-field[data-layout=inline]{border-radius:var(--radius-sm);position:relative}
.bcn-tracked-field[data-layout=inline]:not([data-editing]){place-self:flex-start start}
.bcn-tracked-field[data-layout=inline]:not([data-editing]) .bcn-tracked-field__read{flex-wrap:nowrap}
.bcn-tracked-field[data-layout=inline]:not([data-editing]) [data-tf-edit]{aspect-ratio:auto;opacity:0;block-size:auto;min-block-size:0;inline-size:auto;min-inline-size:0;position:absolute;inset:0}
.bcn-tracked-field[data-layout=inline]:not([data-editing]):hover{background:var(--color-background-default-hover)}
.bcn-tracked-field[data-layout=inline]:has([data-tf-edit]:focus-visible){outline:var(--focus-ring-width,2px) solid var(--focus-ring-color);outline-offset:var(--focus-ring-offset,2px)}
.bcn-tracked-field__editor{font-style:normal;font-weight:var(--typography-font-weight-regular,400)}
.bcn-tracked-field[data-layout=inline] .bcn-tracked-field__tip{z-index:1;position:relative}
.bcn-tracked-field__marker{border-radius:var(--radius-sm);display:inline-flex}
.bcn-tracked-field__marker:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color);outline-offset:var(--focus-ring-offset,2px)}
.bcn-tracked-field__editor{padding-block:var(--spacing-100,.25rem)}
.bcn-tracked-field__actions{margin-inline-start:auto}
.bcn-cc{padding:var(--spacing-300,.75rem);border:var(--border-width-default,1px) solid var(--color-border-default-subtle,#efefef);border-radius:var(--radius-lg,.75rem);background:var(--color-background-default,#fafafa)}
.bcn-cc__row{align-items:flex-start;gap:var(--spacing-300,.75rem) var(--spacing-400,1rem);flex-wrap:wrap;display:flex}
.bcn-cc__text{flex-direction:column;flex:16rem;min-width:0;display:flex}
.bcn-cc__head{align-items:center;gap:var(--spacing-200,.5rem) var(--spacing-300,.75rem);flex-wrap:wrap;display:flex}
.bcn-cc__icon{color:var(--color-content-default-secondary,#646464);display:inline-flex}
.bcn-cc__title{color:var(--color-content-default,#202020)}
.bcn-cc__muted{color:var(--color-content-default-secondary,#646464)}
.bcn-cc__summary{padding:var(--spacing-200,.5rem) 0 0 var(--spacing-400,1rem);color:var(--color-content-default,#202020);margin:0}
.bcn-cc__summary[hidden]{display:none}
.bcn-cc__quiet{--badge-bg:var(--color-background-elevation-sunken,#efefef);--badge-text-color:var(--color-content-default-secondary,#646464);display:inline-flex}
.bcn-cc__quiet [hidden]{display:none}
.bcn-cc__photos,.bcn-cc__logs,.bcn-cc__reports{margin:0;padding:0;list-style:none}
.bcn-cc__photos{flex:0 auto;justify-content:flex-end;max-width:40%}
.bcn-cc__thumb{--frame-ratio:1;border-radius:var(--radius-sm,.25rem);inline-size:2.5rem}
.bcn-cc [data-excluded] img{opacity:.4;filter:grayscale()}
.bcn-cc__toggle{align-items:center;min-block-size:1.5rem;display:inline-flex}
.bcn-cc__panel{padding:var(--spacing-400,1rem) 0 var(--spacing-100,.25rem) var(--spacing-400,1rem);border-block-start:var(--border-width-default,1px) solid var(--color-border-default,#dcdcdc);margin-block-start:var(--spacing-300,.75rem)}
.bcn-cc__panel[hidden]{display:none}
.bcn-cc__h{color:var(--color-content-default,#202020);margin:0}
.bcn-cc__alert-p{margin:0}
.bcn-cc__reports{margin-block-start:var(--spacing-100,.25rem)}
.bcn-cc__prose{font-weight:var(--typography-font-weight-regular,400);display:block}
.bcn-cc__log{align-items:flex-start;gap:var(--spacing-300,.75rem) var(--spacing-400,1rem);padding:var(--spacing-300,.75rem);border:var(--border-width-default,1px) solid var(--color-border-default-subtle,#efefef);border-radius:var(--radius-md,.5rem);background:var(--color-background-elevation-raised,#fcfcfc);flex-wrap:wrap;display:flex}
.bcn-cc__log-text{flex:16rem;min-width:0}
.bcn-cc__person{font-weight:var(--typography-font-weight-semibold,600);color:var(--color-content-default,#202020)}
.bcn-cc__log-notes{color:var(--color-content-default,#202020);margin:0;padding-inline-start:var(--spacing-400,1rem)}
.bcn-dmr-wa__heading .esa-icon,.bcn-dmr-wa__subhead .esa-icon{color:var(--color-content-default-secondary,#646464)}
.esa-button{--_btn-pad-y:var(--spacing-300,.75rem);--_btn-padding-x:var(--spacing-300,.75rem);--_btn-radius:var(--button-radius-md,.5rem);--_accent:var(--color-background-brand,#46a758);--_accent-hover:var(--color-background-brand-hover,#3e9b4f);--_on:var(--color-content-default-knockout,#fcfcfc);--_accent-text:var(--_accent);--_btn-tint-hover:color-mix(in srgb, var(--_accent) 8%, transparent);--_btn-tint-active:color-mix(in srgb, var(--_accent) 14%, transparent);display:inline-block}
.esa-button--xs{--_btn-pad-y:var(--spacing-200,.5rem);--_btn-padding-x:var(--spacing-200,.5rem);--_btn-radius:var(--button-radius-xs,4px)}
.esa-button--sm{--_btn-pad-y:var(--spacing-250,.625rem);--_btn-padding-x:var(--spacing-250,.625rem);--_btn-radius:var(--button-radius-sm,4px)}
.esa-button--lg{--_btn-pad-y:var(--spacing-400,1rem);--_btn-padding-x:var(--spacing-400,1rem);--_btn-radius:var(--button-radius-lg,8px)}
.esa-button--variant-primary{--_accent-text:var(--color-content-brand)}
.esa-button--variant-secondary{--_accent:var(--color-background-brand-muted);--_accent-hover:var(--color-background-brand-muted-hover);--_on:var(--color-content-on-brand-muted,var(--color-content-default));--_accent-text:var(--color-content-brand);--_accent-border:var(--color-border-default-strong,#bbb)}
.esa-button--variant-danger{--_accent:var(--color-background-utility-danger);--_accent-hover:var(--color-background-utility-danger-hover);--_accent-text:var(--color-content-utility-danger)}
.esa-button--variant-success{--_accent:var(--color-background-utility-success);--_accent-hover:var(--color-background-utility-success-hover);--_on:var(--color-content-on-utility-success);--_accent-text:var(--color-content-utility-success)}
.esa-button--variant-warning{--_accent:var(--color-background-utility-warning);--_accent-hover:var(--color-background-utility-warning-hover);--_on:var(--button-on-warning,var(--color-content-on-utility-warning,#4f3422));--_accent-text:var(--color-content-utility-warning)}
.esa-button--variant-info{--_accent:var(--color-background-utility-info);--_accent-hover:var(--color-background-utility-info-hover);--_accent-text:var(--color-content-utility-info)}
.esa-button--variant-ai{--_accent:var(--color-background-ai);--_accent-hover:var(--color-background-ai-hover);--_accent-text:var(--color-content-ai)}
.esa-button--appearance-fill .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent-border,transparent)}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled),.esa-button--appearance-fill.esa-button--active .esa-button__native{background:var(--_accent-hover)}
.esa-button--appearance-outline .esa-button__native,.esa-button--appearance-dashed .esa-button__native{color:var(--_accent-text);border-color:var(--_accent);background:0 0}
.esa-button--appearance-dashed .esa-button__native{border-style:dashed}
.esa-button--appearance-outline .esa-button__native:hover:not(:disabled),.esa-button--appearance-dashed .esa-button__native:hover:not(:disabled){background:var(--_btn-tint-hover)}
.esa-button--appearance-outline.esa-button--active .esa-button__native,.esa-button--appearance-dashed.esa-button--active .esa-button__native{background:var(--_btn-tint-active)}
.esa-button--appearance-soft .esa-button__native{background:color-mix(in srgb, var(--color-background-elevation-sunken,#f0f0f0) 45%, var(--color-background-elevation-raised,#fcfcfc));color:var(--_accent-text);border-color:var(--color-border-default-strong,#bbb)}
.esa-button--appearance-soft .esa-button__native:hover:not(:disabled),.esa-button--appearance-soft.esa-button--active .esa-button__native{background:var(--_accent);color:var(--_on);border-color:var(--_accent)}
.esa-button--variant-ghost .esa-button__native{color:var(--color-content-default,#202020);background:0 0;border-color:#0000}
.esa-button--variant-ghost.esa-button--appearance-outline .esa-button__native,.esa-button--variant-ghost.esa-button--appearance-dashed .esa-button__native{border-color:var(--color-border-default,#cecece)}
.esa-button--variant-ghost .esa-button__native:hover:not(:disabled),.esa-button--variant-ghost.esa-button--active .esa-button__native{background:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-button--variant-chrome .esa-button__native{color:inherit;background:0 0;border-color:#0000}
.esa-button--variant-chrome .esa-button__native:hover:not(:disabled),.esa-button--variant-chrome.esa-button--active .esa-button__native,.esa-button--variant-chrome.esa-button--current .esa-button__native{background:var(--button-chrome-bg-hover,color-mix(in srgb, currentColor 14%, transparent))}
.esa-button--variant-chrome .esa-button__native:focus-visible{outline-color:currentColor}
.esa-button__native{justify-content:center;align-items:center;gap:var(--spacing-200,8px);width:100%;padding-block:var(--_btn-pad-y);padding-inline:var(--_btn-padding-x);border:var(--border-width-default,1px) solid transparent;border-radius:var(--_btn-radius);cursor:pointer;transition:background var(--transition-fast,.15s ease), border-color var(--transition-fast,.15s ease);-webkit-appearance:none;appearance:none;text-decoration:none;display:inline-flex}
.esa-button__native:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.esa-button--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}
.esa-button--icon-only .esa-button__native{padding-inline:var(--_btn-pad-y);aspect-ratio:1}
summary.esa-button{cursor:pointer;list-style:none}
summary.esa-button::-webkit-details-marker{display:none}
summary.esa-button:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px);border-radius:var(--_btn-radius)}
summary.esa-button--variant-chrome:focus-visible{outline-color:currentColor}
.esa-button__label{white-space:nowrap}
.esa-button__label--hidden{clip-path:inset(50%);white-space:nowrap;width:1px;height:1px;position:absolute;overflow:hidden}
.esa-button__spinner{width:1em;height:1em;animation:esa-button-spin var(--animation-spin,.75s linear infinite);border:2px solid;border-right-color:#0000;border-radius:50%;display:inline-block}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-body-sm{font-family:var(--typography-body-sm-font-family);font-size:var(--typography-body-sm-font-size);font-weight:var(--typography-body-sm-font-weight);line-height:var(--typography-body-sm-line-height);letter-spacing:var(--typography-body-sm-letter-spacing)}
.typography-label-sm-strong{font-family:var(--typography-label-sm-strong-font-family);font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight);line-height:var(--typography-label-sm-strong-line-height);letter-spacing:var(--typography-label-sm-strong-letter-spacing)}
.typography-label-md-strong{font-family:var(--typography-label-md-strong-font-family);font-size:var(--typography-label-md-strong-font-size);font-weight:var(--typography-label-md-strong-font-weight);line-height:var(--typography-label-md-strong-line-height);letter-spacing:var(--typography-label-md-strong-letter-spacing)}
.typography-microcopy-2xs{font-family:var(--typography-microcopy-2xs-font-family);font-size:var(--typography-microcopy-2xs-font-size);font-weight:var(--typography-microcopy-2xs-font-weight);line-height:var(--typography-microcopy-2xs-line-height);letter-spacing:var(--typography-microcopy-2xs-letter-spacing)}
.typography-microcopy-xs{font-family:var(--typography-microcopy-xs-font-family);font-size:var(--typography-microcopy-xs-font-size);font-weight:var(--typography-microcopy-xs-font-weight);line-height:var(--typography-microcopy-xs-line-height);letter-spacing:var(--typography-microcopy-xs-letter-spacing)}
.typography-microcopy-2xs-subtle{font-family:var(--typography-microcopy-2xs-subtle-font-family);font-size:var(--typography-microcopy-2xs-subtle-font-size);font-weight:var(--typography-microcopy-2xs-subtle-font-weight);line-height:var(--typography-microcopy-2xs-subtle-line-height);letter-spacing:var(--typography-microcopy-2xs-subtle-letter-spacing)}
.typography-microcopy-xs-subtle{font-family:var(--typography-microcopy-xs-subtle-font-family);font-size:var(--typography-microcopy-xs-subtle-font-size);font-weight:var(--typography-microcopy-xs-subtle-font-weight);line-height:var(--typography-microcopy-xs-subtle-line-height);letter-spacing:var(--typography-microcopy-xs-subtle-letter-spacing)}
.typography-microcopy-2xs-strong{font-family:var(--typography-microcopy-2xs-strong-font-family);font-size:var(--typography-microcopy-2xs-strong-font-size);font-weight:var(--typography-microcopy-2xs-strong-font-weight);line-height:var(--typography-microcopy-2xs-strong-line-height);letter-spacing:var(--typography-microcopy-2xs-strong-letter-spacing)}
.typography-microcopy-xs-strong{font-family:var(--typography-microcopy-xs-strong-font-family);font-size:var(--typography-microcopy-xs-strong-font-size);font-weight:var(--typography-microcopy-xs-strong-font-weight);line-height:var(--typography-microcopy-xs-strong-line-height);letter-spacing:var(--typography-microcopy-xs-strong-letter-spacing)}
.esa-collapsible__summary .esa-icon{color:var(--color-content-default-secondary,#646464);flex-shrink:0}
.visually-hidden{white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%);border:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}
.visually-hidden--focusable:focus,.visually-hidden--focusable:focus-within,.visually-hidden--focusable:active{white-space:normal;clip:auto;clip-path:none;width:auto;height:auto;margin:0;position:static;overflow:visible}
.esa-badge{--_badge-bg:var(--badge-bg,var(--color-background-brand,#46a758));--_badge-text:var(--badge-text-color,var(--color-content-default-knockout,#fcfcfc));--_badge-padding-y:var(--spacing-150,.375rem);--_badge-padding-x:var(--spacing-200,.5rem);min-width:calc(1lh + 2 * var(--_badge-padding-y));padding-block:var(--_badge-padding-y);padding-inline:var(--_badge-padding-x);border-radius:var(--radius-chip,var(--radius-sm,.25rem));background:var(--_badge-bg);color:var(--_badge-text);white-space:nowrap;box-sizing:border-box;justify-content:center;align-items:center;display:inline-flex}
.esa-badge--xs{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-100,.25rem)}
.esa-badge--sm{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-150,.375rem)}
.esa-badge--lg{--_badge-padding-y:var(--spacing-250,.625rem);--_badge-padding-x:var(--spacing-300,.75rem)}
.esa-badge--secondary{--_badge-bg:var(--color-background-brand-muted,#e9f6e9);--_badge-text:var(--color-content-on-brand-muted,#203c25)}
.esa-badge--success{--_badge-bg:var(--color-background-utility-success-muted,#e6f6eb);--_badge-text:var(--color-content-utility-success,#218358);--_badge-border:var(--color-border-utility-success,#adddc0)}
.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-muted,#fff7c2);--_badge-text:var(--color-content-utility-warning,#ab6400);--_badge-border:var(--color-border-utility-warning,#f3d673)}
.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-muted,#feebec);--_badge-text:var(--color-content-utility-danger,#ce2c31);--_badge-border:var(--color-border-utility-danger,#fdbdbe)}
.esa-badge--info{--_badge-bg:var(--color-background-utility-info-muted,#e6f4fe);--_badge-text:var(--color-content-utility-info,#0d74ce);--_badge-border:var(--color-border-utility-info,#acd8fc)}
.esa-badge--success:not(.esa-badge--dot),.esa-badge--warning:not(.esa-badge--dot),.esa-badge--danger:not(.esa-badge--dot),.esa-badge--info:not(.esa-badge--dot){border:1px solid var(--_badge-border,transparent)}
.esa-badge--dot{border-radius:var(--radius-pill,9999px);width:8px;min-width:8px;height:8px;padding:0}
.esa-badge--dot.esa-badge--primary{--_badge-bg:var(--color-background-brand-hover,#3e9b4f)}
.esa-badge--dot.esa-badge--secondary{--_badge-bg:var(--color-background-brand,#46a758)}
.esa-badge--dot.esa-badge--success{--_badge-bg:var(--color-background-utility-success-hover,#2b9a66)}
.esa-badge--dot.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-hover,#ffba18)}
.esa-badge--dot.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-hover,#dc3e42)}
.esa-badge--dot.esa-badge--info{--_badge-bg:var(--color-background-utility-info-hover,#0588f0)}
.esa-badge--dot{background:canvastext;border:0;outline:1px solid canvastext}
.esa-alert-box{--_alert-bg:var(--color-background-utility-info-subtle,#fbfdff);--_alert-border:var(--color-border-utility-info,#acd8fc);--_alert-accent:var(--color-content-utility-info,#0d74ce);--_alert-icon-color:var(--_alert-accent);--_alert-title-color:var(--_alert-accent);--_alert-text-color:var(--alert-box-text-color,var(--color-content-default-secondary,#646464));align-items:flex-start;gap:var(--spacing-300,.75rem);padding:var(--spacing-300,.75rem) var(--spacing-400,1rem);border:var(--border-width-default,1px) solid var(--_alert-border);border-radius:var(--radius-md,.5rem);background:var(--_alert-bg);display:flex}
.esa-alert-box--success{--_alert-bg:var(--color-background-utility-success-subtle,#fbfefc);--_alert-border:var(--color-border-utility-success,#adddc0);--_alert-accent:var(--color-content-utility-success,#218358)}
.esa-alert-box--warning{--_alert-bg:var(--color-background-utility-warning-subtle,#fefdfb);--_alert-border:var(--color-border-utility-warning,#f3d673);--_alert-accent:var(--color-content-utility-warning,#ab6400)}
.esa-alert-box--danger{--_alert-bg:var(--color-background-utility-danger-subtle,#fffcfc);--_alert-border:var(--color-border-utility-danger,#fdbdbe);--_alert-accent:var(--color-content-utility-danger,#ce2c31)}
.esa-alert-box__icon{color:var(--_alert-icon-color);flex-shrink:0;padding-top:1px}
.esa-alert-box__body{flex:1;min-width:0}
.esa-alert-box__title{color:var(--_alert-title-color);margin-bottom:var(--spacing-050,.125rem);display:block}
.esa-alert-box__message{color:var(--_alert-text-color)}
.esa-alert-box__dismiss{border-radius:var(--radius-sm,.25rem);width:24px;height:24px;color:var(--color-content-default-secondary,#646464);cursor:pointer;transition:color var(--transition-fast,.15s ease), background var(--transition-fast,.15s ease);background:0 0;border:none;flex-shrink:0;justify-content:center;align-items:center;padding:0;display:inline-flex}
.esa-alert-box__dismiss:hover{color:var(--color-content-default,#202020);background:var(--color-background-overlay-strong-hover,#0000000f)}
.esa-alert-box__dismiss:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.esa-icon{--_icon-size:var(--icon-size-md,20px);width:var(--_icon-size);height:var(--_icon-size);color:inherit;justify-content:center;align-items:center;display:inline-flex}
.esa-icon--xs{--_icon-size:var(--icon-size-xs,14px)}
.esa-icon--sm{--_icon-size:var(--icon-size-sm,16px)}
.esa-icon--md{--_icon-size:var(--icon-size-md,20px)}
.esa-icon--lg{--_icon-size:var(--icon-size-lg,24px)}
.esa-icon--xl{--_icon-size:var(--icon-size-xl,28px)}
.esa-icon svg{width:var(--_icon-size);height:var(--_icon-size);display:block}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color,var(--bcn-gray-1000));flex-shrink:0}
.stack{--gap:var(--spacing-400,1rem);gap:var(--gap);flex-direction:column;display:flex}
.stack[data-split]>[data-split]{margin-block-end:auto}
.cluster{--gap:var(--spacing-300,.75rem);--align:center;--justify:flex-start;gap:var(--gap);align-items:var(--align);justify-content:var(--justify);flex-wrap:wrap;display:flex}
.frame{--frame-ratio:16 / 9;aspect-ratio:var(--frame-ratio);overflow:hidden}
.frame>img,.frame>video,.frame>svg,.frame>canvas{object-fit:var(--frame-fit,cover);block-size:100%;inline-size:100%}
```

## Tokens
- `--alert-box-text-color`: #525252 _(component)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
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
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-default-hover`: #e8e8e8 _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-strong-hover`: #0000000d _(semantic)_
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
- `--color-background-utility-warning-subtle`: #fefdfb _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
- `--color-border-utility-danger`: #fdbdbe _(semantic)_
- `--color-border-utility-info`: #acd8fc _(semantic)_
- `--color-border-utility-success`: #adddc0 _(semantic)_
- `--color-border-utility-warning`: #f3d673 _(semantic)_
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
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--form-label-color`: #525252 _(component)_
- `--gap`: .75rem _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-lg`: .75rem _(semantic)_
- `--radius-md`: .25rem _(semantic)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-050`: .125rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 400 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 400 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-microcopy-2xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-2xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-2xs-subtle-line-height`: 1 _(semantic)_
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
- `--typography-microcopy-xs-subtle-font-weight`: 400 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
