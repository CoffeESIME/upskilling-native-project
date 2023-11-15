import {
  DarkTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { SplashScreen, Stack } from 'expo-router';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// eslint-disable-next-line react/function-component-definition
export default function RootLayout() {

  return (
    <ThemeProvider value={ DarkTheme}>
      <Stack>
        <Stack.Screen name="(login)" options={{ headerShown: false, statusBarColor: 'black' }} />
      </Stack>
    </ThemeProvider>
  );
}
