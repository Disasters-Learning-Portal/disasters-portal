import { describe, expect, it } from "vitest";
import { createTestCard } from "./content.fixtures";
import {
  makeCardCarouselProps,
  makeCardDetailedProps,
  makeCardFeaturedProps,
  makeCardMastHeadProps,
  makeCardSimpleProps,
  makeGalleryCardContent,
  toNASAStyleDate,
  toTitleCase,
} from "./content.helpers";
import type { DataStoryContentExternal, NewsContent } from "./types";

describe("toNASAStyleDate", () => {
  it("formats a date in NASA style", () => {
    expect(toNASAStyleDate("2026-11-09")).toBe("Nov. 9, 2026");
  });

  it("spells out short month names", () => {
    expect(toNASAStyleDate("2025-06-30")).toBe("June 30, 2025");
  });

  it("abbreviates September as Sept.", () => {
    expect(toNASAStyleDate("2024-09-01")).toBe("Sept. 1, 2024");
  });
});

describe("toTitleCase", () => {
  it("capitalizes the first letter of each word", () => {
    expect(toTitleCase("severe weather")).toBe("Severe Weather");
  });

  it("lowercases the rest of each word", () => {
    expect(toTitleCase("DATA STORY")).toBe("Data Story");
  });

  it("returns an empty string unchanged", () => {
    expect(toTitleCase("")).toBe("");
  });
});

describe("makeGalleryCardContent", () => {
  const card = createTestCard("card-1", {
    subtitle: "Subtitle",
    description: "Description",
    themes: ["respond"],
    categories: ["flood"],
  });

  it("keeps only the card fields of internal content", () => {
    const news: NewsContent = {
      ...card,
      contentType: "news",
      datePublished: "2026-01-01",
      mastheadImage: { src: "/masthead.jpg", alt: "Masthead" },
      body: [{ type: "note", text: "Body" }],
    };
    expect(makeGalleryCardContent(news)).toEqual({ ...card, contentType: "news" });
  });

  it("keeps the url of external content", () => {
    const story: DataStoryContentExternal = {
      ...card,
      contentType: "datastory",
      url: "https://example.com/story",
    };
    expect(makeGalleryCardContent(story)).toEqual({
      ...card,
      contentType: "datastory",
      url: "https://example.com/story",
    });
  });
});

describe("makeCardSimpleProps", () => {
  const card = createTestCard("story-1", { contentType: "story" });

  it("links to the content page when there is no url", () => {
    const props = makeCardSimpleProps(card);
    expect(props.href).toBe("/news-events-stories/story-1");
    expect(props.isExternal).toBe(false);
  });

  it("links to the url and marks it external", () => {
    const props = makeCardSimpleProps({ ...card, url: "https://example.com" });
    expect(props.href).toBe("https://example.com");
    expect(props.isExternal).toBe(true);
  });

  it("tags with the explicit tag, then the first theme, then the content type", () => {
    expect(makeCardSimpleProps({ ...card, tag: "active", themes: ["respond"] }).tag).toMatchObject({
      label: "Active",
    });
    expect(makeCardSimpleProps({ ...card, themes: ["resilience"] }).tag).toMatchObject({
      label: "Build Resilience",
    });
    expect(makeCardSimpleProps(card).tag).toMatchObject({ label: "Story" });
  });

  it("shows the subtitle, falling back to the description", () => {
    const withBoth = { ...card, subtitle: "Subtitle", description: "Description" };
    expect(makeCardSimpleProps(withBoth).description).toBe("Subtitle");
    expect(makeCardSimpleProps({ ...card, description: "Description" }).description).toBe(
      "Description",
    );
  });
});

describe("makeCardDetailedProps", () => {
  it("tags themes, categories and content type, and links to the content page", () => {
    const props = makeCardDetailedProps(
      createTestCard("story-1", {
        contentType: "datastory",
        themes: ["prepare"],
        categories: ["severe weather"],
      }),
    );
    expect(props.tags?.map((t) => t.label)).toEqual(["Prepare", "Severe Weather", "Data Story"]);
    expect(props.callToAction).toMatchObject({
      href: "/news-events-stories/story-1",
      label: "View Data Story",
      isExternal: false,
    });
  });
});

describe("makeCardFeaturedProps", () => {
  const callToAction = { label: "Read more", href: "/news-events-stories" };

  it("styles links as arrows and puts the image on the right by default", () => {
    const props = makeCardFeaturedProps({
      id: "featured-1",
      title: "Featured",
      callToAction,
      image: { src: "/featured.jpg", alt: "Featured" },
    });
    expect(props.callToAction).toMatchObject({ ...callToAction, variant: "arrow" });
    expect(props.image).toBeDefined();
    expect(props.imagePosition).toBe("right");
  });

  it("has no image position without an image", () => {
    const props = makeCardFeaturedProps({ id: "featured-1", title: "Featured" });
    expect(props.image).toBeUndefined();
    expect(props.imagePosition).toBeUndefined();
  });
});

describe("makeCardCarouselProps", () => {
  it("tags the content type and links to the url when there is one", () => {
    const props = makeCardCarouselProps(
      createTestCard("training-1", { contentType: "training", url: "https://example.com" }),
    );
    expect(props.tag).toMatchObject({ label: "Training" });
    expect(props.callToAction).toMatchObject({ href: "https://example.com", isExternal: true });
  });
});

describe("makeCardMastHeadProps", () => {
  const mastheadImage = { src: "/masthead.jpg", alt: "Masthead" };

  it("shows the published date over the updated date", () => {
    const props = makeCardMastHeadProps({
      mastheadImage,
      title: "Title",
      datePublished: "2026-01-05",
      dateUpdated: "2026-02-10",
    });
    expect(props.tag).toMatchObject({ label: "Published: Jan. 5, 2026" });
  });

  it("shows the updated date when there is no published date", () => {
    const props = makeCardMastHeadProps({
      mastheadImage,
      title: "Title",
      dateUpdated: "2026-02-10",
    });
    expect(props.tag).toMatchObject({ label: "Updated: Feb. 10, 2026" });
  });

  it("falls back to the theme label when there is no title", () => {
    expect(makeCardMastHeadProps({ mastheadImage, theme: "recover" }).title).toBe("Recover");
  });
});
