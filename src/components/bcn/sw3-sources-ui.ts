// Controller for <BcnSw3Sources>. setupX shape: the host (sw3-scan.ts) owns which source
// or file is selected and each file's scan state; render() draws the list from that,
// keeping one element per source and per file so nothing flickers as a scan ticks.

import type { EsaMenuItem } from '@esa/ecology/esa-dropdown-menu';
import { paintIcons } from '../../lib/lucide-extra';

export type FileState = (
  | { kind: 'idle' }
  | { kind: 'preparing'; page: number; total: number }
  | { kind: 'reading'; page: number; total: number; ratio: number }
  | { kind: 'check'; count: number }
  | { kind: 'paused'; page: number }
  | { kind: 'done'; commitments: number }
  | { kind: 'none' }
) & {
  /** Items in Aldo's Needs you, the check aside: a badge on the row. */
  settle?: number;
};

export interface SourceRow {
  id: string;
  name: string;
  ref: string;
  files: { id: string; name: string; state: FileState }[];
}

interface Handlers {
  onSource: (id: string) => void;
  onFile: (id: string) => void;
  onNew: () => void;
  onSourceAction: (id: string, action: string) => void;
  onFileAction: (sourceId: string, fileId: string, action: string) => void;
}

const SOURCE_MENU: EsaMenuItem[] = [
  { label: 'Edit details', action: 'edit' },
  { label: 'Add files', action: 'add' },
  { divider: true, label: '' },
  { label: 'Delete', action: 'delete', variant: 'danger' },
];
const FILE_MENU: EsaMenuItem[] = [
  { label: 'Download', action: 'download' },
  { label: 'Restart scan', action: 'restart' },
  { divider: true, label: '' },
  { label: 'Delete file', action: 'delete', variant: 'danger' },
];

/** Keep a long file name's start and its end (where the version and date usually are). */
export const middle = (s: string, max = 30) => (s.length <= max ? s : `${s.slice(0, Math.ceil(max * 0.6))}…${s.slice(-Math.floor(max * 0.4) + 1)}`);

/** The file's state as a badge: its words and its tone. Empty words: no state badge (the
 *  check's own "N to check" badge says it). Reading shows its page in the row's tooltip and
 *  its progress in the bar under it. */
type Tone = 'secondary' | 'info' | 'success' | 'warning';
const stateBadge = (s: FileState): { text: string; tone: Tone } =>
  s.kind === 'idle'
    ? { text: 'Not scanned', tone: 'secondary' }
    : s.kind === 'preparing'
      ? { text: 'Reading images', tone: 'info' }
      : s.kind === 'reading'
        ? { text: 'Scanning', tone: 'info' }
        : s.kind === 'check'
          ? { text: s.count ? '' : 'Checked', tone: 'secondary' }
          : s.kind === 'paused'
            ? { text: `Paused at p. ${s.page}`, tone: 'secondary' }
            : s.kind === 'done'
              ? { text: `${s.commitments} commitment${s.commitments === 1 ? '' : 's'}`, tone: 'success' }
              : { text: 'No commitments', tone: 'secondary' };

const stateText = (s: FileState) =>
  s.kind === 'idle'
    ? 'Not scanned'
    : s.kind === 'preparing'
      ? `Reading page images, p. ${s.page} of ${s.total}`
    : s.kind === 'reading'
      ? `Reading p. ${s.page} of ${s.total}`
      : s.kind === 'check'
        ? s.count ? '' : 'Checked, ready to continue'
        : s.kind === 'paused'
          ? `Paused at p. ${s.page}`
          : s.kind === 'done'
            ? `${s.commitments} commitment${s.commitments === 1 ? '' : 's'}`
            : 'No commitments';

export function setupSw3SourcesUi(root: HTMLElement, h: Handlers) {
  const list = root.querySelector<HTMLElement>('[data-src-list]')!;
  const srcTpl = root.querySelector<HTMLTemplateElement>('[data-src-tpl]')!;
  const fileTpl = root.querySelector<HTMLTemplateElement>('[data-file-tpl]')!;
  const srcEls = new Map<string, HTMLElement>();
  const FOLD_KEY = 'sw3:v3:folded';
  const folded = new Set<string>(
    (() => {
      try {
        return JSON.parse(localStorage.getItem(FOLD_KEY) ?? '[]') as string[];
      } catch {
        return [];
      }
    })(),
  );
  const saveFolded = () => {
    try {
      localStorage.setItem(FOLD_KEY, JSON.stringify([...folded]));
    } catch {
      /* no storage */
    }
  };
  const fileEls = new Map<string, HTMLElement>();
  paintIcons(root);

  root.querySelector('[data-src-new]')?.addEventListener('click', h.onNew);

  const menu = (el: Element | null, items: EsaMenuItem[]) =>
    customElements.whenDefined('esa-dropdown-menu').then(() => ((el as HTMLElement & { items: EsaMenuItem[] }).items = items));

  const sourceEl = (id: string) => {
    let el = srcEls.get(id);
    if (el) return el;
    el = (srcTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    el.dataset.source = id;
    paintIcons(el);
    const m = el.querySelector('[data-src-menu]');
    menu(m, SOURCE_MENU);
    m?.addEventListener('menu-action', (e) => h.onSourceAction(id, (e as CustomEvent<string>).detail));
    el.querySelector('[data-src-open]')!.addEventListener('click', () => h.onSource(id));
    // Fold: the source's files open or shut, remembered per source.
    const fold = el.querySelector<HTMLElement>('[data-src-fold]');
    const foldBtn = fold?.querySelector('button') ?? fold;
    const setFold = (shut: boolean) => {
      el!.toggleAttribute('data-collapsed', shut);
      foldBtn?.setAttribute('aria-expanded', String(!shut));
      foldBtn?.setAttribute('aria-label', shut ? 'Expand' : 'Collapse');
    };
    setFold(folded.has(id));
    fold?.addEventListener('click', () => {
      const shut = !folded.has(id);
      if (shut) folded.add(id);
      else folded.delete(id);
      saveFolded();
      setFold(shut);
    });
    srcEls.set(id, el);
    return el;
  };
  const fileEl = (sourceId: string, id: string) => {
    let el = fileEls.get(id);
    if (el) return el;
    el = (fileTpl.content.firstElementChild as HTMLElement).cloneNode(true) as HTMLElement;
    el.dataset.file = id;
    paintIcons(el);
    const m = el.querySelector('[data-file-menu]');
    menu(m, FILE_MENU);
    m?.addEventListener('menu-action', (e) => h.onFileAction(el!.closest<HTMLElement>('[data-source]')?.dataset.source ?? sourceId, id, (e as CustomEvent<string>).detail));
    el.querySelector('[data-file-open]')!.addEventListener('click', () => h.onFile(id));
    fileEls.set(id, el);
    return el;
  };

  const render = (rows: SourceRow[], selected: { kind: 'source' | 'file'; id: string } | null) => {
    const keepS = new Set(rows.map((r) => r.id));
    for (const [id, el] of srcEls) if (!keepS.has(id)) (el.remove(), srcEls.delete(id));
    const keepF = new Set(rows.flatMap((r) => r.files.map((f) => f.id)));
    for (const [id, el] of fileEls) if (!keepF.has(id)) (el.remove(), fileEls.delete(id));

    let prev: Element | null = null;
    for (const r of rows) {
      const el = sourceEl(r.id);
      el.toggleAttribute('data-selected', selected?.kind === 'source' && selected.id === r.id);
      el.querySelector('[data-src-name]')!.textContent = r.name;
      const want: Element | null = prev ? prev.nextElementSibling : list.firstElementChild;
      if (want !== el) list.insertBefore(el, want);
      prev = el;

      const fl = el.querySelector<HTMLElement>('[data-src-files]')!;
      let fprev: Element | null = null;
      for (const f of r.files) {
        const fe = fileEl(r.id, f.id);
        fe.toggleAttribute('data-selected', selected?.kind === 'file' && selected.id === f.id);
        const cut = Math.max(0, f.name.length - 8);
        fe.querySelector('[data-file-start]')!.textContent = f.name.slice(0, cut);
        fe.querySelector('[data-file-end]')!.textContent = f.name.slice(cut);
        fe.title = f.name;
        const sb = stateBadge(f.state);
        const sHost = fe.querySelector<HTMLElement>('[data-file-state-badge]')!;
        sHost.hidden = !sb.text;
        const sEl = sHost.querySelector<HTMLElement>('.esa-badge') ?? (sHost.firstElementChild as HTMLElement);
        if (sEl) {
          const tEl = sEl.querySelector('.esa-badge__text') ?? sEl;
          if (tEl.textContent !== sb.text) tEl.textContent = sb.text;
          for (const t of ['secondary', 'info', 'success', 'warning', 'primary']) sEl.classList.toggle(`esa-badge--${t}`, t === sb.tone);
        }
        sHost.title = stateText(f.state);
        const badge = fe.querySelector<HTMLElement>('[data-file-badge]')!;
        // One badge: what waits on the person in this file, the check first.
        const badgeText = f.state.kind === 'check' && f.state.count ? `${f.state.count} to check` : f.state.settle ? `${f.state.settle} to settle` : '';
        badge.hidden = !badgeText;
        if (badgeText) {
          const b = badge.querySelector('.esa-badge') ?? badge.firstElementChild;
          if (b && b.textContent !== badgeText) b.textContent = badgeText;
        }
        const prog = fe.querySelector<HTMLElement>('[data-file-progress]')!;
        prog.hidden = f.state.kind !== 'reading' && f.state.kind !== 'preparing';
        if (f.state.kind === 'reading' || f.state.kind === 'preparing') {
          const ratio = f.state.kind === 'reading' ? f.state.ratio : (f.state.page - 1) / f.state.total;
          const fill = prog.querySelector<HTMLElement>('.esa-progress-bar__fill');
          if (fill) fill.style.width = `${Math.round(ratio * 100)}%`;
          prog.querySelector('[role="progressbar"]')?.setAttribute('aria-valuenow', String(Math.round(ratio * 100)));
        }
        const fw: Element | null = fprev ? fprev.nextElementSibling : fl.firstElementChild;
        if (fw !== fe) fl.insertBefore(fe, fw);
        fprev = fe;
      }
    }
  };

  return { render };
}
