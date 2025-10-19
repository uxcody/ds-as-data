/**
 * Card Web Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/card.yaml
 *
 * Uses shared component styles via Constructable Stylesheets.
 * Shared CSS: /shared/styles/components/card.css
 *
 * Variants: default, interactive, outlined, elevated
 * Sizes: flexible (content-driven)
 * Slots: header, media, content, footer
 */

// Import shared card styles
import cardStyles from '../../../../shared/styles/components/card.css?inline';

// Create Constructable Stylesheet from shared CSS
const sheet = new CSSStyleSheet();
sheet.replaceSync(cardStyles);

// Additional Shadow DOM specific styles
const shadowStyles = new CSSStyleSheet();
shadowStyles.replaceSync(`
  :host {
    display: block;
  }

  /* Apply shared CSS styles to slotted content */
  ::slotted([slot="header"]) {
    display: block;
    padding-bottom: var(--spacing-4);
  }

  ::slotted([slot="media"]) {
    display: block;
    width: 100%;
  }

  ::slotted(*:not([slot])) {
    flex: 1;
    color: var(--color-neutral-900);
  }

  ::slotted([slot="footer"]) {
    display: block;
    padding-top: var(--spacing-4);
    color: var(--color-neutral-600);
  }
`);

// Template for card structure
const template = document.createElement('template');
template.innerHTML = `
  <div class="ds-card" role="group">
    <slot name="header"></slot>
    <slot name="media"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
`;

class DSCard extends HTMLElement {
  static get observedAttributes() {
    return ['variant', 'padding', 'elevation', 'interactive', 'role', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Adopt both shared and shadow-specific stylesheets
    this.shadowRoot.adoptedStyleSheets = [sheet, shadowStyles];

    // Append template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Cache DOM references
    this._card = this.shadowRoot.querySelector('.ds-card');

    // Event handlers for interactive cards
    this._card.addEventListener('click', () => {
      if (this.hasAttribute('interactive')) {
        this.dispatchEvent(new Event('card-click', { bubbles: true, composed: true }));
      }
    });

    this._card.addEventListener('keydown', (e) => {
      if (this.hasAttribute('interactive') && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        this.dispatchEvent(new Event('card-click', { bubbles: true, composed: true }));
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
    if (!this._card) return;

    const variant = this.getAttribute('variant') || 'default';
    const padding = this.getAttribute('padding') || 'medium';
    const elevation = this.getAttribute('elevation');
    const interactive = this.hasAttribute('interactive');
    const role = this.getAttribute('role');
    const ariaLabel = this.getAttribute('aria-label');

    // Build class list using BEM naming
    const classList = [
      'ds-card',
      `ds-card--${variant}`,
      `ds-card--padding-${padding}`,
      elevation && `ds-card--elevation-${elevation}`,
      interactive && 'ds-card--interactive'
    ].filter(Boolean);

    this._card.className = classList.join(' ');

    // Update role
    if (role) {
      this._card.setAttribute('role', role);
    } else if (interactive) {
      this._card.setAttribute('role', 'button');
    } else {
      this._card.setAttribute('role', 'group');
    }

    // Update aria-label
    if (ariaLabel) {
      this._card.setAttribute('aria-label', ariaLabel);
    } else {
      this._card.removeAttribute('aria-label');
    }

    // Update tabindex for interactive cards
    if (interactive) {
      this._card.setAttribute('tabindex', '0');
    } else {
      this._card.removeAttribute('tabindex');
    }
  }
}

customElements.define('ds-card', DSCard);

export default DSCard;
