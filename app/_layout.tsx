import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import { store } from '../src/store';
// eslint-disable-next-line react/function-component-definition
export default function Layout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="login"
          options={{ headerShown: false, statusBarColor: 'black' }}
        />
      </Stack>
    </Provider>
  );
}
