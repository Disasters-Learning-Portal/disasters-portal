import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components/Section";
import type { makeCardSimpleProps } from "@/app/site-config/content.helpers";

type SectionCardSimpleMosaicProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: [
    ReturnType<typeof makeCardSimpleProps>,
    ReturnType<typeof makeCardSimpleProps>,
    ReturnType<typeof makeCardSimpleProps>,
    ReturnType<typeof makeCardSimpleProps>,
  ];
};

/**
 * Mosaic grid: [0] featured (2 cols), [1] regular (1 col), [2–3] compact stacked (1 col).
 * Expects exactly 4 cards.
 */
export const SectionCardSimpleMosaic = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionCardSimpleMosaicProps) => {
  const [
    { verticalImage: v0, horizontalImage: _h0, ...rest0 },
    { verticalImage: v1, horizontalImage: _h1, ...rest1 },
    { verticalImage: _v2, horizontalImage: h2, ...rest2 },
    { verticalImage: _v3, horizontalImage: h3, ...rest3 },
  ] = cards;
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {/* Featured card: full-width → desktop: 2 of 4 cols */}
        <div className="grid-col-12 desktop:grid-col-6 margin-bottom-2 height-card-md">
          <CardSimple {...rest0} image={v0} colorMode="dark" />
        </div>
        {/* Regular card: full-width → tablet: half → desktop: 1 of 4 cols */}
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 height-card-md">
          <CardSimple {...rest1} image={v1} size="sm" colorMode="dark" />
        </div>
        {/* Stacked half-height cards: full-width → tablet: half → desktop: 1 of 4 cols */}
        <div className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 margin-bottom-2 display-flex flex-column height-card-md">
          <div className="flex-1 margin-bottom-2">
            <CardSimple {...rest2} image={h2} size="sm" colorMode="dark" />
          </div>
          <div className="flex-1">
            <CardSimple {...rest3} image={h3} size="sm" colorMode="dark" />
          </div>
        </div>
      </div>
      {children}
    </Section>
  );
};
