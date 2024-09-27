import { Redirect, Tabs } from 'expo-router';

import { useTheme } from '@/hooks/useTheme';
import { Menu, Orders } from '@/components/icons';
import { useAuth } from '@/context/auth';

export default function TabLayout() {
  const { theme } = useTheme();
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    return <Redirect href={'/'} />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
        headerStyle: { backgroundColor: theme.background },
        tabBarStyle: {
          backgroundColor: theme.background,
          borderBlockColor: theme.background,
        },
      }}
    >
      <Tabs.Screen
        name='menu'
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Menu color={color} variant={focused ? 'filled' : 'outline'} />
          ),
        }}
      />
      <Tabs.Screen
        name='orders'
        options={{
          title: 'Orders',
          tabBarIcon: ({ color, focused }) => (
            <Orders color={color} variant={focused ? 'filled' : 'outline'} />
          ),
        }}
      />
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  );
}
