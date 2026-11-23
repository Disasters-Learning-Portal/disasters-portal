import { CardSimple } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components/Section";
import type { makeCardSimpleProps } from "../site-config/content.helpers";
import { getGridColumnClass } from "./component.helpers";

type SectionCardSimpleMiniProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: ReturnType<typeof makeCardSimpleProps>[];
};

export const SectionCardSimpleMini = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionCardSimpleMiniProps) => {
  const gridColumnClass = getGridColumnClass(cards.length);
  return (
    <Section {...sectionProps}>
      {sectionHeading && sectionHeading}
      <div className="grid-row grid-gap-2 margin-bottom-neg-2">
        {cards.map(({ id, horizontalImage: image, verticalImage: _, ...rest }) => (
          <div key={id} className={`${gridColumnClass} margin-bottom-2 height-card`}>
            <CardSimple {...rest} image={image} size="sm" colorMode="dark" />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
