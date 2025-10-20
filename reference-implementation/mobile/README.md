# Design System - React Native Implementation

This is a React Native/Expo implementation of the design system components, built from the same YAML specifications used for React and Web Components.

## Overview

All components in this implementation are based on YAML specifications in `/yaml/components/`:
- Button (`button.yaml`)
- Link (`link.yaml`)
- Input (`input.yaml`)
- Card (`card.yaml`)
- Dialog (`dialog.yaml`)

## Setup

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Expo CLI (installed automatically)
- iOS Simulator (for macOS) or Android Emulator

### Installation

```bash
# From this directory
npm install
```

## Running the App

### iOS (macOS only)

```bash
npm run ios
```

### Android

```bash
npm run android
```

### Web (Browser)

```bash
npm run web
```

### Development Server

```bash
npm start
```

This will start the Expo development server. You can then:
- Press `i` to open iOS Simulator
- Press `a` to open Android Emulator
- Press `w` to open in web browser
- Scan the QR code with Expo Go app on your phone

## Project Structure

```
mobile/
├── App.tsx                 # Main demo app
├── src/
│   ├── components/        # Design system components
│   │   ├── Button.tsx     # Button component (from button.yaml)
│   │   ├── Link.tsx       # Link component (from link.yaml)
│   │   ├── Input.tsx      # Input component (from input.yaml)
│   │   ├── Card.tsx       # Card component (from card.yaml)
│   │   ├── Dialog.tsx     # Dialog component (from dialog.yaml)
│   │   └── index.ts       # Component exports
│   └── theme/
│       ├── tokens.ts      # Design tokens (converted from CSS)
│       └── index.ts       # Theme exports
├── package.json
├── tsconfig.json
└── README.md
```

## Design Tokens

Design tokens are defined in `src/theme/tokens.ts`, converted from the shared CSS Custom Properties in `/shared/styles/tokens.css`. This ensures consistency across all implementations (React, Web Components, and React Native).

## Components

### Button

Supports all variants, sizes, and states from the YAML spec:
- Variants: primary, secondary, tertiary, as-link, icon-only
- Sizes: small, medium, large
- States: default, disabled, loading

### Link

Supports all variants and features:
- Variants: inline, standalone, nav
- Features: external links, icons, active state

### Input

Supports all input types and states:
- Types: text, email, password, number, tel, url, search
- States: default, error, disabled, readonly
- Features: labels, helper text, error messages

### Card

Supports all variants and slots:
- Variants: default, outlined, elevated
- Slots: header, media, content, footer
- Features: interactive cards, custom padding

### Dialog

Supports all dialog types:
- Variants: modal, alert, confirmation
- Sizes: small, medium, large, fullscreen
- Features: overlay dismiss, close button, keyboard handling

## Implementation Notes

### React Native Specifics

1. **No CSS**: All styling is done with React Native's StyleSheet API
2. **Design Tokens**: Converted from CSS Custom Properties to JavaScript objects
3. **Touch Interactions**: Uses TouchableOpacity and Pressable for interactive elements
4. **Navigation**: Links use the Linking API to open URLs
5. **Modals**: Dialogs use React Native's Modal component
6. **Typography**: Platform-specific font rendering

### Differences from Web

- No hover states (mobile doesn't have mouse hover)
- Touch-based interactions instead of click
- Different shadow implementation (iOS vs Android)
- Platform-specific keyboard types for inputs
- No visited link state (not typically used in mobile apps)

## Design System as Data

This implementation proves that **a single source of truth (YAML) can drive multiple platform implementations**:

- ✅ **React (Web)** - `/reference-implementation/react/`
- ✅ **Web Components** - `/reference-implementation/web-components/`
- ✅ **React Native (Mobile)** - `/reference-implementation/mobile/` (this project)

All three implementations follow the same YAML specifications, demonstrating the power and flexibility of the "Design System as Data" approach.

## Extending the System

To add a new component:

1. Create the YAML specification in `/yaml/components/`
2. Implement the component in `src/components/` following the spec
3. Export it from `src/components/index.ts`
4. Add it to the demo in `App.tsx`

## Testing

Run the app in different environments to ensure components render correctly:
- iOS Simulator (Apple design)
- Android Emulator (Material design)
- Web browser (responsive)
- Physical device (Expo Go app)

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Design Tokens Specification](https://design-tokens.github.io/community-group/format/)
- [Nathan Curtis - Components as Data](https://medium.com/@nathanacurtis/components-as-data-2be178777f21)

