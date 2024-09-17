import { useTheme } from '@/hooks/useTheme';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

type Props = TextInputProps & {
  size?: 'sm' | 'md' | 'lg';
};

export default function Input({ size = 'sm', style, ...res }: Props) {
  const { theme } = useTheme();

  return (
    <TextInput
      {...res}
      style={[
        { backgroundColor: theme.input, color: theme.text, ...styles.default },
        size === 'sm' && styles.sm,
        size === 'md' && styles.md,
        size === 'lg' && styles.lg,
        style,
      ]}
      placeholderTextColor={theme.textMuted}
      selectionColor={theme.tint}
      cursorColor={theme.backgroundMuted}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Satoshi-Bold',
    flex: 1,
  },
  sm: {
    minHeight: 45,
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
  },
  md: { minHeight: 55, borderRadius: 16, padding: 10 },
  lg: {
    minHeight: 70,
    borderRadius: 20,
    padding: 10,
  },
});
