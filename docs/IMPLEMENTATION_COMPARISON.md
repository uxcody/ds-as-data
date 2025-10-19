# Implementation Comparison: React vs Web Components

This document demonstrates how the same YAML specifications drive both React and Web Components implementations.

## Side-by-Side Comparison

### Button Component

#### YAML Specification
From `/yaml/components/button.yaml`:
```yaml
variants:
  - primary
  - secondary
  - tertiary
  - as-link
  - icon-only

sizes:
  - small
  - medium
  - large

props:
  - label: string
  - variant: enum
  - size: enum
  - disabled: boolean
  - loading: boolean
```

#### React Implementation
```tsx
// TypeScript interface matches YAML props
interface ButtonProps {
  label?: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'as-link' | 'icon-only';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

// Usage
<Button
  label="Save"
  variant="primary"
  size="medium"
  disabled={false}
/>
```

#### Web Components Implementation
```javascript
// Custom Element follows same spec
class DSButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'loading'];
  }
}

// Usage (kebab-case attributes)
<ds-button
  variant="primary"
  size="medium"
>
  Save
</ds-button>
```

### Link Component

#### YAML Specification
```yaml
variants:
  - inline
  - standalone
  - nav

props:
  - href: string (required)
  - variant: enum
  - target: enum
  - external: boolean
  - aria-current: enum
```

#### React Implementation
```tsx
<Link
  href="https://example.com"
  variant="standalone"
  external
  target="_blank"
>
  Visit Site
</Link>
```

#### Web Components Implementation
```html
<ds-link
  href="https://example.com"
  variant="standalone"
  external
  target="_blank"
>
  Visit Site
</ds-link>
```

### Input Component

#### YAML Specification
```yaml
types:
  - text, password, email, search

props:
  - label: string
  - type: enum
  - value: string
  - placeholder: string
  - help-text: string
  - error-text: string
  - required: boolean
  - disabled: boolean
```

#### React Implementation
```tsx
<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  helpText="We'll never share your email"
  errorText={error}
  required
  onChange={(e) => setValue(e.target.value)}
/>
```

#### Web Components Implementation
```html
<ds-input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  help-text="We'll never share your email"
  error-text=""
  required
></ds-input>

<script>
  const input = document.querySelector('ds-input');
  input.addEventListener('input', (e) => {
    console.log(input.value);
  });
</script>
```

### Card Component

#### YAML Specification
```yaml
variants:
  - default
  - interactive
  - outlined
  - elevated

slots:
  - header
  - media
  - content
  - footer
```

#### React Implementation
```tsx
<Card
  variant="interactive"
  header={<h3>Title</h3>}
  footer={<Button>Action</Button>}
  onClick={handleClick}
>
  <p>Card content</p>
</Card>
```

#### Web Components Implementation
```html
<ds-card variant="interactive" interactive>
  <div slot="header">
    <h3>Title</h3>
  </div>

  <p>Card content</p>

  <div slot="footer">
    <ds-button>Action</ds-button>
  </div>
</ds-card>

<script>
  card.addEventListener('card-click', handleClick);
</script>
```

### Dialog Component

#### YAML Specification
```yaml
variants:
  - modal
  - alert
  - confirmation

sizes:
  - small
  - medium
  - large
  - fullscreen

props:
  - open: boolean
  - title: string
  - closeOnOverlayClick: boolean
  - closeOnEscape: boolean
```

#### React Implementation
```tsx
const [open, setOpen] = useState(false);

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Confirm Action"
  size="small"
  variant="confirmation"
>
  <p>Are you sure?</p>
</Dialog>
```

#### Web Components Implementation
```html
<ds-dialog
  id="my-dialog"
  title="Confirm Action"
  size="small"
  variant="confirmation"
>
  <p>Are you sure?</p>
  <div slot="footer">
    <ds-button>Cancel</ds-button>
    <ds-button>Confirm</ds-button>
  </div>
</ds-dialog>

<script>
  const dialog = document.getElementById('my-dialog');
  dialog.open();   // Open
  dialog.close();  // Close
</script>
```

## Key Differences

### 1. Prop Naming Convention

| Aspect | React | Web Components |
|--------|-------|----------------|
| Case | camelCase | kebab-case |
| Example | `helpText` | `help-text` |
| Reason | JavaScript convention | HTML attribute convention |

### 2. Children/Content

| Aspect | React | Web Components |
|--------|-------|----------------|
| Simple | `<Button>Text</Button>` | `<ds-button>Text</ds-button>` |
| Props | `children` prop | Default slot |
| Multiple | Multiple props | Named slots |

### 3. Event Handling

| Aspect | React | Web Components |
|--------|-------|----------------|
| Syntax | `onClick={handler}` | `.addEventListener('click', handler)` |
| Custom Events | `onCustomEvent` | `.addEventListener('custom-event')` |

### 4. State Management

| Aspect | React | Web Components |
|--------|-------|----------------|
| Approach | Props + useState | Attributes + properties |
| Example | `const [open, setOpen] = useState(false)` | `dialog.open()` / `dialog.close()` |

## Similarities

Despite different syntaxes, both implementations:

### ✅ Same Variants
Both support identical variant options as defined in YAML

### ✅ Same Sizes
Both implement the same size scale from tokens

### ✅ Same Accessibility
Both include identical ARIA attributes and keyboard support

### ✅ Same Visual Design
Both use the same design tokens (CSS custom properties)

### ✅ Same Behaviors
Both implement identical interaction patterns

### ✅ Same States
Both handle disabled, loading, error, etc. the same way

## Design Token Usage

Both implementations use the **exact same CSS custom properties**:

```css
/* From yaml/tokens/colors.yaml */
--color-brand-primary-600: #0074d4;
--color-neutral-white: #ffffff;

/* From yaml/tokens/spacing.yaml */
--spacing-4: 1rem;
--spacing-6: 1.5rem;

/* From yaml/tokens/typography.yaml */
--font-size-base: 1rem;
--font-weight-medium: 500;
```

### React
```css
.ds-button--primary {
  background-color: var(--color-brand-primary-600);
  padding: var(--spacing-2) var(--spacing-4);
}
```

### Web Components
```javascript
const template = `
  <style>
    .variant-primary {
      background-color: var(--color-brand-primary-600);
      padding: var(--spacing-2) var(--spacing-4);
    }
  </style>
`;
```

## Validation Against YAML

Both implementations can be validated against the YAML specs:

### Checklist for Both

- [ ] All variants from YAML are implemented
- [ ] All sizes from YAML are implemented
- [ ] All props from YAML are available
- [ ] All states from YAML work correctly
- [ ] All accessibility requirements met
- [ ] Design tokens used for all styling
- [ ] Component behavior matches specification

## Advantages of Each

### React Advantages
- Strong TypeScript support
- Rich ecosystem and tooling
- Great developer experience
- Component composition patterns
- State management integration

### Web Components Advantages
- Framework agnostic (works anywhere)
- Native browser support
- Style encapsulation (Shadow DOM)
- Can be used in React, Vue, Angular
- Future-proof web standard

## The Power of YAML as Source of Truth

Because both implementations follow the same YAML:

1. **Consistency Guaranteed**: Components look and behave identically
2. **Single Documentation**: One YAML file documents both implementations
3. **Easy Updates**: Change YAML, update both implementations
4. **Platform Flexibility**: Choose the right tool for each project
5. **Future Implementations**: iOS, Android can follow same spec

## Testing Consistency

To verify both implementations match the YAML:

```javascript
// Test checklist (applies to both)
describe('Button Component', () => {
  it('implements all YAML variants', () => {
    ['primary', 'secondary', 'tertiary', 'as-link', 'icon-only']
      .forEach(variant => {
        // Test variant exists and works
      });
  });

  it('implements all YAML sizes', () => {
    ['small', 'medium', 'large'].forEach(size => {
      // Test size exists and works
    });
  });

  it('handles all YAML states', () => {
    // Test disabled, loading, etc.
  });

  it('meets YAML accessibility requirements', () => {
    // Test ARIA, keyboard, focus
  });
});
```

## Conclusion

This comparison demonstrates that the "Design System as Data" approach successfully enables:

- ✅ **Framework Independence**: Same design, different implementations
- ✅ **Consistency**: Guaranteed through shared specification
- ✅ **Flexibility**: Choose the right tool for the job
- ✅ **Scalability**: Add more frameworks without redesigning
- ✅ **Maintainability**: Single source of truth for all platforms

The YAML specifications prove their worth by successfully driving two completely different technical implementations to produce visually and functionally identical results.

