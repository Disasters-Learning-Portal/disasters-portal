import type { TrainingContent } from "@/app/site-config/types";

// Placeholder until the PORTAL 101 material is ready. Omitting `body` makes the
// detail page render the shared "Under Development" status instead of an empty
// page; fill in `body` (and swap the placeholder image) when the content lands.
export const TRAINING__PORTAL_101: TrainingContent = {
  id: "portal-101",
  contentType: "training",
  title: "PORTAL 101",
  description:
    "A guided introduction to the NASA Disasters PORTAL: what it offers, how it is organized, and how to find the data, stories, and training you need.",
  thumbnailImage: {
    src: "/img/placeholder/card-masthead.webp",
    alt: "Placeholder image for the PORTAL 101 introductory training",
  },
  datePublished: "2026-10-01",
  themes: ["prepare", "respond", "recover", "build"],
  categories: [],
  mastheadImage: {
    src: "/img/placeholder/card-masthead.webp",
    alt: "Placeholder image for the PORTAL 101 introductory training",
  },
};
