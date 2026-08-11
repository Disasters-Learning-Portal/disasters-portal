import path from "node:path";
import type { NextConfig } from "next";

/*
 * Silences the "Next.js inferred your workspace root" warning.
 * This happens when a lockfile exists in a parent directory and Turbopack
 * incorrectly resolves the workspace root.
 *
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
 *
 * NOTE (local testing): while @teamimpact/veda-ui-blocks is pnpm-linked from
 * ../tinacms-portal-monorepo, the root must span both repos so Turbopack can
 * resolve files behind the symlink. Restore `__dirname` when the link is gone.
 */
const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname, ".."),
  },
  typedRoutes: true,
  images: {
    // Allowlisted remote hosts for next/image
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
