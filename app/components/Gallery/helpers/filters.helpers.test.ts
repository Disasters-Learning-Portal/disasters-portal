import { describe, expect, it, vi } from "vitest";
import { createTestCard } from "@/app/site-config/content.fixtures";
import { EMPTY_FACETS } from "./facets.helpers";
import { applyFilters, buildAppliedFilters, type FilterState } from "./filters.helpers";

const floodNews = createTestCard("flood-news", {
  title: "Flood news",
  subtitle: "Rivers rising",
  categories: ["flood"],
});

const fireData = createTestCard("fire-data", {
  title: "Fire data",
  description: "Burn scar maps",
  categories: ["fire"],
});

const items = [floodNews, fireData];

describe("applyFilters", () => {
  it("returns every item when no filter is set", () => {
    expect(applyFilters(items, { query: "", facets: EMPTY_FACETS })).toEqual(items);
  });

  it("matches the query case-insensitively in title, subtitle or description", () => {
    expect(applyFilters(items, { query: "news", facets: EMPTY_FACETS })).toEqual([floodNews]);
    expect(applyFilters(items, { query: "RIVERS", facets: EMPTY_FACETS })).toEqual([floodNews]);
    expect(applyFilters(items, { query: "burn scar", facets: EMPTY_FACETS })).toEqual([fireData]);
  });

  it("requires both the query and the facets to match", () => {
    const filters = { query: "data", facets: { ...EMPTY_FACETS, hazards: ["flood" as const] } };
    expect(applyFilters(items, filters)).toEqual([]);
  });
});

describe("buildAppliedFilters", () => {
  const filters: FilterState = {
    query: "flood",
    facets: { ...EMPTY_FACETS, themes: ["respond"], hazards: ["fire"] },
  };

  it("lists the query pill first, then facet pills", () => {
    const pills = buildAppliedFilters(filters, () => {});
    expect(pills.map(({ id, value }) => ({ id, value }))).toEqual([
      { id: "query", value: "Text: “flood”" },
      { id: "themes-respond", value: "respond" },
      { id: "hazards-fire", value: "fire" },
    ]);
  });

  it("returns no pills when no filter is set", () => {
    expect(buildAppliedFilters({ query: "", facets: EMPTY_FACETS }, () => {})).toEqual([]);
  });

  it("removing the query pill clears only the query", () => {
    const setFilters = vi.fn();
    buildAppliedFilters(filters, setFilters)[0].remove();
    expect(setFilters).toHaveBeenCalledWith({ ...filters, query: "" });
  });

  it("removing a facet pill deselects only that value", () => {
    const setFilters = vi.fn();
    buildAppliedFilters(filters, setFilters)[1].remove();
    expect(setFilters).toHaveBeenCalledWith({
      ...filters,
      facets: { ...filters.facets, themes: [] },
    });
  });
});
