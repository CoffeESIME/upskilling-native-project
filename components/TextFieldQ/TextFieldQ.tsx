import { TextFieldQProps } from "./TextFieldQ.type";
import { TextInput} from 'react-native-paper'

export const TextFieldQ: React.FC<TextFieldQProps> =({onChange, value, label})=>{
    const handleOnChange = (event ) =>{
        //onChange(event);
        console.log(event);
    }
    return <TextInput 
    label={label}
    value={value}
    onChangeText={text => handleOnChange(text)}
    />
} 