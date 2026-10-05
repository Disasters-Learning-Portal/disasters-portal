# Disasters Portal

Built with Next.js, USWDS, and `@teamimpact/veda-ui-blocks`.

## Setup

```bash
pnpm install
pnpm dev
```

Open <http://localhost:3000>

## Base path

Set `NEXT_PUBLIC_BASE_PATH` (env var) at build time to serve the app under a subpath (e.g. `/disasters`). An unset env var serves from the root. See `.env.example` and `app/site-config/base-path.helpers.ts`.

Use `AppLink` or `AppLinkStyled` instead of native anchors to ensure basepaths are handled within links. These components utilize NextLink to automatically manage basepath using next.config.

Use `AppImage` and `AppVideo` instead of NextImage or native elements. These components apply the base path (external URLs pass through unchanged). 

Use root css vars for image path references in app css, as css does not have direct access to env vars to resolve a base path. See `layout.tsx` as an example that exposes a background image as the css var `--image-logo-url`.

Note, portal specific image assets live in `public/`. 

## Environment URLs

Three env vars are **required** at build time. A missing one fails `pnpm build` on purpose so a deployment can never silently point at the wrong environment. See `app/site-config/env.helpers.ts`.

| Variable | develop / local | main (prod) |
| --- | --- | --- |
| `NEXT_PUBLIC_DATA_VISUALIZATION_URL` | `https://dev.disasters.openveda.cloud/disasters/data-visualization` | `https://science.data.nasa.gov/disasters/data-visualization` |
| `NEXT_PUBLIC_STAC_API_URL` | `https://dev.disasters.openveda.cloud/api/stac` | `https://disasters.openveda.cloud/api/stac` |
| `NEXT_PUBLIC_RASTER_API_URL` | `https://dev.disasters.openveda.cloud/api/raster` | `https://disasters.openveda.cloud/api/raster` |

- **Local:** copy `.env.example` to `.env.local`. Next.js reads `.env.local` automatically and it is gitignored.
- **Amplify:** values are set per branch in the Amplify console (`main` = prod, `develop` = dev). Pull request previews inherit the app-level values.
- **CI:** the `build` job in `.github/workflows/pr-checks.yml` copies `.env.example` to `.env.local`, so the dev values live in one place.

## How It Works

Consumes `@teamimpact/veda-ui-blocks` from npm. Imports `disasters.css` for theming — package img and font assets ship with the package in `dist/img/` and `dist/fonts/` and are bundled automatically by Next.js; no separate setup needed.