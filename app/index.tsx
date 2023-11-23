import { Text } from 'react-native-paper';
import { Image, View, StyleSheet, Platform } from 'react-native';
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
      <View style={style.containerText}>
        <Text style={style.t1}>QuizMaster</Text>
        <Text style={style.t2}>Your Gateway to Endless Learning and Fun!</Text>
      </View>
      <View style={{ alignContent: 'center', justifyContent: 'center' }}>
        <Image
          source={require('../assets/images/QuizIcon.png')}
          style={style.image}
        />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          ...Platform.select({
            android: {
              flex: 1,
            },
          }),
        }}
      >
        <ButtonQ mode="contained" onPress={handlePress} style={style.button}>
          <Text>Get Started</Text>
        </ButtonQ>
      </View>
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
    ...Platform.select({
      android: {
        flex: 1,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        backgroundColor: 'black',
        alignItems: 'stretch',
        gap: 15,
      },
      default: {
        backgroundColor: 'gray',
        alignItems: 'stretch',
        gap: 15,
      },
    }),
  },
  image: {
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: 30,
    ...Platform.select({
      android: {
        flex: 0,
      },
    }),
  },
  button: {
    ...Platform.select({
      android: { flex: 0 },
      default: {
        flex: 0,
        minHeight: 35,
      },
    }),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
