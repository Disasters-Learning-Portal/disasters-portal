import type { DataContent } from "@/app/site-config/types";

export const DATA__AVIRIS_3_EARLY_COLOR_IMAGERY: DataContent = {
  id: "aviris-3-early-color-imagery",
  contentType: "data",
  title: "AVIRIS-3 Early Look False Color Imagery",
  description:
    "The AVIRIS-3 false color early look imagery provides at-sensor radiance data from high resolution, hyperspectral sensor which can provide a snapshot of burned areas, ash distribution and smoke emissions. ",
  thumbnailImage: {
    src: "/img/data/aviris-3-early-color-imagery.webp",
    alt: "AVIRIS-3 Early Look False Color imagery example",
  },
  mastheadImage: {
    src: "/img/data/aviris-3-early-color-imagery.webp",
    alt: "AVIRIS-3 Early Look False Color imagery example",
  },
  themes: ["respond"],
  categories: ["fire"],
  relatedContent: ["aviris-3-dnbr"],
  body: [
    {
      type: "text",
      heading: "Summary",
      headingLevel: "h3",
      paragraphs: [
        "The AVIRIS-3 false color early look imagery provides at-sensor radiance data from high resolution, hyperspectral sensor which can provide a snapshot of burned areas, ash distribution and smoke emissions.",
        "The AVIRIS-3 False color RGB wavelengths are 1660nm, 850nm, and 560nm for (R, G, B) respectively.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      headingLevel: "h3",
      paragraphs: [
        "The early look false color imagery can be used for a rapid visual assessment of wildfire impacts, including burned areas, ash distribution, and smoke emissions. Because it shows at-sensor radiance rather than surface reflectance, it is best suited to visual interpretation rather than quantitative analysis.",
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
        "NASA, JPL, AVIRIS-3, AVIRIS, Imaging Spectroscopy, Hyperspectral, False Color, Early Look, Wildfire",
      ],
    },
  ],
};
