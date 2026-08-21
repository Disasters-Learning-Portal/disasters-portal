import { Card, type CardProps } from "@teamimpact/veda-ui-blocks";
import { Section, type SectionProps } from "@/app/components";
import type { AppLink } from "@/app/components/AppLink";

type SectionCardFeaturedProps = SectionProps & {
  card: CardProps<typeof AppLink, typeof AppLink>;
};

export const SectionCardFeatured = ({
  card,
  children,
  ...sectionProps
}: SectionCardFeaturedProps) => (
  <Section {...sectionProps}>
    <div className="grid-row">
      <Card {...card} />
    </div>
    {children}
  </Section>
);
