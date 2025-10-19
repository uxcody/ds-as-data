/**
 * Component Demo Page
 * Showcases all design system components with various configurations
 */

import { useState } from 'react';
import { Button, Link, Input, Card, Dialog } from './components';
import './Demo.css';

function Demo() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorInput, setErrorInput] = useState('invalid-email');

  return (
    <div className="demo">
      <section className="demo-section">
        <h2 className="demo-section__title">Button Component</h2>
        <p className="demo-section__description">
          From <code>yaml/components/button.yaml</code>
        </p>

        <div className="demo-group">
          <h3>Variants</h3>
          <div className="demo-row">
            <Button label="Primary" variant="primary" />
            <Button label="Secondary" variant="secondary" />
            <Button label="Tertiary" variant="tertiary" />
            <Button label="As Link" variant="as-link" />
            <Button icon="★" variant="icon-only" ariaLabel="Favorite" />
          </div>
        </div>

        <div className="demo-group">
          <h3>Sizes</h3>
          <div className="demo-row">
            <Button label="Small" size="small" />
            <Button label="Medium" size="medium" />
            <Button label="Large" size="large" />
          </div>
        </div>

        <div className="demo-group">
          <h3>States</h3>
          <div className="demo-row">
            <Button label="Disabled" disabled />
            <Button label="Loading" loading />
            <Button label="With Icon" icon="→" iconPosition="right" />
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Link Component</h2>
        <p className="demo-section__description">
          From <code>yaml/components/link.yaml</code>
        </p>

        <div className="demo-group">
          <h3>Variants</h3>
          <div className="demo-row">
            <p>
              This is an <Link href="#" variant="inline">inline link</Link> within text.
            </p>
            <Link href="#" variant="standalone">Standalone Link</Link>
            <Link href="#" variant="nav" ariaCurrent="page">Nav Link (Active)</Link>
          </div>
        </div>

        <div className="demo-group">
          <h3>Sizes</h3>
          <div className="demo-row">
            <Link href="#" size="small">Small Link</Link>
            <Link href="#" size="medium">Medium Link</Link>
            <Link href="#" size="large">Large Link</Link>
          </div>
        </div>

        <div className="demo-group">
          <h3>External Links</h3>
          <div className="demo-row">
            <Link href="https://example.com" variant="standalone" external target="_blank">
              External Link
            </Link>
            <Link href="#" variant="standalone" icon="⬇" iconPosition="right">
              Download Link
            </Link>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Input Component</h2>
        <p className="demo-section__description">
          From <code>yaml/components/input.yaml</code>
        </p>

        <div className="demo-group">
          <h3>Sizes & Types</h3>
          <div className="demo-column">
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              size="small"
              helpText="Small size input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              size="medium"
              helpText="Medium size input (default)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              label="Search"
              type="search"
              placeholder="Search..."
              size="large"
              icon="🔍"
              iconPosition="left"
              helpText="Large size input with icon"
            />
          </div>
        </div>

        <div className="demo-group">
          <h3>States</h3>
          <div className="demo-column">
            <Input
              label="Error State"
              type="email"
              value={errorInput}
              onChange={(e) => setErrorInput(e.target.value)}
              errorText="Please enter a valid email address"
            />
            <Input
              label="Disabled Input"
              placeholder="Disabled"
              disabled
            />
            <Input
              label="Readonly Input"
              value="This is readonly"
              readonly
            />
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Card Component</h2>
        <p className="demo-section__description">
          From <code>yaml/components/card.yaml</code>
        </p>

        <div className="demo-group">
          <h3>Variants</h3>
          <div className="demo-grid">
            <Card variant="default">
              <h3>Default Card</h3>
              <p>Standard card with subtle border and shadow.</p>
            </Card>

            <Card variant="outlined">
              <h3>Outlined Card</h3>
              <p>Card with emphasized border and no shadow.</p>
            </Card>

            <Card variant="elevated">
              <h3>Elevated Card</h3>
              <p>Card with prominent shadow elevation.</p>
            </Card>

            <Card
              variant="interactive"
              onClick={() => alert('Card clicked!')}
            >
              <h3>Interactive Card</h3>
              <p>Click me! This card responds to interaction.</p>
            </Card>
          </div>
        </div>

        <div className="demo-group">
          <h3>With Slots</h3>
          <div className="demo-grid">
            <Card
              header={<h3>Card Title</h3>}
              footer={<Link href="#">Read more →</Link>}
            >
              <p>Card with header and footer slots.</p>
            </Card>

            <Card
              media={
                <div style={{
                  height: '150px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '2rem'
                }}>
                  🎨
                </div>
              }
            >
              <h3>Media Card</h3>
              <p>Card with media slot (image placeholder).</p>
            </Card>

            <Card
              padding="large"
              header={<h3>Large Padding</h3>}
              footer={
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Button label="Cancel" variant="secondary" size="small" />
                  <Button label="Confirm" variant="primary" size="small" />
                </div>
              }
            >
              <p>Card with generous padding and action buttons in footer.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">Dialog Component</h2>
        <p className="demo-section__description">
          From <code>yaml/components/dialog.yaml</code>
        </p>

        <div className="demo-group">
          <h3>Variants</h3>
          <div className="demo-row">
            <Button
              label="Open Modal Dialog"
              onClick={() => setDialogOpen(true)}
            />
            <Button
              label="Open Alert Dialog"
              variant="secondary"
              onClick={() => setAlertDialogOpen(true)}
            />
            <Button
              label="Open Confirmation"
              variant="tertiary"
              onClick={() => setConfirmDialogOpen(true)}
            />
          </div>
        </div>

        {/* Modal Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          title="Edit Profile"
          size="medium"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Input label="Bio" placeholder="Tell us about yourself..." />
          </div>
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            marginTop: '24px'
          }}>
            <Button
              label="Cancel"
              variant="secondary"
              onClick={() => setDialogOpen(false)}
            />
            <Button
              label="Save Changes"
              variant="primary"
              onClick={() => setDialogOpen(false)}
            />
          </div>
        </Dialog>

        {/* Alert Dialog */}
        <Dialog
          open={alertDialogOpen}
          onClose={() => setAlertDialogOpen(false)}
          title="Warning"
          size="small"
          variant="alert"
          closeOnOverlayClick={false}
          closeOnEscape={false}
          showCloseButton={false}
          footer={
            <Button
              label="I Understand"
              variant="primary"
              onClick={() => setAlertDialogOpen(false)}
            />
          }
        >
          <p>Your session is about to expire. Please save your work.</p>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
          title="Delete Item"
          size="small"
          variant="confirmation"
          showCloseButton={false}
          footer={
            <>
              <Button
                label="Cancel"
                variant="secondary"
                onClick={() => setConfirmDialogOpen(false)}
              />
              <Button
                label="Delete"
                variant="primary"
                onClick={() => {
                  alert('Item deleted!');
                  setConfirmDialogOpen(false);
                }}
              />
            </>
          }
        >
          <p>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </Dialog>
      </section>

      <section className="demo-section">
        <h2 className="demo-section__title">About This Demo</h2>
        <Card>
          <h3>Design System as Data</h3>
          <p>
            This is a proof-of-concept demonstrating a framework-agnostic design system
            where component specifications are defined in YAML files.
          </p>
          <p>
            Each component shown above is implemented following its YAML specification,
            which defines:
          </p>
          <ul>
            <li>Available variants and sizes</li>
            <li>Props and their types</li>
            <li>States and behaviors</li>
            <li>Accessibility requirements</li>
            <li>Visual styling mapped to design tokens</li>
          </ul>
          <p>
            The same YAML definitions can be used to generate or guide implementations
            in React, Web Components, iOS, Android, and other platforms.
          </p>
        </Card>
      </section>
    </div>
  );
}

export default Demo;

