/**
 * React Native Demo App
 * 
 * Demonstrates all design system components implemented from YAML specifications.
 * This proves that the same YAML definitions can drive implementations across
 * React, Web Components, AND React Native.
 */

import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import { Button, Link, Input, Card, Dialog } from './src/components';
import { tokens } from './src/theme';

export default function App() {
  // State for dialog demos
  const [modalDialogOpen, setModalDialogOpen] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

  // State for input demos
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorInput, setErrorInput] = useState('invalid-email');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Design System Demo</Text>
          <Text style={styles.headerSubtitle}>React Native Implementation</Text>
          <Text style={styles.headerDescription}>
            All components built from the same YAML specifications used in React and Web Components demos.
          </Text>
        </View>

        {/* Button Component */}
        <Section title="Button Component" description="From yaml/components/button.yaml">
          <SubSection title="Variants">
            <Row>
              <Button label="Primary" variant="primary" size="medium" />
              <Button label="Secondary" variant="secondary" size="medium" />
            </Row>
            <Row>
              <Button label="Tertiary" variant="tertiary" size="medium" />
              <Button label="As Link" variant="as-link" size="medium" />
            </Row>
          </SubSection>

          <SubSection title="Sizes">
            <Row>
              <Button label="Small" variant="primary" size="small" />
              <Button label="Medium" variant="primary" size="medium" />
              <Button label="Large" variant="primary" size="large" />
            </Row>
          </SubSection>

          <SubSection title="States">
            <Row>
              <Button label="Disabled" variant="primary" size="medium" disabled />
              <Button label="Loading" variant="primary" size="medium" loading />
            </Row>
          </SubSection>

          <SubSection title="With Icons">
            <Row>
              <Button
                label="With Icon"
                variant="primary"
                size="medium"
                icon={<Text style={styles.icon}>→</Text>}
                iconPosition="right"
              />
              <Button
                variant="icon-only"
                size="medium"
                icon={<Text style={styles.icon}>✕</Text>}
                accessibilityLabel="Close"
              />
            </Row>
          </SubSection>
        </Section>

        {/* Link Component */}
        <Section title="Link Component" description="From yaml/components/link.yaml">
          <SubSection title="Variants">
            <Text style={styles.paragraph}>
              This is an <Link href="https://example.com" variant="inline">inline link</Link> within text.
            </Text>
            <Link href="https://example.com" variant="standalone">Standalone Link</Link>
            <Link href="https://example.com" variant="nav" active>Active Nav Link</Link>
            <Link href="https://example.com" variant="nav">Inactive Nav Link</Link>
          </SubSection>

          <SubSection title="With Icons">
            <Link
              href="https://example.com"
              variant="standalone"
              external
            >
              External Link
            </Link>
            <Link
              href="/download"
              variant="standalone"
              icon={<Text style={styles.icon}>↓</Text>}
              iconPosition="left"
            >
              Download Link
            </Link>
          </SubSection>
        </Section>

        {/* Input Component */}
        <Section title="Input Component" description="From yaml/components/input.yaml">
          <SubSection title="Types">
            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChangeText={setPassword}
            />
            <Input
              label="Phone"
              type="tel"
              placeholder="(555) 123-4567"
            />
          </SubSection>

          <SubSection title="Sizes">
            <Input label="Small" size="small" placeholder="Small input" />
            <Input label="Medium" size="medium" placeholder="Medium input" />
            <Input label="Large" size="large" placeholder="Large input" />
          </SubSection>

          <SubSection title="States">
            <Input
              label="With Error"
              type="email"
              value={errorInput}
              onChangeText={setErrorInput}
              error
              errorMessage="Please enter a valid email address"
            />
            <Input
              label="Disabled"
              placeholder="Cannot edit"
              disabled
            />
            <Input
              label="With Helper Text"
              placeholder="Your email"
              helperText="We'll never share your email"
            />
          </SubSection>
        </Section>

        {/* Card Component */}
        <Section title="Card Component" description="From yaml/components/card.yaml">
          <SubSection title="Variants">
            <Card variant="default" padding="comfortable">
              <Text style={styles.cardTitle}>Default Card</Text>
              <Text style={styles.cardText}>
                Standard card with subtle border and shadow.
              </Text>
            </Card>

            <Card variant="outlined" padding="comfortable">
              <Text style={styles.cardTitle}>Outlined Card</Text>
              <Text style={styles.cardText}>
                Card with emphasized border and no shadow.
              </Text>
            </Card>

            <Card variant="elevated" padding="comfortable">
              <Text style={styles.cardTitle}>Elevated Card</Text>
              <Text style={styles.cardText}>
                Card with prominent shadow elevation.
              </Text>
            </Card>
          </SubSection>

          <SubSection title="Interactive Card">
            <Card
              variant="default"
              padding="comfortable"
              interactive
              onPress={() => alert('Card clicked!')}
            >
              <Text style={styles.cardTitle}>Interactive Card</Text>
              <Text style={styles.cardText}>
                Click me! This card responds to interaction.
              </Text>
            </Card>
          </SubSection>

          <SubSection title="With Slots">
            <Card
              variant="default"
              padding="comfortable"
              header={<Text style={styles.cardTitle}>Card Title</Text>}
              footer={
                <View style={styles.cardFooter}>
                  <Button label="Cancel" variant="secondary" size="small" />
                  <Button label="Confirm" variant="primary" size="small" />
                </View>
              }
            >
              <Text style={styles.cardText}>
                Card with header and footer slots.
              </Text>
            </Card>

            <Card
              variant="default"
              padding="none"
              media={
                <View style={styles.cardMediaPlaceholder}>
                  <Text style={styles.cardMediaText}>🖼️</Text>
                  <Text style={styles.cardMediaText}>Image Placeholder</Text>
                </View>
              }
            >
              <View style={{ padding: tokens.spacing[4] }}>
                <Text style={styles.cardTitle}>Media Card</Text>
                <Text style={styles.cardText}>
                  Card with media slot (image placeholder).
                </Text>
              </View>
            </Card>
          </SubSection>
        </Section>

        {/* Dialog Component */}
        <Section title="Dialog Component" description="From yaml/components/dialog.yaml">
          <SubSection title="Variants">
            <Row>
              <Button
                label="Open Modal Dialog"
                variant="primary"
                onPress={() => setModalDialogOpen(true)}
              />
              <Button
                label="Open Alert"
                variant="secondary"
                onPress={() => setAlertDialogOpen(true)}
              />
            </Row>
            <Button
              label="Open Confirmation"
              variant="tertiary"
              onPress={() => setConfirmDialogOpen(true)}
            />
          </SubSection>
        </Section>

        {/* Modal Dialog */}
        <Dialog
          open={modalDialogOpen}
          onClose={() => setModalDialogOpen(false)}
          title="Edit Profile"
          size="medium"
        >
          <View style={styles.dialogContent}>
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Input label="Bio" placeholder="Tell us about yourself..." />
          </View>
          <View style={styles.dialogFooter}>
            <Button
              label="Cancel"
              variant="secondary"
              onPress={() => setModalDialogOpen(false)}
            />
            <Button
              label="Save Changes"
              variant="primary"
              onPress={() => setModalDialogOpen(false)}
            />
          </View>
        </Dialog>

        {/* Alert Dialog */}
        <Dialog
          open={alertDialogOpen}
          onClose={() => setAlertDialogOpen(false)}
          title="Warning"
          size="small"
          variant="alert"
          closeOnOverlayPress={false}
          showCloseButton={false}
        >
          <Text style={styles.dialogText}>
            Your session is about to expire. Please save your work.
          </Text>
          <View style={styles.dialogFooter}>
            <Button
              label="I Understand"
              variant="primary"
              onPress={() => setAlertDialogOpen(false)}
            />
          </View>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog
          open={confirmDialogOpen}
          onClose={() => setConfirmDialogOpen(false)}
          title="Delete Item"
          size="small"
          variant="confirmation"
          showCloseButton={false}
        >
          <Text style={styles.dialogText}>
            Are you sure you want to delete this item? This action cannot be undone.
          </Text>
          <View style={styles.dialogFooter}>
            <Button
              label="Cancel"
              variant="secondary"
              onPress={() => setConfirmDialogOpen(false)}
            />
            <Button
              label="Delete"
              variant="primary"
              onPress={() => {
                alert('Item deleted!');
                setConfirmDialogOpen(false);
              }}
            />
          </View>
        </Dialog>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🎉 All components implemented from YAML specifications
          </Text>
          <Text style={styles.footerText}>
            Proving the "Design System as Data" approach works across platforms
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Helper Components
const Section: React.FC<{ title: string; description: string; children: React.ReactNode }> = ({
  title,
  description,
  children,
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionDescription}>{description}</Text>
    {children}
  </View>
);

const SubSection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <View style={styles.subSection}>
    <Text style={styles.subSectionTitle}>{title}</Text>
    {children}
  </View>
);

const Row: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.row}>{children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.neutral[50],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: tokens.spacing[4],
  },

  // Header
  header: {
    paddingVertical: tokens.spacing[6],
    paddingHorizontal: tokens.spacing[4],
    backgroundColor: tokens.colors.neutral.white,
    borderRadius: tokens.borderRadius.lg,
    marginBottom: tokens.spacing[6],
    ...tokens.shadow.base,
  },
  headerTitle: {
    fontSize: tokens.typography.fontSize['3xl'],
    fontWeight: tokens.typography.fontWeight.bold,
    color: tokens.colors.neutral[900],
    marginBottom: tokens.spacing[2],
  },
  headerSubtitle: {
    fontSize: tokens.typography.fontSize.lg,
    fontWeight: tokens.typography.fontWeight.medium,
    color: tokens.colors.brand.primary[600],
    marginBottom: tokens.spacing[3],
  },
  headerDescription: {
    fontSize: tokens.typography.fontSize.base,
    color: tokens.colors.neutral[600],
    lineHeight: tokens.typography.fontSize.base * tokens.typography.lineHeight.relaxed,
  },

  // Section
  section: {
    marginBottom: tokens.spacing[8],
  },
  sectionTitle: {
    fontSize: tokens.typography.fontSize['2xl'],
    fontWeight: tokens.typography.fontWeight.bold,
    color: tokens.colors.neutral[900],
    marginBottom: tokens.spacing[2],
  },
  sectionDescription: {
    fontSize: tokens.typography.fontSize.sm,
    color: tokens.colors.neutral[600],
    marginBottom: tokens.spacing[4],
    fontFamily: tokens.typography.fontFamily.mono,
  },

  // SubSection
  subSection: {
    marginBottom: tokens.spacing[4],
  },
  subSectionTitle: {
    fontSize: tokens.typography.fontSize.lg,
    fontWeight: tokens.typography.fontWeight.semibold,
    color: tokens.colors.neutral[700],
    marginBottom: tokens.spacing[3],
  },

  // Row
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing[3],
    marginBottom: tokens.spacing[3],
  },

  // Paragraph
  paragraph: {
    fontSize: tokens.typography.fontSize.base,
    color: tokens.colors.neutral[700],
    lineHeight: tokens.typography.fontSize.base * tokens.typography.lineHeight.relaxed,
    marginBottom: tokens.spacing[3],
  },

  // Icon
  icon: {
    fontSize: tokens.typography.fontSize.lg,
  },

  // Card content
  cardTitle: {
    fontSize: tokens.typography.fontSize.lg,
    fontWeight: tokens.typography.fontWeight.semibold,
    color: tokens.colors.neutral[900],
    marginBottom: tokens.spacing[2],
  },
  cardText: {
    fontSize: tokens.typography.fontSize.base,
    color: tokens.colors.neutral[600],
    lineHeight: tokens.typography.fontSize.base * tokens.typography.lineHeight.relaxed,
  },
  cardFooter: {
    flexDirection: 'row',
    gap: tokens.spacing[2],
    justifyContent: 'flex-end',
  },
  cardMediaPlaceholder: {
    height: 200,
    backgroundColor: tokens.colors.brand.primary[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardMediaText: {
    fontSize: tokens.typography.fontSize.lg,
    color: tokens.colors.brand.primary[600],
  },

  // Dialog content
  dialogContent: {
    gap: tokens.spacing[4],
  },
  dialogText: {
    fontSize: tokens.typography.fontSize.base,
    color: tokens.colors.neutral[700],
    lineHeight: tokens.typography.fontSize.base * tokens.typography.lineHeight.relaxed,
  },
  dialogFooter: {
    flexDirection: 'row',
    gap: tokens.spacing[3],
    justifyContent: 'flex-end',
    marginTop: tokens.spacing[4],
  },

  // Footer
  footer: {
    paddingVertical: tokens.spacing[8],
    alignItems: 'center',
  },
  footerText: {
    fontSize: tokens.typography.fontSize.sm,
    color: tokens.colors.neutral[500],
    textAlign: 'center',
    marginBottom: tokens.spacing[1],
  },
});
