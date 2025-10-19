/**
 * Card Web Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/card.yaml
 *
 * Variants: default, interactive, outlined, elevated
 * Sizes: flexible (content-driven)
 * Slots: header, media, content, footer
 */

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
    }

    .card {
      display: flex;
      flex-direction: column;
      background-color: var(--color-neutral-white);
      border-radius: var(--radius-lg);
      border: 1px solid;
      overflow: hidden;
      transition: box-shadow var(--transition-base), border-color var(--transition-base), background-color var(--transition-base);
    }

    /* Variants */
    .variant-default {
      border-color: var(--color-neutral-200);
      box-shadow: var(--shadow-sm);
    }

    .variant-interactive {
      border-color: var(--color-neutral-200);
      box-shadow: var(--shadow-sm);
      cursor: pointer;
    }

    .variant-interactive:hover {
      background-color: var(--color-neutral-50);
      border-color: var(--color-neutral-300);
      box-shadow: var(--shadow-md);
    }

    .variant-outlined {
      border-color: var(--color-neutral-200);
      box-shadow: none;
    }

    .variant-elevated {
      border-color: transparent;
      box-shadow: var(--shadow-lg);
    }

    .variant-elevated:hover {
      box-shadow: var(--shadow-xl);
    }

    /* Padding */
    .padding-none {
      padding: 0;
    }

    .padding-small {
      padding: var(--spacing-4);
    }

    .padding-medium {
      padding: var(--spacing-6);
    }

    .padding-large {
      padding: var(--spacing-8);
    }

    ::slotted([slot="header"]) {
      padding-bottom: var(--spacing-4);
    }

    ::slotted([slot="footer"]) {
      padding-top: var(--spacing-4);
    }

    .card:focus-visible {
      outline: var(--focus-ring-width) solid var(--focus-ring-color);
      outline-offset: var(--focus-ring-offset);
    }
  </style>
  <div class="card" role="group">
    <slot name="header"></slot>
    <slot name="media"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
`;

class DSCard extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'padding', 'interactive', 'role', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this._card = this.shadowRoot.querySelector('.card');

    this._card.addEventListener('click', () => {
      if (this.hasAttribute('interactive')) {
        this.dispatchEvent(new Event('card-click', { bubbles: true }));
      }
    });

    this._card.addEventListener('keydown', (e) => {
      if (this.hasAttribute('interactive') && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        this.dispatchEvent(new Event('card-click', { bubbles: true }));
      }
    });
  }

  connectedCallback() {
    this.updateCard();
  }

  attributeChangedCallback() {
    this.updateCard();
  }

  updateCard() {
    const variant = this.getAttribute('variant') || 'default';
    const padding = this.getAttribute('padding') || 'medium';
    const interactive = this.hasAttribute('interactive');
    const role = this.getAttribute('role');
    const ariaLabel = this.getAttribute('aria-label');

    this._card.className = `card variant-${variant} padding-${padding}`;

    if (interactive) {
      this._card.setAttribute('tabindex', '0');
      this._card.setAttribute('role', 'button');
    } else if (role) {
      this._card.setAttribute('role', role);
    }

    if (ariaLabel) {
      this._card.setAttribute('aria-label', ariaLabel);
    }
  }
}

customElements.define('ds-card', DSCard);

