import type { DataContent } from "@/app/site-config/types";

export const DATA__SENTINEL_2_DNBR: DataContent = {
  id: "sentinel-2-dnbr",

  contentType: "data",

  title: "Sentinel-2 Differenced Normalized Burn Ratio (dNBR)",

  description:
    "Differenced Normalized Burn Ratio (dNBR) compares pre- and post-fire Sentinel-2 observations to highlight changes in vegetation associated with burning and provide a proxy for relative vegetation burn severity.",

  thumbnailImage: {
    src: "/img/data/sentinel-2-dnbr.webp",
    alt: "Sentinel-2 Differenced Normalized Burn Ratio (dNBR)",
  },

  mastheadImage: {
    src: "/img/data/sentinel-2-dnbr.webp",
    alt: "Sentinel-2 Differenced Normalized Burn Ratio (dNBR)",
  },

  themes: ["respond", "recover"],

  categories: ["fire"],

  relatedContent: ["sentinel-2-nbr"],

  body: [
    {
      type: "text",
      heading: "Summary",
      paragraphs: [
        "Differenced Normalized Burn Ratio (dNBR) is calculated by subtracting a post-fire Normalized Burn Ratio (NBR) image from a pre-fire NBR image. NBR uses near-infrared and shortwave-infrared observations to emphasize changes in vegetation associated with fire, including the loss of healthy vegetation and the presence of charred or exposed surfaces. By differencing observations before and after a fire, dNBR can provide a proxy for the relative magnitude of fire-related vegetation change and is commonly used to support vegetation burn severity assessment. More information is available from the [UN-SPIDER Recommended Practice for Burn Severity Mapping](https://un-spider.org/advisory-support/recommended-practices/recommended-practice-burn-severity/in-detail/normalized-burn-ratio).",
        "These Sentinel-2 dNBR products provide higher spatial resolution but generally higher latency than active-fire products such as FIRMS and FEDS and are best suited to post-fire assessment after suitable pre- and post-event imagery becomes available. In some disaster response situations, dNBR may also be generated while a fire is still active to prioritize rapid data availability. In those cases, the mapped values may change as the fire progresses and newer post-fire imagery becomes available.",
      ],
    },

    {
      type: "text",
      heading: "Suggested Use",
      paragraphs: [
        "Higher positive dNBR values generally indicate a greater change in vegetation associated with burning and can be used as a proxy for greater vegetation burn severity. Values near zero indicate relatively little change between the selected pre- and post-fire observations, while negative values may represent vegetation growth or re-greening between acquisitions. dNBR can help identify the spatial extent and relative severity of vegetation impacts and can support post-fire assessment, response planning, and comparison of burned areas across a fire perimeter.",
        "dNBR should be interpreted carefully as a quantitative measure of burn severity. The spectral bands used in NBR are primarily sensitive to changes in vegetation in the near-infrared and shortwave-infrared wavelengths, so dNBR does not reliably characterize fire damage to non-vegetated surfaces such as buildings and other human-built infrastructure. The relationship between dNBR and actual burn severity can also vary substantially among vegetation types.",
        "This dataset has not been independently validated against field-based burn severity assessments. Results also depend on the selection of representative pre- and post-fire imagery. An effort is made to select high-quality scenes with minimal cloud contamination and comparable surface conditions, but different image pairs may produce different dNBR values. Clouds, cloud shadows, smoke, atmospheric conditions, seasonal vegetation changes, and differences in image timing can all affect the derived values.",
        "Users should consider fire containment status and the acquisition dates of the pre- and post-fire imagery when interpreting the product. If the post-fire image was acquired while the fire was still active or before the full burn extent was visible, the resulting dNBR may represent only an interim assessment and may be updated as additional imagery becomes available.",
      ],
    },

    {
      type: "text",
      heading: "Terms of Use",
      paragraphs: [
        "NASA data and products are freely available to federal, state, public, non-profit and commercial users. This information can be experimental- or research-grade data products and may not be appropriate for operational use. These NASA data products, services, and the Disasters Mapping Portal are intended to aid decision makers and enhance situational awareness, but these data are not guaranteed to be consistently available or routinely updated. Use of this product should include: 'The product contains modified Copernicus Sentinel-2, processed by the European Space Agency.'",
      ],
    },

    {
      type: "text",
      heading: "Satellite/Sensor",
      paragraphs: [
        "MultiSpectral Instrument (MSI) aboard the European Space Agency's Copernicus Sentinel-2A, Sentinel-2B, and Sentinel-2C satellites",
      ],
    },

    {
      type: "text",
      heading: "Resolution",
      paragraphs: ["10 meters"],
    },

    {
      type: "text",
      heading: "Credits",
      paragraphs: [
        "NASA/GSFC; USGS; ESA Copernicus",
        "The product contains modified Copernicus Sentinel-2, processed by the European Space Agency.",
      ],
    },

    {
      type: "text",
      heading: "Tags",
      paragraphs: [
        "ESA, Copernicus, Sentinel-2, MSI, Optical, dNBR, NBR, Differenced Normalized Burn Ratio, Burn Severity, Wildfire, Vegetation Change",
      ],
    },
  ],
};
