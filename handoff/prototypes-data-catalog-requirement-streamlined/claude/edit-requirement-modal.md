# Edit Requirement modal

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

## Markup
```html
<esa-dialog
  id="edit-dialog"
  size="lg"
  style="
    --_dialog-width: 96vw;
    --_dialog-max-height: 94vh;
    --_dialog-bg: var(--color-surface, #fff);
    --z-modal-backdrop: 1150;
    --z-modal: 1200;
  "
  open=""
>
  <div slot="header" class="bcn-editor__head">
    <span class="bcn-editor__head-title"
      >Pre-construction survey for nesting raptors and other migratory birds during
      nesting season</span
    >
    <span class="bcn-action__badge bcn-action__badge--type">Survey</span>
  </div>
  <div class="bcn-editor">
    <!-- LEFT: source context (read) -->
    <section class="bcn-context" aria-label="Source context">
      <p class="bcn-context__text">
        Prior to ground-disturbing activities, a qualified biologist shall complete
        pre-construction survey for nesting raptors and other migratory birds during
        nesting season within the project area and submit findings to the City.
      </p>
      <div class="bcn-context__facts">
        <span class="bcn-action__badge bcn-action__badge--commitment">MM-BIO-2</span>
        <span class="bcn-context__doc">
          <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
          </span>
          3600 Alameda Avenue Project FEIR
        </span>
      </div>
      <div class="bcn-context__actions">
        <span id="ctx-source"
          ><span
            class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
          >
            <button class="esa-button__native" type="button">
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path>
                </svg>
              </span>
              <span class="esa-button__label"> View in Source Document </span>
            </button>
          </span>
        </span>
      </div>
    </section>
    <!-- RIGHT: tabbed config -->
    <section class="bcn-config" aria-label="Requirement configuration">
      <esa-tab-layout
        id="config-tabs"
        appearance="underline"
        size="md"
        variant="underline"
      >
        <div slot="panel-0" class="bcn-form">
          <esa-text-field id="d-name" label="Name" required="" size="md"></esa-text-field>
          <esa-textarea
            id="d-text"
            label="Requirement Text"
            rows="4"
            size="md"
          ></esa-textarea>
          <!-- Action Text intentionally ABSENT — hidden under the Prologis config. -->
          <div class="bcn-grid-2">
            <esa-select id="d-type" label="Type" size="md"></esa-select>
            <esa-select id="d-phase" label="Phase" size="md"></esa-select>
          </div>
          <esa-select id="d-cat" label="Resource Category" size="md"></esa-select>
          <esa-input-tag id="d-species" label="Species" size="md"></esa-input-tag>
          <div class="bcn-grid-2">
            <esa-select id="d-season" label="Season" size="md"></esa-select>
            <esa-text-field
              id="d-party"
              label="Responsible Party"
              size="md"
            ></esa-text-field>
          </div>
          <esa-input-tag
            id="d-activities"
            label="Construction Activities"
            size="md"
          ></esa-input-tag>
          <esa-entity-search
            id="d-assignee"
            label="Default Assignee"
            placeholder="Search users, organizations, or people…"
          ></esa-entity-search>
        </div>
        <div slot="panel-1" class="bcn-form">
          <!-- One-time only (BCN-1163): no frequency control — a note instead. -->
          <div class="bcn-note">
            <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </span>
            <span
              >Streamlined requirements are <strong>one-time</strong> — a single
              implementation with a single due date. Frequency and recurrence are not
              available.</span
            >
          </div>
          <div class="bcn-grid-3">
            <esa-text-field
              id="t-offset"
              label="Deadline"
              type="number"
              size="md"
            ></esa-text-field>
            <esa-select id="t-unit" label="Unit" size="md"></esa-select>
            <esa-select id="t-relative" label="Relative to" size="md"></esa-select>
          </div>
          <esa-select id="t-milestone" label="Milestone" size="md"></esa-select>
        </div>
        <div slot="panel-2" class="bcn-form">
          <esa-textarea
            id="e-expected"
            label="Expected Evidence of Compliance"
            rows="6"
            size="md"
          ></esa-textarea>
          <div class="bcn-field">
            <span class="bcn-field__label">Reference Files</span>
            <esa-file-upload
              label="Drag &amp; drop files, or browse"
              multiple="true"
              accept=".pdf,.csv,.xlsx,.jpg,.jpeg,.png,.gif,.zip"
            ></esa-file-upload>
          </div>
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
              <span class="esa-icon esa-icon--sm" aria-hidden="true">
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
              </span>
              <span
                >Notifications are sent to the assignee. Add additional recipients here to
                also receive notifications.</span
              >
            </div>
          </section>
          <section class="bcn-ncard">
            <h4 class="bcn-ncard__title">Due Date</h4>
            <p class="bcn-ncard__date">May 18, 2026</p>
            <p class="bcn-ncard__hint">
              Notification times below are calculated relative to this date. The due date
              is edited in Project Tracking.
            </p>
          </section>
          <section class="bcn-ntoggle" data-notif="upcoming">
            <header class="bcn-ntoggle__head">
              <span class="bcn-ntoggle__title"
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
                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                    <path
                      d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
                    ></path>
                  </svg>
                </span>
                Your Requirement Is Coming Up</span
              >
              <esa-switch-toggle
                id="n-upcoming"
                label=""
                checked=""
                size="md"
                label-position="after"
              ></esa-switch-toggle>
            </header>
            <div class="bcn-ntoggle__body" data-notif-body="">
              <esa-text-field
                id="n-lead"
                label="Lead days"
                type="number"
                size="md"
              ></esa-text-field>
              <span class="bcn-field__hint">Default: 7 days</span>
              <label class="bcn-check"
                ><input type="checkbox" /><span>Repeat?</span></label
              >
            </div>
          </section>
          <section class="bcn-ntoggle" data-notif="due">
            <header class="bcn-ntoggle__head">
              <span class="bcn-ntoggle__title"
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
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </span>
                Your Requirement Is Due</span
              >
              <esa-switch-toggle
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
                Your Requirement Is Past Due</span
              >
              <esa-switch-toggle
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
              ></esa-text-field>
              <span class="bcn-field__hint">Days after due date</span>
              <label class="bcn-check"
                ><input type="checkbox" /><span>Repeat?</span></label
              >
            </div>
          </section>
          <section class="bcn-ncard">
            <h4 class="bcn-ncard__title">Notification Schedule</h4>
            <div id="notif-schedule-rows">
              <p class="bcn-nsched__row">
                <span class="bcn-nsched__k">Your Requirement Is Coming Up:</span> May 11,
                2026
              </p>
              <p class="bcn-nsched__row">
                <span class="bcn-nsched__k">Your Requirement Is Due:</span> May 18, 2026
              </p>
              <p class="bcn-nsched__row">
                <span class="bcn-nsched__k">Your Requirement Is Past Due:</span> May 19,
                2026
              </p>
            </div>
            <p id="notif-schedule-empty" class="bcn-ncard__hint" hidden="">
              Enable notification types above to see the schedule.
            </p>
            <div id="notif-test" class="bcn-nsched__test">
              <span id="notif-test-btn"
                ><span
                  class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--sm"
                >
                  <button class="esa-button__native" type="button">
                    <span class="esa-button__label"> Send Test Emails </span>
                  </button>
                </span>
              </span>
              <span class="bcn-ncard__hint">Sends to your email only</span>
            </div>
          </section>
        </div>
      </esa-tab-layout>
    </section>
  </div>
  <div slot="footer" class="bcn-editor__foot">
    <span id="er-cancel"
      ><span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Cancel </span>
        </button>
      </span>
    </span>
    <span id="er-save"
      ><span
        class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Save </span>
        </button>
      </span>
    </span>
  </div>
</esa-dialog>
```

## Styles
```css
.esa-button {
  --_btn-height: var(--form-height-md, 40px);
  --_btn-padding-x: var(--form-padding-x-md, 16px);
  --_btn-font-size: var(--form-font-size-md, 14px);
  --_btn-radius: var(--form-radius-md, 6px);
  --_accent: var(--color-primary, #46a758);
  --_accent-hover: var(--color-primary-hover, #3e9b4f);
  --_on: var(--color-text-inverse, #ffffff);
  --_accent-text: var(--_accent);
  --_btn-tint-hover: color-mix(in srgb, var(--_accent) 8%, transparent);
  --_btn-tint-active: color-mix(in srgb, var(--_accent) 14%, transparent);
  display: inline-block;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button__native {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-200, 8px);
  width: 100%;
  height: var(--_btn-height);
  padding-inline: var(--_btn-padding-x);
  border: 1px solid transparent;
  border-radius: var(--_btn-radius);
  font-size: var(--_btn-font-size);
  font-family: var(--font-sans, system-ui, sans-serif);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition:
    background var(--transition-fast, 0.15s ease),
    border-color var(--transition-fast, 0.15s ease);
  -webkit-appearance: none;
  appearance: none;
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
}
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button--appearance-fill .esa-button__native:hover:not(:disabled) {
  background: var(--_accent-hover);
}
.bcn-action__badge {
  flex-shrink: 0;
  padding: 0.125rem 0.375rem;
  border-radius: var(--radius-100);
  font-size: var(--type-size-100);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  white-space: nowrap;
}
.bcn-action__badge--commitment {
  color: var(--color-commitment);
  background: color-mix(in srgb, var(--color-commitment) 12%, white);
}
.bcn-action__badge--type {
  color: var(--color-text-secondary);
  background: var(--color-surface-sunken);
  transform: translateY(2px);
}
.bcn-lineage__icon .esa-icon {
  --_icon-size: 14px;
}
.bcn-trigger-row .esa-icon {
  color: var(--color-primary);
  flex-shrink: 0;
}
.bcn-editor__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
}
.bcn-editor__head-title {
  font-family: var(--font-decorative);
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-editor {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  align-items: stretch;
  height: calc(86vh - 8.5rem);
  margin: calc(-1 * var(--_dialog-padding, 1.5rem));
  overflow: hidden;
}
.bcn-context {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  min-width: 0;
  height: 100%;
  overflow-y: auto;
  padding: var(--spacing-500);
  background: var(--color-background);
  border-right: 1px solid var(--color-border);
}
.bcn-context__text {
  margin: 0;
  font-family: var(--font-decorative);
  font-size: 1.0625rem;
  line-height: 1.65;
  color: var(--color-text-primary);
}
.bcn-context__facts {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  flex-wrap: wrap;
  padding-top: var(--spacing-300);
  border-top: 1px solid var(--color-border);
}
.bcn-context__doc {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--form-font-size-md);
  color: var(--color-text-secondary);
}
.bcn-context__doc .esa-icon {
  color: var(--color-text-tertiary);
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
  display: block;
  --_tab-padding-x: var(--spacing-500);
}
.bcn-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
  padding: var(--spacing-300) var(--spacing-500) var(--spacing-500);
}
.bcn-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-300);
}
.bcn-note {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-200);
  padding: var(--spacing-300);
  border-radius: var(--radius-200);
  background: color-mix(in srgb, var(--color-primary) 8%, white);
  color: var(--color-text-secondary);
  font-size: var(--form-font-size-md);
  line-height: 1.45;
}
.bcn-note .esa-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}
.bcn-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: var(--spacing-300);
}
.bcn-field {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-150);
}
.bcn-field__label {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
.bcn-notif {
  gap: var(--spacing-400);
}
.bcn-ncard {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-250);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-ncard__title {
  margin: 0;
  font-size: 0.875rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: var(--color-text-primary);
}
.bcn-ncard__date {
  margin: 0;
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.bcn-ncard__hint {
  margin: 0;
  font-size: var(--form-font-size-md);
  color: var(--color-text-secondary);
  line-height: 1.45;
}
.bcn-ntoggle {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
  padding: var(--spacing-400);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  background: var(--color-surface);
}
.bcn-ntoggle__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
}
.bcn-ntoggle__title {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-250);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
}
.bcn-ntoggle__title .esa-icon {
  color: var(--color-text-primary);
}
.bcn-ntoggle__body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
  align-items: flex-start;
}
.bcn-ntoggle__body esa-text-field {
  max-width: 240px;
}
.bcn-field__hint {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.bcn-check {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--form-font-size-md);
  color: var(--color-text-primary);
  cursor: pointer;
}
.bcn-check input {
  width: 1rem;
  height: 1rem;
  accent-color: var(--color-primary);
}
.bcn-nsched__test {
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
  margin-top: var(--spacing-200);
}
.bcn-nsched__test[hidden] {
  display: none;
}
.bcn-editor__foot {
  display: flex;
  gap: var(--spacing-300);
  justify-content: flex-end;
  width: 100%;
}
.esa-icon-button {
  --_ib-size: var(--form-height-md, 40px);
  --_ib-bg-hover: var(
    --icon-button-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
.bcn-reqref__key .esa-icon {
  --_icon-size: 11px;
  color: var(--color-text-tertiary);
  flex-shrink: 0;
}
.bcn-reqref__footer .esa-button--color-ghost .esa-button__native {
  color: var(--color-secondary);
}
.bcn-reqref__footer .esa-icon {
  --_icon-size: 13px;
}
.esa-collapsible__summary .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary, #404040);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.esa-icon-link {
  --_il-font: var(--icon-link-font-size-md, 1rem);
  display: inline-flex;
  align-items: center;
  gap: var(--icon-link-gap, var(--spacing-150, 6px));
  padding: 0;
  margin: 0;
  border: 0;
  background: none;
  color: inherit;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: var(--_il-font);
  font-weight: var(--font-weight-medium, 500);
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
}
.esa-icon-link--sm {
  --_il-font: var(--icon-link-font-size-sm, 0.875rem);
}
.esa-icon-link--medium {
  font-weight: var(--font-weight-medium, 500);
}
.esa-icon-link__label {
  display: inline-block;
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
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
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
}
```

## Tokens
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-background`: #fafafa _(semantic)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-commitment`: #58508d _(component)_
- `--color-primary`: #005862 _(semantic)_
- `--color-primary-hover`: #00474f _(semantic)_
- `--color-primary-strong`: #2a7e3b _(semantic)_
- `--color-secondary`: #00918b _(semantic)_
- `--color-surface`: #fcfcfc _(semantic)_
- `--color-surface-sunken`: #efefef _(semantic)_
- `--color-text-inverse`: #fcfcfc _(semantic)_
- `--color-text-primary`: #3d3d3d _(semantic)_
- `--color-text-secondary`: #525252 _(semantic)_
- `--color-text-tertiary`: #656565 _(semantic)_
- `--font-decorative`: "Besley", serif _(component)_
- `--font-sans`: "DM Sans", sans-serif _(primitive)_
- `--font-weight-bold`: 650 _(primitive)_
- `--font-weight-medium`: 450 _(primitive)_
- `--font-weight-semibold`: 550 _(primitive)_
- `--form-font-size-md`: clamp(.75rem, .66rem + .44vw, .9375rem) _(component)_
- `--form-font-size-sm`: clamp(.625rem, .56rem + .32vw, .75rem) _(component)_
- `--form-height-md`: 36px _(component)_
- `--form-height-sm`: 28px _(component)_
- `--form-label-color`: #525252 _(component)_
- `--form-padding-x-md`: .75rem _(component)_
- `--form-padding-x-sm`: .625rem _(component)_
- `--form-radius-md`: .25rem _(component)_
- `--form-radius-sm`: .25rem _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-link-font-size-md`: 1rem _(component)_
- `--icon-link-font-size-sm`: .875rem _(component)_
- `--icon-link-gap`: .375rem _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
