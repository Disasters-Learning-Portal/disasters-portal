import type { DataContent } from "@/app/site-config/types";

export const DATA__AVIRIS_3_DNBR: DataContent = {
  id: "aviris-3-dnbr",

  contentType: "data",

  title: "AVIRIS-3 Differenced Normalized Burn Ratio (dNBR)",

  description:
    "The AVIRIS-3 Differenced Normalized Burn Ratio (dNBR) product uses high-resolution imaging spectroscopy to identify vegetation change associated with wildfire and provide a proxy for burn severity.",

  thumbnailImage: {
    src: "/img/data/aviris-3-dnbr.webp",
    alt: "AVIRIS-3 differenced Normalized Burn Ratio imagery example",
  },

  mastheadImage: {
    src: "/img/data/aviris-3-dnbr.webp",
    alt: "AVIRIS-3 differenced Normalized Burn Ratio imagery example",
  },

  themes: ["respond", "recover"],

  categories: ["fire"],

  relatedContent: [
    "aviris-3-early-color-imagery",
    "sentinel-2-nbr",
    "sentinel-1-sentinel-2-burn-severity",
  ],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The AVIRIS-3 Differenced Normalized Burn Ratio (dNBR) product is derived from pre-event and post-event observations collected by the Airborne Visible/Infrared Imaging Spectrometer 3rd-Generation (AVIRIS-3). Normalized Burn Ratio (NBR) is calculated as (NIR - SWIR) / (NIR + SWIR), and dNBR is calculated as the difference between pre-fire and post-fire NBR. The product uses near-infrared and shortwave-infrared wavelengths that are sensitive to changes in vegetation associated with burning and charring.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "AVIRIS-3 dNBR can be used to identify burned vegetation, characterize spatial variations in fire-related surface change, and provide a proxy for relative burn severity. Higher positive dNBR values generally indicate greater reductions in healthy vegetation between the pre-fire and post-fire observations. dNBR primarily represents changes in vegetation spectral response and may not accurately characterize impacts to non-vegetated surfaces or built infrastructure. Results can also be influenced by the timing and environmental conditions of the pre-event and post-event observations.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: [
        "Airborne Visible/Infrared Imaging Spectrometer 3rd-Generation (AVIRIS-3)",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: [
        "Acquisition-dependent high spatial resolution",
      ],
    },

    {
      type: "text",
      heading: "Credits",
      headingLevel: "h3",
      paragraphs: [
        "NASA Jet Propulsion Laboratory (JPL), AVIRIS Science Team, NASA Disasters Program",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      headingLevel: "h3",
      paragraphs: [
        "NASA, JPL, AVIRIS-3, AVIRIS, dNBR, NBR, Imaging Spectroscopy, Hyperspectral, Burn Severity, Wildfire",
      ],
    },
  ],
};
