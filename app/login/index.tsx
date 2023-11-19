import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { ControlledInputQ } from '../../src/components/ControlledInputQ/ControlledInputQ';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { UserInfoSchema, UserInfo } from '../../src/schemas/user.schema';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { useAppDispatch } from '../../src/store';
import { authActions } from '../../src/store/features/auth-slice';
import { useRouter } from 'expo-router';
// eslint-disable-next-line react/function-component-definition
export default function Login() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserInfo>({
    resolver: zodResolver(UserInfoSchema),
  });
  const router = useRouter();
  const dispatch = useAppDispatch();
  const onSubmit = () => {
    dispatch(authActions.login());
  };
  const onCancel = () => {
    router.push('/');
  };
  console.log(errors);
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
        label="Password"
        name="password"
        placeholder="Username"
      />
      <ButtonQ
        mode="contained"
        onPress={handleSubmit(onSubmit)}
        text="Submit"
      />
      <ButtonQ mode="outlined" onPress={onCancel} text="Cancel" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
