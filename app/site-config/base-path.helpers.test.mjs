import assert from "node:assert/strict";
import { test } from "node:test";

process.env.NEXT_PUBLIC_BASE_PATH = "/disasters";
const { withBasePath } = await import("./base-path.helpers.ts");

test("prefixes internal absolute paths", () => {
  assert.equal(withBasePath("/img/logo.svg"), "/disasters/img/logo.svg");
  assert.equal(withBasePath("/training/intro-to-sar"), "/disasters/training/intro-to-sar");
});

test("keeps external and relative paths unchanged", () => {
  assert.equal(withBasePath("https://nasa.gov/x"), "https://nasa.gov/x");
  assert.equal(withBasePath("mailto:someone@nasa.gov"), "mailto:someone@nasa.gov");
  assert.equal(withBasePath("//domain.com/img/logo.png"), "//domain.com/img/logo.png");
  assert.equal(withBasePath("img/relative.png"), "img/relative.png");
});

test("does not double-prefix", () => {
  assert.equal(withBasePath("/disasters"), "/disasters");
  assert.equal(withBasePath("/disasters/foo"), "/disasters/foo");
});

test("prefixes base-path lookalikes", () => {
  assert.equal(withBasePath("/disasters-archive"), "/disasters/disasters-archive");
});

test("returns paths unchanged when no base path is configured", async () => {
  process.env.NEXT_PUBLIC_BASE_PATH = "";
  // query-string import busts the module cache so BASE_PATH is re-read
  const { withBasePath: withoutBase } = await import("./base-path.helpers.ts?no-base-path");
  assert.equal(withoutBase("/img/logo.svg"), "/img/logo.svg");
  assert.equal(withoutBase("https://nasa.gov/x"), "https://nasa.gov/x");
});
