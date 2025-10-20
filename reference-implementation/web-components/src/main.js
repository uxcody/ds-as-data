/**
 * Web Components Demo
 * Showcases all design system components with various configurations
 */

// Import all components
import './components/ds-button.js';
import './components/ds-link.js';
import './components/ds-input.js';
import './components/ds-card.js';
import './components/ds-dialog.js';

// Create demo content
const demoRoot = document.getElementById('demo-root');

demoRoot.innerHTML = `
  <div class="demo">
    <!-- Button Component -->
    <section class="demo-section">
      <h2 class="demo-section__title">Button Component</h2>
      <p class="demo-section__description">
        From <code>yaml/components/button.yaml</code>
      </p>

      <div class="demo-group">
        <h3>Variants</h3>
        <div class="demo-row">
          <ds-button variant="primary">Primary</ds-button>
          <ds-button variant="secondary">Secondary</ds-button>
          <ds-button variant="tertiary">Tertiary</ds-button>
          <ds-button variant="as-link">As Link</ds-button>
          <ds-button variant="icon-only" aria-label="Favorite">★</ds-button>
        </div>
      </div>

      <div class="demo-group">
        <h3>Sizes</h3>
        <div class="demo-row">
          <ds-button size="small">Small</ds-button>
          <ds-button size="medium">Medium</ds-button>
          <ds-button size="large">Large</ds-button>
        </div>
      </div>

      <div class="demo-group">
        <h3>States</h3>
        <div class="demo-row">
          <ds-button disabled>Disabled</ds-button>
          <ds-button loading>Loading</ds-button>
          <ds-button>With Icon<span slot="icon-right">→</span></ds-button>
        </div>
      </div>
    </section>

    <!-- Link Component -->
    <section class="demo-section">
      <h2 class="demo-section__title">Link Component</h2>
      <p class="demo-section__description">
        From <code>yaml/components/link.yaml</code>
      </p>

      <div class="demo-group">
        <h3>Variants</h3>
        <div class="demo-row">
          <p>This is an <ds-link href="#" variant="inline">inline link</ds-link> within text.</p>
          <ds-link href="#" variant="standalone">Standalone Link</ds-link>
          <ds-link href="#" variant="nav" aria-current="page">Nav Link (Active)</ds-link>
        </div>
      </div>

      <div class="demo-group">
        <h3>Sizes</h3>
        <div class="demo-row">
          <ds-link href="#" size="small">Small Link</ds-link>
          <ds-link href="#" size="medium">Medium Link</ds-link>
          <ds-link href="#" size="large">Large Link</ds-link>
        </div>
      </div>

      <div class="demo-group">
        <h3>External Links</h3>
        <div class="demo-row">
          <ds-link href="https://example.com" variant="standalone" external target="_blank">External Link</ds-link>
          <ds-link href="#" variant="standalone" icon="⬇" icon-position="right">Download Link</ds-link>
        </div>
      </div>
    </section>

    <!-- Input Component -->
    <section class="demo-section">
      <h2 class="demo-section__title">Input Component</h2>
      <p class="demo-section__description">
        From <code>yaml/components/input.yaml</code>
      </p>

      <div class="demo-group">
        <h3>Sizes & Types</h3>
        <div class="demo-column">
          <ds-input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            size="small"
            help-text="Small size input"
          ></ds-input>

          <ds-input
            label="Password"
            type="password"
            placeholder="Enter your password"
            size="medium"
            help-text="Medium size input (default)"
            required
          ></ds-input>

          <ds-input
            label="Search"
            type="search"
            placeholder="Search..."
            size="large"
            help-text="Large size input"
          ></ds-input>
        </div>
      </div>

      <div class="demo-group">
        <h3>States</h3>
        <div class="demo-column">
          <ds-input
            label="Error State"
            type="email"
            value="invalid-email"
            error-text="Please enter a valid email address"
          ></ds-input>

          <ds-input
            label="Disabled Input"
            placeholder="Disabled"
            disabled
          ></ds-input>

          <ds-input
            label="Readonly Input"
            value="This is readonly"
            readonly
          ></ds-input>
        </div>
      </div>
    </section>

    <!-- Card Component -->
    <section class="demo-section">
      <h2 class="demo-section__title">Card Component</h2>
      <p class="demo-section__description">
        From <code>yaml/components/card.yaml</code>
      </p>

      <div class="demo-group">
        <h3>Variants</h3>
        <div class="demo-grid">
          <ds-card variant="default">
            <h3>Default Card</h3>
            <p>Standard card with subtle border and shadow.</p>
          </ds-card>

          <ds-card variant="outlined">
            <h3>Outlined Card</h3>
            <p>Card with emphasized border and no shadow.</p>
          </ds-card>

          <ds-card variant="elevated">
            <h3>Elevated Card</h3>
            <p>Card with prominent shadow elevation.</p>
          </ds-card>

          <ds-card variant="interactive" interactive id="interactive-card">
            <h3>Interactive Card</h3>
            <p>Click me! This card responds to interaction.</p>
          </ds-card>
        </div>
      </div>

      <div class="demo-group">
        <h3>With Slots</h3>
        <div class="demo-grid">
          <ds-card>
            <div slot="header"><h3>Card Title</h3></div>
            <p>Card with header and footer slots.</p>
            <div slot="footer">
              <ds-link href="#">Read more →</ds-link>
            </div>
          </ds-card>

          <ds-card>
            <div slot="media" style="height: 150px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
              🎨
            </div>
            <h3>Media Card</h3>
            <p>Card with media slot (image placeholder).</p>
          </ds-card>

          <ds-card padding="large">
            <div slot="header"><h3>Large Padding</h3></div>
            <p>Card with generous padding and action buttons in footer.</p>
            <div slot="footer" style="display: flex; gap: 8px;">
              <ds-button variant="secondary" size="small">Cancel</ds-button>
              <ds-button variant="primary" size="small">Confirm</ds-button>
            </div>
          </ds-card>
        </div>
      </div>
    </section>

    <!-- Dialog Component -->
    <section class="demo-section">
      <h2 class="demo-section__title">Dialog Component</h2>
      <p class="demo-section__description">
        From <code>yaml/components/dialog.yaml</code>
      </p>

      <div class="demo-group">
        <h3>Variants</h3>
        <div class="demo-row">
          <ds-button id="open-modal">Open Modal Dialog</ds-button>
          <ds-button variant="secondary" id="open-alert">Open Alert Dialog</ds-button>
          <ds-button variant="tertiary" id="open-confirm">Open Confirmation</ds-button>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="demo-section">
      <h2 class="demo-section__title">About This Demo</h2>
      <ds-card>
        <h3>Design System as Data - Web Components Implementation</h3>
        <p>
          This is a proof-of-concept demonstrating that the same YAML specifications
          can drive implementations in different frameworks.
        </p>
        <p>
          Each component shown above is implemented as a Web Component following the same
          YAML specification as the React implementation:
        </p>
        <ul style="margin: var(--spacing-4) 0 0 0; padding-left: var(--spacing-6);">
          <li>Available variants and sizes</li>
          <li>Props and their types</li>
          <li>States and behaviors</li>
          <li>Accessibility requirements</li>
          <li>Visual styling mapped to design tokens</li>
        </ul>
        <p>
          The Web Components implementation proves that the YAML approach is truly
          framework-agnostic and can work across any platform.
        </p>
      </ds-card>
    </section>
  </div>

  <!-- Dialogs -->
  <ds-dialog id="modal-dialog" title="Edit Profile" size="medium">
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <ds-input label="Full Name" placeholder="John Doe"></ds-input>
      <ds-input label="Email" type="email" placeholder="john@example.com"></ds-input>
      <ds-input label="Bio" placeholder="Tell us about yourself..."></ds-input>
    </div>
    <div slot="footer">
      <ds-button variant="secondary" id="modal-cancel">Cancel</ds-button>
      <ds-button variant="primary" id="modal-save">Save Changes</ds-button>
    </div>
  </ds-dialog>

  <ds-dialog id="alert-dialog" title="Warning" size="small" variant="alert" show-close-button="false" close-on-overlay-click="false" close-on-escape="false">
    <p>Your session is about to expire. Please save your work.</p>
    <div slot="footer">
      <ds-button variant="primary" id="alert-ok">I Understand</ds-button>
    </div>
  </ds-dialog>

  <ds-dialog id="confirm-dialog" title="Delete Item" size="small" variant="confirmation" show-close-button="false">
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    <div slot="footer">
      <ds-button variant="secondary" id="confirm-cancel">Cancel</ds-button>
      <ds-button variant="primary" id="confirm-delete">Delete</ds-button>
    </div>
  </ds-dialog>
`;

// Add event listeners
document.getElementById('interactive-card').addEventListener('card-click', () => {
  alert('Card clicked!');
});

// Dialog handlers
const modalDialog = document.getElementById('modal-dialog');
const alertDialog = document.getElementById('alert-dialog');
const confirmDialog = document.getElementById('confirm-dialog');

document.getElementById('open-modal').addEventListener('click', () => {
  modalDialog.open();
});

document.getElementById('open-alert').addEventListener('click', () => {
  alertDialog.open();
});

document.getElementById('open-confirm').addEventListener('click', () => {
  confirmDialog.open();
});

document.getElementById('modal-cancel').addEventListener('click', () => {
  modalDialog.close();
});

document.getElementById('modal-save').addEventListener('click', () => {
  modalDialog.close();
});

document.getElementById('alert-ok').addEventListener('click', () => {
  alertDialog.close();
});

document.getElementById('confirm-cancel').addEventListener('click', () => {
  confirmDialog.close();
});

document.getElementById('confirm-delete').addEventListener('click', () => {
  alert('Item deleted!');
  confirmDialog.close();
});

