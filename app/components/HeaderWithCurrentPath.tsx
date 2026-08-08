"use client";
import { Header } from "@teamimpact/veda-ui-blocks";
import { usePathname } from "next/navigation";

import { withBasePath } from "@/app/site-config/base-path";
import { MOCK_HEADER_PROPS } from "../site-config/header";

/**
 * Site navigation header component with active route highlighting.
 * Uses current pathname to highlight the active nav item.
 */
export function HeaderWithCurrentPath() {
  // usePathname() strips the base path, but the nav hrefs carry it — re-add it
  // so the Header's active-route comparison still matches.
  const pathname = usePathname();
  return <Header {...MOCK_HEADER_PROPS} currentPath={withBasePath(pathname)} />;
}
