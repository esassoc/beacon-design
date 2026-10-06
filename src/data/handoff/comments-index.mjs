// Handoff spec for the Comments period page (/prototypes/comments), the authored
// counterpart to the auto-derived capture. Consumed only by scripts/gen-handoff.mjs.
//
// Context: a Planning module for public comment response (shaping brief:
// docs/comments-brief.md). One comment period owns every submission and response. The
// fixture is src/data/comments.ts; working state is src/components/bcn/comments-store.ts.

/** @type {{ sections: import('./obligation-feed.mjs').HandoffSection[] }} */
export default {
  sections: [
    {
      label: 'Period facts + burn-down',
      selector: '[data-comment-period]',
      intent: 'This page IS one comment period: its name is the H1. Under it, one small card: Opens, Closes and Response format as compact label / value pairs with a leading glyph (bcn-key-value size sm), and two meters that FILL as work gets done: "N of 84 comments planned" and "N of 29 submissions reviewed", each over its own bar.',
      decisions: [
        'No period switcher on the page. Choosing another period happens on an index of periods outside this prototype; the breadcrumb names the level above.',
        'Progress is stated in the affirmative and fills toward full, not a count draining to zero. Two meters because the two figures have different totals.',
        'Hovering or focusing the comments meter opens a breakdown by topic (esa-popover): dot, name, "N of M", and a bar filled in the topic\'s ink. The summary bar stays one color: seven hues in a 4px bar read as noise and most segments would be slivers.',
        'esa-card clips overflow with no hook, so this card overrides it to let the popover hang below (logged in docs/system-improvement-ledger.md).',
        'A comment is PLANNED once a person accepts the response it points at. A parser-proposed link does not count.',
        'A submission is REVIEWED once a person has accepted a response for, or changed, at least one of its comments. It is the same fact as the inbox\'s unread mark, inverted.',
        'Response format belongs to the period: summary rolls many comments up to one response; letter answers each submission.',
      ],
      acceptance: ['Opening state reads 12 of 84 planned and 9 of 29 reviewed.', 'Accepting the 21-comment response fills them to 33 and 20; the same meters on the response page stay in step.'],
    },
    {
      label: 'Inbox',
      selector: '[data-inbox]',
      intent: 'Every submission as a mail-style inbox grouped by month: unread mark, number, submitter, the opening of the text, its topics as overlapping dots, and the date. Tabs (esa-tab-layout with icons): Inbox and Topic index (the Lists view-tab pattern; ?view=topic keeps the choice).',
      decisions: [
        'Dots overlap by half, each ringed in the row surface: the two most commented topics, then a small "+N" chip in the same stack. Hovering or focusing the stack opens a legend (esa-popover) of EVERY topic in the submission with its comment count.',
        'The list does not clip overflow, so the legend can hang out of the first row; the end rows round their own corners.',
        'Read state works like mail: a submission not yet reviewed carries a brand dot in the gutter; reviewed rows go quiet in secondary ink. No per-row comment counts.',
        'The opening of the submission is the row\'s content, set a step heavier (medium) than body text.',
        'Topic color = hue family, subtopic = shade, from --bcn-topic-* in theme-beacon.css via the shared bcn-comment-topics.css.',
      ],
      acceptance: ['After accepting a response, its submissions lose the unread dot and go quiet.'],
    },
    {
      label: 'Topic Index',
      selector: '[data-by-topic]',
      apply: [{ clickText: ['[data-inbox-tabs]', 'Topic Index', 'tab'] }, { click: '[data-cbt-toggle="noise-frequency"]' }],
      intent: 'The topic hierarchy, drawn like the Compliance Index: one panel of 13px rows, TOPIC › SUBTOPIC › COMMENT. Topics stay open; subtopics fold. A comment row points at its submission (number and submitter, linking to it with that comment open), then a one-line excerpt and its response. No column header and no counts.',
      decisions: [
        'No highlighted quotes here: color is a dot beside the topic (family ink) and the subtopic (its highlight shade, ringed in ink).',
        'The response cell carries its state as a file glyph: pen = draft response (planned once accepted), check = accepted (planned), minus = no response. The glyph has a tooltip; the title links to the response.',
        'Topic verbs: rename, delete, lock, add subtopic. Subtopic verbs: rename, delete, lock. Comment verbs: move to, duplicate to. Quiet verbs appear on row hover or focus, as on the registry tree; a lock stays visible while locked.',
        'Move and duplicate open ONE shared picker anchored under the verb: an esa-combobox (sm) with typeahead over every "Topic › Subtopic" plus Unfiled. Enter or click files it; Esc or a click outside closes and returns focus to the verb.',
        'Delete never loses a comment: its comments go to the Unfiled bucket at the bottom, keeping their response links. Every change offers one-step Undo instead of a confirm.',
        'Duplicate files the same passage a second time under another subtopic and links the response that filing\'s comments already use. In the submission reader the passage paints once, as its first filing.',
        'Guidance is given to Aldo through bcn-aldo-prompt: a green-washed bar that opens a floating composer (auto-growing textarea, the locked topics it will keep, a round send button, ⌘Enter). Sending holds for a beat (shimmer, turning mark), folds the card away and lands the change in view; the bar then reads "Aldo refiled N comments" with Undo. It is the compliance-index guidance + Re-run pattern: it refiles everything not locked in one step, Unfiled first. A locked topic or subtopic neither gives nor takes comments, and cannot be renamed or deleted until unlocked; the composer names what is locked, and says nothing when nothing is. Names a person set are kept.',
        'Renames and new subtopics reach the submission page\'s Topic select (comments-store holds the hierarchy).',
      ],
      gotchas: [
        'The prototype runs no model: Aldo\'s refiling is keyword-based (comments-store rerun) and moves 3 comments from the opening state. Production sends the guidance with the hierarchy and its locks.',
        'esa-popover could not host the composer (its anchor shrink-wraps the trigger and centres the panel), so bcn-aldo-prompt anchors its own card: Esc and outside click close it and keep the draft.',
        'Comment rows render only inside open branches, so a folded tree carries no menus.',
      ],
      acceptance: [
        'Deleting a subtopic moves its comments to Unfiled and Undo restores both.',
        'Locking a topic or subtopic hides its rename and delete; Aldo\'s refiling leaves its comments where they are.',
        'Duplicate to files a second copy under the chosen subtopic, which opens with the copy flashing.',
        'Moving a comment flashes it in its new subtopic, which opens.',
      ],
    },
    {
      label: 'Responses',
      selector: '[data-response-index]',
      apply: [{ clickText: ['[data-inbox-tabs]', 'Responses', 'tab'] }],
      intent: 'The third tab: every response in the period as a slim row, Drafts first, then Accepted. A row reads state glyph, number (R-004), title, and its topic, and opens the response page.',
      decisions: ['Same row anatomy as the inbox: one line, no excerpt, no actions in the row.', 'No comment or submission counts on the row (Andy, 2026-10-06); the response page\'s rail carries them.', 'Response titles are title case, as every label in the module is.', '?view=responses opens the tab directly (the response page\'s breadcrumb uses it).'],
      acceptance: ['R-004 Late Night Noise Limitation Program and Overnight Flights is listed under Drafts.'],
    },
  ],
};
