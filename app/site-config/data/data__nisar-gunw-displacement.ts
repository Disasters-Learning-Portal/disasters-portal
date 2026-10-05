import { DATA_VISUALIZATION_URL } from "@/app/site-config/env.helpers";
import type { DataContent } from "@/app/site-config/types";

export const DATA__NISAR_GUNW_DISPLACEMENT: DataContent = {
  id: "nisar-gunw-displacement",

  contentType: "data",

  title: "NISAR GUNW Surface Displacement",

  description:
    "The NISAR Geocoded Unwrapped Interferogram (GUNW) displacement product uses L-band synthetic aperture radar observations from two acquisitions to measure changes in the Earth's surface along the radar line of sight.",

  thumbnailImage: {
    src: "/img/data/nisar-gunw-displacement.webp",
    alt: "NISAR GUNW surface displacement imagery",
  },

  mastheadImage: {
    src: "/img/data/nisar-gunw-displacement.webp",
    alt: "NISAR GUNW surface displacement imagery",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["earthquake"],

  relatedContent: ["opera-disp-s1-coherence"],

  exploreDataUrl: `${DATA_VISUALIZATION_URL}/?mapLon=-67.38673100338288&mapLat=10.271724644076265&mapZoom=8.1&globeLon=undefined&globeLat=undefined&panePercents=0,100,0&on=5a1c9f02-7d64-4f18-9b3e-6c0a2e4d7b81$1.00&startTime=2012-01-19T00:00:00.000Z&endTime=2026-06-18T23:59:59.000Z&live=0`,

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The NISAR Geocoded Unwrapped Interferogram (GUNW) product is derived from a pair of NISAR synthetic aperture radar acquisitions and provides measurements of surface change using interferometric synthetic aperture radar (InSAR). Differences in radar phase between the reference and secondary acquisitions are unwrapped and geocoded to characterize displacement of the Earth's surface along the radar line of sight. The displacement product provides spatial information about ground motion that occurred between the two acquisition dates.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "NISAR GUNW displacement can be used to identify and characterize surface deformation associated with natural hazards and other processes that produce measurable ground motion. Potential applications include assessing deformation associated with earthquakes, volcanic activity, landslides, subsidence, and other geologic or hydrologic processes. The product can support assessment of the location, spatial extent, and relative magnitude of surface deformation before, during, or following an event. Interferometric measurements may be less reliable in areas affected by vegetation, water, snow, large surface changes, or other sources of radar decorrelation. Displacement is measured along the radar line of sight and therefore does not represent the full three-dimensional motion of the Earth's surface.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "L-band Synthetic Aperture Radar (SAR) aboard the NASA-ISRO Synthetic Aperture Radar (NISAR) satellite",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["80 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Jet Propulsion Laboratory (JPL), Indian Space Research Organisation (ISRO), and NASA Alaska Satellite Facility Distributed Active Archive Center (ASF DAAC)",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, ISRO, NISAR, GUNW, InSAR, SAR, L-band, Surface Displacement, Ground Deformation, Geocoded Unwrapped Interferogram, Earthquake",
      ],
    },
  ],
};
