import { describe, expect, it } from "vitest";
import { DATA } from "./data";
import { DATASTORIES } from "./datastory";
import { EVENTS } from "./event";
import { NEWS } from "./news";
import { STORIES } from "./story";
import { TRAININGS, TRAININGS_EXTERNAL } from "./training";

// Pages look content up with `.find` by id, so a duplicate silently hides the other entry
const CONTENT_BY_ROUTE = {
  "/news-events-stories": [...STORIES, ...EVENTS, ...NEWS, ...DATASTORIES],
  "/training": [...TRAININGS, ...TRAININGS_EXTERNAL],
  "/data-gallery": DATA,
};

describe("content ids are unique within their route", () => {
  for (const [route, content] of Object.entries(CONTENT_BY_ROUTE)) {
    it(route, () => {
      const ids = content.map((c) => c.id);
      const duplicates = ids.filter((id, i) => ids.indexOf(id) !== i);
      expect(duplicates).toEqual([]);
    });
  }
});
