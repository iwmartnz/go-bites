import FontAwesome from '@expo/vector-icons/FontAwesome';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { CartProvider } from '@/context/cart-context';
import { useTheme } from '@/hooks/useTheme';
import AuthProvider from '@/context/auth';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Quantify: require('../../assets/fonts/Quantify.ttf'),
    'Satoshi-Regular': require('../../assets/fonts/Satoshi-Regular.otf'),
    'Satoshi-Medium': require('../../assets/fonts/Satoshi-Medium.otf'),
    'Satoshi-Bold': require('../../assets/fonts/Satoshi-Bold.otf'),
    'Satoshi-Black': require('../../assets/fonts/Satoshi-Black.otf'),
    ...FontAwesome.font,
  });
  const { colorScheme, theme } = useTheme();

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <CartProvider>
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: theme.background },
            }}
          >
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            <Stack.Screen name='(admin)' options={{ headerShown: false }} />
            <Stack.Screen name='(user)' options={{ headerShown: false }} />
            <Stack.Screen
              name='cart'
              options={{
                presentation: 'modal',
                title: 'Cart',
                headerShadowVisible: false,
                headerTitleStyle: { fontFamily: 'Satoshi-Black' },
              }}
            />
          </Stack>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
