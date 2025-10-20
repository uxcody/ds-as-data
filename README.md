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
├── shared/
│   └── styles/          # Shared CSS for React & Web Components
├── reference-implementation/
│   ├── react/           # React + TypeScript implementation
│   ├── web-components/  # Web Components implementation
│   └── mobile/          # React Native + Expo implementation
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

We have three reference implementations to prove the YAML specifications work across web and mobile platforms:

#### React Implementation (Web)

```bash
cd reference-implementation/react
npm install
npm run dev
# Visit http://localhost:5173
```

#### Web Components Implementation (Web)

```bash
cd reference-implementation/web-components
npm install
npm run dev
# Visit http://localhost:5174
```

#### React Native Implementation (Mobile)

```bash
cd reference-implementation/mobile
npm install
npm start
# Press 'i' for iOS, 'a' for Android, or 'w' for web
```

**All three implementations use the exact same YAML specifications** - proving the approach is truly platform-agnostic!

## Proven Implementations

The YAML definitions have been successfully implemented in:
- ✅ **React (Web)** - Modern component library with hooks and TypeScript
- ✅ **Web Components** - Framework-agnostic custom elements
- ✅ **React Native (Mobile)** - Native mobile apps for iOS and Android

All implementations:
- Use the exact same YAML component specifications
- Share design tokens (colors, spacing, typography, etc.)
- Maintain pixel-perfect visual consistency (web implementations)
- Follow identical component behaviors and accessibility standards

## Future Platforms

The same YAML definitions can guide implementations in:
- iOS (Swift/SwiftUI)
- Android (Kotlin/Jetpack Compose)
- Flutter
- Vue
- Angular
- Svelte
- And more...

## License

MIT

