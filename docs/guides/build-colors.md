# Guide: How to Build Your Color System with TailorDS

## Introduction

A color system is much more than a list of pretty swatches — it’s the foundation of your product’s visual identity and a key tool to ensure consistency, accessibility, and scalability.

In TailorDS, we don’t give you a predefined palette or impose naming conventions. Instead, we give you the tools to build your own color system — one that reflects your brand, your product’s needs, and your users.

We follow a simple philosophy:

> **Purposeful minimalism.**
> Every color token exists for a reason and solves a specific interface need. No decorative or “just in case” tokens.

This guide will help you define and implement your own color system step by step, using TailorDS effectively while applying best practices.

## Concepts You Need to Know

Before we dive into the steps, it’s important to understand a few key concepts:

### Tokens

A **token** is just a name assigned to a value — like a constant in programming.
Instead of hardcoding `#ffffff` everywhere, you define a token (e.g., `background`) and use it throughout your code.
When you change the token value later, your entire interface updates accordingly.

_Why?_

- Avoids hardcoding and duplication.
- Ensures consistency.
- Makes theme switching and maintenance easy.

### Primitives vs Semantic Tokens

In TailorDS we recommend separating your tokens into two layers:

- **Primitives**: Raw color values, usually grouped into scales.
  Example: `neutral-50`, `primary-500`, `error-700`.
  Think of these as your _color palette_.
- **Semantic tokens**: Meaningful names that describe _when/where_ a color is used.
  Example: `background`, `foreground-muted`, `border-selected`, `success`.
  Semantic tokens _reference_ primitives, so you can change the underlying colors without changing your UI code.

_Why?_

- Semantic tokens make your code more readable and maintainable.
- You can redefine your brand colors or switch themes without rewriting component styles.

## OKLCH

TailorDS supports any CSS-valid color format, but we recommend **OKLCH**.

_Why OKLCH?_

- Perceptual uniformity: equal steps feel equal to the eye.
- Predictable adjustments: you can change lightness/chroma/hue and get intuitive results.
- Future-proof: already part of CSS Color Level 4.
- Better gradients and transitions.

Example:

```scss
$primary-500: oklch(0.55 0.18 250); // lightness, chroma, hue
```

## Color Categories

In a design system, colors are not just random values — they are organized into meaningful categories to help create a structured and scalable palette.
These categories reflect both visual hierarchy and functional roles.

- **Neutral**: The backbone of your interface, used for most surfaces, text, and borders. Usually a gray or slightly tinted scale.
- **Brand**: Your brand’s main color, expressing identity and action. This is what users associate with your product.
- **Accent**: A secondary highlight, complementing the brand color and adding variety. Optional — only use if your UI needs additional emphasis beyond the brand color.
- **Success**: Indicates positive feedback, confirmation, or completed actions. Commonly green-toned.
- **Warning**: Draws attention to something requiring caution. Usually orange or yellow.
- **Error**: Communicates critical issues or destructive actions. Traditionally red.
- **Info**: Provides neutral, contextual information without strong emotional weight. Commonly blue.

**Notes**

- You don’t have to implement all categories at once — start with neutrals, brand, and semantic (success/warning/error).
- Each category should be clearly distinguishable and consistent across light and dark themes.
- Keep contrast ratios in mind when assigning colors to categories.

> This categorization helps ensure that every color in your system has a clear purpose, avoiding visual noise and improving accessibility.

## Understanding the Scale

Usually, each palette is made up of 11 or 12 steps — from the lightest to the darkest. Each step was designed for at least one specific use case.

This table is a simple overview of the most common use case for each step. However, there are many exceptions and caveats to factor in, which are covered in further detail below.

| **Step** | **Use Case**                            |
| -------: | --------------------------------------- |
|        1 | App background                          |
|        2 | Subtle background                       |
|        3 | UI element background                   |
|        4 | Hovered UI element background           |
|        5 | Active / Selected UI element background |
|        6 | Subtle borders and separators           |
|        7 | UI element border and focus rings       |
|        8 | Hovered UI element border               |
|        9 | Solid backgrounds                       |
|       10 | Hovered solid backgrounds               |
|       11 | Low-contrast text                       |
|       12 | High-contrast text                      |

#### Steps 1–2: Backgrounds

Steps `1` and `2` are designed for app backgrounds and subtle component backgrounds. You can use them interchangeably, depending on the vibe you're going for.

Appropriate applications include:

- Main app background
- Striped table background
- Code block background
- Card background
- Sidebar background
- Canvas area background

> **Tip:** In light mode, you may prefer white. In dark mode, use `1` or `2` from your neutral scale.

#### Steps 3–5: Component backgrounds

Steps `3`, `4`, and `5` are designed for UI component backgrounds.

- Step `3` is for normal states.
- Step `4` is for hover states.
- Step `5` is for pressed or selected states.

If your component has a transparent background in its default state, you can use Step `3` for its hover state.

> **Tip:** Steps `11` and `12` —which are designed for text— are guaranteed to meet WCAG contrast ratios on top of a step `2` background from the same scale.

#### Steps 6–8: Borders and focus rings

Steps `6`, `7`, and `8` are designed for borders.

- Step `6` is designed for subtle borders on components which are not interactive. For example sidebars, headers, cards, alerts, and separators.
- Step `7` is designed for subtle borders on interactive components.
- Step `8` is designed for stronger borders on interactive components and focus rings.

#### Steps 9–10: Solid backgrounds

Steps `9` and `10` are designed for solid backgrounds.

Step `9` has the highest chroma of all steps in the scale. In other words, it's the purest step, the step mixed with the least amount of white or black. Because `9` is the purest step, it has a wide range of applications:

- Website/App backgrounds
- Website section backgrounds
- Header backgrounds
- Component backgrounds
- Graphics/Logos
- Overlays
- Coloured shadows
- Accent borders

Step `10` is designed for component hover states, where step `9` is the component's normal state background.

> **Note:** Most step `9` colors are designed for white foreground text. `Sky`, `Mint`, `Lime`, `Yellow`, and `Amber` are designed for dark foreground text and steps `9` and `10`.

#### Steps 11–12: Text

Steps `11` and `12` are designed for text.

- Step `11` is designed for low-contrast text.
- Step `12` is designed for high-contrast text.

#### Notes

- You don’t have to use every step. Use the ones that make sense for your product.
- Steps `1–2` and `11–12` are guaranteed to meet accessibility contrast ratios when used properly.
- Test your text/background combinations for WCAG compliance.

> **Tip:** If you’re unsure, stick to the defaults in Radix’s palettes: they’re designed to cover all these use cases harmoniously.

## Semantic Token Naming

Naming your semantic tokens consistently is essential for clarity, maintainability, and collaboration.
We recommend following this pattern:

```
--color-[type]-[variant]-[state]
```

This structure makes each token self-explanatory at a glance.

### Token Components

#### Types — _What you're coloring_

- `background` → Surfaces (cards, pages, overlays)
- `foreground` → Text and icons
- `border` → Lines and outlines
- `outline` → Focus indicators
- `shadow` → Depth and elevation

#### Variants — _What role it plays_

- _(no suffix)_ → Default / standard usage
- `subtle` → Less prominent, secondary hierarchy
- `muted` → Discreet, supporting elements
- `selected` → Active or currently chosen items
- `brand` → Brand’s main color
- `accent` → Highlights and calls-to-action
- `success` / `warning` / `error` / `info` → System states

#### States — _For interactive elements_

- `hover` → On mouse over
- `active` → While being pressed
- `disabled` → Non-interactive / unavailable
- `focus` → On keyboard selection

### Examples

Below are some proposed semantic tokens based on this naming convention.

#### Backgrounds

```css
--color-background               /* Main app background */
--color-background-elevated      /* Cards, modals, overlays */
--color-background-subtle        /* Sections, gentle separations */
--color-background-selected      /* Active/chosen items */
--color-background-overlay       /* Modal backdrops */

--color-background-brand         /* Brand buttons, key actions */
--color-background-brand-hover
--color-background-brand-active
--color-background-brand-disabled

--color-background-accent        /* Highlights, secondary CTAs */
--color-background-accent-hover
--color-background-accent-active
--color-background-accent-disabled

--color-background-success       /* Positive feedback */
--color-background-warning       /* Attention needed */
--color-background-error         /* Critical issues */
--color-background-info          /* Helpful context */
```

#### Foregrounds

```css
--color-foreground               /* Primary text */
--color-foreground-subtle        /* Secondary text */
--color-foreground-muted         /* Captions, disabled text */
--color-foreground-selected      /* Text on selected backgrounds */

--color-foreground-brand         /* Text on brand backgrounds */
--color-foreground-accent        /* Text on accent backgrounds */

--color-foreground-success       /* Text on success backgrounds */
--color-foreground-warning       /* Text on warning backgrounds */
--color-foreground-error         /* Text on error backgrounds */
--color-foreground-info          /* Text on info backgrounds */
```

#### Borders

```css
--color-border                   /* Standard borders */
--color-border-subtle            /* Gentle separations */
--color-border-selected          /* Active element borders */
--color-border-disabled          /* Non-interactive borders */

--color-border-success           /* Positive state borders */
--color-border-warning           /* Attention state borders */
--color-border-error             /* Error state borders */
--color-border-info              /* Info state borders */
```

#### Outlines & Shadows

```css
--color-outline-focus            /* Focus rings */

--color-shadow                   /* Standard drop shadows */
--color-shadow-elevated          /* Higher elevation shadows */
```

This approach gives your tokens clear, predictable names, making them easy to understand and apply throughout your project.

## Building Your Color System

Here’s how to build your own color system using TailorDS — one step at a time.

### Step 1: Define your primitives

Your **primitives** are the raw materials of your color system — the base palettes you’ll build everything else on top of.

This step is about carefully choosing which palettes and scales you need and defining them in your `$colors` configuration.

We recommend keeping it simple and purposeful: choose only what you actually need, no more.

#### 1. Choose a brand palette

Decide what hue will represent your brand or primary accent. You can pick a well-balanced, accessible palette from [Radix Colors](https://www.radix-ui.com/colors) or define your own with [Radix Custom Colors](https://www.radix-ui.com/colors/custom). If you already have a brand color in mind, you can define a custom palette, while still using Radix’s neutrals and semantics.

#### 2. Choose a neutral palette

The neutral palette is the backbone of your interface. It covers most of the UI: backgrounds, borders, text.

You have two options:

- **Pure gray** (`gray`): works universally and feels neutral.
- **Tinted grays** (`mauve`, `slate`, `sage`, etc.): if you want a subtle hint of color to complement your brand.

_Tips:_

- If you want a neutral, understated UI: stick with `gray`.
- If you want a more colorful and harmonious vibe: pick a tinted gray closest to your brand hue (e.g., `slate` for blue, `sage` for green).

#### 3. Define semantic palettes

You’ll need semantic colors to communicate meaning: success, error, warning, info.<br>
Common pairings that work well:

- **Success** → `green`, `teal`, `jade`, `grass`
- **Warning** → `yellow`, `amber`, `orange`
- **Error** → `red`, `ruby`, `crimson`, `tomato`
- **Info** → `blue`, `indigo`, `sky`, `cyan`

For most products, these four are enough. You can always expand later.

#### Example

```scss
$colors: (
  light: (
    neutral: (
      ...,
    ),
    brand: (
      ...,
    ),
    success: (
      ...,
    ),
    warning: (
      ...,
    ),
    error: (
      ...,
    ),
    info: (
      ...,
    ),
  ),
  dark: (
    neutral: (
      ...,
    ),
    brand: (
      ...,
    ),
    success: (
      ...,
    ),
    warning: (
      ...,
    ),
    error: (
      ...,
    ),
    info: (
      ...,
    ),
  ),
);
```

### Step 2: Map primitives to semantic tokens

Your **semantic tokens** give meaning to your primitives. Instead of using `neutral-50` directly in your UI, you assign it to a token like `background` or `text`.

_Why?_

- Makes components more readable.
- Allows you to change themes without touching your code.

_Example:_

```scss
$colors: (
  light: (
    neutral: (
      ...,
    ),
    primary: (
      ...,
    ),
    background: (
      neutral,
      "50",
    ),
    foreground: (
      neutral,
      "900",
    ),
    border: (
      neutral,
      "200",
    ),
    success: (
      green,
      "600",
    ),
    error: (
      red,
      "600",
    ),
  ),

  dark: (
    background: (
      neutral,
      "950",
    ),
    foreground: (
      neutral,
      "50",
    ),
    ...,
  ),
);
```

Each semantic token is just a path to a primitive value.

### Step 3: Use helpers and utilities

In your SCSS and markup, always reference colors through TailorDS helpers or utilities — never hardcode values.

_SCSS example:_

```scss
.button {
  background: color(background);
  color: color(foreground);
}
```

_HTML example:_

```html
<div class="bg-background text-foreground">Themed content</div>
```

This ensures everything reacts to theme changes and stays consistent.

### Step 4: Test & iterate

Before shipping, always test:

- Contrast ratios for accessibility.
- Theme switching (light/dark/custom themes).
- Readability and color blindness friendliness.
- Real devices and environments.

_Use tools like [WCAG contrast checker](https://contrast-ratio.com/) or browser extensions._

That’s it — five clear steps and you’ll have a robust, scalable, and accessible color system ready to power your UI.

## Best Practices

Before you start applying your color system everywhere, keep these best practices in mind. They’ll help you avoid common mistakes and make your system more maintainable.

### Always use semantic tokens in components

Your components should never know about primitives — they should only use semantic tokens like `background`, `text`, `success`.

_Good:_

```scss
.alert {
  background: color(background);
  color: color(foreground);
}
```

_Bad:_

```scss
.alert {
  background: color(neutral, "50");
  color: color(neutral, "900");
}
```

Semantic tokens give your design meaning and make it easy to change themes later.

### Primitives are for mapping

Think of primitives (`neutral-50`, `primary-500`, etc.) as internal building blocks.
You use them when defining your tokens — but never directly in UI code.

### One token, one purpose

Don’t reuse the same token name for different things. If `background-subtle` is defined for cards, don’t also use it for modal overlays.
Tokens should be predictable and self-descriptive.

### Maintain contrast

Always test your background/foreground pairs to meet WCAG contrast ratios.
✅ On light backgrounds, use text from steps `700–950`.
✅ On dark backgrounds, use text from steps `50–200`.

### Never hardcode color values

Hardcoding a `#hex` or `oklch()` in a component breaks the system and makes maintenance a nightmare.

Instead of:

```scss
.button {
  background: #3b82f6;
}
```

Use:

```scss
.button {
  background: color(primary);
}
```

### Test your themes

Don’t assume dark mode “just works.” Review your dark and custom themes on real screens and make adjustments where needed.
Test in different environments and simulate color blindness if possible.

✅ Keep these principles in mind and your color system will remain scalable, maintainable, and accessible — no matter how your product grows.

## Resources & Next Steps

Building a good color system is an ongoing process. Once you’ve defined your tokens and set up TailorDS, keep learning and refining. Here are some recommended next steps and resources.

### Useful tools

- [Contrast Checker (WCAG)](https://contrast-ratio.com/), test your color pairs for accessibility.
- [Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/), check how your palettes look for colorblind users.
- [Radix Colors Docs](https://www.radix-ui.com/colors), a great reference for balanced, accessible UI color scales.
- [OKLCH Color Picker](https://oklch.com/), explore and tweak OKLCH colors interactively.

### Next steps

- Review your components and replace hardcoded colors with semantic tokens.
- Test light, dark, and custom themes thoroughly.
- Document your color decisions for your team.
- Keep accessibility at the center of every color choice.

---

✨ _A well-built color system doesn’t just make your product look good — it makes it consistent, accessible, and easy to maintain for everyone who works on it._
