import { Slot } from 'expo-router';
import { useAppSelector } from '../../src/store';
import Welcome from './welcome';
import { HeaderQ } from '../../src/components/HeaderQ/HeaderQ';
// eslint-disable-next-line react/function-component-definition
export default function LoginLayout() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log('value from index Login', isLoggedIn);
  return !isLoggedIn ? (
    <Slot />
  ) : (
    <>
      <HeaderQ /> <Welcome />
    </>
  );
  // return (

  //   <Stack>
  //       <Stack.Screen name="index" options={{ title: 'Login' }} />
  //     </Stack>
  // );
}
