import { type CardProps, type CardSimpleProps, Link } from "@teamimpact/veda-ui-blocks";
import type { AppLink } from "@/app/components/AppLink";
import type { SidebarDetail } from "@/app/components/PageSidebar";
import {
  makeCardMastHeadProps,
  makeCardSimpleProps,
  toNASAStyleDate,
} from "@/app/site-config/content.helpers";
import type { EventContent, IterableItemWithId } from "@/app/site-config/types";

export const transformEventToCardSimpleProps = (
  event: EventContent,
): IterableItemWithId<CardSimpleProps<typeof AppLink>> => {
  const { isLatest, id, contentType, thumbnailImage, title } = event;
  return makeCardSimpleProps({
    id,
    contentType,
    thumbnailImage,
    title,
    ...(isLatest ? { tag: "active" } : {}),
  });
};

export const transformEventToPageMastHeadProps = (event: EventContent): CardProps => {
  const { datePublished, mastheadImage, title, description } = event;

  return makeCardMastHeadProps({ mastheadImage, title, description, datePublished });
};

export const transformEventToPageSidebarDetails = (event: EventContent): SidebarDetail[] => {
  const { region, startDate } = event;

  return [
    { label: "Region", content: region },
    { label: "Start Date", content: toNASAStyleDate(startDate) },
  ];
};

export type SectionOverviewItemProps = {
  overviewItems: { title: string; content: React.ReactNode }[];
};

export const transformEventToSectionOverviewProps = (
  event: EventContent,
): SectionOverviewItemProps => {
  const { linkDHSFEMA, linkUSGovernment } = event;

  return {
    overviewItems: [
      linkDHSFEMA
        ? {
            title: "What DHS and FEMA are doing:",
            content: (
              <Link variant="text" isExternal href={linkDHSFEMA.href}>
                {linkDHSFEMA.label ?? "Read more."}
              </Link>
            ),
          }
        : null,
      linkUSGovernment
        ? {
            title: "What the U.S. government is doing:",
            content: (
              <Link variant="text" isExternal href={linkUSGovernment.href}>
                {linkUSGovernment.label ?? "Read more"}
              </Link>
            ),
          }
        : null,
    ].filter((item): item is NonNullable<typeof item> => item !== null),
  };
};
