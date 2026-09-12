// src/components/structure/ScreenWrapper.tsx

import tokens from '@/styles/tokens';
import { ReactNode } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

interface ScreenWrapperProps {
  children: ReactNode;
  scroll?: boolean;
}

export default function ScreenWrapper({ children, scroll = false }: ScreenWrapperProps) {
  const Wrapper = scroll ? ScrollView : View;

  return (
    <Wrapper
      contentContainerStyle={scroll ? styles.container : undefined}
      style={!scroll ? styles.container : undefined}
    >
      {children}
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: tokens.spacing.lg,
    backgroundColor: tokens.colors.background,
  },
});
