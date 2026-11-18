// Writes the tables in docs/content-specs from the types and JSDoc tags in types.ts.
// Run from the repo root with `pnpm docs:specs`.
import { writeFileSync } from "node:fs";
import ts from "typescript";

const SOURCE = "app/site-config/types.ts";
const OUT_DIR = "docs/content-specs";
const SPECS = {
  StoryContent: "story.md",
  EventContent: "event.md",
  NewsContent: "news.md",
  DataStoryContent: "data-story.md",
  TrainingContent: "training.md",
};

// Keyed by the type as written in types.ts.
const TYPE_LABELS = {
  DateString: "Date (YYYY-MM-DD)",
  "ContentBlock[]": "Content blocks (see blocks table)",
  "{ label: string; href: string }": "Link (label and href)",
};

const HEADER = "| Field | Label | Required | Type | Length | Notes |\n|---|---|---|---|---|---|";

const program = ts.createProgram([SOURCE], {});
const checker = program.getTypeChecker();
const sourceFile = program.getSourceFile(SOURCE);

// The compiler orders union members unpredictably; keep the order they are written in.
const byPositionInSource = (a, b) =>
  sourceFile.text.indexOf(`"${a}"`) - sourceFile.text.indexOf(`"${b}"`);

function getAllowedValues(type) {
  if (!checker.isArrayType(type)) return null;
  const [element] = checker.getTypeArguments(type);
  if (!element.isUnion() || !element.types.every((t) => t.isStringLiteral())) return null;
  return element.types.map((t) => t.value).sort(byPositionInSource);
}

function makeRow(symbol, type, typeText, path) {
  const tags = Object.fromEntries(
    symbol.getJsDocTags(checker).map(({ name, text }) => [name, ts.displayPartsToString(text)]),
  );
  const values = getAllowedValues(type);
  const doc = ts.displayPartsToString(symbol.getDocumentationComment(checker)).replace(/\s+/g, " ");

  const required = type.isStringLiteral()
    ? "Auto"
    : symbol.flags & ts.SymbolFlags.Optional
      ? "No"
      : "Yes";
  const length = [
    tags.maxLength && `max ${tags.maxLength}`,
    tags.recommendedLength && `aim for ${tags.recommendedLength}`,
  ]
    .filter(Boolean)
    .join(", ");
  const notes = [
    "deprecated" in tags ? "**Deprecated.**" : doc,
    values && `Values: ${values.map((v) => `\`${v}\``).join(", ")}`,
  ]
    .filter(Boolean)
    .join(" ");

  const cells = [
    `\`${path}\``,
    tags.label ?? "",
    required,
    TYPE_LABELS[typeText] ?? (values ? "One or more of the allowed values" : typeText),
    length,
    notes,
  ];
  return `| ${cells.join(" | ")} |`;
}

function makeRows(type, location, prefix = "") {
  return checker.getPropertiesOfType(type).flatMap((symbol) => {
    const propType = checker.getTypeOfSymbolAtLocation(symbol, location);
    const typeText = symbol.declarations[0].type.getText();
    const path = `${prefix}${symbol.name}`;
    const isNested =
      !TYPE_LABELS[typeText] &&
      propType.flags & ts.TypeFlags.Object &&
      !checker.isArrayType(propType);
    return isNested
      ? makeRows(propType, location, `${path}.`)
      : makeRow(symbol, propType, typeText, path);
  });
}

ts.forEachChild(sourceFile, (node) => {
  if (!ts.isTypeAliasDeclaration(node) || !SPECS[node.name.text]) return;
  const name = node.name.text;
  const rows = makeRows(checker.getTypeAtLocation(node.name), node);
  writeFileSync(
    `${OUT_DIR}/${SPECS[name]}`,
    `<!-- Generated from ${SOURCE}. Run \`pnpm docs:specs\` instead of editing. -->\n\n## \`${name}\`\n\n${HEADER}\n${rows.join("\n")}\n`,
  );
});
