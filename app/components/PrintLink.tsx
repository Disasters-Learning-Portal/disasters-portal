"use client";

import { type ComponentProps, forwardRef, type MouseEvent } from "react";
import { AppLink } from "@/app/components/AppLink";

/**
 * A call to action that prints the page it sits on.
 */
export const PrintLink = forwardRef<HTMLAnchorElement, ComponentProps<typeof AppLink>>(
  function PrintLink({ href, children, ...rest }, ref) {
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      window.print();
    };

    return (
      <AppLink {...rest} ref={ref} href={href} prefetch={false} onClick={handleClick}>
        {children}
      </AppLink>
    );
  },
);
