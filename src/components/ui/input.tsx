import { useTheme } from '@/hooks/useTheme';
import { StyleSheet, TextInput } from 'react-native';

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {
  size: 'sm' | 'md' | 'lg';
};

const Input = ({ size = 'sm', style, ...inputProps }: InputProps) => {
  const { theme } = useTheme();

  return (
    <TextInput
      {...inputProps}
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
};

const styles = StyleSheet.create({
  default: {
    fontFamily: 'Satoshi-Bold',
  },
  sm: {
    height: 45,
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
  },
  md: { height: 55, borderRadius: 16, padding: 10 },
  lg: {
    height: 70,
    borderRadius: 20,
    padding: 10,
  },
});

export default Input;
