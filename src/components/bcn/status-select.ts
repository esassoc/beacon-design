// Shared logic for <BcnStatusSelect> — the dialog Tracking section's Status control.
// A hand-driven listbox (NOT esa-select) because the trigger must show the live
// status color; the controller only flips state — root.dataset.value + aria + the
// trigger label text + open state. ALL dot color lives in CSS keyed off
// [data-value] (--bcn-status-*); the controller carries ZERO hex.

export type StatusValue = 'not-started' | 'in-progress' | 'completed';

export interface StatusSelectController {
  readonly value: StatusValue;
  setValue(v: StatusValue): void;
  element: HTMLElement;
}

const LABELS: Record<StatusValue, string> = {
  'not-started': 'Not Started',
  'in-progress': 'In Progress',
  completed: 'Completed',
};

/** Wire one rendered <BcnStatusSelect> root into a live listbox. */
export function setupStatusSelect(root: HTMLElement): StatusSelectController {
  const trigger = root.querySelector<HTMLButtonElement>('.bcn-status-select__trigger')!;
  const menu = root.querySelector<HTMLUListElement>('.bcn-status-select__menu')!;
  const labelEl = root.querySelector<HTMLSpanElement>('.bcn-status-select__value')!;
  const opts = [...menu.querySelectorAll<HTMLLIElement>('.bcn-status-select__opt')];

  let current = (root.dataset.value as StatusValue) ?? 'not-started';

  // Update the UI (dataset drives dot color via CSS) WITHOUT firing 'change'.
  function paint(value: StatusValue) {
    current = value;
    root.dataset.value = value;
    labelEl.textContent = LABELS[value] ?? '—';
    opts.forEach((o) => o.setAttribute('aria-selected', String(o.dataset.value === value)));
  }

  function openMenu(open: boolean) {
    menu.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  }

  // Render initial value from the markup's data-value.
  paint(current);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu(menu.hidden);
  });

  opts.forEach((opt) =>
    opt.addEventListener('click', () => {
      const value = opt.dataset.value as StatusValue;
      paint(value);
      openMenu(false);
      // User selection → emit; setValue() (programmatic) does NOT.
      root.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }));
    }),
  );

  document.addEventListener('click', (e) => {
    if (!root.contains(e.target as Node)) openMenu(false);
  });

  return {
    get value() {
      return current;
    },
    setValue(v: StatusValue) {
      paint(v);
    },
    element: root,
  };
}
