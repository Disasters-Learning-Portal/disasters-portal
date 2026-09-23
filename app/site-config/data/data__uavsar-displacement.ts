import type { DataContent } from "@/app/site-config/types";

export const DATA__UAVSAR_DISPLACEMENT: DataContent = {
  id: "uavsar-displacement",

  contentType: "data",

  title: "UAVSAR Surface Displacement",

  description:
    "Ground displacement measured along the radar line of sight from repeat-pass UAVSAR interferometry, produced by the ARIA and UAVSAR teams at NASA's Jet Propulsion Laboratory to identify areas of significant surface motion.",

  thumbnailImage: {
    src: "/img/data/uavsar-displacement.webp",
    alt: "UAVSAR interferometric surface displacement over the Palos Verdes Peninsula, California from October 2024, with motion away from the radar in red and motion toward the radar in blue",
  },

  mastheadImage: {
    src: "/img/data/uavsar-displacement.webp",
    alt: "UAVSAR interferometric surface displacement over the Palos Verdes Peninsula, California from October 2024, with motion away from the radar in red and motion toward the radar in blue",
  },

  themes: ["respond", "prepare", "recover"],

  categories: ["earthquake", "volcano", "severe weather"],

  relatedContent: ["uavsar-rgb", "nisar-gunw-displacement", "opera-disp-s1-coherence"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Researchers with the Advanced Rapid Imaging and Analysis (ARIA) and UAVSAR teams at NASA's Jet Propulsion Laboratory produce these surface displacement products from interferometric synthetic aperture radar (InSAR) data. InSAR measures the component of three-dimensional surface displacement that falls along the radar line of sight (LOS) between the ground and the sensor, by comparing the phase of radar images collected over the same area on different dates.",
        "Motion away from the radar is negative and is shown in red, covering both horizontal movement and vertical subsidence. Motion toward the radar is positive and is shown in blue, covering both horizontal movement and vertical uplift. White areas have approximately zero displacement. All measurements are relative to a selected stable reference pixel and the data are not calibrated to any ground location, so an unknown bias in the reference level may be present.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Use these maps as guidance for identifying areas of significant ground displacement following earthquakes, landslides, volcanic activity, subsidence, and other events that deform the surface. They are well suited to narrowing a large area down to the locations that warrant closer inspection or field verification.",
        "These data have not yet been validated and carry several important constraints. InSAR measurements are less reliable over heavily vegetated areas, over steep slopes, and over fast-moving areas, defined here as motion greater than 13 centimeters per week at eight-day temporal sampling. The technique does not measure motion in the east-west direction, which is perpendicular to the radar line of sight, so displacement in that direction will be missed entirely. Results should be treated as indicative rather than as measured ground truth.",
      ],
    },

    {
      type: "text",
      heading: "Processing",
      paragraphs: [
        "UAVSAR data are processed with the operational UAVSAR stack processor to produce a stack of radar images collected on each date. Interferograms are formed for each successive pair of images in the stack, using a Goldstein filter to smooth the interferometric phase. Each interferogram is masked to exclude water and areas where interferometric performance is expected to be poor due to layover and shadow effects. Interferograms are then unwrapped using the PHASS phase unwrapping algorithm, with an additional interpolation step to smooth over low coherence regions, and the unwrapped result is converted to distance change from radar to target, provided in meters.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "Uninhabited Aerial Vehicle Synthetic Aperture Radar (UAVSAR), an L-band fully polarimetric synthetic aperture radar flown on a NASA Gulfstream III (C-20A) aircraft and operated by NASA's Jet Propulsion Laboratory",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: [
        "Airborne repeat-pass interferometry delivered as geocoded unwrapped interferograms, with displacement values in meters",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Jet Propulsion Laboratory (JPL) Advanced Rapid Imaging and Analysis (ARIA) and UAVSAR teams, and the NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, JPL, ARIA, UAVSAR, SAR, Synthetic Aperture Radar, InSAR, Interferometry, L-band, Surface Displacement, Line of Sight, Subsidence, Uplift, Landslide, Earthquake, Airborne",
      ],
    },
  ],
};
