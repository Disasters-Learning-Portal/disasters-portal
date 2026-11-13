import { readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import { describe, expect, it } from "vitest";
import { ALL_CONTENT } from "./content.fixtures";

const IMAGES = ALL_CONTENT.flatMap((content) =>
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
