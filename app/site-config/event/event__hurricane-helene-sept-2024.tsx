import { DATA__HURRICANE_HELENE_SEPT_2024 } from "@/app/site-config/data";

import type { EventContent } from "@/app/site-config/types";

export const EVENT__HURRICANE_HELENE_SEPT_2024: EventContent = {
  id: "hurricane-helene-sept-2024",

  contentType: "event",

  title: "Hurricane Helene September 2024",

  datePublished: "2024-09-26",

  thumbnailImage: {
    src: "/img/event/hurricane-helene-sept-2024.webp",
    alt: "Hurricane Helene satellite imagery",
  },

  mastheadImage: {
    src: "/img/event/hurricane-helene-sept-2024.webp",
    alt: "Hurricane Helene satellite imagery",
  },

  themes: ["respond"],

  categories: ["tropical cyclone"],

  region: "Southeastern U.S.",

  startDate: "2024-09-25",

  linkDHSFEMA: {
    label: "Learn more",
    href: "https://www.fema.gov/hurricane-helene",
  },

  linkUSGovernment: {
    label: "Learn more",
    href: "https://usa.gov/hurricane-helene",
  },

  body: [
    {
      type: "text",
      paragraphs: [
        "Hurricane Helene made landfall in Florida's Big Bend region as a Category 4 hurricane on Sept. 26, 2024. Helene brought damaging winds, storm surge, flooding, landslides, and widespread power outages across the southeastern U.S. and southern Appalachians. In the weeks after landfall, communities across the region continued response and recovery work amid impacts to roads, structures, vegetation, and electrical service.",
        "The NASA Disasters Program worked with FEMA, the U.S. Geological Survey, the Florida Division of Emergency Management, the American Red Cross, and state emergency management agencies to provide Earth observation data that supported situational awareness and response planning. The program shared products including Black Marble nighttime-lights and experimental luminosity-change products, pre- and post-event Landsat and Copernicus Sentinel imagery, vegetation-change analysis, synthetic aperture radar-derived water extent maps, and landslide mapping support to help partners identify possible power outages, flooding, landslides, and other storm impacts.",
      ],
    },

    {
      type: "image",
      src: "/img/event/hurricane-helene-power-loss-oct-2-2024.webp",
      alt: "Experimental NASA Black Marble ZIP code power loss map for Hurricane Helene impacts across Tennessee, North Carolina, South Carolina, and Georgia.",
      width: 710,
      height: 564,
      caption:
        "The NASA Disasters Program created an experimental ZIP code power loss map showing the estimated percentage of luminosity loss within various ZIP codes throughout Tennessee, North Carolina, South Carolina, and Georgia, as of Oct. 2, 2024. The map was derived from a subset of NASA Black Marble Day/Night Band (BRDF-Corrected) data captured before (August 2024) and after (Oct. 2, 2024) the Helene struck. This dataset is experimental and should only be used for situational awareness and data corroboration. Credits: NASA Black Marble Science team",
    },

    {
      type: "sectionCardGallery",
      heading: "Related Data",
      cards: DATA__HURRICANE_HELENE_SEPT_2024,
    },
  ],
};
