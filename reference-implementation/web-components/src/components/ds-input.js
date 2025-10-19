/**
 * Input Web Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/input.yaml
 *
 * Uses shared component styles via Constructable Stylesheets.
 * Shared CSS: /shared/styles/components/input.css
 *
 * Variants: text, password, email, search, tel, url, number
 * Sizes: small, medium, large
 * States: default, hover, focus, error, disabled, readonly
 */

// Import shared input styles
import inputStyles from '../../../../shared/styles/components/input.css?inline';

// Create Constructable Stylesheet from shared CSS
const sheet = new CSSStyleSheet();
sheet.replaceSync(inputStyles);

// Additional Shadow DOM specific styles
const shadowStyles = new CSSStyleSheet();
shadowStyles.replaceSync(`
  :host {
    display: block;
    width: 100%;
  }

  /* Ensure focus outline renders properly in Shadow DOM */
  .ds-input-wrapper {
    position: relative;
    z-index: 1;
  }

  .ds-input-wrapper:focus-within {
    z-index: 2;
  }
`);

// Template for input structure
const template = document.createElement('template');
template.innerHTML = `
  <div class="ds-input-container">
    <label class="ds-input-label" part="label"></label>
    <div class="ds-input-wrapper" part="wrapper">
      <input class="ds-input" part="input" />
    </div>
    <div class="ds-input-help" part="help"></div>
  </div>
`;

class DSInput extends HTMLElement {
  static get observedAttributes() {
    return ['type', 'value', 'placeholder', 'label', 'help-text', 'error-text',
            'size', 'required', 'disabled', 'readonly', 'name', 'aria-label'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // Adopt both shared and shadow-specific stylesheets
    this.shadowRoot.adoptedStyleSheets = [sheet, shadowStyles];

    // Append template
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Cache DOM references
    this._container = this.shadowRoot.querySelector('.ds-input-container');
    this._label = this.shadowRoot.querySelector('.ds-input-label');
    this._wrapper = this.shadowRoot.querySelector('.ds-input-wrapper');
    this._input = this.shadowRoot.querySelector('.ds-input');
    this._helpText = this.shadowRoot.querySelector('.ds-input-help');

    // Bind input events
    this._input.addEventListener('input', (e) => {
      this.dispatchEvent(new CustomEvent('input', {
        detail: { value: e.target.value },
        bubbles: true,
        composed: true
      }));
    });

    this._input.addEventListener('change', (e) => {
      this.dispatchEvent(new CustomEvent('change', {
        detail: { value: e.target.value },
        bubbles: true,
        composed: true
      }));
    });
  }

  connectedCallback() {
    this.updateInput();
  }

  attributeChangedCallback() {
    this.updateInput();
  }

  updateInput() {
    if (!this._input) return;

    const type = this.getAttribute('type') || 'text';
    const value = this.getAttribute('value');
    const placeholder = this.getAttribute('placeholder');
    const label = this.getAttribute('label');
    const helpText = this.getAttribute('help-text');
    const errorText = this.getAttribute('error-text');
    const size = this.getAttribute('size') || 'medium';
    const required = this.hasAttribute('required');
    const disabled = this.hasAttribute('disabled');
    const readonly = this.hasAttribute('readonly');
    const name = this.getAttribute('name');
    const ariaLabel = this.getAttribute('aria-label');

    // Update input element
    this._input.type = type;

    if (value !== null) {
      this._input.value = value;
    }

    if (placeholder) {
      this._input.placeholder = placeholder;
    } else {
      this._input.removeAttribute('placeholder');
    }

    this._input.required = required;
    this._input.disabled = disabled;
    this._input.readOnly = readonly;

    if (name) {
      this._input.name = name;
    }

    if (ariaLabel) {
      this._input.setAttribute('aria-label', ariaLabel);
    } else {
      this._input.removeAttribute('aria-label');
    }

    // Update label
    if (label) {
      this._label.style.display = 'block';
      this._label.innerHTML = label;

      if (required) {
        const requiredSpan = document.createElement('span');
        requiredSpan.className = 'ds-input-label__required';
        requiredSpan.textContent = '*';
        this._label.appendChild(requiredSpan);
      }
    } else {
      this._label.style.display = 'none';
    }

    // Build wrapper class list using BEM naming
    const hasError = errorText !== null;

    const wrapperClasses = [
      'ds-input-wrapper',
      `ds-input-wrapper--${size}`,
      hasError && 'ds-input-wrapper--error',
      disabled && 'ds-input-wrapper--disabled',
      readonly && 'ds-input-wrapper--readonly'
    ].filter(Boolean);

    this._wrapper.className = wrapperClasses.join(' ');

    // Build input class list
    const inputClasses = [
      'ds-input',
      `ds-input--${size}`
    ].filter(Boolean);

    this._input.className = inputClasses.join(' ');

    // Update help/error text
    if (errorText) {
      this._helpText.className = 'ds-input-error';
      this._helpText.textContent = errorText;
      this._helpText.style.display = 'block';
    } else if (helpText) {
      this._helpText.className = 'ds-input-help';
      this._helpText.textContent = helpText;
      this._helpText.style.display = 'block';
    } else {
      this._helpText.style.display = 'none';
    }

    // Accessibility
    if (hasError) {
      this._input.setAttribute('aria-invalid', 'true');
      this._input.setAttribute('aria-describedby', 'error-text');
    } else {
      this._input.removeAttribute('aria-invalid');
      if (helpText) {
        this._input.setAttribute('aria-describedby', 'help-text');
      } else {
        this._input.removeAttribute('aria-describedby');
      }
    }
  }

  // Public API
  get value() {
    return this._input.value;
  }

  set value(val) {
    this._input.value = val;
  }

  focus() {
    this._input.focus();
  }

  blur() {
    this._input.blur();
  }
}

customElements.define('ds-input', DSInput);

export default DSInput;
