import { Card, type CardProps } from "@teamimpact/veda-ui-blocks";
import type { AppLink } from "@/app/components/AppLink";

export const PageMasthead = (cardProps: CardProps<typeof AppLink>) => (
  <div className="display-flex minh-masthead">
    <Card {...cardProps} />
  </div>
);
