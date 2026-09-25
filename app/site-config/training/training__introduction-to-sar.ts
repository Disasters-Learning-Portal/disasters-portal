import type { TrainingContentExternal } from "@/app/site-config/types";

export const TRAINING__INTRODUCTION_TO_SAR: TrainingContentExternal = {
  id: "introduction-to-sar",
  contentType: "training",
  title: "An Introduction to SAR and its Applications",
  description:
    "This ARSET training provides an introduction to SAR, as well as a review of openly available SAR satellite data.",
  thumbnailImage: {
    src: "/img/training/introduction-to-sar.webp",
    alt: "HydroSAR flood mapping over Memphis, Tennessee",
  },
  url: "https://www.earthdata.nasa.gov/learn/trainings/introduction-synthetic-aperture-radar-sar-its-applications",
  themes: ["prepare"],
  categories: [],
};
