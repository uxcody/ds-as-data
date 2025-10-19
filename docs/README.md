# Design System as Data - Documentation

## Overview

This project demonstrates the "Design System as Data" approach, where component specifications are defined in structured YAML files that can be consumed by any framework or platform. This approach enables true cross-platform design consistency while maintaining implementation flexibility.

## Philosophy

Traditional design systems tie component specifications to their implementation (e.g., React components with Storybook documentation). This creates several challenges:

1. **Platform Lock-in**: React components don't help iOS or Android teams
2. **Duplication**: Each platform reimplements the same design decisions
3. **Drift**: Without a single source of truth, implementations diverge
4. **Documentation Debt**: Design decisions exist only in implementation code

### The Solution: Data-Driven Design

By defining components as structured data (YAML), we create a **single source of truth** that:

- Documents design decisions explicitly
- Guides implementation across all platforms
- Can be validated and versioned
- Enables automated tooling and code generation
- Maintains consistency across platforms

## Architecture

### Directory Structure

```
ds-as-data/
├── yaml/                           # Source of truth
│   ├── components/                 # Component specifications
│   │   ├── button.yaml
│   │   ├── link.yaml
│   │   ├── input.yaml
│   │   ├── card.yaml
│   │   └── dialog.yaml
│   ├── tokens/                     # Design tokens
│   │   ├── colors.yaml
│   │   ├── spacing.yaml
│   │   ├── typography.yaml
│   │   └── effects.yaml
│   └── schemas/                    # JSON schemas for validation
├── reference-implementation/
│   └── react/                      # React proof-of-concept
└── docs/                           # Documentation
```

### Component YAML Structure

Each component YAML file contains:

#### 1. Metadata
Basic information about the component:
```yaml
metadata:
  name: Button
  description: A clickable button element
  category: Actions
  version: 1.0.0
  complexity: basic
```

#### 2. Variants
Visual or behavioral variations:
```yaml
variants:
  - name: primary
    description: Main call-to-action button
    default: true
  - name: secondary
    description: Secondary action button
```

#### 3. Sizes
Dimensional variations:
```yaml
sizes:
  - name: small
    description: Compact button
  - name: medium
    description: Standard button size
    default: true
```

#### 4. States
Component states and their triggers:
```yaml
states:
  - name: hover
    description: Mouse cursor is over the button
    trigger: ":hover"
  - name: disabled
    description: Button cannot be interacted with
    trigger: "disabled attribute"
    accessibility: true
```

#### 5. Props/Attributes
Available properties with types and defaults:
```yaml
props:
  - name: label
    type: string
    description: Text content of the button
    required: false
  - name: disabled
    type: boolean
    default: false
```

#### 6. Accessibility Requirements
ARIA attributes, keyboard interactions, focus management:
```yaml
accessibility:
  role: button
  keyboard:
    - key: Enter
      action: Activate button
  aria:
    - attribute: aria-label
      required: when icon-only variant
```

#### 7. Visual Styling
Maps to design tokens:
```yaml
styling:
  variants:
    primary:
      background: "colors.assignments.button.primary.background"
      color: "colors.assignments.button.primary.text"
```

#### 8. Behavior Specifications
Expected behaviors:
```yaml
behavior:
  - Loading state displays a spinner
  - Disabled state prevents interaction
```

#### 9. Usage Guidelines
Best practices:
```yaml
guidelines:
  do:
    - Use primary for main action
    - Provide aria-label for icon-only
  dont:
    - Use multiple primary buttons nearby
```

#### 10. Examples
Common use cases:
```yaml
examples:
  - name: Primary Action
    props:
      label: "Save Changes"
      variant: primary
```

### Design Tokens

Design tokens are defined in separate YAML files and referenced by components:

#### Colors (`yaml/tokens/colors.yaml`)
- Brand colors (primary, secondary)
- Neutral colors (grayscale)
- Semantic colors (success, warning, error, info)
- Component color assignments

#### Spacing (`yaml/tokens/spacing.yaml`)
- Base spacing scale (8px base unit)
- Component-specific spacing values

#### Typography (`yaml/tokens/typography.yaml`)
- Font families
- Font sizes
- Font weights
- Line heights
- Component typography assignments

#### Effects (`yaml/tokens/effects.yaml`)
- Border radius values
- Shadow definitions
- Transition durations
- Focus ring styles

## React Reference Implementation

The React implementation demonstrates how to consume YAML specifications:

### Component Structure

```typescript
// Component interface based on YAML props
export interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'as-link' | 'icon-only';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  // ... all props from YAML
}

// Component implementation follows YAML spec
export const Button: React.FC<ButtonProps> = ({ ... }) => {
  // Implementation
}
```

### Styling with CSS Custom Properties

Design tokens are converted to CSS custom properties:

```css
:root {
  /* From yaml/tokens/colors.yaml */
  --color-brand-primary-600: #0074d4;

  /* From yaml/tokens/spacing.yaml */
  --spacing-4: 1rem;

  /* From yaml/tokens/typography.yaml */
  --font-size-base: 1rem;
}

/* Component styles reference tokens */
.ds-button--primary {
  background-color: var(--color-brand-primary-600);
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-base);
}
```

### Component Comments Reference YAML

Each component file includes a header comment linking to its YAML spec:

```typescript
/**
 * Button Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/button.yaml
 *
 * Variants: primary, secondary, tertiary, as-link, icon-only
 * Sizes: small, medium, large
 * States: default, hover, focus, active, disabled, loading
 */
```

## Component Deep Dive

### Button Component
- **Complexity**: Basic
- **Variants**: 5 (primary, secondary, tertiary, as-link, icon-only)
- **Key Features**: Icon support, loading state, full accessibility
- **YAML**: `yaml/components/button.yaml`
- **Implementation**: `reference-implementation/react/src/components/Button.tsx`

### Link Component
- **Complexity**: Basic
- **Variants**: 3 (inline, standalone, nav)
- **Key Features**: External link handling, visited state, current page indication
- **YAML**: `yaml/components/link.yaml`
- **Implementation**: `reference-implementation/react/src/components/Link.tsx`

### Input Component
- **Complexity**: Intermediate
- **Types**: 7 (text, password, email, search, tel, url, number)
- **Key Features**: Label, help text, error states, icon support
- **YAML**: `yaml/components/input.yaml`
- **Implementation**: `reference-implementation/react/src/components/Input.tsx`

### Card Component
- **Complexity**: Intermediate
- **Variants**: 4 (default, interactive, outlined, elevated)
- **Key Features**: Slotted content (header, media, content, footer), flexible sizing
- **YAML**: `yaml/components/card.yaml`
- **Implementation**: `reference-implementation/react/src/components/Card.tsx`

### Dialog Component
- **Complexity**: Advanced
- **Variants**: 3 (modal, alert, confirmation)
- **Key Features**: Focus trap, portal rendering, keyboard handling, backdrop click
- **YAML**: `yaml/components/dialog.yaml`
- **Implementation**: `reference-implementation/react/src/components/Dialog.tsx`

## Benefits of This Approach

### 1. Framework Agnostic
The same YAML specifications can guide implementations in:
- React
- Web Components
- Vue
- Angular
- iOS (Swift/SwiftUI)
- Android (Kotlin/Jetpack Compose)
- React Native
- Flutter

### 2. Single Source of Truth
- Design decisions documented in one place
- All platforms reference the same specifications
- Changes update all implementations

### 3. Explicit Documentation
- Every component aspect is documented
- Accessibility requirements are explicit
- Behaviors and states are clearly defined

### 4. Validation & Tooling
- YAML can be validated with JSON schemas
- Can generate TypeScript types from YAML
- Can detect drift between spec and implementation
- Can automate component generation

### 5. Version Control
- Design changes tracked in Git
- Easy to see evolution of components
- Can diff design decisions over time

### 6. Collaboration
- Designers can edit YAML without code knowledge
- Developers have clear implementation guide
- Product can understand component capabilities

## Future Enhancements

### 1. JSON Schema Validation
Create JSON schemas for component YAML files to ensure consistency:
```yaml
# yaml/schemas/component.schema.json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["metadata", "variants", "sizes", "props"]
}
```

### 2. Code Generation
Build tools to generate component scaffolds from YAML:
```bash
npm run generate:component button
# Generates React, Vue, Web Component from button.yaml
```

### 3. Visual Regression Testing
Use YAML to generate test cases:
```yaml
# Auto-generate tests for all variant/size combinations
```

### 4. Documentation Site
Build automated documentation from YAML:
```bash
npm run docs:build
# Generates component documentation site
```

### 5. Design Token Compilation
Convert YAML tokens to platform-specific formats:
```bash
npm run tokens:build
# Outputs: CSS, SCSS, iOS, Android, React Native
```

### 6. Figma Integration
Sync YAML specifications with Figma components:
```bash
npm run sync:figma
# Updates Figma library from YAML
```

## Getting Started

### View the Demo

```bash
cd reference-implementation/react
npm install
npm run dev
```

Visit `http://localhost:5173` to see all components in action.

### Add a New Component

1. **Create YAML specification** in `yaml/components/`
2. **Define design tokens** if needed in `yaml/tokens/`
3. **Implement component** following the YAML spec
4. **Add to demo page** to showcase variants and states

### Extend to Another Platform

1. **Read component YAML** specifications
2. **Map YAML concepts** to platform primitives
3. **Implement components** following all specifications
4. **Reference design tokens** in platform-specific format

## Conclusion

The "Design System as Data" approach separates component specifications from their implementations, enabling true cross-platform consistency while maintaining flexibility. By documenting design decisions as structured data, teams can:

- Build once, implement everywhere
- Maintain consistency across platforms
- Enable powerful tooling and automation
- Create a shared language between design and engineering

This proof-of-concept with 5 components demonstrates the viability of the approach. The next step is scaling to a full design system with 50+ components.

## Additional Resources

- [Components as Data Article](https://medium.com/@nathanacurtis/components-as-data-2be178777f21)
- YAML Specifications: `/yaml/components/`
- Design Tokens: `/yaml/tokens/`
- React Implementation: `/reference-implementation/react/`

## Contributing

To contribute to this project:

1. Add or modify YAML specifications
2. Update implementations to match YAML changes
3. Add tests for new components
4. Update documentation as needed

All changes should maintain the principle: **YAML is the source of truth**.

