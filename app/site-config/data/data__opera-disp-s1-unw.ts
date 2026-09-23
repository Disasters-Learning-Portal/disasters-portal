import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DISP_S1_UNW: DataContent = {
  id: "opera-disp-s1-unw",

  contentType: "data",

  title: "OPERA Unwrapped Interferometric Phase (DISP-S1 UNW)",

  description:
    "The OPERA DISP-S1 Unwrapped Phase product provides a continuous representation of Sentinel-1 interferometric phase differences used to derive radar line-of-sight surface displacement.",

  thumbnailImage: {
    src: "/img/data/opera-disp-s1-unw.webp",
    alt: "OPERA DISP-S1 unwrapped interferometric phase imagery",
  },

  mastheadImage: {
    src: "/img/data/opera-disp-s1-unw.webp",
    alt: "OPERA DISP-S1 unwrapped interferometric phase imagery",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["earthquake"],

  relatedContent: ["opera-disp-s1-coherence", "opera-disp-s1-wrp", "opera-disp-s1-rng"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The OPERA DISP-S1 Unwrapped Phase product provides a continuous representation of the interferometric phase difference between a reference Sentinel-1 acquisition and a secondary acquisition. Phase unwrapping resolves the repeating 2π cycles present in the wrapped interferogram so that continuous spatial variations in radar phase can be evaluated.",
        "Unwrapped interferometric phase is an intermediate measurement used to derive radar line-of-sight surface displacement. The phase difference is related to changes in the distance between the radar sensor and the Earth's surface and can reveal deformation associated with earthquakes, subsidence, landslides, volcanic activity, and other processes.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Use Unwrapped Phase to examine continuous spatial patterns of interferometric change and to support interpretation of surface deformation following earthquakes and other geophysical events. Unlike wrapped phase, the unwrapped product removes the repeating phase-cycle ambiguity, making it possible to relate phase differences to continuous radar line-of-sight range change.",
        "Phase unwrapping is most reliable in areas with strong interferometric coherence. Low coherence, water, vegetation change, snow, large surface changes, or other sources of decorrelation can cause gaps or errors in the unwrapped solution. The product should therefore be evaluated together with coherence and other quality information before interpreting deformation patterns.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1A, Sentinel-1B, and Sentinel-1C satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["30 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; NASA JPL-Caltech ARIA Team; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, OPERA, ARIA, DISP-S1, UNW, Sentinel-1, InSAR, SAR, Unwrapped Phase, Interferogram, Surface Displacement, Ground Deformation, Earthquake",
      ],
    },
  ],
};
