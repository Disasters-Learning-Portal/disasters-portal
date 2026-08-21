"use client";
import type { Route } from "next";
import NextLink from "next/link";
import type { ComponentPropsWithRef } from "react";

import { isInternalPath } from "@/app/site-config/base-path.helpers";

export type AppLinkProps = Omit<ComponentPropsWithRef<"a">, "href"> & { href: string };

/**
 * App-wide link component that handles internal and external links,
 * automatically prefixing internal paths with the base path, if defined.
 */
export function AppLink({ href, ...rest }: AppLinkProps) {
  if (!isInternalPath(href)) return <a href={href} {...rest} />;
  return <NextLink href={href as Route} {...rest} />;
}
