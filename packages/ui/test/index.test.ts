import { describe, expect, it } from "vitest";
import { TButton, useTokens, version } from "../src/index";

describe("@tailords/ui", () => {
  it("should export version", () => {
    expect(version).toBe("0.1.0");
  });

  it("should export component placeholders", () => {
    expect(TButton).toBe(undefined);
  });

  it("should export composable placeholders", () => {
    expect(useTokens).toBe(undefined);
  });
});
