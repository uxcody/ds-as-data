# Shared Component Styles

This directory contains the **single source of truth** for all component styling in the Design System as Data project.

## Philosophy

Following the "Design System as Data" approach, component styles are defined once and consumed by all implementations (React, Web Components, future frameworks). This ensures:

- ✅ **Perfect consistency** across all implementations
- ✅ **Single point of maintenance** - update once, applies everywhere
- ✅ **Impossible to drift** - no duplicate CSS to keep in sync
- ✅ **Framework agnostic** - pure CSS works anywhere

## Structure

```
shared/styles/
├── tokens.css              # Design tokens (CSS Custom Properties)
├── components/
│   ├── button.css          # Button component styles
│   ├── link.css            # Link component styles (TODO)
│   ├── input.css           # Input component styles (TODO)
│   ├── card.css            # Card component styles (TODO)
│   └── dialog.css          # Dialog component styles (TODO)
└── README.md              # This file
```

## Class Naming Convention

All components use **BEM (Block Element Modifier)** naming:

```css
/* Block */
.ds-button { }

/* Elements */
.ds-button__icon { }
.ds-button__label { }
.ds-button__spinner { }

/* Modifiers */
.ds-button--primary { }
.ds-button--secondary { }
.ds-button--small { }
.ds-button--large { }
.ds-button--loading { }
```

### Naming Pattern:
- **Block**: `.ds-{component}`
- **Element**: `.ds-{component}__{element}`
- **Modifier**: `.ds-{component}--{modifier}`

## Usage in Different Frameworks

### React

React imports shared CSS directly:

```tsx
import '../../../shared/styles/components/button.css';

export const Button = ({ variant, size }) => (
  <button className={`ds-button ds-button--${variant} ds-button--${size}`}>
    Click me
  </button>
);
```

### Web Components

Web Components use [Constructable Stylesheets](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/CSSStyleSheet) to inject shared styles into Shadow DOM:

```javascript
import buttonStyles from '../../../shared/styles/components/button.css?inline';

const sheet = new CSSStyleSheet();
sheet.replaceSync(buttonStyles);

class DSButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [sheet];
  }
}
```

**Note:** The `?inline` suffix tells Vite to import the CSS as a string.

### Future Implementations

Other frameworks can consume these styles in their preferred way:
- **Vue**: Import directly like React
- **Angular**: Add to component styleUrls
- **Svelte**: Import in component script
- **Native**: Convert CSS to platform-specific styles

## Design Tokens

All component styles reference design tokens from `tokens.css`:

```css
.ds-button--primary {
  background-color: var(--color-brand-primary-600);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
}
```

Tokens are defined in `/yaml/tokens/` and converted to CSS custom properties.

## YAML Specifications

Every component CSS file corresponds to a YAML specification:

| CSS File | YAML Spec | Status |
|----------|-----------|--------|
| `button.css` | `/yaml/components/button.yaml` | ✅ Complete |
| `link.css` | `/yaml/components/link.yaml` | 🚧 TODO |
| `input.css` | `/yaml/components/input.yaml` | 🚧 TODO |
| `card.css` | `/yaml/components/card.yaml` | 🚧 TODO |
| `dialog.css` | `/yaml/components/dialog.yaml` | 🚧 TODO |

Each CSS file includes a header comment referencing its YAML spec.

## Adding a New Component

1. Create `/shared/styles/components/{component}.css`
2. Add header comment referencing YAML spec
3. Use BEM naming convention: `.ds-{component}*`
4. Reference design tokens (not hard-coded values)
5. Update React implementation to import shared CSS
6. Update Web Components to use Constructable Stylesheets
7. Verify both implementations look identical

## Benefits of This Approach

### Before (Duplicated Styles)
```
React: Button.css (226 lines)
Web Components: ds-button.js inline styles (200 lines)
Total: 426 lines

❌ Manual sync required
❌ Easy to introduce inconsistencies
❌ 2x maintenance burden
```

### After (Shared Styles)
```
Shared: button.css (240 lines)
React: Button.tsx (imports shared CSS)
Web Components: ds-button.js (adopts shared CSS)
Total: 240 lines

✅ Single source of truth
✅ Impossible to be inconsistent
✅ 1x maintenance burden
```

**~45% reduction in total CSS code!**

## Browser Support

### Constructable Stylesheets
- Chrome 73+
- Edge 79+
- Firefox 101+
- Safari 16.4+

All modern browsers support Constructable Stylesheets. For older browsers, use the style tag injection fallback.

## Related Documentation

- [Main README](../../README.md)
- [YAML Component Specs](../../yaml/components/)
- [Design Tokens](../../yaml/tokens/)
- [React Implementation](../../reference-implementation/react/)
- [Web Components Implementation](../../reference-implementation/web-components/)


