import type { DataContent } from "@/app/site-config/types";

export const DATA__BLACK_MARBLE_BRDF: DataContent = {
  id: "black-marble-brdf",

  contentType: "data",

  title: "Black Marble BRDF-Corrected Nighttime Lights",

  description:
    "Daily VIIRS nighttime lights corrected for moonlight, atmosphere, and viewing geometry (BRDF), delivered with a cloud-free monthly pre-event composite and a daily cloud mask for assessing power outages and recovery after disasters.",

  thumbnailImage: {
    src: "/img/data/black-marble-brdf.webp",
    alt: "Black Marble nighttime lights composite over Georgia and the Carolinas",
  },

  mastheadImage: {
    src: "/img/data/black-marble-brdf.webp",
    alt: "Black Marble nighttime lights composite over Georgia and the Carolinas",
  },

  themes: ["respond", "recover"],

  categories: ["severewx", "fire", "flood", "tropical cyclone", "earthquake", "winter weather"],

  relatedContent: ["black-marble-hd", "black-marble-blue-yellow"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The Black Marble BRDF-Corrected Nighttime Lights product is NASA's daily, science-quality nighttime lights layer (VNP46A2 from Suomi NPP and VJ146A2 from NOAA-20). Raw Day/Night Band radiances are corrected for moonlight, atmospheric effects, and the angle at which the satellite views the surface using a Bidirectional Reflectance Distribution Function (BRDF) model, so that night-to-night changes in brightness reflect changes on the ground rather than changes in observing conditions.",
        "For each disaster activation the product is delivered as three layers that are meant to be used together: the daily BRDF-corrected nighttime lights for the days following the event, a cloud-free monthly composite from before the event that serves as the baseline, and a daily cloud mask (1 = cloud, 0 = clear) that shows where the daily image was obscured. The monthly composite is a pre-event image only; the post-event imagery is in the daily layer.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Compare a post-event daily image against the pre-event monthly composite to identify areas where nighttime lights have dimmed or disappeared, which can indicate power outages, and track the return of lights over subsequent nights as electricity is restored. Always check the cloud mask for the same night before interpreting a dark area: cloud cover, not an outage, is the most common reason a normally lit area appears dark in a single daily image.",
        "Radiance is rendered on a fixed 0 to 255 scale so that days are directly comparable. Because the product is affected by residual cloud, snow cover, lunar phase, and seasonal vegetation, changes in brightness should be interpreted qualitatively and corroborated with other outage information rather than used as the sole basis for determining where power is out.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Visible Infrared Imaging Radiometer Suite (VIIRS) Day/Night Band (DNB) aboard the NASA/NOAA Suomi National Polar-orbiting Partnership (Suomi NPP) and NOAA-20 satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "500 meters (15 arc-second grid), daily; monthly pre-event composite on the same grid",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Black Marble Science Team, NASA Goddard Space Flight Center (GSFC), and the NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, Black Marble, VIIRS, Nighttime Lights, Day/Night Band, DNB, BRDF, VNP46A2, VJ146A2, Cloud Mask, Monthly Composite, Power Outage, Disaster Response, Disaster Recovery",
      ],
    },
  ],
};
