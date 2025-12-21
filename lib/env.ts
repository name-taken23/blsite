export const serverEnv = {
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_TO_EMAIL: process.env.CONTACT_TO_EMAIL,
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
  
  // Site URL is critical for canonicals but strictly speaking we might want to warn rather than crash
  // However, for BlackLake we want strict adherence
  if (!serverEnv.NEXT_PUBLIC_SITE_URL) missing.push("NEXT_PUBLIC_SITE_URL");

  if (missing.length > 0) {
    throw new Error(`❌ FATAL: Missing required production environment variables: ${missing.join(", ")}`);
  }
}
