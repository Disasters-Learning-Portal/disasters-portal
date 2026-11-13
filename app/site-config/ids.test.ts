import { describe, expect, it } from "vitest";
import { ALL_CONTENT } from "./content.fixtures";
import { CONTENT_TYPES } from "./types";

const ROUTES = new Set(Object.values(CONTENT_TYPES).map((type) => type.route));

// Pages look content up with `.find` by id, so a duplicate silently hides the other entry
describe("content ids are unique within their route", () => {
  for (const route of ROUTES) {
    it(route, () => {
      const ids = ALL_CONTENT.filter(
        (content) => "contentType" in content && CONTENT_TYPES[content.contentType].route === route,
      ).map((content) => content.id);
      const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
      expect(duplicates).toEqual([]);
    });
  }
});
