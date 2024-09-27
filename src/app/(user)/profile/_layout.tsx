import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';

export default function ProfileLayout() {
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
