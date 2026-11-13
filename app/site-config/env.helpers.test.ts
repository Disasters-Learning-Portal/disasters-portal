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

describe("required URLs", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  const importWithStacApiUrl = async (value: string) => {
    vi.stubEnv("NEXT_PUBLIC_STAC_API_URL", value);
    vi.resetModules();
    return import("./env.helpers");
  };

  it("fails when a required URL is missing", async () => {
    await expect(importWithStacApiUrl("")).rejects.toThrow(
      "Missing required environment variable NEXT_PUBLIC_STAC_API_URL",
    );
  });

  it("strips trailing slashes", async () => {
    const { STAC_API_URL } = await importWithStacApiUrl("https://example.com/api/stac//");
    expect(STAC_API_URL).toBe("https://example.com/api/stac");
  });
});
