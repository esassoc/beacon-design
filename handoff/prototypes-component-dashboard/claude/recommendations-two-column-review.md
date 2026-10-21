# Recommendations: two-column review

The last step: every commitment the setup touches lands in one of two columns, Not Applicable or Will Apply, and the person moves rows between them before the one Save.

## Key decisions
- TWO COLUMNS, ONE SAVE. Save dismisses the Not Applicable column and applies the Will Apply column, creating their actions (Andy, 2026-10-20: "Apply on save"). The label says both numbers, e.g. "Dismiss 27 and Apply 10". There is no third "leave undecided" place; the drawer still allows Undo afterwards.
- A move arrow on every row. A row moved against setup's placement keeps its reason and shows "Moved by Hand"; moving it back clears that. A hand move is recorded as the person's decision, not setup's.
- Not Applicable lists the recommendations first, then ONE COLLAPSED GROUP PER UNSELECTED SOURCE DOCUMENT ("Construction MMRP (7)"), so the recommendations stay easy to scan. Rows inside a group move like any other.
- Will Apply rows show what speaks for them, then the actions they create ("Ground Disturbance, Drilling and Boring · Creates 1 action").
- Below the columns, when setup is re-run: Back to Needs a Decision (setup dismissals whose reason no longer holds) and Kept as Decided by Hand.

## Gotchas
- No transfer-list lego exists in the hub or in prod; logged in docs/system-improvement-ledger.md. Do not take the bcn- markup as a pattern to copy into Angular without checking for one first.

## Done when
- The column counts, the save label and the rail summary agree; moving a row updates all three; after Save the drawer reads 0 need a decision, 13 applied, 29 dismissed (42) in the fixture.

## Markup
```html
<div class="bcn-cs__transfer" data-cs-transfer="">
  <div class="bcn-cs__col" data-cs-col="na">
    <header class="bcn-cs__panehead">
      <h3 class="bcn-cs__h">Not Applicable</h3>
      <span class="bcn-cs__count" data-cs-count="na"></span>
    </header>
    <ul class="bcn-cs__options">
      <li class="bcn-cs-opt" data-cs-row="na:cc-001" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Worker environmental awareness training"
              >Worker environmental awareness training</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-001" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-001"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-1"
            title="Move to Will Apply: GT-BIO-1"
            data-cs-move="cc-001"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-002" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nesting bird preconstruction survey"
              >Nesting bird preconstruction survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-002" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-002"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-2"
            title="Move to Will Apply: GT-BIO-2"
            data-cs-move="cc-002"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-003" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Swainson’s hawk nest buffer"
              >Swainson’s hawk nest buffer</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-003" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-003"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-3"
            title="Move to Will Apply: GT-BIO-3"
            data-cs-move="cc-003"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-004" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Giant Garter Snake avoidance"
              >Giant Garter Snake avoidance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-004" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-004"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-4"
            title="Move to Will Apply: GT-BIO-4"
            data-cs-move="cc-004"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-005" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Elderberry shrub avoidance"
              >Elderberry shrub avoidance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-005" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-005"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-5"
            title="Move to Will Apply: GT-BIO-5"
            data-cs-move="cc-005"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-006" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Western Pond Turtle clearance"
              >Western Pond Turtle clearance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-006" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-006"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-6"
            title="Move to Will Apply: GT-BIO-6"
            data-cs-move="cc-006"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-007" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Delta Smelt in-water work window"
              >Delta Smelt in-water work window</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-007" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-007"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-7"
            title="Move to Will Apply: GT-BIO-7"
            data-cs-move="cc-007"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-008" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="California Tiger Salamander upland survey"
              >California Tiger Salamander upland survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-008" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-008"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-8"
            title="Move to Will Apply: GT-BIO-8"
            data-cs-move="cc-008"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-009" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Non-listed raptor nest buffer"
              >Non-listed raptor nest buffer</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-009" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-009"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-BIO-9"
            title="Move to Will Apply: GT-BIO-9"
            data-cs-move="cc-009"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-010" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Inadvertent discovery stop-work protocol"
              >Inadvertent discovery stop-work protocol</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-010" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-010"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-CUL-1"
            title="Move to Will Apply: GT-CUL-1"
            data-cs-move="cc-010"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-011" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Tribal monitor notification"
              >Tribal monitor notification</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-011" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-011"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-CUL-2"
            title="Move to Will Apply: GT-CUL-2"
            data-cs-move="cc-011"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-012" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Drilling fluid containment"
              >Drilling fluid containment</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-012" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-012"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-HAZ-1"
            title="Move to Will Apply: GT-HAZ-1"
            data-cs-move="cc-012"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-013" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Borehole abandonment"
              >Borehole abandonment</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-013" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-013"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-HAZ-2"
            title="Move to Will Apply: GT-HAZ-2"
            data-cs-move="cc-013"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-014" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nighttime drilling noise limits"
              >Nighttime drilling noise limits</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-014" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-014"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-NOI-1"
            title="Move to Will Apply: GT-NOI-1"
            data-cs-move="cc-014"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-015" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Fugitive dust control"
              >Fugitive dust control</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-015" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-015"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT-AIR-1"
            title="Move to Will Apply: GT-AIR-1"
            data-cs-move="cc-015"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-016" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Turbidity monitoring for over-water borings"
              >Turbidity monitoring for over-water borings</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-016" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-016"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT401-3"
            title="Move to Will Apply: GT401-3"
            data-cs-move="cc-016"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-017" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Spill prevention and response"
              >Spill prevention and response</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-017" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-017"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT401-5"
            title="Move to Will Apply: GT401-5"
            data-cs-move="cc-017"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-018" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Dewatering discharge sampling"
              >Dewatering discharge sampling</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-018" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-018"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT401-7"
            title="Move to Will Apply: GT401-7"
            data-cs-move="cc-018"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-019" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Wet-season erosion control"
              >Wet-season erosion control</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-019" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-019"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: GT401-9"
            title="Move to Will Apply: GT401-9"
            data-cs-move="cc-019"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-020" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Channel work only when dry"
              >Channel work only when dry</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-020" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-020"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: LSAA-2"
            title="Move to Will Apply: LSAA-2"
            data-cs-move="cc-020"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-021" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Riparian vegetation removal limits"
              >Riparian vegetation removal limits</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-021" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-021"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: LSAA-4"
            title="Move to Will Apply: LSAA-4"
            data-cs-move="cc-021"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-022" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Splittail spawning window"
              >Splittail spawning window</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-022" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-022"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: LSAA-6"
            title="Move to Will Apply: LSAA-6"
            data-cs-move="cc-022"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-023" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Levee toe setback for borings"
              >Levee toe setback for borings</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-023" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-023"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: G408-1"
            title="Move to Will Apply: G408-1"
            data-cs-move="cc-023"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-024" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Levee deformation monitoring"
              >Levee deformation monitoring</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-024" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-024"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: G408-3"
            title="Move to Will Apply: G408-3"
            data-cs-move="cc-024"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-025" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Casing installation vibration limits"
              >Casing installation vibration limits</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-025" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-025"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: G408-5"
            title="Move to Will Apply: G408-5"
            data-cs-move="cc-025"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-026" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nesting bird preconstruction survey"
              >Nesting bird preconstruction survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-026" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-026"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: BIO-03"
            title="Move to Will Apply: BIO-03"
            data-cs-move="cc-026"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-027" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Worker cultural resources awareness training"
              >Worker cultural resources awareness training</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-027" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-027"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: CUL-02"
            title="Move to Will Apply: CUL-02"
            data-cs-move="cc-027"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-028" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Construction noise monitoring plan"
              >Construction noise monitoring plan</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-028" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-028"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: NOI-03"
            title="Move to Will Apply: NOI-03"
            data-cs-move="cc-028"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-029" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Construction fugitive dust control"
              >Construction fugitive dust control</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-029" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-029"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: AIR-04"
            title="Move to Will Apply: AIR-04"
            data-cs-move="cc-029"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-030" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Haul route compliance"
              >Haul route compliance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-030" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-030"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: TRA-11"
            title="Move to Will Apply: TRA-11"
            data-cs-move="cc-030"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-031" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Revegetation of temporarily disturbed areas"
              >Revegetation of temporarily disturbed areas</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-031" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-031"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: VEG-06"
            title="Move to Will Apply: VEG-06"
            data-cs-move="cc-031"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-032" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Vibration limits for adjacent structures"
              >Vibration limits for adjacent structures</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-032" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-032"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: NOI-12"
            title="Move to Will Apply: NOI-12"
            data-cs-move="cc-032"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-033" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Giant Garter Snake active-season restriction"
              >Giant Garter Snake active-season restriction</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-033" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-033"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: ITP-6.2"
            title="Move to Will Apply: ITP-6.2"
            data-cs-move="cc-033"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-034" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Swainson’s hawk foraging habitat mitigation"
              >Swainson’s hawk foraging habitat mitigation</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-034" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-034"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: ITP-7.1"
            title="Move to Will Apply: ITP-7.1"
            data-cs-move="cc-034"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-035" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Delta Smelt entrainment avoidance"
              >Delta Smelt entrainment avoidance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-035" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-035"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: ITP-9.4"
            title="Move to Will Apply: ITP-9.4"
            data-cs-move="cc-035"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-036" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Tidal marsh restoration monitoring"
              >Tidal marsh restoration monitoring</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-036" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-036"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: ITP-11.3"
            title="Move to Will Apply: ITP-11.3"
            data-cs-move="cc-036"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-037" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Section 404 preconstruction notification"
              >Section 404 preconstruction notification</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-037" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-037"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: USACE-02"
            title="Move to Will Apply: USACE-02"
            data-cs-move="cc-037"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-038" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Compensatory mitigation accounting"
              >Compensatory mitigation accounting</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-038" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-038"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: USACE-07"
            title="Move to Will Apply: USACE-07"
            data-cs-move="cc-038"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-039" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Stormwater pollution prevention plan"
              >Stormwater pollution prevention plan</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-039" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-039"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: WQ-08"
            title="Move to Will Apply: WQ-08"
            data-cs-move="cc-039"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-040" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Quarterly SWPPP inspection"
              >Quarterly SWPPP inspection</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-040" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-040"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: WQ-12"
            title="Move to Will Apply: WQ-12"
            data-cs-move="cc-040"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-041" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="In-water work turbidity monitoring"
              >In-water work turbidity monitoring</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-041" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-041"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: WQ-19"
            title="Move to Will Apply: WQ-19"
            data-cs-move="cc-041"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="na:cc-042" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Spill prevention and response plan"
              >Spill prevention and response plan</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="na:cc-042" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="na:cc-042"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Will Apply: WQ-23"
            title="Move to Will Apply: WQ-23"
            data-cs-move="cc-042"
            data-cs-to="apply"
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
                <path d="m12 5 7 7-7 7"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt bcn-cs-opt--none" data-cs-col-none="na" hidden="">
        <span class="bcn-cs-opt__meta">None</span>
      </li>
    </ul>
    <div class="bcn-cs__srcgroups" data-cs-srcgroups="" hidden="">
      <div data-cs-srcgrp="c-mmrp" data-cs-srcname="Construction MMRP" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">Construction MMRP</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-026" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nesting bird preconstruction survey"
                      >Nesting bird preconstruction survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-026" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-026"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: BIO-03"
                    title="Move to Will Apply: BIO-03"
                    data-cs-move="cc-026"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-027" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Worker cultural resources awareness training"
                      >Worker cultural resources awareness training</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-027" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-027"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: CUL-02"
                    title="Move to Will Apply: CUL-02"
                    data-cs-move="cc-027"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-028" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Construction noise monitoring plan"
                      >Construction noise monitoring plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-028" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-028"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: NOI-03"
                    title="Move to Will Apply: NOI-03"
                    data-cs-move="cc-028"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-029" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Construction fugitive dust control"
                      >Construction fugitive dust control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-029" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-029"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: AIR-04"
                    title="Move to Will Apply: AIR-04"
                    data-cs-move="cc-029"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-030" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Haul route compliance"
                      >Haul route compliance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-030" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-030"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: TRA-11"
                    title="Move to Will Apply: TRA-11"
                    data-cs-move="cc-030"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-031" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Revegetation of temporarily disturbed areas"
                      >Revegetation of temporarily disturbed areas</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-031" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-031"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: VEG-06"
                    title="Move to Will Apply: VEG-06"
                    data-cs-move="cc-031"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-032" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Vibration limits for adjacent structures"
                      >Vibration limits for adjacent structures</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-032" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-032"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: NOI-12"
                    title="Move to Will Apply: NOI-12"
                    data-cs-move="cc-032"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="c-itp" data-cs-srcname="ITP" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">ITP</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-033" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Giant Garter Snake active-season restriction"
                      >Giant Garter Snake active-season restriction</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-033" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-033"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-6.2"
                    title="Move to Will Apply: ITP-6.2"
                    data-cs-move="cc-033"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-034" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Swainson’s hawk foraging habitat mitigation"
                      >Swainson’s hawk foraging habitat mitigation</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-034" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-034"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-7.1"
                    title="Move to Will Apply: ITP-7.1"
                    data-cs-move="cc-034"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-035" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Delta Smelt entrainment avoidance"
                      >Delta Smelt entrainment avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-035" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-035"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-9.4"
                    title="Move to Will Apply: ITP-9.4"
                    data-cs-move="cc-035"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-036" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Tidal marsh restoration monitoring"
                      >Tidal marsh restoration monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-036" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-036"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: ITP-11.3"
                    title="Move to Will Apply: ITP-11.3"
                    data-cs-move="cc-036"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="c-404" data-cs-srcname="404 Permit" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">404 Permit</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-037" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Section 404 preconstruction notification"
                      >Section 404 preconstruction notification</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-037" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-037"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: USACE-02"
                    title="Move to Will Apply: USACE-02"
                    data-cs-move="cc-037"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-038" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Compensatory mitigation accounting"
                      >Compensatory mitigation accounting</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-038" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-038"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: USACE-07"
                    title="Move to Will Apply: USACE-07"
                    data-cs-move="cc-038"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="c-401" data-cs-srcname="Construction 401" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">Construction 401</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-039" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Stormwater pollution prevention plan"
                      >Stormwater pollution prevention plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-039" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-039"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-08"
                    title="Move to Will Apply: WQ-08"
                    data-cs-move="cc-039"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-040" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Quarterly SWPPP inspection"
                      >Quarterly SWPPP inspection</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-040" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-040"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-12"
                    title="Move to Will Apply: WQ-12"
                    data-cs-move="cc-040"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-041" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="In-water work turbidity monitoring"
                      >In-water work turbidity monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-041" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-041"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-19"
                    title="Move to Will Apply: WQ-19"
                    data-cs-move="cc-041"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-042" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Spill prevention and response plan"
                      >Spill prevention and response plan</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-042" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-042"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: WQ-23"
                    title="Move to Will Apply: WQ-23"
                    data-cs-move="cc-042"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="g-mmrp" data-cs-srcname="Geotech MMRP" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">Geotech MMRP</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-001" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Worker environmental awareness training"
                      >Worker environmental awareness training</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-001" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-001"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-1"
                    title="Move to Will Apply: GT-BIO-1"
                    data-cs-move="cc-001"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-002" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nesting bird preconstruction survey"
                      >Nesting bird preconstruction survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-002" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-002"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-2"
                    title="Move to Will Apply: GT-BIO-2"
                    data-cs-move="cc-002"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-003" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Swainson’s hawk nest buffer"
                      >Swainson’s hawk nest buffer</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-003" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-003"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-3"
                    title="Move to Will Apply: GT-BIO-3"
                    data-cs-move="cc-003"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-004" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Giant Garter Snake avoidance"
                      >Giant Garter Snake avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-004" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-004"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-4"
                    title="Move to Will Apply: GT-BIO-4"
                    data-cs-move="cc-004"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-005" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Elderberry shrub avoidance"
                      >Elderberry shrub avoidance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-005" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-005"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-5"
                    title="Move to Will Apply: GT-BIO-5"
                    data-cs-move="cc-005"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-006" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Western Pond Turtle clearance"
                      >Western Pond Turtle clearance</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-006" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-006"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-6"
                    title="Move to Will Apply: GT-BIO-6"
                    data-cs-move="cc-006"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-007" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Delta Smelt in-water work window"
                      >Delta Smelt in-water work window</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-007" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-007"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-7"
                    title="Move to Will Apply: GT-BIO-7"
                    data-cs-move="cc-007"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-008" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="California Tiger Salamander upland survey"
                      >California Tiger Salamander upland survey</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-008" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-008"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-8"
                    title="Move to Will Apply: GT-BIO-8"
                    data-cs-move="cc-008"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-009" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Non-listed raptor nest buffer"
                      >Non-listed raptor nest buffer</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-009" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-009"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-BIO-9"
                    title="Move to Will Apply: GT-BIO-9"
                    data-cs-move="cc-009"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-010" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Inadvertent discovery stop-work protocol"
                      >Inadvertent discovery stop-work protocol</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-010" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-010"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-CUL-1"
                    title="Move to Will Apply: GT-CUL-1"
                    data-cs-move="cc-010"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-011" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Tribal monitor notification"
                      >Tribal monitor notification</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-011" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-011"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-CUL-2"
                    title="Move to Will Apply: GT-CUL-2"
                    data-cs-move="cc-011"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-012" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Drilling fluid containment"
                      >Drilling fluid containment</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-012" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-012"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-HAZ-1"
                    title="Move to Will Apply: GT-HAZ-1"
                    data-cs-move="cc-012"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-013" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Borehole abandonment"
                      >Borehole abandonment</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-013" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-013"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-HAZ-2"
                    title="Move to Will Apply: GT-HAZ-2"
                    data-cs-move="cc-013"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-014" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Nighttime drilling noise limits"
                      >Nighttime drilling noise limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-014" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-014"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-NOI-1"
                    title="Move to Will Apply: GT-NOI-1"
                    data-cs-move="cc-014"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-015" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Fugitive dust control"
                      >Fugitive dust control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-015" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-015"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT-AIR-1"
                    title="Move to Will Apply: GT-AIR-1"
                    data-cs-move="cc-015"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="g-401" data-cs-srcname="Geotech 401" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">Geotech 401</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-016" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Turbidity monitoring for over-water borings"
                      >Turbidity monitoring for over-water borings</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-016" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-016"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-3"
                    title="Move to Will Apply: GT401-3"
                    data-cs-move="cc-016"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-017" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Spill prevention and response"
                      >Spill prevention and response</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-017" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-017"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-5"
                    title="Move to Will Apply: GT401-5"
                    data-cs-move="cc-017"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-018" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Dewatering discharge sampling"
                      >Dewatering discharge sampling</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-018" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-018"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-7"
                    title="Move to Will Apply: GT401-7"
                    data-cs-move="cc-018"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-019" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Wet-season erosion control"
                      >Wet-season erosion control</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-019" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-019"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: GT401-9"
                    title="Move to Will Apply: GT401-9"
                    data-cs-move="cc-019"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="g-lsaa" data-cs-srcname="Geotech LSAA" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">Geotech LSAA</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-020" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Channel work only when dry"
                      >Channel work only when dry</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-020" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-020"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: LSAA-2"
                    title="Move to Will Apply: LSAA-2"
                    data-cs-move="cc-020"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-021" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Riparian vegetation removal limits"
                      >Riparian vegetation removal limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-021" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-021"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: LSAA-4"
                    title="Move to Will Apply: LSAA-4"
                    data-cs-move="cc-021"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-022" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Splittail spawning window"
                      >Splittail spawning window</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-022" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-022"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: LSAA-6"
                    title="Move to Will Apply: LSAA-6"
                    data-cs-move="cc-022"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
      <div data-cs-srcgrp="g-408" data-cs-srcname="Geotech 408" hidden="">
        <details class="esa-collapsible">
          <summary class="esa-collapsible__summary typography-label-sm-strong">
            <span class="esa-collapsible__title">Geotech 408</span>
          </summary>
          <div class="esa-collapsible__body typography-body-md">
            <ul class="bcn-cs__options bcn-cs__options--bare">
              <li class="bcn-cs-opt" data-cs-row="src:cc-023" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Levee toe setback for borings"
                      >Levee toe setback for borings</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-023" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-023"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: G408-1"
                    title="Move to Will Apply: G408-1"
                    data-cs-move="cc-023"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-024" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Levee deformation monitoring"
                      >Levee deformation monitoring</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-024" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-024"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: G408-3"
                    title="Move to Will Apply: G408-3"
                    data-cs-move="cc-024"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
              <li class="bcn-cs-opt" data-cs-row="src:cc-025" hidden="">
                <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
                  ><span class="bcn-cs-opt__titleline"
                    ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
                    ><span
                      class="bcn-cs-opt__name bcn-cs-opt__name--clip"
                      title="Casing installation vibration limits"
                      >Casing installation vibration limits</span
                    ></span
                  ><span class="bcn-cs-opt__metaline"
                    ><span data-cs-hand="src:cc-025" hidden=""></span
                    ><span
                      class="bcn-cs-opt__meta"
                      data-cs-reason="src:cc-025"
                    ></span></span></span
                ><span
                  class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
                  ><button
                    class="esa-button__native typography-microcopy-2xs"
                    type="button"
                    aria-label="Move to Will Apply: G408-5"
                    title="Move to Will Apply: G408-5"
                    data-cs-move="cc-025"
                    data-cs-to="apply"
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
                        <path d="m12 5 7 7-7 7"></path></svg
                    ></span></button
                ></span>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </div>
  </div>
  <div class="bcn-cs__col" data-cs-col="apply">
    <header class="bcn-cs__panehead">
      <h3 class="bcn-cs__h">Will Apply</h3>
      <span class="bcn-cs__count" data-cs-count="apply"></span>
    </header>
    <ul class="bcn-cs__options">
      <li class="bcn-cs-opt" data-cs-row="apply:cc-001" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Worker environmental awareness training"
              >Worker environmental awareness training</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-001" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-001"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-1"
            title="Move to Not Applicable: GT-BIO-1"
            data-cs-move="cc-001"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-002" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nesting bird preconstruction survey"
              >Nesting bird preconstruction survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-002" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-002"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-2"
            title="Move to Not Applicable: GT-BIO-2"
            data-cs-move="cc-002"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-003" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Swainson’s hawk nest buffer"
              >Swainson’s hawk nest buffer</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-003" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-003"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-3"
            title="Move to Not Applicable: GT-BIO-3"
            data-cs-move="cc-003"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-004" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-4</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Giant Garter Snake avoidance"
              >Giant Garter Snake avoidance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-004" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-004"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-4"
            title="Move to Not Applicable: GT-BIO-4"
            data-cs-move="cc-004"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-005" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-5</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Elderberry shrub avoidance"
              >Elderberry shrub avoidance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-005" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-005"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-5"
            title="Move to Not Applicable: GT-BIO-5"
            data-cs-move="cc-005"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-006" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-6</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Western Pond Turtle clearance"
              >Western Pond Turtle clearance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-006" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-006"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-6"
            title="Move to Not Applicable: GT-BIO-6"
            data-cs-move="cc-006"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-007" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-7</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Delta Smelt in-water work window"
              >Delta Smelt in-water work window</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-007" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-007"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-7"
            title="Move to Not Applicable: GT-BIO-7"
            data-cs-move="cc-007"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-008" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-8</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="California Tiger Salamander upland survey"
              >California Tiger Salamander upland survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-008" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-008"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-8"
            title="Move to Not Applicable: GT-BIO-8"
            data-cs-move="cc-008"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-009" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-BIO-9</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Non-listed raptor nest buffer"
              >Non-listed raptor nest buffer</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-009" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-009"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-BIO-9"
            title="Move to Not Applicable: GT-BIO-9"
            data-cs-move="cc-009"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-010" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Inadvertent discovery stop-work protocol"
              >Inadvertent discovery stop-work protocol</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-010" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-010"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-CUL-1"
            title="Move to Not Applicable: GT-CUL-1"
            data-cs-move="cc-010"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-011" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-CUL-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Tribal monitor notification"
              >Tribal monitor notification</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-011" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-011"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-CUL-2"
            title="Move to Not Applicable: GT-CUL-2"
            data-cs-move="cc-011"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-012" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Drilling fluid containment"
              >Drilling fluid containment</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-012" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-012"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-HAZ-1"
            title="Move to Not Applicable: GT-HAZ-1"
            data-cs-move="cc-012"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-013" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-HAZ-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Borehole abandonment"
              >Borehole abandonment</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-013" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-013"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-HAZ-2"
            title="Move to Not Applicable: GT-HAZ-2"
            data-cs-move="cc-013"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-014" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-NOI-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nighttime drilling noise limits"
              >Nighttime drilling noise limits</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-014" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-014"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-NOI-1"
            title="Move to Not Applicable: GT-NOI-1"
            data-cs-move="cc-014"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-015" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT-AIR-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Fugitive dust control"
              >Fugitive dust control</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-015" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-015"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT-AIR-1"
            title="Move to Not Applicable: GT-AIR-1"
            data-cs-move="cc-015"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-016" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Turbidity monitoring for over-water borings"
              >Turbidity monitoring for over-water borings</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-016" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-016"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT401-3"
            title="Move to Not Applicable: GT401-3"
            data-cs-move="cc-016"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-017" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-5</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Spill prevention and response"
              >Spill prevention and response</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-017" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-017"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT401-5"
            title="Move to Not Applicable: GT401-5"
            data-cs-move="cc-017"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-018" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-7</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Dewatering discharge sampling"
              >Dewatering discharge sampling</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-018" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-018"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT401-7"
            title="Move to Not Applicable: GT401-7"
            data-cs-move="cc-018"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-019" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">GT401-9</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Wet-season erosion control"
              >Wet-season erosion control</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-019" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-019"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: GT401-9"
            title="Move to Not Applicable: GT401-9"
            data-cs-move="cc-019"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-020" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Channel work only when dry"
              >Channel work only when dry</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-020" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-020"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: LSAA-2"
            title="Move to Not Applicable: LSAA-2"
            data-cs-move="cc-020"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-021" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-4</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Riparian vegetation removal limits"
              >Riparian vegetation removal limits</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-021" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-021"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: LSAA-4"
            title="Move to Not Applicable: LSAA-4"
            data-cs-move="cc-021"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-022" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">LSAA-6</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Splittail spawning window"
              >Splittail spawning window</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-022" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-022"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: LSAA-6"
            title="Move to Not Applicable: LSAA-6"
            data-cs-move="cc-022"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-023" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">G408-1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Levee toe setback for borings"
              >Levee toe setback for borings</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-023" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-023"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: G408-1"
            title="Move to Not Applicable: G408-1"
            data-cs-move="cc-023"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-024" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">G408-3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Levee deformation monitoring"
              >Levee deformation monitoring</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-024" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-024"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: G408-3"
            title="Move to Not Applicable: G408-3"
            data-cs-move="cc-024"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-025" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">G408-5</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Casing installation vibration limits"
              >Casing installation vibration limits</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-025" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-025"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: G408-5"
            title="Move to Not Applicable: G408-5"
            data-cs-move="cc-025"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-026" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">BIO-03</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Nesting bird preconstruction survey"
              >Nesting bird preconstruction survey</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-026" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-026"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: BIO-03"
            title="Move to Not Applicable: BIO-03"
            data-cs-move="cc-026"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-027" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">CUL-02</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Worker cultural resources awareness training"
              >Worker cultural resources awareness training</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-027" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-027"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: CUL-02"
            title="Move to Not Applicable: CUL-02"
            data-cs-move="cc-027"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-028" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">NOI-03</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Construction noise monitoring plan"
              >Construction noise monitoring plan</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-028" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-028"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: NOI-03"
            title="Move to Not Applicable: NOI-03"
            data-cs-move="cc-028"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-029" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">AIR-04</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Construction fugitive dust control"
              >Construction fugitive dust control</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-029" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-029"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: AIR-04"
            title="Move to Not Applicable: AIR-04"
            data-cs-move="cc-029"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-030" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">TRA-11</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Haul route compliance"
              >Haul route compliance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-030" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-030"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: TRA-11"
            title="Move to Not Applicable: TRA-11"
            data-cs-move="cc-030"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-031" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">VEG-06</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Revegetation of temporarily disturbed areas"
              >Revegetation of temporarily disturbed areas</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-031" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-031"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: VEG-06"
            title="Move to Not Applicable: VEG-06"
            data-cs-move="cc-031"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-032" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">NOI-12</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Vibration limits for adjacent structures"
              >Vibration limits for adjacent structures</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-032" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-032"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: NOI-12"
            title="Move to Not Applicable: NOI-12"
            data-cs-move="cc-032"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-033" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-6.2</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Giant Garter Snake active-season restriction"
              >Giant Garter Snake active-season restriction</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-033" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-033"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: ITP-6.2"
            title="Move to Not Applicable: ITP-6.2"
            data-cs-move="cc-033"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-034" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-7.1</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Swainson’s hawk foraging habitat mitigation"
              >Swainson’s hawk foraging habitat mitigation</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-034" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-034"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: ITP-7.1"
            title="Move to Not Applicable: ITP-7.1"
            data-cs-move="cc-034"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-035" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-9.4</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Delta Smelt entrainment avoidance"
              >Delta Smelt entrainment avoidance</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-035" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-035"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: ITP-9.4"
            title="Move to Not Applicable: ITP-9.4"
            data-cs-move="cc-035"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-036" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">ITP-11.3</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Tidal marsh restoration monitoring"
              >Tidal marsh restoration monitoring</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-036" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-036"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: ITP-11.3"
            title="Move to Not Applicable: ITP-11.3"
            data-cs-move="cc-036"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-037" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">USACE-02</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Section 404 preconstruction notification"
              >Section 404 preconstruction notification</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-037" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-037"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: USACE-02"
            title="Move to Not Applicable: USACE-02"
            data-cs-move="cc-037"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-038" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">USACE-07</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Compensatory mitigation accounting"
              >Compensatory mitigation accounting</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-038" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-038"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: USACE-07"
            title="Move to Not Applicable: USACE-07"
            data-cs-move="cc-038"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-039" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-08</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Stormwater pollution prevention plan"
              >Stormwater pollution prevention plan</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-039" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-039"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: WQ-08"
            title="Move to Not Applicable: WQ-08"
            data-cs-move="cc-039"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-040" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-12</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Quarterly SWPPP inspection"
              >Quarterly SWPPP inspection</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-040" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-040"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: WQ-12"
            title="Move to Not Applicable: WQ-12"
            data-cs-move="cc-040"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-041" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-19</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="In-water work turbidity monitoring"
              >In-water work turbidity monitoring</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-041" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-041"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: WQ-19"
            title="Move to Not Applicable: WQ-19"
            data-cs-move="cc-041"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt" data-cs-row="apply:cc-042" hidden="">
        <span class="bcn-cs-opt__body bcn-cs-opt__body--stack"
          ><span class="bcn-cs-opt__titleline"
            ><span class="bcn-cbadge bcn-cbadge--sm">WQ-23</span
            ><span
              class="bcn-cs-opt__name bcn-cs-opt__name--clip"
              title="Spill prevention and response plan"
              >Spill prevention and response plan</span
            ></span
          ><span class="bcn-cs-opt__metaline"
            ><span data-cs-hand="apply:cc-042" hidden=""
              ><span
                class="esa-badge esa-badge--secondary esa-badge--xs typography-microcopy-2xs-strong"
                ><span class="esa-badge__text">Moved by Hand</span></span
              ></span
            ><span
              class="bcn-cs-opt__meta"
              data-cs-reason="apply:cc-042"
            ></span></span></span
        ><span
          class="esa-button esa-button--variant-chrome esa-button--appearance-fill esa-button--xs esa-button--icon-only"
          ><button
            class="esa-button__native typography-microcopy-2xs"
            type="button"
            aria-label="Move to Not Applicable: WQ-23"
            title="Move to Not Applicable: WQ-23"
            data-cs-move="cc-042"
            data-cs-to="na"
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
                <path d="m12 19-7-7 7-7"></path>
                <path d="M19 12H5"></path></svg
            ></span></button
        ></span>
      </li>
      <li class="bcn-cs-opt bcn-cs-opt--none" data-cs-col-none="apply" hidden="">
        <span class="bcn-cs-opt__meta">None</span>
      </li>
    </ul>
  </div>
</div>
```

## Styles
```css
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
.typography-body-md {
  font-family: var(--typography-body-md-font-family);
  font-size: var(--typography-body-md-font-size);
  font-weight: var(--typography-body-md-font-weight);
  line-height: var(--typography-body-md-line-height);
  letter-spacing: var(--typography-body-md-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
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
.bcn-search-trigger .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-help-bar .esa-icon-button{color:var(--bcn-helpbar-fg-muted);--icon-button-bg-hover:var(--bcn-helpbar-hover-bg)}
.bcn-help-bar .esa-icon-button:hover,.bcn-help-bar .esa-icon-button:focus-visible{color:var(--bcn-helpbar-fg)}
.bcn-gd__label .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-gd-row .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-disclosure .esa-icon{transition:transform .15s}
.bcn-disclosure[aria-expanded=false] .esa-icon{transform:rotate(-90deg)}
.bcn-countchip__num .esa-badge{--badge-radius:var(--radius-full);--badge-bg:var(--color-border-default);--badge-text-color:var(--color-content-default-secondary);box-sizing:border-box;font-variant-numeric:tabular-nums;min-width:19px;height:19px;box-shadow:0 0 0 1.5px var(--color-background-elevation-raised);justify-content:center;align-items:center;padding:0 4px;font-size:.8125rem;line-height:1;display:inline-flex}
.bcn-ev-staging__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-cbadge{font-family:var(--typography-font-family-mono);font-weight:var(--typography-font-weight-semibold);color:var(--color-commitment);background:color-mix(in srgb, var(--color-commitment) 12%, white);border-radius:var(--radius-100);white-space:nowrap;flex-shrink:0;display:inline-block}
.bcn-cbadge--md{font-size:var(--font-size-100);padding:1px var(--spacing-200)}
.bcn-cbadge--sm{padding:1px var(--spacing-150);font-size:.75rem}
.bcn-cbadge--neutral{font-family:var(--typography-font-family-sans);color:var(--bcn-gray-700);background:var(--bcn-gray-100)}
.bcn-ev-targets__title .esa-icon{color:var(--color-content-default-tertiary);flex:none}
.bcn-ev-attached__mark .esa-badge{--badge-bg:var(--color-background-utility-info-subtle);--badge-text-color:var(--color-content-default);border:1px solid color-mix(in srgb, var(--color-background-utility-info) 35%, transparent);font-weight:var(--typography-font-weight-medium)}
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
.bcn-tl__pop .bcn-cbadge{font-family:var(--typography-font-family-mono);font-weight:var(--typography-font-weight-semibold);color:var(--color-commitment);background:color-mix(in srgb, var(--color-commitment) 12%, white);border-radius:var(--radius-100);padding:1px var(--spacing-150);font-size:.75rem;display:inline-block}
.bcn-mod__action-name .bcn-cbadge{margin-right:var(--spacing-150)}
.bcn-mod__link .esa-icon{color:var(--bcn-content-muted)}
.bcn-sw__head .esa-icon{color:var(--color-content-default-secondary)}
.bcn-sw__head .esa-badge{color:var(--color-content-default-secondary);border:1px solid var(--color-border-default);font-weight:var(--typography-font-weight-medium);background:0 0}
.bcn-sw-row__state--applied .esa-badge{--badge-bg:transparent;--badge-text-color:var(--color-background-brand);border:1px solid var(--color-border-brand,var(--color-border-default));font-weight:var(--typography-font-weight-medium)}
.bcn-sw-row__state--dismissed .esa-badge{--badge-bg:transparent;--badge-text-color:var(--color-content-default-secondary);border:1px solid var(--color-border-default);font-weight:var(--typography-font-weight-medium)}
.bcn-sw-prev__acttype .esa-badge{--badge-bg:var(--color-background-elevation-sunken);--badge-text-color:var(--color-content-default-secondary);font-weight:var(--typography-font-weight-medium)}
.bcn-cs__head{align-items:center;gap:var(--spacing-300);min-width:0;display:flex}
.bcn-cs__panehead{align-items:center;gap:var(--spacing-300);display:flex}
.bcn-cs__h{font-size:var(--font-size-200);font-weight:var(--typography-font-weight-semibold);color:var(--color-content-default);margin:0}
.bcn-cs__count{color:var(--color-content-default-secondary);font-variant-numeric:tabular-nums;white-space:nowrap;margin-left:auto;font-size:.8125rem}
.bcn-cs__transfer{gap:var(--spacing-400);grid-template-columns:repeat(2,minmax(0,1fr));align-items:start;display:grid}
.bcn-cs__col{gap:var(--spacing-200);flex-direction:column;min-width:0;display:flex}
.bcn-cs-opt__body.bcn-cs-opt__body--stack{align-items:stretch;gap:var(--spacing-050);flex-direction:column}
.bcn-cs-opt__body--stack .bcn-cs-opt__titleline{max-width:none}
.bcn-cs-opt__metaline{align-items:center;gap:var(--spacing-150);min-width:0;display:flex}
.bcn-cs-opt__metaline .bcn-cs-opt__meta{white-space:nowrap;text-overflow:ellipsis;min-width:0;overflow:hidden}
.bcn-cs__srcgroups{gap:var(--spacing-200);flex-direction:column;display:flex}
.bcn-cs__srcgroups[hidden],[data-cs-srcgrp][hidden],.bcn-cs__options[hidden]{display:none}
.bcn-cs__srcgroups .esa-collapsible__summary{padding:var(--spacing-200) var(--spacing-300)}
.bcn-cs__srcgroups .esa-collapsible__body{border-top:1px solid var(--color-border-default-subtle);padding:0}
.bcn-cs__options--bare{background:0 0;border:0;border-radius:0}
.bcn-cs__transfer+.bcn-cs__group,.bcn-cs__group+.bcn-cs__group{padding-top:var(--spacing-400);border-top:1px solid var(--color-border-default-subtle)}
.bcn-cs__options{border:1px solid var(--color-border-default);border-radius:var(--radius-200);background:var(--color-background-elevation-raised);flex-direction:column;margin:0;padding:0;list-style:none;display:flex;overflow:hidden}
.bcn-cs__options--grid{gap:var(--spacing-150);background:0 0;border:0;grid-template-columns:repeat(auto-fill,minmax(17rem,1fr));display:grid;overflow:visible}
.bcn-cs-opt{align-items:center;gap:var(--spacing-250);padding:var(--spacing-150) var(--spacing-300);display:flex}
.bcn-cs-opt+.bcn-cs-opt{border-top:1px solid var(--color-border-default-subtle)}
.bcn-cs__options--grid .bcn-cs-opt{border:1px solid var(--color-border-default);border-radius:var(--radius-200);background:var(--color-background-elevation-raised)}
.bcn-cs-opt[hidden]{display:none}
.bcn-cs-opt__body{align-items:baseline;gap:var(--spacing-300);flex:1;min-width:0;display:flex}
.bcn-cs-opt__body>{min-width:0}
.bcn-cs-opt__titleline{align-items:center;gap:var(--spacing-200);flex:none;min-width:0;max-width:60%;display:flex}
.bcn-cs-opt__name{font-size:var(--font-size-150);font-weight:var(--typography-font-weight-medium);color:var(--color-content-default);white-space:nowrap;flex:none}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__name{text-overflow:ellipsis;flex:0 auto;min-width:0;overflow:hidden}
.bcn-cs-opt__body:has([data-cs-hab]) .bcn-cs-opt__meta{flex:none}
.bcn-cs-opt__name--clip{text-overflow:ellipsis;white-space:nowrap;flex:0 auto;min-width:0;overflow:hidden}
.bcn-cs-opt__meta{color:var(--color-content-default-secondary);text-overflow:ellipsis;white-space:nowrap;font-size:.8125rem;overflow:hidden}
.bcn-cs-opt__meta:empty{display:none}
.bcn-cs-opt__end{color:var(--color-content-default-secondary);font-variant-numeric:tabular-nums;flex:none;font-size:.8125rem}
.esa-badge{--_badge-bg:var(--badge-bg,var(--color-background-elevation-raised,#fcfcfc));--_badge-text:var(--badge-text-color,var(--color-content-default-secondary,#646464));--_badge-border:var(--badge-border-color,var(--color-border-default,#cecece));--_badge-padding-y:var(--spacing-150,.375rem);--_badge-padding-x:var(--spacing-200,.5rem);min-width:calc(1lh + 2 * var(--_badge-padding-y));padding-block:var(--_badge-padding-y);padding-inline:var(--_badge-padding-x);border-radius:var(--radius-chip,var(--radius-sm,.25rem));background:var(--_badge-bg);color:var(--_badge-text);white-space:nowrap;box-sizing:border-box;justify-content:center;align-items:center;display:inline-flex}
.esa-badge--xs{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-100,.25rem)}
.esa-badge--sm{--_badge-padding-y:var(--spacing-100,.25rem);--_badge-padding-x:var(--spacing-150,.375rem)}
.esa-badge--lg{--_badge-padding-y:var(--spacing-250,.625rem);--_badge-padding-x:var(--spacing-300,.75rem)}
.esa-badge--primary{--_badge-bg:var(--color-background-brand,#46a758);--_badge-text:var(--color-content-default-knockout,#fcfcfc)}
.esa-badge--secondary{--_badge-bg:var(--color-background-brand-muted,#e9f6e9);--_badge-text:var(--color-content-on-brand-muted,#203c25)}
.esa-badge--success{--_badge-bg:var(--color-background-utility-success-muted,#e6f6eb);--_badge-text:var(--color-content-utility-success,#218358);--_badge-border:var(--color-border-utility-success,#adddc0)}
.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-muted,#fff7c2);--_badge-text:var(--color-content-utility-warning,#ab6400);--_badge-border:var(--color-border-utility-warning,#f3d673)}
.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-muted,#feebec);--_badge-text:var(--color-content-utility-danger,#ce2c31);--_badge-border:var(--color-border-utility-danger,#fdbdbe)}
.esa-badge--info{--_badge-bg:var(--color-background-utility-info-muted,#e6f4fe);--_badge-text:var(--color-content-utility-info,#0d74ce);--_badge-border:var(--color-border-utility-info,#acd8fc)}
.esa-badge--neutral:not(.esa-badge--dot),.esa-badge--success:not(.esa-badge--dot),.esa-badge--warning:not(.esa-badge--dot),.esa-badge--danger:not(.esa-badge--dot),.esa-badge--info:not(.esa-badge--dot){border:1px solid var(--_badge-border,transparent)}
.esa-badge--dot{border-radius:var(--radius-pill,9999px);width:8px;min-width:8px;height:8px;padding:0}
.esa-badge--dot.esa-badge--neutral{--_badge-bg:var(--color-content-default-secondary,#646464)}
.esa-badge--dot.esa-badge--primary{--_badge-bg:var(--color-background-brand-hover,#3e9b4f)}
.esa-badge--dot.esa-badge--secondary{--_badge-bg:var(--color-background-brand,#46a758)}
.esa-badge--dot.esa-badge--success{--_badge-bg:var(--color-background-utility-success-hover,#2b9a66)}
.esa-badge--dot.esa-badge--warning{--_badge-bg:var(--color-background-utility-warning-hover,#ffba18)}
.esa-badge--dot.esa-badge--danger{--_badge-bg:var(--color-background-utility-danger-hover,#dc3e42)}
.esa-badge--dot.esa-badge--info{--_badge-bg:var(--color-background-utility-info-hover,#0588f0)}
.esa-badge--dot{background:canvastext;border:0;outline:1px solid canvastext}
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
.typography-body-md{font-family:var(--typography-body-md-font-family);font-size:var(--typography-body-md-font-size);font-weight:var(--typography-body-md-font-weight);line-height:var(--typography-body-md-line-height);letter-spacing:var(--typography-body-md-letter-spacing)}
.typography-label-sm-strong{font-family:var(--typography-label-sm-strong-font-family);font-size:var(--typography-label-sm-strong-font-size);font-weight:var(--typography-label-sm-strong-font-weight);line-height:var(--typography-label-sm-strong-line-height);letter-spacing:var(--typography-label-sm-strong-letter-spacing)}
.typography-microcopy-2xs{font-family:var(--typography-microcopy-2xs-font-family);font-size:var(--typography-microcopy-2xs-font-size);font-weight:var(--typography-microcopy-2xs-font-weight);line-height:var(--typography-microcopy-2xs-line-height);letter-spacing:var(--typography-microcopy-2xs-letter-spacing)}
.typography-microcopy-2xs-subtle{font-family:var(--typography-microcopy-2xs-subtle-font-family);font-size:var(--typography-microcopy-2xs-subtle-font-size);font-weight:var(--typography-microcopy-2xs-subtle-font-weight);line-height:var(--typography-microcopy-2xs-subtle-line-height);letter-spacing:var(--typography-microcopy-2xs-subtle-letter-spacing)}
.typography-microcopy-2xs-strong{font-family:var(--typography-microcopy-2xs-strong-font-family);font-size:var(--typography-microcopy-2xs-strong-font-size);font-weight:var(--typography-microcopy-2xs-strong-font-weight);line-height:var(--typography-microcopy-2xs-strong-line-height);letter-spacing:var(--typography-microcopy-2xs-strong-letter-spacing)}
.esa-collapsible{border:var(--border-width-default,1px) solid var(--color-border-default,#cecece);border-radius:var(--radius-md,.5rem);background:var(--color-background-elevation-raised,#fcfcfc)}
.esa-collapsible--flush{background:0 0;border:none;border-radius:0}
.esa-collapsible--flush>.esa-collapsible__summary,.esa-collapsible--flush>.esa-collapsible__body{padding-inline:0}
.esa-collapsible__summary{align-items:center;gap:var(--spacing-200,.5rem);padding:var(--spacing-300,.75rem) var(--spacing-400,1rem);color:var(--color-content-default,#202020);cursor:pointer;list-style:none;display:flex}
.esa-collapsible__summary::-webkit-details-marker{display:none}
.esa-collapsible__summary:after{content:"";border-right:2px solid var(--color-content-default-secondary,#646464);border-bottom:2px solid var(--color-content-default-secondary,#646464);width:8px;height:8px;margin-left:auto;transition:transform .15s;transform:rotate(-45deg)}
.esa-collapsible[open]>.esa-collapsible__summary:after{transform:rotate(45deg)}
.esa-collapsible__summary .esa-icon{color:var(--color-content-default-secondary,#646464);flex-shrink:0}
.esa-collapsible__body{gap:var(--spacing-400,1rem);padding:0 var(--spacing-400,1rem) var(--spacing-400,1rem);flex-direction:column;display:flex}
.esa-icon{--_icon-size:var(--icon-size-md,20px);width:var(--_icon-size);height:var(--_icon-size);color:inherit;justify-content:center;align-items:center;display:inline-flex}
.esa-icon--xs{--_icon-size:var(--icon-size-xs,14px)}
.esa-icon--sm{--_icon-size:var(--icon-size-sm,16px)}
.esa-icon--md{--_icon-size:var(--icon-size-md,20px)}
.esa-icon--lg{--_icon-size:var(--icon-size-lg,24px)}
.esa-icon--xl{--_icon-size:var(--icon-size-xl,28px)}
.esa-icon svg{width:var(--_icon-size);height:var(--_icon-size);display:block}
.bcn-key-value__key .esa-icon{color:var(--color-content-default-tertiary)}
.breadcrumbs__items .esa-icon{color:var(--bcn-gray-400)}
.page-layout__title h1 .esa-icon{color:var(--page-title-icon-color,var(--bcn-gray-1000));flex-shrink:0}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--badge-bg`: #fcfcfc _(component)_
- `--badge-border-color`: #dcdcdc _(component)_
- `--badge-text-color`: #525252 _(component)_
- `--bcn-content-muted`: #7c7c7c _(component)_
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
- `--color-content-on-brand-muted`: #203c25 _(semantic)_
- `--color-content-on-utility-success`: #fcfcfc _(semantic)_
- `--color-content-on-utility-warning`: #4f3422 _(semantic)_
- `--color-content-utility-danger`: #ce2c31 _(semantic)_
- `--color-content-utility-info`: #0d74ce _(semantic)_
- `--color-content-utility-success`: #218358 _(semantic)_
- `--color-content-utility-warning`: #ab6400 _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--font-size-100`: clamp(.625rem, .56rem + .32vw, .75rem) _(primitive)_
- `--font-size-150`: clamp(.6875rem, .61rem + .38vw, .875rem) _(primitive)_
- `--font-size-200`: clamp(.75rem, .66rem + .44vw, .9375rem) _(primitive)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
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
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-md-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-md-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-body-md-font-weight`: 400 _(semantic)_
- `--typography-body-md-letter-spacing`: .01em _(semantic)_
- `--typography-body-md-line-height`: 1.6 _(semantic)_
- `--typography-font-family-mono`: "Roboto Mono", ui-monospace, monospace _(semantic)_
- `--typography-font-family-sans`: "DM Sans", sans-serif _(semantic)_
- `--typography-font-weight-medium`: 500 _(semantic)_
- `--typography-font-weight-semibold`: 550 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
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
