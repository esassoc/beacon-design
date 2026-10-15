// text-offsets — between DOM points and offsets in a painted passage. A painted passage is
// <p data-off="N"> per paragraph, N the paragraph's start in the whole text (comment-
// highlights.ts and anchored-text-paint.ts both paint this way), so a point inside one
// converts by walking its text nodes.

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
