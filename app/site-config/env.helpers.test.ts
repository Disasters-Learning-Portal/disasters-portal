import { afterEach, describe, expect, it, vi } from "vitest";
import { withBasePath } from "./env.helpers";

describe("withBasePath", () => {
  describe("with no base path", () => {
    it("returns the path unchanged", () => {
      expect(withBasePath("/about")).toBe("/about");
    });
  });

  describe("with base path /disasters", () => {
    afterEach(() => {
      vi.unstubAllEnvs();
    });

    const importWithBasePath = async () => {
      vi.stubEnv("NEXT_PUBLIC_BASE_PATH", "/disasters");
      vi.resetModules();
      const { withBasePath } = await import("./env.helpers");
      return withBasePath;
    };

    it("prefixes an absolute path", async () => {
      const withBasePath = await importWithBasePath();
      expect(withBasePath("/about")).toBe("/disasters/about");
    });

    it("leaves relative paths and full urls unchanged", async () => {
      const withBasePath = await importWithBasePath();
      expect(withBasePath("about")).toBe("about");
      expect(withBasePath("https://nasa.gov/img.png")).toBe("https://nasa.gov/img.png");
      expect(withBasePath("//nasa.gov/img.png")).toBe("//nasa.gov/img.png");
    });

    it("does not prefix a path that already has the base path", async () => {
      const withBasePath = await importWithBasePath();
      expect(withBasePath("/disasters")).toBe("/disasters");
      expect(withBasePath("/disasters/about")).toBe("/disasters/about");
    });

    it("prefixes a path that only starts with the same letters as the base path", async () => {
      const withBasePath = await importWithBasePath();
      expect(withBasePath("/disasters-guide")).toBe("/disasters/disasters-guide");
    });
  });
});

describe.each([
  ["NEXT_PUBLIC_DATA_VISUALIZATION_URL", "DATA_VISUALIZATION_URL"],
  ["NEXT_PUBLIC_STAC_API_URL", "STAC_API_URL"],
  ["NEXT_PUBLIC_RASTER_API_URL", "RASTER_API_URL"],
] as const)("required URL %s", (variable, constant) => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  const importWith = async (value: string) => {
    vi.stubEnv(variable, value);
    vi.resetModules();
    return import("./env.helpers");
  };

  it("fails when missing", async () => {
    await expect(importWith("")).rejects.toThrow(
      `Missing required environment variable ${variable}`,
    );
  });

  it("strips trailing slashes", async () => {
    const module = await importWith("https://example.test/path//");
    expect(module[constant]).toBe("https://example.test/path");
  });
});
