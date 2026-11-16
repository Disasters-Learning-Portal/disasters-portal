import { describe, expect, it } from "vitest";
import { getPaginationState } from "./pagination.helpers";

const items = Array.from({ length: 14 }, (_, i) => i + 1);

describe("getPaginationState", () => {
  it("returns the six items of the requested page", () => {
    expect(getPaginationState(items, 2)).toEqual({
      pageItems: [7, 8, 9, 10, 11, 12],
      totalPages: 3,
      currentPage: 2,
    });
  });

  it("returns the remaining items on the last page", () => {
    expect(getPaginationState(items, 3).pageItems).toEqual([13, 14]);
  });

  it("does not add an empty page when the items fill the last page exactly", () => {
    expect(getPaginationState(items.slice(0, 12), 1).totalPages).toBe(2);
  });

  it("clamps a page past the end to the last page", () => {
    expect(getPaginationState(items, 99)).toEqual({
      pageItems: [13, 14],
      totalPages: 3,
      currentPage: 3,
    });
  });

  it("clamps a page below one to the first page", () => {
    expect(getPaginationState(items, 0)).toEqual({
      pageItems: [1, 2, 3, 4, 5, 6],
      totalPages: 3,
      currentPage: 1,
    });
  });

  it("has one empty page when there are no items", () => {
    expect(getPaginationState([], 1)).toEqual({ pageItems: [], totalPages: 1, currentPage: 1 });
  });
});
