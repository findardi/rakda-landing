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

## Environment

Copy `.env.example` to `.env` and set `PUBLIC_APP_URL` to the production app origin (`https://app.rakda.id` once it exists). Until it is set, sign-in links are not rendered and the trial action falls back: with `PUBLIC_CONTACT_EMAIL` set it becomes a mailto asking to be told when the trial opens; with neither set it is a plain "opens soon" statement. A dev, staging, or test host in `PUBLIC_APP_URL` is ignored: the public site never links to a test login.

## Safe Browsing

The site was once flagged as deceptive. What keeps it clean: no `<form>`, `<input>`, password, or one-time-code fields anywhere on the marketing pages; every demo block carries the `SimBadge` frame; download controls in the demo are static labels; the operator's identity is in `src/lib/legal/content.ts` (`ORG`) and on `/contact`. Keep the dev app off any indexable host (or serve it with `X-Robots-Tag: noindex` behind an access gate).

## Deploy (Cloudflare Workers, static assets)

Every route is prerendered, so the site is plain static files (`@sveltejs/adapter-static`). `wrangler.jsonc` serves `build/` as Worker static assets; no server code runs.

Cloudflare dashboard: Workers & Pages, Create, Import a repository, pick this repo, then:

| Setting        | Value                 |
| -------------- | --------------------- |
| Project name   | `rakda-landing`       |
| Build command  | `bun run build`       |
| Deploy command | `npx wrangler deploy` |

Node version comes from `.node-version`. Set the `PUBLIC_*` variables from `.env.example` under Settings, Build, Variables and secrets. They are read at build time, so redeploy after changing them.
