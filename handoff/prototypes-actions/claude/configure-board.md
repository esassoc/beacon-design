# Configure board

The column editor, on the geometry of Jamie's monitoring configure dialog: a live board preview on the left, options on the right. Pick or create a workflow, name it, choose the action types it covers, then edit its columns grouped under Not Started, In Progress and Completed.

## Key decisions
- Custom columns map to the fixed backbone. A project can add Drafting or Agency Comments, never a fourth kind of done.
- Workflows are project-wide and per action type; each type belongs to exactly one workflow.
- Columns reorder by grip (pointer or arrow keys), rename inline, and add per category. Deleting a column that holds work asks where to move it.
- Restore default workflows resets to the four shipped ones.

## Gotchas
- An implementation whose column is deleted falls back to the first column of the same category; never orphan it.
- Every category needs at least one column, or work in it has nowhere to land.

## Done when
- Saving updates the Type tabs, the board columns and the dialog's Status options at once.

## Markup
```html
<div class="bcn-bcfg">
  <div class="bcn-bcfg__preview">
    <div class="bcn-bcfg__board" data-bcfg-preview="">
      <div class="bcn-bcfg__pcol">
        <span class="bcn-bcfg__phead"
          ><span
            class="bcn-bcfg__dot"
            data-bcfg-pdot=""
            style="background: var(--bcn-status-not-started)"
          ></span
          ><span class="bcn-bcfg__pname typography-label-sm-strong" data-bcfg-pname=""
            >Not Started</span
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount=""
            >4</span
          ></span
        >
        <div class="bcn-bcfg__plist" data-bcfg-plist="">
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Submit Covered Fish Species Monitoring and Science Plan"
          >
            Submit Covered Fish Species Monitoring and Science Plan
          </div>
          <div class="bcn-bcfg__stub typography-body-sm" title="Submit Dewatering Plan">
            Submit Dewatering Plan
          </div>
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Submit Erosion and Sediment Control Plan"
          >
            Submit Erosion and Sediment Control Plan
          </div>
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Submit Barge Operations Plan"
          >
            Submit Barge Operations Plan
          </div>
        </div>
      </div>
      <div class="bcn-bcfg__pcol">
        <span class="bcn-bcfg__phead"
          ><span
            class="bcn-bcfg__dot"
            data-bcfg-pdot=""
            style="background: var(--bcn-status-in-progress)"
          ></span
          ><span class="bcn-bcfg__pname typography-label-sm-strong" data-bcfg-pname=""
            >Drafting</span
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount=""
            >1</span
          ></span
        >
        <div class="bcn-bcfg__plist" data-bcfg-plist="">
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Develop Predation Study Plan"
          >
            Develop Predation Study Plan
          </div>
        </div>
      </div>
      <div class="bcn-bcfg__pcol">
        <span class="bcn-bcfg__phead"
          ><span
            class="bcn-bcfg__dot"
            data-bcfg-pdot=""
            style="background: var(--bcn-status-in-progress)"
          ></span
          ><span class="bcn-bcfg__pname typography-label-sm-strong" data-bcfg-pname=""
            >Internal Review</span
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount=""
            >1</span
          ></span
        >
        <div class="bcn-bcfg__plist" data-bcfg-plist="">
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Submit Herbicide and Pesticide Application Plan"
          >
            Submit Herbicide and Pesticide Application Plan
          </div>
        </div>
      </div>
      <div class="bcn-bcfg__pcol">
        <span class="bcn-bcfg__phead"
          ><span
            class="bcn-bcfg__dot"
            data-bcfg-pdot=""
            style="background: var(--bcn-status-in-progress)"
          ></span
          ><span class="bcn-bcfg__pname typography-label-sm-strong" data-bcfg-pname=""
            >Submitted to Agency</span
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount=""
            >0</span
          ></span
        >
        <div class="bcn-bcfg__plist" data-bcfg-plist=""></div>
      </div>
      <div class="bcn-bcfg__pcol">
        <span class="bcn-bcfg__phead"
          ><span
            class="bcn-bcfg__dot"
            data-bcfg-pdot=""
            style="background: var(--bcn-status-in-progress)"
          ></span
          ><span class="bcn-bcfg__pname typography-label-sm-strong" data-bcfg-pname=""
            >Agency Comments</span
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount=""
            >0</span
          ></span
        >
        <div class="bcn-bcfg__plist" data-bcfg-plist=""></div>
      </div>
      <div class="bcn-bcfg__pcol">
        <span class="bcn-bcfg__phead"
          ><span
            class="bcn-bcfg__dot"
            data-bcfg-pdot=""
            style="background: var(--bcn-status-completed)"
          ></span
          ><span class="bcn-bcfg__pname typography-label-sm-strong" data-bcfg-pname=""
            >Approved</span
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount=""
            >4</span
          ></span
        >
        <div class="bcn-bcfg__plist" data-bcfg-plist="">
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Prepare Stormwater Pollution Prevention Plan"
          >
            Prepare Stormwater Pollution Prevention Plan
          </div>
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Submit Underwater Sound Abatement Plan"
          >
            Submit Underwater Sound Abatement Plan
          </div>
          <div
            class="bcn-bcfg__stub typography-body-sm"
            title="Submit Underground Well Detection Plan"
          >
            Submit Underground Well Detection Plan
          </div>
          <div class="bcn-bcfg__stub typography-body-sm" title="Submit Pile Driving Plan">
            Submit Pile Driving Plan
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bcn-bcfg__options stack" data-gap="lg">
    <div class="bcn-bcfg__pick">
      <esa-select data-bcfg-workflow="true" label="Workflow" size="sm"></esa-select
      ><span data-bcfg-new=""
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
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path></svg></span
            ><span class="esa-button__label">New workflow</span>
          </button></span
        ></span
      >
    </div>
    <span class="bcn-bcfg__group typography-label-md-strong">Workflow</span
    ><esa-text-field data-bcfg-name="true" label="Name" size="sm"></esa-text-field
    ><esa-checkbox-group
      data-bcfg-types="true"
      label="Action types"
      size="sm"
      orientation="vertical"
    ></esa-checkbox-group
    ><span class="bcn-bcfg__group typography-label-md-strong">Columns</span>
    <div class="bcn-bcfg__cat stack" data-gap="xs" data-bcfg-cat="NotStarted">
      <span class="bcn-bcfg__cathead"
        ><span
          class="bcn-bcfg__dot"
          style="background: var(--bcn-status-not-started)"
        ></span
        ><span class="typography-label-sm-strong">Not Started</span></span
      >
      <div class="bcn-bcfg__bars stack" data-gap="xs" data-bcfg-bars="">
        <div class="bcn-bcfg__bar" data-bcfg-bar="" data-col-id="plans-not-started">
          <div class="bcn-bcfg__barrow">
            <button
              type="button"
              class="bcn-bcfg__grip"
              data-bcfg-grip=""
              aria-label="Reorder Not Started"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="Not Started column name"
            ></esa-text-field
            ><span
              class="bcn-bcfg__n typography-body-sm"
              data-bcfg-n=""
              title="4 on this component"
              >4</span
            ><span data-bcfg-remove=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Delete column"
                  title="Not Started needs at least one column"
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
            ></span>
          </div>
          <div class="bcn-bcfg__move stack" data-gap="xs" data-bcfg-move="" hidden="">
            <esa-select data-bcfg-move-to="true" size="sm" label=""></esa-select
            ><span class="cluster" data-gap="xs"
              ><span data-bcfg-move-ok=""
                ><span
                  class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Keep column</span>
                  </button></span
                ></span
              ></span
            >
          </div>
        </div>
      </div>
      <span class="bcn-bcfg__add" data-bcfg-add="NotStarted"
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
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
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path></svg></span
            ><span class="esa-button__label">Add column</span>
          </button></span
        ></span
      >
    </div>
    <div class="bcn-bcfg__cat stack" data-gap="xs" data-bcfg-cat="InProgress">
      <span class="bcn-bcfg__cathead"
        ><span
          class="bcn-bcfg__dot"
          style="background: var(--bcn-status-in-progress)"
        ></span
        ><span class="typography-label-sm-strong">In Progress</span></span
      >
      <div class="bcn-bcfg__bars stack" data-gap="xs" data-bcfg-bars="">
        <div class="bcn-bcfg__bar" data-bcfg-bar="" data-col-id="plans-drafting">
          <div class="bcn-bcfg__barrow">
            <button
              type="button"
              class="bcn-bcfg__grip"
              data-bcfg-grip=""
              aria-label="Reorder Drafting"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="In Progress column name"
            ></esa-text-field
            ><span
              class="bcn-bcfg__n typography-body-sm"
              data-bcfg-n=""
              title="1 on this component"
              >1</span
            ><span data-bcfg-remove=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Delete column"
                  title="Delete column"
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
            ></span>
          </div>
          <div class="bcn-bcfg__move stack" data-gap="xs" data-bcfg-move="" hidden="">
            <esa-select data-bcfg-move-to="true" size="sm" label=""></esa-select
            ><span class="cluster" data-gap="xs"
              ><span data-bcfg-move-ok=""
                ><span
                  class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Keep column</span>
                  </button></span
                ></span
              ></span
            >
          </div>
        </div>
        <div class="bcn-bcfg__bar" data-bcfg-bar="" data-col-id="plans-internal-review">
          <div class="bcn-bcfg__barrow">
            <button
              type="button"
              class="bcn-bcfg__grip"
              data-bcfg-grip=""
              aria-label="Reorder Internal Review"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="In Progress column name"
            ></esa-text-field
            ><span
              class="bcn-bcfg__n typography-body-sm"
              data-bcfg-n=""
              title="1 on this component"
              >1</span
            ><span data-bcfg-remove=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Delete column"
                  title="Delete column"
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
            ></span>
          </div>
          <div class="bcn-bcfg__move stack" data-gap="xs" data-bcfg-move="" hidden="">
            <esa-select data-bcfg-move-to="true" size="sm" label=""></esa-select
            ><span class="cluster" data-gap="xs"
              ><span data-bcfg-move-ok=""
                ><span
                  class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Keep column</span>
                  </button></span
                ></span
              ></span
            >
          </div>
        </div>
        <div
          class="bcn-bcfg__bar"
          data-bcfg-bar=""
          data-col-id="plans-submitted-to-agency"
        >
          <div class="bcn-bcfg__barrow">
            <button
              type="button"
              class="bcn-bcfg__grip"
              data-bcfg-grip=""
              aria-label="Reorder Submitted to Agency"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="In Progress column name"
            ></esa-text-field
            ><span
              class="bcn-bcfg__n typography-body-sm"
              data-bcfg-n=""
              title="0 on this component"
              >0</span
            ><span data-bcfg-remove=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Delete column"
                  title="Delete column"
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
            ></span>
          </div>
          <div class="bcn-bcfg__move stack" data-gap="xs" data-bcfg-move="" hidden="">
            <esa-select data-bcfg-move-to="true" size="sm" label=""></esa-select
            ><span class="cluster" data-gap="xs"
              ><span data-bcfg-move-ok=""
                ><span
                  class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Keep column</span>
                  </button></span
                ></span
              ></span
            >
          </div>
        </div>
        <div class="bcn-bcfg__bar" data-bcfg-bar="" data-col-id="plans-agency-comments">
          <div class="bcn-bcfg__barrow">
            <button
              type="button"
              class="bcn-bcfg__grip"
              data-bcfg-grip=""
              aria-label="Reorder Agency Comments"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="In Progress column name"
            ></esa-text-field
            ><span
              class="bcn-bcfg__n typography-body-sm"
              data-bcfg-n=""
              title="0 on this component"
              >0</span
            ><span data-bcfg-remove=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Delete column"
                  title="Delete column"
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
            ></span>
          </div>
          <div class="bcn-bcfg__move stack" data-gap="xs" data-bcfg-move="" hidden="">
            <esa-select data-bcfg-move-to="true" size="sm" label=""></esa-select
            ><span class="cluster" data-gap="xs"
              ><span data-bcfg-move-ok=""
                ><span
                  class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Keep column</span>
                  </button></span
                ></span
              ></span
            >
          </div>
        </div>
      </div>
      <span class="bcn-bcfg__add" data-bcfg-add="InProgress"
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
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
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path></svg></span
            ><span class="esa-button__label">Add column</span>
          </button></span
        ></span
      >
    </div>
    <div class="bcn-bcfg__cat stack" data-gap="xs" data-bcfg-cat="Completed">
      <span class="bcn-bcfg__cathead"
        ><span
          class="bcn-bcfg__dot"
          style="background: var(--bcn-status-completed)"
        ></span
        ><span class="typography-label-sm-strong">Completed</span></span
      >
      <div class="bcn-bcfg__bars stack" data-gap="xs" data-bcfg-bars="">
        <div class="bcn-bcfg__bar" data-bcfg-bar="" data-col-id="plans-approved">
          <div class="bcn-bcfg__barrow">
            <button
              type="button"
              class="bcn-bcfg__grip"
              data-bcfg-grip=""
              aria-label="Reorder Approved"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="9" cy="5" r="1"></circle>
                <circle cx="15" cy="5" r="1"></circle>
                <circle cx="9" cy="12" r="1"></circle>
                <circle cx="15" cy="12" r="1"></circle>
                <circle cx="9" cy="19" r="1"></circle>
                <circle cx="15" cy="19" r="1"></circle>
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="Completed column name"
            ></esa-text-field
            ><span
              class="bcn-bcfg__n typography-body-sm"
              data-bcfg-n=""
              title="4 on this component"
              >4</span
            ><span data-bcfg-remove=""
              ><span
                class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm esa-button--icon-only"
                ><button
                  class="esa-button__native typography-microcopy-xs"
                  type="button"
                  aria-label="Delete column"
                  title="Completed needs at least one column"
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
            ></span>
          </div>
          <div class="bcn-bcfg__move stack" data-gap="xs" data-bcfg-move="" hidden="">
            <esa-select data-bcfg-move-to="true" size="sm" label=""></esa-select
            ><span class="cluster" data-gap="xs"
              ><span data-bcfg-move-ok=""
                ><span
                  class="esa-button esa-button--variant-danger esa-button--appearance-soft esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button
                    class="esa-button__native typography-microcopy-xs"
                    type="button"
                  >
                    <span class="esa-button__label">Keep column</span>
                  </button></span
                ></span
              ></span
            >
          </div>
        </div>
      </div>
      <span class="bcn-bcfg__add" data-bcfg-add="Completed"
        ><span
          class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
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
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path></svg></span
            ><span class="esa-button__label">Add column</span>
          </button></span
        ></span
      >
    </div>
    <span class="bcn-bcfg__group typography-label-md-strong">Cards</span>
    <div class="stack" data-gap="sm">
      <esa-switch-toggle
        data-bcfg-card="codes"
        size="sm"
        label="Commitment IDs"
        label-position="after"
        checked=""
      ></esa-switch-toggle
      ><esa-switch-toggle
        data-bcfg-card="phase"
        size="sm"
        label="Phase"
        label-position="after"
        checked=""
      ></esa-switch-toggle
      ><esa-switch-toggle
        data-bcfg-card="due"
        size="sm"
        label="Due date"
        label-position="after"
        checked=""
      ></esa-switch-toggle
      ><esa-switch-toggle
        data-bcfg-card="assignee"
        size="sm"
        label="Assignee"
        label-position="after"
        checked=""
      ></esa-switch-toggle
      ><esa-switch-toggle
        data-bcfg-card="evidence"
        size="sm"
        label="Evidence count"
        label-position="after"
        checked=""
      ></esa-switch-toggle
      ><esa-switch-toggle
        data-bcfg-card="comments"
        size="sm"
        label="Comment count"
        label-position="after"
        checked=""
      ></esa-switch-toggle>
    </div>
    <span data-bcfg-restore=""
      ><span
        class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
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
              <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path></svg></span
          ><span class="esa-button__label">Restore default workflows</span>
        </button></span
      ></span
    >
  </div>
</div>
```

## Styles
```css
/* Type comes from .typography-body-sm on the element.

       Both nodes are always in the DOM (the live region has to pre-exist its content),
       so the gap is opt-IN via .is-shown rather than collapsed with :empty — Lit's
       template whitespace defeats :empty in engines that follow Selectors L3. */
.help,
.error {
  margin: 0;
}
/* Type comes from .typography-body-sm — help and error are one size at every
       control step, so they name the composite directly rather than mapping. */
/* Both nodes are ALWAYS in the DOM (see render()), so the gap is opt-IN rather
       than collapsed away. Deliberately not display:none when empty — that removes
       the node from the accessibility tree, and a live region that is not in the tree
       cannot announce anything. An empty <p> with no margin occupies no space.

       .is-shown rather than :empty: Lit's template whitespace leaves a text node
       inside the element, and browsers still disagree about whether :empty ignores
       whitespace-only children (Selectors L4 says yes, L3 says no). A class is
       deterministic; :empty here would silently leave 4px of dead space under every
       clean field in some engines and not others. */
.help,
.error {
  margin: 0;
}
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-bcfg {
  --_bleed: var(--spacing-500);
  margin: calc(-1 * var(--_bleed));
  grid-template-columns: minmax(0, 1fr) 396px;
  align-items: stretch;
  min-block-size: min(72vh, 760px);
  display: grid;
}
.bcn-bcfg__preview {
  background: var(--color-background-elevation-sunken);
  padding: var(--_bleed);
  min-inline-size: 0;
}
.bcn-bcfg__options {
  border-inline-start: 1px solid var(--color-border-default);
  padding: var(--_bleed);
  min-inline-size: 0;
}
.bcn-bcfg__options {
  border-inline-start: 0;
  border-block-start: 1px solid var(--color-border-default);
}
.bcn-bcfg__group {
  color: var(--color-content-default);
  border-block-end: 1px solid var(--color-border-default);
  padding-block-end: var(--spacing-150);
}
.bcn-bcfg__pick {
  align-items: end;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-bcfg__pick esa-select {
  flex: 1;
}
.bcn-bcfg__cathead {
  align-items: center;
  gap: var(--spacing-200);
  color: var(--color-content-default-secondary);
  display: inline-flex;
}
.bcn-bcfg__dot {
  border-radius: 50%;
  flex-shrink: 0;
  block-size: 8px;
  inline-size: 8px;
}
.bcn-bcfg__add {
  align-self: start;
}
.bcn-bcfg__bar {
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-200);
  padding: var(--spacing-150) var(--spacing-200);
}
.bcn-bcfg__bar[data-dragging] {
  border-color: var(--color-background-brand);
  box-shadow: var(--elevation-2);
}
.bcn-bcfg__barrow {
  align-items: center;
  gap: var(--spacing-200);
  display: flex;
}
.bcn-bcfg__grip {
  all: unset;
  padding: var(--spacing-100);
  color: var(--color-content-default-tertiary);
  cursor: grab;
  touch-action: none;
  border-radius: var(--radius-100);
  display: inline-flex;
}
.bcn-bcfg__grip:focus-visible {
  outline: var(--focus-ring-width, 2px) solid var(--focus-ring-color);
  outline-offset: var(--focus-ring-offset, 2px);
}
.bcn-bcfg__colname {
  flex: 1;
  min-inline-size: 0;
}
.bcn-bcfg__n {
  color: var(--color-content-default-secondary);
  text-align: end;
  min-inline-size: 2ch;
}
.bcn-bcfg__move {
  border-block-start: 1px solid var(--color-border-default-subtle);
  margin-block-start: var(--spacing-150);
  padding-block-start: var(--spacing-200);
}
.bcn-bcfg__board {
  gap: var(--spacing-200);
  grid-auto-columns: minmax(136px, 1fr);
  grid-auto-flow: column;
  align-items: start;
  padding-block-end: var(--spacing-200);
  display: grid;
  overflow-x: auto;
}
.bcn-bcfg__pcol {
  gap: var(--spacing-150);
  padding: var(--spacing-200);
  background: var(--color-background-default);
  border: 1px solid var(--color-border-default-subtle);
  border-radius: var(--radius-200);
  flex-direction: column;
  min-inline-size: 0;
  display: flex;
}
.bcn-bcfg__pcol[data-new] {
  border-style: dashed;
  border-color: var(--color-background-brand);
}
.bcn-bcfg__phead {
  align-items: center;
  gap: var(--spacing-150);
  display: flex;
}
.bcn-bcfg__pname {
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-bcfg__pcount {
  color: var(--color-content-default-secondary);
  margin-inline-start: auto;
}
.bcn-bcfg__plist {
  gap: var(--spacing-100);
  flex-direction: column;
  display: flex;
}
.bcn-bcfg__stub {
  padding: var(--spacing-150) var(--spacing-200);
  background: var(--color-background-elevation-raised);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-100);
  color: var(--color-content-default);
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.bcn-bcfg__more {
  color: var(--color-content-default-secondary);
  padding-inline: var(--spacing-200);
}
.bcn-bcfg [hidden] {
  display: none;
}
.bcn-bcfg__foot {
  inline-size: 100%;
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
.bcn-ev-staging__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-ev-targets__title .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
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
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
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
.typography-body-sm {
  font-family: var(--typography-body-sm-font-family);
  font-size: var(--typography-body-sm-font-size);
  font-weight: var(--typography-body-sm-font-weight);
  line-height: var(--typography-body-sm-line-height);
  letter-spacing: var(--typography-body-sm-letter-spacing);
}
.typography-label-sm-strong {
  font-family: var(--typography-label-sm-strong-font-family);
  font-size: var(--typography-label-sm-strong-font-size);
  font-weight: var(--typography-label-sm-strong-font-weight);
  line-height: var(--typography-label-sm-strong-line-height);
  letter-spacing: var(--typography-label-sm-strong-letter-spacing);
}
.typography-label-md-strong {
  font-family: var(--typography-label-md-strong-font-family);
  font-size: var(--typography-label-md-strong-font-size);
  font-weight: var(--typography-label-md-strong-font-weight);
  line-height: var(--typography-label-md-strong-line-height);
  letter-spacing: var(--typography-label-md-strong-letter-spacing);
}
.typography-microcopy-xs {
  font-family: var(--typography-microcopy-xs-font-family);
  font-size: var(--typography-microcopy-xs-font-size);
  font-weight: var(--typography-microcopy-xs-font-weight);
  line-height: var(--typography-microcopy-xs-line-height);
  letter-spacing: var(--typography-microcopy-xs-letter-spacing);
}
.typography-microcopy-xs-subtle {
  font-family: var(--typography-microcopy-xs-subtle-font-family);
  font-size: var(--typography-microcopy-xs-subtle-font-size);
  font-weight: var(--typography-microcopy-xs-subtle-font-weight);
  line-height: var(--typography-microcopy-xs-subtle-line-height);
  letter-spacing: var(--typography-microcopy-xs-subtle-letter-spacing);
}
.typography-microcopy-xs-strong {
  font-family: var(--typography-microcopy-xs-strong-font-family);
  font-size: var(--typography-microcopy-xs-strong-font-size);
  font-weight: var(--typography-microcopy-xs-strong-font-weight);
  line-height: var(--typography-microcopy-xs-strong-line-height);
  letter-spacing: var(--typography-microcopy-xs-strong-letter-spacing);
}
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
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
.esa-collapsible__summary .esa-icon {
  color: var(--color-content-default-secondary, #646464);
  flex-shrink: 0;
}
.bcn-key-value__key .esa-icon {
  color: var(--color-content-default-tertiary);
}
.breadcrumbs__items .esa-icon {
  color: var(--bcn-gray-400);
}
.page-layout__title h1 .esa-icon {
  color: var(--page-title-icon-color, var(--bcn-gray-1000));
  flex-shrink: 0;
}
.stack {
  --gap: var(--spacing-400, 1rem);
  gap: var(--gap);
  flex-direction: column;
  display: flex;
}
.stack[data-split] > [data-split] {
  margin-block-end: auto;
}
.cluster {
  --gap: var(--spacing-300, 0.75rem);
  --align: center;
  --justify: flex-start;
  gap: var(--gap);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-wrap: wrap;
  display: flex;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon-button {
  width: 26px;
  height: 26px;
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
}
```

## Tokens
- `--animation-spin`: .75s linear infinite _(semantic)_
- `--bcn-gray-1000`: #000 _(component)_
- `--bcn-gray-400`: #989898 _(component)_
- `--bcn-gray-500`: #7c7c7c _(component)_
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
- `--color-background-default`: #fafafa _(semantic)_
- `--color-background-elevation-raised`: #fcfcfc _(semantic)_
- `--color-background-elevation-sunken`: #efefef _(semantic)_
- `--color-background-utility-danger`: #ce2c31 _(semantic)_
- `--color-background-utility-danger-hover`: #641723 _(semantic)_
- `--color-background-utility-info`: #228be6 _(semantic)_
- `--color-background-utility-info-hover`: #113264 _(semantic)_
- `--color-background-utility-success`: #2e7571 _(semantic)_
- `--color-background-utility-success-hover`: #193b2d _(semantic)_
- `--color-background-utility-warning`: #f59e0b _(semantic)_
- `--color-background-utility-warning-hover`: #ffba18 _(semantic)_
- `--color-border-default`: #dcdcdc _(semantic)_
- `--color-border-default-strong`: #bdbdbd _(semantic)_
- `--color-border-default-subtle`: #efefef _(semantic)_
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
- `--elevation-2`: 0 2px 12px 0 #0000000a _(semantic)_
- `--focus-ring-color`: #3e9b4f _(component)_
- `--focus-ring-offset`: 2px _(component)_
- `--focus-ring-width`: 2px _(component)_
- `--icon-size-lg`: 24px _(primitive)_
- `--icon-size-md`: 20px _(primitive)_
- `--icon-size-sm`: 16px _(primitive)_
- `--icon-size-xl`: 28px _(primitive)_
- `--icon-size-xs`: 14px _(primitive)_
- `--radius-100`: .25rem _(primitive)_
- `--radius-200`: .5rem _(primitive)_
- `--spacing-100`: .25rem _(primitive)_
- `--spacing-150`: .375rem _(primitive)_
- `--spacing-200`: .5rem _(primitive)_
- `--spacing-250`: .625rem _(primitive)_
- `--spacing-300`: .75rem _(primitive)_
- `--spacing-400`: 1rem _(primitive)_
- `--spacing-500`: 1.5rem _(primitive)_
- `--transition-fast`: .15s ease _(semantic)_
- `--typography-body-sm-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-body-sm-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-body-sm-font-weight`: 350 _(semantic)_
- `--typography-body-sm-letter-spacing`: .01em _(semantic)_
- `--typography-body-sm-line-height`: 1.6 _(semantic)_
- `--typography-label-md-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-md-strong-font-size`: clamp(.75rem, .66rem + .44vw, .9375rem) _(semantic)_
- `--typography-label-md-strong-font-weight`: 550 _(semantic)_
- `--typography-label-md-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-md-strong-line-height`: 1.6 _(semantic)_
- `--typography-label-sm-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-label-sm-strong-font-size`: clamp(.6875rem, .61rem + .38vw, .875rem) _(semantic)_
- `--typography-label-sm-strong-font-weight`: 550 _(semantic)_
- `--typography-label-sm-strong-letter-spacing`: .01em _(semantic)_
- `--typography-label-sm-strong-line-height`: 1.6 _(semantic)_
- `--typography-microcopy-xs-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-font-weight`: 500 _(semantic)_
- `--typography-microcopy-xs-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-strong-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-strong-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-strong-font-weight`: 550 _(semantic)_
- `--typography-microcopy-xs-strong-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-strong-line-height`: 1 _(semantic)_
- `--typography-microcopy-xs-subtle-font-family`: "DM Sans", sans-serif _(semantic)_
- `--typography-microcopy-xs-subtle-font-size`: clamp(.625rem, .56rem + .32vw, .75rem) _(semantic)_
- `--typography-microcopy-xs-subtle-font-weight`: 350 _(semantic)_
- `--typography-microcopy-xs-subtle-letter-spacing`: .01em _(semantic)_
- `--typography-microcopy-xs-subtle-line-height`: 1 _(semantic)_
