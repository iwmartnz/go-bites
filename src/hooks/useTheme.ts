import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/Colors';

export const useTheme = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  const getColor = (
    props: { light?: string; dark?: string },
    colorName: keyof typeof Colors.light & keyof typeof Colors.dark
  ) => {
    const colorFromProps = props[colorScheme];

    if (colorFromProps) {
      return colorFromProps;
    } else {
      return Colors[colorScheme][colorName];
    }
  };

  return { theme, colorScheme, getColor };
};
