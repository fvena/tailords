# TailorDS

A modern, customizable SCSS framework for building design systems with utility-first approach and component-based architecture.

## Installation

```bash
npm install tailords
```

## Usage

Import the SCSS framework in your project:

```scss
// Import the complete framework
@use "tailords/scss" as *;

// Or import specific modules
@use "tailords/scss" as tailords;

// Use framework components
.my-button {
  @include button-base;
  background-color: $primary-color;
}
```

### CSS Import

You can also import the compiled CSS:

```css
@import "tailords/css";
```

## Development

- `npm run dev`: Start development mode with auto-rebuild
- `npm run build`: Build SCSS and CSS distributions
- `npm run playground`: Start the playground for testing
- `npm run lint`: Lint SCSS files
- `npm test`: Run SCSS unit tests

## Playground

The playground is a Vite-powered demo that shows the design system in action:

```bash
npm run playground
```

This will start a local server where you can see all components and test the framework compilation.

## Documentation

- [VitePress Documentation](https://fvena.github.io/tailords)

## License

[MIT](./LICENSE)
