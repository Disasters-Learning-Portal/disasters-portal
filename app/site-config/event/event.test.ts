import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { imageSize } from "image-size";
import { describe, expect, it } from "vitest";
import {
  CONTENT_DESCRIPTION_MAX_LENGTH,
  CONTENT_TITLE_MAX_LENGTH,
  EVENT_TEMPLATE_HERO_IMAGE_SRC,
  HORIZONTAL_IMAGE_RATIO_RANGE,
} from "@/app/site-config/content.constants";
import type { EventContent } from "@/app/site-config/types";
import { EVENTS } from "./index";

const EVENT_DIR = import.meta.dirname;
const PUBLIC_DIR = path.resolve(EVENT_DIR, "../../../public");

const eventFiles = await Promise.all(
  readdirSync(EVENT_DIR)
    .filter((name) => /^event__.*\.tsx?$/.test(name))
    .map(async (file) => ({
      file,
      id: file.replace(/^event__/, "").replace(/\.tsx?$/, ""),
      exports: Object.values((await import(`./${file}`)) as Record<string, EventContent>),
    })),
);

describe("EVENTS barrel", () => {
  it.todo("should be typed as EventContent", () => {
    // Compile-time assertion: EVENTS must remain typed as EventContent[]
    const _eventsTypeCheck: EventContent[] = EVENTS;
  });

  it.each(EVENTS)("$id corresponds to a file in the event directory", ({ id }) => {
    expect(eventFiles.map((f) => f.id)).toContain(id);
  });
});

describe.each(eventFiles)("event content file: $file", ({ id, exports }) => {
  it("exports exactly one variable", () => {
    expect(exports).toHaveLength(1);
  });

  it("is included in the EVENTS barrel", () => {
    expect(EVENTS).toContain(exports[0]);
  });

  it("has an id matching the filename-derived id", () => {
    expect(exports[0].id).toBe(id);
  });
});

describe.each(EVENTS)("event $id validation", (event) => {
  it(`has a title no longer than ${CONTENT_TITLE_MAX_LENGTH} characters`, () => {
    expect(event.title.length).toBeLessThanOrEqual(CONTENT_TITLE_MAX_LENGTH);
  });

  it.skipIf(event.description === undefined)(
    `has a description no longer than ${CONTENT_DESCRIPTION_MAX_LENGTH} characters`,
    () => {
      expect(event.description?.length).toBeLessThanOrEqual(CONTENT_DESCRIPTION_MAX_LENGTH);
    },
  );

  describe("horizontalImage", () => {
    const isTemplate = event.horizontalImage.src === EVENT_TEMPLATE_HERO_IMAGE_SRC;
    if (isTemplate) {
      console.warn(`event '${event.id}' is still using the template hero image`);
    }

    it("is located in /img/event/", () => {
      expect(path.dirname(event.horizontalImage.src)).toBe("/img/event");
    });

    it.skipIf(isTemplate)("has a filename prefixed with the event id", () => {
      const filename = path.basename(
        event.horizontalImage.src,
        path.extname(event.horizontalImage.src),
      );
      expect(filename.startsWith(event.id)).toBe(true);
    });

    it(`has a width-to-height ratio between ${HORIZONTAL_IMAGE_RATIO_RANGE.min} and ${HORIZONTAL_IMAGE_RATIO_RANGE.max}`, () => {
      const { width, height } = imageSize(
        readFileSync(path.join(PUBLIC_DIR, event.horizontalImage.src)),
      );
      const ratio = width / height;
      expect(ratio).toBeGreaterThanOrEqual(HORIZONTAL_IMAGE_RATIO_RANGE.min);
      expect(ratio).toBeLessThanOrEqual(HORIZONTAL_IMAGE_RATIO_RANGE.max);
    });
  });
});
