# Configure board

Actions · source prototype: https://esassoc.github.io/beacon-design/prototypes/actions/

![Configure board, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/configure-board.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/configure-board.phone.png

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

## Components

- `bcn-bcfg` (spoke) · `src/components/bcn/BcnBoardConfigDialog.astro`
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-checkbox-group` (hub) · `packages/ecology/src/components/esa-checkbox-group.ts`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-select` (hub) · `packages/ecology/src/components/esa-select.ts`
- `esa-switch-toggle` (hub) · `packages/ecology/src/components/esa-switch-toggle.ts`
- `esa-text-field` (hub) · `packages/ecology/src/components/esa-text-field.ts`

## Data

- Fixture: `src/data/action-tracking.ts`
- Client store: `src/lib/action-board.ts`
- category is prod's ActionImplementationStatusDtoEnum.

| Field | Meaning |
|---|---|
| `id` | ActionImplementationID, `<actionId>|<componentId>` |
| `name` | Action name |
| `type` | RequirementType; the Type tabs group these into workflows |
| `codes` | ClientCommitmentIDs, in code order (the card's commitment badges) |
| `sequence` | SequenceNumber, the occurrence for recurring and as-needed work |
| `dueDate` | ISO, or null when unscheduled (prod "Not set") |
| `completedDate` | ISO, Completed only |
| `columnId` | The workflow column the card sits in |
| `category` | The status backbone the column maps to |
| `notApplicable` | IsNotApplicable; the N/A switch hides these |
| `evidence` | Evidence count on the card |
| `comments` | Comment count; hidden at zero |

`category`: `NotStarted` · `InProgress` · `Completed`

`frequency`: `Onetime` · `Recurring` · `AsNeeded` · `Ongoing`

## Markup

_28 repeated elements are collapsed in the markup below; the comments say where._

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
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount="">4</span></span
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
          <!-- …and 2 more like this (<div class="bcn-bcfg__stub typography-body-sm">) -->
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
          ><span class="bcn-bcfg__pcount typography-body-sm" data-bcfg-pcount="">1</span></span
        >
        <div class="bcn-bcfg__plist" data-bcfg-plist="">
          <div class="bcn-bcfg__stub typography-body-sm" title="Develop Predation Study Plan">
            Develop Predation Study Plan
          </div>
        </div>
      </div>
      <!-- …and 4 more like this (<div class="bcn-bcfg__pcol">) -->
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
        ><span class="bcn-bcfg__dot" style="background: var(--bcn-status-not-started)"></span
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
                <!-- …and 4 more like this (<circle>) -->
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="Not Started column name"
            ></esa-text-field
            ><span class="bcn-bcfg__n typography-body-sm" data-bcfg-n="" title="4 on this component"
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
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
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
        ><span class="bcn-bcfg__dot" style="background: var(--bcn-status-in-progress)"></span
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
                <!-- …and 4 more like this (<circle>) -->
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="In Progress column name"
            ></esa-text-field
            ><span class="bcn-bcfg__n typography-body-sm" data-bcfg-n="" title="1 on this component"
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
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
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
                <!-- …and 4 more like this (<circle>) -->
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="In Progress column name"
            ></esa-text-field
            ><span class="bcn-bcfg__n typography-body-sm" data-bcfg-n="" title="1 on this component"
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
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Keep column</span>
                  </button></span
                ></span
              ></span
            >
          </div>
        </div>
        <!-- …and 2 more like this (<div class="bcn-bcfg__bar">) -->
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
        ><span class="bcn-bcfg__dot" style="background: var(--bcn-status-completed)"></span
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
                <!-- …and 4 more like this (<circle>) -->
              </svg></button
            ><esa-text-field
              class="bcn-bcfg__colname"
              data-bcfg-colname="true"
              size="sm"
              aria-label="Completed column name"
            ></esa-text-field
            ><span class="bcn-bcfg__n typography-body-sm" data-bcfg-n="" title="4 on this component"
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
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
                    <span class="esa-button__label">Delete and move</span>
                  </button></span
                ></span
              ><span data-bcfg-move-cancel=""
                ><span
                  class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
                  ><button class="esa-button__native typography-microcopy-xs" type="button">
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
      ><!-- …and 4 more like this (<esa-switch-toggle>) -->
    </div>
    <span data-bcfg-restore=""
      ><span class="esa-button esa-button--variant-ghost esa-button--appearance-fill esa-button--sm"
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
@media (width<=900px) {
  .bcn-bcfg {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (width<=900px) {
  .bcn-bcfg__options {
    border-inline-start: 0;
    border-block-start: 1px solid var(--color-border-default);
  }
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
.bcn-bcfg [hidden] {
  display: none;
}
.bcn-search-trigger .esa-icon {
  color: var(--color-content-default-tertiary);
  flex: none;
}
.bcn-help-bar__tooltip .esa-button__label {
  line-height: 0;
  display: inline-flex;
}
.bcn-aldo-msg__tools .esa-button__native:hover:not(:disabled) {
  color: var(--bcn-aldo-600);
}
.bcn-aldo-composer__send[data-empty] .esa-button__native {
  cursor: not-allowed;
}
.bcn-admin-btn,
.bcn-admin-btn .esa-button {
  display: inline-flex;
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
.esa-button--sm {
  --_btn-pad-y: var(--spacing-250, 0.625rem);
  --_btn-padding-x: var(--spacing-250, 0.625rem);
  --_btn-radius: var(--button-radius-sm, 4px);
}
.esa-button--variant-danger {
  --_accent: var(--color-background-utility-danger);
  --_accent-hover: var(--color-background-utility-danger-hover);
  --_accent-text: var(--color-content-utility-danger);
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
.esa-button__label {
  white-space: nowrap;
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
.bcn-component-picker__trigger > .esa-icon {
  color: var(--color-content-default-tertiary);
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
.bcn-disc__head .esa-icon {
  color: var(--color-content-default-secondary);
  flex-shrink: 0;
}
.bcn-disc__actions .esa-icon {
  width: 15px;
  height: 15px;
}
.bcn-evidence-card__lead .esa-icon {
  color: var(--color-content-default-tertiary);
  flex-shrink: 0;
  transition: transform 0.15s;
}
.bcn-evidence-card.is-expanded .bcn-evidence-card__lead .esa-icon {
  transform: rotate(90deg);
}
.bcn-evidence-card__actions .esa-icon {
  width: 15px;
  height: 15px;
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
```

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
