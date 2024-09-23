import { useTheme } from '@/hooks/useTheme';
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  const { theme } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.tint,
        headerBackTitleStyle: { fontFamily: 'Satoshi-Medium' },
        headerTitleStyle: { fontFamily: 'Satoshi-Black' },
      }}
    />
  );
}
