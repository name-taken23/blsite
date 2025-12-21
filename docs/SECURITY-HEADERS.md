# Security headers

This site sets security headers in `next.config.ts` via `async headers()`.

## Content Security Policy (CSP)

CSP is intentionally strict and uses:

- `default-src 'self'`
- `script-src 'self' 'unsafe-inline'` (required because the site injects JSON-LD via `next/script`)
- `connect-src 'self'` (no external network calls by default)

In development, `script-src` also includes `'unsafe-eval'` to support tooling. Production removes `'unsafe-eval'`.

### Updating CSP for analytics

If you add analytics or any third-party network calls, you will almost always need to update **`connect-src`**.

Example: if you add an analytics endpoint at `https://api.analytics.example`, update CSP in `next.config.ts`:

- `connect-src 'self' https://api.analytics.example`

If analytics injects a third-party script, you may also need to update:

- `script-src` (for the script host)
- `img-src` (for tracking pixels)

Keep changes minimal and prefer explicit host allowlists.

## Other headers

The config also sets:

- `Strict-Transport-Security`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`
