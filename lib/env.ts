export const serverEnv = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL ?? "james@blacklake.systems",
  // Optional but recommended
  CONTACT_OWNER_EMAIL: process.env.CONTACT_OWNER_EMAIL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
};

export function validateEnv() {
  if (process.env.NODE_ENV !== "production") return;

  const missing = [];
  if (!serverEnv.RESEND_API_KEY) missing.push("RESEND_API_KEY");
  if (!serverEnv.CONTACT_FROM_EMAIL) missing.push("CONTACT_FROM_EMAIL");
  if (!serverEnv.CONTACT_TO_EMAIL) missing.push("CONTACT_TO_EMAIL");

  if (missing.length > 0) {
    throw new Error(`❌ FATAL: Missing required production environment variables: ${missing.join(", ")}`);
  }
}
