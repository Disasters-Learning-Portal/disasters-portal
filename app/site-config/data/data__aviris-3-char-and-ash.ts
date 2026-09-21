import type { DataContent } from "@/app/site-config/types";

export const DATA__AVIRIS_3_CHAR_AND_ASH: DataContent = {
  id: "aviris-3-char-and-ash",

  contentType: "data",

  title: "AVIRIS-3 Relative Char and Ash",

  description:
    "The AVIRIS-3 Relative Char and Ash product estimates the fraction of each pixel covered by char and ash, using spectral unmixing of airborne imaging spectroscopy measurements.",

  thumbnailImage: {
    src: "/img/data/aviris-3-char-and-ash.png",
    alt: "AVIRIS-3 relative char and ash fraction over the Palisades Fire, January 11, 2025",
  },

  mastheadImage: {
    src: "/img/data/aviris-3-char-and-ash.png",
    alt: "AVIRIS-3 relative char and ash fraction over the Palisades Fire, January 11, 2025",
  },

  themes: ["respond", "recover"],

  categories: ["fire"],

  relatedContent: ["aviris-3-pca", "aviris-3-dnbr", "aviris-3-early-color-imagery"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The AVIRIS-3 Relative Char and Ash product shows the char and ash fraction of each pixel, based on airborne imaging spectroscopy measurements from the Airborne Visible/Infrared Imaging Spectrometer 3rd-Generation (AVIRIS-3). Surface reflectance is first estimated using ISOFIT, after which a spectral unmixing algorithm following the Multiple Endmember Spectral Mixture Analysis (MESMA) approach determines the amount of char and ash within each pixel.",
        "The product describes the relative amount of char and ash, from 0 to 1, within each pixel. It is served in two renderings: a single-band pseudo-color grayscale image, with thresholds at the minimum detectable bounds of 50% and 80% char and ash fractional cover, and a pre-rendered color version in which the producer's color ramp is baked into the pixels.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "Relative char and ash fraction helps map where combustion residue has settled after a fire, complementing burn severity products that track vegetation change. Because it measures deposited material rather than vegetation response, it can characterize impacts across urban and non-vegetated surfaces that a vegetation index cannot.",
        "The product indicates the char and ash fraction of the exposed surface only, not what lies beneath it. An area under a thin coating of ash will register a fraction even where the underlying surface is undamaged.",
      ],
    },

    {
      type: "text",
      heading: "Limitations",
      headingLevel: "h3",
      paragraphs: [
        "This is a research-grade product with known false positives and false negatives, and improvements to its accuracy are ongoing. To deliver the product at low latency, the endmember library was constrained to one typical of a Southern California urban environment, and manual masking was also applied. Heavily shaded locations may return errant solutions.",
        "A linear spectral mixture model is used to approximate char and ash fractional cover. Because of multiple scattering across complex surfaces, the real relationship between observed char and ash reflectance and actual abundance may be non-linear.",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      headingLevel: "h3",
      paragraphs: ["Airborne Visible/Infrared Imaging Spectrometer 3rd-Generation (AVIRIS-3)"],
    },

    {
      type: "text",
      heading: "Resolution",
      headingLevel: "h3",
      paragraphs: ["Variable, ranging from sub-meter to 13 meters, dependent on flight altitude."],
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
        "NASA, JPL, AVIRIS-3, AVIRIS, Char, Ash, Spectral Unmixing, MESMA, ISOFIT, Imaging Spectroscopy, Hyperspectral, Wildfire",
      ],
    },
  ],
};
