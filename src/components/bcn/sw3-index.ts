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
//   out  sw3i:edit     detail: { id }                    a draft pressed: its edit form (side panel)
//   in   sw3i:edit-closed                                the side panel closed
//   out  sw3i:merge    detail: { ids }                   Merge the ticked drafts (dialog)
//   out  sw3i:rename   detail: { id }                    name a category just made (index)

import '@esa/ecology/esa-confirm-dialog';
import '@esa/ecology/esa-checkbox';
import '@esa/ecology/esa-popover';
import {
  initIndex,
  phase,
  cats,
  subs,
  subOf,
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
  approvable,
  approveAll,
  discardAll,
  restoreAll,
  mergeRefusal,
  totals,
} from './sw3-index-store';
import { initSw3, docIds, peek, started, startRun, skipToEnd, payload, requirementRef, requirementsOf, commitmentOf } from './sw3-store';
import { assignHues, hueOf } from './sw3-index-hues';
import { draftKind } from './draft-kind';
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

/** A recurring action's cadence in words: "Every 3 months, Start of construction to End of
 *  construction". */
export const recurrenceText = (a: IndexAction): string => {
  const r = a.recurrence;
  if (!r) return '';
  const unit = r.unit.toLowerCase().replace(/s$/, '');
  const every = r.every === 1 ? `Every ${unit}` : `Every ${r.every} ${unit}s`;
  const span = r.from && r.until ? `, ${r.from} to ${r.until}` : r.from ? `, from ${r.from}` : r.until ? `, until ${r.until}` : '';
  return every + span;
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
  // The console sits in the step's panel, above this workspace (BcnSwStepNav).
  const nav = document.querySelector<HTMLElement>('[data-ix-nav]')!;
  const page = root.querySelector<HTMLElement>('[data-sw3-index-page]')!;
  const pane = root.querySelector<HTMLElement>('[data-ix-page]')!;
  const groupsEl = page.querySelector<HTMLElement>('[data-ip-groups]')!;
  const tpl = (name: string) => (page.querySelector<HTMLTemplateElement>(`[data-ip-tpl="${name}"]`)!.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
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
    if (entryId) {
      page.querySelector(`[data-entry="${CSS.escape(entryId)}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      fire('sw3i:edit', { id: entryId });
    }
  };

  // ── The scrubber ─────────────────────────────────────────────────────────────
  const scrub = setupCommitmentScrubber(nav.querySelector('[data-commitment-scrubber]')!, { onPick: (id) => go(id) });
  /** A dot at the top when the subcategory holds actions, one at the foot when it holds
   *  obligations; each dim while any of its drafts is left to review. */
  const marksOf = (id: string, ph: string): ScrubCell['marks'] => {
    if (ph !== 'drafted') return [];
    const live = entriesIn(id).filter((en) => statusOf(en.id) !== 'discarded');
    const mark = (kind: IndexEntry['kind'], at?: 'bottom') => {
      const of = live.filter((en) => en.kind === kind);
      return of.length ? [{ dim: of.some((en) => statusOf(en.id) === 'draft'), at }] : [];
    };
    return [...mark('action'), ...mark('obligation', 'bottom')];
  };
  const cellOf = (id: string, ph: string): { state: ScrubCell['state']; note: string } => {
    if (ph === 'drafting') return { state: 'parsing', note: 'Drafting' };
    if (ph !== 'drafted') return { state: 'ready', note: 'Nothing drafted yet' };
    const pending = pendingIn(id);
    const all = homeIn(id).length;
    if (pending && !isOpened(id)) return { state: 'flagged', note: `Not yet opened, ${pending} to review` };
    if (pending) return { state: 'ready', note: `${pending} to review` };
    if (all) return { state: 'confirmed', note: 'Every draft decided' };
    return { state: 'ready', note: 'Nothing drafted' };
  };
  /** One subcategory along the index. */
  const step = (by: 1 | -1) => {
    const list = subs().map((s) => s.sub.id);
    const next = list[list.indexOf(current) + by];
    if (next) go(next);
    return !!next;
  };
  const stepKey = (name: 'prev' | 'next') => {
    const host = nav.querySelector<HTMLElement>(`[data-ix-${name}]`)!;
    return (host.matches('button') ? host : host.querySelector('button')) as HTMLButtonElement;
  };
  nav.querySelector('[data-ix-prev]')!.addEventListener('click', () => step(-1));
  nav.querySelector('[data-ix-next]')!.addEventListener('click', () => step(1));
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t.closest('input, textarea, select, [contenteditable], esa-textarea, esa-text-field, esa-select, esa-side-dialog, esa-dialog, [role="slider"], [data-aldo-panel]')) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    if (step(e.key === 'ArrowRight' ? 1 : -1)) e.preventDefault();
  });

  // ── The page: helpers ────────────────────────────────────────────────────────
  const link = (text: string, attrs: Record<string, string>) => {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = text;
    Object.assign(a.dataset, attrs);
    return a;
  };
  const setLabel = (host: HTMLElement, text: string, disabled?: boolean) => {
    const l = host.querySelector('.esa-button__label');
    if (l) l.textContent = text;
    const b = host.matches('button') ? (host as HTMLButtonElement) : host.querySelector('button');
    if (b && disabled !== undefined) b.disabled = disabled;
    return host;
  };

  // ── Before drafting: the lists, empty, as develop renders them before a run ──
  const paintEmpty = () => {
    setLabel(page.querySelector<HTMLElement>('[data-ip-approve-all]')!, 'Approve all', true);
    setLabel(page.querySelector<HTMLElement>('[data-ip-discard-all]')!, 'Discard all', true);
    groupsEl.replaceChildren(
      ...['Actions', 'Obligations'].map((name) => {
        const sec = tpl('group');
        sec.querySelector<HTMLElement>('[data-g-name]')!.textContent = `${name} (0)`;
        const none = document.createElement('li');
        none.className = 'bcn-sw3ip__none';
        none.textContent = 'None';
        sec.querySelector<HTMLElement>('[data-g-entries]')!.append(none);
        return sec;
      }),
    );
    page.querySelector<HTMLElement>('[data-ip-empty]')!.hidden = true;
    page.querySelector<HTMLElement>('[data-ip-discarded]')!.hidden = true;
    ticked.clear();
    paintTicked();
  };

  // ── Drafted: the review ──────────────────────────────────────────────────────
  /** The commitments a draft rests on, one per commitment, each with its first locator. */
  const citesOf = (en: IndexEntry) =>
    en.locators.filter((l, i, a) => a.findIndex((x) => x.doc === l.doc && x.code === l.code) === i);
  const badge = (code: string) => {
    const b = tpl('badge');
    b.textContent = code;
    return b;
  };
  const citeLink = (en: IndexEntry, l: IndexLocator) => {
    const a = link('', { loc: String(en.locators.indexOf(l)), entry: en.id });
    return a;
  };
  /** One commitment: its badge, a link to it. More: a stack, left to right, whose popover
   *  lists them all, each a link. */
  const cites = (en: IndexEntry): HTMLElement | null => {
    const cs = citesOf(en);
    if (!cs.length) return null;
    if (cs.length === 1) {
      const a = citeLink(en, cs[0]);
      a.className = 'bcn-sw3ip__cite';
      a.title = `Open ${cs[0].code}`;
      a.append(badge(cs[0].code));
      return a;
    }
    const pop = document.createElement('esa-popover');
    // Opens to its left, over the row's own title: the pane's right edge cannot clip it.
    pop.setAttribute('position', 'left');
    pop.setAttribute('label', 'Commitments');
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'bcn-sw3ip__stack';
    btn.style.setProperty('--_n', String(Math.min(cs.length, 3)));
    btn.title = `${cs.length} commitments: ${cs.map((l) => l.code).join(', ')}`;
    btn.setAttribute('aria-label', btn.title);
    btn.append(...cs.slice(0, 3).map((l) => badge(l.code)));
    const list = document.createElement('div');
    list.slot = 'content';
    list.className = 'bcn-sw3ip__citelist';
    for (const l of cs) {
      const a = citeLink(en, l);
      const title = document.createElement('span');
      title.textContent = peek(l.doc, () => commitmentOf(l.code)?.title) ?? '';
      a.append(badge(l.code), title);
      list.append(a);
    }
    pop.append(btn, list);
    return pop;
  };

  const entryRow = (en: IndexEntry) => {
    const li = tpl('entry');
    const status = statusOf(en.id);
    li.dataset.entry = en.id;
    li.dataset.status = status;
    li.toggleAttribute('data-open', open === en.id);
    const tick = li.querySelector<HTMLElement & { checked: boolean }>('esa-checkbox')!;
    tick.checked = ticked.has(en.id);
    tick.setAttribute('aria-label', `Select “${titleOf(en)}” for merge`);
    li.querySelector<HTMLElement>('[data-e-chip]')!.replaceChildren(draftKind(en));
    const name = li.querySelector<HTMLAnchorElement>('[data-e-open]')!;
    name.textContent = titleOf(en);
    name.title = titleOf(en);
    name.href = `#${en.id}`;
    name.setAttribute('aria-haspopup', 'dialog');
    const c = cites(en);
    if (c) li.querySelector<HTMLElement>('[data-e-cites]')!.append(c);
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

    // Two lists: actions, then obligations.
    const groups: { name: string; kind: IndexEntry['kind']; items: IndexEntry[] }[] = [
      { name: 'Actions', kind: 'action', items: live.filter((en) => en.kind === 'action') },
      { name: 'Obligations', kind: 'obligation', items: live.filter((en) => en.kind === 'obligation') },
    ];
    groupsEl.replaceChildren(
      ...groups
        .filter((g) => g.items.length)
        .map((g) => {
          const sec = tpl('group');
          sec.dataset.kind = g.kind;
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
    const why = mergeRefusal([...ticked]);
    const m = page.querySelector<HTMLElement>('[data-ip-merge]')!;
    setLabel(m, ticked.size >= 2 ? `Merge (${ticked.size})` : 'Merge', !!why);
    const b = m.matches('button') ? (m as HTMLButtonElement) : m.querySelector('button');
    if (b) b.title = why ?? `Merge the ${ticked.size} ticked drafts`;
  };

  /** Category > Subcategory, in the breadcrumb lego as plain text: its text and its dots. */
  const paintCrumbs = (cat: string, sub: string, hue: string) => {
    page.querySelectorAll<HTMLElement>('[data-ip-crumbs] .esa-breadcrumbs__item').forEach((item, i) => {
      const label = item.querySelector<HTMLElement>('.esa-breadcrumbs__link, .esa-breadcrumbs__current')!;
      const text = i === 0 ? cat : sub;
      const node = [...label.childNodes].reverse().find((n) => n.nodeType === Node.TEXT_NODE);
      if (node) node.nodeValue = text;
      else label.append(text);
      label.title = text;
      label.style.setProperty('--_hue', hue);
    });
  };
  const paintPage = () => {
    const ph = phase();
    const ref = subOf(current)!;
    paintCrumbs(ref.cat.name, ref.sub.name, hueOf(ref.cat.id));
    // A Draft again run keeps the review on screen; its keys pause until the run ends.
    const drafted = (ph === 'drafted' || (ph === 'drafting' && totals().drafts > 0)) && draftsReady();
    page.querySelector<HTMLElement>('[data-ip-acts]')!.hidden = false;
    page.querySelector<HTMLElement>('[data-ip-review]')!.hidden = false;
    if (drafted) {
      markOpened(current);
      paintReview();
    } else paintEmpty();
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
    const name = t.closest<HTMLElement>('[data-e-open]');
    const li = name?.closest<HTMLElement>('[data-entry]');
    if (!li) return;
    e.preventDefault();
    edit(li.dataset.entry!);
  });
  /** A draft's edit form, in the side panel; the row stays marked while it is open. */
  const edit = (id: string) => {
    open = id;
    fire('sw3i:edit', { id });
    render();
  };
  document.addEventListener('sw3i:edit-closed', () => {
    if (!open) return;
    open = null;
    render();
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
  document.addEventListener('sw3i:merged', () => ticked.clear());

  // ── Repaint ──────────────────────────────────────────────────────────────────
  const render = () => {
    const ph = phase();
    root.dataset.phase = ph;
    // No index yet, or one on its way: the console holds Build index alone.
    const all = ph === 'empty' || ph === 'building' ? [] : subs();
    nav.querySelectorAll<HTMLElement>('[data-ix-step]').forEach((x) => (x.hidden = !all.length));
    nav.querySelector<HTMLElement>('[data-ix-scrub]')!.hidden = !all.length;
    if (ph === 'empty' || ph === 'building') return;
    if (!all.length) {
      // Categories made by hand, no subcategory yet: the index pane is the work.
      scrub.update({ cells: [], at: -1, groups: [] });
      paintCrumbs('', '', '');
      page.querySelector<HTMLElement>('[data-ip-acts]')!.hidden = true;
      page.querySelector<HTMLElement>('[data-ip-review]')!.hidden = true;
      return;
    }
    if (!subOf(current)) current = all[0].sub.id;
    const cells: ScrubCell[] = [];
    const groups: ScrubGroup[] = [];
    assignHues(cats().map((c) => c.id));
    for (const { sub, cat } of all) {
      if (!groups.length || groups.at(-1)!.label !== cat.name) groups.push({ label: cat.name, start: cells.length, hue: hueOf(cat.id) });
      const c = cellOf(sub.id, ph);
      cells.push({ id: sub.id, label: sub.name, title: cat.name, state: c.state, note: c.note, marks: marksOf(sub.id, ph) });
    }
    const at = all.findIndex((s) => s.sub.id === current);
    scrub.update({ cells, at, groups });
    stepKey('prev').disabled = at <= 0;
    stepKey('next').disabled = at >= all.length - 1;
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
