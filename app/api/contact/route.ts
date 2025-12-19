import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";

export const runtime = "nodejs";

type ContactPayload = {
  name: string;
  email: string;
  systemInScope: string;
  primaryConstraint: string;
  context?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string): boolean {
  // Conservative validation: enough to catch obvious mistakes without being overly strict.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clamp(value: string, maxLen: number): string {
  return value.length <= maxLen ? value : value.slice(0, maxLen);
}

type RateLimitState = {
  count: number;
  resetAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __bl_contact_rl: Map<string, RateLimitState> | undefined;
}

function getRateLimitStore(): Map<string, RateLimitState> {
  if (!globalThis.__bl_contact_rl) globalThis.__bl_contact_rl = new Map();
  return globalThis.__bl_contact_rl;
}

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return true;
  const allowed = new Set(
    [
      siteConfig.url,
      process.env.NEXT_PUBLIC_SITE_URL,
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ].filter(Boolean)
  );
  return allowed.has(origin);
}

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    if (!isAllowedOrigin(origin)) {
      return NextResponse.json({ ok: false }, { status: 403 });
    }

    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json({ ok: false }, { status: 415 });
    }

    // Best-effort rate limit (serverless instances are ephemeral).
    const ip = getClientIp(req);
    const store = getRateLimitStore();
    const now = Date.now();
    const windowMs = 60_000;
    const maxPerWindow = 5;

    const current = store.get(ip);
    if (!current || current.resetAt <= now) {
      store.set(ip, { count: 1, resetAt: now + windowMs });
    } else {
      current.count += 1;
      if (current.count > maxPerWindow) {
        return NextResponse.json({ ok: false }, { status: 429 });
      }
      store.set(ip, current);
    }

    const raw = (await req.json()) as Partial<ContactPayload>;

    if (!isNonEmptyString(raw.name)) {
      return NextResponse.json({ ok: false, field: "name" }, { status: 400 });
    }
    if (!isNonEmptyString(raw.email) || !isValidEmail(raw.email.trim())) {
      return NextResponse.json({ ok: false, field: "email" }, { status: 400 });
    }
    if (!isNonEmptyString(raw.systemInScope)) {
      return NextResponse.json({ ok: false, field: "systemInScope" }, { status: 400 });
    }
    if (!isNonEmptyString(raw.primaryConstraint)) {
      return NextResponse.json({ ok: false, field: "primaryConstraint" }, { status: 400 });
    }

    const payload: ContactPayload = {
      name: clamp(raw.name.trim(), 120),
      email: clamp(raw.email.trim(), 200),
      systemInScope: clamp(raw.systemInScope.trim(), 240),
      primaryConstraint: clamp(raw.primaryConstraint.trim(), 80),
      context: isNonEmptyString(raw.context) ? clamp(raw.context.trim(), 4000) : undefined,
    };

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const resend = new Resend(resendApiKey);

    const ownerEmail = process.env.CONTACT_OWNER_EMAIL || "hello@useblacklake.com";
    const from = process.env.CONTACT_FROM_EMAIL || "BlackLake <onboarding@resend.dev>";

    const submittedAt = new Date().toISOString();
    const userAgent = req.headers.get("user-agent") || "unknown";

    const ownerSubject = `Blueprint request — ${payload.primaryConstraint}: ${payload.systemInScope}`;
    const ownerText = [
      "New form submission:",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `System in scope: ${payload.systemInScope}`,
      `Primary constraint: ${payload.primaryConstraint}`,
      ...(payload.context ? ["", "Context:", payload.context] : []),
      "",
      `Submitted at: ${submittedAt}`,
      `IP: ${ip}`,
      `User-Agent: ${userAgent}`,
    ]
      .join("\n");

    await resend.emails.send({
      from,
      to: ownerEmail,
      replyTo: payload.email,
      subject: ownerSubject,
      text: ownerText,
    });

    const userSubject = "BlackLake — request received";
    const userText = [
      `Hi ${payload.name},`,
      "",
      "Your request has been received.",
      "",
      "Next steps:",
      "- I’ll review your system and constraint summary.",
      "- I’ll reply with whether it’s a fit and what the Blueprint would cover.",
      "",
      "If you need to add details, reply to this email.",
      "",
      "BlackLake",
      siteConfig.url,
    ].join("\n");

    await resend.emails.send({
      from,
      to: payload.email,
      subject: userSubject,
      text: userText,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
