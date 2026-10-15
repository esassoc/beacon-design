# Aldo conversation kit

A shared data model and a set of `bcn-aldo-*` pieces that every Aldo surface composes. Today four surfaces each build their own thread, bubble, composer and send button; the Setup Wizard also built cards, a needs list, a status, an instructions disclosure and choices that no other surface can reach. The kit moves those into one place, typed against the shape prod will serve (one SSE stream from `AIController`, one structured-output call per message), so a new Aldo surface is a manifest plus an adapter, not a fifth copy.

Parti: the job is a conversation that acts on a record. Completeness wins over hierarchy inside the thread (every turn, every action, kept and visible); hierarchy wins in the panel (one status, one list of what waits). Sacrificed: per-surface visual invention. Every Aldo surface rhymes exactly, and the only place a surface may differ is in what its actions do.

## 1. Inventory

Six places render Aldo. Four are conversations; two are composers with no thread.

| Surface | Files | Thread | Composer | Cards | Needs | Status | Instructions | Choices | Suggestions | Shell |
|---|---|---|---|---|---|---|---|---|---|---|
| Setup Wizard step 1 | `BcnSw3Aldo.astro`, `sw3-aldo.ts`, `sw3-steer.ts`, `sw3-store.ts`, rail in `BcnSw3Scan.astro` | yes | esa-textarea, Enter sends | check card, edit card | yes | esa-alert-box x3 | esa-collapsible | yes | yes | own section + rail |
| Help and Guidance drawer | `BcnGuidanceDrawer.astro`, `guidance-drawer.ts`, `BcnHelpBar.astro` | yes | owned `<textarea>`, Enter sends | no | no | no | no | no | article rows stand in | esa-side-dialog x2 |
| Comments response rewrite | `BcnResponseAldo.astro` over `BcnAldoPrompt.astro` | no | esa-textarea or TipTap, Cmd+Enter | no | no | result line + Undo | no | no | no | floating card over a bar |
| Comments note composer, aldo mode | `BcnNoteComposer.astro`, `note-composer.ts`, `response-editor/bubble.ts` | no | esa-textarea, Cmd+Enter | no | no | result in the bubble | no | no | no | card in flow |
| Setup Wizard actions band | `BcnSwAiPanel.astro` | no | owned `<textarea>` | no | no | no | no | no | scope chips | prod band port |
| Comments filing | `BcnCommentPanel.astro:214`, `bcn-comment-topics.css:76` | no | no | proposal cards | no | no | no | no | no | n/a |

What is duplicated, with the lines:

- **Message bubble.** `BcnSw3Aldo.astro:157-184` (`.bcn-sw3aldo__msg`, `__who`, `__text`; template at 91-98; filled by `sw3-aldo.ts:776-805`) and `BcnGuidanceDrawer.astro:353-402` (`.bcn-gd-msg*`, global; built by `guidance-drawer.ts:136-181`). Both paint Aldo on `--bcn-aldo-50` and right-align the person. They diverge on everything else: the wizard labels the speaker with a 12px "You, at p. 149" line and no avatar; the drawer puts a `BcnAldoMark` avatar on Aldo's turn and no label on either. Wizard bubbles are 13px at `--radius-200`; drawer bubbles are `--font-size-150` at `--radius-300`. The person's bubble is bordered default background in one and sunken in the other.
- **Composer.** Five builds. `BcnSw3Aldo.astro:78-89, 370-395` (esa-textarea, borderless, the shell carries the ring). `BcnGuidanceDrawer.astro:109-120, 256-305` (an owned textarea and an owned round button, with `autoGrow` at `guidance-drawer.ts:105-113`). `BcnAldoPrompt.astro:65-91, 277-357` (esa-textarea or TipTap, floating card). `BcnNoteComposer.astro:35, 82-94, 171-177` (esa-textarea, aldo mode). `BcnSwAiPanel.astro` (owned textarea, prod port). The drawer's header comment (`BcnGuidanceDrawer.astro:25-30`) argues esa-textarea cannot host an embedded send button; `BcnSw3Aldo.astro:370-395` does exactly that with `--form-border-width: 0` and a `:focus-within` shell. The drawer's owned textarea is a lookup miss.
- **Round Aldo-green send.** The same three-line token re-point (`--button-radius-*: 999px; --color-background-brand: var(--bcn-aldo); --color-background-brand-hover: var(--bcn-aldo-600)`) at `BcnSw3Aldo.astro:389-392`, `BcnAldoPrompt.astro:351-357`, `BcnNoteComposer.astro:171-177`. The drawer hand-rolls the button instead (`BcnGuidanceDrawer.astro:286-305`).
- **Focus ring on the shell.** `BcnSw3Aldo.astro:382` and `BcnAldoPrompt.astro:303-306` use a 2px `--bcn-aldo-prompt-ring` outline; `BcnNoteComposer.astro:93-94` the same; `BcnGuidanceDrawer.astro:266-269` uses a border-color change plus a 3px `--bcn-aldo-50` shadow. Two rings for one field.
- **Send key.** Enter sends in the two threads (`sw3-aldo.ts:162-167`, `guidance-drawer.ts:118-120`); Cmd+Enter sends in the two one-shot composers (`BcnAldoPrompt.astro:138-143`, `note-composer.ts`). This is a real distinction, not drift: a thread turn is one line, a one-shot prompt is a paragraph. The kit keeps it as a composer mode.
- **Button tone templates.** `BcnSw3Aldo.astro:99-116` renders five `<template>`s of esa-button (neutral, primary, success, danger soft, info soft); `sw3-aldo.ts:62-69, 129-135` picks one by `Tone`. The tone grammar is stated in the file header (`BcnSw3Aldo.astro:19-21`) and nowhere else in the repo.
- **Suggested vs confirmed.** The check card goes dashed until Looks right, then solid (`BcnSw3Aldo.astro:188-201`, `--color-border-default-strong` dashed). Comments draw the same grammar with `.bcn-proposal[data-suggested]` at `bcn-comment-topics.css:76-79`, in `--color-content-default-tertiary`. Same rule, two colors, two CSS homes.
- **Needs list.** `BcnSw3Aldo.astro:63-66, 257-316`, `sw3-aldo.ts:517-638`. The count at `BcnSw3Aldo.astro:277-287` is a hand-rolled pill; `esa-badge variant="warning" size="xs"` is the lego.
- **Status.** `BcnSw3Aldo.astro:68-74` (three esa-alert-box, one shown) painted by `sw3-aldo.ts:678-733`. `BcnAldoPrompt.astro:59-62` shows a result line with Undo: a status with an action, built differently.
- **Instructions in effect.** `BcnSw3Aldo.astro:56-60` plus `sw3-aldo.ts:641-670`. Wizard only; nothing to merge yet, but the shape (a line, and where it took effect from) is generic.
- **Choices for an unclear message.** `sw3-steer.ts:214-224` returns `choices` beside `actions`; `sw3-aldo.ts:510` renders them as neutral buttons on the reply, latest steer only. In the brief, `answer` and `unclear` are action kinds the prod call must return; today `unclear` is not a kind, it is a side field.
- **Suggestions.** `BcnSw3Aldo.astro:76`, `sw3-aldo.ts:735-747` (opening chips). The drawer's "On this page" rows (`BcnGuidanceDrawer.astro:65-72`) are the same thing with a target instead of a message. `BcnSwAiPanel` chips are a third shape.
- **Rail.** `BcnSw3Scan.astro:85-90, 150-175`: a vertical button with the mark, the name and a warning dot, fed by `sw3:needs`. The drawer has no rail; the help bar is its collapsed form. The wizard panel head (`BcnSw3Aldo.astro:45-52, 132-139`) and the drawer header (`BcnGuidanceDrawer.astro:48-51, 177-184`) are the same mark + title row at two sizes, one in Besley.
- **Card edit form.** The check's Fix (`sw3-aldo.ts:231-262`) and the page tools' Edit ID and name (`sw3-aldo.ts:354-405`) build the same three fields and Save/Cancel twice in one file.
- **Data.** The wizard has a real model: `Steer` (`sw3-store.ts:217-232`), `SteerAction` and `Interpretation` (`sw3-steer.ts:12-65`), `OpenItem` (`sw3-store.ts:1031-1037`). Comments have `Proposal = 'suggested' | 'confirmed'` and `ReviewStage` (`comments-types.ts:43-50`). The drawer has none: the DOM is the state and closing it empties the chat (`guidance-drawer.ts:219-222`). `BcnAldoPrompt` has an event contract (`aldo-prompt:submit`, `:result`, `:undo`, `:open`) and no record.

Density today: the wizard is on Andy's 13/12 rule; the drawer is at 14/16 with the hub's `medium` weight (450), which its own comment at `BcnGuidanceDrawer.astro:237` says reads too light. The wizard CSS carries literals the kit retires: `border-radius: 6px` (`:198`), `gap: 2px` (`:350`), `font-size: 0.78rem` (`:227`).

## 2. Data model

`src/data/aldo.ts`. Types first. The shape is prod's: a conversation is an append-only log of turns; a person's turn carries the one structured-output result that answered it; Aldo's own turns arrive as events on the stream. Everything a surface renders derives from this record. Nothing is stored twice.

```ts
// ── Who, where, what ────────────────────────────────────────────────────────

export type Speaker =
  | { kind: 'person'; id: string; name: string }
  | { kind: 'aldo' }
  | { kind: 'system' };            // Beacon itself: a job finished, a run paused by the server

/** How a turn was given. A button press is a turn like a typed one; an event is Aldo
 *  or Beacon speaking first. */
export type Via = 'typed' | 'button' | 'event';

/** What a conversation, turn or item is about. Every surface uses one of these;
 *  a surface may add its own kinds. */
export type Anchor =
  | { kind: 'page'; documentId: string; page: number }
  | { kind: 'passage'; documentId: string; page: number; charStart: number; charEnd: number }
  | { kind: 'entity'; entity: string; id: string }     // 'commitment' | 'response' | 'comment' | ...
  | { kind: 'route'; path: string }
  | { kind: 'selection'; entity: string; id: string; from: number; to: number };

export interface EntityRef { entity: string; id: string; label: string }

// ── The record ──────────────────────────────────────────────────────────────

export type AldoSurface = 'scan' | 'guidance' | 'response' | 'note' | 'actions';

export interface Conversation<A extends AldoAction = AldoAction> {
  id: string;
  surface: AldoSurface;
  /** What the whole conversation is about: a source file, a response, a route. */
  subject: EntityRef;
  createdAt: string;               // ISO
  createdBy: Speaker;
  turns: Turn<A>[];                // append-only
}

export interface Turn<A extends AldoAction = AldoAction> {
  id: string;
  at: string;                      // ISO. The prototype's run clock maps to this.
  by: Speaker;
  via: Via;
  /** What was said, or the label of the button pressed. */
  text: string;
  /** Where the person or the run was when it was said. */
  anchor?: Anchor;
  /** What Beacon did with it. Empty for a question, an unclear message, or Aldo's own turn. */
  actions: A[];
  /** Aldo's account, from the same structured-output call. Absent on Aldo's own turns:
   *  there `text` is what Aldo said. */
  reply?: Reply;
  /** Rich content Aldo attached to this turn: the check's cards, a draft. */
  cards?: Card[];
  /** A kind with its own layout. 'check' renders as lead + card; 'notice' is a raised item. */
  kind?: 'message' | 'check' | 'notice' | 'opening';
}

export interface Reply {
  text: string;
  /** An offer Aldo made with the reply, one click to take: "Re-read pp. 131-149". */
  offers?: ActionButton[];
}

// ── The structured-output contract ──────────────────────────────────────────
// One call per person turn. The model returns { actions, reply }. The two kinds every
// surface must support are `answer` (a question: nothing changes) and `unclear` (too
// short to act on: the readings, each a message the person can send as is).

export type CoreAction =
  | { kind: 'answer' }
  | { kind: 'unclear'; choices: Choice[] }
  | { kind: 'rule'; text: string }                       // an instruction for what follows
  | { kind: 'accept'; proposalId: string }               // Looks right, Confirm, Keep
  | { kind: 'reject'; proposalId: string }               // Dismiss, Remove
  | { kind: 'edit'; proposalId: string; patch: Record<string, string> }
  | { kind: 'open'; target: EntityRef };                 // show a record, an article, a page

export type AldoAction = CoreAction | { kind: string; [k: string]: unknown };

export interface Interpretation<A extends AldoAction = AldoAction> {
  actions: A[];
  reply: Reply;
}

/** A message the person can send as is. The one shape for suggestion chips and for the
 *  readings of an unclear message. */
export interface Choice { label: string; text: string }

// ── What Aldo proposes and a person settles ─────────────────────────────────

export type ProposalState = 'suggested' | 'confirmed' | 'rejected';

export interface Proposal<T = unknown> {
  id: string;
  /** What kind of thing: 'commitment' | 'topic' | 'assignee' | 'draft' | ... */
  kind: string;
  subject: EntityRef;
  value: T;
  state: ProposalState;
  proposedAt: string;
  /** The turn whose action settled it. Settling by edit confirms. */
  settledBy?: { turnId: string; by: Speaker; at: string };
}

/** What waits on a person: raised by a turn, answered by a turn. The thread keeps the
 *  record; the list is the work left. */
export interface OpenItem {
  id: string;
  kind: string;
  raisedBy: string;                // turn id
  raisedAt: string;
  text: string;
  anchor?: Anchor;
  /** The answers, each a recorded turn when pressed. */
  answers: ActionButton[];
  resolvedBy?: string;             // turn id
}

/** What governs what Aldo does next, and where it took effect from. */
export interface Instruction {
  id: string;
  kind: 'scope' | 'rule' | 'fix';
  text: string;
  from: Anchor | 'start';
  sourceTurn: string;
}

/** Where the work is. One per conversation at a time. */
export interface Status {
  tone: 'info' | 'warning' | 'success' | 'neutral';
  text: string;
  action?: ActionButton;
}

// ── Buttons ─────────────────────────────────────────────────────────────────

/** What a button does, in its color. The grammar every surface shares:
 *    primary  the next step               (Scan, Read the rest, Review commitments)
 *    success  accept what Aldo proposed   (Looks right, All look right, Confirm)
 *    danger   remove, soft                (Dismiss, Delete)
 *    info     change the record, soft     (Merge, Re-read, Mark on p. 152)
 *    neutral  everything else             (Keep, Fix, Show all, Cancel) */
export type Tone = 'primary' | 'success' | 'danger' | 'info' | 'neutral';

export interface ActionButton<A extends AldoAction = AldoAction> {
  label: string;
  tone?: Tone;                     // default neutral
  /** Pressed: either send a message as is, or record this action with this reply. */
  does: { say: string } | { act: A | A[]; reply: string } | { go: Anchor };
}

// ── A card ──────────────────────────────────────────────────────────────────

export interface Card {
  id: string;
  /** The record the card shows. Clicking the head opens it. */
  subject: EntityRef;
  badge?: string;                  // the ID chip: "11.1", "MM AES-1a"
  title: string;
  /** Verbatim text, quoted, clamped to four lines until Show all. */
  quote?: string;
  /** Field pairs under the quote: the MMRP's columns. EsaMetaPair shape, both parts required. */
  fields?: { label: string; value: string }[];
  /** Where it is: "p. 131", opens the anchor. */
  anchor?: Anchor;
  proposal?: Proposal;             // drives dashed vs solid
  actions: ActionButton[];
  /** Editable: the fields a person can change in place, and what Save records. */
  edit?: { fields: { key: string; label: string; value: string; multiline?: boolean }[]; save: ActionButton; extra?: ActionButton[] };
}
```

**Generic vs extended.** `Conversation`, `Turn`, `Reply`, `CoreAction`, `Choice`, `Proposal`, `OpenItem`, `Instruction`, `Status`, `Tone`, `ActionButton`, `Card`, `Anchor` are the kit. Each surface extends `AldoAction` and names its `Anchor` and `OpenItem.kind` values:

| Surface | Action kinds beyond core | Anchor | OpenItem kinds | Proposal kinds |
|---|---|---|---|---|
| scan | `start scope pause resume reread pace check go skip stop merge clear manual` (today's `SteerAction`; `dismiss` and `keep` become `reject` and `accept` on a find's proposal) | page | `check go false split gap mark` | commitment |
| guidance | none; `open` carries an article `EntityRef` | route | none | none |
| response | `replace` (a draft doc), `undo` | entity: response; selection | none | draft |
| note | `rewrite` (selection) | selection | none | draft |
| comments filing | none in the thread; proposals only | entity: passage, topic | none | topic, assignee, highlight |

Three changes to today's types fall out: `unclear` becomes an action kind carrying its choices (the brief asks for it; `sw3-steer.ts:214-224` has it as a side field); `Steer.offer` becomes `Reply.offers` as buttons, so a re-read offer is rendered like every other action; `comments-types.ts` `Proposal` (a string) is renamed `ProposalState` and the record type takes the name.

**As built (step 1 to 4).** `src/data/aldo.ts` follows this section with three changes the port needed:
- `Turn.offers`: Aldo's own turn can offer buttons (the opening's Scan, the run's Review commitments). Before this, only a reply could.
- `Card.where` (`{ label, go }`) replaces `Card.anchor`. The wizard's "p. 131" opens the commitment on its page, not just the page, so the label and the target are two things.
- `ActionButton.does` gains `{ run }`: a view-only effect that records nothing (Fix opens the form, Show all, Cancel). The `edit.save` of a card is `{ label, run(values) }`, so Save receives the fields.

`unclear` is now an action kind in `sw3-steer.ts`. Steers recorded before the change keep `choices` on the side, and the adapter reads either shape.

## 3. Components

Thirteen pieces. Each is Astro (compile-time markup and CSS), a controller (runtime, renders from data), or both. A single `src/components/bcn/aldo/` folder holds them; the folder is the kit.

**Runtime markup.** Messages, cards, needs rows, instruction lines, choices and action buttons are all produced at runtime from data. Two ways to produce them:

- *Template clones, centralized.* One Astro parts bin (`BcnAldoParts.astro`) renders every lego the kit clones at runtime exactly once, as `<template>`s: esa-button in the five tones and two sizes, esa-badge, `BcnCommitmentBadge`, `BcnAldoMark`, esa-text-field, esa-textarea. One typed module (`aldo-parts.ts`) clones from it: `button(btn)`, `badge(code)`, `mark(size)`, `field(spec)`. One keyed renderer (`aldo-thread.ts`) diffs `Turn[]` into the log the way `sw3-aldo.ts:752-819` does today, but once.
- *Lit elements.* `bcn-aldo-thread`, `bcn-aldo-message`, `bcn-aldo-card` as custom elements that take data properties and render declaratively. Clean reactivity (Lit's `repeat` replaces the hand-written `els` and `sig` maps), usable from any host including an Angular shell, and the hub's own runtime legos are Lit, so the dependency is already in the graph.

**Recommendation: template clones, centralized.** The deciding constraint is that esa-button, esa-badge and esa-icon-button are `.astro` only. A Lit message that renders its own buttons either hand-rolls them (the bug CLAUDE.md names) or waits on a Lit esa-button in the hub. Shadow DOM would also cut the kit off from the spoke's scoped CSS and from `BcnAldoMark`. The cost of template clones is an imperative keyed renderer we maintain ourselves; it already exists and works, and the kit shrinks it to one copy. The hub ask that would reopen the Lit path is logged in section 6. The data model is the same either way, so the choice is reversible at the component layer.

**Density, one block.** The panel declares private weights once and every piece reads them. The hub's `--typography-font-weight-medium` resolves to 450, below Andy's floor, so the kit does not read it.

```css
.bcn-aldo-panel {
  --_aldo-text: 0.8125rem;        /* 13px: body, card titles, list text */
  --_aldo-meta: 0.75rem;          /* 12px: who, from, fields, counts */
  --_aldo-weight-body: 400;
  --_aldo-weight-meta: 500;       /* meta, menus, field labels: never 350 */
  --_aldo-weight-strong: 600;     /* titles, counts, Needs you */
  --_aldo-radius: var(--radius-200);
  --_aldo-radius-sm: var(--radius-100);
}
```

**Tokens.** Every color is a semantic token (`--color-content-*`, `--color-border-*`, `--color-background-*`, `--color-background-utility-*`) or an Aldo brand token (`--bcn-aldo`, `-50`, `-100`, `-600`, `--bcn-aldo-prompt-shadow`, `-ring`, `-wash`, `-shimmer`). The raw `--bcn-gray-*` ramp is never read. No literal px, rem or hex outside the density block; spacing is `--spacing-*`.

### The pieces

**bcn-aldo-panel** (Astro). The shell: header, body in a fixed order, a collapse rail.
- Props: `title` (default "Aldo"), `collapsible` (renders the rail), `rail` (`'left' | 'right'`), `glow` (the Aldo shadow and `--bcn-aldo-100` border, default on).
- Slots: `thread`, `needs`, `instructions`, `status`, `suggestions`, `composer`. Order is fixed in the shell; a surface omits what it does not use.
- Events: `aldo:collapse`, `aldo:expand` on the root. Attribute `data-aldo="open" | "closed"` on the host for the grid to read, as `BcnSw3Scan` does now.
- Composes: `BcnAldoMark size="sm"`, esa-button `variant="chrome" iconOnly` for collapse, esa-badge `dot` for the rail's waiting mark (replaces the hand-rolled dot at `BcnSw3Scan.astro:168-175`).
- States: open, closed (rail only), waiting (dot on the rail from the needs count).
- Inside an esa-side-dialog (the drawer) the panel renders without its own border and glow (`glow={false}`), the dialog's header slot takes the mark + title.

**bcn-aldo-thread** (Astro shell + `aldo-thread.ts`). The log.
- Props: none at compile time. Runtime: `mount(root, { turns: () => Turn[], parts })` returns `{ render(), scrollTo(turnId), scrollToEnd() }`.
- Renders each `Turn` as a `bcn-aldo-message`; a `kind: 'check'` turn as lead + `bcn-aldo-card`; a person's turn with a `reply` as two messages (you, Aldo).
- Keyed by `turn.id`; re-renders a message only when its signature (text, action labels, card signature) changes. Scroll rules move here from `sw3-aldo.ts:770-813`: a person's own turn and its reply always come into view; otherwise stay put unless already near the bottom; a `scrollTo` for the check.
- `aria-live="polite"` on the list.

**bcn-aldo-message** (template in the parts bin + renderer). One turn.
- Data: `Turn`. Attributes set by the renderer: `data-from="you" | "aldo" | "system"`, `data-via="button"`, `data-kind`.
- Layout: a 12px who line (name, and the anchor when there is one: "You, at p. 149"), the text bubble, an extra slot (cards), an action row. Aldo's bubble on `--bcn-aldo-50`; the person's on `--color-background-default` with a `--color-border-default-subtle` border, right-aligned; a button press renders as a quiet line with no bubble; a system turn centered, meta weight, no bubble.
- No avatar in the bubble row. The mark is in the panel header once; the drawer's per-turn avatar goes.
- States: entering (220ms rise, off under reduced motion).

**bcn-aldo-card** (template + renderer). The lead and the card: a record Aldo read, for a person to check or edit.
- Data: `Card`, with the lead text on the owning `Turn.text`.
- Layout: head button (badge + title, opens the subject), quote (Besley, `--color-background-elevation-sunken`, clamped to four lines, Show all past 320 chars), fields as a `<dl>` of pairs, a foot with the anchor button ("p. 131") left and the actions right. Editing: the fields as `esa-text-field size="sm"` and `esa-textarea size="sm" rows="5"`, then Save (primary) and the extras (Redraw the box, Cancel).
- Composes: `BcnCommitmentBadge size="sm"` (or esa-badge for non-commitment subjects), esa-button, esa-text-field, esa-textarea.
- States: `suggested` (1px dashed `--color-content-default-tertiary`, the comments module's color; the wizard moves to it), `confirmed` (solid `--color-border-default-subtle`, with a 12px "Read right" or "Fixed" mark in `--color-content-utility-success`), `editing`.
- This one piece replaces the check card, the edit card and the comments proposal card chrome.

**bcn-aldo-actions** (renderer). A row of buttons from `ActionButton[]`.
- Clones esa-button `size="xs"` by tone: neutral `variant="secondary"`, primary `variant="primary"`, success `variant="success"`, danger `variant="danger" appearance="soft"`, info `variant="info" appearance="soft"`. Never Aldo green: the send button is the only green control.
- `does.say` sends through the composer's send path, so the turn is `via: 'button'`; `does.act` records; `does.go` dispatches `aldo:go` with the anchor for the host.
- Wraps and gaps at `--spacing-150`; hidden when empty. Suggestions and choices are this piece bound to `Choice[]` with tone neutral.

**bcn-aldo-status** (Astro + renderer). Where the work is, pinned above the composer.
- Props: none at compile time; the Astro half renders four esa-alert-box variants (`info`, `warning`, `success`, and a neutral one built from `info` with the icon color re-pointed), one shown. Runtime: `setStatus(status: Status | null)`.
- The optional `action` renders as a `bcn-aldo-actions` row under the box (Review so far; Undo).
- 13px, `--spacing-150 --spacing-250` padding, 16px icon. Hidden when null.

**bcn-aldo-needs** (Astro + renderer). What waits on a person.
- Props: `title` (default "Needs you"). Runtime: `setItems(items: OpenItem[])`, newest first.
- Head: title at strong weight and esa-badge `variant="warning" size="xs"` with the count. Rows: the text as a button when the item has an anchor (opens it), the answers as `bcn-aldo-actions`. Capped at 13rem, scrolls, so the composer stays in view.
- Emits `aldo:needs { count }` when the count changes; the panel's rail dot reads it.
- States: empty (hidden), one or more.

**bcn-aldo-instructions** (Astro + renderer). What governs the read.
- Astro: esa-collapsible `title="Instructions in effect" flush`, closed. Runtime: `setInstructions(list: Instruction[])`; the title carries the count.
- Lines: a 12px meta prefix for `from` ("Scope.", "From p. 150.", "From the check.") then the text at 13px. Hidden until there is more than the scope alone.

**bcn-aldo-composer** (Astro + `aldo-composer.ts`). Where a person speaks.
- Props: `mode` (`'thread' | 'card' | 'bar'`), `placeholder` (an example, never an instruction), `label`, `rich` (TipTap with `@` and `#` references, from `response-editor`), `rows`, `maxRows`.
- Slots: `suggestions` (a `bcn-aldo-actions` row above the field), `context` (card mode: the one line of what Aldo will respect).
- Composes: esa-textarea (borderless, `--form-border-width: 0`, the shell carries the `--bcn-aldo-prompt-ring` outline on `:focus-within`), esa-button `iconOnly icon="arrow-up"` re-pointed to a round Aldo-green control, esa-button `chrome` close in card mode, `BcnAldoMark` in card and bar modes.
- Events on the root: `aldo:send { text, refs }`, `aldo:open`, `aldo:close`, `aldo:undo`. Runtime: `setResult(text | null)` (bar mode shows it with Undo), `setBusy(on)` (shimmer, mark animates, field locks).
- Keys: `thread` sends on Enter, Shift+Enter is a new line; `card` and `bar` send on Cmd/Ctrl+Enter and show the key hint. Esc closes a card and keeps the draft.
- States: empty (send disabled), ready, busy, closed bar with result.
- Replaces `BcnAldoPrompt` (card + bar modes), the drawer's owned textarea, the wizard composer, and `BcnNoteComposer`'s aldo mode (card mode, inline).

**bcn-aldo-suggestions** (renderer). `bcn-aldo-actions` bound to `Choice[]`, tone neutral, rendered in the composer's `suggestions` slot. Only before the first turn, unless a surface says otherwise. The drawer's "On this page" rows become suggestions whose `does` is `{ go: article }`.

**bcn-aldo-choices** (renderer). The readings of an `unclear` action, from `Turn.actions`, on the reply message only while that turn is the latest. Same renderer as suggestions; named separately because the data source differs and the rule about which turn shows them is the kit's, not the surface's.

**bcn-aldo-mark** (Astro, exists). Unchanged. Moves into the folder.

**bcn-aldo-parts** (Astro) and **aldo-parts.ts**. The parts bin and its typed cloner, described above. Rendered once per page by the panel; every runtime piece takes `parts` as an argument and never calls `document.createElement` for a lego.

Status strings, lead sentences and replies stay in the surface's adapter. The kit renders text; it writes none.

## 4. Composition

One manifest per surface. The adapter is the only new file a surface writes.

**Setup Wizard step 1** (`BcnSw3Aldo.astro` becomes a manifest; `sw3-aldo.ts` becomes `sw3-aldo-adapter.ts`).
```
bcn-aldo-panel collapsible rail="right"
  thread        bcn-aldo-thread          turns: sw3 opening + steers + notices + check + edit, as Turn[]
  instructions  bcn-aldo-instructions    scope, rules(), fixes as Instruction[]
  needs         bcn-aldo-needs           openItems() as OpenItem[] with their ActionButtons
  status        bcn-aldo-status          paintStatus() logic returns a Status
  composer      bcn-aldo-composer mode="thread" placeholder="Tell Aldo what to read, skip or fix"
    suggestions bcn-aldo-suggestions     proposal.suggest as Choice[]
```
The adapter maps `sw3-store` to kit data and routes `aldo:go` to `sw3:page`, `sw3:find`, `sw3:mark`, `sw3:edit`. The rail in `BcnSw3Scan.astro` goes; the panel owns it.

**Help and Guidance drawer** (`BcnGuidanceDrawer.astro`).
```
esa-side-dialog                          header slot: bcn-aldo-mark md + title (Besley)
  bcn-aldo-panel glow={false}
    thread      bcn-aldo-thread          turn 0: Aldo's opening (route context), kind 'opening'
                                           with cards: You are here (fields), On this page, Terms as suggestions
                                           then Q&A turns; a reply's article links are ActionButtons { go: article }
    composer    bcn-aldo-composer mode="thread" placeholder from ALDO_CHAT
esa-side-dialog (article reader, unchanged)
```
The article row pool and the hidden bodies stay as they are; only the message system and composer move to the kit. The conversation gets an id and lives in memory per route; closing the drawer no longer destroys it, it hides it.

**Comments response rewrite** (`BcnResponseAldo.astro`).
```
bcn-aldo-composer mode="bar" rich heading="Rewrite with Aldo" placeholder="e.g. Answer #C-018.001 directly, in the tone of @Use of DNL"
  context: "@ the Response Library, # one of N comments"
```
The adapter listens for `aldo:send`, dispatches `response:replace`, calls `setResult`, handles `aldo:undo`. Each send is a `Turn` on a `Conversation` whose subject is the response, with a `replace` action and a `draft` proposal; the editor's "washed in his tint" blocks are that proposal's `suggested` state until a person edits them.

**Comments note composer, aldo mode** (`BcnNoteComposer.astro`).
```
bcn-aldo-composer mode="card" inline placeholder="What should change: shorter, plainer, name the process"
```
Note and reply modes stay in `BcnNoteComposer`; its aldo mode is deleted and the bubble mounts the kit composer instead. The selection is the turn's `Anchor`.

**Setup Wizard actions band** (`BcnSwAiPanel.astro`): composes `bcn-aldo-composer mode="card"` with its scope chips in the `context` slot, inside its own prod-ported disclosure header. Lowest priority; it is a faithful port of a prod band and may simply be retired when step 3 changes.

## 5. Migration

Ordered. Each step ships on its own and leaves every page working.

1. **Types.** Write `src/data/aldo.ts` (section 2). Add `sw3-steer.ts`'s `SteerAction` as the scan extension; move `choices` into an `unclear` action; turn `offer` into `Reply.offers`. Rename `comments-types.ts` `Proposal` to `ProposalState` with a deprecated alias. No UI change. Run `bun check`.
2. **Parts bin and renderers.** `BcnAldoParts.astro`, `aldo-parts.ts`, `aldo-thread.ts` with `bcn-aldo-message`, `bcn-aldo-card`, `bcn-aldo-actions`. Lift the code from `sw3-aldo.ts:129-147` (button, badge, elx), `:220-298` (card), `:354-405` (edit form, merged into the card's `edit`), `:752-819` (keyed render). The CSS at `BcnSw3Aldo.astro:156-253, 346-356` moves to the kit, literals replaced by the density block.
3. **Panel, status, needs, instructions, composer.** `BcnAldoPanel.astro`, `BcnAldoStatus.astro`, `BcnAldoNeeds.astro`, `BcnAldoInstructions.astro`, `BcnAldoComposer.astro` + `aldo-composer.ts`. Lift from `BcnSw3Aldo.astro:45-89, 119-139, 254-345, 357-395` and `sw3-aldo.ts:516-747`. The needs count becomes esa-badge. The rail moves in from `BcnSw3Scan.astro:85-90, 150-175`.
4. **Port the Setup Wizard.** `BcnSw3Aldo.astro` becomes the manifest in section 4; `sw3-aldo.ts` becomes the adapter: `turns()`, `items()`, `instructions()`, `status()`, `suggestions()` over `sw3-store`, plus the four `sw3:*` dispatches. Delete every `<template>` and every style rule from `BcnSw3Aldo.astro`. Walk the demo path in `docs/setup-wizard-3-step-brief.md` before and after. This is the step that proves the kit; nothing else starts until it is green.
5. **Port the drawer.** Replace `.bcn-gd-msg*` (`BcnGuidanceDrawer.astro:353-402`), the owned composer (`:109-120, 256-305`) and `appendUser`/`appendAldo` (`guidance-drawer.ts:136-181`) with the panel, thread and composer. Rank and the article reader stay. The intro becomes a `kind: 'opening'` turn. Delete the avatar template (`:125`).
6. **Port the one-shot composers.** `BcnAldoPrompt.astro` is replaced by `bcn-aldo-composer mode="bar"`; `BcnResponseAldo.astro` keeps its adapter script and swaps the import. `BcnNoteComposer`'s aldo mode (`:82-94, 145-150, 171-219`; `note-composer.ts:63-85`) is deleted and `bubble.ts` mounts the kit composer for `compose('aldo')`. Delete `BcnAldoPrompt.astro`.
7. **Unify the proposal grammar.** The wizard card reads `.bcn-proposal[data-suggested]` from `bcn-comment-topics.css:76-79`, which moves to the kit's CSS as `bcn-aldo-card[data-state="suggested"]`; comments import it from there.
8. **Band.** `BcnSwAiPanel` composes the composer or is retired.

What is deleted: five button templates, two bubble systems, four composers, two send-button re-points, two focus rings, one hand-rolled count pill, one hand-rolled rail dot, one owned textarea with its autoGrow, the duplicated edit form, and `BcnAldoPrompt.astro`.

Risks:
- **Scoped CSS reach.** Runtime-cloned nodes do not get Astro's scoped styles unless the rules are `:global()` or the kit's CSS is a plain stylesheet. The kit ships `src/styles/bcn-aldo.css` imported by the panel, not scoped `<style>` blocks. (The memory note on Astro scoped CSS and innerHTML applies.)
- **Scroll behavior.** The wizard's three scroll rules and the drawer's scroll inside the dialog's shadow `.body` are easy to lose in a shared renderer. `aldo-thread.ts` takes a `scroller` element; the drawer passes the shadow body.
- **The check's clock.** Wizard turns are ordered by run time, not wall time (`sw3-aldo.ts:764-768`); the adapter maps run time into `Turn.at` so ordering is one rule in the kit.
- **Handoff bundles.** `public/handoff/prototypes-setup-wizard-*` carry the old class names and are regenerated after step 4, not edited.
- **The hook.** `check-component-first` will challenge the parts bin's `<template>`s; the `bcn-lego-checked` claim is that every template IS a lego render, cloned because the legos are compile-time.
- **The second esa-side-dialog.** The drawer's card-stack inset re-point (`guidance-drawer.ts:13, 90`) is untouched; the panel must not set `--side-dialog-inset`.

## 6. Hub promotion

Promote when brand-neutral and wanted by a second spoke. Keep `bcn-` while Aldo-branded.

Promote (candidates, in order of value):
1. **`esa-composer`**: esa-textarea with an embedded trailing control slot, a shell that carries the focus ring, auto-grow with an inner scroll at max, Enter vs Cmd+Enter as a mode. Four spokes-worth of hand-rolling in one repo says the gap is real. Hub ask.
2. **`esa-button` as a Lit element** (or a documented runtime factory). Every runtime-rendered action in any spoke clones a template today. This is the ask that would let the kit's runtime pieces become Lit later.
3. **`esa-open-items`**: a list with a count badge, each row a line plus an action set. The needs list minus the name. cb-fish's review flows have the same shape.
4. **The tone grammar** as documentation in esa-button's header (primary next step, success accept, danger soft remove, info soft change, neutral otherwise). A convention, not a lego.
5. **`esa-chat-thread`** and `esa-message`: only once prod's AI chat has a thread UI the hub would have to match. Not yet.

Stay `bcn-`: `bcn-aldo-mark`, `bcn-aldo-panel` (the glow, the border, the rail dot are Aldo's presence), the composer's round green send and `--bcn-aldo-prompt-*` tokens, the proposal dashed/solid grammar (keep until a second spoke needs "suggested vs confirmed"; then promote as `esa-proposal` state attributes), status and instructions (they are esa-alert-box and esa-collapsible with Aldo copy; nothing to promote).

## 7. Open questions

1. **Avatar or label.** The kit drops the per-turn mark (drawer) for a 12px who line (wizard). Is the mark in the header once enough for the app-wide drawer, where Aldo is the whole identity of the surface?
2. **Does the drawer keep its conversation.** Today closing it empties the chat. With a `Conversation` per route it could persist for the session. Keep, or is forgetting the point?
3. **One structured-output schema or one per surface.** Section 2 gives prod one `CoreAction` set plus a per-surface extension. Does Stewart want one response format with a discriminator, or a format per endpoint?
4. **Proposal confirms by edit.** The comments rule (any edit confirms) is adopted for the check card. On the MMRP, a person who fixes one column of a row has confirmed the row. Right?
5. **Lit later.** If the hub ships a runtime esa-button, do the kit's runtime pieces move to Lit, or is the keyed renderer good enough for prototypes whose production target is Angular?
