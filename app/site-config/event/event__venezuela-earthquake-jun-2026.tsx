import { Link } from "@teamimpact/veda-ui-blocks";
import { Fragment } from "react";

import { DATA__VENEZUELA_EQ_JUN_2026 } from "@/app/site-config/data";

import type { EventContent } from "@/app/site-config/types";

export const EVENT__VENEZUELA_EQ_JUN_2026: EventContent = {
  id: "venezuela-earthquake-jun-2026",

  contentType: "event",

  title: "Venezuela Earthquakes June 2026",

  lastUpdatedDate: "2026-06-24",

  thumbnailImage: {
    src: "/img/event/template-hero.webp",
    alt: "Damage and hazard impacts from the June 2026 Venezuela earthquakes",
  },

  mastheadImage: {
    src: "/img/event/template-hero.webp",
    alt: "Damage and hazard impacts from the June 2026 Venezuela earthquakes",
  },

  themes: ["respond"],

  categories: ["earthquake"],

  region: "Venezuela, South America",

  startDate: "June 24, 2026",

  linkUSGovernment: {
    label: "Learn more",
    href: "https://www.state.gov/responding-to-venezuela-earthquakes",
  },

  body: [
    {
      type: "text",
      paragraphs: [
        <Fragment key="1">
          On June 24, 2026, magnitude 7.2 and 7.5 earthquakes struck the northern coast of Venezuela
          west of Caracas, collapsing buildings and disrupting transportation, power, and
          communications, with coastal La Guaira and communities near Morón among the hardest hit.
          In coordination with the U.S. Department of State, the NASA Disasters Program supported
          the U.S. Geological Survey (USGS), Rescue International, and Colombia’s national
          disaster-management agency. Imagery from NASA’s{" "}
          <Link href="https://science.nasa.gov/earth-science/csda/">
            Commercial Satellite Data Acquisition Program
          </Link>{" "}
          and Sentinel 1 SAR data were used to produce structure-level damage assessments and
          change-detection products to support search-and-rescue operations. NISAR surface
          displacement maps supported USGS efforts to characterize the hazard, and LHASA analyses
          aided their landslide detection. NASA also hosted a capacity-building meeting with
          stakeholders to share data and facilitate deeper conversations with subject matter
          experts.
        </Fragment>,
      ],
    },

    {
      type: "image",
      src: "/img/event/venezuela-earthquake-damage-assessment-jun-2026.webp",
      alt: "Structure-level damage assessment data for the June 2026 Venezuela earthquakes.",
      width: 1280,
      height: 672,
      caption:
        "NASA-funded researchers at Oregon State University produced structure-level damage assessment data based on Sentinel-1 SAR. This data was incorporated into national and international dashboards supporting search and rescue. Credit: NASA",
    },

    {
      type: "sectionCardGallery",
      heading: "Related Data",
      cards: DATA__VENEZUELA_EQ_JUN_2026,
    },
  ],
};
