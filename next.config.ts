import type { NextConfig } from "next";

import { BASE_PATH } from "./app/site-config/base-path";

/*
 * Silences the "Next.js inferred your workspace root" warning.
 * This happens when a lockfile exists in a parent directory and Turbopack
 * incorrectly resolves the workspace root.
 *
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
 */
const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // Serve the portal under NEXT_PUBLIC_BASE_PATH (defaults to /disasters).
  // Set NEXT_PUBLIC_BASE_PATH="" to serve from the root.
  basePath: BASE_PATH,
  typedRoutes: true,
  images: {
    // Allowlisted remote hosts for next/image
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
