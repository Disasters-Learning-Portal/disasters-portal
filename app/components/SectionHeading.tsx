"use client";

import type { ComponentProps } from "react";
import { type AppLink, AppLinkStyled } from "@/app/components/AppLink";

type SectionTitle = React.HTMLAttributes<HTMLHeadingElement> & {
  titleAs?: "h1" | "h2" | "h3" | "h4";
  linkProps?: { label?: string; href?: ComponentProps<typeof AppLink>["href"] };
};

export const SectionHeading = ({
  linkProps: { href, label = "View All" } = {},
  titleAs = "h2",
  children,
  className,
  ...props
}: SectionTitle) => {
  const TitleAs = titleAs;

  return (
    <div className="display-flex flex-justify flex-align-end margin-bottom-105">
      <TitleAs className={`font-sans-2xl margin-0 ${className ?? ""}`} {...props}>
        {children}
      </TitleAs>
      {href && (
        <AppLinkStyled href={href} variant="arrow" color="secondary">
          {label}
        </AppLinkStyled>
      )}
    </div>
  );
};
