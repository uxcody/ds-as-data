# Web Components Reference Implementation

This is the Web Components (Custom Elements) reference implementation of the Design System as Data components.

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5174` to see the component demo.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
web-components/
├── src/
│   ├── components/           # Design system Web Components
│   │   ├── ds-button.js
│   │   ├── ds-link.js
│   │   ├── ds-input.js
│   │   ├── ds-card.js
│   │   └── ds-dialog.js
│   ├── styles/
│   │   ├── tokens.css        # Design tokens as CSS custom properties
│   │   ├── global.css        # Global styles
│   │   └── demo.css          # Demo page styles
│   └── main.js               # Main entry point and demo
├── index.html
├── package.json
└── vite.config.js
```

## Web Components Overview

All components are implemented as Custom Elements (Web Components v1) following the same YAML specifications as the React implementation.

### Component Usage

#### Button

```html
<ds-button variant="primary" size="medium">
  Click Me
</ds-button>

<ds-button variant="secondary" disabled>
  Disabled
</ds-button>

<ds-button variant="icon-only" aria-label="Favorite">
  ★
</ds-button>
```

#### Link

```html
<ds-link href="https://example.com" variant="standalone" external target="_blank">
  External Link
</ds-link>

<ds-link href="/about" variant="nav" aria-current="page">
  About
</ds-link>
```

#### Input

```html
<ds-input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  size="medium"
  help-text="We'll never share your email"
  required
></ds-input>

<ds-input
  label="Error Example"
  value="invalid"
  error-text="Please enter a valid value"
></ds-input>
```

#### Card

```html
<ds-card variant="default" padding="medium">
  <div slot="header">
    <h3>Card Title</h3>
  </div>

  <p>Card content goes here</p>

  <div slot="footer">
    <ds-button size="small">Action</ds-button>
  </div>
</ds-card>

<ds-card variant="interactive" interactive>
  <p>This card is clickable</p>
</ds-card>
```

#### Dialog

```html
<ds-dialog id="my-dialog" title="Confirm Action" size="small">
  <p>Are you sure you want to continue?</p>
  <div slot="footer">
    <ds-button variant="secondary">Cancel</ds-button>
    <ds-button variant="primary">Confirm</ds-button>
  </div>
</ds-dialog>

<script>
  const dialog = document.getElementById('my-dialog');
  dialog.open();  // Open dialog
  dialog.close(); // Close dialog
</script>
```

## Key Differences from React

### 1. Attributes vs Props
Web Components use HTML attributes (kebab-case) instead of React props (camelCase):

```html
<!-- Web Components -->
<ds-input help-text="Helper text" error-text="Error message"></ds-input>

<!-- React -->
<Input helpText="Helper text" errorText="Error message" />
```

### 2. Event Handling
Web Components use native DOM events:

```javascript
// Web Components
element.addEventListener('card-click', (e) => {
  console.log('Card clicked');
});

// React
<Card onClick={(e) => console.log('Card clicked')} />
```

### 3. Slots vs Children
Web Components use named slots for composition:

```html
<!-- Web Components -->
<ds-card>
  <div slot="header">Header content</div>
  <div>Main content</div>
  <div slot="footer">Footer content</div>
</ds-card>

<!-- React -->
<Card
  header={<div>Header content</div>}
  footer={<div>Footer content</div>}
>
  <div>Main content</div>
</Card>
```

### 4. Shadow DOM
Web Components use Shadow DOM for style encapsulation. This means:
- Styles don't leak in or out
- Global CSS doesn't affect component internals
- Components are truly isolated

## Design Tokens

The same design tokens from `/yaml/tokens/` are used, converted to CSS custom properties in `src/styles/tokens.css`.

Components reference these tokens in their Shadow DOM styles:

```javascript
.button-primary {
  background-color: var(--color-brand-primary-600);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-base);
}
```

## Browser Support

Web Components are supported in all modern browsers:
- Chrome 54+
- Firefox 63+
- Safari 10.1+
- Edge 79+

For older browsers, polyfills may be needed.

## Benefits of Web Components

1. **Framework Agnostic**: Can be used in React, Vue, Angular, or vanilla JS
2. **Native Browser Support**: No build step required (though we use Vite for dev)
3. **Style Encapsulation**: Shadow DOM prevents style conflicts
4. **Future Proof**: Web standard, will be supported forever
5. **Reusable Everywhere**: Same components work across all projects

## Comparison with React Implementation

Both implementations follow the **exact same YAML specifications**:
- Same variants and sizes
- Same props/attributes
- Same accessibility features
- Same visual design (using same tokens)
- Same behaviors and states

This proves the "Design System as Data" concept works across frameworks!

## Related Documentation

- [Main Project README](../../README.md)
- [Detailed Documentation](../../docs/README.md)
- [React Implementation](../react/)
- [YAML Component Specs](../../yaml/components/)
- [Design Tokens](../../yaml/tokens/)

## Next Steps

This Web Components implementation demonstrates that the YAML specifications can drive implementations in any technology. Next could be:
- iOS (SwiftUI)
- Android (Jetpack Compose)
- Flutter
- React Native
- Vue
- Angular

All following the same YAML source of truth!

