# Aldo

Step 1 — Source Documents · source prototype: https://esassoc.github.io/beacon-design/prototypes/setup-wizard-3-step/

![Aldo, desktop](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/aldo.desktop.png)

Phone width: https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/aldo.phone.png

The conversation that scopes, checks and steers the scan of the file in view, dense at 13px, with the composer always in view. The run's status is not here: it sits by the scan's controls. The run stops after its first three commitments; Aldo says what to check, then gives each commitment its own message: a lead (where it took the ID and name from, how far the text runs) and a card with the ID, name and quoted text (clamped, with Show all), a p. N button, Looks right and Fix. Fix opens the ID, name and text as fields, with Save and Redraw the box. Edit ID and name on the page toolbar opens the same fields for any commitment in a side panel, not in the conversation; Save is recorded there as an event line. Requirements, timing and parties are reviewed in step 2.

## Key decisions

- Open items: what waits on the person is listed with its answers until answered, behind an indicator in the panel's header (a count and "open items", or "Instructions (n)" when nothing waits) that opens it as a tray over the log; the indicator nods when a new item arrives and never opens on its own. Expanded on a wide window (1440 and up) the list is a sidebar beside the conversation instead (items: the check, a flagged reference with Dismiss / Keep it / Skip all cross-references, a headless passage with Merge / Keep separate, pages with nothing found with Mark on p. N / Nothing there, a drawn box with no ID). The log keeps the notice text; the buttons live only in the list.
- Confirming the last commitment of the check (Looks right, All look right, or saying so) goes on reading, Fast, or One at a time if that was chosen; the speed menu changes it. Before the check, the status reads "Stopping after 3 commitments for your check", never a pause.
- A question is answered and changes nothing; a message too short to act on gets its readings as buttons. Prod's structured call needs answer and unclear kinds.
- Instructions in effect, collapsed under the log with a count: the scope, each rule with the page it took effect from, each fix from the check.
- A scanned file (no text layer) shows Reading page images, p. N of M in its row, the status and Aldo's opening until OCR is done; nothing else starts before it.
- A check card is the ID, the name and the text, stacked. Timing, parties and the MMRP's columns are step 2's, not the card's.
- A paused run offers Review the N so far.
- Mark them myself (on the opening): the person draws each commitment; Aldo names what is inside each box. Status: "By hand. N marked."
- The check is the training step: what the person fixes there becomes an instruction for the rest of the file.
- Buttons carry meaning in their color: green to accept, red to remove (Dismiss), blue to change the record (Merge, Re-read), the primary for the next step, neutral otherwise. Only send is Aldo's green.
- A name fixed at the check is the commitment's name in step 2.
- One structured-output call per message returns actions and a one-line reply; sw3-steer.ts is the schema, with a pattern matcher standing in for the model.
- Each file keeps its own conversation; switching files switches the thread.
- The composer carries what rides along as chips above the field: the page in view and the selected commitment attach themselves (dashed, removable; a removed one stays off until the person moves), @ adds a commitment from a menu that filters as you type and writes its ID into the sentence, and a file is attached with the paperclip or dropped on the composer. Aldo reads a file as context for this document, never as a source of commitments. A sent message shows its chips under it; pressing one opens what it names.
- / at the start of the field lists the commands (scope, skip, rule, reread, why, pause, resume); each puts the start of a message in the field to finish.
- A reply comes in as it is written: three dots, then the words. While it does, send is Stop; Stop ends the reply where it is and marks it Stopped (in prod it cancels the call). The latest messages have hover keys beside Copy: Edit on the person's (takes the message back, and what it did, and puts it in the field with its chips) and Retry on Aldo's (asks again).
- Expand (beside the fold chevron) lays the conversation over the right of the window, under the top bar and over the help bar, for when talking to Aldo is the work: about half the window, or 60% with the Open items sidebar on a wide window (the sidebar folds away when nothing is open). Nothing under it moves. Any press that changes the record or opens something (an answer to an open item, Looks right, a page or commitment reference, a chip) docks it, so the person sees what happened. Dock, Esc or a click anywhere off the panel docks it too, mid-sentence drafts included (Esc closes an open tray first).
- A button pressed in the conversation (Looks right, Keep it, Dismiss, an answer to an open item) is recorded as a steer too, but shows as a quiet centered line saying what it did ("Confirmed COA 11.2"), never as a message the person wrote, and Aldo does not echo it; the card shows its new state. The time is in the line's tooltip.
- The scan's controls (Scan, Pause, Resume, speed) are recorded as steers, so the model sees a person slow it down, but the conversation shows each as one quiet centered line ("Set the speed to Fast on p. 132 at 7:14 PM"), with no bubble and no reply; only Scan gets Aldo's answer.

## Done when

- At the check, Open items reads "Check the first 3: 3 left." All look right, then Read the rest: the run goes on at Fast.
- When the run is done: Open items lists COA 11.32, the top of p. 156 and pp. 152 to 154; Keep it on 11.32 and Merge on p. 156 leave one, and the Library row reads "1 to settle."
- Type "why did you flag 11.32?": Aldo explains and the instructions are unchanged.
- On the MMRP, Mark them myself, then drag over MM AES-1a: Aldo reads it as MM AES-1a and the status reads "By hand. 1 marked."
- Fix COA 11.1, change its name, Save: the card reads Fixed, and step 2 shows the new name.
- Looks right on the other two, then Resume: the run goes on.
- Reload: every file's conversation and run are where they were.
- Type half a message, Expand: the panel takes the right of the window with the draft in it; press p. 146 in a message: the page beside it moves to p. 146; Esc: the panel is docked again with the draft.

## Components

- `bcn-aldo-composer` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-aldo-mark` (spoke) · `src/components/bcn/BcnHelpDot.astro`
- `bcn-aldo-msg` (spoke) · `src/components/bcn/BcnGuidanceDrawer.astro`
- `bcn-aldo-panel` (spoke) · `src/components/bcn/BcnListAldo.astro`
- `esa-badge` (hub) · `packages/ecology/src/components/esa-badge.astro` → use `ui-badge` in the Beacon app
- `esa-button` (hub) · `packages/ecology/src/components/esa-button.astro` → use `ui-button` in the Beacon app
- `esa-collapsible` (hub) · `packages/ecology/src/components/esa-collapsible.astro` → use `ui-collapsible` in the Beacon app
- `esa-icon` (hub) · `packages/ecology/src/components/esa-icon.astro`
- `esa-pill` (hub) · `packages/ecology/src/components/esa-pill.astro`
- `esa-textarea` (hub) · `packages/ecology/src/components/esa-textarea.ts`

## Markup and styles

_10 repeated elements are collapsed in the markup below; the comments say where._

- [aldo.markup.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/aldo.markup.md) (18 KB)
- [aldo.styles.md](https://esassoc.github.io/beacon-design/handoff/prototypes-setup-wizard-3-step/claude/aldo.styles.md) (42 KB)

## Tokens

| Token | Value | Tier |
|---|---|---|
| `--badge-bg` | `#fcfcfc` | component |
| `--badge-border-color` | `#dcdcdc` | component |
| `--badge-text-color` | `#525252` | component |
| `--bcn-aldo` | `#08908b` | component |
| `--bcn-aldo-100` | `#cfeceb` | component |
| `--bcn-aldo-50` | `#e8f6f5` | component |
| `--bcn-aldo-600` | `#06736f` | component |
| `--bcn-aldo-prompt-ring` | `#08908b8c` | component |
| `--bcn-aldo-prompt-shadow` | `0 1px 2px #1018200f, 0 10px 24px -6px #10182024, 0 28px 60px -18px #08908b61` | component |
| `--bcn-gray-100` | `#efefef` | component |
| `--bcn-gray-1000` | `#000` | component |
| `--bcn-gray-400` | `#989898` | component |
| `--bcn-gray-500` | `#7c7c7c` | component |
| `--bcn-gray-700` | `#525252` | component |
| `--bcn-gray-950` | `#292929` | component |
| `--border-width-default` | `1px` | semantic |
| `--button-chrome-bg-hover` | `color-mix(in srgb, currentColor 14%, transparent)` | component |
| `--button-radius-md` | `.25rem` | component |
| `--button-radius-sm` | `.25rem` | component |
| `--button-radius-xs` | `.25rem` | component |
| `--color-background-brand` | `#005862` | semantic |
| `--color-background-brand-hover` | `#00474f` | semantic |
| `--color-background-brand-muted` | `#fcfcfc` | semantic |
| `--color-background-brand-muted-hover` | `#efefef` | semantic |
| `--color-background-default` | `#fafafa` | semantic |
| `--color-background-elevation-raised` | `#fcfcfc` | semantic |
| `--color-background-elevation-sunken` | `#efefef` | semantic |
| `--color-background-overlay-heavy-hover` | `#0000001a` | semantic |
| `--color-background-utility-danger` | `#ce2c31` | semantic |
| `--color-background-utility-danger-hover` | `#641723` | semantic |
| `--color-background-utility-info` | `#228be6` | semantic |
| `--color-background-utility-info-hover` | `#113264` | semantic |
| `--color-background-utility-info-subtle` | `#fbfdff` | semantic |
| `--color-background-utility-success-hover` | `#193b2d` | semantic |
| `--color-background-utility-warning-hover` | `#ffba18` | semantic |
| `--color-background-utility-warning-muted` | `#fff7c2` | semantic |
| `--color-background-utility-warning-subtle` | `#fefdfb` | semantic |
| `--color-border-default` | `#dcdcdc` | semantic |
| `--color-border-default-strong` | `#bdbdbd` | semantic |
| `--color-border-default-subtle` | `#efefef` | semantic |
| `--color-border-utility-warning` | `#f3d673` | semantic |
| `--color-content-brand` | `#005862` | semantic |
| `--color-content-default` | `#3d3d3d` | semantic |
| `--color-content-default-knockout` | `#fcfcfc` | semantic |
| `--color-content-default-secondary` | `#525252` | semantic |
| `--color-content-default-tertiary` | `#656565` | semantic |
| `--color-content-on-brand-muted` | `#3d3d3d` | semantic |
| `--color-content-utility-info` | `#0d74ce` | semantic |
| `--color-content-utility-success` | `#218358` | semantic |
| `--color-content-utility-warning` | `#ab6400` | semantic |
| `--elevation-1` | `0 1px 4px 0 #00000008` | semantic |
| `--elevation-2` | `0 2px 12px 0 #0000000a` | semantic |
| `--elevation-4` | `0 6px 24px -6px #00000012` | semantic |
| `--elevation-5` | `0 8px 32px -8px #00000014` | semantic |
| `--focus-ring-color` | `#3e9b4f` | component |
| `--focus-ring-offset` | `2px` | component |
| `--focus-ring-width` | `2px` | component |
| `--icon-size-md` | `20px` | primitive |
| `--icon-size-sm` | `16px` | primitive |
| `--icon-size-xs` | `14px` | primitive |
| `--radius-100` | `.25rem` | primitive |
| `--radius-200` | `.5rem` | primitive |
| `--radius-300` | `.5rem` | primitive |
| `--radius-chip` | `.25rem` | semantic |
| `--radius-full` | `9999px` | primitive |
| `--radius-md` | `.25rem` | semantic |
| `--radius-pill` | `9999px` | semantic |
| `--radius-sm` | `.25rem` | semantic |
| `--spacing-100` | `.25rem` | primitive |
| `--spacing-150` | `.375rem` | primitive |
| `--spacing-200` | `.5rem` | primitive |
| `--spacing-250` | `.625rem` | primitive |
| `--spacing-300` | `.75rem` | primitive |
| `--spacing-400` | `1rem` | primitive |
| `--spacing-500` | `1.5rem` | primitive |
| `--spacing-600` | `2rem` | primitive |
| `--transition-fast` | `.15s ease` | semantic |
| `--typography-body-md-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-body-md-font-size` | `clamp(.75rem, .66rem + .44vw, .9375rem)` | semantic |
| `--typography-body-md-font-weight` | `400` | semantic |
| `--typography-body-md-letter-spacing` | `.01em` | semantic |
| `--typography-body-md-line-height` | `1.6` | semantic |
| `--typography-font-weight-medium` | `500` | semantic |
| `--typography-label-sm-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-label-sm-strong-font-size` | `clamp(.6875rem, .61rem + .38vw, .875rem)` | semantic |
| `--typography-label-sm-strong-font-weight` | `550` | semantic |
| `--typography-label-sm-strong-letter-spacing` | `.01em` | semantic |
| `--typography-label-sm-strong-line-height` | `1.6` | semantic |
| `--typography-microcopy-2xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-font-weight` | `500` | semantic |
| `--typography-microcopy-2xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-line-height` | `1` | semantic |
| `--typography-microcopy-2xs-strong-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-2xs-strong-font-size` | `clamp(.5rem, .44rem + .3vw, .625rem)` | semantic |
| `--typography-microcopy-2xs-strong-font-weight` | `550` | semantic |
| `--typography-microcopy-2xs-strong-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-2xs-strong-line-height` | `1` | semantic |
| `--typography-microcopy-xs-font-family` | `"DM Sans", sans-serif` | semantic |
| `--typography-microcopy-xs-font-size` | `clamp(.625rem, .56rem + .32vw, .75rem)` | semantic |
| `--typography-microcopy-xs-font-weight` | `500` | semantic |
| `--typography-microcopy-xs-letter-spacing` | `.01em` | semantic |
| `--typography-microcopy-xs-line-height` | `1` | semantic |
