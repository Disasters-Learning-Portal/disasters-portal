import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import { ABOUT_PAGE_BODY } from "@/app/site-config/about/about__page";

export default function AboutPage() {
  return (
    <>
      {ABOUT_PAGE_BODY.body.map((block, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
        <ContentBlockRenderer key={i} block={block} />
      ))}
    </>
  );
}
