import type { DataContent } from "@/app/site-config/types";

import { DATA__AVIRIS_3_CHAR_AND_ASH } from "./data__aviris-3-char-and-ash";
import { DATA__AVIRIS_3_DNBR } from "./data__aviris-3-dnbr";
import { DATA__AVIRIS_3_EARLY_COLOR_IMAGERY } from "./data__aviris-3-early-color-imagery";
import { DATA__AVIRIS_3_PCA } from "./data__aviris-3-pca";
import { DATA__BLACK_MARBLE_BLUE_YELLOW } from "./data__black-marble-blue-yellow";
import { DATA__BLACK_MARBLE_BRDF } from "./data__black-marble-brdf";
import { DATA__BLACK_MARBLE_HD } from "./data__black-marble-hd";
import { DATA__CAPELLA_BACKSCATTER } from "./data__capella-backscatter";
import { DATA__ECOSTRESS_LAND_SURFACE_TEMPERATURE } from "./data__ecostress-land-surface-temperature";
import { DATA__GAIA } from "./data__gaia";
import { DATA__GPM_IMERG_PRECIPITATION } from "./data__gpm-imerg-precipitation";
import { DATA__HYDROSAR_S1_CLASSIFICATIONS } from "./data__hydrosar-s1-classifications";
import { DATA__ICEYE_BACKSCATTER } from "./data__iceye-backscatter";
import { DATA__LANDSAT_COLOR_INFRARED } from "./data__landsat-color-infrared";
import { DATA__LANDSAT_MNDWI } from "./data__landsat-mndwi";
import { DATA__LANDSAT_NATURAL_COLOR } from "./data__landsat-natural-color";
import { DATA__LANDSAT_NBR } from "./data__landsat-nbr";
import { DATA__LANDSAT_NDVI } from "./data__landsat-ndvi";
import { DATA__LANDSAT_TRUE_COLOR } from "./data__landsat-true-color";
import { DATA__NISAR_GUNW_DISPLACEMENT } from "./data__nisar-gunw-displacement";
import { DATA__OPERA_DISP_S1_COHERENCE } from "./data__opera-disp-s1-coherence";
import { DATA__OPERA_DISP_S1_RNG } from "./data__opera-disp-s1-rng";
import { DATA__OPERA_DISP_S1_UNW } from "./data__opera-disp-s1-unw";
import { DATA__OPERA_DISP_S1_WRP } from "./data__opera-disp-s1-wrp";
import { DATA__OPERA_DIST_ALERT_DIST_VEG_ANOM } from "./data__opera-dist-alert-dist-veg-anom";
import { DATA__OPERA_DIST_ALERT_DIST_VEG_STATUS } from "./data__opera-dist-alert-dist-veg-status";
import { DATA__OPERA_DIST_ALERT_GEN_DIST_STATUS } from "./data__opera-dist-alert-gen-dist-status";
import { DATA__OPERA_DIST_S1 } from "./data__opera-dist-s1";
import { DATA__OPERA_DSWX } from "./data__opera-dswx";
import { DATA__OPERA_RTC_RGB_MOSAIC } from "./data__opera-rtc-rgb-mosaic";
import { DATA__PLANET_NDVI } from "./data__planet-ndvi";
import { DATA__PLANET_NDVI_CHANGE } from "./data__planet-ndvi-change";
import { DATA__PLANET_NDWI } from "./data__planet-ndwi";
import { DATA__PLANET_TRUE_COLOR } from "./data__planet-true-color";
import { DATA__SATELLOGIC_COLOR_INFRARED } from "./data__satellogic-color-infrared";
import { DATA__SATELLOGIC_TRUE_COLOR } from "./data__satellogic-true-color";
import { DATA__SENTINEL_1_DAMAGE_ASSESSMENT } from "./data__sentinel-1-damage-assessment";
import { DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY } from "./data__sentinel-1-sentinel-2-burn-severity";
import { DATA__SENTINEL_2_COLOR_INFRARED } from "./data__sentinel-2-color-infrared";
import { DATA__SENTINEL_2_DNBR } from "./data__sentinel-2-dnbr";
import { DATA__SENTINEL_2_MNDWI } from "./data__sentinel-2-mndwi";
import { DATA__SENTINEL_2_NATURAL_COLOR } from "./data__sentinel-2-natural-color";
import { DATA__SENTINEL_2_NBR } from "./data__sentinel-2-nbr";
import { DATA__SENTINEL_2_NDVI } from "./data__sentinel-2-ndvi";
import { DATA__SENTINEL_2_NDVI_CHANGE } from "./data__sentinel-2-ndvi-change";
import { DATA__SENTINEL_2_SWIR } from "./data__sentinel-2-swir";
import { DATA__SENTINEL_2_TRUE_COLOR } from "./data__sentinel-2-true-color";
import { DATA__SKYSAT_COLOR_INFRARED } from "./data__skysat-color-infrared";
import { DATA__SKYSAT_TRUE_COLOR } from "./data__skysat-true-color";
import { DATA__UAVSAR_DISPLACEMENT } from "./data__uavsar-displacement";
import { DATA__UAVSAR_QUICKLOOK_CLASSIFIED } from "./data__uavsar-quicklook-classified";
import { DATA__UAVSAR_RGB } from "./data__uavsar-rgb";
import { DATA__UAVSAR_UNET_CLASSIFIED } from "./data__uavsar-unet-classified";
import { DATA__UAVSAR_UNET_CLASSIFIED_GRAYSCALE } from "./data__uavsar-unet-classified-grayscale";
import { DATA__UMBRA_SIGMA_NAUGHT } from "./data__umbra-sigma-naught";
import { DATA__VANTOR_COLOR_INFRARED } from "./data__vantor-color-infrared";
import { DATA__VANTOR_PANCHROMATIC } from "./data__vantor-panchromatic";
import { DATA__VANTOR_TRUE_COLOR } from "./data__vantor-true-color";
import { DATA__WB57_DYNAMITE } from "./data__wb57-dynamite";

export const DATA: DataContent[] = [
  DATA__AVIRIS_3_CHAR_AND_ASH,
  DATA__AVIRIS_3_DNBR,
  DATA__AVIRIS_3_EARLY_COLOR_IMAGERY,
  DATA__AVIRIS_3_PCA,
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_BRDF,
  DATA__BLACK_MARBLE_HD,
  DATA__CAPELLA_BACKSCATTER,
  DATA__ECOSTRESS_LAND_SURFACE_TEMPERATURE,
  DATA__GAIA,
  DATA__GPM_IMERG_PRECIPITATION,
  DATA__HYDROSAR_S1_CLASSIFICATIONS,
  DATA__ICEYE_BACKSCATTER,
  DATA__LANDSAT_COLOR_INFRARED,
  DATA__LANDSAT_MNDWI,
  DATA__LANDSAT_NATURAL_COLOR,
  DATA__LANDSAT_NBR,
  DATA__LANDSAT_NDVI,
  DATA__LANDSAT_TRUE_COLOR,
  DATA__NISAR_GUNW_DISPLACEMENT,
  DATA__OPERA_DISP_S1_COHERENCE,
  DATA__OPERA_DISP_S1_RNG,
  DATA__OPERA_DISP_S1_UNW,
  DATA__OPERA_DISP_S1_WRP,
  DATA__OPERA_DIST_ALERT_DIST_VEG_ANOM,
  DATA__OPERA_DIST_ALERT_DIST_VEG_STATUS,
  DATA__OPERA_DIST_ALERT_GEN_DIST_STATUS,
  DATA__OPERA_DIST_S1,
  DATA__OPERA_DSWX,
  DATA__OPERA_RTC_RGB_MOSAIC,
  DATA__PLANET_NDVI,
  DATA__PLANET_NDVI_CHANGE,
  DATA__PLANET_NDWI,
  DATA__PLANET_TRUE_COLOR,
  DATA__SATELLOGIC_COLOR_INFRARED,
  DATA__SATELLOGIC_TRUE_COLOR,
  DATA__SENTINEL_1_DAMAGE_ASSESSMENT,
  DATA__SENTINEL_1_SENTINEL_2_BURN_SEVERITY,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__SENTINEL_2_DNBR,
  DATA__SENTINEL_2_MNDWI,
  DATA__SENTINEL_2_NATURAL_COLOR,
  DATA__SENTINEL_2_NBR,
  DATA__SENTINEL_2_NDVI,
  DATA__SENTINEL_2_NDVI_CHANGE,
  DATA__SENTINEL_2_SWIR,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SKYSAT_COLOR_INFRARED,
  DATA__SKYSAT_TRUE_COLOR,
  DATA__UAVSAR_DISPLACEMENT,
  DATA__UAVSAR_QUICKLOOK_CLASSIFIED,
  DATA__UAVSAR_RGB,
  DATA__UAVSAR_UNET_CLASSIFIED,
  DATA__UAVSAR_UNET_CLASSIFIED_GRAYSCALE,
  DATA__UMBRA_SIGMA_NAUGHT,
  DATA__VANTOR_COLOR_INFRARED,
  DATA__VANTOR_PANCHROMATIC,
  DATA__VANTOR_TRUE_COLOR,
  DATA__WB57_DYNAMITE,
];

export const DATA__VENEZUELA_EQ_JUN_2026: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_HD,
  DATA__OPERA_DISP_S1_COHERENCE,
  DATA__UMBRA_SIGMA_NAUGHT,
  DATA__VANTOR_COLOR_INFRARED,
  DATA__VANTOR_PANCHROMATIC,
  DATA__VANTOR_TRUE_COLOR,
];

export const DATA__TYPHOON_SINLAKU_APR_2026: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_BRDF,
  DATA__CAPELLA_BACKSCATTER,
  DATA__GPM_IMERG_PRECIPITATION,
  DATA__ICEYE_BACKSCATTER,
  DATA__SATELLOGIC_COLOR_INFRARED,
  DATA__SATELLOGIC_TRUE_COLOR,
  DATA__SKYSAT_COLOR_INFRARED,
  DATA__SKYSAT_TRUE_COLOR,
  DATA__UMBRA_SIGMA_NAUGHT,
];

export const DATA__US_WINTER_STORM_JAN_2026: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__BLACK_MARBLE_HD,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
];

export const DATA__TEXAS_FLOODS_JULY_2025: DataContent[] = [
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__WB57_DYNAMITE,
  DATA__OPERA_DIST_ALERT_GEN_DIST_STATUS,
  DATA__SENTINEL_2_TRUE_COLOR,
  DATA__SENTINEL_2_COLOR_INFRARED,
  DATA__UAVSAR_UNET_CLASSIFIED,
];

export const DATA__SOUTHERN_CALIFORNIA_FIRE_JAN_2025: DataContent[] = [
  DATA__AVIRIS_3_CHAR_AND_ASH,
  DATA__AVIRIS_3_DNBR,
  DATA__AVIRIS_3_EARLY_COLOR_IMAGERY,
  DATA__AVIRIS_3_PCA,
  DATA__BLACK_MARBLE_BLUE_YELLOW,
  DATA__ECOSTRESS_LAND_SURFACE_TEMPERATURE,
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
