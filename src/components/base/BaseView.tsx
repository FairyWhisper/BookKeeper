// src/components/base/BaseView.tsx
import { useTheme } from '@/theme';
import { View, ViewProps } from 'react-native';

type BaseViewProps = ViewProps & {
  background?: keyof typeof theme.colors;
};

export function BaseView({ background, style, ...rest }: BaseViewProps) {
  const theme = useTheme();

  const backgroundStyle = background
    ? { backgroundColor: theme.colors[background] }
    : {};

  return <View style={[backgroundStyle, style]} {...rest} />;
}
