import type { NextConfig } from "next";

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
  typedRoutes: true,
  images: {
    // Allows referencing VEDA dashboard story cover images directly (no repo
    // binary). These are temporary data-story links; remove when they are.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.earthdata.nasa.gov",
        pathname: "/dashboard/**",
      },
    ],
  },
};

export default nextConfig;
