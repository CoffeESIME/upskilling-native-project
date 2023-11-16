import { Stack } from 'expo-router';

// eslint-disable-next-line react/function-component-definition
export default function RootLayout() {
  return (
    
    <Stack>
        <Stack.Screen name="index" options={{ title: 'Login' }} />
      </Stack>
  );
}
