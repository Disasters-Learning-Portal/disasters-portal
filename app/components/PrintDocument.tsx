import { ContentBlockRenderer } from "@/app/components/ContentBlockRenderer";
import type { ContentBlock } from "@/app/site-config/types";
import styles from "./PrintDocument.module.css";

const TOC_HEADING_ID = "contents";

/**
 * A content item rendered as a standalone document: title, contents, body.
 *
 * Blocks go through the same {@link ContentBlockRenderer} the detail pages
 * use, so there is exactly one renderer to maintain and the document cannot
 * drift from the page it mirrors.
 *
 */
export function PrintDocument({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle?: string;
  body: ContentBlock[];
}) {
  // Every block type carries an optional heading, so the contents are derived
  // from the body and cannot drift from it.
  const tocHeadings = body.flatMap((block) =>
    "heading" in block && block.heading && (block.headingLevel ?? "h2") === "h2"
      ? [block.heading]
      : [],
  );

  return (
    <article className={styles.document}>
      <header className="margin-bottom-6">
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </header>

      {tocHeadings.length > 0 && (
        <nav aria-labelledby={TOC_HEADING_ID} className={styles.contents}>
          <h2 id={TOC_HEADING_ID} className={styles.tocTitle}>
            Contents
          </h2>
          <ol className={styles.toc}>
            {tocHeadings.map((text, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: static content, never reorders
              <li key={i}>{text}</li>
            ))}
          </ol>
        </nav>
      )}

      <div className={styles.body}>
        {body.map((block, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static content blocks, never reorder
          <ContentBlockRenderer key={i} block={block} isMultiColumnLayout />
        ))}
      </div>
    </article>
  );
}
