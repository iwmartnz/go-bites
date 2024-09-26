import { Pressable, StyleSheet } from 'react-native';
import Text from './text';
import { useTheme } from '@/hooks/useTheme';

type ChipProps = React.ComponentPropsWithoutRef<typeof Pressable> & {
  active?: boolean;
  text: string;
};
export default function Chip({
  active = false,
  text,
  ...pressableProps
}: ChipProps) {
  const { theme } = useTheme();

  return (
    <Pressable
      {...pressableProps}
      style={({ pressed }) => [
        styles.default,
        { borderColor: theme.button },
        active
          ? { backgroundColor: theme.button }
          : { backgroundColor: '#e2e2e2' },
      ]}
    >
      <Text
        style={[
          styles.text,
          active ? { color: theme.textInverted } : { color: theme.text },
        ]}
      >
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  default: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  text: {
    fontFamily: 'Satoshi-Bold',
  },
});
