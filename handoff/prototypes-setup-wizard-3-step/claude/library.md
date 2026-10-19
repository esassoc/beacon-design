# Library

The Library (the page is already Source Documents), dense at 13px with 12px states, folding into a rail from its header. Prod's model: a source document (name, reference number) holds files, and each file is scanned on its own. Each source folds open or shut by its chevron, and is its name, with a menu (Edit details, Add files, Delete source document); its files sit under it, one row each with the name (middle-truncated so the version and date stay) and one state: Not scanned, Reading p. 16 of 170 with a progress bar, a warning badge "3 to check", Paused at p. 40, 157 commitments, No commitments. A file's menu downloads it, restarts its scan or deletes it. New source document is pinned at the foot.

## Key decisions
- SetupWizardSourceDto and SetupWizardSourceFileDto as they are: source fields plus files with PageCount and CommitmentCount. The per-file scan state is new.
- Every run keeps going while another file is in view.
- Each file's state is a badge under its name: Not scanned (gray), Scanning (blue, with a progress bar), Paused at p. N (gray), 157 commitments (green), No commitments (gray). Beside it, one badge for what waits on that file: "3 to check" at the check, otherwise "N to settle" (its Open items list). A scanned file reads "Reading page images, p. N of M" with a progress bar while OCR runs.
- Deletes ask first through a confirm dialog that states the impact (DeletionImpactGet): how many files and commitments go with it.

## Done when
- New source document: name "Biological Opinion", reference "WCRO-2025-00123", add a PDF: the source is created and selected, and its file reads Not scanned.
- Delete it from its details: the confirm reads "This deletes 1 file." and the source is gone after Delete source document.

## Markup
```html
<aside class="bcn-sw3src" data-sw3-sources="" aria-label="Library">
  <header class="bcn-sw3src__head">
    <h3 class="bcn-sw3src__title">Library</h3>
    <span
      class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        aria-label="Collapse the library"
        title="Collapse the library"
        data-rail-close="library"
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
  </header>
  <div class="bcn-sw3src__list" data-src-list="">
    <section class="bcn-sw3src__source" data-source="src-itp">
      <div class="bcn-sw3src__srcrow">
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only bcn-sw3src__fold"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Collapse"
            title="Collapse"
            data-src-fold="true"
            aria-expanded="true"
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
                <path d="m6 9 6 6 6-6"></path></svg
            ></span></button></span
        ><button type="button" class="bcn-sw3src__srcbtn" data-src-open="">
          <span class="bcn-sw3src__name" data-src-name=""
            >Incidental Take Permit</span
          ></button
        ><esa-dropdown-menu
          class="bcn-sw3src__menu"
          position="below-end"
          data-src-menu="true"
          width="auto"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              aria-label="Source document actions"
              title="Source document actions"
              data-ico="ellipsis"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-controls="menu"
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
                  data-ico="ellipsis"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle></svg
              ></span></button></span
        ></esa-dropdown-menu>
      </div>
      <ol class="bcn-sw3src__files" data-src-files="">
        <li
          class="bcn-sw3src__file"
          data-file="itp"
          data-selected=""
          title="ITP_2081-2024-018-00_Signed.pdf"
        >
          <button type="button" class="bcn-sw3src__filebtn" data-file-open="">
            <span class="bcn-sw3src__fileicon"
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
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path></svg></span></span
            ><span class="bcn-sw3src__filetext"
              ><span class="bcn-sw3src__fname" data-file-name=""
                ><span class="bcn-sw3src__fstart" data-file-start=""
                  >ITP_2081-2024-018-00_Si</span
                ><span class="bcn-sw3src__fend" data-file-end="">gned.pdf</span></span
              ><span class="bcn-sw3src__fstate"
                ><span data-file-state-badge="" title="Not scanned"
                  ><span
                    class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                    ><span class="esa-badge__text">Not scanned</span></span
                  ></span
                ><span data-file-badge="" hidden=""
                  ><span
                    class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong"
                    ><span class="esa-badge__text">3 to check</span></span
                  ></span
                ></span
              ><span class="bcn-sw3src__progress" data-file-progress="" hidden=""
                ><div
                  class="esa-progress-bar esa-progress-bar--xs esa-progress-bar--primary"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Progress"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 0%"></div>
                  </div></div></span
            ></span></button
          ><esa-dropdown-menu
            class="bcn-sw3src__menu"
            position="below-end"
            data-file-menu="true"
            width="auto"
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="File actions"
                title="File actions"
                data-ico="ellipsis"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="menu"
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
                    data-ico="ellipsis"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle></svg
                ></span></button></span
          ></esa-dropdown-menu>
        </li>
      </ol>
    </section>
    <section class="bcn-sw3src__source" data-source="src-eir">
      <div class="bcn-sw3src__srcrow">
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only bcn-sw3src__fold"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Collapse"
            title="Collapse"
            data-src-fold="true"
            aria-expanded="true"
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
                <path d="m6 9 6 6 6-6"></path></svg
            ></span></button></span
        ><button type="button" class="bcn-sw3src__srcbtn" data-src-open="">
          <span class="bcn-sw3src__name" data-src-name=""
            >Final Environmental Impact Report</span
          ></button
        ><esa-dropdown-menu
          class="bcn-sw3src__menu"
          position="below-end"
          data-src-menu="true"
          width="auto"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              aria-label="Source document actions"
              title="Source document actions"
              data-ico="ellipsis"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-controls="menu"
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
                  data-ico="ellipsis"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle></svg
              ></span></button></span
        ></esa-dropdown-menu>
      </div>
      <ol class="bcn-sw3src__files" data-src-files="">
        <li class="bcn-sw3src__file" data-file="mmrp" title="04_DCP_MMRP_ADA.pdf">
          <button type="button" class="bcn-sw3src__filebtn" data-file-open="">
            <span class="bcn-sw3src__fileicon"
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
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path></svg></span></span
            ><span class="bcn-sw3src__filetext"
              ><span class="bcn-sw3src__fname" data-file-name=""
                ><span class="bcn-sw3src__fstart" data-file-start="">04_DCP_MMRP</span
                ><span class="bcn-sw3src__fend" data-file-end="">_ADA.pdf</span></span
              ><span class="bcn-sw3src__fstate"
                ><span data-file-state-badge="" title="Not scanned"
                  ><span
                    class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                    ><span class="esa-badge__text">Not scanned</span></span
                  ></span
                ><span data-file-badge="" hidden=""
                  ><span
                    class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong"
                    ><span class="esa-badge__text">3 to check</span></span
                  ></span
                ></span
              ><span class="bcn-sw3src__progress" data-file-progress="" hidden=""
                ><div
                  class="esa-progress-bar esa-progress-bar--xs esa-progress-bar--primary"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Progress"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 0%"></div>
                  </div></div></span
            ></span></button
          ><esa-dropdown-menu
            class="bcn-sw3src__menu"
            position="below-end"
            data-file-menu="true"
            width="auto"
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="File actions"
                title="File actions"
                data-ico="ellipsis"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="menu"
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
                    data-ico="ellipsis"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle></svg
                ></span></button></span
          ></esa-dropdown-menu>
        </li>
        <li
          class="bcn-sw3src__file"
          data-file="nod"
          title="02.0_Delta Conveyance Project Notice of Determination Signed 21DEC23.pdf"
        >
          <button type="button" class="bcn-sw3src__filebtn" data-file-open="">
            <span class="bcn-sw3src__fileicon"
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
                    d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
                  ></path>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                  <path d="M10 9H8"></path>
                  <path d="M16 13H8"></path>
                  <path d="M16 17H8"></path></svg></span></span
            ><span class="bcn-sw3src__filetext"
              ><span class="bcn-sw3src__fname" data-file-name=""
                ><span class="bcn-sw3src__fstart" data-file-start=""
                  >02.0_Delta Conveyance Project Notice of Determination Signed 21D</span
                ><span class="bcn-sw3src__fend" data-file-end="">EC23.pdf</span></span
              ><span class="bcn-sw3src__fstate"
                ><span data-file-state-badge="" title="Not scanned"
                  ><span
                    class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                    ><span class="esa-badge__text">Not scanned</span></span
                  ></span
                ><span data-file-badge="" hidden=""
                  ><span
                    class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong"
                    ><span class="esa-badge__text">3 to check</span></span
                  ></span
                ></span
              ><span class="bcn-sw3src__progress" data-file-progress="" hidden=""
                ><div
                  class="esa-progress-bar esa-progress-bar--xs esa-progress-bar--primary"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="Progress"
                >
                  <div class="esa-progress-bar__track">
                    <div class="esa-progress-bar__fill" style="width: 0%"></div>
                  </div></div></span
            ></span></button
          ><esa-dropdown-menu
            class="bcn-sw3src__menu"
            position="below-end"
            data-file-menu="true"
            width="auto"
            ><span
              class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
              ><button
                class="esa-button__native typography-microcopy-2xs"
                type="button"
                aria-label="File actions"
                title="File actions"
                data-ico="ellipsis"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-controls="menu"
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
                    data-ico="ellipsis"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle></svg
                ></span></button></span
          ></esa-dropdown-menu>
        </li>
      </ol>
    </section>
  </div>
  <footer class="bcn-sw3src__foot">
    <span
      class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
      ><button
        class="esa-button__native typography-microcopy-2xs"
        type="button"
        data-ico="file-plus"
        data-src-new="true"
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
            data-ico="file-plus"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
            <path d="M9 15h6"></path>
            <path d="M12 18v-6"></path></svg></span
        ><span class="esa-button__label">New source document</span>
      </button></span
    >
  </footer>
  <template data-src-tpl=""
    ><section class="bcn-sw3src__source" data-source="" data-astro-cid-6isyew5u="">
      <div class="bcn-sw3src__srcrow" data-astro-cid-6isyew5u="">
        <span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only bcn-sw3src__fold"
          data-astro-cid-4xhmycw5=""
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Collapse"
            title="Collapse"
            data-src-fold="true"
            aria-expanded="true"
            data-astro-cid-6isyew5u="true"
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
            ></span></button></span
        ><button
          type="button"
          class="bcn-sw3src__srcbtn"
          data-src-open=""
          data-astro-cid-6isyew5u=""
        >
          <span
            class="bcn-sw3src__name"
            data-src-name=""
            data-astro-cid-6isyew5u=""
          ></span></button
        ><esa-dropdown-menu
          class="bcn-sw3src__menu"
          position="below-end"
          data-src-menu="true"
          data-astro-cid-6isyew5u="true"
          ><span
            class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
            data-astro-cid-4xhmycw5=""
            ><button
              class="esa-button__native typography-microcopy-2xs"
              type="button"
              aria-label="Source document actions"
              title="Source document actions"
              data-ico="ellipsis"
              data-astro-cid-6isyew5u="true"
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
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line></svg
              ></span></button></span
        ></esa-dropdown-menu>
      </div>
      <ol
        class="bcn-sw3src__files"
        data-src-files=""
        data-astro-cid-6isyew5u=""
      ></ol></section></template
  ><template data-file-tpl=""
    ><li class="bcn-sw3src__file" data-file="" data-astro-cid-6isyew5u="">
      <button
        type="button"
        class="bcn-sw3src__filebtn"
        data-file-open=""
        data-astro-cid-6isyew5u=""
      >
        <span class="bcn-sw3src__fileicon" data-astro-cid-6isyew5u=""
          ><span
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
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path></svg></span></span
        ><span class="bcn-sw3src__filetext" data-astro-cid-6isyew5u=""
          ><span class="bcn-sw3src__fname" data-file-name="" data-astro-cid-6isyew5u=""
            ><span
              class="bcn-sw3src__fstart"
              data-file-start=""
              data-astro-cid-6isyew5u=""
            ></span
            ><span
              class="bcn-sw3src__fend"
              data-file-end=""
              data-astro-cid-6isyew5u=""
            ></span></span
          ><span class="bcn-sw3src__fstate" data-astro-cid-6isyew5u=""
            ><span data-file-state-badge="" data-astro-cid-6isyew5u=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                data-astro-cid-sh7ulwla=""
                ><span class="esa-badge__text" data-astro-cid-sh7ulwla=""
                  >Not scanned</span
                ></span
              ></span
            ><span data-file-badge="" hidden="" data-astro-cid-6isyew5u=""
              ><span
                class="esa-badge esa-badge--warning esa-badge--xs typography-microcopy-2xs-strong"
                data-astro-cid-sh7ulwla=""
                ><span class="esa-badge__text" data-astro-cid-sh7ulwla=""
                  >3 to check</span
                ></span
              ></span
            ></span
          ><span
            class="bcn-sw3src__progress"
            data-file-progress=""
            hidden=""
            data-astro-cid-6isyew5u=""
            ><div
              class="esa-progress-bar esa-progress-bar--xs esa-progress-bar--primary"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-label="Progress"
              data-astro-cid-wrbji5dg=""
            >
              <div class="esa-progress-bar__track" data-astro-cid-wrbji5dg="">
                <div
                  class="esa-progress-bar__fill"
                  style="width: 0%"
                  data-astro-cid-wrbji5dg=""
                ></div>
              </div></div></span
        ></span></button
      ><esa-dropdown-menu
        class="bcn-sw3src__menu"
        position="below-end"
        data-file-menu="true"
        data-astro-cid-6isyew5u="true"
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          data-astro-cid-4xhmycw5=""
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="File actions"
            title="File actions"
            data-ico="ellipsis"
            data-astro-cid-6isyew5u="true"
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
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line></svg
            ></span></button></span
      ></esa-dropdown-menu></li
  ></template>
</aside>
```

## Styles
```css
/* No box of its own — the buttons stay direct flex items of the host. */
.esa-button-group__slot {
  display: contents;
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
.bcn-sw3src {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  height: 100%;
  min-height: 0;
  box-shadow: var(--elevation-3);
  flex-direction: column;
  font-size: 0.8125rem;
  line-height: 1.3;
  display: flex;
  overflow: hidden;
}
.bcn-sw3src__head {
  padding: var(--spacing-200) var(--spacing-200) var(--spacing-200) var(--spacing-400);
  background: var(--color-background-elevation-sunken);
  border-bottom: 1px solid var(--color-border-default);
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.bcn-sw3src__title {
  color: var(--color-content-default);
  margin: 0;
  font-size: 0.8125rem;
  font-weight: 600;
}
.bcn-sw3src__list {
  min-height: 0;
  padding: var(--spacing-200);
  gap: var(--spacing-300);
  flex-direction: column;
  flex: 1;
  display: flex;
  overflow-y: auto;
}
.bcn-sw3src__foot {
  padding: var(--spacing-200) var(--spacing-300);
  border-top: 1px solid var(--color-border-default-subtle);
}
.bcn-sw3src__list .bcn-sw3src__srcrow,
.bcn-sw3src__list .bcn-sw3src__file {
  border-radius: var(--radius-100);
  align-items: flex-start;
  display: flex;
  position: relative;
}
.bcn-sw3src__list .bcn-sw3src__srcrow:hover,
.bcn-sw3src__list .bcn-sw3src__file:hover {
  background: var(--color-background-elevation-sunken);
}
.bcn-sw3src__list .bcn-sw3src__source[data-selected] > .bcn-sw3src__srcrow,
.bcn-sw3src__list .bcn-sw3src__file[data-selected] {
  background: var(--color-background-elevation-sunken);
  box-shadow: inset 0 0 0 1px var(--color-border-default);
}
.bcn-sw3src__list .bcn-sw3src__fold {
  flex: none;
  margin: 3px 0 0 2px;
}
.bcn-sw3src__list button[data-src-fold] {
  width: 24px;
  height: 24px;
  min-height: 24px;
  padding: 5px;
}
.bcn-sw3src__list .bcn-sw3src__fold svg {
  transition: transform 0.15s;
}
.bcn-sw3src__list .bcn-sw3src__source[data-collapsed] .bcn-sw3src__fold svg {
  transform: rotate(-90deg);
}
.bcn-sw3src__list .bcn-sw3src__source[data-collapsed] .bcn-sw3src__files {
  display: none;
}
.bcn-sw3src__list .bcn-sw3src__srcbtn,
.bcn-sw3src__list .bcn-sw3src__filebtn {
  gap: var(--spacing-150, 0.375rem);
  min-width: 0;
  padding: var(--spacing-150, 0.375rem) var(--spacing-200);
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
  border-radius: var(--radius-100);
  background: 0 0;
  border: 0;
  flex: 1;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__srcbtn {
  flex-direction: column;
  gap: 0;
  padding-left: 2px;
}
.bcn-sw3src__list .bcn-sw3src__srcbtn:focus-visible,
.bcn-sw3src__list .bcn-sw3src__filebtn:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: -2px;
}
.bcn-sw3src__list .bcn-sw3src__name {
  color: var(--color-content-default);
  font-weight: 600;
}
.bcn-sw3src__list .bcn-sw3src__files {
  padding: 0 0 0 var(--spacing-400);
  flex-direction: column;
  gap: 2px;
  margin: 2px 0 0;
  list-style: none;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fileicon {
  color: var(--color-content-default-secondary);
  flex: none;
  padding-top: 1px;
}
.bcn-sw3src__list .bcn-sw3src__filetext {
  flex-direction: column;
  flex: 1;
  gap: 1px;
  min-width: 0;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fname {
  min-width: 0;
  color: var(--color-content-default);
  white-space: nowrap;
  font-weight: 500;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fstart {
  text-overflow: ellipsis;
  min-width: 0;
  overflow: hidden;
}
.bcn-sw3src__list .bcn-sw3src__fend {
  flex: none;
}
.bcn-sw3src__list .bcn-sw3src__fstate {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  font-variant-numeric: tabular-nums;
  font-size: 0.75rem;
  font-weight: 500;
  display: flex;
}
.bcn-sw3src__list .bcn-sw3src__fstate [hidden] {
  display: none;
}
.bcn-sw3src__list .bcn-sw3src__fstate {
  gap: var(--spacing-100);
  flex-wrap: nowrap;
  min-width: 0;
  margin-top: 2px;
}
.bcn-sw3src__list .bcn-sw3src__fstate [data-file-state-badge] {
  --color-background-brand-muted: var(--color-background-elevation-sunken);
  --color-content-on-brand-muted: var(--color-content-default-secondary);
}
.bcn-sw3src__list .bcn-sw3src__fstate .esa-badge--secondary {
  border: 1px solid var(--color-border-default);
}
.bcn-sw3src__list .bcn-sw3src__progress {
  margin-top: 2px;
  display: block;
}
.bcn-sw3src__list .bcn-sw3src__progress[hidden] {
  display: none;
}
.bcn-sw3src__list .bcn-sw3src__menu {
  opacity: 0;
  flex: none;
  padding: 2px 2px 0 0;
}
.bcn-sw3src__list .bcn-sw3src__srcrow:hover > .bcn-sw3src__menu,
.bcn-sw3src__list .bcn-sw3src__file:hover > .bcn-sw3src__menu,
.bcn-sw3src__list .bcn-sw3src__menu:focus-within,
.bcn-sw3src__list .bcn-sw3src__menu[open] {
  opacity: 1;
}
.bcn-sw3src__list .bcn-sw3src__menu {
  --spacing-200: 0.25rem;
  --spacing-300: 0.5rem;
  --dropdown-menu-min-width: 10rem;
  --typography-body-md-font-size: 0.8125rem;
  --typography-body-md-line-height: 1.3;
  --typography-body-md-font-weight: var(--typography-font-weight-medium);
}
.bcn-sw3src__list .bcn-sw3src__menu > * {
  --spacing-200: 0.5rem;
  --spacing-300: 0.75rem;
}
.bcn-sw3tools esa-button-group,
.bcn-sw3tools .esa-button,
.bcn-sw3tools esa-dropdown-menu {
  flex: none;
}
.bcn-sw3scan[data-library="closed"] .bcn-sw3scan__sources > .bcn-sw3src,
.bcn-sw3scan__rail {
  display: none;
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
.esa-progress-bar {
  --_progress-height: var(--progress-bar-height-md, 8px);
  --_progress-radius: var(--radius-pill, 9999px);
  --_progress-track-bg: var(--color-background-elevation-sunken, #f0f0f0);
  --_progress-fill-bg: var(--color-background-brand, #46a758);
  width: 100%;
  display: block;
}
.esa-progress-bar__header {
  margin-bottom: var(--spacing-100, 0.25rem);
  justify-content: space-between;
  align-items: baseline;
  display: flex;
}
.esa-progress-bar__label {
  color: var(--color-content-default, #202020);
}
.esa-progress-bar__value {
  color: var(--color-content-default-secondary, #646464);
  font-variant-numeric: tabular-nums;
}
.esa-progress-bar__track {
  height: var(--_progress-height);
  border-radius: var(--_progress-radius);
  background: var(--_progress-track-bg);
  position: relative;
  overflow: hidden;
}
.esa-progress-bar__fill {
  border-radius: var(--_progress-radius);
  background: var(--_progress-fill-bg);
  height: 100%;
  transition: width 0.3s;
}
.esa-progress-bar--xs {
  --_progress-height: var(--progress-bar-height-xs, 2px);
}
.esa-progress-bar--sm {
  --_progress-height: var(--progress-bar-height-sm, 4px);
}
.esa-progress-bar--lg {
  --_progress-height: var(--progress-bar-height-lg, 12px);
}
.esa-progress-bar--success {
  --_progress-fill-bg: var(--color-background-utility-success, #30a46c);
}
.esa-progress-bar--warning {
  --_progress-fill-bg: var(--color-background-utility-warning, #ffc53d);
}
.esa-progress-bar--danger {
  --_progress-fill-bg: var(--color-background-utility-danger, #e5484d);
}
.esa-progress-bar--indeterminate .esa-progress-bar__fill {
  animation: esa-progress-indeterminate
    var(--animation-indeterminate, 1.5s ease-in-out infinite);
  width: 40% !important;
}
.esa-progress-bar__fill {
  transition: none;
}
.esa-progress-bar__fill {
  background: highlight;
}
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
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
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
```

## Tokens
- `--animation-indeterminate`: 1.5s ease-in-out infinite _(semantic)_
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #005862 _(component)_
- `--badge-text-color`: #fcfcfc _(component)_
- `--bcn-aldo-600`: #06736f _(component)_
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
- `--elevation-3`: 0 4px 20px -4px #0000000f _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--progress-bar-height-lg`: 12px _(component)_
- `--progress-bar-height-md`: 8px _(component)_
- `--progress-bar-height-sm`: 4px _(component)_
- `--progress-bar-height-xs`: 2px _(component)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
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
