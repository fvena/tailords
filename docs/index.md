---
layout: home

hero:
  name: TailorDS
  text: Your Design System, Your Rules
  tagline: Build custom Design Systems with complete freedom - no compromises, no limitations.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/fvena/tailords

features:
  - title: 🎨 Complete Customization
    details: Define your tokens with unlimited nesting. No imposed design decisions or constraints.

  - title: ⚡ Systematic Approach
    details: CSS variables generation, utility classes, and type-safe helpers automatically created.

  - title: 🧩 Framework Agnostic
    details: Works with React, Vue, Svelte, Angular, or vanilla HTML/CSS.

  - title: 🛠️ Developer Tools
    details: Color generators, typography scales, and token utilities to speed up creation.

  - title: 📚 Complete Ecosystem
    details: From SCSS framework to Vue components, documentation themes and more.

  - title: 🎯 Production Ready
    details: Used by teams who value brand differentiation and design system excellence.
---

## Packages Overview

<div class="package-grid">
  <div class="package-card">
    <h3>@tailords/tokens</h3>
    <p>SCSS framework for design token management and CSS variable generation</p>
    <a href="tokens/">Learn more →</a>
  </div>

  <div class="package-card">
    <h3>@tailords/studio</h3>
    <p>Design System creation tools - color generators, typography scales</p>
    <a href="studio/">Learn more →</a>
  </div>

  <div class="package-card">
    <h3>@tailords/theme</h3>
    <p>CSS foundation framework with cross-browser normalization</p>
    <a href="theme/">Learn more →</a>
  </div>

  <div class="package-card">
    <h3>@tailords/ui</h3>
    <p>Vue component library with token-driven design</p>
    <a href="ui/">Learn more →</a>
  </div>

  <div class="package-card">
    <h3>@tailords/vitepress</h3>
    <p>VitePress theme for Design System documentation</p>
    <a href="vitepress/">Learn more →</a>
  </div>
</div>

<style>
.package-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin: 2rem 0;
}

.package-card {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  padding: 1.5rem;
  background: var(--vp-c-bg-soft);
}

.package-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.package-card p {
  margin: 0 0 1rem 0;
  color: var(--vp-c-text-2);
}

.package-card a {
  color: var(--vp-c-brand);
  text-decoration: none;
  font-weight: 500;
}
</style>
