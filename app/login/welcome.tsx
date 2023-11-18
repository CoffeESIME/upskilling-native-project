import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
// eslint-disable-next-line react/function-component-definition
export default function Welcome() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/quotes/');
  };
  return (
    <View>
      <Text> Welcome to the app </Text>
      <ButtonQ mode="contained" onPress={handlePress} text="Start Quiz" />{' '}
    </View>
  );
}
