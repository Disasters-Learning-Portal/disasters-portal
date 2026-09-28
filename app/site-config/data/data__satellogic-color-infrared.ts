import type { DataContent } from "@/app/site-config/types";

export const DATA__SATELLOGIC_COLOR_INFRARED: DataContent = {
  id: "satellogic-color-infrared",

  contentType: "data",

  title: "Satellogic Color Infrared Imagery",

  description:
    "Satellogic Color Infrared imagery combines near-infrared, red, and green observations from Satellogic's high-resolution multispectral satellites to highlight vegetation, water, and burned or damaged areas affected by floods, storms, fires, and other hazards.",

  thumbnailImage: {
    src: "/img/data/satellogic-color-infrared.webp",
    alt: "Satellogic satellite image of a dam and reservoir with surrounding roads, buildings, and vegetation",
  },

  mastheadImage: {
    src: "/img/data/satellogic-color-infrared.webp",
    alt: "Satellogic satellite image of a dam and reservoir with surrounding roads, buildings, and vegetation",
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

  relatedContent: ["satellogic-true-color", "sentinel-2-color-infrared", "sentinel-2-true-color"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Satellogic Color Infrared imagery is a false-color composite created using the near-infrared, red, and green bands from Satellogic's four-band (blue, green, red, near-infrared) multispectral sensors. Healthy vegetation reflects strongly in the near-infrared and appears bright red, water absorbs near-infrared light and appears dark blue to black, and burned areas, bare soil, and built surfaces appear in muted brown, gray, and cyan tones. Satellogic operates a vertically integrated constellation of high-resolution multispectral Earth observation satellites. NASA-supported access to Satellogic commercial satellite imagery is provided through NASA's Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Satellogic Color Infrared imagery can be used to identify areas impacted by floods, tropical cyclones, fires, and other hazards. The strong contrast between vegetation and water in the near-infrared makes flooded fields, inundated neighborhoods, and standing water easier to distinguish than in true color imagery, and damaged or stripped vegetation stands out against healthy canopy. The near-infrared band also gives some ability to see through thin haze and smoke, but thick clouds still obscure the surface.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'Includes copyrighted material of Satellogic. All rights reserved.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Four-band (blue, green, red, near-infrared) multispectral imagers on the Satellogic NewSat (Mark-IV and Mark-V) optical satellite constellation operated by Satellogic",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "Approximately 0.5 to 1 meter (native multispectral ground sample distance of about 99 centimeters for Mark-IV and 70 centimeters for Mark-V satellites; super-resolution L1 Ortho SR products are delivered at 70 and 50 centimeters respectively)",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "Satellogic; NASA Commercial Satellite Data Aqcuisition (CSDA) Program; NASA Disasters Program",
        "©2026 Satellogic. All rights reserved.",
        "This work utilized data made available through the NASA Commercial Satellite Data Acquisition (CSDA) Program.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, CSDA, Satellogic, NewSat, Commercial Satellite Data, Color Infrared, False Color, NIR, Optical",
      ],
    },
  ],
};
