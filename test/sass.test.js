import path from "node:path";
import { runSass } from "sass-true";
import { describe, it } from "vitest";

// Cambia el path al archivo principal de tus tests SCSS
const sassFile = path.join(__dirname, "colors.core.spec.scss");
runSass({ describe, it }, sassFile);
