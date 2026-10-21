# On This Page (the dots)

Help Dots · source prototype: https://esassoc.github.io/beacon-design/prototypes/help-dots/

![On This Page (the dots), desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-help-dots/claude/on-this-page-the-dots.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-help-dots/claude/on-this-page-the-dots.phone.png

On a page with dots, the drawer's On This Page is the page's published dots in page order. A row closes the drawer, turns dots on, scrolls to the dot and opens it. No page-attached articles are listed here (Related was cut, a deviation from BCN-1513 to settle).

## Key decisions

- ESA admin only: drafts with a Draft tag, dots that need a spot (last, muted, alert icon), and hover row tools (Publish, Edit, Dismiss, Pick Again, Detach), each tooltip prefixed "ESA admin:".
- Row tools sit in the shared admin cue (src/styles/bcn-admin-cue.css: the settings rail's ESA Admin glass, 22px icon buttons, 14px glyphs) and take their own width, so the text truncates short of them.

## Done when

- A tenant admin sees the same list as a reader: published dots only, no tools.

## Components

- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-gd` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-hda` (spoke) · `src/components/bcn/BcnHelpDotList.astro`
- `bcn-hdr` (spoke) · `src/components/bcn/BcnHelpDotRow.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-tooltip` (hub) · `packages/ecology/src/components/esa-tooltip.ts`

## Markup

_16 repeated elements are collapsed in the markup below; the comments say where._

```html
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
  <div data-help-dots-list-slot="">
    <div class="bcn-hda" data-hda="">
      <div class="bcn-hda__rows" data-hda-list="">
        <div class="bcn-hdr" data-hda-row="" data-dot-id="lists-banner" hidden="">
          <button type="button" class="bcn-hdr__main" data-hda-open="">
            <span class="bcn-hdr__mark" data-hda-mark=""
              ><span class="bcn-aldo-mark" data-size="sm" data-variant="badge" aria-hidden="true"
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
                  <circle
                    cx="33.2"
                    cy="31.1"
                    r="2"
                    fill="currentColor"
                    stroke="none"
                  ></circle></svg></span></span
            ><span class="bcn-hdr__lost" data-hda-lost="" hidden=""
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ><span class="bcn-hdr__text"
              ><span class="bcn-hdr__titlerow"
                ><span class="bcn-hdr__title" data-hda-title="">What a List Is For</span
                ><span class="bcn-hdr__tag" data-hda-draft="" hidden=""
                  ><span class="bcn-hdr__tag-text">Draft</span></span
                ></span
              ><span class="bcn-hdr__sub" data-hda-sub=""
                >A list gathers the commitments, actions or obligations one group of people needs,
                like a contractor at a kickoff meeting, so nobody has to sort the full set.</span
              ></span
            ></button
          ><span class="bcn-hdr__tools bcn-admin-cue" data-hda-tools="" hidden=""
            ><span class="bcn-admin-btn" data-hda-act="publish"
              ><esa-tooltip text="ESA admin: Publish" position="above" delay="150" align="center"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Publish"
                    title="Publish"
                    data-hda-publish="true"
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
                        <path d="M20 6 9 17l-5-5"></path></svg
                    ></span></button></span></esa-tooltip></span
            ><span class="bcn-admin-btn" data-hda-act="pickagain"
              ><esa-tooltip text="ESA admin: Pick Again" position="above" delay="150" align="center"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Pick Again"
                    title="Pick Again"
                    data-hda-pickagain="true"
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
                          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                        ></path>
                        <circle cx="12" cy="10" r="3"></circle></svg
                    ></span></button></span></esa-tooltip></span
            ><!-- …and 3 more like this (<span class="bcn-admin-btn">) --></span
          >
        </div>
        <div class="bcn-hdr" data-hda-row="" data-dot-id="lists-first" hidden="">
          <button type="button" class="bcn-hdr__main" data-hda-open="">
            <span class="bcn-hdr__mark" data-hda-mark=""
              ><span class="bcn-aldo-mark" data-size="sm" data-variant="badge" aria-hidden="true"
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
                  <circle
                    cx="33.2"
                    cy="31.1"
                    r="2"
                    fill="currentColor"
                    stroke="none"
                  ></circle></svg></span></span
            ><span class="bcn-hdr__lost" data-hda-lost="" hidden=""
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ><span class="bcn-hdr__text"
              ><span class="bcn-hdr__titlerow"
                ><span class="bcn-hdr__title" data-hda-title="">Your First List</span
                ><span class="bcn-hdr__tag" data-hda-draft="" hidden=""
                  ><span class="bcn-hdr__tag-text">Draft</span></span
                ></span
              ><span class="bcn-hdr__sub" data-hda-sub=""
                >Name the list and give it a description. Keep it Personal or share it as
                Global.</span
              ></span
            ></button
          ><span class="bcn-hdr__tools bcn-admin-cue" data-hda-tools="" hidden=""
            ><span class="bcn-admin-btn" data-hda-act="publish"
              ><esa-tooltip text="ESA admin: Publish" position="above" delay="150" align="center"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Publish"
                    title="Publish"
                    data-hda-publish="true"
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
                        <path d="M20 6 9 17l-5-5"></path></svg
                    ></span></button></span></esa-tooltip></span
            ><span class="bcn-admin-btn" data-hda-act="pickagain"
              ><esa-tooltip text="ESA admin: Pick Again" position="above" delay="150" align="center"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Pick Again"
                    title="Pick Again"
                    data-hda-pickagain="true"
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
                          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                        ></path>
                        <circle cx="12" cy="10" r="3"></circle></svg
                    ></span></button></span></esa-tooltip></span
            ><!-- …and 3 more like this (<span class="bcn-admin-btn">) --></span
          >
        </div>
        <!-- …and 6 more like this (<div class="bcn-hdr">) -->
      </div>
      <template data-hda-template=""
        ><div class="bcn-hdr" data-hda-row="" data-astro-cid-loaecv7s="">
          <button type="button" class="bcn-hdr__main" data-hda-open="" data-astro-cid-loaecv7s="">
            <span class="bcn-hdr__mark" data-hda-mark="" data-astro-cid-loaecv7s=""
              ><span
                class="bcn-aldo-mark"
                data-size="sm"
                data-variant="badge"
                aria-hidden="true"
                data-astro-cid-lgb5fntv=""
                ><svg
                  class="bcn-aldo-mark__glyph"
                  viewBox="0 0 64 64"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-astro-cid-lgb5fntv=""
                >
                  <path d="M47.59 23A18 18 0 1 1 31.37 14.01" data-astro-cid-lgb5fntv=""></path>
                  <path
                    d="M43.05 25.55A12.3 12.3 0 1 1 31.97 19.41"
                    data-astro-cid-lgb5fntv=""
                  ></path>
                  <path d="M38.52 28.1A6.6 6.6 0 1 1 32.57 24.8" data-astro-cid-lgb5fntv=""></path>
                  <circle
                    cx="33.2"
                    cy="31.1"
                    r="2"
                    fill="currentColor"
                    stroke="none"
                    data-astro-cid-lgb5fntv=""
                  ></circle></svg></span></span
            ><span class="bcn-hdr__lost" data-hda-lost="" hidden="" data-astro-cid-loaecv7s=""
              ><span class="esa-icon esa-icon--sm" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" x2="12" y1="8" y2="12"></line>
                  <line x1="12" x2="12.01" y1="16" y2="16"></line></svg></span></span
            ><span class="bcn-hdr__text" data-astro-cid-loaecv7s=""
              ><span class="bcn-hdr__titlerow" data-astro-cid-loaecv7s=""
                ><span class="bcn-hdr__title" data-hda-title="" data-astro-cid-loaecv7s=""></span
                ><span class="bcn-hdr__tag" data-hda-draft="" hidden="" data-astro-cid-loaecv7s=""
                  ><span class="bcn-hdr__tag-text" data-astro-cid-loaecv7s="">Draft</span></span
                ></span
              ><span class="bcn-hdr__sub" data-hda-sub="" data-astro-cid-loaecv7s=""></span
            ></span></button
          ><span
            class="bcn-hdr__tools bcn-admin-cue"
            data-hda-tools=""
            hidden=""
            data-astro-cid-loaecv7s=""
            ><span class="bcn-admin-btn" data-hda-act="publish" data-astro-cid-loaecv7s=""
              ><esa-tooltip
                text="ESA admin: Publish"
                position="above"
                delay="150"
                data-astro-cid-loaecv7s="true"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  data-astro-cid-5nhxdd72=""
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Publish"
                    title="Publish"
                    data-hda-publish="true"
                    data-astro-cid-loaecv7s="true"
                    data-astro-cid-5nhxdd72=""
                  >
                    <span
                      class="esa-icon esa-icon--xs"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
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
                        data-astro-cid-wcwfib5m=""
                      >
                        <path d="M20 6 9 17l-5-5"></path></svg
                    ></span></button></span></esa-tooltip></span
            ><span class="bcn-admin-btn" data-hda-act="pickagain" data-astro-cid-loaecv7s=""
              ><esa-tooltip
                text="ESA admin: Pick Again"
                position="above"
                delay="150"
                data-astro-cid-loaecv7s="true"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  data-astro-cid-5nhxdd72=""
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Pick Again"
                    title="Pick Again"
                    data-hda-pickagain="true"
                    data-astro-cid-loaecv7s="true"
                    data-astro-cid-5nhxdd72=""
                  >
                    <span
                      class="esa-icon esa-icon--xs"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
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
                        data-astro-cid-wcwfib5m=""
                      >
                        <path
                          d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                        ></path>
                        <circle cx="12" cy="10" r="3"></circle></svg
                    ></span></button></span></esa-tooltip></span
            ><span class="bcn-admin-btn" data-hda-act="edit" data-astro-cid-loaecv7s=""
              ><esa-tooltip
                text="ESA admin: Edit"
                position="above"
                delay="150"
                data-astro-cid-loaecv7s="true"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  data-astro-cid-5nhxdd72=""
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Edit"
                    title="Edit"
                    data-hda-edit="true"
                    data-astro-cid-loaecv7s="true"
                    data-astro-cid-5nhxdd72=""
                  >
                    <span
                      class="esa-icon esa-icon--xs"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
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
                        data-astro-cid-wcwfib5m=""
                      >
                        <path
                          d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                        ></path>
                        <path d="m15 5 4 4"></path></svg
                    ></span></button></span></esa-tooltip></span
            ><span class="bcn-admin-btn" data-hda-act="dismiss" data-astro-cid-loaecv7s=""
              ><esa-tooltip
                text="ESA admin: Dismiss"
                position="above"
                delay="150"
                data-astro-cid-loaecv7s="true"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  data-astro-cid-5nhxdd72=""
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Dismiss"
                    title="Dismiss"
                    data-hda-dismiss="true"
                    data-astro-cid-loaecv7s="true"
                    data-astro-cid-5nhxdd72=""
                  >
                    <span
                      class="esa-icon esa-icon--xs"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
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
                        data-astro-cid-wcwfib5m=""
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path></svg
                    ></span></button></span></esa-tooltip></span
            ><span class="bcn-admin-btn" data-hda-act="detach" data-astro-cid-loaecv7s=""
              ><esa-tooltip
                text="ESA admin: Detach from this page"
                position="above"
                delay="150"
                data-astro-cid-loaecv7s="true"
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  data-astro-cid-5nhxdd72=""
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Detach from This Page"
                    title="Detach from This Page"
                    data-hda-detach="true"
                    data-astro-cid-loaecv7s="true"
                    data-astro-cid-5nhxdd72=""
                  >
                    <span
                      class="esa-icon esa-icon--xs"
                      aria-hidden="true"
                      data-astro-cid-wcwfib5m=""
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
                        data-astro-cid-wcwfib5m=""
                      >
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path></svg
                    ></span></button></span></esa-tooltip></span
          ></span></div
      ></template>
    </div>
  </div>
  <div class="bcn-gd__rows" data-gd-howtos=""></div>
</section>
```

## Styles

```css
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
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
.bcn-aldo-mark[data-variant="rings"] {
  width: var(--bcn-aldo-mark-size, 24px);
  height: var(--bcn-aldo-mark-size, 24px);
  background: 0 0;
  border-radius: 0;
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
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-cue {
  border-radius: var(--radius-full);
  color: #fff;
  background: var(--bcn-helpbar-bg);
  backdrop-filter: blur(14px) saturate(1.4);
  border: 1px solid var(--bcn-helpbar-border);
  align-items: center;
  gap: 1px;
  padding: 1px;
  display: inline-flex;
}
@supports not (backdrop-filter: blur(1px)) {
  .bcn-admin-cue {
    background: var(--bcn-helpbar-bg-solid);
  }
}
@media (prefers-reduced-transparency: reduce) {
  .bcn-admin-cue {
    background: var(--bcn-helpbar-bg-solid);
    backdrop-filter: none;
  }
}
.bcn-admin-cue[hidden] {
  display: none;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
}
.bcn-admin-btn[hidden] {
  display: none;
}
.bcn-admin-btn .esa-button__native {
  --focus-ring-color: #fff;
  border-radius: var(--radius-full);
  color: #ffffffb8;
  block-size: 22px;
  min-block-size: 0;
  inline-size: 22px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-admin-btn .esa-button__native:hover,
.bcn-admin-btn .esa-button__native:focus-visible {
  color: #fff;
  background: #ffffff24;
}
.bcn-admin-btn .esa-icon {
  block-size: 14px;
  inline-size: 14px;
}
.bcn-admin-cue esa-tooltip {
  --color-background-default-knockout: var(--bcn-helpbar-bg-solid);
  --color-content-default-knockout: var(--bcn-helpbar-fg);
  display: inline-flex;
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
.bcn-gd__rows {
  flex-direction: column;
  display: flex;
}
.bcn-gd__rows:empty {
  display: none;
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
summary.esa-button--variant-chrome:focus-visible {
  outline-color: currentColor;
}
.bcn-list-empty .bcn-list-empty__tour .esa-button__native {
  --bcn-aldo-mark-size: 20px;
  --bcn-aldo-ring-from: var(--color-teal-7);
  --bcn-aldo-ring-to: var(--color-teal-9);
  color: var(--bcn-helpbar-fg);
  background: var(--bcn-helpbar-bg-solid);
  border-color: var(--bcn-helpbar-border);
}
.bcn-list-empty .bcn-list-empty__tour .esa-button__native:hover {
  color: var(--bcn-helpbar-fg);
  background: color-mix(in srgb, var(--bcn-helpbar-bg-solid) 88%, white);
}
.bcn-hd__dot .bcn-aldo-mark {
  background: var(--bcn-aldo-raised-fill);
  box-shadow: var(--bcn-aldo-raised-shadow);
}
.bcn-hd__detach .esa-button__native {
  --focus-ring-color: var(--bcn-helpbar-fg);
  border-radius: var(--radius-full);
  block-size: 18px;
  min-block-size: 0;
  inline-size: 18px;
  min-inline-size: 0;
  padding: 0;
}
.bcn-hd__detach .esa-icon {
  block-size: 12px;
  inline-size: 12px;
}
.bcn-help-dots__carry .bcn-aldo-mark {
  background: var(--bcn-aldo-raised-fill);
  box-shadow: var(--bcn-aldo-raised-shadow);
}
.bcn-help-dots__band .esa-button {
  color: var(--bcn-helpbar-fg);
  --focus-ring-color: var(--bcn-helpbar-fg);
}
.bcn-hdr {
  border-bottom: 1px solid var(--color-border-default-subtle);
  align-items: center;
  display: flex;
  position: relative;
}
.bcn-hdr:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-hdr__main {
  align-items: center;
  gap: var(--spacing-300);
  min-width: 0;
  padding: var(--spacing-300) var(--spacing-100);
  font: inherit;
  text-align: left;
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex: 1;
  display: flex;
}
.bcn-hdr__main:focus-visible {
  outline: var(--focus-ring-width) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-hdr__mark,
.bcn-hdr__lost {
  --bcn-aldo-mark-size: 16px;
  flex: none;
  display: inline-flex;
}
.bcn-hdr__mark .bcn-aldo-mark {
  background: var(--bcn-aldo-raised-fill);
  box-shadow: var(--bcn-aldo-raised-shadow);
}
.bcn-hdr__lost {
  color: var(--color-content-default-tertiary);
}
.bcn-hdr__text {
  flex-direction: column;
  flex: 1;
  gap: 2px;
  min-width: 0;
  display: flex;
}
.bcn-hdr__titlerow {
  align-items: center;
  gap: var(--spacing-200);
  min-width: 0;
  display: flex;
}
.bcn-hdr__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--font-size-200);
  font-weight: var(--typography-font-weight-semibold);
  color: var(--color-content-default);
  line-height: 1.35;
  overflow: hidden;
}
.bcn-hdr__sub {
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: var(--font-size-150);
  color: var(--color-content-default-secondary);
  line-height: 1.4;
  overflow: hidden;
}
.bcn-hdr[data-lost] .bcn-hdr__title,
.bcn-hdr[data-lost] .bcn-hdr__sub {
  color: var(--color-content-default-tertiary);
}
.bcn-hdr__tag {
  flex: none;
  display: inline-flex;
}
.bcn-hdr__tag-text {
  border-radius: var(--radius-100);
  border: 1px solid var(--color-border-default);
  background: var(--color-background-elevation-raised);
  font-size: var(--font-size-100);
  font-weight: var(--typography-font-weight-medium);
  color: var(--color-content-default-secondary);
  padding: 1px 6px;
  line-height: 1.5;
}
.bcn-hdr__tools {
  opacity: 0;
  position: absolute;
  inset-block-start: 50%;
  inset-inline-end: var(--spacing-100);
  translate: 0 -50%;
}
.bcn-hdr:has(.bcn-hdr__tools:not([hidden])):is(:hover, :focus-within) .bcn-hdr__main {
  padding-inline-end: calc(var(--_tools-w, 52px) + var(--spacing-200));
}
.bcn-hdr:hover .bcn-hdr__tools,
.bcn-hdr:focus-within .bcn-hdr__tools {
  opacity: 1;
}
@media (hover: none) {
  .bcn-hdr__tools {
    opacity: 1;
  }
}
.bcn-hdr[hidden],
.bcn-hdr [hidden] {
  display: none;
}
.bcn-hda__rows {
  flex-direction: column;
  display: flex;
}
.bcn-hda[hidden],
.bcn-hda [hidden] {
  display: none;
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
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
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-aldo-raised-fill` | `linear-gradient(150deg, #12a594 0%, #06736f 100%)` | component |
| `--bcn-aldo-raised-shadow` | `inset 0 1px 0 #ffffff59, inset 0 -1px 1px #00282640, 0 1px 2px #10182038, 0 3px 8px -2px #08908b73` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--bcn-helpbar-bg` | `#17191bc7` | component |
| `--bcn-helpbar-bg-solid` | `#1f2224` | component |
| `--bcn-helpbar-border` | `#ffffff1f` | component |
| `--bcn-helpbar-fg` | `#ffffffeb` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-teal-7` | `#83cdc1` | primitive |
| `--color-teal-9` | `#12a594` | primitive |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-150` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--font-size-250` | `clamp(.8125rem, .71rem + .5vw, 1.0625rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
