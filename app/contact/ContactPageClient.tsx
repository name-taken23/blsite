"use client";

import PageShell from "@/components/layout/PageShell";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import MagneticButton from "@/components/ui/MagneticButton";
import { Mail, MapPin } from "lucide-react";
import { FormEvent, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  systemInScope: string;
  primaryConstraint: string;
  context: string;
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
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    systemInScope: "",
    primaryConstraint: "",
    context: "",
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
        }),
      });

      if (!res.ok) {
        setStatus("error");
        setError("Submission failed. Please use email instead.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setError("Submission failed. Please use email instead.");
    }
  };

  const mailtoHref = (() => {
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
  })();

  return (
    <PageShell>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
              Start with a Blueprint
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
              The BlackLake Blueprint is a paid, structured first step for organisations running production systems.
              Share what you run today, where the risk sits, and what must change.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-gray-100" />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              <div className="mt-6 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Email</p>
                    <a
                      href="mailto:hello@useblacklake.com"
                      className="mt-2 inline-block text-base font-semibold text-gray-900 hover:text-accent-electric transition-colors"
                    >
                      hello@useblacklake.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50">
                    <MapPin className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Location</p>
                    <p className="mt-2 text-base text-gray-600">London, UK (remote-first)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8">
              {status === "success" ? (
                <div className="space-y-4">
                  <div className="text-sm font-semibold text-gray-900">Request received</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A confirmation email has been sent to <span className="font-semibold text-gray-900">{form.email}</span>.
                    If you don’t see it, check spam or email hello@useblacklake.com.
                  </p>
                  <div className="pt-2">
                    <MagneticButton href="/work" className="w-full justify-center">
                      View selected work
                    </MagneticButton>
                  </div>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={submit}>
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
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-electric/25 focus:border-transparent transition-all duration-200 bg-white appearance-none text-gray-700"
                  >
                    <option value="">Select a constraint</option>
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
                  />
                </div>

                <div className="pt-4">
                  <MagneticButton
                    className="w-full justify-center"
                    aria-label="Submit contact form"
                    type="submit"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? "Submitting…" : "Send"}
                  </MagneticButton>
                </div>

                {status === "error" && (
                  <p className="text-xs text-red-600">{error}</p>
                )}

                <p className="text-xs text-gray-500">
                  Prefer email? <a className="underline" href={mailtoHref}>Open an email draft</a>.
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
