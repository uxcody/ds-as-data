/**
 * Link Component - React Native
 *
 * Implementation based on YAML specification:
 * /yaml/components/link.yaml
 *
 * Variants: inline, standalone, nav
 * Sizes: small, medium, large
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Linking,
  StyleSheet,
  TextStyle,
} from 'react-native';
import { tokens } from '../theme';

export interface LinkProps {
  /** URL or path the link navigates to */
  href: string;
  /** Link text content */
  children: React.ReactNode;
  /** Link variant */
  variant?: 'inline' | 'standalone' | 'nav';
  /** Link size */
  size?: 'small' | 'medium' | 'large';
  /** Whether link points to external resource */
  external?: boolean;
  /** Icon to display with the link */
  icon?: React.ReactNode;
  /** Position of icon relative to text */
  iconPosition?: 'left' | 'right';
  /** Callback when link is pressed */
  onPress?: () => void;
  /** Accessible label for screen readers */
  accessibilityLabel?: string;
  /** Whether link is currently active/selected (for nav variant) */
  active?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  variant = 'inline',
  size = 'medium',
  external = false,
  icon,
  iconPosition = 'left',
  onPress,
  accessibilityLabel,
  active = false,
}) => {
  const handlePress = async () => {
    if (onPress) {
      onPress();
    } else {
      try {
        await Linking.openURL(href);
      } catch (error) {
        console.error('Failed to open URL:', error);
      }
    }
  };

  // Build text style
  const textStyle: TextStyle[] = [styles.linkText];

  // Variant styles
  if (variant === 'inline') {
    textStyle.push(styles.linkTextInline);
  } else if (variant === 'standalone') {
    textStyle.push(styles.linkTextStandalone);
  } else if (variant === 'nav') {
    textStyle.push(styles.linkTextNav);
    if (active) {
      textStyle.push(styles.linkTextNavActive);
    }
  }

  // Size styles
  if (size === 'small') {
    textStyle.push(styles.linkTextSmall);
  } else if (size === 'medium') {
    textStyle.push(styles.linkTextMedium);
  } else if (size === 'large') {
    textStyle.push(styles.linkTextLarge);
  }

  return (
    <TouchableOpacity
      onPress={handlePress}
      accessible={true}
      accessibilityRole="link"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={external ? 'Opens in external browser' : undefined}
      activeOpacity={0.7}
    >
      <View style={styles.linkContainer}>
        {icon && iconPosition === 'left' && (
          <View style={styles.iconLeft}>{icon}</View>
        )}
        <Text style={textStyle}>{children}</Text>
        {icon && iconPosition === 'right' && (
          <View style={styles.iconRight}>{icon}</View>
        )}
        {external && !icon && (
          <Text style={[textStyle, styles.externalIcon]}>  ↗</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Base text styles
  linkText: {
    fontFamily: tokens.typography.fontFamily.sans,
    color: tokens.colors.brand.primary[600],
  },

  // Variant styles - Inline
  linkTextInline: {
    textDecorationLine: 'underline',
  },

  // Variant styles - Standalone
  linkTextStandalone: {
    fontWeight: tokens.typography.fontWeight.medium,
  },

  // Variant styles - Nav
  linkTextNav: {
    fontWeight: tokens.typography.fontWeight.medium,
    color: tokens.colors.neutral[600],
  },
  linkTextNavActive: {
    color: tokens.colors.brand.primary[600],
    fontWeight: tokens.typography.fontWeight.semibold,
  },

  // Size styles - Small
  linkTextSmall: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.fontSize.sm * tokens.typography.lineHeight.normal,
  },

  // Size styles - Medium
  linkTextMedium: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.fontSize.base * tokens.typography.lineHeight.normal,
  },

  // Size styles - Large
  linkTextLarge: {
    fontSize: tokens.typography.fontSize.lg,
    lineHeight: tokens.typography.fontSize.lg * tokens.typography.lineHeight.normal,
  },

  // Icon styles
  iconLeft: {
    marginRight: tokens.spacing[1],
  },
  iconRight: {
    marginLeft: tokens.spacing[1],
  },

  // External icon
  externalIcon: {
    fontSize: tokens.typography.fontSize.sm,
  },
});

export default Link;

