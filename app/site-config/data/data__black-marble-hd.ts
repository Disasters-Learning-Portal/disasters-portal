import type { DataContent } from "@/app/site-config/types";

export const DATA__BLACK_MARBLE_HD: DataContent = {
  id: "black-marble-hd",

  contentType: "data",

  title: "Black Marble HD",

  description:
    "HD Black Marble combines VIIRS nighttime lights with Landsat-derived land surface information and OpenStreetMap road networks to create enhanced 30-meter nighttime light imagery for disaster impact assessment.",

  thumbnailImage: {
    src: "/img/data/black-marble-hd.webp",
    alt: "HD Black Marble nighttime lights imagery",
  },

  mastheadImage: {
    src: "/img/data/black-marble-hd.webp",
    alt: "NASA VEDA Black Marble HD nighttime lights imagery",
  },

  themes: ["respond", "recover"],

  categories: [
    "severe weather",
    "fire",
    "flood",
    "tropical cyclone",
    "earthquake",
    "winter weather",
  ],

  relatedContent: ["black-marble-blue-yellow"],

  exploreDataUrl:
    "https://science-dev.data.nasa.gov/disasters/data-visualization/?mission=disasters_learning_portal&mapLon=-95.68645212378203&mapLat=29.73868631885867&mapZoom=8.24913213967701&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=d63e2073-4089-4e7b-95fe-a781bf8b015e$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-08-12T00:00:00.000Z&live=0",

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Black Marble High-Definition (BMHD) images are created by the NASA Black Marble Science team, with directed funding from the NASA-Google Partnership program. Pre-event images will be depicted as a cloud-free monthly composite. There will be a layer to display where clouds are present in the post-event images. Comparing pre- and post-event images images is meant as a visual assessment of outage impacts from the disaster to aid various partners who are working to deliver emergency aids to local communities. Power outage maps like these help disaster response efforts in the short-term as well as long-term monitoring during the crucial stages of disaster recovery.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "NOTE: Black Marble HD images are downscaled from NASA’s Black Marble nighttime lights product (VNP46), and as such are a “modelled” or “best guess” estimate of how lights are distributed at a 30m resolution. These images should be used for visualization purposes, not for quantitative analysis.",
        "The image is in inferno color scale. Yellow represents the presence of more light; dark blue less lights.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "The primary data source, NASA’s Black Marble nighttime lights product suite (VNP46), utilized to generate this product is derived from the Visible Infrared Imaging Radiometer Suite (VIIRS) Day/Night Band (DNB) onboard the Suomi National Polar-orbiting Platform (SNPP) along with high resolution base layers - Landsat derived normalized index products (NDVI and NDWI) and OpenStreetMap (OSM) derived road layer",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["Scaled resolution of 30 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Black Marble Science team",
        "Please cite the following two references when using this data:",
        "Román MO, Stokes EC, Shrestha R, Wang Z, Schultz L, Carlo EA, Sun Q, Bell J, Molthan A, Kalb V, Ji C. Satellite-based assessment of electricity restoration efforts in Puerto Rico after Hurricane Maria. PloS one. 2019 Jun 28;14(6):e0218883.",
        "Román MO, Wang Z, Sun Q, Kalb V, Miller SD, Molthan A, Schultz L, Bell J, Stokes EC, Pandey B, Seto KC. NASA's Black Marble nighttime lights product suite. Remote Sensing of Environment. 2018 Jun 1;210:113-43.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, Black Marble, Black Marble HD, VIIRS, Nighttime Lights, Day/Night Band, DNB, VNP46A2, Landsat, OpenStreetMap, OSM, Power Outage, Disaster Response, Disaster Recovery",
      ],
    },
  ],
};
