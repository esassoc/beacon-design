# Index

The sidebar, as develop keeps it. Category and subcategory rows with tools on hover: rename in place, lock or unlock, delete, drag within the parent; + Subcategory on a category; Expand all, Lock all and + Category over the tree. Once drafted, each subcategory lists its drafts under it and carries develop's marks: a dot when it has drafts and was never opened, the count to review, a check when every draft is decided (muted when all were discarded). A category gets Approve category.

## Key decisions
- Renaming locks the row. Names are unique among siblings.
- Locking a category locks its subcategories; unlocking it does not unlock them.
- A bin that holds drafts is kept on Re-run; its lock is shown disabled with the reason.
- Delete names what goes: items from N requirements go back to be filed on the next Draft run, and the drafts filed there are deleted. A bin holding approved actions cannot be deleted.

## Markup
```html
<nav class="bcn-sw3it" aria-label="Compliance Index" data-sw3-index-tree="" hidden="">
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
  <span class="bcn-sw3it__unfold"
    ><span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        aria-label="Open the index"
        title="Open the index"
        data-it-unfold="true"
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
            <path d="m6 17 5-5-5-5"></path>
            <path d="m13 17 5-5-5-5"></path></svg
        ></span></button></span
  ></span>
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
      <div
        class="bcn-sw3it__row bcn-sw3it__row--cat"
        data-it-row=""
        data-astro-cid-2k46mond=""
      >
        <span data-it-toggle="" data-astro-cid-2k46mond=""
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
            data-astro-cid-4xhmycw5=""
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              aria-label="Collapse"
              title="Collapse"
              data-astro-cid-2k46mond="true"
              data-astro-cid-4xhmycw5=""
            >
              <span
                class="esa-icon esa-icon--xs"
                aria-hidden="true"
                data-astro-cid-c7ivvrtd=""
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
                  data-astro-cid-c7ivvrtd=""
                >
                  <path d="m6 9 6 6 6-6"></path></svg
              ></span></button></span></span
        ><a
          class="bcn-sw3it__name"
          href="#"
          data-it-name=""
          data-astro-cid-2k46mond=""
        ></a
        ><span class="bcn-sw3it__lockmark" data-it-lockmark="" data-astro-cid-2k46mond=""
          ><span
            class="esa-icon esa-icon--xs"
            role="img"
            aria-label="Locked"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
            >
              <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span></span
        ><span class="bcn-sw3it__rowtools" data-astro-cid-2k46mond=""
          ><span data-it-approve-cat="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Approve category"
                title="Approve category"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m9 12 2 2 4-4"></path></svg
                ></span></button></span></span
          ><span data-it-add-sub="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Subcategory"
                title="Subcategory"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path></svg
                ></span></button></span></span
          ><span data-it-rename="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Rename"
                title="Rename"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  >
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path></svg
                ></span></button></span></span
          ><span data-it-lock="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Lock"
                title="Lock"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  ></svg
                ></span></button></span></span
          ><span data-it-delete="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Delete"
                title="Delete"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Drag to reorder"
                title="Drag to reorder"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  ></svg
                ></span></button></span></span
        ></span>
      </div>
      <ol
        class="bcn-sw3it__subs"
        data-it-subs=""
        data-astro-cid-2k46mond=""
      ></ol></li></template
  ><template data-it-tpl="sub"
    ><li class="bcn-sw3it__sub" data-it-sub="" data-astro-cid-2k46mond="">
      <div class="bcn-sw3it__row" data-it-row="" data-astro-cid-2k46mond="">
        <a class="bcn-sw3it__name" href="#" data-it-name="" data-astro-cid-2k46mond=""></a
        ><span class="bcn-sw3it__lockmark" data-it-lockmark="" data-astro-cid-2k46mond=""
          ><span
            class="esa-icon esa-icon--xs"
            role="img"
            aria-label="Locked"
            data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-sh7ulwla=""
              ><span class="esa-badge__text" data-astro-cid-sh7ulwla="">0</span></span
            ></span
          ><span data-it-mark="done" data-astro-cid-2k46mond=""
            ><span
              class="esa-icon esa-icon--xs"
              role="img"
              aria-label="Every draft approved or discarded"
              data-astro-cid-c7ivvrtd=""
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
                data-astro-cid-c7ivvrtd=""
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path></svg></span></span></span
        ><span class="bcn-sw3it__rowtools" data-astro-cid-2k46mond=""
          ><span data-it-rename="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Rename"
                title="Rename"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  >
                    <path
                      d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
                    ></path>
                    <path d="m15 5 4 4"></path></svg
                ></span></button></span></span
          ><span data-it-lock="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Lock"
                title="Lock"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  ></svg
                ></span></button></span></span
          ><span data-it-delete="" data-astro-cid-2k46mond=""
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Delete"
                title="Delete"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
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
              data-astro-cid-4xhmycw5=""
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="Drag to reorder"
                title="Drag to reorder"
                data-astro-cid-2k46mond="true"
                data-astro-cid-4xhmycw5=""
              >
                <span
                  class="esa-icon esa-icon--xs"
                  aria-hidden="true"
                  data-astro-cid-c7ivvrtd=""
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
                    data-astro-cid-c7ivvrtd=""
                  ></svg
                ></span></button></span></span
        ></span>
      </div>
      <ol
        class="bcn-sw3it__entries"
        data-it-entries=""
        data-astro-cid-2k46mond=""
      ></ol></li
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
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
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
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar .esa-icon-button {
  color: var(--bcn-helpbar-fg-muted);
  --icon-button-bg-hover: var(--bcn-helpbar-hover-bg);
}
.bcn-help-bar .esa-icon-button:hover,
.bcn-help-bar .esa-icon-button:focus-visible {
  color: var(--bcn-helpbar-fg);
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
.bcn-countchip__num .esa-badge {
  --badge-radius: var(--radius-full);
  --badge-bg: var(--color-border-default);
  --badge-text-color: var(--color-content-default-secondary);
  box-sizing: border-box;
  font-variant-numeric: tabular-nums;
  min-width: 19px;
  height: 19px;
  box-shadow: 0 0 0 1.5px var(--color-background-elevation-raised);
  justify-content: center;
  align-items: center;
  padding: 0 4px;
  font-size: 0.8125rem;
  line-height: 1;
  display: inline-flex;
}
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-attached__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__mark .esa-badge {
  --badge-bg: var(--color-background-utility-info-subtle);
  --badge-text-color: var(--color-content-default);
  border: 1px solid
    color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);
  font-weight: var(--typography-font-weight-medium);
}
.bcn-ev-row__tags .esa-badge {
  --badge-bg: var(--bcn-gray-100);
  --badge-text-color: var(--bcn-gray-700);
  font-weight: var(--typography-font-weight-medium);
}
.topbar__right .esa-icon-button {
  color: var(--color-content-default-secondary);
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
.bcn-sw3it__unfold {
  padding: var(--spacing-200);
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
.bcn-sw3it .bcn-sw3it__subs,
.bcn-sw3it .bcn-sw3it__entries {
  margin: 0;
  padding: 0;
  list-style: none;
}
.bcn-sw3it .bcn-sw3it__subs {
  padding-left: var(--spacing-500);
  flex-direction: column;
  gap: 1px;
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
  align-items: center;
  gap: 0;
  margin-left: auto;
  display: none;
}
.bcn-sw3it .bcn-sw3it__row:hover .bcn-sw3it__rowtools,
.bcn-sw3it .bcn-sw3it__row:focus-within .bcn-sw3it__rowtools {
  display: inline-flex;
}
.bcn-sw3it .bcn-sw3it__row:hover .bcn-sw3it__lockmark,
.bcn-sw3it .bcn-sw3it__row:hover .bcn-sw3it__marks,
.bcn-sw3it .bcn-sw3it__row:focus-within .bcn-sw3it__marks {
  display: none;
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
.bcn-sw3it .bcn-sw3it__entries {
  padding: 0 0 var(--spacing-100) var(--spacing-300);
}
.bcn-sw3it .bcn-sw3it__entries a {
  color: var(--color-content-default-secondary);
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 1px 0;
  text-decoration: none;
  display: block;
  overflow: hidden;
}
.bcn-sw3it .bcn-sw3it__entries a:hover {
  color: var(--color-content-default);
  text-decoration: underline;
}
.bcn-sw3it .bcn-sw3it__entries a[data-status="discarded"] {
  color: var(--color-content-default-tertiary);
  text-decoration: line-through;
}
.bcn-sw3it .bcn-sw3it__entries a[data-current] {
  color: var(--color-content-default);
  font-weight: 600;
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
[data-index="closed"] .bcn-sw3it__unfold {
  display: block;
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--lg {
  --_btn-pad-y: var(--spacing-400, 1rem);
  --_btn-padding-x: var(--spacing-400, 1rem);
  --_btn-radius: var(--button-radius-lg, 8px);
}
.esa-button--variant-primary {
  --_accent-text: var(--color-content-brand);
}
.esa-button--variant-secondary {
  --_accent: var(--color-background-brand-muted);
  --_accent-hover: var(--color-background-brand-muted-hover);
  --_on: var(--color-content-on-brand-muted, var(--color-content-default));
  --_accent-text: var(--color-content-brand);
  --_accent-border: var(--color-border-default-strong, #bbb);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
}
.esa-button--variant-success {
  --_accent: var(--color-background-utility-success);
  --_accent-hover: var(--color-background-utility-success-hover);
  --_on: var(--color-content-on-utility-success);
  --_accent-text: var(--color-content-utility-success);
}
.esa-button--variant-warning {
  --_accent: var(--color-background-utility-warning);
  --_accent-hover: var(--color-background-utility-warning-hover);
  --_on: var(--button-on-warning, var(--color-content-on-utility-warning, #4f3422));
  --_accent-text: var(--color-content-utility-warning);
}
.esa-button--variant-info {
  --_accent: var(--color-background-utility-info);
  --_accent-hover: var(--color-background-utility-info-hover);
  --_accent-text: var(--color-content-utility-info);
}
.esa-button--variant-ai {
  --_accent: var(--color-background-ai);
  --_accent-hover: var(--color-background-ai-hover);
  --_accent-text: var(--color-content-ai);
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
  background: var(
    --button-chrome-bg-hover,
    color-mix(in srgb, currentColor 14%, transparent)
  );
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
.esa-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
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
.esa-button__label {
  white-space: nowrap;
}
.esa-button__label--hidden {
  clip-path: inset(50%);
  white-space: nowrap;
  width: 1px;
  height: 1px;
  position: absolute;
  overflow: hidden;
}
.esa-button__spinner {
  width: 1em;
  height: 1em;
  animation: esa-button-spin var(--animation-spin, 0.75s linear infinite);
  border: 2px solid;
  border-right-color: #0000;
  border-radius: 50%;
  display: inline-block;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-needs__head .esa-badge {
  font-variant-numeric: tabular-nums;
}
.typography-microcopy-2xs {
  font-family: var(--typography-microcopy-2xs-font-family);
  font-size: var(--typography-microcopy-2xs-font-size);
  font-weight: var(--typography-microcopy-2xs-font-weight);
  line-height: var(--typography-microcopy-2xs-line-height);
  letter-spacing: var(--typography-microcopy-2xs-letter-spacing);
}
.typography-microcopy-2xs-subtle {
  font-family: var(--typography-microcopy-2xs-subtle-font-family);
  font-size: var(--typography-microcopy-2xs-subtle-font-size);
  font-weight: var(--typography-microcopy-2xs-subtle-font-weight);
  line-height: var(--typography-microcopy-2xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-2xs-subtle-letter-spacing);
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
.esa-icon--md {
  --_icon-size: var(--icon-size-md, 20px);
}
.esa-icon--lg {
  --_icon-size: var(--icon-size-lg, 24px);
}
.esa-icon--xl {
  --_icon-size: var(--icon-size-xl, 28px);
}
.esa-icon svg {
  width: var(--_icon-size);
  height: var(--_icon-size);
  display: block;
}
.esa-badge {
  --_badge-bg: var(--badge-bg, var(--color-background-brand, #46a758));
  --_badge-text: var(--badge-text-color, var(--color-content-default-knockout, #fcfcfc));
  --_badge-padding-y: var(--spacing-150, 0.375rem);
  --_badge-padding-x: var(--spacing-200, 0.5rem);
  min-width: calc(1lh + 2 * var(--_badge-padding-y));
  padding-block: var(--_badge-padding-y);
  padding-inline: var(--_badge-padding-x);
  border-radius: var(--radius-chip, var(--radius-sm, 0.25rem));
  background: var(--_badge-bg);
  color: var(--_badge-text);
  white-space: nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  display: inline-flex;
}
.esa-badge--xs {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-100, 0.25rem);
}
.esa-badge--sm {
  --_badge-padding-y: var(--spacing-100, 0.25rem);
  --_badge-padding-x: var(--spacing-150, 0.375rem);
}
.esa-badge--lg {
  --_badge-padding-y: var(--spacing-250, 0.625rem);
  --_badge-padding-x: var(--spacing-300, 0.75rem);
}
.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand-muted, #e9f6e9);
  --_badge-text: var(--color-content-on-brand-muted, #203c25);
}
.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-muted, #e6f6eb);
  --_badge-text: var(--color-content-utility-success, #218358);
  --_badge-border: var(--color-border-utility-success, #adddc0);
}
.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-muted, #fff7c2);
  --_badge-text: var(--color-content-utility-warning, #ab6400);
  --_badge-border: var(--color-border-utility-warning, #f3d673);
}
.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-muted, #feebec);
  --_badge-text: var(--color-content-utility-danger, #ce2c31);
  --_badge-border: var(--color-border-utility-danger, #fdbdbe);
}
.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-muted, #e6f4fe);
  --_badge-text: var(--color-content-utility-info, #0d74ce);
  --_badge-border: var(--color-border-utility-info, #acd8fc);
}
.esa-badge--success:not(.esa-badge--dot),
.esa-badge--warning:not(.esa-badge--dot),
.esa-badge--danger:not(.esa-badge--dot),
.esa-badge--info:not(.esa-badge--dot) {
  border: 1px solid var(--_badge-border, transparent);
}
.esa-badge--dot {
  border-radius: var(--radius-pill, 9999px);
  width: 8px;
  min-width: 8px;
  height: 8px;
  padding: 0;
}
.esa-badge--dot.esa-badge--primary {
  --_badge-bg: var(--color-background-brand-hover, #3e9b4f);
}
.esa-badge--dot.esa-badge--secondary {
  --_badge-bg: var(--color-background-brand, #46a758);
}
.esa-badge--dot.esa-badge--success {
  --_badge-bg: var(--color-background-utility-success-hover, #2b9a66);
}
.esa-badge--dot.esa-badge--warning {
  --_badge-bg: var(--color-background-utility-warning-hover, #ffba18);
}
.esa-badge--dot.esa-badge--danger {
  --_badge-bg: var(--color-background-utility-danger-hover, #dc3e42);
}
.esa-badge--dot.esa-badge--info {
  --_badge-bg: var(--color-background-utility-info-hover, #0588f0);
}
.esa-badge--dot {
  background: canvastext;
  border: 0;
  outline: 1px solid canvastext;
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
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
- `--bcn-console-fg`: #ffffffed _(component)_
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
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-danger-muted`: #feebec _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-info-muted`: #e6f4fe _(semantic)_
- `--color-background-utility-info-subtle`: #fbfdff _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-success-muted`: #e6f6eb _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-background-utility-warning-muted`: #fff7c2 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-focus`: #3e9b4f _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
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
- `--color-content-success`: #218358 _(component)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-chip`: .25rem _(semantic)_
- `--radius-full`: 9999px _(primitive)_
- `--radius-pill`: 9999px _(semantic)_
- `--radius-sm`: .25rem _(semantic)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
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
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
