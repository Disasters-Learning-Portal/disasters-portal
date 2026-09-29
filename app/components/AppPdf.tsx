import type { ComponentProps } from "react";

import { withBasePath } from "@/app/site-config/base-path.helpers";

/**
 * Raw <iframe> does not get the base path from Next, which only prefixes its
 * own assets. This wrapper applies it to src, mirroring AppVideo.
 *
 * The fragment tunes the browser's built-in viewer for a frame this narrow:
 * `view=FitH` fits the page width instead of opening at 100% zoom, and
 * `pagemode=none` keeps the thumbnail rail closed so the page gets the space.
 * Viewers that don't support these parameters ignore them.
 */
const VIEWER_PARAMS = "#pagemode=none&view=FitH";

export function AppPdf({ src, ...rest }: ComponentProps<"iframe">) {
  return (
    <iframe src={typeof src === "string" ? withBasePath(src) + VIEWER_PARAMS : src} {...rest} />
  );
}
