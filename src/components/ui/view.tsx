import { ScrollView, View as NativeView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';

type ViewType = 'safeArea' | 'default' | 'scroll';

type ViewProps<T extends ViewType> = T extends 'safeArea'
  ? { type?: 'safeArea' } & React.ComponentPropsWithoutRef<typeof SafeAreaView>
  : T extends 'scroll'
  ? { type?: 'scroll' } & React.ComponentPropsWithoutRef<typeof ScrollView>
  : { type?: 'default' } & React.ComponentPropsWithoutRef<typeof NativeView>;

const View = <T extends ViewType>({
  type = 'default',
  style,
  ...props
}: ViewProps<T>) => {
  const { theme } = useTheme();

  // Render different components based on the `type` prop
  switch (type) {
    case 'default':
      return (
        <NativeView
          style={[{ backgroundColor: theme.background }, style]}
          {...(props as React.ComponentPropsWithoutRef<typeof NativeView>)}
        />
      );
    case 'scroll':
      return (
        <ScrollView
          style={[{ backgroundColor: theme.background }, style]}
          {...(props as React.ComponentPropsWithoutRef<typeof ScrollView>)}
        />
      );
    case 'safeArea':
      return (
        <SafeAreaView
          style={[
            { backgroundColor: theme.background },
            styles.container,
            style,
          ]}
          {...(props as React.ComponentPropsWithoutRef<typeof SafeAreaView>)}
        />
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default View;
