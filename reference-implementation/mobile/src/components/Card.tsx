/**
 * Card Component - React Native
 *
 * Implementation based on YAML specification:
 * /yaml/components/card.yaml
 *
 * Variants: default, outlined, elevated
 * Padding: none, compact, comfortable, spacious
 * Elevation: none, sm, md, lg, xl
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { tokens } from '../theme';

export interface CardProps {
  /** Card variant */
  variant?: 'default' | 'outlined' | 'elevated';
  /** Padding size */
  padding?: 'none' | 'compact' | 'comfortable' | 'spacious';
  /** Elevation level */
  elevation?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Whether card is interactive */
  interactive?: boolean;
  /** Callback when card is pressed (if interactive) */
  onPress?: () => void;
  /** Header content */
  header?: React.ReactNode;
  /** Media content (image, video, etc.) */
  media?: React.ReactNode;
  /** Main content */
  children: React.ReactNode;
  /** Footer content */
  footer?: React.ReactNode;
  /** Additional styles */
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'comfortable',
  elevation = 'none',
  interactive = false,
  onPress,
  header,
  media,
  children,
  footer,
  style,
}) => {
  // Build card container style
  const cardStyle: ViewStyle[] = [styles.card];

  // Variant styles
  if (variant === 'default') {
    cardStyle.push(styles.cardDefault);
  } else if (variant === 'outlined') {
    cardStyle.push(styles.cardOutlined);
  } else if (variant === 'elevated') {
    cardStyle.push(styles.cardElevated);
  }

  // Elevation styles
  if (elevation === 'sm') {
    cardStyle.push(tokens.shadow.sm);
  } else if (elevation === 'md') {
    cardStyle.push(tokens.shadow.md);
  } else if (elevation === 'lg') {
    cardStyle.push(tokens.shadow.lg);
  } else if (elevation === 'xl') {
    cardStyle.push(tokens.shadow.xl);
  }

  // Padding styles
  if (padding === 'compact') {
    cardStyle.push(styles.paddingCompact);
  } else if (padding === 'comfortable') {
    cardStyle.push(styles.paddingComfortable);
  } else if (padding === 'spacious') {
    cardStyle.push(styles.paddingSpacious);
  }

  // Apply custom style
  if (style) {
    cardStyle.push(style);
  }

  const CardContent = (
    <View style={cardStyle}>
      {header && <View style={styles.header}>{header}</View>}
      {media && <View style={styles.media}>{media}</View>}
      <View style={styles.content}>{children}</View>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );

  if (interactive && onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        accessible={true}
        accessibilityRole="button"
        activeOpacity={0.8}
      >
        {CardContent}
      </TouchableOpacity>
    );
  }

  return CardContent;
};

const styles = StyleSheet.create({
  // Base card
  card: {
    backgroundColor: tokens.colors.neutral.white,
    borderRadius: tokens.borderRadius.lg,
    overflow: 'hidden',
  },

  // Variant styles - Default
  cardDefault: {
    borderWidth: 1,
    borderColor: tokens.colors.neutral[200],
    ...tokens.shadow.sm,
  },

  // Variant styles - Outlined
  cardOutlined: {
    borderWidth: 2,
    borderColor: tokens.colors.neutral[300],
  },

  // Variant styles - Elevated
  cardElevated: {
    borderWidth: 0,
    ...tokens.shadow.lg,
  },

  // Padding styles
  paddingCompact: {
    padding: tokens.spacing[3],
  },
  paddingComfortable: {
    padding: tokens.spacing[4],
  },
  paddingSpacious: {
    padding: tokens.spacing[6],
  },

  // Slot styles
  header: {
    paddingBottom: tokens.spacing[4],
  },
  media: {
    marginHorizontal: -tokens.spacing[4], // Extend to card edges
    marginTop: -tokens.spacing[4],
    marginBottom: tokens.spacing[4],
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
  footer: {
    paddingTop: tokens.spacing[4],
  },
});

export default Card;

