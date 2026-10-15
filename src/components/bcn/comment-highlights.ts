// comment-highlights — paints a submission's text with its comments as highlighter marks,
// and maps between DOM points and offsets in that text.
//
// Used by <BcnSubmissionText>. The text is plain, paragraphs split on a blank line. Each
// paragraph renders as <p data-off="N">, N being the paragraph's start offset in the
// whole text, so any DOM point inside it converts to a text offset by walking its text
// nodes. A comment is <mark class="bcn-hl" data-cid data-family data-shade>; a comment
// never crosses a paragraph break (a selection that does is clipped to its first
// paragraph), and comments never overlap (a new one is trimmed to the free text).
import { SUBMISSIONS } from '../../data/comments';
import { commentsOf, shadeOf, startOf, subtopicName, topicOf, type LiveComment } from './comments-store';
import { snapToWords } from '../../lib/text-offsets';

export { offsetAt, offsetFromPoint, snapToWords } from '../../lib/text-offsets';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const submissionText = (submissionId: string) =>
  SUBMISSIONS.find((s) => s.id === submissionId)?.text ?? '';

export interface Span { c: LiveComment; start: number; end: number }

export const spansOf = (submissionId: string): Span[] =>
  commentsOf(submissionId)
    .map((c) => ({ c, start: startOf(c), end: startOf(c) + c.quote.length }))
    .filter((s) => s.start >= 0)
    .sort((a, b) => a.start - b.start);

/** The paragraphs as HTML, with every comment as a mark. */
export const paint = (submissionId: string, activeId: string | null) => {
  const text = submissionText(submissionId);
  const spans = spansOf(submissionId);
  const paras: { start: number; body: string }[] = [];
  let off = 0;
  for (const body of text.split('\n\n')) {
    paras.push({ start: off, body });
    off += body.length + 2;
  }
  return paras
    .map(({ start, body }) => {
      const end = start + body.length;
      let html = '';
      let i = start;
      for (const s of spans.filter((x) => x.start >= start && x.start < end)) {
        // A duplicate (the same passage filed twice) paints once, as the first filing.
        if (s.start < i) continue;
        html += esc(text.slice(i, s.start));
        const t = topicOf(s.c.topicId);
        const label = `${t.name}: ${subtopicName(s.c.topicId, s.c.subtopicId)}`;
        const tip = s.c.filing === 'suggested' ? `${label} (suggested by Aldo)` : label;
        html +=
          `<mark class="bcn-hl" data-cid="${s.c.id}" data-family="${t.family}" data-shade="${shadeOf(s.c.topicId, s.c.subtopicId)}"` +
          `${s.c.id === activeId ? ' data-active' : ''}${s.c.accepted && s.c.responseId ? ' data-planned' : ''}` +
          `${s.c.filing === 'suggested' ? ' data-suggested' : ''}` +
          ` tabindex="0" title="${esc(tip)}" aria-label="${esc(tip)}">${esc(text.slice(s.start, Math.min(s.end, end)))}</mark>`;
        i = Math.min(s.end, end);
      }
      html += esc(text.slice(i, end));
      return `<p data-off="${start}">${html}</p>`;
    })
    .join('');
};

/** Clip a proposed range to one paragraph and to text no other comment holds. */
export const clipToFree = (submissionId: string, start: number, end: number, exceptId?: string) => {
  const text = submissionText(submissionId);
  const paraEnd = text.indexOf('\n\n', start);
  if (paraEnd !== -1) end = Math.min(end, paraEnd);
  for (const s of spansOf(submissionId)) {
    if (s.c.id === exceptId) continue;
    if (s.start <= start && s.end > start) start = s.end;
    if (s.start >= start && s.start < end) end = s.start;
  }
  return snapToWords(text, start, end);
};
