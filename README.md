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

Copy `.env.example` to `.env` and set `PUBLIC_APP_URL` to the app origin. Until it is set, the trial and sign-in links resolve to an in-page anchor.
