import { useState, useEffect } from 'react'
import './ComponentsPage.css'
import '../../../shared/styles/tokens.css'
import { Button as ReactButton } from '../../../reference-implementation/react/src/components/Button'
import { Link as ReactLink } from '../../../reference-implementation/react/src/components/Link'
import { Input as ReactInput } from '../../../reference-implementation/react/src/components/Input'
import { Card as ReactCard } from '../../../reference-implementation/react/src/components/Card'
import { Dialog as ReactDialog } from '../../../reference-implementation/react/src/components/Dialog'
import { MobilePreview, MobileButton, MobileLink, MobileInput, MobileCard } from '../components/MobilePreview'
import '../components/MobilePreview.css'

const CODE_EXAMPLES = {
  button: {
    react: `// React Component
import { Button } from './components'

<Button
  label="Primary Button"
  variant="primary"
  size="medium"
/>

<Button
  label="Secondary Small"
  variant="secondary"
  size="small"
/>

<Button
  label="Disabled"
  variant="primary"
  size="medium"
  disabled
/>

<Button
  icon={<CloseIcon />}
  variant="icon-only"
  size="medium"
  ariaLabel="Close"
/>`,
    reactNative: `// React Native Component
import { Button } from '@ds/mobile'

<Button
  label="Primary Button"
  variant="primary"
  size="medium"
/>

<Button
  label="Secondary Small"
  variant="secondary"
  size="small"
/>

<Button
  label="Disabled"
  variant="primary"
  size="medium"
  disabled
/>

<Button
  icon={<CloseIcon />}
  variant="icon-only"
  size="medium"
  accessibilityLabel="Close"
/>`,
    webComponents: `<!-- Web Components -->
<ds-button 
  variant="primary" 
  size="medium"
>
  Primary Button
</ds-button>

<ds-button 
  variant="secondary" 
  size="small"
>
  Secondary Small
</ds-button>

<ds-button 
  variant="primary" 
  size="medium"
  disabled
>
  Disabled
</ds-button>

<ds-button 
  variant="icon-only" 
  size="medium"
  aria-label="Close"
>
  ✕
</ds-button>`,
  },

  link: {
    react: `// React Component
import { Link } from './components'

<Link
  href="/about"
  variant="standalone"
>
  Standalone Link
</Link>

<p>
  This is an <Link href="/page" variant="inline">inline link</Link> in text.
</p>

<Link
  href="https://example.com"
  variant="standalone"
  external
  target="_blank"
>
  External Link
</Link>`,
    reactNative: `// React Native Component  
import { Link } from '@ds/mobile'

<Link
  href="/about"
  variant="standalone"
>
  Standalone Link
</Link>

<Text>
  This is an <Link href="/page" variant="inline">inline link</Link> in text.
</Text>

<Link
  href="https://example.com"
  variant="standalone"
  external
>
  External Link
</Link>`,
    webComponents: `<!-- Web Components -->
<ds-link 
  href="/about" 
  variant="standalone"
>
  Standalone Link
</ds-link>

<p>
  This is an <ds-link href="/page" variant="inline">inline link</ds-link> in text.
</p>

<ds-link 
  href="https://example.com" 
  variant="standalone"
  external
  target="_blank"
>
  External Link
</ds-link>`,
  },

  input: {
    react: `// React Component
import { Input } from './components'

<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  helpText="We'll never share your email"
  required
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

{/* With error */}
<Input
  label="Email Address"
  type="email"
  errorText="Please enter a valid email address"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>`,
    reactNative: `// React Native Component
import { Input } from '@ds/mobile'

<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  helpText="We'll never share your email"
  required
  value={value}
  onChangeText={setValue}
/>

{/* With error */}
<Input
  label="Email Address"
  type="email"
  errorText="Please enter a valid email address"
  value={value}
  onChangeText={setValue}
/>`,
    webComponents: `<!-- Web Components -->
<ds-input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  help-text="We'll never share your email"
  required
></ds-input>

<!-- With error -->
<ds-input
  label="Email Address"
  type="email"
  error-text="Please enter a valid email address"
></ds-input>`,
  },

  card: {
    react: `// React Component
import { Card, Button } from './components'

<Card
  variant="default"
  header={<h3>Card Title</h3>}
  footer={<Button variant="tertiary" size="small">Action</Button>}
>
  <p>This is card content with some text.</p>
</Card>

<Card variant="elevated">
  <p>Elevated card with shadow emphasis.</p>
</Card>`,
    reactNative: `// React Native Component
import { Card, Button } from '@ds/mobile'

<Card
  variant="default"
  header={<Text style={styles.title}>Card Title</Text>}
  footer={<Button variant="tertiary" size="small">Action</Button>}
>
  <Text>This is card content with some text.</Text>
</Card>

<Card variant="elevated">
  <Text>Elevated card with shadow emphasis.</Text>
</Card>`,
    webComponents: `<!-- Web Components -->
<ds-card variant="default">
  <div slot="header">
    <h3>Card Title</h3>
  </div>
  
  <p>This is card content with some text.</p>
  
  <div slot="footer">
    <ds-button variant="tertiary" size="small">Action</ds-button>
  </div>
</ds-card>

<ds-card variant="elevated">
  <p>Elevated card with shadow emphasis.</p>
</ds-card>`,
  },

  dialog: {
    react: `// React Component
import { Dialog, Button } from './components'
import { useState } from 'react'

const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>
  Open Dialog
</Button>

<Dialog
  open={open}
  onClose={() => setOpen(false)}
  title="Dialog Title"
  size="medium"
  variant="modal"
>
  <p>Dialog content goes here.</p>
  
  <div slot="footer">
    <Button variant="secondary" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirm
    </Button>
  </div>
</Dialog>`,
    reactNative: `// React Native Component
import { Dialog, Button } from '@ds/mobile'
import { useState } from 'react'

const [visible, setVisible] = useState(false)

<Button onPress={() => setVisible(true)}>
  Open Dialog
</Button>

<Dialog
  visible={visible}
  onDismiss={() => setVisible(false)}
  title="Dialog Title"
  size="medium"
  variant="modal"
>
  <Text>Dialog content goes here.</Text>
  
  <Dialog.Actions>
    <Button variant="secondary" onPress={() => setVisible(false)}>
      Cancel
    </Button>
    <Button variant="primary" onPress={handleConfirm}>
      Confirm
    </Button>
  </Dialog.Actions>
</Dialog>`,
    webComponents: `<!-- Web Components -->
<ds-button id="open-dialog">
  Open Dialog
</ds-button>

<ds-dialog 
  id="my-dialog"
  title="Dialog Title"
  size="medium"
  variant="modal"
>
  <p>Dialog content goes here.</p>
  
  <div slot="footer">
    <ds-button variant="secondary" class="cancel-btn">
      Cancel
    </ds-button>
    <ds-button variant="primary" class="confirm-btn">
      Confirm
    </ds-button>
  </div>
</ds-dialog>

<script>
  document.getElementById('open-dialog')
    .addEventListener('click', () => {
      document.getElementById('my-dialog').open()
    })
</script>`,
  },
}

type Implementation = 'react' | 'reactNative' | 'webComponents'

export default function ComponentsPage() {
  const [buttonLoading, setButtonLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [showCode, setShowCode] = useState<string | null>(null)
  const [activeImpls, setActiveImpls] = useState<Record<string, Implementation>>({
    button: 'react',
    link: 'react',
    input: 'react',
    card: 'react',
    dialog: 'react',
  })
  const [webComponentsLoaded, setWebComponentsLoaded] = useState(false)
  
  // Helper to update implementation for a specific component
  const setComponentImpl = (component: string, impl: Implementation) => {
    setActiveImpls(prev => ({ ...prev, [component]: impl }))
  }

  // Load web components when that implementation is selected for any component
  useEffect(() => {
    const hasWebComponents = Object.values(activeImpls).some(impl => impl === 'webComponents')
    if (hasWebComponents && !webComponentsLoaded) {
      const loadWebComponents = async () => {
        try {
          // Dynamically import all web components
          await Promise.all([
            // @ts-expect-error - Web component JS modules don't have type definitions
            import('../../../reference-implementation/web-components/src/components/ds-button.js'),
            // @ts-expect-error - Web component JS modules don't have type definitions
            import('../../../reference-implementation/web-components/src/components/ds-link.js'),
            // @ts-expect-error - Web component JS modules don't have type definitions
            import('../../../reference-implementation/web-components/src/components/ds-input.js'),
            // @ts-expect-error - Web component JS modules don't have type definitions
            import('../../../reference-implementation/web-components/src/components/ds-card.js'),
            // @ts-expect-error - Web component JS modules don't have type definitions
            import('../../../reference-implementation/web-components/src/components/ds-dialog.js'),
          ])
          setWebComponentsLoaded(true)
        } catch (error) {
          console.error('Failed to load web components:', error)
        }
      }
      loadWebComponents()
    }
  }, [activeImpls, webComponentsLoaded])

  // Handle web component button click for loading state
  useEffect(() => {
    if (activeImpls.button === 'webComponents') {
      const handleLoadingButtonClick = () => {
        setButtonLoading(true)
        setTimeout(() => setButtonLoading(false), 2000)
      }

      // Find any loading test button in web components
      const loadingButton = document.querySelector('ds-button[loading]')?.shadowRoot?.querySelector('button')
      if (loadingButton) {
        loadingButton.addEventListener('click', handleLoadingButtonClick)
        return () => loadingButton.removeEventListener('click', handleLoadingButtonClick)
      }
    }
  }, [activeImpls.button, buttonLoading])

  // Handle web component dialog interactions
  useEffect(() => {
    if (activeImpls.dialog === 'webComponents' && webComponentsLoaded) {
      const openButton = document.getElementById('open-dialog-btn')
      const dialog = document.getElementById('demo-dialog') as HTMLElement & { 
        open?: () => void
        close?: () => void 
      }
      const cancelButton = document.querySelector('.dialog-cancel')
      const confirmButton = document.querySelector('.dialog-confirm')

      const handleOpen = () => {
        if (dialog && typeof dialog.open === 'function') {
          dialog.open()
        }
      }

      const handleClose = () => {
        if (dialog && typeof dialog.close === 'function') {
          dialog.close()
        }
      }

      openButton?.addEventListener('click', handleOpen)
      cancelButton?.addEventListener('click', handleClose)
      confirmButton?.addEventListener('click', handleClose)

      return () => {
        openButton?.removeEventListener('click', handleOpen)
        cancelButton?.removeEventListener('click', handleClose)
        confirmButton?.removeEventListener('click', handleClose)
      }
    }
  }, [activeImpls.dialog, webComponentsLoaded])

  // Handle web component input changes
  useEffect(() => {
    if (activeImpls.input === 'webComponents') {
      const input = document.getElementById('email-input')
      
      const handleChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        const value = target.value
        setInputValue(value)
        if (value && !value.includes('@')) {
          setInputError('Please enter a valid email address')
          input?.setAttribute('error-text', 'Please enter a valid email address')
        } else {
          setInputError('')
          input?.removeAttribute('error-text')
        }
      }

      input?.addEventListener('input', handleChange)
      return () => input?.removeEventListener('input', handleChange)
    }
  }, [activeImpls.input])

  const handleButtonClick = () => {
    setButtonLoading(true)
    setTimeout(() => setButtonLoading(false), 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)
    if (value && !value.includes('@')) {
      setInputError('Please enter a valid email address')
    } else {
      setInputError('')
    }
  }

  return (
    <div className="components-page">
      <div className="page-header">
        <div className="container">
          <h1>Live Component Demos</h1>
          <p className="page-intro">
            All components are defined in YAML and implemented using the specifications. 
            Try them out below to see them in action!
          </p>
        </div>
      </div>

      <div className="container">
        {/* Button Component */}
        <section className="component-section">
          <div className="component-header-section">
            <h2>Button</h2>
            <span className="complexity-badge basic">Basic</span>
            <button 
              className="view-code-btn"
              onClick={() => setShowCode(showCode === 'button' ? null : 'button')}
            >
              {showCode === 'button' ? '✕ Hide Code' : '{ } View Code'}
            </button>
          </div>
          <p className="component-description">
            Interactive element that triggers actions. Supports 5 variants, 3 sizes, loading states, 
            and full keyboard accessibility.
          </p>
          
          {showCode === 'button' && (
            <div className="code-display">
              <div className="code-header">
                <div className="impl-selector">
                  <button
                    className={`impl-btn ${activeImpls.button === 'react' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('button', 'react')}
                  >
                    ⚛️ React
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.button === 'reactNative' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('button', 'reactNative')}
                  >
                    📱 React Native
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.button === 'webComponents' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('button', 'webComponents')}
                  >
                    🌐 Web Components
                  </button>
                </div>
              </div>
              <pre><code>{CODE_EXAMPLES.button[activeImpls.button]}</code></pre>
            </div>
          )}

          <div className="demo-group">
            <h3>Variants</h3>
            {activeImpls.button === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileButton variant="primary" size="medium">Primary</MobileButton>
                  <MobileButton variant="secondary" size="medium">Secondary</MobileButton>
                  <MobileButton variant="tertiary" size="medium">Tertiary</MobileButton>
                  <MobileButton variant="as-link" size="medium">As Link</MobileButton>
                  <MobileButton variant="icon-only" size="medium">✕</MobileButton>
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileButton variant="primary" size="medium">Primary</MobileButton>
                  <MobileButton variant="secondary" size="medium">Secondary</MobileButton>
                  <MobileButton variant="tertiary" size="medium">Tertiary</MobileButton>
                  <MobileButton variant="as-link" size="medium">As Link</MobileButton>
                  <MobileButton variant="icon-only" size="medium">✕</MobileButton>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid">
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="primary" size="medium" label="Primary" />
                  ) : (
                    <ds-button variant="primary" size="medium">Primary</ds-button>
                  )}
                  <span className="demo-label">Primary</span>
                </div>
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="secondary" size="medium" label="Secondary" />
                  ) : (
                    <ds-button variant="secondary" size="medium">Secondary</ds-button>
                  )}
                  <span className="demo-label">Secondary</span>
                </div>
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="tertiary" size="medium" label="Tertiary" />
                  ) : (
                    <ds-button variant="tertiary" size="medium">Tertiary</ds-button>
                  )}
                  <span className="demo-label">Tertiary</span>
                </div>
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="as-link" size="medium" label="As Link" />
                  ) : (
                    <ds-button variant="as-link" size="medium">As Link</ds-button>
                  )}
                  <span className="demo-label">As Link</span>
                </div>
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="icon-only" size="medium" icon="✕" ariaLabel="Close" />
                  ) : (
                    <ds-button variant="icon-only" size="medium" aria-label="Close">✕</ds-button>
                  )}
                  <span className="demo-label">Icon Only</span>
                </div>
              </div>
            )}
          </div>

          <div className="demo-group">
            <h3>Sizes</h3>
            {activeImpls.button === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileButton variant="primary" size="small">Small</MobileButton>
                  <MobileButton variant="primary" size="medium">Medium</MobileButton>
                  <MobileButton variant="primary" size="large">Large</MobileButton>
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileButton variant="primary" size="small">Small</MobileButton>
                  <MobileButton variant="primary" size="medium">Medium</MobileButton>
                  <MobileButton variant="primary" size="large">Large</MobileButton>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid">
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="primary" size="small" label="Small" />
                  ) : (
                    <ds-button variant="primary" size="small">Small</ds-button>
                  )}
                  <span className="demo-label">Small</span>
                </div>
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="primary" size="medium" label="Medium" />
                  ) : (
                    <ds-button variant="primary" size="medium">Medium</ds-button>
                  )}
                  <span className="demo-label">Medium</span>
                </div>
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="primary" size="large" label="Large" />
                  ) : (
                    <ds-button variant="primary" size="large">Large</ds-button>
                  )}
                  <span className="demo-label">Large</span>
                </div>
              </div>
            )}
          </div>

          <div className="demo-group">
            <h3>States</h3>
            {activeImpls.button === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileButton variant="primary" size="medium" disabled>Disabled</MobileButton>
                  <MobileButton variant="primary" size="medium" loading>Loading...</MobileButton>
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileButton variant="primary" size="medium" disabled>Disabled</MobileButton>
                  <MobileButton variant="primary" size="medium" loading>Loading...</MobileButton>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid">
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton variant="primary" size="medium" label="Disabled" disabled />
                  ) : (
                    <ds-button variant="primary" size="medium" disabled>Disabled</ds-button>
                  )}
                  <span className="demo-label">Disabled</span>
                </div>
                <div className="demo-item">
                  {activeImpls.button === 'react' ? (
                    <ReactButton 
                      variant="primary" 
                      size="medium" 
                      label={buttonLoading ? 'Loading...' : 'Click Me'} 
                      loading={buttonLoading}
                      onClick={handleButtonClick}
                    />
                  ) : (
                    <ds-button 
                      variant="primary" 
                      size="medium"
                      {...(buttonLoading ? { loading: true } : {})}
                    >
                      {buttonLoading ? 'Loading...' : 'Click Me'}
                    </ds-button>
                  )}
                  <span className="demo-label">Loading (click to test)</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Link Component */}
        <section className="component-section">
          <div className="component-header-section">
            <h2>Link</h2>
            <span className="complexity-badge basic">Basic</span>
            <button 
              className="view-code-btn"
              onClick={() => setShowCode(showCode === 'link' ? null : 'link')}
            >
              {showCode === 'link' ? '✕ Hide Code' : '{ } View Code'}
            </button>
          </div>
          <p className="component-description">
            Navigation element with accessibility considerations. Supports inline, standalone, 
            and navigation variants.
          </p>
          
          {showCode === 'link' && (
            <div className="code-display">
              <div className="code-header">
                <div className="impl-selector">
                  <button
                    className={`impl-btn ${activeImpls.link === 'react' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('link', 'react')}
                  >
                    ⚛️ React
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.link === 'reactNative' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('link', 'reactNative')}
                  >
                    📱 React Native
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.link === 'webComponents' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('link', 'webComponents')}
                  >
                    🌐 Web Components
                  </button>
                </div>
              </div>
              <pre><code>{CODE_EXAMPLES.link[activeImpls.link]}</code></pre>
            </div>
          )}

          <div className="demo-group">
            <h3>Variants</h3>
            {activeImpls.link === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <p style={{ fontSize: '0.75rem', color: '#666', margin: '0 0 8px 0' }}>
                    This is an <MobileLink variant="inline">inline link</MobileLink> within text.
                  </p>
                  <MobileLink variant="standalone">Standalone Link</MobileLink>
                  <MobileLink variant="nav">Navigation Link</MobileLink>
                </MobilePreview>
                <MobilePreview platform="android">
                  <p style={{ fontSize: '0.75rem', color: '#666', margin: '0 0 8px 0' }}>
                    This is an <MobileLink variant="inline">inline link</MobileLink> within text.
                  </p>
                  <MobileLink variant="standalone">Standalone Link</MobileLink>
                  <MobileLink variant="nav">Navigation Link</MobileLink>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid">
                <div className="demo-item">
                  <p style={{marginBottom: 0}}>
                    This is an{' '}
                    {activeImpls.link === 'react' ? (
                      <ReactLink href="#" variant="inline">inline link</ReactLink>
                    ) : (
                      <ds-link href="#" variant="inline">inline link</ds-link>
                    )}
                    {' '}within text.
                  </p>
                  <span className="demo-label">Inline</span>
                </div>
                <div className="demo-item">
                  {activeImpls.link === 'react' ? (
                    <ReactLink href="#" variant="standalone">Standalone Link</ReactLink>
                  ) : (
                    <ds-link href="#" variant="standalone">Standalone Link</ds-link>
                  )}
                  <span className="demo-label">Standalone</span>
                </div>
                <div className="demo-item">
                  {activeImpls.link === 'react' ? (
                    <ReactLink href="#" variant="nav" ariaCurrent="page">Navigation Link</ReactLink>
                  ) : (
                    <ds-link href="#" variant="nav" aria-current="page">Navigation Link</ds-link>
                  )}
                  <span className="demo-label">Nav (active)</span>
                </div>
              </div>
            )}
          </div>

          <div className="demo-group">
            <h3>External Links</h3>
            {activeImpls.link === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileLink variant="standalone">External Link ↗</MobileLink>
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileLink variant="standalone">External Link ↗</MobileLink>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid">
                <div className="demo-item">
                  {activeImpls.link === 'react' ? (
                    <ReactLink href="#" variant="standalone" external target="_blank">
                      External Link
                    </ReactLink>
                  ) : (
                    <ds-link href="#" variant="standalone" external target="_blank">
                      External Link
                    </ds-link>
                  )}
                  <span className="demo-label">With external icon</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Input Component */}
        <section className="component-section">
          <div className="component-header-section">
            <h2>Input</h2>
            <span className="complexity-badge intermediate">Intermediate</span>
            <button 
              className="view-code-btn"
              onClick={() => setShowCode(showCode === 'input' ? null : 'input')}
            >
              {showCode === 'input' ? '✕ Hide Code' : '{ } View Code'}
            </button>
          </div>
          <p className="component-description">
            Form input with validation states. Supports 7 types, labels, help text, and error messages.
          </p>
          
          {showCode === 'input' && (
            <div className="code-display">
              <div className="code-header">
                <div className="impl-selector">
                  <button
                    className={`impl-btn ${activeImpls.input === 'react' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('input', 'react')}
                  >
                    ⚛️ React
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.input === 'reactNative' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('input', 'reactNative')}
                  >
                    📱 React Native
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.input === 'webComponents' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('input', 'webComponents')}
                  >
                    🌐 Web Components
                  </button>
                </div>
              </div>
              <pre><code>{CODE_EXAMPLES.input[activeImpls.input]}</code></pre>
            </div>
          )}

          <div className="demo-group">
            <h3>With Label and Help Text</h3>
            {activeImpls.input === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileInput label="Email Address *" placeholder="you@example.com" />
                  <p style={{ fontSize: '0.6875rem', color: '#666', margin: '4px 0 0 0' }}>
                    We'll never share your email.
                  </p>
                  <MobileInput label="Email Address" placeholder="you@example.com" value="invalid@" error />
                  <p style={{ fontSize: '0.6875rem', color: '#d32f2f', margin: '4px 0 0 0' }}>
                    Please enter a valid email address
                  </p>
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileInput label="Email Address *" placeholder="you@example.com" />
                  <p style={{ fontSize: '0.6875rem', color: '#666', margin: '4px 0 0 0' }}>
                    We'll never share your email.
                  </p>
                  <MobileInput label="Email Address" placeholder="you@example.com" value="invalid@" error />
                  <p style={{ fontSize: '0.6875rem', color: '#d32f2f', margin: '4px 0 0 0' }}>
                    Please enter a valid email address
                  </p>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid-full">
                <div className="input-demo">
                  {activeImpls.input === 'react' ? (
                    <ReactInput
                      id="email-input"
                      label="Email Address"
                      type="email"
                      placeholder="you@example.com"
                      value={inputValue}
                      onChange={handleInputChange}
                      helpText="We'll never share your email with anyone else."
                      errorText={inputError}
                      required
                    />
                  ) : (
                    <ds-input
                      id="email-input"
                      label="Email Address"
                      type="email"
                      placeholder="you@example.com"
                      help-text="We'll never share your email with anyone else."
                      {...(inputError ? { 'error-text': inputError } : {})}
                      required
                    />
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="demo-group">
            <h3>States</h3>
            {activeImpls.input === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileInput label="Disabled Input" value="Cannot edit" />
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileInput label="Disabled Input" value="Cannot edit" />
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid-full">
                <div className="input-demo">
                  {activeImpls.input === 'react' ? (
                    <ReactInput
                      id="disabled-input"
                      label="Disabled Input"
                      type="text"
                      value="Cannot edit"
                      disabled
                      onChange={() => {}}
                    />
                  ) : (
                    <ds-input
                      id="disabled-input"
                      label="Disabled Input"
                      type="text"
                      value="Cannot edit"
                      disabled
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Card Component */}
        <section className="component-section">
          <div className="component-header-section">
            <h2>Card</h2>
            <span className="complexity-badge intermediate">Intermediate</span>
            <button 
              className="view-code-btn"
              onClick={() => setShowCode(showCode === 'card' ? null : 'card')}
            >
              {showCode === 'card' ? '✕ Hide Code' : '{ } View Code'}
            </button>
          </div>
          <p className="component-description">
            Container component with slots for header, media, content, and footer. Supports 4 variants.
          </p>
          
          {showCode === 'card' && (
            <div className="code-display">
              <div className="code-header">
                <div className="impl-selector">
                  <button
                    className={`impl-btn ${activeImpls.card === 'react' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('card', 'react')}
                  >
                    ⚛️ React
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.card === 'reactNative' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('card', 'reactNative')}
                  >
                    📱 React Native
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.card === 'webComponents' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('card', 'webComponents')}
                  >
                    🌐 Web Components
                  </button>
                </div>
              </div>
              <pre><code>{CODE_EXAMPLES.card[activeImpls.card]}</code></pre>
            </div>
          )}

          <div className="demo-group">
            <h3>Variants</h3>
            {activeImpls.card === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileCard variant="default" header="Card Title" footer={<MobileButton variant="tertiary" size="small">Action</MobileButton>}>
                    This is card content with some text.
                  </MobileCard>
                  <MobileCard variant="elevated">
                    Elevated card with shadow emphasis.
                  </MobileCard>
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileCard variant="default" header="Card Title" footer={<MobileButton variant="tertiary" size="small">Action</MobileButton>}>
                    This is card content with some text.
                  </MobileCard>
                  <MobileCard variant="elevated">
                    Elevated card with shadow emphasis.
                  </MobileCard>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid-cards">
                {activeImpls.card === 'react' ? (
                  <>
                    <ReactCard
                      variant="default"
                      header={<h3>Default Card</h3>}
                      footer={<ReactButton variant="tertiary" size="small" label="Learn More" />}
                    >
                      <p>This is the default card variant with standard styling.</p>
                    </ReactCard>

                    <ReactCard
                      variant="outlined"
                      header={<h3>Outlined Card</h3>}
                      footer={<ReactButton variant="tertiary" size="small" label="Learn More" />}
                    >
                      <p>This card has a visible border and no shadow.</p>
                    </ReactCard>

                    <ReactCard
                      variant="elevated"
                      header={<h3>Elevated Card</h3>}
                      footer={<ReactButton variant="tertiary" size="small" label="Learn More" />}
                    >
                      <p>This card has enhanced shadow for emphasis.</p>
                    </ReactCard>
                  </>
                ) : (
                  <>
                    <ds-card variant="default">
                      <div slot="header">
                        <h3>Default Card</h3>
                      </div>
                      <p>This is the default card variant with standard styling.</p>
                      <div slot="footer">
                        <ds-button variant="tertiary" size="small">Learn More</ds-button>
                      </div>
                    </ds-card>

                    <ds-card variant="outlined">
                      <div slot="header">
                        <h3>Outlined Card</h3>
                      </div>
                      <p>This card has a visible border and no shadow.</p>
                      <div slot="footer">
                        <ds-button variant="tertiary" size="small">Learn More</ds-button>
                      </div>
                    </ds-card>

                    <ds-card variant="elevated">
                      <div slot="header">
                        <h3>Elevated Card</h3>
                      </div>
                      <p>This card has enhanced shadow for emphasis.</p>
                      <div slot="footer">
                        <ds-button variant="tertiary" size="small">Learn More</ds-button>
                      </div>
                    </ds-card>
                  </>
                )}
              </div>
            )}
          </div>
        </section>

        {/* Dialog Component */}
        <section className="component-section">
          <div className="component-header-section">
            <h2>Dialog</h2>
            <span className="complexity-badge advanced">Advanced</span>
            <button 
              className="view-code-btn"
              onClick={() => setShowCode(showCode === 'dialog' ? null : 'dialog')}
            >
              {showCode === 'dialog' ? '✕ Hide Code' : '{ } View Code'}
            </button>
          </div>
          <p className="component-description">
            Modal dialog with focus trap, keyboard handling, and backdrop click. Supports 3 variants and 4 sizes.
          </p>
          
          {showCode === 'dialog' && (
            <div className="code-display">
              <div className="code-header">
                <div className="impl-selector">
                  <button
                    className={`impl-btn ${activeImpls.dialog === 'react' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('dialog', 'react')}
                  >
                    ⚛️ React
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.dialog === 'reactNative' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('dialog', 'reactNative')}
                  >
                    📱 React Native
                  </button>
                  <button
                    className={`impl-btn ${activeImpls.dialog === 'webComponents' ? 'active' : ''}`}
                    onClick={() => setComponentImpl('dialog', 'webComponents')}
                  >
                    🌐 Web Components
                  </button>
                </div>
              </div>
              <pre><code>{CODE_EXAMPLES.dialog[activeImpls.dialog]}</code></pre>
            </div>
          )}

          <div className="demo-group">
            <h3>Try It</h3>
            {activeImpls.dialog === 'reactNative' ? (
              <div className="mobile-previews-container">
                <MobilePreview platform="ios">
                  <MobileButton variant="primary" size="medium">Open Dialog</MobileButton>
                  <div style={{ 
                    marginTop: '16px', 
                    padding: '12px', 
                    background: 'rgba(0,0,0,0.05)', 
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    color: '#666'
                  }}>
                    Modal dialogs appear over content with overlay, keyboard handling (ESC to close), and focus management
                  </div>
                </MobilePreview>
                <MobilePreview platform="android">
                  <MobileButton variant="primary" size="medium">Open Dialog</MobileButton>
                  <div style={{ 
                    marginTop: '16px', 
                    padding: '12px', 
                    background: 'rgba(0,0,0,0.05)', 
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    color: '#666'
                  }}>
                    Modal dialogs appear over content with overlay, keyboard handling (ESC to close), and focus management
                  </div>
                </MobilePreview>
              </div>
            ) : (
              <div className="demo-grid">
                <div className="demo-item">
                  {activeImpls.dialog === 'react' ? (
                    <ReactButton 
                      variant="primary"
                      size="medium"
                      label="Open Dialog"
                      onClick={() => setDialogOpen(true)}
                    />
                  ) : (
                    <ds-button 
                      variant="primary"
                      size="medium"
                      id="open-dialog-btn"
                    >
                      Open Dialog
                    </ds-button>
                  )}
                  <span className="demo-label">Modal dialog example</span>
                </div>
              </div>
            )}
          </div>

          {dialogOpen && activeImpls.dialog === 'react' && (
            <ReactDialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              title="Dialog Title"
              size="medium"
              variant="modal"
              footer={
                <>
                  <ReactButton 
                    variant="secondary"
                    size="medium"
                    label="Cancel"
                    onClick={() => setDialogOpen(false)}
                  />
                  <ReactButton 
                    variant="primary"
                    size="medium"
                    label="Confirm"
                    onClick={() => setDialogOpen(false)}
                  />
                </>
              }
            >
              <p>
                This is a modal dialog with focus management, keyboard support (press ESC to close), 
                and backdrop click handling.
              </p>
              <p>
                All these behaviors are defined in the YAML specification and implemented consistently 
                across all platforms.
              </p>
            </ReactDialog>
          )}

          {activeImpls.dialog === 'webComponents' && (
            <ds-dialog 
              id="demo-dialog"
              title="Dialog Title"
              size="medium"
              variant="modal"
            >
              <p>
                This is a modal dialog with focus management, keyboard support (press ESC to close), 
                and backdrop click handling.
              </p>
              <p>
                All these behaviors are defined in the YAML specification and implemented consistently 
                across all platforms.
              </p>
              <div slot="footer">
                <ds-button variant="secondary" size="medium" className="dialog-cancel">
                  Cancel
                </ds-button>
                <ds-button variant="primary" size="medium" className="dialog-confirm">
                  Confirm
                </ds-button>
              </div>
            </ds-dialog>
          )}
        </section>

        {/* YAML Reference */}
        <section className="component-section cta-section-component">
          <h2>Want to See the YAML?</h2>
          <p>
            Every component you see here is defined in a YAML specification that includes all variants, 
            states, props, accessibility requirements, and more.
          </p>
          <a href="/yaml-specs" className="btn btn-primary">
            View YAML Specifications
          </a>
        </section>
      </div>
    </div>
  )
}

