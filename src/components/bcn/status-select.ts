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
  blocked: 'Blocked',
  'on-hold': 'On Hold',
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
    const opening = Boolean(menu.hidden);
    openMenu(opening);
    // Opened from the keyboard (Enter or Space: a click with no pointer), the current option takes focus.
    if (opening && (e as MouseEvent).detail === 0) (optFor(current) ?? opts[0])?.focus();
  });

  opts.forEach((opt) =>
    opt.addEventListener('click', () => {
      const value = opt.dataset.value as string;
      paint(value);
      openMenu(false);
      trigger.focus();
      root.dispatchEvent(new CustomEvent('change', { detail: { value }, bubbles: true }));
    }),
  );

  // The listbox keys (2026-10-29, the second traps audit: Arrow keys scrolled the page and Escape left it open): Down,
  // Up, Home and End move among the options; Enter or Space picks; Escape and Tab close, back on the trigger.
  opts.forEach((o) => (o.tabIndex = -1));
  const visible = () => opts.filter((o) => !o.hidden);
  trigger.addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
    e.preventDefault();
    openMenu(true);
    (optFor(current) ?? visible()[0])?.focus();
  });
  menu.addEventListener('keydown', (e) => {
    const list = visible();
    const at = list.indexOf(document.activeElement as HTMLLIElement);
    const move = (i: number) => list[(i + list.length) % list.length]?.focus();
    if (e.key === 'ArrowDown') move(at + 1);
    else if (e.key === 'ArrowUp') move(at - 1);
    else if (e.key === 'Home') move(0);
    else if (e.key === 'End') move(list.length - 1);
    else if (e.key === 'Enter' || e.key === ' ') (document.activeElement as HTMLElement)?.click();
    else if (e.key === 'Escape' || e.key === 'Tab') {
      openMenu(false);
      if (e.key === 'Escape') {
        trigger.focus();
        e.stopPropagation();
      }
      return;
    } else return;
    e.preventDefault();
  });

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
