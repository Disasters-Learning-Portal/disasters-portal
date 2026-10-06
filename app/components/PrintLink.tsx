"use client";

import { type ComponentProps, forwardRef, type MouseEvent } from "react";
import { AppLink } from "@/app/components/AppLink";

async function loadAllImages() {
  const images = Array.from(document.images);

  // Load images farther down the page so they are included when printing.
  for (const image of images) image.loading = "eager";

  // decode() waits until the browser has prepared each image for display.
  // Promise.allSettled() waits for every decode to finish, whether it succeeds or
  // fails, so one broken image does not prevent window.print() from running.
  await Promise.allSettled(images.map((image) => image.decode()));
}

export const PrintLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof AppLink>>(
  function PrintLink({ href, children, ...rest }, ref) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      void loadAllImages().then(() => window.print());
    };

    return (
      <AppLink {...rest} ref={ref} href={href} prefetch={false} onClick={handleClick}>
        {children}
      </AppLink>
    );
  },
);
