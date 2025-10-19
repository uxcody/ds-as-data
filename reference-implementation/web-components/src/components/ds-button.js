/**
 * Button Web Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/button.yaml
 *
 * Uses shared component styles via Constructable Stylesheets.
 * Shared CSS: /shared/styles/components/button.css
 *
 * Variants: primary, secondary, tertiary, as-link, icon-only
 * Sizes: small, medium, large
 * States: default, hover, focus, active, disabled, loading
 */

// Import shared button styles
import buttonStyles from '../../../../shared/styles/components/button.css?inline';

// Create Constructable Stylesheet from shared CSS
const sheet = new CSSStyleSheet();
sheet.replaceSync(buttonStyles);

// Additional Shadow DOM specific styles
const shadowStyles = new CSSStyleSheet();
shadowStyles.replaceSync(`
  :host {
    display: inline-block;
  }

  /* Forward button colors to host for text node inheritance in Shadow DOM */
  :host,
  :host([variant="primary"]) {
    color: var(--color-neutral-white);
  }

  :host([variant="secondary"]),
  :host([variant="tertiary"]),
  :host([variant="as-link"]) {
    color: var(--color-brand-primary-600);
  }

  :host([disabled]),
  :host([loading]) {
    color: var(--color-neutral-500);
  }

  :host([variant="secondary"][disabled]),
  :host([variant="secondary"][loading]) {
    color: var(--color-neutral-400);
  }

  :host([variant="tertiary"][disabled]),
  :host([variant="tertiary"][loading]),
  :host([variant="as-link"][disabled]),
  :host([variant="as-link"][loading]) {
    color: var(--color-neutral-400);
  }

  /* Slot handling for Web Components */
  slot,
  slot[name="icon-left"],
  slot[name="icon-right"] {
    display: contents;
  }

  slot[name="icon-left"].empty,
  slot[name="icon-right"].empty {
    display: none;
  }

  ::slotted(*) {
    color: inherit;
  }

  ::slotted([slot="icon-left"]),
  ::slotted([slot="icon-right"]) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: inherit;
  }
`);

// Template for button structure
const template = document.createElement('template');
template.innerHTML = `
  <button type="button" class="ds-button">
    <span class="ds-button__spinner" style="display: none;" aria-hidden="true">⟳</span>
    <slot name="icon-left"></slot>
    <slot></slot>
    <slot name="icon-right"></slot>
  </button>
`;

class DSButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'size', 'disabled', 'loading', 'type', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Adopt both shared and shadow-specific stylesheets
    this.shadowRoot.adoptedStyleSheets = [sheet, shadowStyles];

    // Append template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Cache DOM references
    this._button = this.shadowRoot.querySelector('button');
    this._spinner = this.shadowRoot.querySelector('.ds-button__spinner');
    this._iconLeftSlot = this.shadowRoot.querySelector('slot[name="icon-left"]');
    this._iconRightSlot = this.shadowRoot.querySelector('slot[name="icon-right"]');

    // Listen for slot changes to handle empty slots
    if (this._iconLeftSlot) {
      this._iconLeftSlot.addEventListener('slotchange', () => this._updateSlotVisibility());
    }
    if (this._iconRightSlot) {
      this._iconRightSlot.addEventListener('slotchange', () => this._updateSlotVisibility());
    }
  }

  connectedCallback() {
    this.updateButton();
    this._updateSlotVisibility();
  }

  attributeChangedCallback() {
    this.updateButton();
  }

  updateButton() {
    if (!this._button) return;

    const variant = this.getAttribute('variant') || 'primary';
    const size = this.getAttribute('size') || 'medium';
    const disabled = this.hasAttribute('disabled');
    const loading = this.hasAttribute('loading');
    const type = this.getAttribute('type') || 'button';
    const ariaLabel = this.getAttribute('aria-label');

    // Build class list using BEM naming
    const classList = [
      'ds-button',
      `ds-button--${variant}`,
      `ds-button--${size}`,
      loading && 'ds-button--loading'
    ].filter(Boolean);

    this._button.className = classList.join(' ');
    this._button.type = type;
    this._button.disabled = disabled || loading;

    if (ariaLabel) {
      this._button.setAttribute('aria-label', ariaLabel);
    } else {
      this._button.removeAttribute('aria-label');
    }

    if (disabled || loading) {
      this._button.setAttribute('aria-disabled', 'true');
    } else {
      this._button.removeAttribute('aria-disabled');
    }

    if (loading) {
      this._button.setAttribute('aria-busy', 'true');
      this._spinner.style.display = 'inline-flex';
    } else {
      this._button.removeAttribute('aria-busy');
      this._spinner.style.display = 'none';
    }
  }

  _updateSlotVisibility() {
    // Hide icon slots if they're empty
    if (this._iconLeftSlot) {
      const hasLeftIcon = this._iconLeftSlot.assignedNodes().length > 0;
      this._iconLeftSlot.classList.toggle('empty', !hasLeftIcon);
    }

    if (this._iconRightSlot) {
      const hasRightIcon = this._iconRightSlot.assignedNodes().length > 0;
      this._iconRightSlot.classList.toggle('empty', !hasRightIcon);
    }
  }
}

customElements.define('ds-button', DSButton);

export default DSButton;
