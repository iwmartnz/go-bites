import { StyleSheet, type PressableProps, Pressable, View } from 'react-native';
import { forwardRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import Text from '@/components/ui/text';

type ButtonProps = PressableProps & {
  type?: 'default' | 'chip';
  text: string;
};

const Button = forwardRef<View | null, ButtonProps>(
  ({ style, type = 'default', text, ...res }, ref) => {
    const { theme } = useTheme();

    return (
      <Pressable
        ref={ref}
        style={({ pressed }) => [
          type === 'default' && {
            ...styles.default,
            backgroundColor: theme.button,
          },
          type === 'chip' && {
            ...styles.chip,
            backgroundColor: theme.chip,
          },
        ]}
        {...res}
      >
        <Text
          style={[
            { ...styles.textDefault },
            type === 'default' && { color: theme.textInverted },
            type === 'chip' && { color: theme.chipText },
          ]}
        >
          {text}
        </Text>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  default: {
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondary: {
    backgroundColor: '#5b5b5b',
  },
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
  textDefault: {
    fontSize: 16,
    fontFamily: 'Satoshi-Black',
  },
});

export default Button;
