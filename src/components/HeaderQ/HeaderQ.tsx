import { useAppDispatch } from '../../store';
import { authActions } from '../../store/features/auth-slice';
import { Appbar, Menu } from 'react-native-paper';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { Platform } from 'react-native';
export const HeaderQ: React.FC = () => {
  const [visible, setInvisible] = useState<boolean>(false);
  const [menuFired, setMenuFired] = useState<number>(0);

  const openMenu = () => {
    setInvisible(true);
    setMenuFired(Date.now());
  };
  const closeMenu = () => {
    if (Date.now() - menuFired > 400) setInvisible(false);
  };
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
        anchorPosition={Platform.OS == 'android' ? undefined : 'bottom'}
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
