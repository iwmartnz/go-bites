import { useAuth } from '@/context/auth';
import { useTheme } from '@/hooks/useTheme';
import { Redirect, Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  const { theme } = useTheme();
  const { session } = useAuth();

  if (session?.user) {
    return <Redirect href={'/'} />;
  }
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
