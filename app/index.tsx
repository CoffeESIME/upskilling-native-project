import { Text } from 'react-native-paper';
import { Image, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ButtonQ } from '../src/components/ButtonQ/ButtonQ';
import React from 'react';
// eslint-disable-next-line react/function-component-definition
export default function index() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/login/');
  };
  return (
    <View style={style.container}>
      <View>
        <Text style={style.t1}>QuizMaster</Text>
        <Text style={style.t2}>Your Gateway to Endless Learning and Fun!</Text>
      </View>
      <Image
        source={require('../assets/images/QuizIcon.png')}
        style={style.image}
      />
      <ButtonQ mode="contained" onPress={handlePress} style={style.button}>
        Get Started
      </ButtonQ>
    </View>
  );
}

const style = StyleSheet.create({
  t1: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    margin: 20,
  },
  t2: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
    margin: 15,
  },
  containerText: {
    flex: 3,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    gap: 15,
  },
  image: {
    flex: 2,
    width: '100%',
    maxWidth: 800,
    alignSelf: 'center',
    margin: 60,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
    maxHeight: 45,
    width: '50%',
    maxWidth: 300,
  },
});
