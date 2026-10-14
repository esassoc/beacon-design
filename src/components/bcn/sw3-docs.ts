// Controller for <BcnSw3Docs>. setupX shape: the host owns the scan state and calls
// update() with each document's run line and the commitments found in the open one; this
// keeps one card element per commitment so new ones animate in and old ones do not.

export interface DocCard {
  id: string;
  code: string;
  title: string;
  parsed: boolean;
}

interface Handlers {
  onFind: (id: string) => void;
  onDismiss: (id: string) => void;
}

export function setupSw3Docs(root: HTMLElement, { onFind, onDismiss }: Handlers) {
  const tpl = root.querySelector<HTMLTemplateElement>('[data-docs-card]')!;
  const els = new Map<string, HTMLElement>();

  root.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const card = t.closest<HTMLElement>('[data-cc]');
    if (!card) return;
    if (t.closest('[data-cc-dismiss]')) onDismiss(card.dataset.cc!);
    else if (t.closest('[data-cc-open]')) onFind(card.dataset.cc!);
  });

  const update = (docId: string, stateLine: string, cards: DocCard[], selected: string | null) => {
    const doc = root.querySelector<HTMLElement>(`[data-doc="${CSS.escape(docId)}"]`);
    if (!doc) return;
    doc.querySelector('[data-doc-state]')!.textContent = stateLine;
    const list = doc.querySelector<HTMLElement>('[data-doc-list]')!;

    const keep = new Set(cards.map((c) => c.id));
    for (const [id, el] of els) if (!keep.has(id)) (el.remove(), els.delete(id));
    let prev: Element | null = null;
    let newest: HTMLElement | null = null;
    for (const c of cards) {
      let el = els.get(c.id);
      if (!el) {
        el = (tpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
        el.dataset.cc = c.id;
        els.set(c.id, el);
        newest = el;
      }
      el.dataset.state = c.parsed ? 'parsed' : 'found';
      el.toggleAttribute('data-selected', c.id === selected);
      const badge = el.querySelector<HTMLElement>('[data-cc-badge]')!;
      badge.hidden = !c.code;
      const chip = badge.querySelector('.bcn-cbadge');
      const short = c.code.replace(/^COA\s+/, '');
      if (chip && chip.textContent !== short) chip.textContent = short;
      el.querySelector('[data-cc-name]')!.textContent = c.title;
      el.title = c.code ? `${c.code} ${c.title}` : c.title;
      const want: Element | null = prev ? prev.nextElementSibling : list.firstElementChild;
      if (want !== el) list.insertBefore(el, want);
      prev = el;
    }
    return { newest, list };
  };

  /** Keep a card in view inside the list (without scrolling the page). */
  const reveal = (id: string) => {
    const el = els.get(id);
    const list = el?.parentElement;
    if (!el || !list) return;
    const top = el.offsetTop - list.offsetTop;
    if (top < list.scrollTop) list.scrollTop = top;
    else if (top + el.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = top + el.offsetHeight - list.clientHeight;
  };

  return { update, reveal };
}
