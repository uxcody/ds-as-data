import { useState } from 'react'
import './CodeComparisonPage.css'

const CODE_EXAMPLES = {
  react: `// React Implementation
import { Button } from '@ds/react'

function MyApp() {
  return (
    <Button
      label="Save Changes"
      variant="primary"
      size="medium"
      onClick={handleSave}
      loading={isLoading}
    />
  )
}`,
  
  webComponents: `<!-- Web Components Implementation -->
<ds-button
  variant="primary"
  size="medium"
  loading="false"
>
  Save Changes
</ds-button>

<script>
  const button = document.querySelector('ds-button')
  button.addEventListener('click', handleSave)
</script>`,
  
  reactNative: `// React Native Implementation
import { Button } from '@ds/mobile'

function MyApp() {
  return (
    <Button
      label="Save Changes"
      variant="primary"
      size="medium"
      onPress={handleSave}
      loading={isLoading}
    />
  )
}`,
}

export default function CodeComparisonPage() {
  const [activeImplementation, setActiveImplementation] = useState<'react' | 'webComponents' | 'reactNative'>('react')

  return (
    <div className="code-comparison-page">
      <div className="page-header">
        <div className="container">
          <h1>Code Comparison</h1>
          <p className="page-intro">
            See how the same YAML specification drives implementations across different platforms. 
            Despite different syntaxes, all implementations follow the same contract.
          </p>
        </div>
      </div>

      <div className="container">
        {/* Same Spec, Different Implementations */}
        <section className="comparison-section">
          <h2>Same Spec, Different Implementations</h2>
          <p className="section-intro">
            The Button component defined in <code>button.yaml</code> is implemented in three different ways, 
            but all share the same variants, sizes, props, states, and accessibility requirements.
          </p>

          <div className="implementation-selector">
            <button
              className={`impl-tab ${activeImplementation === 'react' ? 'active' : ''}`}
              onClick={() => setActiveImplementation('react')}
            >
              ⚛️ React
            </button>
            <button
              className={`impl-tab ${activeImplementation === 'reactNative' ? 'active' : ''}`}
              onClick={() => setActiveImplementation('reactNative')}
            >
              📱 React Native
            </button>
            <button
              className={`impl-tab ${activeImplementation === 'webComponents' ? 'active' : ''}`}
              onClick={() => setActiveImplementation('webComponents')}
            >
              🌐 Web Components
            </button>
          </div>

          <div className="code-display">
            <pre><code>{CODE_EXAMPLES[activeImplementation]}</code></pre>
          </div>
        </section>

        {/* Key Differences */}
        <section className="differences-section">
          <h2>Key Differences</h2>
          <div className="differences-grid">
            <div className="difference-card">
              <h3>Prop Naming</h3>
              <div className="comparison-table">
                <div className="comparison-row">
                  <span className="label">React:</span>
                  <code>camelCase</code>
                  <span className="example">helpText</span>
                </div>
                <div className="comparison-row">
                  <span className="label">React Native:</span>
                  <code>camelCase</code>
                  <span className="example">helpText</span>
                </div>
                <div className="comparison-row">
                  <span className="label">Web Components:</span>
                  <code>kebab-case</code>
                  <span className="example">help-text</span>
                </div>
              </div>
            </div>

            <div className="difference-card">
              <h3>Event Handling</h3>
              <div className="comparison-table">
                <div className="comparison-row">
                  <span className="label">React:</span>
                  <code>onClick={'{handler}'}</code>
                </div>
                <div className="comparison-row">
                  <span className="label">React Native:</span>
                  <code>onPress={'{handler}'}</code>
                </div>
                <div className="comparison-row">
                  <span className="label">Web Components:</span>
                  <code>.addEventListener('click')</code>
                </div>
              </div>
            </div>

            <div className="difference-card">
              <h3>Children/Content</h3>
              <div className="comparison-table">
                <div className="comparison-row">
                  <span className="label">React:</span>
                  <code>children prop</code>
                </div>
                <div className="comparison-row">
                  <span className="label">React Native:</span>
                  <code>children prop</code>
                </div>
                <div className="comparison-row">
                  <span className="label">Web Components:</span>
                  <code>slots</code>
                </div>
              </div>
            </div>

            <div className="difference-card">
              <h3>Styling Approach</h3>
              <div className="comparison-table">
                <div className="comparison-row">
                  <span className="label">React:</span>
                  <code>CSS classes</code>
                </div>
                <div className="comparison-row">
                  <span className="label">React Native:</span>
                  <code>StyleSheet API</code>
                </div>
                <div className="comparison-row">
                  <span className="label">Web Components:</span>
                  <code>Shadow DOM CSS</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Similarities */}
        <section className="similarities-section">
          <h2>What Stays the Same</h2>
          <p className="section-intro">
            Despite different syntaxes, all implementations guarantee identical behavior and visual design.
          </p>

          <div className="similarities-grid">
            <div className="similarity-card">
              <div className="check-icon">✅</div>
              <h3>Same Variants</h3>
              <p>All support: primary, secondary, tertiary, as-link, icon-only</p>
            </div>
            <div className="similarity-card">
              <div className="check-icon">✅</div>
              <h3>Same Sizes</h3>
              <p>All implement: small, medium, large</p>
            </div>
            <div className="similarity-card">
              <div className="check-icon">✅</div>
              <h3>Same States</h3>
              <p>All handle: disabled, loading, hover, focus, active</p>
            </div>
            <div className="similarity-card">
              <div className="check-icon">✅</div>
              <h3>Same Accessibility</h3>
              <p>Identical ARIA attributes and keyboard support</p>
            </div>
            <div className="similarity-card">
              <div className="check-icon">✅</div>
              <h3>Same Design Tokens</h3>
              <p>All use the same colors, spacing, typography</p>
            </div>
            <div className="similarity-card">
              <div className="check-icon">✅</div>
              <h3>Same Behaviors</h3>
              <p>Identical interaction patterns and logic</p>
            </div>
          </div>
        </section>

        {/* Design Tokens */}
        <section className="tokens-section">
          <h2>Shared Design Tokens</h2>
          <p className="section-intro">
            All implementations reference the same design tokens, ensuring visual consistency across platforms.
          </p>

          <div className="tokens-example">
            <div className="token-category">
              <h3>Colors</h3>
              <pre><code>{`--color-brand-primary-600: #0074d4
--color-neutral-white: #ffffff`}</code></pre>
            </div>
            <div className="token-category">
              <h3>Spacing</h3>
              <pre><code>{`--spacing-2: 0.5rem  /* 8px */
--spacing-4: 1rem    /* 16px */`}</code></pre>
            </div>
            <div className="token-category">
              <h3>Typography</h3>
              <pre><code>{`--font-size-base: 1rem
--font-weight-medium: 500`}</code></pre>
            </div>
          </div>
        </section>

        {/* The Power of YAML */}
        <section className="power-section">
          <h2>The Power of YAML as Source of Truth</h2>
          <div className="power-grid">
            <div className="power-item">
              <h3>1️⃣ Consistency Guaranteed</h3>
              <p>Components look and behave identically because they follow the same specification</p>
            </div>
            <div className="power-item">
              <h3>2️⃣ Single Documentation</h3>
              <p>One YAML file documents all implementations—no need for platform-specific docs</p>
            </div>
            <div className="power-item">
              <h3>3️⃣ Easy Updates</h3>
              <p>Change the YAML once, update all implementations to match</p>
            </div>
            <div className="power-item">
              <h3>4️⃣ Platform Flexibility</h3>
              <p>Choose the right tool for each project without sacrificing consistency</p>
            </div>
            <div className="power-item">
              <h3>5️⃣ Future-Proof</h3>
              <p>Add new platforms (iOS, Android, Flutter) using the same specs</p>
            </div>
            <div className="power-item">
              <h3>6️⃣ Testable</h3>
              <p>Validate implementations against the YAML specification programmatically</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

