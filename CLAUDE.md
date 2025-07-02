# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

TailorDS is a modern SCSS framework for building design systems with utility-first approach and component-based architecture. It provides customizable variables, mixins, and components that can be imported and used in any project.

## Key Architecture

- **Entry Point**: `src/index.scss` - Main SCSS framework file
- **Core**: `src/core/` - Variables, functions, and mixins
- **Base**: `src/base/` - Reset, typography, and global styles
- **Components**: `src/components/` - Reusable UI components (buttons, forms, etc.)
- **Testing**: SCSS unit testing with sass-true framework
- **Playground**: Vite-powered demo application showing the design system
- **Documentation**: `docs/` directory with VitePress for documentation
- **Build System**: Sass compiler for SCSS to CSS compilation
- **Configuration**: Stylelint for SCSS linting and code quality

## Development Commands

```bash
# Development with hot reload
npm run dev           # Watch and rebuild SCSS on changes

# Build for production
npm run build         # Build both SCSS and compressed CSS
npm run build:scss    # Build SCSS only
npm run build:css     # Build compressed CSS only

# Code quality
npm run lint          # Lint SCSS files with Stylelint
npm run lint:fix      # Auto-fix SCSS linting issues
npm run format        # Format code with Prettier

# Testing
npm test              # Run SCSS unit tests with sass-true

# Playground (design system demo)
npm run playground    # Start Vite dev server with framework demo

# Documentation
npm run docs:dev      # Start docs dev server
npm run docs:build    # Build docs
npm run docs:preview  # Preview built docs

# Release (automated via semantic-release)
npm run semantic-release
```

## Code Quality & Standards

- **SCSS**: Modern SCSS with @use/@forward syntax
- **Stylelint**: SCSS linting with stylelint-config-standard-scss
- **Prettier**: Configured via lint-staged for auto-formatting
- **Commitlint**: Enforces conventional commit messages with relaxed body length rules
- **Husky**: Git hooks for pre-commit quality checks

## Build Configuration

- **Sass**: Official Dart Sass compiler for SCSS compilation
- **Output**: `dist/` directory with both `.scss` and `.css` files
- **Entry**: Single entry point at `src/index.scss`
- **Features**: Compressed CSS output, source SCSS preservation
- **Target**: Framework distributable for other projects

## Testing Setup

- **Framework**: sass-true for SCSS unit testing
- **Test Files**: `test/*.scss` files testing functions and mixins
- **Coverage**: Tests core functionality like functions and mixins

## Release Process

- **Semantic Release**: Automated versioning based on conventional commits
- **Triggers**: Releases happen on main branch merges
- **Artifacts**: NPM package, GitHub release, changelog updates
- **Branches**: `main` is the release branch

## Workspace Configuration

- **Monorepo**: Uses npm workspaces with `playground` package
- **Playground**: Vite-powered demo application showcasing the design system
- **Dependencies**: Playground imports framework via `"tailords": "*"`
- **Development**: Run `npm run playground` to see design system in action

## Documentation

- **VitePress**: Static site generator for documentation
- **Configuration**: `docs/.vitepress/config.ts` configured for `/tailords/` base path
- **Content**: Markdown files in `docs/` directory
- **Deployment**: Configured for GitHub Pages at `fvena.github.io/tailords`

## Common Development Workflow

1. Create feature branches with descriptive prefixes (`feature/`, `fix/`, `chore/`)
2. Make changes following conventional commit format
3. Test SCSS compilation: `npm run build`
4. Test in playground: `npm run playground`
5. Run linting: `npm run lint`
6. Run SCSS tests: `npm test`
7. Create PR to main branch
8. Automated release happens on merge to main

## Important Notes

- This is an SCSS framework for building design systems
- Use modern SCSS syntax (@use/@forward instead of @import)
- Playground demonstrates the framework's capabilities in a real browser environment
- Framework outputs both source SCSS and compiled CSS for distribution
- All framework components should be modular and customizable
