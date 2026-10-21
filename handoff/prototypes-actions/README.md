# Actions

Source prototype: https://esassoc.github.io/beacon-design/prototypes/actions/

The redesign of Compliance Tracking as Actions: one card per action implementation on a Kanban board whose columns each project defines per action type (Plans move Drafting, Internal Review, Submitted to Agency, Agency Comments, Approved), every column mapped to Not Started, In Progress or Completed. Configure board edits the workflows beside a live preview. Board, Table and Timeline views share one filter bar; the component switcher sits beside the H1; cards open the implementation dialog ported from prod.

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

| Section | What it is | Spec | Screenshots |
|---|---|---|---|
| Title + component switcher | The H1 "Actions" (radar glyph in brand green) with the component switcher beside it, and Configure board, a small outline button, at the right of the title row. | [title-component-switcher.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/title-component-switcher.md) 29 KB | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/title-component-switcher.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/title-component-switcher.phone.png) |
| Component list | The open switcher: every component on the project, each with its seal, the current one tinted and checked. | [component-list.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/component-list.md) 12 KB | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/component-list.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/component-list.phone.png) |
| Filter bar | One control strip over all three views. | [filter-bar.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/filter-bar.md) 24 KB | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/filter-bar.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/filter-bar.phone.png) |
| Board | The Kanban. | [board.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/board.md) 52 KB in 3 files | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/board.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/board.phone.png) |
| Action card | One implementation: commitment ids (BcnCommitmentBadge, plus a +N for more) and a flag; the action name on up to two lines; type, phase and occurrence; the wor… | [action-card.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/action-card.md) 14 KB | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/action-card.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/action-card.phone.png) |
| Configure board | The column editor, on the geometry of Jamie's monitoring configure dialog: a live board preview on the left, options on the right. | [configure-board.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/configure-board.md) 43 KB | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/configure-board.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/configure-board.phone.png) |
| Implementation dialog | Prod's action-implementation upsert dialog, ported as-is: summary, referenced requirements, reference files and evidence of compliance on the left; Details (st… | [implementation-dialog.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/implementation-dialog.md) 95 KB in 3 files | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/implementation-dialog.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/implementation-dialog.phone.png) |
| Table | The same filtered implementations as an AG Grid: one row per implementation with its action, type, commitment, status, phase, assignee, frequency, due date and… | [table.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/table.md) 127 KB in 5 files | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/table.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/table.phone.png) |
| Timeline | Due dates on a month axis, grouped by status, for the same filtered set. | [timeline.md](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/timeline.md) 29 KB | [desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/timeline.desktop.png) · [phone](https://esassoc.github.io/beacon-design/handoff/prototypes-actions/claude/timeline.phone.png) |
