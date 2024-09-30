import { Text, View } from '@/components/ui';
import { Link, Stack } from 'expo-router';
import React from 'react';

export default function SettingPage() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Settings',
          headerLargeTitle: true,
          headerLargeTitleStyle: { fontFamily: 'Satoshi-Black' },
          headerSearchBarOptions: {
            autoCapitalize: 'none',
            barTintColor: '#fff',
          },
        }}
      />
      <View variant='scroll' contentInsetAdjustmentBehavior='automatic'>
        <Link href={'/(user)/menu'}>Switch to Customer account</Link>
      </View>
    </>
  );
}
