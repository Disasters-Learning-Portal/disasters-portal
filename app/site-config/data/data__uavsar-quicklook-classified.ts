import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__UAVSAR_QUICKLOOK_CLASSIFIED: DataContent = {
  id: "uavsar-quicklook-classified",

  contentType: "data",

  title: "UAVSAR Quicklook Flood Classification",

  description:
    "Rapid preliminary flood classification generated from UAVSAR radar imagery within hours of a flight, providing an early view of open water and inundated areas while the fully processed classification is still being produced.",

  thumbnailImage: {
    src: "/img/data/uavsar-quicklook-classified.webp",
    alt: "UAVSAR quicklook flood classification over Tampa Bay, Florida collected October 14, 2024, with open water in blue, land in grey, and detected flooding in cyan",
  },

  mastheadImage: {
    src: "/img/data/uavsar-quicklook-classified.webp",
    alt: "UAVSAR quicklook flood classification over Tampa Bay, Florida collected October 14, 2024, with open water in blue, land in grey, and detected flooding in cyan",
  },

  themes: ["respond"],

  categories: ["flood", "tropical cyclone", "severe weather"],

  relatedContent: ["uavsar-unet-classified", "uavsar-rgb", "uavsar-displacement"],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-81.73828125&mapLat=28.424460039439516&mapZoom=7.65&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=d7b0fce0-71d5-4394-ae65-740f8f24c7fe$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2024-10-14T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The quicklook classification is a rapid, preliminary flood product generated from UAVSAR polarimetric radar imagery shortly after a flight is collected. It identifies open water and inundated areas so that responders have a usable flood extent while the more thorough U-Net classification and the fully processed composites are still being produced.",
        "Because it is optimized for speed rather than for accuracy, the quicklook product is delivered per flight line on a subdaily cadence and is not mosaicked into event-wide composites. It is best understood as the first look at a scene rather than the authoritative flood map for it.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Use the quicklook classification in the first hours and days of a flood response, when timeliness matters more than precision and when the alternative is having no radar-derived flood extent at all. It is well suited to identifying which areas were affected and where to direct attention or further collection.",
        "For interpretation, blue areas indicate open water, although some roads and other smooth surfaces may also be misclassified as blue. Light blue or cyan areas indicate likely flooding beneath vegetation and tree canopy. Pink areas indicate potentially flooded locations with lower confidence, often in more developed areas where radar scattering can be more complex.",
        "Supersede it with the UAVSAR U-Net Flood Classification once that product is available for the same scene. Quicklook results should not be used for damage assessment, for official flood extent determinations, or for any purpose where a preliminary misclassification would be costly, and they should be corroborated against the source UAVSAR imagery before being acted on.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Uninhabited Aerial Vehicle Synthetic Aperture Radar (UAVSAR), an L-band fully polarimetric synthetic aperture radar flown on a NASA Gulfstream III (C-20A) aircraft and operated by NASA's Jet Propulsion Laboratory",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "6 meter spatial resolution. UAVSAR observations are collected in approximately 22-kilometer-wide airborne swaths and delivered per flight line as geocoded classified imagery on a subdaily cadence.",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Jet Propulsion Laboratory (JPL) UAVSAR team and the NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, JPL, UAVSAR, SAR, Synthetic Aperture Radar, L-band, Quicklook, Preliminary, Classification, Flood, Inundation, Rapid Response, Airborne, Disaster Response",
      ],
    },
  ],
};
