// anchored-text-paint — paints a document passage with its child spans as highlighter
// marks. Pure string in, HTML out, so the same function renders at build time (Astro
// frontmatter) and repaints in the browser after a person's edit.
//
// Spans partition the text. Each is a <mark class="bcn-hl" data-sid> in one hue family,
// alternating two shades so neighbours read apart; a suggested span is dashed (the shared
// grammar in bcn-comment-topics.css). Gaps the caller flags render as
// <mark class="bcn-at-gap" data-gap="start">, and an optional `lit` range (a value's
// source words, on hover) is wrapped inside whatever it falls in. Paragraphs split on a
// blank line; each is <p data-off="N">.

/** How many highlighter inks a surface rotates through (--bcn-marker-1 to -6): each mark
 *  also carries data-ink, its turn in text order. */
export const INKS = 6;

export interface PaintSpan {
  id: string;
  start: number;
  end: number;
  suggested: boolean;
  /** Marks a span that duplicates another. */
  dup?: boolean;
  label: string;
}

export interface PaintInput {
  text: string;
  spans: PaintSpan[];
  gaps: { start: number; end: number }[];
  activeId?: string | null;
  lit?: { start: number; end: number } | null;
  /** Words a value was read from (a species, a milestone, a season): wrapped as
   *  <span class="bcn-at-val" data-v="key"> inside whatever they fall in. */
  values?: { start: number; end: number; key: string }[];
  family?: string;
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const paintAnchored = ({ text, spans, gaps, activeId = null, lit = null, values = [], family = 'violet' }: PaintInput): string => {
  // Paint order: the first span over any char wins (a duplicate on the same words paints
  // once, as the earlier one, and carries data-dup).
  const sorted = [...spans].sort((a, b) => a.start - b.start);
  // Neighbours alternate the family's lightest and a mid shade, far enough apart to read.
  const shadeOf = new Map(sorted.map((s, i) => [s.id, i % 2 ? 3 : 1]));
  // A surface with a set of inks (step 2's highlighter) takes them in turn, in text order.
  const inkOf = new Map(sorted.map((s, i) => [s.id, (i % INKS) + 1]));
  const dupOn = new Set(sorted.filter((s) => s.dup).map((s) => `${s.start}`));

  const bounds = new Set<number>([0, text.length]);
  for (const r of [...sorted, ...gaps, ...values, ...(lit ? [lit] : [])]) {
    bounds.add(Math.max(0, r.start));
    bounds.add(Math.min(text.length, r.end));
  }
  let p = text.indexOf('\n\n');
  while (p !== -1) {
    bounds.add(p);
    bounds.add(p + 2);
    p = text.indexOf('\n\n', p + 2);
  }
  const cuts = [...bounds].sort((a, b) => a - b);

  let html = '';
  let paraOpen = false;
  const open = (at: number) => {
    html += `<p data-off="${at}">`;
    paraOpen = true;
  };
  open(0);
  for (let i = 0; i < cuts.length - 1; i++) {
    const a = cuts[i];
    const b = cuts[i + 1];
    const seg = text.slice(a, b);
    if (seg === '\n\n') {
      html += '</p>';
      paraOpen = false;
      open(b);
      continue;
    }
    const span = sorted.find((s) => s.start <= a && s.end >= b && !s.dup) ?? sorted.find((s) => s.start <= a && s.end >= b);
    const gap = gaps.find((g) => g.start <= a && g.end >= b);
    const isLit = lit && lit.start <= a && lit.end >= b;
    let inner = esc(seg);
    const val = values.find((v) => v.start <= a && v.end >= b);
    if (val) inner = `<span class="bcn-at-val" data-v="${esc(val.key)}">${inner}</span>`;
    if (isLit) inner = `<span class="bcn-at-lit">${inner}</span>`;
    if (span) {
      const dup = dupOn.has(`${span.start}`) || span.dup;
      html +=
        `<mark class="bcn-hl" data-sid="${span.id}" data-family="${family}" data-shade="${shadeOf.get(span.id)}" data-ink="${inkOf.get(span.id)}"` +
        `${span.suggested ? ' data-suggested' : ''}${span.id === activeId ? ' data-active' : ''}${dup ? ' data-dup' : ''}` +
        ` title="${esc(span.label)}">${inner}</mark>`;
    } else if (gap) {
      html += `<mark class="bcn-at-gap" data-gap="${gap.start}" title="No requirement covers this">${inner}</mark>`;
    } else html += inner;
  }
  if (paraOpen) html += '</p>';
  return html;
};
