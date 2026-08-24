import NextImage, { type ImageProps as NextImageProps } from "next/image";

import { withBasePath } from "@/app/site-config/base-path.helpers";

/**
 * Wrapper component to manage asset base path handling
 * because next/image does not do so natively.
 * https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath#images
 */
export function Image({ src, ...rest }: NextImageProps) {
  return <NextImage src={typeof src === "string" ? withBasePath(src) : src} {...rest} />;
}
