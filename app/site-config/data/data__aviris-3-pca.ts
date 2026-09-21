import type { DataContent } from "@/app/site-config/types";

export const DATA__AVIRIS_3_PCA: DataContent = {
  id: "aviris-3-pca",

  contentType: "data",

  title: "AVIRIS-3 Principal Component Analysis (PCA)",

  description:
    "The AVIRIS-3 Principal Component Analysis (PCA) product compresses 284 bands of imaging spectroscopy into a three-color image, so surfaces that share a spectral signature — such as burned structures — share a color.",

  thumbnailImage: {
    src: "/img/data/aviris-3-pca.png",
    alt: "AVIRIS-3 principal component analysis of the Palisades Fire, January 11, 2025",
  },

  mastheadImage: {
    src: "/img/data/aviris-3-pca.png",
    alt: "AVIRIS-3 principal component analysis of the Palisades Fire, January 11, 2025",
  },

  themes: ["respond"],

  categories: ["fire"],

  relatedContent: ["aviris-3-char-and-ash", "aviris-3-dnbr", "aviris-3-early-color-imagery"],

  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The AVIRIS-3 Principal Component Analysis (PCA) product visualizes the three dominant principal components derived from surface reflectance estimates collected by the Airborne Visible/Infrared Imaging Spectrometer 3rd-Generation (AVIRIS-3). The image shows the relative strength of three dominant eigenvectors, estimated from data across the full scene.",
        "Eigenvectors from this high-dimensional dataset do not identify physical features directly, but they are correlated with physical phenomena — much as red, green, and blue in a traditional image are correlated with, but not directly indicative of, specific surface processes. Instead of three broad colors, the analysis draws on 284 unique wavelengths spanning the visible to the shortwave infrared, giving a far more detailed picture of spectral difference. Contrast between differently colored regions can therefore be read as a strong difference in surface type.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "In the absence of a supervised image classification, the PCA image reveals areas that share spectral reflectance properties. On visual inspection, burned areas can be distinguished intuitively from unburned areas, and different kinds of burned surface — burned vegetation versus burned structures — separate from one another. A fire boundary at the time of collection is often readily apparent.",
        "Colors are scene-relative: they are derived from the statistics of each individual scene, so a color in one image does not carry the same meaning in another and images should not be compared side by side or used for quantitative analysis.",
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
        "NASA, JPL, AVIRIS-3, AVIRIS, PCA, Principal Component Analysis, Imaging Spectroscopy, Hyperspectral, Surface Reflectance, Wildfire",
      ],
    },
  ],
};
