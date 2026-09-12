// src/screens/TemplateScreen.tsx

import { Column } from '@/components/structure';
import Header from '@/components/structure/Header';
import ScreenWrapper from '@/components/structure/ScreenWrapper';
import tokens from '@/styles/tokens';
import { Text, View } from 'react-native';

export default function TemplateScreen() {
  return (
    <ScreenWrapper>

      <Header
        title="Book Keeper"
        onBack={() => {}}
        onHome={() => {}}
      />

      <Column style={{ gap: tokens.spacing.md }}>
        <Text
          style={{
            fontSize: tokens.typography.subheading.fontSize,
            color: tokens.colors.secondary,
          }}
        >
          Placeholder Content Area
        </Text>

        <View
          style={{
            padding: tokens.spacing.md,
            backgroundColor: tokens.colors.surface,
            borderRadius: tokens.radius.md,
          }}
        >
          <Text style={{ color: tokens.colors.text.primary }}>
            This is where each screen’s unique content will go.
          </Text>
        </View>
      </Column>

    </ScreenWrapper>
  );
}
