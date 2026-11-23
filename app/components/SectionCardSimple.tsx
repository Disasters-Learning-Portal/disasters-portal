import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components/Section";
import type { makeCardSimpleProps } from "@/app/site-config/content.helpers";
import { getCardSimpleSize, getGridColumnClass } from "./component.helpers";

type SectionCardSimpleProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: ReturnType<typeof makeCardSimpleProps>[];
};

export const SectionCardSimple = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionCardSimpleProps) => {
  const gridColumnClass = getGridColumnClass(cards.length);
  const cardSimpleSize = getCardSimpleSize(cards.length);
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {cards.map(({ id, horizontalImage: _, verticalImage: image, ...rest }) => (
          <div key={id} className={`${gridColumnClass} margin-bottom-2 height-card-md`}>
            <CardSimple {...rest} image={image} size={cardSimpleSize} colorMode="dark" />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
