import { PageMasthead, Section } from "@/app/components";
import { TRAINING_CARD_MASTHEAD } from "@/app/site-config/training/toplevel-page__card-masthead";
import client from "@/tina/__generated__/client";
import { TrainingBlocks } from "@/tina/blocks";
import { makeCardMastHeadProps } from "../site-config/content.helpers";

export default async function TrainingCollectionPage() {
  const { query, variables, data } = await client.queries.page({
    relativePath: "training.json",
  });

  return (
    <>
      <PageMasthead {...makeCardMastHeadProps(TRAINING_CARD_MASTHEAD)} />
      <Section>
        <div className="grid-row grid-gap">
          <TrainingBlocks query={query} variables={variables} data={data} />
        </div>
      </Section>
    </>
  );
}
