import type { DataContent } from "@/app/site-config/types";

export const DATA__BLACK_MARBLE_BLUE_YELLOW: DataContent = {
  id: "black-marble-blue-yellow",

  contentType: "data",

  title: "Black Marble Nighttime Blue/Yellow Composite",

  description:
    "The Black Marble Nighttime Blue/Yellow Composite uses VIIRS nighttime observations to visualize artificial lights, fires, and clouds, supporting rapid assessment of potential power outages and other disaster impacts.",

  thumbnailImage: {
    src: "/img/data/black-marble-blue-yellow.webp",
    alt: "Black Marble Nighttime Blue/Yellow Composite imagery",
  },

  mastheadImage: {
    src: "/img/data/black-marble-blue-yellow.webp",
    alt: "Black Marble Nighttime Blue/Yellow Composite imagery",
  },

  themes: ["respond", "recover"],

  categories: ["severewx", "fire", "flood", "tropical cyclone", "earthquake", "winter weather"],

  relatedContent: [],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Black Marble Nighttime Blue/Yellow Composite is a false-color visualization derived from nighttime observations collected by the Visible Infrared Imaging Radiometer Suite (VIIRS). The composite combines the VIIRS Day/Night Band (DNB) with the M15 longwave infrared band, with nighttime lights and other sources of emitted light generally appearing in shades of yellow and clouds appearing in shades of blue to yellow or white. The product provides a daily view of nighttime conditions that can help distinguish illuminated areas from cloud cover and identify changes in nighttime lighting following a disaster.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The Black Marble Nighttime Blue/Yellow Composite can be used to identify nighttime lights and evaluate changes in illumination before and after disasters. Comparing cloud-free observations over time can help identify areas experiencing potential power outages and track restoration, particularly in rural, isolated, or off-grid communities where other outage information may be limited. The imagery can also highlight light emitted by wildfires, boats, and other nighttime sources. Because the product is based on at-sensor observations and is affected by cloud cover, lunar illumination, viewing conditions, and other factors, changes in brightness should be interpreted qualitatively and should not be used as the sole source of information for determining power outages.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Visible Infrared Imaging Radiometer Suite (VIIRS) aboard the NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) and NOAA-20 satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["Approximately 500 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Goddard Space Flight Center (GSFC), NASA Earth Science Data and Information System (ESDIS), NASA Land, Atmosphere Near real-time Capability for EOS (LANCE), NOAA, and U.S. Naval Research Laboratory",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, VIIRS, Black Marble, Nighttime Lights, Blue/Yellow Composite, Day/Night Band, DNB, M15, Suomi NPP, NOAA-20, Power Outage, Disaster Response",
      ],
    },
  ],
};
