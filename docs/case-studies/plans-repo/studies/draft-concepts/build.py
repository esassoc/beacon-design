#!/usr/bin/env python3
"""Builds what-a-draft-is.html: the draft-mode research study, on Andy's artifact kit (andrewlovseth/esa,
reference/artifact-kit). Run with the kit on the path: python3 build.py <esa checkout>."""
import os, sys

ESA = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/Dev/esa")
sys.path.insert(0, os.path.join(ESA, "reference", "artifact-kit"))
import kit, annotated_shot as ash  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "what-a-draft-is.html")
TITLE = "What a Draft Is"

shot_css, shot_js = ash.assets()
page_css = """
/* The study's own glue, tokens only: the two-axis table reads as a grid, its corner cell empty. */
.axes table{table-layout:fixed;width:100%}
.axes th:first-child{width:22%}
.axes td,.axes tbody th{vertical-align:top}
.axes td b{display:block;font-weight:600;margin-bottom:2px}
.dir{margin-top:2.5em}
.dir dl{display:grid;grid-template-columns:8.5em minmax(0,1fr);gap:.5em 1em;margin:1em 0 0}
.dir dt{font-family:var(--typography-font-family-sans);font-size:var(--fs-md);font-weight:600;color:var(--color-content-default-secondary);padding-top:2px}
.dir dd{margin:0}
@media (max-width:560px){.dir dl{grid-template-columns:minmax(0,1fr)}.dir dt{padding-top:.5em}}
.src{font-family:var(--typography-font-family-sans);font-size:var(--fs-md);line-height:1.5}
.src li+li{margin-top:.25em}
"""


def shot(file, crop, alt, callouts=(), caption=None):
    s = {"file": file, "w": 1440, "h": 900, "alt": alt, "crop": list(crop), "callouts": [dict(rect=r, title=t, text=x) for r, t, x in callouts]}
    if file == "round-one.png":
        s["w"], s["h"] = 1450, 910
    if caption:
        s["caption"] = caption
    return ash.render(s, HERE, layout="under")


def direction(id_, title, rows):
    dl = "".join(f"<dt>{k}</dt><dd>{v}</dd>" for k, v in rows)
    return f'<section class="dir"><h3 id="{id_}">{title}</h3><dl>{dl}</dl></section>'


body = f"""
<h1 id="top">{TITLE}</h1>
<p class="meta">2026-10-27</p>
<p>The first round dressed the draft in pencil, graph paper, a dark room and a workbench, and never asked what a draft is. This round starts there: what "draft" has meant in other tools, how those tools tell reading from working, and which mistakes a draft has to prevent in a plan that other people report from.</p>

<h2 id="meanings">Five Things a Draft Has Meant</h2>
<div class="tbl"><table>
<thead><tr><th>A draft as</th><th>What it is</th><th>Where it comes from</th></tr></thead>
<tbody>
<tr><td class="short"><b>A place</b></td><td>A separate copy you work in, then merge back.</td><td>Git branches. Figma branches. Primavera P6 Reflections: a copy of the project with a What-if status, whose chosen changes merge back into the source. Salesforce sandboxes.</td></tr>
<tr><td class="short"><b>A layer</b></td><td>Changes laid over the original, owned by their author, accepted or rejected.</td><td>Google Docs Suggesting. Word's Reviewing mode. Ink &amp; Switch's Upwelling, where every edit lives in a layer. Wikipedia's pending changes, where readers keep seeing the last accepted revision.</td></tr>
<tr><td class="short"><b>A status</b></td><td>The same object, not yet issued.</td><td>WordPress post status. GitHub draft pull requests, which can't merge until marked Ready for review. Drawing sets that are not for construction until issued for construction.</td></tr>
<tr><td class="short"><b>A scenario</b></td><td>A what-if, kept to compare against others.</td><td>Excel's Scenario Manager and its summary report. Oracle Primavera Cloud's scenarios: "what-if schedule scenarios to anticipate and evaluate alternative scheduling solutions."</td></tr>
<tr><td class="short"><b>A trial</b></td><td>A change that won't last unless you keep it.</td><td>Unity's Play mode. <code>terraform plan</code> before <code>apply</code>. Jef Raskin's quasimodes, which last only while you hold a key.</td></tr>
</tbody></table></div>
<p>Beacon's draft is all five at once. It's a place (one per person), reviewed as a layer (the diff), shown as a status (Your draft), used for scenarios (trying dates), and entered by trial (any drag on Live starts one). No single look can carry five meanings, which is why last round's skins felt arbitrary: each one picked a meaning without saying so.</p>

<h2 id="signals">How Tools Tell Reading From Working</h2>
<div class="tbl"><table>
<thead><tr><th>Where</th><th>The signal</th></tr></thead>
<tbody>
<tr><td class="short">Word</td><td>A mode menu beside Share: Editing, Reviewing, Viewing. Viewing is read-only, and people with read access get only Viewing. Protected View is a yellow bar when you may enable editing, red when you may not.</td></tr>
<tr><td class="short">Google Docs</td><td>A mode control at top right: Editing, Suggesting, Viewing. Since 2015 viewers get a blue View only button in the toolbar and commenters a green one. Suggestions take their author's color; deletions are struck.</td></tr>
<tr><td class="short">Confluence</td><td>Reading is the published page; working is the editor and its toolbar. An Unpublished changes lozenge sits by the title, shown only to the people who made the changes. Close returns to the published page, and nothing is lost.</td></tr>
<tr><td class="short">Notion</td><td>No mode: every page is editable in place. Locked, in the breadcrumb, is a guardrail rather than a permission.</td></tr>
<tr><td class="short">Wikipedia</td><td>A padlock at top right that explains itself on hover. Pending edits wait in a dropdown by the title, while readers see the accepted revision.</td></tr>
<tr><td class="short">GitHub</td><td>A draft pull request looks different, notifies no code owners, and can't merge until someone marks it Ready for review.</td></tr>
<tr><td class="short">Figma</td><td>The branch is named beside the file name; users have asked for something louder. Dev Mode turns its toggle green.</td></tr>
<tr><td class="short">Unity</td><td>The whole editor is tinted in Play mode "to help you identify Play mode at a glance", because "you can reset some edited values when you exit Play mode."</td></tr>
<tr><td class="short">Stripe</td><td>Test data sits under a colored banner, with <code>/test/</code> in the address.</td></tr>
<tr><td class="short">Shopify</td><td>An unpublished theme's preview carries a bar that comes back on every page, so nobody takes it for the live store.</td></tr>
<tr><td class="short">Construction drawings</td><td>Status and revision live in every sheet's title block; a drawing is not for construction unless marked Issued for Construction. After issue, each change is clouded and tagged with a numbered delta.</td></tr>
<tr><td class="short">Microsoft Project</td><td>The Tracking Gantt draws the baseline as grey bars under the current ones.</td></tr>
<tr><td class="short">Carbon (IBM)</td><td>Read-only removes every interactive cue (hover, underline, chevrons, the pointer cursor) and keeps text at full contrast. Disabled is a different state, for things temporarily out of reach.</td></tr>
</tbody></table></div>

<h3 id="agree">What They Agree On</h3>
<ol>
<li><b>Status and editability are separate signals.</b> Status (issued, draft, test, locked) is a word by the title or a banner. Editability is shown by the tools: a toolbar, handles, a cursor. Carbon's read-only keeps everything legible and removes only the cues that say "you can change this."</li>
<li><b>Loudness follows the cost of a slip.</b> Unity tints the whole editor because Play mode edits vanish. Stripe bands test mode because it's money. Word turns its bar red when it won't let you edit. Confluence gets by with a small lozenge because nothing is lost.</li>
<li><b>Two cues, one where you're looking.</b> Nielsen Norman Group asks for at least two visual indicators of a mode. Raskin's definition is sharper: a state you aren't attending to is a mode. A planner's attention is on the bars, not the page header.</li>
<li><b>When the work travels, its status travels with it.</b> A drawing's status is printed in its title block on every sheet, not kept in the office it came from.</li>
<li><b>Light beats formal.</b> Upwelling made authors create a draft layer before any edit, and its own team later called that too formal. Their next prototype, Patchwork, keeps people editing the main document by default and lets them move an edit onto a branch afterward. Larry Tesler's licence plate read NO MODES.</li>
</ol>

<h2 id="slips">Where Beacon's Draft Slips</h2>
<p>Ranked by what the mistake costs.</p>
<ol>
<li><b>A draft read as the plan.</b> Dates from someone's draft end up in a status report or a note to CDFW. Nothing in the chart, a screenshot or an export says draft. In a compliance product this is the expensive one, and last round never touched it.</li>
<li><b>A draft nobody meant to start.</b> On Live a bar lifts and shows its grips under the pointer, and dragging it checks out your draft and turns the page into one. A curious drag becomes a mode.</li>
<li><b>Losing track of the view once you scroll.</b> The band lives in the head card, which scrolls away. Below it, Live and a draft are drawn the same.</li>
<li><b>Thinking you published.</b> Recoverable: the draft waits in the index and the branch menu.</li>
</ol>
{shot("now-live-hover.png", [296, 236, 1144, 664], "Live, with the Acoustic tag bar hovered: it lifts and shows its grips, and the readout opens.", [
    ([712, 722, 115, 34], "On Live, a bar invites the drag", "It lifts and shows its grips under the pointer, exactly as in a draft. Dragging it starts your draft."),
    ([1288, 326, 106, 24], "The only sign this is the issued plan", "Rev 7, in small type at the end of the status line."),
    ([1266, 265, 126, 36], "The deliberate way in", "Edit in a draft opens the same draft the bar does."),
])}
{shot("now-draft-scrolled.png", [296, 52, 1144, 800], "A draft, scrolled into the chart: the head card and band are gone, and the moved bars look like Live's.", [
    ([779, 231, 160, 68], "Two bars your draft moved", "Drawn exactly as Live draws them. Nothing at the bars says draft."),
    ([312, 54, 1036, 16], "The band is above the fold", "It scrolled away with the head card, and every sign of the draft went with it."),
])}

<h2 id="axes">Two Axes, Not One Mode</h2>
<p>The precedents point the same way: stop treating a draft as one mode, and split it into the two things tools actually signal. One is whose version this is: the issued plan or a draft. The other is whether you're working on it or reading it.</p>
<div class="tbl axes"><table>
<thead><tr><th></th><th>Reading</th><th>Working</th></tr></thead>
<tbody>
<tr><th>Issued</th><td><b>Live</b>What everyone reads and reports from.</td><td><b>Trying a change on Live</b>Held, previewed, springs back when you let go.</td></tr>
<tr><th>Draft</th><td><b>Someone else's draft</b>Read-only, copyable.</td><td><b>Your draft</b>Where you move dates.</td></tr>
</tbody></table></div>
<p>Status is said in words, twice: in the band at the top, and in a title block in the chart's own corner, where the outline heading sits now. Live reads Issued, Rev 7, Oct 20, Alex Rivera; a draft reads Draft, from Rev 7, not issued. Working is said by the marks themselves. In a working view bars have depth, lift and grips, and the cursor grabs. In a reading view they print flat, the cursor is an arrow, and hover only reads out. The tactile look from the density round stops being a style and becomes the signal for "you can move this."</p>

<h2 id="directions">Directions</h2>
{direction("issued", "A. Issued and Working", [
    ("A draft is", "Your working copy. Live is the issued plan, a document you read."),
    ("Live", "Prints flat: no lift, no grips, an arrow cursor, hover reads out. The chart's corner says Issued, Rev 7."),
    ("Your draft", "Stands up: bars gain depth and grips, the band names the draft, the corner says Draft, not issued. What you changed carries a light mark; last round's pencil earns its place here as content, not as the mode signal."),
    ("Entering", "Edit in a draft, or keeping a trial (B). The bars rise into objects. No color changes."),
    ("Leaving", "Publish settles them back into print as Rev 8. Discard drops them flat where Live has them."),
    ("Review", "Two documents compared: the draft's changes against Live's print."),
    ("Precedent", "Word's Viewing and Editing. Confluence's page and editor. Carbon's read-only."),
    ("Costs", "One more step to start a draft than today's drag-anywhere. Exact fixes made on Live (a dependency's lag, an unlink) need their own small way in."),
])}
{direction("try", "B. Try Before You Draft", [
    ("A draft is", "A change you decided to keep. Trying isn't drafting."),
    ("On Live", "Press and hold a bar, or hold Alt and drag: it lifts, the cascade shows, and the readout gives what moves and the new finish. Let go and it springs back. Nothing was created."),
    ("Keeping", "Keep, in the readout, moves the trial into your draft after the fact, the way Patchwork moves an edit onto a branch."),
    ("Precedent", "Raskin's quasimode: a mode that lasts only while you hold it can't be forgotten. <code>terraform plan</code> before <code>apply</code>."),
    ("Costs", "A held gesture is less discoverable. Touch needs a long-press. The readout has to be good enough to decide from."),
])}
{direction("scenarios", "C. Drafts as Scenarios", [
    ("A draft is", "A proposal, judged by what it does, often one of several."),
    ("In a draft", "The chart shows the consequence against Live: Live's finish as a line beside the draft's, agency milestones that cross a landmark flagged, money that moves between fiscal years."),
    ("Comparing", "Two drafts side by side on the review screen: Excel's scenario summary, for schedules."),
    ("Publishing", "Needs an approver when a draft moves an agency milestone, as GitHub holds a draft until it's ready for review and Wikipedia holds pending edits."),
    ("Precedent", "P6 Reflections with their What-if status. Oracle Primavera Cloud scenarios. Excel's Scenario Manager."),
    ("Costs", "Which milestones are agency commitments, and which dates count, is domain knowledge Beacon doesn't hold yet."),
])}
{direction("block", "D. The Title Block", [
    ("A draft is", "An unissued document, and it says so wherever it goes."),
    ("On the chart", "The corner becomes a title block: status, revision, who, when. It stays pinned with the axis as the chart scrolls, so it's in view at the bars."),
    ("Exports", "Prints and exports of a draft carry Draft, not issued, from Rev 7 across the chart, as drawing sets carry Not for Construction."),
    ("Publishing", "Turns the title block to Issued, Rev 8."),
    ("Precedent", "Drawing title blocks, issue stamps, revision deltas. DRAFT watermarks."),
    ("Costs", "A pinned corner and an export stamp. Little else."),
])}

<h3 id="set-aside">Set Aside: Suggestions on Live</h3>
<p>Google Docs' model, suggestions laid on the live document and accepted one by one, breaks on a schedule. One drag cascades through every successor, so a single suggestion is a dense set of changes; a writer Upwelling interviewed put the result plainly: "I hate Track Changes!" And accepting one moved bar without the bars it pushed breaks the network. Schedule changes have to be accepted as a coherent set, and a coherent set is a draft.</p>

<h3 id="round-one">Where Last Round Lands</h3>
{shot("round-one.png", [0, 0, 1450, 910], "The four concepts from the first round, after the same drag: pencil, graph paper, night, bench.", caption="Last round, after the same drag: pencil and graph paper (top), night and bench (bottom).")}
<p>Pencil belongs inside A, as the mark for what you changed. Night and graph paper are surface tints, Unity's answer to Unity's problem: worth it where a slip costs what a lost Play mode edit costs. Here the costly slip is a draft read as the plan, and a tint on screen doesn't follow a screenshot out the door. Bench is A's working view taken to the whole window; worth another look only if drafts turn into long sessions.</p>

<h2 id="recommendation">Recommendation</h2>
<p><b>A, B and D now; C as the next study.</b> Together they cover the slips in order of cost. D labels a draft wherever it travels. A makes Live read as issued and your draft read as yours, at the bars where you're looking. B lets people try a date without starting anything. The band stays as the draft's strip at the top, and no longer has to do the whole job alone.</p>

<h2 id="sources">Sources</h2>
<ul class="src">
<li><a href="https://support.microsoft.com/en-us/office/document-modes-in-word-263564df-4a7d-4526-9bbd-1186dc1b2915">Microsoft: Document modes in Word</a>; <a href="https://support.microsoft.com/office/d6f09ac7-e6b9-4495-8e43-2bbcdbcb6653">What is Protected View?</a></li>
<li><a href="https://support.google.com/docs/answer/6033474">Google Docs Help: suggest edits</a>; <a href="https://workspaceupdates.googleblog.com/2015/07/clearer-indication-of-and-access-in.html">Workspace Updates, July 2015: clearer indication of view and comment access</a></li>
<li><a href="https://confluence.atlassian.com/confcloud/create-edit-and-publish-724764831.html">Confluence Cloud: create, edit and publish</a></li>
<li><a href="https://www.notion.com/en-gb/help/collaborate-within-a-workspace">Notion: collaborate in a workspace (page lock)</a></li>
<li><a href="https://en.wikipedia.org/wiki/Wikipedia:Pending_changes">Wikipedia: Pending changes</a>; <a href="https://en.wikipedia.org/wiki/Wikipedia:Protection_policy">Protection policy</a></li>
<li><a href="https://github.blog/changelog/2019-02-14-draft-pull-requests/">GitHub changelog, 2019-02-14: draft pull requests</a></li>
<li><a href="https://help.figma.com/hc/en-us/articles/5693123873687">Figma: review branch changes</a>; <a href="https://forum.figma.com/suggest-a-feature-11/clearly-highlight-active-branches-53600">forum request for a clearer branch indicator</a></li>
<li><a href="https://docs.unity.com/en-us/engine/6000.6/manual/unity-editor/editor-settings-reference/preferences/colors">Unity Manual: Colors preferences (Playmode tint)</a></li>
<li><a href="https://docs.stripe.com/test-mode">Stripe: test mode</a>; <a href="https://docs.stripe.com/sandboxes/dashboard/manage">sandboxes</a></li>
<li><a href="https://community.shopify.com/t/how-can-i-remove-the-preview-bar-from-my-themes/9690">Shopify Community: the theme preview bar</a></li>
<li><a href="https://dpw.hawaiicounty.gov/home/showpublisheddocument/306057/638163768282230000">Hawaii County DPW: clouds and deltas on revision sets</a>; <a href="https://rightbrain.wrightengineers.com/2023/05/preliminary-not-for-construction.html">Wright Engineers: Preliminary, not for construction</a></li>
<li><a href="https://techcommunity.microsoft.com/discussions/project/baseline-finish-on-timeline/3486671/replies/3563259">Microsoft Tech Community: baseline bars in the Tracking Gantt</a></li>
<li><a href="https://carbondesignsystem.com/patterns/read-only-states-pattern/">Carbon: read-only states</a>; <a href="https://carbondesignsystem.com/patterns/disabled-states/">disabled states</a></li>
<li><a href="https://www.nngroup.com/articles/modes/">Nielsen Norman Group: Modes in user interfaces</a></li>
<li><a href="https://www.raskincenter.org/rchi/core-principles">Raskin Center: core principles of humane interface design</a>; <a href="https://en.wikipedia.org/wiki/Larry_Tesler">Larry Tesler</a></li>
<li><a href="https://www.inkandswitch.com/upwelling/">Ink &amp; Switch: Upwelling</a>; <a href="https://www.inkandswitch.com/patchwork/notebook/2024-version-control/06/">Patchwork notebook: simple branching</a></li>
<li><a href="https://tensix.com/how-to-use-primavera-p6-reflections/">Ten Six: how to use Primavera P6 Reflections</a>; <a href="https://docs.oracle.com/cd/E80480_01/English/user_guides/schedule_management_user_guide/90786.htm">Oracle Primavera Cloud: schedule overview</a></li>
<li><a href="https://support.microsoft.com/en-us/office/switch-between-various-sets-of-values-by-using-scenarios-2068afb1-ecdf-4956-9822-19ec479f55a2">Microsoft: Excel scenarios</a>; <a href="https://spacelift.io/blog/terraform-plan">Spacelift: terraform plan</a></li>
</ul>
"""

head = kit.open_page(TITLE, "Beacon", page_css + shot_css)
# The skeleton is added at publish: keep only the title, the style and the page frame.
start = head.index("<title>")
head = head[start:].replace("</head>\n<body>\n", "")
head = head.replace('<span>Beacon</span>', '<span>Beacon</span>' + kit.ICON_CHEV + '<span>Plans as a repo</span>', 1)
tail = kit.close_page(shot_js).replace("</body>\n</html>\n", "")
open(OUT, "w", encoding="utf-8").write(head + body + tail)
print(OUT, os.path.getsize(OUT))
