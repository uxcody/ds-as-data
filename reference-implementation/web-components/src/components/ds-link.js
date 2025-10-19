/**
 * Link Web Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/link.yaml
 *
 * Uses shared component styles via Constructable Stylesheets.
 * Shared CSS: /shared/styles/components/link.css
 *
 * Variants: inline, standalone, nav
 * Sizes: small, medium, large
 * States: default, hover, focus, active, visited
 */

// Import shared link styles
import linkStyles from '../../../../shared/styles/components/link.css?inline';

// Create Constructable Stylesheet from shared CSS
const sheet = new CSSStyleSheet();
sheet.replaceSync(linkStyles);

// Additional Shadow DOM specific styles
const shadowStyles = new CSSStyleSheet();
shadowStyles.replaceSync(`
  :host {
    display: inline-block;
  }

  .icon-left,
  .icon-right {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .icon-right.external-icon {
    font-size: 0.85em;
  }
`);

// Template for link structure
const template = document.createElement('template');
template.innerHTML = `
  <a class="ds-link">
    <span class="icon-left" style="display: none;"></span>
    <slot></slot>
    <span class="icon-right" style="display: none;"></span>
  </a>
`;

class DSLink extends HTMLElement {
  static get observedAttributes() {
    return ['href', 'variant', 'size', 'target', 'rel', 'external', 'aria-current', 'aria-label', 'icon', 'icon-position'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Adopt both shared and shadow-specific stylesheets
    this.shadowRoot.adoptedStyleSheets = [sheet, shadowStyles];

    // Append template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Cache DOM references
    this._link = this.shadowRoot.querySelector('a');
    this._iconLeft = this.shadowRoot.querySelector('.icon-left');
    this._iconRight = this.shadowRoot.querySelector('.icon-right');
  }

  connectedCallback() {
    this.updateLink();
  }

  attributeChangedCallback() {
    this.updateLink();
  }

  updateLink() {
    if (!this._link) return;

    const href = this.getAttribute('href') || '#';
    const variant = this.getAttribute('variant') || 'inline';
    const size = this.getAttribute('size') || 'medium';
    const target = this.getAttribute('target');
    let rel = this.getAttribute('rel');
    const external = this.hasAttribute('external');
    const ariaCurrent = this.getAttribute('aria-current');
    const ariaLabel = this.getAttribute('aria-label');
    const icon = this.getAttribute('icon');
    const iconPosition = this.getAttribute('icon-position') || 'right';

    // Build class list using BEM naming
    const isExternal = external || target === '_blank';
    const isActive = ariaCurrent === 'page';

    const classList = [
      'ds-link',
      `ds-link--${variant}`,
      `ds-link--${size}`,
      isExternal && 'ds-link--external',
      isActive && 'ds-link--active'
    ].filter(Boolean);

    this._link.href = href;
    this._link.className = classList.join(' ');

    if (target) {
      this._link.target = target;
      if (target === '_blank' && !rel) {
        rel = 'noopener noreferrer';
      }
    } else {
      this._link.removeAttribute('target');
    }

    if (rel) {
      this._link.rel = rel;
    } else {
      this._link.removeAttribute('rel');
    }

    if (ariaCurrent) {
      this._link.setAttribute('aria-current', ariaCurrent);
    } else {
      this._link.removeAttribute('aria-current');
    }

    if (ariaLabel) {
      this._link.setAttribute('aria-label', ariaLabel);
    } else {
      this._link.removeAttribute('aria-label');
    }

    // Handle custom icon or external icon
    const externalIcon = '↗';
    const showIcon = icon || (isExternal && variant !== 'inline');
    const iconToShow = icon || (isExternal && externalIcon);
    const isShowingExternalIcon = !icon && isExternal;

    // Clear both icon positions first
    this._iconLeft.style.display = 'none';
    this._iconRight.style.display = 'none';
    this._iconLeft.textContent = '';
    this._iconRight.textContent = '';
    this._iconLeft.classList.remove('external-icon', 'ds-link__icon');
    this._iconRight.classList.remove('external-icon', 'ds-link__icon', 'ds-link__icon--right');

    // Show icon in appropriate position
    if (showIcon && iconToShow) {
      if (iconPosition === 'left') {
        this._iconLeft.textContent = iconToShow;
        this._iconLeft.style.display = 'inline-flex';
        this._iconLeft.setAttribute('aria-hidden', 'true');
        this._iconLeft.classList.add('ds-link__icon', 'ds-link__icon--left');
        if (isShowingExternalIcon) {
          this._iconLeft.classList.add('external-icon');
        }
      } else {
        this._iconRight.textContent = iconToShow;
        this._iconRight.style.display = 'inline-flex';
        this._iconRight.setAttribute('aria-hidden', 'true');
        this._iconRight.classList.add('ds-link__icon', 'ds-link__icon--right');
        if (isShowingExternalIcon) {
          this._iconRight.classList.add('external-icon');
        }
      }
    }
  }
}

customElements.define('ds-link', DSLink);

export default DSLink;
