import { Button } from 'react-native-paper';
import { ButtonQProps } from './ButtonQ.type';

export const ButtonQ: React.FC<ButtonQProps> =  ({text, onPress, mode})=>{
    console.log('press')
    return <Button mode={mode} onPress={onPress}>
        {text}
    </Button>
}