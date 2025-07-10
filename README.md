# TailorDS

A modern, customizable SCSS framework for building design systems with utility-first approach and component-based architecture.

## Why TailorDS?

Most CSS frameworks force you to adapt your design system to their conventions. TailorDS flips this around - **your design system dictates the rules, not the framework**.

### The Problem

- **Tailwind CSS**: Great utilities, but you're stuck with their naming (`text-xl`, `bg-blue-500`) and scale decisions
- **Bootstrap**: Comprehensive components, but hard to customize beyond surface-level theming
- **Custom CSS**: Full control, but you lose the productivity benefits of utility classes and have to build everything from scratch

### The TailorDS Solution

TailorDS gives you **three powerful capabilities** that other frameworks don't:

#### **Granular Utility Generation**

Generate only the utility classes you actually need. Want just spacing and typography utilities? No problem. This keeps your CSS bundle small and focused.

#### **Completely Custom Design Tokens**

Define your tokens with **your naming conventions**. Want `brand-lightest` instead of `brand-100`? Want spacing tokens called `xs`, `sm`, `lg` instead of `1`, `2`, `3`? Perfect. TailorDS adapts to your design language.

#### **Type-Safe Helper Functions**

Access your design tokens through powerful SCSS functions that prevent magic values and ensure consistency:

```scss
.my-component {
  background-color: color(brand, 0.8); // 80% opacity brand color
  padding: size(double); // 2x base spacing
  font-size: font(h3); // h3 scale size
  box-shadow: shadow(3); // 3-layer elevation shadow
}
```

## Features

- 🎨 **Fully customizable design tokens** with your naming conventions
- 🔧 **Powerful SCSS helper functions** for type-safe development
- 📱 **Mobile-first responsive utilities**
- 🎯 **Granular utility generation** - include only what you need
- 🌈 **Advanced color system** with automatic CSS custom properties
- 📏 **Mathematical spacing scales** based on typography and design principles
- 🎭 **Multi-layered shadow system** for realistic depth
- 🔄 **CSS custom properties** for runtime theming
- ⚡ **Zero runtime** - compiles to pure CSS

## Philosophy

TailorDS is built on three core principles:

1. **Your Design System, Your Rules** - The framework adapts to your conventions, not vice versa
2. **Utility-First When Helpful** - Generate utilities for repetitive patterns, write custom CSS for unique components
3. **Design-Informed Defaults** - Built by a designer, with typography, spacing, and visual hierarchy best practices baked in

## Quick Start

### Installation

```bash
npm install tailords
```

### Basic Usage

Create your main SCSS file:

```scss
// styles/main.scss
@use "tailords" as * with (
  $theme: (
    brand: #dd224e,
    success: #77c23d,
    warning: #ffbe33,
    danger: #ff4733,
  ),
  $font-families: (
    body: (
      "Inter",
      "Helvetica Neue",
      sans-serif,
    ),
    header: (
      "Playfair Display",
      serif,
    ),
  )
);
```

That's it! You now have:

- ✅ CSS custom properties for all your tokens
- ✅ Utility classes using your color names (`.bg-brand`, `.text-success`)
- ✅ Helper functions available throughout your SCSS
- ✅ Base HTML element styles configured to your design system

### Framework Integration

#### Vite

```js
// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/main.scss" as *;`,
      },
    },
  },
};
```

#### Vue CLI

```js
// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@use "@/styles/main.scss" as *;`,
      },
    },
  },
};
```

#### Webpack

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: `@use "@/styles/main.scss" as *;`,
            },
          },
        ],
      },
    ],
  },
};
```

#### Next.js

```js
// next.config.js
module.exports = {
  sassOptions: {
    prependData: `@use "@/styles/main.scss" as *;`,
  },
};
```

## Configuration Example

```scss
@use "tailords" as * with (
  // Framework behavior
  $enable-utility-class: true,
  $enable-css-variables: true,
  $enable-responsive: true,

  // Generate only what you need
  $includes: (colors, typography, spacing),
  // Your design tokens
  $theme: (
      primary: #2563eb,
      secondary: #7c3aed,
      success: #059669,
      warning: #d97706,
      danger: #dc2626
    ),

  $font-sizes: (xs: -2, sm: -1, base: 0, lg: 1, xl: 2, xxl: 3),
  $spacing: (xs: 0.25, sm: 0.5, md: 1, lg: 2, xl: 4)
);
```

This generates utilities like:

- `.bg-primary`, `.text-secondary`
- `.text-xs`, `.text-xl`
- `.p-sm`, `.m-lg`
- And corresponding responsive variants: `.text-lg--tablet`, `.p-xl--mobile`

## Using Helper Functions

The real power comes from the helper functions in your custom SCSS:

```scss
.hero-section {
  background: gradient(primary, secondary);
  padding: size(xl) size(lg);

  h1 {
    font-size: font(xxl);
    color: color(primary);
    margin-bottom: size(md);
  }

  .card {
    background: color(white, 0.95);
    border-radius: radius(lg);
    box-shadow: shadow(2);

    &:hover {
      box-shadow: shadow(4);
    }
  }
}
```

## Documentation

For complete documentation, advanced configuration, and examples:

**📚 [Full Documentation](https://fvena.github.io/tailords/)**

## Examples

- [Corporate Design System](https://github.com/fvena/tailords/tree/main/examples/corporate)
- [E-commerce Site](https://github.com/fvena/tailords/tree/main/examples/ecommerce)
- [SaaS Application](https://github.com/fvena/tailords/tree/main/examples/saas)

## License

MIT © [Francisco Vena](https://github.com/fvena)
