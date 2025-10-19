# Design System as Data

A proof-of-concept implementation of a framework-agnostic design system using structured YAML data to define components.

## Overview

This project demonstrates the "Design System as Data" approach, where component specifications are defined in YAML files that can be consumed by any framework or platform. The same YAML definitions can drive implementations in React, Web Components, iOS, Android, React Native, and more.

## Project Structure

```
ds-as-data/
├── yaml/
│   ├── components/       # Component YAML definitions
│   ├── tokens/          # Design tokens (colors, spacing, typography)
│   └── schemas/         # JSON schemas for validation
├── reference-implementation/
│   ├── react/           # React + TypeScript implementation
│   └── web-components/  # Web Components implementation
└── docs/                # Documentation
```

## Components

This proof-of-concept includes five components with increasing complexity:

1. **Button** - Basic interactive element with variants and sizes
2. **Link** - Navigation element with accessibility considerations
3. **Input** - Form input with validation states
4. **Card** - Container component with slots/composition
5. **Dialog** - Complex component with focus management and modal behavior

## Philosophy

The YAML files contain all the data necessary to implement components consistently across platforms:
- Component metadata and purpose
- Available variants and sizes
- Props/attributes with types and defaults
- States (hover, focus, disabled, etc.)
- Accessibility requirements
- Composition patterns for complex components

## Getting Started

See the [documentation](./docs/README.md) for detailed information about the approach and architecture.

### Reference Implementations

We have two reference implementations to prove the YAML specifications work across frameworks:

#### React Implementation

```bash
cd reference-implementation/react
npm install
npm run dev
# Visit http://localhost:5173
```

#### Web Components Implementation

```bash
cd reference-implementation/web-components
npm install
npm run dev
# Visit http://localhost:5174
```

**Both implementations use the exact same YAML specifications** - proving the approach is truly framework-agnostic!

## Proven Implementations

The YAML definitions have been successfully implemented in:
- ✅ **React** - Demonstrates component library approach
- ✅ **Web Components** - Proves framework-agnostic usage

## Future Platforms

The same YAML definitions can guide implementations in:
- iOS (Swift/SwiftUI)
- Android (Kotlin/Jetpack Compose)
- React Native
- Flutter
- Vue
- Angular
- And more...

## License

MIT

