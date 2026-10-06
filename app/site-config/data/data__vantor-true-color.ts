import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__VANTOR_TRUE_COLOR: DataContent = {
  id: "vantor-true-color",

  contentType: "data",

  title: "Vantor True Color",

  description:
    "Vantor True Color imagery combines the red, green, and blue bands of the WorldView eight-band multispectral sensors into a natural-looking view of the surface at roughly a third of a meter per pixel, supporting visual assessment at the scale of individual buildings.",

  thumbnailImage: {
    src: "/img/data/vantor-true-color.webp",
    alt: "Vantor true color satellite image of a dense residential city edge meeting farmland, crossed by a highway and dotted with cumulus clouds",
  },

  mastheadImage: {
    src: "/img/data/vantor-true-color.webp",
    alt: "Vantor true color satellite image of a dense residential city edge meeting farmland, crossed by a highway and dotted with cumulus clouds",
  },

  themes: ["respond", "resilience", "prepare", "recover"],

  categories: [
    "severe weather",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["vantor-color-infrared", "vantor-panchromatic", "satellogic-true-color"],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-66.99327127139392&mapLat=10.583224224534344&mapZoom=12.77&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=0dedc899-8009-40ad-8fe4-12d4ad5ee89a$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-06-27T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Vantor True Color imagery presents the surface as the eye would see it, so vegetation appears green, bare ground appears brown or tan, water appears dark, and roofs and pavement keep their real colors. It needs no legend to read.",
        "The scenes are delivered as eight-band multispectral tiles from the Vantor (formerly Maxar) WorldView satellites, in the order coastal, blue, green, yellow, red, red edge, near-infrared 1, and near-infrared 2. The true color view is assembled when the tile is displayed by drawing on the red, green, and blue bands of that set. Keeping the full eight bands rather than a pre-flattened color image means the same scenes also serve the color infrared view without a second copy of the data.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "The very high spatial resolution supports damage assessment at the scale of individual structures: collapsed or unroofed buildings, blocked and buckled roads, debris fields, landslide scars, flood inundation, and changes to shorelines and river courses. It also needs no interpretation key, so it can be presented in public communication and briefings as it is.",
        "Because the product uses only visible wavelengths, cloud, smoke, and haze obscure the surface, and no observation is possible at night. Coverage is targeted rather than wall-to-wall: scenes are collected over a specific area of interest during an activation, delivered as adjacent tiles, and there is no fixed revisit. Radar and nighttime lights products are the complement when the sky is closed or the sun is down.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'Includes copyrighted material of Vantor Holdings, Inc. All rights reserved.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Eight-band (coastal, blue, green, yellow, red, red edge, near-infrared 1, near-infrared 2) multispectral imagers on the WorldView-2 and WorldView-3 very high resolution optical satellites operated by Vantor, formerly Maxar",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "Approximately 35 centimeters (multispectral tiles are delivered on a 0.348 meter grid)",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "Vantor; NASA Disasters Program",
        "©2026 Vantor. All rights reserved.",
        "This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, Vantor, Maxar, WorldView, Commercial Satellite Data, True Color, RGB, Optical, Very High Resolution",
      ],
    },
  ],
};
