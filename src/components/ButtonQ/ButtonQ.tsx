import { Button } from 'react-native-paper';
import { ButtonQProps } from './ButtonQ.type';
import { StyleSheet } from 'react-native';
export const ButtonQ: React.FC<ButtonQProps> = ({
  children,
  onPress,
  mode = 'contained',
  style,
  disabled = false,
}) => {
  return (
    <Button
      disabled={disabled}
      mode={mode}
      onPress={onPress}
      style={[styles.button, style]}
    >
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
  },
});
