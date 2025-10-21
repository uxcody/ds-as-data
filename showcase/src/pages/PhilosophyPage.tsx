import './PhilosophyPage.css'

export default function PhilosophyPage() {
  return (
    <div className="philosophy-page">
      <div className="page-header">
        <div className="container">
          <h1>Philosophy & Approach</h1>
          <p className="page-intro">
            Understanding the principles behind Components as Data and why it matters for modern design systems.
          </p>
        </div>
      </div>

      <div className="container">
        {/* The Problem */}
        <section className="philosophy-section">
          <h2>The Problem with Traditional Design Systems</h2>
          <p className="section-text">
            Most design systems today are built around a specific technology stack. A React component library 
            with Storybook documentation might work great for web teams, but it leaves mobile and other platforms 
            to fend for themselves.
          </p>

          <div className="problem-boxes">
            <div className="problem-box">
              <div className="problem-number">1</div>
              <h3>Platform Silos</h3>
              <p>
                Each platform (web, iOS, Android, etc.) maintains its own implementation of the design system, 
                leading to duplicated effort and inconsistent results.
              </p>
            </div>
            <div className="problem-box">
              <div className="problem-number">2</div>
              <h3>Implementation as Documentation</h3>
              <p>
                Design decisions live in code, making them hard to discover, understand, and maintain. 
                Why is this button disabled? You have to dig through the implementation to find out.
              </p>
            </div>
            <div className="problem-box">
              <div className="problem-number">3</div>
              <h3>Inevitable Drift</h3>
              <p>
                Without a single source of truth, implementations diverge over time. The iOS button behaves 
                differently from the Android button, which differs from the web button.
              </p>
            </div>
          </div>
        </section>

        {/* The Solution */}
        <section className="philosophy-section section-blue">
          <h2>The Solution: Separate Specification from Implementation</h2>
          <p className="section-text">
            What if we could define a component once—its variants, states, props, accessibility requirements, 
            and behaviors—in a way that any platform could consume? That's the core idea behind Components as Data.
          </p>

          <div className="principle-boxes">
            <div className="principle-box">
              <div className="principle-icon">📋</div>
              <h3>Components are Specifications</h3>
              <p>
                A component is a contract: "I have these variants, these sizes, these states, and these 
                behaviors." The YAML file is that contract, independent of any implementation.
              </p>
            </div>
            <div className="principle-box">
              <div className="principle-icon">🌍</div>
              <h3>Implementations Follow the Spec</h3>
              <p>
                Whether you're building in React, Swift, Kotlin, or Flutter, you read the same YAML spec 
                and implement it for your platform. The spec ensures consistency.
              </p>
            </div>
            <div className="principle-box">
              <div className="principle-icon">✅</div>
              <h3>Single Source of Truth</h3>
              <p>
                The YAML file is the source of truth. Update it, and all platforms know what needs to change. 
                No more hunting through code to understand component requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="philosophy-section">
          <h2>Core Principles</h2>
          
          <div className="principle-list">
            <div className="principle-item">
              <h3>1. Platform Agnosticism</h3>
              <p>
                Component specifications should never assume a specific technology. A button is a button whether 
                it's rendered in React, UIKit, or Jetpack Compose. The YAML describes what it is, not how to build it.
              </p>
            </div>

            <div className="principle-item">
              <h3>2. Explicit Over Implicit</h3>
              <p>
                Everything should be documented explicitly in the specification. Don't leave implementation 
                details up to interpretation. If a component can be disabled, the YAML should say so. If it 
                needs an aria-label in certain cases, document that requirement.
              </p>
            </div>

            <div className="principle-item">
              <h3>3. Design Tokens as Data</h3>
              <p>
                Just like components, design tokens (colors, spacing, typography) should be defined as data. 
                This allows automated tooling to transform them into platform-specific formats: CSS variables, 
                iOS Swift code, Android XML, etc.
              </p>
            </div>

            <div className="principle-item">
              <h3>4. Accessibility by Default</h3>
              <p>
                Accessibility requirements should be part of the specification, not an afterthought. The YAML 
                includes ARIA attributes, keyboard interactions, and screen reader considerations that every 
                implementation must honor.
              </p>
            </div>

            <div className="principle-item">
              <h3>5. Validated and Versioned</h3>
              <p>
                YAML specifications can be validated with JSON schemas and versioned with Git. This brings 
                design system changes under the same rigorous process as code changes: reviews, diffs, rollbacks.
              </p>
            </div>

            <div className="principle-item">
              <h3>6. Enable Automation</h3>
              <p>
                Structured data enables powerful tooling: generate component scaffolds, detect drift between 
                spec and implementation, create visual regression tests, build documentation sites automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="philosophy-section section-blue">
          <h2>Why This Matters</h2>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>🚀 Faster Multi-Platform Development</h3>
              <p>
                New platforms can get started immediately by reading the YAML specs. No need to reverse-engineer 
                design decisions from existing implementations.
              </p>
            </div>

            <div className="benefit-card">
              <h3>🎯 Guaranteed Consistency</h3>
              <p>
                When all platforms follow the same specification, consistency is guaranteed. No more "the iOS 
                button doesn't match the web button" issues.
              </p>
            </div>

            <div className="benefit-card">
              <h3>📚 Better Documentation</h3>
              <p>
                The YAML is living documentation that's always up-to-date. Designers and developers can 
                understand component capabilities without reading implementation code.
              </p>
            </div>

            <div className="benefit-card">
              <h3>🔄 Easier Updates</h3>
              <p>
                Need to add a new variant? Update the YAML and notify all platform teams. The spec tells 
                them exactly what needs to change.
              </p>
            </div>

            <div className="benefit-card">
              <h3>🤝 Improved Collaboration</h3>
              <p>
                Designers can contribute to the design system by editing YAML files. Product managers can 
                understand component capabilities. Everyone speaks the same language.
              </p>
            </div>

            <div className="benefit-card">
              <h3>🔮 Future-Proof</h3>
              <p>
                New frameworks and platforms will come and go, but the YAML specs remain constant. Your 
                design system isn't tied to today's technology choices.
              </p>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="philosophy-section">
          <h2>Who Should Use This Approach?</h2>
          
          <div className="audience-grid">
            <div className="audience-card">
              <h3>✅ Multi-Platform Products</h3>
              <p>
                If you're building for web, iOS, Android, and potentially more platforms, this approach ensures 
                consistency across all of them without duplicating design decisions.
              </p>
            </div>

            <div className="audience-card">
              <h3>✅ Large Teams</h3>
              <p>
                When multiple teams work on the same design system, YAML specs provide clear contracts and 
                prevent miscommunication about component behavior.
              </p>
            </div>

            <div className="audience-card">
              <h3>✅ Design System Teams</h3>
              <p>
                For teams dedicated to maintaining a design system, this approach reduces maintenance burden 
                and makes it easier to support multiple platforms.
              </p>
            </div>

            <div className="audience-card">
              <h3>⚠️ May Be Overkill For</h3>
              <p>
                Small projects with a single platform and small team might find this approach too heavy. The 
                benefits shine when you have multiple platforms and teams to coordinate.
              </p>
            </div>
          </div>
        </section>

        {/* Attribution */}
        <section className="philosophy-section attribution-section">
          <h2>About the Methodology</h2>
          <p className="section-text">
            This approach is based on{' '}
            <a 
              href="https://medium.com/@nathanacurtis/components-as-data-2be178777f21" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Nathan Curtis's article "Components as Data"
            </a>
            {' '}published on Medium. Nathan is a design systems expert who has worked with numerous 
            organizations to scale their design systems effectively.
          </p>
          <p className="section-text">
            This project is a proof-of-concept implementation demonstrating how the methodology works in 
            practice with real components across multiple platforms.
          </p>
        </section>
      </div>
    </div>
  )
}

