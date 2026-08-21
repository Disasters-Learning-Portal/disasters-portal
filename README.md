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

## How It Works

Consumes `@teamimpact/veda-ui-blocks` from npm. Imports `disasters.css` for theming — font files ship with the package in `dist/fonts/` and are bundled automatically by Next.js; no separate setup needed.