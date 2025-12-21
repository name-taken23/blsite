# Release checklist

Use this as the minimum “ship” process.

## Configuration

- Environment variables are set in Vercel (or your host):
  - Resend API key (used by the contact endpoint)
  - Any site URL / canonical URL env (if applicable)
- Sender domain/address is verified in Resend (so contact submissions can send successfully)

## SEO + indexing

- Sitemap is live and correct (`/sitemap.xml`)
- Robots is live and correct (`/robots.txt`)
- Canonicals are correct (spot-check Home, Services, Work, a Case Study, Contact)

## Contact flow

- Contact submission tested end-to-end:
  - Submit the form from `/contact`
  - Confirm the API returns success
  - Confirm the email is received
  - Confirm error handling UX is acceptable (bad network / invalid env)

## Quality gates

- CI is green on `main` (lint + build + smoke tests)
- Lighthouse baseline recorded (Home + Services + Work):
  - Performance
  - Accessibility
  - Best Practices
  - SEO

## Error handling

- 404 page reviewed (missing case study slug, unknown routes)
- Error pages reviewed (`app/error.tsx`, `app/global-error.tsx`)

## Final verification

- Manual navigation: Home → Services → Work → Case Study → Contact
- Visual spot-check in mobile + desktop
