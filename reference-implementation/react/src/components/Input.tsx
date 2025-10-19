/**
 * Input Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/input.yaml
 *
 * Variants: text, password, email, search, tel, url, number
 * Sizes: small, medium, large
 * States: default, hover, focus, error, disabled, readonly, filled
 */

import React, { useId } from 'react';
import '../../../../shared/styles/components/input.css';

export interface InputProps {
  /** Type of input field */
  type?: 'text' | 'password' | 'email' | 'search' | 'tel' | 'url' | 'number';
  /** Current value of the input (controlled) */
  value?: string;
  /** Default value for uncontrolled inputs */
  defaultValue?: string;
  /** Placeholder text shown when empty */
  placeholder?: string;
  /** Label text for the input */
  label?: string;
  /** Helper text displayed below input */
  helpText?: string;
  /** Error message displayed when in error state */
  errorText?: string;
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Whether the input is required */
  required?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is read-only */
  readonly?: boolean;
  /** Name attribute for form submission */
  name?: string;
  /** Unique identifier for the input */
  id?: string;
  /** HTML autocomplete attribute */
  autoComplete?: string;
  /** Whether to focus input on mount */
  autoFocus?: boolean;
  /** Maximum number of characters */
  maxLength?: number;
  /** Minimum number of characters */
  minLength?: number;
  /** Regex pattern for validation */
  pattern?: string;
  /** Icon element to display inside input */
  icon?: React.ReactNode;
  /** Position of icon within input */
  iconPosition?: 'left' | 'right';
  /** Callback when value changes */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Callback when input loses focus */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Callback when input receives focus */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  defaultValue,
  placeholder,
  label,
  helpText,
  errorText,
  size = 'medium',
  required = false,
  disabled = false,
  readonly = false,
  name,
  id: providedId,
  autoComplete,
  autoFocus = false,
  maxLength,
  minLength,
  pattern,
  icon,
  iconPosition = 'left',
  onChange,
  onBlur,
  onFocus,
  className = '',
}) => {
  const generatedId = useId();
  const id = providedId || generatedId;
  const helpTextId = `${id}-help`;
  const errorTextId = `${id}-error`;

  const hasError = Boolean(errorText);
  const displayText = hasError ? errorText : helpText;
  const describedBy = displayText ? (hasError ? errorTextId : helpTextId) : undefined;

  const containerClassNames = [
    'ds-input-container',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClassNames = [
    'ds-input-wrapper',
    `ds-input-wrapper--${size}`,
    hasError && 'ds-input-wrapper--error',
    disabled && 'ds-input-wrapper--disabled',
    readonly && 'ds-input-wrapper--readonly',
    icon && `ds-input-wrapper--icon-${iconPosition}`,
  ]
    .filter(Boolean)
    .join(' ');

  const inputClassNames = [
    'ds-input',
    `ds-input--${size}`,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassNames}>
      {label && (
        <label htmlFor={id} className="ds-input-label">
          {label}
          {required && <span className="ds-input-label__required" aria-label="required">*</span>}
        </label>
      )}

      <div className={wrapperClassNames}>
        {icon && iconPosition === 'left' && (
          <span className="ds-input__icon ds-input__icon--left" aria-hidden="true">
            {icon}
          </span>
        )}

        <input
          type={type}
          id={id}
          name={name}
          className={inputClassNames}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          minLength={minLength}
          pattern={pattern}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-invalid={hasError || undefined}
          aria-required={required || undefined}
          aria-describedby={describedBy}
        />

        {icon && iconPosition === 'right' && (
          <span className="ds-input__icon ds-input__icon--right" aria-hidden="true">
            {icon}
          </span>
        )}
      </div>

      {displayText && (
        <div
          id={hasError ? errorTextId : helpTextId}
          className={hasError ? 'ds-input-error' : 'ds-input-help'}
        >
          {displayText}
        </div>
      )}
    </div>
  );
};

export default Input;

