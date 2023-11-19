import { BasePropsQ } from '../../../utils/generalTypes';
import { StyleProp, ViewStyle } from 'react-native';
export type ButtonQProps = BasePropsQ & {
  text: string;
  onPress: () => void;
  mode?: 'outlined' | 'contained' | 'elevated';
  style?: StyleProp<ViewStyle>;
};
