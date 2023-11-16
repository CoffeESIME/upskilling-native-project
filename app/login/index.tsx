import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { CardQ } from '../../src/components/CardQ/CardQ';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { TextFieldQ } from '../../src/components/TextFieldQ/TextFieldQ';
// eslint-disable-next-line react/function-component-definition
export default function Login() {
  
  return (
    <View style={style.container}>
        <TextFieldQ  value='' label= 'Username' onChange={()=>console.log('pressed')} />
      <Text>This is the login </Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});
