"use client";

import { Link } from "@teamimpact/veda-ui-blocks";

import type { ComponentProps } from "react";

import { AppLink } from "@/app/components/AppLink";

type SectionHeadingProps = ComponentProps<"h2"> & {
  href?: string;
};

export const SectionHeading = ({ href, children, className, ...props }: SectionHeadingProps) => {
  return (
    <div className="display-flex flex-justify flex-align-center">
      <h2 className={`${className ?? ""} font-sans-2xl padding-bottom-2 margin-0`} {...props}>
        {children}
      </h2>
      {href && (
        <Link as={AppLink} href={href} variant="arrow" size="lg">
          View All
        </Link>
      )}
    </div>
  );
};
