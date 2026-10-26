// SCORM 2004 4th edition, from the engine's side of the wall.
//
// Every engine ships as a single SCO. It reports whether the learner
// finished, what they scored, and enough state to put them back where they
// were. It also reports each decision as a cmi.interactions record (what was
// asked, what the learner picked, whether that was right, how long it took),
// so an LMS report can show where many learners go wrong. An engine never
// needs to know a data-model key exists.
//
// Two rules this file exists to enforce:
//
//   1. No backend. There is no fetch, no XHR, no endpoint here. SCORM talks to
//      a JavaScript object the LMS put in a parent window, which is why a
//      package needs no server of ours behind it. See docs/adr/0001. (A page
//      pulling a library off a CDN is a different thing and is fine.)
//   2. No LMS is not an error. Opened from a file, a dev server or a preview,
//      every call below becomes a no-op and the engine runs exactly as it
//      does in an LMS. An engine must never branch on "am I in SCORM".
/** SCORM 2004 4th ed. SPM for cmi.suspend_data. Beyond it, an LMS may truncate. */
export const SUSPEND_LIMIT = 64000;
/**
 * Find the API object. The LMS opens the SCO in a frame or a popup and hangs
 * `API_1484_11` on an ancestor, so the search is: up the frame chain, then the
 * opener, then the opener's chain.
 *
 * ponytail: depth-capped walk rather than the full ADL reference algorithm.
 * The cap is what stops a self-referencing `window.parent` spinning forever.
 */
function findApi(from, depth = 0) {
    if (!from || depth > 20)
        return null;
    try {
        const found = from.API_1484_11;
        if (found)
            return found;
        const up = from.parent && from.parent !== from ? from.parent : null;
        return findApi(up, depth + 1) ?? (depth === 0 ? findApi(from.opener ?? null, 1) : null);
    }
    catch {
        // A cross-origin parent can deny property access. The engine remains
        // usable in offline mode when the LMS API cannot be reached.
        return null;
    }
}
/** Every call is a no-op and `resumeData()` is always null. */
const OFFLINE = {
    connected: false,
    resumeData: () => null,
    save: () => { },
    finish: () => { },
    reload: () => { },
    record: () => { },
    progress: () => { },
};
/** When the session this page carries on began, kept across the engine's own reloads for cmi.session_time. */
const STARTED_KEY = 'scorm.started';
function session() {
    try {
        return typeof sessionStorage === 'undefined' ? null : sessionStorage;
    }
    catch {
        return null;
    }
}
/**
 * Connect once, at engine start. Returns the offline stub when there is no
 * LMS, so the caller never has to null-check.
 */
export function connectScorm() {
    const api = typeof window === 'undefined' ? null : findApi(window);
    if (!api)
        return OFFLINE;
    // 103 is "already initialized": the engine reloaded its own page (see reload()), and this page carries on in the
    // session the first one opened.
    const opened = api.Initialize('') === 'true';
    const continuing = !opened && api.GetLastError() === '103';
    if (!opened && !continuing)
        return OFFLINE;
    const store = session();
    const kept = continuing ? Number(store?.getItem(STARTED_KEY)) : NaN;
    const started = Number.isFinite(kept) && kept > 0 ? kept : Date.now();
    try {
        store?.removeItem(STARTED_KEY);
    }
    catch { /* nothing kept */ }
    let terminated = false;
    let reloading = false;
    // A completed attempt stays completed: a replay, or a reload after the finish, never sets it back to incomplete.
    let finished = api.GetValue('cmi.completion_status') === 'completed';
    const set = (key, value) => api.SetValue(key, value) === 'true';
    // Records carry on from the ones already in this attempt (a resumed attempt, or this page after a reload).
    let interactions = Number(api.GetValue('cmi.interactions._count')) || 0;
    let interactionsFull = false;
    // Resume only counts if the LMS says this is a resumed attempt. A fresh
    // attempt can still carry stale suspend_data on some LMSs; honouring it
    // would silently drop a learner into a run they thought they had restarted.
    // Carrying on after the engine's own reload, what it saved is this visit's and always counts.
    const entry = api.GetValue('cmi.entry');
    const suspended = api.GetValue('cmi.suspend_data');
    const resume = (continuing || entry === 'resume') && suspended ? suspended : null;
    // Until the engine says otherwise, an interrupted run is one to come back
    // to rather than one to start over.
    if (!finished) {
        set('cmi.exit', 'suspend');
        set('cmi.completion_status', 'incomplete');
        api.Commit('');
    }
    const close = () => {
        if (terminated)
            return;
        terminated = true;
        if (reloading) {
            api.Commit('');
            return;
        }
        set('cmi.session_time', iso8601(Date.now() - started));
        api.Commit('');
        api.Terminate('');
    };
    // The learner closing the tab is the normal way a run ends, not an error.
    // pagehide fires where beforeunload does not (mobile Safari, bfcache).
    window.addEventListener('pagehide', close);
    // An engine that saves on pagehide has to save before the session ends, so close moves behind every pagehide
    // listener added since. Never during a pagehide: a listener removed mid-event does not run.
    let moving = false;
    const closeLast = () => {
        if (moving)
            return;
        moving = true;
        setTimeout(() => {
            moving = false;
            if (terminated)
                return;
            window.removeEventListener('pagehide', close);
            window.addEventListener('pagehide', close);
        });
    };
    closeLast();
    return {
        connected: true,
        resumeData: () => resume,
        save(data) {
            if (terminated)
                return;
            // After the finish the exit stays normal: a finished attempt is not one to resume.
            if (!finished)
                set('cmi.exit', 'suspend');
            // Truncating here rather than letting the LMS do it silently: a
            // half-written state string would deserialize into a corrupt run.
            set('cmi.suspend_data', data.length > SUSPEND_LIMIT ? data.slice(0, SUSPEND_LIMIT) : data);
            api.Commit('');
            closeLast();
        },
        finish(result = {}) {
            if (terminated || finished)
                return;
            finished = true;
            set('cmi.completion_status', 'completed');
            if (result.score !== undefined && result.max !== undefined) {
                const min = result.min ?? 0;
                const span = result.max - min;
                set('cmi.score.min', String(min));
                set('cmi.score.max', String(result.max));
                set('cmi.score.raw', String(result.score));
                // scaled is what a 2004 gradebook actually reads. Clamped because the
                // data model rejects anything outside [-1, 1] and a rejected SetValue
                // would leave the attempt with no grade at all.
                if (span > 0)
                    set('cmi.score.scaled', String(clamp((result.score - min) / span, -1, 1)));
            }
            if (result.passed !== undefined)
                set('cmi.success_status', result.passed ? 'passed' : 'failed');
            // A finished run is not a suspended one: the next launch starts clean.
            set('cmi.exit', 'normal');
            set('cmi.suspend_data', '');
            api.Commit('');
        },
        reload() {
            if (terminated)
                return;
            reloading = true;
            try {
                store?.setItem(STARTED_KEY, String(started));
            }
            catch { /* session_time then counts from the reload */ }
        },
        record(i) {
            if (terminated || interactionsFull)
                return;
            const n = `cmi.interactions.${interactions}.`;
            // The id goes first and decides whether there is room: an LMS that holds no more records refuses it, and every
            // record after would be refused too.
            if (!set(`${n}id`, identifier(i.id, 4000))) {
                interactionsFull = true;
                return;
            }
            interactions++;
            const picked = list(i.response);
            // Each right answer is one pattern: a pick-many step has one pattern of several ids, an any-of step several.
            const patterns = i.anyCorrect?.length ? list(i.anyCorrect).map((x) => [x]) : i.correct === undefined ? [] : [list(i.correct)];
            set(`${n}type`, 'choice');
            set(`${n}timestamp`, new Date().toISOString().replace(/\.\d+Z$/, 'Z'));
            list(i.objectives ?? []).forEach((o, k) => set(`${n}objectives.${k}.id`, o));
            patterns.forEach((p, k) => set(`${n}correct_responses.${k}.pattern`, p.join('[,]')));
            set(`${n}learner_response`, picked.join('[,]'));
            set(`${n}result`, i.result ?? (patterns.length ? (patterns.some((p) => same(picked, p)) ? 'correct' : 'incorrect') : 'neutral'));
            if (i.latencyMs !== undefined && Number.isFinite(i.latencyMs))
                set(`${n}latency`, iso8601(i.latencyMs, true));
            if (i.description)
                set(`${n}description`, i.description.replace(/\s+/g, ' ').trim().slice(0, 250));
            api.Commit('');
        },
        progress({ location, measure }) {
            if (terminated)
                return;
            if (location !== undefined)
                set('cmi.location', location.slice(0, 1000));
            // A finished attempt is all the way done, whatever a replay says.
            if (measure !== undefined && Number.isFinite(measure))
                set('cmi.progress_measure', String(finished ? 1 : Math.round(clamp(measure, 0, 1) * 1000) / 1000));
            api.Commit('');
        },
    };
}
/**
 * An id the data model takes. Ids are URIs, so anything outside the safe URI characters (spaces first) becomes a
 * hyphen; an LMS rejects the whole record over one space. Choice responses are short ids, 250 at most.
 */
function identifier(raw, max = 250) {
    const id = raw.trim().replace(/[^A-Za-z0-9._~:\/-]+/g, '-').replace(/^-+|-+$/g, '');
    return (id || 'none').slice(0, max);
}
/** Option ids as the choice type wants them: identifiers, each once. */
function list(v) {
    return [...new Set((typeof v === 'string' ? [v] : v).map((x) => identifier(x)))];
}
/** Same picks, order aside: a pick-many step is right when the set matches. */
function same(a, b) {
    return a.length === b.length && a.every((x) => b.includes(x));
}
function clamp(n, lo, hi) {
    return n < lo ? lo : n > hi ? hi : n;
}
/** Milliseconds as the ISO 8601 duration cmi.session_time requires. `fine` keeps hundredths of a second. */
export function iso8601(ms, fine = false) {
    const total = Math.max(0, fine ? Math.round(ms / 10) / 100 : Math.round(ms / 1000));
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = Math.round((total % 60) * 100) / 100;
    return `PT${h > 0 ? `${h}H` : ''}${m > 0 ? `${m}M` : ''}${s}S`;
}
