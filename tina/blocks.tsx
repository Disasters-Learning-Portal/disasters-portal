"use client";

import {
  type BlockRegistry,
  cardDetailedBlock,
  createBlock,
} from "@teamimpact/veda-ui-blocks/tina";
import { createTinaBlocks } from "@teamimpact/veda-ui-blocks/tina/react";
import type { PageQuery } from "@/tina/__generated__/types";

/**
 * Site block registry: single source of truth feeding both the Tina schema
 * (template) and the renderer (component + fixed props).
 *
 * Dev-defined values live in `fixed` — they are merged at render time and
 * never stored in content files, so changing them here takes effect on the
 * next deploy without a content migration.
 */
export const trainingBlocks = {
  trainingCard: createBlock(cardDetailedBlock, {
    name: "trainingCard",
    label: "Training Card",
    fixed: {
      imagePosition: "top",
      className: "height-card-lg",
    },
  }),
} satisfies BlockRegistry;

export const trainingBlockTemplates = Object.values(trainingBlocks).map((b) => b.template);

/**
 * Visual-editing-aware renderer for the training page's blocks. Bound here
 * (a client module) because the registry holds functions and cannot cross
 * the server->client boundary; the component itself takes only the
 * serializable query payload, so server pages can render it directly.
 */
export const TrainingBlocks = createTinaBlocks<PageQuery>({
  registry: trainingBlocks,
  getBlocks: (data) => data.page.blocks,
  wrapBlock: (node, _block, _index, fieldRef) => (
    <div
      className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-2"
      data-tina-field={fieldRef}
    >
      {node}
    </div>
  ),
});
