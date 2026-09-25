import type { SidebarDetail } from "@/app/components/PageSidebar";
import {
  makeCardMastHeadProps,
  makeCardSimpleProps,
  toNASAStyleDate,
} from "@/app/site-config/content.helpers";
import type { EventContent } from "@/app/site-config/types";

export const transformEventToCardSimpleProps = (
  event: EventContent,
): ReturnType<typeof makeCardSimpleProps> => {
  const { isLatest, id, contentType, thumbnailImage, title } = event;
  return makeCardSimpleProps({
    id,
    contentType,
    thumbnailImage,
    title,
    ...(isLatest ? { tag: "active" } : {}),
  });
};

export const transformEventToPageMastHeadProps = (
  event: EventContent,
): ReturnType<typeof makeCardMastHeadProps> => {
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

export const transformEventToSectionOverviewProps = (event: EventContent) => {
  const { linkDHSFEMA, linkUSGovernment } = event;

  return {
    items: [
      linkUSGovernment
        ? {
            label: "What the U.S. government is doing",
            link: {
              className: "text-bold",
              isExternal: true,
              href: linkUSGovernment.href,
              label: linkUSGovernment.label ?? "Read more",
            },
          }
        : null,
      linkDHSFEMA
        ? {
            label: "What DHS and FEMA are doing",
            link: {
              className: "text-bold",
              isExternal: true,
              href: linkDHSFEMA.href,
              label: linkDHSFEMA.label ?? "Read more",
            },
          }
        : null,
    ].filter((item): item is NonNullable<typeof item> => item !== null),
  };
};
