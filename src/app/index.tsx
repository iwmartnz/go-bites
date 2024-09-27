import React from 'react';
import { Link, Redirect } from 'expo-router';
import { Button, View } from '@/components/ui';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/auth';
import { ActivityIndicator } from 'react-native';

export default function HomePage() {
  const { session, profile, loading } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!session) {
    return <Redirect href={'/(auth)/sign-in'} />;
  }

  if (profile?.group === 'admin') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 10 }}>
        <Link href={'/(user)'} asChild>
          <Button text='User' />
        </Link>
        <Link href={'/(business)/'} asChild>
          <Button text='Business' />
        </Link>
      </View>
    );
  }

  return <Redirect href='/(user)' />;
}
