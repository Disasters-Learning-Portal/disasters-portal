import { Card, type CardProps } from "@teamimpact/veda-ui-blocks";
import type { AppLink } from "@/app/components/AppLink";
import { Section, type SectionProps } from "@/app/components/Section";

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
