import { Section, type SectionProps } from "@/app/components/Section";
import type { SectionOverviewItemProps } from "@/app/site-config/event/event.helpers";

const ContainerItem = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <div className="margin-right-8 margin-bottom-2">
    <div className="font-ui-3xs line-height-ui-5 text-bold text-uppercase text-ls-1 text-base-dark margin-bottom-05">
      {title}
    </div>
    {content}
  </div>
);

type SectionOverviewProps = SectionProps & SectionOverviewItemProps;

export const SectionOverview = ({
  overviewItems,
  className = "",
  children,
  ...rest
}: SectionOverviewProps) => {
  if (overviewItems.length === 0) return null;

  return (
    <Section className={`padding-bottom-3 ${className}`} {...rest}>
      <div className="display-flex flex-wrap border-top border-bottom border-base-lighter padding-top-3 padding-bottom-1">
        {overviewItems.map((i) => (
          <ContainerItem key={i.title} {...i} />
        ))}
      </div>
      {children}
    </Section>
  );
};
