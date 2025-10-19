# React Reference Implementation

This is the React + TypeScript reference implementation of the Design System as Data components.

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the component demo.

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
react/
├── src/
│   ├── components/           # Design system components
│   │   ├── Button.tsx
│   │   ├── Button.css
│   │   ├── Link.tsx
│   │   ├── Link.css
│   │   ├── Input.tsx
│   │   ├── Input.css
│   │   ├── Card.tsx
│   │   ├── Card.css
│   │   ├── Dialog.tsx
│   │   ├── Dialog.css
│   │   └── index.ts
│   ├── styles/
│   │   ├── tokens.css        # Design tokens as CSS custom properties
│   │   └── global.css        # Global styles
│   ├── App.tsx               # Main app component
│   ├── Demo.tsx              # Component demo page
│   └── main.tsx              # Entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Component Implementation Guidelines

Each component follows its YAML specification exactly:

1. **TypeScript Interface**: Reflects all props from YAML
2. **Component Header**: References YAML specification file
3. **Variants & Sizes**: Implemented as documented
4. **States**: All states handled (hover, focus, disabled, etc.)
5. **Accessibility**: ARIA attributes and keyboard interactions
6. **Styling**: Uses CSS custom properties from design tokens

## Design Tokens

Design tokens are defined in `/yaml/tokens/` and converted to CSS custom properties in `src/styles/tokens.css`.

To use tokens in your styles:

```css
.my-component {
  /* Colors */
  color: var(--color-brand-primary-600);
  background: var(--color-neutral-white);

  /* Spacing */
  padding: var(--spacing-4);
  gap: var(--spacing-2);

  /* Typography */
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);

  /* Effects */
  border-radius: var(--radius-base);
  box-shadow: var(--shadow-sm);
}
```

## Component Usage Examples

### Button

```tsx
import { Button } from './components';

<Button
  label="Save Changes"
  variant="primary"
  size="medium"
  onClick={handleSave}
/>
```

### Link

```tsx
import { Link } from './components';

<Link
  href="https://example.com"
  variant="standalone"
  external
  target="_blank"
>
  Visit Example
</Link>
```

### Input

```tsx
import { Input } from './components';

<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  required
  helpText="We'll never share your email"
  onChange={(e) => setEmail(e.target.value)}
/>
```

### Card

```tsx
import { Card } from './components';

<Card
  variant="interactive"
  header={<h3>Card Title</h3>}
  footer={<Button label="Action" />}
  onClick={handleCardClick}
>
  <p>Card content goes here</p>
</Card>
```

### Dialog

```tsx
import { Dialog } from './components';

<Dialog
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="small"
  variant="confirmation"
>
  <p>Are you sure you want to continue?</p>
</Dialog>
```

## Extending the Design System

To add a new component:

1. Create YAML specification in `/yaml/components/yourcomponent.yaml`
2. Create React component `src/components/YourComponent.tsx`
3. Create component styles `src/components/YourComponent.css`
4. Export from `src/components/index.ts`
5. Add examples to `src/Demo.tsx`

## Testing

The demo page (`src/Demo.tsx`) serves as visual testing for all components. It showcases:

- All variants for each component
- All sizes for each component
- Different states (disabled, loading, error, etc.)
- Real-world usage examples

## Related Documentation

- [Main Project README](../../README.md)
- [Detailed Documentation](../../docs/README.md)
- [YAML Component Specs](../../yaml/components/)
- [Design Tokens](../../yaml/tokens/)

## Component Implementation Checklist

When implementing a component, ensure:

- [ ] All props from YAML are implemented
- [ ] All variants are styled correctly
- [ ] All sizes are implemented
- [ ] All states work as expected (hover, focus, disabled, etc.)
- [ ] Accessibility requirements are met (ARIA, keyboard navigation)
- [ ] Component references YAML spec in header comment
- [ ] Styles use design token CSS custom properties
- [ ] Component is added to demo page
- [ ] TypeScript types match YAML prop definitions

