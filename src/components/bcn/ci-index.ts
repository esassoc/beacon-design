// Controller for <BcnCiIndex>: the three-level tree's folding, search across
// subcategory names and item statements, the review-state filter, the approved count,
// the review decisions painted onto item rows (edits, merges, dismissals, deletions,
// moves and added items), and opening a bin in the review dialog.
// setupX shape.
//
// Review state lives in ci-state.ts, shared with the review dialog; the dialog fires
// `ci:review-change` on document whenever a decision changes.

import { readState, effective } from './ci-state';
import type { CiDetail } from '../../data/setup-wizard-ci';

const CLASS_LABEL: Record<string, string> = { adhere: 'Adhere', monitor: 'Monitor', notify: 'Notify', roster: 'Roster' };

export function setupCiIndex(root: HTMLElement): void {
  const subs = [...root.querySelectorAll<HTMLElement>('.bcn-ciidx__sub')];
  const cats = [...root.querySelectorAll<HTMLElement>('.bcn-ciidx__cat')];
  const search = root.querySelector<HTMLElement & { value?: string }>('[data-ci-search]');
  const filter = root.querySelector<HTMLElement & { value?: string }>('[data-ci-filter]');
  const empty = root.querySelector<HTMLElement>('[data-ci-empty]');
  const approvedStat = root.querySelector('[data-ci-approved-stat] .esa-stat__value');
  // The fixture records ride in the review dialog's JSON; edits are laid over them.
  const base = JSON.parse(document.querySelector('[data-ci-details-json]')?.textContent ?? '{}') as Record<string, CiDetail>;
  const sample = root.querySelector<HTMLElement>('[data-ci-item]')?.cloneNode(true) as HTMLElement | undefined;

  const paint = (li: HTMLElement, d: CiDetail) => {
    const title = d.title || (d.kind === 'action' ? 'Untitled action' : 'Untitled obligation');
    li.querySelector('[data-ci-title]')!.textContent = title;
    li.dataset.text = title.toLowerCase();
    const chip = li.querySelector<HTMLElement>('[data-ci-chip]')!;
    chip.dataset.class = d.kind === 'action' ? 'action' : (d.cls ?? 'adhere');
    chip.textContent = d.kind === 'action' ? 'Action' : CLASS_LABEL[d.cls ?? 'adhere'];
  };

  /** Lay edits, deletions, moves and added items onto the item lists. */
  const place = (s: ReturnType<typeof readState>) => {
    root.querySelectorAll('[data-ci-item][data-ci-clone]').forEach((li) => li.remove());
    for (const sub of subs) {
      for (const li of sub.querySelectorAll<HTMLElement>('[data-ci-item]')) {
        const id = li.dataset.ciItem!;
        const d = effective(base, s, id);
        if (d) paint(li, d);
        const movedAway = !li.hasAttribute('data-ci-also') && !!d && !!base[id] && d.home !== base[id].home;
        li.toggleAttribute('data-ci-gone', s.deleted.includes(id) || movedAway);
      }
    }
    const placed = [
      ...s.created.map((c) => effective(base, s, c.id)!),
      ...Object.keys(s.edits)
        .filter((id) => base[id] && s.edits[id].home && s.edits[id].home !== base[id].home)
        .map((id) => effective(base, s, id)!),
    ];
    for (const d of placed) {
      const list = subs.find((x) => x.dataset.bin === d.home)?.querySelector<HTMLElement>('[data-ci-items]');
      if (!list || !sample) continue;
      const li = sample.cloneNode(true) as HTMLElement;
      li.dataset.ciItem = d.id;
      li.dataset.ciClone = '';
      li.removeAttribute('data-ci-also');
      paint(li, d);
      list.append(li);
    }
    for (const sub of subs) {
      const chev = sub.querySelector<HTMLButtonElement>('[data-ci-toggle]')!;
      const any = !!sub.querySelector('[data-ci-item]:not([data-ci-gone])');
      if (!any) {
        sub.querySelector<HTMLElement>('[data-ci-items]')!.hidden = true;
        chev.setAttribute('aria-expanded', 'false');
      }
      chev.disabled = !any;
    }
  };

  let query = '';
  let state = 'all';

  const setOpen = (sub: HTMLElement, open: boolean) => {
    const list = sub.querySelector<HTMLElement>('[data-ci-items]');
    const chev = sub.querySelector<HTMLButtonElement>('[data-ci-toggle]');
    if (!list || !chev || chev.disabled) return;
    list.hidden = !open;
    chev.setAttribute('aria-expanded', String(open));
  };

  const apply = () => {
    const s = readState();
    place(s);
    const approved = new Set(s.approved);
    let shown = 0;
    for (const sub of subs) {
      const isApproved = approved.has(sub.dataset.bin!);
      sub.querySelector<HTMLElement>('[data-state-open]')!.hidden = isApproved;
      sub.querySelector<HTMLElement>('[data-state-approved]')!.hidden = !isApproved;

      // Decisions, held on the item: merged-away rows leave, dismissed rows strike.
      const items = [...sub.querySelectorAll<HTMLElement>('[data-ci-item]')];
      for (const it of items) {
        const id = it.dataset.ciItem!;
        it.toggleAttribute('data-dismissed', s.dismissed.includes(id));
        const into = Object.values(s.merged).filter((t) => t === id).length;
        const note = it.querySelector<HTMLElement>('[data-ci-merged]')!;
        note.hidden = !into;
        note.textContent = into ? `Merged from ${into + 1}` : '';
      }

      const nameHit = !query || (sub.dataset.name ?? '').includes(query);
      let itemHits = 0;
      for (const it of items) {
        const merged = !!s.merged[it.dataset.ciItem!] || it.hasAttribute('data-ci-gone');
        const hit = nameHit || (it.dataset.text ?? '').includes(query);
        it.hidden = merged || !hit;
        if (!it.hidden && !nameHit) itemHits++;
      }
      const matchQ = nameHit || itemHits > 0;
      const matchS = state === 'all' || (state === 'approved' ? isApproved : !isApproved);
      sub.hidden = !(matchQ && matchS);
      if (query && itemHits) setOpen(sub, true);
      if (!sub.hidden) shown++;
    }
    for (const cat of cats) cat.hidden = !cat.querySelector('.bcn-ciidx__sub:not([hidden])');
    if (empty) empty.hidden = shown > 0;
    if (approvedStat) approvedStat.textContent = String(approved.size);
  };

  const readQuery = () => {
    query = (search?.value ?? '').trim().toLowerCase();
    apply();
  };
  search?.addEventListener('input', readQuery);
  search?.addEventListener('change', readQuery);
  filter?.addEventListener('change', (e) => {
    state = (e as CustomEvent<{ value: string }>).detail?.value ?? filter.value ?? 'all';
    apply();
  });

  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('[data-ci-expand]')) return subs.forEach((s) => setOpen(s, true));
    if (t.closest('[data-ci-collapse]')) return subs.forEach((s) => setOpen(s, false));
    const chev = t.closest<HTMLElement>('[data-ci-toggle]');
    if (chev) {
      const sub = chev.closest<HTMLElement>('.bcn-ciidx__sub')!;
      return setOpen(sub, chev.getAttribute('aria-expanded') !== 'true');
    }
    const opener = t.closest<HTMLElement>('[data-ci-open]');
    if (!opener) return;
    document.dispatchEvent(
      new CustomEvent('ci:open-bin', {
        detail: { bin: opener.dataset.ciOpen, item: opener.closest<HTMLElement>('[data-ci-item]')?.dataset.ciItem, req: opener.dataset.ciReq },
      }),
    );
  });

  document.addEventListener('ci:review-change', apply);
  apply();
}
