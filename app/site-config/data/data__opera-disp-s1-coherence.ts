import type { DataContent } from "@/app/site-config/types";

export const DATA__OPERA_DISP_S1_COHERENCE: DataContent = {
  id: "opera-disp-s1-coherence",

  contentType: "data",

  title: "OPERA Displacement Coherence (DISP-S1)",

  description:
    "The OPERA Displacement Coherence product provides interferometric coherence imagery from Sentinel-1 acquisition pairs to indicate the consistency and reliability of radar measurements used for surface displacement analysis.",

  thumbnailImage: {
    src: "/img/data/opera-disp-s1-coherence.webp",
    alt: "OPERA DISP-S1 interferometric coherence imagery",
  },

  mastheadImage: {
    src: "/img/data/opera-disp-s1-coherence.webp",
    alt: "OPERA DISP-S1 interferometric coherence imagery",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["earthquake"],

  relatedContent: ["opera-dist-s1"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The OPERA Displacement Coherence product provides interferometric coherence imagery associated with Sentinel-1 acquisition pairs used for surface displacement analysis. Coherence measures the consistency of the radar phase between a reference acquisition and a secondary acquisition. Values range from 0 to 1, with values approaching 1 indicating greater phase consistency and generally more reliable interferometric measurements. Lower coherence indicates greater decorrelation between acquisitions and may occur over vegetation, water, snow-covered surfaces, areas experiencing substantial surface change, or other locations where the radar signal changes between observations.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "OPERA Displacement Coherence can be used to evaluate the quality and spatial consistency of Sentinel-1 interferometric measurements used to characterize surface displacement. Following earthquakes and other events that produce ground deformation, coherence can help identify areas where displacement measurements are more or less reliable. Areas of reduced coherence may also indicate substantial changes to the surface between acquisitions; however, low coherence is not itself a direct measurement of displacement or damage and can also result from vegetation, water, snow, viewing conditions, or other sources of radar decorrelation.",
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
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, OPERA, DISP-S1, Sentinel-1, InSAR, SAR, Synthetic Aperture Radar, Interferometric Coherence, Surface Displacement, Ground Deformation, Earthquake",
      ],
    },
  ],
};