# Color System Implementation Guide

## 🎯 System Philosophy

Our color system follows one core principle: **purposeful minimalism**. Every color exists for a reason. Every token solves a specific interface need. No decorative colors, no "just in case" additions.

Think of it as a carefully curated toolset rather than an endless palette. We give you exactly what you need to build consistent, scalable interfaces—nothing more, nothing less.

---

## 🏗️ Two-Layer Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    SEMANTIC TOKENS                         │
│              (What designers use)                          │
│                                                             │
│  --color-background-primary                                │
│  --color-foreground-subtle                                 │
│  --color-border-selected                                   │
├─────────────────────────────────────────────────────────────┤
│                   PRIMITIVE PALETTES                       │
│               (Implementation layer)                       │
│                                                             │
│  --neutral-50, --neutral-100, --neutral-200...            │
│  --primary-50, --primary-100, --primary-200...            │
│  --success-50, --success-100, --success-200...            │
└─────────────────────────────────────────────────────────────┘
```

**Layer 1: Primitive Palettes** → Your raw materials
**Layer 2: Semantic Tokens** → Your design decisions

---

## 🎨 The Seven Essential Palettes

### `neutral`

**The backbone of your interface.** Handles 70% of your color needs—text, backgrounds, borders, structural elements.

### `primary`

**Your brand in action.** Main CTAs, important links, primary navigation. One primary action per screen.

### `secondary`

**Supporting actions.** Cancel buttons, alternative paths, secondary navigation. Complements primary without competing.

### `success`

**Positive outcomes.** Confirmations, completed states, positive feedback. Green that everyone understands.

### `warning`

**Attention needed.** Pending states, important notices, caution messages. Orange that alerts without alarming.

### `error`

**Critical issues.** Validation failures, destructive actions, system errors. Red that demands immediate attention.

### `info`

**Helpful context.** Tips, additional information, onboarding hints. Blue that informs without interrupting.

---

## 📊 The Eleven-Step Scale

Each palette contains eleven carefully balanced tones, from `50` (nearly white) to `950` (nearly black). The `500` is your reference point—the "pure" version of that color family.

```
┌─────┬──────────────────────────────────────────────────┐
│ 50  │ ░░░ Ultra-light backgrounds, subtle hover states │
│ 100 │ ░░░ Light backgrounds, soft borders              │
│ 200 │ ░░░ Subtle backgrounds, gentle hover states      │
│ 300 │ ░░░ Visible borders, secondary elements          │
│ 400 │ ░░░ Strong borders, secondary icons              │
│ 500 │ ███ BASE COLOR (your reference point)           │
│ 600 │ ███ Primary text and icons                       │
│ 700 │ ███ Emphasized text                              │
│ 800 │ ███ High-contrast text                           │
│ 900 │ ███ Maximum contrast text                        │
│ 950 │ ███ Dark overlays, deep backgrounds             │
└─────┴──────────────────────────────────────────────────┘
```

This progression ensures sufficient contrast between adjacent levels while providing flexibility for complex visual hierarchies.

---

## 🏷️ Semantic Token Structure

Every semantic token follows this pattern:

```
--color-[type]-[variant]-[state]
```

### **Types** (what you're coloring)

- `background` → Surface colors
- `foreground` → Text and icons
- `border` → Lines and outlines
- `outline` → Focus indicators
- `shadow` → Depth and elevation

### **Variants** (what role it plays)

- _(no suffix)_ → Default/standard
- `subtle` → Less prominent, secondary hierarchy
- `muted` → Discrete, supporting elements
- `selected` → Currently chosen or active items
- `primary` → Brand's main color
- `secondary` → Brand's secondary color
- `success` / `warning` / `error` / `info` → System states

### **States** (for interactive elements)

- `hover` → Mouse over
- `active` → Being pressed
- `disabled` → Non-interactive
- `focus` → Keyboard selection

---

## 💎 Proposed Semantic Tokens

### **Backgrounds**

```css
--color-background             /* Main app background */
--color-background-elevated    /* Cards, modals, overlays */
--color-background-subtle      /* Sections, gentle separations */
--color-background-selected    /* Active/chosen items */
--color-background-overlay     /* Modal backdrops */

--color-background-primary     /* Brand buttons, key actions */
--color-background-primary-hover
--color-background-primary-active
--color-background-primary-disabled

--color-background-secondary   /* Alternative actions */
--color-background-secondary-hover
--color-background-secondary-active
--color-background-secondary-disabled

--color-background-success     /* Positive feedback */
--color-background-warning     /* Attention needed */
--color-background-error       /* Critical issues */
--color-background-info        /* Helpful context */
```

### **Foregrounds**

```css
--color-foreground             /* Primary text */
--color-foreground-subtle      /* Secondary text */
--color-foreground-muted       /* Captions, disabled text */
--color-foreground-selected    /* Text on selected backgrounds */

--color-foreground-primary     /* Text on primary backgrounds */
--color-foreground-secondary   /* Text on secondary backgrounds */

--color-foreground-success     /* Text on success backgrounds */
--color-foreground-warning     /* Text on warning backgrounds */
--color-foreground-error       /* Text on error backgrounds */
--color-foreground-info        /* Text on info backgrounds */
```

### **Borders**

```css
--color-border                 /* Standard borders */
--color-border-subtle          /* Gentle separations */
--color-border-selected        /* Active element borders */
--color-border-disabled        /* Non-interactive borders */

--color-border-success         /* Positive state borders */
--color-border-warning         /* Attention state borders */
--color-border-error           /* Error state borders */
--color-border-info            /* Info state borders */
```

### **Outlines & Shadows**

```css
--color-outline-focus          /* Focus rings */

--color-shadow                 /* Standard drop shadows */
--color-shadow-elevated        /* Higher elevation shadows */
```

---

## 🎨 Color Space: OKLCH

We use **OKLCH** (OK Lightness Chroma Hue) as our color space for all color definitions. OKLCH offers significant advantages over traditional color spaces:

**Perceptual uniformity**: Colors with the same lightness value appear equally bright to the human eye, ensuring consistent visual hierarchy.

**Predictable adjustments**: Changing lightness, chroma, or hue values produces intuitive results without unexpected color shifts.

**Future-proof**: OKLCH is part of the CSS Color Level 4 specification and offers better gamut coverage for modern displays.

**Better interpolation**: Gradients and color transitions appear more natural and smooth.

```css
/* Example OKLCH values */
--primary-500: oklch(0.6 0.15 250); /* Lightness 60%, medium chroma, blue hue */
--neutral-200: oklch(0.9 0.02 280); /* Light gray with slight cool tint */
```

---

## 🌗 Theming System

Our theming system leverages CSS custom properties to enable real-time theme switching without page reloads. Themes are controlled via data attributes on the root element.

### Light & Dark Mode Implementation

```css
/* Light theme (default) */
:root {
  --color-background: oklch(0.99 0.01 280);
  --color-foreground: oklch(0.15 0.02 280);
  --color-background-primary: oklch(0.45 0.18 250);
  --color-foreground-primary: oklch(0.98 0.01 280);
}

/* Dark theme */
[data-theme="dark"] {
  --color-background: oklch(0.08 0.02 280);
  --color-foreground: oklch(0.92 0.01 280);
  --color-background-primary: oklch(0.55 0.18 250);
  --color-foreground-primary: oklch(0.08 0.02 280);
}
```

### Theme Switching

Themes can be switched dynamically by updating the data attribute:

```javascript
// Switch to dark theme
document.documentElement.setAttribute("data-theme", "dark");

// Switch to light theme
document.documentElement.setAttribute("data-theme", "light");
```

### SCSS to CSS Variables Bridge

While we define our token mappings in SCSS for development convenience, they compile to CSS custom properties for runtime flexibility:

```scss
// SCSS development mapping
$theme-light: (
  "background": var(--neutral-50),
  "foreground": var(--neutral-900),
  "background-primary": var(--primary-600),
);

// Compiles to CSS custom properties
:root {
  --color-background: var(--neutral-50);
  --color-foreground: var(--neutral-900);
  --color-background-primary: var(--primary-600);
}
```

This approach gives us the best of both worlds: structured token management during development and flexible theming capabilities in production.

---

## ⚙️ Token Definition & Generation

### Primitive Palette Definition

We define our primitive palettes using SCSS maps for organization and maintainability:

```scss
// Primitive color palettes
$neutral: (
  50: oklch(0.99 0.01 280),
  100: oklch(0.96 0.02 280),
  200: oklch(0.92 0.03 280),
  300: oklch(0.86 0.04 280),
  400: oklch(0.74 0.05 280),
  500: oklch(0.56 0.06 280),
  600: oklch(0.46 0.05 280),
  700: oklch(0.38 0.04 280),
  800: oklch(0.28 0.03 280),
  900: oklch(0.19 0.02 280),
  950: oklch(0.11 0.01 280),
);

$primary: (
  50: oklch(0.95 0.05 250),
  100: oklch(0.88 0.08 250),
  200: oklch(0.81 0.12 250),
  300: oklch(0.73 0.15 250),
  400: oklch(0.64 0.17 250),
  500: oklch(0.55 0.18 250),
  600: oklch(0.45 0.18 250),
  700: oklch(0.36 0.16 250),
  800: oklch(0.28 0.13 250),
  900: oklch(0.21 0.1 250),
  950: oklch(0.15 0.07 250),
);
```

### Semantic Token Generation

Using SCSS functions, we automatically generate semantic tokens from our primitive palettes:

```scss
// Function to generate semantic tokens
@function generate-semantic-tokens($theme-config) {
  @return (
    "background": map-get($neutral, 50),
    "foreground": map-get($neutral, 900),
    "background-elevated": map-get($neutral, 100),
    "background-primary": map-get($primary, 600),
    "foreground-primary": map-get($neutral, 50),
    "background-primary-hover": map-get($primary, 700),
    "border": map-get($neutral, 300),
    "border-subtle": map-get($neutral, 200) // ... additional mappings
  );
}

// Generate light theme tokens
$light-tokens: generate-semantic-tokens("light");

// Generate dark theme tokens
$dark-tokens: generate-semantic-tokens("dark");
```

### CSS Output

The SCSS compilation produces clean CSS custom properties:

```css
:root {
  /* Primitive palettes */
  --neutral-50: oklch(0.99 0.01 280);
  --neutral-100: oklch(0.96 0.02 280);
  /* ... */

  /* Semantic tokens */
  --color-background: var(--neutral-50);
  --color-foreground: var(--neutral-900);
  --color-background-primary: var(--primary-600);
  /* ... */
}
```

---

## 🎨 Palette Generation with Radix Colors

For palette generation, we use **Radix UI Colors** (https://www.radix-ui.com/colors) as our foundation. Radix provides scientifically crafted color scales optimized for user interfaces.

**Why Radix Colors:**

- **Designed for UI**: Each scale is optimized for different use cases (backgrounds, borders, text)
- **Accessibility first**: Built-in contrast relationships ensure WCAG compliance
- **Perceptually uniform**: Consistent lightness progression across all hues
- **Dark mode ready**: Automatic dark variants maintain the same visual relationships

**How we adapt Radix:**

1. Select appropriate Radix scales for our semantic roles
2. Convert RGB values to OKLCH for better color manipulation
3. Fine-tune specific steps to match our brand requirements
4. Maintain the proven contrast relationships Radix provides

This approach gives us the reliability of a tested color system while maintaining the flexibility to customize for our specific brand needs.

---

## 🎯 Golden Rules

### → Always use semantic tokens in components

Never write `color: neutral-600`. Always use `color: var(--color-foreground-subtle)`.

### → Primitives exist only for mapping

The `neutral-50`, `primary-500` values are implementation details, not your design API.

### → One token, one purpose

`--color-foreground-subtle` should always do the same thing across your entire application.

### → Maintain contrast pairs

If you use `--color-background-primary`, the text on top should use `--color-foreground-primary`.

---

## 🎨 Visual Token Map

```
BACKGROUNDS                    FOREGROUNDS
┌─────────────────────┐       ┌─────────────────────┐
│ background          │◄─────►│ foreground          │
│ background-elevated │◄─────►│ foreground-subtle   │
│ background-subtle   │◄─────►│ foreground-muted    │
│ background-selected │◄─────►│ foreground-selected │
└─────────────────────┘       └─────────────────────┘

INTERACTIVE COLORS             BORDERS & OUTLINES
┌─────────────────────┐       ┌─────────────────────┐
│ background-primary  │◄─────►│ border              │
│   ├─ hover          │       │ border-subtle       │
│   ├─ active         │       │ border-selected     │
│   └─ disabled       │       │ outline-focus       │
│ background-secondary│       └─────────────────────┘
│   ├─ hover          │
│   ├─ active         │       SYSTEM STATES
│   └─ disabled       │       ┌─────────────────────┐
└─────────────────────┘       │ success             │
                              │ warning             │
                              │ error               │
                              │ info                │
                              └─────────────────────┘
```

# Palette Creation & Scale Usage Guide

[https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette](https://www.radix-ui.com/colors/docs/palette-composition/composing-a-palette)

## 🎯 Overview

Creating effective color palettes requires understanding both **palette composition** and **scale usage**. This guide shows you how to build our seven essential palettes using proven color science principles, and how to use each step of the 11-tone scale purposefully.

---

## 🎨 Understanding Palette Types

### **Gray Scale (Neutral)**

**Purpose:** The foundation of your interface. Provides structure, hierarchy, and readability.

**Characteristics:**

- **Pure grays** with minimal color temperature
- **Highest contrast range** from near-white to near-black
- **Optimized for text** at steps 600-900
- **Background versatility** at steps 50-200

**Usage priority:** 70% of your interface colors

### **Chromatic Scales (Brand & Functional)**

**Purpose:** Add meaning, emotion, and brand personality to specific interface elements.

**Characteristics:**

- **Saturated colors** that maintain visual hierarchy
- **Balanced lightness progression** across all steps
- **Accessibility-first contrast** relationships
- **Consistent chroma** to avoid visual jarring

**Usage priority:** 30% of your interface colors

---

## 🔧 Palette Composition Process

### **Step 1: Define Your Base Colors**

Start by selecting your core brand colors. These will become the `500` step of each chromatic palette:

```scss
// Base brand colors (step 500)
$primary-base: oklch(0.55 0.18 250); // Brand blue
$secondary-base: oklch(0.45 0.12 280); // Supporting purple
$success-base: oklch(0.6 0.15 140); // Success green
$warning-base: oklch(0.7 0.15 80); // Warning orange
$error-base: oklch(0.55 0.2 20); // Error red
$info-base: oklch(0.65 0.12 220); // Info blue
```

### **Step 2: Generate Lightness Scale**

Create 11 lightness steps that provide meaningful contrast differences:

```scss
// Lightness values for each step
$lightness-scale: (
  50: 0.99,
  // Near white
  100: 0.96,
  // Very light
  200: 0.92,
  // Light
  300: 0.86,
  // Light-medium
  400: 0.74,
  // Medium-light
  500: 0.55,
  // Base (your brand color)
  600: 0.46,
  // Medium-dark
  700: 0.38,
  // Dark
  800: 0.28,
  // Very dark
  900: 0.19,
  // Near black
  950: 0.11, // Almost black
);
```

### **Step 3: Adjust Chroma by Lightness**

Chroma (saturation) should decrease at the extremes to avoid visual strain:

```scss
// Chroma adjustments by step
$chroma-adjustments: (
  50: 0.02,
  // Very low saturation
  100: 0.04,
  // Low saturation
  200: 0.08,
  // Building saturation
  300: 0.12,
  // Medium-low saturation
  400: 0.15,
  // Medium saturation
  500: 0.18,
  // Full saturation (base)
  600: 0.18,
  // Maintain saturation
  700: 0.16,
  // Slight reduction
  800: 0.13,
  // Lower saturation
  900: 0.1,
  // Much lower saturation
  950: 0.07, // Minimal saturation
);
```

### **Step 4: Generate Complete Palette**

Apply the lightness and chroma adjustments to your base hue:

```scss
@function generate-palette($base-hue, $base-chroma) {
  $palette: ();

  @each $step, $lightness in $lightness-scale {
    $chroma-factor: map-get($chroma-adjustments, $step) / 0.18; // Normalize to base
    $adjusted-chroma: $base-chroma * $chroma-factor;

    $color: oklch($lightness $adjusted-chroma $base-hue);
    $palette: map-merge(
      $palette,
      (
        $step: $color,
      )
    );
  }

  @return $palette;
}

// Generate your palettes
$primary: generate-palette(250, 0.18); // Blue hue
$success: generate-palette(140, 0.15); // Green hue
$error: generate-palette(20, 0.2); // Red hue
```

---

## 📏 Understanding the 11-Step Scale

[https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale](https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale)

Each step in our scale has specific use cases based on contrast relationships and visual hierarchy:

### **Steps 50-200: Background Territory**

```
50  ████░░░░░░░  App backgrounds, subtle hover states
100 ███░░░░░░░░  Card backgrounds, gentle separations
200 ██░░░░░░░░░  Component backgrounds, soft borders
```

**Usage:**

- **Step 50:** Main app background, lightest possible surface
- **Step 100:** Elevated elements (cards, modals, popovers)
- **Step 200:** Component backgrounds, subtle interactive states

**Contrast:** Designed for use with foreground steps 700-900

### **Steps 300-400: Border & Icon Territory**

```
300 █░░░░░░░░░░  Subtle borders, disabled states
400 ░░░░░░░░░░░  Visible borders, placeholder text
```

**Usage:**

- **Step 300:** Subtle separators, disabled borders, very low-priority elements
- **Step 400:** Standard borders, placeholder text, secondary icons

**Contrast:** Transition zone - works with both light and dark foregrounds

### **Step 500: The Reference Point**

```
500 ░░░░░█░░░░░  Base brand color, balanced for all uses
```

**Usage:**

- **Visual reference** for your brand color
- **Balanced option** that works in multiple contexts
- **Starting point** for interactive elements

**Contrast:** Works with both white and black text

### **Steps 600-700: Primary Action Territory**

```
600 ░░░░░░█░░░░  Primary buttons, important links
700 ░░░░░░░█░░░  Interactive states, emphasized elements
```

**Usage:**

- **Step 600:** Primary actions, main interactive elements
- **Step 700:** Hover states, emphasized text, strong borders

**Contrast:** Optimized for white or very light text

### **Steps 800-950: Text & High Contrast Territory**

```
800 ░░░░░░░░█░░  Body text, readable content
900 ░░░░░░░░░█░  Headings, high-contrast text
950 ░░░░░░░░░░█  Maximum contrast, overlays
```

**Usage:**

- **Step 800:** Standard body text, readable content
- **Step 900:** Headings, emphasized text, high-priority content
- **Step 950:** Maximum contrast text, dark overlays, modal backdrops

**Contrast:** Designed for use on light backgrounds (steps 50-200)

---

## 🎯 Practical Application Guidelines

### **For Neutral Palette**

```scss
// High usage across interface
background: neutral-50; // App background
surface: neutral-100; // Cards, elevated elements
border: neutral-300; // Subtle separators
text-body: neutral-800; // Readable body text
text-heading: neutral-900; // Strong headings
```

### **For Chromatic Palettes**

```scss
// Strategic usage for meaning and hierarchy
button-primary: primary-600; // Main actions
button-primary-hover: primary-700; // Interactive feedback
alert-background: success-100; // System feedback
alert-border: success-400; // Clear boundaries
alert-text: success-800; // Readable messaging
```

### **Accessibility Considerations**

**Safe contrast combinations:**

- **Background steps 50-200** with **foreground steps 700-950**
- **Background steps 600-950** with **foreground steps 50-200**
- **Avoid** background steps 300-500 with any foreground (insufficient contrast)

**Testing your palettes:**

1. **Validate contrast ratios** using WCAG guidelines (4.5:1 minimum)
2. **Test in both light and dark themes** to ensure relationships hold
3. **Check colorblind accessibility** using simulators
4. **Verify on actual devices** under different lighting conditions

---

## 🔬 Advanced Techniques

### **Temperature Adjustments**

Fine-tune the hue slightly at different lightness levels to avoid muddy colors:

```scss
// Subtle hue shifts for better color appearance
@function adjust-hue-by-lightness($base-hue, $lightness) {
  @if $lightness > 0.8 {
    @return $base-hue + 5; // Slightly warmer in highlights
  } @else if $lightness < 0.3 {
    @return $base-hue - 3; // Slightly cooler in shadows
  }
  @return $base-hue;
}
```

### **Perceptual Uniformity**

Ensure visual steps feel equally spaced by testing actual color differences:

```scss
// Validate perceptual spacing
@function validate-palette-steps($palette) {
  // Test that each step provides meaningful visual difference
  // Adjust lightness values if steps appear too similar
}
```

### **Dark Theme Adaptations**

Some adjustments may be needed when creating dark theme variants:

```scss
// Dark theme may need different chroma relationships
$dark-chroma-adjustments: (
  // Slightly reduce saturation in dark themes
   // to prevent oversaturation on dark backgrounds
);
```

This systematic approach ensures your palettes are not only beautiful but also functional, accessible, and maintainable across your entire design system.
