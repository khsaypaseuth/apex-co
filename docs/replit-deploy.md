# Deploy Apex Co., Ltd. on Replit

## Prerequisites

- GitHub repo: `khsaypaseuth/apex-co`
- Node.js 22+
- Custom domain: not registered yet. `lib/site-config.ts` currently uses the
  placeholder `apex.com.la` — substitute the real domain everywhere below.

## Steps

1. In Replit, **Import from GitHub** and select this repository.
2. Replit should detect Node via [`.replit`](../.replit) and [`replit.nix`](../replit.nix).
3. Click **Run**. Build runs `npm install && npm run build`, then serves with:
   ```bash
   npm run start:replit
   ```
   which binds `0.0.0.0` on `$PORT` (defaults to 3000).
4. Attach the custom domain in Replit **Hosting / Domains**:
   - Apex (root) domain: `apex.com.la`
   - Optional: `www.apex.com.la` → redirect or alias to the root domain
5. Point DNS (at your registrar) to the targets Replit shows (A/CNAME or Replit nameservers).
6. Confirm HTTPS is issued, then open:
   - https://apex.com.la/en
   - https://apex.com.la/sitemap.xml
   - https://apex.com.la/llms.txt
   - https://apex.com.la/robots.txt

## Site URL

[`lib/site-config.ts`](../lib/site-config.ts) sets `SITE_URL = 'https://apex.com.la'` — a
**placeholder**. Changing it there updates canonical URLs, hreflang, Open Graph,
the sitemap, and JSON-LD in one edit. The three AI-crawler files
(`public/llms.txt`, `public/.well-known/llms.txt`, `public/ai.txt`) hard-code the
domain and must be updated by hand at the same time.

No environment variables are required for launch. If you later need an override, introduce `NEXT_PUBLIC_SITE_URL` and read it there — keep the same default for local builds.

## Notes

- The app is fully static at build time (content from `content/` + dictionaries). Do **not** enable `output: 'export'` — locale redirects in `proxy.ts` need the Node server.
- Styleguide routes are noindexed and disallowed in `robots.txt`.
- Contact details in `lib/site-config.ts` are placeholders. Replace them and set
  `CONTACT.isPlaceholder = false` before announcing the site.
- After deploy, submit the sitemap in Google Search Console and verify `llms.txt` is publicly reachable for AI assistants.
