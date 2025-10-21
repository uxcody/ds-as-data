import { useState } from 'react'
import './YAMLSpecsPage.css'

const YAML_EXAMPLES = {
  button: `# Button Component
metadata:
  name: Button
  description: A clickable button element
  category: Actions
  version: 1.0.0
  complexity: basic

# Available variants
variants:
  - name: primary
    description: Main call-to-action button
    default: true
  - name: secondary
    description: Secondary action button
  - name: tertiary
    description: Low emphasis button
  - name: as-link
    description: Button styled as a text link
  - name: icon-only
    description: Button with only an icon

# Available sizes
sizes:
  - name: small
    description: Compact button
  - name: medium
    description: Standard button size
    default: true
  - name: large
    description: Larger button

# Component states
states:
  - name: hover
    description: Mouse cursor over button
    trigger: ":hover"
  - name: focus
    description: Button has keyboard focus
    trigger: ":focus"
    accessibility: true
  - name: disabled
    description: Button cannot be interacted with
    trigger: "disabled attribute"
    accessibility: true
  - name: loading
    description: Button is processing
    accessibility: true

# Props/Attributes
props:
  - name: label
    type: string
    description: Text content
    required: false
  - name: variant
    type: enum
    default: primary
    options: [primary, secondary, tertiary, as-link, icon-only]
  - name: size
    type: enum
    default: medium
    options: [small, medium, large]
  - name: disabled
    type: boolean
    default: false
  - name: loading
    type: boolean
    default: false

# Accessibility requirements
accessibility:
  role: button
  keyboard:
    - key: Enter
      action: Activate button
    - key: Space
      action: Activate button
  aria:
    - attribute: aria-label
      required: when icon-only variant
    - attribute: aria-disabled
      description: Alternative to disabled attribute`,

  tokens: `# Color Tokens
colors:
  brand:
    primary:
      600: "#0074d4"
      700: "#005bab"
  
  neutral:
    white: "#ffffff"
    900: "#171717"

  semantic:
    success:
      600: "#16a34a"
    error:
      600: "#dc2626"

# Spacing Tokens (8px base)
spacing:
  1: "0.25rem"  # 4px
  2: "0.5rem"   # 8px
  3: "0.75rem"  # 12px
  4: "1rem"     # 16px
  6: "1.5rem"   # 24px
  8: "2rem"     # 32px

# Typography Tokens
typography:
  fontFamily:
    sans: "Inter, system-ui, sans-serif"
  fontSize:
    sm: "0.875rem"
    base: "1rem"
    lg: "1.125rem"
  fontWeight:
    normal: 400
    medium: 500
    semibold: 600`,
}

export default function YAMLSpecsPage() {
  const [activeTab, setActiveTab] = useState<'button' | 'tokens'>('button')

  return (
    <div className="yaml-specs-page">
      <div className="page-header">
        <div className="container">
          <h1>YAML Specifications</h1>
          <p className="page-intro">
            Every component and design token is defined in structured YAML files. 
            These specifications serve as the single source of truth for all platform implementations.
          </p>
        </div>
      </div>

      <div className="container">
        <section className="yaml-section">
          <h2>What's in a YAML Spec?</h2>
          <div className="yaml-features">
            <div className="yaml-feature">
              <div className="feature-icon">📋</div>
              <h3>Metadata</h3>
              <p>Name, description, category, version, and complexity level</p>
            </div>
            <div className="yaml-feature">
              <div className="feature-icon">🎨</div>
              <h3>Variants & Sizes</h3>
              <p>All visual and behavioral variations with descriptions</p>
            </div>
            <div className="yaml-feature">
              <div className="feature-icon">🔧</div>
              <h3>Props & Types</h3>
              <p>Available properties with types, defaults, and requirements</p>
            </div>
            <div className="yaml-feature">
              <div className="feature-icon">♿</div>
              <h3>Accessibility</h3>
              <p>ARIA attributes, keyboard interactions, and focus management</p>
            </div>
            <div className="yaml-feature">
              <div className="feature-icon">🎭</div>
              <h3>States</h3>
              <p>All component states and their triggers (hover, focus, disabled, etc.)</p>
            </div>
            <div className="yaml-feature">
              <div className="feature-icon">📐</div>
              <h3>Design Tokens</h3>
              <p>References to colors, spacing, typography, and effects</p>
            </div>
          </div>
        </section>

        <section className="yaml-viewer-section">
          <h2>Example Specifications</h2>
          
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'button' ? 'active' : ''}`}
              onClick={() => setActiveTab('button')}
            >
              Button Component
            </button>
            <button
              className={`tab ${activeTab === 'tokens' ? 'active' : ''}`}
              onClick={() => setActiveTab('tokens')}
            >
              Design Tokens
            </button>
          </div>

          <div className="yaml-content">
            <pre><code>{YAML_EXAMPLES[activeTab]}</code></pre>
          </div>
        </section>

        <section className="yaml-benefits-section">
          <h2>Why YAML?</h2>
          <div className="benefits-list">
            <div className="benefit-item">
              <h3>✅ Human-Readable</h3>
              <p>Easy for designers and developers to read and edit without coding knowledge</p>
            </div>
            <div className="benefit-item">
              <h3>✅ Machine-Parseable</h3>
              <p>Can be consumed by any programming language and validated with JSON Schema</p>
            </div>
            <div className="benefit-item">
              <h3>✅ Version Controlled</h3>
              <p>Track changes in Git, review diffs, and see component evolution over time</p>
            </div>
            <div className="benefit-item">
              <h3>✅ Platform Agnostic</h3>
              <p>Not tied to any framework or language—works for web, mobile, and desktop</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>See the Full Specifications</h2>
          <p>
            View all component YAML files and design tokens in the GitHub repository.
          </p>
          <a 
            href="https://github.com/yourusername/ds-as-data/tree/main/yaml" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            View on GitHub
          </a>
        </section>
      </div>
    </div>
  )
}

