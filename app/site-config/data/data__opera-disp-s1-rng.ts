import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DISP_S1_RNG: DataContent = {
  id: "opera-disp-s1-rng",

  contentType: "data",

  title: "OPERA Displacement Range Change (DISP-S1 RNG)",

  description:
    "The OPERA DISP-S1 Range Change product provides Sentinel-1 interferometric measurements of relative surface motion along the radar line of sight between reference and secondary satellite acquisitions.",

  thumbnailImage: {
    src: "/img/data/opera-disp-s1-rng.webp",
    alt: "OPERA DISP-S1 radar line-of-sight range change imagery",
  },

  mastheadImage: {
    src: "/img/data/opera-disp-s1-rng.webp",
    alt: "OPERA DISP-S1 radar line-of-sight range change imagery",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["earthquake"],

  relatedContent: [
    "opera-disp-s1-coherence",
    "opera-disp-s1-wrp",
    "opera-disp-s1-unw",
  ],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA DISP-S1 Range Change product represents relative motion of the Earth's surface along the Sentinel-1 radar line of sight between a reference acquisition and a secondary acquisition. Range change is derived from interferometric synthetic aperture radar (InSAR) measurements, in which differences in radar phase between repeated observations are used to detect changes in the distance between the satellite and the ground surface.",
        "The measurement represents motion projected into the radar line-of-sight direction rather than purely vertical or horizontal displacement. Observed range changes may therefore contain contributions from multiple components of three-dimensional surface motion.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use the Range Change product to identify and characterize spatial patterns of ground motion following earthquakes and other events that deform the Earth's surface. The product can help reveal fault-related displacement, uplift, subsidence, landslides, and other deformation patterns when interpreted together with the acquisition geometry and supporting interferometric products.",
        "Range change should not automatically be interpreted as vertical displacement because Sentinel-1 measures motion along the radar line of sight. Atmospheric delays, loss of coherence, phase-unwrapping errors, and other processing effects can also influence the measurement, so the range change product should be interpreted alongside coherence and other quality information.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1A, Sentinel-1B, and Sentinel-1C satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["30 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; NASA JPL-Caltech ARIA Team; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, OPERA, ARIA, DISP-S1, RNG, Sentinel-1, InSAR, SAR, Range Change, Line of Sight, Surface Displacement, Ground Deformation, Earthquake",
      ],
    },
  ],
};
