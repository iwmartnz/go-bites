import { Link, Stack } from 'expo-router';

import { useTheme } from '@/hooks/useTheme';
import { Pressable } from 'react-native';
import { Cart, PlusSquare } from '@/components/icons';

export default function MenuLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.adminTint,
        headerLargeTitleShadowVisible: false,
      }}
    />
  );
}
