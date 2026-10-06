// Handoff spec for one response (/prototypes/comments/response?id=r-04). Authored
// counterpart to the auto-derived capture; consumed only by scripts/gen-handoff.mjs.
// r-04 is the demo response: 21 comments, none accepted, two open internal notes.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Number and pager',
      selector: '.page-layout__utilities',
      intent: 'The H1 is the response\'s title (title case) with its number (R-004) trailing as a neutral badge; the breadcrumbs end in the number. Upper right, the record pager: Previous, Contents, Next, through responses in the Responses tab\'s order (drafts, then accepted, each by most comments answered).',
      decisions: [
        'Numbers: submissions S-018, comments C-018.001 (submission.passage, in reading order), responses R-004. Display numbers for the prototype; the build decides how they are stored.',
        'The pager walks the Responses tab order. Between Previous and Next, a contents button opens a side panel (esa-side-dialog) of every response: status mark, number, name, then its status in words and its first topic (+N, named on hover). A status filter (esa-button-toggle: All / Draft / Accepted, each with its count) heads the list; the current response is marked; [ and ] step from the keyboard.',
      ],
      acceptance: ['R-004 opens with Previous disabled (it answers the most comments) and Next on the following draft.', 'Filtering the contents panel to Accepted lists only accepted responses.'],
    },
    {
      label: 'Rewrite with Aldo',
      selector: '[data-response-aldo]',
      intent: 'The whole-letter rewrite: the green Aldo bar opens a composer whose field takes references. "@" picks from the Response Library (past ESA responses, anonymized), "#" picks one of the comments this response answers by its comment number (C-018.001). Send replaces the letter with Aldo\'s draft in one undoable step; the bar then reads "Aldo rewrote the response from N references" with Undo.',
      decisions: [
        'References are chips in the prompt, not attachments: the person writes the ask and points at sources in the same sentence.',
        'While Aldo works the composer shimmers and locks; when the draft lands, every block he wrote anew is washed in his tint, which fades over about three seconds.',
        'Nothing is saved by a rewrite. Save (or ⌘S) is the only write; the rail shows Unsaved changes until then.',
      ],
      gotchas: [
        'The prototype runs no model: the draft alternates between two prebuilt texts, quotes each "#" comment where the letter answers it and adds a lead paragraph from each "@" library response. "shorter" / "concise" keeps first sentences.',
        'The reference menu hangs off <body>; a pick there must not close the composer (the composer ignores pointerdown inside .bcn-slash).',
      ],
      acceptance: ['Sending with one @ and one # reference adds the quoted comment and a library paragraph; Undo restores the previous letter exactly.'],
    },
    {
      label: 'Block editor',
      selector: '[data-response-editor]',
      intent: 'The letter of response in a TipTap block editor modeled on WordPress\'s: paragraphs, headings 2 to 4, bullet and numbered lists, quote, callout, separator. "/" opens the inserter (blocks, then the Response Library); the + at an empty line opens the same inserter with a search field. The block toolbar sits over the selected block: type switcher, move up / down, Bold / Italic, Options (add before / after, duplicate, delete).',
      decisions: [
        'Text editing and block insertion only: none of WordPress\'s layout features (columns, groups beyond the callout, alignment).',
        'Selecting text raises a small bubble under it: Bold, Italic, Note and Rewrite with Aldo. Both open bcn-note-composer under the selection, which stays tinted while you write. Aldo ("shorter", "plainer", "warmer"…) rewrites only the selection; the bubble then offers Undo or Keep.',
        'Aldo shows he is working and what he changed: after Send the composer locks, a shimmer runs along its foot, "Aldo is revising…" replaces the shortcut hint, his mark turns, and the held text shimmers in his tint. About a second later the new text replaces the selection washed in his tint, which fades out (about 3s). Reduced motion: no shimmer or fade, a short hold, a still tint.',
        'The Response Library is inserted as text (its paragraphs), not as a linked block.',
        'Link was left out of the toolbar; a pasted https address links itself.',
      ],
      gotchas: [
        'Ported in part from beacon-dashboard (BpDoc, BpBlockToolbar, editor/callout). The toolbar\'s controls are esa-button and esa-dropdown-menu rendered at build time with their glyphs swapped at runtime.',
        'The prototype runs no model. r-04\'s ten sentences each carry a prewritten shorter, plainer and warmer rewrite (src/data/aldo-rewrites.ts): a selection of whole r-04 sentences is rewritten from them. Anything else falls back to rules: shorter keeps the first sentence, plainer and more formal swap phrasing, warmer leads with an acknowledgement. Sentences are matched whole, not split on periods ("5 a.m.").',
        'Alt+F10 moves focus into the block toolbar; Esc returns it to the text.',
      ],
      acceptance: [
        'Typing "/callout" + Enter on an empty line inserts a callout.',
        'Selecting r-04\'s first two sentences and asking Aldo for "warmer" shows the working state, then lands the prewritten warmer text, which fades from Aldo\'s tint; ⌘Z or Undo restores it.',
      ],
    },
    {
      label: 'Internal notes',
      selector: '[data-response-notes]',
      intent: 'Notes the study team keeps on the draft, set as footnotes under the letter after a short footnote rule. A note is made on selected text (the bubble\'s Note); the passage is highlighted yellow and ends in a superior figure. Each note is a slim card: a neutral number badge, the passage in the letter\'s italic and the same highlight, a fold toggle, then the thread set in under the passage (avatar, a meta line of who · when, the note), then the card footer with Reply and Resolve (secondary soft buttons, readable on the sunken footer). Each note folds to its passage and a one-line summary; Expand All / Collapse All head the list. Resolved notes fold into "Resolved (n)", lose their highlight and number, and can be reopened.',
      decisions: [
        'Notes are internal and never part of the published response.',
        'One composer (bcn-note-composer) writes every note, reply and Aldo ask, and the two kinds read apart without a wash: a person gets a squared neutral card, their avatar, the passage in the yellow note highlight and a worded Add Note / Reply button; Aldo gets his rounded card, a green border and ring, his mark and green title, the passage on his tint, and his round green send. ⌘Enter submits, Esc cancels.',
        'No Aldo on notes (Andy, 2026-10-06): a note is between people. Aldo rewrites from the selection bubble or the letter\'s Aldo bar.',
        'Numbers are quiet neutral badges (esa-badge re-pointed), never colored; the yellow is for passages only. Meta is small sans (author semibold, a 13px time); the note itself is body text.',
        'Numbers follow reading order and renumber as the letter changes; a note whose text was deleted keeps its thread without a number.',
        'The passage in a card selects its span in the letter; hovering a card lights the span; clicking a noted span brings its card into view.',
      ],
      gotchas: [
        'The note mark (span[data-note]) lives in the document; the threads live in the store. Seeded notes are placed on their quote when the letter loads.',
        'The cards are built at runtime from <template>s holding real legos (esa-card, esa-badge, esa-avatar, esa-button); the composer is one instance moved into the card being written in.',
      ],
      acceptance: [
        'r-04 opens with two numbered notes. Adding one between them renumbers to 1, 2, 3; resolving one renumbers the rest.',
      ],
    },
    {
      label: 'Rail',
      selector: '[data-response-rail]',
      intent: 'Details (Status, Topic, Comments, Submissions, Saved) as label-left rows, with a card footer of Accept Response (primary) and Save (secondary soft: a light fill and strong border, so it reads as a button on the sunken footer; always enabled, Saved says whether there is anything to save). Below, every comment the response answers, grouped by submission, by passage number, swatch, subtopic and state.',
      decisions: [
        'Accepting plans every linked comment at once, with one-step Undo. Whole-response accept only.',
        'A comment row does not leave the page: it opens the comment panel.',
      ],
      acceptance: ['Accept on r-04 marks its 21 comments planned; Undo restores them.'],
    },
    {
      label: 'Comment panel',
      selector: '[data-rr-panel]',
      apply: [{ click: '[data-rr-comments] [data-cid]' }],
      intent: 'A side panel over the response page for one comment it answers. Its title, "Comment C-018.001" with an external-link glyph, is the one way out: a link to the submission with that comment open. Below: who sent it (S-018) and when, the passage highlighted in its paragraph, and its topics. Previous / Next (and J / K) step through the list; Quote in Response puts the passage into the letter as a quote.',
      decisions: ['Read only: refiling and response links are edited on the submission page.'],
    },
    {
      label: 'Drafted from',
      selector: '[data-drafted-from]',
      intent: 'The two or three past ESA responses the draft drew on, anonymized to the kind of study and region, each opening in place to its full text.',
      decisions: ['Read only. The Response Library is a separate admin feature, outside this module.', 'Native <details>: esa-collapsible has no room for the source and date under its title.'],
    },
  ],
};
