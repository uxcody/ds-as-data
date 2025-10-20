/**
 * Dialog Component
 *
 * Implementation based on YAML specification:
 * /yaml/components/dialog.yaml
 *
 * Variants: modal, alert, confirmation
 * Sizes: small, medium, large, fullscreen
 * Features: focus trap, backdrop, keyboard handling, accessibility
 */

import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import '../../../../shared/styles/components/dialog.css';

export interface DialogProps {
  /** Whether the dialog is visible */
  open: boolean;
  /** Callback when dialog should close */
  onClose: () => void;
  /** Dialog title text */
  title?: string;
  /** Dialog size variant */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  /** Dialog behavior variant */
  variant?: 'modal' | 'alert' | 'confirmation';
  /** Whether clicking overlay closes dialog */
  closeOnOverlayClick?: boolean;
  /** Whether Escape key closes dialog */
  closeOnEscape?: boolean;
  /** Whether to show close button in header */
  showCloseButton?: boolean;
  /** Whether to prevent body scroll when open */
  preventScroll?: boolean;
  /** Whether to return focus to trigger element on close */
  returnFocus?: boolean;
  /** Accessible label for dialog */
  ariaLabel?: string;
  /** ID of element describing dialog purpose */
  ariaDescribedBy?: string;
  /** Header content slot */
  header?: React.ReactNode;
  /** Main content slot */
  children: React.ReactNode;
  /** Footer content slot */
  footer?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  size = 'medium',
  variant = 'modal',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  showCloseButton = true,
  preventScroll = true,
  returnFocus = true,
  ariaLabel,
  ariaDescribedBy,
  header,
  children,
  footer,
  className = '',
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Variant-specific defaults
  const shouldCloseOnOverlayClick = variant === 'modal' ? closeOnOverlayClick : false;
  const shouldCloseOnEscape = variant === 'alert' ? false : closeOnEscape;
  const shouldShowCloseButton = variant === 'modal' ? showCloseButton : false;

  // Store the element that triggered the dialog
  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }
  }, [open]);

  // Focus management
  useEffect(() => {
    if (open && dialogRef.current) {
      // Focus the first focusable element or the dialog itself
      const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      } else {
        dialogRef.current.focus();
      }
    }

    // Return focus when dialog closes
    return () => {
      if (!open && returnFocus && previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [open, returnFocus]);

  // Prevent body scroll
  useEffect(() => {
    if (open && preventScroll) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open, preventScroll]);

  // Keyboard handling
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Handle Escape key
      if (event.key === 'Escape' && shouldCloseOnEscape) {
        onClose();
        return;
      }

      // Handle Tab key for focus trap
      if (event.key === 'Tab' && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          // Shift+Tab on first element: focus last
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          // Tab on last element: focus first
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose, shouldCloseOnEscape]);

  // Handle overlay click
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && shouldCloseOnOverlayClick) {
      onClose();
    }
  };

  if (!open) return null;

  const dialogClassNames = [
    'ds-dialog',
    `ds-dialog--${size}`,
    `ds-dialog--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const titleId = title ? 'dialog-title' : undefined;

  const dialogContent = (
    <div className="ds-dialog-overlay" onClick={handleOverlayClick}>
      <div
        ref={dialogRef}
        className={dialogClassNames}
        role={variant === 'alert' ? 'alertdialog' : 'dialog'}
        aria-modal={true}
        aria-labelledby={title ? titleId : undefined}
        aria-label={!title ? ariaLabel : undefined}
        aria-describedby={ariaDescribedBy}
        tabIndex={-1}
      >
        {(title || header || shouldShowCloseButton) && (
          <div className="ds-dialog__header">
            {(title || header) && (
              <div id={titleId} className="ds-dialog__title">
                {title || header}
              </div>
            )}
            {shouldShowCloseButton && (
              <button
                type="button"
                className="ds-dialog__close-button"
                onClick={onClose}
                aria-label="Close dialog"
              >
                ✕
              </button>
            )}
          </div>
        )}

        <div className="ds-dialog__content">
          {children}
        </div>

        {footer && (
          <div className="ds-dialog__footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );

  // Render in portal
  return createPortal(dialogContent, document.body);
};

export default Dialog;

