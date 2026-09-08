# rakda-landing

Marketing landing page for [Rakda](../rakda), a virtual data room. SvelteKit 5, Tailwind v4, Bun.

Product truth lives in `PRODUCT.md`. The design system is recorded in `DESIGN.md` once the build is documented.

## Develop

```sh
bun install
bun run dev        # http://localhost:5173
bun run check      # svelte-check
bun run lint       # prettier + eslint
bun run test:e2e   # playwright
```

## Locales

`/` is Indonesian, `/en` is English. Copy lives in `src/lib/i18n/{id,en}.ts`.

## Pages

`/` (hero with the mini permission grid, three reasons, engagement, who it is for, the security ledger, five FAQ clauses, waitlist), `/fitur` (Q&A, templates, lifecycle, setup), `/harga` (the pricing certainties, no numbers until they are decided), `/faq`, four search-intent guides (`src/lib/articles/content.ts`), and the legal pages. FAQ answers point at numbered sections across `/` and `/fitur` (`src/lib/refs.ts`).

## Environment

Copy `.env.example` to `.env`. `PUBLIC_APP_URL` is the production app origin (`https://app.rakda.id` once it exists); until it is set, sign-in links are not rendered and every trial action is the waitlist form. A dev, staging, or test host in `PUBLIC_APP_URL` is ignored: the public site never links to a test login. `PUBLIC_SANDBOX_URL` is the trial sandbox origin; when set, every trial action links to its `/try` page instead of the app's sign-up (same https-only rule). `PUBLIC_SITE_URL` defaults to `https://rakda.id` (canonical, hreflang, Open Graph, sitemap).

## Waitlist

The only form on the site posts an email to `/api/waitlist`, handled by `worker/index.ts` and stored in Workers KV. Once, on the Cloudflare account:

```sh
npx wrangler kv namespace create WAITLIST
```

Paste the id into `kv_namespaces` in `wrangler.jsonc`. Until the binding exists the worker answers 503 and the form shows the contact address instead; deploys still succeed. Read the list with `npx wrangler kv key list --binding WAITLIST`. Locally, `npx wrangler dev` after `bun run build` serves the site with the worker; `bun run preview` serves the static files only (the form gets a 404 there).

## Share card

`static/og-{id,en}.png` are rendered by `bun run og` (Playwright, the brand font). Re-run it after changing the copy in `scripts/og.mjs`.

## Safe Browsing

The site was once flagged as deceptive. What keeps it clean: the only field anywhere is the waitlist's email input (never a password or a one-time code, never a login look-alike); every demo block carries the `SimBadge` frame; download controls in the demo are static labels; the operator's identity is in `src/lib/legal/content.ts` (`ORG`), the footer, and `/contact`. Keep the dev app off any indexable host (or serve it with `X-Robots-Tag: noindex` behind an access gate).

## Deploy (Cloudflare Workers, static assets)

Every route is prerendered, so the site is plain static files (`@sveltejs/adapter-static`). `wrangler.jsonc` serves `build/` as Worker static assets; the only server code is the waitlist handler.

Cloudflare dashboard: Workers & Pages, Create, Import a repository, pick this repo, then:

| Setting        | Value                 |
| -------------- | --------------------- |
| Project name   | `rakda-landing`       |
| Build command  | `bun run build`       |
| Deploy command | `npx wrangler deploy` |

Node version comes from `.node-version`. Set the `PUBLIC_*` variables from `.env.example` under Settings, Build, Variables and secrets. They are read at build time, so redeploy after changing them.
