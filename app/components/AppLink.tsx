"use client";

/*
 * next/link re-exported behind a "use client" boundary.
 *
 * Server modules (layout, site config, card factories) pass this component as
 * an `as`/`linksAs` prop to veda-ui-blocks client components. Props crossing
 * the server -> client boundary must be serializable, and a component function
 * only serializes when exported from a "use client" module (it becomes a
 * client reference). Importing next/link directly in a server module resolves
 * to its server-side variant, a plain function, which fails at runtime with
 * "Functions cannot be passed directly to Client Components".
 *
 * This is the wrapper pattern recommended by the Next.js docs:
 * https://nextjs.org/docs/app/getting-started/server-and-client-components#third-party-components
 * Serialization rules: https://react.dev/reference/rsc/use-client
 *
 * next/link already applies the base path and renders external hrefs as plain
 * anchors, so no wrapper logic is needed.
 */
export { default as AppLink } from "next/link";
