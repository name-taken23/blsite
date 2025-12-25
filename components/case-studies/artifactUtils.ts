import type { CaseStudy } from "@/lib/case-studies";
import type { ConstraintKind } from "@/components/visual/ConstraintIcon";

export const CONSTRAINT_KIND_LABEL: Record<ConstraintKind, string> = {
  latency: "Latency",
  cost: "Cost",
  reliability: "Reliability",
  security: "Security",
  compliance: "Compliance",
  risk: "Risk",
};

export function makeRefIdFromSlug(slug: string): string {
  const parts = slug
    .split("-")
    .map((p) => p.replace(/[^a-z0-9]/gi, ""))
    .filter(Boolean);

  const first = (parts[0] ?? "").toUpperCase();
  if (first.length >= 4) return `REF-${first.slice(0, 4)}`;

  const initials = parts
    .map((p) => p[0]?.toUpperCase())
    .filter(Boolean)
    .join("");

  const base = (first + initials).replace(/[^A-Z0-9]/g, "");
  return `REF-${(base || "CASE").slice(0, 4)}`;
}

export function inferConstraintKinds(text: string): ConstraintKind[] {
  const t = text.toLowerCase();
  const kinds: ConstraintKind[] = [];

  const add = (k: ConstraintKind) => {
    if (!kinds.includes(k)) kinds.push(k);
  };

  if (/(latency|millisecond|ms\b|time[- ]to[- ]data|runtime|response time|seconds-level|single-digit)/.test(t)) {
    add("latency");
  }

  if (/(cost|spend|scan|budget|variance|warehouse|compute)/.test(t)) {
    add("cost");
  }

  if (/(reliab|slo|availability|predictab|failure|error|degrad|rollback|retry|idempotent|incident|alert)/.test(t)) {
    add("reliability");
  }

  if (/(security|secure|threat|auth|encryption|safe|safety)/.test(t)) {
    add("security");
  }

  if (/(compliance|regulat|gdpr|pii|sox|hipaa|audit)/.test(t)) {
    add("compliance");
  }

  if (/(risk|guardrail|constraint|hard budget|blast radius|canary|feature flag)/.test(t)) {
    add("risk");
  }

  return kinds;
}

export function getConstraintBadgesForStudy(
  study: CaseStudy,
  max: number = 4
): Array<{ kind: ConstraintKind; label: string }> {
  const source = [
    study.narrative?.constraint,
    study.narrative?.context,
    study.narrative?.measuredOutcome,
    study.description,
    study.summaryContext,
    study.summaryOutcome,
    study.tags?.join(" "),
    study.technologies?.join(" "),
  ]
    .filter(Boolean)
    .join("\n");

  const inferred = inferConstraintKinds(source);
  const stable = inferred.length >= 2 ? inferred : (["risk", "reliability"] as ConstraintKind[]);

  return stable.slice(0, Math.max(1, max)).map((kind) => ({ kind, label: CONSTRAINT_KIND_LABEL[kind] }));
}

export type ExecutiveMetricKind = "time" | "cost" | "reliability" | "other";

function classifyMetric(metric: string, value: string): ExecutiveMetricKind {
  const m = `${metric} ${value}`.toLowerCase();

  if (/(latency|runtime|time|millisecond|ms\b|seconds|minutes|critical path|window)/.test(m)) return "time";
  if (/(cost|scan|spend|budget|variance|warehouse|compute)/.test(m)) return "cost";
  if (/(reliab|failure|error|degrad|slo|availability|predictab|rollback|incident|alert)/.test(m)) return "reliability";

  return "other";
}

export function pickExecutiveSkimMetrics(
  results: Array<{ metric: string; value: string; description: string }>,
  limit: number = 3
): Array<{ metric: string; value: string; description: string; kind: ExecutiveMetricKind }> {
  const annotated = results.map((r) => ({ ...r, kind: classifyMetric(r.metric, r.value) }));

  const picked: typeof annotated = [];
  const addFirstOfKind = (kind: ExecutiveMetricKind) => {
    const found = annotated.find((r) => r.kind === kind && !picked.includes(r));
    if (found) picked.push(found);
  };

  addFirstOfKind("time");
  addFirstOfKind("cost");
  addFirstOfKind("reliability");

  for (const r of annotated) {
    if (picked.length >= limit) break;
    if (!picked.includes(r)) picked.push(r);
  }

  return picked.slice(0, limit);
}
