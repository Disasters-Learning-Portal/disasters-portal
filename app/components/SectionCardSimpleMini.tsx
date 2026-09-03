import { CardSimple, type CardSimpleProps } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { AppLink } from "@/app/components/AppLink";
import type { IterableItemWithId } from "@/app/site-config/types";
import { getGridColumnClass } from "./component.helpers";

type SectionCardSimpleMiniProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardSimpleProps<typeof AppLink>>[];
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
        {cards.map((props) => (
          <div key={props.id} className={`${gridColumnClass} margin-bottom-2 height-card`}>
            <CardSimple size="compact" {...props} />
          </div>
        ))}
      </div>
      {children}
    </Section>
  );
};
