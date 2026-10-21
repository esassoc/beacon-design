# Index

Step 3: Compliance Index · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/compliance-index/

![Index, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step-compliance-index/claude/index.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step-compliance-index/claude/index.phone.png

The sidebar, as develop keeps it. Category and subcategory rows with tools on hover: rename in place, lock or unlock, delete, drag within the parent; + Subcategory on a category; Expand all, Lock all and + Category over the tree. Each category has a hue, a dot on its row and its subcategories' rows. Once drafted, each subcategory carries develop's marks: a dot when it has drafts and was never opened, the count to review, a check when every draft is decided (muted when all were discarded). A category gets Approve category. Folded, the index is a rail that reads Index sideways, as the library and Aldo do.

## Key decisions

- Categories and subcategories only. Drafts are read on the subcategory's page, not listed in the index.
- Row tools lie over the end of the row on hover, so the row never moves.
- Renaming locks the row. Names are unique among siblings.
- Locking a category locks its subcategories; unlocking it does not unlock them.
- A bin that holds drafts is kept on Re-run; its lock is shown disabled with the reason.
- Delete names what goes: items from N requirements go back to be filed on the next Draft run, and the drafts filed there are deleted. A bin holding approved actions cannot be deleted.

## Components

- `bcn-sw3it` (spoke) · `src/components/bcn/BcnSw3IndexTree.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-confirm-dialog` (hub) · `packages/ecology/src/components/esa-confirm-dialog.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

## Markup

```html
<nav class="bcn-sw3it" aria-label="Compliance Index" data-sw3-index-tree="">
  <div class="bcn-sw3it__head">
    <h2 class="bcn-sw3it__title">Index</h2>
    <span class="bcn-sw3it__tools" data-it-head-tools=""
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          aria-label="Collapse all"
          title="Collapse all"
          data-it-expand="true"
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
              <path d="m7 20 5-5 5 5"></path>
              <path d="m7 4 5 5 5-5"></path></svg
          ></span></button></span
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          aria-label="Unlock all"
          title="Unlock all"
          data-it-lock-all="true"
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg
          ></span></button></span
      ><span
        class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-2xs"
          type="button"
          aria-label="Category"
          title="Category"
          data-it-add-cat="true"
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
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path></svg
          ></span></button></span></span
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        aria-label="Fold the index"
        title="Fold the index"
        data-it-fold="true"
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
            <path d="m11 17-5-5 5-5"></path>
            <path d="m18 17-5-5 5-5"></path></svg
        ></span></button
    ></span>
  </div>
  <button
    type="button"
    class="bcn-sw3it__rail"
    aria-label="Open the index"
    title="Open the index"
    data-it-unfold=""
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
        <path d="m6 17 5-5-5-5"></path>
        <path d="m13 17 5-5-5-5"></path></svg></span
    ><span class="bcn-sw3it__railname">Index</span>
  </button>
  <ol class="bcn-sw3it__body" data-it-body=""></ol>
  <esa-confirm-dialog
    heading="Delete"
    variant="danger"
    confirm-label="Delete"
    cancel-label="Cancel"
    data-it-confirm-delete="true"
  ></esa-confirm-dialog
  ><template data-it-tpl="cat"
    ><li class="bcn-sw3it__cat" data-it-cat="" data-astro-cid-2k46mond="">
      <div class="bcn-sw3it__row bcn-sw3it__row--cat" data-it-row="" data-astro-cid-2k46mond="">
        <span data-it-toggle="" data-astro-cid-2k46mond=""
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
            data-astro-cid-5nhxdd72=""
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              aria-label="Collapse"
              title="Collapse"
              data-astro-cid-2k46mond="true"
              data-astro-cid-5nhxdd72=""
            >
              <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                  <path d="m6 9 6 6 6-6"></path></svg
              ></span></button></span></span
        ><span class="bcn-sw3it__hue" aria-hidden="true" data-astro-cid-2k46mond=""></span
        ><a class="bcn-sw3it__name" href="#" data-it-name="" data-astro-cid-2k46mond=""></a
        ><span class="bcn-sw3it__lockmark" data-it-lockmark="" data-astro-cid-2k46mond=""
          ><span
            class="esa-icon esa-icon--xs"
            role="img"
            aria-label="Locked"
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span></span
        ><span class="bcn-sw3it__rowtools" data-astro-cid-2k46mond=""
          ><span data-it-approve-cat="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Approve category"
                title="Approve category"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg
                ></span></button></span></span
          ><span data-it-add-sub="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Subcategory"
                title="Subcategory"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path></svg
                ></span></button></span></span
          ><span data-it-rename="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Rename"
                title="Rename"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                ></span></button></span></span
          ><span data-it-lock="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Lock"
                title="Lock"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                  ></svg
                ></span></button></span></span
          ><span data-it-delete="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Delete"
                title="Delete"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                ></span></button></span></span
          ><span data-it-grip="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Drag to reorder"
                title="Drag to reorder"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                  ></svg
                ></span></button></span></span
        ></span>
      </div>
      <ol class="bcn-sw3it__subs" data-it-subs="" data-astro-cid-2k46mond=""></ol></li></template
  ><template data-it-tpl="sub"
    ><li class="bcn-sw3it__sub" data-it-sub="" data-astro-cid-2k46mond="">
      <div class="bcn-sw3it__row" data-it-row="" data-astro-cid-2k46mond="">
        <span class="bcn-sw3it__hue" aria-hidden="true" data-astro-cid-2k46mond=""></span
        ><a class="bcn-sw3it__name" href="#" data-it-name="" data-astro-cid-2k46mond=""></a
        ><span class="bcn-sw3it__lockmark" data-it-lockmark="" data-astro-cid-2k46mond=""
          ><span
            class="esa-icon esa-icon--xs"
            role="img"
            aria-label="Locked"
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
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span></span
        ><span class="bcn-sw3it__marks" data-astro-cid-2k46mond=""
          ><span
            class="bcn-sw3it__dot"
            data-it-mark="unopened"
            title="Not yet opened"
            data-astro-cid-2k46mond=""
          ></span
          ><span data-it-mark="pending" data-astro-cid-2k46mond=""
            ><span
              class="esa-badge esa-badge--secondary esa-badge--sm typography-microcopy-xs-strong"
              data-astro-cid-yahmuvtj=""
              ><span class="esa-badge__text" data-astro-cid-yahmuvtj="">0</span></span
            ></span
          ><span data-it-mark="done" data-astro-cid-2k46mond=""
            ><span
              class="esa-icon esa-icon--xs"
              role="img"
              aria-label="Every draft approved or discarded"
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path></svg></span></span></span
        ><span class="bcn-sw3it__rowtools" data-astro-cid-2k46mond=""
          ><span data-it-rename="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Rename"
                title="Rename"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                ></span></button></span></span
          ><span data-it-lock="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Lock"
                title="Lock"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                  ></svg
                ></span></button></span></span
          ><span data-it-delete="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Delete"
                title="Delete"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                    <line x1="10" x2="10" y1="11" y2="17"></line>
                    <line x1="14" x2="14" y1="11" y2="17"></line></svg
                ></span></button></span></span
          ><span data-it-grip="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-5nhxdd72=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Drag to reorder"
                title="Drag to reorder"
                data-astro-cid-2k46mond="true"
                data-astro-cid-5nhxdd72=""
              >
                <span class="esa-icon esa-icon--xs" aria-hidden="true" data-astro-cid-wcwfib5m=""
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
                  ></svg
                ></span></button></span></span
        ></span>
      </div></li
  ></template>
</nav>
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
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-console__more .esa-button__native {
  font-family: var(--_mono);
  height: auto;
  min-height: 0;
  padding: 0 1ch;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.65;
}
.bcn-console__more .esa-button__native:hover {
  color: var(--bcn-console-fg);
}
.bcn-sw3it {
  flex-direction: column;
  height: 100%;
  min-height: 0;
  font-size: 0.8125rem;
  display: flex;
}
.bcn-sw3it [hidden] {
  display: none !important;
}
.bcn-sw3it__head {
  align-items: center;
  gap: var(--spacing-100);
  padding: var(--spacing-200) var(--spacing-200) var(--spacing-100) var(--spacing-400);
  display: flex;
}
.bcn-sw3it__title {
  margin: 0 auto 0 0;
  font-size: 0.9375rem;
  font-weight: 600;
}
.bcn-sw3it__tools {
  align-items: center;
  gap: 2px;
  display: inline-flex;
}
.bcn-sw3it__rail {
  display: none;
}
.bcn-sw3it__body {
  min-height: 0;
  padding: 0 var(--spacing-300) var(--spacing-400);
  gap: var(--spacing-200);
  flex-direction: column;
  flex: 1;
  margin: 0;
  list-style: none;
  display: flex;
  overflow-y: auto;
}
.bcn-sw3it .bcn-sw3it__subs {
  flex-direction: column;
  gap: 1px;
  margin: 0;
  padding: 0 0 0 2.5rem;
  list-style: none;
  display: flex;
}
.bcn-sw3it .bcn-sw3it__cat[data-closed] .bcn-sw3it__subs {
  display: none;
}
.bcn-sw3it .bcn-sw3it__row {
  align-items: center;
  gap: var(--spacing-100);
  min-height: 26px;
  padding: 0 var(--spacing-100) 0 var(--spacing-150);
  border-radius: var(--radius-100);
  display: flex;
  position: relative;
}
.bcn-sw3it .bcn-sw3it__row--cat {
  padding-left: 0;
}
.bcn-sw3it .bcn-sw3it__hue {
  background: var(--_hue);
  border-radius: 50%;
  flex: none;
  width: 8px;
  height: 8px;
}
.bcn-sw3it .bcn-sw3it__sub .bcn-sw3it__hue {
  opacity: 0.75;
  width: 6px;
  height: 6px;
  margin: 0 1px;
}
.bcn-sw3it .bcn-sw3it__row:hover,
.bcn-sw3it .bcn-sw3it__row:focus-within,
.bcn-sw3it .bcn-sw3it__sub[data-current] > .bcn-sw3it__row {
  background: var(--color-background-elevation-sunken);
}
.bcn-sw3it .bcn-sw3it__sub[data-current] > .bcn-sw3it__row .bcn-sw3it__name {
  font-weight: 600;
}
.bcn-sw3it .bcn-sw3it__name {
  min-width: 0;
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  padding: 3px 0;
  font-weight: 500;
  text-decoration: none;
  overflow: hidden;
}
.bcn-sw3it .bcn-sw3it__row--cat .bcn-sw3it__name {
  font-weight: 600;
}
.bcn-sw3it .bcn-sw3it__row esa-text-field {
  flex: 1;
  min-width: 0;
}
.bcn-sw3it .bcn-sw3it__lockmark {
  color: var(--color-content-default-tertiary);
  line-height: 0;
  display: none;
}
.bcn-sw3it [data-locked] > .bcn-sw3it__row .bcn-sw3it__lockmark {
  display: inline-flex;
}
.bcn-sw3it .bcn-sw3it__rowtools {
  padding: 0 var(--spacing-100) 0 var(--spacing-400);
  border-radius: var(--radius-100);
  background: linear-gradient(
    to right,
    transparent,
    var(--color-background-elevation-sunken) var(--spacing-400)
  );
  visibility: hidden;
  pointer-events: none;
  align-items: center;
  gap: 0;
  display: inline-flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
}
.bcn-sw3it .bcn-sw3it__rowtools > * {
  pointer-events: auto;
}
.bcn-sw3it .bcn-sw3it__row:hover .bcn-sw3it__rowtools,
.bcn-sw3it .bcn-sw3it__row:focus-within .bcn-sw3it__rowtools {
  visibility: visible;
}
.bcn-sw3it [data-it-grip] {
  cursor: grab;
}
.bcn-sw3it .bcn-sw3it__marks {
  align-items: center;
  gap: var(--spacing-100);
  line-height: 0;
  display: inline-flex;
}
.bcn-sw3it .bcn-sw3it__marks > * {
  display: none;
}
.bcn-sw3it .bcn-sw3it__dot {
  background: var(--color-content-brand);
  border-radius: 50%;
  width: 7px;
  height: 7px;
}
.bcn-sw3it [data-mark-unopened] [data-it-mark="unopened"],
.bcn-sw3it [data-mark-pending] [data-it-mark="pending"] {
  display: inline-flex;
}
.bcn-sw3it [data-mark-done] [data-it-mark="done"] {
  color: var(--color-content-success);
  display: inline-flex;
}
.bcn-sw3it [data-mark-done][data-none] [data-it-mark="done"] {
  color: var(--color-content-default-tertiary);
}
.bcn-sw3it [data-drop-before] > .bcn-sw3it__row {
  box-shadow: inset 0 2px 0 var(--color-border-default-focus);
}
.bcn-sw3it [data-dragging] {
  opacity: 0.5;
}
[data-index="closed"] .bcn-sw3it__head,
[data-index="closed"] .bcn-sw3it__body {
  display: none;
}
[data-index="closed"] .bcn-sw3it__rail {
  display: flex;
}
.bcn-sw3it__rail {
  align-items: center;
  gap: var(--spacing-300);
  padding: var(--spacing-300) 0;
  color: var(--color-content-default-secondary);
  font: inherit;
  cursor: pointer;
  background: 0 0;
  border: 0;
  flex-direction: column;
  flex: 1;
}
.bcn-sw3it__rail:hover {
  color: var(--color-content-default);
  background: var(--color-background-elevation-sunken);
}
.bcn-sw3it__rail:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-sw3it__railname {
  writing-mode: vertical-rl;
  color: var(--color-content-default);
  font-size: 0.8125rem;
  font-weight: 600;
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-console-fg` | `#ffffffed` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
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
| `--color-border-default-focus` | `#3e9b4f` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-success` | `#218358` | component |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
