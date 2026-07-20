"use client";

import {
  type BlockRegistry,
  cardDetailedBlock,
  createBlock,
} from "@teamimpact/veda-ui-blocks/tina";
import { createTinaBlocks } from "@teamimpact/veda-ui-blocks/tina/react";
import type { GalleryPageQuery, PageQuery } from "@/tina/__generated__/types";

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

/**
 * Restricted registry slice for gallery pages: the same entries, so the
 * datasetCard's terms (fixed props, exposed fields) stay identical — only
 * which templates a collection *offers* differs. Collections are Tina's unit
 * of template restriction, so each restricted page type gets its own
 * collection fed by its own slice.
 */
export const galleryBlocks = {
  datasetCard: siteBlocks.datasetCard,
} satisfies BlockRegistry;

export const siteBlockTemplates = Object.values(siteBlocks).map((b) => b.template);
export const galleryBlockTemplates = Object.values(galleryBlocks).map((b) => b.template);

/**
 * Visual-editing-aware renderers, bound here (a client module) because the
 * registry holds functions and cannot cross the server->client boundary.
 * The components take only the serializable query payload, so server pages
 * render them directly. They share one registry; only the layout wrapper
 * (grid classes) differs per page.
 */
export const TrainingBlocks = createTinaBlocks<PageQuery>({
  registry: siteBlocks,
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

export const DataGalleryBlocks = createTinaBlocks<GalleryPageQuery>({
  registry: galleryBlocks,
  getBlocks: (data) => data.galleryPage.blocks,
  wrapBlock: (node, _block, _index, fieldRef) => (
    <div className="grid-col-12 margin-y-1 desktop:margin-y-2" data-tina-field={fieldRef}>
      {node}
    </div>
  ),
});
