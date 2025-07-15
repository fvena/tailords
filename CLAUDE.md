# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development

- `pnpm dev` - Start development mode for all packages in parallel
- `pnpm build` - Build all packages using Turbo
- `pnpm clean` - Clean all build artifacts and node_modules
- `pnpm clean:cache` - Clean only Turbo cache

### Testing

- `pnpm test` - Run tests for all packages
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Run tests with coverage reporting

### Linting and Formatting

- `pnpm lint` - Lint all packages
- `pnpm lint:fix` - Fix linting issues automatically
- `pnpm format` - Format all files with Prettier
- `pnpm format:check` - Check formatting without fixing
- `pnpm typecheck` - Run TypeScript type checking across packages

### Documentation

- `pnpm docs:dev` - Start VitePress documentation server
- `pnpm docs:build` - Build documentation site
- `pnpm docs:preview` - Preview built documentation

### Release Management

- `pnpm changeset` - Create a changeset for versioning
- `pnpm changeset:version` - Apply changesets and update versions
- `pnpm changeset:publish` - Publish updated packages
- `pnpm release` - Build and publish all packages

### Package-Specific Commands

For individual packages, use `pnpm --filter <package-name> <command>`:

- `pnpm --filter @tailords/tokens test` - Run tests for tokens package
- `pnpm --filter @tailords/ui dev` - Start development for UI package

## Architecture Overview

TailorDS is a monorepo containing 5 packages that form a complete Design System ecosystem:

### Package Structure

- **@tailords/tokens** - SCSS framework for design token management and utility generation
- **@tailords/theme** - HTML/CSS foundation with normalization and semantic styling
- **@tailords/studio** - TypeScript tools for color palettes, typography scales, and token generation
- **@tailords/ui** - Vue.js component library with TypeScript support
- **@tailords/vitepress** - VitePress theme for Design System documentation

### Key Dependencies

- **Turbo** - Monorepo build system with task orchestration
- **Changesets** - Version management and coordinated publishing
- **pnpm** - Package manager with workspace support
- **VitePress** - Documentation framework
- **Vitest** - Testing framework
- **ESLint** - Linting with personal-style-guide configuration

### Build Configuration

- **tsup** - TypeScript packages use tsup for building
- **Sass** - SCSS packages compile directly with Sass
- **Turbo** - Orchestrates builds with dependency management
- TypeScript packages generate declaration files with `vue-tsc`

### Testing Strategy

- **Vitest workspace** - Configured for packages/tools, packages/vitepress, and packages/vue
- **Sass tests** - SCSS packages use sass-true for unit testing
- **Coverage** - V8 coverage provider for TypeScript packages

### Package Dependencies

- **@tailords/tokens** - Core foundation, used by all other packages
- **@tailords/theme** - Depends on tokens
- **@tailords/studio, @tailords/ui, @tailords/vitepress** - All depend on tokens
- Workspace dependencies use `workspace:*` syntax

## Development Notes

### Monorepo Workflow

- All packages can be developed in parallel using `pnpm dev`
- Changes to @tailords/tokens automatically trigger rebuilds in dependent packages
- Use Turbo's dependency graph for efficient builds and testing

### Package Types

- **SCSS packages** (tokens, theme) - No build step, direct SCSS distribution
- **TypeScript packages** (studio, ui, vitepress) - Built with tsup, generate .d.ts files
- **Documentation** - VitePress with shared configuration and cross-package linking

### Code Quality

- ESLint configuration extends personal-style-guide/eslint/browser
- Prettier for consistent formatting
- Stylelint for SCSS files
- TypeScript strict configuration with path mapping for workspace packages

### Release Process

- Use changesets for version management
- Coordinated releases across all packages
- Automated publishing workflow
- Maintains compatibility matrix between package versions
