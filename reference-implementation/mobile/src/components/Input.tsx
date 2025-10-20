/**
 * Input Component - React Native
 *
 * Implementation based on YAML specification:
 * /yaml/components/input.yaml
 *
 * Types: text, email, password, number, tel, url, search
 * Sizes: small, medium, large
 * States: default, error, disabled, readonly
 */

import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { tokens } from '../theme';

export interface InputProps {
  /** Input label text */
  label?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Placeholder text */
  placeholder?: string;
  /** Current input value */
  value?: string;
  /** Callback when value changes */
  onChangeText?: (text: string) => void;
  /** Whether input is disabled */
  disabled?: boolean;
  /** Whether input is readonly */
  readonly?: boolean;
  /** Whether input has an error */
  error?: boolean;
  /** Error message to display */
  errorMessage?: string;
  /** Helper text to display below input */
  helperText?: string;
  /** Whether input is required */
  required?: boolean;
  /** Accessible label for screen readers */
  accessibilityLabel?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  size = 'medium',
  placeholder,
  value,
  onChangeText,
  disabled = false,
  readonly = false,
  error = false,
  errorMessage,
  helperText,
  required = false,
  accessibilityLabel,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Map input type to React Native keyboard type
  const keyboardType: KeyboardTypeOptions = 
    type === 'email' ? 'email-address' :
    type === 'number' ? 'numeric' :
    type === 'tel' ? 'phone-pad' :
    type === 'url' ? 'url' :
    'default';

  // Build wrapper style
  const wrapperStyle: ViewStyle[] = [styles.inputWrapper];
  if (isFocused) {
    wrapperStyle.push(styles.inputWrapperFocus);
  }
  if (error) {
    wrapperStyle.push(styles.inputWrapperError);
  }
  if (disabled) {
    wrapperStyle.push(styles.inputWrapperDisabled);
  }

  // Build input style
  const inputStyle: TextStyle[] = [styles.input];

  // Size styles
  if (size === 'small') {
    inputStyle.push(styles.inputSmall);
  } else if (size === 'medium') {
    inputStyle.push(styles.inputMedium);
  } else if (size === 'large') {
    inputStyle.push(styles.inputLarge);
  }

  if (disabled) {
    inputStyle.push(styles.inputDisabled);
  }

  return (
    <View style={styles.container}>
      {label && (
        <Text style={styles.label}>
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}
      <View style={wrapperStyle}>
        <TextInput
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={tokens.colors.neutral[400]}
          editable={!disabled && !readonly}
          secureTextEntry={type === 'password'}
          keyboardType={keyboardType}
          autoCapitalize={type === 'email' || type === 'url' ? 'none' : 'sentences'}
          autoCorrect={type !== 'email' && type !== 'url'}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          accessible={true}
          accessibilityLabel={accessibilityLabel || label}
          accessibilityHint={helperText}
          accessibilityState={{
            disabled,
          }}
        />
      </View>
      {error && errorMessage && (
        <Text style={styles.errorText}>{errorMessage}</Text>
      )}
      {!error && helperText && (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: tokens.spacing[4],
  },

  // Label
  label: {
    fontSize: tokens.typography.fontSize.sm,
    fontWeight: tokens.typography.fontWeight.medium,
    color: tokens.colors.neutral[700],
    marginBottom: tokens.spacing[2],
    fontFamily: tokens.typography.fontFamily.sans,
  },
  required: {
    color: tokens.colors.error[600],
  },

  // Input wrapper
  inputWrapper: {
    borderWidth: 1,
    borderColor: tokens.colors.neutral[300],
    borderRadius: tokens.borderRadius.base,
    backgroundColor: tokens.colors.neutral.white,
  },
  inputWrapperFocus: {
    borderColor: tokens.colors.brand.primary[600],
    borderWidth: 2,
  },
  inputWrapperError: {
    borderColor: tokens.colors.error[600],
  },
  inputWrapperDisabled: {
    backgroundColor: tokens.colors.neutral[100],
    borderColor: tokens.colors.neutral[200],
  },

  // Input field
  input: {
    fontFamily: tokens.typography.fontFamily.sans,
    color: tokens.colors.neutral[900],
  },

  // Size styles - Small
  inputSmall: {
    paddingHorizontal: tokens.spacing[3],
    paddingVertical: tokens.spacing[2],
    fontSize: tokens.typography.fontSize.sm,
    minHeight: 32,
  },

  // Size styles - Medium
  inputMedium: {
    paddingHorizontal: tokens.spacing[3],
    paddingVertical: tokens.spacing[2],
    fontSize: tokens.typography.fontSize.base,
    minHeight: 40,
  },

  // Size styles - Large
  inputLarge: {
    paddingHorizontal: tokens.spacing[4],
    paddingVertical: tokens.spacing[3],
    fontSize: tokens.typography.fontSize.lg,
    minHeight: 48,
  },

  // Disabled state
  inputDisabled: {
    color: tokens.colors.neutral[500],
  },

  // Helper text
  helperText: {
    fontSize: tokens.typography.fontSize.sm,
    color: tokens.colors.neutral[600],
    marginTop: tokens.spacing[1],
    fontFamily: tokens.typography.fontFamily.sans,
  },

  // Error text
  errorText: {
    fontSize: tokens.typography.fontSize.sm,
    color: tokens.colors.error[600],
    marginTop: tokens.spacing[1],
    fontFamily: tokens.typography.fontFamily.sans,
  },
});

export default Input;

