# Disasters Portal

Built with Next.js, USWDS, and `@teamimpact/veda-ui-blocks`.

## Setup

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000/disasters>

## Base Path

The portal is served under a base path, `/disasters` by default. Override it with
`NEXT_PUBLIC_BASE_PATH` (copy `.env.example` to `.env.local`); set it to an empty
string to serve from the domain root. It is read at build time, so rebuild after
changing it.

Next.js prefixes `next/link`, router navigations and `/_next/*` assets
automatically. Everything else must be wrapped in `withBasePath()` from
`app/site-config/base-path.ts`:

- hrefs passed to `@teamimpact/veda-ui-blocks` (`Header`, `Footer`, `Card*`, `Link`)
  — the library renders plain `<a href>` elements
- raw `<video>` / `<source>` / `poster` attributes and CSS `url()` values
- `usePathname()` results compared against those prefixed hrefs

Images are the subtle one: `next/image` prefixes its own `/_next/image`
endpoint but **not** `src`, so import `Image` from `@/app/components/Image`
rather than `next/image` — the wrapper applies the base path for you.

`withBasePath()` is idempotent and leaves external URLs, `mailto:` and fragments
untouched, so it is safe on mixed internal/external link lists.

## How It Works

Consumes `@teamimpact/veda-ui-blocks` from npm. Imports `disasters.css` for theming — font files ship with the package in `dist/fonts/` and are bundled automatically by Next.js; no separate setup needed.