import { ContentBlockRenderer, PageMasthead } from "@/app/components/";
import { makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { RESILIENCE_CONTENT } from "@/app/site-config/theme/theme__resilience";

export default function ResiliencePage() {
  const { theme, subtitle, mastheadImage } = RESILIENCE_CONTENT;

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps({ subtitle, theme, mastheadImage })} />
      {RESILIENCE_CONTENT.body.map((block, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
        <ContentBlockRenderer key={index} block={block} />
      ))}
    </>
  );
}
