import type { DataContent } from "@/app/site-config/types";

export const DATA__ECOSTRESS_LAND_SURFACE_TEMPERATURE: DataContent = {
  id: "ecostress-land-surface-temperature",

  contentType: "data",

  title: "ECOSTRESS Land Surface Temperature",

  description:
    "Atmospherically corrected land surface temperature measured from the International Space Station by the ECOSTRESS thermal infrared radiometer, showing how hot the ground, vegetation, rooftops, and other surfaces actually are.",

  thumbnailImage: {
    src: "/img/data/ecostress-land-surface-temperature.png",
    alt: "ECOSTRESS nighttime land surface temperature over the Los Angeles, California area on January 8, 2025, with two bright yellow hot spots marking actively burning wildfires",
  },

  mastheadImage: {
    src: "/img/data/ecostress-land-surface-temperature.png",
    alt: "ECOSTRESS nighttime land surface temperature over the Los Angeles, California area on January 8, 2025, with two bright yellow hot spots marking actively burning wildfires",
  },

  themes: ["respond", "prepare", "build"],

  categories: ["fire", "heat"],

  relatedContent: ["aviris-3-char-and-ash", "aviris-3-dnbr", "landsat-ndvi"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "Land surface temperature is the heat you would feel as you touch the ground, a rooftop, or another surface. Certain materials retain more heat than others; for instance, beach sand is warmer than vegetated regions. Very recently burned areas maintain some residual heat, and active fires have very high heat signatures. Water holds onto heat for longer than land, so the ocean is warmer than the land at night and cooler than the land during the day.",
        "The ECOsystem Spaceborne Thermal Radiometer Experiment on Space Station (ECOSTRESS) mission measures the temperature of plants to better understand how much water plants need and how they respond to stress. ECOSTRESS is attached to the International Space Station (ISS) and collects data globally as well as over key biomes, agricultural zones, and selected FLUXNET validation sites.",
        "This layer is drawn from the ECO2LSTE Version 2 data product, which provides atmospherically corrected land surface temperature and emissivity (LST&E) values derived from five thermal infrared (TIR) bands using a physics-based Temperature and Emissivity Separation (TES) algorithm. Values are stored as raw unsigned 16-bit digital numbers and are multiplied by the ECOSTRESS scale factor of 0.02 to obtain temperature in Kelvin. The default rendering stretches roughly 260 to 320 Kelvin (about -13 to 47 degrees Celsius), where dark purples are cooler and bright yellows are hotter.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Land surface temperature can be used to locate active fire fronts and the residual heat left in recently burned areas, to map where urban surfaces stay hottest during heat events, and to interpret thermal contrasts between water, vegetation, bare ground, and the built environment. Because ECOSTRESS flies aboard the International Space Station rather than in a sun-synchronous orbit, it observes a given location at varying times of day, which makes it possible to compare daytime and nighttime surface conditions over the course of an event.",
        "Land surface temperature is not air temperature. It describes the skin temperature of the surface itself, which on a sunny day can be considerably hotter than the air above it, so values should be interpreted alongside surface type, land cover, and time of acquisition rather than read as a weather observation.",
      ],
    },

    {
      type: "text",
      heading: "Limitations",
      headingLevel: "h3",
      paragraphs: [
        "Thermal infrared observations cannot see through clouds or thick smoke. Obscured scenes report the temperature of the cloud or plume top rather than the surface beneath it, which appears as anomalously cold areas in the imagery.",
        "ECOSTRESS acquisitions follow the International Space Station's orbit and the mission's targeting priorities, so coverage over any given area is opportunistic rather than a fixed repeat cycle, and consecutive observations of the same location are not collected at the same local time of day.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "ECOsystem Spaceborne Thermal Radiometer Experiment on Space Station (ECOSTRESS) thermal infrared radiometer aboard the International Space Station (ISS)",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["70 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: ["NASA Jet Propulsion Laboratory (JPL) ECOSTRESS, NASA Disasters Program"],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, JPL, ECOSTRESS, ECO2LSTE, Land Surface Temperature, LST, Emissivity, Thermal Infrared, TIR, International Space Station, ISS, Heat, Wildfire",
      ],
    },
  ],
};
