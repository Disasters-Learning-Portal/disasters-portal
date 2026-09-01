import { Gallery, PageMasthead, Section } from "@/app/components";
import { contentToGalleryItem, makeCardMastHeadProps } from "@/app/site-config/content.helpers";
import { TRAININGS, TRAININGS_EXTERNAL } from "@/app/site-config/training";
import { TRAINING_CARD_MASTHEAD } from "@/app/site-config/training/toplevel-page__card-masthead";

export default function TrainingCollectionPage() {
  const items = [...TRAININGS, ...TRAININGS_EXTERNAL].map(contentToGalleryItem);

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(TRAINING_CARD_MASTHEAD)} />
      <Section>
        <Gallery items={items} />
      </Section>
    </>
  );
}
