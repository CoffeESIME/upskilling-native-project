import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/store';
import { PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
// eslint-disable-next-line react/function-component-definition
export default function Layout() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
            <Stack.Screen
              name="review"
              options={{ headerShown: false, statusBarColor: 'black' }}
            />
          </Stack>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
