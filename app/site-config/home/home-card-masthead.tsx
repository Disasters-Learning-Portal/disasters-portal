import { CardCTA, type CardProps } from "@teamimpact/veda-ui-blocks";

import { AppLink } from "@/app/components/AppLink";
import { AppVideo } from "@/app/components/AppVideo";
import { getTypedEntries } from "../typed.helpers";
import { CONTENT_THEMES } from "../types";

const MOCK_FEATURE_CTACARDS_SECTION = (
  <div className="grid-row grid-gap-lg">
    {getTypedEntries(CONTENT_THEMES).map(([theme, themeDetails], i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <hardcoded list, order does not change>
      <div key={i} className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 padding-top-205">
        <CardCTA
          {...{
            title: themeDetails.label,
            callToAction: {
              label: themeDetails.description,
              href: `/${theme}`,
              as: AppLink,
              color: "secondary",
            },
            colorMode: "dark",
          }}
        />
      </div>
    ))}
  </div>
);

export const MOCK_CARD_MASTHEAD: CardProps = {
  className: "blocks-card--homepage",
  image: (
    <AppVideo
      src="/img/home/home-card-hero-video.mp4"
      aria-hidden="true"
      tabIndex={-1}
      poster="/img/home/home-card-hero-poster.webp"
      autoPlay
      muted
      loop
      playsInline
    />
  ),
  title: "NASA Disasters PORTAL",
  description: "Empowering disaster insights with actionable Earth science information",
  colorMode: "dark",
  isMastHead: true,
  children: MOCK_FEATURE_CTACARDS_SECTION,
  callToAction: {
    label: "Learn About Us",
    href: "/about",
    color: "secondary",
  },
};
