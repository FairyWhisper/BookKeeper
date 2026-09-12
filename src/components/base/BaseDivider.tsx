import { colors, spacing } from '@/styles';
import { View } from 'react-native';

export function BaseDivider(): JSX.Element {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: colors.border,
        marginVertical: spacing.md,
      }}
    />
  );
}
