import { readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import { describe, expect, it } from "vitest";
import { DATA } from "./data";
import { DATASTORIES } from "./datastory";
import { EVENTS } from "./event";
import { NEWS } from "./news";
import { STORIES } from "./story";
import { PREPARE_CONTENT } from "./theme/theme__prepare";
import { RECOVER_CONTENT } from "./theme/theme__recover";
import { RESILIENCE_CONTENT } from "./theme/theme__resilience";
import { RESPOND_CONTENT } from "./theme/theme__respond";
import { TRAININGS } from "./training";

const CONTENT = [
  ...STORIES,
  ...EVENTS,
  ...NEWS,
  ...DATASTORIES,
  ...TRAININGS,
  ...DATA,
  PREPARE_CONTENT,
  RESPOND_CONTENT,
  RECOVER_CONTENT,
  RESILIENCE_CONTENT,
];

const IMAGES = CONTENT.flatMap((content) =>
  ("body" in content ? (content.body ?? []) : []).flatMap((block) =>
    block.type === "image" && !/^https?:\/\//.test(block.src) ? [{ id: content.id, ...block }] : [],
  ),
);

// A wrong size makes the layout jump on load until CSS corrects the height
describe("image blocks declare the size of their file", () => {
  for (const { id, src, width, height } of IMAGES) {
    it(`${id}: ${src}`, () => {
      const file = readFileSync(path.join("public", src));
      const actual = imageSize(file);
      expect({ width: actual.width, height: actual.height }).toEqual({ width, height });
    });
  }
});
