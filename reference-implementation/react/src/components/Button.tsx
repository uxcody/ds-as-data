/**
 * Button Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/button.yaml
 *
 * Variants: primary, secondary, tertiary, as-link, icon-only
 * Sizes: small, medium, large
 * States: default, hover, focus, active, disabled, loading
 */

import React from 'react';
import '../../../../shared/styles/components/button.css';

export interface ButtonProps {
  /** Text content of the button */
  label?: string;
  /** Icon element to display in the button */
  icon?: React.ReactNode;
  /** Position of icon relative to label */
  iconPosition?: 'left' | 'right';
  /** Button visual variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'as-link' | 'icon-only';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether the button is in loading state */
  loading?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /** Accessible label for screen readers (required for icon-only) */
  ariaLabel?: string;
  /** Indicates toggle button state */
  ariaPressed?: boolean;
  /** Indicates if button controls an expandable element */
  ariaExpanded?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  icon,
  iconPosition = 'left',
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  loading = false,
  onClick,
  ariaLabel,
  ariaPressed,
  ariaExpanded,
  className = '',
}) => {
  // Validate: icon-only variant requires ariaLabel
  if (variant === 'icon-only' && !ariaLabel && !label) {
    console.warn('Button: icon-only variant requires ariaLabel prop');
  }

  // Validate: icon-only requires icon
  if (variant === 'icon-only' && !icon) {
    console.warn('Button: icon-only variant requires icon prop');
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault();
      return;
    }
    onClick?.(event);
  };

  const classNames = [
    'ds-button',
    `ds-button--${variant}`,
    `ds-button--${size}`,
    loading && 'ds-button--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showLabel = variant !== 'icon-only' && label;
  const showIcon = icon && !loading;
  const showLoadingSpinner = loading;

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
      aria-expanded={ariaExpanded}
      aria-disabled={disabled || loading || undefined}
      aria-busy={loading || undefined}
    >
      {showLoadingSpinner && (
        <span className="ds-button__spinner" aria-hidden="true">
          ⟳
        </span>
      )}

      {showIcon && iconPosition === 'left' && (
        <span className="ds-button__icon ds-button__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}

      {showLabel && <span className="ds-button__label">{label}</span>}

      {showIcon && iconPosition === 'right' && (
        <span className="ds-button__icon ds-button__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

export default Button;

