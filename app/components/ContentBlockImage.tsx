import { readFile } from "node:fs/promises";
import path from "node:path";
import { imageSize } from "image-size";
import { AppImage } from "@/app/components/AppImage";

export type ContentBlockImageProps = {
  src: string;
  alt: string;
  maxWidth?: "card" | "card-lg" | "mobile" | "mobile-lg" | "tablet";
  caption?: string;
};

export const ContentBlockImage = async ({
  src,
  alt,
  maxWidth,
  caption,
}: ContentBlockImageProps) => {
  const file = await readFile(path.join("public", src));
  const { width, height } = imageSize(file);
  return (
    <figure className="margin-0">
      <AppImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`width-full height-auto ${maxWidth ? `maxw-${maxWidth}` : ""}`}
      />
      {caption && (
        <figcaption className="font-body-3xs line-height-body-3 measure-6 text-base-dark margin-top-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
