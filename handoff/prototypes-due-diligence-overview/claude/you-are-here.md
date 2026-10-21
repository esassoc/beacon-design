# You are here

Project Overview · source prototype: https://esassoc.github.io/beacon-design/prototypes/due-diligence-overview/

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/aldo/BcnAldoMark.astro`
- `bcn-gd` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-gd-composer` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-gd-msg` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-gd-row` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-side-dialog` (hub) · `packages/ecology/src/components/esa-side-dialog.ts`

## Markup

_27 repeated elements are collapsed in the markup below; the comments say where._

```html
<esa-side-dialog
  class="bcn-gd"
  data-gd="true"
  position="right"
  heading="Help &amp; Guidance"
  size="md"
  ><div slot="header" class="bcn-gd__header">
    <span class="bcn-aldo-mark" data-size="md" aria-hidden="true"
      ><svg
        class="bcn-aldo-mark__glyph"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        stroke-width="3.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
        <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
        <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
        <circle cx="33.2" cy="31.1" r="2" fill="currentColor" stroke="none"></circle></svg></span
    ><span class="bcn-gd__title">Help &amp; Guidance</span>
  </div>
  <div class="bcn-gd__stream">
    <div class="bcn-gd-msg bcn-gd-msg--aldo" data-gd-intro="">
      <div class="bcn-gd-msg__avatar">
        <span class="bcn-aldo-mark" data-size="sm" aria-hidden="true"
          ><svg
            class="bcn-aldo-mark__glyph"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            stroke-width="3.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M47.59 23A18 18 0 1 1 31.37 14.01"></path>
            <path d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"></path>
            <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8"></path>
            <circle cx="33.2" cy="31.1" r="2" fill="currentColor" stroke="none"></circle></svg
        ></span>
      </div>
      <div class="bcn-gd-msg__group">
        <section class="bcn-gd__section">
          <h2 class="bcn-gd__label">
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
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                ></path>
                <circle cx="12" cy="10" r="3"></circle></svg
            ></span>
            You are here
          </h2>
          <div class="bcn-gd__here">
            <span class="bcn-gd__here-page" data-gd-page="">Beacon</span
            ><span class="bcn-gd__here-purpose" data-gd-purpose=""
              >Beacon turns a shelf of regulatory documents into a working compliance program —
              cataloged, planned, executed, and proven.</span
            >
          </div>
        </section>
        <section class="bcn-gd__section" data-gd-section="howtos">
          <h2 class="bcn-gd__label">
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
                <line x1="8" x2="21" y1="6" y2="6"></line>
                <line x1="8" x2="21" y1="12" y2="12"></line>
                <!-- …and 4 more like this (<line>) -->
              </svg></span
            >
            On this page
          </h2>
          <div class="bcn-gd__rows" data-gd-howtos="">
            <button
              type="button"
              class="bcn-gd-row"
              data-article-id="five-minute-tour"
              data-kind="howto"
              data-title="A five-minute tour of Beacon"
              data-summary="The four zones of the app and how a compliance obligation flows through them."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">A five-minute tour of Beacon</span
                ><span class="bcn-gd-row__sub"
                  >The four zones of the app and how a compliance obligation flows through
                  them.</span
                ></span
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
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="global-search-tips"
              data-kind="howto"
              data-title="Finding anything with search"
              data-summary="Press / anywhere to search commitments, requirements, actions, and documents."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Finding anything with search</span
                ><span class="bcn-gd-row__sub"
                  >Press / anywhere to search commitments, requirements, actions, and
                  documents.</span
                ></span
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
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span>
            </button>
          </div>
        </section>
        <section class="bcn-gd__section" data-gd-section="terms">
          <h2 class="bcn-gd__label">
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
                  d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
                ></path></svg
            ></span>
            Terms
          </h2>
          <div class="bcn-gd__rows" data-gd-terms="">
            <button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-an-action"
              data-kind="glossary"
              data-title="Action"
              data-summary="One trackable deliverable consolidating requirements that describe the same work."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Action</span
                ><span class="bcn-gd-row__sub"
                  >One trackable deliverable consolidating requirements that describe the same
                  work.</span
                ></span
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
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-a-commitment"
              data-kind="glossary"
              data-title="Commitment"
              data-summary="One discrete obligation, recorded in its source document’s original language."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Commitment</span
                ><span class="bcn-gd-row__sub"
                  >One discrete obligation, recorded in its source document’s original
                  language.</span
                ></span
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
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span></button
            ><button
              type="button"
              class="bcn-gd-row"
              data-article-id="what-is-a-component"
              data-kind="glossary"
              data-title="Component"
              data-summary="A distinct place or package of work within a project, tracked independently."
            >
              <span class="bcn-gd-row__text"
                ><span class="bcn-gd-row__title">Component</span
                ><span class="bcn-gd-row__sub"
                  >A distinct place or package of work within a project, tracked
                  independently.</span
                ></span
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
                  <path d="m9 18 6-6-6-6"></path></svg
              ></span>
            </button>
          </div>
        </section>
      </div>
    </div>
    <!-- appended Q&A exchanges -->
    <div data-gd-chat=""></div>
    <!-- Row pool: every article as a compact row, hidden. The client moves the route's
         rows into the two sections above; the rest stay here (hidden). -->
    <div class="bcn-gd__pool" data-gd-pool="" hidden="">
      <button
        type="button"
        class="bcn-gd-row"
        data-article-id="project-vs-component-scope"
        data-kind="glossary"
        data-title="Scope"
        data-summary="The setting that determines whether work is tracked once, or once per location."
      >
        <span class="bcn-gd-row__text"
          ><span class="bcn-gd-row__title">Scope</span
          ><span class="bcn-gd-row__sub"
            >The setting that determines whether work is tracked once, or once per location.</span
          ></span
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
            <path d="m9 18 6-6-6-6"></path></svg
        ></span></button
      ><button
        type="button"
        class="bcn-gd-row"
        data-article-id="tenant"
        data-kind="glossary"
        data-title="Tenant"
        data-summary="The client organization a Beacon workspace, its data, and its configuration are scoped to."
      >
        <span class="bcn-gd-row__text"
          ><span class="bcn-gd-row__title">Tenant</span
          ><span class="bcn-gd-row__sub"
            >The client organization a Beacon workspace, its data, and its configuration are scoped
            to.</span
          ></span
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
            <path d="m9 18 6-6-6-6"></path></svg
        ></span></button
      ><!-- …and 23 more like this (<button class="bcn-gd-row">) -->
    </div>
  </div>
  <div slot="footer" class="bcn-gd__foot">
    <a class="bcn-gd__browse" data-gd-browse="" href="/beacon-design/prototypes/help"
      >Browse all Help &amp; Guidance<svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7"></path></svg
    ></a>
    <div class="bcn-gd-composer">
      <textarea
        class="bcn-gd-composer__input"
        data-gd-ask=""
        rows="1"
        placeholder="Ask Aldo a question…"
        aria-label="Ask Aldo a question"
        style=""
      ></textarea
      ><button
        type="button"
        class="bcn-gd-composer__send"
        data-gd-ask-send=""
        aria-label="Send question"
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
            <path d="m5 12 7-7 7 7"></path>
            <path d="M12 19V5"></path></svg
        ></span>
      </button>
    </div></div
></esa-side-dialog>
```

## Styles

```css
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-aldo-mark {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  color: var(--color-content-default-knockout);
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-mark[data-size="sm"] {
  width: 20px;
  height: 20px;
}
.bcn-aldo-mark[data-size="md"] {
  width: 40px;
  height: 40px;
}
.bcn-aldo-mark[data-size="lg"] {
  width: 64px;
  height: 64px;
}
.bcn-aldo-mark__glyph {
  width: 100%;
  height: 100%;
  display: block;
}
.bcn-aldo-mark[data-animated] {
  animation: 2s ease-in-out infinite bcn-aldo-pulse;
}
.bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
  animation: 12s linear infinite bcn-aldo-spin;
}
@media (prefers-reduced-motion: reduce) {
  .bcn-aldo-mark[data-animated],
  .bcn-aldo-mark[data-animated] .bcn-aldo-mark__glyph {
    animation: none;
  }
}
.bcn-gd {
  --z-modal-backdrop: 1300;
  --z-modal: 1301;
  --side-dialog-width: 460px;
  --side-dialog-backdrop-filter: blur(2px);
}
.bcn-gd__header {
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
  display: flex;
}
.bcn-gd__title {
  font-family: var(--font-decorative);
  font-size: var(--font-size-400);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.2;
}
.bcn-gd__stream {
  gap: var(--spacing-500);
  flex-direction: column;
  display: flex;
}
.bcn-gd__section {
  gap: var(--spacing-300);
  flex-direction: column;
  display: flex;
}
.bcn-gd__section[hidden] {
  display: none;
}
.bcn-gd__label {
  align-items: center;
  gap: var(--spacing-200);
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-bold);
  color: var(--color-content-default);
  margin: 0;
  display: flex;
}
.bcn-gd__label .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__here {
  padding: var(--spacing-300) var(--spacing-400);
  background: var(--bcn-aldo-50);
  border: 1px solid var(--bcn-aldo-100);
  border-radius: var(--radius-200);
  flex-direction: column;
  gap: 4px;
  display: flex;
}
.bcn-gd__here-page {
  font-size: var(--font-size-250);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
}
.bcn-gd__here-purpose {
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  line-height: 1.5;
}
.bcn-gd__rows {
  flex-direction: column;
  display: flex;
}
.bcn-gd-row {
  align-items: center;
  gap: var(--spacing-300);
  width: 100%;
  padding: var(--spacing-300) var(--spacing-100);
  border: 0;
  border-bottom: 1px solid var(--color-border-default-subtle);
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  display: flex;
}
.bcn-gd-row:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-gd-row__text {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-gd-row__title {
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.35;
}
.bcn-gd-row__sub {
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-regular);
  color: var(--color-content-default-secondary);
  line-height: 1.4;
}
.bcn-gd-row .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-gd__foot {
  gap: var(--spacing-250);
  flex-direction: column;
  display: flex;
}
.bcn-gd__browse {
  align-self: flex-end;
  align-items: center;
  gap: var(--spacing-150);
  font-size: var(--font-size-150);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-background-brand);
  text-decoration: none;
  display: inline-flex;
}
.bcn-gd__browse:hover {
  text-decoration: underline;
}
.bcn-gd-composer {
  align-items: flex-end;
  gap: var(--spacing-200);
  padding: var(--spacing-150) var(--spacing-150) var(--spacing-150) var(--spacing-300);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-300);
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
  display: flex;
}
.bcn-gd-composer:focus-within {
  border-color: var(--bcn-aldo);
  box-shadow: 0 0 0 3px var(--bcn-aldo-50);
}
.bcn-gd-composer__input {
  resize: none;
  min-width: 0;
  font-family: inherit;
  font-size: var(--font-size-200);
  color: var(--color-content-default);
  background: 0 0;
  border: 0;
  outline: 0;
  flex: 1;
  padding: 6px 0;
  line-height: 1.5;
  overflow-y: hidden;
}
.bcn-gd-composer__input::placeholder {
  color: var(--color-content-default-tertiary);
}
.bcn-gd-composer__send {
  border-radius: var(--radius-full);
  background: var(--bcn-aldo);
  width: 32px;
  height: 32px;
  color: var(--color-content-default-knockout);
  cursor: pointer;
  border: 0;
  flex: none;
  justify-content: center;
  align-items: center;
  transition:
    background 0.15s,
    color 0.15s;
  display: inline-flex;
}
.bcn-gd-composer__send:hover:not(:disabled) {
  background: var(--bcn-aldo-600);
}
.bcn-gd-composer__send:disabled {
  background: var(--color-background-elevation-sunken);
  color: var(--color-content-default-tertiary);
  cursor: default;
}
.bcn-gd-msg {
  gap: var(--spacing-300);
  align-items: flex-start;
  display: flex;
}
.bcn-gd-msg__avatar {
  flex: none;
  margin-top: 2px;
}
.bcn-gd-msg__group {
  gap: var(--spacing-500);
  flex-direction: column;
  flex: 1;
  min-width: 0;
  display: flex;
}
.bcn-gd-msg--aldo .bcn-gd-msg__bubble {
  background: var(--bcn-aldo-50);
  color: var(--color-content-default);
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
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
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
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-50` | `#e8f6f5` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--font-decorative` | `"Besley", serif` | component |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--font-size-400` | `clamp(1rem, .88rem + .6vw, 1.25rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-regular` | `400` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
