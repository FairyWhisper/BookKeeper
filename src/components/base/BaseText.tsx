// src/components/base/BaseText.tsx
import { useTheme } from '@/theme';
import { Text, TextProps } from 'react-native';

type BaseTextProps = TextProps & {
  variant?: 'body' | 'heading' | 'caption';
};

export function BaseText({ variant = 'body', style, ...rest }: BaseTextProps) {
  const theme = useTheme();

  const variantStyle = (() => {
    switch (variant) {
      case 'heading':
        return { fontSize: 20, fontWeight: '600', color: theme.colors.text };
      case 'caption':
        return { fontSize: 12, color: theme.colors.textSecondary };
      default:
        return { fontSize: 16, color: theme.colors.text };
    }
  })();

  return <Text style={[variantStyle, style]} {...rest} />;
}
