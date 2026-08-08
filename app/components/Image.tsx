import NextImage, { type ImageProps } from "next/image";

import { withBasePath } from "@/app/site-config/base-path";

/**
 * `next/image` applies the configured `basePath` to its own `/_next/image`
 * endpoint but *not* to `src` — an unprefixed `/img/…` resolves to nothing and
 * the optimizer answers 400 (SVGs skip the optimizer and 404 outright).
 *
 * Use this in place of importing `next/image` directly so app-internal sources
 * pick up the base path. Remote URLs pass through untouched.
 */
export function Image({ src, ...rest }: ImageProps) {
  return <NextImage src={typeof src === "string" ? withBasePath(src) : src} {...rest} />;
}
