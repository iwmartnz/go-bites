import {
  ScrollView,
  View as NativeView,
  type ScrollViewProps,
  type ViewProps,
  StyleSheet,
} from 'react-native';
import {
  SafeAreaView,
  type SafeAreaViewProps,
} from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';

type ViewType = 'safeArea' | 'default' | 'scroll';
type ViewTheme = {
  lightColor?: string;
  darkColor?: string;
};

type Props<T extends ViewType> = T extends 'safeArea'
  ? { type?: 'safeArea' } & SafeAreaViewProps & ViewTheme
  : T extends 'scroll'
  ? { type?: 'scroll' } & ScrollViewProps & ViewTheme
  : T extends 'default'
  ? { type?: 'default' } & ViewProps & ViewTheme
  : never;

export default function View<T extends ViewType>({
  type = 'default',
  style,
  lightColor,
  darkColor,
  ...props
}: Props<T>) {
  const { getColor } = useTheme();
  const backgroundColor = getColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  // Render different components based on the `type` prop
  switch (type) {
    case 'default':
      return (
        <NativeView
          style={[{ backgroundColor }, style]}
          {...(props as ViewProps)}
        />
      );
    case 'scroll':
      return (
        <ScrollView
          style={[{ backgroundColor }, style]}
          {...(props as ScrollViewProps)}
        />
      );
    case 'safeArea':
      return (
        <SafeAreaView
          style={[styles.container, { backgroundColor }, style]}
          {...(props as SafeAreaViewProps)}
        />
      );
    default:
      return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
