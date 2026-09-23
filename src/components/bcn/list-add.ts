// list-add — the option-row behavior both add drawers share (<BcnListAddObligations>,
// <BcnListAddMembers>).
//
// An option is an unlabeled esa-checkbox (named by aria-label) beside a light-DOM
// [data-opt-label] span. esa-checkbox renders its `label` prop inside its shadow root
// with no slot, so a search hit could not be marked there; the label comes out into
// the light DOM, and clicking the row toggles the box the way the lego's own label would.

type Checkbox = HTMLElement & { checked: boolean };

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);
const rx = (needle: string) => new RegExp(needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');

/** Mark every occurrence of `needle` in an option's label; an empty needle clears the marks. */
export const paintLabel = (row: HTMLElement, needle: string): void => {
  const el = row.querySelector<HTMLElement>('[data-opt-label]');
  if (!el) return;
  const text = el.dataset.text ?? (el.dataset.text = el.textContent ?? '');
  el.innerHTML = needle ? esc(text).replace(rx(needle), (m) => `<mark class="bcn-lot__hit">${m}</mark>`) : esc(text);
};

/** A click anywhere on an option row but the box toggles the box, and fires the change the box would. */
export const wireOptionLabels = (tree: HTMLElement): void => {
  tree.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (target.closest('esa-checkbox')) return;
    const row = target.closest<HTMLElement>('.bcn-lao__opt');
    const box = row?.querySelector('esa-checkbox') as Checkbox | null | undefined;
    if (!box) return;
    box.checked = !box.checked;
    box.dispatchEvent(new CustomEvent('change', { detail: { checked: box.checked }, bubbles: true, composed: true }));
  });
};

/**
 * The drawer's facet filters (<BcnListAddFilters>). `matches(row)` says whether a row
 * passes every facet in use; `reset()` clears them. esa-filter-dropdown keeps its
 * selection private, so a reset swaps each picker for a fresh copy of itself (its
 * options ride in the attribute, so the copy is whole).
 */
export const wireFacets = (root: HTMLElement, onChange: () => void) => {
  const active = new Map<string, Set<string>>();
  const bar = root.querySelector<HTMLElement>('[data-add-filters]');
  const clear = bar?.querySelector<HTMLElement>('[data-add-filters-clear]');
  const sync = () => { if (clear) clear.hidden = active.size === 0; };

  bar?.addEventListener('esa-filter-change', (e) => {
    const { name, filters } = (e as CustomEvent<{ name: string; filters: { value: string }[] }>).detail;
    if (filters.length) active.set(name, new Set(filters.map((f) => f.value)));
    else active.delete(name);
    sync();
    onChange();
  });

  const reset = () => {
    active.clear();
    bar?.querySelectorAll('esa-filter-dropdown').forEach((d) => d.replaceWith(d.cloneNode(false)));
    sync();
  };
  clear?.addEventListener('click', () => { reset(); onChange(); });

  const matches = (row: HTMLElement) =>
    [...active].every(([key, picked]) => (row.getAttribute(`data-f-${key}`) ?? '').split('|').some((v) => picked.has(v)));

  return { matches, reset, isActive: () => active.size > 0 };
};
