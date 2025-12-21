"use client";

import PageShell from "@/components/layout/PageShell";
import BrandMark from "@/components/brand/BrandMark";
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
import AppIcon from "@/components/ui/AppIcon";

type ContactFormState = {
  name: string;
  email: string;
  systemInScope: string;
  primaryConstraint: string;
  context: string;
  honey: string; // Anti-spam
};

const primaryConstraints = [
  { value: "latency", label: "Latency" },
  { value: "cost", label: "Cost" },
  { value: "risk", label: "Risk" },
  { value: "reliability", label: "Reliability" },
  { value: "security", label: "Security" },
  { value: "compliance", label: "Compliance" },
  { value: "other", label: "Other" },
] as const;

export default function ContactPageClient() {
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

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    if (status === "submitting") return;

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
    const subject = "BlackLake Blueprint request";
    const bodyLines = [
      `Name: ${form.name.trim() || ""}`,
      `Email: ${form.email.trim() || ""}`,
      `System in scope: ${form.systemInScope.trim() || ""}`,
      `Primary constraint: ${form.primaryConstraint || ""}`,
      "",
      form.context.trim() || "",
    ].filter(Boolean);

    const mailto = new URL("mailto:hello@useblacklake.com");
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", bodyLines.join("\n"));
    return mailto.toString();
  }, [form]);

  return (
    <PageShell>
      <Section variant="plain" containerClassName="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-3xl">
          <SectionHeading
            title="Start with a Blueprint"
            subtitle="The BlackLake Blueprint is a paid, structured first step for organisations running production systems. Share what you run today, where the risk sits, and what must change."
            size="lg"
            as="h1"
          />
        </div>
      </Section>

      <div className="border-t border-gray-100" />

      <Section variant="plain" containerClassName="pt-16 pb-16 md:pt-20 md:pb-20">
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
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-500">Reassurance</div>
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
              <Surface variant="plain" className="p-5 border border-gray-200">
                <div className="flex items-start gap-3">
                  <FeatureIcon icon={Mail} tone="neutral" size="md" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Email</p>
                    <a
                      href="mailto:hello@useblacklake.com"
                      className="mt-2 inline-block text-sm font-semibold text-gray-900 hover:text-accent-electric transition-colors"
                    >
                      hello@useblacklake.com
                    </a>
                  </div>
                </div>
              </Surface>
              <Surface variant="plain" className="p-5 border border-gray-200">
                <div className="flex items-start gap-3">
                  <FeatureIcon icon={MapPin} tone="neutral" size="md" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Location</p>
                    <p className="mt-2 text-sm text-gray-600">London, UK (remote-first)</p>
                  </div>
                </div>
              </Surface>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="lg:pl-8">
            <Surface variant="raised" className="relative p-6 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 opacity-[0.04] scale-[3] origin-top-right"
              >
                <BrandMark variant="mark" size="lg" />
              </div>

              <div className="relative z-10 text-center md:text-left mb-8">
                 <SectionHeading
                    title="Blueprint intake"
                    subtitle="Short, high-signal questions. Enough to understand the system and constraint."
                    size="md"
                    as="h2"
                  />
              </div>

              <div className="relative z-10">
                {status === "success" ? (
                  <div className="space-y-6 text-center py-10 animate-in fade-in zoom-in-95 duration-300">
                    <div className="text-accent-electric mx-auto flex justify-center mb-4">
                       <div className="h-12 w-12 bg-accent-electric/10 rounded-full flex items-center justify-center">
                          <AppIcon icon={Mail} size="md" />
                       </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Request received</h3>
                    <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">
                      A confirmation email has been sent to <span className="font-semibold text-gray-900">{form.email}</span>.
                      <br className="block my-2" />
                      If you don’t see it, check spam or email <a href="mailto:hello@useblacklake.com" className="underline hover:text-gray-900">hello@useblacklake.com</a>.
                    </p>
                    <div className="pt-4">
                      <Button href="/work" variant="primary" size="lg" className="w-full">
                        View selected work
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={submit}>
                    {/* Error Banner */}
                    {status === "error" && error ? (
                        <div className="rounded-lg bg-red-50 p-4 border border-red-100 flex gap-3 text-red-900 text-sm items-start">
                            <AlertCircle className="w-5 h-5 shrink-0 text-red-600" />
                            <div className="space-y-1">
                                <p className="font-semibold">Unable to submit</p>
                                <p>{error}</p>
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
                        placeholder="System in scope (e.g. data pipeline, platform, API)"
                        value={form.systemInScope}
                        onChange={(e) => setForm((s) => ({ ...s, systemInScope: e.target.value }))}
                        required
                        disabled={status === "submitting"}
                      />
                      <p className="mt-2 text-xs text-gray-500">One sentence is enough.</p>
                    </div>

                    <div className="relative">
                      <label htmlFor="primaryConstraint" className="sr-only">
                        Primary constraint
                      </label>
                      <select
                        id="primaryConstraint"
                        name="primaryConstraint"
                        value={form.primaryConstraint}
                        onChange={(e) => setForm((s) => ({ ...s, primaryConstraint: e.target.value }))}
                        required
                        disabled={status === "submitting"}
                        className="w-full h-12 px-4 border border-gray-200 rounded-lg bg-white text-gray-700 transition-all duration-200 appearance-none disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-electric/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:border-gray-300"
                      >
                        <option value="">Primary constraint</option>
                        {primaryConstraints.map((c) => (
                          <option key={c.value} value={c.label}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 4L6 8L10 4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="mt-2 text-xs text-gray-500">Pick the constraint that dominates decisions.</p>
                    </div>

                    <div>
                      <label htmlFor="context" className="sr-only">
                        Context (optional)
                      </label>
                      <TextArea
                        id="context"
                        name="context"
                        placeholder="Optional context (what you run today, where the risk sits, what must change)"
                        rows={6}
                        value={form.context}
                        onChange={(e) => setForm((s) => ({ ...s, context: e.target.value }))}
                        disabled={status === "submitting"}
                      />
                      <p className="mt-2 text-xs text-gray-500">If you have it: scale, failure modes, cost sensitivity.</p>
                    </div>

                    <div className="pt-2">
                      <MagneticButton
                        className="w-full justify-center disabled:opacity-50 disabled:cursor-wait"
                        aria-label="Submit contact form"
                        type="submit"
                        disabled={status === "submitting"}
                      >
                        {status === "submitting" ? "Sending Request..." : "Send Request"}
                      </MagneticButton>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-gray-500 text-center">
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
