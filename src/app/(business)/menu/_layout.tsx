import { Stack } from 'expo-router';

import { useTheme } from '@/hooks/useTheme';

export default function MenuLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.tint,
        headerLargeTitleShadowVisible: false,
        headerBackTitleStyle: { fontFamily: 'Satoshi-Medium' },
        headerTitleStyle: { fontFamily: 'Satoshi-Black' },
        headerLargeTitleStyle: { fontFamily: 'Satoshi-Black' },
      }}
    />
  );
}
