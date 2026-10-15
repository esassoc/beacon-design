// Controller for <BcnSw3Review>. setupX shape: owns which commitment is in view and which
// requirement is selected, and repaints the scrubber, the text and the rail from sw3-store.
//
// Contract, on `document`:
//   out  sw3:rev-current    detail: { code }                        the commitment in view (Aldo)
//   out  sw3:rev-selection  detail: { code, range, quote } | null   words selected in the text
//   in   sw3:rev-go         detail: { code, reqId?, doc? }          a reference pressed in Aldo
//
// Commitments come from several files: the scrubber runs them end to end, and landing on one
// in another file makes that file the store's active one (setActiveDoc), so the text, the
// rail, Aldo and the side panels all read it.
//   out  sw3:req-edit       detail: { id }                          Edit a requirement (side panel)
//   out  sw3:edit           detail: { id }                          Edit the commitment (side panel)
//   out  sw3:peek           detail: { code, reqId? }                the source page (side panel)

import {
  initSw3,
  started,
  startRun,
  skipToEnd,
  foundCodes,
  parsedCodes,
  commitmentOf,
  requirementsOf,
  flagsOf,
  blocking,
  isConfirmed,
  confirmCommitment,
  reopenCommitment,
  identified,
  finds,
  payload,
  resolveEntity,
  requirementRef,
  docIds,
  activeDoc,
  setActiveDoc,
  peek,
} from './sw3-store';
import { paintAnchored } from './anchored-text-paint';
import { setupCommitmentScrubber, type ScrubCell, type ScrubGroup } from './commitment-scrubber';
import { setupSw3Attributes, type AttrHover } from './sw3-attributes';
import type { Range } from '../../lib/anchored-text';

const short = (code: string) => code.replace(/^COA\s+/, '');
const norm = (s: string) => s.toLowerCase().replace(/\(.*?\)/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
const pagesLabel = (p: number[]) => (p.length > 1 ? `pp. ${p[0]}–${p.at(-1)}` : `p. ${p[0]}`);
const KEY = 'sw3:review-at';
/** A commitment across files: "itp|COA 11.1". */
const keyOf = (doc: string, code: string) => `${doc}|${code}`;
const split = (key: string) => {
  const i = key.indexOf('|');
  return { doc: key.slice(0, i), code: key.slice(i + 1) };
};

export function setupSw3Review(root: HTMLElement): void {
  initSw3();
  // Opened directly with no run on record: show the finished scan of each file's default scope.
  for (const id of docIds())
    peek(id, () => {
      if (started()) return;
      const D = payload();
      startRun({ first: D.scope.first, last: D.scope.last, instruction: '' });
      skipToEnd();
    });
  const fire = (name: string, detail: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));
  const art = root.querySelector<HTMLElement>('[data-c]')!;
  const body = art.querySelector<HTMLElement>('[data-c-text]')!;
  const pos = root.querySelector<HTMLElement>('[data-rev-pos]')!;

  // The commitment in view, in the active file.
  let current: string | null = null;
  let selected: string | null = null;
  let hover: AttrHover | null = null;
  let want: string | null = null;
  try {
    want = localStorage.getItem(KEY);
  } catch {
    /* no storage */
  }

  /** Every file's commitments, file after file, as keys; and where each file's run starts. */
  const files = () =>
    docIds()
      .map((doc) => peek(doc, () => ({ doc, short: payload().short ?? doc, codes: foundCodes() })))
      .filter((f) => f.codes.length);
  const keys = () => files().flatMap((f) => f.codes.map((c) => keyOf(f.doc, c)));
  const here = () => (current ? keyOf(activeDoc(), current) : '');
  const codes = () => foundCodes();
  const stateOf = (code: string): ScrubCell['state'] =>
    !parsedCodes().includes(code) ? 'parsing' : isConfirmed(code) ? 'confirmed' : flagsOf(code).length ? 'flagged' : 'ready';
  const noteOf = (code: string) => {
    const s = stateOf(code);
    if (s === 'parsing') return 'Parsing';
    if (s === 'confirmed') return 'Confirmed';
    const n = flagsOf(code).length;
    const r = requirementsOf(code).length;
    return n ? `${n} to settle` : `${r} requirement${r === 1 ? '' : 's'}`;
  };

  const go = (key: string, reqId: string | null = null) => {
    const { doc, code } = split(key);
    if (!peek(doc, () => foundCodes().includes(code))) return;
    const moved = key !== here();
    current = code;
    selected = reqId;
    try {
      localStorage.setItem(KEY, key);
    } catch {
      /* no storage */
    }
    // Another file: the store follows, and its change repaints everything that reads it.
    if (doc !== activeDoc()) setActiveDoc(doc);
    else render();
    if (moved) {
      root.querySelector('[data-rev-doc]')!.scrollTop = 0;
      root.querySelector('.bcn-sw3rev__attrs')!.scrollTop = 0;
      fire('sw3:rev-selection', null);
    }
    if (reqId) body.querySelector(`mark.bcn-hl[data-sid="${CSS.escape(reqId)}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  // ── The scrubber ────────────────────────────────────────────────────────────
  const scrub = setupCommitmentScrubber(root.querySelector('[data-commitment-scrubber]')!, { onPick: (id) => go(id) });
  const stateAt = (key: string) => {
    const { doc, code } = split(key);
    return peek(doc, () => stateOf(code));
  };
  root.querySelector('[data-rev-next-open]')!.addEventListener('click', () => {
    const list = keys();
    const i = list.indexOf(here());
    const order = [...list.slice(i + 1), ...list.slice(0, i + 1)];
    const next = order.find((k) => stateAt(k) === 'flagged');
    if (next) go(next);
  });
  // Arrow keys step commitments when nothing else has the keys.
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t.closest('input, textarea, select, [contenteditable], esa-textarea, esa-text-field, esa-combobox, esa-select, esa-side-dialog, [role="slider"], [data-aldo-panel]')) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const list = keys();
    const next = list[list.indexOf(here()) + (e.key === 'ArrowRight' ? 1 : -1)];
    if (next) (e.preventDefault(), go(next));
  });

  // ── The rail ────────────────────────────────────────────────────────────────
  const attrs = setupSw3Attributes(root.querySelector('[data-sw3-attrs]')!, {
    onSelect: (id) => {
      selected = id;
      render();
      if (id) body.querySelector(`mark.bcn-hl[data-sid="${CSS.escape(id)}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    },
    onHover: (h) => {
      hover = h;
      paintFocus();
    },
    onEdit: (id) => fire('sw3:req-edit', { id }),
  });

  // ── The header keys ─────────────────────────────────────────────────────────
  art.querySelector('[data-c-peek]')!.addEventListener('click', () => current && fire('sw3:peek', { code: current, reqId: selected ?? undefined }));
  art.querySelector('[data-c-edit]')!.addEventListener('click', () => {
    const f = finds().find((x) => x.code === current);
    if (f) fire('sw3:edit', { id: f.id });
  });
  art.querySelector('[data-c-confirm]')!.addEventListener('click', () => current && !blocking(current).length && confirmCommitment(current));
  art.querySelector('[data-c-reopen]')!.addEventListener('click', () => current && reopenCommitment(current));

  // ── The text: click a highlight to select it; select words to talk about them ──
  body.addEventListener('click', (e) => {
    if (!current || !document.getSelection()?.isCollapsed) return;
    const mark = (e.target as HTMLElement).closest<HTMLElement>('mark.bcn-hl[data-sid]');
    selected = mark && mark.dataset.sid !== selected ? mark.dataset.sid! : null;
    render();
  });
  /** A point in the text, as an offset into the commitment's text. */
  const offsetOf = (node: Node, at: number): number | null => {
    const p = (node.nodeType === 1 ? (node as Element) : node.parentElement)?.closest<HTMLElement>('p[data-off]');
    if (!p) return null;
    let n = Number(p.dataset.off);
    const walk = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
    for (let t = walk.nextNode(); t; t = walk.nextNode()) {
      if (t === node) return n + at;
      n += t.textContent!.length;
    }
    return node === p ? n : null;
  };
  const onSelection = () => {
    const sel = document.getSelection();
    if (!current || !sel || sel.isCollapsed || !sel.rangeCount) return fire('sw3:rev-selection', null);
    const r = sel.getRangeAt(0);
    if (!body.contains(r.commonAncestorContainer)) return;
    const a = offsetOf(r.startContainer, r.startOffset);
    const b = offsetOf(r.endContainer, r.endOffset);
    if (a === null || b === null || b - a < 3) return fire('sw3:rev-selection', null);
    const text = commitmentOf(current)!.text!;
    // Out to whole words.
    let start = a;
    let end = b;
    while (start > 0 && /\w/.test(text[start - 1])) start--;
    while (end < text.length && /\w/.test(text[end])) end++;
    const range: Range = { start, end };
    fire('sw3:rev-selection', { code: current, range, quote: text.slice(start, end) });
  };
  body.addEventListener('mouseup', () => requestAnimationFrame(onSelection));
  body.addEventListener('keyup', (e) => e.shiftKey && onSelection());
  document.addEventListener('selectionchange', () => {
    if (document.getSelection()?.isCollapsed && document.activeElement?.closest('[data-aldo-panel]') == null) fire('sw3:rev-selection', null);
  });

  // ── Paint ───────────────────────────────────────────────────────────────────
  /** The entity a value's words name: by name, within its kind. */
  const valueKey = (field: string, value: string): string | null => {
    const kind = field === 'species' ? 'species' : field === 'season' ? 'season' : field === 'milestone' ? 'milestone' : null;
    if (!kind) return null;
    const v = norm(value);
    const e = (payload().entities ?? []).find((x) => x.kind === kind && (norm(x.name) === v || norm(x.name).includes(v) || v.includes(norm(x.name))));
    return e ? resolveEntity(e.id) : null;
  };

  let textSig = '';
  const paintText = (code: string) => {
    const c = commitmentOf(code);
    if (!c?.text) return;
    const reqs = requirementsOf(code);
    const flags = flagsOf(code);
    const dups = new Set(flags.filter((f) => f.kind === 'duplicate').map((f) => f.reqId));
    const spans = reqs
      .filter((r) => r.anchor)
      .map((r) => ({ id: r.id, start: r.anchor!.charStart, end: r.anchor!.charEnd, suggested: r.filing === 'suggested', dup: dups.has(r.id), label: r.name }));
    const values = reqs.flatMap((r) =>
      r.values.flatMap((v) => {
        const k = valueKey(v.field, v.value);
        return k ? [{ start: v.charStart, end: v.charEnd, key: k }] : [];
      }),
    );
    const html = paintAnchored({
      text: c.text,
      spans,
      gaps: flags.filter((f) => f.kind === 'uncovered').map((f) => f.range!),
      values,
      family: 'amber',
    });
    if (html === textSig) return;
    // New words under the selection: what was selected no longer points anywhere.
    if (textSig) fire('sw3:rev-selection', null);
    textSig = html;
    body.innerHTML = html;
    // One stroke per requirement per paragraph: the painter cuts a mark wherever a value's
    // words start or end; pieces of the same requirement that touch are joined again.
    body.querySelectorAll<HTMLElement>('mark.bcn-hl[data-sid]').forEach((m) => {
      const prev = m.previousSibling;
      if (prev instanceof HTMLElement && prev.matches('mark.bcn-hl') && prev.dataset.sid === m.dataset.sid) {
        prev.append(...m.childNodes);
        m.remove();
      }
    });
    for (const r of reqs) body.querySelectorAll(`mark.bcn-hl[data-sid="${CSS.escape(r.id)}"]`).forEach((m) => m.setAttribute('title', `${requirementRef(code, r.id)} ${r.name}`));
  };

  /** What is selected or hovered stands out; the rest of the highlights step back. */
  const paintFocus = () => {
    const on = new Set<string>([...(hover?.reqIds ?? [])]);
    const keys = new Set(hover?.valueKeys ?? []);
    body.querySelectorAll<HTMLElement>('mark.bcn-hl[data-sid]').forEach((m) => {
      m.toggleAttribute('data-active', m.dataset.sid === selected);
      m.toggleAttribute('data-hover', on.has(m.dataset.sid!));
    });
    body.querySelectorAll<HTMLElement>('.bcn-at-val').forEach((v) => v.toggleAttribute('data-lit', keys.has(v.dataset.v!)));
    body.toggleAttribute('data-focus', !!selected || on.size > 0);
  };

  const paintUnanchored = (code: string) => {
    const box = art.querySelector<HTMLElement>('[data-c-unanchored]')!;
    const reqs = requirementsOf(code);
    box.replaceChildren(
      ...reqs
        .filter((r) => !r.anchor)
        .map((r) => {
          const p = document.createElement('p');
          p.className = 'bcn-sw3c__ghost';
          p.textContent = `${r.name} quotes words that are not in the text: “${r.quote}”`;
          return p;
        }),
    );
  };

  const render = () => {
    const fs = files();
    if (!fs.length) return;
    if (!fs.some((f) => f.doc === activeDoc())) return setActiveDoc(fs[0].doc);
    const list = codes();
    if (!current || !list.includes(current)) current = list[0];
    const code = current;
    const c = commitmentOf(code)!;
    const parsed = parsedCodes().includes(code);
    if (selected && !requirementsOf(code).some((r) => r.id === selected)) selected = null;

    // Every file's cells, end to end.
    const cells: ScrubCell[] = [];
    const groups: ScrubGroup[] = [];
    let left = 0;
    let confirmed = 0;
    for (const f of fs)
      peek(f.doc, () => {
        groups.push({ label: f.short, start: cells.length });
        for (const x of f.codes) {
          const state = stateOf(x);
          left += state === 'flagged' ? 1 : 0;
          confirmed += state === 'confirmed' ? 1 : 0;
          cells.push({ id: keyOf(f.doc, x), label: short(x), title: identified(x).title, state, note: noteOf(x) });
        }
      });
    const at = cells.findIndex((x) => x.id === here());
    scrub.update({ cells, at, groups });
    const file = fs.find((f) => f.doc === activeDoc())!;
    pos.textContent = `${file.short}: ${list.indexOf(code) + 1} of ${list.length}. ${confirmed} confirmed, ${left} to settle.`;
    const nextBtn = root.querySelector<HTMLElement>('[data-rev-next-open]')!;
    nextBtn.hidden = !left;

    // The commitment.
    art.dataset.c = code;
    art.toggleAttribute('data-confirmed', isConfirmed(code));
    const badge = art.querySelector<HTMLElement>('[data-c-badge] .bcn-cbadge');
    if (badge && badge.textContent !== short(code)) badge.textContent = short(code);
    const title = identified(code).title;
    const h = art.querySelector<HTMLElement>('[data-c-title]')!;
    if (h.textContent !== title) h.textContent = title;
    const pages = art.querySelector<HTMLElement>('[data-c-pages]');
    const pl = pages?.querySelector('.esa-button__label') ?? pages;
    if (pl) pl.textContent = pagesLabel(c.pages);
    const confirmBtn = art.querySelector<HTMLButtonElement>('[data-c-confirm] button');
    if (confirmBtn) {
      const why = blocking(code).length;
      confirmBtn.disabled = !parsed || why > 0;
      confirmBtn.title = !parsed ? 'Still parsing' : why ? `Settle ${why} open item${why === 1 ? '' : 's'} first` : '';
    }
    art.querySelector<HTMLElement>('[data-c-parsing]')!.hidden = parsed;
    body.hidden = !parsed;
    if (parsed) {
      paintText(code);
      paintUnanchored(code);
    } else {
      textSig = '';
      body.replaceChildren();
    }
    paintFocus();
    attrs.show(code, selected);
    fire('sw3:rev-current', { code, reqId: selected });
  };

  document.addEventListener('sw3:rev-go', (e) => {
    const d = (e as CustomEvent<{ code: string; reqId?: string; doc?: string }>).detail;
    go(keyOf(d.doc ?? activeDoc(), d.code), d.reqId ?? null);
  });
  document.addEventListener('sw3:change', render);

  // ── Aldo folds to a rail; on a laptop it starts folded, so the text has room ──
  const PANEL_KEY = 'sw3:review-aldo';
  try {
    const saved = localStorage.getItem(PANEL_KEY);
    if (saved === 'closed' || (!saved && window.innerWidth < 1440)) root.dataset.aldo = 'closed';
  } catch {
    if (window.innerWidth < 1440) root.dataset.aldo = 'closed';
  }
  new MutationObserver(() => {
    try {
      localStorage.setItem(PANEL_KEY, root.dataset.aldo ?? 'open');
    } catch {
      /* no storage */
    }
  }).observe(root, { attributes: true, attributeFilter: ['data-aldo'] });

  // ── Fit the workspace to the window ─────────────────────────────────────────
  const fit = () => {
    const scroller = root.closest<HTMLElement>('.modern-layout__content, main') ?? document.scrollingElement;
    const top = root.getBoundingClientRect().top + (scroller?.scrollTop ?? 0);
    const pad = scroller instanceof HTMLElement ? parseFloat(getComputedStyle(scroller).paddingBottom) || 0 : 0;
    root.style.setProperty('--_fit', `${Math.max(520, window.innerHeight - top - pad - 8)}px`);
  };
  window.addEventListener('resize', fit);
  requestAnimationFrame(fit);

  // Arriving from a link to one commitment (#c-11-35) lands on it.
  const hash = location.hash.replace(/^#c-/, '');
  if (hash) want = keyOf('itp', `COA ${hash.replace(/-/g, '.')}`);
  if (want && keys().includes(want)) {
    const { doc, code } = split(want);
    current = code;
    if (doc !== activeDoc()) setActiveDoc(doc);
  }
  render();
}
