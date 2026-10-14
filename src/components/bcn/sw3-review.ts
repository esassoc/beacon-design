// Controller for <BcnSw3Review>. setupX shape: owns the review's view state (filter,
// continuous or pager, the current commitment, the selection) and repaints commitments,
// flags and the navigator from sw3-store.
//
// Contract, on `document`:
//   out  sw3:select    detail: { code, reqId?, gap? }   the selection changed (the panel listens)
//   in   sw3:select    the panel moves the selection (after a new requirement, a merge)
//   in   sw3:lit       detail: { code, range } | null   light a value's source words
//   out  sw3:entities  detail: { mergeId? }            open the project entity panel

import {
  initSw3,
  started,
  finished,
  startRun,
  skipToEnd,
  headPage,
  foundCodes,
  parsedCodes,
  commitmentOf,
  requirementsOf,
  flagsOf,
  blocking,
  isConfirmed,
  confirmCommitment,
  reopenCommitment,
  mergeSplit,
  payload,
  type Flag,
} from './sw3-store';
import { paintAnchored } from './anchored-text-paint';
import { boxesFor, type Range } from '../../lib/anchored-text';

export interface Selection {
  code: string;
  reqId?: string;
  gap?: Range;
}

const FLAG_KIND: Record<Flag['kind'], string> = {
  unanchored: 'Not in the source',
  duplicate: 'Likely duplicate',
  uncovered: 'Uncovered text',
  type: 'Type unclear',
  merge: 'Merge proposed',
  split: 'Found as two',
  missed: 'Marked by a person',
  empty: 'No requirements found',
};

const words = (s: string, n: number) => {
  const w = s.replace(/\s+/g, ' ').trim().split(' ');
  return w.length > n ? `${w.slice(0, n).join(' ')}…` : w.join(' ');
};

export function setupSw3Review(root: HTMLElement): void {
  const D = initSw3();
  // Opened directly with no run on record: show the finished scan of the default scope.
  if (!started()) {
    startRun({ first: D.scope.first, last: D.scope.last, instruction: '' });
    skipToEnd();
  }
  const base = root.dataset.base!.replace(/\/$/, '');
  const img = (n: number) => `${base}/source-docs/itp-pages/p${String(n).padStart(3, '0')}.webp`;
  const entityName = new Map((D.entities ?? []).map((e) => [e.id, e.name]));

  const doc = root.querySelector<HTMLElement>('[data-rev-doc]')!;
  const status = root.querySelector<HTMLElement>('[data-rev-status]')!;
  const flagTpl = root.querySelector<HTMLTemplateElement>('[data-rev-flag]')!;
  const sections = new Map<string, HTMLElement>();
  doc.querySelectorAll<HTMLElement>('[data-c]').forEach((el) => sections.set(el.dataset.c!, el));
  const navRows = new Map<string, HTMLElement>();
  root.querySelectorAll<HTMLElement>('[data-nav]').forEach((el) => navRows.set(el.dataset.nav!, el));

  let view: 'scroll' | 'pager' = 'scroll';
  let filter: 'all' | 'flagged' = 'all';
  let current: string | null = null;
  let sel: Selection | null = null;
  let lit: { code: string; range: Range } | null = null;
  const source = new Set<string>();

  // ── Toggles ─────────────────────────────────────────────────────────────────
  type Toggle = HTMLElement & { options: unknown; value: string };
  const toggles = root.querySelectorAll<Toggle>('esa-button-toggle[data-options]');
  customElements.whenDefined('esa-button-toggle').then(() => {
    toggles.forEach((t) => (t.options = JSON.parse(t.dataset.options!)));
  });
  root.querySelector('[data-rev-filter]')!.addEventListener('change', (e) => {
    filter = (e as CustomEvent<{ value: string }>).detail?.value === 'flagged' ? 'flagged' : 'all';
    render();
  });
  root.querySelector('[data-rev-view]')!.addEventListener('change', (e) => {
    view = (e as CustomEvent<{ value: string }>).detail?.value === 'pager' ? 'pager' : 'scroll';
    root.dataset.view = view;
    render();
    if (current) go(current);
  });

  // ── Selection ───────────────────────────────────────────────────────────────
  const select = (s: Selection | null, from: 'here' | 'panel' = 'here') => {
    sel = s;
    lit = null;
    if (s) current = s.code;
    if (from === 'here') document.dispatchEvent(new CustomEvent('sw3:select', { detail: s }));
    render();
  };
  document.addEventListener('sw3:select', (e) => {
    const d = (e as CustomEvent<Selection | null>).detail;
    if (d === sel) return;
    if (d && sel && d.code === sel.code && d.reqId === sel.reqId && d.gap?.start === sel.gap?.start) return;
    select(d, 'panel');
  });
  document.addEventListener('sw3:lit', (e) => {
    lit = (e as CustomEvent<{ code: string; range: Range } | null>).detail;
    if (lit) paintText(lit.code);
    else if (sel) paintText(sel.code);
  });

  const go = (code: string) => {
    current = code;
    render();
    const el = sections.get(code);
    if (el && view === 'scroll') el.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  root.querySelector('[data-rev-nav]')!.addEventListener('click', (e) => {
    const row = (e.target as HTMLElement).closest<HTMLElement>('[data-nav]');
    if (row) {
      select({ code: row.dataset.nav! });
      go(row.dataset.nav!);
    }
  });

  const visibleCodes = () => {
    const parsed = new Set(parsedCodes());
    return foundCodes().filter((c) => filter === 'all' || (parsed.has(c) && flagsOf(c).length > 0));
  };
  const step = (d: number) => {
    const list = visibleCodes();
    const i = Math.max(0, list.indexOf(current ?? ''));
    const next = list[Math.min(list.length - 1, Math.max(0, i + d))];
    if (next) select({ code: next });
  };
  root.querySelector('[data-rev-prev]')?.addEventListener('click', () => step(-1));
  root.querySelector('[data-rev-next]')?.addEventListener('click', () => step(1));

  // ── Clicks in a commitment ──────────────────────────────────────────────────
  doc.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const sec = t.closest<HTMLElement>('[data-c]');
    if (!sec) return;
    const code = sec.dataset.c!;
    const mark = t.closest<HTMLElement>('mark.bcn-hl[data-sid]');
    const gap = t.closest<HTMLElement>('mark.bcn-at-gap');
    const ghost = t.closest<HTMLElement>('[data-ghost]');
    const flag = t.closest<HTMLElement>('[data-flag]');
    if (t.closest('[data-c-confirm]')) {
      if (!blocking(code).length) confirmCommitment(code);
      return;
    }
    if (t.closest('[data-c-reopen]')) return reopenCommitment(code);
    if (mark) return select({ code, reqId: mark.dataset.sid! });
    if (ghost) return select({ code, reqId: ghost.dataset.ghost! });
    if (gap) {
      const f = flagsOf(code).find((x) => x.kind === 'uncovered' && x.range!.start === Number(gap.dataset.gap));
      if (f) select({ code, gap: f.range });
      return;
    }
    if (flag) {
      const f = flagsOf(code)[Number(flag.dataset.flag)];
      if (!f) return;
      if (f.kind === 'merge') return document.dispatchEvent(new CustomEvent('sw3:entities', { detail: { mergeId: f.mergeId } }));
      if (f.kind === 'split') {
        const split = payload().finds.find((x) => x.kind === 'split' && x.partOf === code);
        if (split) mergeSplit(split.id);
        return;
      }
      if (f.range) return select({ code, gap: f.range });
      if (f.reqId) return select({ code, reqId: f.reqId });
      return select({ code });
    }
    if (!t.closest('esa-button-toggle, button, a')) select({ code });
  });
  doc.addEventListener('change', (e) => {
    const t = e.target as HTMLElement;
    if (!t.matches('[data-c-source]')) return;
    const code = t.closest<HTMLElement>('[data-c]')!.dataset.c!;
    const v = (e as CustomEvent<{ value: string }>).detail?.value;
    if (v === 'page') source.add(code);
    else source.delete(code);
    paintSection(code);
  });

  // ── Paint ───────────────────────────────────────────────────────────────────
  const paintText = (code: string) => {
    const sec = sections.get(code);
    const c = commitmentOf(code);
    if (!sec || !c?.text) return;
    const reqs = requirementsOf(code);
    const flags = flagsOf(code);
    const dups = new Set(flags.filter((f) => f.kind === 'duplicate').map((f) => f.reqId));
    const spans = reqs
      .filter((r) => r.anchor)
      .map((r) => ({ id: r.id, start: r.anchor!.charStart, end: r.anchor!.charEnd, suggested: r.filing === 'suggested', dup: dups.has(r.id), label: r.name }));
    const gaps = flags.filter((f) => f.kind === 'uncovered').map((f) => f.range!);
    const html = paintAnchored({
      text: c.text,
      spans,
      gaps,
      activeId: sel?.code === code ? sel.reqId : null,
      lit: lit?.code === code ? lit.range : null,
    });
    const body = sec.querySelector<HTMLElement>('[data-c-text]')!;
    if (body.dataset.sig !== html) {
      body.innerHTML = html;
      body.dataset.sig = html;
    }
    if (sel?.code === code && sel.gap) body.querySelector(`mark.bcn-at-gap[data-gap="${sel.gap.start}"]`)?.setAttribute('data-active', '');
  };

  const paintFlags = (code: string) => {
    const sec = sections.get(code)!;
    const list = sec.querySelector<HTMLElement>('[data-c-flags]')!;
    const reqs = requirementsOf(code);
    const nameOf = (id?: string) => reqs.find((r) => r.id === id)?.name ?? '';
    const flags = flagsOf(code);
    const sig = JSON.stringify(flags);
    if (list.dataset.sig === sig) return;
    list.dataset.sig = sig;
    list.replaceChildren(
      ...flags.map((f, i) => {
        const li = (flagTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
        li.dataset.kind = f.kind;
        li.querySelector('button')!.dataset.flag = String(i);
        li.querySelector('[data-flag-kind]')!.textContent = FLAG_KIND[f.kind];
        const c = commitmentOf(code)!;
        let text = '';
        if (f.kind === 'unanchored' || f.kind === 'type') text = nameOf(f.reqId);
        else if (f.kind === 'duplicate') text = `${nameOf(f.reqId)} and ${nameOf(f.otherId)}`;
        else if (f.kind === 'uncovered') text = `“${words(c.text!.slice(f.range!.start, f.range!.end), 9)}”`;
        else if (f.kind === 'merge') {
          const m = payload().merges.find((x) => x.id === f.mergeId)!;
          text = `${m.fromIds.map((id) => entityName.get(id)).join(', ')} → ${entityName.get(m.intoId)}`;
        } else if (f.kind === 'split') text = 'Merge the find on p. 156 into this commitment';
        li.querySelector('[data-flag-text]')!.textContent = text;
        return li;
      }),
    );
  };

  const paintUnanchored = (code: string) => {
    const sec = sections.get(code)!;
    const box = sec.querySelector<HTMLElement>('[data-c-unanchored]')!;
    const reqs = requirementsOf(code).filter((r) => !r.anchor && flagsOf(code).some((f) => f.kind === 'unanchored' && f.reqId === r.id));
    const sig = reqs.map((r) => `${r.id}${sel?.reqId === r.id ? '*' : ''}`).join('|');
    if (box.dataset.sig === sig) return;
    box.dataset.sig = sig;
    box.replaceChildren(
      ...reqs.map((r) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'bcn-sw3c__ghost typography-body-md';
        b.dataset.ghost = r.id;
        b.toggleAttribute('data-active', sel?.reqId === r.id);
        b.textContent = `“${r.quote}”`;
        return b;
      }),
    );
  };

  const paintCrop = (code: string) => {
    const sec = sections.get(code)!;
    const crop = sec.querySelector<HTMLElement>('[data-c-crop]')!;
    const on = source.has(code);
    crop.hidden = !on;
    sec.querySelector<HTMLElement>('[data-c-text]')!.hidden = on;
    if (!on) return;
    const c = commitmentOf(code)!;
    const reqs = requirementsOf(code).filter((r) => r.anchor);
    const sig = reqs.map((r) => `${r.id}:${r.anchor!.charStart}-${r.anchor!.charEnd}${sel?.reqId === r.id ? '*' : ''}`).join('|');
    if (crop.dataset.sig === sig) return;
    crop.dataset.sig = sig;
    const aspect = (payload().pages?.[0]?.aspect ?? 1.2941);
    const pad = 0.015;
    crop.replaceChildren(
      ...c.blocks.map((blk) => {
        const bx = Math.max(0, blk.x - pad);
        const by = Math.max(0, blk.y - pad);
        const bw = Math.min(1 - bx, blk.w + pad * 2);
        const bh = Math.min(1 - by, blk.h + pad * 2);
        const wrap = document.createElement('figure');
        wrap.style.margin = '0';
        const frame = document.createElement('div');
        frame.className = 'bcn-sw3c__frame';
        frame.style.aspectRatio = `${bw} / ${bh * aspect}`;
        const im = document.createElement('img');
        im.src = img(blk.page);
        im.alt = `Page ${blk.page} of the ITP`;
        im.loading = 'lazy';
        Object.assign(im.style, { width: `${100 / bw}%`, left: `${(-bx / bw) * 100}%`, top: `${(-by / bh) * 100}%` });
        frame.append(im);
        reqs.forEach((r, ri) => {
          for (const b of boxesFor(c.lines, r.anchor!.charStart, r.anchor!.charEnd).filter((x) => x.page === blk.page)) {
            const el = document.createElement('div');
            el.className = 'bcn-sw3c__cbox';
            el.dataset.shade = String((ri % 2) + 1);
            el.toggleAttribute('data-active', sel?.reqId === r.id);
            el.title = r.name;
            Object.assign(el.style, {
              left: `${((b.x - bx) / bw) * 100}%`,
              top: `${((b.y - by) / bh) * 100}%`,
              width: `${(b.w / bw) * 100}%`,
              height: `${(b.h / bh) * 100}%`,
            });
            frame.append(el);
          }
        });
        const cap = document.createElement('figcaption');
        cap.className = 'bcn-sw3c__cpage typography-microcopy-sm';
        cap.textContent = `p. ${blk.page}`;
        wrap.append(frame, cap);
        return wrap;
      }),
    );
  };

  const paintSection = (code: string) => {
    const sec = sections.get(code)!;
    const parsed = parsedCodes().includes(code);
    sec.querySelector<HTMLElement>('[data-c-parsing]')!.hidden = parsed;
    sec.querySelector<HTMLElement>('[data-c-text]')!.hidden = !parsed || source.has(code);
    sec.toggleAttribute('data-confirmed', isConfirmed(code));
    sec.toggleAttribute('data-current', code === current);
    const btn = sec.querySelector<HTMLButtonElement>('[data-c-confirm] button');
    if (btn) btn.disabled = !parsed || blocking(code).length > 0;
    if (!parsed) {
      sec.querySelector<HTMLElement>('[data-c-flags]')!.replaceChildren();
      return;
    }
    paintText(code);
    paintFlags(code);
    paintUnanchored(code);
    paintCrop(code);
  };

  const navMeta = (code: string, parsed: boolean) => {
    if (!parsed) return { state: 'parsing', text: 'Parsing' };
    if (isConfirmed(code)) return { state: 'confirmed', text: 'Confirmed' };
    const n = flagsOf(code).length;
    if (n) return { state: 'flagged', text: `${n} to review` };
    const r = requirementsOf(code).length;
    return { state: 'ready', text: `${r} requirement${r === 1 ? '' : 's'}` };
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  const render = () => {
    const found = foundCodes();
    const parsed = new Set(parsedCodes());
    const shown = new Set(visibleCodes());
    if (!current || !shown.has(current)) current = [...shown][0] ?? null;

    for (const [code, sec] of sections) {
      const visible = shown.has(code) && (view === 'scroll' || code === current);
      sec.hidden = !visible;
      if (visible) paintSection(code);
    }
    for (const [code, row] of navRows) {
      row.hidden = !shown.has(code);
      if (row.hidden) continue;
      const m = navMeta(code, parsed.has(code));
      row.dataset.state = m.state;
      row.querySelector('[data-nav-meta]')!.textContent = m.text;
      row.toggleAttribute('data-current', code === current);
    }

    const flagged = [...parsed].filter((c) => flagsOf(c).length).length;
    const confirmed = [...parsed].filter(isConfirmed).length;
    const scanning = started() && !finished() && headPage() !== null;
    status.textContent =
      `${found.length} commitments: ${flagged} need a person, ${confirmed} confirmed.` + (scanning ? ` Scan on page ${headPage()}.` : '');
    const pos = root.querySelector<HTMLElement>('[data-rev-pos]');
    if (pos) pos.textContent = `${Math.max(1, [...shown].indexOf(current ?? '') + 1)} of ${shown.size}`;
  };

  // The commitment at the top of the scroll is the current one.
  const io = new IntersectionObserver(
    (entries) => {
      if (view !== 'scroll') return;
      const top = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!top) return;
      const code = (top.target as HTMLElement).dataset.c!;
      if (code === current) return;
      current = code;
      for (const [c, row] of navRows) row.toggleAttribute('data-current', c === code);
      for (const [c, sec] of sections) sec.toggleAttribute('data-current', c === code);
      navRows.get(code)?.scrollIntoView({ block: 'nearest' });
    },
    { rootMargin: '0px 0px -70% 0px' },
  );
  sections.forEach((s) => io.observe(s));

  document.addEventListener('sw3:change', render);
  render();

  // Arriving from a link to one commitment (#c-11-35) lands on it.
  const hash = location.hash.replace(/^#c-/, '');
  if (hash) {
    const code = `COA ${hash.replace(/-/g, '.')}`;
    if (sections.has(code)) requestAnimationFrame(() => go(code));
  }
}
