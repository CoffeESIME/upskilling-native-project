import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store';
import { PaperProvider } from 'react-native-paper';
// eslint-disable-next-line react/function-component-definition
export default function Layout() {
  return (
    <Provider store={store}>
      <PaperProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, statusBarColor: 'black' }}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false, statusBarColor: 'black' }}
        />
        <Stack.Screen
          name="quotes"
          options={{ headerShown: false, statusBarColor: 'black' }}
        />
      </Stack>
      </PaperProvider>
    </Provider>
  );
}
