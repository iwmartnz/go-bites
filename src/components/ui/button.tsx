import { StyleSheet, type PressableProps, Pressable } from 'react-native';

import Text from '@/components/ui/text';

import { useTheme } from '@/hooks/useTheme';

type Props = PressableProps & {
  type?: 'default' | 'primary' | 'secondary' | 'chip';
  title: string;
  lightColor?: string;
  darkColor?: string;
};

export default function Button({
  style,
  type,
  title,
  lightColor,
  darkColor,
  ...res
}: Props) {
  const { theme } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        type === 'primary' && {
          backgroundColor: theme.buttonPrimary,
          ...styles.primary,
        },
        type === 'chip' && {
          backgroundColor: theme.chip,
          ...styles.chip,
        },
      ]}
      {...res}
    >
      <Text
        style={[
          { ...styles.default },
          type === 'primary' && { color: theme.textInverted },
          type === 'chip' && { color: theme.chipText },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  default: { fontSize: 16, fontFamily: 'Satoshi-Black' },
  primary: {
    height: 70,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: '#5b5b5b',
  },
  chip: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
  },
});
