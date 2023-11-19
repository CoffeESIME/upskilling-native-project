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
      <Text style={style.t1}> Welcome to the app </Text>
      <ButtonQ mode="contained" onPress={handlePress} text="Start Quiz" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  t1: {
    fontSize: 35,
  },
});
