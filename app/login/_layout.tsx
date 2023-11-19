import { Slot } from 'expo-router';
import { useAppSelector } from '../../src/store';
import Welcome from './welcome';
import { HeaderQ } from '../../src/components/HeaderQ/HeaderQ';
// eslint-disable-next-line react/function-component-definition
export default function LoginLayout() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return !isLoggedIn ? (
    <Slot />
  ) : (
    <>
      <HeaderQ /> <Welcome />
    </>
  );
}
