import type { DataContent } from "@/app/site-config/types";

import { DATA__AVIRIS_3_DNBR } from "./data__aviris-3-dnbr";
import { DATA__AVIRIS_3_EARLY_COLOR_IMAGERY } from "./data__aviris-3-early-color-imagery";
import { DATA__BLACK_MARBLE_BLUE_YELLOW } from "./data__black-marble-blue-yellow";
import { DATA__BLACK_MARBLE_HD } from "./data__black-marble-hd";
import { DATA__GAIA } from "./data__gaia";
import { DATA__OPERA_DISP_S1_COHERENCE } from "./data__opera-disp-s1-coherence";
import { DATA__OPERA_DIST_S1 } from "./data__opera-dist-s1";
import { DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY } from "./data__sentinel-1-sentinel-2-burn-severity";
import { DATA__SENTINEL_2_COLOR_INFRARED } from "./data__sentinel-2-color-infrared";
import { DATA__SENTINEL_2_DNBR } from "./data__sentinel-2-dnbr";
import { DATA__SENTINEL_2_NBR } from "./data__sentinel-2-nbr";
import { DATA__SENTINEL_2_SWIR } from "./data__sentinel-2-swir";
import { DATA__SENTINEL_2_TRUE_COLOR } from "./data__sentinel-2-true-color";
import { DATA__UMBRA_SIGMA_NAUGHT } from "./data__umbra_sigma_naught";

export const DATA: DataContent[] = [
  DATA__AVIRIS_3_DNBR,
  DATA__AVIRIS_3_EARLY_COLOR_IMAGERY,
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_HD,
  DATA__GAIA,
  DATA__OPERA_DISP_S1_COHERENCE,
  DATA__OPERA_DIST_S1,
  DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__SENTINEL_2_SWIR,
  DATA__SENTINEL_2_NBR,
  DATA__SENTINEL_2_DNBR,
  DATA__UMBRA_SIGMA_NAUGHT,
];

export const DATA__VENEZUELA_EQ_JUN_2026: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_HD,
  DATA__OPERA_DISP_S1_COHERENCE,
  DATA__UMBRA_SIGMA_NAUGHT,
];

export const DATA__TYPHOON_SINLAKU_APR_2026: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
];

export const DATA__US_WINTER_STORM_JAN_2026: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_HD,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
];

export const DATA__TEXAS_FLOODS_JULY_2025: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
];

export const DATA__SOUTHERN_CALIFORNIA_FIRE_JAN_2025: DataContent[] = [
  DATA__AVIRIS_3_DNBR,
  DATA__AVIRIS_3_EARLY_COLOR_IMAGERY,
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__OPERA_DIST_S1,
  DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__SENTINEL_2_SWIR,
  DATA__SENTINEL_2_NBR,
  DATA__SENTINEL_2_DNBR,
];

export const DATA__HURRICANE_MILTON_OCT_2024: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__SENTINEL_2_SWIR,
];

export const DATA__HURRICANE_HELENE_SEPT_2024: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_HD,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_SWIR,
];