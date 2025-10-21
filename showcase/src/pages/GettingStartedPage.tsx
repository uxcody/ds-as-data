import './GettingStartedPage.css'

export default function GettingStartedPage() {
  return (
    <div className="getting-started-page">
      <div className="page-header">
        <div className="container">
          <h1>Getting Started</h1>
          <p className="page-intro">
            Learn how to implement Components as Data in your own design system.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Quick Start */}
        <section className="getting-started-section">
          <h2>Quick Start</h2>
          <p className="section-intro">
            Clone this repository to see the full implementation and start experimenting.
          </p>

          <div className="code-block">
            <pre><code>{`# Clone the repository
git clone https://github.com/yourusername/ds-as-data.git
cd ds-as-data

# Try the React implementation
cd reference-implementation/react
npm install
npm run dev
# Visit http://localhost:5173

# Try the Web Components implementation
cd ../web-components
npm install
npm run dev
# Visit http://localhost:5174

# Try the React Native implementation
cd ../mobile
npm install
npm start
# Press 'i' for iOS, 'a' for Android, or 'w' for web`}</code></pre>
          </div>
        </section>

        {/* Step by Step */}
        <section className="getting-started-section">
          <h2>Building Your Own Components as Data</h2>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Start with Design Tokens</h3>
                <p>
                  Define your design tokens (colors, spacing, typography, effects) in YAML files. 
                  These are the foundation of your design system.
                </p>
                <div className="step-code">
                  <pre><code>{`# yaml/tokens/colors.yaml
colors:
  brand:
    primary:
      600: "#0074d4"
  neutral:
    white: "#ffffff"
    900: "#171717"`}</code></pre>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Define Component Specifications</h3>
                <p>
                  Create YAML files for each component with metadata, variants, sizes, states, props, 
                  and accessibility requirements.
                </p>
                <div className="step-code">
                  <pre><code>{`# yaml/components/button.yaml
metadata:
  name: Button
  version: 1.0.0
  
variants:
  - name: primary
    default: true
  - name: secondary
    
sizes:
  - name: medium
    default: true`}</code></pre>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implement for Your Platform</h3>
                <p>
                  Use the YAML specifications to guide your implementation. Each platform reads the same 
                  spec and implements it according to platform conventions.
                </p>
                <div className="step-code">
                  <pre><code>{`// React implementation
interface ButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  // ... all props from YAML
}

export function Button(props: ButtonProps) {
  // Implementation based on YAML spec
}`}</code></pre>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Add Comments Referencing YAML</h3>
                <p>
                  Link your implementation back to the YAML specification so developers know where to 
                  find the source of truth.
                </p>
                <div className="step-code">
                  <pre><code>{`/**
 * Button Component
 * 
 * Implementation based on:
 * /yaml/components/button.yaml
 * 
 * Variants: primary, secondary, tertiary
 * Sizes: small, medium, large
 */`}</code></pre>
                </div>
              </div>
            </div>

            <div className="step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Validate and Test</h3>
                <p>
                  Create tests that verify your implementation matches the YAML specification. Test all 
                  variants, sizes, states, and accessibility requirements.
                </p>
                <div className="step-code">
                  <pre><code>{`describe('Button', () => {
  it('implements all YAML variants', () => {
    variants.forEach(variant => {
      // Test each variant
    })
  })
  
  it('meets accessibility requirements', () => {
    // Test ARIA, keyboard, etc.
  })
})`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="getting-started-section">
          <h2>Best Practices</h2>
          
          <div className="practices-grid">
            <div className="practice-card">
              <h3>📝 Be Thorough</h3>
              <p>
                Document everything in the YAML: all variants, all states, all props. Don't leave anything 
                to interpretation. If it's not in the YAML, it shouldn't be in the implementation.
              </p>
            </div>

            <div className="practice-card">
              <h3>♿ Accessibility First</h3>
              <p>
                Include accessibility requirements in every component specification. Document required ARIA 
                attributes, keyboard interactions, and screen reader considerations.
              </p>
            </div>

            <div className="practice-card">
              <h3>🏷️ Use Semantic Naming</h3>
              <p>
                Name variants and props based on their purpose, not their appearance. Use "primary" instead 
                of "blue", "emphasized" instead of "bold".
              </p>
            </div>

            <div className="practice-card">
              <h3>📐 Reference Design Tokens</h3>
              <p>
                Component styles should reference design tokens, not hard-coded values. This ensures 
                consistency and makes global changes easier.
              </p>
            </div>

            <div className="practice-card">
              <h3>📖 Document Behaviors</h3>
              <p>
                Describe how components should behave in the YAML. What happens when disabled? How does 
                loading state work? Be explicit.
              </p>
            </div>

            <div className="practice-card">
              <h3>🔄 Version Your Specs</h3>
              <p>
                Use semantic versioning for component specifications. This helps teams understand the 
                impact of changes and manage updates across platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="getting-started-section">
          <h2>Potential Tooling</h2>
          <p className="section-intro">
            While this project is a manual implementation, structured data enables powerful automation.
          </p>

          <div className="tools-list">
            <div className="tool-item">
              <h3>🔍 JSON Schema Validation</h3>
              <p>
                Create JSON schemas to validate YAML files and ensure they follow the correct structure. 
                This catches errors before implementation.
              </p>
            </div>

            <div className="tool-item">
              <h3>🏗️ Code Generation</h3>
              <p>
                Generate component scaffolds, TypeScript types, and documentation from YAML files. This 
                reduces boilerplate and ensures consistency.
              </p>
            </div>

            <div className="tool-item">
              <h3>📊 Drift Detection</h3>
              <p>
                Compare implementations against YAML specs to detect when code has drifted from the 
                specification. Alert teams when components don't match.
              </p>
            </div>

            <div className="tool-item">
              <h3>📸 Visual Regression Testing</h3>
              <p>
                Generate visual regression tests for all variant and size combinations automatically from 
                YAML specifications.
              </p>
            </div>

            <div className="tool-item">
              <h3>📚 Documentation Generation</h3>
              <p>
                Build component documentation sites automatically from YAML files. Keep docs in sync with 
                specifications without manual updates.
              </p>
            </div>

            <div className="tool-item">
              <h3>🔄 Token Compilation</h3>
              <p>
                Transform design tokens from YAML into platform-specific formats: CSS variables, SCSS, 
                iOS Swift, Android XML, React Native.
              </p>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="getting-started-section resources-section">
          <h2>Resources</h2>
          
          <div className="resources-grid">
            <div className="resource-card">
              <h3>📄 Original Article</h3>
              <p>
                Read Nathan Curtis's{' '}
                <a 
                  href="https://medium.com/@nathanacurtis/components-as-data-2be178777f21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  "Components as Data"
                </a>
                {' '}article on Medium for the full methodology and reasoning.
              </p>
            </div>

            <div className="resource-card">
              <h3>💻 GitHub Repository</h3>
              <p>
                View the full source code, YAML specifications, and all three reference implementations 
                on{' '}
                <a 
                  href="https://github.com/yourusername/ds-as-data" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                .
              </p>
            </div>

            <div className="resource-card">
              <h3>📋 YAML Specifications</h3>
              <p>
                Explore all{' '}
                <a href="/yaml-specs">component YAML files and design tokens</a>
                {' '}to see how components are specified in detail.
              </p>
            </div>

            <div className="resource-card">
              <h3>🔨 Live Components</h3>
              <p>
                Interact with{' '}
                <a href="/components">live component demos</a>
                {' '}to see how YAML specifications translate into working implementations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-final">
          <h2>Ready to Get Started?</h2>
          <p>
            Clone the repository and start experimenting with Components as Data in your own design system.
          </p>
          <a 
            href="https://github.com/yourusername/ds-as-data" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            View on GitHub
          </a>
        </section>
      </div>
    </div>
  )
}

