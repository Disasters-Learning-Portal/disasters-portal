"use client";

import type { ComponentProps } from "react";
import { type AppLink, AppLinkStyled } from "@/app/components/AppLink";

type SectionTitle = React.HTMLAttributes<HTMLHeadingElement> & {
  headingAs?: "h2" | "h3" | "h4";
  linkProps?: { label?: string; href?: ComponentProps<typeof AppLink>["href"] };
};

export const SectionHeading = ({
  linkProps: { href, label = "View All" } = {},
  headingAs = "h2",
  children,
  className,
  ...props
}: SectionTitle) => {
  const HeadingAs = headingAs;

  const headingSize = (() => {
    switch (headingAs) {
      case "h4":
        return "font-heading-md";
      case "h3":
        return "font-heading-lg";
      case "h2":
        return "font-heading-2xl";
      default:
        return "font-heading-2xl";
    }
  })();

  return (
    <div className="display-flex flex-justify flex-align-end margin-bottom-3">
      <HeadingAs className={`${headingSize} margin-0 ${className ?? ""}`} {...props}>
        {children}
      </HeadingAs>
      {href && (
        <AppLinkStyled href={href} variant="arrow" color="secondary">
          {label}
        </AppLinkStyled>
      )}
    </div>
  );
};
