import { PageMasthead, Section } from "@/app/components";
import { DATA_GALLERY_CARD_MASTHEAD } from "@/app/site-config/dataset/toplevel-page__card-masthead";
import client from "@/tina/__generated__/client";
import { DataGalleryBlocks } from "@/tina/blocks";
import { makeCardMastHeadProps } from "../site-config/content.helpers";

export default async function DataGalleryPage() {
  const { query, variables, data } = await client.queries.galleryPage({
    relativePath: "data-gallery.json",
  });

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(DATA_GALLERY_CARD_MASTHEAD)} />
      <Section>
        <div className="grid-row grid-gap">
          <DataGalleryBlocks query={query} variables={variables} data={data} />
        </div>
      </Section>
    </>
  );
}
