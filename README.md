# TailorDS

**Your Design System. Your Rules. Zero Compromises.**

A modern, customizable SCSS framework for building design systems with utility-first approach and component-based architecture.

## Why TailorDS?

Every time you write `background: #3b82f6`, a design system dies. Most CSS frameworks force you to adapt your design system to their conventions. TailorDS flips this around - **your design system dictates the rules, not the framework**.

### The Problem

- **Tailwind CSS**: Great utilities, but you're stuck with their naming (`text-xl`, `bg-blue-500`) and scale decisions
- **Bootstrap**: Comprehensive components, but hard to customize beyond surface-level theming
- **Custom CSS**: Full control, but you lose the productivity benefits of utility classes and have to build everything from scratch

### The Best of Both Worlds

TailorDS gives you what other frameworks can't: **component development with design system governance** AND **utility classes for quick adjustments** - all generated from YOUR design tokens.

```scss
// Your tokens, your names
$colors: (
  brand: (
    primary: oklch(65% 0.15 280),
    secondary: oklch(35% 0.15 280),
    tertiary: oklch(15% 0.15 280),
  ),
  neutral: (
    lightest: oklch(95% 0.05 280),
    light: oklch(85% 0.05 280),
    medium: oklch(55% 0.05 280),
    dark: oklch(25% 0.12 280),
    darkest: oklch(15% 0.12 280),
  ),
);

// Component development (type-safe & semantic)
.hero {
  background: color(brand-primary);    // Compile-time validation
  padding: spacing(section-large);     // Design system enforced
}

// Utility classes (fast & flexible)
<div class="bg-brand-primary p-4">   // Your tokens as utilities
```

**Protection against violations:**

```scss
.broken {
  color: color(typo);
} // Compile error - token doesn't exist
```

## Key Features

- **Your Naming Conventions** - `brand-lightest` instead of `brand-100`, `comfortable` instead of `4`
- **Type-Safe Functions** - Prevent magic values, ensure design system consistency
- **Granular Generation** - Only generate the utilities you actually need
- **Design-Informed Defaults** - Mathematical scales based on typography and color science
- **Advanced Color System** - OKLCH color space with zero-runtime theming
- **Framework Agnostic** - Works with React, Vue, Angular, or vanilla CSS

## Quick Start

### Installation

```bash
npm install @tailords
```

### Simple Setup

```scss
@use "@tailords" as *;

.button {
  background: color(primary);
  padding: spacing(2) spacing(4);
  @include text-body(sm);
}
```

### Custom Setup

```scss
@use "@tailords" as * with (
  $colors: (
    forest: (
      light: oklch(85% 0.05 120),
      dark: oklch(25% 0.12 120),
    ),
  ),
  $utilities: (
    colors: (
      text,
      background,
    ),
    spacing: (
      margin,
      padding,
    ),
  )
);
```

**That's it!** You now have CSS custom properties, utility classes using your exact color names, and type-safe functions throughout your SCSS.

## Zero-Runtime Theming

```html
<!-- Same markup, different themes -->
<body>
  <div class="bg-background text-foreground">Light theme</div>
</body>

<body data-theme="dark">
  <div class="bg-background text-foreground">Dark theme</div>
</body>
```

Your semantic tokens automatically adapt, but your code stays identical.

## Framework Integration

Perfect for conditional styling in modern frameworks:

```html
<!-- React/Vue conditional classes -->
<button
  :class="{
  'bg-primary text-white': isActive,
  'bg-neutral-100': !isActive,
  'p-2': size === 'sm',
  'p-4': size === 'lg'
}"
></button>
```

## What Makes TailorDS Different

| Framework    | Philosophy      | Your Colors          | Utilities         | Components        |
| ------------ | --------------- | -------------------- | ----------------- | ----------------- |
| **TailorDS** | Your rules      | ✅ Your names        | ✅ Your choice    | ✅ Your design    |
| Tailwind     | Utility-first   | ❌ Their scale       | ✅ All or nothing | ❌ Build yourself |
| Bootstrap    | Component-first | ❌ Theme colors only | ❌ Limited        | ✅ Their design   |
| Custom CSS   | DIY             | ✅ Full control      | ❌ Build yourself | ❌ Build yourself |

## Architecture

TailorDS uses a proven 4-layer system:

```
tokens/     → Your colors, spacing, typography
themes/     → Semantic mappings (primary, background, etc.)
base/       → HTML element styles (optional)
utilities/  → Generated classes (configurable)
```

Everything flows from your design decisions to bulletproof CSS.

## Get Started

Ready to build a design system that actually works for you?

**[Read the Documentation](https://tailords.dev)** - Complete guides and interactive examples

**[Download Figma Kit](https://figma.com/tailords-kit)** - Design tokens that sync with your code

## Resources

- [Documentation](https://tailords.dev)
- [GitHub Repository](https://github.com/tailords/core)
- [Changelog](https://tailords.dev/changelog)
- [Contributing Guide](CONTRIBUTING.md)

## License

MIT License - build amazing things!

---

**TailorDS**: Where your design system rules, and the framework serves you.
