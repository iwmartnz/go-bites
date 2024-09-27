import { Redirect, Tabs } from 'expo-router';

import { useTheme } from '@/hooks/useTheme';
import { Home, Menu, Orders, User } from '@/components/icons';
import { useAuth } from '@/context/auth';

export default function TabLayout() {
  const { theme } = useTheme();
  const { session } = useAuth();

  if (!session) {
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
        tabBarLabelStyle: { fontFamily: 'Satoshi-Bold' },
      }}
    >
      <Tabs.Screen
        name='menu'
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, focused }) => (
            <Home color={color} variant={focused ? 'filled' : 'outline'} />
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
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <User color={color} variant={focused ? 'filled' : 'outline'} />
          ),
        }}
      />
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  );
}
