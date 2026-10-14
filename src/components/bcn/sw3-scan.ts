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
  paused,
  pausing,
  rereading,
  checking,
  checked,
  pace,
  skipped,
  stopped,
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
    stop: $('[data-tx="stop"]'),
    restart: $('[data-tx="restart"]'),
  };
  const speed = $('[data-bar-speed]');
  const speedBtn = $('[data-bar-speed-btn]');
  const mark = $('[data-bar-mark]');
  const drawHint = $('[data-draw-hint]');
  const aldoBtn = $<HTMLButtonElement>('[data-aldo-toggle]');
  const libBtn = $('[data-bar-library]');
  const pagePane = $('[data-sw3-pagepane]');
  const empty = $('[data-sw3-empty]');
  const tools = $('[data-box-tools]');
  const confirmEl = $<Confirm>('[data-confirm]');
  const newDialog = $<HTMLElement & { open: boolean }>('[data-new-dialog]');

  // ── View state ──────────────────────────────────────────────────────────────
  const views = new Map<string, number>();
  const following = new Map<string, boolean>();
  let sel: Sel = null;
  let selected: string | null = null;
  /** Scroll the selected box into view on the next paint (a selection, not a re-render). */
  let reveal = false;
  let lastNewest = '';
  let selecting = false;
  /** Redraw: the next rectangle dragged replaces this find's box on the page. */
  let redrawing: string | null = null;

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
    selected = null;
    setDrawing(false);
    saveSel();
    if (activeDoc() !== id) setActiveDoc(id);
    else render();
  };
  const selectSource = (id: string) => {
    sel = { kind: 'source', id };
    selected = null;
    setDrawing(false);
    saveSel();
    render();
  };

  // ── Fit the workspace to the window below the stepper ───────────────────────
  const fit = () => {
    const scroller = root.closest<HTMLElement>('.modern-layout__content, main') ?? document.scrollingElement;
    const top = root.getBoundingClientRect().top + (scroller?.scrollTop ?? 0);
    // Stop short of the layout's own bottom padding, so the workspace ends at the fold.
    const pad = scroller instanceof HTMLElement ? parseFloat(getComputedStyle(scroller).paddingBottom) || 0 : 0;
    root.style.setProperty('--_fit', `${Math.max(512, window.innerHeight - top - pad - 8)}px`);
  };
  window.addEventListener('resize', fit);
  requestAnimationFrame(fit);

  // ── The page ────────────────────────────────────────────────────────────────
  const pick = (page: number) => {
    setView(page);
    // Clicking the page being read takes up following it again.
    setFollowing(started() && !finished() && page === headPage());
    render();
  };
  const select = (id: string) => {
    const f = finds().find((x) => x.id === id);
    if (!f) return;
    selected = id;
    reveal = true;
    setView(f.boxes.find((b) => b.page === view())?.page ?? f.page);
    setFollowing(false);
    render();
  };
  const setDrawing = (on: boolean, target: string | null = null) => {
    selecting = on;
    redrawing = on ? target : null;
    // Drawing holds the page still: the scan goes on, the view stops following it.
    if (on) setFollowing(false);
    pageView.setSelecting(on);
    (mark.querySelector('button') ?? mark).setAttribute('aria-pressed', String(on && !target));
    drawHint.hidden = !on;
    drawHint.textContent = target ? 'Drag a new box for this commitment. Esc cancels.' : 'Drag over the commitment the scan missed. Esc cancels.';
  };

  // A box just drawn or picked takes focus, so Delete, the arrows and Escape act on it.
  const focusSelected = () =>
    requestAnimationFrame(() => {
      if (selected) $('[data-page-view]').querySelector<HTMLElement>(`[data-box-id="${CSS.escape(selected)}"]`)?.focus({ preventScroll: true });
    });

  const scrubber = setupPageScrubber($('[data-page-scrubber]'), { onPage: pick, onFind: select });
  const pageView = setupPageView($('[data-page-view]'), {
    onBox: select,
    onRegion: (page, box) => {
      const target = redrawing;
      setDrawing(false);
      if (target) {
        setFindBox(target, page, box, 'Redrew');
        selected = target;
        render();
        return focusSelected();
      }
      markRegion(page, box);
      const m = state().marks.at(-1);
      if (m) selected = m.id;
      render();
      focusSelected();
    },
    onEdit: (id, page, box) => setFindBox(id, page, { page, ...box }, 'Adjusted'),
    onRemove: (id, page) => {
      removeFindBox(id, page);
      if (!finds().some((f) => f.id === id)) selected = null;
      render();
    },
    onDeselect: () => {
      selected = null;
      setDrawing(false);
      render();
    },
  });

  // Box tools over the selected box.
  $('[data-box-redraw]').addEventListener('click', () => {
    if (!selected) return;
    setDrawing(true, selected);
    render();
  });
  $('[data-box-delete]').addEventListener('click', () => {
    if (!selected) return;
    removeFindBox(selected, view());
    if (!finds().some((f) => f.id === selected)) selected = null;
    render();
  });
  $('[data-box-ask]').addEventListener('click', () => {
    const f = finds().find((x) => x.id === selected);
    const field = document.querySelector<Field>('[data-aldo-input]');
    if (!f || !field) return;
    setAldo(true);
    field.value = `${f.code || 'The box I selected'} on p. ${view()}: `;
    field.focus();
  });
  const placeTools = () => {
    const box = root.querySelector<HTMLElement>('.bcn-pv__box[data-selected]');
    const sheet = $('.bcn-sw3scan__sheet');
    tools.hidden = !box || selecting || sel?.kind !== 'file';
    if (tools.hidden || !box) return;
    const b = box.getBoundingClientRect();
    const s = sheet.getBoundingClientRect();
    tools.style.left = `${b.right - s.left + 4}px`;
    tools.style.top = `${b.top - s.top}px`;
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
      act('Start', [{ kind: 'scope', first: go.first, last: go.last, label: go.scope }, { kind: 'start' }], `Reading ${go.scope}. I will stop after the first ${D().calibrate?.length ?? 3} commitments so you can check how I read them.`);
    } else if (checking()) act('Resume', { kind: 'go', pace: pace() }, PACE_REPLY[pace()]);
    else act('Resume', { kind: 'resume' }, `Resuming at p. ${headPage()}.`);
  });
  tx.pause.addEventListener('click', () => act('Pause', { kind: 'pause' }, `Pausing after p. ${headPage()}: that page is already being read.`));
  tx.stop.addEventListener('click', () =>
    ask(
      'Stop the scan?',
      'The scan ends at the page it is on. What it found is kept; the pages after it are not read. Restart reads the file again from the start.',
      'Stop scan',
      () => {
        const head = headPage();
        act('Stop', { kind: 'stop' }, `Stopped${head ? ` before p. ${head}` : ''}. What I found is kept.`);
      },
    ),
  );
  tx.restart.addEventListener('click', restart);
  customElements.whenDefined('esa-dropdown-menu').then(() => ((speed as HTMLElement & { items: unknown }).items = JSON.parse(speed.dataset.items!)));
  speed.addEventListener('menu-action', (e) => {
    const p = (e as CustomEvent<Pace>).detail;
    if (p === pace()) return;
    act(`Speed: ${PACE_LABEL[p]}`, checking() ? { kind: 'go', pace: p } : { kind: 'pace', pace: p }, PACE_REPLY[p]);
  });
  const toggleMark = () => {
    if (sel?.kind !== 'file') return;
    setDrawing(!(selecting && !redrawing));
    render();
  };
  mark.addEventListener('click', toggleMark);
  document.addEventListener('keydown', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('input, textarea, esa-textarea, esa-text-field, [contenteditable]') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'm' || e.key === 'M') toggleMark();
    if (e.key === 'Escape' && selecting) {
      setDrawing(false);
      render();
    }
  });
  document.querySelector('[data-sw3-reset]')?.addEventListener('click', () =>
    ask('Reset the prototype?', 'Every scan, steer and upload is cleared, and the source documents go back to the three DCP files.', 'Reset', async () => {
      resetEverything();
      views.clear();
      following.clear();
      selected = null;
      await resetSources(seed);
      afterRemoval();
    }),
  );
  const setAldo = (open: boolean) => {
    root.dataset.aldo = open ? 'open' : 'closed';
    aldoBtn.setAttribute('aria-pressed', String(open));
    const l = aldoBtn.querySelector('[data-aldo-toggle-label]');
    if (l) l.textContent = open ? 'Hide Aldo' : 'Show Aldo';
    requestAnimationFrame(placeTools);
  };
  aldoBtn.addEventListener('aldo-toggle', (e) => setAldo((e as CustomEvent<{ open: boolean }>).detail.open));
  const setLibrary = (open: boolean) => {
    root.dataset.library = open ? 'open' : 'closed';
    const b = libBtn.querySelector('button') ?? libBtn;
    b.setAttribute('aria-pressed', String(open));
    setLabel(libBtn, open ? 'Hide library' : 'Show library');
    setIcon(b, open ? 'panel-left-close' : 'panel-left-open');
    requestAnimationFrame(placeTools);
  };
  libBtn.addEventListener('click', () => setLibrary(root.dataset.library !== 'open'));
  document.addEventListener('sw3:page', (e) => pick((e as CustomEvent<{ page: number }>).detail.page));
  document.addEventListener('sw3:find', (e) => select((e as CustomEvent<{ id: string }>).detail.id));
  document.addEventListener('sw3:aldo', () => setAldo(true));
  // Fix at the check: redraw the commitment's box.
  document.addEventListener('sw3:redraw', (e) => {
    const id = (e as CustomEvent<{ id: string }>).detail.id;
    select(id);
    setDrawing(true, id);
    render();
  });
  window.addEventListener('resize', () => requestAnimationFrame(placeTools));
  $('[data-sw3-main]').addEventListener('scroll', () => requestAnimationFrame(placeTools));

  // ── A file's state, for its row ─────────────────────────────────────────────
  const fileState = (): FileState => {
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

    if (!fileMode) {
      tools.hidden = true;
      return;
    }

    const on = started();
    const list = on ? finds() : [];
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
    key('stop', on && !done, stopped());
    key('restart', on || skipped(), false);
    setLabel(tx.play, on ? 'Resume' : 'Start');
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
    const boxes: PageViewBox[] = [];
    for (const f of list) {
      const onPage = f.boxes.filter((b) => b.page === v);
      if (!onPage.length) continue;
      const kind = !f.code && f.marked ? 'mark' : 'find';
      onPage.forEach((b, i) =>
        boxes.push({ key: `${f.id}:${i}`, id: f.id, kind, ...b, parsed: f.parsed || f.edited, edited: f.edited, selected: f.id === selected, editable: f.id === selected && !selecting, label: f.code || f.title }),
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
      const above = t.top - p.top - 56;
      const below = t.bottom - p.bottom + 16;
      const by = reveal || above < 0 ? above : below > 0 ? Math.min(below, above) : 0;
      if (by) pane.scrollBy({ top: by, behavior: 'smooth' });
    }
    reveal = false;
    requestAnimationFrame(placeTools);
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
