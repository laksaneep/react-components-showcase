# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on port 3000 with auto-open
- `npm run build` - Build the project (runs TypeScript compilation then Vite build)
- `npm run lint` - Run ESLint on the codebase
- `npm run preview` - Preview the production build

## Project Architecture

This is a React component showcase application built with Vite, TypeScript, and Tailwind CSS. The app demonstrates a registry-based component system where components are dynamically registered and displayed with live previews and code examples.

### Core Architecture

**Component Registration System**: The application uses a centralized registry pattern (`src/utils/componentRegistry.ts`) where components are registered with metadata including props documentation, source code, examples, and difficulty levels.

**Component Structure**: Each component follows a consistent pattern:
- `Component.tsx` - The actual React component
- `Component.config.ts` - Metadata configuration (title, description, props, etc.)
- `Component.source.ts` - Source code strings and usage examples
- `Component.registry.ts` - Registration with the global registry

**Showcase Architecture**: The main `ComponentShowcase.tsx` dynamically renders all registered components with search/filter capabilities, live previews, and a code preview modal system.

### File Structure

- `src/components/showcases/` - Core showcase UI components
- `src/components/[ComponentName]/` - Individual component directories
- `src/types/components.ts` - TypeScript interfaces for the registry system
- `src/utils/componentRegistry.ts` - Central component registry

### Configuration

- **Vite Config**: Configured with React plugin, path alias (`@` → `/src`), and GitHub Pages base path
- **Tailwind CSS v4**: Uses the new `@tailwindcss/postcss` plugin architecture instead of traditional config
- **TypeScript**: Strict configuration with separate app and node configs

### Adding New Components

1. Create component directory in `src/components/[ComponentName]/`
2. Implement the four required files following the existing pattern
3. Import the `.registry.ts` file in `src/components/index.tsx` to auto-register

The registry system automatically handles component discovery, metadata management, and showcase rendering.