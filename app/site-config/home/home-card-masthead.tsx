import { CardCTA, type CardCTAProps, type CardProps } from "@teamimpact/veda-ui-blocks";

import { AppLink } from "@/app/components/AppLink";
import { AppVideo } from "@/app/components/AppVideo";

const MOCK_FEATURE_CARDCTAS_PROPS: CardCTAProps<typeof AppLink>[] = [
  {
    title: "Prepare",
    callToAction: {
      label: "Anticipate risk and boost readiness",
      href: "/prepare",
      as: AppLink,
      color: "secondary",
    },
    colorMode: "dark",
  },
  {
    title: "Respond",
    callToAction: {
      label: "Support real-time decisions with timely insights",
      href: "/respond",
      as: AppLink,
      color: "secondary",
    },
    colorMode: "dark",
  },
  {
    title: "Recover",
    callToAction: {
      label: "Assess impacts and rebuild stronger",
      href: "/recover",
      as: AppLink,
      color: "secondary",
    },
    colorMode: "dark",
  },
  {
    title: "Build Resilience",
    callToAction: {
      label: "Safeguard communities for enduring impact",
      href: "/resilience",
      as: AppLink,
      color: "secondary",
    },
    colorMode: "dark",
  },
];

const MOCK_FEATURE_CTACARDS_SECTION = (
  <div className="grid-row grid-gap-lg">
    {MOCK_FEATURE_CARDCTAS_PROPS.map((cardCTAProps, i) => (
      // biome-ignore lint/suspicious/noArrayIndexKey: <hardcoded list, order does not change>
      <div key={i} className="grid-col-12 tablet:grid-col-6 desktop:grid-col-3 padding-top-205">
        <CardCTA {...cardCTAProps} />
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
  title: <h1 className="font-heading-3xl text-bold text-white margin-0">NASA Disasters PORTAL</h1>,
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
