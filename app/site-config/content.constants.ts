// TODO: update all constants once reviewed with stakeholders

/**
 * Max length in characters for content titles
 */
export const CONTENT_TITLE_MAX_LENGTH = 50;

/**
 * Max length in characters for content descriptions
 */
export const CONTENT_DESCRIPTION_MAX_LENGTH = 265;

/**
 * Allowed width-to-height ratio range for horizontal content images.
 */
export const HORIZONTAL_IMAGE_RATIO_RANGE = { min: 1.49, max: 2.55 };

/**
 * Placeholder image src used while authoring new content. Validation tests
 * that enforce filename conventions skip entries still using this.
 */
export const EVENT_TEMPLATE_HERO_IMAGE_SRC = "/img/event/template-hero.webp";
