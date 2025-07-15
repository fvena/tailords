import { describe, expect, it } from "vitest";
import { tailordsTheme, TokenPreview, version } from "../src/index";

describe("@tailords/vitepress", () => {
  it("should export version", () => {
    expect(version).toBe("0.1.0");
  });

  it("should export tailordsTheme function", () => {
    expect(typeof tailordsTheme).toBe("function");
  });

  it("should export component placeholders", () => {
    expect(TokenPreview).toBe(undefined);
  });

  it("should throw error when calling unimplemented theme function", () => {
    expect(() => {
      tailordsTheme({ playground: true });
    }).toThrow("tailordsTheme not implemented yet");
  });
});
