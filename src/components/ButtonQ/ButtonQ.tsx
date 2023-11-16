import { Button } from 'react-native-paper';
import { ButtonQProps } from './ButtonQ.type';

export const ButtonQ: React.FC<ButtonQProps> =  ({text, onPress, mode})=>{
    return <Button onPress={onPress} mode={mode}>
        {text}
    </Button>
}