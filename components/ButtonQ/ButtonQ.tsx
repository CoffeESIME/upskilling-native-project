import { Button } from 'react-native-paper';
import { ButtonQProps } from './ButtonQ.type';
export const ButtonQ: React.FC<ButtonQProps> =  ({text, onPress})=>{
    return <Button onPress={onPress}>
        {text}
    </Button>
}