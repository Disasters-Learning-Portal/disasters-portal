import type { DataContent } from "@/app/site-config/types";
import { DATA__SENTINEL_2_COLOR_INFRARED } from "./data__sentinel-2-color-infrared";
import { DATA__SENTINEL_2_DNBR } from "./data__sentinel-2-dnbr";
import { DATA__SENTINEL_2_NBR } from "./data__sentinel-2-nbr";
import { DATA__SENTINEL_2_SWIR } from "./data__sentinel-2-swir";
import { DATA__SENTINEL_2_TRUE_COLOR } from "./data__sentinel-2-true-color";

export const DATA: DataContent[] = [
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__SENTINEL_2_SWIR,
  DATA__SENTINEL_2_NBR,
  DATA__SENTINEL_2_DNBR,
];
