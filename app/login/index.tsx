import { View, StyleSheet } from 'react-native';
import { ControlledInputQ } from '../../src/components/ControlledInputQ/ControlledInputQ';
import { zodResolver } from '@hookform/resolvers/zod';
import { Control, useForm } from 'react-hook-form';
import { UserInfoSchema, UserInfo } from '../../src/schemas/user.schema';
import { ButtonQ } from '../../src/components/ButtonQ/ButtonQ';
import { useAppDispatch, useAppSelector } from '../../src/store';
import { authActions } from '../../src/store/features/auth-slice';
import { useRouter } from 'expo-router';
interface LoginData {
  username: string;
  password: string;
}
// eslint-disable-next-line react/function-component-definition
export default function Login() {
  const { handleSubmit, control, setError } = useForm<UserInfo>({
    resolver: zodResolver(UserInfoSchema),
    defaultValues: {
      password: '',
      username: '',
    },
  });
  const { defaultPassword, defaultUser } = useAppSelector(
    (state) => state.auth
  );
  const router = useRouter();
  const dispatch = useAppDispatch();
  const onSubmit = ({ username, password }: LoginData) => {
    if (username == defaultUser && password == defaultPassword) {
      dispatch(authActions.login());
    }
    setError('username', {
      type: 'validate',
      message: 'Invalid username or password',
    });
    setError('password', {
      type: 'validate',
      message: 'Invalid username or password',
    });
  };
  const onCancel = () => {
    router.push('/');
  };
  return (
    <View style={style.container}>
      <ControlledInputQ
        control={control as unknown as Control}
        label="Username"
        name="username"
        placeholder="Username"
      />
      <ControlledInputQ
        control={control as unknown as Control}
        label="Password"
        name="password"
        placeholder="Username"
      />
      <ButtonQ onPress={handleSubmit(onSubmit)} style={style.button}>
        Submit
      </ButtonQ>
      <ButtonQ mode="outlined" onPress={onCancel} style={style.button}>
        Cancel
      </ButtonQ>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: 'black',
  },
  button: {
    maxHeight: 40,
    alignContent: 'stretch',
    alignSelf: 'auto',
    justifyContent: 'flex-start',
    maxWidth: 300,
    width: '100%',
  },
});
