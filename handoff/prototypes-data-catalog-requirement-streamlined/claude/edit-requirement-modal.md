# Edit Requirement modal

Requirement detail — streamlined (Data Catalog) · source prototype: https://esassoc.github.io/beacon-design/prototypes/data-catalog-requirement-streamlined/

![Edit Requirement modal, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-requirement-streamlined/claude/edit-requirement-modal.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-data-catalog-requirement-streamlined/claude/edit-requirement-modal.phone.png

The upsert surface — a fixed-size TWO-PANE esa-dialog matching the family geometry. LEFT is read-only SOURCE CONTEXT (the requirement text in serif, the commitment badge, the source document); RIGHT is the merged config as an esa-tab-layout (Details / Timing / Evidence of Compliance / Notifications). There is no requirements-assignment pane — the 1:1 Action link is automatic (BCN-1163).

## Key decisions

- Two panes on a FIXED-HEIGHT stage (2fr | 3fr); each pane scrolls independently so switching tabs or toggling a notification NEVER resizes the modal.
- The left pane is read-only context (why the 1:1 link needs no assignment step); its "View in Source Document" opens the shared source drawer.
- Details tab edits the merged fields including the trio (Species / Season / Construction Activities) as first-class controls; Requirement Text replaces Action Text (Action Text is hidden for Prologis).
- Timing tab is one-time (a note states no frequency); Notifications tab shows the due date as READ context ("edited in Project Tracking") with the schedule computed from it.
- Every control is an esa-* lego (esa-tab-layout / esa-text-field / esa-textarea / esa-select / esa-input-tag / esa-entity-search / esa-file-upload / esa-switch-toggle).

## Gotchas

- The modal is a peer dialog opened from the header Edit button (the apply recipe clicks #edit-req); it is not nested in the page flow.
- The two-pane stage cancels esa-dialog's body padding (negative margin of --_dialog-padding) so the panes reach the edges and the tab-bar border spans the full pane width — keep that when porting.
- Do NOT add an Action Text field or an Action-Lists control — both are intentionally absent under the streamlined + Prologis config.
- Keep the z-stack: source drawer (1300) above the edit modal (1200) above the topbar (1100).

## Done when

- Clicking "Edit requirement" opens a fixed-size two-pane modal: read source context left, a four-tab config right (Details/Timing/Evidence/Notifications), each pane scrolling independently; Cancel and Save close it.

## Components

- `bcn-note` (spoke) · `src/components/bcn/BcnResponseEditor.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-dialog` (hub) · `packages/ecology/src/components/esa-dialog.ts`
- `esa-entity-search` (hub) · `packages/ecology/src/components/esa-entity-search.ts`
- `esa-file-upload` (hub) · `packages/ecology/src/components/esa-file-upload.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-input-tag` (hub) · `packages/ecology/src/components/esa-input-tag.ts`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-switch-toggle` (hub) · `packages/ecology/src/components/esa-switch-toggle.ts`
- `esa-tab-layout` (hub) · `packages/ecology/src/components/esa-tab-layout.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup

_7 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-dialog
  id="edit-dialog"
  size="lg"
  style="
    --_dialog-width: 96vw;
    --_dialog-max-height: 94vh;
    --_dialog-bg: var(--color-background-elevation-raised, #fff);
    --z-modal-backdrop: 1150;
    --z-modal: 1200;
  "
  open=""
  ><div slot="header" class="bcn-editor__head">
    <span class="bcn-editor__head-title"
      >Pre-construction survey for nesting raptors and other migratory birds during nesting
      season</span
    ><span class="bcn-action__badge bcn-action__badge--type">Survey</span>
  </div>
  <div class="bcn-editor">
    <!-- LEFT: source context (read) -->
    <section class="bcn-context" aria-label="Source context">
      <p class="bcn-context__text">
        Prior to ground-disturbing activities, a qualified biologist shall complete pre-construction
        survey for nesting raptors and other migratory birds during nesting season within the
        project area and submit findings to the City.
      </p>
      <div class="bcn-context__facts">
        <span class="bcn-action__badge bcn-action__badge--commitment">MM-BIO-2</span
        ><span class="bcn-context__doc"
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <!-- …and 3 more like this (<path>) -->
            </svg></span
          >3600 Alameda Avenue Project FEIR</span
        >
      </div>
      <div class="bcn-context__actions">
        <span id="ctx-source"
          ><span
            class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
            ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <!-- …and 3 more like this (<path>) -->
                </svg></span
              ><span class="esa-button__label">View in Source Document</span>
            </button></span
          ></span
        >
      </div>
    </section>
    <!-- RIGHT: tabbed config -->
    <section class="bcn-config" aria-label="Requirement configuration">
      <esa-tab-layout id="config-tabs" appearance="underline" size="md" variant="underline"
        ><div slot="panel-0" class="bcn-form">
          <esa-text-field id="d-name" label="Name" required="" size="md"></esa-text-field
          ><esa-textarea id="d-text" label="Requirement Text" rows="4" size="md"></esa-textarea
          ><!-- Action Text intentionally ABSENT — hidden under the Prologis config. -->
          <div class="bcn-grid-2">
            <esa-select id="d-type" label="Type" size="md"></esa-select
            ><esa-select id="d-phase" label="Phase" size="md"></esa-select>
          </div>
          <esa-select id="d-cat" label="Resource Category" size="md"></esa-select
          ><esa-input-tag id="d-species" label="Species" size="md"></esa-input-tag>
          <div class="bcn-grid-2">
            <esa-select id="d-season" label="Season" size="md"></esa-select
            ><esa-text-field id="d-party" label="Responsible Party" size="md"></esa-text-field>
          </div>
          <esa-input-tag id="d-activities" label="Construction Activities" size="md"></esa-input-tag
          ><esa-entity-search
            id="d-assignee"
            label="Default Assignee"
            placeholder="Search users, organizations, or people…"
          ></esa-entity-search>
        </div>
        <div slot="panel-1" class="bcn-form">
          <!-- One-time only (BCN-1163): no frequency control — a note instead. -->
          <div class="bcn-note">
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
            ><span
              >Streamlined requirements are <strong>one-time</strong> — a single implementation with
              a single due date. Frequency and recurrence are not available.</span
            >
          </div>
          <div class="bcn-grid-3">
            <esa-text-field id="t-offset" label="Deadline" type="number" size="md"></esa-text-field
            ><esa-select id="t-unit" label="Unit" size="md"></esa-select
            ><esa-select id="t-relative" label="Relative to" size="md"></esa-select>
          </div>
          <esa-select id="t-milestone" label="Milestone" size="md"></esa-select>
        </div>
        <div slot="panel-3" class="bcn-form bcn-notif">
          <section class="bcn-ncard">
            <h4 class="bcn-ncard__title">Additional Recipients</h4>
            <esa-entity-search
              id="n-recipients"
              label="Additional recipients"
              placeholder="Search users, organizations, or people…"
            ></esa-entity-search>
            <div class="bcn-note">
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
              ><span
                >Notifications are sent to the assignee. Add additional recipients here to also
                receive notifications.</span
              >
            </div>
          </section>
          <section class="bcn-ncard">
            <h4 class="bcn-ncard__title">Due Date</h4>
            <p class="bcn-ncard__date">May 18, 2026</p>
            <p class="bcn-ncard__hint">
              Notification times below are calculated relative to this date. The due date is edited
              in Project Tracking.
            </p>
          </section>
          <section class="bcn-ntoggle" data-notif="upcoming">
            <header class="bcn-ntoggle__head">
              <span class="bcn-ntoggle__title"
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
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path
                      d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                    ></path></svg></span
                >Your Requirement Is Coming Up</span
              ><esa-switch-toggle
                id="n-upcoming"
                label=""
                checked=""
                size="md"
                label-position="after"
              ></esa-switch-toggle>
            </header>
            <div class="bcn-ntoggle__body" data-notif-body="">
              <esa-text-field id="n-lead" label="Lead days" type="number" size="md"></esa-text-field
              ><span class="bcn-field__hint">Default: 7 days</span
              ><label class="bcn-check"><input type="checkbox" /><span>Repeat?</span></label>
            </div>
          </section>
          <section class="bcn-ntoggle" data-notif="due">
            <header class="bcn-ntoggle__head">
              <span class="bcn-ntoggle__title"
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
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path></svg></span
                >Your Requirement Is Due</span
              ><esa-switch-toggle
                id="n-due"
                label=""
                checked=""
                size="md"
                label-position="after"
              ></esa-switch-toggle>
            </header>
            <div class="bcn-ntoggle__body" data-notif-body="">
              <p class="bcn-ncard__hint">A notification will be sent on the due date.</p>
            </div>
          </section>
          <section class="bcn-ntoggle" data-notif="past">
            <header class="bcn-ntoggle__head">
              <span class="bcn-ntoggle__title"
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
                    <path d="M12 17h.01"></path></svg></span
                >Your Requirement Is Past Due</span
              ><esa-switch-toggle
                id="n-past"
                label=""
                checked=""
                size="md"
                label-position="after"
              ></esa-switch-toggle>
            </header>
            <div class="bcn-ntoggle__body" data-notif-body="">
              <esa-text-field
                id="n-reminder"
                label="First reminder after (days)"
                type="number"
                size="md"
              ></esa-text-field
              ><span class="bcn-field__hint">Days after due date</span
              ><label class="bcn-check"><input type="checkbox" /><span>Repeat?</span></label>
            </div>
          </section>
          <section class="bcn-ncard">
            <h4 class="bcn-ncard__title">Notification Schedule</h4>
            <div id="notif-schedule-rows">
              <p class="bcn-nsched__row">
                <span class="bcn-nsched__k">Your Requirement Is Coming Up:</span> May 11, 2026
              </p>
              <p class="bcn-nsched__row">
                <span class="bcn-nsched__k">Your Requirement Is Due:</span> May 18, 2026
              </p>
              <p class="bcn-nsched__row">
                <span class="bcn-nsched__k">Your Requirement Is Past Due:</span> May 19, 2026
              </p>
            </div>
            <p id="notif-schedule-empty" class="bcn-ncard__hint" hidden="">
              Enable notification types above to see the schedule.
            </p>
            <div id="notif-test" class="bcn-nsched__test">
              <span id="notif-test-btn"
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Send Test Emails</span>
                  </button></span
                ></span
              ><span class="bcn-ncard__hint">Sends to your email only</span>
            </div>
          </section>
        </div>
        <!-- …and 1 more like this (<div class="bcn-form">) --></esa-tab-layout
      >
    </section>
  </div>
  <div slot="footer" class="bcn-editor__foot">
    <span id="er-cancel"
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-outline esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Cancel</span>
        </button></span
      ></span
    ><span id="er-save"
      ><span
        class="esa-button esa-button--variant-primary esa-button--appearance-fill esa-button--md"
        ><button class="esa-button__native typography-microcopy-md" type="button">
          <span class="esa-button__label">Save</span>
        </button></span
      ></span
    >
  </div></esa-dialog
>
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
@media (prefers-reduced-motion: reduce) {
  .bcn-disclosure .esa-icon {
    transition: none;
  }
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-action__badge {
  border-radius: var(--radius-100);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-semibold);
  white-space: nowrap;
  flex-shrink: 0;
  padding: 0.125rem 0.375rem;
  line-height: 1.4;
}
.bcn-action__badge--commitment {
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
}
.bcn-action__badge--type {
  color: var(--color-content-default-secondary);
  background: var(--color-background-elevation-sunken);
  transform: translateY(2px);
}
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-trigger-row .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
}
.bcn-editor {
  height: calc(86vh - 8.5rem);
  margin: calc(-1 * var(--_dialog-padding, 1.5rem));
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  align-items: stretch;
  display: grid;
  overflow: hidden;
}
.bcn-editor__head {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-editor__head-title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-editor__foot {
  gap: var(--spacing-300);
  justify-content: flex-end;
  width: 100%;
  display: flex;
}
.bcn-context {
  gap: var(--spacing-400);
  min-width: 0;
  height: 100%;
  padding: var(--spacing-500);
  background: var(--color-background-default);
  border-right: 1px solid var(--color-border-default);
  flex-direction: column;
  display: flex;
  overflow-y: auto;
}
.bcn-context__text {
  font-family: var(--font-decorative);
  color: var(--color-content-default);
  margin: 0;
  font-size: 1.0625rem;
  line-height: 1.65;
}
.bcn-context__facts {
  align-items: center;
  gap: var(--spacing-300);
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border-default);
  flex-wrap: wrap;
  display: flex;
}
.bcn-context__doc {
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-context__doc .esa-icon {
  color: var(--color-content-default-tertiary);
}
.bcn-context__actions {
  display: flex;
}
.bcn-config {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
}
.bcn-config esa-tab-layout {
  --_tab-padding-x: var(--spacing-500);
  display: block;
}
.bcn-form {
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-500) var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-grid-2 {
  gap: var(--spacing-300);
  grid-template-columns: repeat(2, minmax(0, 1fr));
  display: grid;
}
.bcn-grid-3 {
  gap: var(--spacing-300);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  display: grid;
}
.bcn-field {
  gap: var(--spacing-150);
  flex-direction: column;
  display: flex;
}
.bcn-field__label {
  font-size: var(--typography-label-md-font-size);
  font-weight: var(--typography-font-weight-medium);
  color: var(--form-label-color);
}
.bcn-field__hint {
  color: var(--color-content-default-tertiary);
  font-size: 0.75rem;
}
.bcn-note {
  align-items: flex-start;
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  border-radius: var(--radius-200);
  background: color-mix(in srgb, var(--color-background-brand) 8%, white);
  color: var(--color-content-default-secondary);
  font-size: var(--typography-label-md-font-size);
  line-height: 1.45;
  display: flex;
}
.bcn-note .esa-icon {
  color: var(--color-background-brand);
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-notif {
  gap: var(--spacing-400);
}
.bcn-ncard {
  gap: var(--spacing-250);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  display: flex;
}
.bcn-ncard__title {
  font-size: 0.875rem;
  font-weight: var(--typography-font-weight-bold);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-content-default);
  margin: 0;
}
.bcn-ncard__date {
  font-size: var(--font-size-300);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  margin: 0;
}
.bcn-ncard__hint {
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default-secondary);
  margin: 0;
  line-height: 1.45;
}
.bcn-ntoggle {
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  background: var(--color-background-elevation-raised);
  flex-direction: column;
  display: flex;
}
.bcn-ntoggle__head {
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-300);
  display: flex;
}
.bcn-ntoggle__title {
  align-items: center;
  gap: var(--spacing-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-background-brand);
  display: inline-flex;
}
.bcn-ntoggle__title .esa-icon {
  color: var(--color-content-default);
}
.bcn-ntoggle__body {
  gap: var(--spacing-200);
  flex-direction: column;
  align-items: flex-start;
  display: flex;
}
.bcn-ntoggle__body[hidden] {
  display: none;
}
.bcn-ntoggle__body esa-text-field {
  max-width: 240px;
}
.bcn-check {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
  cursor: pointer;
  display: inline-flex;
}
.bcn-check input {
  width: 1rem;
  height: 1rem;
  accent-color: var(--color-background-brand);
}
.bcn-nsched__row {
  margin: 0 0 var(--spacing-150);
  font-size: var(--typography-label-md-font-size);
  color: var(--color-content-default);
}
.bcn-nsched__k {
  font-weight: var(--typography-font-weight-semibold);
}
.bcn-nsched__test {
  align-items: center;
  gap: var(--spacing-300);
  margin-top: var(--spacing-200);
  display: flex;
}
.bcn-nsched__test[hidden] {
  display: none;
}
@media (width<=860px) {
  .bcn-editor {
    grid-template-columns: 1fr;
  }
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
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
  background: var(--button-chrome-bg-hover, color-mix(in srgb, currentColor 14%, transparent));
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
.esa-button__label {
  white-space: nowrap;
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.bcn-reqref__ext .esa-icon {
  --_icon-size: 12px;
  opacity: 0.75;
}
.bcn-reqref__footer .esa-button--color-ghost .esa-button__native {
  color: var(--color-background-brand-muted);
}
.bcn-reqref__footer .esa-button--color-ghost .esa-button__native:hover:not(:disabled) {
  color: var(--color-background-brand-muted-hover);
  background: color-mix(in srgb, var(--color-background-brand-muted) 10%, transparent);
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
.esa-icon--sm {
  --_icon-size: var(--icon-size-sm, 16px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
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

| Token | Value | Tier |
|---|---|---|
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-brand-muted-hover` | `#b9d6d2` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-300` | `clamp(.875rem, .77rem + .52vw, 1.125rem)` | primitive |
| `--form-label-color` | `#525252` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-microcopy-md-font-weight` | `500` | semantic |
| `--typography-microcopy-md-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-md-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
