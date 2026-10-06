import type { DataContent } from "@/app/site-config/types";

export const DATA__AVIRIS_3_QUICKLOOK_COLOR_IMAGERY: DataContent = {
  id: "aviris-3-quicklook-color-imagery",
  contentType: "data",
  title: "AVIRIS-3 Quicklook False Color Imagery",
  description:
    "The AVIRIS-3 false color quicklook imagery provides at-sensor radiance data from high resolution, hyperspectral sensor which can provide a snapshot of burned areas, ash distribution and smoke emissions. ",
  thumbnailImage: {
    src: "/img/data/aviris-3-quicklook-color-imagery.webp",
    alt: "AVIRIS-3 Quicklook False Color imagery example",
  },
  mastheadImage: {
    src: "/img/data/aviris-3-quicklook-color-imagery.webp",
    alt: "AVIRIS-3 Quicklook False Color imagery example",
  },
  themes: ["respond"],
  categories: ["fire"],
  relatedContent: ["aviris-3-dnbr"],
  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "The AVIRIS-3 false color quicklook imagery provides at-sensor radiance data from high resolution, hyperspectral sensor which can provide a snapshot of burned areas, ash distribution and smoke emissions.",
        "The AVIRIS-3 False color RGB wavelengths are 1660nm, 850nm, and 560nm for (R, G, B) respectively.",
      ],
    },
    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "The quicklook false color imagery can be used for a visual assessment of wildfire impacts, including burned areas, ash distribution, and smoke emissions. Because it shows at-sensor radiance rather than surface reflectance, it is best suited to visual interpretation rather than quantitative analysis.",
      ],
    },
    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated.",
      ],
    },
    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: ["Airborne Visible/Infrared Imaging Spectrometer 3rd-Generation (AVIRIS-3)"],
    },
    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["Variable, ranging from sub-meter to 13 meters, dependent on flight altitude."],
    },
    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA Jet Propulsion Laboratory (JPL), AVIRIS Science Team, NASA Disasters Program",
      ],
    },
    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "NASA, JPL, AVIRIS-3, AVIRIS, Imaging Spectroscopy, Hyperspectral, False Color, Quicklook, Wildfire",
      ],
    },
  ],
};
