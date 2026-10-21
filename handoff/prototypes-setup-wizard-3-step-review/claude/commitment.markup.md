# Commitment: markup

```html
<article class="bcn-sw3c" data-c="COA 11.1" data-mode="select" aria-labelledby="sw3c-title">
  <div class="bcn-sw3c__tools" role="toolbar" aria-label="Commitment tools">
    <div class="bcn-sw3c__group">
      <span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ico="mouse-pointer-2"
          data-c-tool="select"
          title="Select a requirement (V)"
          aria-pressed="true"
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
              data-ico="mouse-pointer-2"
            >
              <path
                d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
              ></path></svg></span
          ><span class="esa-button__label">Select</span>
        </button></span
      ><span
        class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          data-ico="highlighter"
          data-c-tool="mark"
          title="Highlight a new requirement (H)"
          aria-pressed="false"
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
              data-ico="highlighter"
            >
              <path d="m9 11-6 6v3h9l3-3"></path>
              <path
                d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
              ></path></svg></span
          ><span class="esa-button__label">Highlight</span>
        </button></span
      ><span class="bcn-sw3c__rule" aria-hidden="true"></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Delete the selected requirement (Delete)"
          title="Delete the selected requirement (Delete)"
          data-c-tool="delete"
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
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              <line x1="10" x2="10" y1="11" y2="17"></line>
              <line x1="14" x2="14" y1="11" y2="17"></line></svg
          ></span></button></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Merge the selected requirements (M); shift-click to select more"
          title="Shift-click a neighboring requirement to merge with it"
          data-ico="merge"
          data-c-tool="merge"
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
              data-ico="merge"
            >
              <path d="m8 6 4-4 4 4"></path>
              <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"></path>
              <path d="m20 22-5-5"></path></svg
          ></span></button></span
      ><span class="bcn-sw3c__rule" aria-hidden="true"></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Undo (Cmd+Z)"
          title="Undo (Cmd+Z)"
          data-ico="undo-2"
          data-c-tool="undo"
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
              data-ico="undo-2"
            >
              <path d="M9 14 4 9l5-5"></path>
              <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg
          ></span></button></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Redo (Shift+Cmd+Z)"
          title="Redo (Shift+Cmd+Z)"
          data-ico="redo-2"
          data-c-tool="redo"
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
              data-ico="redo-2"
            >
              <path d="m15 14 5-5-5-5"></path>
              <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path></svg
          ></span></button
      ></span>
    </div>
    <div class="bcn-sw3c__group">
      <span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Hide highlights"
          title="Hide highlights"
          data-ico="highlighter"
          data-c-view="marks"
          aria-pressed="true"
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
              data-ico="highlighter"
            >
              <path d="m9 11-6 6v3h9l3-3"></path>
              <path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path></svg
          ></span></button></span
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
        ><button
          class="esa-button__native typography-microcopy-xs"
          type="button"
          aria-label="Hide underlines"
          title="Hide underlines"
          data-ico="underline"
          data-c-view="lines"
          aria-pressed="true"
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
              data-ico="underline"
            >
              <path d="M6 4v6a6 6 0 0 0 12 0V4"></path>
              <line x1="4" x2="20" y1="20" y2="20"></line></svg
          ></span></button></span
      ><span class="bcn-sw3c__rule" aria-hidden="true"></span
      ><span data-c-peek=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            title="Open the source page (p. 131)"
            data-c-pages="true"
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
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                <!-- …and 3 more like this (<path>) -->
              </svg></span
            ><span class="esa-button__label">p. 131</span>
          </button></span
        ></span
      ><span data-c-edit=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            aria-label="Edit ID, name and text"
            title="Edit ID, name and text"
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
            ></span></button></span></span
      ><span class="bcn-sw3c__rule" aria-hidden="true"></span
      ><span data-c-confirm=""
        ><span
          class="esa-button esa-button--variant-secondary esa-button--appearance-fill esa-button--sm"
          ><button class="esa-button__native typography-microcopy-xs" type="button" title="">
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
                <path d="M20 6 9 17l-5-5"></path></svg></span
            ><span class="esa-button__label">Confirm</span>
          </button></span
        ></span
      ><span data-c-reopen=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
          ><button
            class="esa-button__native typography-microcopy-xs"
            type="button"
            title="Reopen the commitment"
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
                <circle cx="12" cy="12" r="10"></circle>
                <path d="m9 12 2 2 4-4"></path></svg></span
            ><span class="esa-button__label">Confirmed</span>
          </button></span
        ></span
      >
    </div>
  </div>
  <div class="bcn-sw3c__page" data-c-page="">
    <header class="bcn-sw3c__head">
      <span data-c-badge=""><span class="bcn-cbadge bcn-cbadge--md">11.1</span></span>
      <h2 class="bcn-sw3c__title" id="sw3c-title" data-c-title="">Covered Species Observations</h2>
    </header>
    <p class="bcn-sw3c__parsing" data-c-parsing="" hidden="">Parsing</p>
    <div class="bcn-sw3c__text" data-c-text="">
      <p data-off="0">
        During all phases of Project construction, operations, and maintenance,
        <mark
          class="bcn-hl"
          data-sid="coa-11-1-1"
          data-family="amber"
          data-shade="1"
          data-ink="1"
          data-suggested=""
          title="11.1:1 Report Covered Species Encounters and Halt Work"
          >Permittee shall direct all workers to inform the Designated Biologist(s), Fisheries
          Biologist(s), or Biological Monitor(s) if they encounter any Covered Species within or
          near the Project site. All Covered Activities with potential to take Covered Species shall
          cease until the animal moves from the Project site on its own accord.</mark
        >
        <mark
          class="bcn-hl"
          data-sid="coa-11-1-2"
          data-family="amber"
          data-shade="3"
          data-ink="2"
          data-suggested=""
          title="11.1:2 Relocate Trapped Covered Species by Designated Biologist"
          >If the animal is found within a fenced Project construction site and cannot move of its
          own volition, the Designated Biologist(s) shall move the animal outside of the area of
          construction according to their species-specific relocation or transplantation plans
          described in this ITP for each Covered Species. Capture and relocation of trapped or
          injured special-status wildlife may only be performed by the Designated Biologist(s) and
          Fisheries Biologist(s).</mark
        >
        <mark
          class="bcn-hl"
          data-sid="coa-11-1-3"
          data-family="amber"
          data-shade="1"
          data-ink="3"
          data-suggested=""
          title="11.1:3 Record and Report Covered Species Sightings to CDFW"
          >Covered Species sightings shall be recorded with a GPS (including datum and horizontal
          accuracy in feet) and the Designated Biologist(s), Fisheries Biologist(S), or Biological
          Monitor(s) shall report Covered Species observed locations to CDFW within one business day
          of the observation.</mark
        >
      </p>
    </div>
    <div class="bcn-sw3c__unanchored" data-c-unanchored=""></div>
    <div class="bcn-sw3c__pop" data-c-req-pop="" role="group" aria-label="Requirement" hidden="">
      <span class="bcn-sw3c__pop-ref" data-c-req-ref=""></span
      ><span data-c-req-edit=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
          ><button class="esa-button__native typography-microcopy-2xs" type="button">
            <span class="esa-button__label">Edit</span>
          </button></span
        ></span
      ><span data-c-req-prev=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
          ><button class="esa-button__native typography-microcopy-2xs" type="button">
            <span class="esa-button__label">Merge with previous</span>
          </button></span
        ></span
      ><!-- …and 4 more like this (<span>) -->
    </div>
    <div class="bcn-sw3c__pop" data-c-gap-pop="" role="group" aria-label="Not tracked" hidden="">
      <span data-c-gap-track=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
          ><button class="esa-button__native typography-microcopy-2xs" type="button">
            <span class="esa-button__label">Make a requirement</span>
          </button></span
        ></span
      ><span data-c-gap-not=""
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--xs"
          ><button class="esa-button__native typography-microcopy-2xs" type="button">
            <span class="esa-button__label">Not binding</span>
          </button></span
        ></span
      >
    </div>
    <span class="bcn-sw3c__grip" data-c-grip="start" hidden="" aria-hidden="true"></span
    ><span class="bcn-sw3c__grip" data-c-grip="end" hidden="" aria-hidden="true"></span>
  </div>
</article>
```
