import { readFileSync } from "node:fs";
import path from "node:path";
import { parseEnv } from "node:util";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    reporters: "tree",
    // Same values locally and in CI, so results never depend on a developer's .env.local
    env: parseEnv(readFileSync(path.resolve(import.meta.dirname, ".env.test"), "utf8")),
  },
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./"),
    },
  },
});
