import Logo from '@/components/logo';
import { Button, Input, Text, View } from '@/components/ui';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function SignInPage() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View type='safeArea' style={styles.container}>
        <View style={styles.header}>
          <Logo />
          <Text type='heading'>Login</Text>

          <View style={styles.formField}>
            <Text type='label'>Email</Text>
            <Input size='lg' placeholder='email@example.com' />
          </View>
          <View style={styles.formField}>
            <Text type='label'>Password</Text>
            <Input size='lg' secureTextEntry />
          </View>
        </View>
        <View style={styles.footer}>
          <Button text='Sign In' />
          <Link href='/(auth)/signup' asChild>
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
