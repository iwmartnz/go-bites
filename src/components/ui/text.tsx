import { Text as NativeText, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { forwardRef } from 'react';

type TextProps = React.ComponentPropsWithoutRef<typeof NativeText> & {
  type?: 'default' | 'heading' | 'subHeading' | 'label' | 'link';
  lightColor?: string;
  darkColor?: string;
};

const Text = forwardRef<View | null, TextProps>(
  ({ lightColor, darkColor, type = 'default', style, ...res }, ref) => {
    const { theme, getColor } = useTheme();
    const color = getColor({ light: lightColor, dark: darkColor }, 'text');

    return (
      <NativeText
        ref={ref}
        style={[
          { color, ...styles.default },
          type === 'default' && styles.default,
          type === 'heading' && styles.heading,
          type === 'subHeading' && styles.subHeading,
          type === 'label' && styles.label,
          type === 'link' && { color: theme.textLink },
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
