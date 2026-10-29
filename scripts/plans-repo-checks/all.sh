#!/usr/bin/env bash
# Every plans-repo check in turn, one line each (2026-10-29). Needs `npx astro dev --port 4321` up. Warms the pages
# first, so the first check doesn't meet a module still compiling.
cd "$(dirname "$0")/../.."
for p in prototypes/plans-repo/ prototypes/plans-repo/plan/ prototypes/plans-repo/element/ prototypes/plans-repo/transmittal/ prototypes/plans-repo/inbox/; do curl -s -o /dev/null "http://localhost:4321/$p"; done
for f in setup editmodal edraft custom sheet revbudget links drawer outline budgetvis oblback orgowner health reminders table import access askloop plandelete download late people minors traps2 askdiff align windiff entrypoints orthogonal; do
  printf "%s: " $f; timeout 400 node scripts/plans-repo-checks/$f.mjs 2>&1 | grep -E "^FAIL|PASS, |Error:" | tr '\n' ' '; echo
done
for f in pub ids drafthead; do
  printf "%s: " $f; timeout 300 node scripts/plans-repo-checks/$f.mjs 2>&1 | grep -E "FAIL|ERRORS|errors|Error:" | tr '\n' ' '; echo
done
