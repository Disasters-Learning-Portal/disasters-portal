import type { DataContent } from "@/app/site-config/types";
import { DATA__AVIRIS_3_DNBR } from "./data__aviris-3-dnbr";
import { DATA__BLACK_MARBLE_BLUE_YELLOW } from "./data__black-marble-blue-yellow";
import { DATA__BLACK_MARBLE_BRDF } from "./data__black-marble-brdf";
import { DATA__BLACK_MARBLE_HD } from "./data__black-marble-hd";
import { DATA__GAIA } from "./data__gaia";
import { DATA__OPERA_DISP_S1_COHERENCE } from "./data__opera-disp-s1-coherence";
import { DATA__OPERA_DIST_S1 } from "./data__opera-dist-s1";
import { DATA__SENTINEL_2_COLOR_INFRARED } from "./data__sentinel-2-color-infrared";
import { DATA__SENTINEL_2_DNBR } from "./data__sentinel-2-dnbr";
import { DATA__SENTINEL_2_MNDWI } from "./data__sentinel-2-mndwi";
import { DATA__SENTINEL_2_NBR } from "./data__sentinel-2-nbr";
import { DATA__SENTINEL_2_SWIR } from "./data__sentinel-2-swir";
import { DATA__SENTINEL_2_TRUE_COLOR } from "./data__sentinel-2-true-color";
import { DATA__UMBRA_SIGMA_NAUGHT } from "./data__umbra-sigma-naught";

export const DATA: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_BRDF,
  DATA__BLACK_MARBLE_HD,
  DATA__GAIA,
  DATA__OPERA_DISP_S1_COHERENCE,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__SENTINEL_2_SWIR,
  DATA__SENTINEL_2_MNDWI,
  DATA__SENTINEL_2_NBR,
  DATA__SENTINEL_2_DNBR,
  DATA__UMBRA_SIGMA_NAUGHT,
  DATA__OPERA_DIST_S1,
  DATA__AVIRIS_3_DNBR,
];
