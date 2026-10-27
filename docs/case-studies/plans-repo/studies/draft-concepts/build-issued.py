#!/usr/bin/env python3
"""Builds issued-and-working.html: round 1 of directions A and D from What a Draft Is, the running prototype's
captures with numbered callouts, on Andy's artifact kit. Run: python3 build-issued.py <esa checkout>."""
import os, sys

ESA = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser("~/Dev/esa")
sys.path.insert(0, os.path.join(ESA, "reference", "artifact-kit"))
import kit, annotated_shot as ash  # noqa: E402

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "issued-and-working.html")
TITLE = "Issued and Working"
PAGE = [296, 236, 1144, 664]


def shot(file, crop, alt, callouts, w=1440, h=900, caption=None):
    s = {"file": file, "w": w, "h": h, "alt": alt, "callouts": [dict(rect=r, title=t, text=x) for r, t, x in callouts]}
    if crop:
        s["crop"] = list(crop)
    if caption:
        s["caption"] = caption
    return ash.render(s, HERE, layout="under")


css, js = ash.assets()
body = f"""
<h1 id="top">{TITLE}</h1>
<p class="meta">2026-10-27</p>
<p>Directions A and D from <a href="https://claude.ai/artifact/RnhMkS1CiDm8T9WzWnuoSR">What a Draft Is</a>, on the running chart. Live is the issued plan, printed flat and read-only; your draft is the working copy, where bars stand up and move; the chart's corner says which one you're looking at.</p>

<h2 id="live">Live</h2>
{shot("ad-live.png", PAGE, "Live: the chart's corner reads Issued, Rev 7, Oct 27, 2026; the bars are flat; Edit in a draft at top right.", [
    ([313, 490, 280, 32], "Issued, in the chart's own corner", "The revision and its date. It stays pinned with the axis while the rows scroll."),
    ([714, 722, 115, 34], "Live prints flat", "No gradient, shadow, lift or grips, and no dragging. Hover still reads out."),
    ([1266, 265, 126, 36], "The one way into a draft", "A drag on Live no longer starts one."),
])}

<h2 id="draft">Your Draft</h2>
{shot("ad-draft.png", PAGE, "Your draft after one drag: the band names it, the corner reads Draft, not issued, from Rev 7, and the bars have depth.", [
    ([313, 248, 1094, 59], "The band names the draft and holds its actions", "The revision it's based on moved to the title block, so the band doesn't repeat it."),
    ([313, 495, 280, 32], "Draft, not issued, from Rev 7", "On the sunken neutral the band uses, so the two read as one statement."),
    ([779, 732, 160, 58], "Your draft's bars stand up", "Gradient, shadow, grips on hover. The two this draft moved carry a dark edge."),
    ([640, 557, 700, 66], "Editing tools appear only here", "The planned windows' handles and the grab cursor belong to the working view."),
])}
{shot("ad-draft-scrolled.png", [296, 52, 1144, 800], "The same draft scrolled deep into the rows: the corner still reads Draft, not issued, from Rev 7.", [
    ([313, 57, 280, 32], "Scrolled into the rows, it still says Draft", "The chart scrolls inside its frame, so the header and title block stay in view. Last round this view said nothing at all."),
])}

<h2 id="theirs">Someone Else's Draft</h2>
{shot("ad-theirs.png", PAGE, "Alex's draft, opened by someone who can publish: flat bars, the corner reads Alex's draft, Publish requested, and the band offers Review and publish.", [
    ([313, 248, 1094, 59], "Alex's draft, read-only", "Printed flat, like Live. Alex asked, and you can publish, so the action is Review and publish."),
    ([313, 495, 280, 32], "Publish requested", "Said where the draft is, as well as in the branch menu."),
])}

<h2 id="scenario">Without Publish Rights</h2>
{shot("ad-contrib-live.png", None, "Live for someone who can't publish: the door reads Make a scenario.", [
    ([947, 24, 140, 38], "Make a scenario", "The same door, named for what this person can do."),
], w=1110, h=250)}
{shot("ad-contrib-asked.png", None, "Their scenario after Ask to publish: the band shows Publish requested and the corner reads Scenario, Publish requested.", [
    ([18, 18, 156, 38], "Your scenario", "The branch menu and the title block both say scenario."),
    ([962, 24, 124, 26], "Asked", "Ask to publish becomes its state once pressed."),
    ([8, 258, 280, 30], "Scenario, Publish requested", "The request travels with the chart."),
], w=1110, h=380)}

<h2 id="review">Review</h2>
{shot("ad-review.png", PAGE, "The review screen: the compared chart's corner reads Draft, not issued, edit 1.", [
    ([649, 462, 300, 32], "The review chart says what it shows", "The To side of the comparison: Draft, not issued, edit 1; at Live it reads Issued."),
])}

<h2 id="stamp">A Stamp, for Partial Screenshots</h2>
{shot("ad-stamp.png", None, "A draft with a faint repeated stamp across the plot reading Draft, not issued.", [], w=1040, h=414,
      caption="Optional: a faint stamp across a draft's plot, so a screenshot that leaves out the corner still says draft.")}
"""

head = kit.open_page(TITLE, "Beacon", css)
head = head[head.index("<title>"):].replace("</head>\n<body>\n", "")
head = head.replace('<span>Beacon</span>', '<span>Beacon</span>' + kit.ICON_CHEV + '<span>Plans as a repo</span>', 1)
tail = kit.close_page(js).replace("</body>\n</html>\n", "")
open(OUT, "w", encoding="utf-8").write(head + body + tail)
print(OUT, os.path.getsize(OUT))
