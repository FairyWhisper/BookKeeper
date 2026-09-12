import { colors, radius, spacing, typography } from '@/styles';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface BaseButtonProps {
  label: string;
  onPress: () => void;
}

export function BaseButton({ label, onPress }: BaseButtonProps): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
  },
  label: {
    color: colors.surface,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    textAlign: 'center',
  },
});
