// Handoff spec for one submission (/prototypes/comments/sub-18), the core screen of the
// Comments module. The authored counterpart to the auto-derived capture; consumed only
// by scripts/gen-handoff.mjs. The comment panel is reached with an `apply` recipe (click a
// highlight).
//
// Direction: 2026-10-05 first chose margin cards, one at a time, only on click. The same
// day Andy moved them into the standard slide-in side panel and the rail to the right.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Number and pager',
      selector: '.page-layout__utilities',
      intent: 'The H1 names the submitter with the submission\'s number (S-018) trailing as a neutral badge. Upper right, the record pager: Previous, Contents, Next, through submissions in the inbox\'s own order (newest first), so a reviewer works the queue without going back to the list.',
      decisions: [
        'Numbers: submissions S-018, comments C-018.001 (submission.passage, in reading order), responses R-004. Display numbers for the prototype; the build decides how they are stored.',
        'The pager walks the inbox order (newest first). Between Previous and Next, a contents button opens a side panel (esa-side-dialog) of every submission: status mark, number, name, then its status in words and its first topic (+N, named on hover). A status filter (esa-button-toggle: All / Not Reviewed / Reviewed, each with its count) heads the list; the current submission is marked; [ and ] step from the keyboard.',
      ],
      acceptance: ['The first and last submissions disable the button that has nowhere to go.', 'Filtering the contents panel to Reviewed lists only reviewed submissions; the counts on the filter add up to All.'],
    },
    {
      label: 'Rail',
      selector: '[data-submission-rail]',
      apply: [{ click: '[data-sr-item="c-048"]' }],
      intent: 'The submission\'s rail, right of the text, as the Lists page carries its details rail. Details: submitter, organization when there is one, city, received, channel. Comments: an outline of every highlighted passage in reading order: its number (C-018.003), the swatch and name of each subtopic it is filed under, its state (Planned, Draft, No Response) and its first two lines.',
      decisions: [
        'The outline and the text are one selection: click an item and its highlight activates, scrolls into view and opens the comment panel; click a highlight (or J / K) and the outline marks that item.',
        'Passages are numbered C-submission.passage in reading order (C-018.001, C-018.002 ...), the notation the panel titles itself with. Adding a passage before others renumbers the ones after it; stored numbers are for the build to decide.',
        'No planned count here: Andy found "0 of 3 planned" unclear; the state on each item carries it.',
        'The rail stays in view as the text scrolls (sticky).',
      ],
      gotchas: ['Scroll the outline list, never scrollIntoView an item: that also moves the page and cancels the scroll that brings the passage into view.'],
      acceptance: [
        'Click an outline item: the passage scrolls to the middle of the view, rings, and the panel opens on it; the item is marked.',
        'Click a highlight in the text: its outline item is marked.',
      ],
    },
    {
      label: 'Highlighted text',
      selector: '[data-submission-text]',
      intent: 'The submission in Beacon\'s document voice (Besley, body-lg) with each passage painted as a highlighter stroke: topic = hue family, subtopic = shade (a passage filed under several subtopics paints in its first). Hover underlines a passage in its family ink; the active one rings in it. Drag the grips at either end of the active passage to resize it; select free text to add one.',
      decisions: [
        'Highlight, not brackets, is the metaphor (brief). box-decoration-break: clone keeps each wrapped line a clean stroke.',
        'Offsets are derived from the comment\'s quote, never stored; a resized or added comment keeps a start hint only when its quote occurs twice.',
        'Resize snaps to whole words and stops at a paragraph break or the next passage. A new selection is trimmed to the free text the same way. Passages never overlap.',
        'Highlights are focusable; Enter opens the panel. J / K step through them in text order.',
      ],
      gotchas: [
        'Paint on the client from the working state; each paragraph carries its start offset (data-off) so a DOM point maps back to a text offset.',
        'During a drag, hide the grip from hit testing (pointer-events: none) before caretPositionFromPoint, or the grip finds itself.',
        'Open the panel for a selection AFTER the drag\'s click: opened on mouseup, the modal reads that click as outside it and light-dismisses at once.',
      ],
      acceptance: ['Dragging across free text opens the panel as New comment, and it stays open.', 'Selecting part of an existing passage does not create an overlapping one.'],
    },
    {
      label: 'Comment panel',
      selector: '[data-cp-panel]',
      apply: [{ click: 'mark[data-cid="c-045"]' }],
      intent: 'One passage in the standard slide-in side panel (esa-side-dialog), titled with its number: "Comment C-018.001". The passage in its highlight, then two groups of slim read-only cards. Topics: every "Topic › Subtopic" it is filed under, each with a remove; + opens a stacked picker. Responses: every response it is linked to, its state as a glyph (accepted = file-check, draft = file-pen-line), the title linking to the response, each with a remove; + offers Link a Response (the picker) or New Response. Footer: Previous / Next far left, Remove (danger outline) right, behind a confirm.',
      decisions: [
        'Several topics and several responses per passage (Andy, 2026-10-05). A topic filing is a comment over the same passage, the copy the topic index\'s Duplicate to makes, so the topic index and burn-down count it there; responses are shared by every filing of the passage.',
        'The picker is a second esa-side-dialog stacked over the panel; the panel steps back 30px (its --side-dialog-inset) while it is open. Search over a checklist, multi-select, Add. What the passage already has is checked and fixed.',
        'Removing the last topic files the passage under Unfiled; it stays on the record.',
        'Edits apply as they are made: no Save. Remove is guarded by esa-confirm-dialog (danger) and leaves "Comment removed" with Undo.',
        'New response is offered only for a filed passage: a new response is drafted from its filing.',
        'Closing the panel leaves the highlight active, so its end grips stay up for a resize.',
      ],
      gotchas: [
        'esa-side-dialog fires close only on a person\'s dismissal: restore the parent\'s inset yourself when Add / Cancel closes the picker.',
        'esa-checkbox names itself from aria-label; the row\'s text is not a <label> for it, so a row click sets checked itself.',
      ],
      acceptance: [
        'Add two topics in one pass: two cards appear, the outline lists both names, the topic index shows the passage under each.',
        'Link a response, then New response: three response cards; remove one: it unlinks from every filing.',
        'Remove: confirm, then "Comment removed" with Undo; Undo restores the passage with its topics and responses.',
        'Select text: the panel opens as New comment with the helper\'s topic and response as cards, editable before Add comment.',
      ],
    },
  ],
};
