// Controller for <BcnSw3Index>. setupX shape: owns the phase on the page (no index, building,
// built, drafting, drafted), which subcategory is in view and which draft is open, the
// Draft run's clock, and repaints the scrubber and the subcategory page from
// sw3-index-store. The index (bcn-sw3-index-tree) and Aldo draw themselves.
//
// Contract, on `document`:
//   out  sw3i:current  detail: { sub, entryId }          the subcategory in view
//   in   sw3i:go       detail: { sub, entryId? }         a subcategory or draft pressed
//   out  sw3i:tick                                       the Draft run moved (strip, log)
//   out  sw3i:locator  detail: { doc, code, n, excerpt } a locator (the commitment panel)
//   out  sw3i:edit     detail: { id }                    Edit a draft (side panel)
//   out  sw3i:merge    detail: { ids }                   Merge the ticked drafts (dialog)
//   out  sw3i:rename   detail: { id }                    name a category just made (index)

import '@esa/ecology/esa-confirm-dialog';
import '@esa/ecology/esa-checkbox';
import {
  initIndex,
  phase,
  subs,
  subOf,
  addCategory,
  buildIndex,
  finishBuild,
  BUILD_MS,
  loadDrafts,
  draftsReady,
  runProgress,
  finishDraft,
  entry,
  entriesIn,
  titleOf,
  statusOf,
  pendingIn,
  homeIn,
  isOpened,
  markOpened,
  alsoIn,
  blocked,
  NO_SCOPE,
  approve,
  discard,
  restore,
  approvable,
  approveAll,
  discardAll,
  restoreAll,
  mergeRefusal,
  AUDIENCES,
  totals,
} from './sw3-index-store';
import { initSw3, docIds, peek, started, startRun, skipToEnd, payload, requirementRef, requirementsOf, commitmentOf } from './sw3-store';
import { setupCommitmentScrubber, type ScrubCell, type ScrubGroup } from './commitment-scrubber';
import { fillGlyph } from './comment-glyphs';
import { requirementIdFor } from '../../data/setup-wizard-3-step';
import type { IndexAction, IndexEntry, IndexLocator } from '../../data/sw3-index-types';
import { toast } from '../../lib/snackbar';

const KEY = 'sw3:index-at';
const PAUSED = 'A Draft run is still adding drafts. Approve, discard and restore are paused until it finishes.';
const short = (code: string) => code.replace(/^COA\s+/, '');
const plural = (n: number, one: string, many = `${one}s`) => `${n.toLocaleString('en-US')} ${n === 1 ? one : many}`;

/** A locator as step 2 numbers it now: 11.29:3, CMP-14:2. */
export const locatorRef = (l: IndexLocator): string => {
  const ref = peek(l.doc, () => requirementRef(l.code, requirementIdFor(l.code, l.n)));
  return ref || `${short(l.code)}:${l.n}`;
};
/** The requirement a locator names, as step 2 left it: its name and its words. */
export const requirementAt = (l: IndexLocator): { name: string; text: string } | null =>
  peek(l.doc, () => {
    const r = requirementsOf(l.code).find((x) => x.id === requirementIdFor(l.code, l.n));
    if (!r) return null;
    // Its words in the commitment: the anchored span, else the quote the extraction returned.
    const c = commitmentOf(l.code);
    const text = r.anchor && c?.text ? c.text.slice(r.anchor.charStart, r.anchor.charEnd) : r.quote;
    return { name: r.name, text: text.trim() };
  }) ?? null;

/** An action's deadline in words: "30 days before Start of Construction". */
export const deadlineText = (a: IndexAction): string => {
  const d = a.deadline;
  if (!d?.milestone) return '';
  const at = d.direction ? `${d.direction} ${d.milestone}` : d.milestone;
  if (!d.offset || !d.unit) return at;
  const unit = d.unit.toLowerCase().replace(/s$/, '');
  return `${d.offset} ${unit}${d.offset === 1 ? '' : 's'} ${d.direction.toLowerCase() || 'before'} ${d.milestone}`;
};

export function setupSw3Index(root: HTMLElement): void {
  initIndex();
  initSw3();
  // Step 2's commitments, as the review left them (or its finished scan, opened directly).
  for (const id of docIds())
    peek(id, () => {
      if (started()) return;
      const D = payload();
      startRun({ first: D.scope.first, last: D.scope.last, instruction: '' });
      skipToEnd();
    });
  const fire = (name: string, detail?: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));
  const pos = root.querySelector<HTMLElement>('[data-ix-pos]')!;
  const page = root.querySelector<HTMLElement>('[data-sw3-index-page]')!;
  const pane = root.querySelector<HTMLElement>('[data-ix-page]')!;
  const groupsEl = page.querySelector<HTMLElement>('[data-ip-groups]')!;
  const tpl = (name: string) => (page.querySelector<HTMLTemplateElement>(`[data-ip-tpl="${name}"]`)!.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
  fillGlyph(root.querySelector('[data-ix-build]')!, 'sparkles');
  fillGlyph(page.querySelector('[data-ip-merge]')!, 'merge');

  let current = '';
  let open: string | null = null;
  const ticked = new Set<string>();
  try {
    current = localStorage.getItem(KEY) ?? '';
  } catch {
    /* no storage */
  }

  const go = (sub: string, entryId: string | null = null) => {
    if (!subOf(sub)) return;
    const moved = sub !== current;
    current = sub;
    open = entryId;
    if (moved) ticked.clear();
    try {
      localStorage.setItem(KEY, sub);
    } catch {
      /* no storage */
    }
    render();
    if (moved && !entryId) pane.scrollTop = 0;
    if (entryId) page.querySelector(`[data-entry="${CSS.escape(entryId)}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  };

  // ── No index yet ─────────────────────────────────────────────────────────────
  root.querySelector('[data-ix-build]')!.addEventListener('click', () => buildIndex());
  root.querySelector('[data-ix-add-cat]')!.addEventListener('click', () => fire('sw3i:rename', { id: addCategory() }));

  // ── The scrubber ─────────────────────────────────────────────────────────────
  const scrub = setupCommitmentScrubber(root.querySelector('[data-commitment-scrubber]')!, { onPick: (id) => go(id) });
  const cellOf = (id: string, ph: string): { state: ScrubCell['state']; note: string } => {
    if (ph === 'drafting') return { state: 'parsing', note: 'Drafting' };
    if (ph !== 'drafted') {
      const n = subOf(id)!.sub.evidence.length;
      return { state: 'ready', note: n ? `${plural(Math.min(3, n), 'requirement')} cited` : 'Nothing cited' };
    }
    const pending = pendingIn(id);
    const all = homeIn(id).length;
    if (pending && !isOpened(id)) return { state: 'flagged', note: `Not yet opened, ${pending} to review` };
    if (pending) return { state: 'ready', note: `${pending} to review` };
    if (all) return { state: 'confirmed', note: 'Every draft decided' };
    return { state: 'ready', note: 'Nothing drafted' };
  };
  const toReview = () => subs().filter(({ sub }) => pendingIn(sub.id) > 0);
  root.querySelector('[data-ix-next-open]')!.addEventListener('click', () => {
    const list = subs().map((s) => s.sub.id);
    const i = list.indexOf(current);
    const order = [...list.slice(i + 1), ...list.slice(0, i + 1)];
    const next = order.find((id) => pendingIn(id) && !isOpened(id)) ?? order.find((id) => pendingIn(id));
    if (next) go(next);
  });
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t.closest('input, textarea, select, [contenteditable], esa-textarea, esa-text-field, esa-select, esa-side-dialog, esa-dialog, [role="slider"], [data-aldo-panel]')) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const list = subs().map((s) => s.sub.id);
    const next = list[list.indexOf(current) + (e.key === 'ArrowRight' ? 1 : -1)];
    if (next) (e.preventDefault(), go(next));
  });

  // ── The page: helpers ────────────────────────────────────────────────────────
  const link = (text: string, attrs: Record<string, string>) => {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = text;
    Object.assign(a.dataset, attrs);
    return a;
  };
  const field = (dl: HTMLElement, label: string, value: Node | string, needs = false) => {
    if (value === '') return;
    const dt = document.createElement('dt');
    dt.textContent = label;
    const dd = document.createElement('dd');
    dd.append(value);
    dd.toggleAttribute('data-needs', needs);
    dl.append(dt, dd);
  };
  const locsOf = (en: IndexEntry) => en.locators.filter((l, i, a) => a.findIndex((x) => x.doc === l.doc && x.code === l.code && x.n === l.n) === i);
  const setLabel = (host: HTMLElement, text: string, disabled?: boolean) => {
    const l = host.querySelector('.esa-button__label');
    if (l) l.textContent = text;
    const b = host.matches('button') ? (host as HTMLButtonElement) : host.querySelector('button');
    if (b && disabled !== undefined) b.disabled = disabled;
    return host;
  };

  // ── Before drafting: what the proposal cited ─────────────────────────────────
  const paintCited = () => {
    const ref = subOf(current)!;
    const list = page.querySelector<HTMLElement>('[data-ip-reqs]')!;
    const ev = ref.sub.evidence.slice(0, 3);
    list.replaceChildren(
      ...ev.map((l, i) => {
        const li = tpl('req');
        const r = requirementAt(l);
        const badge = li.querySelector('[data-r-badge] .esa-badge__text');
        if (badge) badge.textContent = locatorRef(l);
        li.querySelector<HTMLElement>('[data-r-name]')!.textContent = r?.name ?? l.code;
        li.querySelector<HTMLElement>('[data-r-text]')!.textContent = r?.text ?? '';
        li.querySelector<HTMLElement>('[data-r-open]')!.dataset.cite = String(i);
        return li;
      }),
    );
    page.querySelector<HTMLElement>('[data-ip-cited-none]')!.hidden = ev.length > 0;
  };

  // ── Drafted: the review ──────────────────────────────────────────────────────
  const entryRow = (en: IndexEntry) => {
    const li = tpl('entry');
    const status = statusOf(en.id);
    li.dataset.entry = en.id;
    li.dataset.status = status;
    const isOpen = open === en.id;
    li.toggleAttribute('data-open', isOpen);
    const tick = li.querySelector<HTMLElement & { checked: boolean }>('esa-checkbox')!;
    tick.checked = ticked.has(en.id);
    tick.setAttribute('aria-label', `Select “${titleOf(en)}” for merge`);
    const chip = li.querySelector<HTMLElement>('[data-e-chip] .esa-badge__text');
    if (chip) chip.textContent = en.kind === 'action' ? 'Action' : en.class;
    const name = li.querySelector<HTMLAnchorElement>('[data-e-toggle]')!;
    name.textContent = titleOf(en);
    name.href = `#${en.id}`;
    name.setAttribute('aria-expanded', String(isOpen));
    const locs = li.querySelector<HTMLElement>('[data-e-locs]')!;
    locsOf(en).forEach((l, i) => {
      if (i) locs.append(', ');
      locs.append(link(locatorRef(l), { loc: String(en.locators.indexOf(l)), entry: en.id }));
    });

    const rec = li.querySelector<HTMLElement>('[data-e-rec]')!;
    rec.hidden = !isOpen;
    if (!isOpen) return li;
    const dl = rec.querySelector<HTMLElement>('[data-e-fields]')!;
    if (en.kind === 'obligation') {
      field(dl, 'Audience', en.audience);
      field(dl, 'Applies when', en.trigger || 'Always');
      if (en.monitorSigns.length) {
        const ul = document.createElement('ul');
        for (const s of en.monitorSigns) {
          const x = document.createElement('li');
          x.textContent = s;
          ul.append(x);
        }
        field(dl, 'Monitor signs', ul);
      }
      const others = alsoIn(en.id).filter((s) => subOf(s));
      if (others.length) {
        const span = document.createElement('span');
        others.forEach((s, i) => {
          if (i) span.append(', ');
          span.append(link(subOf(s)!.sub.name, { goSub: s }));
        });
        field(dl, 'Also filed in', span);
      }
    } else {
      field(dl, 'Type', en.type);
      field(dl, 'Scope', en.scope || 'No scope', !en.scope);
      field(dl, 'Responsible party', en.responsibleParty || 'Needs input', !en.responsibleParty);
      field(dl, 'Frequency', en.recurrence ? `${en.frequency}, ${en.recurrence}` : en.frequency);
      field(dl, 'Deadline', deadlineText(en));
      field(dl, 'Expected evidence', en.expectedEvidence);
      field(dl, 'Text', en.text);
    }
    const block = rec.querySelector<HTMLElement>('[data-e-block]')!;
    block.hidden = !(status === 'draft' && blocked(en.id));
    block.textContent = NO_SCOPE;
    setLabel(rec.querySelector<HTMLElement>('[data-e-approve]')!, 'Approve', status === 'draft' && blocked(en.id));
    const passages = rec.querySelector<HTMLElement>('[data-e-passages]')!;
    for (const l of en.locators) {
      if (!l.excerpt) continue;
      const p = document.createElement('p');
      p.className = 'bcn-sw3ip__passage';
      const q = document.createElement('q');
      q.textContent = l.excerpt;
      p.append(link(locatorRef(l), { loc: String(en.locators.indexOf(l)), entry: en.id }), q);
      passages.append(p);
    }
    return li;
  };

  const paintReview = () => {
    const ref = subOf(current)!;
    const list = entriesIn(current);
    const live = list.filter((en) => statusOf(en.id) !== 'discarded');
    const gone = list.filter((en) => statusOf(en.id) === 'discarded');
    const drafts = list.filter((en) => statusOf(en.id) === 'draft').length;
    const ok = approvable(current).length;
    setLabel(page.querySelector<HTMLElement>('[data-ip-approve-all]')!, ok ? `Approve all (${ok})` : 'Approve all', !ok);
    setLabel(page.querySelector<HTMLElement>('[data-ip-discard-all]')!, 'Discard all', !drafts);
    if (open && !list.some((en) => en.id === open)) open = null;
    for (const id of [...ticked]) if (!list.some((en) => en.id === id && statusOf(id) === 'draft')) ticked.delete(id);

    // Actions first; then obligations by who reads them, those with none last.
    const groups: { name: string; items: IndexEntry[] }[] = [
      { name: 'Actions', items: live.filter((en) => en.kind === 'action') },
      ...AUDIENCES.map((a) => ({ name: a, items: live.filter((en) => en.kind === 'obligation' && en.audience === a) })),
      { name: 'No audience', items: live.filter((en) => en.kind === 'obligation' && !AUDIENCES.includes(en.audience)) },
    ];
    groupsEl.replaceChildren(
      ...groups
        .filter((g) => g.items.length)
        .map((g) => {
          const sec = tpl('group');
          sec.querySelector<HTMLElement>('[data-g-name]')!.textContent = `${g.name} (${g.items.length})`;
          sec.querySelector<HTMLElement>('[data-g-entries]')!.append(...g.items.map(entryRow));
          return sec;
        }),
    );
    const empty = page.querySelector<HTMLElement>('[data-ip-empty]')!;
    empty.hidden = list.length > 0;
    empty.textContent = totals().drafts ? `Nothing was drafted into ${ref.sub.name}.` : 'Nothing drafted yet.';

    const disc = page.querySelector<HTMLDetailsElement>('[data-ip-discarded]')!;
    disc.hidden = !gone.length;
    page.querySelector<HTMLElement>('[data-ip-discarded-label]')!.textContent = `Discarded (${gone.length})`;
    page.querySelector<HTMLElement>('[data-ip-restore-all-wrap]')!.hidden = gone.length < 2;
    page.querySelector<HTMLElement>('[data-ip-discarded-list]')!.replaceChildren(...gone.map(entryRow));
    if (open && gone.some((en) => en.id === open)) disc.open = true;
    paintTicked();
  };

  const paintTicked = () => {
    const bar = page.querySelector<HTMLElement>('[data-ip-selected]')!;
    bar.hidden = ticked.size < 2;
    page.querySelector<HTMLElement>('[data-ip-selected-n]')!.textContent = `${ticked.size} selected`;
    const why = mergeRefusal([...ticked]);
    const m = page.querySelector<HTMLElement>('[data-ip-merge]')!;
    setLabel(m, 'Merge', !!why);
    const b = m.matches('button') ? (m as HTMLButtonElement) : m.querySelector('button');
    if (b) b.title = why ?? '';
  };

  const paintPage = () => {
    const ph = phase();
    const ref = subOf(current)!;
    page.querySelector<HTMLElement>('[data-ip-cat]')!.textContent = ref.cat.name;
    page.querySelector<HTMLElement>('[data-ip-title]')!.textContent = ref.sub.name;
    // A Draft again run keeps the review on screen; its keys pause until the run ends.
    const drafted = (ph === 'drafted' || (ph === 'drafting' && totals().drafts > 0)) && draftsReady();
    page.querySelector<HTMLElement>('[data-ip-acts]')!.hidden = !drafted;
    page.querySelector<HTMLElement>('[data-ip-cited]')!.hidden = drafted;
    page.querySelector<HTMLElement>('[data-ip-review]')!.hidden = !drafted;
    if (drafted) {
      markOpened(current);
      paintReview();
    } else paintCited();
  };

  // ── The page: pressing things ────────────────────────────────────────────────
  type Confirm = HTMLElement & { show(): void; message: string; heading: string };
  const approveDlg = document.createElement('esa-confirm-dialog') as Confirm;
  approveDlg.setAttribute('confirm-label', 'Approve');
  approveDlg.setAttribute('cancel-label', 'Cancel');
  root.append(approveDlg);
  approveDlg.addEventListener('confirm', () => {
    const n = approvable(current).length;
    const left = pendingIn(current) - n;
    approveAll(current);
    toast(left ? `Approved ${n}. ${plural(left, 'draft')} with no scope stay drafts.` : `Approved ${plural(n, 'draft')}.`, 'success');
  });

  page.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const cite = t.closest<HTMLElement>('[data-r-open]');
    if (cite) {
      e.preventDefault();
      const l = subOf(current)!.sub.evidence[Number(cite.dataset.cite)];
      if (l) fire('sw3i:locator', { ...l, excerpt: requirementAt(l)?.text ?? '' });
      return;
    }
    const loc = t.closest<HTMLElement>('a[data-loc]');
    if (loc) {
      e.preventDefault();
      const l = entry(loc.dataset.entry!)?.locators[Number(loc.dataset.loc)];
      if (l) fire('sw3i:locator', l);
      return;
    }
    const goSub = t.closest<HTMLElement>('a[data-go-sub]');
    if (goSub) {
      e.preventDefault();
      go(goSub.dataset.goSub!);
      return;
    }
    const li = t.closest<HTMLElement>('[data-entry]');
    if (!li) return;
    const id = li.dataset.entry!;
    if (phase() === 'drafting' && !t.closest('[data-e-toggle]')) {
      toast(PAUSED, 'error');
      return;
    }
    if (t.closest('[data-e-toggle]')) {
      e.preventDefault();
      open = open === id ? null : id;
      render();
    } else if (t.closest('[data-e-approve]')) approve([id]);
    else if (t.closest('[data-e-discard]')) discard([id]);
    else if (t.closest('[data-e-restore]')) restore([id]);
    else if (t.closest('[data-e-edit]')) fire('sw3i:edit', { id });
  });
  page.addEventListener('change', (e) => {
    const li = (e.target as HTMLElement).closest<HTMLElement>('[data-entry]');
    if (!li || !(e.target as HTMLElement).matches('esa-checkbox')) return;
    const id = li.dataset.entry!;
    (e as CustomEvent<{ checked: boolean }>).detail?.checked ? ticked.add(id) : ticked.delete(id);
    paintTicked();
  });
  page.querySelector('[data-ip-approve-all]')!.addEventListener('click', () => {
    const n = approvable(current).length;
    if (!n) return;
    approveDlg.heading = 'Approve all?';
    approveDlg.message = `Approve ${plural(n, 'draft')} in this subcategory? Approved drafts stay editable, but can't be returned to drafts.`;
    approveDlg.show();
  });
  page.querySelector('[data-ip-discard-all]')!.addEventListener('click', () => discardAll(current));
  page.querySelector('[data-ip-restore-all]')!.addEventListener('click', () => restoreAll(current));
  page.querySelector('[data-ip-merge]')!.addEventListener('click', () => {
    if (!mergeRefusal([...ticked])) fire('sw3i:merge', { ids: [...ticked] });
  });
  page.querySelector('[data-ip-clear]')!.addEventListener('click', () => {
    ticked.clear();
    render();
  });
  document.addEventListener('sw3i:merged', () => ticked.clear());

  // ── Repaint ──────────────────────────────────────────────────────────────────
  const render = () => {
    const ph = phase();
    root.dataset.phase = ph;
    if (ph === 'empty' || ph === 'building') return;
    const all = subs();
    if (!all.length) {
      // Categories made by hand, no subcategory yet: the index pane is the work.
      scrub.update({ cells: [], at: -1, groups: [] });
      pos.textContent = 'No subcategories yet.';
      root.querySelector<HTMLElement>('[data-ix-next-open]')!.hidden = true;
      page.querySelector<HTMLElement>('[data-ip-cat]')!.textContent = '';
      page.querySelector<HTMLElement>('[data-ip-title]')!.textContent = '';
      page.querySelector<HTMLElement>('[data-ip-acts]')!.hidden = true;
      page.querySelector<HTMLElement>('[data-ip-cited]')!.hidden = true;
      page.querySelector<HTMLElement>('[data-ip-review]')!.hidden = true;
      return;
    }
    if (!subOf(current)) current = all[0].sub.id;
    const cells: ScrubCell[] = [];
    const groups: ScrubGroup[] = [];
    for (const { sub, cat } of all) {
      if (!groups.length || groups.at(-1)!.label !== cat.name) groups.push({ label: cat.name, start: cells.length });
      const c = cellOf(sub.id, ph);
      cells.push({ id: sub.id, label: sub.name, title: cat.name, state: c.state, note: c.note });
    }
    scrub.update({ cells, at: all.findIndex((s) => s.sub.id === current), groups });
    const ref = subOf(current)!;
    const left = ph === 'drafted' ? toReview().length : 0;
    pos.textContent =
      ph === 'drafted'
        ? `${ref.sub.name}: ${ref.i + 1} of ${all.length}. ${left ? `${plural(left, 'subcategory', 'subcategories')} with drafts to review.` : 'Every draft decided.'}`
        : `${ref.sub.name}: ${ref.i + 1} of ${all.length}.`;
    root.querySelector<HTMLElement>('[data-ix-next-open]')!.hidden = !left;
    paintPage();
    fire('sw3i:current', { sub: current, entryId: open });
  };

  document.addEventListener('sw3i:go', (e) => {
    const d = (e as CustomEvent<{ sub: string; entryId?: string }>).detail;
    go(d.sub, d.entryId ?? null);
  });
  document.addEventListener('sw3i:change', () => {
    clock();
    render();
    requestAnimationFrame(fit);
  });
  document.addEventListener('sw3:change', render);

  // ── The clock: Build index's wait, and the Draft run ─────────────────────────
  let building: number | null = null;
  let ticking: number | null = null;
  const clock = () => {
    const ph = phase();
    if (ph === 'building' && building === null) building = window.setTimeout(() => ((building = null), finishBuild(), toast('Index built.', 'success')), BUILD_MS);
    if (ph === 'drafting' && ticking === null) {
      void loadDrafts();
      ticking = window.setInterval(() => {
        const p = runProgress();
        fire('sw3i:tick');
        if (p?.finished && draftsReady()) {
          window.clearInterval(ticking!);
          ticking = null;
          finishDraft();
          const t = totals();
          toast(`Drafted. ${plural(t.pending, 'draft')} to review.`, 'success');
        }
      }, 200);
    }
  };

  // ── Aldo folds to a rail; on a laptop it starts folded, so the page has room ──
  const PANEL_KEY = 'sw3:index-aldo';
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

  // ── Fit the workspace to the window ──────────────────────────────────────────
  const fit = () => {
    const scroller = root.closest<HTMLElement>('.modern-layout__content, main') ?? document.scrollingElement;
    const top = root.getBoundingClientRect().top + (scroller?.scrollTop ?? 0);
    const padB = scroller instanceof HTMLElement ? parseFloat(getComputedStyle(scroller).paddingBottom) || 0 : 0;
    root.style.setProperty('--_fit', `${Math.max(520, window.innerHeight - top - padB - 8)}px`);
  };
  window.addEventListener('resize', fit);
  requestAnimationFrame(fit);

  clock();
  render();
  // A drafted index needs its drafts before the review can draw.
  if (phase() === 'drafted' || phase() === 'drafting') void loadDrafts();
  // Aldo's script may register after this one: say where we are once more, next frame.
  requestAnimationFrame(() => current && fire('sw3i:current', { sub: current, entryId: open }));
}
