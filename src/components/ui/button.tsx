import { StyleSheet, Pressable, View } from 'react-native';
import { forwardRef } from 'react';
import { useTheme } from '@/hooks/useTheme';
import Text from '@/components/ui/text';

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  type?: 'default' | 'chip' | 'ghost';
  text: string;
};

const Button = forwardRef<View | null, ButtonProps>(
  ({ type = 'default', text, ...pressableProps }, ref) => {
    const { theme } = useTheme();

    return (
      <Pressable
        ref={ref}
        {...pressableProps}
        style={({ pressed }) => [
          type === 'default' && {
            ...styles.default,
            backgroundColor: theme.button,
          },
          type === 'ghost' && {
            ...styles.default,
            backgroundColor: theme.backgroundTransparent,
          },
          type === 'chip' && {
            ...styles.chip,
            backgroundColor: theme.chip,
          },
        ]}
      >
        <Text
          style={[
            { ...styles.textDefault },
            type === 'default' && { color: theme.textInverted },
            type === 'chip' && { ...styles.textChip, color: theme.chipText },
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
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  textDefault: {
    fontSize: 16,
    fontFamily: 'Satoshi-Black',
  },
  textChip: {
    fontFamily: 'Satoshi-Bold',
  },
});

export default Button;
