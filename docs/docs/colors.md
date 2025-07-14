# Colors

> The color foundation shapes a product's visual identity, evoking emotions and reinforcing brand personality. It helps developers apply consistent colors across the interface, ensuring a cohesive and accessible experience.

The color foundation defines a curated palette of tokens used throughout all visual elements — buttons, text, backgrounds, alerts, and more. Think of it as a set of constants that give your interface a clear identity and make it predictable and easy to maintain. Instead of choosing arbitrary colors on the fly, you use predefined tokens to ensure accessibility and consistency across the entire product.

## Configuration

| Variable         | Description                                                                                                                     | Default value |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `$colors`        | Sass map of all color tokens, organized by theme. See [defining a color palette](/foundations/colors#defining-a-color-palette). |               |
| `$default-theme` | Specifies which theme is used as the base when colors are missing in other themes.                                              |               |

```scss
@use "tailords" as * with (
  $colors: (
    light: (
      ...,
    ),
    dark: (
      ...,
    ),
    // Other themes...
  ),
  $default-theme: "light"
);
```

## Functions

TailorDS provides one function to access color tokens in a type-safe, consistent way.

| Function  | Description                                                       |
| --------- | ----------------------------------------------------------------- |
| `color()` | Resolves a color token path and returns a CSS variable reference. |

### `color()`

Retrieves the CSS custom property for a color token from your `$colors` map.

- **Parameters**:
  - `$path`: Path to the color token, specified as:
    - Single string with dash-separated keys: `'neutral-5'`
    - Multiple string arguments: `'neutral', '5'`
    - Single semantic token: `'background'`
- **Returns**: A CSS variable reference: `var(--color-…)`.
- **Examples**:

  ```scss
  .button {
    background: color("brand-500"); // → var(--color-brand-500)
    color: color("neutral", "900"); // → var(--color-neutral-900)
    border-color: color("neutral", "zinc", "100"); // → var(--color-neutral-zinc-100)
  }

  .button--success {
    background: color("success"); // → var(--color-success)
  }
  ```

## CSS Variables

TailorDS uses a _single source of truth_ for colors:

- In development: `$colors` Sass map.
- At runtime: generated CSS custom properties.

All helpers and utility classes reference CSS variables instead of raw color values. This ensures consistency and enables **theme switching at runtime**.

| Property      | Description                    |
| ------------- | ------------------------------ |
| `--color-...` | CSS variable for a color token |

Example output:

```css
:root,
.light-theme,
[data-theme="light"] {
  --color-primary-base: #1d4ed8;
  --color-primary-light: #3b82f6;
  --color-neutral-white: #ffffff;
}

.dark-theme,
[data-theme="dark"] {
  --color-primary-base: #3b82f6;
  --color-primary-light: #60a5fa;
  --color-neutral-white: #1f2937;
}
```

## Utility classes

Utility classes let you apply consistent colors easily and keep your CSS footprint under control.
These classes always reference CSS variables, ensuring they respond automatically when the theme changes.

### Configuration

- Controlled via `$utilities.colors`:

  ```scss
  $utilities: (
    colors: (
      text,
      background,
      border,
      fill,
      stroke,
    ),
  );
  ```

  Only the properties you list here generate classes. Others are ignored.

### Templates

You can customize the class name template for each property with the `{color}` placeholder:

| Property     | Default template  |
| ------------ | ----------------- |
| `text`       | `.text-{color}`   |
| `background` | `.bg-{color}`     |
| `border`     | `.border-{color}` |
| `fill`       | `.fill-{color}`   |
| `stroke`     | `.stroke-{color}` |

### Example output

```css
.text-brand-500 {
  color: var(--color-brand-500);
}
.bg-neutral-100 {
  background-color: var(--color-neutral-100);
}
.border-brand-500 {
  border-color: var(--color-brand-500);
}
.fill-brand-500 {
  fill: var(--color-brand-500);
}
.stroke-brand-500 {
  stroke: var(--color-brand-500);
}
```

### Example configuration

```scss
@use "tailords" as * with (
  // Enable only the utilities you need
  $utilities: (
      colors: (
        text,
        background,
        border,
        fill,
        stroke,
      ),
      // ...
    )
    // Templates for color utility classes
  $templates: (
      colors: (
        text: ".text-{color}",
        background: ".bg-{color}",
        border: ".border-{color}",
        fill: ".fill-{color}",
        stroke: ".stroke-{color}",
      )
    )
);
```

## Theming

TailorDS supports multiple themes out of the box by generating CSS variables for each theme defined in `$colors`.

### Global theme

To switch the global theme, set the `data-theme` attribute on the `<body>` element:

```html
<body data-theme="dark"></body>
```

or use a class:

```html
<body class="dark-theme"></body>
```

### Component-level theme

You can also apply a specific theme only to a component by adding the theme class directly:

```html
<button class="dark-theme">Button</button>
```

## Defining a color palette

The color palette defines the complete set of color tokens for your design system, organized to ensure flexibility and consistency.

### Best practices

I recommend organizing your palette into two layers of tokens:

#### Primitives

Primitives are the raw color values, while you are free to define your own structure, most design systems benefit from organizing their primitives into a few common palettes:

- **Neutrals**: Grays, whites, blacks — for backgrounds, borders, text.
- **Brand/Primary**: The main color that represents your product or company.
- **Accent**: Supporting colors for emphasis, highlights, progress bars, etc.
- **Semantic**: Raw colors you later map to semantic roles, like green for success or red for error.

_These are just recommendations — TailorDS doesn’t impose any of them. Define what makes sense for your brand and context._

#### Semantic tokens

Semantic tokens point to primitives and give them context in the UI. For example: `background`, `text`, `success`, `error`.

You can reassign semantic tokens at any time and the UI will automatically reflect the change.

### Rules

- **No limit to nesting**: organize your colors as deeply as needed.
- **Use consistent structure across themes**: They must follow the same internal structure.
  - If a color is missing in a theme, it falls back to the default theme.
  - Colors in other themes not present in the default are ignored.
- **Naming conventions**:
  - You’re free to name your colors however you like: numeric scales (100–900), descriptive names (lighter, darker), alpha variants (a1–a12), semantic tokens (background, error, etc.). However, you must follow these conventions:
  - No hyphens in names: `lightblue` or `light_blue`, never `light-blue`.
  - Numbers as strings: `'1'`, `'500'`.
  - CSS color keywords quoted: `'white'`, `'red'`.
- **Any CSS color format supported**: OKLCH, RGB, HEX, HSL, Display-P3... TailorDS is color-space agnostic.

### Referencing colors

References are defined as a list of strings, each representing a level of nesting in the `$colors` map. For example:

```scss
background: (neutral, '1')
text: (neutral, '12')
success: ( semantic, green, '7')
```

### Example

Here’s a minimal configuration with both primitives and semantic tokens:

```scss
@use "tailords" as * with (
  $default-theme: "light"
    $colors: (
      light: (
        // Primitives
        neutral: (
            "white": oklch(1 0 0),
            "black": oklch(0 0 0),
            "1": oklch(...),
            "2": oklch(...),
            ...
          ),

        brand: ("1": oklch(...), "2": oklch(...), ...),

        // Semantic tokens
        background: (neutral, "1"),
        text: (neutral, "12"),
        success: (green, "7"),
        error: (red, "7"),
      ),

      dark: (
        ...,
      ), // Other themes...
    )
);
```

## Best Practices

- Always use **semantic tokens** in components — they carry meaning, not just values.
- Reserve **primitives** for mapping purposes only — not for direct use.
- Keep one token for one purpose — don’t reuse the same name for different meanings.
- Use helpers (`color()`) or utilities — never hardcode values.
- Maintain clear contrast between background and foreground.

```scss
// [OK] Semantic tokens
.alert {
  background: color(background);
  color: color(text);
}

// [ERROR] Avoid hardcoded primitives
.alert {
  background: oklch(97% 0 0);
}
```
