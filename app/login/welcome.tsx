import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
// eslint-disable-next-line react/function-component-definition
export default function Welcome() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/quotes/');
  };
  return (
    <View style={style.container}>
      <Text style={style.t1}>Welcome to the app</Text>
      <ButtonQ mode="contained" onPress={handlePress} style={style.button} text="Start Quiz" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  t1: {
    fontSize: 35,
    color: 'white',
  },
  button:{
    flex: 1,
    maxHeight: 40,
    height: 15,
    width: '50%',
    maxWidth: 300,
  }
});
