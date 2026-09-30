import type { LinkProps } from "@teamimpact/veda-ui-blocks";
import { Section, type SectionProps } from "@/app/components/Section";
import { type AppLink, AppLinkStyled } from "./AppLink";

type SectionOverviewProps = Omit<SectionProps, "children"> & {
  items: {
    label: string;
    link: Omit<LinkProps<typeof AppLink>, "color" | "size" | "variant" | "children"> & {
      label: string;
    };
  }[];
};

export const SectionOverview = ({ items, className = "", ...rest }: SectionOverviewProps) => {
  if (items.length === 0) return null;

  return (
    <Section className={`padding-bottom-3 ${className}`} {...rest}>
      <div
        className="display-flex flex-wrap border-top border-bottom border-base-lighter padding-y-3"
        style={{ gap: "4rem" }}
      >
        {items.map(({ label, link: { label: linkLabel, ...linkProps } }) => (
          <div key={label}>
            <div className="font-ui-3xs line-height-ui-5 text-bold text-uppercase text-ls-1 text-base-dark margin-bottom-05">
              {label}
            </div>
            <AppLinkStyled {...linkProps} variant="text">
              {linkLabel}
            </AppLinkStyled>
          </div>
        ))}
      </div>
    </Section>
  );
};
