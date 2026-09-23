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
        "The AVIRIS-3 Relative Char and Ash product shows the char and ash fraction of each pixel, based on airborne imaging spectroscopy measurements from the Airborne Visible/Infrared Imaging Spectrometer 3rd-Generation (AVIRIS-3). Surface reflectance is first estimated using ISOFIT (Imaging Spectrometer Optimal FITting), which performs the atmospheric correction, after which a spectral unmixing algorithm following the Multiple Endmember Spectral Mixture Analysis (MESMA) approach determines the amount of char and ash within each pixel.",
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
        "AVIRIS-3 radiance data: Eckert, R., D.R. Thompson, A.M. Chlus, J.W. Chapman, M. Eastwood, M. Bernas, S. Geier, M. Helmlinger, D. Keymeulen, E. Liggett, S. Nadgauda, L.M. Rios, L.A. Shaw, W. Olson-Duvall, P.G. Brodrick, and R.O. Green. 2024. AVIRIS-3 L1B Calibrated Radiance, Facility Instrument Collection. ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/2356",
        "AVIRIS-3 reflectance data: Brodrick, P.G., A.M. Chlus, U.N. Bohn, E. Greenberg, J. Montgomery, J.W. Chapman, M. Eastwood, S.R. Lundeen, R. Eckert, W. Olson-Duvall, D.R. Thompson, and R.O. Green. 2025. AVIRIS-3 L2A Orthocorrected Surface Reflectance, Facility Instrument Collection. ORNL DAAC, Oak Ridge, Tennessee, USA. https://doi.org/10.3334/ORNLDAAC/2357",
        "ISOFIT: Thompson, D.R., Natraj, V., Green, R.O., Helmlinger, M.C., Gao, B.C. and Eastwood, M.L., 2018. Optimal estimation for imaging spectrometer atmospheric correction. Remote Sensing of Environment, 216, pp.355-373.",
        "Brodrick, P.G., D.R. Thompson, N. Bohn, N. Carmon, R. Eckert, J. Montgomery, K. Wurster, and N. Vaughn. 2024. isofit (v3.2.2). Zenodo. https://doi.org/10.5281/zenodo.14135462",
        "Spectral unmixing: https://github.com/emit-sds/SpectralUnmixing",
        "MESMA approach: Quintano, C., Fernandez-Manso, A. and Roberts, D.A., 2013. Multiple Endmember Spectral Mixture Analysis (MESMA) to map burn severity levels from Landsat images in Mediterranean countries. Remote Sensing of Environment, 136, pp.76-88.",
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
