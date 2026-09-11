import type { DataContent } from "@/app/site-config/types";

export const DATA__SATELLOGIC_TRUE_COLOR: DataContent = {
  id: "satellogic-true-color",

  contentType: "data",

  title: "Satellogic True Color Imagery",

  description:
    "Satellogic True Color imagery combines red, green, and blue observations from Satellogic's high-resolution multispectral satellites to provide a natural-looking, sub-meter to meter-scale view of the Earth's surface for disaster response and assessment.",

  thumbnailImage: {
    src: "/img/data/satellogic-true-color.webp",
    alt: "Satellogic true color satellite image of a dam and reservoir with surrounding roads, buildings, and vegetation",
  },

  mastheadImage: {
    src: "/img/data/satellogic-true-color.webp",
    alt: "Satellogic true color satellite image of a dam and reservoir with surrounding roads, buildings, and vegetation",
  },

  themes: ["respond", "build", "prepare", "recover"],

  categories: [
    "severewx",
    "fire",
    "heat",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: [
    "satellogic-color-infrared",
    "sentinel-2-true-color",
    "sentinel-2-color-infrared",
  ],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Satellogic True Color imagery is created using the red, green, and blue visible wavelength bands from Satellogic's four-band (blue, green, red, near-infrared) multispectral sensors to provide a natural-looking representation of the Earth's surface, similar to how it would appear to the naked eye from space. Satellogic operates a vertically integrated constellation of high-resolution multispectral Earth observation satellites. NASA-supported access to Satellogic commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Satellogic True Color imagery can be used for detailed visual assessment of surface conditions before and after natural hazards. The very high spatial resolution supports identification of storm and tropical cyclone damage to buildings, roads, and infrastructure, flooding and standing water, wildfire impacts, and other visible surface changes at the scale of individual structures. Because the product uses visible wavelengths, clouds, smoke, haze, and other atmospheric conditions may obscure the surface.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Four-band (blue, green, red, near-infrared) multispectral imagers on the Satellogic NewSat (Mark-IV and Mark-V) optical satellite constellation operated by Satellogic",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "Approximately 0.5 to 1 meter (native multispectral ground sample distance of about 99 centimeters for Mark-IV and 70 centimeters for Mark-V satellites; super-resolution L1 Ortho SR products are delivered at 70 and 50 centimeters respectively)",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "Satellogic; NASA Commercial Satellite Data Acquisition (CSDA) Program; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, CSDA, Satellogic, NewSat, Commercial Satellite Data, True Color, RGB, Optical",
      ],
    },
  ],
};
