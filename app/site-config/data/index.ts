import type { DataContent } from "@/app/site-config/types";

import { DATA__AVIRIS_3_DNBR } from "./data__aviris-3-dnbr";
import { DATA__AVIRIS_3_EARLY_COLOR_IMAGERY } from "./data__aviris-3-early-color-imagery";
import { DATA__BLACK_MARBLE_BLUE_YELLOW } from "./data__black-marble-blue-yellow";
import { DATA__BLACK_MARBLE_BRDF } from "./data__black-marble-brdf";
import { DATA__BLACK_MARBLE_HD } from "./data__black-marble-hd";
import { DATA__CAPELLA_BACKSCATTER } from "./data__capella-backscatter";
import { DATA__GAIA } from "./data__gaia";
import { DATA__GPM_IMERG_PRECIPITATION } from "./data__gpm-imerg-precipitation";
import { DATA__LANDSAT_COLOR_INFRARED } from "./data__landsat-color-infrared";
import { DATA__LANDSAT_MNDWI } from "./data__landsat-mndwi";
import { DATA__LANDSAT_NATURAL_COLOR } from "./data__landsat-natural-color";
import { DATA__LANDSAT_NBR } from "./data__landsat-nbr";
import { DATA__LANDSAT_NDVI } from "./data__landsat-ndvi";
import { DATA__LANDSAT_TRUE_COLOR } from "./data__landsat-true-color";
import { DATA__NISAR_GUNW_DISPLACEMENT } from "./data__nisar-gunw-displacement";
import { DATA__OPERA_DISP_S1_COHERENCE } from "./data__opera-disp-s1-coherence";
import { DATA__OPERA_DIST_S1 } from "./data__opera-dist-s1";
import { DATA__PLANET_TRUE_COLOR } from "./data__planet-true-color";
import { DATA__SENTINEL_1_DAMAGE_ASSESSMENT } from "./data__sentinel-1-damage-assessment";
import { DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY } from "./data__sentinel-1-sentinel-2-burn-severity";
import { DATA__SENTINEL_2_COLOR_INFRARED } from "./data__sentinel-2-color-infrared";
import { DATA__SENTINEL_2_DNBR } from "./data__sentinel-2-dnbr";
import { DATA__SENTINEL_2_MNDWI } from "./data__sentinel-2-mndwi";
import { DATA__SENTINEL_2_NBR } from "./data__sentinel-2-nbr";
import { DATA__SENTINEL_2_NDVI } from "./data__sentinel-2-ndvi";
import { DATA__SENTINEL_2_SWIR } from "./data__sentinel-2-swir";
import { DATA__SENTINEL_2_TRUE_COLOR } from "./data__sentinel-2-true-color";
import { DATA__UMBRA_SIGMA_NAUGHT } from "./data__umbra_sigma_naught";

export const DATA: DataContent[] = [
  DATA__AVIRIS_3_DNBR,
  DATA__AVIRIS_3_EARLY_COLOR_IMAGERY,
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_BRDF,
  DATA__BLACK_MARBLE_HD,
  DATA__CAPELLA_BACKSCATTER,
  DATA__GAIA,
  DATA__GPM_IMERG_PRECIPITATION,
  DATA__LANDSAT_COLOR_INFRARED,
  DATA__LANDSAT_MNDWI,
  DATA__LANDSAT_NATURAL_COLOR,
  DATA__LANDSAT_NBR,
  DATA__LANDSAT_NDVI,
  DATA__LANDSAT_TRUE_COLOR,
  DATA__NISAR_GUNW_DISPLACEMENT,
  DATA__OPERA_DISP_S1_COHERENCE,
  DATA__OPERA_DIST_S1,
  DATA__PLANET_TRUE_COLOR,
  DATA__SENTINEL_1_DAMAGE_ASSESSMENT,
  DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__SENTINEL_2_DNBR,
  DATA__SENTINEL_2_MNDWI,
  DATA__SENTINEL_2_NBR,
  DATA__SENTINEL_2_NDVI,
  DATA__SENTINEL_2_SWIR,
  DATA__SENTINEL_2_TRUE_COLOR,
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
  DATA__BLACK_MARBLE_BRDF,
  DATA__CAPELLA_BACKSCATTER,
  DATA__GPM_IMERG_PRECIPITATION,
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
