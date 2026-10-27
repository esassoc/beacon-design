#!/usr/bin/env python3
"""Builds draft-mode-decisions.html: Andy's answers to the questions the What a Draft Is study raised. Picks and notes
save to the artifact's db (answers/<id>), where Claude reads them back; each question opens the claude.ai comment
composer on itself. On Andy's artifact kit (andrewlovseth/esa, reference/artifact-kit).
Run: python3 build-decisions.py <esa checkout>."""
import html, json, os, sys

ESA = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/Dev/esa")
sys.path.insert(0, os.path.join(ESA, "reference", "artifact-kit"))
import kit  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "draft-mode-decisions.html")
TITLE = "Draft Mode Decisions"
STUDY = "https://claude.ai/artifact/RnhMkS1CiDm8T9WzWnuoSR"
E = lambda s: html.escape(str(s), quote=True)

QUESTIONS = [
    ("leave", "Do drafts leave the building?",
     "Has anyone sent plan dates to CDFW or a PM from a screenshot or an export? The study ranks a draft read as the plan as the costliest slip; if it never happens, the title block drops from first priority.",
     "It happens, through screenshots pasted into status emails.",
     ["Yes, often", "Sometimes", "Never", "Not sure"]),
    ("readers", "Who opens a plan on a normal day, and how many of them ever edit?",
     "If nearly everyone who opens a plan also edits it, making Live a read view costs them a click every time.",
     "Readers outnumber editors five to one or more.",
     ["Mostly readers", "About even", "Mostly editors", "Not sure"]),
    ("drag", "Is \"drag anywhere on Live starts a draft\" a feature you wanted, or an accident?",
     "You and Jamie took edit mode out on purpose. I'm calling a curious drag that turns the page into a draft an accidental mode.",
     "You wanted low ceremony, not accidental drafts. Trying (B) gives you the first without the second.",
     ["An accident: change it", "Wanted: keep it", "Keep it, and add Try"]),
    ("editmode", "Is direction A just Jamie's edit mode under a new name?",
     "My defense: Live becomes the default read view for everyone, and status is said separately from editability. What's your test for \"edit mode came back\"?",
     "It isn't edit mode: there's no switch to flip, only a read view and your draft.",
     ["Not edit mode", "It is edit mode", "Not sure"]),
    ("flat", "Can you live with Live going flat?",
     "You liked grabbable, tactile bars in the density round. In direction A, depth only means \"you can move this,\" so Live prints flat.",
     "Yes, once you see Live and a draft side by side.",
     ["Yes, Live goes flat", "No, keep Live tactile", "Show me first"]),
    ("purpose", "What is a draft for in your users' week?",
     "Mostly what-ifs means Try (B) carries the weight and real drafts get rare. Mostly the next revision someone signs off means approval (C) matters.",
     "Mostly what-ifs.",
     ["Mostly what-ifs", "Mostly the next revision", "Both, equally"]),
    ("scenarios", "Does one draft per person survive scenarios?",
     "A planner comparing \"permit slips 3 months\" with \"slips 6 months\" needs two at once. Break the rule, or make a scenario a different thing from a draft?",
     "Scenarios become their own thing; the one-draft rule stays.",
     ["Scenarios are separate", "Allow several drafts", "One draft is enough"]),
    ("approval", "Does anyone approve a revision before it goes Live today? Who?",
     "That decides whether Publish needs an approver or stays one click.",
     "I don't know, and I'm not guessing.",
     ["Yes, someone approves", "No approval", "Varies by client"]),
    ("agency", "Which dates are agency commitments, and does Beacon know?",
     "Direction C depends on it: consequences only mean something if we can tell a CDFW submittal from an internal task.",
     "The data model doesn't tell them apart yet.",
     ["Beacon knows", "Not yet", "Not sure"]),
    ("fixes", "Should exact fixes (a dependency's lag, an unlink) keep going straight to Live?",
     "Notion's precedent says yes, no modes. Wikipedia's says hold edits for review.",
     "Keep the fast lane, and record who made each fix and when, as a revision.",
     ["Keep the fast lane", "Everything through a draft", "Not sure"]),
    ("band", "If the chart's corner carries a title block, does the band still name the draft?",
     "Or does it shrink to the actions: undo, redo, Discard, Review and publish.",
     "The band keeps the name, because the name is also the branch menu.",
     ["Band keeps the name", "Band is actions only", "Drop the band"]),
    ("next", "What next?",
     "Prototype A, B and D on the real chart (one view, critiqued against the junior tells, then I stop for your yes or no), or settle these first.",
     "Answer 1, 3, 5 and 6, then build.",
     ["Build A, B and D", "Settle these first", "Something else"]),
]

DIRECTIONS = [
    ("dir-a", "A. Issued and Working", "Live prints flat as the issued plan; your draft's bars stand up with depth and grips."),
    ("dir-b", "B. Try Before You Draft", "Press and hold on Live to try a move; let go and it springs back, or keep it to start your draft."),
    ("dir-c", "C. Drafts as Scenarios", "A draft judged by its consequences against Live, compared with others, approved when it moves an agency date."),
    ("dir-d", "D. The Title Block", "The chart's corner says Issued, Rev 7 or Draft, not issued; exports of a draft carry the stamp."),
]
DIR_OPTIONS = ["Keep", "Maybe", "Cut"]

ICON_COMMENT = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 3.5h11v7h-6l-3 2.5v-2.5h-2z"/></svg>'


def options(qid, opts):
    return "".join(
        f'<label class="opt"><input type="radio" name="{qid}" value="{E(o)}" id="{qid}-{i}"><span>{E(o)}</span></label>'
        for i, o in enumerate(opts))


def foot(qid, label):
    return (f'<label class="sr" for="{qid}-note">Note on {E(label)}</label>'
            f'<textarea class="q-note" id="{qid}-note" data-note-for="{qid}" rows="2" maxlength="4000" placeholder="Note"></textarea>'
            f'<div class="q-foot"><button type="button" class="btn ghost q-comment" data-comment-for="{qid}" hidden>{ICON_COMMENT}Comment</button>'
            f'<span class="q-state" data-state-for="{qid}" aria-live="polite"></span></div>')


qs = "".join(
    f'<section class="q" id="q-{qid}" data-q="{qid}" data-comment-target>'
    f'<h3 id="h-{qid}"><span class="q-n">{n}</span>{E(title)}</h3>'
    f'<p class="q-why">{E(why)}</p>'
    f'<p class="q-bet"><b>My bet</b>{E(bet)}</p>'
    f'<div class="opts" role="radiogroup" aria-labelledby="h-{qid}">{options(qid, opts)}</div>'
    f'{foot(qid, title)}</section>'
    for n, (qid, title, why, bet, opts) in enumerate(QUESTIONS, 1))

dirs = "".join(
    f'<section class="q" id="q-{did}" data-q="{did}" data-comment-target>'
    f'<h3 id="h-{did}">{E(title)}</h3><p class="q-why">{E(line)}</p>'
    f'<div class="opts" role="radiogroup" aria-labelledby="h-{did}">{options(did, DIR_OPTIONS)}</div>'
    f'{foot(did, title)}</section>'
    for did, title, line in DIRECTIONS)

page_css = """
/* The decision page's own glue, tokens only. Questions are rows in the reading column, a hairline between them;
   picks are quiet 28px chips, the chosen one in the brand's muted fill. */
[hidden]{display:none!important}
.appbar .crumbs{min-width:0;overflow:hidden}
.appbar .crumbs b{overflow:hidden;text-overflow:ellipsis}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.local{font-family:var(--typography-font-family-sans);font-size:var(--fs-md);color:var(--color-content-default-secondary)}
.q{padding:22px 0 18px;border-top:1px solid var(--ink-10)}
.q:first-of-type{border-top:0}
.prose .q h3{margin-top:0;display:flex;gap:10px;align-items:baseline}
.q-n{font-family:var(--typography-font-family-sans);font-size:var(--fs-md);font-weight:600;color:var(--color-content-default-secondary);font-variant-numeric:tabular-nums;min-width:1.4em}
.prose .q-why,.prose .q-bet{font-family:var(--typography-font-family-sans);font-size:var(--fs-md);line-height:1.5;margin:8px 0 0;color:var(--color-content-default-secondary)}
.prose .q-bet{color:var(--color-content-default)}
.q-bet b{font-weight:600;margin-right:8px}
.opts{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.opt{position:relative;display:inline-flex}
.opt input{position:absolute;inset:0;opacity:0;margin:0;cursor:pointer}
.opt span{display:inline-flex;align-items:center;height:var(--ctl-h);padding:0 var(--spacing-250);border:1px solid var(--color-border-default);border-radius:var(--radius-sm);background:var(--color-background-elevation-raised);font-family:var(--typography-font-family-sans);font-size:var(--fs-sm);font-weight:500;color:var(--color-content-default);white-space:nowrap}
.opt:hover span{background:var(--color-background-default-hover)}
.opt input:checked+span{background:var(--color-background-brand-muted);border-color:var(--color-content-brand);color:var(--color-content-on-brand-muted)}
.opt input:focus-visible+span{outline:var(--focus-ring-width) solid var(--focus-ring-color);outline-offset:var(--focus-ring-offset)}
.opt input:disabled{cursor:default}
.q-foot{display:flex;align-items:center;gap:var(--spacing-300);margin-top:8px;min-height:var(--ctl-h)}
.q-comment{font-family:var(--typography-font-family-sans);margin-left:calc(-1 * var(--spacing-250))}
.q-comment svg{margin-right:6px}
.q-state{margin-left:auto;font-family:var(--typography-font-family-sans);font-size:var(--fs-xs);color:var(--color-content-default-secondary);font-variant-numeric:tabular-nums}
.q-state[data-tone="warn"]{color:var(--color-content-utility-warning)}
.prose .q-note{display:block;width:100%;margin-top:12px;min-height:2.6em;padding:6px 10px;border:1px solid var(--color-border-default-subtle);border-radius:var(--radius-sm);background:var(--color-background-elevation-raised);color:var(--color-content-default);font-family:var(--typography-font-family-sans);font-size:var(--fs-md);line-height:1.45;resize:vertical}
.q-note:hover{border-color:var(--color-border-default)}
.q-note:focus-visible{outline:var(--focus-ring-width) solid var(--focus-ring-color);outline-offset:1px}
.ticks li[data-answered] span{background:var(--color-content-default)}
"""

data = json.dumps({"questions": [q[0] for q in QUESTIONS] + [d[0] for d in DIRECTIONS]})
page_js = r"""
(() => {
  const IDS = __DATA__.questions;
  const KEY = 'draft-mode-decisions';
  const state = {};           // id -> {choice, note}
  const writing = {};         // id -> the write in flight, so writes to one doc never overlap
  const timers = {};
  let db = null, me = null, local = false;
  const $ = (s, r = document) => r.querySelector(s);
  const card = (id) => document.getElementById('q-' + id);
  const stamp = (id, text, tone) => { const el = $(`[data-state-for="${id}"]`); if (el) { el.textContent = text; tone ? el.dataset.tone = tone : delete el.dataset.tone; } };
  const fmt = (iso) => { try { return new Date(iso).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }); } catch { return ''; } };

  function paint(id) {
    const s = state[id] || {};
    const el = card(id);
    if (!el) return;
    el.querySelectorAll('input[type=radio]').forEach((r) => { r.checked = r.value === s.choice; });
    const note = el.querySelector('.q-note');
    if (note && document.activeElement !== note && !timers[id]) note.value = s.note || '';
    if (s.updatedAt) stamp(id, 'Saved ' + fmt(s.updatedAt));
    markTicks();
  }
  function markTicks() {
    const hs = [...document.querySelectorAll('#doc h2[id],#doc h3[id],#doc h4[id]')];
    const ticks = [...document.querySelectorAll('#ticks li')];
    hs.forEach((h, i) => { const id = h.id.startsWith('h-') ? h.id.slice(2) : null; if (ticks[i]) ticks[i].toggleAttribute('data-answered', !!(id && state[id] && state[id].choice)); });
  }

  function readLocal() { try { return JSON.parse(localStorage.getItem(KEY) || '{}'); } catch { return {}; } }
  function writeLocal() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* blocked: this visit only */ } }

  async function save(id) {
    const body = { choice: state[id].choice || null, note: state[id].note || '', updatedAt: new Date().toISOString() };
    if (me) body.by = me;
    state[id] = { ...state[id], updatedAt: body.updatedAt };
    if (local || !db) { writeLocal(); stamp(id, 'Saved in this browser'); markTicks(); return; }
    stamp(id, 'Saving');
    const prev = writing[id] || Promise.resolve();
    const next = prev.catch(() => {}).then(() => db.doc('answers/' + id).set(body));
    writing[id] = next;
    try { await next; if (writing[id] === next) stamp(id, 'Saved ' + fmt(body.updatedAt)); }
    catch (e) {
      if (e && e.code === 'invalid_argument') { readOnly(); stamp(id, 'Not saved: this view can read only', 'warn'); }
      else stamp(id, 'Not saved', 'warn');
    }
    markTicks();
  }
  function readOnly() { document.querySelectorAll('.opt input, .q-note').forEach((el) => { el.disabled = true; }); }

  document.addEventListener('change', (e) => {
    const r = e.target.closest('input[type=radio]');
    if (!r) return;
    const id = r.name;
    state[id] = { ...(state[id] || {}), choice: r.value };
    void save(id);
  });
  document.addEventListener('input', (e) => {
    const t = e.target.closest('.q-note');
    if (!t) return;
    const id = t.dataset.noteFor;
    state[id] = { ...(state[id] || {}), note: t.value };
    clearTimeout(timers[id]);
    stamp(id, 'Editing');
    timers[id] = setTimeout(() => { delete timers[id]; void save(id); }, 900);
  });
  document.addEventListener('focusout', (e) => {
    const t = e.target.closest && e.target.closest('.q-note');
    if (!t || !timers[t.dataset.noteFor]) return;
    const id = t.dataset.noteFor;
    clearTimeout(timers[id]); delete timers[id]; void save(id);
  });

  // Until the store answers, the page shows whatever this browser kept; the store then wins.
  Object.assign(state, readLocal());
  IDS.forEach(paint);

  const use = (name) => (window.claude && window.claude.use ? window.claude.use(name).catch(() => null) : Promise.resolve(null));

  use('user').then(async (user) => { try { me = user ? await user.id() : null; } catch { me = null; } });

  use('db').then((d) => {
    if (!d) { local = true; const n = document.getElementById('local'); if (n) n.hidden = false; return; }
    db = d;
    db.collection('answers').onSnapshot((snap) => {
      snap.docs.forEach((doc) => {
        if (!IDS.includes(doc.id)) return;
        const v = doc.data() || {};
        state[doc.id] = { choice: v.choice || undefined, note: typeof v.note === 'string' ? v.note : '', updatedAt: v.updatedAt };
        paint(doc.id);
      });
    }, () => { stampAll('Not saving: reload to reconnect', 'warn'); });
  });
  function stampAll(t, tone) { IDS.forEach((id) => stamp(id, t, tone)); }

  // Comment on a question: the claude.ai composer, anchored to its card (send it to Claude from there).
  use('comments').then((c) => {
    if (!c) return;
    document.querySelectorAll('.q-comment').forEach((b) => {
      b.hidden = false;
      b.addEventListener('click', async () => {
        try { await c.openComposer({ element: card(b.dataset.commentFor) }); }
        catch (e) { if (e && (e.code === 'unavailable' || e.code === 'not_granted' || e.code === 'capability_disabled')) document.querySelectorAll('.q-comment').forEach((x) => { x.hidden = true; }); }
      });
    });
  });
  setTimeout(markTicks, 0);
})();
""".replace("__DATA__", data)

body = f"""
<h1 id="top">{TITLE}</h1>
<p class="meta">2026-10-27</p>
<p>From <a href="{STUDY}">What a Draft Is</a>.</p>
<p class="local" id="local" hidden>Answers stay in this browser here; open the page in Claude to save them where Claude can read them.</p>
<h2 id="questions">Questions</h2>
{qs}
<h2 id="directions">Directions</h2>
{dirs}
"""

head = kit.open_page(TITLE, "Beacon", page_css)
head = head[head.index("<title>"):].replace("</head>\n<body>\n", "")
head = head.replace('<span>Beacon</span>', '<span>Beacon</span>' + kit.ICON_CHEV + '<span>Plans as a repo</span>', 1)
tail = kit.close_page("").replace("</body>\n</html>\n", "")
# The kit's rail script runs first (it builds the ticks this page marks), then the page's own.
tail = tail.replace("</script>", "</script>\n<script>" + page_js + "</script>", 1)
open(OUT, "w", encoding="utf-8").write(head + body + tail)
print(OUT, os.path.getsize(OUT))
