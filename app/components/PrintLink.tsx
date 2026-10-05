"use client";

import { type ComponentProps, forwardRef, type MouseEvent } from "react";
import { AppLink } from "@/app/components/AppLink";
import { withBasePath } from "@/app/site-config/base-path.helpers";

/**
 * How long to keep a frame around when `afterprint` never arrives. Chrome
 * blocks in `print()` and fires it on return, but not every engine does, and a
 * frame left behind is a second copy of the document sitting in the page.
 */
const FRAME_LIFETIME_MS = 60_000;

/**
 * next/image renders `loading="lazy"`, and a frame parked offscreen never
 * scrolls, so a figure below the first viewport is never asked for: Firefox
 * fetched them anyway, Chrome stopped after the first and Safari fetched none.
 */
async function settleFrame(frameWindow: Window) {
  const images = Array.from(frameWindow.document.images);

  for (const image of images) {
    if (image.loading === "lazy") image.loading = "eager";
  }

  // allSettled: a figure that 404s should not hold the dialog back.
  await Promise.allSettled(images.map((image) => image.decode()));
}

/**
 * The frame is given a page's worth of room rather than being collapsed to
 * nothing: a zero-width frame lays its document out in a zero-width viewport,
 * and the figures and line breaks that come back are not the ones the document
 * was measured for.
 */
function printInBackground(href: string) {
  const frame = document.createElement("iframe");

  // next/link prefixes the base path for us, but an iframe src is a raw DOM
  // assignment and gets no such help: under a base path the frame would ask
  // for /training/<id>/print instead of /disasters/training/<id>/print.
  frame.src = withBasePath(href);
  frame.setAttribute("aria-hidden", "true");
  frame.setAttribute("tabindex", "-1");
  frame.style.cssText =
    "position:fixed;left:-10000px;top:0;width:8.5in;height:11in;border:0;visibility:hidden;";

  let settled = false;
  const remove = () => {
    if (settled) return;
    settled = true;
    frame.remove();
  };

  frame.addEventListener("load", () => {
    const frameWindow = frame.contentWindow;
    if (!frameWindow) {
      remove();
      return;
    }

    frameWindow.addEventListener("afterprint", remove, { once: true });
    window.setTimeout(remove, FRAME_LIFETIME_MS);

    void settleFrame(frameWindow).then(() => {
      if (settled) return;
      frameWindow.print();
    });
  });

  document.body.appendChild(frame);
}

/**
 * A link that prints its target instead of navigating to it.
 *
 * Passed as the `as` of a card's call to action, the way {@link AppLink} is,
 * and forwards its ref so that it stands in for next/link wherever one is
 * expected. The href names the document being printed rather than somewhere
 * to go -- the print view is a render target, not a page to read.
 */
export const PrintLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof AppLink>>(
  function PrintLink({ href, children, ...rest }, ref) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      printInBackground(typeof href === "string" ? href : href.toString());
    };

    return (
      <AppLink {...rest} ref={ref} href={href} prefetch={false} onClick={handleClick}>
        {children}
      </AppLink>
    );
  },
);
