import { Control } from 'react-hook-form';
import { TextInput } from 'react-native-paper';

export type ControllerInputQProps = {
  control: Control;
  name: string;
} & React.ComponentProps<typeof TextInput>;