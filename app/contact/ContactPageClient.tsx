"use client";

import PageShell from "@/components/layout/PageShell";
import MagneticButton from "@/components/ui/MagneticButton";
import Button from "@/components/ui/Button";
import Stepper from "@/components/ui/Stepper";
import Surface from "@/components/ui/Surface";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import List from "@/components/ui/List";
import FeatureIcon from "@/components/ui/FeatureIcon";
import { Mail, MapPin, AlertCircle } from "lucide-react";
import { FormEvent, useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AppIcon from "@/components/ui/AppIcon";
import ConstraintSet from "@/components/ui/ConstraintSet";

type ContactFormState = {
  name: string;
  email: string;
  systemInScope: string;
  primaryConstraint: string;
  context: string;
  honey: string; // Anti-spam
};

const primaryConstraintItems = [
  { kind: "latency" as const, label: "Latency", intensity: 70 },
  { kind: "cost" as const, label: "Cost", intensity: 60 },
  { kind: "risk" as const, label: "Risk", intensity: 85 },
  { kind: "reliability" as const, label: "Reliability", intensity: 80 },
  { kind: "security" as const, label: "Security", intensity: 65 },
  { kind: "compliance" as const, label: "Compliance", intensity: 55 },
] as const;

export default function ContactPageClient() {
  const searchParams = useSearchParams();
  const [mountedAt, setMountedAt] = useState<number>(0);
  
  useEffect(() => {
    setMountedAt(Date.now());
  }, []);

  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    systemInScope: "",
    primaryConstraint: "",
    context: "",
    honey: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");
  const intentParam = searchParams.get("intent")?.toLowerCase() ?? "";
  const intentConfig = useMemo(
    () => ({
      blueprint: {
        label: "Blueprint",
        subject: "BlackLake Blueprint request",
        placeholder: "System in scope for Blueprint (e.g. data pipeline, platform, API)",
      },
      build: {
        label: "Build sprint",
        subject: "BlackLake Build sprint request",
        placeholder: "System in scope for Build sprint (e.g. data pipeline, platform, API)",
      },
      calibrate: {
        label: "Calibrate retainer",
        subject: "BlackLake Calibrate retainer request",
        placeholder: "System in scope for Calibrate (e.g. data pipeline, platform, API)",
      },
    }),
    []
  );
  const intent = intentConfig[intentParam as keyof typeof intentConfig];

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    if (status === "submitting") return;

    if (!form.primaryConstraint || form.primaryConstraint.trim().length === 0) {
      setStatus("error");
      setError("Select a primary constraint before sending.");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          systemInScope: form.systemInScope,
          primaryConstraint: form.primaryConstraint,
          context: form.context,
          honey: form.honey,
          mountedAt, // Anti-spam timing check
        }),
      });

      const body = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(body.error || "Submission failed. Please use email instead.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Submission failed. Please check your connection or use email.");
    }
  };

  const mailtoHref = useMemo(() => {
    const subject = intent?.subject ?? "BlackLake Blueprint request";
    const bodyLines = [
      `Name: ${form.name.trim() || ""}`,
      `Email: ${form.email.trim() || ""}`,
      `System in scope: ${form.systemInScope.trim() || ""}`,
      `Primary constraint: ${form.primaryConstraint || ""}`,
      "",
      form.context.trim() || "",
    ].filter(Boolean);

    const mailto = new URL("mailto:james@blacklake.systems");
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", bodyLines.join("\n"));
    return mailto.toString();
  }, [form, intent?.subject]);

  return (
    <PageShell>
      <Section variant="plain" spacing="pageHeader">
        <div className="max-w-3xl">
          <SectionHeading
            title="Start with a Blueprint"
            subtitle="The BlackLake Blueprint is a paid, structured first step for organisations running production systems. Share what you run today, where the risk sits, and what must change."
            size="lg"
            as="h1"
          />
        </div>
      </Section>

      <div className="border-t border-line-2" />

      <Section variant="plain">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* LEFT COLUMN: CONTEXT & NEXT STEPS */}
          <div>
            <SectionHeading
              eyebrow="What happens next"
              title="A simple intake flow."
              subtitle="Share enough context to understand the system and constraint. You’ll get a fit-check reply and, if it’s a match, a scoped Blueprint start."
              size="md"
            />

            <div className="mt-8 max-w-xl">
              <Stepper
                steps={[
                  {
                    title: "Submit context",
                    description: "A short description of what you run today and what must change.",
                  },
                  {
                    title: "Fit check reply",
                    description: "A quick response with questions, constraints, and whether it’s a fit.",
                  },
                  {
                    title: "Blueprint scope + start",
                    description: "A paid, time-boxed assessment with deliverables and a clear next step.",
                  },
                ]}
              />
            </div>

            <div className="mt-12 max-w-xl">
               <Surface variant="inset" className="p-6">
                  <div className="text-sm font-semibold uppercase tracking-normal text-ink-3">Reassurance</div>
                  <List
                    items={[
                      "Confidential by default.",
                      "Practical constraints first: risk, cost, reliability.",
                      "No mailing lists or spam — just a reply.",
                    ]}
                    variant="check"
                    className="mt-4"
                    itemClassName="text-sm text-gray-700 leading-relaxed"
                  />
               </Surface>
            </div>

            <div className="mt-8 max-w-xl grid gap-4 sm:grid-cols-2">
              <Surface variant="plain" className="p-5 border border-line-1">
                <div className="flex items-start gap-3">
                  <FeatureIcon icon={Mail} tone="neutral" size="md" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-normal text-ink-3">Email</p>
                    <a
                        href="mailto:james@blacklake.systems"
                      className="mt-2 inline-block text-sm font-semibold text-ink-1 hover:text-accent-electric transition-colors"
                    >
                        james@blacklake.systems
                    </a>
                  </div>
                </div>
              </Surface>
              <Surface variant="plain" className="p-5 border border-line-1">
                <div className="flex items-start gap-3">
                  <FeatureIcon icon={MapPin} tone="neutral" size="md" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-normal text-ink-3">Location</p>
                    <p className="mt-2 text-sm text-ink-2">London, UK (remote-first)</p>
                  </div>
                </div>
              </Surface>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="lg:pl-8">
            <Surface variant="raised" className="relative p-6 md:p-10">
              <div className="relative z-10 text-center md:text-left mb-8">
                 <SectionHeading
                    title="Blueprint intake"
                    subtitle="Short, high-signal questions. Enough to understand the system and constraint."
                    size="md"
                    as="h2"
                  />
                  {intent ? (
                    <div className="mt-3 inline-flex items-center rounded-full border border-line-2 bg-surface-3 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-3">
                      Intent: {intent.label}
                    </div>
                  ) : null}
              </div>

              <div className="relative z-10">
                {status === "success" ? (
                  <div className="space-y-6 text-center py-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="text-accent-electric mx-auto flex justify-center mb-4">
                       <div className="h-12 w-12 bg-accent-electric/10 rounded-full flex items-center justify-center">
                          <AppIcon icon={Mail} size="md" />
                       </div>
                    </div>
                    <h3 className="text-xl font-semibold text-ink-1">Request received</h3>
                    <p className="text-base text-ink-2 leading-relaxed max-w-sm mx-auto">
                      A confirmation email has been sent to <span className="font-semibold text-ink-1">{form.email}</span>.
                      <br className="block my-2" />
                      If you don&apos;t see it, check spam or email <a href="mailto:james@blacklake.systems" className="underline hover:text-ink-1">james@blacklake.systems</a>.
                    </p>
                    <div className="pt-4">
                      <Button href="/work" variant="secondary" size="lg" className="w-full">
                        View Work
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={submit}>
                    {/* Error Banner */}
                    {status === "error" && error ? (
                        <div className="rounded-lg bg-red-50 p-4 border border-red-200 flex gap-3 text-sm items-start">
                            <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                            <div className="space-y-1">
                                <p className="font-semibold text-red-900">Unable to submit</p>
                                <p className="text-red-800">{error}</p>
                                <p className="text-red-700 mt-2">
                                  You can also email directly: <a href="mailto:james@blacklake.systems" className="underline hover:text-red-900">james@blacklake.systems</a>
                                </p>
                            </div>
                        </div>
                    ) : null}

                    {/* Honeypot Field (Hidden) */}
                    <div className="hidden" aria-hidden="true">
                        <label htmlFor="honey">Do not fill this field</label>
                        <input
                            type="text"
                            id="honey"
                            name="honey"
                            value={form.honey}
                            onChange={(e) => setForm((s) => ({ ...s, honey: e.target.value }))}
                            tabIndex={-1}
                            autoComplete="off"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          autoComplete="name"
                          placeholder="Name"
                          value={form.name}
                          onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                          required
                          disabled={status === "submitting"}
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                          required
                          disabled={status === "submitting"}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="systemInScope" className="sr-only">
                        System in scope
                      </label>
                      <Input
                        id="systemInScope"
                        name="systemInScope"
                        autoComplete="off"
                        placeholder={intent?.placeholder ?? "System in scope (e.g. data pipeline, platform, API)"}
                        value={form.systemInScope}
                        onChange={(e) => setForm((s) => ({ ...s, systemInScope: e.target.value }))}
                        required
                        disabled={status === "submitting"}
                      />
                      <p className="mt-2 text-xs text-ink-3">One sentence is enough.</p>
                    </div>

                    <div className="relative">
                      <div className="text-sm font-semibold text-ink-1">Primary constraint</div>
                      <p className="mt-2 text-xs text-ink-3">The constraint that dominates decisions.</p>

                      <div className="mt-3">
                        <ConstraintSet
                          ariaLabel="Primary constraint selector"
                          items={[...primaryConstraintItems]}
                          selectedValue={form.primaryConstraint}
                          onChange={(value) => setForm((s) => ({ ...s, primaryConstraint: value }))}
                          meter="bar"
                          size="sm"
                        />
                      </div>

                      {/* Hidden input keeps form payload shape stable */}
                      <input type="hidden" name="primaryConstraint" value={form.primaryConstraint} />
                    </div>

                    <div>
                      <label htmlFor="context" className="sr-only">
                        Context (optional)
                      </label>
                      <TextArea
                        id="context"
                        name="context"
                        placeholder="Optional: What you run today, where the risk sits, what must change"
                        rows={6}
                        value={form.context}
                        onChange={(e) => setForm((s) => ({ ...s, context: e.target.value }))}
                        disabled={status === "submitting"}
                      />
                      <p className="mt-2 text-xs text-ink-3">Include: scale, failure modes, or cost sensitivity if relevant.</p>
                    </div>

                    <div className="pt-2 space-y-3">
                      <MagneticButton
                        className="w-full justify-center disabled:opacity-50 disabled:cursor-wait"
                        aria-label="Submit contact form"
                        type="submit"
                        disabled={status === "submitting"}
                      >
                        {status === "submitting" ? "Sending..." : "Send"}
                      </MagneticButton>

                      <div className="flex items-start gap-2 text-xs text-ink-3 px-1">
                        <svg className="w-4 h-4 shrink-0 mt-0.5 text-ink-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Confidential by default. Expect a reply within 24 hours.</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <p className="text-xs text-ink-3 text-center">
                        Prefer email?{" "}
                        <a
                          className="rounded-sm underline hover:text-accent-electric focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                          href={mailtoHref}
                        >
                          Open an email draft
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Surface>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
