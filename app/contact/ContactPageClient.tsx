"use client";

import PageShell from "@/components/layout/PageShell";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import MagneticButton from "@/components/ui/MagneticButton";
import { Mail, MapPin } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";

type ContactFormState = {
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
};

const topics = [
  { value: "cloud-platform", label: "Cloud / platform" },
  { value: "data", label: "Data pipelines / warehouse" },
  { value: "applied-ai", label: "Applied AI (RAG / evals / integration)" },
  { value: "reliability-performance", label: "Reliability / performance" },
  { value: "product", label: "Product engineering" },
  { value: "other", label: "Other" },
] as const;

export default function ContactPageClient() {
  const [form, setForm] = useState<ContactFormState>({
    name: "",
    email: "",
    topic: "",
    subject: "",
    message: "",
  });

  const topicLabel = useMemo(() => {
    return topics.find((t) => t.value === form.topic)?.label ?? "";
  }, [form.topic]);

  const submitViaEmail = (e: FormEvent) => {
    e.preventDefault();

    const subject = form.subject.trim() || "BlackLake inquiry";
    const bodyLines = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      form.topic ? `Topic: ${topicLabel || form.topic}` : "",
      "",
      form.message.trim(),
    ].filter(Boolean);

    const mailto = new URL("mailto:hello@useblacklake.com");
    mailto.searchParams.set("subject", subject);
    mailto.searchParams.set("body", bodyLines.join("\n"));

    window.location.href = mailto.toString();
  };

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
              <form className="space-y-6" onSubmit={submitViaEmail}>
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

                <div className="relative">
                  <label htmlFor="topic" className="sr-only">
                    Topic
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={form.topic}
                    onChange={(e) => setForm((s) => ({ ...s, topic: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-electric/25 focus:border-transparent transition-all duration-200 bg-white appearance-none text-gray-700"
                  >
                    <option value="">Select topic</option>
                    {topics.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
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
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    autoComplete="off"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                    required
                  />
                </div>

                <div className="pt-4">
                  <MagneticButton
                    className="w-full justify-center"
                    aria-label="Send message via email"
                    type="submit"
                  >
                    Open email draft
                  </MagneticButton>
                </div>

                <p className="text-xs text-gray-500">
                  This form opens an email draft in your mail client.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
