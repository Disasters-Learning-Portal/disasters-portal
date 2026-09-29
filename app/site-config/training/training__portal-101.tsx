import { Link } from "@teamimpact/veda-ui-blocks";
import { Fragment } from "react/jsx-runtime";
import type { TrainingContent } from "@/app/site-config/types";

/** Public path of the embedded document, shared by the block and the masthead CTA. */
const PORTAL_101_PDF = "/docs/training/portal-101.pdf";

export const TRAINING__PORTAL_101: TrainingContent = {
  id: "portal-101",
  contentType: "training",
  title: "PORTAL 101",
  subtitle: "A page-by-page guide to the NASA Disasters PORTAL",
  description:
    "Page-by-page user guidance for the NASA Disasters PORTAL, with an FAQ and example user pathways to help you navigate the platform.",
  // TODO: replace with artwork sourced for this module -- this is the Training
  // landing page masthead standing in until one is available.
  thumbnailImage: {
    src: "/img/training/training-masthead.webp",
    alt: "Participants seated around a large conference table during a training session.",
  },
  datePublished: "2026-09-29",
  // Platform-wide guidance, so it belongs to every phase of the management
  // cycle and to no single hazard.
  themes: ["prepare", "respond", "recover", "build"],
  categories: [],
  mastheadImage: {
    src: "/img/training/training-masthead.webp",
    alt: "Participants seated around a large conference table during a training session.",
  },
  downloadPdfUrl: PORTAL_101_PDF,
  body: [
    {
      type: "text",
      heading: "Overview",
      paragraphs: [
        "The NASA Disasters Program advances the access to and application of Earth science information to build communities resilient to disasters and extreme events. Within the program, the Disasters PORTAL is specifically dedicated to improving the awareness, discoverability, and understanding of these data for disaster management communities.",
        "Driven by user feedback, needs, and experience, the NASA Disasters PORTAL aims to maximize partner impact and foster two-way collaboration across the disaster management cycle. The platform provides an intuitive, interactive environment for mapping, data visualizations, analysis, training resources, resilience science, and stories of impact.",
        "Here in Disasters PORTAL 101, you will find page-by-page user guidance, an FAQ section, and Example User Pathways to help you navigate the platform.",
        <Fragment key="contact">
          If you cannot find the answer to your question within this module, please do not hesitate
          to reach out to us at <Link href="mailto:disasters@nasa.gov">disasters@nasa.gov</Link>.
        </Fragment>,
      ],
    },
    {
      type: "pdf",
      heading: "Read the guide",
      src: PORTAL_101_PDF,
      title: "PORTAL 101 Documentation",
      caption:
        "PORTAL 101 Documentation — 12 pages. Use the viewer controls to page through, zoom, or download a copy.",
    },
  ],
};
