import { StyleSheet } from 'react-native';
import { Button, Input, Text, View } from '@/components/ui';
import { Link, Stack } from 'expo-router';

export default function SignUpPage() {
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
      <View type='safeArea' style={styles.container}>
        <View style={styles.header}>
          <Text type='heading'>Create account</Text>

          <View style={styles.formField}>
            <Text type='label'>Name</Text>
            <Input size='lg' placeholder='John Doe' />
          </View>
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
          <Button text='Register' />
          <Link href='/(auth)/' asChild>
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
