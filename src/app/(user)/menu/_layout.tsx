import { Link, Stack } from 'expo-router';

import { useTheme } from '@/hooks/useTheme';
import { Pressable } from 'react-native';
import { Cart } from '@/components/icons';

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
        headerRight: () => (
          <Link href='/cart' asChild>
            <Pressable>
              {({ pressed }) => <Cart variant='outline' color={theme.tint} />}
            </Pressable>
          </Link>
        ),
      }}
    />
  );
}
