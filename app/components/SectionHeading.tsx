"use client";

import type { ComponentProps } from "react";
import { type AppLink, AppLinkStyled } from "@/app/components/AppLink";

type SectionHeadingProps = ComponentProps<"h2"> & {
  linkProps?: { label?: string; href?: ComponentProps<typeof AppLink>["href"] };
};

export const SectionHeading = ({
  linkProps: { href, label = "View All" } = {},
  children,
  className,
  ...props
}: SectionHeadingProps) => {
  return (
    <div className="display-flex flex-justify flex-align-end margin-bottom-105">
      <h2 className={`${className ?? ""} font-sans-2xl margin-0`} {...props}>
        {children}
      </h2>
      {href && (
        <AppLinkStyled href={href} variant="arrow" color="secondary">
          {label}
        </AppLinkStyled>
      )}
    </div>
  );
};
