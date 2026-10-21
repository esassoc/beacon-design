# Board

Actions · source prototype: https://esassoc.github.io/beacon-design/prototypes/actions/

![Board, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/board.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/board.phone.png

The Kanban. All actions is the merged board: one column per backbone category (Not Started, In Progress, Completed). A workflow tab shows that workflow's own columns (Plans: Not Started, Drafting, Internal Review, Submitted to Agency, Agency Comments, Approved) and only the types it covers.

## Key decisions

- One card per action implementation. Prod's action card with nested "#1 Not Started" implementation rows is gone (Andy, 2026-10-06).
- Columns are equal and full height to the viewport floor, each scrolling its own cards, so an empty column is as big a drop target as a full one.
- Columns are a lighter grey than the sunken surface with an edge a step darker than the fill.
- Drag is pointer-based: lift past 4px, the card follows the pointer, the column under it lights up, release commits, Escape flies it home. A drop changes the column only; order inside a column is the sort.
- On the merged board a drop lands in the first column of that category in the card's own workflow.

## Gotchas

- A drop must write both the workflow column and its backbone status, so rollups and the API keep one meaning of done.
- Keyboard users move a card from the dialog's Status field; the drag has no keyboard path.

## Done when

- Dragging a Plan card from Drafting to Approved marks it Completed everywhere.
- Each column header shows its count, and the counts follow filters and drops.

## Components

- `bcn-aboard` (spoke) · `src/components/bcn/BcnActionBoard.astro`
- `bcn-acard` (spoke) · `src/components/bcn/BcnActionCard.astro`
- `bcn-cbadge` (spoke) · `src/components/bcn/BcnCommitmentBadge.astro`
- `bcn-status-chip` (spoke) · `src/components/bcn/BcnActionTable.astro`
- `esa-avatar` (hub) · `packages/ecology/src/components/esa-avatar.astro`
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`

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

## Markup and styles

_55 repeated elements are collapsed in the markup below; the comments say where._

- [board.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/board.markup.md) (32 KB)
- [board.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/board.styles.md) (12 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--avatar-bg` | `hsl(200 45% 65%)` | component |
| `--avatar-font-size-md` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | component |
| `--avatar-font-size-xs` | `clamp(.5rem, .44rem + .3vw, .625rem)` | component |
| `--avatar-size-md` | `40px` | component |
| `--avatar-size-xs` | `20px` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-muted` | `#eef5f4` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-commitment` | `#58508d` | component |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-utility-danger` | `#ce2c31` | semantic |
| `--elevation-1` | `0 1px 4px 0 #00000008` | semantic |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--font-size-050` | `clamp(.5rem, .44rem + .3vw, .625rem)` | primitive |
| `--font-size-100` | `clamp(.625rem, .56rem + .32vw, .75rem)` | primitive |
| `--font-size-200` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | primitive |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-full` | `9999px` | primitive |
| `--radius-pill` | `9999px` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--typography-body-sm-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-sm-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-body-sm-font-weight` | `400` | semantic |
| `--typography-body-sm-letter-spacing` | `.01em` | semantic |
| `--typography-body-sm-line-height` | `1.6` | semantic |
| `--typography-font-family-mono` | `"Roboto Mono", ui-monospace, monospace` | semantic |
| `--typography-font-family-sans` | `"DM Sans", sans-serif` | semantic |
| `--typography-font-weight-bold` | `650` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-font-weight-semibold` | `550` | semantic |
| `--typography-label-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-label-2xs-strong-font-weight` | `550` | semantic |
| `--typography-label-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-2xs-strong-line-height` | `1.6` | semantic |
| `--typography-label-md-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-md-strong-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-label-md-strong-font-weight` | `550` | semantic |
| `--typography-label-md-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-md-strong-line-height` | `1.6` | semantic |
