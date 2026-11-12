import { describe, expect, it } from "vitest";
import { createTestCard } from "./content.fixtures";
import {
  getTypedEntries,
  isCategory,
  isContentType,
  isInternalContent,
  isMastHeadImage,
  isTheme,
  pickKeys,
  typedMap,
} from "./typed.helpers";
import type { DataStoryContentExternal, NewsContent } from "./types";

const internalNews: NewsContent = {
  ...createTestCard("news-1"),
  contentType: "news",
  datePublished: "2026-01-01",
  mastheadImage: { src: "/masthead.jpg", alt: "Masthead" },
};

const externalDataStory: DataStoryContentExternal = {
  ...createTestCard("datastory-1"),
  contentType: "datastory",
  url: "https://example.com/story",
};

describe("isTheme", () => {
  it("accepts a known theme and rejects anything else", () => {
    expect(isTheme("prepare")).toBe(true);
    expect(isTheme("Prepare")).toBe(false);
    expect(isTheme("fire")).toBe(false);
  });
});

describe("isContentType", () => {
  it("accepts a known content type and rejects anything else", () => {
    expect(isContentType("datastory")).toBe(true);
    expect(isContentType("podcast")).toBe(false);
  });
});

describe("isCategory", () => {
  it("accepts a known category and rejects anything else", () => {
    expect(isCategory("severe weather")).toBe(true);
    expect(isCategory("respond")).toBe(false);
  });
});

describe("isInternalContent", () => {
  it("is true for content without a url", () => {
    expect(isInternalContent(internalNews)).toBe(true);
  });

  it("is false for content with a url", () => {
    expect(isInternalContent(externalDataStory)).toBe(false);
  });
});

describe("isMastHeadImage", () => {
  it("is true for an object with src and alt", () => {
    expect(isMastHeadImage({ src: "/a.jpg", alt: "A" })).toBe(true);
  });

  it("is false when src or alt is missing, or the value is not an object", () => {
    expect(isMastHeadImage({ src: "/a.jpg" })).toBe(false);
    expect(isMastHeadImage({ alt: "A" })).toBe(false);
    expect(isMastHeadImage(null)).toBe(false);
    expect(isMastHeadImage("/a.jpg")).toBe(false);
  });
});

describe("pickKeys", () => {
  it("returns only the listed keys", () => {
    expect(pickKeys({ a: 1, b: 2, c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });

  it("returns an empty object for no keys", () => {
    expect(pickKeys({ a: 1 }, [])).toEqual({});
  });
});

describe("typedMap", () => {
  it("maps each element in order", () => {
    expect(typedMap([1, 2, 3], (n: number) => n * 2)).toEqual([2, 4, 6]);
  });
});

describe("getTypedEntries", () => {
  it("returns the key/value pairs of an object", () => {
    expect(getTypedEntries({ a: 1, b: 2 })).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });
});
