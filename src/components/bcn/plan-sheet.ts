// The plan's sheets' shared runtime (2026-10-30, Andy: "The Budget table and Schedule Table seem like two different
// implementations... I really like the budget table"). One spreadsheet, two sets of columns: <BcnPlanBudgetSheet>'s
// years and <BcnPlanItemsTable>'s schedule fields both mount through createSheet, so they read and behave alike.
//
// What it owns: the grid's theme (Beacon's dense grid with a hairline between columns and the cursor's colors), the
// name box and value bar (<BcnSheetBar>), the 2px cell cursor with its column header and row name lit, the keys a
// spreadsheet has that AG Grid doesn't (a try at a cell that won't take says why; Delete clears where allowed; copy;
// paste a block across the cells it covers), the flash on commit, the parents' shading by tier, and the name cell
// (indent, the search's hits in yellow). Each sheet keeps its own columns and its own rules: what a cell is, whether
// it edits, what Delete does, what a pasted value means.
//
// Choice cells pick in one click (2026-10-30, Andy: "hate how the Schedule table makes me click into a status cell,
// and then it transforms into a dropdown"): SheetChoiceEditor opens its list on the click that lands on the cell, and
// a pick commits. SheetDateEditor opens a date entry the same way, typed or from the calendar.
//
// bcn-lego-checked: no esa- lego is an editable grid, a formula bar or a grid cell editor (esa-select and
// esa-date-picker are form fields that own their label and frame, and can't live inside an AG Grid cell); checked
// Beacon (its grids are AG Grid with its own editors, none a one-click picker). plan-sheet is the reusable home.

import { createGrid, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import type { CellPosition, ColDef, GridApi, GridOptions, ICellEditorComp, ICellEditorParams, ICellRendererParams, IRowNode, SuppressKeyboardEventParams } from 'ag-grid-community';
import { beaconDenseTheme } from '../../lib/beacon-grid';

export const SHEET_ROW_PX = 32;
export const SHEET_HEAD_PX = 48;

// Beacon's grid in its dense variant: the teal header, its zebra and hover, its resize handle; 32px rows and a 48px
// header. A spreadsheet's only additions: a hairline between columns as well as rows, and the cursor's colors.
// Literal hex, as beacon-grid's are.
export const sheetTheme = beaconDenseTheme.withParams({
  rowHeight: SHEET_ROW_PX,
  headerHeight: SHEET_HEAD_PX,
  columnBorder: { color: '#efefef' }, // gray-100
  rangeSelectionBorderColor: '#005862', // teal-900 / --color-background-brand
  valueChangeValueHighlightBackgroundColor: 'rgba(0, 88, 98, 0.18)', // teal-900 at 18%
  cellHorizontalPadding: 10,
});

/** The focused cell: its row (the pinned total's included) and column. */
export interface SheetAt<T> {
  cell: CellPosition;
  node: IRowNode<T> | undefined;
  row: T;
  colId: string;
}
/** A pasted block's cell: the row and column it lands on, and the text that came in. */
export interface PastedCell<T> {
  node: IRowNode<T>;
  row: T;
  colId: string;
  raw: string;
}

export interface SheetConfig<T> {
  /** The component's root (holds the bar, the grid and the cursor's style). */
  root: HTMLElement;
  /** The column that names the row (lit with the cursor). */
  nameCol?: string;
  /** Whether the cell takes an edit, now. */
  canEdit(row: T, colId: string): boolean;
  /** Why a try at a cell that won't take an edit doesn't ('' to say nothing: a read-only sheet). */
  whyNot(row: T, colId: string): string;
  /** The name box: the cursor's column and the row's name. */
  where(at: SheetAt<T>): { col: string; name: string };
  /** The value bar: the cell's full value and what it is (its notes, each a small aside). */
  describe(at: SheetAt<T>): { value: string; notes: string[] };
  /** Delete or Backspace on an editable cell: clears it, or returns why it won't clear. */
  clear?(at: SheetAt<T>): string | void;
  /** A key the sheet handles itself before the shared ones (Space on a checkbox); true when it did. */
  onKey?(e: KeyboardEvent, at: SheetAt<T>): boolean;
  /** A single click on a cell: true when the sheet acted on it (a toggle); otherwise a click-to-edit column edits. */
  onClick?(at: SheetAt<T>, target: HTMLElement | null): boolean;
  /** Columns whose editor opens on a single click (choices, dates). */
  clickToEdit?: ReadonlySet<string>;
  /** Copy: the cell's text. */
  copy(at: SheetAt<T>): string;
  /** Paste: the block's cells, each on its row and column, for the sheet to read and commit. */
  paste?(cells: PastedCell<T>[]): void;
}

export interface Sheet<T> {
  api: GridApi<T>;
  cursor(): SheetAt<T> | null;
  showCursor(): void;
  /** Say something in the value bar (why a value didn't take), flashing the bar. */
  say(text: string): void;
  /** Remember cells to flash once the page has redrawn with the change. */
  flashNext(ids: Iterable<string>, cols: Iterable<string>): void;
  /** Flash what flashNext remembered (call after a redraw); `extra` adds rows such as a pinned total. */
  flush(extra?: IRowNode<T>[]): void;
}

let registered = false;
const printable = (key: string | null | undefined) => !!key && key.length === 1;

/** The row's class: parents shaded by tier, as the Gantt's rows are. */
export function tierClass(depth: number, parent: boolean): string | undefined {
  return parent ? `bcn-sheet__tier-${Math.min(depth, 2)}` : undefined;
}

/** The name cell: indented by depth, the search's hits marked in yellow, as the Gantt marks them. `link` underlines
 *  it on hover (it opens the item). */
export function nameRenderer<T>(opts: { depth: (row: T) => number; query: () => string; link?: boolean; extraClass?: string }) {
  return (p: ICellRendererParams<T>) => {
    const span = document.createElement('span');
    span.className = ['bcn-sheet__name', opts.link ? 'bcn-sheet__name--link' : '', opts.extraClass ?? ''].filter(Boolean).join(' ');
    span.style.paddingInlineStart = `${(p.data ? opts.depth(p.data) : 0) * 16}px`;
    const label: string = p.value ?? '';
    const query = opts.query();
    const at = query && !p.node.isRowPinned() ? label.toLowerCase().indexOf(query) : -1;
    if (at < 0) span.textContent = label;
    else {
      const mark = Object.assign(document.createElement('mark'), { className: 'bcn-sheet__match', textContent: label.slice(at, at + query.length) });
      span.append(label.slice(0, at), mark, label.slice(at + query.length));
    }
    return span;
  };
}

const CHEVRON =
  '<svg class="bcn-sheet__chev" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
const CALENDAR =
  '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';

/** A choice at rest: its dot (a status's color) and label, and a chevron that shows on hover, so it reads as a
 *  picker. `pickable` false draws the value alone. */
export function choiceRenderer<T>(opts: { label: (p: ICellRendererParams<T>) => string; tone?: (p: ICellRendererParams<T>) => string | null; pickable: (p: ICellRendererParams<T>) => boolean }) {
  return (p: ICellRendererParams<T>) => {
    const wrap = document.createElement('span');
    wrap.className = 'bcn-sheet__choice-cell';
    const text = opts.label(p);
    const tone = opts.tone?.(p) ?? null;
    if (text && tone) {
      const dot = document.createElement('i');
      dot.className = 'bcn-sheet__dot';
      dot.style.setProperty('--_dot', tone);
      wrap.append(dot);
    }
    wrap.append(Object.assign(document.createElement('span'), { className: 'bcn-sheet__choice-label', textContent: text }));
    if (opts.pickable(p)) wrap.insertAdjacentHTML('beforeend', CHEVRON);
    return wrap;
  };
}

/** A checkbox at rest (a milestone): drawn, not a control, since the sheet toggles it on one click or Space. */
export function checkRenderer<T>(opts: { show: (p: ICellRendererParams<T>) => boolean }) {
  return (p: ICellRendererParams<T>) => {
    if (!opts.show(p)) return '';
    const box = document.createElement('span');
    box.className = 'bcn-sheet__check';
    box.setAttribute('role', 'checkbox');
    box.setAttribute('aria-checked', String(!!p.value));
    box.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
    return box;
  };
}

export interface Choice {
  value: string;
  label: string;
  /** A dot's color (a CSS color or var()). */
  tone?: string;
}
export interface ChoiceEditorParams {
  choices: Choice[] | ((p: ICellEditorParams) => Choice[]);
  /** Several at once (owners): each click toggles, Enter, Tab or a click away saves the set. */
  multi?: boolean;
}

/** One-click choices: a list under the cell, the current value marked. A click on a choice commits it (a multi list
 *  toggles, and saves when it closes); from the keyboard, arrows move, a letter jumps, Enter commits, Space picks (or
 *  toggles), Escape cancels. Typing on the cell opens it at the first choice starting with that letter. */
export class SheetChoiceEditor implements ICellEditorComp {
  private gui!: HTMLElement;
  private params!: ICellEditorParams & ChoiceEditorParams;
  private choices: Choice[] = [];
  private items: HTMLElement[] = [];
  private active = 0;
  private picked = new Set<string>();
  private multi = false;

  init(params: ICellEditorParams & ChoiceEditorParams): void {
    this.params = params;
    this.multi = !!params.multi;
    this.choices = typeof params.choices === 'function' ? params.choices(params) : params.choices;
    const current = params.value as string | string[] | null;
    this.picked = new Set(Array.isArray(current) ? current : current ? [current] : []);
    this.gui = document.createElement('div');
    this.gui.className = 'bcn-sheet__picker typography-body-sm';
    this.gui.tabIndex = -1;
    this.gui.setAttribute('role', 'listbox');
    if (this.multi) this.gui.setAttribute('aria-multiselectable', 'true');
    this.items = this.choices.map((choice, i) => {
      const item = document.createElement('div');
      item.className = 'bcn-sheet__choice';
      item.setAttribute('role', 'option');
      item.dataset.sheetChoice = choice.value;
      if (this.multi) item.insertAdjacentHTML('beforeend', '<span class="bcn-sheet__check" aria-hidden="true"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></span>');
      if (choice.tone) {
        const dot = document.createElement('i');
        dot.className = 'bcn-sheet__dot';
        dot.style.setProperty('--_dot', choice.tone);
        item.append(dot);
      }
      item.append(Object.assign(document.createElement('span'), { textContent: choice.label }));
      // The pointer down keeps the focus in the list; the click picks.
      item.addEventListener('mousedown', (e) => e.preventDefault());
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.pick(i);
      });
      item.addEventListener('mousemove', () => this.move(i));
      return item;
    });
    this.gui.append(...this.items);
    this.gui.addEventListener('keydown', (e) => this.onKey(e));
    const start = printable(params.eventKey) ? this.find(params.eventKey!) : -1;
    const at = this.choices.findIndex((c) => this.picked.has(c.value));
    this.move(start >= 0 ? start : Math.max(0, at));
    this.paint();
  }
  private find(letter: string): number {
    const l = letter.toLowerCase();
    const from = (this.active + 1) % Math.max(1, this.choices.length);
    for (let k = 0; k < this.choices.length; k++) {
      const i = (from + k) % this.choices.length;
      if (this.choices[i].label.toLowerCase().startsWith(l)) return i;
    }
    return -1;
  }
  private move(i: number): void {
    this.active = Math.max(0, Math.min(this.choices.length - 1, i));
    this.items.forEach((item, k) => item.toggleAttribute('data-active', k === this.active));
    this.items[this.active]?.scrollIntoView({ block: 'nearest' });
  }
  private paint(): void {
    this.items.forEach((item, k) => item.setAttribute('aria-selected', String(this.picked.has(this.choices[k].value))));
  }
  private pick(i: number): void {
    const value = this.choices[i]?.value;
    if (value === undefined) return;
    this.move(i);
    if (this.multi) {
      if (this.picked.has(value)) this.picked.delete(value);
      else this.picked.add(value);
      this.paint();
      return;
    }
    this.picked = new Set([value]);
    this.params.stopEditing();
  }
  private onKey(e: KeyboardEvent): void {
    const keys: Record<string, () => void> = {
      ArrowDown: () => this.move(this.active + 1),
      ArrowUp: () => this.move(this.active - 1),
      Home: () => this.move(0),
      End: () => this.move(this.choices.length - 1),
      ' ': () => this.pick(this.active),
    };
    const act = keys[e.key];
    if (act) {
      e.preventDefault();
      e.stopPropagation();
      act();
    } else if (printable(e.key) && !e.metaKey && !e.ctrlKey) {
      const i = this.find(e.key);
      if (i >= 0) this.move(i);
      e.stopPropagation();
    } else if (e.key === 'Enter' && !this.multi) {
      // Enter commits the highlighted choice (the grid then stops editing and moves down).
      this.picked = new Set([this.choices[this.active]?.value].filter((v): v is string => !!v));
    }
  }
  getGui(): HTMLElement {
    return this.gui;
  }
  afterGuiAttached(): void {
    this.gui.focus({ preventScroll: true });
    this.items[this.active]?.scrollIntoView({ block: 'nearest' });
  }
  getValue(): string | string[] | null {
    if (this.multi) return this.choices.map((c) => c.value).filter((v) => this.picked.has(v));
    return [...this.picked][0] ?? null;
  }
  isPopup(): boolean {
    return true;
  }
  getPopupPosition(): 'over' | 'under' {
    return 'under';
  }
}

/** A date as the sheet shows it to type over: 3/17/2027. */
const typed = (iso: string | null | undefined) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso ?? '');
  return m ? `${Number(m[2])}/${Number(m[3])}/${m[1]}` : '';
};

/** A date entry, on one click: the date to type over (3/17/2027, 2027-03-17 or Mar 17, 2027 all read) and a calendar
 *  button for the browser's date picker, whose pick commits. Typing on the cell starts it with that key. */
export class SheetDateEditor implements ICellEditorComp {
  private gui!: HTMLElement;
  private input!: HTMLInputElement;
  private params!: ICellEditorParams;
  private fresh = false;

  init(params: ICellEditorParams): void {
    this.params = params;
    this.gui = document.createElement('div');
    this.gui.className = 'bcn-sheet__date';
    this.input = Object.assign(document.createElement('input'), { type: 'text', className: 'bcn-sheet__date-input', placeholder: 'M/D/YYYY' });
    this.input.setAttribute('aria-label', String(params.colDef?.headerName ?? 'Date'));
    this.fresh = printable(params.eventKey);
    this.input.value = this.fresh ? params.eventKey! : typed(params.value as string | null);
    const native = Object.assign(document.createElement('input'), { type: 'date', className: 'bcn-sheet__date-native', tabIndex: -1 });
    native.setAttribute('aria-hidden', 'true');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'bcn-sheet__date-button';
    button.tabIndex = -1;
    button.setAttribute('aria-label', 'Pick From a Calendar');
    button.innerHTML = CALENDAR;
    button.addEventListener('mousedown', (e) => e.preventDefault());
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      native.value = (params.value as string | null) ?? '';
      try {
        native.showPicker();
      } catch {
        native.focus();
      }
    });
    native.addEventListener('change', () => {
      if (!native.value) return;
      this.input.value = typed(native.value);
      params.stopEditing();
    });
    this.gui.append(this.input, button, native);
  }
  getGui(): HTMLElement {
    return this.gui;
  }
  afterGuiAttached(): void {
    this.input.focus();
    if (this.fresh) this.input.setSelectionRange(this.input.value.length, this.input.value.length);
    else this.input.select();
  }
  getValue(): string {
    return this.input.value;
  }
}

/** While a picker is open, its keys are its own (the grid would move the cursor on an arrow). */
export const pickerKeys = (p: SuppressKeyboardEventParams) => p.editing && ['ArrowUp', 'ArrowDown', 'Home', 'End', ' '].includes(p.event.key);

/**
 * A sheet: AG Grid on the sheet theme with the spreadsheet chrome and keys. `gridOptions` are the sheet's own (its
 * columns, rows, filters); the shared ones (theme, editing, the cursor) are set here, and the sheet's own handlers
 * run after the shared ones.
 */
export function createSheet<T>(cfg: SheetConfig<T>, gridOptions: GridOptions<T>): Sheet<T> {
  if (!registered) {
    ModuleRegistry.registerModules([AllCommunityModule]);
    registered = true;
  }
  const root = cfg.root;
  const host = root.querySelector<HTMLElement>('[data-sheet-grid]')!;
  const refEl = root.querySelector<HTMLElement>('[data-sheet-ref]')!;
  const valueEl = root.querySelector<HTMLElement>('[data-sheet-value]')!;
  const bar = root.querySelector<HTMLElement>('[data-sheet-bar]')!;
  const nameCol = cfg.nameCol ?? 'name';
  // The cursor's style is scoped to this sheet (a page can hold two).
  root.dataset.sheet ??= `sheet-${Math.random().toString(36).slice(2, 8)}`;
  // The cursor's header and row-name highlight, rewritten as it moves (made here: Astro would hoist a <style> in markup).
  const focusStyle = root.appendChild(document.createElement('style'));
  let flash: { ids: Set<string>; cols: Set<string> } | null = null;

  const userDefault: ColDef<T> = gridOptions.defaultColDef ?? {};
  const api: GridApi<T> = createGrid(host, {
    theme: sheetTheme,
    singleClickEdit: false,
    stopEditingWhenCellsLoseFocus: true,
    // Sheets and Excel: Enter commits and moves down a row.
    enterNavigatesVerticallyAfterEdit: true,
    tooltipShowDelay: 300,
    ...gridOptions,
    defaultColDef: {
      // Sorting on, as prod's grids (design QA, 2026-10-29); a third click returns the outline's order.
      sortable: true,
      resizable: true,
      suppressMovable: true,
      ...userDefault,
      // Delete and Backspace clear the cell outright (below), rather than opening an empty editor; an open picker
      // keeps its keys.
      suppressKeyboardEvent: (p) => (!p.editing && (p.event.key === 'Delete' || p.event.key === 'Backspace')) || pickerKeys(p) || !!userDefault.suppressKeyboardEvent?.(p),
    },
    onCellFocused: (e) => {
      showCursor();
      gridOptions.onCellFocused?.(e);
    },
    onCellClicked: (e) => {
      gridOptions.onCellClicked?.(e);
      const at = cursor();
      if (!at || !e.node || e.node.isRowPinned() || at.node !== e.node) return;
      const colId = e.column.getColId();
      if (colId !== at.colId) return;
      if (cfg.onClick?.(at, (e.event?.target as HTMLElement | null) ?? null)) return;
      // One click opens a choice's list or a date's entry: no click to select, then another to edit.
      if (cfg.clickToEdit?.has(colId) && cfg.canEdit(at.row, colId) && !api.getEditingCells().length && e.rowIndex !== null) {
        api.startEditingCell({ rowIndex: e.rowIndex, colKey: colId });
      } else if (cfg.clickToEdit?.has(colId) && !cfg.canEdit(at.row, colId)) {
        // A click where a picker would open, on a cell that won't take one, says why.
        explain(at);
      }
    },
  });

  function cursor(): SheetAt<T> | null {
    const cell = api.getFocusedCell();
    if (!cell) return null;
    const node = cell.rowPinned === 'bottom' ? api.getPinnedBottomRow(cell.rowIndex) : cell.rowPinned ? undefined : api.getDisplayedRowAtIndex(cell.rowIndex);
    if (!node?.data) return null;
    return { cell, node: node as IRowNode<T>, row: node.data as T, colId: cell.column.getColId() };
  }

  const small = (text: string) => Object.assign(document.createElement('small'), { textContent: text });
  /** The name box, the value bar, and the cursor's column header and row name lit, as Sheets lights its A and 1. */
  function showCursor(): void {
    const at = cursor();
    if (!at) {
      refEl.replaceChildren(document.createTextNode('Select a Cell'));
      refEl.dataset.empty = '';
      valueEl.replaceChildren();
      focusStyle.textContent = '';
      return;
    }
    delete refEl.dataset.empty;
    const { col, name } = cfg.where(at);
    const ref: Node[] = [];
    if (col) ref.push(Object.assign(document.createElement('strong'), { textContent: col }));
    ref.push(Object.assign(document.createElement('span'), { textContent: name }));
    refEl.replaceChildren(...ref);
    const { value, notes } = cfg.describe(at);
    valueEl.replaceChildren(document.createTextNode(value), ...notes.map(small));

    const rowSel = at.node && !at.node.isRowPinned() ? `.ag-row[row-id=${JSON.stringify(at.node.id)}] .ag-cell[col-id=${JSON.stringify(nameCol)}]` : '';
    const grid = `[data-sheet=${JSON.stringify(root.dataset.sheet)}] [data-sheet-grid]`;
    focusStyle.textContent = [
      `${grid} .ag-header-cell[col-id=${JSON.stringify(at.colId)}] { background: var(--_sheet-lit-head); }`,
      rowSel ? `${grid} ${rowSel} { background: var(--_sheet-lit); color: var(--color-content-brand); }` : '',
      rowSel ? `${grid} ${rowSel} .bcn-sheet__name { color: var(--color-content-brand); }` : '',
    ].join('\n');
  }

  /** A try at a cell that won't take says why, in the value bar, instead of doing nothing. */
  function say(why: string): void {
    const note = Object.assign(document.createElement('span'), { className: 'bcn-sheet__why', textContent: why });
    valueEl.replaceChildren(note);
    bar.animate([{ backgroundColor: 'var(--_sheet-why)' }, { backgroundColor: 'transparent' }], { duration: 900, easing: 'ease-out' });
  }
  function explain(at: SheetAt<T>): boolean {
    const why = cfg.whyNot(at.row, at.colId);
    if (why) say(why);
    return !!why;
  }

  // The value bar follows the editor as you type, as a formula bar does.
  host.addEventListener('input', (e) => {
    const input = e.target as HTMLInputElement;
    if (input.closest('.ag-cell-inline-editing, .bcn-sheet__date')) valueEl.replaceChildren(document.createTextNode(input.value));
  });

  // ── The keys a spreadsheet has that the grid doesn't ──
  host.addEventListener('keydown', (e) => {
    if (api.getEditingCells().length || e.metaKey || e.ctrlKey || e.altKey) return;
    const at = cursor();
    if (!at) return;
    if (!at.node?.isRowPinned() && cfg.onKey?.(e, at)) {
      e.preventDefault();
      return;
    }
    const attempt = e.key.length === 1 || e.key === 'Enter' || e.key === 'F2' || e.key === 'Delete' || e.key === 'Backspace';
    if (attempt && at.colId !== nameCol && !cfg.canEdit(at.row, at.colId)) {
      if (explain(at)) e.preventDefault();
      return;
    }
    if ((e.key === 'Delete' || e.key === 'Backspace') && cfg.clear && cfg.canEdit(at.row, at.colId) && !at.node?.isRowPinned()) {
      e.preventDefault();
      const why = cfg.clear(at);
      if (why) say(why);
    }
  });
  const inSheet = () => host.contains(document.activeElement) && !api.getEditingCells().length;
  document.addEventListener('copy', (e) => {
    if (!inSheet()) return;
    const at = cursor();
    if (!at) return;
    e.clipboardData?.setData('text/plain', cfg.copy(at));
    e.preventDefault();
  });
  // Paste: one value into the cursor's cell, or a block (tab-separated rows, as Excel and Sheets copy them) across the
  // cells it covers from there. The sheet reads each and skips what doesn't edit.
  document.addEventListener('paste', (e) => {
    if (!cfg.paste) return;
    // A paste while a cell's list is open (one click opens it) pastes into the cell, as it would at rest.
    if (host.contains(document.activeElement) && document.activeElement?.closest('.bcn-sheet__picker')) api.stopEditing(true);
    if (!inSheet()) return;
    const at = cursor();
    if (!at || at.node?.isRowPinned()) return;
    const text = e.clipboardData?.getData('text/plain') ?? '';
    if (!text) return;
    e.preventDefault();
    const columns = api.getAllDisplayedColumns();
    const startCol = columns.findIndex((c) => c.getColId() === at.colId);
    const cells: PastedCell<T>[] = [];
    text.replace(/\r/g, '').replace(/\n$/, '').split('\n').forEach((line, r) => {
      const node = api.getDisplayedRowAtIndex(at.cell.rowIndex + r);
      if (!node?.data) return;
      line.split('\t').forEach((raw, c) => {
        const colId = columns[startCol + c]?.getColId();
        if (colId) cells.push({ node: node as IRowNode<T>, row: node.data as T, colId, raw });
      });
    });
    cfg.paste(cells);
  });

  return {
    api,
    cursor,
    showCursor,
    say,
    flashNext(ids, cols) {
      flash = { ids: new Set(ids), cols: new Set(cols) };
    },
    flush(extra = []) {
      if (!flash) return;
      const { ids, cols } = flash;
      flash = null;
      const rowNodes = [...ids].map((id) => api.getRowNode(id)).filter((n): n is IRowNode<T> => !!n);
      api.flashCells({ rowNodes: [...rowNodes, ...extra], columns: [...cols], flashDuration: 250, fadeDuration: 650 });
    },
  };
}
