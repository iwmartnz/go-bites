import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

import Logo from '@/components/logo';
import { Button, Input, Text, View } from '@/components/ui';

import { supabase } from '@/lib/supabase';

export default function SignInPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function signIn() {
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert(error.message);
    }
    console.log(data);
    setLoading(false);
  }
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View variant='safeArea' style={styles.container}>
        <View style={styles.header}>
          <Logo />
          <Text type='heading'>Login</Text>

          <View style={styles.formField}>
            <Text type='label'>Email</Text>
            <Input
              size='lg'
              placeholder='email@example.com'
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.formField}>
            <Text type='label'>Password</Text>
            <Input
              size='lg'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button text={loading ? 'Loading' : 'Sign In'} onPress={signIn} />
          <Link href='/(auth)/sign-up' asChild>
            <Text style={styles.link}>
              Don't have an account?{' '}
              <Text type='link' style={{ fontFamily: 'Satoshi-Black' }}>
                Sign up
              </Text>
            </Text>
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  header: {
    paddingTop: 90,
    gap: 15,
  },
  formField: { gap: 8 },
  link: {
    alignSelf: 'center',
  },
  footer: {
    gap: 15,
  },
});
