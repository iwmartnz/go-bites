import { Alert, StyleSheet } from 'react-native';
import { Button, Input, Text, View } from '@/components/ui';
import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function SignUpPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerBackTitle: '',
          headerBackTitleVisible: false,
          title: ' Sign Up',
          headerShadowVisible: false,
        }}
      />
      <View variant='safeArea' style={styles.container}>
        <View style={styles.header}>
          <Text type='heading'>Create account</Text>

          <View style={styles.formField}>
            <Text type='label'>Name</Text>
            <Input size='lg' placeholder='John Doe' />
          </View>
          <View style={styles.formField}>
            <Text type='label'>Email</Text>
            <Input
              size='lg'
              placeholder='email@example.com'
              value={email}
              onChangeText={setEmail}
              autoCapitalize='none'
            />
          </View>
          <View style={styles.formField}>
            <Text type='label'>Password</Text>
            <Input
              size='lg'
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              autoCapitalize='none'
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            text={loading ? 'Creating account' : 'Register'}
            onPress={signUpWithEmail}
          />
          <Link href='/(auth)/sign-in' asChild>
            <Text style={styles.link}>
              Already have an account?{' '}
              <Text type='link' style={{ fontFamily: 'Satoshi-Black' }}>
                Sign in
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
