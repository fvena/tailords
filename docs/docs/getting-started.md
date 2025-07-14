# Getting Started

Stop writing `background: #3b82f6` and start building design systems that scale. TailorDS transforms your design decisions into bulletproof CSS with zero compromises.

## Installation

::: code-group

```bash [npm]
npm install @tailords
```

```bash [yarn]
yarn add @tailords
```

```bash [pnpm]
pnpm add @tailords
```

:::

## Your First Component

The simplest possible setup - one line and you're building with design tokens:

```scss
@use "@tailords" as *;

.button {
  background: color(primary);
  color: color(primary-foreground);
  padding: spacing(2) spacing(4);
  @include text-body(sm);
}
```

**That's it.** You now have:

- ✅ CSS custom properties for all design tokens
- ✅ Type-safe functions that prevent magic values
- ✅ Automatic theme switching capability
- ✅ Utility classes using your exact token names

## Making It Yours

### Custom Colors

```scss
@use "@tailords" as * with (
  $colors: (
    // Your brand palette
    forest: (light: oklch(85% 0.05 120), base: oklch(45% 0.15 120), dark: oklch(25% 0.12 120)),
  )
);

// Now use your colors
.nature-button {
  background: color(forest, base);
  color: color(forest, light);
}
```

### Choose Your Utilities

Only generate what you need:

```scss
@use "@tailords" as * with (
  $utilities: (
    colors: (
      text,
      background,
    ),
    // .text-*, .bg-*
    spacing: (
        margin,
        padding,
      ),
    // .m-*, .p-*
    typography: (
        size,
        weight,
      ),
    // .text-*, .font-*
  )
);
```

### Base Styles (Optional)

Get beautifully configured HTML elements:

```scss
@use "@tailords" as * with (
  $enable-base: true
);
```

This applies your design system to `body`, headings, forms, and other HTML elements automatically.

## Design Tokens in Action

### Colors That Adapt

<ColorDemo />

```scss
// Same code, different themes
.card {
  background: color(card);
  color: color(card-foreground);
  border: 1px solid color(border);
}
```

```html
<!-- Light theme -->
<body>
  <div class="card">Content</div>
</body>

<!-- Dark theme -->
<body data-theme="dark">
  <div class="card">Same markup, dark theme</div>
</body>
```

### Typography That Scales

```scss
// Responsive by default
.hero-title {
  @include text-display(xl); // clamp(2rem, 1.8rem + 1vw, 2.5rem)
}

.body-content {
  @include text-body(base); // Perfect reading experience
}
```

### Spacing That Makes Sense

```scss
.layout {
  padding: spacing(4); // 1rem (16px)
  gap: spacing(6); // 1.5rem (24px)
  margin-bottom: spacing(8); // 2rem (32px)
}
```

## Framework Integration

TailorDS works perfectly with any framework:

### React

```tsx
const Button = ({ variant, size, children }) => (
  <button
    className={`
      btn
      ${variant === "primary" ? "bg-primary text-white" : "bg-secondary"}
      ${size === "sm" ? "p-2 text-sm" : "p-4 text-base"}
    `}
  >
    {children}
  </button>
);
```

### Vue

```vue
<template>
  <button
    :class="{
      'bg-primary text-white': variant === 'primary',
      'bg-secondary text-secondary-foreground': variant === 'secondary',
      'p-2 text-sm': size === 'sm',
      'p-4 text-base': size === 'lg',
    }"
    class="btn"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  border-radius: radius(button);
  transition: all duration(fast) easing(smooth);
}
</style>
```

### Vanilla CSS

```css
.btn {
  background: var(--color-primary);
  color: var(--color-primary-foreground);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-button);
}

.btn:hover {
  background: oklch(from var(--color-primary) l c h / 0.9);
}
```

## Theme Switching

### Automatic Detection

```javascript
// Respect system preferences
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDark.matches) {
  document.body.setAttribute("data-theme", "dark");
}
```

### Manual Control

```javascript
// Theme switcher
const setTheme = (theme) => {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

// Usage
setTheme("dark"); // Switch to dark
setTheme("light"); // Switch to light
setTheme("brand"); // Switch to custom theme
```

## Common Patterns

### Card Component

```scss
.card {
  background: color(card);
  color: color(card-foreground);
  border: 1px solid color(border);
  border-radius: radius(card);
  padding: spacing(6);
  box-shadow: shadow(card);

  &:hover {
    box-shadow: shadow(card-hover);
    transform: translateY(-2px);
  }
}
```

### Form Elements

```scss
.input {
  background: color(background);
  border: 1px solid color(input);
  border-radius: radius(input);
  padding: spacing(2) spacing(3);
  @include text-body(base);

  &:focus {
    outline: 2px solid color(ring);
    border-color: color(primary);
  }
}
```

### Navigation

```scss
.nav {
  background: color(background);
  border-bottom: 1px solid color(border);

  &__link {
    color: color(muted-foreground);
    padding: spacing(2) spacing(4);

    &:hover {
      color: color(foreground);
      background: color(accent);
    }

    &--active {
      color: color(primary);
      background: color(primary, 0.1);
    }
  }
}
```

## Best Practices

### ✅ Use Semantic Tokens for Components

```scss
// Good - adapts to themes automatically
.alert {
  background: color(background);
  border: 1px solid color(border);
  color: color(foreground);
}
```

### ✅ Save Primitives for Special Cases

```scss
// Good - brand-specific gradient
.hero-gradient {
  background: linear-gradient(135deg, color(brand, 400), color(brand, 600));
}
```

### ✅ Combine Both Approaches

```scss
// Component with utilities for states
.product-card {
  background: color(card);
  border-radius: radius(card);
  padding: spacing(6);

  &.featured {
    @apply border-2 border-primary bg-primary-50;
  }
}
```

## When Things Go Wrong

### Token Doesn't Exist

```scss
.broken {
  color: color(typo);
}
// Error: The color 'typo' doesn't exist
```

**Solution:** Check your `$colors` or `$theme` configuration.

### Utility Class Not Generated

```html
<div class="bg-custom-500">Won't work</div>
```

**Solution:** Make sure `custom` is defined in your `$colors` and `background` is enabled in `$utilities`.

### Theme Not Switching

```html
<body data-theme="dark">
  Still light
</body>
```

**Solution:** Ensure your theme is defined in configuration and CSS is properly imported.

## What's Next?

You're ready to build! Here's where to go from here:

### **Explore Design Foundations**

- [**Colors**](/foundations/colors) - Deep dive into the color system
- **Typography** - Coming soon
- **Spacing** - Coming soon

### **Learn Advanced Patterns**

- **Components** - Coming soon
- **Theming** - Coming soon
- **Performance** - Coming soon

### **Get Help**

- [GitHub Issues](https://github.com/tailords/core/issues) - Bug reports and questions
- [Discord Community](https://discord.gg/tailords) - Chat with other users
- [Examples Repository](https://github.com/tailords/examples) - Real-world usage

---

**Remember:** TailorDS works for you, not against you. Start simple, customize as you grow, and never compromise on your design vision.
