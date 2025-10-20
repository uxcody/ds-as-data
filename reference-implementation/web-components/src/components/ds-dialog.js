/**
 * Dialog Web Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/dialog.yaml
 *
 * Uses shared component styles via Constructable Stylesheets.
 * Shared CSS: /shared/styles/components/dialog.css
 *
 * Variants: modal, alert, confirmation
 * Sizes: small, medium, large, fullscreen
 * Features: focus trap, backdrop, keyboard handling, accessibility
 */

// Import shared dialog styles
import dialogStyles from '../../../../shared/styles/components/dialog.css?inline';

// Create Constructable Stylesheet from shared CSS
const sheet = new CSSStyleSheet();
sheet.replaceSync(dialogStyles);

// Additional Shadow DOM specific styles
const shadowStyles = new CSSStyleSheet();
shadowStyles.replaceSync(`
  :host {
    display: none;
  }

  :host([open]) {
    display: block;
  }

  /* Slot handling */
  slot {
    display: contents;
  }
`);

// Template for dialog structure
const template = document.createElement('template');
template.innerHTML = `
  <div class="ds-dialog-overlay" part="overlay">
    <div class="ds-dialog" role="dialog" aria-modal="true" tabindex="-1" part="dialog">
      <div class="ds-dialog__header" part="header">
        <div class="ds-dialog__title" part="title"></div>
        <button class="ds-dialog__close-button" aria-label="Close dialog" part="close">✕</button>
      </div>
      <div class="ds-dialog__content" part="content">
        <slot></slot>
      </div>
      <div class="ds-dialog__footer" part="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
`;

class DSDialog extends HTMLElement {
  static get observedAttributes() {
    return [
      'open',
      'title',
      'size',
      'variant',
      'show-close-button',
      'close-on-overlay-click',
      'close-on-escape',
      'aria-labelledby',
      'aria-describedby'
    ];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Adopt both shared and shadow-specific stylesheets
    this.shadowRoot.adoptedStyleSheets = [sheet, shadowStyles];

    // Append template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Cache DOM references
    this._overlay = this.shadowRoot.querySelector('.ds-dialog-overlay');
    this._dialog = this.shadowRoot.querySelector('.ds-dialog');
    this._title = this.shadowRoot.querySelector('.ds-dialog__title');
    this._closeButton = this.shadowRoot.querySelector('.ds-dialog__close-button');
    this._content = this.shadowRoot.querySelector('.ds-dialog__content');
    this._footer = this.shadowRoot.querySelector('.ds-dialog__footer');

    // Previous focus element for restoration
    this._previousFocus = null;

    // Event handlers
    this._closeButton.addEventListener('click', () => this.close());

    this._overlay.addEventListener('click', (e) => {
      if (e.target === this._overlay && this._shouldCloseOnOverlayClick()) {
        this.close();
      }
    });

    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  connectedCallback() {
    this.updateDialog();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open') {
      if (newValue !== null) {
        this._onOpen();
      } else {
        this._onClose();
      }
    }
    this.updateDialog();
  }

  updateDialog() {
    if (!this._dialog) return;

    const size = this.getAttribute('size') || 'medium';
    const variant = this.getAttribute('variant') || 'modal';
    const title = this.getAttribute('title');
    const ariaLabelledby = this.getAttribute('aria-labelledby');
    const ariaDescribedby = this.getAttribute('aria-describedby');

    // Build class list using BEM naming
    const classList = [
      'ds-dialog',
      `ds-dialog--${size}`,
      variant && `ds-dialog--${variant}`
    ].filter(Boolean);

    this._dialog.className = classList.join(' ');

    // Update title
    if (title) {
      this._title.textContent = title;
      this._title.style.display = 'block';
    } else {
      this._title.style.display = 'none';
    }

    // Update close button visibility based on variant and attribute
    if (this._shouldShowCloseButton()) {
      this._closeButton.style.display = 'flex';
    } else {
      this._closeButton.style.display = 'none';
    }

    // Update ARIA attributes
    if (ariaLabelledby) {
      this._dialog.setAttribute('aria-labelledby', ariaLabelledby);
    } else if (title) {
      this._dialog.setAttribute('aria-label', title);
    }

    if (ariaDescribedby) {
      this._dialog.setAttribute('aria-describedby', ariaDescribedby);
    }

    // Update role based on variant
    if (variant === 'alert') {
      this._dialog.setAttribute('role', 'alertdialog');
    } else {
      this._dialog.setAttribute('role', 'dialog');
    }
  }

  // Helper method to determine if close button should be shown
  _shouldShowCloseButton() {
    const variant = this.getAttribute('variant') || 'modal';

    // Check if attribute is explicitly set
    if (this.hasAttribute('show-close-button')) {
      return this.getAttribute('show-close-button') !== 'false';
    }

    // Default behavior based on variant (matches React implementation)
    return variant === 'modal';
  }

  // Helper method to determine if overlay click should close dialog
  _shouldCloseOnOverlayClick() {
    const variant = this.getAttribute('variant') || 'modal';

    // Check if attribute is explicitly set
    if (this.hasAttribute('close-on-overlay-click')) {
      return this.getAttribute('close-on-overlay-click') !== 'false';
    }

    // Default behavior: only modal allows overlay click to close
    return variant === 'modal';
  }

  // Helper method to determine if escape key should close dialog
  _shouldCloseOnEscape() {
    const variant = this.getAttribute('variant') || 'modal';

    // Check if attribute is explicitly set
    if (this.hasAttribute('close-on-escape')) {
      return this.getAttribute('close-on-escape') !== 'false';
    }

    // Default behavior: alert doesn't allow escape to close
    return variant !== 'alert';
  }

  _onOpen() {
    // Save previous focus
    this._previousFocus = document.activeElement;

    // Add keyboard handler
    document.addEventListener('keydown', this._handleKeyDown);

    // Focus the dialog
    requestAnimationFrame(() => {
      this._dialog.focus();
    });

    // Emit open event
    this.dispatchEvent(new Event('dialog-open', { bubbles: true, composed: true }));
  }

  _onClose() {
    // Remove keyboard handler
    document.removeEventListener('keydown', this._handleKeyDown);

    // Restore focus
    if (this._previousFocus && typeof this._previousFocus.focus === 'function') {
      this._previousFocus.focus();
    }

    // Emit close event
    this.dispatchEvent(new Event('dialog-close', { bubbles: true, composed: true }));
  }

  _handleKeyDown(e) {
    // Handle Escape key
    if (e.key === 'Escape' && this._shouldCloseOnEscape()) {
      e.preventDefault();
      this.close();
      return;
    }

    // Focus trap for Tab key
    if (e.key === 'Tab') {
      const focusableElements = this._dialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }

  // Public API
  open() {
    this.setAttribute('open', '');
  }

  close() {
    this.removeAttribute('open');
  }

  toggle() {
    if (this.hasAttribute('open')) {
      this.close();
    } else {
      this.open();
    }
  }
}

customElements.define('ds-dialog', DSDialog);

export default DSDialog;
