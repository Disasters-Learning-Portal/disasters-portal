import { DATA__HURRICANE_MILTON_OCT_2024 } from "@/app/site-config/data";

import type { EventContent } from "@/app/site-config/types";

export const EVENT__HURRICANE_MILTON_OCT_2024: EventContent = {
  id: "hurricane-milton-oct-2024",

  contentType: "event",

  title: "Hurricane Milton Oct. 2024",

  lastUpdatedDate: "2024-10-10",

  thumbnailImage: {
    src: "/img/event/hurricane-milton-oct-2024.webp",
    alt: "Hurricane Milton satellite imagery",
  },

  mastheadImage: {
    src: "/img/event/hurricane-milton-oct-2024.webp",
    alt: "Hurricane Milton satellite imagery",
  },

  themes: ["respond"],

  categories: ["tropical cyclone"],

  region: "Florida",

  startDate: "Oct. 5, 2024",

  linkUSGovernment: {
    label: "Learn more",
    href: "https://www.fema.gov/hurricane-milton",
  },

  body: [
    {
      type: "text",
      paragraphs: [
        "Hurricane Milton made landfall on Florida’s Gulf Coast as a Category 3 hurricane on Oct. 9, bringing destructive winds, tornadoes, storm surge, and widespread flooding across central Florida, including communities still recovering from Hurricane Helene. The NASA Disasters Program worked with FEMA and state emergency management agencies, sharing pre-event imagery and near real-time data. Products included Black Marble nighttime-lights imagery to help identify possible power outages, LIS soil-moisture data, MODIS daily flood detections, and half-hourly IMERG precipitation estimates.",
        "To overcome persistent cloud cover, the NASA Disasters Program coordinated a series of flights with NASA’s Airborne Science Program and FEMA using the Uninhabited Aerial Vehicle Synthetic Aperture Radar (UAVSAR). The flights collected wide-area radar observations of coastal and inland water extent, helping FEMA and state partners assess flooding and damage, maintain operational awareness, and guide resource deployment where optical satellite views were limited. NASA and U.S. Geological Survey Landsat 8 and 9 optical imagery, Copernicus Sentinel-1 flood maps, and OPERA Dynamic Surface Water eXtent maps provided additional views of inundation, while updated Black Marble imagery helped partners compare nighttime lighting before and after the storm to identify areas where power may have been lost or restored.",
      ],
    },

    {
      type: "image",
      src: "/img/event/hurricane-milton-uavsar-st-johns-river.webp",
      alt: "UAVSAR flood mapping near the St. Johns River, Florida, after Hurricane Milton.",
      width: 850,
      height: 705,
      caption:
        "This map shows UAVSAR data from the area surrounding St. Johns River, Florida, which saw flooding from Hurricane Milton. The map compares false-color raster data (right) with derived water extents (left), which can aid in detecting flooded areas. In the water extent map on the left, blue indicates open water, cyan indicates potentially flooded vegetation, and pink indicates potentially flooded urban areas. On the right RGB raster map, green indicates vegetated areas, pink indicates inundated forest and fields as well as urban areas, and black and dark gray indicate open water and smooth surfaces such as roads and bare ground. Credits: NASA JPL, NASA Disasters Program",
    },

    {
      type: "sectionCardGallery",
      heading: "Related Data",
      cards: DATA__HURRICANE_MILTON_OCT_2024,
    },
  ],
};
