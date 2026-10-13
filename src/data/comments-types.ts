// Comments — the Planning module's model. Entities keep Comment Tracker's terms
// (shaping brief, andy-work projects/beacon/shaping/comments.md, 2026-10-05).
//
//   Comment period  owns every submission and response; one response format.
//   Submitter       a person or organization.
//   Submission      what a submitter sent. Paragraphs separated by a blank line.
//   Comment         one passage of a submission, filed under a topic + subtopic.
//                   Rendered as a highlight. `quote` is an exact substring of the
//                   submission text; offsets are derived, never stored.
//   Topic           a hue family. Each subtopic is a shade within it.
//   Response        answers many comments (summary mode). The link is comment ->
//                   response. A comment is PLANNED once its link is accepted;
//                   accepting a response accepts every comment linked to it.
//   Past response   an anonymized response from ESA's library a draft learned from.

/** Highlighter families: `--bcn-topic-{family}-{1..4}` in theme-beacon.css. Each topic owns one. */
export type TopicFamily = 'amber' | 'blue' | 'violet' | 'grass' | 'orange' | 'crimson' | 'slate';

export interface Subtopic {
  id: string;
  name: string;
}

export interface Topic {
  id: string;
  name: string;
  family: TopicFamily;
  subtopics: Subtopic[];
}

export type ResponseFormat = 'summary' | 'letter';

/** Someone on the study team: drafts responses, reviews them, owns topics. */
export interface Person {
  id: string;
  name: string;
  role: string;
}

/** Whose call a piece of work is so far. Aldo proposes (highlights, topics, an expert
 *  for a response); a person confirms by accepting it or by changing it. One word for
 *  the state everywhere, so every surface shows it the same way. */
export type Proposal = 'suggested' | 'confirmed';

/** Where a response is in the team's review:
 *    draft    the assignee (the topic's expert) writes the initial response
 *    review   handed to the next person to review and finalize
 *    done     accepted: every comment linked to it is planned */
export type ReviewStage = 'draft' | 'review' | 'done';

export interface CommentPeriod {
  id: string;
  name: string;
  /** ISO date */
  opens: string;
  /** ISO date */
  closes: string;
  responseFormat: ResponseFormat;
  /** Topic id → Person id: the subject-matter expert a topic's responses route to. */
  experts: Record<string, string>;
  /** Who finalizes by default: the person a draft is handed to for final review. */
  leadId: string;
}

export interface Submitter {
  id: string;
  name: string;
  organization?: string;
  city: string;
}

export type SubmissionChannel = 'Web form' | 'Email';

export interface Submission {
  id: string;
  /** Comment Tracker's running number, shown as #12 */
  key: number;
  submitterId: string;
  /** ISO date the submission was received */
  received: string;
  channel: SubmissionChannel;
  /** Plain text; paragraphs separated by a blank line ("\n\n"). */
  text: string;
}

export interface Comment {
  id: string;
  submissionId: string;
  /** Exact substring of the submission's text. */
  quote: string;
  topicId: string;
  subtopicId: string;
  /** The proposed response; null when no response is linked yet. */
  responseId: string | null;
  /** Link accepted by a person: the comment is planned. */
  accepted: boolean;
  /** The passage's bounds and topic: proposed by Aldo as the submission arrived, or
   *  confirmed by a person (accepted as is, or edited). */
  filing: Proposal;
}

export interface Response {
  id: string;
  title: string;
  topicId: string;
  /** Paragraphs. */
  body: string[];
  /** The draft a Redraft swaps in (prebuilt; the prototype runs no model). */
  redraft: string[];
  /** PastResponse ids the draft drew on. */
  draftedFrom: string[];
  /** The unit of assigned work is the response, not the comment: an expert drafts one
   *  response for every comment linked to it, and its accept plans them all at once.
   *  A comment with no response yet belongs, by derivation, to its topic's expert. */
  stage: ReviewStage;
  /** Who holds it now: the drafter in `draft`, the reviewer in `review`. */
  assigneeId: string;
  /** Aldo routes a new response to its topic's expert (suggested) until a person
   *  confirms or reassigns it. */
  assignment: Proposal;
  /** Who wrote the initial response, once it has been handed on. */
  draftedBy?: string;
  /** Mirrors `stage === 'done'`; the store sets both together. */
  accepted: boolean;
}

export interface PastResponse {
  id: string;
  /** Anonymized source, e.g. "Part 150 Study, Pacific Northwest airport" */
  source: string;
  /** ISO year-month the response was issued */
  issued: string;
  title: string;
  body: string[];
}

/** One entry in a note's thread. */
export interface NoteEntry {
  id: string;
  /** Staff on the study team (internal; never shown to commenters). */
  author: string;
  /** ISO timestamp */
  at: string;
  text: string;
}

/** An internal note on a span of a response's text: a thread the study team keeps
 *  while drafting, resolved when settled. Never part of the published response. */
export interface ResponseNote {
  id: string;
  responseId: string;
  /** The text the note is anchored to, as it read when the note was made. */
  quote: string;
  resolved: boolean;
  entries: NoteEntry[];
}
