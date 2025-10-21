# Components as Data - Showcase Website

## What This Is

A comprehensive, educational website that demonstrates the "Components as Data" methodology through interactive demos, YAML specifications, code comparisons, and detailed explanations.

## What's Included

### 6 Complete Pages

#### 1. **Homepage** (`/`)
- Hero section with methodology introduction
- The problem: traditional design system challenges
- The solution: data-driven design approach
- Key benefits overview
- Live demo preview
- Components list with complexity badges
- Credits and attribution

#### 2. **Components Page** (`/components`)
- **Live, Interactive Demos** of all 5 components:
  - **Button**: All 5 variants (primary, secondary, tertiary, as-link, icon-only), 3 sizes, loading state
  - **Link**: Inline, standalone, and navigation variants with external link handling
  - **Input**: With labels, help text, error validation (try typing an invalid email!)
  - **Card**: Default, outlined, and elevated variants with header/content/footer
  - **Dialog**: Fully functional modal with backdrop click, ESC key support, focus trap
- Each component is a working implementation from the React reference

#### 3. **YAML Specs Page** (`/yaml-specs`)
- Explanation of what's in a YAML specification
- 6 key features of specs (metadata, variants, props, accessibility, states, tokens)
- Interactive tabbed viewer with example YAML
- "Why YAML?" benefits section
- Link to full specs on GitHub

#### 4. **Code Comparison Page** (`/code-comparison`)
- Interactive selector to switch between React, Web Components, and React Native
- Live code examples showing the same component in different platforms
- Key differences table (prop naming, events, children, styling)
- What stays the same (variants, sizes, states, accessibility, tokens, behaviors)
- Shared design tokens examples
- "Power of YAML as Source of Truth" section

#### 5. **Philosophy Page** (`/philosophy`)
- Deep dive into the problems with traditional design systems
- The solution: separating specification from implementation
- 6 core principles of the methodology
- "Why This Matters" benefits section
- Who should use this approach
- Attribution to Nathan Curtis

#### 6. **Getting Started Page** (`/getting-started`)
- Quick start with clone instructions
- 5-step implementation guide with code examples:
  1. Start with Design Tokens
  2. Define Component Specifications
  3. Implement for Your Platform
  4. Add Comments Referencing YAML
  5. Validate and Test
- Best practices (6 cards)
- Potential tooling (6 automation ideas)
- Resources section
- Final CTA to GitHub

## Design Features

### Visual Design
- **Modern, clean aesthetic** with gradient hero sections
- **Brand colors** matching the design system (blue primary, neutral grays)
- **Consistent spacing** using 8px grid system
- **Typography** with Inter font family
- **Professional cards** with subtle shadows and borders
- **Responsive design** that works on mobile, tablet, and desktop
- **Smooth transitions** and hover effects throughout

### User Experience
- **Sticky navigation** that stays visible while scrolling
- **Active page indicators** in navigation
- **Interactive demos** you can actually click and use
- **Tabbed interfaces** for code examples and specs
- **Clear visual hierarchy** with proper heading levels
- **Generous whitespace** for readability
- **Call-to-action buttons** that guide users through the journey

### Accessibility
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible styles
- Color contrast compliance
- Screen reader friendly

## Technology Stack

- **React 18** with TypeScript for type safety
- **React Router** for client-side navigation
- **Vite** for fast development and optimized builds
- **CSS Custom Properties** for consistent theming
- **Modern CSS** with Grid and Flexbox layouts

## How to Run

```bash
# From the showcase directory
npm install
npm run dev
```

Visit `http://localhost:3000` and explore!

## Key Files

```
showcase/
├── src/
│   ├── components/
│   │   ├── Layout.tsx              # Navigation and footer
│   │   └── Layout.css
│   ├── pages/
│   │   ├── HomePage.tsx            # Landing page
│   │   ├── HomePage.css
│   │   ├── ComponentsPage.tsx      # Live demos
│   │   ├── ComponentsPage.css
│   │   ├── YAMLSpecsPage.tsx       # Spec viewer
│   │   ├── YAMLSpecsPage.css
│   │   ├── CodeComparisonPage.tsx  # Platform comparison
│   │   ├── CodeComparisonPage.css
│   │   ├── PhilosophyPage.tsx      # Methodology
│   │   ├── PhilosophyPage.css
│   │   ├── GettingStartedPage.tsx  # Implementation guide
│   │   └── GettingStartedPage.css
│   ├── App.tsx                     # Routes configuration
│   ├── main.tsx                    # Entry point
│   └── index.css                   # Global styles
├── package.json
├── vite.config.ts
└── README.md
```

## What Makes This Special

### 1. **Fully Functional Components**
The components page doesn't just show screenshots—it imports and renders actual working components from the React reference implementation.

### 2. **Educational Flow**
The site is designed to take users on a journey:
- Home: Understand the problem
- Components: See it working
- YAML: Learn the specs
- Code: Compare implementations
- Philosophy: Understand why
- Getting Started: Do it yourself

### 3. **Interactive Learning**
Users can:
- Click buttons and see loading states
- Type in inputs and trigger validation
- Open dialogs and close them
- Switch between code examples
- Toggle YAML spec tabs

### 4. **Professional Quality**
This isn't a quick prototype—it's a polished, production-ready showcase with:
- Consistent design language
- Smooth animations
- Responsive layout
- Proper TypeScript types
- Clean, maintainable code

## Customization Points

Want to adapt this for your own design system? Key places to customize:

1. **Colors**: Update CSS custom properties in `src/index.css`
2. **Content**: Edit page text in each `src/pages/*.tsx` file
3. **Components**: Swap in your own component implementations
4. **YAML Examples**: Update the code examples in `YAMLSpecsPage.tsx` and `CodeComparisonPage.tsx`
5. **Links**: Update GitHub links throughout
6. **Attribution**: Update the footer and credits sections

## Deployment

The site is ready to deploy to any static hosting:

```bash
npm run build
# Deploy the dist/ directory to Vercel, Netlify, etc.
```

## Future Enhancements

Potential additions:
- Search functionality for components
- Dark mode toggle
- Copy code button for examples
- Download YAML specs as files
- Interactive YAML editor
- Component playground with live props editing
- Video tutorials
- Blog section for updates

## Credits

- **Methodology**: Nathan Curtis's "Components as Data" article
- **Implementation**: This showcase project
- **Design**: Clean, modern web design principles
- **Icons**: Emoji for simplicity and universal recognition

---

**Built with ❤️ to help design systems scale across platforms**

