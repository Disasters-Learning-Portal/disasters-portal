import type { DataContent } from "@/app/site-config/types";

export const DATA__VANTOR_COLOR_INFRARED: DataContent = {
  id: "vantor-color-infrared",

  contentType: "data",

  title: "Vantor Color Infrared",

  description:
    "Vantor Color Infrared imagery combines the near-infrared, red, and green bands of the WorldView eight-band multispectral sensors into a false-color view in which healthy vegetation glows red and water reads near-black, sharpening the distinction between damaged and intact ground cover.",

  thumbnailImage: {
    src: "/img/data/vantor-color-infrared.webp",
    alt: "Vantor color infrared satellite image in which farmland and tree cover appear bright red while streets, rooftops, and a highway appear in pale gray and cyan",
  },

  mastheadImage: {
    src: "/img/data/vantor-color-infrared.webp",
    alt: "Vantor color infrared satellite image in which farmland and tree cover appear bright red while streets, rooftops, and a highway appear in pale gray and cyan",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "severe weather",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["vantor-true-color", "vantor-panchromatic", "satellogic-color-infrared"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Vantor Color Infrared imagery is a false-color composite that shifts the near-infrared into view. Healthy vegetation reflects strongly in the near-infrared and appears bright red, stressed or stripped vegetation fades toward pink and brown, water absorbs near-infrared light and appears near-black, and pavement, roofs, and bare soil fall into muted gray, cyan, and tan.",
        "The scenes are delivered as eight-band multispectral tiles from the Vantor (formerly Maxar) WorldView satellites, in the order coastal, blue, green, yellow, red, red edge, near-infrared 1, and near-infrared 2. The color infrared view is assembled when the tile is displayed by drawing on the first near-infrared band together with red and green. Because the full eight bands are retained, the same scenes also serve the true color view, and the two can be compared pixel for pixel.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Color infrared is the better choice wherever the question concerns vegetation or the water line. The strong contrast between vegetation and water makes flooded fields, inundated neighborhoods, and standing water easier to pick out than in true color, and burn scars, defoliation, and debris-scoured ground stand out clearly against the surrounding canopy. At this resolution those distinctions hold down to individual trees and yards.",
        "The near-infrared band sees through thin haze and smoke better than visible light does, but thick cloud still blocks the surface entirely and no observation is possible at night. Coverage is targeted rather than wall-to-wall, delivered as adjacent tiles over an area of interest during an activation, with no fixed revisit. The false-color rendering needs an interpretation key, so it is usually read alongside the true color view rather than instead of it.",
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
        "NASA, Vantor, Maxar, WorldView, Commercial Satellite Data, Color Infrared, False Color, NIR, Optical, Very High Resolution",
      ],
    },
  ],
};
