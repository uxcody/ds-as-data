/**
 * Dialog Component - React Native
 *
 * Implementation based on YAML specification:
 * /yaml/components/dialog.yaml
 *
 * Variants: modal, alert, confirmation
 * Sizes: small, medium, large, fullscreen
 */

import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  ViewStyle,
} from 'react-native';
import { tokens } from '../theme';

export interface DialogProps {
  /** Whether dialog is visible */
  open: boolean;
  /** Callback when dialog should close */
  onClose: () => void;
  /** Dialog title */
  title?: string;
  /** Dialog size */
  size?: 'small' | 'medium' | 'large' | 'fullscreen';
  /** Dialog variant */
  variant?: 'modal' | 'alert' | 'confirmation';
  /** Whether clicking overlay closes dialog */
  closeOnOverlayPress?: boolean;
  /** Whether to show close button */
  showCloseButton?: boolean;
  /** Header content */
  header?: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  title,
  size = 'medium',
  variant = 'modal',
  closeOnOverlayPress = true,
  showCloseButton = true,
  header,
  children,
  footer,
}) => {
  // Variant-specific defaults
  const shouldCloseOnOverlayPress = variant === 'modal' ? closeOnOverlayPress : false;
  const shouldShowCloseButton = variant === 'modal' ? showCloseButton : false;

  // Build dialog style
  const dialogStyle: ViewStyle[] = [styles.dialog];

  // Size styles
  if (size === 'small') {
    dialogStyle.push(styles.dialogSmall);
  } else if (size === 'medium') {
    dialogStyle.push(styles.dialogMedium);
  } else if (size === 'large') {
    dialogStyle.push(styles.dialogLarge);
  } else if (size === 'fullscreen') {
    dialogStyle.push(styles.dialogFullscreen);
  }

  // Variant-specific styles
  if (variant === 'alert') {
    dialogStyle.push(styles.dialogAlert);
  } else if (variant === 'confirmation') {
    dialogStyle.push(styles.dialogConfirmation);
  }

  const handleOverlayPress = () => {
    if (shouldCloseOnOverlayPress) {
      onClose();
    }
  };

  return (
    <Modal
      visible={open}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={handleOverlayPress}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={dialogStyle}>
              {(title || header || shouldShowCloseButton) && (
                <View style={styles.header}>
                  {(title || header) && (
                    <Text style={styles.title}>{title || header}</Text>
                  )}
                  {shouldShowCloseButton && (
                    <TouchableOpacity
                      onPress={onClose}
                      style={styles.closeButton}
                      accessible={true}
                      accessibilityRole="button"
                      accessibilityLabel="Close dialog"
                    >
                      <Text style={styles.closeButtonText}>✕</Text>
                    </TouchableOpacity>
                  )}
                </View>
              )}

              <ScrollView
                style={styles.content}
                contentContainerStyle={styles.contentContainer}
              >
                {children}
              </ScrollView>

              {footer && <View style={styles.footer}>{footer}</View>}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  // Overlay/Backdrop
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: tokens.spacing[4],
  },

  // Dialog container
  dialog: {
    backgroundColor: tokens.colors.neutral.white,
    borderRadius: tokens.borderRadius.xl,
    ...tokens.shadow['2xl'],
    maxHeight: '90%',
    width: '100%',
  },

  // Size styles
  dialogSmall: {
    maxWidth: 400,
  },
  dialogMedium: {
    maxWidth: 600,
  },
  dialogLarge: {
    maxWidth: 800,
  },
  dialogFullscreen: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: '100%',
    height: '100%',
    borderRadius: 0,
    padding: tokens.spacing[8],
  },

  // Variant styles
  dialogAlert: {
    // Alert-specific styles if needed
  },
  dialogConfirmation: {
    // Confirmation-specific styles if needed
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: tokens.spacing[6],
    paddingBottom: tokens.spacing[4],
    borderBottomWidth: 1,
    borderBottomColor: tokens.colors.neutral[200],
  },

  title: {
    flex: 1,
    fontSize: tokens.typography.fontSize.xl,
    fontWeight: tokens.typography.fontWeight.semibold,
    lineHeight: tokens.typography.fontSize.xl * tokens.typography.lineHeight.tight,
    color: tokens.colors.neutral[900],
    fontFamily: tokens.typography.fontFamily.sans,
  },

  // Close button
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: tokens.borderRadius.base,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: tokens.spacing[4],
  },
  closeButtonText: {
    fontSize: tokens.typography.fontSize.xl,
    color: tokens.colors.neutral[600],
    lineHeight: tokens.typography.fontSize.xl,
  },

  // Content
  content: {
    flex: 1,
  },
  contentContainer: {
    padding: tokens.spacing[6],
  },

  // Footer
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: tokens.spacing[3],
    padding: tokens.spacing[6],
    paddingTop: tokens.spacing[4],
    borderTopWidth: 1,
    borderTopColor: tokens.colors.neutral[200],
  },
});

export default Dialog;

