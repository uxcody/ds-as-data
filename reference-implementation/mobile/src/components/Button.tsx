/**
 * Button Component - React Native
 *
 * Implementation based on YAML specification:
 * /yaml/components/button.yaml
 *
 * Variants: primary, secondary, tertiary, as-link, icon-only
 * Sizes: small, medium, large
 * States: default, disabled, loading
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  AccessibilityRole,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { tokens } from '../theme';

export interface ButtonProps {
  /** Text content of the button */
  label?: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'as-link' | 'icon-only';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Position of icon relative to label */
  iconPosition?: 'left' | 'right';
  /** Callback when button is pressed */
  onPress?: () => void;
  /** Whether button is disabled */
  disabled?: boolean;
  /** Whether button is in loading state */
  loading?: boolean;
  /** Accessible label for screen readers */
  accessibilityLabel?: string;
  /** Whether button acts as a toggle */
  accessibilityState?: {
    disabled?: boolean;
    expanded?: boolean;
    checked?: boolean;
  };
  /** Additional styles */
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'left',
  onPress,
  disabled = false,
  loading = false,
  accessibilityLabel,
  accessibilityState,
  style,
}) => {
  const isDisabled = disabled || loading;
  const isIconOnly = variant === 'icon-only';

  // Build button container style
  const buttonStyle: ViewStyle[] = [styles.button];

  // Variant styles
  if (variant === 'primary') {
    buttonStyle.push(styles.buttonPrimary);
    if (isDisabled) buttonStyle.push(styles.buttonPrimaryDisabled);
  } else if (variant === 'secondary') {
    buttonStyle.push(styles.buttonSecondary);
    if (isDisabled) buttonStyle.push(styles.buttonSecondaryDisabled);
  } else if (variant === 'tertiary') {
    buttonStyle.push(styles.buttonTertiary);
    if (isDisabled) buttonStyle.push(styles.buttonTertiaryDisabled);
  } else if (variant === 'as-link') {
    buttonStyle.push(styles.buttonAsLink);
  }

  // Size styles
  if (size === 'small') {
    buttonStyle.push(isIconOnly ? styles.buttonIconOnlySmall : styles.buttonSmall);
  } else if (size === 'medium') {
    buttonStyle.push(isIconOnly ? styles.buttonIconOnlyMedium : styles.buttonMedium);
  } else if (size === 'large') {
    buttonStyle.push(isIconOnly ? styles.buttonIconOnlyLarge : styles.buttonLarge);
  }

  // Icon-only specific styles
  if (isIconOnly) {
    buttonStyle.push(styles.buttonIconOnly);
  }

  // Apply custom style
  if (style) {
    buttonStyle.push(style);
  }

  // Build text style
  const textStyle: TextStyle[] = [styles.buttonText];

  // Variant text styles
  if (variant === 'primary') {
    textStyle.push(styles.buttonTextPrimary);
    if (isDisabled) textStyle.push(styles.buttonTextPrimaryDisabled);
  } else if (variant === 'secondary') {
    textStyle.push(styles.buttonTextSecondary);
    if (isDisabled) textStyle.push(styles.buttonTextSecondaryDisabled);
  } else if (variant === 'tertiary') {
    textStyle.push(styles.buttonTextTertiary);
    if (isDisabled) textStyle.push(styles.buttonTextTertiaryDisabled);
  } else if (variant === 'as-link') {
    textStyle.push(styles.buttonTextAsLink);
    if (isDisabled) textStyle.push(styles.buttonTextAsLinkDisabled);
  }

  // Size text styles
  if (size === 'small') {
    textStyle.push(styles.buttonTextSmall);
  } else if (size === 'medium') {
    textStyle.push(styles.buttonTextMedium);
  } else if (size === 'large') {
    textStyle.push(styles.buttonTextLarge);
  }

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={isDisabled}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      accessibilityState={{
        disabled: isDisabled,
        busy: loading,
        ...accessibilityState,
      }}
      activeOpacity={0.7}
    >
      <View style={styles.buttonContent}>
        {loading && (
          <ActivityIndicator
            size="small"
            color={
              variant === 'primary'
                ? tokens.colors.neutral.white
                : tokens.colors.brand.primary[600]
            }
            style={styles.spinner}
          />
        )}
        {!loading && icon && iconPosition === 'left' && (
          <View style={styles.iconLeft}>{icon}</View>
        )}
        {!isIconOnly && label && <Text style={textStyle}>{label}</Text>}
        {!loading && icon && iconPosition === 'right' && (
          <View style={styles.iconRight}>{icon}</View>
        )}
        {isIconOnly && !loading && icon && <View>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Base button styles
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: tokens.borderRadius.base,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Variant styles - Primary
  buttonPrimary: {
    backgroundColor: tokens.colors.brand.primary[600],
    ...tokens.shadow.base,
  },
  buttonPrimaryDisabled: {
    backgroundColor: tokens.colors.neutral[300],
    ...tokens.shadow.none,
  },

  // Variant styles - Secondary
  buttonSecondary: {
    backgroundColor: tokens.colors.neutral.white,
    borderColor: tokens.colors.brand.primary[600],
    ...tokens.shadow.sm,
  },
  buttonSecondaryDisabled: {
    backgroundColor: tokens.colors.neutral[100],
    borderColor: tokens.colors.neutral[300],
    ...tokens.shadow.none,
  },

  // Variant styles - Tertiary
  buttonTertiary: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
  },
  buttonTertiaryDisabled: {
    backgroundColor: 'transparent',
  },

  // Variant styles - As Link
  buttonAsLink: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    ...tokens.shadow.none,
  },

  // Size styles - Small
  buttonSmall: {
    paddingHorizontal: tokens.spacing[3],
    paddingVertical: tokens.spacing[2],
    minHeight: 32,
    gap: tokens.spacing[2],
  },
  buttonIconOnlySmall: {
    width: 32,
    height: 32,
    padding: tokens.spacing[2],
  },

  // Size styles - Medium
  buttonMedium: {
    paddingHorizontal: tokens.spacing[4],
    paddingVertical: tokens.spacing[3],
    minHeight: 40,
    gap: tokens.spacing[2],
  },
  buttonIconOnlyMedium: {
    width: 40,
    height: 40,
    padding: tokens.spacing[2],
  },

  // Size styles - Large
  buttonLarge: {
    paddingHorizontal: tokens.spacing[6],
    paddingVertical: tokens.spacing[4],
    minHeight: 48,
    gap: tokens.spacing[3],
  },
  buttonIconOnlyLarge: {
    width: 48,
    height: 48,
    padding: tokens.spacing[3],
  },

  // Icon-only specific
  buttonIconOnly: {
    borderRadius: tokens.borderRadius.full,
  },

  // Text styles - Base
  buttonText: {
    fontFamily: tokens.typography.fontFamily.sans,
    fontWeight: tokens.typography.fontWeight.semibold,
  },

  // Text styles - Variant: Primary
  buttonTextPrimary: {
    color: tokens.colors.neutral.white,
  },
  buttonTextPrimaryDisabled: {
    color: tokens.colors.neutral[500],
  },

  // Text styles - Variant: Secondary
  buttonTextSecondary: {
    color: tokens.colors.brand.primary[600],
  },
  buttonTextSecondaryDisabled: {
    color: tokens.colors.neutral[400],
  },

  // Text styles - Variant: Tertiary
  buttonTextTertiary: {
    color: tokens.colors.brand.primary[600],
  },
  buttonTextTertiaryDisabled: {
    color: tokens.colors.neutral[400],
  },

  // Text styles - Variant: As Link
  buttonTextAsLink: {
    color: tokens.colors.brand.primary[600],
    textDecorationLine: 'underline',
  },
  buttonTextAsLinkDisabled: {
    color: tokens.colors.neutral[400],
  },

  // Text styles - Size: Small
  buttonTextSmall: {
    fontSize: tokens.typography.fontSize.sm,
    lineHeight: tokens.typography.fontSize.sm * tokens.typography.lineHeight.normal,
  },

  // Text styles - Size: Medium
  buttonTextMedium: {
    fontSize: tokens.typography.fontSize.base,
    lineHeight: tokens.typography.fontSize.base * tokens.typography.lineHeight.normal,
  },

  // Text styles - Size: Large
  buttonTextLarge: {
    fontSize: tokens.typography.fontSize.lg,
    lineHeight: tokens.typography.fontSize.lg * tokens.typography.lineHeight.normal,
  },

  // Icon styles
  iconLeft: {
    marginRight: tokens.spacing[2],
  },
  iconRight: {
    marginLeft: tokens.spacing[2],
  },

  // Loading spinner
  spinner: {
    marginRight: tokens.spacing[2],
  },
});

export default Button;

