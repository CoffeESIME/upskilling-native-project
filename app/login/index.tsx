import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { ControlledInputQ } from '../../src/components/ControlledInputQ/ControlledInputQ';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { UserInfoSchema, UserInfo } from '../../src/schemas/user.schema';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { useAppDispatch } from '../../src/store';
import { authActions } from '../../src/store/slices/auth-slice';
import { useAppSelector } from '../../src/store';
// eslint-disable-next-line react/function-component-definition
export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserInfo>({
    resolver: zodResolver(UserInfoSchema),
  });

  const value = useAppSelector(state => state.auth.isLoggedIn)

  const dispatch = useAppDispatch()
  console.log('the value logging',value)
  const onSubmit = () => {
    dispatch( authActions.login())
  }
  console.log(errors)
  return (
    <View style={style.container}>
      <ControlledInputQ
        control={control}
        label="Username"
        name="username"
        placeholder="Username"
      />
      <ControlledInputQ
        control={control}
        label="Username"
        name="password"
        placeholder="Username"
      />
      <Text>This is the login </Text>
      <ButtonQ
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        text="Submit"
      />
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
