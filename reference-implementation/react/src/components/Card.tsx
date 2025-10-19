/**
 * Card Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/card.yaml
 *
 * Variants: default, interactive, outlined, elevated
 * Sizes: flexible (content-driven)
 * States: default, hover, focus, active
 * Slots: header, media, content, footer
 */

import React from 'react';
import './Card.css';

export interface CardProps {
  /** Visual style variant */
  variant?: 'default' | 'interactive' | 'outlined' | 'elevated';
  /** Internal padding size */
  padding?: 'small' | 'medium' | 'large' | 'none';
  /** Whether card responds to interaction */
  interactive?: boolean;
  /** Callback when card is clicked */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  /** URL to navigate to when card is clicked */
  href?: string;
  /** Shadow elevation level */
  elevation?: 'none' | 'low' | 'medium' | 'high';
  /** ARIA role for semantic meaning */
  role?: 'article' | 'region' | 'group';
  /** Accessible label for the card */
  ariaLabel?: string;
  /** Header content slot */
  header?: React.ReactNode;
  /** Media content slot (images, video, etc.) */
  media?: React.ReactNode;
  /** Main content slot */
  children: React.ReactNode;
  /** Footer content slot */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'medium',
  interactive = false,
  onClick,
  href,
  elevation,
  role,
  ariaLabel,
  header,
  media,
  children,
  footer,
  className = '',
}) => {
  // Determine if card should be interactive
  const isInteractive = interactive || Boolean(onClick) || Boolean(href);
  const isLink = Boolean(href);

  const classNames = [
    'ds-card',
    `ds-card--${variant}`,
    `ds-card--padding-${padding}`,
    isInteractive && 'ds-card--interactive',
    elevation && `ds-card--elevation-${elevation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isInteractive && onClick) {
      onClick(event);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isInteractive && !isLink && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onClick?.(event as unknown as React.MouseEvent<HTMLElement>);
    }
  };

  const cardProps = {
    className: classNames,
    role: role || (isInteractive && !isLink ? 'button' : undefined),
    'aria-label': ariaLabel,
    tabIndex: isInteractive && !isLink ? 0 : undefined,
    onClick: isInteractive ? handleClick : undefined,
    onKeyDown: isInteractive && !isLink ? handleKeyDown : undefined,
  };

  const CardContent = () => (
    <>
      {header && <div className="ds-card__header">{header}</div>}
      {media && <div className="ds-card__media">{media}</div>}
      <div className="ds-card__content">{children}</div>
      {footer && <div className="ds-card__footer">{footer}</div>}
    </>
  );

  // Render as link if href is provided
  if (isLink) {
    return (
      <a href={href} {...cardProps}>
        <CardContent />
      </a>
    );
  }

  // Render as div
  return (
    <div {...cardProps}>
      <CardContent />
    </div>
  );
};

export default Card;

