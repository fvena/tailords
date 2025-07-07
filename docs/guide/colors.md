# Colors Quick Reference

## Essential Configuration

### Minimal Setup

```scss
@use "tailords" with (
  $tokens: (
    themes: (
      light: (
        brand: #dd224e,
        gray1: #121a1d,
        white: #ffffff,
        black: #000000,
      ),
    ),
  ),
  $utilities: (
    classes: (
      background-colors: "bg-{color}",
      text-colors: "text-{color}",
    ),
  )
);
```

### Full-Featured Setup

```scss
@use "tailords" with (
  $framework: (
    css-variables: true,
    primary-theme: "light",
  ),
  $tokens: (
    themes: (
      light: (
        brand: (
          value: #dd224e,
          abbr: "primary",
        ),
        success: (
          value: #77c23d,
          abbr: "green",
        ),
        gray1: (
          value: #121a1d,
          abbr: "gray-900",
        ),
      ),
      dark: (
        gray1: (
          value: #f7f6f5,
          abbr: "gray-900",
        ),
        // brand, success inherit from light
      ),
    ),
    effects: (
      gradients: (
        brand: (
          brand-light,
          brand-dark,
        ),
        success: (
          success-light,
          success-dark,
        ),
      ),
    ),
  ),
  $utilities: (
    classes: (
      background-colors: "bg-{color}",
      text-colors: "text-{abbr(color)}",
      background-gradients: "bg-gradient-{gradient}",
      text-gradients: "text-gradient-{gradient}",
      scrim-gradients: "scrim-{variant}",
    ),
  )
);
```

## Core Functions

| Function                      | Usage                        | Result                     |
| ----------------------------- | ---------------------------- | -------------------------- |
| `color(name)`                 | `color(brand)`               | `rgba(221, 34, 78, 1)`     |
| `color(name, opacity)`        | `color(brand, 0.5)`          | `rgba(221, 34, 78, 0.5)`   |
| `color(name, opacity, theme)` | `color(gray1, 1, "dark")`    | Theme-specific color       |
| `gradient(name)`              | `gradient(brand)`            | Brand gradient from tokens |
| `gradient(color1, color2)`    | `gradient(brand, success)`   | Custom gradient            |
| `scrim-gradient()`            | `scrim-gradient(brand, 0.8)` | Softened overlay gradient  |

## Generated Utilities

### Template: `background-colors: "bg-{color}"`

```css
.bg-brand           /* Full token name */
.bg-success         /* Semantic colors */
.bg-gray1           /* Grayscale naming */
```

### Template: `text-colors: "text-{abbr(color)}"`

```css
.text-primary       /* Uses abbr: "primary" */
.text-green         /* Uses abbr: "green" */
.text-gray-900      /* Uses abbr: "gray-900" */
```

### Template: `background-gradients: "bg-gradient-{gradient}"`

```css
.bg-gradient-brand      /* From gradients.brand */
.bg-gradient-success    /* From gradients.success */
```

### Template: `scrim-gradients: "scrim-{variant}"`

```css
.scrim              /* Default overlay */
.scrim-dark         /* Dark variant */
.scrim-light        /* Light variant */
.scrim-bottom       /* Bottom direction */
```

## Mixins

### Text Gradients

```scss
.headline {
  @include text-gradient(brand);
}

.custom-gradient {
  @include text-gradient(success, success-light, linear, "to right");
}
```

### Border Gradients

```scss
.premium-card {
  @include border-gradient(brand, brand-light, radial, 12px, 2px);
}
```

### Theme Switching

```scss
.component {
  background: color(gray8);

  @include theme(dark) {
    background: color(gray2);
  }
}
```

## CSS Variables Output

```css
:root {
  --brand: 221, 34, 78;
  --success: 119, 194, 61;
  --gray1: 18, 26, 29;
  --brand-gradient: radial-gradient(...);
}

.dark-mode {
  --gray1: 247, 246, 245;
  /* --brand inherits from :root */
}
```

## Common Patterns

### Image Overlays

```html
<div class="relative">
  <img src="hero.jpg" alt="Hero" />
  <div class="absolute inset-0 scrim"></div>
  <div class="absolute bottom-0 text-white p-6">
    <h2 class="text-gradient-brand">Hero Title</h2>
  </div>
</div>
```

### Responsive Colors

```html
<!-- Light on mobile, dark on desktop -->
<div class="bg-gray7--palm bg-gray2--desk">Content</div>
```

### Hover Effects

```html
<!-- Changes color on hover (non-touch devices) -->
<button class="bg-brand bg-brand-dark--hover text-white">Button</button>
```

### Opacity Layers

```html
<!-- Independent opacity control -->
<div class="bg-brand bg-opacity-80">
  <p class="text-white text-opacity-90">Layered opacity effects</p>
</div>
```

## Error Prevention

### Essential Colors Check

TailorDS validates these essential colors exist in your primary theme:

- `brand` - Main brand color
- `gray1`, `gray2` - Text colors
- `white`, `black` - Contrast colors

### Template Validation

Templates must contain appropriate placeholders:

- Color templates: `{color}` or `{abbr(color)}`
- Gradient templates: `{gradient}`
- Scrim templates: `{variant}`

### Theme Inheritance

- Primary theme must be complete
- Secondary themes inherit missing colors automatically
- Use `color(name, opacity, theme)` for theme-specific access

## Migration Shortcuts

### From Tailwind

```scss
// Replace Tailwind's numbered system
$tokens: (
  themes: (
    light: (
      // Instead of blue-500, blue-600, blue-700
      brand-light: #60a5fa,
      brand: #3b82f6,
      brand-dark: #1d4ed8,
    ),
  ),
);
```

### From Bootstrap

```scss
// Replace Bootstrap's semantic system
$tokens: (
  themes: (
    light: (
      // Direct mapping from Bootstrap variables
      primary: #0d6efd,
      success: #198754,
      warning: #ffc107,
      danger: #dc3545,
    ),
  ),
);
```

### Adding Abbreviations

```scss
// Add compact utilities alongside descriptive ones
brand: (value: #dd224e, abbr: "primary"),
success: (value: #77c23d, abbr: "green"),

// Generate both:
// .bg-brand AND .bg-primary
// .text-success AND .text-green
```
