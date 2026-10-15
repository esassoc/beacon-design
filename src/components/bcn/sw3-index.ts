// Controller for <BcnSw3Index>. setupX shape: owns which subcategory is in view and which
// entry is open, and repaints the scrubber, the index, and the page from sw3-index-store.
//
// Contract, on `document`:
//   out  sw3i:current  detail: { sub, entryId }          the subcategory in view (Aldo)
//   in   sw3i:go       detail: { sub, entryId? }         a reference pressed in Aldo
//   out  sw3i:locator  detail: { doc, code, n, excerpt } a locator (the commitment panel)
//   out  sw3i:edit     detail: { id }                    Edit an entry (side panel)

import {
  initIndex,
  subs,
  subOf,
  entryAny,
  titleOf,
  statusOf,
  entriesIn,
  filedIn,
  seeAlso,
  flagsOf,
  subState,
  approvedIn,
  setStatus,
  approveAll,
  restoreAll,
  AUDIENCES,
} from './sw3-index-store';
import { initSw3, docIds, peek, started, startRun, skipToEnd, payload, requirementRef } from './sw3-store';
import { setupCommitmentScrubber, type ScrubCell, type ScrubGroup } from './commitment-scrubber';
import { requirementIdFor } from '../../data/setup-wizard-3-step';
import type { IndexEntry, IndexLocator } from '../../data/sw3-index-types';

const KEY = 'sw3:index-at';
const short = (code: string) => code.replace(/^COA\s+/, '');

/** A locator as step 2 numbers it now: 11.29:3, CMP-14:2. */
export const locatorRef = (l: IndexLocator): string => {
  const ref = peek(l.doc, () => requirementRef(l.code, requirementIdFor(l.code, l.n)));
  return ref || `${short(l.code)}:${l.n}`;
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
  const fire = (name: string, detail: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));
  const pos = root.querySelector<HTMLElement>('[data-ix-pos]')!;
  const tree = root.querySelector<HTMLElement>('[data-sw3-index-tree]')!;
  const page = root.querySelector<HTMLElement>('[data-sw3-index-page]')!;
  const pane = root.querySelector<HTMLElement>('[data-ix-page]')!;
  const groupsEl = page.querySelector<HTMLElement>('[data-ip-groups]')!;
  const tpl = (name: string) => (page.querySelector<HTMLTemplateElement>(`[data-ip-tpl="${name}"]`)!.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;

  let current = subs()[0]?.sub.id ?? '';
  let open: string | null = null;
  try {
    const want = localStorage.getItem(KEY);
    if (want && subOf(want)) current = want;
  } catch {
    /* no storage */
  }

  const go = (sub: string, entryId: string | null = null) => {
    if (!subOf(sub)) return;
    const moved = sub !== current;
    current = sub;
    open = entryId;
    try {
      localStorage.setItem(KEY, sub);
    } catch {
      /* no storage */
    }
    render();
    if (moved && !entryId) pane.scrollTop = 0;
    if (entryId) page.querySelector(`[data-entry="${CSS.escape(entryId)}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    tree.querySelector(`[data-it-sub="${CSS.escape(sub)}"]`)?.scrollIntoView({ block: 'nearest' });
  };

  // ── The scrubber ──────────────────────────────────────────────────────────────
  const scrub = setupCommitmentScrubber(root.querySelector('[data-commitment-scrubber]')!, { onPick: (id) => go(id) });
  const cellState = (id: string): ScrubCell['state'] => {
    const s = subState(id);
    return s === 'reviewed' ? 'confirmed' : s === 'flagged' ? 'flagged' : 'ready';
  };
  const noteOf = (id: string) => {
    const s = subState(id);
    if (s === 'reviewed') return 'Reviewed';
    const n = flagsOf(id).length;
    const e = entriesIn(id).length;
    return n ? `${n} to settle` : `${e} ${e === 1 ? 'entry' : 'entries'}`;
  };
  root.querySelector('[data-ix-next-open]')!.addEventListener('click', () => {
    const list = subs().map((s) => s.sub.id);
    const i = list.indexOf(current);
    const next = [...list.slice(i + 1), ...list.slice(0, i + 1)].find((id) => subState(id) === 'flagged');
    if (next) go(next);
  });
  document.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t.closest('input, textarea, select, [contenteditable], esa-textarea, esa-text-field, esa-select, esa-side-dialog, [role="slider"], [data-aldo-panel]')) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    const list = subs().map((s) => s.sub.id);
    const next = list[list.indexOf(current) + (e.key === 'ArrowRight' ? 1 : -1)];
    if (next) (e.preventDefault(), go(next));
  });

  // ── The index ─────────────────────────────────────────────────────────────────
  tree.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[data-it-go], a[data-it-entry]');
    if (!a) return;
    e.preventDefault();
    if (a.dataset.itGo) go(a.dataset.itGo);
    else go(a.dataset.sub!, a.dataset.itEntry!);
  });
  tree.querySelector('[data-it-fold]')!.addEventListener('click', () => (root.dataset.index = 'closed'));
  tree.querySelector('[data-it-unfold]')!.addEventListener('click', () => (root.dataset.index = 'open'));

  const paintTree = () => {
    tree.querySelectorAll<HTMLElement>('[data-it-sub]').forEach((li) => {
      const id = li.dataset.itSub!;
      li.toggleAttribute('data-current', id === current);
      const st = subState(id);
      li.dataset.state = st;
      li.toggleAttribute('data-none', st === 'reviewed' && approvedIn(id) === 0);
      const list = li.querySelector<HTMLElement>('[data-it-entries]')!;
      list.replaceChildren(
        ...entriesIn(id).flatMap(({ id: eid }) => {
          const en = entryAny(eid);
          if (!en) return [];
          const item = document.createElement('li');
          const a = document.createElement('a');
          a.href = `#${eid}`;
          a.dataset.itEntry = eid;
          a.dataset.sub = id;
          a.dataset.status = statusOf(eid);
          a.title = titleOf(en);
          a.textContent = titleOf(en);
          a.toggleAttribute('data-current', id === current && eid === open);
          item.append(a);
          return [item];
        }),
      );
    });
  };

  // ── The page ──────────────────────────────────────────────────────────────────
  const link = (text: string, attrs: Record<string, string>) => {
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = text;
    Object.assign(a.dataset, attrs);
    return a;
  };
  const field = (dl: HTMLElement, label: string, value: Node | string, needs = false) => {
    const dt = document.createElement('dt');
    dt.textContent = label;
    const dd = document.createElement('dd');
    dd.append(value);
    dd.toggleAttribute('data-needs', needs);
    dl.append(dt, dd);
  };
  /** Locators, one per requirement, in text order within each commitment. */
  const locsOf = (en: IndexEntry) => en.locators.filter((l, i, a) => a.findIndex((x) => x.doc === l.doc && x.code === l.code && x.n === l.n) === i);

  const entryRow = (en: IndexEntry, sub: string) => {
    const li = tpl('entry');
    const status = statusOf(en.id);
    li.dataset.entry = en.id;
    li.dataset.status = status;
    const isOpen = open === en.id;
    li.toggleAttribute('data-open', isOpen);
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
    if (isOpen) {
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
      } else field(dl, 'Responsible party', en.responsibleParty || 'Needs input', !en.responsibleParty);
      const others = filedIn(en.id).filter((s) => s !== sub);
      if (others.length) {
        const span = document.createElement('span');
        others.forEach((s, i) => {
          if (i) span.append(', ');
          span.append(link(subOf(s)!.sub.name, { goSub: s, goEntry: en.id }));
        });
        field(dl, 'Also filed in', span);
      }
      const passages = rec.querySelector<HTMLElement>('[data-e-passages]')!;
      for (const l of locsOf(en)) {
        const p = document.createElement('p');
        p.className = 'bcn-sw3ip__passage';
        const q = document.createElement('q');
        q.textContent = l.excerpt;
        p.append(link(locatorRef(l), { loc: String(en.locators.indexOf(l)), entry: en.id }), q);
        passages.append(p);
      }
    }
    return li;
  };

  page.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const loc = t.closest<HTMLElement>('a[data-loc]');
    if (loc) {
      e.preventDefault();
      const l = entryAny(loc.dataset.entry!)?.locators[Number(loc.dataset.loc)];
      if (l) fire('sw3i:locator', l);
      return;
    }
    const goSub = t.closest<HTMLElement>('a[data-go-sub]');
    if (goSub) {
      e.preventDefault();
      go(goSub.dataset.goSub!, goSub.dataset.goEntry ?? null);
      return;
    }
    const li = t.closest<HTMLElement>('[data-entry]');
    if (!li) return;
    const id = li.dataset.entry!;
    if (t.closest('[data-e-toggle]')) {
      e.preventDefault();
      open = open === id ? null : id;
      render();
    } else if (t.closest('[data-e-approve]')) setStatus([id], 'approved');
    else if (t.closest('[data-e-discard]')) setStatus([id], 'discarded');
    else if (t.closest('[data-e-restore]')) setStatus([id], 'draft');
    else if (t.closest('[data-e-edit]')) fire('sw3i:edit', { id });
  });
  page.querySelector('[data-ip-approve-all]')!.addEventListener('click', () => approveAll(current));
  page.querySelector('[data-ip-restore-all]')!.addEventListener('click', () => restoreAll(current));

  const setLabel = (sel: string, text: string, disabled?: boolean) => {
    const host = page.querySelector<HTMLElement>(sel)!;
    const l = host.querySelector('.esa-button__label');
    if (l) l.textContent = text;
    const b = host.matches('button') ? (host as HTMLButtonElement) : host.querySelector('button');
    if (b && disabled !== undefined) b.disabled = disabled;
    return host;
  };

  const paintPage = () => {
    const ref = subOf(current)!;
    page.querySelector<HTMLElement>('[data-ip-cat]')!.textContent = ref.cat.name;
    page.querySelector<HTMLElement>('[data-ip-title]')!.textContent = ref.sub.name;
    const list = entriesIn(current)
      .map(({ id }) => entryAny(id))
      .filter((x): x is IndexEntry => !!x);
    const drafts = list.filter((en) => statusOf(en.id) === 'draft').length;
    const discarded = list.filter((en) => statusOf(en.id) === 'discarded').length;
    setLabel('[data-ip-approve-all]', drafts ? `Approve all (${drafts})` : 'Approve all', !drafts);
    setLabel('[data-ip-restore-all]', 'Restore all').hidden = !discarded;
    if (open && !list.some((en) => en.id === open)) open = null;

    // Actions first; then obligations by who reads them.
    const groups: { name: string; items: IndexEntry[] }[] = [
      { name: 'Actions', items: list.filter((en) => en.kind === 'action') },
      ...AUDIENCES.map((a) => ({ name: a, items: list.filter((en) => en.kind === 'obligation' && en.audience === a) })),
    ];
    groupsEl.replaceChildren(
      ...groups
        .filter((g) => g.items.length)
        .map((g) => {
          const sec = tpl('group');
          sec.querySelector<HTMLElement>('[data-g-name]')!.textContent = g.name;
          sec.querySelector<HTMLElement>('[data-g-entries]')!.append(...g.items.map((en) => entryRow(en, current)));
          return sec;
        }),
    );
    page.querySelector<HTMLElement>('[data-ip-empty]')!.hidden = list.length > 0;

    const see = seeAlso(current);
    const seeEl = page.querySelector<HTMLElement>('[data-ip-see]')!;
    seeEl.hidden = !see.length;
    const seeList = page.querySelector<HTMLElement>('[data-ip-see-list]')!;
    seeList.replaceChildren();
    see.forEach((s, i) => {
      if (i) seeList.append('; ');
      seeList.append(link(subOf(s)!.sub.name, { goSub: s }));
    });
  };

  const render = () => {
    if (!subOf(current)) current = subs()[0]?.sub.id ?? '';
    if (!current) return;
    const all = subs();
    const cells: ScrubCell[] = [];
    const groups: ScrubGroup[] = [];
    let reviewed = 0;
    let left = 0;
    for (const { sub, cat } of all) {
      if (!groups.length || groups.at(-1)!.label !== cat.name) groups.push({ label: cat.name, start: cells.length });
      const state = cellState(sub.id);
      reviewed += state === 'confirmed' ? 1 : 0;
      left += state === 'flagged' ? 1 : 0;
      cells.push({ id: sub.id, label: sub.name, title: cat.name, state, note: noteOf(sub.id) });
    }
    scrub.update({ cells, at: all.findIndex((s) => s.sub.id === current), groups });
    const ref = subOf(current)!;
    pos.textContent = `${ref.sub.name}: ${ref.i + 1} of ${all.length}. ${reviewed} reviewed, ${left} to settle.`;
    root.querySelector<HTMLElement>('[data-ix-next-open]')!.hidden = !left;
    paintTree();
    paintPage();
    fire('sw3i:current', { sub: current, entryId: open });
  };

  document.addEventListener('sw3i:go', (e) => {
    const d = (e as CustomEvent<{ sub: string; entryId?: string }>).detail;
    go(d.sub, d.entryId ?? null);
  });
  document.addEventListener('sw3i:change', render);
  document.addEventListener('sw3:change', render);

  // ── Aldo folds to a rail; on a laptop it starts folded, so the page has room ────
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

  // ── Fit the workspace to the window ───────────────────────────────────────────
  const fit = () => {
    const scroller = root.closest<HTMLElement>('.modern-layout__content, main') ?? document.scrollingElement;
    const top = root.getBoundingClientRect().top + (scroller?.scrollTop ?? 0);
    const padB = scroller instanceof HTMLElement ? parseFloat(getComputedStyle(scroller).paddingBottom) || 0 : 0;
    root.style.setProperty('--_fit', `${Math.max(520, window.innerHeight - top - padB - 8)}px`);
  };
  window.addEventListener('resize', fit);
  requestAnimationFrame(fit);

  render();
  // Aldo's script may register after this one: say where we are once more, next frame.
  requestAnimationFrame(() => fire('sw3i:current', { sub: current, entryId: open }));
}
