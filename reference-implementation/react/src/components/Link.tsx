/**
 * Link Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/link.yaml
 *
 * Variants: inline, standalone, nav
 * Sizes: small, medium, large
 * States: default, hover, focus, active, visited
 */

import React from 'react';
import '../../../../shared/styles/components/link.css';

export interface LinkProps {
  /** URL or path the link navigates to */
  href: string;
  /** Link text content or child elements */
  children: React.ReactNode;
  /** Link visual variant */
  variant?: 'inline' | 'standalone' | 'nav';
  /** Link size */
  size?: 'small' | 'medium' | 'large';
  /** Where to open the linked document */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /** Relationship between current and linked document */
  rel?: string;
  /** Whether link points to external resource */
  external?: boolean;
  /** Prompts user to download linked resource */
  download?: boolean | string;
  /** Icon element to display with the link */
  icon?: React.ReactNode;
  /** Position of icon relative to text */
  iconPosition?: 'left' | 'right';
  /** Indicates current page in navigation */
  ariaCurrent?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false';
  /** Accessible label when link text is not descriptive */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = 'inline',
  size = 'medium',
  target = '_self',
  rel,
  external = false,
  download = false,
  icon,
  iconPosition = 'right',
  ariaCurrent,
  ariaLabel,
  className = '',
}) => {
  // Automatically set rel for external links
  let linkRel = rel;
  if (target === '_blank' && !linkRel) {
    linkRel = 'noopener noreferrer';
  }

  // Add external indicator if external prop is true
  const isExternal = external || target === '_blank';

  const classNames = [
    'ds-link',
    `ds-link--${variant}`,
    `ds-link--${size}`,
    isExternal && 'ds-link--external',
    ariaCurrent === 'page' && 'ds-link--active',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const showIcon = icon || (isExternal && variant !== 'inline');
  const externalIcon = '↗';

  return (
    <a
      href={href}
      className={classNames}
      target={target}
      rel={linkRel}
      download={download || undefined}
      aria-current={ariaCurrent}
      aria-label={ariaLabel}
    >
      {showIcon && iconPosition === 'left' && (
        <span className="ds-link__icon ds-link__icon--left" aria-hidden="true">
          {icon || (isExternal && externalIcon)}
        </span>
      )}

      <span className="ds-link__text">{children}</span>

      {showIcon && iconPosition === 'right' && (
        <span className="ds-link__icon ds-link__icon--right" aria-hidden="true">
          {icon || (isExternal && externalIcon)}
        </span>
      )}
    </a>
  );
};

export default Link;

