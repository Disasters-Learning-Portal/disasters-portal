import { describe, expect, it } from "vitest";
import { getCardSimpleSize, getGridColumnClass } from "./component.helpers";

describe("getGridColumnClass", () => {
  it("uses four columns when the count divides by four", () => {
    expect(getGridColumnClass(8)).toBe("grid-col-12 tablet:grid-col-6 desktop:grid-col-3");
  });

  it("uses three columns when the count divides by three", () => {
    expect(getGridColumnClass(6)).toBe("grid-col-12 tablet:grid-col-4");
  });

  it("uses two columns when the count divides by two only", () => {
    expect(getGridColumnClass(2)).toBe("grid-col-12 tablet:grid-col-6");
  });

  it("uses one column for an odd count that does not divide by three", () => {
    expect(getGridColumnClass(5)).toBe("grid-col-12");
  });

  it("never uses more columns than maxColumns", () => {
    expect(getGridColumnClass(12, 3)).toBe("grid-col-12 tablet:grid-col-4");
    expect(getGridColumnClass(4, 2)).toBe("grid-col-12 tablet:grid-col-6");
    expect(getGridColumnClass(4, 1)).toBe("grid-col-12");
  });
});

describe("getCardSimpleSize", () => {
  it("is small when cards fit three or four per row", () => {
    expect(getCardSimpleSize(4)).toBe("sm");
    expect(getCardSimpleSize(3)).toBe("sm");
  });

  it("is medium for two per row or a single column", () => {
    expect(getCardSimpleSize(2)).toBe("md");
    expect(getCardSimpleSize(1)).toBe("md");
  });

  it("is medium when maxColumns caps the row at two", () => {
    expect(getCardSimpleSize(4, 2)).toBe("md");
    expect(getCardSimpleSize(3, 2)).toBe("md");
  });
});
