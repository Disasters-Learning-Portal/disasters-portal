import { describe, expect, it } from "vitest";
import type { GalleryCardContent } from "@/app/site-config/types";
import {
  collectAvailableFacets,
  EMPTY_FACETS,
  getFacetLabel,
  listFacetOptions,
  listSelectedFacetValues,
  matchesFacets,
  parseFacets,
  setFacetParams,
  toggleFacetValue,
} from "./facets.helpers";

const floodNews: GalleryCardContent = {
  id: "flood-news",
  contentType: "news",
  title: "Flood news",
  thumbnailImage: { src: "/thumb.jpg", alt: "Thumbnail" },
  themes: ["respond"],
  categories: ["flood"],
};

const fireData: GalleryCardContent = {
  id: "fire-data",
  contentType: "data",
  title: "Fire data",
  thumbnailImage: { src: "/thumb.jpg", alt: "Thumbnail" },
  themes: ["prepare", "recover"],
  categories: ["fire"],
};

describe("getFacetLabel", () => {
  it("uses the theme or content type label, otherwise title case", () => {
    expect(getFacetLabel("resilience")).toBe("Build Resilience");
    expect(getFacetLabel("datastory")).toBe("Data Story");
    expect(getFacetLabel("severe weather")).toBe("Severe Weather");
  });
});

describe("parseFacets", () => {
  it("reads repeated params into each facet", () => {
    const params = new URLSearchParams("theme=prepare&theme=respond&hazard=flood&type=news");
    expect(parseFacets(params)).toEqual({
      themes: ["prepare", "respond"],
      hazards: ["flood"],
      contentTypes: ["news"],
    });
  });

  it("drops unknown values", () => {
    const params = new URLSearchParams("theme=unknown&hazard=meteor&type=podcast");
    expect(parseFacets(params)).toEqual(EMPTY_FACETS);
  });
});

describe("setFacetParams", () => {
  it("replaces existing facet params and keeps other params", () => {
    const params = new URLSearchParams("q=flood&theme=prepare");
    setFacetParams(params, { ...EMPTY_FACETS, themes: ["respond"], hazards: ["fire"] });
    expect(params.toString()).toBe("q=flood&theme=respond&hazard=fire");
  });
});

describe("matchesFacets", () => {
  it("matches everything when no facet is selected", () => {
    expect(matchesFacets(floodNews, EMPTY_FACETS)).toBe(true);
  });

  it("matches any selected value within one facet", () => {
    expect(matchesFacets(floodNews, { ...EMPTY_FACETS, themes: ["prepare", "respond"] })).toBe(
      true,
    );
  });

  it("requires a match in every selected facet", () => {
    expect(
      matchesFacets(floodNews, { ...EMPTY_FACETS, themes: ["respond"], hazards: ["fire"] }),
    ).toBe(false);
  });

  it("does not match an item with no values in a selected facet", () => {
    const uncategorized = { ...floodNews, categories: [] };
    expect(matchesFacets(uncategorized, { ...EMPTY_FACETS, hazards: ["fire"] })).toBe(false);
  });
});

describe("collectAvailableFacets", () => {
  it("lists the values present in the items, in registry order", () => {
    expect(collectAvailableFacets([floodNews, fireData])).toEqual({
      themes: ["prepare", "respond", "recover"],
      hazards: ["fire", "flood"],
      contentTypes: ["data", "news"],
    });
  });

  it("returns empty facets for no items", () => {
    expect(collectAvailableFacets([])).toEqual(EMPTY_FACETS);
  });
});

describe("toggleFacetValue", () => {
  it("adds a value that is not selected", () => {
    expect(toggleFacetValue(EMPTY_FACETS, "hazards", "fire").hazards).toEqual(["fire"]);
  });

  it("removes a value that is selected", () => {
    const facets = { ...EMPTY_FACETS, hazards: ["fire" as const, "flood" as const] };
    expect(toggleFacetValue(facets, "hazards", "fire").hazards).toEqual(["flood"]);
  });

  it("does not change the selection it is given", () => {
    const facets = { ...EMPTY_FACETS, hazards: ["fire" as const] };
    toggleFacetValue(facets, "hazards", "flood");
    expect(facets.hazards).toEqual(["fire"]);
  });
});

describe("listSelectedFacetValues", () => {
  it("flattens selected values in registry order", () => {
    expect(
      listSelectedFacetValues({ themes: ["respond"], hazards: ["fire"], contentTypes: ["news"] }),
    ).toEqual([
      { key: "themes", value: "respond" },
      { key: "hazards", value: "fire" },
      { key: "contentTypes", value: "news" },
    ]);
  });

  it("returns an empty list when nothing is selected", () => {
    expect(listSelectedFacetValues(EMPTY_FACETS)).toEqual([]);
  });
});

describe("listFacetOptions", () => {
  it("offers available values and marks the selected ones", () => {
    const available = {
      themes: ["prepare" as const, "respond" as const],
      hazards: [],
      contentTypes: [],
    };
    const selection = { ...EMPTY_FACETS, themes: ["respond" as const] };
    expect(listFacetOptions(selection, available)).toEqual([
      {
        key: "themes",
        param: "theme",
        title: "Need",
        options: [
          { value: "prepare", selected: false },
          { value: "respond", selected: true },
        ],
      },
    ]);
  });

  it("keeps a selected value that is no longer available", () => {
    const selection = { ...EMPTY_FACETS, hazards: ["fire" as const] };
    expect(listFacetOptions(selection, EMPTY_FACETS)[0].options).toEqual([
      { value: "fire", selected: true },
    ]);
  });

  it("hides the content type facet with one option but keeps other single-option facets", () => {
    const available = {
      ...EMPTY_FACETS,
      hazards: ["fire" as const],
      contentTypes: ["news" as const],
    };
    expect(listFacetOptions(EMPTY_FACETS, available).map((group) => group.key)).toEqual([
      "hazards",
    ]);
  });

  it("shows the content type facet when two or more types are available", () => {
    const available = { ...EMPTY_FACETS, contentTypes: ["data" as const, "news" as const] };
    expect(listFacetOptions(EMPTY_FACETS, available).map((group) => group.key)).toEqual([
      "contentTypes",
    ]);
  });
});
