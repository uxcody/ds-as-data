import { Link, useLocation } from 'react-router-dom'
import './Layout.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/components', label: 'Components' },
    { path: '/yaml-specs', label: 'YAML Specs' },
    { path: '/code-comparison', label: 'Code Comparison' },
    { path: '/philosophy', label: 'Philosophy' },
    { path: '/getting-started', label: 'Get Started' },
  ]

  return (
    <div className="layout">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <span className="logo-icon">📊</span>
              <span className="logo-text">Components as Data</span>
            </Link>
            <nav className="nav">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>
              Based on{' '}
              <a 
                href="https://medium.com/@nathanacurtis/components-as-data-2be178777f21" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                "Components as Data"
              </a>
              {' '}by Nathan Curtis
            </p>
            <p>
              <a 
                href="https://github.com/yourusername/ds-as-data" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

