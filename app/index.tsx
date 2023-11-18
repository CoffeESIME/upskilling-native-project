import { Text } from 'react-native-paper';
import { View } from 'react-native';
import { useAppSelector } from '../src/store';
import { useRouter } from 'expo-router';
import { ButtonQ } from '../src/components/ButtonQ/ButtonQ';
import React from 'react';
// eslint-disable-next-line react/function-component-definition
export default function index() {
    const router = useRouter()
    // const handlePress = (event: GestureResponderEvent)=>{
    //     console.log( event.type)
    // }
    const handlePress = ()=>{
        router.push('/login/')
    }
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    console.log('its oke ',isLoggedIn)
    return (
        <View >
            <Text>This is the index </Text>
            <ButtonQ mode='contained' onPress={handlePress} text='Navigate' />
        </View>
    );
}