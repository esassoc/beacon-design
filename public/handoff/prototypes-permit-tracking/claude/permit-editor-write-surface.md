# Permit editor (write surface)

The write surface (esa-side-dialog, 640px): edit a permit's Status, Timing (submitted / estimated / actual approval), and Segment applicability; read its Details (agency / level / type — source-document data); collaborate in a Comments thread (@-mention); and read the Activity log. Saving re-derives status across the entire feature.

## Key decisions
- Sectioned with icon-led heads: Status (esa-select), Timing (esa-date-picker ×3), Segments (esa-input-tag, strict + tags-below — segments are a fixed vocabulary), then read-only Details (BcnKeyValue), Comments, and Activity.
- Details are READ-ONLY: agency/level/type are source-document facts; this drawer edits status, timing, and applicability — not the permit's identity.
- Comments (BCN-1364) is a real collaboration thread DISTINCT from the read-only Activity log: an esa-textarea compose with an @-mention typeahead that feeds notifications; it is rendered live per-permit (so it cannot be the static BcnDiscussion SSR component).
- Activity is seeded from the permit's own dates so it reads with history on day one, and grows as edits land. Save re-derives everywhere; Cancel discards.

## Gotchas
- Saving MUST re-derive and repaint every dependent surface (map lines, chips, grids, mileage strip, timeline, insights, exec rollup) from the updated store — the editor is the origin of the whole re-derivation cascade.
- Segment applicability is strict (fixed vocabulary) — do not allow free-text segment tags.
- The @-mention menu is a live typeahead over project users; mentions drive the notification rules (see the settings dialog), so keep the user list and the notify path connected.
- z-stack: editor at --z-modal 1340 so it stacks above the segment drawer (1300) it can be opened from.

## Done when
- Opening a permit shows editable Status/Timing/Segments, read-only Details, a live Comments thread with @-mention, and a seeded Activity log; Save re-derives status across the map, grids, and rollup; Cancel discards.

## Markup
```html
<esa-side-dialog
  id="permit-dialog"
  size="md"
  style="--_width: 640px; --z-modal: 1340; --z-modal-backdrop: 1310"
  position="right"
  open=""
>
  <div slot="header" class="pd__header">
    <h2 class="pd__title" id="pd-title">County Right-of-Way Permit</h2>
    <span id="pd-chip"
      ><span
        class="bcn-status-chip"
        data-status="submitted"
        style="--_chip: var(--st-submitted)"
      >
        <span class="bcn-status-chip__dot"></span>
        <span class="bcn-status-chip__label">Submitted</span>
      </span>
    </span>
  </div>
  <div class="pd">
    <section class="pd__section">
      <h3 class="pd__section-head">
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
            <circle cx="12" cy="12" r="1"></circle>
          </svg>
        </span>
        Status
      </h3>
      <div class="pd__group"><esa-select id="pd-status" size="md"></esa-select></div>
    </section>
    <section class="pd__section">
      <h3 class="pd__section-head">
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
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </span>
        Timing
      </h3>
      <div class="pd__group">
        <div class="pd__row">
          <esa-date-picker
            id="pd-submitted"
            label="Submitted date"
            size="md"
          ></esa-date-picker>
          <esa-date-picker
            id="pd-estimated"
            label="Estimated approval"
            size="md"
          ></esa-date-picker>
        </div>
        <esa-date-picker
          id="pd-actual"
          label="Actual approval"
          size="md"
        ></esa-date-picker>
      </div>
    </section>
    <section class="pd__section">
      <h3 class="pd__section-head">
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
            <circle cx="6" cy="19" r="3"></circle>
            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
            <circle cx="18" cy="5" r="3"></circle>
          </svg>
        </span>
        Segments
      </h3>
      <div class="pd__group">
        <!-- Editable applicability — esa-input-tag in strict mode (segments are a
               fixed vocabulary), selected chips below the search input -->
        <esa-input-tag
          id="pd-segments"
          strict="true"
          tags-below="true"
          placeholder="Search segments…"
          size="md"
        ></esa-input-tag>
      </div>
    </section>
    <!-- Details are READ-ONLY: agency / level / type are source-document data —
           this drawer edits permit status, timing, and segment applicability. -->
    <section class="pd__section">
      <h3 class="pd__section-head">
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
        Details
      </h3>
      <div class="pd__group">
        <div class="bcn-key-value">
          <span class="bcn-key-value__key">Agency</span>
          <span class="pd__kv-val" id="pd-agency">Umatilla County Public Works</span>
        </div>
        <div class="pd__row">
          <div class="bcn-key-value">
            <span class="bcn-key-value__key">Level</span>
            <span class="pd__kv-val" id="pd-level">Local</span>
          </div>
          <div class="bcn-key-value">
            <span class="bcn-key-value__key">Permit type</span>
            <span class="pd__kv-val" id="pd-type">Right-of-Way</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Comments (BCN-1364) — a collaboration thread, DISTINCT from the read-only
           Activity log below. @-mention project users (feeds notifications). -->
    <section class="pd__section">
      <h3 class="pd__section-head">
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
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            ></path>
          </svg>
        </span>
        Comments <span id="pd-comment-count"><span class="pd-badge">1</span></span>
      </h3>
      <ul class="pd__comments" id="pd-comments">
        <li class="pd-comment">
          <span class="pd-comment__avatar" style="--_c: var(--color-source)">MR</span>
          <div class="pd-comment__body">
            <div class="pd-comment__meta">
              <span class="pd-comment__author">Marco Reyes</span
              ><span class="pd-comment__time">Jun 18, 2026, 4:05 PM</span>
            </div>
            <p class="pd-comment__text">
              Leadership is watching this one — it gates the most mileage.
              <span class="pd-mention pd-mention--me">@Andy Lovseth</span> keep me posted
              on any movement.
            </p>
          </div>
        </li>
      </ul>
      <div class="pd__compose">
        <div class="pd__compose-field">
          <esa-textarea
            id="pd-comment-input"
            rows="2"
            placeholder="Write a comment…  type @ to mention a teammate"
            size="md"
          ></esa-textarea>
          <ul class="pd__mention-menu" id="pd-mention-menu" hidden=""></ul>
        </div>
        <div class="pd__compose-foot">
          <span class="pd__compose-hint">Posting as Andy Lovseth</span>
          <span id="pd-comment-post"
            ><span
              class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--sm"
            >
              <button class="esa-button__native" type="button">
                <span class="esa-button__label"> Post comment </span>
              </button>
            </span>
          </span>
        </div>
      </div>
    </section>
    <!-- Change log — seeded from the permit's own dates, grows as edits land -->
    <section class="pd__section">
      <h3 class="pd__section-head">
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
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
            <path d="M12 7v5l4 2"></path>
          </svg>
        </span>
        Activity
      </h3>
      <ul class="pd__activity" id="pd-activity">
        <li class="ins-row">
          <span class="ins-row__label"
            >Status → Submitted<span class="ins-row__sub">Ryan Swanson</span></span
          >
          <span class="ins-row__val"><span class="ins-row__sub">May 2, 2026</span></span>
        </li>
      </ul>
    </section>
  </div>
  <div slot="footer" class="pd__footer">
    <span id="pd-cancel"
      ><span
        class="esa-button esa-button--color-ghost esa-button--appearance-outline esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Cancel </span>
        </button>
      </span>
    </span>
    <span id="pd-save"
      ><span
        class="esa-button esa-button--color-primary esa-button--appearance-fill esa-button--md"
      >
        <button class="esa-button__native" type="button">
          <span class="esa-button__label"> Save </span>
        </button>
      </span>
    </span>
  </div>
</esa-side-dialog>
```

## Styles
```css
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
.nav-section__header:hover .esa-icon,
.nav-section--active .nav-section__header,
.nav-section--active .nav-section__header .esa-icon {
  color: var(--color-primary);
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-gd__label .esa-icon {
  color: var(--color-text-tertiary);
  flex: none;
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
.bcn-key-value {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.bcn-key-value__key {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--form-label-color);
}
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
.esa-button--sm {
  --_btn-height: var(--form-height-sm, 32px);
  --_btn-padding-x: var(--form-padding-x-sm, 12px);
  --_btn-font-size: var(--form-font-size-sm, 12px);
  --_btn-radius: var(--form-radius-sm, 4px);
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
.esa-button--sm .esa-button__native {
  height: auto;
  padding-block: var(--spacing-150, 6px);
}
.esa-button--appearance-outline .esa-button__native,
.esa-button--appearance-dashed .esa-button__native {
  background: transparent;
  color: var(--_accent-text);
  border-color: var(--_accent);
}
.esa-button--color-ghost .esa-button__native {
  background: transparent;
  color: var(--color-text-primary, #171717);
  border-color: transparent;
}
.esa-button--color-ghost.esa-button--appearance-outline .esa-button__native,
.esa-button--color-ghost.esa-button--appearance-dashed .esa-button__native {
  border-color: var(--color-border, #e5e5e5);
}
.esa-button__label {
  white-space: nowrap;
}
.esa-button--color-primary {
  --_accent-text: var(--color-primary-strong);
}
.esa-button--appearance-fill .esa-button__native {
  background: var(--_accent);
  color: var(--_on);
  border-color: transparent;
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--bcn-gray-1000);
  flex-shrink: 0;
}
.pd__header {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-300);
}
.pd__title {
  margin: 0;
  font-size: var(--type-size-300);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.pd {
  display: flex;
  flex-direction: column;
}
.pd__section {
  padding-block: var(--spacing-400);
}
.pd__section:first-child {
  padding-top: var(--spacing-100);
}
.pd__section-head {
  display: flex;
  align-items: center;
  gap: var(--spacing-200);
  margin: 0 0 var(--spacing-300);
  font-size: var(--type-size-150);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.pd__section-head .esa-icon {
  flex-shrink: 0;
  color: var(--color-text-secondary);
}
.pd__group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-300);
}
.pd__section + .pd__section {
  border-top: 1px solid var(--color-border-light);
}
.pd__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-300);
}
.pd__kv-val {
  font-size: var(--form-font-size-md);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.pd__comments {
  list-style: none;
  margin: 0 0 var(--spacing-300);
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-400);
}
.pd__compose {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-200);
}
.pd__compose-field {
  position: relative;
}
.pd__compose-field esa-textarea {
  width: 100%;
}
.pd__mention-menu {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 4px);
  z-index: 5;
  list-style: none;
  margin: 0;
  padding: var(--spacing-100);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-200);
  box-shadow: var(--shadow-400);
  max-height: 208px;
  overflow-y: auto;
}
.pd__mention-menu[hidden] {
  display: none;
}
.pd__compose-foot {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-300);
}
.pd__compose-hint {
  font-size: 0.8125rem;
  color: var(--color-text-secondary);
}
.pd__activity {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
.pd__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-200);
}
.ins-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-250);
  padding: var(--spacing-200) 0;
}
.ins-row__label {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  font-size: 0.875rem;
  color: var(--color-text-primary);
}
.ins-row__val {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1px;
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.ins-row + .ins-row {
  border-top: 1px solid var(--color-border-light);
}
.ins-row[data-ins-permit] {
  cursor: pointer;
  margin: 0 calc(-1 * var(--spacing-200));
  padding-inline: var(--spacing-200);
  border-radius: var(--radius-200);
}
.ins-row__sub {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.ins-row[data-ins-permit]:hover {
  background: var(--grid-row-bg-hover);
}
.pd-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: var(--radius-full);
  background: var(--color-surface-sunken);
  color: var(--color-text-secondary);
  font-size: 0.6875rem;
  font-weight: var(--font-weight-bold);
  vertical-align: middle;
  margin-left: var(--spacing-100);
}
.pd-comment {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: var(--spacing-300);
  align-items: start;
}
.pd-comment__avatar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: var(--_c, var(--color-secondary));
  color: #fff;
  font-size: 0.6875rem;
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
  letter-spacing: 0.02em;
}
.pd-comment__body {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.pd-comment__meta {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-200);
  flex-wrap: wrap;
}
.pd-comment__author {
  font-size: 0.875rem;
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
}
.pd-comment__time {
  font-size: 0.75rem;
  color: var(--color-text-tertiary);
}
.pd-comment__text {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
  color: var(--color-text-primary);
  white-space: pre-wrap;
  word-break: break-word;
}
.pd-mention {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  background: color-mix(in srgb, var(--color-primary) 10%, transparent);
  border-radius: var(--radius-050);
  padding: 0 2px;
}
.pd-mention--me {
  color: var(--st-cleared);
  background: color-mix(in srgb, var(--st-cleared) 14%, transparent);
}
```

## Tokens
- `--bcn-gray-1000`: #000000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
- `--bcn-gray-950`: #292929 _(component)_
- `--bcn-helpbar-fg-muted`: rgba(255, 255, 255, .72) _(component)_
- `--bcn-helpbar-hover-bg`: rgba(255, 255, 255, .1) _(component)_
- `--color-border`: #dcdcdc _(semantic)_
- `--color-border-light`: #efefef _(semantic)_
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
- `--grid-row-bg-hover`: #f0f0f0 _(component)_
- `--icon-button-bg-hover`: color-mix(in srgb, currentColor 14%, transparent) _(component)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-medium`: 20px _(component)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-small`: 16px _(component)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-050`: .125rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--radius-full`: 9999px _(primitive)_
- `--shadow-400`: 0 8px 32px -8px rgba(0, 0, 0, .08) _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--st-cleared`: #1a9850 _(component)_
- `--transition-fast`: .15s ease _(primitive)_
- `--type-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--type-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--type-size-300`: clamp(.875rem, .77rem + .52vw, 1.125rem) _(primitive)_
