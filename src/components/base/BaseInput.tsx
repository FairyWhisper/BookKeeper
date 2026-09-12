import { colors, radius, spacing, typography } from '@/styles';
import { StyleSheet, TextInput } from 'react-native';

interface BaseInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export function BaseInput({
  value,
  onChangeText,
  placeholder,
}: BaseInputProps): JSX.Element {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.border}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: spacing.md,
    borderRadius: radius.md,
    fontSize: typography.body.fontSize,
    lineHeight: typography.body.lineHeight,
    color: colors.text,
  },
});
