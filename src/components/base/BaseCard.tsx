// src/components/base/BaseCard.tsx
import { useTheme } from '@/theme';
import { Pressable, View, ViewProps } from 'react-native';

type BaseCardProps = ViewProps & {
  onPress?: () => void;
  padding?: number;
  elevation?: number;
  background?: keyof typeof theme.colors;
};

export function BaseCard({
  onPress,
  padding = 12,
  elevation = 2,
  background = 'surface',
  style,
  children,
  ...rest
}: BaseCardProps) {
  const theme = useTheme();

  const cardStyle = {
    backgroundColor: theme.colors[background],
    padding,
    borderRadius: theme.radius.medium,
    elevation,
    shadowColor: theme.colors.shadow,
    shadowOpacity: 0.15,
    shadowRadius: elevation,
    shadowOffset: { width: 0, height: elevation / 2 },
  };

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={[cardStyle, style]} {...rest}>
        {children}
      </Pressable>
    );
  }

  return (
    <View style={[cardStyle, style]} {...rest}>
      {children}
    </View>
  );
}
