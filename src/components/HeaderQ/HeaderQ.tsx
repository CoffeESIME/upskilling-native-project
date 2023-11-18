import { ButtonQ } from '../ButtonQ/ButtonQ';
import { useAppDispatch } from '../../store';
import { authActions } from '../../store/slices/auth-slice';
import { Appbar, Menu } from 'react-native-paper';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { useAppSelector } from '../../store';
export const HeaderQ = ()=>{
    const [visible, setInvisible] = useState<boolean>(false)
    const openMenu = ()=> setInvisible(true)
    const closeMenu = ()=> setInvisible(false)
    const dispatch = useAppDispatch();
    const router = useRouter()
    const valueLogged = useAppSelector(state => state.auth.isLoggedIn)
    console.log(valueLogged)
    const handleLogOut = () => {
        console.log("executed")
      dispatch(authActions.logout());
      router.push('/login/')
    };
    return (
        <ButtonQ mode="contained" onPress={ handleLogOut} text="LogOut" />
      );
}
