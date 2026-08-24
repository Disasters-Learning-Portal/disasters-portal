// Passing next/link directly from a server module as an `as`/`linksAs` prop fails RSC serialization.
// Serialization: https://react.dev/reference/rsc/use-client
"use client";

import {
  Link as VedaUIBlocksLink,
  type LinkProps as VedaUIBlocksLinkProps,
} from "@teamimpact/veda-ui-blocks";
import NextLink from "next/link";

export type LinkProps = Omit<VedaUIBlocksLinkProps<typeof NextLink>, "as">;

/**
 * Wrapper component to manage asset base path handling.
 * Because next/link manages this natively, Links are passed `as` NextLink
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#links
 */
export function Link(props: LinkProps) {
  return <VedaUIBlocksLink {...props} as={NextLink} />;
}
