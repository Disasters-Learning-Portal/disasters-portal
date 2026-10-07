import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
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

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-68.21051443500001&mapLat=10.803431576000001&mapZoom=8.13&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=9c9a7244-0a1a-4a16-ba24-00a24fa07721$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-06-23T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The OPERA Displacement Coherence product provides interferometric coherence imagery associated with Sentinel-1 acquisition pairs used for surface displacement analysis. Coherence measures the consistency of the radar phase between a reference acquisition and a secondary acquisition. Values range from 0 to 1, with values approaching 1 indicating greater phase consistency and generally more reliable interferometric measurements. Lower coherence indicates greater decorrelation between acquisitions and may occur over vegetation, water, snow-covered surfaces, areas experiencing substantial surface change, or other locations where the radar signal changes between observations.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "OPERA Displacement Coherence can be used to evaluate the quality and spatial consistency of Sentinel-1 interferometric measurements used to characterize surface displacement. Following earthquakes and other events that produce ground deformation, coherence can help identify areas where displacement measurements are more or less reliable. Areas of reduced coherence may also indicate substantial changes to the surface between acquisitions; however, low coherence is not itself a direct measurement of displacement or damage and can also result from vegetation, water, snow, viewing conditions, or other sources of radar decorrelation.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'Contains modified Copernicus Sentinel data (2026) processed by ESA.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "C-band Synthetic Aperture Radar (SAR) aboard the European Space Agency's Copernicus Sentinel-1 mission, including historical observations from Sentinel-1A and Sentinel-1B and current observations from Sentinel-1C and Sentinel-1D",
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
        "NASA Jet Propulsion Laboratory, California Institute of Technology; NASA OPERA; ESA Copernicus; NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, OPERA, DISP-S1, Sentinel-1, InSAR, SAR, Synthetic Aperture Radar, Interferometric Coherence, Surface Displacement, Ground Deformation, Earthquake",
      ],
    },
  ],
};
