import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Components as Data
            </h1>
            <p className="hero-subtitle">
              Define components independent of platforms to scale a design system's impact
            </p>
            <p className="hero-description">
              A methodology for creating truly platform-agnostic design systems using structured YAML 
              specifications that drive implementations across React, Web Components, iOS, Android, and more.
            </p>
            <div className="hero-actions">
              <Link to="/components" className="btn btn-primary">
                View Live Demo
              </Link>
              <Link to="/getting-started" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="section section-gray">
        <div className="container">
          <h2>The Challenge</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">🔒</div>
              <h3>Platform Lock-in</h3>
              <p>React components don't help iOS or Android teams. Each platform reinvents the wheel.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">🔄</div>
              <h3>Duplication</h3>
              <p>Every platform reimplements the same design decisions, wasting time and effort.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📉</div>
              <h3>Design Drift</h3>
              <p>Without a single source of truth, implementations diverge and consistency breaks down.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📝</div>
              <h3>Documentation Debt</h3>
              <p>Design decisions exist only in implementation code, making them hard to discover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="section">
        <div className="container">
          <h2>The Solution: Data-Driven Design</h2>
          <p className="section-intro">
            By defining components as structured data (YAML), we create a <strong>single source of truth</strong> 
            that guides implementation across all platforms.
          </p>

          <div className="solution-flow">
            <div className="flow-item">
              <div className="flow-number">1</div>
              <h3>Define Once</h3>
              <p>Write component specifications in YAML with all variants, states, props, and accessibility requirements</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-number">2</div>
              <h3>Implement Everywhere</h3>
              <p>Use the YAML specs to guide implementations in React, Vue, iOS, Android, Flutter, etc.</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-item">
              <div className="flow-number">3</div>
              <h3>Guarantee Consistency</h3>
              <p>All platforms follow the same spec, ensuring identical behavior and visual design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-gray">
        <div className="container">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>✅ Framework Agnostic</h3>
              <p>One spec works for React, Web Components, Vue, Angular, iOS, Android, Flutter—any platform</p>
            </div>
            <div className="benefit-card">
              <h3>🎯 Single Source of Truth</h3>
              <p>Design decisions documented in one place, all platforms reference the same specifications</p>
            </div>
            <div className="benefit-card">
              <h3>📖 Explicit Documentation</h3>
              <p>Every component aspect is documented: variants, states, accessibility, behaviors</p>
            </div>
            <div className="benefit-card">
              <h3>🛠️ Enables Tooling</h3>
              <p>Validate specs, generate code, detect drift, automate component generation</p>
            </div>
            <div className="benefit-card">
              <h3>📜 Version Control</h3>
              <p>Design changes tracked in Git, easy to see evolution and diff design decisions</p>
            </div>
            <div className="benefit-card">
              <h3>🤝 Better Collaboration</h3>
              <p>Shared language between design and engineering, designers can edit YAML without code</p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section className="section">
        <div className="container">
          <h2>See It In Action</h2>
          <p className="section-intro">
            This project includes 5 components with increasing complexity, each defined in YAML and 
            implemented across three platforms—all using the exact same specifications.
          </p>

          <div className="demo-platforms">
            <div className="platform-card">
              <div className="platform-icon">⚛️</div>
              <h3>React</h3>
              <p>TypeScript components with hooks</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">🌐</div>
              <h3>Web Components</h3>
              <p>Framework-agnostic custom elements</p>
            </div>
            <div className="platform-card">
              <div className="platform-icon">📱</div>
              <h3>React Native</h3>
              <p>Native iOS & Android apps</p>
            </div>
          </div>

          <div className="cta-section">
            <Link to="/components" className="btn btn-primary btn-large">
              Explore Live Components
            </Link>
          </div>
        </div>
      </section>

      {/* Components Preview */}
      <section className="section section-gray">
        <div className="container">
          <h2>Components Included</h2>
          <div className="components-list">
            <div className="component-item">
              <div className="component-header">
                <h3>Button</h3>
                <span className="complexity-badge basic">Basic</span>
              </div>
              <p>5 variants, 3 sizes, loading state, full accessibility support</p>
            </div>
            <div className="component-item">
              <div className="component-header">
                <h3>Link</h3>
                <span className="complexity-badge basic">Basic</span>
              </div>
              <p>3 variants, external link handling, visited state, current page indication</p>
            </div>
            <div className="component-item">
              <div className="component-header">
                <h3>Input</h3>
                <span className="complexity-badge intermediate">Intermediate</span>
              </div>
              <p>7 types, label and help text, error states, icon support</p>
            </div>
            <div className="component-item">
              <div className="component-header">
                <h3>Card</h3>
                <span className="complexity-badge intermediate">Intermediate</span>
              </div>
              <p>4 variants, slotted content (header, media, content, footer)</p>
            </div>
            <div className="component-item">
              <div className="component-header">
                <h3>Dialog</h3>
                <span className="complexity-badge advanced">Advanced</span>
              </div>
              <p>3 variants, 4 sizes, focus trap, portal rendering, keyboard handling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Credits */}
      <section className="section">
        <div className="container">
          <div className="credits">
            <h2>About This Methodology</h2>
            <p>
              This approach is based on Nathan Curtis's article{' '}
              <a 
                href="https://medium.com/@nathanacurtis/components-as-data-2be178777f21" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                "Components as Data: How to Define Components Independent of Platforms to Scale a System's Impact"
              </a>
              . This website is a proof-of-concept implementation demonstrating the viability and power of 
              treating design system components as structured data.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

