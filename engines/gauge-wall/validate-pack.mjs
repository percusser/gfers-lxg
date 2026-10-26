// Validates a Gauge Wall content pack. [] means the pack is good.
// Plain node import, no DOM at import time (see content-packs/README.md).
import { bill, bestCommit } from './bill.js';

// Smallest gap, as a share of the best bill, that tells two answers apart.
const MIN_GAP = 0.03;

export function validatePack(pack) {
  const problems = [];
  const isStr = (v) => typeof v === 'string' && v.length > 0;
  const isNum = (v) => typeof v === 'number' && Number.isFinite(v);

  if (!pack || typeof pack !== 'object') return ['pack must be an object'];
  if (!isStr(pack.id)) problems.push('missing or empty "id"');
  if (!isStr(pack.title)) problems.push('missing or empty "title"');
  if (!isStr(pack.company)) problems.push('missing or empty "company" (the name on the contract)');
  if (!isNum(pack.overage) || pack.overage <= 1) problems.push('"overage" must be a number greater than 1');
  if (!isNum(pack.known) || pack.known < 1) problems.push('"known" must be a positive number of historical months');
  if (!isNum(pack.months) || pack.months <= pack.known) problems.push('"months" must be greater than "known"');

  if (!Array.isArray(pack.levers) || pack.levers.length !== 3) {
    problems.push('"levers" must be an array of exactly 3 — the wall has three fixed lever positions');
  } else {
    const ids = new Set();
    let termLength = null;
    pack.levers.forEach((L, i) => {
      const tag = `levers[${i}]`;
      if (!L || typeof L !== 'object') { problems.push(`${tag} must be an object`); return; }
      if (!isStr(L.id)) problems.push(`${tag}.id missing`);
      else if (ids.has(L.id)) problems.push(`${tag}.id "${L.id}" is not unique`);
      else ids.add(L.id);
      if (!isStr(L.name)) problems.push(`${tag}.name missing`);
      if (!isStr(L.unit)) problems.push(`${tag}.unit missing`);
      if (!isNum(L.rate) || L.rate <= 0) problems.push(`${tag}.rate must be a positive number`);
      if (!isStr(L.ink) || !/^#[0-9a-fA-F]{6}$/.test(L.ink)) problems.push(`${tag}.ink must be a "#rrggbb" color`);
      if (!Array.isArray(L.range) || L.range.length !== 2 || !isNum(L.range[0]) || !isNum(L.range[1]) || L.range[0] >= L.range[1]) {
        problems.push(`${tag}.range must be [min, max] with min < max`);
      }
      if (!isNum(L.step) || L.step <= 0) problems.push(`${tag}.step must be a positive number`);
      if (!Array.isArray(L.history) || !L.history.every(isNum)) problems.push(`${tag}.history must be an array of numbers`);
      else if (isNum(pack.known) && L.history.length !== pack.known) {
        problems.push(`${tag}.history must have exactly ${pack.known} entries (pack.known)`);
      }
      if (!Array.isArray(L.future) || !L.future.every(isNum)) problems.push(`${tag}.future must be an array of numbers`);
      else if (L.future.length === 0) problems.push(`${tag}.future must have at least one month`);
      else if (termLength === null) termLength = L.future.length;
      else if (L.future.length !== termLength) {
        problems.push(`${tag}.future has ${L.future.length} months, but another lever has ${termLength} — every lever must run the same term`);
      }
      for (const field of ['unitMeans', 'meters', 'ignores', 'catch', 'say']) {
        if (!isStr(L[field])) problems.push(`${tag}.${field} missing`);
      }
    });
    if (isNum(pack.months) && isNum(pack.known) && termLength != null && pack.months !== pack.known + termLength) {
      problems.push(`"months" (${pack.months}) must equal "known" + the future term length (${pack.known} + ${termLength})`);
    }
  }

  if (problems.length === 0) problems.push(...playChecks(pack));

  if (!Array.isArray(pack.plans)) problems.push('"plans" must be an array');
  else pack.plans.forEach((p, i) => {
    const tag = `plans[${i}]`;
    if (!p || typeof p !== 'object') { problems.push(`${tag} must be an object`); return; }
    if (!isNum(p.month)) problems.push(`${tag}.month must be a number`);
    else if (isNum(pack.months) && (p.month < 1 || p.month > pack.months)) problems.push(`${tag}.month must be within 1..${pack.months}`);
    if (!isStr(p.title)) problems.push(`${tag}.title missing`);
    if (!isStr(p.note)) problems.push(`${tag}.note missing`);
    if (p.until != null && (!isNum(p.until) || p.until < p.month)) problems.push(`${tag}.until must be a number >= month`);
  });

  // Word list (README "Words"): the screen calls Volume, Workload and Entity "pricing models" and the learner
  // "chooses" one, so learner-facing pack text may not bring back the wall's lever words for the same idea.
  const RETIRED = /\b(levers?|pull|pulls|pulled|pulling)\b/i;
  const texts = [
    ...(Array.isArray(pack.levers) ? pack.levers : []).flatMap((L, i) => L && typeof L === 'object'
      ? ['name', 'unit', 'unitMeans', 'meters', 'ignores', 'catch', 'say'].map(f => [`levers[${i}].${f}`, L[f]]) : []),
    ...(Array.isArray(pack.plans) ? pack.plans : []).flatMap((p, i) => p && typeof p === 'object'
      ? [[`plans[${i}].title`, p.title], [`plans[${i}].note`, p.note]] : []),
  ];
  for (const [where, t] of texts) {
    const m = typeof t === 'string' && t.match(RETIRED);
    if (m) problems.push(`${where} uses "${m[0]}"; say "pricing model" and "choose" (README "Words")`);
  }

  if (pack.theme != null) {
    if (typeof pack.theme !== 'object' || Array.isArray(pack.theme)) problems.push('"theme" must be an object');
    else {
      if (pack.theme.pack != null && !isStr(pack.theme.pack)) problems.push('"theme.pack" must be a string');
      if (pack.theme.colors != null && (typeof pack.theme.colors !== 'object' || Array.isArray(pack.theme.colors))) {
        problems.push('"theme.colors" must be an object of CSS custom property overrides');
      }
    }
  }

  return problems;
}

// Runs the wall's own bill (bill.js, also used by the screen) on the pack: one model must win clearly,
// at a commitment inside the knob's range, and fitting the past must not be the way to find it.
function playChecks(pack) {
  const out = [];
  const results = pack.levers.map((L, i) => {
    const tag = `levers[${i}]`;
    if (!Number.isInteger((L.range[1] - L.range[0]) / L.step)) {
      out.push(`${tag}.range: ${L.range[1] - L.range[0]} is not a whole number of steps of ${L.step}; make max minus min a multiple of step, or the top of the knob cannot be reached`);
    }
    const best = bestCommit(L, pack.overage);
    const past = bestCommit(L, pack.overage, L.history);
    if (best.commit === L.range[0] || best.commit === L.range[1]) {
      out.push(`${tag}: the best commitment (${best.commit}) sits at the ${best.commit === L.range[0] ? 'bottom' : 'top'} of range; widen range so the best answer is not the end of the knob`);
    }
    return { L, tag, best, past };
  });
  if (out.length) return out;

  const ranked = [...results].sort((a, b) => a.best.bill - b.best.bill);
  const [first, second] = ranked;
  const gap = (second.best.bill - first.best.bill) / first.best.bill;
  if (gap < MIN_GAP) {
    out.push(`levers: "${first.L.name}" wins by only ${(gap * 100).toFixed(1)} percent over "${second.L.name}" (${Math.round(first.best.bill)} against ${Math.round(second.best.bill)}); change the usage or rates so the best model wins by at least ${MIN_GAP * 100} percent`);
  }
  for (const r of results) {
    // Doing nothing: the bill at the lowest commitment on the knob must not be the best one.
    const atMin = bill(r.L, r.L.range[0], pack.overage);
    if (atMin <= r.best.bill) out.push(`${r.tag}: the lowest commitment on the knob already gives the best bill; a commitment is not worth thinking about, so change range or the future usage`);
  }
  // Fitting the past must lose. Check the winning model; it is the answer the learner is meant to reach.
  const fitBill = bill(first.L, first.past.commit, pack.overage);
  const fitGap = (fitBill - first.best.bill) / first.best.bill;
  if (first.past.commit === first.best.commit) {
    out.push(`${first.tag}: the best commitment on the known months alone (${first.past.commit}) is also the best for the months to come, so reading the chart is enough; change history or future so the coming months need a different commitment`);
  } else if (fitGap < MIN_GAP) {
    out.push(`${first.tag}: fitting the known months (${first.past.commit}) bills only ${(fitGap * 100).toFixed(1)} percent more than the best (${first.best.commit}); make the coming months differ more from the past so fitting the past visibly loses`);
  }
  return out;
}
