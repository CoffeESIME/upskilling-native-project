import { Stack } from 'expo-router';
import { HeaderQ } from '../../src/components/HeaderQ/HeaderQ';
// eslint-disable-next-line react/function-component-definition
export default function QuotesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Login second', header: ()=> <HeaderQ/>  }} />
    </Stack>
  );
}
