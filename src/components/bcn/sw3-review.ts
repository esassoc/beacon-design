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
//
// The highlights are edited by hand, as on the comments prototype: the selected one grows a
// grip at each end to drag (ends snap to whole words, stop at a paragraph break or the next
// requirement); in Highlight mode a selection of free words becomes a new requirement, its
// record opened to name it; Delete removes the selected one.

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
  createRequirement,
  removeRequirement,
  editRequirement,
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
import { offsetAt, offsetFromPoint, snapToWords } from '../../lib/text-offsets';
import { paintIcons } from '../../lib/lucide-extra';

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
  // The console sits in the step's panel, above this workspace (BcnSwStepNav).
  const nav = document.querySelector<HTMLElement>('[data-rev-nav]')!;

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
  const scrub = setupCommitmentScrubber(nav.querySelector('[data-commitment-scrubber]')!, { onPick: (id) => go(id) });
  /** One commitment along the run, file after file. */
  const step = (by: 1 | -1) => {
    const list = keys();
    const next = list[list.indexOf(here()) + by];
    if (next) go(next);
    return !!next;
  };
  const stepKey = (name: 'prev' | 'next') => {
    const host = nav.querySelector<HTMLElement>(`[data-rev-${name}]`)!;
    return (host.matches('button') ? host : host.querySelector('button')) as HTMLButtonElement;
  };
  nav.querySelector('[data-rev-prev]')!.addEventListener('click', () => step(-1));
  nav.querySelector('[data-rev-next]')!.addEventListener('click', () => step(1));
  // Arrow keys step commitments when nothing else has the keys.
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t.closest('input, textarea, select, [contenteditable], esa-textarea, esa-text-field, esa-combobox, esa-select, esa-side-dialog, [role="slider"], [data-aldo-panel]')) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (step(e.key === 'ArrowRight' ? 1 : -1)) e.preventDefault();
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

  // ── The tools ───────────────────────────────────────────────────────────────
  paintIcons(art);
  const tool = (name: string) => art.querySelector<HTMLElement>(`[data-c-tool="${name}"]`)!;
  const btnOf = (host: HTMLElement) => (host.matches('button') ? host : host.querySelector('button')) as HTMLButtonElement;
  const setMode = (mode: 'select' | 'mark') => {
    art.dataset.mode = mode;
    tool('select').setAttribute('aria-pressed', String(mode === 'select'));
    tool('mark').setAttribute('aria-pressed', String(mode === 'mark'));
    if (mode === 'mark') fire('sw3:rev-selection', null);
  };
  tool('select').addEventListener('click', () => setMode('select'));
  tool('mark').addEventListener('click', () => setMode(art.dataset.mode === 'mark' ? 'select' : 'mark'));
  const deleteSelected = () => {
    if (!current || !selected) return;
    const id = selected;
    selected = null;
    removeRequirement(id);
  };
  tool('delete').addEventListener('click', deleteSelected);
  art.querySelector('[data-c-peek]')!.addEventListener('click', () => current && fire('sw3:peek', { code: current, reqId: selected ?? undefined }));
  art.querySelector('[data-c-edit]')!.addEventListener('click', () => {
    const f = finds().find((x) => x.code === current);
    if (f) fire('sw3:edit', { id: f.id });
  });
  art.querySelector('[data-c-confirm]')!.addEventListener('click', () => current && !blocking(current).length && confirmCommitment(current));
  art.querySelector('[data-c-reopen]')!.addEventListener('click', () => current && reopenCommitment(current));
  // V, H, Delete and Esc, when nothing else has the keys.
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t.closest('input, textarea, select, [contenteditable], esa-textarea, esa-text-field, esa-combobox, esa-select, esa-side-dialog, esa-dialog, [data-aldo-panel]')) return;
    const k = e.key.toLowerCase();
    if (k === 'v') setMode('select');
    else if (k === 'h') setMode('mark');
    else if (k === 'escape' && art.dataset.mode === 'mark') setMode('select');
    else if ((e.key === 'Delete' || e.key === 'Backspace') && selected) (e.preventDefault(), deleteSelected());
  });

  // ── Editing a highlight: the free words around it, and its grips ─────────────
  /** A range clipped to one paragraph and to words no other requirement holds. */
  const clipToFree = (code: string, start: number, end: number, exceptId?: string) => {
    const text = commitmentOf(code)!.text!;
    const paraEnd = text.indexOf('\n\n', start);
    if (paraEnd !== -1) end = Math.min(end, paraEnd);
    for (const r of requirementsOf(code)) {
      if (r.id === exceptId || !r.anchor) continue;
      const a = r.anchor.charStart;
      const b = r.anchor.charEnd;
      if (a <= start && b > start) start = b;
      if (a >= start && a < end) end = a;
    }
    return snapToWords(text, start, end);
  };
  const page = art.querySelector<HTMLElement>('[data-c-page]')!;
  const grips = {
    start: art.querySelector<HTMLElement>('[data-c-grip="start"]')!,
    end: art.querySelector<HTMLElement>('[data-c-grip="end"]')!,
  };
  let drag: { which: 'start' | 'end'; start: number; end: number } | null = null;
  const placeGrips = () => {
    const marks = selected ? body.querySelectorAll<HTMLElement>(`mark.bcn-hl[data-sid="${CSS.escape(selected)}"]`) : [];
    if (!marks.length || body.hidden) {
      grips.start.hidden = grips.end.hidden = true;
      return;
    }
    const box = page.getBoundingClientRect();
    const first = marks[0].getClientRects()[0];
    const lastRects = marks[marks.length - 1].getClientRects();
    const last = lastRects[lastRects.length - 1];
    for (const [g, r, x] of [[grips.start, first, first.left], [grips.end, last, last.right]] as const) {
      g.hidden = false;
      g.style.left = `${x - box.left}px`;
      g.style.top = `${r.top - box.top}px`;
      g.style.height = `${r.height}px`;
    }
  };
  for (const which of ['start', 'end'] as const) {
    const grip = grips[which];
    grip.addEventListener('pointerdown', (e) => {
      const r = current && selected ? requirementsOf(current).find((x) => x.id === selected) : null;
      if (!r?.anchor) return;
      e.preventDefault();
      grip.setPointerCapture(e.pointerId);
      drag = { which, start: r.anchor.charStart, end: r.anchor.charEnd };
      art.dataset.dragging = '';
    });
    grip.addEventListener('pointermove', (e) => {
      if (!drag || !current || !selected) return;
      grip.style.pointerEvents = 'none'; // so the hit test finds the text beneath
      const off = offsetFromPoint(body, e.clientX, e.clientY);
      grip.style.pointerEvents = '';
      if (off < 0) return;
      const p =
        drag.which === 'start'
          ? clipToFree(current, Math.min(off, drag.end - 1), drag.end, selected)
          : clipToFree(current, drag.start, Math.max(off, drag.start + 1), selected);
      if (p.end - p.start < 3 || (p.start === drag.start && p.end === drag.end)) return;
      drag.start = p.start;
      drag.end = p.end;
      paintText(current, { id: selected, start: p.start, end: p.end });
      paintFocus();
      placeGrips();
    });
    grip.addEventListener('pointerup', () => {
      if (!drag || !current || !selected) return;
      const { start, end } = drag;
      drag = null;
      delete art.dataset.dragging;
      const r = requirementsOf(current).find((x) => x.id === selected);
      if (!r?.anchor || (r.anchor.charStart === start && r.anchor.charEnd === end)) return render();
      editRequirement(selected, { anchor: { ...r.anchor, charStart: start, charEnd: end }, quote: commitmentOf(current)!.text!.slice(start, end) });
    });
  }
  window.addEventListener('resize', placeGrips);
  root.querySelector('[data-rev-doc]')!.addEventListener('scroll', placeGrips, { passive: true });

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
  /** Highlight mode: the selected free words become a requirement, its record opened. */
  const markSelection = () => {
    const sel = document.getSelection();
    if (!current || !sel || sel.isCollapsed || !sel.rangeCount) return;
    const r = sel.getRangeAt(0);
    if (!body.contains(r.commonAncestorContainer)) return;
    const a = offsetAt(body, r.startContainer, r.startOffset);
    const b = offsetAt(body, r.endContainer, r.endOffset);
    sel.removeAllRanges();
    if (a < 0 || b < 0) return;
    const range = clipToFree(current, a, b);
    if (range.end - range.start < 3) return;
    const id = createRequirement(current, range);
    selected = id;
    setMode('select');
    render();
    fire('sw3:req-edit', { id });
  };
  const onSelection = () => {
    if (art.dataset.mode === 'mark') return markSelection();
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
  const paintText = (code: string, preview?: { id: string; start: number; end: number }) => {
    const c = commitmentOf(code);
    if (!c?.text) return;
    // A grip being dragged: that requirement at its proposed words, nothing saved yet.
    const reqs = requirementsOf(code).map((r) =>
      preview && r.id === preview.id && r.anchor ? { ...r, anchor: { ...r.anchor, charStart: preview.start, charEnd: preview.end } } : r,
    );
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
    for (const f of fs)
      peek(f.doc, () => {
        groups.push({ label: f.short, start: cells.length });
        for (const x of f.codes) {
          const state = stateOf(x);
          cells.push({ id: keyOf(f.doc, x), label: short(x), title: identified(x).title, state, note: noteOf(x) });
        }
      });
    const at = cells.findIndex((x) => x.id === here());
    scrub.update({ cells, at, groups });
    stepKey('prev').disabled = at <= 0;
    stepKey('next').disabled = at >= cells.length - 1;

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
    btnOf(tool('delete')).disabled = !selected;
    requestAnimationFrame(placeGrips);
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
