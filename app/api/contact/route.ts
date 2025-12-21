import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";
import { validateEnv, serverEnv } from "@/lib/env";

export const runtime = "nodejs";

// --- Types ---

type ContactPayload = {
  name: string;
  email: string;
  systemInScope: string;
  primaryConstraint: string;
  context?: string;
  honey?: string; // Honeypot field
  mountedAt?: number; // Client timestamp for time-to-submit check
};

// --- Helpers ---

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clamp(value: string, maxLen: number): string {
  return value.length <= maxLen ? value : value.slice(0, maxLen);
}

function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

// --- Logic ---

export async function POST(req: NextRequest) {
  const requestId = crypto.randomUUID();
  const ip = getClientIp(req);
  
  // 1. Structured Logging Init
  console.log(`[Contact] Request received`, { requestId, ip });

  try {
    // 2. Env Validation (Critical)
    try {
      validateEnv();
    } catch (e) {
      console.error(`[Contact] Env validation failed`, { error: e });
      return NextResponse.json({ ok: false, error: "Configuration error" }, { status: 500 });
    }

    const raw = (await req.json()) as Partial<ContactPayload>;

    // 3. Anti-Spam: Honeypot
    if (raw.honey && raw.honey.trim() !== "") {
      console.warn(`[Contact] Honeypot triggered`, { requestId, ip, honey: raw.honey });
      // Return 200 to trick bots, but don't send email
      return NextResponse.json({ ok: true });
    }

    // 4. Anti-Spam: Time-to-Submit
    // Require at least 2 seconds (2000ms) to pass since form mount
    const now = Date.now();
    const mountedAt = raw.mountedAt || now;
    const timeToSubmit = now - mountedAt;
    
    // In production we enforce 2s, but let's be lenient for manual testing if needed (1s)
    if (timeToSubmit < 1500) {
       console.warn(`[Contact] Too fast submission`, { requestId, ip, timeToSubmit });
       // Start rate-limiting logic or just block. For now, strictly block.
       return NextResponse.json({ ok: false, error: "Please wait a moment before sending." }, { status: 429 });
    }

    // 5. Validation
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

    // 6. Sanitization
    const payload = {
      name: clamp(raw.name.trim(), 120),
      email: clamp(raw.email.trim(), 200),
      systemInScope: clamp(raw.systemInScope.trim(), 240),
      primaryConstraint: clamp(raw.primaryConstraint.trim(), 80),
      context: isNonEmptyString(raw.context) ? clamp(raw.context.trim(), 4000) : undefined,
    };

    // 7. Email Sending
    const resend = new Resend(serverEnv.RESEND_API_KEY);
    const ownerEmail = serverEnv.CONTACT_TO_EMAIL!; // Validated by validateEnv
    const fromEmail = serverEnv.CONTACT_FROM_EMAIL!; // Validated by validateEnv
    
    // Premium formatted email
    const ownerSubject = `BlackLake Inquiry — ${payload.primaryConstraint}`;
    const ownerText = `
BLACKLAKE BLUEPRINT INQUIRY
--------------------------------------------------
ID: ${requestId}
Submitted: ${new Date().toISOString()}

DETAILS
--------------------------------------------------
Name:       ${payload.name}
Email:      ${payload.email}
System:     ${payload.systemInScope}
Constraint: ${payload.primaryConstraint}

CONTEXT
--------------------------------------------------
${payload.context || "No context provided."}

META
--------------------------------------------------
IP: ${ip}
Time to submit: ${timeToSubmit}ms
User-Agent: ${req.headers.get("user-agent") || "unknown"}
    `.trim();

    await resend.emails.send({
      from: fromEmail,
      to: ownerEmail,
      replyTo: payload.email,
      subject: ownerSubject,
      text: ownerText,
    });

    // Auto-reply
    const userSubject = "BlackLake — request received";
    const userText = `
Hi ${payload.name},

Your Blueprint request has been received.

I’ll review your system context ("${payload.systemInScope}") and primary constraint ("${payload.primaryConstraint}"). 
Expect a reply shortly with whether it’s a fit for an assessment.

Best,

BlackLake
${siteConfig.url}
    `.trim();

    await resend.emails.send({
      from: fromEmail,
      to: payload.email,
      subject: userSubject,
      text: userText,
    });

    console.log(`[Contact] Success`, { requestId, email: payload.email });
    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error(`[Contact] Unhandled error`, { requestId, error });
    return NextResponse.json({ ok: false, error: "Internal error" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false }, { status: 405 });
}
