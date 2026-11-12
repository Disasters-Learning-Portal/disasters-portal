import { describe, expect, it } from "vitest";
import type { EventContent } from "@/app/site-config/types";
import {
  transformEventToCardSimpleProps,
  transformEventToPageMastHeadProps,
  transformEventToPageSidebarDetails,
  transformEventToSectionOverviewProps,
} from "./event.helpers";

const event: EventContent = {
  id: "texas-floods",
  contentType: "event",
  title: "Texas Floods",
  description: "Flooding in central Texas",
  thumbnailImage: { src: "/thumb.jpg", alt: "Thumbnail" },
  themes: ["respond"],
  categories: ["flood"],
  dateUpdated: "2025-07-10",
  mastheadImage: { src: "/masthead.jpg", alt: "Masthead" },
  startDate: "2025-07-04",
  region: "Texas, USA",
};

describe("transformEventToCardSimpleProps", () => {
  it("links to the event page and tags it with its content type", () => {
    const props = transformEventToCardSimpleProps(event);
    expect(props.href).toBe("/news-events-stories/texas-floods");
    expect(props.title).toBe("Texas Floods");
    expect(props.tag).toMatchObject({ label: "Event" });
  });

  it("tags the latest event as active", () => {
    const props = transformEventToCardSimpleProps({ ...event, isLatest: true });
    expect(props.tag).toMatchObject({ label: "Active" });
  });
});

describe("transformEventToPageMastHeadProps", () => {
  it("uses the title, the updated date and the description when there is no subtitle", () => {
    const props = transformEventToPageMastHeadProps(event);
    expect(props.title).toBe("Texas Floods");
    expect(props.description).toBe("Flooding in central Texas");
    expect(props.tag).toMatchObject({ label: "Updated: July 10, 2025" });
  });

  it("prefers the subtitle over the description", () => {
    const props = transformEventToPageMastHeadProps({ ...event, subtitle: "Subtitle" });
    expect(props.description).toBe("Subtitle");
  });
});

describe("transformEventToPageSidebarDetails", () => {
  it("lists the region and the formatted start date", () => {
    expect(transformEventToPageSidebarDetails(event)).toEqual([
      { label: "Region", content: "Texas, USA" },
      { label: "Start Date", content: "July 4, 2025" },
    ]);
  });
});

describe("transformEventToSectionOverviewProps", () => {
  it("returns no items when the event has no links", () => {
    expect(transformEventToSectionOverviewProps(event)).toEqual({ items: [] });
  });

  it("lists the U.S. government link before the DHS/FEMA link", () => {
    const props = transformEventToSectionOverviewProps({
      ...event,
      linkDHSFEMA: { label: "FEMA response", href: "https://fema.gov" },
      linkUSGovernment: { label: "Government response", href: "https://usa.gov" },
    });
    expect(props.items).toEqual([
      {
        label: "What the U.S. government is doing",
        link: {
          className: "text-bold",
          isExternal: true,
          href: "https://usa.gov",
          label: "Government response",
        },
      },
      {
        label: "What DHS and FEMA are doing",
        link: {
          className: "text-bold",
          isExternal: true,
          href: "https://fema.gov",
          label: "FEMA response",
        },
      },
    ]);
  });
});
