# Implementation dialog

Prod's action-implementation upsert dialog, ported as-is: summary, referenced requirements, reference files and evidence of compliance on the left; Details (status, scope, work activities, responsible party, assignee, Not Applicable) and Lists on the right; Overview and Discussion tabs.

## Key decisions
- The header leads with the component: a 24px seal clustered with the component name, above the action title and its type badge (Andy, 2026-10-07).
- Status options are the workflow's columns grouped by backbone category, so choosing one moves the card on the board.
- Prod's layers glyph stands in for the seal when a component has no mark.

## Done when
- Saving a new status moves the card to that column and updates every view.

## Markup
```html
<div
  class="bcn-aid"
  data-config='{"typeLabel":{"AvoidanceAndBMPs":"Avoidance &amp; BMPs","Reporting":"Reporting","Monitoring":"Monitoring","ApprovalAndConsultation":"Approval &amp; Consultation","Plan":"Plan","Analysis":"Analysis","Survey":"Survey","RestorationAndMitigation":"Restoration &amp; Mitigation","Financial":"Financial","Other":"Other","TrainingAndEducation":"Training &amp; Education","Design":"Design"},"frequencyLabel":{"Onetime":"One-time","Recurring":"Recurring","AsNeeded":"As needed","Ongoing":"Ongoing"},"assignees":["Maria Chen","James Okafor","Priya Patel","Dana Whitfield","Luis Ortega","Hannah Brooks"],"listBase":"/beacon-design/prototypes/lists/","actionBase":"#data-catalog/actions/"}'
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
  </script>
  <script
    type="module"
    src="/beacon-design/_astro/BcnDiscussion.astro_astro_type_script_index_0_lang.Dwj09Asy.js"
  ></script>
  <esa-dialog class="bcn-aid__dialog" size="lg" show-close-button="false" open=""
    ><div slot="header" class="bcn-aid__head">
      <div class="bcn-aid__head-text">
        <p class="bcn-aid__scope typography-label-md-strong">
          <span class="bcn-aid__mark" aria-hidden="true"
            ><span data-aid-mark="Southern Forebay &amp; Pumping Plant"
              ><span
                class="bcn-entity-logo"
                data-size="sm"
                data-variant="seal"
                data-shape="circle"
                data-style="fill"
                data-glyph="bird"
                data-color="rust"
                style="--_c: var(--bcn-mark-rust)"
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
                    <path d="M16 7h.01"></path>
                    <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
                    <path d="m20 7 2 .5-2 .5"></path>
                    <path d="M10 18v3"></path>
                    <path d="M14 17.75V21"></path>
                    <path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg></span></span></span
            ><span data-aid-mark="Intake B — North Delta" hidden=""
              ><span
                class="bcn-entity-logo"
                data-size="sm"
                data-variant="seal"
                data-shape="circle"
                data-style="fill"
                data-glyph="map-pin"
                data-color="emerald"
                style="--_c: var(--bcn-mark-emerald)"
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
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                    ></path>
                    <circle cx="12" cy="10" r="3"></circle></svg></span></span></span
            ><span data-aid-mark="Twin Cities Complex" hidden=""
              ><span
                class="bcn-entity-logo"
                data-size="sm"
                data-variant="seal"
                data-shape="circle"
                data-style="fill"
                data-glyph="warehouse"
                data-color="emerald"
                style="--_c: var(--bcn-mark-emerald)"
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
                    <path
                      d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
                    ></path>
                    <path d="M6 18h12"></path>
                    <path d="M6 14h12"></path>
                    <path d="M6 22V10h12v12"></path></svg></span></span></span
            ><span data-aid-mark="Intake C — North Delta" hidden=""
              ><span
                class="bcn-entity-logo"
                data-size="sm"
                data-variant="seal"
                data-shape="circle"
                data-style="fill"
                data-glyph="sun"
                data-color="teal"
                style="--_c: var(--bcn-mark-teal)"
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
                    <circle cx="12" cy="12" r="4"></circle>
                    <path d="M12 2v2"></path>
                    <path d="m4.93 4.93 1.41 1.41"></path>
                    <path d="M2 12h2"></path>
                    <path d="m4.93 19.07 1.41-1.41"></path>
                    <path d="M12 20v2"></path>
                    <path d="m17.66 17.66 1.41 1.41"></path>
                    <path d="M20 12h2"></path>
                    <path d="m17.66 6.34 1.41-1.41"></path></svg></span></span></span
            ><span data-aid-mark="Bouldin Island Launch Shaft" hidden=""
              ><span
                class="bcn-entity-logo"
                data-size="sm"
                data-variant="seal"
                data-shape="circle"
                data-style="fill"
                data-glyph="bird"
                data-color="slate"
                style="--_c: var(--bcn-mark-slate)"
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
                    <path d="M16 7h.01"></path>
                    <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
                    <path d="m20 7 2 .5-2 .5"></path>
                    <path d="M10 18v3"></path>
                    <path d="M14 17.75V21"></path>
                    <path d="M7 18a6 6 0 0 0 3.84-10.61"></path></svg></span></span></span
            ><span data-aid-mark="Bethany Reservoir Aqueduct" hidden=""
              ><span
                class="bcn-entity-logo"
                data-size="sm"
                data-variant="seal"
                data-shape="circle"
                data-style="fill"
                data-glyph="home"
                data-color="indigo"
                style="--_c: var(--bcn-mark-indigo)"
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
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <path d="M9 22V12h6v10"></path></svg></span></span></span
            ><span data-aid-mark="Byron Tract Forebay" hidden=""
              ><span
                class="bcn-entity-logo"
                data-size="sm"
                data-variant="seal"
                data-shape="circle"
                data-style="fill"
                data-glyph="paw-print"
                data-color="orange"
                style="--_c: var(--bcn-mark-orange)"
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
                    <circle cx="11" cy="4" r="2"></circle>
                    <circle cx="18" cy="8" r="2"></circle>
                    <circle cx="20" cy="16" r="2"></circle>
                    <path
                      d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
                    ></path></svg></span></span></span></span
          ><span id="aid-scope-glyph" hidden=""
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
                  d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                ></path>
                <path
                  d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
                ></path>
                <path
                  d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
                ></path></svg></span></span
          ><span id="aid-component">Southern Forebay &amp; Pumping Plant</span>
        </p>
        <h2 class="bcn-aid__title">
          <span class="bcn-aid__title-name typography-heading-md" id="aid-title"
            >Submit Credit Bill of Sale and Payment Receipt to CDFW</span
          ><span id="aid-type"
            ><span
              class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
              ><span class="esa-badge__text">Reporting</span></span
            ></span
          >
        </h2>
      </div>
      <div class="cluster bcn-aid__head-actions" data-gap="xs">
        <span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
          ><a
            class="esa-button__native typography-microcopy-xs"
            href="#data-catalog/actions/act_01M2G6Y3RC1N589S9ETAS5HQJY"
            target="_blank"
            rel="noopener"
            role="button"
            id="aid-edit-action"
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
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path></svg></span
            ><span class="esa-button__label">Edit Action data</span></a
          ></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Close dialog"
            title="Close dialog"
            id="aid-close"
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
            ></span></button
        ></span>
      </div>
    </div>
    <esa-tab-layout
      class="bcn-aid__tabs"
      tabs='[{"label":"Overview","icon":"&lt;svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"&gt;&lt;path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/&gt;&lt;path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/&gt;&lt;path d=\"M10 9H8\"/&gt;&lt;path d=\"M16 13H8\"/&gt;&lt;path d=\"M16 17H8\"/&gt;&lt;/svg&gt;"},{"label":"Discussion","icon":"&lt;svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"&gt;&lt;path d=&apos;M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z&apos;/&gt;&lt;/svg&gt;"}]'
      active-index="0"
      size="md"
      variant="underline"
      appearance="underline"
      ><div slot="panel-0" class="bcn-aid__stage bcn-aid__overview">
        <div class="bcn-aid__main">
          <section class="bcn-aid__kv">
            <div class="bcn-aid__kv-head">
              <h3 class="bcn-aid__kv-key typography-label-md-strong">Summary</h3>
              <span
                class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Edit Action Text"
                  title="Edit Action Text"
                  id="aid-text-edit"
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
                  ></span></button
              ></span>
            </div>
            <div id="aid-text-view" class="stack" data-gap="xs">
              <p class="bcn-aid__text typography-body-md" id="aid-text">
                Permittee submits a copy of the Bill of Sale and Payment Receipt for
                purchased Covered Species credits to CDFW before initiating Covered
                Activities and in advance of incurring impacts to Covered Species habitat.
              </p>
              <p
                class="bcn-aid__notice typography-body-sm"
                id="aid-text-notice"
                hidden=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4"></path>
                    <path d="M12 8h.01"></path></svg></span
                ><span>This text has been customized from the original action.</span>
              </p>
            </div>
            <div id="aid-text-editor" class="stack" data-gap="xs" hidden="">
              <esa-textarea
                id="aid-text-input"
                label="Action Text"
                rows="5"
                auto-resize=""
                max-rows="14"
                size="md"
              ></esa-textarea>
              <div class="cluster bcn-aid__end" data-gap="xs">
                <span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    id="aid-text-cancel"
                  >
                    <span class="esa-button__label">Cancel</span>
                  </button></span
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  hidden=""
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    id="aid-text-revert"
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
                          d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                        ></path>
                        <path d="M3 3v5h5"></path></svg></span
                    ><span class="esa-button__label">Revert to Original</span>
                  </button></span
                ><span
                  class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    id="aid-text-done"
                  >
                    <span class="esa-button__label">Done</span>
                  </button></span
                >
              </div>
            </div>
          </section>
          <section class="bcn-aid__kv">
            <div class="bcn-aid__kv-head">
              <h3 class="bcn-aid__kv-key typography-label-md-strong">
                Referenced Requirements
              </h3>
            </div>
            <div class="stack" data-gap="sm" id="aid-requirements">
              <details class="esa-collapsible">
                <summary class="esa-collapsible__summary typography-label-sm-strong">
                  <span class="esa-collapsible__title"
                    >Submit Bill of Sale and Payment Receipt for Purchased Credits</span
                  ><span class="bcn-cbadge bcn-cbadge--sm">COA 12.10</span>
                </summary>
                <div class="esa-collapsible__body typography-body-md">
                  <div class="bcn-aid__req">
                    <p class="bcn-aid__req-text" data-aid-req-text="">
                      Permittee shall submit to CDFW a copy of the Bill of Sale(s) and
                      Payment Receipt prior to initiating Covered Activities in advance of
                      incurring impacts to Covered Species habitat.
                    </p>
                    <div class="grid bcn-aid__req-kv" data-gap="sm">
                      <div data-aid-req-kv="phases">
                        <div class="bcn-key-value" data-size="md" data-layout="stack">
                          <span class="bcn-key-value__key">Phases</span
                          ><span class="bcn-key-value__val">Pre-Construction</span>
                        </div>
                      </div>
                      <div data-aid-req-kv="scope">
                        <div class="bcn-key-value" data-size="md" data-layout="stack">
                          <span class="bcn-key-value__key">Scope</span
                          ><span class="bcn-key-value__val">Project</span>
                        </div>
                      </div>
                      <div data-aid-req-kv="activities" data-empty="">
                        <div class="bcn-key-value" data-size="md" data-layout="stack">
                          <span class="bcn-key-value__key">Construction Activities</span
                          ><span class="bcn-key-value__val">None</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            </div>
            <p
              class="bcn-aid__none typography-body-md"
              id="aid-requirements-none"
              hidden=""
            >
              No Requirements
            </p>
          </section>
          <section class="bcn-aid__kv">
            <div class="bcn-aid__kv-head">
              <h3 class="bcn-aid__kv-key typography-label-md-strong">Reference Files</h3>
            </div>
            <p class="bcn-aid__value typography-body-md">–</p>
          </section>
          <section class="bcn-aid__kv">
            <div class="bcn-aid__kv-head">
              <div class="bcn-aid__kv-keys">
                <h3 class="bcn-aid__kv-key typography-label-md-strong">
                  Evidence of Compliance
                </h3>
                <p class="bcn-aid__kv-sub typography-body-sm" id="aid-eoc-expected">
                  Copy of the executed Bill of Sale and the payment receipt transmitted to
                  CDFW, dated before the first habitat impact.
                </p>
              </div>
              <div class="cluster" data-gap="2xs">
                <span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    aria-label="Add Evidence of Compliance in the drawer"
                    title="Add Evidence of Compliance in the drawer"
                    id="aid-eoc-add"
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
                        <path d="M5 12h14"></path>
                        <path d="M12 5v14"></path></svg
                    ></span></button></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only esa-button--disabled"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                    aria-label="Download All Evidence of Compliance Files As .zip"
                    title="Download All Evidence of Compliance Files As .zip"
                    id="aid-eoc-zip"
                    disabled=""
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line></svg
                    ></span></button
                ></span>
              </div>
            </div>
            <div id="aid-eoc-list" hidden="">
              <div class="bcn-evidence-list">
                <ul class="bcn-evidence-list__items">
                  <li
                    class="bcn-evidence-card"
                    id="aid-eoc-1"
                    data-title="Draft for Internal Review"
                    data-notes=""
                    data-tags="Draft"
                    data-files="draft-rev-a.pdf,review-comment-matrix.xlsx"
                    hidden=""
                  >
                    <div class="esa-card esa-card--padding-none">
                      <div class="esa-card__header typography-title-sm-strong">
                        <div class="bcn-evidence-card__head">
                          <span class="bcn-evidence-card__lead"
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
                                <path d="m9 18 6-6-6-6"></path></svg></span
                            ><span class="bcn-evidence-card__name"
                              >Draft for Internal Review</span
                            ></span
                          ><span class="bcn-evidence-card__actions"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Add to summary page"
                                title="Add to summary page"
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
                                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                    ></path></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Download all files as .zip"
                                title="Download all files as .zip"
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
                                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    ></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Edit evidence"
                                title="Edit evidence"
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
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Delete evidence"
                                title="Delete evidence"
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
                                    <path d="M3 6h18"></path>
                                    <path
                                      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                    ></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                                ></span></button></span
                          ></span>
                        </div>
                      </div>
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-evidence-card__fields" hidden="">
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Notes</span
                            ><span
                              class="bcn-evidence-card__text bcn-evidence-card__text--muted"
                              >None</span
                            >
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Tags</span>
                            <div class="bcn-evidence-card__pills">
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">Draft</span></span
                              >
                            </div>
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label"
                              >Files
                              <span
                                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">2</span></span
                              ></span
                            ><!-- files (array) are set as a property by setupEvidenceList --><esa-file-list
                              class="bcn-evidence-card__files"
                              downloadable=""
                            ></esa-file-list>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-evidence-card"
                    id="aid-eoc-2"
                    data-title="Agency Submittal Transmittal"
                    data-notes="Transmitted through the agency project portal."
                    data-tags="Submittal"
                    data-files="submittal-transmittal.pdf"
                    hidden=""
                  >
                    <div class="esa-card esa-card--padding-none">
                      <div class="esa-card__header typography-title-sm-strong">
                        <div class="bcn-evidence-card__head">
                          <span class="bcn-evidence-card__lead"
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
                                <path d="m9 18 6-6-6-6"></path></svg></span
                            ><span class="bcn-evidence-card__name"
                              >Agency Submittal Transmittal</span
                            ></span
                          ><span class="bcn-evidence-card__actions"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Add to summary page"
                                title="Add to summary page"
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
                                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                    ></path></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Download all files as .zip"
                                title="Download all files as .zip"
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
                                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    ></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Edit evidence"
                                title="Edit evidence"
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
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Delete evidence"
                                title="Delete evidence"
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
                                    <path d="M3 6h18"></path>
                                    <path
                                      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                    ></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                                ></span></button></span
                          ></span>
                        </div>
                      </div>
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-evidence-card__fields" hidden="">
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Notes</span
                            ><span class="bcn-evidence-card__text"
                              >Transmitted through the agency project portal.</span
                            >
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Tags</span>
                            <div class="bcn-evidence-card__pills">
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">Submittal</span></span
                              >
                            </div>
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label"
                              >Files
                              <span
                                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">1</span></span
                              ></span
                            ><!-- files (array) are set as a property by setupEvidenceList --><esa-file-list
                              class="bcn-evidence-card__files"
                              downloadable=""
                            ></esa-file-list>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-evidence-card"
                    id="aid-eoc-3"
                    data-title="Agency Comment Letter"
                    data-notes="Comments received; responses tracked in the comment matrix."
                    data-tags="Agency"
                    data-files="agency-comment-letter.pdf"
                    hidden=""
                  >
                    <div class="esa-card esa-card--padding-none">
                      <div class="esa-card__header typography-title-sm-strong">
                        <div class="bcn-evidence-card__head">
                          <span class="bcn-evidence-card__lead"
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
                                <path d="m9 18 6-6-6-6"></path></svg></span
                            ><span class="bcn-evidence-card__name"
                              >Agency Comment Letter</span
                            ></span
                          ><span class="bcn-evidence-card__actions"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Add to summary page"
                                title="Add to summary page"
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
                                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                    ></path></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Download all files as .zip"
                                title="Download all files as .zip"
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
                                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    ></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Edit evidence"
                                title="Edit evidence"
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
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Delete evidence"
                                title="Delete evidence"
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
                                    <path d="M3 6h18"></path>
                                    <path
                                      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                    ></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                                ></span></button></span
                          ></span>
                        </div>
                      </div>
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-evidence-card__fields" hidden="">
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Notes</span
                            ><span class="bcn-evidence-card__text"
                              >Comments received; responses tracked in the comment
                              matrix.</span
                            >
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Tags</span>
                            <div class="bcn-evidence-card__pills">
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">Agency</span></span
                              >
                            </div>
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label"
                              >Files
                              <span
                                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">1</span></span
                              ></span
                            ><!-- files (array) are set as a property by setupEvidenceList --><esa-file-list
                              class="bcn-evidence-card__files"
                              downloadable=""
                            ></esa-file-list>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-evidence-card"
                    id="aid-eoc-4"
                    data-title="Response to Comments"
                    data-notes=""
                    data-tags="Agency,Draft"
                    data-files="response-to-comments.pdf,draft-rev-b.pdf"
                    hidden=""
                  >
                    <div class="esa-card esa-card--padding-none">
                      <div class="esa-card__header typography-title-sm-strong">
                        <div class="bcn-evidence-card__head">
                          <span class="bcn-evidence-card__lead"
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
                                <path d="m9 18 6-6-6-6"></path></svg></span
                            ><span class="bcn-evidence-card__name"
                              >Response to Comments</span
                            ></span
                          ><span class="bcn-evidence-card__actions"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Add to summary page"
                                title="Add to summary page"
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
                                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                    ></path></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Download all files as .zip"
                                title="Download all files as .zip"
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
                                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    ></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Edit evidence"
                                title="Edit evidence"
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
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Delete evidence"
                                title="Delete evidence"
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
                                    <path d="M3 6h18"></path>
                                    <path
                                      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                    ></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                                ></span></button></span
                          ></span>
                        </div>
                      </div>
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-evidence-card__fields" hidden="">
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Notes</span
                            ><span
                              class="bcn-evidence-card__text bcn-evidence-card__text--muted"
                              >None</span
                            >
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Tags</span>
                            <div class="bcn-evidence-card__pills">
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">Agency</span></span
                              ><span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">Draft</span></span
                              >
                            </div>
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label"
                              >Files
                              <span
                                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">2</span></span
                              ></span
                            ><!-- files (array) are set as a property by setupEvidenceList --><esa-file-list
                              class="bcn-evidence-card__files"
                              downloadable=""
                            ></esa-file-list>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-evidence-card"
                    id="aid-eoc-5"
                    data-title="Final Signed Version"
                    data-notes="Signed by the Environmental Lead."
                    data-tags="Final"
                    data-files="final-signed.pdf"
                    hidden=""
                  >
                    <div class="esa-card esa-card--padding-none">
                      <div class="esa-card__header typography-title-sm-strong">
                        <div class="bcn-evidence-card__head">
                          <span class="bcn-evidence-card__lead"
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
                                <path d="m9 18 6-6-6-6"></path></svg></span
                            ><span class="bcn-evidence-card__name"
                              >Final Signed Version</span
                            ></span
                          ><span class="bcn-evidence-card__actions"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Add to summary page"
                                title="Add to summary page"
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
                                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                    ></path></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Download all files as .zip"
                                title="Download all files as .zip"
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
                                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    ></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Edit evidence"
                                title="Edit evidence"
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
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Delete evidence"
                                title="Delete evidence"
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
                                    <path d="M3 6h18"></path>
                                    <path
                                      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                    ></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                                ></span></button></span
                          ></span>
                        </div>
                      </div>
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-evidence-card__fields" hidden="">
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Notes</span
                            ><span class="bcn-evidence-card__text"
                              >Signed by the Environmental Lead.</span
                            >
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Tags</span>
                            <div class="bcn-evidence-card__pills">
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">Final</span></span
                              >
                            </div>
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label"
                              >Files
                              <span
                                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">1</span></span
                              ></span
                            ><!-- files (array) are set as a property by setupEvidenceList --><esa-file-list
                              class="bcn-evidence-card__files"
                              downloadable=""
                            ></esa-file-list>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="bcn-evidence-card"
                    id="aid-eoc-6"
                    data-title="Distribution Record"
                    data-notes="Copies sent to the construction contractor and the field office."
                    data-tags="Distribution"
                    data-files="distribution-record.pdf"
                    hidden=""
                  >
                    <div class="esa-card esa-card--padding-none">
                      <div class="esa-card__header typography-title-sm-strong">
                        <div class="bcn-evidence-card__head">
                          <span class="bcn-evidence-card__lead"
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
                                <path d="m9 18 6-6-6-6"></path></svg></span
                            ><span class="bcn-evidence-card__name"
                              >Distribution Record</span
                            ></span
                          ><span class="bcn-evidence-card__actions"
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Add to summary page"
                                title="Add to summary page"
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
                                      d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.69 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.453 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                                    ></path></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Download all files as .zip"
                                title="Download all files as .zip"
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
                                      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                                    ></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" x2="12" y1="15" y2="3"></line></svg
                                ></span></button></span
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Edit evidence"
                                title="Edit evidence"
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
                            ><span
                              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                              ><button
                                class="esa-button__native typography-microcopy-xs"
                                type="button"
                                aria-label="Delete evidence"
                                title="Delete evidence"
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
                                    <path d="M3 6h18"></path>
                                    <path
                                      d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
                                    ></path>
                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                    <line x1="10" x2="10" y1="11" y2="17"></line>
                                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                                ></span></button></span
                          ></span>
                        </div>
                      </div>
                      <div class="esa-card__body typography-body-md">
                        <div class="bcn-evidence-card__fields" hidden="">
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Notes</span
                            ><span class="bcn-evidence-card__text"
                              >Copies sent to the construction contractor and the field
                              office.</span
                            >
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label">Tags</span>
                            <div class="bcn-evidence-card__pills">
                              <span
                                class="esa-pill esa-pill--default esa-pill--sm typography-microcopy-xs"
                                ><span class="esa-pill__label">Distribution</span></span
                              >
                            </div>
                          </div>
                          <div class="bcn-evidence-card__field">
                            <span class="bcn-evidence-card__label"
                              >Files
                              <span
                                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                                ><span class="esa-badge__text">1</span></span
                              ></span
                            ><!-- files (array) are set as a property by setupEvidenceList --><esa-file-list
                              class="bcn-evidence-card__files"
                              downloadable=""
                            ></esa-file-list>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="bcn-evidence-list__row-actions">
                  <span
                    class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
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
                          <path d="M5 12h14"></path>
                          <path d="M12 5v14"></path></svg></span
                      ><span class="esa-button__label">Add New Evidence</span>
                    </button></span
                  ><span
                    class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                    >
                      <span class="esa-button__label">Add Existing Evidence</span>
                    </button></span
                  >
                </div>
              </div>
            </div>
            <div id="aid-eoc-empty" class="bcn-aid__empty">
              <div class="esa-empty-state esa-empty-state--sm">
                <h3 class="esa-empty-state__title typography-label-sm-strong">
                  No Evidence of Compliance
                </h3>
                <div class="esa-empty-state__actions typography-label-md">
                  <div class="cluster bcn-aid__center" data-gap="xs">
                    <span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        id="aid-eoc-new"
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
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path></svg></span
                        ><span class="esa-button__label"
                          >Add New Evidence of Compliance</span
                        >
                      </button></span
                    ><span
                      class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                        id="aid-eoc-existing"
                      >
                        <span class="esa-button__label"
                          >Add Existing Evidence of Compliance</span
                        >
                      </button></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside class="bcn-aid__side">
          <details class="esa-collapsible" open="">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path></svg></span
              ><span class="esa-collapsible__title">Details</span>
            </summary>
            <div class="esa-collapsible__body typography-body-md">
              <div id="aid-status">
                <div class="bcn-status-select" data-value="reporting-not-started">
                  <span class="bcn-status-select__label">Status</span>
                  <div class="bcn-status-select__dd">
                    <button
                      type="button"
                      class="bcn-status-select__trigger"
                      aria-haspopup="listbox"
                      aria-expanded="false"
                    >
                      <span
                        class="bcn-status-select__dot bcn-status-select__dot--trigger"
                        style="background: var(--bcn-status-not-started)"
                      ></span
                      ><span class="bcn-status-select__value">Not Started</span
                      ><svg
                        class="bcn-status-select__chev"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <ul class="bcn-status-select__menu" role="listbox" hidden="">
                      <li
                        class="bcn-aid__opt-group"
                        role="group"
                        aria-labelledby="aid-status-group-NotStarted"
                      >
                        <span
                          class="bcn-aid__opt-group-label typography-label-sm"
                          data-aid-group-label=""
                          id="aid-status-group-NotStarted"
                          >Not Started</span
                        >
                        <ul
                          class="bcn-aid__opt-group-list"
                          role="none"
                          data-aid-group-list=""
                        >
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="reporting-not-started"
                            data-label="Not Started"
                            data-color="var(--bcn-status-not-started)"
                            aria-selected="true"
                          >
                            <span
                              class="bcn-status-select__dot"
                              style="background: var(--bcn-status-not-started)"
                            ></span
                            >Not Started
                          </li>
                        </ul>
                      </li>
                      <li
                        class="bcn-aid__opt-group"
                        role="group"
                        aria-labelledby="aid-status-group-InProgress"
                      >
                        <span
                          class="bcn-aid__opt-group-label typography-label-sm"
                          data-aid-group-label=""
                          id="aid-status-group-InProgress"
                          >In Progress</span
                        >
                        <ul
                          class="bcn-aid__opt-group-list"
                          role="none"
                          data-aid-group-list=""
                        >
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="reporting-collecting-data"
                            data-label="Collecting Data"
                            data-color="var(--bcn-status-in-progress)"
                            aria-selected="false"
                          >
                            <span
                              class="bcn-status-select__dot"
                              style="background: var(--bcn-status-in-progress)"
                            ></span
                            >Collecting Data
                          </li>
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="reporting-drafting"
                            data-label="Drafting"
                            data-color="var(--bcn-status-in-progress)"
                            aria-selected="false"
                          >
                            <span
                              class="bcn-status-select__dot"
                              style="background: var(--bcn-status-in-progress)"
                            ></span
                            >Drafting
                          </li>
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="reporting-qa-qc"
                            data-label="QA/QC"
                            data-color="var(--bcn-status-in-progress)"
                            aria-selected="false"
                          >
                            <span
                              class="bcn-status-select__dot"
                              style="background: var(--bcn-status-in-progress)"
                            ></span
                            >QA/QC
                          </li>
                        </ul>
                      </li>
                      <li
                        class="bcn-aid__opt-group"
                        role="group"
                        aria-labelledby="aid-status-group-Completed"
                      >
                        <span
                          class="bcn-aid__opt-group-label typography-label-sm"
                          data-aid-group-label=""
                          id="aid-status-group-Completed"
                          >Completed</span
                        >
                        <ul
                          class="bcn-aid__opt-group-list"
                          role="none"
                          data-aid-group-list=""
                        >
                          <li
                            class="bcn-status-select__opt"
                            role="option"
                            data-value="reporting-submitted"
                            data-label="Submitted"
                            data-color="var(--bcn-status-completed)"
                            aria-selected="false"
                          >
                            <span
                              class="bcn-status-select__dot"
                              style="background: var(--bcn-status-completed)"
                            ></span
                            >Submitted
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div data-aid-kv="scope">
                <div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Scope</span
                  ><span class="bcn-key-value__val"
                    >Southern Forebay &amp; Pumping Plant</span
                  >
                </div>
              </div>
              <div data-aid-kv="activities" data-empty="">
                <div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Work Activities</span
                  ><span class="bcn-key-value__val">None</span>
                </div>
              </div>
              <div data-aid-kv="responsible">
                <div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Responsible Party</span
                  ><span class="bcn-key-value__val">Permittee</span>
                </div>
              </div>
              <esa-combobox
                id="aid-assignee"
                label="Assignee"
                placeholder="Unassigned"
                size="md"
                mode="autocomplete"
              ></esa-combobox>
              <div class="bcn-aid__na">
                <esa-switch-toggle
                  id="aid-na"
                  label="Not Applicable"
                  size="md"
                  label-position="after"
                ></esa-switch-toggle>
              </div>
            </div>
          </details>
          <div id="aid-lists-section">
            <details class="esa-collapsible" open="">
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
                    <path d="M8 6h13"></path>
                    <path d="M8 12h13"></path>
                    <path d="M8 18h13"></path>
                    <path d="M3 6h.01"></path>
                    <path d="M3 12h.01"></path>
                    <path d="M3 18h.01"></path></svg></span
                ><span class="esa-collapsible__title">Lists</span>
              </summary>
              <div class="esa-collapsible__body typography-body-md">
                <div class="stack" data-gap="xs" id="aid-lists">
                  <a
                    class="bcn-aid__list-link typography-body-md"
                    href="/beacon-design/prototypes/lists/desktop-actions"
                    >Desktop Actions</a
                  >
                </div>
              </div>
            </details>
          </div>
          <details class="esa-collapsible" open="">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path></svg></span
              ><span class="esa-collapsible__title">Timing</span>
            </summary>
            <div class="esa-collapsible__body typography-body-md">
              <div data-aid-kv="frequency">
                <div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Frequency</span
                  ><span class="bcn-key-value__val">As needed #1</span>
                </div>
              </div>
              <div data-aid-kv="milestone" data-empty="" hidden="">
                <div class="bcn-key-value" data-size="md" data-layout="stack">
                  <span class="bcn-key-value__key">Milestone</span
                  ><span class="bcn-key-value__val">None</span>
                </div>
              </div>
              <div class="bcn-key-value" data-size="md" data-layout="stack">
                <span class="bcn-key-value__key">Due Date</span>
                <div class="cluster bcn-aid__due" data-gap="3xs" id="aid-due-view">
                  <span
                    class="bcn-aid__due-value typography-label-md-strong"
                    id="aid-due-value"
                    >Sep 12, 2026</span
                  ><span
                    class="bcn-aid__due-original typography-body-sm"
                    id="aid-due-original"
                    hidden=""
                    >(Sep 12, 2026)</span
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    hidden=""
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Reset to calculated date"
                      title="Reset to calculated date"
                      id="aid-due-reset"
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
                            d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
                          ></path>
                          <path d="M3 3v5h5"></path></svg
                      ></span></button></span
                  ><span
                    class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                    ><button
                      class="esa-button__native typography-microcopy-xs"
                      type="button"
                      aria-label="Edit due date"
                      title="Edit due date"
                      id="aid-due-edit"
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
                      ></span></button
                  ></span>
                </div>
                <esa-date-picker
                  id="aid-due-input"
                  label="Due Date"
                  size="md"
                  hidden=""
                ></esa-date-picker>
              </div>
            </div>
          </details>
          <details class="esa-collapsible" open="">
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
              ><span class="esa-collapsible__title">Change Log</span>
            </summary>
            <div class="esa-collapsible__body typography-body-md">
              <div id="aid-log">
                <ol class="bcn-change-log">
                  <li class="bcn-change-log__day">
                    <p class="bcn-change-log__date">Jul 3, 2026</p>
                    <ul class="bcn-change-log__events">
                      <li class="bcn-change-log__event">
                        <span class="bcn-change-log__text"
                          >Due date set to <strong>Sep 12, 2026</strong></span
                        ><span class="bcn-change-log__by">Maria Chen · 8:02 AM</span>
                      </li>
                    </ul>
                  </li>
                  <li class="bcn-change-log__day">
                    <p class="bcn-change-log__date">Jul 1, 2026</p>
                    <ul class="bcn-change-log__events">
                      <li class="bcn-change-log__event">
                        <span class="bcn-change-log__text">Implementation created</span
                        ><span class="bcn-change-log__by">System · 12:00 AM</span>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </details>
        </aside>
      </div>
      <div slot="panel-1" class="bcn-aid__stage bcn-aid__discussion">
        <div data-aid-thread="0">
          <section class="bcn-disc">
            <h3 class="bcn-disc__head">
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
                  <path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"></path>
                  <circle cx="18" cy="5" r="3"></circle></svg></span
              >Discussion
            </h3>
            <p class="bcn-disc__none">No comments yet. Start the discussion!</p>
            <ul class="bcn-disc__tl">
              <!-- Compose — the trailing node. -->
              <li class="bcn-disc__item bcn-disc__item--compose">
                <span class="bcn-disc__node" style="--_node-color: var(--color-source)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                >
                <div class="bcn-disc__compose">
                  <span class="bcn-disc__as">Posting as Maria Chen</span
                  ><esa-textarea
                    rows="2"
                    placeholder="Write your comment..."
                    size="md"
                  ></esa-textarea>
                  <div class="bcn-disc__compose-actions">
                    <span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                      >
                        <span class="esa-button__label">Post Comment</span>
                      </button></span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div data-aid-thread="1" hidden="">
          <section class="bcn-disc">
            <h3 class="bcn-disc__head">
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
                  <path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"></path>
                  <circle cx="18" cy="5" r="3"></circle></svg></span
              >Discussion<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">1</span></span
              >
            </h3>
            <ul class="bcn-disc__tl">
              <li class="bcn-disc__item">
                <span class="bcn-disc__node" style="--_node-color: var(--color-source)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                >
                <div class="bcn-disc__body">
                  <div class="bcn-disc__meta">
                    <span class="bcn-disc__author">Luis Ortega</span
                    ><span class="bcn-disc__time">Sep 15, 2026 at 8:41 AM</span>
                  </div>
                  <p class="bcn-disc__text">
                    Picking this up. The scope matches the component boundary, so the
                    access road does not need a separate filing.
                  </p>
                </div>
              </li>
              <!-- Compose — the trailing node. -->
              <li class="bcn-disc__item bcn-disc__item--compose">
                <span
                  class="bcn-disc__node"
                  style="--_node-color: var(--color-commitment)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                >
                <div class="bcn-disc__compose">
                  <span class="bcn-disc__as">Posting as Maria Chen</span
                  ><esa-textarea
                    rows="2"
                    placeholder="Write your comment..."
                    size="md"
                  ></esa-textarea>
                  <div class="bcn-disc__compose-actions">
                    <span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                      >
                        <span class="esa-button__label">Post Comment</span>
                      </button></span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div data-aid-thread="2" hidden="">
          <section class="bcn-disc">
            <h3 class="bcn-disc__head">
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
                  <path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"></path>
                  <circle cx="18" cy="5" r="3"></circle></svg></span
              >Discussion<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">2</span></span
              >
            </h3>
            <ul class="bcn-disc__tl">
              <li class="bcn-disc__item">
                <span class="bcn-disc__node" style="--_node-color: var(--color-source)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                >
                <div class="bcn-disc__body">
                  <div class="bcn-disc__meta">
                    <span class="bcn-disc__author">Maria Chen</span
                    ><span class="bcn-disc__time">Sep 22, 2026 at 10:04 AM</span
                    ><span class="bcn-disc__edited">(edited)</span
                    ><span class="bcn-disc__actions"
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Edit"
                          title="Edit"
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
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Delete"
                          title="Delete"
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
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              <line x1="10" x2="10" y1="11" y2="17"></line>
                              <line x1="14" x2="14" y1="11" y2="17"></line></svg
                          ></span></button></span
                    ></span>
                  </div>
                  <p class="bcn-disc__text">
                    Internal review comments are addressed. The redline is on the evidence
                    record.
                  </p>
                </div>
              </li>
              <li class="bcn-disc__item">
                <span
                  class="bcn-disc__node"
                  style="--_node-color: var(--color-commitment)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                >
                <div class="bcn-disc__body">
                  <div class="bcn-disc__meta">
                    <span class="bcn-disc__author">Luis Ortega</span
                    ><span class="bcn-disc__time">Sep 15, 2026 at 8:41 AM</span>
                  </div>
                  <p class="bcn-disc__text">
                    Picking this up. The scope matches the component boundary, so the
                    access road does not need a separate filing.
                  </p>
                </div>
              </li>
              <!-- Compose — the trailing node. -->
              <li class="bcn-disc__item bcn-disc__item--compose">
                <span class="bcn-disc__node" style="--_node-color: var(--color-source)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                >
                <div class="bcn-disc__compose">
                  <span class="bcn-disc__as">Posting as Maria Chen</span
                  ><esa-textarea
                    rows="2"
                    placeholder="Write your comment..."
                    size="md"
                  ></esa-textarea>
                  <div class="bcn-disc__compose-actions">
                    <span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                      >
                        <span class="esa-button__label">Post Comment</span>
                      </button></span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
        <div data-aid-thread="3" hidden="">
          <section class="bcn-disc">
            <h3 class="bcn-disc__head">
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
                  <path d="M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"></path>
                  <circle cx="18" cy="5" r="3"></circle></svg></span
              >Discussion<span
                class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
                ><span class="esa-badge__text">3</span></span
              >
            </h3>
            <ul class="bcn-disc__tl">
              <li class="bcn-disc__item">
                <span class="bcn-disc__node" style="--_node-color: var(--color-source)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 266"
                    ><span class="esa-avatar__initials">DW</span></span
                  ></span
                >
                <div class="bcn-disc__body">
                  <div class="bcn-disc__meta">
                    <span class="bcn-disc__author">Dana Whitfield</span
                    ><span class="bcn-disc__time">Sep 29, 2026 at 3:18 PM</span>
                  </div>
                  <p class="bcn-disc__text">
                    The agency liaison confirmed they will accept the submittal
                    electronically. Routing the final for signature this week.
                  </p>
                </div>
              </li>
              <li class="bcn-disc__item">
                <span
                  class="bcn-disc__node"
                  style="--_node-color: var(--color-commitment)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                >
                <div class="bcn-disc__body">
                  <div class="bcn-disc__meta">
                    <span class="bcn-disc__author">Maria Chen</span
                    ><span class="bcn-disc__time">Sep 22, 2026 at 10:04 AM</span
                    ><span class="bcn-disc__edited">(edited)</span
                    ><span class="bcn-disc__actions"
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Edit"
                          title="Edit"
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
                      ><span
                        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                        ><button
                          class="esa-button__native typography-microcopy-xs"
                          type="button"
                          aria-label="Delete"
                          title="Delete"
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
                              <path d="M3 6h18"></path>
                              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                              <line x1="10" x2="10" y1="11" y2="17"></line>
                              <line x1="14" x2="14" y1="11" y2="17"></line></svg
                          ></span></button></span
                    ></span>
                  </div>
                  <p class="bcn-disc__text">
                    Internal review comments are addressed. The redline is on the evidence
                    record.
                  </p>
                </div>
              </li>
              <li class="bcn-disc__item">
                <span
                  class="bcn-disc__node"
                  style="--_node-color: var(--color-requirement)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 91"
                    ><span class="esa-avatar__initials">LO</span></span
                  ></span
                >
                <div class="bcn-disc__body">
                  <div class="bcn-disc__meta">
                    <span class="bcn-disc__author">Luis Ortega</span
                    ><span class="bcn-disc__time">Sep 15, 2026 at 8:41 AM</span>
                  </div>
                  <p class="bcn-disc__text">
                    Picking this up. The scope matches the component boundary, so the
                    access road does not need a separate filing.
                  </p>
                </div>
              </li>
              <!-- Compose — the trailing node. -->
              <li class="bcn-disc__item bcn-disc__item--compose">
                <span
                  class="bcn-disc__node"
                  style="--_node-color: var(--color-commitment)"
                  ><span
                    class="esa-avatar esa-avatar--sm esa-avatar--circle typography-label-xs-strong"
                    style="--_avatar-hue: 56"
                    ><span class="esa-avatar__initials">MC</span></span
                  ></span
                >
                <div class="bcn-disc__compose">
                  <span class="bcn-disc__as">Posting as Maria Chen</span
                  ><esa-textarea
                    rows="2"
                    placeholder="Write your comment..."
                    size="md"
                  ></esa-textarea>
                  <div class="bcn-disc__compose-actions">
                    <span
                      class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--sm"
                      ><button
                        class="esa-button__native typography-microcopy-xs"
                        type="button"
                      >
                        <span class="esa-button__label">Post Comment</span>
                      </button></span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div></esa-tab-layout
    >
    <div slot="footer" class="cluster bcn-aid__foot" data-gap="xs">
      <span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          id="aid-save"
        >
          <span class="esa-icon esa-icon--md" aria-hidden="true"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              focusable="false"
            >
              <path
                d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
              ></path>
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"></path>
              <path d="M7 3v4a1 1 0 0 0 1 1h7"></path></svg></span
          ><span class="esa-button__label">Save</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button
          class="esa-button__native typography-microcopy-md"
          type="button"
          id="aid-cancel"
        >
          <span class="esa-button__label">Cancel</span>
        </button></span
      >
    </div></esa-dialog
  ><!-- Runtime parts, cloned by the controller (clones keep their scoped-CSS ids). --><template
    data-aid-tpl="requirement"
    ><details class="esa-collapsible" data-astro-cid-x3kbh6j2="">
      <summary
        class="esa-collapsible__summary typography-label-sm-strong"
        data-astro-cid-x3kbh6j2=""
      >
        <span class="esa-collapsible__title" data-astro-cid-x3kbh6j2="">–</span>
      </summary>
      <div class="esa-collapsible__body typography-body-md" data-astro-cid-x3kbh6j2="">
        <div class="bcn-aid__req" data-astro-cid-iqe2bvd3="">
          <p
            class="bcn-aid__req-text"
            data-aid-req-text=""
            data-astro-cid-iqe2bvd3=""
          ></p>
          <div class="grid bcn-aid__req-kv" data-gap="sm" data-astro-cid-iqe2bvd3="">
            <div data-aid-req-kv="phases" data-astro-cid-iqe2bvd3="">
              <div
                class="bcn-key-value"
                data-size="md"
                data-layout="stack"
                data-astro-cid-ptubpbrf=""
              >
                <span class="bcn-key-value__key" data-astro-cid-ptubpbrf="">Phases</span
                ><span class="bcn-key-value__val" data-astro-cid-ptubpbrf="">–</span>
              </div>
            </div>
            <div data-aid-req-kv="scope" data-astro-cid-iqe2bvd3="">
              <div
                class="bcn-key-value"
                data-size="md"
                data-layout="stack"
                data-astro-cid-ptubpbrf=""
              >
                <span class="bcn-key-value__key" data-astro-cid-ptubpbrf="">Scope</span
                ><span class="bcn-key-value__val" data-astro-cid-ptubpbrf="">–</span>
              </div>
            </div>
            <div data-aid-req-kv="activities" data-astro-cid-iqe2bvd3="">
              <div
                class="bcn-key-value"
                data-size="md"
                data-layout="stack"
                data-astro-cid-ptubpbrf=""
              >
                <span class="bcn-key-value__key" data-astro-cid-ptubpbrf=""
                  >Construction Activities</span
                ><span class="bcn-key-value__val" data-astro-cid-ptubpbrf="">–</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </details></template
  ><template data-aid-tpl="code"
    ><span class="bcn-cbadge bcn-cbadge--sm" data-astro-cid-cqxc3yz3="">–</span></template
  ><template data-aid-tpl="status"
    ><div class="bcn-status-select" data-value="–" data-astro-cid-wqef4jws="">
      <span class="bcn-status-select__label" data-astro-cid-wqef4jws="">Status</span>
      <div class="bcn-status-select__dd" data-astro-cid-wqef4jws="">
        <button
          type="button"
          class="bcn-status-select__trigger"
          aria-haspopup="listbox"
          aria-expanded="false"
          data-astro-cid-wqef4jws=""
        >
          <span
            class="bcn-status-select__dot bcn-status-select__dot--trigger"
            style="background: transparent"
            data-astro-cid-wqef4jws=""
          ></span
          ><span class="bcn-status-select__value" data-astro-cid-wqef4jws="">–</span
          ><svg
            class="bcn-status-select__chev"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            data-astro-cid-wqef4jws=""
          >
            <path d="m6 9 6 6 6-6" data-astro-cid-wqef4jws=""></path>
          </svg>
        </button>
        <ul
          class="bcn-status-select__menu"
          role="listbox"
          hidden=""
          data-astro-cid-wqef4jws=""
        >
          <li
            class="bcn-status-select__opt"
            role="option"
            data-value="–"
            data-label="–"
            data-color="transparent"
            aria-selected="true"
            data-astro-cid-wqef4jws=""
          >
            <span
              class="bcn-status-select__dot"
              style="background: transparent"
              data-astro-cid-wqef4jws=""
            ></span
            >–
          </li>
        </ul>
      </div>
    </div></template
  ><template data-aid-tpl="status-group"
    ><li class="bcn-aid__opt-group" role="group" data-astro-cid-iqe2bvd3="">
      <span
        class="bcn-aid__opt-group-label typography-label-sm"
        data-aid-group-label=""
        data-astro-cid-iqe2bvd3=""
      ></span>
      <ul
        class="bcn-aid__opt-group-list"
        role="none"
        data-aid-group-list=""
        data-astro-cid-iqe2bvd3=""
      ></ul></li></template
  ><template data-aid-tpl="list"
    ><a class="bcn-aid__list-link typography-body-md" href="#" data-astro-cid-iqe2bvd3=""
      >–</a
    ></template
  ><template data-aid-tpl="log"
    ><ol class="bcn-change-log" data-astro-cid-kvraooxb="">
      <li class="bcn-change-log__day" data-astro-cid-kvraooxb="">
        <p class="bcn-change-log__date" data-astro-cid-kvraooxb="">–</p>
        <ul class="bcn-change-log__events" data-astro-cid-kvraooxb="">
          <li class="bcn-change-log__event" data-astro-cid-kvraooxb="">
            <span class="bcn-change-log__text" data-astro-cid-kvraooxb=""
              >– <strong data-astro-cid-kvraooxb="">–</strong></span
            ><span class="bcn-change-log__by" data-astro-cid-kvraooxb="">–</span>
          </li>
        </ul>
      </li>
    </ol></template
  >
</div>
```

## Styles
```css
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
    .help,
    .error {
      margin: 0;
    }
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
.typography-heading-md {
  font-family: var(--typography-heading-md-font-family);
  font-size: var(--typography-heading-md-font-size);
  font-weight: var(--typography-heading-md-font-weight);
  line-height: var(--typography-heading-md-line-height);
  letter-spacing: var(--typography-heading-md-letter-spacing);
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
.typography-label-sm {
  font-family: var(--typography-label-sm-font-family);
  font-size: var(--typography-label-sm-font-size);
  font-weight: var(--typography-label-sm-font-weight);
  line-height: var(--typography-label-sm-line-height);
  letter-spacing: var(--typography-label-sm-letter-spacing);
}
.typography-label-md {
  font-family: var(--typography-label-md-font-family);
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-label-md-font-weight);
  line-height: var(--typography-label-md-line-height);
  letter-spacing: var(--typography-label-md-letter-spacing);
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
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
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
.typography-title-sm-strong {
  font-family: var(--typography-title-sm-strong-font-family);
  font-size: var(--typography-title-sm-strong-font-size);
  font-weight: var(--typography-title-sm-strong-font-weight);
  line-height: var(--typography-title-sm-strong-line-height);
  letter-spacing: var(--typography-title-sm-strong-letter-spacing);
}
.bcn-aid__dialog{--dialog-width-lg:min(1900px, 94vw);--_dialog-max-height:86vh;--_dialog-padding:0;--_dialog-bg:var(--color-background-elevation-raised,#fcfcfc);--_aid-stage:max(360px, calc(86vh - 15rem))}
.bcn-aid [hidden]{display:none!important}
.bcn-aid__head{justify-content:space-between;align-items:flex-start;gap:var(--spacing-300);min-width:0;padding:var(--spacing-500) var(--spacing-500) var(--spacing-400);flex:1;display:flex}
.bcn-aid__head-text{gap:var(--spacing-150);flex-direction:column;flex:1;min-width:0;display:flex}
.bcn-aid__mark{flex:none;display:inline-flex}
.bcn-aid__mark:not(:has(>:not([hidden]))){display:none}
.bcn-aid__scope{align-items:center;gap:var(--spacing-200);color:var(--color-content-default-secondary);margin:0;font-weight:550;display:flex}
.bcn-aid__title{align-items:center;gap:var(--spacing-300);flex-wrap:wrap;margin:0;display:flex}
.bcn-aid__title-name{color:var(--color-content-default)}
.bcn-aid__head-actions{flex:none}
.bcn-aid__tabs{display:block}
.bcn-aid__stage{height:var(--_aid-stage);min-height:0}
.bcn-aid__overview{grid-template-columns:minmax(0,1fr) 380px;display:grid}
.bcn-aid__main{gap:var(--spacing-600);min-width:0;min-height:0;padding:0 var(--spacing-500) var(--spacing-500);flex-direction:column;display:flex;overflow-y:auto}
.bcn-aid__side{gap:var(--spacing-400);min-width:0;min-height:0;padding:0 var(--spacing-500) var(--spacing-500);flex-direction:column;display:flex;overflow-y:auto}
.bcn-aid__discussion{padding:0 var(--spacing-500) var(--spacing-500);overflow-y:auto}
.bcn-aid__discussion>div{max-width:56rem}
.bcn-aid__kv{gap:var(--spacing-300);flex-direction:column;display:flex}
.bcn-aid__kv-head{justify-content:space-between;align-items:flex-start;gap:var(--spacing-300);padding-bottom:var(--spacing-200);border-bottom:1px solid var(--color-border-default-subtle);display:flex}
.bcn-aid__kv-keys{gap:var(--spacing-050);flex-direction:column;min-width:0;display:flex}
.bcn-aid__kv-key{color:var(--color-content-default);margin:0}
.bcn-aid__kv-sub{color:var(--color-content-default-secondary);margin:0}
.bcn-aid__text{color:var(--color-content-default);white-space:pre-wrap;margin:0}
.bcn-aid__value{color:var(--color-content-default);margin:0}
.bcn-aid__none{color:var(--color-content-default-secondary);margin:0;font-style:italic}
.bcn-aid__notice{align-items:center;gap:var(--spacing-200);color:var(--color-content-default-secondary);margin:0;font-style:italic;display:flex}
.bcn-aid__end{--justify:flex-end}
.bcn-aid__center{--justify:center}
.bcn-aid__empty{padding:var(--spacing-500);border:1px solid var(--color-border-default-subtle);border-radius:var(--radius-md);background:var(--color-background-elevation-sunken)}
.bcn-aid__req{gap:var(--spacing-400);padding:var(--spacing-400) var(--spacing-500);border-radius:var(--radius-sm);background:var(--color-background-elevation-sunken);flex-direction:column;display:flex}
.bcn-aid__req-text{font-family:var(--font-decorative);color:var(--color-content-default);margin:0;font-size:.875rem;line-height:1.6}
.bcn-aid__req-kv{--grid-min:11rem}
.bcn-aid__na{padding-top:var(--spacing-300);border-top:1px solid var(--color-border-default-subtle)}
.bcn-aid__list-link{color:var(--color-content-link);text-decoration:none}
.bcn-aid__list-link:hover{color:var(--color-content-link-hover);text-decoration:underline}
.bcn-aid__due-value{color:var(--color-content-default)}
.bcn-aid__due-value[data-empty]{font-style:italic;font-weight:var(--typography-font-weight-regular,400);color:var(--color-content-default-secondary)}
.bcn-aid__due-original{color:var(--color-content-default-tertiary)}
[data-aid-kv][data-empty] .bcn-key-value__val,[data-aid-req-kv][data-empty] .bcn-key-value__val{font-style:italic;font-weight:var(--typography-font-weight-regular,400);color:var(--color-content-default-secondary)}
.bcn-aid__opt-group{list-style:none}
.bcn-aid__opt-group+.bcn-aid__opt-group{margin-top:var(--spacing-100);padding-top:var(--spacing-100);border-top:1px solid var(--color-border-default-subtle)}
.bcn-aid__opt-group-label{padding:var(--spacing-150) var(--spacing-300) var(--spacing-050);color:var(--color-content-default-secondary);display:block}
.bcn-aid__opt-group-list{margin:0;padding:0;list-style:none}
.bcn-aid__foot{--justify:flex-end;width:100%;padding:0 var(--spacing-500)}
.bcn-aid__main,.bcn-aid__side{overflow:visible}
.bcn-search-trigger .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover:var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.esa-card{--_card-bg:var(--card-bg,var(--color-background-elevation-raised,#fcfcfc));--_card-border:var(--card-border-color,var(--color-border-default,#cecece));--_card-radius:var(--radius-md,.5rem);--_card-padding:var(--spacing-500,1.5rem);--_card-header-bg:var(--card-header-bg,transparent);--_card-header-color:var(--color-content-default,#202020);--_card-header-border:var(--color-border-default-subtle,#d9d9d9);--_card-meta-label-color:var(--color-content-default-secondary,#646464);--_card-meta-label-size:var(--typography-label-sm-font-size,.875rem);--_card-meta-value-size:var(--typography-label-md-font-size,.9375rem);background:var(--_card-bg);border:var(--border-width-default,1px) solid var(--_card-border);border-radius:var(--_card-radius);display:block;overflow:hidden}
.esa-card--outlined{--_card-border:var(--color-border-default,#cecece)}
.esa-card--elevated{--_card-border:transparent;box-shadow:var(--elevation-2,0 2px 12px 0 #0000000a)}
.esa-card--filled{--_card-bg:var(--color-background-elevation-sunken,#f0f0f0);--_card-border:transparent}
.esa-card--header-primary .esa-card__header{--_card-header-bg:var(--color-background-brand,#46a758);--_card-header-color:var(--color-content-default-knockout,#fcfcfc)}
.esa-card--header-muted .esa-card__header{--_card-header-bg:var(--color-background-elevation-sunken,#f0f0f0)}
.esa-card--padding-none{--_card-padding:0}
.esa-card--padding-compact{--_card-padding:var(--spacing-300,.75rem)}
.esa-card--padding-spacious{--_card-padding:var(--spacing-700,3rem)}
.esa-card__header{padding:var(--spacing-400,1rem) var(--_card-padding);background:var(--_card-header-bg);color:var(--_card-header-color);border-bottom:var(--border-width-default,1px) solid var(--_card-header-border);justify-content:space-between;align-items:center;min-height:56px;display:flex}
.esa-card__header-content{align-items:center;gap:var(--spacing-300,.75rem);display:flex}
.esa-card__titles{gap:var(--spacing-050,.125rem);flex-direction:column;display:flex}
.esa-card__title{color:inherit;margin:0}
.esa-card__subtitle{color:var(--color-content-default-secondary,#646464);margin:0}
.esa-card--header-primary .esa-card__subtitle{color:var(--color-content-on-brand,#fffc)}
.esa-card__meta{gap:var(--spacing-100,.25rem) var(--spacing-500,1.5rem);margin:var(--spacing-050,.125rem) 0 0;flex-wrap:wrap;display:flex}
.esa-card__meta-pair{align-items:baseline;gap:var(--spacing-100,.25rem);min-width:0;display:flex}
.esa-card__meta dt{font-size:var(--_card-meta-label-size);font-weight:var(--font-weight-medium,500);color:var(--_card-meta-label-color)}
.esa-card__meta dd{font-size:var(--_card-meta-value-size);color:inherit;margin:0}
.esa-card--header-primary .esa-card__meta dt{color:#fffc}
.esa-card__icon{color:inherit;flex-shrink:0}
.esa-card__actions{align-items:center;gap:var(--spacing-200,.5rem);display:flex}
.esa-card__body{padding:var(--_card-padding)}
.esa-card__footer{padding:var(--spacing-300,.75rem) var(--_card-padding);border-top:var(--border-width-default,1px) solid var(--_card-header-border);background:var(--color-background-elevation-sunken,#f0f0f0)}
.bcn-disclosure{border-radius:var(--radius-100);width:20px;height:20px;color:var(--color-content-default-tertiary);cursor:pointer;background:0 0;border:0;flex:none;justify-content:center;align-items:center;padding:0;display:inline-flex}
.bcn-disclosure:hover{background:var(--color-background-elevation-sunken);color:var(--color-content-default-secondary)}
.bcn-disclosure .esa-icon{transition:transform .15s}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-countchip__num .esa-badge{--badge-radius:var(--radius-full);--badge-bg:var(--color-border-default);--badge-text-color:var(--color-content-default-secondary);box-sizing:border-box;font-variant-numeric:tabular-nums;min-width:19px;height:19px;box-shadow:0 0 0 1.5px var(--color-background-elevation-raised);justify-content:center;align-items:center;padding:0 4px;font-size:.8125rem;line-height:1;display:inline-flex}
.bcn-ev-staging__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-staging__item .esa-card{overflow:visible}
.bcn-ev-card__count .esa-pill{--pill-bg:transparent;--pill-border-color:var(--color-border-default);--pill-text-color:var(--color-content-default-secondary)}
.bcn-ev-card__files .esa-pill{max-width:100%}
.bcn-ev-card__files .esa-pill__label{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}
.bcn-cbadge{font-family:var(--typography-font-family-mono);font-weight:var(--typography-font-weight-semibold);color:var(--color-commitment);background:color-mix(in srgb, var(--color-commitment) 12%, white);border-radius:var(--radius-100);white-space:nowrap;flex-shrink:0;display:inline-block}
.bcn-cbadge--md{font-size:var(--font-size-100);padding:1px var(--spacing-200)}
.bcn-cbadge--sm{padding:1px var(--spacing-150);font-size:.75rem}
.bcn-cbadge--neutral{font-family:var(--typography-font-family-sans);color:var(--bcn-gray-700);background:var(--bcn-gray-100)}
.bcn-ev-targets__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-targets__item[data-receiving] .esa-card{border-color:var(--color-background-brand-muted);background:color-mix(in srgb, var(--color-background-brand-muted) 5%, transparent)}
.bcn-ev-targets__item[data-blocked] .esa-card{opacity:.45}
.bcn-ev-attached__mark .esa-badge{--badge-bg:var(--color-background-utility-info-subtle);--badge-text-color:var(--color-content-default);border:1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);font-weight:var(--typography-font-weight-medium)}
.bcn-ev-targets__item .esa-card{overflow:visible}
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
.bcn-change-log{margin:0;padding:0;list-style:none}
.bcn-change-log__day{padding:0 0 var(--spacing-400) var(--spacing-500);border-left:2px solid var(--color-border-default);margin-left:5px;position:relative}
.bcn-change-log__day:last-child{border-left-color:#0000;padding-bottom:0}
.bcn-change-log__day:before{content:"";background:var(--color-background-elevation-raised);border:2px solid var(--color-background-brand-muted);border-radius:50%;width:10px;height:10px;position:absolute;top:3px;left:-6px}
.bcn-change-log__date{margin:0 0 var(--spacing-200);font-size:.8125rem;font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default)}
.bcn-change-log__events{gap:var(--spacing-300);flex-direction:column;margin:0;padding:0;list-style:none;display:flex}
.bcn-change-log__event{flex-direction:column;gap:1px;display:flex}
.bcn-change-log__text{color:var(--color-content-default);font-size:.875rem;line-height:1.4}
.bcn-change-log__target{color:var(--color-content-link);text-decoration:none}
.bcn-change-log__target:hover{text-decoration:underline}
.bcn-change-log__by{color:var(--color-content-default-tertiary);font-size:.75rem}
.bcn-disc{gap:var(--spacing-400);flex-direction:column;display:flex}
.bcn-disc__head{align-items:center;gap:var(--spacing-200);font-size:var(--font-size-200);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);margin:0;display:flex}
.bcn-disc__head .esa-icon{color:var(--color-content-default-secondary);flex-shrink:0}
.bcn-disc__none{color:var(--color-content-default-tertiary);margin:0;font-size:.875rem}
.bcn-disc__tl{margin:0;padding:0;list-style:none}
.bcn-disc__item{gap:var(--spacing-300);padding-bottom:var(--spacing-400);grid-template-columns:auto 1fr;display:grid;position:relative}
.bcn-disc__item:not(:last-child):before{content:"";background:var(--color-border-default);width:2px;position:absolute;top:32px;bottom:0;left:13px}
.bcn-disc__item--compose{padding-bottom:0}
.bcn-disc__node{z-index:1;position:relative}
.bcn-disc__node .esa-avatar{--_avatar-bg:var(--_node-color,var(--color-background-brand-muted))}
.bcn-disc__body{flex-direction:column;gap:2px;min-width:0;display:flex}
.bcn-disc__meta{align-items:baseline;gap:var(--spacing-200);flex-wrap:wrap;display:flex}
.bcn-disc__author{font-size:.875rem;font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default)}
.bcn-disc__time{color:var(--color-content-default-tertiary);font-size:.75rem}
.bcn-disc__edited{color:var(--color-content-default-tertiary);font-size:.75rem;font-style:italic}
.bcn-disc__text{color:var(--color-content-default);white-space:pre-wrap;margin:0;font-size:.875rem;line-height:1.5}
.bcn-disc__actions{opacity:0;align-items:center;gap:1px;margin-left:auto;transition:opacity .12s;display:inline-flex}
.bcn-disc__item:hover .bcn-disc__actions,.bcn-disc__item:focus-within .bcn-disc__actions{opacity:1}
.bcn-disc__actions .esa-icon-button{width:26px;height:26px}
.bcn-disc__actions .esa-icon{width:15px;height:15px}
.bcn-disc__compose{gap:var(--spacing-200);flex-direction:column;min-width:0;display:flex}
.bcn-disc__as{color:var(--color-content-default-secondary);font-size:.8125rem}
.bcn-disc__compose esa-textarea{width:100%}
.bcn-disc__compose-actions{justify-content:flex-end;display:flex}
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
.typography-heading-md{font-family:var(--typography-heading-md-font-family);font-size:var(--typography-heading-md-font-size);font-weight:var(--typography-heading-md-font-weight);line-height:var(--typography-heading-md-line-height);letter-spacing:var(--typography-heading-md-letter-spacing)}
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-body-sm{font-family:var(--typography-body-sm-font-family);font-size:var(--typography-body-sm-font-size);font-weight:var(--typography-body-sm-font-weight);line-height:var(--typography-body-sm-line-height);letter-spacing:var(--typography-body-sm-letter-spacing)}
.typography-label-sm{font-family:var(--typography-label-sm-font-family);font-size:var(--typography-label-sm-font-size);font-weight:var(--typography-label-sm-font-weight);line-height:var(--typography-label-sm-line-height);letter-spacing:var(--typography-label-sm-letter-spacing)}
.typography-label-md{font-family:var(--typography-label-md-font-family);font-size:var(--typography-label-md-font-size);font-weight:var(--typography-label-md-font-weight);line-height:var(--typography-label-md-line-height);letter-spacing:var(--typography-label-md-letter-spacing)}
.typography-label-xs-strong{font-family:var(--typography-label-xs-strong-font-family);font-size:var(--typography-label-xs-strong-font-size);font-weight:var(--typography-label-xs-strong-font-weight);line-height:var(--typography-label-xs-strong-line-height);letter-spacing:var(--typography-label-xs-strong-letter-spacing)}
.typography-label-sm-strong{font-family:var(--typography-label-sm-strong-font-family);font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight);line-height:var(--typography-label-sm-strong-line-height);letter-spacing:var(--typography-label-sm-strong-letter-spacing)}
.typography-label-md-strong{font-family:var(--typography-label-md-strong-font-family);font-size:var(--typography-label-md-strong-font-size);font-weight:var(--typography-label-md-strong-font-weight);line-height:var(--typography-label-md-strong-line-height);letter-spacing:var(--typography-label-md-strong-letter-spacing)}
.typography-microcopy-xs{font-family:var(--typography-microcopy-xs-font-family);font-size:var(--typography-microcopy-xs-font-size);font-weight:var(--typography-microcopy-xs-font-weight);line-height:var(--typography-microcopy-xs-line-height);letter-spacing:var(--typography-microcopy-xs-letter-spacing)}
.typography-microcopy-md{font-family:var(--typography-microcopy-md-font-family);font-size:var(--typography-microcopy-md-font-size);font-weight:var(--typography-microcopy-md-font-weight);line-height:var(--typography-microcopy-md-line-height);letter-spacing:var(--typography-microcopy-md-letter-spacing)}
.typography-microcopy-xs-subtle{font-family:var(--typography-microcopy-xs-subtle-font-family);font-size:var(--typography-microcopy-xs-subtle-font-size);font-weight:var(--typography-microcopy-xs-subtle-font-weight);line-height:var(--typography-microcopy-xs-subtle-line-height);letter-spacing:var(--typography-microcopy-xs-subtle-letter-spacing)}
.typography-microcopy-md-subtle{font-family:var(--typography-microcopy-md-subtle-font-family);font-size:var(--typography-microcopy-md-subtle-font-size);font-weight:var(--typography-microcopy-md-subtle-font-weight);line-height:var(--typography-microcopy-md-subtle-line-height);letter-spacing:var(--typography-microcopy-md-subtle-letter-spacing)}
.typography-microcopy-xs-strong{font-family:var(--typography-microcopy-xs-strong-font-family);font-size:var(--typography-microcopy-xs-strong-font-size);font-weight:var(--typography-microcopy-xs-strong-font-weight);line-height:var(--typography-microcopy-xs-strong-line-height);letter-spacing:var(--typography-microcopy-xs-strong-letter-spacing)}
.typography-microcopy-md-strong{font-family:var(--typography-microcopy-md-strong-font-family);font-size:var(--typography-microcopy-md-strong-font-size);font-weight:var(--typography-microcopy-md-strong-font-weight);line-height:var(--typography-microcopy-md-strong-line-height);letter-spacing:var(--typography-microcopy-md-strong-letter-spacing)}
.typography-title-sm-strong{font-family:var(--typography-title-sm-strong-font-family);font-size:var(--typography-title-sm-strong-font-size);font-weight:var(--typography-title-sm-strong-font-weight);line-height:var(--typography-title-sm-strong-line-height);letter-spacing:var(--typography-title-sm-strong-letter-spacing)}
.bcn-component-picker__trigger>.esa-icon{color:var(--color-content-default-tertiary);flex-shrink:0}
.bcn-component-picker__tmark .bcn-entity-logo{--icon-size-xs:12px;width:20px;height:20px}
.esa-avatar{--_avatar-size:var(--avatar-size-md,40px);--_avatar-font-size:var(--avatar-font-size-md,var(--typography-label-md-strong-font-size,var(--font-size-200,.9375rem)));--_avatar-radius:var(--radius-pill,9999px);--_avatar-bg:var(--avatar-bg,hsl(var(--_avatar-hue,200) 45% 65%));--_avatar-text:var(--color-content-default-knockout,#fcfcfc);width:var(--_avatar-size);height:var(--_avatar-size);border-radius:var(--_avatar-radius);background:var(--_avatar-bg);color:var(--_avatar-text);font-size:var(--_avatar-font-size);user-select:none;box-sizing:border-box;flex-shrink:0;justify-content:center;align-items:center;display:inline-flex;overflow:hidden}
.esa-avatar--xs{--_avatar-size:var(--avatar-size-xs,20px);--_avatar-font-size:var(--avatar-font-size-xs,var(--typography-label-2xs-strong-font-size,var(--font-size-050,.625rem)))}
.esa-avatar--sm{--_avatar-size:var(--avatar-size-sm,28px);--_avatar-font-size:var(--avatar-font-size-sm,var(--typography-label-xs-strong-font-size,var(--font-size-100,.75rem)))}
.esa-avatar--lg{--_avatar-size:var(--avatar-size-lg,56px);--_avatar-font-size:var(--avatar-font-size-lg,var(--typography-title-font-size,var(--font-size-400,1.25rem)))}
.esa-avatar--square{--_avatar-radius:var(--radius-md,.5rem)}
.esa-avatar__image{object-fit:cover;width:100%;height:100%}
.bcn-entity-logo{background:color-mix(in srgb, var(--_c) 12%, transparent);color:var(--_c);border:1px solid color-mix(in srgb, var(--_c) 30%, transparent);flex-shrink:0;justify-content:center;align-items:center;line-height:0;display:inline-flex;overflow:hidden}
.bcn-entity-logo[data-style=fill]{background:var(--_c);color:var(--color-content-default-knockout);border-color:#0000}
.bcn-entity-logo[data-style=image]{background:var(--color-background-elevation-sunken);border-color:var(--color-border-default-subtle)}
.bcn-entity-logo__img{object-fit:cover;width:100%;height:100%;display:block}
.bcn-entity-logo[data-size=sm]{width:24px;height:24px}
.bcn-entity-logo[data-size=md]{--icon-size-sm:18px;width:32px;height:32px}
.bcn-entity-logo[data-size=lg]{width:48px;height:48px}
.bcn-entity-logo[data-size=xl]{--icon-size-xl:36px;width:72px;height:72px}
.bcn-entity-logo[data-size="2xl"]{--icon-size-xl:44px;width:92px;height:92px}
.bcn-entity-logo[data-shape=rounded][data-size=sm],.bcn-entity-logo[data-shape=rounded][data-size=md]{border-radius:var(--radius-200)}
.bcn-entity-logo[data-shape=rounded][data-size=lg],.bcn-entity-logo[data-shape=rounded][data-size=xl],.bcn-entity-logo[data-shape=rounded][data-size="2xl"]{border-radius:var(--radius-400)}
.bcn-entity-logo[data-shape=circle]{border-radius:var(--radius-full)}
.bcn-entity-logo[data-variant=seal]{border:var(--bcn-seal-ring-width) solid var(--bcn-seal-ring-color);box-shadow:var(--bcn-seal-shadow);box-sizing:content-box}
.esa-icon{--_icon-size:var(--icon-size-md,20px);width:var(--_icon-size);height:var(--_icon-size);color:inherit;justify-content:center;align-items:center;display:inline-flex}
.esa-icon--xs{--_icon-size:var(--icon-size-xs,14px)}
.esa-icon--sm{--_icon-size:var(--icon-size-sm,16px)}
.esa-icon--md{--_icon-size:var(--icon-size-md,20px)}
.esa-icon--lg{--_icon-size:var(--icon-size-lg,24px)}
.esa-icon--xl{--_icon-size:var(--icon-size-xl,28px)}
.esa-icon svg{width:var(--_icon-size);height:var(--_icon-size);display:block}
.esa-empty-state{--_empty-icon-size:var(--empty-state-icon-size-md,48px);--_empty-gap:var(--spacing-200,.5rem);text-align:center;padding:var(--spacing-600,2rem) var(--spacing-400,1rem);justify-content:center;align-items:center;gap:var(--_empty-gap);flex-direction:column;display:flex}
.esa-empty-state--xs{--_empty-icon-size:var(--empty-state-icon-size-xs,24px);padding:var(--spacing-300,.75rem) var(--spacing-200,.5rem)}
.esa-empty-state--sm{--_empty-icon-size:var(--empty-state-icon-size-sm,32px);padding:var(--spacing-400,1rem) var(--spacing-300,.75rem)}
.esa-empty-state--lg{--_empty-icon-size:var(--empty-state-icon-size-lg,64px);padding:var(--spacing-800,4rem) var(--spacing-400,1rem)}
.esa-empty-state__icon{color:var(--color-content-default-secondary,#646464);margin-bottom:var(--spacing-100,.25rem);display:inline-flex}
.esa-empty-state__icon svg{width:var(--_empty-icon-size);height:var(--_empty-icon-size)}
.esa-empty-state__title{color:var(--color-content-default,#202020);margin:0}
.esa-empty-state__description{color:var(--color-content-default-secondary,#646464);max-width:360px;margin:0}
.esa-empty-state__actions{margin-top:var(--spacing-200,.5rem)}
.esa-empty-state__actions:empty{display:none}
.esa-collapsible{border:var(--border-width-default,1px) solid var(--color-border-default,#cecece);border-radius:var(--radius-md,.5rem);background:var(--color-background-elevation-raised,#fcfcfc)}
.esa-collapsible--flush{background:0 0;border:none;border-radius:0}
.esa-collapsible--flush>.esa-collapsible__summary,.esa-collapsible--flush>.esa-collapsible__body{padding-inline:0}
.esa-collapsible__summary{align-items:center;gap:var(--spacing-200,.5rem);padding:var(--spacing-300,.75rem) var(--spacing-400,1rem);color:var(--color-content-default,#202020);cursor:pointer;list-style:none;display:flex}
.esa-collapsible__summary::-webkit-details-marker{display:none}
.esa-collapsible__summary:after{content:"";border-right:2px solid var(--color-content-default-secondary,#646464);border-bottom:2px solid var(--color-content-default-secondary,#646464);width:8px;height:8px;margin-left:auto;transition:transform .15s;transform:rotate(-45deg)}
.esa-collapsible[open]>.esa-collapsible__summary:after{transform:rotate(45deg)}
.esa-collapsible__summary .esa-icon{color:var(--color-content-default-secondary,#646464);flex-shrink:0}
.esa-collapsible__body{gap:var(--spacing-400,1rem);padding:0 var(--spacing-400,1rem) var(--spacing-400,1rem);flex-direction:column;display:flex}
.bcn-key-value{flex-direction:column;gap:2px;display:flex}
.bcn-key-value[data-layout=row]{align-items:baseline;column-gap:var(--spacing-300);grid-template-columns:6.5rem minmax(0,1fr);display:grid}
.bcn-key-value__key{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-medium);color:var(--form-label-color)}
.bcn-key-value__val{font-size:var(--typography-label-md-font-size);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default)}
.bcn-key-value__hint{color:var(--color-content-default-tertiary);font-size:.75rem}
.bcn-key-value__key{align-items:center;gap:var(--spacing-100);display:inline-flex}
.bcn-key-value__key .esa-icon{color:var(--color-content-default-tertiary)}
.bcn-key-value[data-size=sm] .bcn-key-value__key{font-size:var(--typography-label-sm-font-size);font-weight:var(--typography-label-sm-font-weight);color:var(--color-content-secondary)}
.bcn-key-value[data-size=sm] .bcn-key-value__val{font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight)}
.bcn-status-select{gap:var(--spacing-100);flex-direction:column;display:flex}
.bcn-status-select__label{font-size:.875rem;font-weight:var(--typography-font-weight-medium);color:var(--form-label-color)}
.bcn-status-select__dd{position:relative}
.bcn-status-select__trigger{align-items:center;gap:var(--spacing-200);width:100%;height:40px;padding:0 var(--spacing-300);font-size:.875rem;font-weight:var(--typography-font-weight-medium);color:var(--color-content-default);background:var(--color-background-elevation-raised);border:1px solid var(--form-border-color);border-radius:var(--radius-md);cursor:pointer;transition:border-color .15s,box-shadow .15s;display:flex}
.bcn-status-select__trigger:hover{border-color:var(--color-border-default-strong)}
.bcn-status-select__trigger[aria-expanded=true]{border-color:var(--color-background-brand);box-shadow:0 0 0 3px color-mix(in srgb, var(--color-background-brand) 18%, transparent)}
.bcn-status-select__value{text-align:left;flex:1}
.bcn-status-select__chev{color:var(--color-content-default-tertiary);flex-shrink:0;transition:transform .15s}
.bcn-status-select__trigger[aria-expanded=true] .bcn-status-select__chev{transform:rotate(180deg)}
.bcn-status-select__dot{border-radius:50%;flex-shrink:0;width:9px;height:9px}
.bcn-status-select__dot--not-started{background:var(--bcn-status-not-started)}
.bcn-status-select__dot--in-progress{background:var(--bcn-status-in-progress)}
.bcn-status-select__dot--completed{background:var(--bcn-status-completed)}
.bcn-status-select[data-value=not-started] .bcn-status-select__dot--trigger{background:var(--bcn-status-not-started)}
.bcn-status-select[data-value=in-progress] .bcn-status-select__dot--trigger{background:var(--bcn-status-in-progress)}
.bcn-status-select[data-value=completed] .bcn-status-select__dot--trigger{background:var(--bcn-status-completed)}
.bcn-status-select__menu{z-index:20;width:max-content;min-width:100%;padding:var(--spacing-100);background:var(--color-background-elevation-raised);border:1px solid var(--color-border-default);border-radius:var(--radius-md);box-shadow:var(--elevation-4);margin:0;list-style:none;position:absolute;top:calc(100% + 4px);left:0}
.bcn-status-select__menu[hidden]{display:none}
.bcn-status-select__opt{align-items:center;gap:var(--spacing-200);padding:var(--spacing-200) var(--spacing-300);color:var(--color-content-default);border-radius:var(--radius-200);cursor:pointer;white-space:nowrap;font-size:.875rem;display:flex}
.bcn-status-select__opt:hover{background:var(--color-background-elevation-sunken)}
.bcn-status-select__opt[aria-selected=true]{background:var(--color-background-elevation-sunken);font-weight:var(--typography-font-weight-semibold)}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color,var(--bcn-gray-1000));flex-shrink:0}
.stack{--gap:var(--spacing-400,1rem);gap:var(--gap);flex-direction:column;display:flex}
.stack[data-split]>[data-split]{margin-block-end:auto}
.cluster{--gap:var(--spacing-300,.75rem);--align:center;--justify:flex-start;gap:var(--gap);align-items:var(--align);justify-content:var(--justify);flex-wrap:wrap;display:flex}
.grid{--gap:var(--spacing-400,1rem);--grid-min:16rem;gap:var(--gap);grid-template-columns:repeat(auto-fit, minmax(min(var(--grid-min), 100%), 1fr));display:grid}
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
.esa-pill{--_pill-bg:var(--color-background-elevation-sunken,#f0f0f0);--_pill-text:var(--color-content-default,#202020);--_pill-border:var(--color-border-default-subtle,#d9d9d9);--_pill-padding-y:var(--spacing-150,.375rem);--_pill-padding-x:var(--spacing-200,.5rem);--_pill-gap:var(--spacing-100,.25rem);align-items:center;gap:var(--_pill-gap);padding-block:var(--_pill-padding-y);padding-inline:var(--_pill-padding-x);border:var(--border-width-default,1px) solid var(--_pill-border);border-radius:var(--radius-chip,var(--radius-sm,.25rem));background:var(--_pill-bg);color:var(--_pill-text);white-space:nowrap;box-sizing:border-box;display:inline-flex}
.esa-pill--xs{--_pill-padding-y:var(--spacing-100,.25rem);--_pill-padding-x:var(--spacing-100,.25rem)}
.esa-pill--sm{--_pill-padding-y:var(--spacing-100,.25rem);--_pill-padding-x:var(--spacing-150,.375rem)}
.esa-pill--lg{--_pill-padding-y:var(--spacing-200,.5rem);--_pill-padding-x:var(--spacing-300,.75rem)}
.esa-pill--round{border-radius:var(--radius-pill,9999px)}
.esa-pill--primary{--_pill-bg:var(--color-background-brand-subtle,var(--color-grass-2));--_pill-text:var(--color-content-brand,var(--color-grass-11));--_pill-border:var(--color-border-brand,var(--color-grass-6))}
.esa-pill--info{--_pill-bg:var(--color-background-utility-info-subtle,var(--color-blue-2));--_pill-text:var(--color-content-utility-info,#0d74ce);--_pill-border:var(--color-border-utility-info,var(--color-blue-6))}
.esa-pill--success{--_pill-bg:var(--color-background-utility-success-subtle,var(--color-green-2));--_pill-text:var(--color-content-utility-success,#218358);--_pill-border:var(--color-border-utility-success,var(--color-green-6))}
.esa-pill--warning{--_pill-bg:var(--color-background-utility-warning-subtle,var(--color-yellow-2));--_pill-text:var(--color-content-utility-warning,#ab6400);--_pill-border:var(--color-border-utility-warning,var(--color-yellow-6))}
.esa-pill--danger{--_pill-bg:var(--color-background-utility-danger-subtle,var(--color-red-2));--_pill-text:var(--color-content-utility-danger,#ce2c31);--_pill-border:var(--color-border-utility-danger,var(--color-red-6))}
.esa-pill[data-category]{--_pill-bg:var(--category-2,var(--color-background-elevation-sunken,#f0f0f0));--_pill-border:var(--category-6,var(--color-border-default-subtle,#d9d9d9));--_pill-text:var(--category-11,var(--color-content-default,#202020))}
.esa-pill__icon{flex-shrink:0;display:inline-flex}
.esa-pill__remove{border-radius:var(--radius-pill,9999px);width:16px;height:16px;color:inherit;cursor:pointer;opacity:.6;transition:opacity var(--transition-fast,.15s ease), background var(--transition-fast,.15s ease);background:0 0;border:none;justify-content:center;align-items:center;padding:0;display:inline-flex}
.esa-pill__remove:hover{opacity:1;background:var(--color-background-overlay-heavy-hover,#0000001a)}
.esa-pill__remove:focus-visible{outline:var(--focus-ring-width,2px) solid var(--focus-ring-color,#3e9b4f);outline-offset:var(--focus-ring-offset,2px)}
.bcn-evidence-list{gap:var(--spacing-400);flex-direction:column;display:flex}
.bcn-evidence-list__row-actions{gap:var(--spacing-300);display:flex}
.bcn-evidence-list__items{gap:var(--spacing-300);flex-direction:column;margin:0;padding:0;list-style:none;display:flex}
.bcn-evidence-card .esa-card__header{min-height:0;padding-block:var(--spacing-100)}
.bcn-evidence-card:not(.is-expanded) .esa-card__header{border-bottom:0}
.bcn-evidence-card__head{justify-content:space-between;align-items:center;gap:var(--spacing-150);width:100%;padding-inline:var(--spacing-200);display:flex}
.bcn-evidence-card__lead{align-items:center;gap:var(--spacing-150);min-width:0;padding:var(--spacing-150) 0;cursor:pointer;flex:1;display:flex}
.bcn-evidence-card__lead .esa-icon{color:var(--color-content-default-tertiary);flex-shrink:0;transition:transform .15s}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon{transform:rotate(90deg)}
.bcn-evidence-card__name{min-width:0;font-size:.8125rem;font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);white-space:nowrap;text-overflow:ellipsis;overflow:hidden}
.bcn-evidence-card__actions{flex-shrink:0;align-items:center;gap:1px;display:flex}
.bcn-evidence-card__actions .esa-icon-button{width:26px;height:26px}
.bcn-evidence-card__actions .esa-icon{width:15px;height:15px}
.bcn-evidence-card__actions .bcn-evidence-card__star--on{color:var(--color-background-accent)}
.bcn-evidence-card__actions .bcn-evidence-card__star--on svg{fill:currentColor}
.bcn-evidence-card__fields[hidden]{display:none}
.bcn-evidence-card__fields{gap:var(--spacing-300);padding:var(--spacing-300) var(--spacing-400) var(--spacing-400);flex-direction:column;display:flex}
.bcn-evidence-card__field{gap:var(--spacing-100);flex-direction:column;display:flex}
.bcn-evidence-card__label{align-items:center;gap:var(--spacing-150);font-size:.8125rem;font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);display:inline-flex}
.bcn-evidence-card__text{color:var(--color-content-default-secondary);font-size:.8125rem;line-height:1.5}
.bcn-evidence-card__text--muted{color:var(--color-content-default-tertiary);font-style:italic}
.bcn-evidence-card__pills{gap:var(--spacing-150);flex-wrap:wrap;display:flex}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--avatar-bg`: hsl(200 45% 65%) _(component)_
- `--avatar-font-size-lg`: clamp(1rem, .88rem + .6vw, 1.25rem) _(component)_
- `--avatar-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--avatar-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--avatar-font-size-xs`: clamp(.5rem, .44rem + .3vw, .625rem) _(component)_
- `--avatar-size-lg`: 56px _(component)_
- `--avatar-size-md`: 40px _(component)_
- `--avatar-size-sm`: 28px _(component)_
- `--avatar-size-xs`: 20px _(component)_
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
- `--bcn-seal-ring-color`: #fcfcfc _(component)_
- `--bcn-seal-ring-width`: 3px _(component)_
- `--bcn-seal-shadow`: 0 2px 12px 0 #00000014 _(component)_
- `--bcn-status-completed`: #2e7571 _(component)_
- `--bcn-status-in-progress`: #f59e0b _(component)_
- `--bcn-status-not-started`: #bdbdbd _(component)_
- `--border-width-default`: 1px _(semantic)_
- `--button-chrome-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--button-on-warning`: #fff _(component)_
- `--button-radius-lg`: .25rem _(component)_
- `--button-radius-md`: .25rem _(component)_
- `--button-radius-sm`: .25rem _(component)_
- `--button-radius-xs`: .25rem _(component)_
- `--card-bg`: #fcfcfc _(component)_
- `--card-border-color`: #dcdcdc _(component)_
- `--card-header-bg`: transparent _(component)_
- `--color-background-accent`: #f76b15 _(semantic)_
- `--color-background-ai`: #699cc6 _(semantic)_
- `--color-background-ai-hover`: #4c75a9 _(semantic)_
- `--color-background-brand`: #005862 _(semantic)_
- `--color-background-brand-hover`: #00474f _(semantic)_
- `--color-background-brand-muted`: #eef5f4 _(semantic)_
- `--color-background-brand-muted-hover`: #b9d6d2 _(semantic)_
- `--color-background-brand-subtle`: #effefb _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-overlay-heavy-hover`: #0000001a _(semantic)_
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
- `--color-blue-2`: #f4faff _(primitive)_
- `--color-blue-6`: #acd8fc _(primitive)_
- `--color-border-brand`: #b9d6d2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
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
- `--color-content-link`: #005862 _(semantic)_
- `--color-content-link-hover`: #00474f _(semantic)_
- `--color-content-on-brand`: #fcfcfc _(semantic)_
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-secondary`: #525252 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--color-grass-11`: #2a7e3b _(primitive)_
- `--color-grass-2`: #f5fbf5 _(primitive)_
- `--color-grass-6`: #b2ddb5 _(primitive)_
- `--color-green-2`: #f4fbf6 _(primitive)_
- `--color-green-6`: #adddc0 _(primitive)_
- `--color-red-2`: #fff7f7 _(primitive)_
- `--color-red-6`: #fdbdbe _(primitive)_
- `--color-yellow-2`: #fefbe9 _(primitive)_
- `--color-yellow-6`: #f3d673 _(primitive)_
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--elevation-4`: 0 6px 24px -6px #00000012 _(semantic)_
- `--empty-state-icon-size-lg`: 64px _(component)_
- `--empty-state-icon-size-md`: 48px _(component)_
- `--empty-state-icon-size-sm`: 32px _(component)_
- `--empty-state-icon-size-xs`: 24px _(component)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-size-050`: clamp(.5rem, .44rem + .3vw, .625rem) _(primitive)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--font-size-400`: clamp(1rem, .88rem + .6vw, 1.25rem) _(primitive)_
- `--font-weight-medium`: 500 _(component)_
- `--form-border-color`: #dcdcdc _(component)_
- `--form-label-color`: #525252 _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-400`: .75rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
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
- `--spacing-500`: 1.5rem _(primitive)_
- `--spacing-600`: 2rem _(primitive)_
- `--spacing-700`: 3rem _(primitive)_
- `--spacing-800`: 4rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 350 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-regular`: 350 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-heading-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-heading-md-font-size`: clamp(1.125rem, .98rem + .72vw, 1.5rem) _(semantic)_
- `--typography-heading-md-font-weight`: 550 _(semantic)_
- `--typography-heading-md-letter-spacing`: -.01em _(semantic)_
- `--typography-heading-md-line-height`: 1.3 _(semantic)_
- `--typography-label-2xs-strong-font-size`: clamp(.5rem, .44rem + .3vw, .625rem) _(semantic)_
- `--typography-label-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-font-weight`: 500 _(semantic)_
- `--typography-label-md-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-label-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-label-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-label-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-xs-strong-line-height`: 1.6 _(semantic)_
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
- `--typography-title-font-size`: clamp(1rem, .88rem + .6vw, 1.25rem) _(semantic)_
- `--typography-title-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-title-sm-strong-font-size`: clamp(.8125rem, .71rem + .5vw, 1.0625rem) _(semantic)_
- `--typography-title-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-title-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-title-sm-strong-line-height`: 1.6 _(semantic)_
