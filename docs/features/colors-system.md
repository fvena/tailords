# Colors System

## Overview

The Colors system in TailorDS provides complete control over color tokens, theme inheritance, and utility generation. Unlike frameworks that force numbered color variants (100, 200, 300...), TailorDS respects your design language's natural color vocabulary: lightest, light, brand, dark, darker.

**Philosophy**: Your color palette dictates the naming conventions, not the framework. Whether you prefer semantic names (primary, secondary) or descriptive names (brand-darkest, gray-light), TailorDS adapts to your design system.

## Configuration

### Framework Setup

Configure color features in your `$framework` wrapper:

```scss
$framework: (
  css-variables: true,
  // Generate CSS custom properties
  primary-theme: "light",
  // Theme for inheritance fallback
   // ... other framework options
) !default;
```

### Design Tokens

Define your complete color system in the centralized `$tokens` map:

```scss
$tokens: (
  themes: (
    light: (
      // Brand colors with optional abbreviations
      brand-darkest: #4e011e,
      brand-darker: #80002f,
      brand-dark: #bb1642,
      brand: (
        value: #dd224e,
        abbr: "primary",
      ),
      brand-light: #fb5067,
      brand-lighter: #ff817a,
      brand-lightest: #fae0df,

      // Semantic colors
      success: (
          value: #77c23d,
          abbr: "green",
        ),
      warning: (
        value: #ffbe33,
        abbr: "yellow",
      ),
      danger: (
        value: #ff4733,
        abbr: "red",
      ),
      // Grayscale with design-meaningful names
      black: #000000,
      gray1: (
        value: #121a1d,
        abbr: "gray-900",
      ),
      gray2: (
        value: #3b4c54,
        abbr: "gray-800",
      ),
      // ... more grays
      white: #ffffff,
    ),

    // Secondary themes inherit automatically from primary
    dark: (
        // Only define overrides - brand colors inherit automatically
        black: #ffffff,
        gray1: (
          value: #f7f6f5,
          abbr: "gray-900",
        ),
        gray2: (
          value: #f7f6f5,
          abbr: "gray-800",
        ),
        // brand, success, warning, danger inherit from light theme
        white: #000000,
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
      warning: (
        warning-light,
        warning-dark,
      ),
      danger: (
        danger-light,
        danger-dark,
      ),
      light: (
        gray7,
        gray5,
      ),
      dark: (
        gray2,
        gray1,
      ),
    ),
    shadow-color: #0b0f11,
  ),
) !default;
```

**Design Principle**: The primary theme defines your complete color palette. Secondary themes (dark, high-contrast, etc.) only override specific colors while inheriting the rest, maintaining design system coherence.

### Utility Templates

Configure color utility generation with complete template control:

```scss
$utilities: (
  config: (
    prefix: "",
    // Optional prefix for all utilities
    responsive: true,
    // Generate responsive variants
    hover: true,
    // Generate hover states
    abbreviations: (
        responsive: (
          palm: "p",
          desk: "d",
        ),
        hover: "h",
      ),
  ),

  classes: (
    // Background colors: .bg-brand or .bg-primary (if abbr defined)
    background-colors: "bg-{color}",

    // Text colors with forced abbreviations: .text-primary, .text-green
    text-colors: "text-{abbr(color)}",

    // Compact margin example: .mt-2p = margin-top-half--palm
    margins: "m{abbr(direction)}-{abbr(size)}{abbr(responsive)}",

    // Opacity utilities: .bg-opacity-50, .text-opacity-75
    background-opacity: "bg-opacity-{opacity}",
    text-opacity: "text-opacity-{opacity}",
    opacities: "opacity-{opacity}",

    // Gradient utilities: .bg-gradient-brand, .text-gradient-success
    background-gradients: "bg-gradient-{gradient}",
    text-gradients: "text-gradient-{gradient}",
    border-gradients: "border-gradient-{gradient}",

    // Scrim variants: .scrim, .scrim-dark, .scrim-bottom
    scrim-gradients: "scrim-{variant}",

    // CSS custom properties generation
    css-variables: "css-vars",
  ),
) !default;
```

**Template Placeholders**:

- `{color}`: Uses token name or abbreviation if defined
- `{abbr(color)}`: Forces abbreviation, fallback to name
- `{gradient}`: Gradient name from effects.gradients
- `{variant}`: Scrim variant (default, dark, light, bottom, etc.)
- `{opacity}`: Opacity scale value name
- `{responsive}`: Responsive suffix (--palm, --desk, etc.)
- `{hover}`: Hover suffix (--hover)

### Base Styling

Configure HTML element base styling with real color values:

```scss
$base: (
  page: (
    background-color: #fcfcfd,
    // Light page background
  ),

  typography: (
    body-text-color: #3b4c54,
    // Primary text color
    heading-text-color: #121a1d,
    // Darker for hierarchy
    list-marker-color: #dd224e,
    // Accent for list bullets
    code-text-color: #3b4c54,
    // Same as body
    code-background-color: #f6f7f9,
    // Light code background
    kbd-text-color: #ffffff,
    // White text on dark
    kbd-background-color: #121a1d,
    // Dark background for kbd
  ),

  forms: (
    input-border-color: #6a7981,
    // Medium gray borders
    input-focus-color: #dd224e,
    // Brand accent for focus
    input-placeholder-color: #9da6aa,
    // Light gray placeholder
  ),

  links: (
    text-color: #4e011e,
    // Darker brand for links
    decoration-color: #dd224e,
    // Brand accent underline
    hover-color: #dd224e,
    // Brand on hover
  ),

  tables: (
    border-color: #6a7981,
    // Consistent borders
    header-background: #ced5d9,
    // Light header background
  ),
) !default;
```

**Design Principle**: Base configurations use real color values that work regardless of user token configuration, ensuring the framework functions out-of-the-box while allowing complete customization.

## Functions & Mixins

### Color Functions

Access colors with theme inheritance and opacity control:

```scss
// Basic color access from tokens
.hero-section {
  background-color: color(brand); // rgba(221, 34, 78, 1)
  color: color(gray1); // rgba(18, 26, 29, 1)
}

// Opacity control
.card-overlay {
  background-color: color(brand, 0.8); // rgba(221, 34, 78, 0.8)
  backdrop-filter: blur(10px);
}

// Theme-specific colors with inheritance
.dark-mode-component {
  background: color(brand, 1, "dark"); // Inherits #dd224e from light theme
  color: color(gray1, 1, "dark"); // Uses #f7f6f5 from dark override
}
```

**Generated CSS with CSS Variables enabled**:

```css
:root {
  --brand: 221, 34, 78;
  --gray1: 18, 26, 29;
}

.dark-mode,
[data-theme="dark"] {
  --gray1: 247, 246, 245;
  /* --brand inherits from root */
}

.hero-section {
  background-color: rgba(var(--brand), 1);
  color: rgba(var(--gray1), 1);
}
```

### Gradient Functions

Create sophisticated gradients from your design tokens:

```scss
// Predefined gradients from design tokens
.hero-background {
  background: gradient(brand); // Uses brand: (brand-light, brand-dark)
}

// Custom gradient with design system colors
.card-header {
  background: gradient(success, success-dark, linear, "to right");
}

// Gradient types: linear, radial, conic
.decorative-element {
  background: gradient(brand, brand-light, radial);
}
```

**Generated CSS**:

```css
.hero-background {
  background: radial-gradient(
    ellipse at left top,
    rgba(var(--brand-light), 1) 0%,
    rgba(var(--brand-dark), 1) 100%
  );
}
```

### Scrim Gradients

Create softened gradients for overlay effects using advanced easing:

```scss
// Default scrim for image overlays
.image-card::after {
  background-image: scrim-gradient(); // Default: shadow-color, 0.9 opacity, to top
}

// Custom scrim with design system color
.hero-overlay {
  background-image: scrim-gradient(brand, 0.7, "to bottom");
}

// Directional scrims for various layouts
.sidebar-fade {
  background-image: scrim-gradient($shadow-color, 0.8, "to right");
}
```

**Design Principle**: Scrim gradients use mathematically-calculated opacity progression (not linear) that mirrors natural light falloff, creating more realistic overlay effects.

### Color Utility Mixins

Apply gradient effects to text and borders:

```scss
// Text gradients from design system
.brand-headline {
  @include text-gradient(brand); // Uses brand gradient definition
}

.success-message {
  @include text-gradient(success, success-light, linear, "to right");
}

// Border gradients for modern UI elements
.premium-card {
  @include border-gradient(brand, brand-light, radial, 12px, 2px);
}
```

**Generated CSS**:

```css
.brand-headline {
  color: transparent;
  background: radial-gradient(
    ellipse at left top,
    rgba(var(--brand-light), 1) 0%,
    rgba(var(--brand-dark), 1) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
}
```

### Theme Management

Apply theme-specific styling with inheritance:

```scss
// Theme-specific components
.navigation {
  background: color(gray8); // Light theme default

  @include theme(dark) {
    background: color(gray2); // Dark theme override
    border-color: color(gray4); // Inherits if not overridden in dark
  }
}
```

## Utility Classes

The template system generates utilities that match your exact design language:

### Background Colors

```scss
// Configuration: background-colors: "bg-{color}"
// With token: brand: (value: #dd224e, abbr: "primary")

// Generated utilities:
.bg-brand           // Uses full token name
.bg-primary         // Uses abbreviation if defined
.bg-success         // Semantic color
.bg-gray1           // Grayscale with design names

// With responsive configuration:
.bg-brand--palm     // Mobile variant
.bg-brand--desk     // Desktop variant

// With hover configuration:
.bg-brand--hover    // Hover state (non-touch devices only)
```

### Text Colors with Abbreviations

```scss
// Configuration: text-colors: "text-{abbr(color)}"
// Forces abbreviations for compact utilities

// Generated utilities:
.text-primary       // brand with abbr: "primary"
.text-green         // success with abbr: "green"
.text-red           // danger with abbr: "red"
.text-gray-900      // gray1 with abbr: "gray-900"
```

### Opacity Controls

Independent opacity control for backgrounds, text, and elements:

```scss
// Background opacity (works with any background color)
.bg-brand.bg-opacity-50     // 50% opacity background
.bg-success.bg-opacity-75   // 75% opacity background

// Text opacity (works with any text color)
.text-primary.text-opacity-60   // 60% opacity text

// Element opacity (affects entire element)
.opacity-80                 // 80% element opacity
.opacity-0                  // Fully transparent (utility show/hide)
```

### Gradient Utilities

Sophisticated gradient utilities from design system definitions:

```scss
// Background gradients
.bg-gradient-brand          // Brand color gradient
.bg-gradient-success        // Success color gradient
.bg-gradient-light          // Light grayscale gradient

// Text gradients for modern typography
.text-gradient-brand        // Brand gradient text effect
.text-gradient-success      // Success gradient text

// Border gradients for premium UI elements
.border-gradient-brand      // Brand gradient border
.border-gradient-warning    // Warning gradient border

// Generic gradient utilities
.text-gradient              // Default brand gradient text
.border-gradient            // Default brand gradient border
```

### Scrim Variants

Configurable overlay gradients for sophisticated image treatments:

```scss
// Scrim configuration generates:
.scrim                      // Default: shadow-color, to top
.scrim-dark                 // Darker overlay variant
.scrim-light                // Light overlay variant
.scrim-bottom               // Bottom-to-top direction
.scrim-left                 // Left-to-right direction
.scrim-right                // Right-to-left direction
```

**Usage Example**:

```html
<div class="relative">
  <img src="hero-image.jpg" alt="Hero" />
  <div class="absolute inset-0 scrim-dark"></div>
  <div class="absolute bottom-0 left-0 p-6 text-white">
    <h2>Content over scrim overlay</h2>
  </div>
</div>
```

## Advanced Features

### CSS Custom Properties Generation

When `css-variables: true`, TailorDS generates optimized CSS custom properties:

```css
:root {
  /* Color values in RGB format for rgba() compatibility */
  --brand: 221, 34, 78;
  --success: 119, 194, 61;
  --gray1: 18, 26, 29;

  /* Gradient definitions */
  --brand-gradient: radial-gradient(
    ellipse at left top,
    rgba(var(--brand-light), 1) 0%,
    rgba(var(--brand-dark), 1) 100%
  );
  --success-gradient: radial-gradient(
    ellipse at left top,
    rgba(var(--success-light), 1) 0%,
    rgba(var(--success-dark), 1) 100%
  );
}

/* Theme-specific overrides */
.dark-mode,
[data-theme="dark"] {
  --gray1: 247, 246, 245;
  --gray2: 247, 246, 245;
  /* Other colors inherit from :root */
}
```

**Runtime Theme Switching**:

```javascript
// Switch themes dynamically
document.documentElement.setAttribute("data-theme", "dark");

// Or toggle theme classes
document.body.classList.toggle("dark-mode");
```

### Color Validation System

TailorDS validates your color configuration and provides helpful guidance:

```scss
// Validates essential colors in primary theme
// Warns if missing: brand, gray1, gray2, white, black

// Validates template placeholders
// Error if background-colors template missing {color} or {abbr(color)}

// Validates theme inheritance
// Error if primary theme doesn't exist in themes map

// Validates gradient configuration
// Warns if gradient utilities enabled but gradients not defined
```

**Error Example**:

```
Error: Background colors template must contain {color} or {abbr(color)} placeholder. Current: 'bg-colorname'
```

**Warning Example**:

```
Warning: Essential color 'brand' missing from primary theme 'light'. This may cause issues with generated utilities.
```

### Performance Optimization

The template system generates only the utilities you configure:

```scss
// Minimal configuration - only essential utilities
$utilities: (
  classes: (
    background-colors: "bg-{color}",
    text-colors: "text-{color}",
    // All other utilities: "" (disabled)
  ),
);

// Result: Only .bg-* and .text-* utilities generated
```

**Bundle Size Impact**:

- **All utilities enabled**: ~50KB CSS
- **Colors only**: ~8KB CSS
- **Colors + spacing**: ~15KB CSS
- **Custom selection**: Variable based on configuration

## Migration Guide

### From Legacy Variables to Wrapper Configuration

**Before (Legacy)**:

```scss
$brand-color: #dd224e;
$success-color: #77c23d;
$spacing-scale: (
  half: 0.5,
  double: 2,
);

@use "tailords" with (
  $brand-color: #custom-brand
);
```

**After (Modern Wrapper)**:

```scss
@use "tailords" with (
  $tokens: (
    themes: (
      light: (
        brand: #custom-brand,
        success: #77c23d,
      ),
    ),
    spacing: (
      scale: (
        half: (
          value: 0.5,
          abbr: "2",
        ),
        double: (
          value: 2,
          abbr: "8",
        ),
      ),
    ),
  )
);
```

### From Hardcoded to Template-Based Utilities

**Before**:

```scss
// Hardcoded utility generation
.bg-brand {
  background-color: $brand-color;
}
.bg-success {
  background-color: $success-color;
}
```

**After**:

```scss
// Template-based generation
$utilities: (
  classes: (
    background-colors: "bg-{color}",
    // Generates all color utilities
  ),
);

// Automatic generation from tokens:
// .bg-brand, .bg-success, .bg-gray1, etc.
```

### Adding Abbreviations for Compact Utilities

**Step 1**: Add abbreviations to tokens:

```scss
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
    ),
  ),
);
```

**Step 2**: Use abbreviation templates:

```scss
$utilities: (
  classes: (
    text-colors: "text-{abbr(color)}",
    // .text-primary, .text-green
    margins: "m{abbr(direction)}-{abbr(size)}",
    // .mt-2, .ml-4
  ),
);
```

## Best Practices

### Color Token Naming

**Semantic + Descriptive Approach** (Recommended):

```scss
themes: (
  light: (
    // Brand spectrum with design-meaningful names
    brand-darkest: #4e011e,
    brand-darker: #80002f,
    brand-dark: #bb1642,
    brand: (value: #dd224e, abbr: "primary"),
    brand-light: #fb5067,
    brand-lighter: #ff817a,
    brand-lightest: #fae0df,

    // Functional colors with semantic abbreviations
    success: (value: #77c23d, abbr: "green"),
    warning: (value: #ffbe33, abbr: "yellow"),
    danger: (value: #ff4733, abbr: "red"),
  )
);
```

### Theme Inheritance Strategy

**Define Complete Primary Theme**:

```scss
themes: (
  light: (
    // Complete color palette
    brand: #dd224e,
    success: #77c23d,
    warning: #ffbe33,
    danger: #ff4733,
    gray1: #121a1d,
    gray2: #3b4c54,
    // ... full palette
  ),

  dark: (
    // Only overrides - everything else inherits
    gray1: #f7f6f5,
    gray2: #f7f6f5,
    // brand, success, warning, danger inherit automatically
  ),

  high-contrast: (
    // Accessibility theme with minimal overrides
    gray1: #000000,
    gray2: #000000,
    // All other colors inherit from light theme
  )
);
```

### Utility Template Design

**Balance Descriptive vs Compact**:

```scss
classes: (
  // Descriptive for readability
  background-colors: "bg-{color}",

  // .bg-brand-darkest
  // Compact with abbreviations for frequent use
  text-colors: "text-{abbr(color)}",
  // .text-primary
  margins: "m{abbr(direction)}-{abbr(size)}",

  // .mt-2
  // Ultra-compact for power users
  spacing: "m{abbr(direction)}{abbr(size)}{abbr(responsive)}" // .mt2p
);
```

### Gradient Definition Strategy

**Design System Coherence**:

```scss
effects: (
  gradients: (
    // Use existing color tokens for consistency
    brand: (brand-light, brand-dark),
    // References existing tokens
    success: (success-light, success-dark),
    // Maintains color relationships
    // Neutral gradients for layouts
    light: (gray7, gray5),
    // Light to medium gray
    dark: (gray2, gray1),
    // Dark to darkest
    // Special purpose gradients
    hero: (brand-lighter, brand-darker),
    // High contrast for heroes
    subtle: (gray8, gray7),
    // Minimal contrast for cards
  )
);
```

This comprehensive color system provides the foundation for consistent, scalable design systems while maintaining complete flexibility over naming conventions and utility generation.
