import { Controller } from 'react-hook-form';
import { HelperText, TextInput } from 'react-native-paper';
import { ControllerInputQProps } from './ControlledInputQ.type';
import { View } from 'react-native';

export const ControlledInputQ: React.FC<ControllerInputQProps> = ({
  control,
  name,
  ...textInputProps
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error, invalid },
      }) => (
        <View style={{width: "100%", maxWidth: 300}}>
          <TextInput
            {...textInputProps}
            onBlur={onBlur}
            onChangeText={onChange}
            style={{}}
            value={value}
          />
          <HelperText type="error" visible={invalid}>
            {error?.message}
          </HelperText>
        </View>
      )}
      
    />
  );
};
