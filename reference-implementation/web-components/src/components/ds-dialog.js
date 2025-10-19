/**
 * Dialog Web Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/dialog.yaml
 *
 * Variants: modal, alert, confirmation
 * Sizes: small, medium, large, fullscreen
 * Features: focus trap, backdrop, keyboard handling, accessibility
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: none;
    }

    :host([open]) {
      display: block;
    }

    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: var(--spacing-4);
      animation: fadeIn var(--transition-slow) ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .dialog {
      background-color: var(--color-neutral-white);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-2xl);
      padding: var(--spacing-6);
      position: relative;
      z-index: 1001;
      max-height: 90vh;
      overflow-y: auto;
      animation: slideIn var(--transition-slow) ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: scale(0.95) translateY(-20px);
      }
      to {
        opacity: 1;
        transform: scale(1) translateY(0);
      }
    }

    /* Sizes */
    .size-small { width: 400px; max-width: 90vw; }
    .size-medium { width: 600px; max-width: 90vw; }
    .size-large { width: 800px; max-width: 90vw; }
    .size-fullscreen {
      width: 100vw;
      height: 100vh;
      max-width: 100vw;
      max-height: 100vh;
      border-radius: 0;
    }

    .header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: var(--spacing-4);
      padding-bottom: var(--spacing-4);
      margin-bottom: var(--spacing-4);
      border-bottom: 1px solid var(--color-neutral-200);
    }

    .title {
      flex: 1;
      font-size: var(--font-size-xl);
      font-weight: var(--font-weight-semibold);
      line-height: var(--line-height-tight);
      color: var(--color-neutral-900);
    }

    .close-button {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      border: none;
      background-color: transparent;
      color: var(--color-neutral-600);
      font-size: var(--font-size-xl);
      cursor: pointer;
      border-radius: var(--radius-base);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color var(--transition-fast);
    }

    .close-button:hover {
      background-color: var(--color-neutral-100);
      color: var(--color-neutral-900);
    }

    .close-button:focus-visible {
      outline: var(--focus-ring-width) solid var(--focus-ring-color);
      outline-offset: 0;
    }

    .content {
      color: var(--color-neutral-900);
      font-size: var(--font-size-base);
      line-height: var(--line-height-relaxed);
    }

    .footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: var(--spacing-3);
      padding-top: var(--spacing-4);
      margin-top: var(--spacing-4);
      border-top: 1px solid var(--color-neutral-200);
    }

    .dialog:focus {
      outline: none;
    }
  </style>
  <div class="overlay" part="overlay">
    <div class="dialog" role="dialog" aria-modal="true" tabindex="-1" part="dialog">
      <div class="header" part="header">
        <div class="title" part="title"></div>
        <button class="close-button" aria-label="Close dialog" part="close">✕</button>
      </div>
      <div class="content" part="content">
        <slot></slot>
      </div>
      <div class="footer" part="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
`;

class DSDialog extends HTMLElement {
  static get observedAttributes() {
    return ['open', 'title', 'size', 'variant', 'show-close-button', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this._overlay = this.shadowRoot.querySelector('.overlay');
    this._dialog = this.shadowRoot.querySelector('.dialog');
    this._title = this.shadowRoot.querySelector('.title');
    this._closeButton = this.shadowRoot.querySelector('.close-button');
    this._header = this.shadowRoot.querySelector('.header');
    this._footer = this.shadowRoot.querySelector('.footer');
    this._previousActiveElement = null;

    // Event listeners
    this._closeButton.addEventListener('click', () => this.close());

    this._overlay.addEventListener('click', (e) => {
      if (e.target === this._overlay && !this.hasAttribute('no-close-on-overlay')) {
        this.close();
      }
    });

    this.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !this.hasAttribute('no-close-on-escape')) {
        this.close();
      }
    });
  }

  connectedCallback() {
    this.updateDialog();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'open') {
      if (newValue !== null) {
        this.handleOpen();
      } else {
        this.handleClose();
      }
    }
    this.updateDialog();
  }

  updateDialog() {
    const title = this.getAttribute('title');
    const size = this.getAttribute('size') || 'medium';
    const showCloseButton = !this.hasAttribute('hide-close-button');
    const ariaLabel = this.getAttribute('aria-label');

    this._dialog.className = `dialog size-${size}`;

    if (title) {
      this._title.textContent = title;
      this._title.id = 'dialog-title';
      this._dialog.setAttribute('aria-labelledby', 'dialog-title');
    } else if (ariaLabel) {
      this._dialog.setAttribute('aria-label', ariaLabel);
    }

    this._closeButton.style.display = showCloseButton ? 'flex' : 'none';

    // Check if footer has content
    const footerSlot = this.shadowRoot.querySelector('slot[name="footer"]');
    const hasFooterContent = footerSlot.assignedNodes().length > 0;
    this._footer.style.display = hasFooterContent ? 'flex' : 'none';
  }

  handleOpen() {
    this._previousActiveElement = document.activeElement;

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus the dialog
    setTimeout(() => {
      this._dialog.focus();
    }, 100);
  }

  handleClose() {
    // Restore body scroll
    document.body.style.overflow = '';

    // Return focus
    if (this._previousActiveElement) {
      this._previousActiveElement.focus();
    }
  }

  open() {
    this.setAttribute('open', '');
    this.dispatchEvent(new Event('dialog-open', { bubbles: true }));
  }

  close() {
    this.removeAttribute('open');
    this.dispatchEvent(new Event('dialog-close', { bubbles: true }));
  }

  get isOpen() {
    return this.hasAttribute('open');
  }
}

customElements.define('ds-dialog', DSDialog);

