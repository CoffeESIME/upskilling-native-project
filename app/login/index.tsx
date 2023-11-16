import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { CardQ } from '../../src/components/CardQ/CardQ';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { ControlledInputQ } from '../../src/components/ControlledInputQ/ControlledInputQ';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { UserInfoSchema, UserInfo } from '../../src/schemas/user.schema';
// eslint-disable-next-line react/function-component-definition
export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserInfo>({
    resolver: zodResolver(UserInfoSchema),
  });
  return (
    <View style={style.container}>
      <ControlledInputQ control={control} name='Username' />
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
