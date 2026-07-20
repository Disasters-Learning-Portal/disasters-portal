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
 * (templates) and the renderer (component + fixed props).
 *
 * Dev-defined values live in `fixed` — they are merged at render time and
 * never stored in content files, so changing them here takes effect on the
 * next deploy without a content migration.
 *
 * The same library definition can be registered multiple times under
 * distinct template names with different fixed values (trainingCard vs
 * datasetCard below) — Tina identifies block kinds by template name.
 */
export const siteBlocks = {
  trainingCard: createBlock(cardDetailedBlock, {
    name: "trainingCard",
    label: "Training Card",
    fixed: {
      imagePosition: "top",
      className: "height-card-lg",
    },
  }),
  datasetCard: createBlock(cardDetailedBlock, {
    name: "datasetCard",
    label: "Dataset Card",
    fixed: {
      imagePosition: "left",
      className: "height-card-sm",
    },
    // note: `tags` stays editor-facing here, unlike nothing-tagged training cards
  }),
} satisfies BlockRegistry;

export const siteBlockTemplates = Object.values(siteBlocks).map((b) => b.template);

const getBlocks = (data: PageQuery) => data.page.blocks;

/**
 * Visual-editing-aware renderers, bound here (a client module) because the
 * registry holds functions and cannot cross the server->client boundary.
 * The components take only the serializable query payload, so server pages
 * render them directly. They share one registry; only the layout wrapper
 * (grid classes) differs per page.
 */
export const TrainingBlocks = createTinaBlocks<PageQuery>({
  registry: siteBlocks,
  getBlocks,
  wrapBlock: (node, _block, _index, fieldRef) => (
    <div
      className="grid-col-12 tablet:grid-col-6 margin-y-1 desktop:margin-y-2"
      data-tina-field={fieldRef}
    >
      {node}
    </div>
  ),
});

export const DataGalleryBlocks = createTinaBlocks<PageQuery>({
  registry: siteBlocks,
  getBlocks,
  wrapBlock: (node, _block, _index, fieldRef) => (
    <div className="grid-col-12 margin-y-1 desktop:margin-y-2" data-tina-field={fieldRef}>
      {node}
    </div>
  ),
});
