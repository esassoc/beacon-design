// change-log.ts — the runtime half of <BcnChangeLog>.
//
// <BcnChangeLog> renders at build time; a log that grows while the page is open
// (the DMR review rail) needs the SAME markup from the browser. `renderChangeLog`
// emits it as an HTML string, element-for-element and class-for-class with the
// .astro component, so one global `bcn-change-log` stylesheet styles both.
//
// Keep the two in lockstep: any markup change in BcnChangeLog.astro lands here too.
//
// Tags: the .astro component renders `tag` with esa-badge, which is compile-time
// only. At runtime the host passes `tagHtml` — typically the innerHTML of a
// pre-rendered <template> holding that esa-badge variant — so the runtime badge is
// the same lego, scoped-style attributes and all.

import { fieldDef, fmtClock, formatValue, changeLogDays, type DmrState, type LogFilter, type LogEntry } from '../../lib/dmr-review-store';

// ── Public types (shared with BcnChangeLog.astro) ───────────────────────────

/** esa-badge's tinted variants, plus `neutral` (a re-pointed `primary`; esa-badge has no neutral). */
export type ChangeLogTagVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface ChangeLogTag {
  /** Stable key the runtime uses to find the pre-rendered badge ("pending"). */
  key: string;
  label: string;
  variant: ChangeLogTagVariant;
}

export interface ChangeLogEvent {
  text: string;
  emphasis?: string;
  /** Optional: renders the emphasis as a link to the record the event happened on. */
  href?: string;
  by: string;
  /** Where the change happened ("General Information"), read after the emphasis. */
  context?: string;
  /** A value change: old struck, new plain. Long values clamp to two lines. */
  change?: { from: string; to: string };
  /** Display time ("8:54 AM"), rendered as <time> after `by`. */
  time?: string;
  /** ISO timestamp for the <time datetime>. */
  datetime?: string;
  /** Quiet status tag on the who/when line. */
  tag?: ChangeLogTag;
}

export interface ChangeLogDay {
  date: string;
  /** ISO date ("2026-09-12") — when present the date renders as <time>. */
  datetime?: string;
  events: ChangeLogEvent[];
}

/** Values longer than this get the clamped, stacked layout + "Show full text". */
export const LONG_CHANGE_CHARS = 60;

export function isLongChange(change: { from: string; to: string }): boolean {
  return change.from.length > LONG_CHANGE_CHARS || change.to.length > LONG_CHANGE_CHARS;
}

/** True when the event carries any of the extended who/when/tag fields. */
export function hasMeta(e: ChangeLogEvent): boolean {
  return Boolean(e.time || e.tag);
}

// ── Runtime renderer ───────────────────────────────────────────────────────

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export interface RenderOptions {
  /** HTML for a tag — the pre-rendered esa-badge. Defaults to the plain label. */
  tagHtml?: (tag: ChangeLogTag) => string;
}

function renderEvent(e: ChangeLogEvent, opts: RenderOptions): string {
  const emphasis = e.emphasis
    ? e.href
      ? `<a class="bcn-change-log__target" href="${esc(e.href)}"><strong>${esc(e.emphasis)}</strong></a>`
      : `<strong>${esc(e.emphasis)}</strong>`
    : '';
  const context = e.context ? ` <span class="bcn-change-log__context">· ${esc(e.context)}</span>` : '';
  const text = `<span class="bcn-change-log__text">${e.text ? `${esc(e.text)} ` : ''}${emphasis}${context}</span>`;

  let change = '';
  if (e.change) {
    const long = isLongChange(e.change);
    change =
      `<span class="bcn-change-log__change${long ? ' bcn-change-log__change--long' : ''}">` +
      `<del class="bcn-change-log__from">${esc(e.change.from)}</del>` +
      `<span class="bcn-change-log__arrow" aria-hidden="true">→</span>` +
      `<span class="visually-hidden">changed to</span>` +
      `<ins class="bcn-change-log__to">${esc(e.change.to)}</ins>` +
      (long
        ? `<details class="bcn-change-log__more"><summary><span class="bcn-change-log__more-show">Show full text</span><span class="bcn-change-log__more-hide">Show less</span></summary></details>`
        : '') +
      `</span>`;
  }

  const time = e.time
    ? ` · ${e.datetime ? `<time datetime="${esc(e.datetime)}">${esc(e.time)}</time>` : esc(e.time)}`
    : '';
  const by = `<span class="bcn-change-log__by">${esc(e.by)}${time}</span>`;
  const tag = e.tag
    ? `<span class="bcn-change-log__tag bcn-change-log__tag--${e.tag.variant}">${opts.tagHtml ? opts.tagHtml(e.tag) : esc(e.tag.label)}</span>`
    : '';
  const who = hasMeta(e) ? `<span class="bcn-change-log__meta cluster" data-gap="xs">${by}${tag}</span>` : by;

  return `<li class="bcn-change-log__event">${text}${change}${who}</li>`;
}

/** The <ol class="bcn-change-log"> BcnChangeLog.astro renders, as an HTML string. */
export function renderChangeLog(days: ChangeLogDay[], opts: RenderOptions = {}): string {
  const body = days
    .map((day) => {
      const date = day.datetime ? `<time datetime="${esc(day.datetime)}">${esc(day.date)}</time>` : esc(day.date);
      return (
        `<li class="bcn-change-log__day"><p class="bcn-change-log__date">${date}</p>` +
        `<ul class="bcn-change-log__events">${day.events.map((e) => renderEvent(e, opts)).join('')}</ul></li>`
      );
    })
    .join('');
  return `<ol class="bcn-change-log">${body}</ol>`;
}

// ── DMR review adapter (dmr-review-store LogEntry → ChangeLogDay) ───────────

export const DMR_TAGS: Record<'pending' | 'synced' | 'withdrawn' | 'beacon', ChangeLogTag> = {
  pending: { key: 'pending', label: 'Pending sync', variant: 'warning' },
  synced: { key: 'synced', label: 'Synced to Fulcrum', variant: 'success' },
  withdrawn: { key: 'withdrawn', label: 'Withdrawn', variant: 'neutral' },
  beacon: { key: 'beacon', label: 'Beacon only', variant: 'info' },
};

function dmrEvent(l: LogEntry): ChangeLogEvent {
  const meta = { by: l.by, time: fmtClock(l.at), datetime: l.at };
  if (l.kind === 'event') return { text: l.text, ...meta };
  const def = l.fieldId ? fieldDef(l.fieldId) : undefined;
  const fmt = (v: string | undefined) => (def ? formatValue(def, v ?? '') : (v ?? ''));
  const tag = l.kind === 'beacon' ? DMR_TAGS.beacon : l.sync ? DMR_TAGS[l.sync] : undefined;
  return {
    text: '',
    emphasis: l.text,
    context: l.context,
    change: { from: fmt(l.from), to: fmt(l.to) },
    tag,
    ...meta,
  };
}

/** The DMR change log, date-grouped newest first, in BcnChangeLog's shape. */
export function dmrChangeLogDays(state: DmrState, filter: LogFilter = 'all'): ChangeLogDay[] {
  return changeLogDays(state, filter).map((d) => ({
    date: d.date,
    datetime: d.entries[0]?.at.slice(0, 10),
    events: d.entries.map(dmrEvent),
  }));
}
