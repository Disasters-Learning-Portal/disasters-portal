import type { DataContent } from "@/app/site-config/types";

export const DATA__WB57_DYNAMITE: DataContent = {
  id: "wb57-dynamite",

  contentType: "data",

  title: "WB-57 DyNAMITE Airborne Imagery",

  description:
    "High-resolution visible and infrared imagery collected by the DyNAMITE instrument aboard NASA's WB-57 high-altitude aircraft, streamed to responders during flight.",

  thumbnailImage: {
    src: "/img/story/finding-floods__wb57-nosecone.webp",
    alt: "NASA's high-altitude WB-57 aircraft with the DyNAMITE instrument affixed to its nose",
  },

  mastheadImage: {
    src: "/img/story/finding-floods__wb57-nosecone.webp",
    alt: "NASA's high-altitude WB-57 aircraft with the DyNAMITE instrument affixed to its nose",
  },

  themes: ["respond"],

  categories: [
    "earthquake",
    "fire",
    "flood",
    "landslide",
    "severe weather",
    "tropical cyclone",
    "volcano",
  ],

  relatedContent: [],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "NASA WB-57 aircraft, outfitted with the DyNAMITE camera, is a high altitude, rapid reconnaissance asset with the ability to collect 10cm imagery from 50,000 ft. Originally designed to monitor NASA Space Shuttle launches and reentry, DyNAMITE can collect small-footprint visible RGB or mid-wave infrared (MWIR) images over a wide area or livestream full motion video over the Internet through a web browser.",
        "High resolution visible (RGB) and mid-wave infrared (MWIR) images acquired around point targets. Several photos are taken around each target; continuous monitoring can be achieved by maintaining an orbital track around the target of interest. Data may be delivered as individual oriented images or as orthomosaiced GeoTIFFs covering the area around the target. This tool is not optimized for wide area strip map/swath imaging. Resolution and image footprint vary with altitude and selected focal length. Can support multiple mission profiles, such as Full Motion Video (FMV) missions with near real-time tasking; and pre-planned target deck missions for point targets.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The imagery can be used to identify individual structures, debris fields, and flood boundaries along river corridors, at a level of detail that satellite imagery cannot resolve. During the July 2025 Central Texas floods, NASA streamed live video feeds and imagery directly to responders while the flights were still in the air.",
        "Frames are collected through gaps in the clouds rather than as continuous coverage, so availability varies across an area of interest.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "DyNAMITE, a nose-mounted visible and infrared imager aboard NASA's WB-57 high-altitude aircraft, operated by NASA's Johnson Space Center",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "10 cm. Spatial resolution and footprint size are dependent on focal length and altitude.",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: ["NASA Johnson Space Center, NASA Disasters Program"],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, WB-57, DyNAMITE, Airborne, Visible, Infrared, MWIR, High Resolution, Flood, Disaster Response",
      ],
    },
  ],
};
