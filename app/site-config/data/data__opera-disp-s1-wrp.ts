import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DISP_S1_WRP: DataContent = {
  id: "opera-disp-s1-wrp",

  contentType: "data",

  title: "OPERA Wrapped Interferometric Phase (DISP-S1 WRP)",

  description:
    "The OPERA DISP-S1 Wrapped Phase product displays Sentinel-1 interferometric phase differences between acquisition pairs before phase unwrapping, highlighting spatial patterns associated with surface deformation.",

  thumbnailImage: {
    src: "/img/data/opera-disp-s1-wrp.webp",
    alt: "OPERA DISP-S1 wrapped interferometric phase imagery",
  },

  mastheadImage: {
    src: "/img/data/opera-disp-s1-wrp.webp",
    alt: "OPERA DISP-S1 wrapped interferometric phase imagery",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["earthquake"],

  relatedContent: ["opera-disp-s1-coherence", "opera-disp-s1-unw", "opera-disp-s1-rng"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA DISP-S1 Wrapped Phase product represents the interferometric phase difference measured between two Sentinel-1 radar acquisitions. Interferometric phase records changes in the radar signal path between the satellite and the surface and is sensitive to ground displacement as well as atmospheric and other propagation effects.",
        "Wrapped phase is expressed cyclically, with phase values repeating every 2π radians. This produces the characteristic fringe patterns visible in interferograms. Closely spaced fringes can indicate rapid spatial changes in radar line-of-sight displacement, while broader fringe spacing generally indicates more gradual changes.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Use Wrapped Phase to visually identify interferometric fringe patterns associated with surface deformation following earthquakes and other geophysical events. Fringe patterns can provide rapid qualitative information about the location, spatial extent, and gradients of deformation before the phase is converted into a continuous displacement measurement.",
        "Wrapped phase is not a direct displacement map because the phase repeats every 2π radians. Atmospheric delays, topography-related errors, decorrelation, and other effects may also produce phase variations. Coherence should be examined alongside wrapped phase to identify areas where the interferometric signal is more reliable.",
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
        "NASA, OPERA, ARIA, DISP-S1, WRP, Sentinel-1, InSAR, SAR, Wrapped Phase, Interferogram, Surface Displacement, Ground Deformation, Earthquake",
      ],
    },
  ],
};
