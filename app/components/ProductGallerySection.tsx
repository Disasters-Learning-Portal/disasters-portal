import { CardDetailed } from "@teamimpact/veda-ui-blocks";
import { SectionHeading } from "@/app/components";
import { makeCardDetailedImageLeftProps } from "@/app/site-config/content.helpers";
import { DATASETS } from "@/app/site-config/dataset";

type ProductGallerySectionProps = {
  datasetIds: string[];
};

export const ProductGallerySection = ({ datasetIds }: ProductGallerySectionProps) => {
  const datasets = datasetIds
    .map((id) => DATASETS.find((d) => d.id === id))
    .filter((dataset): dataset is (typeof DATASETS)[number] => dataset !== undefined);

  if (datasets.length === 0) return null;

  return (
    <div className="margin-top-4">
      <SectionHeading href="/data-gallery">Product Gallery</SectionHeading>
      <div className="grid-row grid-gap">
        {datasets.map(({ id, thumbnailImage, categories, themes, ...card }) => (
          <div key={id} className="grid-col-12 margin-y-2">
            <CardDetailed
              {...makeCardDetailedImageLeftProps({
                id,
                thumbnailImage,
                tags: [...categories, ...themes],
                ...card,
              })}
              className="height-card-sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
