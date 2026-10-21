// help-dots — the controller behind <BcnHelpDots>, <BcnHelpDotEditor> and
// <BcnHelpDotList>. It owns the page's dots in memory (nothing persists across a reload,
// as with every prototype here) and wires the three components and the drawer by their
// data-* hooks. See <BcnHelpDots> for the contract.
//
// Reader: Guidance on the Guidance bar shows the published dots, with a dark button above
// the bar that opens the drawer; Guidance again or Esc hides them. ESA admin only (`?as=esa-admin`,
// alias `?as=admin`; a tenant admin does not author dots, src/lib/help-role.ts): drafts show muted, the drawer gains Dots on This Page, and the dots are worked by hand
// on the page: Add Dot, Option/Alt-click or Pick Again carries a dot to a part, any dot
// drags to another part, and either ends on the editor beside the dot.
//
// A spot is a `data-help-spot` id a component emits on its parts (src/lib/help-spot.ts).
// The first visible part carrying the id anchors the dot; with none on the page the dot is
// hidden and, for admins, listed under Needs a New Spot.

import '@esa/ecology/esa-popover';
import { isEsaAdmin } from '../../lib/help-role';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-textarea';
import { spotCapture } from '../../data/help-dots';
import type { HelpDot, HelpDotAt, HelpDotShot, HelpDotSide, HelpDotStatus, HelpSpot } from '../../data/help-dots';

type Popover = HTMLElement & { open: boolean; position: string; appearance: string; label: string };
type Dialog = HTMLElement & { show(): void; close(): void; open: boolean };
type Field = HTMLElement & { value: string };

interface DotState extends HelpDot {
  detached?: boolean;
  /** Dropped on the page and not yet saved: it shows, but has no row yet. */
  pending?: boolean;
}

interface ClientPage {
  routeKey: string;
  spots: HelpSpot[];
  dots: HelpDot[];
  /** The site base, for the spot captures. */
  base: string;
}

/** What a click on the page does while placing. */
type Arm = ({ kind: 'add' } | { kind: 'move'; dotId: string }) & { fromDrawer?: boolean };

const NARROW = 640;
const EDGE = 12;
const GAP = 20; // the popover's offset plus the dot's radius
const CHROME = 28; // the popover's own padding and border, both sides
const PAD = 4; // the highlight's room around its part
const DRAG = 4; // how far a dot moves before a press is a drag
const EDITOR = 320; // <BcnHelpDotEditor>'s width
const ARROW = 14; // the editor's pointer, and its gap from the spot
const BAR = 96; // the Guidance bar's height, its offset and a gap
// The help UI itself is never a spot.
const HELP_UI = '[data-help-dots], [data-help-bar], [data-help-panelbar], [data-gd], [data-gd-article], [data-htf]';

export function setupHelpDots(): void {
  const layer = document.querySelector<HTMLElement>('[data-help-dots]');
  const json = document.querySelector<HTMLScriptElement>('[data-help-dots-page]');
  const trigger = document.querySelector<HTMLElement>('[data-help-bar] [data-help-trigger]');
  if (!layer || !json || !trigger) return;

  const page = JSON.parse(json.textContent ?? '{}') as ClientPage;
  const params = new URLSearchParams(location.search);
  const admin = isEsaAdmin(); // dots are ESA-authored for every tenant (src/lib/help-role.ts)
  const drawer = document.querySelector<Dialog>('[data-gd]');

  const spots = new Map(page.spots.map((s) => [s.spot, s]));
  const dots = new Map<string, DotState>(page.dots.map((d) => [d.id, { ...d }]));
  let arm: Arm | null = null;
  let on = false;
  // Edit Dots (round 16): every dot shows its handles; drag moves, click edits, × detaches.
  let editMode = false;
  let made = 0;

  trigger.setAttribute('data-help-dots-claimed', '');
  trigger.setAttribute('aria-pressed', 'false');
  trigger.removeAttribute('aria-haspopup');
  if (params.get('popover') === 'light') layer.dataset.tone = 'light';
  if (admin) layer.dataset.admin = '';

  // ── the page's elements ────────────────────────────────────────────────────────────

  const dotEl = (id: string) => layer.querySelector<HTMLElement>(`[data-help-dot][data-dot-id="${id}"]`);
  const shown = (el: HTMLElement) => !el.closest('[hidden]') && el.getBoundingClientRect().width > 0;
  const targetOf = (spot: string): HTMLElement | null =>
    Array.from(document.querySelectorAll<HTMLElement>(`[data-help-spot="${CSS.escape(spot)}"]`)).find(shown) ?? null;
  const labelOf = (spot: string): string =>
    targetOf(spot)?.dataset.helpSpotLabel ?? spots.get(spot)?.label ?? spot;
  // The part under a point: the nearest ancestor carrying a spot id. The dots and the
  // rest of the help UI are looked through, so a dot never hides the part it sits on.
  const partAt = (x: number, y: number): HTMLElement | null => {
    const el = document.elementsFromPoint(x, y).find((n) => !n.closest(HELP_UI));
    return el?.closest<HTMLElement>('[data-help-spot]') ?? null;
  };
  // A pointer on the drawer, its panels or the Guidance bar is not on the page.
  const offPage = (t: EventTarget | null) =>
    t instanceof Element && !!t.closest('[data-gd], [data-gd-article], [data-htf], [data-help-bar], [data-help-panelbar], [data-hde]');
  // A spot that only exists in another state of the page (HelpSpot.onlyIn).
  const elsewhere = (spot: string): string | null => {
    const w = spots.get(spot)?.onlyIn;
    return w && params.get(w.param) !== w.value ? w.label : null;
  };
  const live = (d: DotState) => d.status !== 'dismissed' && !d.detached;
  const seen = (d: DotState) => live(d) && (d.status === 'published' || admin);

  // How a dot sits on its part: the page's own record for the spot, else worked out from
  // the part: a wide part takes the dot inside its right edge, a tiny one (a count) on its
  // corner, anything else just past it.
  const layout = (spot: string, r: DOMRect): { at: HelpDotAt; side: HelpDotSide } => {
    const s = spots.get(spot);
    if (s?.at && s.side) return { at: s.at, side: s.side };
    if (r.width > 360) return { at: 'inside-end', side: 'left' };
    return r.width < 80 ? { at: 'top-end', side: 'bottom' } : { at: 'after', side: 'bottom' };
  };

  // ── placing ────────────────────────────────────────────────────────────────────────

  // The dot's centre, from the target's box, in viewport coordinates.
  const anchor = (r: DOMRect, at: string): [number, number] => {
    const midY = r.top + r.height / 2;
    switch (at) {
      case 'top-end':
        return [r.right - 2, r.top + 2];
      case 'inside-end':
        return [r.right - 24, midY];
      case 'before':
        return [r.left - 18, midY];
      default:
        return [r.right + 18, midY];
    }
  };

  // esa-popover opens on a fixed side and never moves to stay on screen. On a narrow
  // screen the popover opens toward the wider half of the page's scroll area (which clips
  // it), beside the dot, sized to the room that half leaves.
  const scroller = (() => {
    for (let el = layer.parentElement; el; el = el.parentElement) {
      if (/(auto|scroll|hidden)/.test(getComputedStyle(el).overflowX)) return el;
    }
    return document.documentElement;
  })();
  const fit = (el: HTMLElement, popover: Popover, side: string, x: number) => {
    if (document.documentElement.clientWidth >= NARROW) {
      popover.position = side;
      el.style.removeProperty('--_room');
      return;
    }
    const box = scroller.getBoundingClientRect();
    const toLeft = x - box.left > box.right - x;
    const room = (toLeft ? x - box.left : box.right - x) - GAP - EDGE - CHROME;
    popover.position = toLeft ? 'left' : 'right';
    el.style.setProperty('--_room', `${Math.max(160, Math.round(room))}px`);
  };

  const place = () => {
    const showing = !layer.hidden;
    if (!showing) return;
    const origin = layer.getBoundingClientRect();
    dots.forEach((d) => {
      const el = dotEl(d.id);
      if (!el) return;
      const target = seen(d) ? targetOf(d.spot) : null;
      el.hidden = !target;
      if (!target) return;
      if (drag?.dotId === d.id && drag.moving) return; // the pointer has it
      const r = target.getBoundingClientRect();
      const { at, side } = layout(d.spot, r);
      const [x, y] = anchor(r, at);
      el.style.setProperty('--_x', `${x - origin.left}px`);
      el.style.setProperty('--_y', `${y - origin.top}px`);
      const popover = el.querySelector<Popover>('esa-popover');
      if (popover) fit(el, popover, side, x);
    });
    placeEditor();
  };

  let frame = 0;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(place);
  };

  const closePopovers = () => layer.querySelectorAll<Popover>('esa-popover').forEach((p) => (p.open = false));

  const panelbar = document.querySelector<HTMLElement>('[data-help-panelbar]');

  const showLayer = () => {
    // Each time the dots come on, each gets its own random delay (0 to 350ms) and length
    // (180 to 260ms) (round 17c), so they appear scattered rather than in a sweep.
    if (on && layer.hidden) {
      dots.forEach((d) => {
        const el = dotEl(d.id);
        el?.style.setProperty('--_delay', `${Math.round(Math.random() * 350)}ms`);
        el?.style.setProperty('--_dur', `${Math.round(180 + Math.random() * 80)}ms`);
      });
    }
    layer.hidden = !on;
    layer.toggleAttribute('data-edit-mode', editMode);
    trigger.setAttribute('aria-pressed', String(on));
    paintBand();
    if (layer.hidden) closePopovers();
    else place();
  };

  // ── the band above the Guidance bar (round 16) ─────────────────────────────────────
  // A reader gets Open Help & Guidance. An admin also gets Add Dot and Edit Dots. In a mode
  // the menu gives way to the mode's state, its way out, and in Edit Dots the orphans.

  const bandMenu = panelbar?.querySelector<HTMLElement>('[data-help-band-menu]');
  const bandState = panelbar?.querySelector<HTMLElement>('[data-help-pickbar]');
  const bandText = bandState?.querySelector<HTMLElement>('[data-help-pick-text]');
  const orphansWrap2 = bandState?.querySelector<HTMLElement>('[data-help-orphans-wrap]');
  const orphansMenu = bandState?.querySelector<HTMLElement>('[data-help-orphans]');
  const orphansChip = bandState?.querySelector<HTMLElement>('[data-help-orphans-chip] .esa-button__label');
  const bandAdmin = panelbar?.querySelector<HTMLElement>('[data-help-band-admin]');
  if (bandAdmin) bandAdmin.hidden = !admin;

  const orphaned = () =>
    Array.from(dots.values()).filter((d) => live(d) && !d.pending && !elsewhere(d.spot) && !targetOf(d.spot));

  function paintBand() {
    if (!panelbar || !bandMenu || !bandState || !bandText) return;
    panelbar.hidden = !on || !!editing || !!drag?.moving;
    const mode = !!arm || editMode;
    bandMenu.hidden = mode;
    bandState.hidden = !mode;
    const moving = arm?.kind === 'move' ? dots.get(arm.dotId) : undefined;
    bandText.textContent = arm
      ? moving
        ? `Moving “${moving.title}”: click where it belongs`
        : 'Adding: click any part'
      : 'Editing dots: drag to move, click to edit';
    panelbar.querySelector<HTMLElement>('[data-help-cancel-wrap]')!.hidden = !arm;
    panelbar.querySelector<HTMLElement>('[data-help-done-wrap]')!.hidden = !!arm;
    const lost = editMode && !arm ? orphaned() : [];
    if (orphansWrap2) orphansWrap2.hidden = lost.length === 0;
    if (orphansChip) orphansChip.textContent = `${lost.length} Need a Spot`;
    if (orphansMenu) {
      orphansMenu.replaceChildren(
        ...lost.map((d) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = 'bcn-help-dots__orphan';
          b.dataset.dotId = d.id;
          const t = document.createElement('span');
          t.className = 'typography-label-sm-strong';
          t.textContent = d.title;
          const sp = document.createElement('span');
          sp.className = 'bcn-help-dots__orphan-spot typography-body-xs';
          sp.textContent = `Was on ${labelOf(d.spot)}`;
          b.append(t, sp);
          return b;
        }),
      );
    }
  }

  const setEditMode = (next: boolean) => {
    editMode = admin && next;
    if (!editMode && editing) cancelEditor();
    closePopovers();
    if (editMode) on = true;
    showLayer();
  };

  // ── a dot's popover ────────────────────────────────────────────────────────────────

  const paintDot = (d: DotState) => {
    const el = dotEl(d.id);
    if (!el) return;
    el.dataset.status = d.status;
    el.dataset.spot = d.spot;
    const popover = el.querySelector<Popover>('esa-popover');
    if (popover) {
      popover.label = d.title;
      if (layer.dataset.tone === 'light') popover.appearance = 'default';
    }
    el.querySelector('[data-hd-button]')?.setAttribute('aria-label', d.title ? `About: ${d.title}` : 'New dot');
    const adminBits = el.querySelector<HTMLElement>('[data-hd-admin]');
    if (adminBits) adminBits.hidden = !admin;
    const title = el.querySelector<HTMLElement>('[data-hd-title]');
    const text = el.querySelector<HTMLElement>('[data-hd-text]');
    const img = el.querySelector<HTMLImageElement>('[data-hd-shot]');
    const panel = img?.parentElement;
    if (title) title.textContent = d.title;
    if (text) text.textContent = d.text;
    if (img && panel) {
      img.hidden = !d.shot;
      if (d.shot) {
        img.src = d.shot.src;
        img.alt = d.shot.alt;
        img.width = d.shot.width;
        img.height = d.shot.height;
        panel.setAttribute('data-has-shot', '');
      } else {
        img.removeAttribute('src');
        panel.removeAttribute('data-has-shot');
      }
    }
  };

  const addDotEl = (d: DotState) => {
    const tpl = layer.querySelector<HTMLTemplateElement>('[data-help-dot-template]');
    const el = tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
    if (!el) return;
    el.dataset.dotId = d.id;
    layer.insertBefore(el, tpl!);
  };

  // ── the drawer's On This Page list (round 17) ──────────────────────────────────────
  // One list for everyone: a reader sees the published dots on parts that are on the page;
  // an admin also sees drafts, with actions inline, and at the end, muted, the dots whose
  // spot is gone. Rows run in page order: top to bottom, then left to right.

  const list = document.querySelector<HTMLElement>('[data-hda]');
  const listSlot = document.querySelector<HTMLElement>('[data-help-dots-list-slot]');
  const rowsEl = list?.querySelector<HTMLElement>('[data-hda-list]');
  const rowEl = (id: string) => list?.querySelector<HTMLElement>(`[data-hda-row][data-dot-id="${id}"]`);

  const addRowEl = (d: DotState) => {
    const tpl = list?.querySelector<HTMLTemplateElement>('[data-hda-template]');
    const el = tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
    if (!el || !rowsEl) return;
    el.dataset.dotId = d.id;
    rowsEl.append(el);
  };

  const paintRows = () => {
    if (!list || !rowsEl) return;
    const placed: [number, number, HTMLElement][] = [];
    const tail: HTMLElement[] = [];
    dots.forEach((d) => {
      const row = rowEl(d.id);
      if (!row) return;
      const away = elsewhere(d.spot);
      const target = away ? null : targetOf(d.spot);
      const orphan = !away && !target;
      row.hidden = !live(d) || !!d.pending || (!admin && (d.status !== 'published' || !target));
      if (row.hidden) return;
      const claudeDraft = d.status === 'draft' && !!d.draftedFrom;
      const q = (sel: string) => row.querySelector<HTMLElement>(sel)!;
      row.toggleAttribute('data-lost', orphan || !!away);
      q('[data-hda-mark]').hidden = orphan;
      q('[data-hda-lost]').hidden = !orphan;
      q('[data-hda-title]').textContent = d.title;
      q('[data-hda-sub]').textContent = orphan
        ? `Needs a spot · was on ${labelOf(d.spot)}`
        : away
          ? `${away} · ${d.text}`
          : d.text;
      q('[data-hda-draft]').hidden = d.status !== 'draft';
      q('[data-hda-tools]').hidden = !admin;
      const acts: Record<string, boolean> = {
        publish: claudeDraft && !orphan,
        pickagain: orphan,
        edit: !orphan && !away,
        dismiss: claudeDraft,
        detach: !claudeDraft,
      };
      Object.entries(acts).forEach(([act, show]) => (q(`[data-hda-act="${act}"]`).hidden = !show));
      // The room the tools take, which the text truncates short of while they show.
      row.style.setProperty('--_tools-w', `${Object.values(acts).filter(Boolean).length * 23 + 3}px`);
      if (target) {
        const r = target.getBoundingClientRect();
        placed.push([Math.round(r.top), r.left, row]);
      } else tail.push(row);
    });
    placed.sort((x, y) => x[0] - y[0] || x[1] - y[1]);
    rowsEl.append(...placed.map((p) => p[2]), ...tail);
  };

  if (list && listSlot) {
    listSlot.append(list);
    list.hidden = false;
  }

  // A row opens its dot: the drawer closes, the dots come on, the page scrolls to the dot
  // and its popover opens once the drawer is out of the way.
  const openDot = (d: DotState) => {
    drawer?.close();
    on = true;
    showLayer();
    targetOf(d.spot)?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    setTimeout(() => {
      place();
      const p = dotEl(d.id)?.querySelector<Popover>('esa-popover');
      if (p) p.open = true;
    }, 450);
  };


  // ── the editor, on the page beside its dot ─────────────────────────────────────────

  const editor = layer.querySelector<HTMLElement>('[data-hde]');
  const e$ = <T extends HTMLElement = HTMLElement>(sel: string) => editor?.querySelector<T>(sel) ?? null;
  let editing: { dotId: string; isNew: boolean; movedFrom?: string; shot?: HelpDotShot } | null = null;

  // Beside the spot, never on it: right of the part and its dot when there is room, else
  // left, else below. Its top sits just above the dot's centre, lifted when it would run
  // under the Guidance bar, and its pointer aims at the dot from the edge it faces.
  function placeEditor() {
    if (!editor || !editing) return;
    const d = dots.get(editing.dotId);
    const el = dotEl(editing.dotId);
    if (!d || !el || el.hidden) return;
    const origin = layer!.getBoundingClientRect();
    const box = scroller.getBoundingClientRect();
    const x = parseFloat(el.style.getPropertyValue('--_x')) || 0;
    const y = parseFloat(el.style.getPropertyValue('--_y')) || 0;
    const t = targetOf(d.spot)?.getBoundingClientRect();
    const spotL = Math.min(x - 12, t ? t.left - origin.left : x);
    const spotR = Math.max(x + 12, t ? t.right - origin.left : x);
    const spotB = Math.max(y + 12, t ? t.bottom - origin.top : y);
    const minX = box.left - origin.left + EDGE;
    const maxX = box.right - origin.left - EDGE;
    const h = editor.offsetHeight;
    let side: 'right' | 'left' | 'below';
    let left: number;
    let top: number;
    if (spotR + ARROW + EDITOR <= maxX) {
      side = 'right';
      left = spotR + ARROW;
    } else if (spotL - ARROW - EDITOR >= minX) {
      side = 'left';
      left = spotL - ARROW - EDITOR;
    } else {
      side = 'below';
      left = Math.min(Math.max(x - EDITOR / 2, minX), maxX - EDITOR);
    }
    if (side === 'below') {
      top = spotB + ARROW;
    } else {
      // Clear of the Guidance bar at the foot of the screen (20px off the bottom, 58px tall).
      const lowest = box.bottom - origin.top - BAR - h;
      top = Math.max(Math.min(y - 28, lowest), box.top - origin.top + EDGE);
    }
    editor.dataset.side = side;
    editor.style.setProperty('--_x', `${left}px`);
    editor.style.setProperty('--_y', `${top}px`);
    const aim = side === 'below' ? x - left : y - top;
    editor.style.setProperty('--_aim', `${Math.round(Math.min(Math.max(aim, 16), (side === 'below' ? EDITOR : h) - 16))}px`);
    // The pointer takes the colour of the band it leaves from: the dark header, or the body.
    const head = editor.querySelector<HTMLElement>('.esa-card__header')?.offsetHeight ?? 0;
    editor.toggleAttribute('data-aim-body', side !== 'below' && aim > head);
  }

  const paintShot = () => {
    const shotBox = e$('[data-hde-shot]');
    const img = e$<HTMLImageElement>('[data-hde-shot-img]');
    const shot = editing?.shot;
    if (!shotBox || !img) return;
    shotBox.hidden = !shot;
    e$('[data-hde-drop]')!.hidden = !!shot;
    e$('[data-hde-browse-wrap]')!.hidden = !!shot;
    e$('[data-hde-replace-wrap]')!.hidden = !shot;
    e$('[data-hde-remove-wrap]')!.hidden = !shot;
    if (shot) {
      img.onload = placeEditor;
      img.src = shot.src;
      img.alt = shot.alt;
    }
    placeEditor();
  };

  // An uploaded, dropped or pasted image: in memory, like everything here.
  const takeFile = (file: File | undefined) => {
    if (!editing || !file || !file.type.startsWith('image/')) return;
    editing.shot = { src: URL.createObjectURL(file), alt: file.name, width: 640, height: 240 };
    paintShot();
  };

  const openEditor = (dotId: string, opts: { isNew?: boolean; movedFrom?: string } = {}) => {
    const d = dots.get(dotId);
    if (!editor || !d) return;
    closePopovers();
    editing = { dotId, isNew: !!opts.isNew, movedFrom: opts.movedFrom, shot: d.shot };
    e$('[data-hde-heading]')!.textContent = opts.isNew ? 'New Dot' : opts.movedFrom ? 'Moved Dot' : 'Edit Dot';
    e$('[data-hde-spot]')!.textContent = `On ${labelOf(d.spot)}`;
    e$('[data-hde-moved]')!.hidden = !opts.movedFrom;
    const title = e$<Field>('[data-hde-title]');
    const text = e$<Field>('[data-hde-text]');
    if (title) title.value = d.title;
    if (text) text.value = d.text;
    paintShot();
    editor.hidden = false;
    showLayer();
    place();
    requestAnimationFrame(() => (title?.shadowRoot?.querySelector('input') ?? title)?.focus());
  };

  const closeEditor = () => {
    editing = null;
    if (editor) editor.hidden = true;
    refresh();
  };

  const save = (status: HelpDotStatus) => {
    const d = editing ? dots.get(editing.dotId) : undefined;
    if (!editing || !d) return;
    const title = e$<Field>('[data-hde-title]')?.value.trim() ?? '';
    const text = e$<Field>('[data-hde-text]')?.value.trim() ?? '';
    if (!title) {
      e$('[data-hde-title]')?.focus();
      return;
    }
    Object.assign(d, { status, title, text, shot: editing.shot });
    if (d.pending) {
      delete d.pending;
      addRowEl(d);
    }
    if (status === 'published') delete d.draftedFrom;
    closeEditor();
  };

  // Cancel takes a new dot away and puts a moved one back.
  const cancelEditor = () => {
    const d = editing ? dots.get(editing.dotId) : undefined;
    if (editing && d) {
      if (editing.isNew) {
        dots.delete(d.id);
        dotEl(d.id)?.remove();
      } else if (editing.movedFrom) {
        d.spot = editing.movedFrom;
      }
    }
    closeEditor();
  };

  e$('[data-hde-publish]')?.addEventListener('click', () => save('published'));
  e$('[data-hde-draft]')?.addEventListener('click', () => save('draft'));
  e$('[data-hde-cancel]')?.addEventListener('click', cancelEditor);
  e$('[data-hde-capture]')?.addEventListener('click', () => {
    const d = editing ? dots.get(editing.dotId) : undefined;
    if (!editing || !d) return;
    const shot = spotCapture(d.spot, labelOf(d.spot));
    editing.shot = { ...shot, src: page.base.replace(/\/$/, '') + shot.src };
    paintShot();
  });
  e$('[data-hde-remove]')?.addEventListener('click', () => {
    if (!editing) return;
    editing.shot = undefined;
    paintShot();
  });
  // Upload Image and Replace open the drop zone's own file picker.
  const upload = e$<HTMLElement & { renderRoot?: ShadowRoot }>('[data-hde-upload]');
  editor?.querySelectorAll('[data-hde-browse]').forEach((b) =>
    b.addEventListener('click', () => upload?.renderRoot?.querySelector<HTMLInputElement>('.native')?.click()),
  );
  upload?.addEventListener('change', (e) => takeFile((e as CustomEvent<{ files: File[] }>).detail?.files?.at(-1)));
  const media = e$('[data-hde-media]');
  media?.addEventListener('dragover', (e) => {
    e.preventDefault();
    media.dataset.dragging = '';
  });
  media?.addEventListener('dragleave', () => delete media.dataset.dragging);
  media?.addEventListener('drop', (e) => {
    e.preventDefault();
    delete media.dataset.dragging;
    takeFile(e.dataTransfer?.files?.[0]);
  });
  editor?.addEventListener('paste', (e) => {
    const file = Array.from(e.clipboardData?.files ?? []).find((f) => f.type.startsWith('image/'));
    if (!file) return;
    e.preventDefault();
    takeFile(file);
  });

  // ── placing: a dot carried on the pointer to a part ────────────────────────────────

  const highlight = document.querySelector<HTMLElement>('[data-help-highlight]');
  const highlightLabel = highlight?.querySelector<HTMLElement>('[data-help-highlight-label]');
  const hoverOutline = document.querySelector<HTMLElement>('[data-help-highlight-hover]');
  const carry = document.querySelector<HTMLElement>('[data-help-carry]');
  let pointer: [number, number] | null = null;

  // A part that repeats (a row's name, its badge) is a kind: its dot shows on the first one
  // on the page. So the part under the pointer is outlined faintly, the first one strongly,
  // and the tag says so, rather than the outline jumping on its own.
  const outline = (el: HTMLElement, r: DOMRect) => {
    el.style.setProperty('--_x', `${r.left - PAD}px`);
    el.style.setProperty('--_y', `${r.top - PAD}px`);
    el.style.setProperty('--_w', `${r.width + PAD * 2}px`);
    el.style.setProperty('--_h', `${r.height + PAD * 2}px`);
  };
  const showHighlight = (hovered: HTMLElement | null) => {
    if (!highlight || !highlightLabel || !hoverOutline) return;
    const id = hovered?.dataset.helpSpot ?? '';
    const part = hovered ? (targetOf(id) ?? hovered) : null;
    highlight.hidden = !part;
    hoverOutline.hidden = !hovered || hovered === part;
    if (!part || !hovered) return;
    outline(highlight, part.getBoundingClientRect());
    if (!hoverOutline.hidden) outline(hoverOutline, hovered.getBoundingClientRect());
    const label = part.dataset.helpSpotLabel ?? id;
    const many = document.querySelectorAll(`[data-help-spot="${CSS.escape(id)}"]`).length > 1;
    highlightLabel.textContent = many ? `Shows on the first ${label}` : label;
  };
  const showCarry = (at: [number, number] | null) => {
    if (!carry) return;
    carry.hidden = !at;
    if (!at) return;
    carry.style.setProperty('--_x', `${at[0]}px`);
    carry.style.setProperty('--_y', `${at[1]}px`);
  };
  const placing = (yes: boolean) => document.documentElement.toggleAttribute('data-help-placing', yes);

  const startArm = (next: Arm) => {
    if (editing) cancelEditor();
    arm = next;
    drawer?.close();
    closePopovers();
    placing(true);
    on = true;
    showLayer();
    if (pointer) {
      showCarry(pointer);
      showHighlight(partAt(...pointer));
    }
  };
  const endArm = () => {
    arm = null;
    placing(false);
    showHighlight(null);
    showCarry(null);
    showLayer();
  };

  // A dot lands on a part: a new one opens the editor empty, a moved one with the warning.
  const drop = (spot: string, how: Arm) => {
    endArm();
    if (how.kind === 'add') {
      const d: DotState = { id: `${page.routeKey}-new-${++made}`, spot, status: 'draft', title: '', text: '', pending: true };
      dots.set(d.id, d);
      addDotEl(d);
      refresh();
      openEditor(d.id, { isNew: true });
      return;
    }
    const d = dots.get(how.dotId);
    if (!d) return;
    const from = d.spot;
    d.spot = spot;
    refresh();
    openEditor(d.id, { movedFrom: from });
  };

  window.addEventListener('pointermove', (e) => {
    pointer = [e.clientX, e.clientY];
    if (drag) return;
    if (arm) {
      showCarry(pointer);
      showHighlight(partAt(e.clientX, e.clientY));
    } else if (admin && e.altKey && !editing && !offPage(e.target)) {
      placing(true);
      showHighlight(partAt(e.clientX, e.clientY));
    } else if (highlight && !highlight.hidden) {
      placing(false);
      showHighlight(null);
    }
  });
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Alt' && !arm && !drag) {
      placing(false);
      showHighlight(null);
    }
  });

  // Capture, ahead of the page's own handlers and esa-popover's outside click: while
  // placing, a click on the page drops the dot and does nothing else.
  window.addEventListener(
    'click',
    (e) => {
      const altAdd = admin && e.altKey && !editing && !drag;
      if ((!arm && !altAdd) || offPage(e.target)) return;
      e.preventDefault();
      e.stopPropagation();
      const part = partAt(e.clientX, e.clientY);
      if (!part?.dataset.helpSpot) return;
      drop(part.dataset.helpSpot, arm ?? { kind: 'add' });
    },
    true,
  );
  panelbar?.querySelector('[data-help-pick-cancel]')?.addEventListener('click', () => {
    const back = arm?.fromDrawer;
    endArm();
    if (back) drawer?.show();
  });
  panelbar?.querySelector('[data-help-edit-done]')?.addEventListener('click', () => setEditMode(false));
  panelbar?.querySelector('[data-help-band-add]')?.addEventListener('click', () => startArm({ kind: 'add' }));
  panelbar?.querySelector('[data-help-band-edit]')?.addEventListener('click', () => setEditMode(true));
  panelbar?.querySelector('[data-help-orphans]')?.addEventListener('click', (e) => {
    const id = (e.target as HTMLElement).closest<HTMLElement>('[data-dot-id]')?.dataset.dotId;
    if (id) startArm({ kind: 'move', dotId: id });
  });

  // ── dragging a dot to another part ─────────────────────────────────────────────────

  let drag: { dotId: string; x0: number; y0: number; moving: boolean } | null = null;
  let swallowClick = false;

  layer.addEventListener('pointerdown', (e) => {
    if (!editMode || e.button !== 0 || arm) return;
    const btn = (e.target as HTMLElement).closest('[data-hd-button]');
    const id = btn?.closest<HTMLElement>('[data-help-dot]')?.dataset.dotId;
    if (!id || editing?.dotId === id) return;
    drag = { dotId: id, x0: e.clientX, y0: e.clientY, moving: false };
  });
  window.addEventListener('pointermove', (e) => {
    if (!drag) return;
    const el = dotEl(drag.dotId);
    if (!el) return;
    if (!drag.moving) {
      if (Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0) < DRAG) return;
      drag.moving = true;
      if (editing) cancelEditor();
      closePopovers();
      el.dataset.dragging = '';
      placing(true);
    }
    const origin = layer.getBoundingClientRect();
    el.style.setProperty('--_x', `${e.clientX - origin.left}px`);
    el.style.setProperty('--_y', `${e.clientY - origin.top}px`);
    showHighlight(partAt(e.clientX, e.clientY));
  });
  const endDrag = (land: boolean, e?: PointerEvent) => {
    const was = drag;
    drag = null;
    if (!was?.moving) return;
    swallowClick = true;
    setTimeout(() => (swallowClick = false), 0);
    delete dotEl(was.dotId)?.dataset.dragging;
    placing(false);
    showHighlight(null);
    const spot = land && e ? partAt(e.clientX, e.clientY)?.dataset.helpSpot : undefined;
    const d = dots.get(was.dotId);
    if (spot && d && spot !== d.spot) drop(spot, { kind: 'move', dotId: d.id });
    else place();
  };
  window.addEventListener('pointerup', (e) => endDrag(true, e));
  window.addEventListener('pointercancel', () => endDrag(false));
  // The click that ends a drag is not a click on the dot: keep its popover shut.
  layer.addEventListener(
    'click',
    (e) => {
      if (!swallowClick) return;
      e.stopImmediatePropagation();
      e.preventDefault();
      swallowClick = false;
    },
    true,
  );

  // Edit Dots: a click on a dot edits it in place, and its × detaches it.
  layer.addEventListener(
    'click',
    (e) => {
      if (!editMode) return;
      const t = e.target as HTMLElement;
      const id = t.closest<HTMLElement>('[data-help-dot]')?.dataset.dotId;
      if (!id) return;
      if (t.closest('[data-hd-detach]')) {
        e.stopPropagation();
        const d = dots.get(id);
        if (d) d.detached = true;
        refresh();
      } else if (t.closest('[data-hd-button]')) {
        e.stopPropagation();
        e.preventDefault();
        openEditor(id);
      }
    },
    true,
  );

  // Edit, in an admin's popover.
  layer.addEventListener('click', (e) => {
    const id = (e.target as HTMLElement).closest('[data-hd-edit]')?.closest<HTMLElement>('[data-help-dot]')?.dataset.dotId;
    if (id) openEditor(id);
  });

  // Capture, so an open popover is still open here: its own Esc closes it and the dots stay.
  window.addEventListener(
    'keydown',
    (e) => {
      if (e.key !== 'Escape') return;
      if (drag?.moving) {
        endDrag(false);
      } else if (arm) {
        const back = arm.fromDrawer;
        endArm();
        if (back) drawer?.show();
      } else if (editing) {
        cancelEditor();
      } else if (layer.querySelector('esa-popover[open]') || panelbar?.querySelector('esa-popover[open]')) {
        // its own Esc closes it; the mode and the dots stay
      } else if (editMode) {
        setEditMode(false);
      } else if (on && !drawer?.open) {
        setOn(false);
      }
    },
    true,
  );

  // ── list actions (delegated: rows come and go) ───────────────────────────────

  list?.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    const row = t.closest<HTMLElement>('[data-hda-row]');
    const d = row?.dataset.dotId ? dots.get(row.dataset.dotId) : undefined;
    if (!d) return;
    if (t.closest('[data-hda-edit]')) {
      drawer?.close();
      on = true;
      showLayer();
      targetOf(d.spot)?.scrollIntoView({ block: 'center', behavior: 'instant' });
      return requestAnimationFrame(() => openEditor(d.id));
    }
    if (t.closest('[data-hda-pickagain]')) return startArm({ kind: 'move', dotId: d.id, fromDrawer: true });
    if (t.closest('[data-hda-publish]')) {
      d.status = 'published';
      delete d.draftedFrom;
    } else if (t.closest('[data-hda-dismiss]')) {
      d.status = 'dismissed';
    } else if (t.closest('[data-hda-detach]')) {
      d.detached = true;
    } else if (t.closest('[data-hda-open]')) {
      if (targetOf(d.spot)) openDot(d);
      else if (admin && !elsewhere(d.spot)) startArm({ kind: 'move', dotId: d.id, fromDrawer: true });
      return;
    } else return;
    refresh();
  });

  // ── wiring ─────────────────────────────────────────────────────────────────────────

  const refresh = () => {
    dots.forEach(paintDot);
    paintRows();
    showLayer();
  };

  const setOn = (next: boolean) => {
    on = next;
    if (on) drawer?.close();
    if (!on && editing) cancelEditor();
    if (!on) editMode = false;
    showLayer();
  };
  trigger.addEventListener('click', () => setOn(!on));
  document.querySelectorAll('[data-help-dots-start]').forEach((b) => b.addEventListener('click', () => setOn(true)));
  panelbar?.querySelector('[data-help-panel-open]')?.addEventListener('click', () => {
    closePopovers();
    drawer?.show();
  });
  window.addEventListener('resize', schedule);
  scroller.addEventListener('scroll', () => {
    if (arm && pointer) showHighlight(partAt(...pointer));
  });
  document.addEventListener('input', schedule, true);
  const watched = layer.parentElement;
  if (watched) new ResizeObserver(schedule).observe(watched);
  refresh();
}
