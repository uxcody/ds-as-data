# ds-as-data

Proof-of-concept framework-agnostic design system where component specs are defined in YAML and consumed by any platform. The same YAML definitions drive React, Web Components, iOS (React Native/Expo), and Android implementations.

## Structure
- `yaml/components/` — component YAML definitions (Button, Link, Input, Card, Dialog)
- `yaml/tokens/` — design tokens (colors, spacing, typography, effects)
- `yaml/schemas/` — JSON schemas for validating YAML
- `shared/styles/` — shared CSS for React & Web Components
- `reference-implementation/react/` — React + TypeScript implementation
- `reference-implementation/web-components/` — Web Components implementation
- `reference-implementation/mobile/` — React Native + Expo implementation
- `docs/` — documentation

## Philosophy
YAML files are the source of truth. Each component YAML contains metadata, variants, sizes, props, accessibility requirements, and platform-specific notes. Implementations read from YAML — they do not duplicate specs.

## No build step at the repo root
Each reference implementation has its own package.json and build process. To work on an implementation:
```bash
cd reference-implementation/react   # or web-components / mobile
npm install
npm run dev
```

## Notes
- This is a proof-of-concept / reference repo, not a published package
- The YAML token files are the canonical source — `yaml/tokens/colors.yaml`, `spacing.yaml`, `typography.yaml`, `effects.yaml`
- Mobile implementation uses Expo (React Native) — requires Expo CLI for running
