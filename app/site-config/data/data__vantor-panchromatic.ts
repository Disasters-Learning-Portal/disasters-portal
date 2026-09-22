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
        "Panchromatic imagery is the layer to reach for when the question is structural. At this resolution a roof that has lost its covering, a wall that has fallen into the street, a bridge deck that has dropped, a landslide scarp cutting through a hillside neighborhood, or vehicles and debris blocking a route are all directly visible. Comparing a scene collected before an event with one collected afterward is the usual way it is used for damage assessment.",
        "The absence of color is a real limitation: burned ground, wet ground, and fresh bare soil can look alike in grayscale, and vegetation condition cannot be judged from it at all. Those questions belong to the color infrared and true color layers. Like any optical product, it cannot see through cloud or smoke and cannot observe at night, and coverage is targeted rather than continuous.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Panchromatic imager on the WorldView very high resolution optical satellites operated by Vantor, formerly Maxar",
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
      paragraphs: ["Vantor; NASA Disasters Program"],
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
