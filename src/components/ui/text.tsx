import { Text as NativeText, StyleSheet, type TextProps } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

type Props = TextProps & {
  type?: 'default' | 'heading' | 'subHeading' | 'label' | 'link';
  lightColor?: string;
  darkColor?: string;
};

export default function Text({
  lightColor,
  darkColor,
  type = 'default',
  style,
  ...res
}: Props) {
  const { theme, getColor } = useTheme();
  const color = getColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <NativeText
      style={[
        { color, ...styles.default },
        type === 'default' && styles.default,
        type === 'heading' && styles.heading,
        type === 'subHeading' && styles.subHeading,
        type === 'label' && styles.label,
        type === 'link' && styles.link,
        style,
      ]}
      {...res}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: 'Satoshi-Medium',
  },
  heading: {
    fontSize: 26,
    lineHeight: 26,
    fontFamily: 'Satoshi-Bold',
  },
  subHeading: {
    fontSize: 18,
    fontFamily: 'Satoshi-Bold',
    lineHeight: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  details: {
    fontSize: 14,
    fontWeight: '600',
  },
});
