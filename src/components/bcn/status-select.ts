// Shared logic for <BcnStatusSelect> — a hand-driven listbox (NOT esa-select)
// because the trigger must show the live status color. The controller flips state —
// root.dataset.value + aria + the trigger label text + (in option mode) the trigger
// dot color — and emits 'change' only on user selection.
//
// Default-set dots are token-driven via CSS ([data-value] → --bcn-status-*); option
// mode supplies a per-option `data-color` the controller copies onto the trigger dot.

// Widened to string so any status set (e.g. the fish-study plan/exec ramps) works;
// the default tracking set ('not-started' | 'in-progress' | 'completed') still passes.
export type StatusValue = string;

export interface StatusSelectController {
  readonly value: StatusValue;
  setValue(v: StatusValue): void;
  element: HTMLElement;
}

// Fallback labels for the default 3-state set (option mode carries data-label).
const LABELS: Record<string, string> = {
  'not-started': 'Not Started',
  'in-progress': 'In Progress',
  completed: 'Completed',
};

/** Wire one rendered <BcnStatusSelect> root into a live listbox. */
export function setupStatusSelect(root: HTMLElement): StatusSelectController {
  const trigger = root.querySelector<HTMLButtonElement>('.bcn-status-select__trigger')!;
  const menu = root.querySelector<HTMLUListElement>('.bcn-status-select__menu')!;
  const labelEl = root.querySelector<HTMLSpanElement>('.bcn-status-select__value')!;
  const triggerDot = root.querySelector<HTMLElement>('.bcn-status-select__dot--trigger')!;
  const opts = [...menu.querySelectorAll<HTMLLIElement>('.bcn-status-select__opt')];

  const optFor = (value: string) => opts.find((o) => o.dataset.value === value);
  let current = root.dataset.value ?? opts[0]?.dataset.value ?? '';

  // Update the UI WITHOUT firing 'change'. dataset.value drives the default-set dot
  // color via CSS; option mode repaints the trigger dot from the option's data-color.
  function paint(value: StatusValue) {
    current = value;
    root.dataset.value = value;
    const opt = optFor(value);
    labelEl.textContent = opt?.dataset.label ?? LABELS[value] ?? '—';
    if (opt?.dataset.color) triggerDot.style.background = opt.dataset.color;
    opts.forEach((o) => o.setAttribute('aria-selected', String(o.dataset.value === value)));
  }

  function openMenu(open: boolean) {
    menu.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
  }

  paint(current);

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    openMenu(menu.hidden);
  });

  opts.forEach((opt) =>
    opt.addEventListener('click', () => {
      const value = opt.dataset.value as string;
      paint(value);
      openMenu(false);
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
