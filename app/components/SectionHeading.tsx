"use client";

import type { ComponentProps } from "react";
import { Link, type LinkProps } from "@/app/components/Link";

type SectionHeadingProps = ComponentProps<"h2"> & {
  href?: LinkProps["href"];
};

export const SectionHeading = ({ href, children, className, ...props }: SectionHeadingProps) => {
  return (
    <div className="display-flex flex-justify flex-align-center">
      <h2 className={`${className ?? ""} font-sans-2xl padding-bottom-2 margin-0`} {...props}>
        {children}
      </h2>
      {href && (
        <Link href={href} variant="arrow" size="lg">
          View All
        </Link>
      )}
    </div>
  );
};
