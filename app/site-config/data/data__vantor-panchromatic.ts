import type { DataContent } from "@/app/site-config/types";

export const DATA__VANTOR_PANCHROMATIC: DataContent = {
  id: "vantor-panchromatic",

  contentType: "data",

  title: "Vantor Panchromatic",

  description:
    "Vantor Panchromatic imagery collects all visible light into a single grayscale band at 30 centimeters per pixel, the sharpest view in the delivery, for reading structural damage where fine detail matters more than color.",

  thumbnailImage: {
    src: "/img/data/vantor-panchromatic.webp",
    alt: "Vantor panchromatic grayscale satellite image of a dense hillside city, with individual buildings, streets, and steep forested ridges visible in fine detail",
  },

  mastheadImage: {
    src: "/img/data/vantor-panchromatic.webp",
    alt: "Vantor panchromatic grayscale satellite image of a dense hillside city, with individual buildings, streets, and steep forested ridges visible in fine detail",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "severe weather",
    "fire",
    "flood",
    "tropical cyclone",
    "earthquake",
    "landslide",
    "winter weather",
  ],

  relatedContent: ["vantor-true-color", "vantor-color-infrared", "skysat-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Vantor Panchromatic imagery is a single band that integrates the whole visible range into one value per pixel. Gathering light across the full range rather than splitting it among color channels is what buys the extra sharpness: the panchromatic band is delivered at 30 centimeters per pixel, finer than the multispectral tiles from the same satellites. The trade is that it carries no color information and is displayed as grayscale, with brightness standing for how reflective the surface is.",
        "Panchromatic scenes are delivered separately from the multispectral tiles and are not a composite. Color views of the same activation come from the multispectral delivery, which is served as the true color and color infrared layers.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Panchromatic imagery is the layer to reach for when the question is structural. Under clear conditions and at this resolution, features such as a roof that has lost its covering, a wall that has fallen into the street, a bridge deck that has dropped, a landslide scarp cutting through a hillside neighborhood, or vehicles and debris blocking a route may be visible, though what can be resolved in any given scene depends on cloud cover and viewing conditions. Comparing a scene collected before an event with one collected afterward is the usual way it is used for damage assessment.",
        "The absence of color is a real limitation: burned ground, wet ground, and fresh bare soil can look alike in grayscale, and vegetation condition cannot be judged from it at all. Those questions belong to the color infrared and true color layers. Like any optical product, it cannot see through cloud or smoke and cannot observe at night, and coverage is targeted rather than continuous. That last point also limits before and after comparison: it depends on suitable pre-event imagery already existing for the area of interest, which is not guaranteed.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Panchromatic imager on WorldView-3, a very high resolution optical satellite operated by Vantor, formerly Maxar",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["30 centimeters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Vantor; NASA Disasters Program",
        "©2026 Vantor. All rights reserved.",
        "This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, Vantor, Maxar, WorldView, Commercial Satellite Data, Panchromatic, Grayscale, Optical, Very High Resolution, Damage Assessment",
      ],
    },
  ],
};
