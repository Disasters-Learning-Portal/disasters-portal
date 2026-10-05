import {
  ContentBlockRenderer,
  PageMasthead,
  SectionCardSimple,
  SectionHeading,
} from "@/app/components/";
import {
  type CardMastheadPropsArgs,
  type CardSimplePropsArgs,
  makeCardMastHeadProps,
  makeCardSimpleProps,
} from "@/app/site-config/content.helpers";
import {
  RECOVER_CONTENT,
  RECOVER_STORIES,
  RECOVER_TRAININGS,
} from "@/app/site-config/theme/theme__recover";
import { pickKeys, typedMap } from "@/app/site-config/typed.helpers";

export default function RecoverPage() {
  const { theme, subtitle, mastheadImage }: CardMastheadPropsArgs = RECOVER_CONTENT;

  const stories: CardSimplePropsArgs[] = RECOVER_STORIES.slice(0, 1).map((i) =>
    pickKeys(i, ["id", "contentType", "thumbnailImage", "themes", "title", "subtitle"]),
  );

  const trainings: CardSimplePropsArgs[] = RECOVER_TRAININGS.map((i) => ({
    ...pickKeys(i, ["id", "contentType", "thumbnailImage", "title", "subtitle"]),
    ...("url" in i ? { url: i.url } : {}),
  }));

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ subtitle, theme, mastheadImage })} />
      <SectionCardSimple
        sectionHeading={
          <SectionHeading
            linkProps={{ label: "More Stories of Impact", href: "/news-events-stories?type=story" }}
          >
            Stories of Impact
          </SectionHeading>
        }
        cards={typedMap(stories, makeCardSimpleProps)}
      />
      {RECOVER_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
      <SectionCardSimple
        sectionHeading={
          <SectionHeading linkProps={{ label: "More Resources and Learning", href: "/training" }}>
            Resources & Learning
          </SectionHeading>
        }
        cards={typedMap(trainings, makeCardSimpleProps)}
      />
    </>
  );
}
