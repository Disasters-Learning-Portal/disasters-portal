import { describe, expect, it } from "vitest";
import { EMPTY_FACETS } from "./facets.helpers";
import { buildFiltersUrl, buildPageHref, parseFilters, parsePageParam } from "./url.helpers";

describe("parseFilters", () => {
  it("reads the trimmed query and the facets", () => {
    const params = new URLSearchParams("q=%20flood%20&theme=respond&hazard=fire&type=news");
    expect(parseFilters(params)).toEqual({
      query: "flood",
      facets: { themes: ["respond"], hazards: ["fire"], contentTypes: ["news"] },
    });
  });

  it("returns an empty query and no facets for empty params", () => {
    expect(parseFilters(new URLSearchParams())).toEqual({ query: "", facets: EMPTY_FACETS });
  });
});

describe("parsePageParam", () => {
  it("reads a valid page number", () => {
    expect(parsePageParam(new URLSearchParams("page=3"))).toBe(3);
  });

  it("falls back to 1 for a missing, zero, decimal or junk page", () => {
    expect(parsePageParam(new URLSearchParams())).toBe(1);
    expect(parsePageParam(new URLSearchParams("page=0"))).toBe(1);
    expect(parsePageParam(new URLSearchParams("page=2.5"))).toBe(1);
    expect(parsePageParam(new URLSearchParams("page=3abc"))).toBe(1);
  });
});

describe("buildFiltersUrl", () => {
  it("writes the query and facets and drops the page", () => {
    const current = new URLSearchParams("page=2");
    const url = buildFiltersUrl(current, "/data-gallery", {
      query: "flood",
      facets: { ...EMPTY_FACETS, themes: ["prepare", "respond"] },
    });
    expect(url).toBe("?q=flood&theme=prepare&theme=respond");
  });

  it("drops params the gallery does not own", () => {
    const current = new URLSearchParams("utm_source=email&q=old");
    expect(buildFiltersUrl(current, "/data-gallery", { query: "new", facets: EMPTY_FACETS })).toBe(
      "?q=new",
    );
  });

  it("returns the pathname when no filters are set", () => {
    const current = new URLSearchParams("q=old&page=2&theme=prepare");
    expect(buildFiltersUrl(current, "/data-gallery", { query: "", facets: EMPTY_FACETS })).toBe(
      "/data-gallery",
    );
  });
});

describe("buildPageHref", () => {
  it("sets the page and keeps the current filters", () => {
    const current = new URLSearchParams("q=flood&theme=prepare&theme=respond");
    expect(buildPageHref(current, "/data-gallery", 2)).toBe(
      "?q=flood&theme=prepare&theme=respond&page=2",
    );
  });

  it("removes the page param for page 1", () => {
    const current = new URLSearchParams("page=3");
    expect(buildPageHref(current, "/data-gallery", 1)).toBe("/data-gallery");
  });
});
