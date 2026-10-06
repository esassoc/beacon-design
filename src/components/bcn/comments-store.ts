// comments-store — the Comments prototype's working state, shared by every Comments page.
//
// The fixture (src/data/comments.ts) is the opening state. Every edit a reviewer makes
// (reclassify, resize, remove, add, relink, new response, accept, redraft) lands here,
// persists to sessionStorage so it survives moving between pages, and announces itself
// with `comments:change` on document. `?reset` in any Comments URL restores the fixture.
//
// The topic hierarchy lives here too, so renames, deletions, locks and new subtopics
// reach every page. Deleting a topic or subtopic moves its comments to Unfiled (the
// `unfiled` pseudo-topic), never off the record.
//
// The burn-down is derived, never stored:
//   unplanned  comments whose link a person has not accepted
//   untouched  submissions where nobody has accepted or edited anything yet
//
// One-step undo: every mutation snapshots the state before it, and undo() restores that
// one snapshot. Enough for "Accept 21 · Undo" and "Removed · Undo"; no history.
import { COMMENTS, RESPONSE_NOTES, RESPONSES, SUBMISSIONS, TOPICS } from '../../data/comments';
import { submissionNoFor } from '../../data/comments-nav';
import type { Comment, Response, ResponseNote, Subtopic, Topic, TopicFamily } from '../../data/comments-types';

/** A comment as the client holds it: `at` is where its quote starts in the submission
 *  text when the quote occurs more than once. Offsets stay derived (indexOf) otherwise. */
export interface LiveComment extends Comment {
  at?: number;
  /** Filed by a person (added by selection), not by the parser. */
  manual?: boolean;
  /** Responses linked beyond `responseId` (Andy, 2026-10-05: a passage can answer to
   *  several responses). responsesOf() is the one way to read the whole set. */
  more?: string[];
}

export interface LiveResponse extends Response {
  /** Created by a reviewer from a comment in this session. */
  created?: boolean;
  /** The edited document (TipTap JSON) once a person saves it; `body` keeps its
   *  paragraphs as plain text for every surface that reads text. */
  doc?: unknown;
  /** When it was last saved (ISO). */
  savedAt?: string;
}

/** A subtopic as the client holds it. A locked one keeps its comments through Re-run. */
export interface LiveSubtopic extends Subtopic {
  locked?: boolean;
}

/** A topic as the client holds it. Locked topics keep their comments through Re-run. */
export interface LiveTopic extends Omit<Topic, 'family' | 'subtopics'> {
  family: TopicFamily | 'none';
  subtopics: LiveSubtopic[];
  locked?: boolean;
}

export interface CommentsState {
  comments: LiveComment[];
  responses: LiveResponse[];
  topics: LiveTopic[];
  /** Submissions a reviewer has edited by hand. */
  edited: string[];
  /** Internal notes on response drafts (optional: states stored before notes had none). */
  notes?: ResponseNote[];
  seq: number;
}

const KEY = 'bcn-comments-v4';
const UNDO_KEY = 'bcn-comments-v4-undo';

/** Where deleted topics' comments go. Not a topic: it has no family and no response. */
export const UNFILED = 'unfiled';
const UNFILED_TOPIC: LiveTopic = { id: UNFILED, name: 'Unfiled', family: 'none', subtopics: [{ id: UNFILED, name: 'Unfiled' }] };

const fresh = (): CommentsState => ({
  comments: structuredClone(COMMENTS),
  responses: structuredClone(RESPONSES),
  topics: structuredClone(TOPICS),
  edited: [],
  notes: structuredClone(RESPONSE_NOTES),
  seq: 0,
});

const read = (key: string): CommentsState | null => {
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as CommentsState) : null;
  } catch {
    return null;
  }
};

const write = (key: string, s: CommentsState | null) => {
  try {
    if (s) sessionStorage.setItem(key, JSON.stringify(s));
    else sessionStorage.removeItem(key);
  } catch {
    /* private mode: state lives for this page only */
  }
};

if (new URLSearchParams(location.search).has('reset')) {
  write(KEY, null);
  write(UNDO_KEY, null);
}

let state: CommentsState = read(KEY) ?? fresh();

export const getState = () => state;

export type ChangeKind =
  | 'reclassify' | 'resize' | 'remove' | 'add' | 'link' | 'new-response'
  | 'accept' | 'redraft' | 'undo'
  | 'rename' | 'lock' | 'delete-topic' | 'add-subtopic' | 'duplicate' | 'rerun' | 'note';

export interface ChangeDetail {
  kind: ChangeKind;
  commentId?: string;
  responseId?: string;
  /** Comments planned by this change (accept), or refiled by it (rerun). */
  cleared?: number;
  topicId?: string;
}

const commit = (detail: ChangeDetail, mutate: (s: CommentsState) => void) => {
  write(UNDO_KEY, state);
  const next = structuredClone(state);
  mutate(next);
  state = next;
  write(KEY, state);
  document.dispatchEvent(new CustomEvent<ChangeDetail>('comments:change', { detail }));
};

export const canUndo = () => read(UNDO_KEY) !== null;

export const undo = () => {
  const prev = read(UNDO_KEY);
  if (!prev) return;
  state = prev;
  write(KEY, state);
  write(UNDO_KEY, null);
  document.dispatchEvent(new CustomEvent<ChangeDetail>('comments:change', { detail: { kind: 'undo' } }));
};

// ---- lookups ------------------------------------------------------------------------

/** The response a response page is about: ?id=, else r-04 (the demo's 21-comment one). */
export const currentResponseId = () => new URLSearchParams(location.search).get('id') ?? 'r-04';

/** Every topic, in order. Unfiled is not among them. */
export const topics = () => state.topics;

export const topicOf = (id: string): LiveTopic =>
  id === UNFILED ? UNFILED_TOPIC : (state.topics.find((t) => t.id === id) ?? UNFILED_TOPIC);

/** Every place a comment can be filed: "Topic › Subtopic", then Unfiled. */
export const filings = () => [
  ...state.topics.flatMap((t) => t.subtopics.map((st) => ({ label: `${t.name} › ${st.name}`, value: st.id, topicId: t.id }))),
  { label: 'Unfiled', value: UNFILED, topicId: UNFILED },
];

/** 1-based shade of a subtopic within its topic's family. */
export const shadeOf = (topicId: string, subtopicId: string) =>
  Math.min(4, Math.max(1, topicOf(topicId).subtopics.findIndex((s) => s.id === subtopicId) + 1));

export const subtopicName = (topicId: string, subtopicId: string) =>
  topicOf(topicId).subtopics.find((s) => s.id === subtopicId)?.name ?? '';

export const responseOf = (id: string | null) => state.responses.find((r) => r.id === id) ?? null;

export const commentsOf = (submissionId: string) =>
  state.comments.filter((c) => c.submissionId === submissionId);

/** Every response a comment is linked to, the first one first. */
export const responsesOf = (c: LiveComment): string[] =>
  [...new Set([c.responseId, ...(c.more ?? [])].filter((x): x is string => !!x))];

export const linkedTo = (responseId: string) => state.comments.filter((c) => responsesOf(c).includes(responseId));

export const isPlanned = (c: Comment) => c.accepted && c.responseId !== null;

const textOf = (submissionId: string) => SUBMISSIONS.find((s) => s.id === submissionId)?.text ?? '';

/** Where a comment's quote starts in its submission's text. */
export const startOf = (c: LiveComment) => {
  const text = textOf(c.submissionId);
  if (c.at !== undefined && text.startsWith(c.quote, c.at)) return c.at;
  return text.indexOf(c.quote);
};

// ---- passages ------------------------------------------------------------------------
// One highlighted passage can be filed under several subtopics: each filing is its own
// comment over the same text (the topic index's Duplicate to makes one). A passage is
// numbered in reading order within its submission: 18.001, 18.002, ...

const samePassage = (a: LiveComment, b: LiveComment) =>
  a.submissionId === b.submissionId && a.quote === b.quote && startOf(a) === startOf(b);

/** Every filing of the passage this comment is on, in the order they were made. */
export const passageOf = (commentId: string) => {
  const c = state.comments.find((x) => x.id === commentId);
  return c ? state.comments.filter((x) => samePassage(x, c)) : [];
};

/** A submission's passages in reading order, each the list of its filings. */
export const passages = (submissionId: string): LiveComment[][] => {
  const out: LiveComment[][] = [];
  for (const c of commentsOf(submissionId).slice().sort((a, b) => startOf(a) - startOf(b))) {
    const group = out.find((g) => samePassage(g[0], c));
    if (group) group.push(c);
    else out.push([c]);
  }
  return out;
};

// ---- record numbers ------------------------------------------------------------------
// The study team's own numbering, shown on every row, panel and page title:
//   S-018       a submission: its key in order of arrival
//   C-018.003   a comment: its submission's key, then its place in reading order
//   R-004       a response: its place in the period, in order of creation
const pad = (n: number, w = 3) => String(n).padStart(w, '0');

export const submissionNo = (submissionId: string) => submissionNoFor(SUBMISSIONS.find((x) => x.id === submissionId)?.key ?? 0);

/** "C-018.003": the comment's number (shared by every filing of one passage). */
export const passageNote = (commentId: string) => {
  const c = state.comments.find((x) => x.id === commentId);
  if (!c) return '';
  const key = SUBMISSIONS.find((x) => x.id === c.submissionId)?.key ?? 0;
  const i = passages(c.submissionId).findIndex((g) => g.some((x) => x.id === commentId));
  return `C-${pad(key)}.${pad(i + 1)}`;
};

/** Responses in the order the Responses tab lists them (and the pager walks them):
 *  drafts first, then accepted; within each, most comments answered first. */
export const responseOrder = () => {
  const by = (a: LiveResponse, b: LiveResponse) => linkedTo(b.id).length - linkedTo(a.id).length || a.title.localeCompare(b.title);
  return [...state.responses.filter((r) => !r.accepted).sort(by), ...state.responses.filter((r) => r.accepted).sort(by)];
};

/** Submissions in inbox order (newest first), as the inbox and the pager walk them. */
export const submissionOrder = () => [...SUBMISSIONS].sort((a, b) => b.received.localeCompare(a.received) || b.key - a.key);

export const responseNo = (responseId: string) => {
  const i = state.responses.findIndex((r) => r.id === responseId);
  return i === -1 ? '' : `R-${pad(i + 1)}`;
};

// ---- burn-down ----------------------------------------------------------------------

export const isTouched = (submissionId: string) =>
  state.edited.includes(submissionId) || commentsOf(submissionId).some((c) => c.accepted);

export const burnDown = () => ({
  unplanned: state.comments.filter((c) => !isPlanned(c)).length,
  untouched: SUBMISSIONS.filter((s) => !isTouched(s.id)).length,
  comments: state.comments.length,
  submissions: SUBMISSIONS.length,
});

// ---- the quiet helper ---------------------------------------------------------------
// The parser already filed every arriving comment. For a comment a person adds by
// selection, the same helper proposes a topic and a response. Deterministic: a keyword
// match against the subtopic vocabulary, then the response most of that subtopic's
// comments already point at. The UI shows the result as a pre-filled choice, never as
// a model at work.

const KEYWORDS: Record<string, string[]> = {
  'noise-frequency': ['every minute', 'once a minute', 'constant', 'so often', 'nonstop', 'frequency'],
  'noise-altitude': ['low', 'altitude', 'rooftop'],
  'noise-outdoor': ['garden', 'outside', 'yard', 'park', 'trail', 'birds'],
  'noise-increase': ['more flights', 'increase', 'growth', 'worse'],
  'paths-elliott': ['elliott', 'water', 'sound'],
  'paths-distribute': ['distribute', 'share', 'same neighborhood', 'concentrat', 'loop', 'route', 'south to north', 'back and forth'],
  'paths-approach': ['approach', 'steeper', 'glide'],
  'paths-departure': ['departure', 'climb', 'turn'],
  'night-program': ['late night', 'limitation', 'voluntary', 'curfew'],
  'night-volume': ['night', 'midnight', 'a.m.', 'sleep through', '3 am', '4 am'],
  'measure-dnl': ['dnl', 'average', 'metric'],
  'measure-contour': ['contour', 'monitor', 'map'],
  'measure-tracks': ['model', 'track'],
  'insulation-repair': ['windows', 'insulation', 'worn', 'failed'],
  'insulation-eligibility': ['eligib', 'qualify', 'list'],
  'insulation-vibration': ['vibrat', 'rattle', 'shake'],
  'health-sleep': ['sleep', 'awake', 'wake'],
  'health-stress': ['stress', 'heart', 'anxiety'],
  'health-air': ['air', 'exhaust', 'particle', 'pollut', 'asthma'],
  'process-responsiveness': ['complain', 'no answer', 'ignored', 'respond'],
  'process-participation': ['meeting', 'workshop', 'involved'],
  'process-petition': ['petition', 'signature'],
};

const bestFiling = (quote: string, pool: LiveTopic[]) => {
  const q = quote.toLowerCase();
  let best = { topicId: pool[0]?.id ?? UNFILED, subtopicId: pool[0]?.subtopics[0]?.id ?? UNFILED, score: 0 };
  for (const t of pool)
    for (const s of t.subtopics.filter((x) => !x.locked)) {
      const score = (KEYWORDS[s.id] ?? []).filter((k) => q.includes(k)).length;
      if (score > best.score) best = { topicId: t.id, subtopicId: s.id, score };
    }
  return best;
};

export const suggestFiling = (quote: string): { topicId: string; subtopicId: string } => {
  const { topicId, subtopicId } = bestFiling(quote, state.topics);
  return { topicId, subtopicId };
};

/** The response most comments on this subtopic (then topic) already point at. */
export const suggestResponse = (topicId: string, subtopicId: string): string | null => {
  const tally = (pool: Comment[]) => {
    const n = new Map<string, number>();
    for (const c of pool) for (const r of responsesOf(c)) n.set(r, (n.get(r) ?? 0) + 1);
    return [...n.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  };
  return (
    tally(state.comments.filter((c) => c.subtopicId === subtopicId)) ??
    tally(state.comments.filter((c) => c.topicId === topicId)) ??
    state.responses.find((r) => r.topicId === topicId)?.id ??
    null
  );
};

// ---- mutations ----------------------------------------------------------------------

const touch = (s: CommentsState, submissionId: string) => {
  if (!s.edited.includes(submissionId)) s.edited.push(submissionId);
};

const find = (s: CommentsState, id: string) => s.comments.find((c) => c.id === id);

export const reclassify = (commentId: string, topicId: string, subtopicId: string) =>
  commit({ kind: 'reclassify', commentId }, (s) => {
    const c = find(s, commentId);
    if (!c) return;
    c.topicId = topicId;
    c.subtopicId = subtopicId;
    touch(s, c.submissionId);
  });

export const resize = (commentId: string, quote: string, at: number) =>
  commit({ kind: 'resize', commentId }, (s) => {
    const c = find(s, commentId);
    if (!c) return;
    c.quote = quote;
    c.at = at;
    touch(s, c.submissionId);
  });

export const remove = (commentId: string) =>
  commit({ kind: 'remove', commentId }, (s) => {
    const c = find(s, commentId);
    if (!c) return;
    s.comments = s.comments.filter((x) => x.id !== commentId);
    touch(s, c.submissionId);
  });

type Filing = { topicId: string; subtopicId: string };

/** File a new passage: one comment per filing, all linked to the same responses (by
 *  default the helper's one filing and its response). Returns the first comment's id. */
export const add = (submissionId: string, quote: string, at: number, filingsIn?: Filing[], responseIds?: string[]) => {
  const first = suggestFiling(quote);
  const fs = filingsIn?.length ? filingsIn : [first];
  const rs = responseIds ?? [suggestResponse(first.topicId, first.subtopicId)].filter((x): x is string => !!x);
  const id = `c-n${state.seq + 1}`;
  commit({ kind: 'add', commentId: id }, (s) => {
    for (const f of fs) {
      s.seq += 1;
      s.comments.push({
        id: `c-n${s.seq}`, submissionId, quote, at, ...f,
        responseId: rs[0] ?? null, more: rs.slice(1),
        accepted: rs.some((r) => s.responses.find((x) => x.id === r)?.accepted), manual: true,
      });
    }
    touch(s, submissionId);
  });
  return id;
};

/** File a passage under more subtopics: a comment per new filing, carrying the
 *  passage's responses. A passage that is only Unfiled is refiled instead. */
export const addFilings = (commentId: string, fs: Filing[]) => {
  const group = passageOf(commentId);
  const src = group[0];
  if (!src || !fs.length) return;
  commit({ kind: 'duplicate', commentId }, (s) => {
    let todo = fs;
    if (group.length === 1 && src.topicId === UNFILED) {
      const c = find(s, src.id)!;
      Object.assign(c, todo[0]);
      todo = todo.slice(1);
    }
    for (const f of todo) {
      s.seq += 1;
      s.comments.push({ ...structuredClone(src), id: `c-n${s.seq}`, ...f, manual: true });
    }
    touch(s, src.submissionId);
  });
};

/** Take one filing off a passage. The last one goes to Unfiled: the passage stays. */
export const removeFiling = (commentId: string) => {
  const group = passageOf(commentId);
  const c0 = group.find((x) => x.id === commentId);
  if (!c0) return;
  commit({ kind: 'reclassify', commentId }, (s) => {
    if (group.length > 1) s.comments = s.comments.filter((x) => x.id !== commentId);
    else unfile(find(s, commentId)!);
    touch(s, c0.submissionId);
  });
};

/** Remove a whole passage: every filing of it. */
export const removePassage = (commentId: string) => {
  const ids = passageOf(commentId).map((x) => x.id);
  const c0 = state.comments.find((x) => x.id === commentId);
  if (!c0) return;
  commit({ kind: 'remove', commentId }, (s) => {
    s.comments = s.comments.filter((x) => !ids.includes(x.id));
    touch(s, c0.submissionId);
  });
};

const setLinks = (s: CommentsState, c: LiveComment, rs: string[]) => {
  c.responseId = rs[0] ?? null;
  c.more = rs.slice(1);
  c.accepted = rs.some((r) => s.responses.find((x) => x.id === r)?.accepted);
};

/** Link a passage (every filing of it) to more responses. */
export const linkPassage = (commentId: string, responseIds: string[]) => {
  const ids = passageOf(commentId).map((x) => x.id);
  if (!ids.length || !responseIds.length) return;
  commit({ kind: 'link', commentId }, (s) => {
    for (const id of ids) {
      const c = find(s, id)!;
      setLinks(s, c, [...new Set([...responsesOf(c), ...responseIds])]);
      touch(s, c.submissionId);
    }
  });
};

/** Unlink a passage from one response. */
export const unlinkPassage = (commentId: string, responseId: string) => {
  const ids = passageOf(commentId).map((x) => x.id);
  commit({ kind: 'link', commentId }, (s) => {
    for (const id of ids) {
      const c = find(s, id)!;
      setLinks(s, c, responsesOf(c).filter((r) => r !== responseId));
      touch(s, c.submissionId);
    }
  });
};

/** Point a comment at a response. A person chose it, so the link is accepted when the
 *  response already is; against a draft response it waits for that response's Accept. */
export const link = (commentId: string, responseId: string) =>
  commit({ kind: 'link', commentId, responseId }, (s) => {
    const c = find(s, commentId);
    const r = s.responses.find((x) => x.id === responseId);
    if (!c || !r) return;
    c.responseId = responseId;
    c.accepted = r.accepted;
    touch(s, c.submissionId);
  });

const SMALL_WORDS = new Set(['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'by', 'of', 'in', 'with', 'as', 'vs', 'via']);
/** Response titles are title case: small words stay lower inside the title; words
 *  already carrying capitals (DNL, FAA, Port's) are left alone. */
export const titleCase = (t: string) =>
  t.trim().split(/\s+/).map((w, i, all) =>
    /[A-Z]/.test(w) ? w
    : i > 0 && i < all.length - 1 && SMALL_WORDS.has(w) ? w
    : w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

/** Start a new response from a passage; every filing of it links to it as well. Returns its id. */
export const newResponse = (commentId: string, title: string) => {
  const c = state.comments.find((x) => x.id === commentId);
  if (!c) return null;
  const id = `r-n${state.seq + 1}`;
  const sub = subtopicName(c.topicId, c.subtopicId);
  const body = [
    `Thank you for your comment on ${sub.toLowerCase()}. The study team has reviewed it alongside other comments on ${topicOf(c.topicId).name.toLowerCase()}.`,
    'The concern will be evaluated during the Noise Compatibility Program phase, and the findings will be presented at the next public workshop before the draft program is released for review.',
  ];
  commit({ kind: 'new-response', commentId, responseId: id }, (s) => {
    s.seq += 1;
    s.responses.push({
      id, title: titleCase(title), topicId: c.topicId, body,
      redraft: [
        `The study team has read this comment on ${sub.toLowerCase()} and will address it in the Noise Compatibility Program.`,
        'Findings will be shared at the next public workshop, ahead of the draft program.',
      ],
      accepted: false, draftedFrom: [], created: true,
    });
    for (const p of passageOf(commentId)) {
      const cc = find(s, p.id)!;
      setLinks(s, cc, [...responsesOf(cc), id]);
      touch(s, cc.submissionId);
    }
  });
  return id;
};

/** Accept a response: every comment linked to it is planned at once. */
export const acceptResponse = (responseId: string) => {
  const cleared = linkedTo(responseId).filter((c) => !c.accepted).length;
  commit({ kind: 'accept', responseId, cleared }, (s) => {
    const r = s.responses.find((x) => x.id === responseId);
    if (!r) return;
    r.accepted = true;
    for (const c of s.comments)
      if (responsesOf(c).includes(responseId)) {
        c.accepted = true;
        touch(s, c.submissionId);
      }
  });
  return cleared;
};

/** Swap in the prebuilt redraft. The guidance is kept on the response for the record;
 *  the prototype runs no model. Undo restores the previous text. */
export const redraft = (responseId: string, _guidance: string) =>
  commit({ kind: 'redraft', responseId }, (s) => {
    const r = s.responses.find((x) => x.id === responseId);
    if (!r) return;
    [r.body, r.redraft] = [r.redraft, r.body];
  });

/** Save the editor's document: the JSON, and its paragraphs as text. */
export const saveDoc = (responseId: string, doc: unknown, body: string[], title?: string) =>
  commit({ kind: 'redraft', responseId }, (s) => {
    const r = s.responses.find((x) => x.id === responseId);
    if (!r) return;
    r.doc = doc;
    r.body = body;
    if (title?.trim()) r.title = title.trim();
    r.savedAt = new Date().toISOString();
  });

export const editBody = (responseId: string, body: string[]) =>
  commit({ kind: 'redraft', responseId }, (s) => {
    const r = s.responses.find((x) => x.id === responseId);
    if (r) r.body = body;
  });

// ---- the hierarchy --------------------------------------------------------------------

const findTopic = (s: CommentsState, id: string) => s.topics.find((t) => t.id === id);

export const renameTopic = (topicId: string, name: string) =>
  commit({ kind: 'rename', topicId }, (s) => {
    const t = findTopic(s, topicId);
    if (t && name.trim()) t.name = name.trim();
  });

export const renameSubtopic = (topicId: string, subtopicId: string, name: string) =>
  commit({ kind: 'rename', topicId }, (s) => {
    const st = findTopic(s, topicId)?.subtopics.find((x) => x.id === subtopicId);
    if (st && name.trim()) st.name = name.trim();
  });

export const toggleLock = (topicId: string) =>
  commit({ kind: 'lock', topicId }, (s) => {
    const t = findTopic(s, topicId);
    if (t) t.locked = !t.locked;
  });

export const toggleLockSubtopic = (topicId: string, subtopicId: string) =>
  commit({ kind: 'lock', topicId }, (s) => {
    const st = findTopic(s, topicId)?.subtopics.find((x) => x.id === subtopicId);
    if (st) st.locked = !st.locked;
  });

/** Is this filing held still: its topic or its subtopic locked. */
export const isLocked = (topicId: string, subtopicId: string) => {
  const t = topicOf(topicId);
  return !!t.locked || !!t.subtopics.find((x) => x.id === subtopicId)?.locked;
};

const unfile = (c: LiveComment) => {
  c.topicId = UNFILED;
  c.subtopicId = UNFILED;
};

/** Delete a topic; its comments go to Unfiled, keeping their responses. */
export const deleteTopic = (topicId: string) =>
  commit({ kind: 'delete-topic', topicId }, (s) => {
    s.topics = s.topics.filter((t) => t.id !== topicId);
    s.comments.filter((c) => c.topicId === topicId).forEach(unfile);
  });

export const deleteSubtopic = (topicId: string, subtopicId: string) =>
  commit({ kind: 'delete-topic', topicId }, (s) => {
    const t = findTopic(s, topicId);
    if (!t) return;
    t.subtopics = t.subtopics.filter((x) => x.id !== subtopicId);
    s.comments.filter((c) => c.subtopicId === subtopicId).forEach(unfile);
  });

/** Add an empty subtopic to a topic. Returns its id. */
export const addSubtopic = (topicId: string, name = 'New subtopic') => {
  const id = `st-n${state.seq + 1}`;
  commit({ kind: 'add-subtopic', topicId }, (s) => {
    s.seq += 1;
    const sub: Subtopic = { id, name };
    findTopic(s, topicId)?.subtopics.push(sub);
  });
  return id;
};

/** Re-run the filing over everything not locked: Unfiled comments are filed where their
 *  wording points, and a comment whose wording points clearly elsewhere moves there.
 *  Locked topics and locked subtopics neither give nor take comments; names a person set are kept. The
 *  guidance is kept for the record; the prototype runs no model. Returns the count. */
export const rerun = (_guidance: string) => {
  const open = state.topics.filter((t) => !t.locked);
  const moves: { id: string; topicId: string; subtopicId: string }[] = [];
  for (const c of state.comments) {
    if (c.manual) continue;
    if (isLocked(c.topicId, c.subtopicId)) continue;
    const best = bestFiling(c.quote, open);
    if (!best.score || best.subtopicId === c.subtopicId) continue;
    const here = (KEYWORDS[c.subtopicId] ?? []).filter((k) => c.quote.toLowerCase().includes(k)).length;
    if (c.topicId === UNFILED || best.score >= 2 && best.score > here + 1) moves.push({ id: c.id, ...best });
  }
  commit({ kind: 'rerun', cleared: moves.length }, (s) => {
    for (const m of moves) {
      const c = find(s, m.id);
      if (!c) continue;
      const wasUnfiled = c.topicId === UNFILED;
      c.topicId = m.topicId;
      c.subtopicId = m.subtopicId;
      if (wasUnfiled && !c.responseId) c.responseId = suggestResponse(m.topicId, m.subtopicId);
    }
  });
  return moves.length;
};

export type { Comment, Response };

// ---- internal notes on a response ------------------------------------------------------
// A note anchors to a span of the response's text (the editor's `note` mark carries its
// id); its thread is kept here. New entries are by the person at the keyboard.

export const ME = 'You';
const noteList = (s: CommentsState) => (s.notes ??= structuredClone(RESPONSE_NOTES));

export const notesOf = (responseId: string): ResponseNote[] => (state.notes ?? RESPONSE_NOTES).filter((n) => n.responseId === responseId);

export const addNote = (responseId: string, quote: string, text: string) => {
  const id = `n-n${state.seq + 1}`;
  commit({ kind: 'note', responseId }, (s) => {
    s.seq += 1;
    noteList(s).push({ id, responseId, quote, resolved: false, entries: [{ id: `ne-n${s.seq}`, author: ME, at: new Date().toISOString(), text }] });
  });
  return id;
};

export const replyNote = (noteId: string, text: string) =>
  commit({ kind: 'note' }, (s) => {
    const n = noteList(s).find((x) => x.id === noteId);
    if (!n) return;
    s.seq += 1;
    n.entries.push({ id: `ne-n${s.seq}`, author: ME, at: new Date().toISOString(), text });
  });

export const setNoteResolved = (noteId: string, resolved: boolean) =>
  commit({ kind: 'note' }, (s) => {
    const n = noteList(s).find((x) => x.id === noteId);
    if (n) n.resolved = resolved;
  });
