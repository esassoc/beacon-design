// comments-store — the Comments module's session state, shared by every Comments page.
//
// The fixture (src/data/comments.ts) is the starting point; every edit a reviewer makes
// (reclassify, resize, add, remove, relink, accept, new response, redraft) is written to
// sessionStorage so it survives moving between the inbox, a submission and a response.
// Nothing leaves the browser. `?reset` on any Comments page restores the fixture.
//
// Contract, on `document`:
//   out  comments:change   after every mutation
import { COMMENTS, RESPONSES, SUBMISSIONS, SUBMITTERS, TOPICS, PAST_RESPONSES, COMMENT_PERIOD } from '../../data/comments';
import type { Comment, Response, Submission, Topic, Subtopic, Submitter, PastResponse } from '../../data/comments-types';

export interface LiveComment extends Comment {
  start: number;
  end: number;
}
export interface LiveResponse extends Response {
  /** The body a Redraft replaced; one-step undo. */
  previous: string[] | null;
  /** Created in this session from a comment. */
  isNew?: boolean;
}
interface State {
  comments: LiveComment[];
  responses: LiveResponse[];
  seq: number;
}

const KEY = 'bcn-comments-v1';

function seed(): State {
  const byId = new Map(SUBMISSIONS.map((s) => [s.id, s]));
  const comments = COMMENTS.map((c) => {
    const text = byId.get(c.submissionId)?.text ?? '';
    const start = Math.max(0, text.indexOf(c.quote));
    return { ...c, start, end: start + c.quote.length };
  });
  return { comments, responses: RESPONSES.map((r) => ({ ...r, previous: null })), seq: 1 };
}

let state: State = load();

function load(): State {
  if (typeof window === 'undefined') return seed();
  if (new URLSearchParams(location.search).has('reset')) sessionStorage.removeItem(KEY);
  try {
    const raw = sessionStorage.getItem(KEY);
    if (raw) return JSON.parse(raw) as State;
  } catch { /* fall through to the fixture */ }
  return seed();
}

function commit(): void {
  sessionStorage.setItem(KEY, JSON.stringify(state));
  document.dispatchEvent(new CustomEvent('comments:change'));
}

// ── reads ────────────────────────────────────────────────────────────────────

export const period = COMMENT_PERIOD;
export const topics: Topic[] = TOPICS;
export const submitters: Submitter[] = SUBMITTERS;
export const pastResponses: PastResponse[] = PAST_RESPONSES;
/** Inbox order: newest first. */
export const submissions: Submission[] = [...SUBMISSIONS].sort((a, b) => b.received.localeCompare(a.received));

export const submission = (id: string) => SUBMISSIONS.find((s) => s.id === id);
export const submitter = (id: string) => SUBMITTERS.find((s) => s.id === id);
export const topic = (id: string) => TOPICS.find((t) => t.id === id);
export function subtopic(id: string): { topic: Topic; sub: Subtopic; index: number } | undefined {
  for (const t of TOPICS) {
    const index = t.subtopics.findIndex((s) => s.id === id);
    if (index >= 0) return { topic: t, sub: t.subtopics[index], index };
  }
  return undefined;
}

export const comments = () => state.comments;
export const comment = (id: string) => state.comments.find((c) => c.id === id);
export const commentsFor = (submissionId: string) =>
  state.comments.filter((c) => c.submissionId === submissionId).sort((a, b) => a.start - b.start);
export const responses = () => state.responses;
export const response = (id: string | null) => (id ? state.responses.find((r) => r.id === id) : undefined);
export const commentsOn = (responseId: string) => state.comments.filter((c) => c.responseId === responseId);

export const isPlanned = (c: Comment) => Boolean(c.responseId && c.accepted);

export function burndown(): { unplanned: number; untouched: number } {
  const unplanned = state.comments.filter((c) => !isPlanned(c)).length;
  const touched = new Set(state.comments.filter(isPlanned).map((c) => c.submissionId));
  return { unplanned, untouched: SUBMISSIONS.filter((s) => !touched.has(s.id)).length };
}

/** Shade steps per subtopic count: the first two subtopics sit furthest apart. */
const STEPS: Record<number, number[]> = { 1: [5], 2: [4, 6], 3: [4, 5, 7], 4: [4, 5, 6, 7] };
/** The highlight fill and its edge for a subtopic, as token references. */
export function shade(subtopicId: string): { fill: string; edge: string; family: string } {
  const hit = subtopic(subtopicId);
  if (!hit) return { fill: 'var(--color-slate-4)', edge: 'var(--color-slate-9)', family: 'slate' };
  const steps = STEPS[Math.min(4, hit.topic.subtopics.length)] ?? STEPS[4];
  const step = steps[Math.min(hit.index, steps.length - 1)];
  const fam = hit.topic.family;
  return { fill: `var(--color-${fam}-${step})`, edge: `var(--color-${fam}-9)`, family: fam };
}
export const swatch = (topicId: string) => `var(--color-${topic(topicId)?.family ?? 'slate'}-9)`;

// ── writes ───────────────────────────────────────────────────────────────────

function textOf(c: LiveComment): string {
  return submission(c.submissionId)?.text.slice(c.start, c.end) ?? c.quote;
}

export function reclassify(id: string, subtopicId: string): void {
  const c = comment(id);
  const hit = subtopic(subtopicId);
  if (!c || !hit) return;
  c.subtopicId = subtopicId;
  c.topicId = hit.topic.id;
  commit();
}

export function resize(id: string, start: number, end: number): void {
  const c = comment(id);
  if (!c) return;
  c.start = start;
  c.end = end;
  c.quote = textOf(c);
  commit();
}

export function remove(id: string): void {
  state.comments = state.comments.filter((c) => c.id !== id);
  commit();
}

export function add(submissionId: string, start: number, end: number, subtopicId: string): string {
  const hit = subtopic(subtopicId);
  const id = `c-new-${state.seq++}`;
  const c: LiveComment = {
    id, submissionId, start, end, quote: '',
    topicId: hit?.topic.id ?? '', subtopicId, responseId: suggestResponse(hit?.topic.id), accepted: false,
  };
  c.quote = textOf(c);
  state.comments.push(c);
  commit();
  return id;
}

/** The response most comments of this topic already point at: the suggested link. */
function suggestResponse(topicId?: string): string | null {
  if (!topicId) return null;
  const tally = new Map<string, number>();
  for (const c of state.comments) if (c.topicId === topicId && c.responseId) tally.set(c.responseId, (tally.get(c.responseId) ?? 0) + 1);
  return [...tally.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
}

export function relink(id: string, responseId: string): void {
  const c = comment(id);
  if (!c) return;
  c.responseId = responseId;
  c.accepted = false;
  commit();
}

export function acceptLink(id: string): void {
  const c = comment(id);
  if (!c || !c.responseId) return;
  c.accepted = true;
  commit();
}

export function newResponseFrom(id: string): string | undefined {
  const c = comment(id);
  if (!c) return;
  const hit = subtopic(c.subtopicId);
  const rid = `r-new-${state.seq++}`;
  const name = hit?.sub.name ?? 'New response';
  state.responses.push({
    id: rid,
    title: name,
    topicId: c.topicId,
    body: [`Comments on ${name.toLowerCase()} are addressed in this response. The study team reviewed each one and will describe the measures the Noise Compatibility Program evaluates for this concern, which agency decides on them, and when the analysis is published for review.`],
    redraft: [`The study team reviewed the comments on ${name.toLowerCase()}. The Noise Compatibility Program will evaluate measures for this concern and publish the analysis for public review before the draft NCP is submitted to the FAA.`],
    accepted: false,
    draftedFrom: [],
    previous: null,
    isNew: true,
  });
  c.responseId = rid;
  c.accepted = false;
  commit();
  return rid;
}

export function acceptResponse(rid: string): number {
  const r = response(rid);
  if (!r) return 0;
  r.accepted = true;
  let cleared = 0;
  for (const c of state.comments) if (c.responseId === rid && !c.accepted) { c.accepted = true; cleared++; }
  commit();
  return cleared;
}

export function redraft(rid: string): void {
  const r = response(rid);
  if (!r || r.accepted) return;
  r.previous = r.body;
  [r.body, r.redraft] = [r.redraft, r.body];
  commit();
}

export function undoRedraft(rid: string): void {
  const r = response(rid);
  if (!r || !r.previous) return;
  [r.body, r.redraft] = [r.redraft, r.body];
  r.previous = null;
  commit();
}

// ── formatting ───────────────────────────────────────────────────────────────

const DATE = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
export const formatDate = (iso: string) => DATE.format(new Date(`${iso}T00:00:00Z`));
