// Controller for <BcnSw3Scan>. setupX shape: owns the workspace's view state (what is
// selected: a source or a file; the page in view per file and whether it follows the scan;
// the selected box; draw mode; the library and Aldo panels) and renders the console, the
// scrubber, the page and its boxes, the library and a source's details from sw3-store and
// sw3-sources on every change. Where the run is shows in Aldo (sw3-aldo.ts). The Aldo pane renders itself
// (sw3-aldo.ts); its answers that move the page arrive as sw3:page / sw3:find.

import {
  initSw3,
  activeDoc,
  setActiveDoc,
  docIds,
  peek,
  payload,
  started,
  finished,
  state,
  scanned,
  headPage,
  finds,
  gaps,
  inScope,
  markRegion,
  setFindBox,
  removeFindBox,
  splitFind,
  mergeFinds,
  undo,
  redo,
  canUndo,
  canRedo,
  manual,
  preparing,
  toSettle,
  paused,
  pausing,
  rereading,
  checking,
  checked,
  pace,
  skipped,
  act,
  resetAll,
  resetEverything,
  type Pace,
} from './sw3-store';
import {
  initSources,
  allSources,
  sourceOf,
  fileOf,
  createSource,
  updateSource,
  deleteSource,
  removeFile,
  uploadFiles,
  downloadFile,
  resetSources,
} from './sw3-sources';
import { setupPageScrubber, type ScrubberPip } from './page-scrubber';
import { setupPageView, countPages, type PageViewBox } from './page-view';
import { setupSw3SourcesUi, middle, type FileState, type SourceRow } from './sw3-sources-ui';
import { setupSw3SourceEditor, type EditorSource } from './sw3-source-editor';
import { setIcon, paintIcons } from '../../lib/lucide-extra';

/** esa-button wraps its text in a label span; write there so the button keeps its shape. */
const setLabel = (btn: HTMLElement, text: string) => {
  (btn.querySelector('.esa-button__label') ?? btn).textContent = text;
};
/** Hide or show an esa-button by its wrapper (its own display rule outranks [hidden]). */
const show = (btn: HTMLElement | null, on: boolean) => {
  if (!btn) return;
  const host = (btn.closest('.esa-button') as HTMLElement | null) ?? btn;
  host.style.display = on ? '' : 'none';
};
/** A steer given with the scan's controls: the record keeps it, the conversation shows a line. */
const CONTROLS = { controls: true };
const PACE_LABEL: Record<Pace, string> = { step: 'One at a time', watch: 'Slow', run: 'Fast' };
const PACE_REPLY: Record<Pace, string> = {
  run: 'Going fast. I will raise anything that needs you as I reach it.',
  watch: 'Going slowly, so you can follow along.',
  step: 'One commitment at a time: I will stop after each.',
};
const SEL_KEY = 'sw3:v3:sel';

type Sel = { kind: 'source' | 'file'; id: string } | null;
type Confirm = HTMLElement & { open: boolean; heading: string; message: string; confirmLabel: string };
type Upload = HTMLElement & { _files: File[]; requestUpdate: () => void };
type Field = HTMLElement & { value: string; errorText?: string };

export function setupSw3Scan(root: HTMLElement): void {
  initSw3();
  const base = root.dataset.base!.replace(/\/$/, '');
  const seed = { ...JSON.parse(root.querySelector('[data-sw3-sources-seed]')!.textContent!), base };
  const $ = <T extends HTMLElement = HTMLElement>(s: string) => root.querySelector<T>(s)!;
  paintIcons(root);

  const toolbar = $('[data-sw3-toolbar]');
  const tx = {
    play: $('[data-tx="play"]'),
    pause: $('[data-tx="pause"]'),
    restart: $('[data-tx="restart"]'),
  };
  const speed = $('[data-bar-speed]');
  const speedBtn = $('[data-bar-speed-btn]');
  const pageField = $<Field & { suffix: string }>('[data-bar-page]');
  const toolsEl = $('[data-sw3-tools]');
  /** A page tool's native button (EsaButton puts data-* on it). */
  const tool = (k: string) => toolsEl.querySelector<HTMLButtonElement>(`button[data-tool="${k}"]`)!;
  const pagePane = $('[data-sw3-pagepane]');
  const empty = $('[data-sw3-empty]');
  const confirmEl = $<Confirm>('[data-confirm]');
  const newDialog = $<HTMLElement & { open: boolean }>('[data-new-dialog]');

  // ── View state ──────────────────────────────────────────────────────────────
  const views = new Map<string, number>();
  const following = new Map<string, boolean>();
  let sel: Sel = null;
  /** The selected find (handles, chip, keys) and any others Shift+clicked with it. */
  let selected: string | null = null;
  const also = new Set<string>();
  const selection = () => (selected ? [selected, ...also] : []);
  const clearSel = () => ((selected = null), also.clear());
  /** Scroll the selected box into view on the next paint (a selection, not a re-render). */
  let reveal = false;
  let lastNewest = '';
  let lastViewSig = '';
  let selecting = false;
  /** Redraw or continue: the next rectangle dragged is this find's box on the page. */
  let redrawing: string | null = null;
  let drawLabel = 'Redrew';
  /** Split: a click inside this find's box cuts it. */
  let splitting: string | null = null;
  /** Page zoom: 1 fits the pane's width; below it the whole page shows, centered. */
  const ZOOMS = [0.5, 0.75, 1, 1.25, 1.5];
  let zoom = 1;
  let hideAldo = false;

  const D = () => payload();
  const view = () => views.get(activeDoc()) ?? D().scope.first;
  const setView = (n: number) => views.set(activeDoc(), Math.min(D().total ?? n, Math.max(1, n)));
  const isFollowing = () => following.get(activeDoc()) ?? true;
  const setFollowing = (on: boolean) => following.set(activeDoc(), on);
  const fileName = () => middle(fileOf(activeDoc())?.name ?? D().short ?? '', 40);
  const total = () => D().total ?? D().scope.last;

  const saveSel = () => {
    try {
      localStorage.setItem(SEL_KEY, JSON.stringify(sel));
    } catch {
      /* no storage */
    }
  };
  const selectFile = (id: string) => {
    sel = { kind: 'file', id };
    clearSel();
    setDrawing(false);
    saveSel();
    if (activeDoc() !== id) setActiveDoc(id);
    else render();
  };
  const selectSource = (id: string) => {
    sel = { kind: 'source', id };
    clearSel();
    setDrawing(false);
    saveSel();
    render();
  };

  // ── Fit the workspace to the window below the stepper ───────────────────────
  /** The least height the library, page and Aldo get: Aldo's thread, Needs you, status and
   *  composer all in view. */
  const PANES_MIN = 520;
  const fit = () => {
    const scroller = root.closest<HTMLElement>('.modern-layout__content, main') ?? document.scrollingElement;
    const top = root.getBoundingClientRect().top + (scroller?.scrollTop ?? 0);
    // Stop short of the layout's own bottom padding, so the workspace ends at the fold.
    const pad = scroller instanceof HTMLElement ? parseFloat(getComputedStyle(scroller).paddingBottom) || 0 : 0;
    // On a short window (a laptop) the panes keep a working height of their own, below the
    // step's panel, and the page scrolls to reach them instead of crushing them.
    const head = root.querySelector<HTMLElement>('.bcn-sw3scan__panel')?.offsetHeight ?? 0;
    const gap = parseFloat(getComputedStyle(root).rowGap) || 0;
    const floor = head + gap + PANES_MIN;
    root.style.setProperty('--_fit', `${Math.max(floor, window.innerHeight - top - pad - 8)}px`);
  };
  window.addEventListener('resize', fit);
  requestAnimationFrame(fit);
  // The step's panel changes height (a source selected, the console dimmed): fit again.
  const panelEl = root.querySelector('.bcn-sw3scan__panel');
  if (panelEl) new ResizeObserver(fit).observe(panelEl);

  // ── The page ────────────────────────────────────────────────────────────────
  const pick = (page: number) => {
    setView(page);
    // Clicking the page being read takes up following it again.
    setFollowing(started() && !finished() && page === headPage());
    render();
  };
  const select = (id: string, add = false) => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    setSplitting(null);
    if (add && selected) {
      // Shift+click: add it to the selection, or take it out.
      if (id === selected) (selected = [...also][0] ?? null), also.delete(selected!);
      else if (also.has(id)) also.delete(id);
      else also.add(id);
      return render();
    }
    // Enter (or a click) on the box already selected opens its ID and name.
    if (!add && id === selected && !also.size && enterEdit) return editSelected();
    also.clear();
    selected = id;
    reveal = true;
    setView(f.boxes.find((b) => b.page === view())?.page ?? f.page);
    setFollowing(false);
    render();
  };
  const setDrawing = (on: boolean, target: string | null = null, label = 'Redrew') => {
    selecting = on;
    redrawing = on ? target : null;
    drawLabel = label;
    if (on) setSplitting(null);
    // Drawing holds the page still: the scan goes on, the view stops following it.
    if (on) setFollowing(false);
    pageView.setSelecting(on);
  };
  const setSplitting = (id: string | null) => {
    splitting = id;
    pageView.setSplitting(id);
    if (id) setFollowing(false);
  };
  /** Set only while a key or click on an already-selected box should open its edit. */
  let enterEdit = false;
  const editSelected = () => {
    if (!selected) return;
    setAldo(true);
    document.dispatchEvent(new CustomEvent('sw3:edit', { detail: { id: selected } }));
  };

  // A box just drawn or picked takes focus, so Delete, the arrows and Escape act on it.
  const focusSelected = () =>
    requestAnimationFrame(() => {
      if (selected) $('[data-page-view]').querySelector<HTMLElement>(`[data-box-id="${CSS.escape(selected)}"]`)?.focus({ preventScroll: true });
    });

  const scrubber = setupPageScrubber($('[data-page-scrubber]'), { onPage: pick, onFind: select });
  const pageView = setupPageView($('[data-page-view]'), {
    onBox: (id, add) => select(id, add),
    onSplit: (id, page, y) => {
      setSplitting(null);
      splitFind(id, page, y);
      focusSelected();
    },
    onRegion: (page, box) => {
      const target = redrawing;
      const label = drawLabel;
      setDrawing(false);
      if (target) {
        setFindBox(target, page, box, label);
        selected = target;
        render();
        return focusSelected();
      }
      markRegion(page, box);
      const m = state().marks.at(-1);
      if (m) (also.clear(), (selected = m.id));
      render();
      focusSelected();
      // No heading inside the box: its ID and name open in Aldo at once.
      if (m && !m.code) editSelected();
    },
    onEdit: (id, page, box) => setFindBox(id, page, { page, ...box }, 'Adjusted'),
    onRemove: () => deleteSelected(),
    onDeselect: () => {
      clearSel();
      setDrawing(false);
      setSplitting(null);
      render();
    },
  });

  // ── The page tools ──────────────────────────────────────────────────────────
  /** Each selected find's box on the page in view (or its first page). */
  const deleteSelected = () => {
    const v = view();
    for (const id of selection()) {
      const f = finds().find((x) => x.id === id);
      if (f) removeFindBox(id, f.boxes.some((b) => b.page === v) ? v : f.boxes[0]?.page ?? f.page);
    }
    for (const id of selection()) if (!finds().some((f) => f.id === id)) (id === selected ? (selected = null) : also.delete(id));
    if (!selected && also.size) (selected = [...also][0]), also.delete(selected);
    render();
  };
  const setZoom = (z: number) => {
    zoom = Math.min(ZOOMS.at(-1)!, Math.max(ZOOMS[0], z));
    pagePane.style.setProperty('--_zoom', String(zoom));
    render();
  };
  const stepZoom = (d: 1 | -1) => {
    const i = ZOOMS.findIndex((z) => z >= zoom - 1e-6);
    setZoom(ZOOMS[Math.min(ZOOMS.length - 1, Math.max(0, i + d))]);
  };
  const toggleFollow = () => {
    if (!started() || finished()) return;
    if (isFollowing()) setFollowing(false);
    else {
      setFollowing(true);
      const h = headPage();
      if (h) setView(h);
    }
    render();
  };
  const toggleAldoBoxes = () => {
    hideAldo = !hideAldo;
    pageView.setHideAldo(hideAldo);
    render();
  };
  const toggleSplit = () => {
    if (sel?.kind !== 'file') return;
    if (splitting) setSplitting(null);
    else if (selected && !also.size) {
      setDrawing(false);
      setSplitting(selected);
    }
    render();
  };
  const continueNext = () => {
    const f = finds().find((x) => x.id === selected);
    if (!f || also.size) return;
    const next = view() + 1;
    if (next > total() || f.boxes.some((b) => b.page === next)) return;
    setView(next);
    setDrawing(true, f.id, 'Continued');
    render();
  };
  const goPage = (d: number) => pick(Math.min(total(), Math.max(1, view() + d)));
  const toolActions: Record<string, () => void> = {
    select: () => (setDrawing(false), setSplitting(null), render()),
    mark: () => toggleMark(),
    split: toggleSplit,
    merge: () => {
      const ids = selection();
      if (ids.length < 2) return;
      mergeFinds(ids);
      const keep = finds().find((f) => ids.includes(f.id));
      also.clear();
      selected = keep?.id ?? null;
      render();
    },
    continue: continueNext,
    edit: editSelected,
    delete: deleteSelected,
    follow: toggleFollow,
    'zoom-out': () => stepZoom(-1),
    'zoom-in': () => stepZoom(1),
    'zoom-fit': () => setZoom(1),
    'aldo-boxes': toggleAldoBoxes,
    undo: () => undo(),
    redo: () => redo(),
  };
  const moreMenu = $('[data-tools-more]');
  moreMenu.addEventListener('menu-action', (e) => toolActions[(e as CustomEvent<string>).detail]?.());
  toolsEl.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-tool]');
    if (b && !b.disabled) toolActions[b.dataset.tool!]?.();
  });
  /** Each tool live only when it can act; the modes and toggles read as pressed. */
  const paintTools = (fileMode: boolean) => {
    toolsEl.hidden = !fileMode;
    if (!fileMode) return;
    const n = selection().length;
    const f = finds().find((x) => x.id === selected);
    const next = view() + 1;
    const live = started() && !finished();
    const set = (k: string, enabled: boolean, pressed?: boolean) => {
      const b = tool(k);
      b.disabled = !enabled;
      if (pressed !== undefined) b.setAttribute('aria-pressed', String(pressed));
    };
    set('select', true, !selecting && !splitting);
    set('mark', true, selecting && !redrawing);
    set('edit', n === 1);
    set('delete', n >= 1);
    set('follow', live, live && isFollowing());
    set('zoom-out', zoom > ZOOMS[0]);
    set('zoom-in', zoom < ZOOMS.at(-1)!);
    set('zoom-fit', true);
    setLabel(tool('zoom-fit'), `${Math.round(zoom * 100)}%`);
    set('undo', canUndo());
    // More tools: each item live only when it can act.
    const hasAldo = finds().some((x) => !x.edited && !x.marked);
    const items = [
      { label: splitting ? 'Cancel split' : 'Split the box (S)', action: 'split', disabled: !splitting && !(n === 1 && !!f?.boxes.some((b) => b.page === view())) },
      { label: 'Merge into one commitment', action: 'merge', disabled: n < 2 },
      { label: 'Continue on next page', action: 'continue', disabled: !(n === 1 && !!f && next <= total() && !f.boxes.some((b) => b.page === next)) },
      { divider: true },
      { label: hideAldo ? "Show Aldo's boxes (B)" : "Hide Aldo's boxes (B)", action: 'aldo-boxes', disabled: !hasAldo && !hideAldo },
    ];
    const sig = JSON.stringify(items);
    if (moreMenu.dataset.sig !== sig) {
      moreMenu.dataset.sig = sig;
      (moreMenu as HTMLElement & { items: unknown }).items = items;
    }
    set('redo', canRedo());
  };

  // ── Sources ─────────────────────────────────────────────────────────────────
  const ask = (heading: string, message: string, label: string, then: () => void) => {
    confirmEl.heading = heading;
    confirmEl.message = message;
    confirmEl.confirmLabel = label;
    const done = (e: Event) => {
      confirmEl.removeEventListener('resolved', done);
      if ((e as CustomEvent<{ confirmed: boolean }>).detail?.confirmed) then();
    };
    confirmEl.addEventListener('resolved', done);
    confirmEl.open = true;
  };
  const commitmentsIn = (fileId: string) => (docIds().includes(fileId) ? peek(fileId, () => finds().filter((f) => f.code).length) : 0);
  const afterRemoval = () => {
    // Land on what is left: the first file of the first source, or the source, or nothing.
    const s = allSources();
    const f = s.flatMap((x) => x.files)[0];
    if (f) selectFile(f.id);
    else if (s[0]) selectSource(s[0].id);
    else {
      sel = null;
      saveSel();
      render();
    }
  };
  const confirmDeleteFile = (sourceId: string, fileId: string) => {
    const f = fileOf(fileId);
    if (!f) return;
    const n = commitmentsIn(fileId);
    ask(
      `Delete ${f.name}?`,
      `This deletes the file${n ? ` and the ${n} commitment${n === 1 ? '' : 's'} found in it` : ''}. This cannot be undone.`,
      'Delete file',
      () => {
        removeFile(sourceId, fileId);
        if (sel?.id === fileId) {
          const left = allSources().find((x) => x.id === sourceId)?.files[0];
          if (left) selectFile(left.id);
          else selectSource(sourceId);
        } else render();
      },
    );
  };
  const confirmDeleteSource = (id: string) => {
    const s = allSources().find((x) => x.id === id);
    if (!s) return;
    const n = s.files.reduce((t, f) => t + commitmentsIn(f.id), 0);
    const files = s.files.length;
    ask(
      `Delete ${s.name}?`,
      `This deletes ${files} file${files === 1 ? '' : 's'}${n ? ` and ${n} commitment${n === 1 ? '' : 's'}` : ''}. This cannot be undone.`,
      'Delete source document',
      () => {
        const wasHere = sel?.id === id || s.files.some((f) => f.id === sel?.id);
        deleteSource(id);
        if (wasHere) afterRemoval();
        else render();
      },
    );
  };
  const upload = async (sourceId: string, files: File[]) => {
    const added = await uploadFiles(sourceId, files, countPages);
    if (added[0]) selectFile(added[0]);
  };

  const sourcesUi = setupSw3SourcesUi($('[data-sw3-sources]'), {
    onSource: selectSource,
    onFile: selectFile,
    onNew: () => (newDialog.open = true),
    onSourceAction: (id, a) => {
      if (a === 'delete') return confirmDeleteSource(id);
      selectSource(id);
      if (a === 'add') requestAnimationFrame(() => editor.browse());
      if (a === 'edit') requestAnimationFrame(() => root.querySelector<HTMLElement>('[data-ed-name]')?.focus());
    },
    onFileAction: (sourceId, fileId, a) => {
      if (a === 'download') downloadFile(fileId);
      if (a === 'delete') confirmDeleteFile(sourceId, fileId);
      if (a === 'restart') {
        selectFile(fileId);
        ask('Restart this scan?', 'The commitments found and every steer given on this file are cleared, and the scan starts over.', 'Restart scan', () => resetAll());
      }
    },
  });
  const editor = setupSw3SourceEditor($('[data-sw3-editor]'), {
    onSave: (id, name, ref) => updateSource(id, { name, ref }),
    onUpload: (id, files) => void upload(id, files),
    onOpenFile: selectFile,
    onDownload: downloadFile,
    onDeleteFile: confirmDeleteFile,
    onDeleteSource: confirmDeleteSource,
  });
  $('[data-empty-new]').addEventListener('click', () => (newDialog.open = true));

  // New source document: name, reference number, files.
  const newForm = $<HTMLFormElement>('[data-new-form]');
  const newName = $<Field>('[data-new-name]');
  const newRef = $<Field>('[data-new-ref]');
  const newFiles = $<Upload>('[data-new-files]');
  const closeNew = () => {
    newDialog.open = false;
    newName.value = '';
    newRef.value = '';
    newName.errorText = '';
    newFiles._files = [];
    newFiles.requestUpdate();
  };
  $('[data-new-cancel]').addEventListener('click', closeNew);
  newForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!newName.value?.trim()) {
      newName.errorText = 'Give the source document a name.';
      return;
    }
    const files = [...(newFiles._files ?? [])];
    const id = createSource(newName.value, newRef.value ?? '');
    closeNew();
    if (files.length) await upload(id, files);
    else selectSource(id);
  });

  // ── Console ─────────────────────────────────────────────────────────────────
  // Start, pause, stop and speed are steers like any other: recorded with their page.
  const restart = () =>
    ask('Restart this scan?', 'The commitments found and every steer given on this file are cleared, and the scan starts over.', 'Restart scan', () => {
      const id = activeDoc();
      resetAll();
      views.delete(id);
      following.delete(id);
    });
  tx.play.addEventListener('click', () => {
    const go = D().proposal?.go;
    if (!started()) {
      if (!go) return;
      act('Start', [{ kind: 'scope', first: go.first, last: go.last, label: go.scope }, { kind: 'start' }], `Reading ${go.scope}. I will stop after the first ${D().calibrate?.length ?? 3} commitments so you can check how I read them.`, CONTROLS);
    } else if (checking()) {
      // After the check the default is to let it read: Fast, unless One at a time was chosen.
      const p: Pace = pace() === 'step' ? 'step' : 'run';
      act('Resume', { kind: 'go', pace: p }, PACE_REPLY[p], CONTROLS);
    }
    else act('Resume', { kind: 'resume' }, `Resuming at p. ${headPage()}.`, CONTROLS);
  });
  tx.pause.addEventListener('click', () => act('Pause', { kind: 'pause' }, `Pausing after p. ${headPage()}: that page is already being read.`, CONTROLS));
  tx.restart.addEventListener('click', restart);
  customElements.whenDefined('esa-dropdown-menu').then(() => ((speed as HTMLElement & { items: unknown }).items = JSON.parse(speed.dataset.items!)));
  speed.addEventListener('menu-action', (e) => {
    const p = (e as CustomEvent<Pace>).detail;
    if (p === pace()) return;
    act(`Speed: ${PACE_LABEL[p]}`, checking() ? { kind: 'go', pace: p } : { kind: 'pace', pace: p }, PACE_REPLY[p], CONTROLS);
  });
  const toggleMark = () => {
    if (sel?.kind !== 'file') return;
    setDrawing(!(selecting && !redrawing));
    render();
  };
  // The page in view, typed into the console's page field.
  const goTyped = () => {
    const n = parseInt(String(pageField.value ?? ''), 10);
    if (n >= 1) pick(Math.min(total(), n));
  };
  pageField.addEventListener('change', goTyped);
  pageField.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key === 'Enter') goTyped();
  });
  document.addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement;
    if (sel?.kind !== 'file' || t.closest('input, textarea, esa-textarea, esa-text-field, [contenteditable], esa-dialog, esa-side-dialog')) return;
    if ((e.metaKey || e.ctrlKey) && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
      return e.shiftKey ? redo() : undo();
    }
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const keys: Record<string, () => void> = {
      v: toolActions.select,
      m: toggleMark,
      s: toggleSplit,
      f: toggleFollow,
      b: toggleAldoBoxes,
      '[': () => goPage(-1),
      ']': () => goPage(1),
      '-': () => stepZoom(-1),
      '=': () => stepZoom(1),
      '+': () => stepZoom(1),
      '0': () => setZoom(1),
    };
    const run = keys[e.key.length === 1 ? e.key.toLowerCase() : e.key];
    if (run) {
      e.preventDefault();
      return run();
    }
    if (e.key === 'Escape' && (selecting || splitting)) {
      setDrawing(false);
      setSplitting(null);
      render();
    }
  });
  // Enter on the selected box opens its ID and name; on another box, selects it.
  $('[data-page-view]').addEventListener(
    'keydown',
    (e) => {
      if (e.key !== 'Enter') return;
      const id = (e.target as HTMLElement).closest<HTMLElement>('[data-box-id]')?.dataset.boxId;
      enterEdit = id === selected;
    },
    true,
  );
  $('[data-page-view]').addEventListener('keyup', () => (enterEdit = false));
  document.querySelector('[data-sw3-reset]')?.addEventListener('click', () =>
    ask('Reset the prototype?', 'Every scan, steer and upload is cleared, and the source documents go back to the three DCP files.', 'Reset', async () => {
      resetEverything();
      views.clear();
      following.clear();
      clearSel();
      await resetSources(seed);
      afterRemoval();
    }),
  );
  // The library and Aldo fold into rails from their own headers, and open from the rail.
  const PANELS_KEY = 'sw3:v3:panels';
  const savePanels = () => {
    try {
      localStorage.setItem(PANELS_KEY, JSON.stringify({ library: root.dataset.library, aldo: root.dataset.aldo }));
    } catch {
      /* no storage */
    }
  };
  const setAldo = (open: boolean) => {
    root.dataset.aldo = open ? 'open' : 'closed';
    savePanels();
  };
  const setLibrary = (open: boolean) => {
    root.dataset.library = open ? 'open' : 'closed';
    savePanels();
  };
  try {
    const p = JSON.parse(localStorage.getItem(PANELS_KEY) ?? '{}') as { library?: string; aldo?: string };
    if (p.library === 'closed') root.dataset.library = 'closed';
    if (p.aldo === 'closed') root.dataset.aldo = 'closed';
  } catch {
    /* no storage */
  }
  root.querySelector('[data-rail="library"]')?.addEventListener('click', () => setLibrary(true));
  root.querySelector('[data-rail-close="library"]')?.addEventListener('click', () => setLibrary(false));
  // Aldo's panel folds itself (on this section's data-aldo); keep where it was left.
  root.addEventListener('aldo:collapse', () => setAldo(false));
  root.addEventListener('aldo:expand', () => setAldo(true));
  document.addEventListener('sw3:page', (e) => pick((e as CustomEvent<{ page: number }>).detail.page));
  document.addEventListener('sw3:find', (e) => select((e as CustomEvent<{ id: string }>).detail.id));
  document.addEventListener('sw3:aldo', () => setAldo(true));
  // Aldo's Mark (on a page): go there and arm drawing.
  document.addEventListener('sw3:mark', (e) => {
    const page = (e as CustomEvent<{ page?: number }>).detail?.page;
    if (sel?.kind !== 'file') return;
    if (page) setView(page);
    clearSel();
    setDrawing(true);
    render();
  });
  // Fix at the check: redraw the commitment's box.
  document.addEventListener('sw3:redraw', (e) => {
    const id = (e as CustomEvent<{ id: string }>).detail.id;
    select(id);
    setDrawing(true, id);
    render();
  });

  // ── A file's state, for its row ─────────────────────────────────────────────
  const fileState = (): FileState => {
    const prep = preparing();
    if (prep) return { kind: 'preparing', ...prep };
    const st = fileStateOf();
    const settle = toSettle();
    return settle ? { ...st, settle } : st;
  };
  const fileStateOf = (): FileState => {
    if (skipped()) return { kind: 'none' };
    if (!started()) return { kind: 'idle' };
    const n = finds().filter((f) => f.code).length;
    const head = headPage();
    if (finished() || head === null) return n || D().finds.length ? { kind: 'done', commitments: n } : { kind: 'none' };
    if (checking()) return { kind: 'check', count: Math.max(0, (D().calibrate?.length ?? 3) - checked().length) };
    if (paused()) return { kind: 'paused', page: Math.max(1, head - 1) };
    const s = state().scope;
    return { kind: 'reading', page: head, total: total(), ratio: (head - s.first) / Math.max(1, s.last - s.first + 1) };
  };
  const scanLine = (st: FileState) =>
    st.kind === 'idle'
      ? 'Not scanned.'
      : st.kind === 'preparing'
        ? `Reading page images, p. ${st.page} of ${st.total}.`
      : st.kind === 'reading'
        ? `Reading p. ${st.page}.`
        : st.kind === 'check'
          ? st.count ? 'Waiting for you to check its first commitments.' : 'Checked. Ready to continue.'
          : st.kind === 'paused'
            ? `Paused at p. ${st.page}.`
            : st.kind === 'done'
              ? `${st.commitments} commitment${st.commitments === 1 ? '' : 's'} found.`
              : 'No commitments.';
  const stateOf = (id: string): FileState => (docIds().includes(id) ? peek(id, fileState) : { kind: 'idle' });

  // ── Render ──────────────────────────────────────────────────────────────────
  let wasChecking = false;
  let lastDoc = '';
  const render = () => {
    const sources = allSources();
    // A selection that no longer exists falls back to the file in view.
    if (sel && !(sel.kind === 'source' ? sources.some((s) => s.id === sel!.id) : fileOf(sel.id))) sel = null;
    if (!sel) {
      const f = fileOf(activeDoc()) ?? sources.flatMap((s) => s.files)[0];
      sel = f ? { kind: 'file', id: f.id } : sources[0] ? { kind: 'source', id: sources[0].id } : null;
    }
    if (sel?.kind === 'file' && activeDoc() !== sel.id && docIds().includes(sel.id)) {
      setActiveDoc(sel.id);
      return;
    }
    const doc = activeDoc();
    if (doc !== lastDoc) lastDoc = doc;
    const fileMode = sel?.kind === 'file';
    root.dataset.mode = sel ? sel.kind : 'empty';

    // Sidebar
    const rows: SourceRow[] = sources.map((s) => ({
      id: s.id,
      name: s.name,
      ref: s.ref,
      files: s.files.map((f) => ({ id: f.id, name: f.name, state: stateOf(f.id) })),
    }));
    sourcesUi.render(rows, sel);

    // Main pane: a file's scan, a source's details, or the empty state.
    pagePane.hidden = !fileMode;
    empty.hidden = !!sel;
    const src = sel?.kind === 'source' ? sources.find((s) => s.id === sel!.id) : null;
    const ed: EditorSource | null = src
      ? { id: src.id, name: src.name, ref: src.ref, files: src.files.map((f) => ({ id: f.id, name: f.name, pages: f.pages, scan: scanLine(stateOf(f.id)) })) }
      : null;
    editor.show(ed);
    toolbar.toggleAttribute('inert', !fileMode);
    toolbar.toggleAttribute('data-disabled', !fileMode);

    paintTools(fileMode);
    if (!fileMode) return;

    const on = started();
    // Marking by hand draws the person's boxes before any scan.
    const list = on || manual() ? finds() : [];
    const head = on ? headPage() : null;
    const done = on && (finished() || head === null);
    const again = rereading();
    const isChecking = checking();
    if (isChecking && !wasChecking) setAldo(true);
    wasChecking = isChecking;

    if (isFollowing() && on) {
      if (isChecking) {
        // Hold where the check is; the cards in Aldo move the page.
      } else if (again.size) setView(Math.min(...again));
      else if (!done) setView(head ?? state().scope.last);
    }
    if (done && isFollowing() && !again.size) setFollowing(false);

    // The console: each key is live only when it can act; the run's state reads pressed.
    const go = D().proposal?.go;
    const isPaused = on && !done && (paused() || pausing()) && !isChecking;
    const reading = on && !done && !isPaused && !isChecking;
    const key = (k: keyof typeof tx, enabled: boolean, pressed: boolean) => {
      const b = (tx[k].querySelector('button') ?? tx[k]) as HTMLButtonElement;
      b.disabled = !enabled;
      b.setAttribute('aria-pressed', String(pressed));
    };
    key('play', !skipped() && !done && (on ? !reading : !!go), reading);
    key('pause', reading, isPaused || isChecking);
    key('restart', on || skipped(), false);
    setLabel(tx.play, on ? 'Resume' : 'Scan');
    // The page in view, of the file's pages.
    if (!pageField.matches(':focus-within')) pageField.value = String(view());
    const of = `of ${total()}`;
    if (pageField.suffix !== of) pageField.suffix = of;
    setLabel(speedBtn, PACE_LABEL[pace()]);

    // Scrubber: every page of the file; a page being re-read is unread again.
    const read = new Set([...scanned()].filter((p) => !again.has(p)));
    const pips = new Map<number, ScrubberPip[]>();
    for (const f of list) {
      const arr = pips.get(f.page) ?? [];
      arr.push({ id: f.id, label: `${f.code || f.title}, p. ${f.page}`, parsed: f.parsed || f.edited });
      pips.set(f.page, arr);
    }
    const scrubHead = again.size ? Math.min(...again) : done || !on ? null : head;
    scrubber.update({ total: total(), scanned: read, gaps: gaps(), inScope: (n) => !on || inScope(n), head: scrubHead, view: view(), pips, selectedFind: selected });

    // Page: one box per commitment. Requirements are step 2's; they are not drawn here.
    const v = view();
    // Where the person is, for Aldo to attach to what they say: the page in view, the box selected.
    const viewSig = `${doc}|${v}|${selected ?? ''}`;
    if (viewSig !== lastViewSig) {
      lastViewSig = viewSig;
      document.dispatchEvent(new CustomEvent('sw3:view', { detail: { page: v, find: selected } }));
    }
    const boxes: PageViewBox[] = [];
    for (const f of list) {
      const onPage = f.boxes.filter((b) => b.page === v);
      if (!onPage.length) continue;
      const kind = !f.code && f.marked ? 'mark' : 'find';
      onPage.forEach((b, i) =>
        boxes.push({
          key: `${f.id}:${i}`,
          id: f.id,
          kind,
          ...b,
          parsed: f.parsed || f.edited,
          edited: f.edited,
          mine: f.edited || f.marked,
          selected: f.id === selected || also.has(f.id),
          editable: f.id === selected && !also.size && !selecting && !splitting,
          chip: f.id === selected ? (f.shown ? `${f.shown.replace(/^COA\s+/, '')} ${f.title}` : f.parsed ? f.title : 'No ID') : undefined,
          label: f.shown || f.title,
        }),
      );
    }
    const pdf = D().pdf ?? '';
    pageView.show(pdf.startsWith('blob:') ? pdf : `${base}${pdf}`, v, boxes, `Page ${v} of ${fileOf(doc)?.name ?? D().short}`);
    // Keep the box that matters in view inside the page pane: the one just selected, or,
    // while following the scan, the one just found.
    const newest = boxes.filter((b) => b.kind !== 'span').at(-1);
    const target = reveal
      ? root.querySelector<HTMLElement>('.bcn-pv__box[data-selected]')
      : isFollowing() && newest && newest.key !== lastNewest
        ? root.querySelector<HTMLElement>(`.bcn-pv__box[data-box-id="${CSS.escape(newest.id)}"]`)
        : null;
    if (newest) lastNewest = newest.key;
    // A selection lands with its top (and its tools) in view; a new find just comes into
    // view. Only the page pane scrolls (scrollIntoView would move the page around it).
    if (target) {
      const pane = $('[data-sw3-main]');
      const p = pane.getBoundingClientRect();
      const t = target.getBoundingClientRect();
      const above = t.top - p.top - 40;
      const below = t.bottom - p.bottom + 16;
      const by = reveal || above < 0 ? above : below > 0 ? Math.min(below, above) : 0;
      if (by) pane.scrollBy({ top: by, behavior: 'smooth' });
    }
    reveal = false;
  };

  document.addEventListener('sw3:change', render);
  document.addEventListener('sw3:sources', render);
  try {
    sel = JSON.parse(localStorage.getItem(SEL_KEY) ?? 'null');
  } catch {
    sel = null;
  }
  void initSources(seed).then(render);
}
