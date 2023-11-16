import { TextFieldQProps } from "./TextFieldQ.type";
import { TextInput} from 'react-native-paper'

export const TextFieldQ: React.FC<TextFieldQProps> =({onChange, value, label})=>{
    const handleOnChange = (event: string ) =>{
        //onChange(event);
        console.log(event);
    }
    return <TextInput 
    label={label}
    onChangeText={text => handleOnChange(text)}
    value={value}
    />
} 