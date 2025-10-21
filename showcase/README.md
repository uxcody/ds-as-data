# Components as Data - Showcase Website

An educational website demonstrating the "Components as Data" methodology for building platform-agnostic design systems.

## Overview

This showcase website helps people understand the Components as Data approach through:

- **Live Component Demos** - Interactive examples of all 5 components
- **YAML Specifications** - View the component specs that drive all implementations
- **Code Comparisons** - Side-by-side comparisons of React, Web Components, and React Native
- **Philosophy** - Deep dive into the methodology and its benefits
- **Getting Started** - Step-by-step guide to implementing the approach

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:3000`

## Technology Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

## Project Structure

```
showcase/
├── src/
│   ├── components/
│   │   └── Layout.tsx         # Main layout with navigation
│   ├── pages/
│   │   ├── HomePage.tsx       # Landing page with overview
│   │   ├── ComponentsPage.tsx # Live component demos
│   │   ├── YAMLSpecsPage.tsx  # YAML specification viewer
│   │   ├── CodeComparisonPage.tsx  # Code comparison across platforms
│   │   ├── PhilosophyPage.tsx # Methodology deep dive
│   │   └── GettingStartedPage.tsx  # Implementation guide
│   ├── App.tsx                # Root component with routes
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Features

### Homepage
- Hero section explaining the methodology
- Problem/solution overview
- Key benefits
- Component preview
- Call-to-action buttons

### Components Page
- Live, interactive demos of all 5 components
- Button: variants, sizes, and states
- Link: different types and external links
- Input: with labels, help text, and error states
- Card: various layouts and styles
- Dialog: modal with full functionality

### YAML Specs Page
- Explanation of YAML structure
- Tabbed viewer showing example specifications
- Benefits of using YAML
- Link to full specs on GitHub

### Code Comparison Page
- Switchable views of React, Web Components, and React Native
- Key differences in syntax and conventions
- Similarities across all platforms
- Shared design tokens
- Power of YAML as single source of truth

### Philosophy Page
- Problem with traditional design systems
- Core principles of Components as Data
- Detailed benefits explanation
- Who should use this approach
- Attribution to Nathan Curtis

### Getting Started Page
- Quick start guide with clone instructions
- Step-by-step implementation guide
- Best practices
- Potential tooling and automation
- Resources and links

## Styling

The site uses CSS custom properties that match the design tokens from the main project:

- Colors from `yaml/tokens/colors.yaml`
- Spacing from `yaml/tokens/spacing.yaml`
- Typography using Inter font family
- Consistent 8px grid system

## Component Library Integration

The showcase imports and displays actual components from the React reference implementation:

- Imports styles from `shared/styles/components/`
- Uses design tokens from `shared/styles/tokens.css`
- Demonstrates real, working implementations

## Deployment

The site can be deployed to any static hosting service:

```bash
# Build production bundle
npm run build

# Deploy the dist/ directory to:
# - Vercel
# - Netlify
# - GitHub Pages
# - AWS S3 + CloudFront
# etc.
```

## Contributing

To add new content or features:

1. Create/edit pages in `src/pages/`
2. Add routes in `src/App.tsx`
3. Update navigation in `src/components/Layout.tsx`
4. Add corresponding CSS files for styling
5. Test locally with `npm run dev`

## License

MIT

## Credits

Based on Nathan Curtis's article ["Components as Data"](https://medium.com/@nathanacurtis/components-as-data-2be178777f21).

