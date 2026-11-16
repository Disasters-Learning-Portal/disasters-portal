import { CardDetailed, type CardDetailedProps } from "@teamimpact/veda-ui-blocks";
import type { ReactNode } from "react";
import { Section, type SectionProps } from "@/app/components";
import type { AppLink } from "@/app/components/AppLink";
import type { IterableItemWithId } from "@/app/site-config/types";

type SectionCardDetailedProps = SectionProps & {
  sectionHeading?: ReactNode;
  cards: IterableItemWithId<CardDetailedProps<typeof AppLink>>[];
};

export const SectionCardDetailed = ({
  sectionHeading,
  cards,
  children,
  ...sectionProps
}: SectionCardDetailedProps) => (
  <Section {...sectionProps}>
    {sectionHeading && sectionHeading}
    <div className="grid-row grid-gap">
      {cards.map(({ id, ...props }) => (
        <div key={id} className="grid-col-12 margin-y-1 desktop:margin-y-2">
          <CardDetailed {...props} className="height-card-sm" />
        </div>
      ))}
    </div>
    {children}
  </Section>
);
