# Disasters Portal

Built with Next.js, USWDS, and `@teamimpact/veda-ui-blocks`.

## Setup

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>

## Base path

Set `NEXT_PUBLIC_BASE_PATH` at build time to serve the app under a subpath (e.g. `/disasters`). Unset serves from the root. See `.env.example` and `app/site-config/base-path.helpers.ts`.

Use `app/components/Link` which wraps veda-ui-blocks `Link` and ensures `NextLink` is used which automatically supports href base path handling. 

Use `app/components/Image` and `app/components/Video` instead of the raw elements — they apply the base path (external URLs pass through unchanged).

Placement:

- `public/` — assets referenced by string path (e.g. `/img/story/...`) through the wrappers above.
- `app/assets/` — assets used from CSS or statically imported. The bundler applies the base path and a content hash; CSS cannot reference `public/` under a base path.

## How It Works

Consumes `@teamimpact/veda-ui-blocks` from npm. Imports `disasters.css` for theming — font files ship with the package in `dist/fonts/` and are bundled automatically by Next.js; no separate setup needed.