import { Text as NativeText, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { forwardRef } from 'react';

type TextProps = React.ComponentPropsWithoutRef<typeof NativeText> & {
  type?: 'default' | 'heading' | 'subHeading' | 'label' | 'link' | 'price';
};

const Text = forwardRef<View | null, TextProps>(
  ({ type = 'default', style, ...res }, ref) => {
    const { theme, getColor } = useTheme();

    return (
      <NativeText
        ref={ref}
        style={[
          { color: theme.text, ...styles.default },
          type === 'default' && styles.default,
          type === 'heading' && styles.heading,
          type === 'subHeading' && styles.subHeading,
          type === 'label' && styles.label,
          type === 'link' && { color: theme.textLink },
          type === 'price' && { color: theme.textMuted },
          style,
        ]}
        {...res}
      />
    );
  }
);

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Satoshi-Medium',
  },
  heading: {
    fontSize: 26,
    lineHeight: 26,
    fontFamily: 'Satoshi-Black',
  },
  subHeading: {
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    lineHeight: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Satoshi-Bold',
  },
});

export default Text;
