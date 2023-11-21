import { useAppDispatch } from '../../store';
import { authActions } from '../../store/features/auth-slice';
import { Appbar, Menu } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
export const HeaderQ = () => {
  const [visible, setInvisible] = useState<boolean>(false);
  const openMenu = () => setInvisible(true);
  const closeMenu = () => setInvisible(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogOut = () => {
    dispatch(authActions.logout());
    router.push('/login/');
  };
  return (
    <Appbar
      style={{
        backgroundColor: 'black',
        flex: 1,
        maxHeight: 50,
        flexDirection: 'row-reverse',
      }}
    >
      <Menu
        anchor={
          <Appbar.Action icon="menu" iconColor="white" onPress={openMenu} />
        }
        onDismiss={closeMenu}
        visible={visible}
      >
        <Menu.Item onPress={handleLogOut} title="Logout" />
      </Menu>
      <View>
        <Text style={{ color: 'white' }}>Menu</Text>
      </View>
    </Appbar>
  );
};
