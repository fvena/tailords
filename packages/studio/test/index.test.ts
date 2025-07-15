import { describe, expect, it } from "vitest";
import { createTypographyScale, generateColorPalette, version } from "../src/index";

describe("@tailords/studio", () => {
  it("should export version", () => {
    expect(version).toBe("0.1.0");
  });

  it("should export generateColorPalette function", () => {
    expect(typeof generateColorPalette).toBe("function");
  });

  it("should export createTypographyScale function", () => {
    expect(typeof createTypographyScale).toBe("function");
  });

  it("should throw error when calling unimplemented functions", () => {
    expect(() => {
      generateColorPalette({
        accessibility: "AA",
        baseColor: "#3b82f6",
        shades: 9,
      });
    }).toThrow("generateColorPalette not implemented yet");

    expect(() => {
      createTypographyScale({
        base: 16,
        ratio: 1.25,
        steps: 8,
      });
    }).toThrow("createTypographyScale not implemented yet");
  });
});
