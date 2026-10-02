import type { TrainingContent, TrainingContentExternal } from "@/app/site-config/types";
import { TRAINING__BUILDING_CLIMATE_RISK_ASSESSMENTS } from "./training__building-climate-risk-assessments";
import { TRAINING__EO_BUILDING_EXPOSURE } from "./training__eo-building-exposure";
import { TRAINING__EO_INSURANCE_FINANCE_DECISION_MAKING } from "./training__eo-insurance-finance-decision-making";
import { TRAINING__EO_PRE_POST_FIRE_MONITORING } from "./training__eo-pre-post-fire-monitoring";
import { TRAINING__FUNDAMENTALS_REMOTE_SENSING } from "./training__fundamentals-remote-sensing";
import { TRAINING__INTRODUCTION_TO_SAR } from "./training__introduction-to-sar";
import { TRAINING__LIFELINES_WILDFIRE_WORKFLOW } from "./training__lifelines-wildfire-workflow";
import { TRAINING__MONITORING_PREDICTING_FLOODS } from "./training__monitoring-predicting-floods";
import { TRAINING__PORTAL_101 } from "./training__portal-101";
import { TRAINING__SATELLITE_REMOTE_SENSING_URBAN_HEAT_ISLANDS } from "./training__satellite-remote-sensing-urban-heat-islands";

export const TRAININGS: TrainingContent[] = [
  TRAINING__PORTAL_101,
  TRAINING__LIFELINES_WILDFIRE_WORKFLOW,
  TRAINING__EO_BUILDING_EXPOSURE,
];

export const TRAININGS_EXTERNAL: TrainingContentExternal[] = [
  TRAINING__EO_PRE_POST_FIRE_MONITORING,
  TRAINING__FUNDAMENTALS_REMOTE_SENSING,
  TRAINING__INTRODUCTION_TO_SAR,
  TRAINING__SATELLITE_REMOTE_SENSING_URBAN_HEAT_ISLANDS,
  TRAINING__BUILDING_CLIMATE_RISK_ASSESSMENTS,
  TRAINING__EO_INSURANCE_FINANCE_DECISION_MAKING,
  TRAINING__MONITORING_PREDICTING_FLOODS,
];
