import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { View, Text, Button } from '@/components/ui';
import { useAuth } from '@/context/auth';
import { supabase } from '@/lib/supabase';

export default function ProfilePage() {
  const { session } = useAuth();

  return (
    <>
      <Stack.Screen options={{ title: 'Profile', headerLargeTitle: true }} />
      <View
        variant='scroll'
        style={styles.container}
        contentInsetAdjustmentBehavior='automatic'
      >
        <Text>User ID: {session?.user.id}</Text>
        <Text>Test</Text>
        <Button text='Sign out' onPress={() => supabase.auth.signOut()} />
        <Link href={'/(business)/menu'}>Switch to Business Account</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
