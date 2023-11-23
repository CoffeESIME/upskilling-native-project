import { Slot } from 'expo-router';
import { useAppSelector } from '../../src/store';
import Welcome from './welcome';
import { HeaderQ } from '../../src/components/HeaderQ/HeaderQ';
import { View, StyleSheet } from 'react-native';
// eslint-disable-next-line react/function-component-definition
export default function LoginLayout() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  return !isLoggedIn ? (
    <Slot />
  ) : (
    <View style={style.container}>
      <HeaderQ />
      <Welcome />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
