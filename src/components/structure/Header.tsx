// src/components/structure/Header.tsx

import { BaseButton as Button, BaseIcon as Icon } from '@/components/base';
import { Row } from '@/components/structure';
import tokens from '@/styles/tokens';
import { Text, TextStyle } from 'react-native';

interface HeaderProps {
  title: string;
  onBack?: () => void;
  onHome?: () => void;
}

export default function Header({ title, onBack, onHome }: HeaderProps) {
  return (
    <Row
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: tokens.spacing.lg,
      }}
    >
      {/* Branding */}
      <Row style={{ alignItems: 'center' }}>
        <Icon name="book" size={tokens.icon.md} color={tokens.colors.primary} />

        <Text
          style={{
            marginLeft: tokens.spacing.sm,
            fontSize: tokens.typography.heading.fontSize,
            color: tokens.colors.text.primary,
          } as TextStyle}
        >
          {title}
        </Text>
      </Row>

      {/* Navigation Buttons */}
      <Row style={{ gap: tokens.spacing.md }}>
        {onBack && <Button label="Back" onPress={onBack} />}
        {onHome && <Button label="Home" onPress={onHome} />}
      </Row>
    </Row>
  );
}
