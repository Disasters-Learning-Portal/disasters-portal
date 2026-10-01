import { ContentBlockRenderer, PageMasthead } from "@/app/components/";
import {
  type CardMastheadPropsArgs,
  makeCardMastHeadProps,
} from "@/app/site-config/content.helpers";
import { PREPARE_CONTENT } from "@/app/site-config/theme/theme__prepare";

export default function PreparePage() {
  const { theme, subtitle, mastheadImage }: CardMastheadPropsArgs = PREPARE_CONTENT;

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ subtitle, theme, mastheadImage })} />
      {PREPARE_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
    </>
  );
}
