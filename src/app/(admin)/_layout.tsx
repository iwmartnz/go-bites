import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { useTheme } from '@/hooks/useTheme';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme } = useTheme();

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
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
        }}
      />
      <Tabs.Screen
        name='two'
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name='list' color={color} />,
        }}
      />
      <Tabs.Screen name='index' options={{ href: null }} />
    </Tabs>
  );
}
