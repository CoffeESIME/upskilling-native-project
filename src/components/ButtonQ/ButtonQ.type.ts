import { ReactNode } from 'react';
import { BasePropsQ } from '../../../utils/generalTypes';
import { StyleProp, ViewStyle } from 'react-native';
export type ButtonQProps = BasePropsQ & {
  onPress: () => void;
  mode?: 'outlined' | 'contained' | 'elevated';
  style?: StyleProp<ViewStyle>;
  children?: ReactNode
};
