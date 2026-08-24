"use client";
import { Header } from "@teamimpact/veda-ui-blocks";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { MOCK_HEADER_PROPS } from "@/app/site-config/header";

/**
 * Site navigation header component with active route highlighting.
 * Uses current pathname to highlight the active nav item.
 */
export function HeaderWithCurrentPath() {
  const pathname = usePathname();
  return <Header {...MOCK_HEADER_PROPS} currentPath={pathname} linksAs={NextLink} />;
}
