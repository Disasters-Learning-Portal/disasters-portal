import type { DataStoryContent, DataStoryContentExternal } from "@/app/site-config/types";
import { DATASTORY__LAHAINA_FIRE } from "./datastory__lahaina-fire";
import { DATASTORY__SO2_VOLCANOES } from "./datastory__so2-volcanoes";
import { DATASTORY__TOOLS_YOU_CAN_USE_MAPPING_FLOOD_IMPACTS } from "./datastory__tools-you-can-use-mapping-flood-impacts";

export const DATASTORIES: (DataStoryContent | DataStoryContentExternal)[] = [
  DATASTORY__TOOLS_YOU_CAN_USE_MAPPING_FLOOD_IMPACTS,
  DATASTORY__SO2_VOLCANOES,
  DATASTORY__LAHAINA_FIRE,
];
