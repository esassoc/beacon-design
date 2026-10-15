// Controller for <BcnSw3IndexTree>. setupX shape: draws the index from sw3-index-store and
// owns its hand edits (rename, lock, delete, drag, add), and the marks once drafted.

import {
  initIndex,
  phase,
  cats,
  subOf,
  catOf,
  addCategory,
  addSubcategory,
  rename,
  setLock,
  lockAll,
  kept,
  catKept,
  move,
  deleteCost,
  remove,
  pendingIn,
  approvedIn,
  discardedIn,
  isOpened,
  approveCategory,
  homeIn,
  type Cat,
  type Sub,
} from './sw3-index-store';
import { fillGlyph } from './comment-glyphs';
import { assignHues, hueOf } from './sw3-index-hues';
import { toast } from '../../lib/snackbar';

type TextField = HTMLElement & { value: string; errorText?: string; updateComplete?: Promise<unknown>; focus(): void };

const plural = (n: number, one: string, many = `${one}s`) => `${n.toLocaleString('en-US')} ${n === 1 ? one : many}`;

export function setupSw3IndexTree(root: HTMLElement): void {
  initIndex();
  const fire = (name: string, detail: unknown) => document.dispatchEvent(new CustomEvent(name, { detail }));
  const body = root.querySelector<HTMLElement>('[data-it-body]')!;
  const tpl = (name: string) => (root.querySelector<HTMLTemplateElement>(`[data-it-tpl="${name}"]`)!.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
  const confirmDelete = root.querySelector<HTMLElement & { show(): void; message: string; heading: string }>('[data-it-confirm-delete]')!;
  const closed = new Set<string>();
  let current = '';
  let renaming: string | null = null;
  let pendingDelete: string | null = null;

  for (const [sel, g] of [['[data-it-expand]', 'chevrons-up-down'], ['[data-it-lock-all]', 'lock']] as const) fillGlyph(root.querySelector(sel)!, g);

  const button = (host: Element) => (host.matches('button') ? (host as HTMLButtonElement) : host.querySelector('button'));
  const setTool = (host: HTMLElement, label: string, glyph?: string, disabled = false) => {
    const b = button(host);
    if (b) {
      b.setAttribute('aria-label', label);
      b.title = label;
      b.disabled = disabled;
    }
    if (glyph) fillGlyph(host, glyph);
  };

  // ── Drawing ──────────────────────────────────────────────────────────────────
  const lockTool = (host: HTMLElement, locked: boolean, isKept: boolean) => {
    if (isKept) setTool(host, 'Kept on Re-run: it holds actions or obligations', 'lock', true);
    else if (locked) setTool(host, 'Locked: a re-run will leave this alone. Click to unlock.', 'lock');
    else setTool(host, 'Unlocked: a re-run may replace this. Click to lock.', 'lock-open');
  };

  const subRow = (sub: Sub, ph: ReturnType<typeof phase>, catId: string): HTMLElement => {
    const li = tpl('sub');
    li.dataset.itSub = sub.id;
    li.toggleAttribute('data-locked', sub.locked);
    li.toggleAttribute('data-current', sub.id === current);
    const name = li.querySelector<HTMLAnchorElement>('[data-it-name]')!;
    name.textContent = sub.name;
    name.title = sub.name;
    name.href = `#${sub.id}`;
    lockTool(li.querySelector('[data-it-lock]')!, sub.locked, kept(sub.id));
    for (const g of ['grip-vertical'] as const) fillGlyph(li.querySelector('[data-it-grip]')!, g);
    li.querySelector<HTMLElement>('[data-it-lockmark]')!.hidden = false;
    li.style.setProperty('--_hue', hueOf(catId));
    if (ph === 'drafted') {
      const pending = pendingIn(sub.id);
      const all = homeIn(sub.id).length;
      li.toggleAttribute('data-mark-unopened', pending > 0 && !isOpened(sub.id));
      li.toggleAttribute('data-mark-pending', pending > 0);
      li.toggleAttribute('data-mark-done', all > 0 && pending === 0);
      li.toggleAttribute('data-none', all > 0 && pending === 0 && approvedIn(sub.id) === 0 && discardedIn(sub.id) === all);
      const badge = li.querySelector('[data-it-mark="pending"] .esa-badge__text');
      if (badge) badge.textContent = String(pending);
      li.querySelector<HTMLElement>('[data-it-mark="pending"]')!.title = `${plural(pending, 'draft')} to review`;
    }
    return li;
  };

  const catRow = (cat: Cat, ph: ReturnType<typeof phase>): HTMLElement => {
    const li = tpl('cat');
    li.dataset.itCat = cat.id;
    li.style.setProperty('--_hue', hueOf(cat.id));
    li.toggleAttribute('data-locked', cat.locked);
    li.toggleAttribute('data-closed', closed.has(cat.id));
    const name = li.querySelector<HTMLAnchorElement>('[data-it-name]')!;
    name.textContent = cat.name;
    name.title = cat.name;
    setTool(li.querySelector('[data-it-toggle]')!, closed.has(cat.id) ? 'Expand' : 'Collapse');
    const chev = li.querySelector('[data-it-toggle] .esa-icon');
    if (chev) (chev as HTMLElement).style.transform = closed.has(cat.id) ? 'rotate(-90deg)' : '';
    lockTool(li.querySelector('[data-it-lock]')!, cat.locked, catKept(cat.id));
    fillGlyph(li.querySelector('[data-it-grip]')!, 'grip-vertical');
    const pending = cat.subs.reduce((n, s) => n + pendingIn(s.id), 0);
    const approveCat = li.querySelector<HTMLElement>('[data-it-approve-cat]')!;
    approveCat.hidden = ph !== 'drafted' || !pending;
    setTool(approveCat, `Approve category (${pending})`);
    li.querySelector<HTMLElement>('[data-it-subs]')!.append(...cat.subs.map((s) => subRow(s, ph, cat.id)));
    return li;
  };

  const render = () => {
    const ph = phase();
    root.hidden = ph === 'empty' || ph === 'building';
    const all = cats();
    assignHues(all.map((c) => c.id));
    body.replaceChildren(...all.map((c) => catRow(c, ph)));
    const anyUnlocked = all.some((c) => !c.locked || c.subs.some((s) => !s.locked));
    const lockAllBtn = root.querySelector<HTMLElement>('[data-it-lock-all]')!;
    setTool(lockAllBtn, anyUnlocked ? 'Lock all' : 'Unlock all', anyUnlocked ? 'lock' : 'lock-open');
    const allOpen = all.every((c) => !closed.has(c.id));
    setTool(root.querySelector('[data-it-expand]')!, allOpen ? 'Collapse all' : 'Expand all', allOpen ? 'chevrons-down-up' : 'chevrons-up-down');
    if (renaming) startRename(renaming);
  };

  // ── Rename in place ──────────────────────────────────────────────────────────
  const startRename = (id: string) => {
    const li = body.querySelector<HTMLElement>(`[data-it-sub="${CSS.escape(id)}"], [data-it-cat="${CSS.escape(id)}"]`);
    const row = li?.querySelector<HTMLElement>(':scope > [data-it-row]');
    const name = row?.querySelector<HTMLElement>('[data-it-name]');
    if (!row || !name) return;
    renaming = id;
    const field = document.createElement('esa-text-field') as TextField;
    field.setAttribute('size', 'sm');
    field.setAttribute('aria-label', catOf(id) ? 'Category name' : 'Subcategory name');
    field.value = catOf(id)?.name ?? subOf(id)?.sub.name ?? '';
    name.hidden = true;
    row.querySelector<HTMLElement>('.bcn-sw3it__rowtools')!.hidden = true;
    name.after(field);
    const done = (save: boolean) => {
      if (renaming !== id) return;
      if (save) {
        const why = rename(id, field.value);
        if (why) {
          field.errorText = why;
          return;
        }
      }
      renaming = null;
      render();
    };
    field.addEventListener('keydown', (e) => {
      e.stopPropagation();
      if (e.key === 'Enter') (e.preventDefault(), done(true));
      else if (e.key === 'Escape') (e.preventDefault(), done(false));
    });
    field.addEventListener('focusout', () => setTimeout(() => !field.matches(':focus-within') && done(true), 0));
    void field.updateComplete?.then(() => {
      field.focus();
      field.shadowRoot?.querySelector('input')?.select();
    });
  };

  // ── Pressing things ──────────────────────────────────────────────────────────
  body.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const li = t.closest<HTMLElement>('[data-it-sub], [data-it-cat]');
    if (!li || t.closest('esa-text-field')) return;
    const id = li.dataset.itSub ?? li.dataset.itCat!;
    const isCat = !!li.dataset.itCat;
    if (t.closest('[data-it-name]')) {
      e.preventDefault();
      if (isCat) {
        const first = catOf(id)?.subs[0];
        if (first) fire('sw3i:go', { sub: first.id });
      } else fire('sw3i:go', { sub: id });
    } else if (t.closest('[data-it-toggle]')) {
      closed.has(id) ? closed.delete(id) : closed.add(id);
      render();
    } else if (t.closest('[data-it-rename]')) startRename(id);
    else if (t.closest('[data-it-lock]')) setLock(id, !(catOf(id)?.locked ?? subOf(id)?.sub.locked));
    else if (t.closest('[data-it-add-sub]')) {
      closed.delete(id);
      const sid = addSubcategory(id);
      if (sid) startRename(sid);
    } else if (t.closest('[data-it-approve-cat]')) {
      const c = catOf(id)!;
      const n = c.subs.reduce((k, s) => k + pendingIn(s.id), 0);
      approveCategory(id);
      const left = c.subs.reduce((k, s) => k + pendingIn(s.id), 0);
      toast(left ? `Approved ${n - left} in ${c.name}. ${plural(left, 'draft')} with no scope stay drafts.` : `Approved ${plural(n, 'draft')} in ${c.name}.`, 'success');
    } else if (t.closest('[data-it-delete]')) askDelete(id);
  });

  const askDelete = (id: string) => {
    const name = catOf(id)?.name ?? subOf(id)?.sub.name ?? '';
    const cost = deleteCost(id);
    if (cost.refused) {
      toast(`${name} can't be deleted. ${cost.refused}`, 'error');
      return;
    }
    pendingDelete = id;
    confirmDelete.heading = `Delete ${name}?`;
    const lines = [
      cost.requirements && `Items from ${plural(cost.requirements, 'requirement')} filed in this bin go back to be filed on the next Draft run.`,
      cost.obligations && `${plural(cost.obligations, 'obligation')} filed there ${cost.obligations === 1 ? 'is' : 'are'} deleted.`,
      cost.actions && `${plural(cost.actions, 'draft action')} filed there ${cost.actions === 1 ? 'is' : 'are'} deleted.`,
      catOf(id) && catOf(id)!.subs.length && `Its ${plural(catOf(id)!.subs.length, 'subcategory', 'subcategories')} go with it.`,
      'This cannot be undone.',
    ].filter(Boolean);
    confirmDelete.message = lines.join(' ');
    confirmDelete.show();
  };
  confirmDelete.addEventListener('confirm', () => {
    if (!pendingDelete) return;
    const name = catOf(pendingDelete)?.name ?? subOf(pendingDelete)?.sub.name;
    remove(pendingDelete);
    pendingDelete = null;
    toast(`Deleted ${name}.`, 'success');
  });

  root.querySelector('[data-it-add-cat]')!.addEventListener('click', () => {
    const id = addCategory();
    startRename(id);
  });
  root.querySelector('[data-it-lock-all]')!.addEventListener('click', () => {
    const all = cats();
    lockAll(all.some((c) => !c.locked || c.subs.some((s) => !s.locked)));
  });
  root.querySelector('[data-it-expand]')!.addEventListener('click', () => {
    const all = cats();
    if (all.every((c) => !closed.has(c.id))) all.forEach((c) => closed.add(c.id));
    else closed.clear();
    render();
  });
  root.querySelector('[data-it-fold]')!.addEventListener('click', () => root.closest<HTMLElement>('[data-sw3-ix]')!.dataset.index = 'closed');
  root.querySelector('[data-it-unfold]')!.addEventListener('click', () => root.closest<HTMLElement>('[data-sw3-ix]')!.dataset.index = 'open');

  // ── Drag within the parent ───────────────────────────────────────────────────
  let dragging: HTMLElement | null = null;
  body.addEventListener('pointerdown', (e) => {
    const grip = (e.target as HTMLElement).closest('[data-it-grip]');
    const li = grip?.closest<HTMLElement>('[data-it-sub], [data-it-cat]');
    if (li) li.draggable = true;
  });
  body.addEventListener('dragstart', (e) => {
    dragging = (e.target as HTMLElement).closest<HTMLElement>('[data-it-sub], [data-it-cat]');
    if (!dragging) return;
    dragging.setAttribute('data-dragging', '');
    e.dataTransfer?.setData('text/plain', dragging.dataset.itSub ?? dragging.dataset.itCat!);
    if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move';
  });
  const target = (e: DragEvent) => {
    if (!dragging) return null;
    const over = (e.target as HTMLElement).closest<HTMLElement>(dragging.dataset.itCat ? '[data-it-cat]' : '[data-it-sub]');
    if (!over || over === dragging || over.parentElement !== dragging.parentElement) return null;
    const r = over.querySelector(':scope > [data-it-row]')!.getBoundingClientRect();
    const after = e.clientY > r.top + r.height / 2;
    return after ? ((over.nextElementSibling as HTMLElement | null) ?? 'end') : over;
  };
  const clearDrop = () => body.querySelectorAll('[data-drop-before]').forEach((x) => x.removeAttribute('data-drop-before'));
  body.addEventListener('dragover', (e) => {
    const t = target(e);
    if (!t) return;
    e.preventDefault();
    clearDrop();
    if (t !== 'end') t.setAttribute('data-drop-before', '');
  });
  body.addEventListener('drop', (e) => {
    const t = target(e);
    clearDrop();
    if (!t || !dragging) return;
    e.preventDefault();
    const id = dragging.dataset.itSub ?? dragging.dataset.itCat!;
    move(id, t === 'end' ? null : (t.dataset.itSub ?? t.dataset.itCat!));
  });
  body.addEventListener('dragend', () => {
    clearDrop();
    dragging?.removeAttribute('data-dragging');
    if (dragging) dragging.draggable = false;
    dragging = null;
  });

  document.addEventListener('sw3i:current', (e) => {
    const d = (e as CustomEvent<{ sub: string }>).detail;
    const moved = d.sub !== current;
    current = d.sub;
    body.querySelectorAll<HTMLElement>('[data-it-sub]').forEach((li) => li.toggleAttribute('data-current', li.dataset.itSub === current));
    if (moved) body.querySelector(`[data-it-sub="${CSS.escape(current)}"]`)?.scrollIntoView({ block: 'nearest' });
  });
  document.addEventListener('sw3i:change', () => {
    if (!renaming) render();
  });
  document.addEventListener('sw3i:rename', (e) => requestAnimationFrame(() => startRename((e as CustomEvent<{ id: string }>).detail.id)));
  render();
}
