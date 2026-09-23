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
        "NISAR GUNW displacement can be used to identify and characterize ground deformation associated with earthquakes and other processes that produce measurable surface motion. The product can support rapid assessment of the location, spatial extent, and relative magnitude of deformation following an event. Interferometric measurements may be less reliable in areas affected by vegetation, water, snow, large surface changes, or other sources of radar decorrelation, and the measured displacement represents motion projected along the radar line of sight rather than complete three-dimensional ground motion.",
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
