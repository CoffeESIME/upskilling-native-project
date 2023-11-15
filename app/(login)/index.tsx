import { Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { ButtonQ } from '../../components/ButtonQ/ButtonQ';
// eslint-disable-next-line react/function-component-definition
export default function Login() {
    return (
        <View style={style.container}>
            <Text>This is the login </Text>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
});
