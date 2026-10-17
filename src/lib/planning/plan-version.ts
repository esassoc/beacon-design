// Ported verbatim from Beacon.Web (shared/planning/plan-version.ts on origin/develop); only the import paths changed.
// A plan's version (BCN-1867): every plan write sends the version the page loaded, and the server refuses a stale one
// with a 409. Kept free of Angular so the URL matching and the copy are testable as plain functions.

/** The slice of an HttpRequest the URL matching reads (the mock server routes the same URLs). */
export interface HttpRequest<_T> { method: string; url: string }
import { escapeHtml } from "./model";
import type { PlanStatusDto } from "./model";

export type { PlanVersionConflictDto } from "./model";

/** The request header a plan write carries its loaded VersionToken in. */
export const PLAN_VERSION_HEADER = "X-Plan-Version";

/**
 * The version a write sends instead of the one on screen: a drawer's, whose form may hold an older plan than the page
 * now shows. Read when the write is actually sent, so a write queued behind another sends what that one left.
 */
export const PLAN_VERSION_OVERRIDE = { defaultValue: (): (() => string | null) | null => null };

const WRITE_METHODS: ReadonlySet<string> = new Set(["POST", "PUT", "DELETE"]);

/** `/projects/{projectID}/plans/{planID}` and anything under it, with or without the API's base path or a query. */
const PLAN_URL = /\/projects\/[^/?#]+\/plans\/([^/?#]+)(\/[^?#]*)?(?:[?#].*)?$/;

/** A preview (schedule-preview, shift-preview) only reads the plan, so it is not version-checked. */
const PREVIEW_SEGMENT_SUFFIX = "-preview";

/** The plan a request writes to, or null for a read, a preview, or a URL that isn't one plan's. */
export function planWriteTargetID(request: Pick<HttpRequest<unknown>, "method" | "url">): string | null {
    if (!WRITE_METHODS.has(request.method.toUpperCase())) return null;
    const match = PLAN_URL.exec(request.url);
    if (!match) return null;
    const lastSegment = (match[2] ?? "").split("/").at(-1) ?? "";
    if (lastSegment.endsWith(PREVIEW_SEGMENT_SUFFIX)) return null;
    return decodeURIComponent(match[1]);
}

/** The plan a GET of its whole detail reads, or null for any other request. */
export function planDetailReadTargetID(request: Pick<HttpRequest<unknown>, "method" | "url">): string | null {
    if (request.method.toUpperCase() !== "GET") return null;
    const match = PLAN_URL.exec(request.url);
    return match && !match[2] ? decodeURIComponent(match[1]) : null;
}

export const PLAN_VERSION_CONFLICT_HEADER = "This plan has changed";
export const PLAN_VERSION_CONFLICT_RELOAD_LABEL = "Reload";
const SOMEONE = "Someone";

/**
 * The refused save's dialog copy, naming who changed the plan when the server knows. The confirm dialog renders its
 * text as HTML, so the name is escaped.
 */
export function planVersionConflictText(updateUserName: string | null | undefined): string {
    return `${updateUserName ? escapeHtml(updateUserName) : SOMEONE} changed this plan since you opened it. Your change wasn't saved.`;
}

/** Who last changed the plan or one of its programs — whichever scope changed most recently. */
export function latestPlanUpdateUserName(status: PlanStatusDto): string | null {
    const scopes = [
        { date: status.PlanUpdateDate, name: status.PlanUpdateUserName },
        ...(status.Programs ?? []).map((program) => ({ date: program.UpdateDate, name: program.UpdateUserName })),
    ];
    let latest: { time: number; name: string | null | undefined } | null = null;
    for (const scope of scopes) {
        const time = scope.date ? Date.parse(scope.date) : Number.NaN;
        if (Number.isNaN(time)) continue;
        if (!latest || time > latest.time) latest = { time, name: scope.name };
    }
    return latest?.name || null;
}

/**
 * The toast another user's change raises: an editor learns who made it, a read-only viewer only that the plan moved
 * on. With no name to give, both read the read-only way.
 */
export function planUpdatedNotice(status: PlanStatusDto, planName: string, canUpdate: boolean): string {
    const updateUserName = canUpdate ? latestPlanUpdateUserName(status) : null;
    return updateUserName ? `${updateUserName} updated ${planName}` : `${planName} was updated`;
}

/** Told to whoever has a plan open when someone else deletes it. */
export function planDeletedNotice(planName: string): string {
    return `${planName} was deleted.`;
}
