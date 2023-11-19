import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useAppSelector } from '../src/store';
import { useRouter } from 'expo-router';
import { ButtonQ } from '../src/components/ButtonQ/ButtonQ';
import React from 'react';
// eslint-disable-next-line react/function-component-definition
export default function index() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/login/');
  };
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log('its oke ', isLoggedIn);
  return (
    <View style={style.container}>
      <Text style={style.t1}>QuizMaster</Text>
      <Text style={style.t2}>Your Gateway to Endless Learning and Fun!</Text>
      <ButtonQ mode="contained" onPress={handlePress} text="Get Started" />
    </View>
  );
}

const style = StyleSheet.create({
  t1: {
    flex: 1,
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
  },
  t2: { flex: 1, fontSize: 25, textAlign: 'center', color: 'white' },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
