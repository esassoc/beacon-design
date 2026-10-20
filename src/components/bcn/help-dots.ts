// help-dots — the controller behind <BcnHelpDots>, <BcnHelpDotsAdmin> and
// <BcnHelpDotForm>. It owns the page's dots in memory (nothing persists across a reload,
// as with every prototype here) and wires the three components and the drawer by their
// data-* hooks. See <BcnHelpDots> for the contract.
//
// Reader: the drawer's Show Me Around switch shows the published dots. Admin
// (`?as=admin`): drafts show muted, the drawer gains Dots on This Page, and Add Dot /
// Pick Again run pick mode, which ends on the dot form.

import '@esa/ecology/esa-popover';
import '@esa/ecology/esa-switch-toggle';
import '@esa/ecology/esa-side-dialog';
import '@esa/ecology/esa-text-field';
import '@esa/ecology/esa-textarea';
import '@esa/ecology/esa-file-upload';
import type { HelpDot, HelpDotShot, HelpDotStatus, HelpSpot } from '../../data/help-dots';

type Popover = HTMLElement & { open: boolean; position: string; appearance: string; label: string };
type Toggle = HTMLElement & { checked: boolean };
type Dialog = HTMLElement & { show(): void; close(): void; heading: string; open: boolean };
type Field = HTMLElement & { value: string };

interface DotState extends HelpDot {
  detached?: boolean;
}

interface ClientPage {
  routeKey: string;
  spots: HelpSpot[];
  dots: HelpDot[];
}

const NARROW = 640;
const EDGE = 12;
const GAP = 20; // the popover's offset plus the dot's radius
const CHROME = 28; // the popover's own padding and border, both sides
const OUTLINE_PAD = 4;

export function setupHelpDots(): void {
  const layer = document.querySelector<HTMLElement>('[data-help-dots]');
  const json = document.querySelector<HTMLScriptElement>('[data-help-dots-page]');
  const slot = document.querySelector<HTMLElement>('[data-help-dots-slot]');
  const toggle = document.querySelector<Toggle>('[data-help-dots-toggle]');
  if (!layer || !json || !slot || !toggle) return;

  const page = JSON.parse(json.textContent ?? '{}') as ClientPage;
  const params = new URLSearchParams(location.search);
  const admin = params.get('as') === 'admin';
  const drawer = document.querySelector<Dialog>('[data-gd]');

  const spots = new Map(page.spots.map((s) => [s.spot, s]));
  const dots = new Map<string, DotState>(page.dots.map((d) => [d.id, { ...d }]));
  let picking: { dotId: string | null } | null = null;
  let made = 0;

  slot.hidden = false;
  if (params.get('popover') === 'light') layer.dataset.tone = 'light';

  // ── the page's elements ────────────────────────────────────────────────────────────

  const dotEl = (id: string) => layer.querySelector<HTMLElement>(`[data-help-dot][data-dot-id="${id}"]`);
  const outlines = Array.from(layer.querySelectorAll<HTMLElement>('[data-help-spot-outline]'));
  const targetOf = (spot: string): HTMLElement | null => {
    const s = spots.get(spot);
    const el = s ? document.querySelector<HTMLElement>(s.target) : null;
    if (!el || el.closest('[hidden]') || el.getBoundingClientRect().width === 0) return null;
    return el;
  };
  const live = (d: DotState) => d.status !== 'dismissed' && !d.detached;
  const seen = (d: DotState) => live(d) && (d.status === 'published' || admin);

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
      const spot = spots.get(d.spot)!;
      const [x, y] = anchor(target.getBoundingClientRect(), spot.at);
      el.style.setProperty('--_x', `${x - origin.left}px`);
      el.style.setProperty('--_y', `${y - origin.top}px`);
      const popover = el.querySelector<Popover>('esa-popover');
      if (popover) fit(el, popover, spot.side, x);
    });

    const used = new Set(Array.from(dots.values()).filter(live).map((d) => d.spot));
    outlines.forEach((o) => {
      const spot = o.dataset.spot ?? '';
      const target = picking && !used.has(spot) ? targetOf(spot) : null;
      o.hidden = !target;
      if (!target) return;
      const r = target.getBoundingClientRect();
      o.style.setProperty('--_x', `${r.left - origin.left - OUTLINE_PAD}px`);
      o.style.setProperty('--_y', `${r.top - origin.top - OUTLINE_PAD}px`);
      o.style.setProperty('--_w', `${r.width + OUTLINE_PAD * 2}px`);
      o.style.setProperty('--_h', `${r.height + OUTLINE_PAD * 2}px`);
    });
  };

  let frame = 0;
  const schedule = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(place);
  };

  const closePopovers = () => layer.querySelectorAll<Popover>('esa-popover').forEach((p) => (p.open = false));

  const showLayer = () => {
    layer.hidden = !(toggle.checked || picking);
    if (layer.hidden) closePopovers();
    else place();
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
    el.querySelector('[data-hd-button]')?.setAttribute('aria-label', `About: ${d.title}`);
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

  // ── admin: Dots on This Page ───────────────────────────────────────────────────────

  const list = document.querySelector<HTMLElement>('[data-hda]');
  const adminSlot = document.querySelector<HTMLElement>('[data-help-dots-admin-slot]');
  const rowsEl = list?.querySelector<HTMLElement>('[data-hda-list]');
  const orphansEl = list?.querySelector<HTMLElement>('[data-hda-orphans]');
  const orphansWrap = list?.querySelector<HTMLElement>('[data-hda-orphans-wrap]');
  const rowEl = (id: string) => list?.querySelector<HTMLElement>(`[data-hda-row][data-dot-id="${id}"]`);

  const addRowEl = (d: DotState) => {
    const tpl = list?.querySelector<HTMLTemplateElement>('[data-hda-template]');
    const el = tpl?.content.firstElementChild?.cloneNode(true) as HTMLElement | undefined;
    if (!el || !rowsEl) return;
    el.dataset.dotId = d.id;
    rowsEl.append(el);
  };

  const paintRows = () => {
    if (!list || !rowsEl || !orphansEl || !orphansWrap) return;
    let orphans = 0;
    dots.forEach((d) => {
      const row = rowEl(d.id);
      if (!row) return;
      row.hidden = !live(d);
      if (!live(d)) return;
      const orphan = !targetOf(d.spot);
      const claudeDraft = d.status === 'draft' && !!d.draftedFrom;
      const q = (sel: string) => row.querySelector<HTMLElement>(sel);
      q('[data-hda-title]')!.textContent = d.title;
      q('[data-hda-spot]')!.textContent = spots.get(d.spot)?.label ?? d.spot;
      q('[data-hda-draft]')!.hidden = d.status !== 'draft';
      q('[data-hda-from]')!.hidden = !claudeDraft;
      q('[data-hda-review]')!.hidden = !claudeDraft || orphan;
      q('[data-hda-repick]')!.hidden = !orphan;
      q('[data-hda-tools]')!.hidden = claudeDraft || orphan;
      const home = orphan ? orphansEl : rowsEl;
      if (row.parentElement !== home) home.append(row);
      if (orphan) orphans++;
    });
    orphansWrap.hidden = orphans === 0;
  };

  if (admin && list && adminSlot) {
    adminSlot.append(list);
    list.hidden = false;
    adminSlot.hidden = false;
  }

  // ── the form ───────────────────────────────────────────────────────────────────────

  const form = document.querySelector<Dialog>('[data-hdf]');
  const f = <T extends HTMLElement = HTMLElement>(sel: string) => form?.querySelector<T>(sel) ?? null;
  let editing: { dotId: string | null; spot: string; shot?: HelpDotShot } | null = null;

  const paintShot = () => {
    const box = f('[data-hdf-shot]');
    const img = f<HTMLImageElement>('[data-hdf-shot-img]');
    const remove = f('[data-hdf-remove-wrap]');
    const shot = editing?.shot;
    if (!box || !img || !remove) return;
    box.hidden = !shot;
    remove.hidden = !shot;
    if (shot) {
      img.src = shot.src;
      img.alt = shot.alt;
    }
  };

  const openForm = (dotId: string | null, spot: string) => {
    if (!form) return;
    const d = dotId ? dots.get(dotId) : undefined;
    editing = { dotId, spot, shot: d?.shot };
    form.heading = d ? 'Edit Dot' : 'Add Dot';
    f('[data-hdf-spot]')!.textContent = spots.get(spot)?.label ?? spot;
    const title = f<Field>('[data-hdf-title]');
    const text = f<Field>('[data-hdf-text]');
    if (title) title.value = d?.title ?? '';
    if (text) text.value = d?.text ?? '';
    paintShot();
    form.show();
  };

  const save = (status: HelpDotStatus) => {
    if (!editing || !form) return;
    const title = f<Field>('[data-hdf-title]')?.value.trim() ?? '';
    const text = f<Field>('[data-hdf-text]')?.value.trim() ?? '';
    if (!title) {
      f('[data-hdf-title]')?.focus();
      return;
    }
    let d = editing.dotId ? dots.get(editing.dotId) : undefined;
    if (!d) {
      d = { id: `${page.routeKey}-new-${++made}`, spot: editing.spot, status, title, text };
      dots.set(d.id, d);
      addDotEl(d);
      addRowEl(d);
    }
    Object.assign(d, { spot: editing.spot, status, title, text, shot: editing.shot });
    if (status === 'published') delete d.draftedFrom;
    editing = null;
    form.close();
    refresh();
  };

  f('[data-hdf-publish]')?.addEventListener('click', () => save('published'));
  f('[data-hdf-draft]')?.addEventListener('click', () => save('draft'));
  f('[data-hdf-cancel]')?.addEventListener('click', () => form?.close());
  f('[data-hdf-capture]')?.addEventListener('click', () => {
    if (!editing) return;
    editing.shot = spots.get(editing.spot)?.capture;
    paintShot();
  });
  f('[data-hdf-remove]')?.addEventListener('click', () => {
    if (!editing) return;
    editing.shot = undefined;
    paintShot();
  });
  f('[data-hdf-upload]')?.addEventListener('change', (e) => {
    const file = (e as CustomEvent<{ files: File[] }>).detail?.files?.[0];
    if (!editing || !file) return;
    editing.shot = { src: URL.createObjectURL(file), alt: file.name, width: 640, height: 240 };
    paintShot();
  });

  // ── pick mode ──────────────────────────────────────────────────────────────────────

  const pickbar = document.querySelector<HTMLElement>('[data-help-pickbar]');

  const startPick = (dotId: string | null) => {
    picking = { dotId };
    drawer?.close();
    closePopovers();
    if (pickbar) pickbar.hidden = false;
    showLayer();
  };
  const endPick = () => {
    picking = null;
    if (pickbar) pickbar.hidden = true;
    showLayer();
    place();
  };

  outlines.forEach((o) =>
    o.addEventListener('click', () => {
      const dotId = picking?.dotId ?? null;
      const spot = o.dataset.spot ?? '';
      endPick();
      drawer?.show();
      openForm(dotId, spot);
    }),
  );
  pickbar?.querySelector('[data-help-pick-cancel]')?.addEventListener('click', () => {
    endPick();
    drawer?.show();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && picking) {
      endPick();
      drawer?.show();
    }
  });

  // ── admin list actions (delegated: rows come and go) ───────────────────────────────

  list?.addEventListener('click', (e) => {
    const t = e.target as HTMLElement;
    if (t.closest('[data-hda-add]')) return startPick(null);
    const row = t.closest<HTMLElement>('[data-hda-row]');
    const d = row?.dataset.dotId ? dots.get(row.dataset.dotId) : undefined;
    if (!d) return;
    if (t.closest('[data-hda-edit]')) return openForm(d.id, d.spot);
    if (t.closest('[data-hda-pickagain]')) return startPick(d.id);
    if (t.closest('[data-hda-publish]')) {
      d.status = 'published';
      delete d.draftedFrom;
    } else if (t.closest('[data-hda-dismiss]')) {
      d.status = 'dismissed';
    } else if (t.closest('[data-hda-detach]')) {
      d.detached = true;
    } else return;
    refresh();
  });

  // ── wiring ─────────────────────────────────────────────────────────────────────────

  const refresh = () => {
    dots.forEach(paintDot);
    paintRows();
    showLayer();
  };

  toggle.addEventListener('change', () => {
    showLayer();
    if (toggle.checked) drawer?.close();
  });
  window.addEventListener('resize', schedule);
  document.addEventListener('input', schedule, true);
  const watched = layer.parentElement;
  if (watched) new ResizeObserver(schedule).observe(watched);
  refresh();
}
