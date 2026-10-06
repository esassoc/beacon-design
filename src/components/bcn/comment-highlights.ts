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
        html +=
          `<mark class="bcn-hl" data-cid="${s.c.id}" data-family="${t.family}" data-shade="${shadeOf(s.c.topicId, s.c.subtopicId)}"` +
          `${s.c.id === activeId ? ' data-active' : ''}${s.c.accepted && s.c.responseId ? ' data-planned' : ''}` +
          ` tabindex="0" title="${esc(label)}" aria-label="${esc(label)}">${esc(text.slice(s.start, Math.min(s.end, end)))}</mark>`;
        i = Math.min(s.end, end);
      }
      html += esc(text.slice(i, end));
      return `<p data-off="${start}">${html}</p>`;
    })
    .join('');
};

/** Text offset of a DOM point inside the painted body, or -1. */
export const offsetAt = (root: HTMLElement, node: Node, nodeOffset: number) => {
  const p = (node.nodeType === 1 ? (node as Element) : node.parentElement)?.closest<HTMLElement>('p[data-off]');
  if (!p || !root.contains(p)) return -1;
  let off = Number(p.dataset.off);
  const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    if (t === node) return off + nodeOffset;
    off += t.textContent?.length ?? 0;
  }
  // node is an element: nodeOffset counts children
  if (node.nodeType === 1) {
    let o = Number(p.dataset.off);
    const w2 = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
    const stop = (node as Element).childNodes[nodeOffset] ?? null;
    for (let t = w2.nextNode(); t; t = w2.nextNode()) {
      if (stop && (stop === t || stop.contains(t))) return o;
      o += t.textContent?.length ?? 0;
    }
    return o;
  }
  return off;
};

/** Text offset under a viewport point. */
export const offsetFromPoint = (root: HTMLElement, x: number, y: number) => {
  const d = document as Document & {
    caretPositionFromPoint?: (x: number, y: number) => { offsetNode: Node; offset: number } | null;
  };
  const pos = d.caretPositionFromPoint?.(x, y);
  if (pos) return offsetAt(root, pos.offsetNode, pos.offset);
  const r = document.caretRangeFromPoint?.(x, y);
  return r ? offsetAt(root, r.startContainer, r.startOffset) : -1;
};

/** Grow a range outward to whole words and trim surrounding space and punctuation. */
export const snapToWords = (text: string, start: number, end: number) => {
  const word = /[\p{L}\p{N}'’-]/u;
  let s = Math.max(0, Math.min(start, end));
  let e = Math.min(text.length, Math.max(start, end));
  while (s > 0 && word.test(text[s - 1]) && word.test(text[s])) s--;
  while (e < text.length && word.test(text[e - 1] ?? '') && word.test(text[e])) e++;
  while (s < e && /\s/.test(text[s])) s++;
  while (e > s && /[\s,;:]/.test(text[e - 1])) e--;
  return { start: s, end: e };
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
