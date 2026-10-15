# Disasters Portal

Built with Next.js, USWDS, and `@teamimpact/veda-ui-blocks`.

## Setup

```bash
cp .env.example .env.local
pnpm install
pnpm dev
```

Open <http://localhost:3000>

## Deploy Platforms and Hosts

Deploys are managed through Amplify and CloudFront (contacts: @amarouane-ABDELHAK, @CarsonDavis)

| | develop | production |
| --- | --- | --- |
| hosted | [https://science-dev.data.nasa.gov/disasters](https://science-dev.data.nasa.gov/disasters) (note, this is behind NASA vpn) |[https://science.data.nasa.gov/disasters](https://science.data.nasa.gov/disasters) | 
| cloudfront | [https://d3q5eprbh17kj7.cloudfront.net/disasters](https://d3q5eprbh17kj7.cloudfront.net/disasters) | [https://d1l9nqtl8c2o5d.cloudfront.net/disasters](https://d1l9nqtl8c2o5d.cloudfront.net/disasters) |


## Environment URLs

Three env vars are **required** (see .env.example). A missing one fails `typecheck` and `pnpm build` on purpose. See `app/site-config/env.helpers.ts`.

`NEXT_PUBLIC_DATA_VISUALIZATION_URL` may be an absolute URL or a root-relative path:

- **Absolute** (`https://science.data.nasa.gov/disasters/data-visualization`): used as-is, so the link always goes to that host.
- **Root-relative** (`/data-visualization`, recommended for deployed branches): keeps visitors on whichever host served them the portal, provided that host also serves the visualization tool. The base path is added automatically (rendered as `/disasters/data-visualization` when `NEXT_PUBLIC_BASE_PATH=/disasters`), so do not include it in the value. A value that already includes it is normalized rather than doubled.

- **Local:** copy `.env.example` to `.env.local`. Next.js reads `.env.local` automatically. All .env files but .env.example are gitignored.
- **Pull request checks:** `.github/workflows/pr-checks.yml` values are set in GitHub repository variables within repo Settings and should be synced with those provided in .env.example
- **Amplify:** Default values are provided for all branches including `develop`. This supplies env vars to pull request deploy previews and the deployed `develop` branch. The production branch (`main`) has separate configured environment variables.


| Amplify Env Variables | default (pr previews and develop deploy) | main (production) |
| --- | --- | --- |
| `NEXT_PUBLIC_DATA_VISUALIZATION_URL` | `https://dev.disasters.openveda.cloud/disasters/data-visualization` | `https://science.data.nasa.gov/disasters/data-visualization` |
| `NEXT_PUBLIC_STAC_API_URL` | `https://dev.disasters.openveda.cloud/api/stac` | `https://disasters.openveda.cloud/api/stac` |
| `NEXT_PUBLIC_RASTER_API_URL` | `https://dev.disasters.openveda.cloud/api/raster` | `https://disasters.openveda.cloud/api/raster` |

### Why the visualization URL uses a different host in dev and prod

The Data Visualization link is the one URL a visitor navigates to, so when it is set to an absolute URL the host is chosen deliberately:

- **Production uses the nasa.gov host** so visitors who arrive at `science.data.nasa.gov/disasters` stay on nasa.gov when they open the map. GSFC proxies `/disasters*` on that host to our production CloudFront.
- **Development uses the openveda host** because `science-dev.data.nasa.gov` is reachable only on the NASA VPN. Pointing dev at it would break the link for PR preview reviewers and anyone developing off-VPN.
- **A root-relative value removes the dev/prod difference** for the hosts behind CloudFront: nasa.gov, openveda, and the CloudFront domains all serve `/disasters/data-visualization`, so `/data-visualization` keeps visitors on the host they arrived on with one value for `develop` and `main`.
- **PR previews still need an absolute URL.** The `pr-N.*.amplifyapp.com` preview hosts are not behind CloudFront and serve the portal's 404 page at `/disasters/data-visualization`, so the Amplify app-level default (which feeds previews) must stay absolute; set the relative value as a branch override on `develop` and `main`.
- **The STAC and raster URLs stay on openveda in both environments.** They are background fetches, not navigation, and the nasa.gov hosts do not proxy `/api/*`.


## Base path

Set `NEXT_PUBLIC_BASE_PATH` (env var) at build time to serve the app under a subpath (e.g. `/disasters`). An unset env var serves from the root. See `.env.example` and `app/site-config/env.helpers.ts`.

Use `AppLink` or `AppLinkStyled` instead of native anchors to ensure basepaths are handled within links. These components utilize NextLink to automatically manage basepath using next.config.

Use `AppImage` and `AppVideo` instead of NextImage or native elements. These components apply the base path (external URLs pass through unchanged). 

Use root css vars for image path references in app css, as css does not have direct access to env vars to resolve a base path. See `layout.tsx` as an example that exposes a background image as the css var `--image-logo-url`.

Note, portal specific image assets live in `public/`. 

## How It Works

Consumes `@teamimpact/veda-ui-blocks` from npm. Imports `disasters.css` for theming — package img and font assets ship with the package in `dist/img/` and `dist/fonts/` and are bundled automatically by Next.js; no separate setup needed.