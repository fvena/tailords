/**
 * \@tailords/vitepress
 *
 * VitePress theme for Design System documentation
 * with interactive token previews and live sandbox
 */

export const version = "0.1.0";

// Theme configuration interface
export interface TailordsThemeConfig {
  customComponents?: boolean;
  playground?: boolean;
  tokens?: string;
}

// Main theme export - will be implemented later
export function tailordsTheme(config: TailordsThemeConfig = {}) {
  throw new Error("tailordsTheme not implemented yet", { cause: config });
}

// Component exports placeholder
export const TokenPreview = undefined;
export const DesignSystemSandbox = undefined;
export const TokenBrowser = undefined;
